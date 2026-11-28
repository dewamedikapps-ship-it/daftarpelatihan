/* Uji pembatasan peran di back office.
 *
 * Jalankan dari folder repo:   node cek-peran.js
 *
 * Kenapa ada berkas ini: 28 Nov 2026 tab Kuitansi dibuka untuk Manajer Diklat
 * (Hafid) supaya ia bisa membuat kuitansi. Perubahan seperti ini menyentuh dua
 * tempat sekaligus — daftar tab dan penjaga 'peran !== "diklat"' — dan kalau
 * salah satunya tertinggal, akibatnya diam: tabnya muncul tapi kosong, atau
 * lebih buruk, tab milik Pemilik ikut terbuka untuk Manajer Diklat.
 *
 * Yang dijaga:
 *   1. daftar tab Manajer Diklat hanya berisi tab yang memang diizinkan;
 *   2. tab yang hanya milik Pemilik tidak pernah bocor ke daftar itu;
 *   3. tiap tab yang muncul di daftar Manajer Diklat benar-benar bisa
 *      dirender untuknya (tidak dijaga 'peran !== "diklat"');
 *   4. tiap tab milik Pemilik tetap punya penjaganya;
 *   5. tombol Hapus kuitansi tidak ditampilkan ke Manajer Diklat.
 *
 * Batas yang sesungguhnya ada di RLS database (boleh_diklat() / is_admin()),
 * bukan di berkas ini. Pemeriksa ini hanya menjaga agar tampilannya tidak
 * berjanji lebih daripada yang diizinkan database — atau sebaliknya.
 */
"use strict";
const fs = require("fs");
const path = require("path");

const src = fs.readFileSync(path.join(__dirname, "app.js"), "utf-8");

/* Tab yang BOLEH dilihat Manajer Diklat. Menambah baris di sini adalah
   keputusan sadar: pastikan RLS-nya sudah mengizinkan peran diklat dulu. */
const BOLEH_DIKLAT = ["pendaftar", "jadwal", "kerjasama", "prospek", "kuitansi", "linkkelas"];

/* Tab yang hanya untuk Pemilik. Tidak boleh muncul di daftar Manajer Diklat,
   dan masing-masing wajib punya penjaga 'peran !== "diklat"' saat dirender. */
const PEMILIK_SAJA = ["voucher", "testimoni", "karir", "fasilitas", "invoice", "akun", "setelan", "keamanan"];

let gagal = 0;
function cek(nama, syarat, rinci) {
  if (syarat) { console.log("  ok  " + nama); return; }
  gagal++; console.log("  GAGAL  " + nama + (rinci ? "  -> " + rinci : ""));
}

/* --- Ambil daftar tab untuk peran diklat, apa adanya dari app.js --- */
const PENANDA = '(peran === "diklat"\n      ? [';
const i = src.indexOf(PENANDA);
if (i < 0) {
  console.error("Penanda daftar tab tidak ketemu di app.js. Perbarui PENANDA di cek-peran.js.");
  process.exit(2);
}
const akhir = src.indexOf("]\n", i + PENANDA.length);
const barisDiklat = src.slice(i + PENANDA.length - 1, akhir + 1);
const tabDiklat = (barisDiklat.match(/\["([a-z]+)",/g) || []).map(x => x.slice(2, -2));

console.log("Peran Manajer Diklat:");
console.log("  tab yang terbaca: " + tabDiklat.join(", "));

cek("Daftar tab Manajer Diklat persis seperti yang diizinkan",
  tabDiklat.length === BOLEH_DIKLAT.length && BOLEH_DIKLAT.every(t => tabDiklat.indexOf(t) > -1),
  "terbaca [" + tabDiklat.join(",") + "], diharapkan [" + BOLEH_DIKLAT.join(",") + "]");

PEMILIK_SAJA.forEach(t => {
  cek("Tab milik Pemilik tidak bocor ke Manajer Diklat: " + t, tabDiklat.indexOf(t) < 0);
});

/* --- Penjaga saat tab dirender --- */
function dijaga(t) {
  return src.indexOf('tab === "' + t + '" && peran !== "diklat"') > -1;
}
function adaTab(t) {
  return src.indexOf('tab === "' + t + '"') > -1;
}

tabDiklat.forEach(t => {
  cek("Tab " + t + " benar-benar bisa dirender untuk Manajer Diklat",
    adaTab(t) && !dijaga(t),
    dijaga(t) ? "masih dijaga peran !== diklat, jadi tabnya muncul tapi kosong" : "tab tidak pernah dirender");
});

/* Lapis kedua. Menyembunyikan tombolnya saja tidak cukup: 28 Nov 2026
   ketahuan Invoice, Pengaturan, Keamanan, Member, Testimoni, Karir dan
   Fasilitas tidak punya penjaga sama sekali saat dirender — aman hanya
   selama tombolnya tidak muncul. Sekarang tiap tab milik Pemilik wajib
   punya penjaganya sendiri. */
PEMILIK_SAJA.forEach(t => {
  cek("Tab milik Pemilik tetap berpenjaga saat dirender: " + t, dijaga(t),
    "tidak ada penjaga peran !== diklat");
});

/* --- Tombol Hapus kuitansi --- */
const ik = src.indexOf("function TabKuitansi");
cek("TabKuitansi menerima peran", ik > -1 && /function TabKuitansi\(\{\s*beriTahu,\s*peran\s*\}\)/.test(src));
if (ik > -1) {
  const blok = src.slice(ik, ik + 20000);
  const ih = blok.indexOf("onClick: () => hapus(");
  cek("Tombol Hapus kuitansi disembunyikan dari Manajer Diklat",
    ih > -1 && blok.slice(Math.max(0, ih - 220), ih).indexOf('peran === "diklat" ? null') > -1,
    "menghapus kuitansi hanya untuk Pemilik; tombolnya tidak boleh dijanjikan ke diklat");
}

console.log("\n" + (gagal ? gagal + " KASUS GAGAL" : "Semua lulus."));
process.exit(gagal ? 1 : 0);
