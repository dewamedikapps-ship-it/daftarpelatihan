// Cari identifier yang dipakai tapi tidak pernah dideklarasikan di mana pun
// dalam rantai scope-nya. Menangkap bug seperti "daring is not defined" yang
// lolos dari `node --check`.
const fs = require("fs");
const acorn = require("acorn");

const berkas = process.argv[2];
const src = fs.readFileSync(berkas, "utf-8");
const ast = acorn.parse(src, { ecmaVersion: 2022, locations: true });

const GLOBAL = new Set([
  "window","document","navigator","location","console","Math","JSON","Object","Array","String","Number",
  "Boolean","Date","RegExp","Error","Promise","Map","Set","WeakMap","WeakSet","Symbol","Proxy","Reflect",
  "parseInt","parseFloat","isNaN","isFinite","encodeURIComponent","decodeURIComponent","encodeURI","decodeURI",
  "setTimeout","clearTimeout","setInterval","clearInterval","requestAnimationFrame","fetch","URL","URLSearchParams",
  "Blob","File","FileReader","FormData","Headers","Request","Response","TextEncoder","TextDecoder","AbortController",
  "localStorage","sessionStorage","crypto","atob","btoa","alert","confirm","prompt","Intl","globalThis","undefined",
  "NaN","Infinity","React","ReactDOM","XLSX","Image","Event","CustomEvent","DataTransfer","MutationObserver",
  "IntersectionObserver","ResizeObserver","performance","structuredClone","queueMicrotask","Uint8Array","ArrayBuffer",
  "DecompressionStream","CompressionStream","HTMLElement","Node","getComputedStyle","matchMedia","history","screen",
  "arguments","this","super","Function","BigInt","Audio","AudioContext","SpeechSynthesisUtterance","speechSynthesis",
  // global bawaan browser dan pustaka yang dimuat index.html
  "DOMParser","XMLSerializer","supabase","html2canvas","jspdf"
]);

let id = 0;
function buatScope(induk, jenis) {
  return { id: id++, induk, jenis, nama: new Set(), pakai: [] };
}
const akar = buatScope(null, "global");
const semua = [akar];

function deklarasiPola(pola, scope) {
  if (!pola) return;
  switch (pola.type) {
    case "Identifier": scope.nama.add(pola.name); break;
    case "ObjectPattern": pola.properties.forEach(p => deklarasiPola(p.value || p.argument, scope)); break;
    case "ArrayPattern": pola.elements.forEach(e => deklarasiPola(e, scope)); break;
    case "AssignmentPattern": deklarasiPola(pola.left, scope); break;
    case "RestElement": deklarasiPola(pola.argument, scope); break;
  }
}

function telusuri(node, scope, induknya) {
  if (!node || typeof node.type !== "string") return;
  let s = scope;

  if (node.type === "FunctionDeclaration" || node.type === "FunctionExpression" || node.type === "ArrowFunctionExpression") {
    if (node.type === "FunctionDeclaration" && node.id) scope.nama.add(node.id.name);
    s = buatScope(scope, "fungsi"); semua.push(s);
    if (node.id) s.nama.add(node.id.name);
    node.params.forEach(p => deklarasiPola(p, s));
  } else if (node.type === "BlockStatement" || node.type === "ForStatement" || node.type === "ForOfStatement" ||
             node.type === "ForInStatement" || node.type === "SwitchStatement") {
    s = buatScope(scope, "blok"); semua.push(s);
  } else if (node.type === "CatchClause") {
    s = buatScope(scope, "blok"); semua.push(s);
    deklarasiPola(node.param, s);
  } else if (node.type === "ClassDeclaration" && node.id) {
    scope.nama.add(node.id.name);
  }

  if (node.type === "VariableDeclaration") {
    node.declarations.forEach(d => deklarasiPola(d.id, node.kind === "var" ? fungsiTerdekat(s) : s));
  }

  if (node.type === "Identifier" && induknya) {
    const p = induknya.node, kunci = induknya.kunci;
    const dipakai =
      !(p.type === "MemberExpression" && kunci === "property" && !p.computed) &&
      !(p.type === "Property" && kunci === "key" && !p.computed) &&
      !(p.type === "MethodDefinition" && kunci === "key" && !p.computed) &&
      !(p.type === "VariableDeclarator" && kunci === "id") &&
      !(p.type === "FunctionDeclaration") && !(p.type === "FunctionExpression") &&
      !(p.type === "ArrowFunctionExpression") && !(p.type === "ClassDeclaration") &&
      !(p.type === "Property" && kunci === "value" && p.shorthand === true && false) &&
      !(p.type === "LabeledStatement") && !(p.type === "BreakStatement") && !(p.type === "ContinueStatement");
    if (dipakai) s.pakai.push({ nama: node.name, baris: node.loc.start.line });
  }

  for (const kunci of Object.keys(node)) {
    if (kunci === "loc" || kunci === "start" || kunci === "end" || kunci === "type") continue;
    const v = node[kunci];
    if (Array.isArray(v)) v.forEach(x => x && typeof x.type === "string" && telusuri(x, s, { node, kunci }));
    else if (v && typeof v.type === "string") telusuri(v, s, { node, kunci });
  }
}
function fungsiTerdekat(s) { while (s.induk && s.jenis === "blok") s = s.induk; return s; }

telusuri(ast, akar, null);

// Kumpulkan semua nama yang pernah dideklarasikan di mana pun pada rantai induk
function terlihat(scope, nama) {
  for (let s = scope; s; s = s.induk) if (s.nama.has(nama)) return true;
  return false;
}

const hilang = new Map();
for (const s of semua) {
  for (const u of s.pakai) {
    if (GLOBAL.has(u.nama)) continue;
    if (terlihat(s, u.nama)) continue;
    if (!hilang.has(u.nama)) hilang.set(u.nama, []);
    hilang.get(u.nama).push(u.baris);
  }
}

if (!hilang.size) { console.log("Bersih: tidak ada identifier yang tidak dideklarasikan."); process.exit(0); }
console.log("Identifier tidak dideklarasikan:");
[...hilang.entries()].sort().forEach(([n, baris]) =>
  console.log("  " + n + "  -> baris " + baris.slice(0, 8).join(", ") + (baris.length > 8 ? " (+" + (baris.length - 8) + ")" : "")));
process.exit(1);
