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

console.log("\n" + (gagal + gagal2 ? (gagal + gagal2) + " KASUS GAGAL" : "Semua lulus."));
process.exit(gagal + gagal2 ? 1 : 0);
