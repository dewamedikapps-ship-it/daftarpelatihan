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
