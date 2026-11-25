/* Uji penanda status KAK DCC di tab Jadwal (daftar kelas).
 *
 * Jalankan dari folder repo:   node cek-kak.js
 *
 * Penanda ini yang dipakai Ryan untuk tahu kelas mana yang KAK-nya belum
 * dibuat di DCC (terlewat) dan kelas mana yang KAK-nya kembar (double).
 * Kalau logikanya meleset, akibatnya KAK dobel atau kelas tayang tanpa KAK,
 * jadi fungsinya dipotong langsung dari app.js dan diuji apa adanya.
 */
"use strict";
const fs = require("fs");
const src = fs.readFileSync(require("path").join(__dirname, "app.js"), "utf-8");

const A = "  function normJenisJ(t) {";
const B = "  const RUPA_KAK = {";
if (src.indexOf(A) < 0 || src.indexOf(B) < 0) { console.error("penanda tidak ketemu"); process.exit(2); }
const blok = src.slice(src.indexOf(A), src.indexOf(B));

function buat(kakDcc, kakPilihJ) {
  const kotaKelas = k => (k && k.kota) || "";
  return new Function("kakDcc", "kakPilihJ", "kotaKelas",
    blok + "\nreturn kakKelas;")(kakDcc, kakPilihJ, kotaKelas);
}

const T = (n, nama) => Array.from({length:n},(_,i)=>({nama:(nama||"Pelatih ")+(i+1),materi:["M"+i]}));
const KAK = [
  { dcc_event_id:"e-acls-smg", jenis:"ACLS", mulai:"2026-12-08", kota:"Semarang", judul:"ACLS PERAWAT SEMARANG", trainer:T(5) },
  { dcc_event_id:"e-btcls-clg", jenis:"BTCLS", mulai:"2026-12-08", kota:"Cilegon", judul:"BTCLS Cilegon", trainer:T(5) },
  { dcc_event_id:"e-acls-tng-a", jenis:"ACLS", mulai:"2026-12-15", kota:"Tangerang", judul:"ACLS FN Tangerang", trainer:T(5) },
  { dcc_event_id:"e-acls-tng-b", jenis:"ACLS", mulai:"2026-12-15", kota:"Tangerang", judul:"ACLS TANGERANG", trainer:T(1) },
  { dcc_event_id:"e-btcls-yk",  jenis:"BTCLS", mulai:"2026-12-15", kota:"Yogyakarta", judul:"BTCLS Yogyakarta", trainer:T(4) },
  { dcc_event_id:"kurikulum:BTCLS", jenis:"BTCLS", mulai:null, kota:null, judul:"Kurikulum", trainer:[{nama:"-",materi:["a","b"]}] },
  { dcc_event_id:"e-kosong", jenis:"PKID", mulai:"2026-12-08", kota:"Tangerang", judul:"PKID tanpa trainer", trainer:[] }
];

const KASUS = [
  ["ACLS Semarang 8 Des — cocok satu",            {id:"k1",jenis:"ACLS",kota:"Semarang",tanggal_mulai:"2026-12-08"}, {}, "ada"],
  ["BTCLS Cilegon 8 Des — cocok satu",            {id:"k2",jenis:"BTCLS",kota:"Cilegon",tanggal_mulai:"2026-12-08"}, {}, "ada"],
  ["BTCLS Des 1 (1 Des) — tidak ada di DCC",      {id:"k3",jenis:"BTCLS",kota:"Tangerang",tanggal_mulai:"2026-12-01"}, {}, "belum"],
  ["PKID 8 Des — KAK ada tapi trainer kosong",    {id:"k4",jenis:"PKID",kota:"Tangerang",tanggal_mulai:"2026-12-08"}, {}, "belum"],
  ["ACLS Tangerang 15 Des — DUA KAK, kota sama",  {id:"k5",jenis:"ACLS",kota:"Tangerang",tanggal_mulai:"2026-12-15"}, {}, "kembar"],
  ["ACLS Tangerang 15 Des — sudah dipilih",       {id:"k5",jenis:"ACLS",kota:"Tangerang",tanggal_mulai:"2026-12-15"}, {k5:"e-acls-tng-a"}, "pilih"],
  ["ACLS Tangerang 15 Des — pilihan sudah hilang",{id:"k5",jenis:"ACLS",kota:"Tangerang",tanggal_mulai:"2026-12-15"}, {k5:"e-sudah-dihapus"}, "hilang"],
  ["BTCLS Yogyakarta 15 Des — cocok satu",        {id:"k6",jenis:"BTCLS",kota:"Yogyakarta",tanggal_mulai:"2026-12-15"}, {}, "ada"],
  ["TOT BTCLS 15 Des — jenis beda, bukan BTCLS",  {id:"k7",jenis:"TOT BTCLS",kota:"Tangerang",tanggal_mulai:"2026-12-15"}, {}, "belum"],
  ["Kelas tanpa tanggal mulai",                   {id:"k8",jenis:"BTCLS",kota:"",tanggal_mulai:null}, {}, "tak"],
  ["Kurikulum tidak boleh dihitung sebagai KAK",  {id:"k9",jenis:"BTCLS",kota:"Bandung",tanggal_mulai:"2026-12-22"}, {}, "belum"],
  ["Kota 'Kota Semarang' tetap cocok",            {id:"k10",jenis:"ACLS",kota:"Kota Semarang",tanggal_mulai:"2026-12-08"}, {}, "ada"],
  ["Jenis 'acls' huruf kecil tetap cocok",        {id:"k11",jenis:"acls",kota:"Semarang",tanggal_mulai:"2026-12-08"}, {}, "ada"]
];

let gagal = 0;
for (const [nama, kelas, pilih, harap] of KASUS) {
  const st = buat(KAK, pilih)(kelas);
  const ok = st.kode === harap;
  if (!ok) gagal++;
  console.log((ok ? "  ok  " : "GAGAL ") + nama.padEnd(46) + " -> " + st.kode.padEnd(7) + (ok ? "" : " (harusnya " + harap + ")"));
  if (st.kode === "kembar" || st.kode === "hilang" || st.kode === "belum") console.log("        pesan: " + st.pesan);
}
console.log("\n" + (gagal ? gagal + " KASUS GAGAL" : "Semua " + KASUS.length + " kasus lulus."));
process.exit(gagal ? 1 : 0);
