# Pemeriksa wajib sebelum app.js diunggah

`cek-desain.js` dan `cek-scope.js` tidak ikut dijalankan oleh situs — keduanya
pemeriksa yang harus dijalankan **sebelum** app.js diunggah ke repo.

`app.js` sudah dikompilasi (React.createElement, tanpa berkas sumber), jadi
satu-satunya cara mengubahnya adalah ganti-string langsung. `node --check`
hanya memeriksa sintaks, dan itu tidak cukup.

## Urutan pemeriksaan wajib

```bash
node --check app.js            # 1. sintaks
node cek-desain.js             # 2. semua desain flyer benar-benar jalan
node cek-kak.js                # 3. penanda status KAK DCC di daftar kelas
npm i acorn && node cek-scope.js app.js        # 4. variabel yang tidak pernah dideklarasikan
```

Ketiganya harus bersih. Baru setelah itu naikkan tag versi di `index.html`
(`<script defer src="app.js?v=YYYYMMDDx">`) dan unggah **dua berkas sekaligus**.

## Kenapa ada

**24 November 2026.** Memilih "Desain 1 — Klasik" membuat seluruh back office
blank: `Uncaught ReferenceError: daring is not defined`. Fungsi
`buatPromptFlyer` memakai variabel `daring` yang tidak pernah dideklarasikan di
situ, padahal delapan generator lain mendeklarasikannya. Sintaksnya sah, jadi
`node --check` lolos. Bug itu sudah ada berhari-hari dan baru ketahuan saat
desainnya dipakai.

`cek-desain.js` menjalankan kesepuluh desain terhadap tujuh bentuk kelas
(luring, daring, blended, format kosong, data kosong, TOT, blended yang
tanggalnya tidak cocok) dikali tiga keadaan pemateri dan dua keadaan slug —
420 kombinasi. Dijalankan pada app.js sebelum perbaikan, ia melaporkan 42
kegagalan, semuanya Desain 1.

**25 November 2026.** Desain 6 (Grid Padat) diberi penanda ✓ seolah nama
narasumber ikut masuk otomatis, padahal promptnya justru memuat perintah
`Do not add trainer names or portraits.` Akibatnya flyer BTCLS Cilegon terbit
tanpa nama narasumber sama sekali, padahal KAK di DCC sudah berisi 5 pemateri
lengkap — pelanggaran SE 2692/2026 butir i19 dan i21.

Sebabnya: `cek-desain.js` saat itu hanya menguji desainnya **tidak error**, dan
tidak pernah menguji bahwa **penandanya benar**. Sekarang setiap kombinasi
dengan 5 pemateri diuji isi promptnya:

- `pakaiNama: true` → **seluruh** nama pemateri harus muncul di prompt
- `pakaiNama: false` → **tidak satu pun** nama boleh muncul
- `pakaiNama: true` → judul materi tiap pemateri harus muncul dalam 300 karakter
  **sesudah namanya**, karena butir i21 menuntut materi tepat di bawah nama yang
  membawakannya, bukan sebagai daftar materi terpisah di tempat lain

Jadi kalau nanti ada desain baru, atau prompt desain lama diubah, penandanya
tidak bisa lagi berbohong tanpa ketahuan. Diuji balik dengan memasang kembali
penanda yang salah: pemeriksanya langsung melaporkan 14 kegagalan.

`cek-kak.js` memotong fungsi `kakKelas` dan `labelKak` dari `TabJadwal` lalu
menjalankannya terhadap 13 keadaan: KAK cocok satu, KAK belum ada, KAK ada tapi
trainernya kosong, dua KAK di tanggal yang sama (kasus ACLS 15 Des yang nyata),
KAK yang sudah dipilih tangan, KAK pilihan yang sudah dihapus di DCC, kelas tanpa
tanggal mulai, baris kurikulum yang tidak boleh dihitung sebagai KAK, serta
variasi penulisan kota dan huruf besar/kecil jenis pelatihan. Penanda inilah yang
dipakai untuk mencegah KAK dobel dan kelas yang KAK-nya terlewat, jadi kalau
logikanya meleset akibatnya langsung ke kepatuhan.

`cek-scope.js` memakai acorn untuk menandai setiap identifier yang dipakai
tetapi tidak pernah dideklarasikan di rantai scope-nya. Pada app.js yang sehat
ia hanya menyisakan `DOMParser` dan `supabase`, dua-duanya memang global dari
browser dan dari pustaka Supabase.

## Kalau penanda potongannya berubah

`cek-desain.js` memotong app.js dari `function tglDL(` sampai akhir
`function buatPromptMaster(`. Kalau nama fungsi itu berubah, ujinya berhenti
dengan pesan jelas, bukan diam-diam lulus tanpa menguji apa pun.
