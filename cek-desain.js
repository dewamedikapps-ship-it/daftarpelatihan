/* Uji semua generator prompt flyer di app.js.
 *
 * Jalankan dari folder repo:   node cek-desain.js
 *
 * Kenapa ada berkas ini: 24 Nov 2026 Desain 1 (Klasik) membuat seluruh back
 * office blank dengan pesan "Uncaught ReferenceError: daring is not defined".
 * `node --check` tidak menangkapnya karena sintaksnya sah — variabelnya memang
 * ada, hanya tidak pernah dideklarasikan di fungsi itu. Bug seperti ini hanya
 * muncul saat desainnya benar-benar dipakai.
 *
 * Berkas ini menjalankan kesepuluh desain terhadap berbagai bentuk kelas
 * (luring, daring, blended, data kosong) dikali tiga keadaan pemateri. Tidak
 * ada yang boleh melempar error. Tidak butuh pustaka apa pun.
 */
"use strict";
const fs = require("fs");
const path = require("path");

const BERKAS = path.join(__dirname, "app.js");
const src = fs.readFileSync(BERKAS, "utf-8");

/* Ambil blok dari helper tanggal sampai generator terakhir. Kalau penanda ini
   berubah namanya, perbaiki di sini supaya ujinya tidak diam-diam kosong. */
const PENANDA_AWAL = "  function tglDL(k, bagian, cadangan) {";
const PENANDA_AKHIR = "  function buatPromptMaster(";
if (src.indexOf(PENANDA_AWAL) < 0 || src.indexOf(PENANDA_AKHIR) < 0) {
  console.error("Penanda tidak ketemu di app.js. Perbarui PENANDA_AWAL / PENANDA_AKHIR di cek-desain.js.");
  process.exit(2);
}
const awal = src.indexOf(PENANDA_AWAL);
const akhir = src.indexOf("\n  }\n", src.indexOf(PENANDA_AKHIR)) + 4;
const builders = src.slice(awal, akhir);

const jumlahGenerator = (builders.match(/function buatPrompt/g) || []).length;
if (jumlahGenerator < 8) {
  console.error("Hanya " + jumlahGenerator + " generator yang terambil — potongannya salah.");
  process.exit(2);
}

function siapkan({ trainer, kurikulum }) {
  const luar = {
    setelan: { rek_bank: "Bank BRI", rek_nomor: "201001000824562", rek_atas_nama: "PT Dewa Medik Nusantara", dp_nominal: 500000 },
    rp: n => "Rp" + Number(n || 0).toLocaleString("id-ID"),
    alamat: slug => "https://daftarpelatihan.dewamedik911.com/" + (slug || "x"),
    kotaKelas: k => (k && k.kota) || "",
    kotaBesar: k => String((k && k.kota) || "").toUpperCase(),
    tglFlyer: (a, b) => (a && b ? a + " – " + b : a || ""),
    pemateriKelas: () => trainer,
    materiKurikulum: () => kurikulum
  };
  const nama = Object.keys(luar);
  const kode = builders + "\nreturn { DESAIN_FLYER, buatPromptDesain, desainBawaan };";
  return new Function(...nama, kode)(...nama.map(n => luar[n]));
}

const T = n => ({
  trainer: Array.from({ length: n }, (_, i) => ({
    nama: "Ns. Pelatih " + (i + 1) + ", S.Kep",
    materi: ["Materi A" + i, "Materi B" + i]
  })),
  diperbarui: "2026-11-24T04:17:00Z", judul: "KAK Uji", sumber: "pilih"
});

const KELAS = [
  ["luring lengkap", { id: "k1", jenis: "BTCLS", judul: "BTCLS Cirebon Desember", tanggal_mulai: "2026-12-15", tanggal_selesai: "2026-12-20", lokasi: "Hotel Uji Cirebon", kota: "Cirebon", format: "Luring", harga: 3500000, kuota: 40 }],
  ["daring saja", { id: "k2", jenis: "EKG", judul: "Pelatihan EKG", tanggal_mulai: "2026-12-01", tanggal_selesai: "2026-12-03", lokasi: "", kota: "", format: "Daring", harga: 1500000 }],
  ["blended 3+3", { id: "k3", jenis: "ACLS", judul: "ACLS For Nurse", tanggal_mulai: "2026-12-08", tanggal_selesai: "2026-12-13", lokasi: "Gedung DMN", kota: "Tangerang", format: "3 hari daring + 3 hari luring", harga: 4000000 }],
  ["format kosong", { id: "k4", jenis: "PKID", judul: "PKID", tanggal_mulai: "2026-12-22", tanggal_selesai: "2026-12-27", lokasi: "", kota: "", format: "", harga: 0 }],
  ["serba kosong", { id: "k5", jenis: "", judul: "", tanggal_mulai: null, tanggal_selesai: null, lokasi: null, kota: null, format: null, harga: null }],
  ["TOT BTCLS", { id: "k6", jenis: "TOT BTCLS", judul: "TOT BTCLS Tangerang", tanggal_mulai: "2026-12-15", tanggal_selesai: "2026-12-19", lokasi: "Gedung DMN", kota: "Tangerang", format: "Luring", harga: 6000000 }],
  ["blended tanggal tak cocok", { id: "k7", jenis: "BONELS", judul: "BONELS", tanggal_mulai: "2026-12-01", tanggal_selesai: "2026-12-09", lokasi: "RS Uji", kota: "Serang", format: "2 hari daring + 3 hari luring", harga: 2500000 }]
];

const PEMATERI = [
  ["5 pemateri", T(5), ["M1", "M2", "M3"]],
  ["tanpa pemateri, ada kurikulum", null, ["M1", "M2", "M3"]],
  ["tanpa pemateri & tanpa kurikulum", null, null]
];

const LINK = [
  ["ada slug", { id: "r1", slug: "btcls-crbdes", judul: "BTCLS Cirebon" }],
  ["tanpa slug", { id: "r2", slug: "", judul: "Tanpa slug" }]
];

let total = 0;
const rusak = [];
const dipakai = new Set();

for (const [labelPm, trainer, kurikulum] of PEMATERI) {
  const api = siapkan({ trainer, kurikulum });
  for (const d of api.DESAIN_FLYER) {
    dipakai.add(d.id);
    for (const [labelK, k] of KELAS) {
      for (const [labelR, r] of LINK) {
        total++;
        try {
          const t = api.buatPromptDesain(r, k, d.id);
          if (typeof t !== "string" || !t.trim()) {
            rusak.push({ desain: d.id, kelas: labelK, pemateri: labelPm, link: labelR, sebab: "prompt kosong" });
          } else if (trainer) {
            /* Penanda pakaiNama harus jujur. Inilah yang 25 Nov 2026 kelewat:
               Desain 6 diberi centang padahal promptnya justru menyuruh
               "Do not add trainer names", sehingga flyernya terbit tanpa
               nama narasumber dan melanggar SE 2692/2026 butir i19 & i21. */
            const ada = trainer.trainer.filter(x => t.indexOf(x.nama) > -1).length;
            if (d.pakaiNama && ada < trainer.trainer.length) {
              rusak.push({ desain: d.id, kelas: labelK, pemateri: labelPm, link: labelR,
                sebab: "ditandai memuat nama narasumber, tapi hanya " + ada + " dari "
                  + trainer.trainer.length + " nama yang muncul di prompt" });
            }
            if (!d.pakaiNama && ada > 0) {
              rusak.push({ desain: d.id, kelas: labelK, pemateri: labelPm, link: labelR,
                sebab: "ditandai TANPA nama narasumber, tapi " + ada + " nama tetap muncul di prompt" });
            }
            /* Blok akreditasi. Ryan, 26 Nov 2026: huruf "B" harus seukuran
               dan setebal baris "Institusi penyelenggara pelatihan
               terakreditasi Kemenkes RI", bukan huruf display ~2,5x seperti
               sebelumnya. Yang tidak boleh berubah: B tetap murni tipografi,
               tidak di dalam perisai/lingkaran/stempel/pita/badge, karena
               butir i14 mewajibkan status akreditasi berupa teks. */
            if (/terakreditasi Kemenkes RI/i.test(t)) {
              if (/2[.,]5\s?x|2,5 kali|display letter about/i.test(t)) {
                rusak.push({ desain: d.id, kelas: labelK, pemateri: labelPm, link: labelR,
                  sebab: "masih menyuruh huruf B dibesarkan jadi huruf display" });
              }
              if (!/SAME size and weight as line 1|SAMA PERSIS dengan baris/i.test(t)) {
                rusak.push({ desain: d.id, kelas: labelK, pemateri: labelPm, link: labelR,
                  sebab: "tidak menyebut bahwa huruf B harus seukuran baris akreditasi" });
              }
              if (!/shield|perisai/i.test(t)) {
                rusak.push({ desain: d.id, kelas: labelK, pemateri: labelPm, link: labelR,
                  sebab: "tidak melarang huruf B dipasang di dalam perisai/badge (butir i14)" });
              }
            }
            /* Butir i21: judul materi wajib tepat DI BAWAH nama narasumber yang
               membawakannya, bukan sebagai daftar materi terpisah. Diukur dengan
               menuntut seluruh materi seorang pemateri muncul dalam 300 karakter
               sesudah namanya. */
            if (d.pakaiNama) {
              const nempel = trainer.trainer.filter(x => {
                const i = t.indexOf(x.nama);
                if (i < 0) return false;
                const jendela = t.slice(i, i + 300);
                return x.materi.every(m => jendela.indexOf(m) > -1);
              }).length;
              if (nempel < trainer.trainer.length) {
                rusak.push({ desain: d.id, kelas: labelK, pemateri: labelPm, link: labelR,
                  sebab: "materi tidak menempel di bawah nama: hanya " + nempel + " dari "
                    + trainer.trainer.length + " nama yang diikuti materinya (SE 2692/2026 butir i21)" });
              }
            }
          }
        } catch (e) {
          rusak.push({ desain: d.id, kelas: labelK, pemateri: labelPm, link: labelR, sebab: String((e && e.message) || e) });
        }
      }
    }
  }
}

console.log("Desain diuji : " + dipakai.size + " (" + [...dipakai].join(", ") + ")");
console.log("Kombinasi    : " + total);

if (!rusak.length) {
  console.log("\nSemua lulus. Tidak ada desain yang melempar error.");
  process.exit(0);
}
const ringkas = new Map();
rusak.forEach(x => {
  const kunci = x.desain + "  —  " + x.sebab;
  ringkas.set(kunci, (ringkas.get(kunci) || 0) + 1);
});
console.log("\nGAGAL " + rusak.length + " dari " + total + ":");
[...ringkas.entries()].forEach(([k, n]) => console.log("  " + String(n).padStart(4) + "x  " + k));
console.log("\nContoh pertama: " + JSON.stringify(rusak[0]));
process.exit(1);
