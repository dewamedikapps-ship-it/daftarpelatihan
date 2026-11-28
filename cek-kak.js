/* Uji pencocokan KAK DCC dengan kelas portal.
 *
 * Jalankan dari folder repo:   node cek-kak.js
 *
 * Kenapa berkas ini ada, dua kejadian nyata:
 *
 * 24 Nov 2026 — di DCC ada DUA KAK ACLS dengan tanggal mulai sama, portal
 * diam saja dan hanya bilang "trainer belum ada".
 *
 * 26 Nov 2026 — "ACLS Cirebon" 15 Des memungut KAK "ACLS Tangerang" 15 Des.
 * Sebabnya aturan lama hanya memeriksa kota bila KAK yang cocok LEBIH DARI
 * SATU. Kalau di DCC cuma ada satu KAK ACLS pada tanggal itu, semua kelas
 * ACLS tanggal itu memungutnya, apa pun kotanya. Flyer Cirebon jadi memuat
 * nama narasumber Tangerang — melanggar SE 2692/2026 butir i40.
 *
 * Sejak itu pencocokannya satu fungsi saja, cocokkanKak(), dipakai tab Link
 * Kelas maupun tab Jadwal. Berkas ini mengujinya langsung dari app.js.
 */
"use strict";
const fs = require("fs");
const src = fs.readFileSync(require("path").join(__dirname, "app.js"), "utf-8");

const A = "function normJenisKak(t) {";
const B = "/* Kota pelaksanaan dalam huruf besar untuk flyer";
if (src.indexOf(A) < 0 || src.indexOf(B) < 0) {
  console.error("Penanda cocokkanKak tidak ketemu di app.js. Perbarui penanda di cek-kak.js.");
  process.exit(2);
}
const blok = src.slice(src.indexOf(A), src.indexOf(B));

/* kotaKelas asli bergantung pada tabel KOTA_DIKENAL; di sini cukup versi
   sederhana yang membaca kolom kota, lalu judul/lokasi apa adanya. */
const kotaKelas = k => String((k && k.kota) || "").trim();
const cocokkanKak = new Function("kotaKelas", blok + "\nreturn cocokkanKak;")(kotaKelas);

const T = (n, awalan) => Array.from({ length: n },
  (_, i) => ({ nama: (awalan || "Ns. Pelatih ") + (i + 1) + ", S.Kep", materi: ["Materi " + i] }));

/* ------------------------------------------------------------------
   Bagian 1 — aturan pencocokan
   ------------------------------------------------------------------ */
const KAK = [
  { dcc_event_id: "acls-tng",   jenis: "ACLS",  mulai: "2026-12-15", kota: "Tangerang", judul: "ACLS FN Tangerang", trainer: T(5) },
  { dcc_event_id: "acls-tng-2", jenis: "ACLS",  mulai: "2026-12-15", kota: "Tangerang", judul: "ACLS TANGERANG",    trainer: T(1) },
  { dcc_event_id: "btcls-clg",  jenis: "BTCLS", mulai: "2026-12-08", kota: "Cilegon",   judul: "BTCLS Cilegon",     trainer: T(5) },
  { dcc_event_id: "acls-smg",   jenis: "ACLS",  mulai: "2026-12-08", kota: "Semarang",  judul: "ACLS PERAWAT SEMARANG", trainer: T(5) },
  { dcc_event_id: "tot-nokota", jenis: "TOT BTCLS", mulai: "2026-12-15", kota: "",      judul: "TOT BTCLS",         trainer: T(3) },
  { dcc_event_id: "kurikulum:BTCLS", jenis: "BTCLS", mulai: null, kota: null, judul: "Kurikulum", trainer: [{ nama: "-", materi: ["a", "b"] }] },
  { dcc_event_id: "pkid-kosong", jenis: "PKID", mulai: "2026-12-08", kota: "Tangerang", judul: "PKID tanpa trainer", trainer: [] }
];

const KASUS = [
  // Inilah kejadian 26 Nov 2026 yang memicu perbaikan ini.
  ["ACLS Cirebon 15 Des TIDAK boleh memungut KAK Tangerang",
    { id: "a", jenis: "ACLS", kota: "Cirebon", tanggal_mulai: "2026-12-15" }, "bedakota", null],
  ["ACLS Bandung 15 Des juga tidak boleh",
    { id: "b", jenis: "ACLS", kota: "Bandung", tanggal_mulai: "2026-12-15" }, "bedakota", null],
  ["ACLS Tangerang 15 Des: dua KAK sama-sama sah -> kembar",
    { id: "c", jenis: "ACLS", kota: "Tangerang", tanggal_mulai: "2026-12-15" }, "kembar", null],
  ["ACLS Semarang 8 Des cocok tepat satu",
    { id: "d", jenis: "ACLS", kota: "Semarang", tanggal_mulai: "2026-12-08" }, "ada", "acls-smg"],
  ["BTCLS Cilegon 8 Des cocok tepat satu",
    { id: "e", jenis: "BTCLS", kota: "Cilegon", tanggal_mulai: "2026-12-08" }, "ada", "btcls-clg"],
  ["BTCLS 1 Des: tidak ada KAK tanggal itu",
    { id: "f", jenis: "BTCLS", kota: "Tangerang", tanggal_mulai: "2026-12-01" }, "belum", null],
  ["PKID 8 Des: KAK ada tapi trainernya kosong",
    { id: "g", jenis: "PKID", kota: "Tangerang", tanggal_mulai: "2026-12-08" }, "belum", null],
  ["KAK tanpa kota tetap boleh dipakai kelas mana pun",
    { id: "h", jenis: "TOT BTCLS", kota: "Cirebon", tanggal_mulai: "2026-12-15" }, "ada", "tot-nokota"],
  ["Kelas tanpa kota + dua KAK sejenis -> kembar, bukan tebak",
    { id: "i", jenis: "ACLS", kota: "", tanggal_mulai: "2026-12-15" }, "kembar", null],
  ["Kelas tanpa kota + satu KAK sejenis -> cocok",
    { id: "j", jenis: "ACLS", kota: "", tanggal_mulai: "2026-12-08" }, "ada", "acls-smg"],
  ["Kelas tanpa tanggal mulai",
    { id: "k", jenis: "ACLS", kota: "Cirebon", tanggal_mulai: null }, "tanpatgl", null],
  ["Baris kurikulum tidak pernah dianggap KAK",
    { id: "l", jenis: "BTCLS", kota: "Bandung", tanggal_mulai: "2026-12-22" }, "belum", null],
  ["'Kota Semarang' tetap sepadan dengan 'Semarang'",
    { id: "m", jenis: "ACLS", kota: "Kota Semarang", tanggal_mulai: "2026-12-08" }, "ada", "acls-smg"],
  ["Jenis huruf kecil 'acls' tetap cocok",
    { id: "n", jenis: "acls", kota: "Semarang", tanggal_mulai: "2026-12-08" }, "ada", "acls-smg"],
  ["Tanggal beda satu hari tidak dicocokkan",
    { id: "o", jenis: "ACLS", kota: "Semarang", tanggal_mulai: "2026-12-09" }, "belum", null]
];

let gagal = 0;
console.log("Pencocokan KAK DCC:");
for (const [nama, kelas, sebabHarap, pilihHarap] of KASUS) {
  const h = cocokkanKak(KAK, kelas);
  const pilih = h.pilih ? h.pilih.dcc_event_id : null;
  const ok = h.sebab === sebabHarap && pilih === pilihHarap;
  if (!ok) gagal++;
  console.log((ok ? "  ok  " : "GAGAL ") + nama.padEnd(56) + "-> " + h.sebab
    + (pilih ? " (" + pilih + ")" : ""));
  if (!ok) console.log(" ".repeat(62) + "harusnya " + sebabHarap + (pilihHarap ? " (" + pilihHarap + ")" : ""));
}

/* Tidak boleh ada dua kelas berbeda kota yang memungut KAK yang sama. */
const diambil = {};
let bentrok = 0;
for (const kota of ["Cirebon", "Bandung", "Tangerang", "Semarang", "Cilegon"]) {
  for (const tgl of ["2026-12-08", "2026-12-15"]) {
    for (const jenis of ["ACLS", "BTCLS"]) {
      const h = cocokkanKak(KAK, { id: kota + tgl + jenis, jenis, kota, tanggal_mulai: tgl });
      if (!h.pilih) continue;
      const kunci = h.pilih.dcc_event_id;
      if (diambil[kunci] && diambil[kunci] !== kota) {
        bentrok++;
        console.log("GAGAL KAK " + kunci + " (" + h.pilih.kota + ") dipungut dua kota: "
          + diambil[kunci] + " dan " + kota);
      }
      diambil[kunci] = kota;
    }
  }
}
if (!bentrok) console.log("  ok  Tidak ada KAK yang dipungut dua kelas beda kota");
gagal += bentrok;

/* ------------------------------------------------------------------
   Bagian 2 — isi dropdown "KAK dari DCC" di tab Link Kelas.

   25 Nov 2026 Ryan: "Bulan udah lewat kenapa masih bisa di pilih."
   Dropdown itu dulu memuat seluruh KAK, termasuk bulan-bulan lama, jadi
   daftarnya panjang dan salah pilih gampang terjadi. Sekarang KAK yang
   tanggalnya sudah lewat disembunyikan, dengan dua perkecualian yang
   wajib tetap jalan: KAK yang sedang dipilih, dan KAK yang sezaman
   dengan kelasnya sendiri.
   ------------------------------------------------------------------ */
const A2 = "  function hariIniISO() {";
const B2 = "  /* Daftar materi inti per jenis";
if (src.indexOf(A2) < 0 || src.indexOf(B2) < 0) { console.error("penanda daftarKak tidak ketemu"); process.exit(2); }
const blok2 = src.slice(src.indexOf(A2), src.indexOf(B2));

/* Tanggal dibuat relatif terhadap hari ini supaya ujinya tidak basi. */
const hari = d => { const x = new Date(); x.setDate(x.getDate() + d);
  const p = n => String(n).padStart(2, "0");
  return x.getFullYear() + "-" + p(x.getMonth() + 1) + "-" + p(x.getDate()); };

const KAK2 = [
  { dcc_event_id:"lama-1",  jenis:"BTCLS", mulai:hari(-22), kota:"Tangerang", judul:"BTCLS lama", trainer:T(5) },
  { dcc_event_id:"lama-2",  jenis:"BTCLS", mulai:hari(-8),  kota:"Serang",    judul:"BTCLS UNIBANG", trainer:T(5) },
  { dcc_event_id:"kemarin", jenis:"BTCLS", mulai:hari(-1),  kota:"Semarang",  judul:"BTCLS Kota Semarang", trainer:T(5) },
  { dcc_event_id:"besok",   jenis:"BTCLS", mulai:hari(1),   kota:"Cilegon",   judul:"BTCLS Cilegon", trainer:T(5) },
  { dcc_event_id:"depan",   jenis:"BTCLS", mulai:hari(20),  kota:"Cirebon",   judul:"BTCLS CIREBON", trainer:T(5) },
  { dcc_event_id:"acls",    jenis:"ACLS",  mulai:hari(20),  kota:"Tangerang", judul:"ACLS FN", trainer:T(5) },
  { dcc_event_id:"kurikulum:BTCLS", jenis:"BTCLS", mulai:null, kota:null, judul:"Kurikulum", trainer:[{nama:"-",materi:["a"]}] },
  { dcc_event_id:"tanpatrainer", jenis:"BTCLS", mulai:hari(5), kota:"Bogor", judul:"BTCLS tanpa trainer", trainer:[] }
];
const buatDaftar = kakPilih => new Function("pemateri", "kakPilih", "normJenis",
  blok2 + "\nreturn daftarKak;")(KAK2, kakPilih,
  t => String(t || "").toUpperCase().replace(/[^A-Z0-9]/g, ""));

const idnya = d => d.map(x => x.dcc_event_id);
let gagal2 = 0;
const cek = (nama, dapat, harap) => {
  const ok = JSON.stringify(dapat) === JSON.stringify(harap);
  if (!ok) gagal2++;
  console.log((ok ? "  ok  " : "GAGAL ") + nama.padEnd(54) + "-> [" + dapat.join(", ") + "]");
  if (!ok) console.log(" ".repeat(60) + "harusnya [" + harap.join(", ") + "]");
};

console.log("\nIsi dropdown KAK dari DCC:");
cek("Kelas mendatang: KAK lewat semua disembunyikan",
  idnya(buatDaftar({})({ id:"k1", jenis:"BTCLS", tanggal_mulai: hari(20) })),
  ["besok", "depan", "acls"]);
cek("Kurikulum & KAK tanpa trainer tidak pernah ikut",
  idnya(buatDaftar({})({ id:"k1", jenis:"BTCLS", tanggal_mulai: hari(20) }))
    .filter(x => x === "kurikulum:BTCLS" || x === "tanpatrainer"),
  []);
cek("KAK yang sedang dipilih tetap tampil walau sudah lewat",
  idnya(buatDaftar({ k2:"lama-1" })({ id:"k2", jenis:"BTCLS", tanggal_mulai: hari(20) })),
  ["lama-1", "besok", "depan", "acls"]);
cek("Kelas lama: KAK sezaman kelasnya tetap tampil",
  idnya(buatDaftar({})({ id:"k3", jenis:"BTCLS", tanggal_mulai: hari(-8) })),
  ["lama-2", "kemarin", "besok", "depan", "acls"]);
cek("Kelas lama sekali: KAK sejak tanggal kelasnya tampil",
  idnya(buatDaftar({})({ id:"k4", jenis:"BTCLS", tanggal_mulai: hari(-22) })),
  ["lama-1", "lama-2", "kemarin", "besok", "depan", "acls"]);
cek("Kelas tanpa tanggal: hanya yang belum lewat",
  idnya(buatDaftar({})({ id:"k5", jenis:"BTCLS", tanggal_mulai: null })),
  ["besok", "depan", "acls"]);
cek("Sejenis didahulukan: kelas ACLS menaruh ACLS di depan",
  idnya(buatDaftar({})({ id:"k6", jenis:"ACLS", tanggal_mulai: hari(20) })),
  ["acls", "besok", "depan"]);
cek("Penanda (sudah lewat) hanya pada yang memang lewat",
  buatDaftar({ k7:"lama-1" })({ id:"k7", jenis:"BTCLS", tanggal_mulai: hari(20) })
    .map(x => x.dcc_event_id + ":" + (x.lewat ? "lewat" : "aktif")),
  ["lama-1:lewat", "besok:aktif", "depan:aktif", "acls:aktif"]);

/* --------------------------------------------------------------------------
   BAGIAN 3 — tombol "Muat ulang KAK dari DCC".

   27 Nov 2026 — Ryan membuat KAK BTCLS 8 Des di DCC dan tidak melihatnya di
   menu "KAK dari DCC". Datanya sebenarnya sudah masuk ke tabel pemateri_dcc;
   yang salah adalah halaman back office-nya sudah terbuka lebih dulu, dan
   daftar KAK hanya diambil SEKALI saat halaman dimuat. Sejak itu ada tombol
   ambil-ulang di tab Jadwal dan tab Link Kelas.

   Yang dijaga di sini: tombolnya merender, mati selagi mengambil, menolak
   klik ganda, menampilkan jam pengambilan terakhir, dan tidak melempar error
   walau nilai jamnya rusak.
   -------------------------------------------------------------------------- */
const A3 = "  /* Jam daftar KAK terakhir diambil, plus tombol ambil-ulangnya.";
const B3 = "  function tombolMuatKak(kecil) {";
const C3 = "  function barisMuatKak() {";
const TUTUP = "\n  }\n";
let gagal3 = 0;
function cek3(nama, syarat, rinci) {
  if (syarat) { console.log("  ok  " + nama); return; }
  gagal3++; console.log("  GAGAL  " + nama + (rinci ? "  -> " + rinci : ""));
}

async function jalan3() {
  console.log("\nTombol muat ulang KAK:");
  if (src.indexOf(A3) < 0 || src.indexOf(B3) < 0 || src.indexOf(C3) < 0) {
    console.log("  GAGAL  penanda tombol tidak ketemu di app.js — perbarui A3/B3/C3 di cek-kak.js");
    return 1;
  }
  const blok = src.slice(src.indexOf(A3), src.indexOf(TUTUP, src.indexOf(B3)) + TUTUP.length);
  const brs = src.slice(src.indexOf(C3), src.indexOf(TUTUP, src.indexOf(C3)) + TUTUP.length);

  let dipanggil = 0;
  const React3 = { createElement: (tipe, prop, ...anak) => ({ tipe, prop: prop || {}, anak }) };
  /* kakJam dan kakSibuk disuntik lewat useState tiruan, berurutan. */
  function pasang(jam, sibuk) {
    let n = 0;
    const us = () => (n++ === 0 ? [jam, () => {}] : [sibuk, () => {}]);
    const kode = blok + brs + "\nreturn { tombolMuatKak, barisMuatKak, muatUlangKak, jamKak };";
    return new Function("React", "useState", "muatKakDcc", "muatKak", kode)(
      React3, us, async () => { dipanggil++; }, async () => { dipanggil++; });
  }

  let api = pasang(null, false);
  let t = api.tombolMuatKak(false);
  cek3("Label panjang menyebut “Muat ulang KAK dari DCC”",
    String(t.anak[0]).indexOf("Muat ulang KAK dari DCC") > -1, JSON.stringify(t.anak));
  cek3("Tombol hidup selagi tidak mengambil", !t.prop.disabled);

  t = api.tombolMuatKak(true);
  cek3("Versi kecil memakai gaya ringkas",
    !!t.prop.style && t.prop.style.fontSize === 12.5 && String(t.anak[0]).indexOf("Muat ulang KAK") > -1,
    JSON.stringify(t.prop.style));

  api = pasang(new Date("2026-11-27T05:44:00Z"), false);
  cek3("Jam pengambilan terakhir ikut tampil di label",
    /\(\d{2}[.:]\d{2}\)/.test(String(api.tombolMuatKak(false).anak[0])),
    JSON.stringify(api.tombolMuatKak(false).anak));
  cek3("jamKak() mengembalikan jam", !!api.jamKak());

  let lempar = "";
  try { pasang({ bukan: "date" }, false).tombolMuatKak(false); }
  catch (e) { lempar = e.message; }
  cek3("Nilai jam rusak tidak membuat back office blank", !lempar, lempar);

  api = pasang(null, true);
  t = api.tombolMuatKak(false);
  cek3("Tombol mati dan berbunyi “Mengambil…” selagi mengambil",
    !!t.prop.disabled && String(t.anak[0]).indexOf("Mengambil") > -1, JSON.stringify(t.anak));

  dipanggil = 0;
  await pasang(null, false).muatUlangKak();
  cek3("Klik memanggil pengambilan ulang tepat sekali", dipanggil === 1, dipanggil + "x");
  dipanggil = 0;
  await pasang(null, true).muatUlangKak();
  cek3("Klik selagi mengambil tidak menumpuk permintaan", dipanggil === 0, dipanggil + "x");

  api = pasang(new Date("2026-11-27T05:44:00Z"), false);
  cek3("Baris di tab Jadwal menyebut waktu pengambilan terakhir",
    JSON.stringify(api.barisMuatKak()).indexOf("terakhir diambil") > -1);
  api = pasang(null, false);
  cek3("Sebelum pernah diambil, barisnya tetap memberi keterangan",
    JSON.stringify(api.barisMuatKak()).indexOf("saat halaman ini dibuka") > -1);

  return gagal3;
}

/* --------------------------------------------------------------------------
   BAGIAN 4 — daftar nama narasumber di bawah baris status.

   28 Nov 2026 — Ryan: "harusnya di sini include juga kasih tau nama2 di KAK
   nya siapa aja, biar gak salah". Sebelumnya baris hijau hanya bilang trainer
   sudah terambil; untuk tahu KAK siapa yang terpungut, promptnya harus dibuka
   dulu. Itulah sebabnya tertukarnya KAK Cirebon/Tangerang 26 Nov baru
   ketahuan belakangan.
   -------------------------------------------------------------------------- */
const R4 = "  function rincianPemateri(pm) {";
let gagal4 = 0;
function cek4(nama, syarat, rinci) {
  if (syarat) { console.log("  ok  " + nama); return; }
  gagal4++; console.log("  GAGAL  " + nama + (rinci ? "  -> " + rinci : ""));
}
function jalan4() {
  console.log("\nDaftar nama narasumber:");
  if (src.indexOf(R4) < 0) {
    console.log("  GAGAL  penanda rincianPemateri tidak ketemu di app.js");
    return 1;
  }
  const blok = src.slice(src.indexOf(R4), src.indexOf("\n  }\n", src.indexOf(R4)) + 4);
  const React4 = { createElement: (tipe, prop, ...anak) => ({ tipe, prop: prop || {}, anak }) };
  const rincianPemateri = new Function("React", blok + "\nreturn rincianPemateri;")(React4);
  const datar = x => JSON.stringify(x);

  const lima = { trainer: Array.from({ length: 5 }, (_, i) => ({
    nama: "Ns. Pelatih " + (i + 1) + ", S.Kep", materi: ["Materi A" + i, "Materi B" + i] })) };
  const h = datar(rincianPemateri(lima));
  cek4("Kelima nama narasumber benar-benar tampil",
    lima.trainer.every(x => h.indexOf(x.nama) > -1), h.slice(0, 160));
  cek4("Materi tiap orang ikut tampil",
    h.indexOf("Materi A0") > -1 && h.indexOf("Materi B4") > -1);

  cek4("Materi kosong ditandai, bukan dibiarkan senyap",
    datar(rincianPemateri({ trainer: [{ nama: "Ns. X", materi: [] }] })).indexOf("materi belum ada di KAK") > -1);

  let lempar = "";
  let hasil = null;
  try { hasil = rincianPemateri({ trainer: [{}] }); } catch (e) { lempar = e.message; }
  cek4("Baris KAK cacat tidak membuat back office blank", !lempar, lempar);
  cek4("Nama kosong tetap diberi penanda",
    !lempar && datar(hasil).indexOf("(nama kosong)") > -1);

  cek4("Tanpa pemateri tidak merender apa pun",
    rincianPemateri(null) === null
      && rincianPemateri({}) === null
      && rincianPemateri({ trainer: [] }) === null);

  /* Jaring pengaman utama: baris status WAJIB memanggil daftar ini, bukan
     cuma mendefinisikannya. */
  cek4("Baris status memanggil rincianPemateri", src.indexOf("rincianPemateri(pm))") > -1);
  cek4("Baris status menyebut KAK mana yang terpungut",
    src.indexOf('diambil otomatis dari KAK DCC: " + ringkasKak(pm)') > -1);

  return gagal4;
}

jalan3().then(g3 => {
  const n = gagal + gagal2 + g3 + jalan4();
  console.log("\n" + (n ? n + " KASUS GAGAL" : "Semua lulus."));
  process.exit(n ? 1 : 0);
});
