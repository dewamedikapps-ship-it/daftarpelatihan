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
npm i acorn && node cek-scope.js app.js        # 3. variabel yang tidak pernah dideklarasikan
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

`cek-scope.js` memakai acorn untuk menandai setiap identifier yang dipakai
tetapi tidak pernah dideklarasikan di rantai scope-nya. Pada app.js yang sehat
ia hanya menyisakan `DOMParser` dan `supabase`, dua-duanya memang global dari
browser dan dari pustaka Supabase.

## Kalau penanda potongannya berubah

`cek-desain.js` memotong app.js dari `function tglDL(` sampai akhir
`function buatPromptMaster(`. Kalau nama fungsi itu berubah, ujinya berhenti
dengan pesan jelas, bukan diam-diam lulus tanpa menguji apa pun.
