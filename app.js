
var useState=React.useState,useEffect=React.useEffect,useMemo=React.useMemo,useRef=React.useRef;
var LOGO_DMN="logo-dmn.png";
var LOGO_PDF="logo-dmn-putih.jpg";
var CSS="\n\n.dm-root{\n  --ink:#0B1F2A; --ink2:#24404F; --paper:#EDF2F1; --surface:#FFFFFF;\n  --line:#D3DEDB; --teal:#0E7C7B; --teal-d:#0A5F5E; --vital:#C81E4A;\n  --muted:#5F7580; --wait:#8A6100;\n  background:\n    radial-gradient(1100px 460px at 88% -8%, rgba(14,124,123,.10), transparent 62%),\n    radial-gradient(760px 380px at -6% 4%, rgba(200,30,74,.07), transparent 60%),\n    var(--paper);\n  color:var(--ink);\n  font-family:Inter,system-ui,sans-serif; font-size:15px; line-height:1.55; min-height:100vh;\n}\n.dm-root *{box-sizing:border-box;}\n.dm-wrap{max-width:1080px;margin:0 auto;padding:0 18px;}\n.dm-main{padding-top:22px;padding-bottom:150px;}\n\n.dm-header{background:linear-gradient(120deg,#071620 0%,var(--ink) 45%,#123044 100%);\n  color:#EAF2F1;position:sticky;top:0;z-index:20;border-bottom:1px solid rgba(126,231,214,.16);}\n.dm-header-in{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:13px 18px;flex-wrap:nowrap;}\n.dm-brand{display:flex;align-items:center;gap:14px;min-width:0;}\n.dm-mark{width:62px;height:69px;border-radius:11px;object-fit:cover;background:#fff;flex:none;\n  padding:3px;box-shadow:0 0 0 1px rgba(126,231,214,.35),0 6px 18px -8px rgba(0,0,0,.7);\n  transition:transform .18s ease;}\n.dm-mark:hover{transform:scale(1.04);}\n@media (max-width:820px){.dm-mark{width:50px;height:56px;}}\n.dm-brand b{display:block;font-family:'Bricolage Grotesque',sans-serif;font-size:18px;font-weight:800;\n  letter-spacing:-.02em;line-height:1.15;color:#fff;}\n@media (max-width:820px){.dm-brand b{font-size:15.5px;}}\n.dm-brand i{display:block;font-style:normal;font-family:'Bricolage Grotesque',sans-serif;font-weight:600;\n  font-size:13.5px;color:#A9CBC9;letter-spacing:.01em;max-width:36ch;line-height:1.2;margin-top:2px;}\n.dm-nav,.dm-subtab{display:flex;gap:6px;}\n.dm-subtab{margin-bottom:16px;flex-wrap:wrap;}\n.dm-tab{background:transparent;border:1px solid transparent;color:inherit;padding:7px 14px;border-radius:999px;font:inherit;font-size:14px;cursor:pointer;}\n.dm-header .dm-tab{color:#B7CFCD;}\n.dm-header .dm-tab-on{background:rgba(255,255,255,.13);color:#fff;}\n.dm-subtab .dm-tab{border-color:var(--line);background:var(--surface);color:var(--ink2);}\n.dm-subtab .dm-tab-on{background:var(--ink);border-color:var(--ink);color:#fff;}\n\n.dm-ecg{display:block;width:100%;height:24px;}\n.dm-ecg path{fill:none;stroke:var(--vital);stroke-width:2;stroke-linejoin:round;opacity:.85;\n  stroke-dasharray:1400;stroke-dashoffset:1400;animation:dm-trace 6s linear infinite;}\n.dm-ecg-beat path{animation:dm-trace 1.1s ease-out 1;stroke-width:2.6;}\n@keyframes dm-trace{to{stroke-dashoffset:0;}}\n@media (prefers-reduced-motion: reduce){.dm-ecg path{animation:none;stroke-dashoffset:0;}}\n\n.dm-intro{padding:6px 0 18px;}\n.dm-akreditasi{display:inline-flex;align-items:center;gap:10px;margin:0 0 0 auto;flex:none;\n  background:rgba(126,231,214,.09);border:1px solid rgba(126,231,214,.34);border-radius:12px;\n  padding:7px 14px;color:#BFEDE4;white-space:nowrap;text-align:left;}\n.dm-lencana{display:grid;place-items:center;width:26px;height:26px;flex:none;border-radius:8px;\n  background:linear-gradient(140deg,#7EE7D6 0%,var(--teal) 100%);color:#062A29;\n  font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:15px;line-height:1;}\n.dm-akre-teks{display:block;font-size:11.5px;font-weight:600;letter-spacing:.01em;line-height:1.35;}\n.dm-akre-teks small{display:block;font-size:10.5px;font-weight:500;color:#8FB0AF;letter-spacing:.02em;}\n@media (max-width:900px){\n  .dm-akre-teks{font-size:10.5px;}\n  .dm-akre-teks small{display:none;}\n}\n@media (max-width:600px){\n  .dm-akreditasi{padding:6px 9px;gap:7px;}\n  .dm-akre-teks{font-size:0;}\n  .dm-akre-teks::after{content:\"Akreditasi\";font-size:10.5px;}\n}\n.dm-lencana{color:var(--vital);font-size:14px;}\n.dm-alamat{margin:12px 0 0;font-size:13px;color:var(--muted);}\n.dm-pilih-bayar{display:grid;grid-template-columns:1fr 1fr;gap:11px;margin-bottom:14px;}\n.dm-opsi{text-align:left;background:#fff;border:1.5px solid var(--line);border-radius:12px;padding:14px;\n  cursor:pointer;font:inherit;color:inherit;}\n.dm-opsi:hover{border-color:var(--teal);}\n.dm-opsi-on{border-color:var(--teal);box-shadow:0 0 0 3px rgba(14,124,123,.16);background:#F6FBFA;}\n.dm-opsi b{display:block;font-size:15px;}\n.dm-opsi i{display:block;font-style:normal;font-size:12.5px;color:var(--muted);margin:4px 0 8px;}\n.dm-opsi u{text-decoration:none;font-weight:600;font-size:15px;color:var(--teal-d);}\n.dm-awas{background:#FDF6E6;border:1px solid #E3C77E;border-left:3px solid var(--wait);\n  border-radius:0 9px 9px 0;padding:11px 14px;margin:0 0 14px;}\n.dm-awas b{display:block;font-size:13.5px;color:#6B4B00;}\n.dm-awas p{margin:4px 0 0;font-size:12.5px;color:#7A5A10;line-height:1.55;}\n.dm-awas a{color:#6B4B00;font-weight:600;}\n.dm-footer-awas{margin:20px auto 0;max-width:46ch;font-size:12.5px;color:#C9DCDA;\n  border-top:1px solid rgba(255,255,255,.15);padding-top:16px;}\n.dm-footer-awas a{color:#fff;font-family:'JetBrains Mono',monospace;text-decoration:none;\n  border-bottom:1px solid var(--vital);}\n.dm-catatan{display:flex;gap:8px;align-items:flex-start;background:#FDEFF2;border:1px solid #EEB6C4;\n  border-left:3px solid var(--vital);border-radius:0 9px 9px 0;padding:10px 13px;margin:0 0 14px;\n  font-size:13px;color:#8C1633;}\n.dm-catatan-tengah{display:block;text-align:left;margin-top:16px;}\n.dm-bar-sisa{margin:4px 0 0;font-size:12px;color:#8FB0AF;}\n@media (max-width:820px){.dm-pilih-bayar{grid-template-columns:1fr;}}\n.dm-tagline{font-family:'Bricolage Grotesque',sans-serif;font-weight:800;\n  font-size:clamp(11.5px,2.72vw,34px);line-height:1.05;letter-spacing:-.015em;text-transform:uppercase;\n  margin:0 0 10px;display:block;white-space:nowrap;\n  background:linear-gradient(97deg,var(--ink) 0%,var(--teal-d) 46%,var(--teal) 74%,var(--vital) 100%);\n  -webkit-background-clip:text;background-clip:text;color:transparent;}\n.dm-garis{height:3px;border-radius:2px;margin:0 0 18px;\n  background:linear-gradient(90deg,var(--vital) 0%,var(--teal) 42%,rgba(14,124,123,0) 100%);}\n.dm-amp{color:var(--vital);}\n.dm-intro h1{font-family:'Bricolage Grotesque',sans-serif;font-size:clamp(26px,4vw,38px);line-height:1.08;\n  letter-spacing:-.03em;margin:0 0 10px;font-weight:800;}\n.dm-vital{color:var(--vital);}\n.dm-lead{color:var(--ink2);max-width:56ch;margin:0 0 4px;}\n.dm-lead-kecil{font-size:14px;}\n\n.dm-card{background:var(--surface);border:1px solid var(--line);border-radius:16px;padding:20px;\n  margin-bottom:16px;box-shadow:0 1px 2px rgba(11,31,42,.04),0 8px 22px -16px rgba(11,31,42,.28);}\n.dm-card h3{font-family:'Bricolage Grotesque',sans-serif;font-size:17px;margin:0 0 14px;display:flex;align-items:center;gap:10px;}\n.dm-nomor{display:grid;place-items:center;width:27px;height:27px;border-radius:9px;font-size:13px;\n  background:linear-gradient(140deg,var(--teal) 0%,var(--ink) 100%);color:#fff;font-weight:600;\n  box-shadow:0 3px 8px -3px rgba(14,124,123,.6);}\n.dm-nonaktif{opacity:.45;pointer-events:none;}\n.dm-gate{max-width:440px;margin:26px auto;}\n.dm-h4{font-family:'Bricolage Grotesque',sans-serif;font-size:14px;margin:18px 0 10px;}\n\n.dm-kelas-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:11px;}\n.dm-kelas{text-align:left;background:var(--surface);border:1.5px solid var(--line);border-radius:13px;padding:15px;\n  cursor:pointer;font:inherit;color:inherit;transition:transform .16s ease,box-shadow .16s ease,border-color .16s ease;}\n.dm-kelas:hover:not(:disabled){border-color:var(--teal);transform:translateY(-2px);\n  box-shadow:0 12px 24px -18px rgba(11,31,42,.55);}\n.dm-kelas-on{border-color:var(--teal);box-shadow:0 0 0 3px rgba(14,124,123,.16);background:#F6FBFA;}\n.dm-kelas-off{opacity:.45;cursor:not-allowed;}\n.dm-kelas b{display:block;margin:8px 0 4px;font-size:14.5px;}\n.dm-kelas i{display:block;font-style:normal;font-size:12.5px;color:var(--muted);}\n.dm-kelas-kaki{display:flex;justify-content:space-between;align-items:center;margin-top:10px;border-top:1px dashed var(--line);padding-top:8px;}\n.dm-kelas-kaki u{text-decoration:none;font-weight:600;color:var(--teal-d);}\n.dm-kelas-kaki em{font-style:normal;font-size:12px;color:var(--muted);}\n\n/* warna pembeda tiap jenis pelatihan */\n.dm-j-BTCLS{background:#C81E4A;}\n.dm-k-BTCLS{border-top:4px solid #C81E4A;}\n.dm-k-BTCLS.dm-kelas-on{box-shadow:0 0 0 3px #C81E4A2e;border-color:#C81E4A;}\n.dm-j-ACLS{background:#0E7C7B;}\n.dm-k-ACLS{border-top:4px solid #0E7C7B;}\n.dm-k-ACLS.dm-kelas-on{box-shadow:0 0 0 3px #0E7C7B2e;border-color:#0E7C7B;}\n.dm-j-KKMN{background:#6B4E9E;}\n.dm-k-KKMN{border-top:4px solid #6B4E9E;}\n.dm-k-KKMN.dm-kelas-on{box-shadow:0 0 0 3px #6B4E9E2e;border-color:#6B4E9E;}\n.dm-j-EKG{background:#B4740A;}\n.dm-k-EKG{border-top:4px solid #B4740A;}\n.dm-k-EKG.dm-kelas-on{box-shadow:0 0 0 3px #B4740A2e;border-color:#B4740A;}\n.dm-j-PKID{background:#1F5FA8;}\n.dm-k-PKID{border-top:4px solid #1F5FA8;}\n.dm-k-PKID.dm-kelas-on{box-shadow:0 0 0 3px #1F5FA82e;border-color:#1F5FA8;}\n.dm-j-PPIK{background:#2F7D32;}\n.dm-k-PPIK{border-top:4px solid #2F7D32;}\n.dm-k-PPIK.dm-kelas-on{box-shadow:0 0 0 3px #2F7D322e;border-color:#2F7D32;}\n.dm-j-BONELS{background:#C2571E;}\n.dm-k-BONELS{border-top:4px solid #C2571E;}\n.dm-k-BONELS.dm-kelas-on{box-shadow:0 0 0 3px #C2571E2e;border-color:#C2571E;}\n.dm-kelas{border-top-left-radius:12px;border-top-right-radius:12px;}\n.dm-jenis{display:inline-block;background:var(--ink);color:#fff;font-size:10.5px;font-weight:600;letter-spacing:.08em;padding:2px 7px;border-radius:4px;}\n\n.dm-grid2{display:grid;grid-template-columns:1fr 1fr;gap:14px;}\n.dm-field{display:block;margin-bottom:12px;}\n.dm-label{display:block;font-size:13px;font-weight:600;color:var(--ink2);margin-bottom:5px;}\n.dm-hint{font-size:12px;color:var(--muted);margin:4px 0 0;}\n.dm-input,.dm-textarea{width:100%;padding:11px 12px;border:1px solid var(--line);border-radius:10px;background:#fff;font:inherit;font-size:15px;color:var(--ink);}\n.dm-input:focus,.dm-textarea:focus{outline:2px solid var(--teal);outline-offset:1px;border-color:var(--teal);}\n.dm-field-salah .dm-input{border-color:var(--vital);}\n.dm-textarea{resize:vertical;font-size:12px;}\n.dm-mono{font-family:'JetBrains Mono',monospace;}\n.dm-login{display:flex;gap:8px;flex-wrap:wrap;}\n.dm-login .dm-input{flex:1;min-width:180px;}\n\n.dm-riwayat{background:#F6FBFA;border:1px solid var(--line);border-radius:11px;padding:11px 13px;margin-bottom:14px;font-size:13.5px;}\n.dm-riwayat b{display:block;font-size:12.5px;color:var(--muted);margin-bottom:6px;font-weight:600;}\n.dm-riwayat div{padding:3px 0;}\n\n.dm-rek{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;\n  background:linear-gradient(120deg,#071620 0%,var(--ink) 55%,#123044 100%);color:#EAF2F1;\n  border:1px solid rgba(126,231,214,.18);border-radius:13px;padding:14px 16px;margin-bottom:14px;}\n.dm-rek span{display:block;font-size:12.5px;color:#8FB0AF;}\n.dm-rek b{font-size:19px;letter-spacing:.02em;color:#fff;}\n.dm-rek .dm-btn-line{background:transparent;color:#fff;border-color:rgba(255,255,255,.35);}\n\n.dm-unggah{margin-bottom:11px;}\n.dm-unggah-tombol{width:100%;display:flex;gap:13px;align-items:center;text-align:left;background:#FBFDFC;\n  border:1.5px dashed var(--line);border-radius:12px;padding:15px;font:inherit;color:inherit;cursor:pointer;}\n.dm-unggah-tombol:hover{border-color:var(--teal);background:#F5FBFA;}\n.dm-unggah-nada .dm-unggah-tombol{border-color:#E3B6C2;background:#FDF7F8;}\n.dm-unggah-tombol b{font-size:14.5px;}\n.dm-unggah-tombol p{margin:3px 0 0;font-size:12.5px;color:var(--muted);}\n.dm-kamera{display:grid;place-items:center;width:42px;height:42px;flex:none;border-radius:11px;background:var(--ink);color:#fff;font-size:21px;}\n.dm-unggah-hasil{display:flex;gap:12px;align-items:center;border:1.5px solid var(--teal);background:#F5FBFA;border-radius:12px;padding:11px 13px;}\n.dm-unggah-hasil img{width:46px;height:46px;object-fit:cover;border-radius:8px;flex:none;}\n.dm-unggah-hasil div{flex:1;min-width:0;}\n.dm-unggah-hasil b{font-size:14px;}\n.dm-unggah-hasil p{margin:2px 0 0;font-size:12px;color:var(--muted);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}\n.dm-pdf{display:grid;place-items:center;width:46px;height:46px;border-radius:8px;background:var(--ink);color:#fff;font-size:11px;font-weight:600;flex:none;}\n.dm-req{font-style:normal;font-size:10.5px;color:var(--vital);border:1px solid var(--vital);border-radius:4px;padding:1px 5px;margin-left:7px;}\n\n.dm-buka-kode{margin-top:6px;}\n.dm-voucher{display:flex;gap:8px;margin-top:8px;}\n.dm-voucher .dm-input{flex:1;text-transform:uppercase;letter-spacing:.05em;}\n\n.dm-bar{position:sticky;bottom:0;border-radius:16px;overflow:hidden;\n  background:linear-gradient(120deg,#071620 0%,var(--ink) 50%,#123044 100%);\n  border:1px solid rgba(126,231,214,.18);box-shadow:0 -10px 30px rgba(11,31,42,.24);}\n.dm-bar .dm-ecg{height:20px;margin-bottom:-4px;}\n.dm-bar-in{display:flex;justify-content:space-between;align-items:center;gap:14px;padding:12px 16px 14px;flex-wrap:wrap;}\n.dm-bar-diskon{margin:0;font-size:12.5px;color:#7FE3B0;}\n.dm-bar-sepi{color:#8FB0AF;}\n.dm-bar-in b{font-size:23px;color:#fff;}\n.dm-bar-in s{margin-left:9px;font-size:14px;color:#8FB0AF;}\n.dm-bar-in .dm-btn{padding:13px 22px;font-size:15px;}\n\n.dm-btn{background:linear-gradient(135deg,var(--teal) 0%,var(--teal-d) 100%);color:#fff;\n  border:1px solid var(--teal-d);padding:11px 21px;border-radius:11px;font:inherit;font-weight:600;\n  font-size:15px;cursor:pointer;text-decoration:none;display:inline-block;\n  box-shadow:0 5px 14px -8px rgba(10,95,94,.85);transition:transform .14s ease,box-shadow .14s ease;}\n.dm-btn:hover{transform:translateY(-1px);box-shadow:0 9px 20px -10px rgba(10,95,94,.9);}\n.dm-btn:active{transform:translateY(0);}\n.dm-btn:disabled{opacity:.5;cursor:not-allowed;}\n.dm-btn-wa{background:#128C7E;border-color:#128C7E;}\n.dm-btn-wa:hover{background:#0E6F64;}\n.dm-btn-line{background:#fff;color:var(--ink);border:1px solid var(--line);padding:10px 16px;border-radius:10px;font:inherit;font-size:14.5px;cursor:pointer;}\n.dm-btn-line:hover{border-color:var(--ink2);}\n.dm-btn-ghost{background:transparent;border:none;color:var(--teal-d);font:inherit;font-size:13.5px;cursor:pointer;padding:6px;text-decoration:underline;text-underline-offset:3px;}\n.dm-row{display:flex;gap:10px;flex-wrap:wrap;}\n.dm-row-akhir{margin-top:16px;}\nbutton:focus-visible,a:focus-visible{outline:2px solid var(--teal);outline-offset:2px;}\n\n.dm-ok{color:var(--teal-d);font-size:13px;margin:8px 0 0;}\n.dm-err{color:var(--vital);font-size:13px;margin:6px 0 0;display:block;}\n.dm-kosong,.dm-load{color:var(--muted);font-size:13.5px;}\n\n.dm-badge{display:inline-block;font-size:11.5px;font-weight:600;padding:3px 9px;border-radius:999px;border:1px solid var(--line);color:var(--muted);}\n.dm-badge-ok{color:var(--teal-d);border-color:var(--teal);background:#EFF8F7;}\n.dm-badge-wait{color:var(--wait);border-color:#E3C77E;background:#FDF6E6;}\n.dm-badge-no{color:var(--vital);border-color:#EEB6C4;background:#FDEFF2;}\n\n.dm-tabel-bungkus{overflow-x:auto;}\n.dm-tabel{width:100%;border-collapse:collapse;font-size:13.5px;}\n.dm-tabel th{text-align:left;font-size:11.5px;text-transform:uppercase;letter-spacing:.07em;color:var(--muted);font-weight:600;padding:8px 10px;border-bottom:1px solid var(--line);white-space:nowrap;}\n.dm-tabel td{padding:11px 10px;border-bottom:1px solid var(--line);vertical-align:top;}\n.dm-tabel td p{margin:2px 0 0;}\n.dm-aksi{white-space:nowrap;}\n\n.dm-stat{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:11px;margin-bottom:16px;}\n.dm-stat div{background:var(--surface);border:1px solid var(--line);border-radius:12px;padding:12px 14px;}\n.dm-stat span{display:block;font-size:12px;color:var(--muted);}\n.dm-stat b{font-size:20px;}\n.dm-toolbar{display:flex;gap:10px;align-items:center;flex-wrap:wrap;margin-bottom:14px;}\n.dm-toolbar .dm-input{flex:1;min-width:170px;}\n.dm-toolbar h3{margin:0;flex:1;}\n\n.dm-chips{display:flex;flex-wrap:wrap;gap:6px;}\n.dm-chip{border:1px solid var(--line);background:#fff;border-radius:999px;padding:6px 13px;font:inherit;font-size:13px;cursor:pointer;color:var(--ink2);}\n.dm-chip-on{background:var(--ink);color:#fff;border-color:var(--ink);}\n.dm-cek-list{display:flex;flex-direction:column;gap:9px;margin:8px 0 4px;font-size:13.5px;}\n.dm-cek-list label{display:flex;align-items:center;gap:8px;}\n\n.dm-modal-bg{position:fixed;inset:0;background:rgba(11,31,42,.55);display:grid;place-items:center;padding:16px;z-index:50;}\n.dm-modal{background:var(--surface);border-radius:16px;width:100%;max-width:620px;max-height:88vh;display:flex;flex-direction:column;overflow:hidden;}\n.dm-modal-head{display:flex;justify-content:space-between;align-items:center;gap:12px;padding:14px 18px;border-bottom:1px solid var(--line);}\n.dm-modal-head h3{margin:0;font-family:'Bricolage Grotesque',sans-serif;font-size:16px;}\n.dm-modal-isi{padding:18px;overflow-y:auto;}\n.dm-aksi-ket{text-align:right;vertical-align:middle;white-space:normal;}\n.dm-ket{display:block;text-align:left;margin-bottom:6px;max-width:210px;}\n.dm-ket b{display:block;font-size:11px;font-weight:800;letter-spacing:.06em;\n  text-transform:uppercase;}\n.dm-ket i{display:block;font-style:normal;font-size:11.5px;color:var(--muted);}\n.dm-ket p{margin:2px 0 0;font-size:11.5px;line-height:1.35;color:var(--muted);}\n.dm-ket-merah b{color:#C81E4A;}\n.dm-ket-biru b{color:#0E7C7B;}\n.dm-pindah-kabar{margin-top:18px;border:1px solid #BFE0DE;border-left:5px solid #0E7C7B;\n  border-radius:12px;background:#F2F9F8;padding:12px 15px;}\n.dm-pindah-kabar b{display:block;color:#0A5F5E;font-size:14px;margin-bottom:4px;}\n.dm-pindah-kabar p{margin:0 0 4px;font-size:13px;color:var(--ink2);line-height:1.5;}\n.dm-baris-mati td{background:#FDF3F6;}\n.dm-baris-mati td b{color:#C81E4A;}\n.dm-baris-mati .dm-hint{color:#B4718A;}\n.dm-tanda-mati{display:inline-block;margin-left:7px;vertical-align:2px;\n  background:#C81E4A;color:#fff;font-size:10px;font-weight:800;letter-spacing:.08em;\n  padding:2px 7px;border-radius:999px;}\n.dm-mati-kabar{margin-top:18px;border:1px solid #F0C9D4;border-left:5px solid #C81E4A;\n  border-radius:12px;background:#FDF3F6;padding:12px 15px;}\n.dm-mati-kabar b{display:block;color:#C81E4A;font-size:14px;margin-bottom:4px;}\n.dm-mati-kabar p{margin:0 0 5px;font-size:13px;color:var(--ink2);line-height:1.5;}\n.dm-mati-kabar p:last-child{color:var(--muted);font-size:12.5px;margin:0;}\n.dm-bahaya{margin-top:18px;border:1px solid #F0C9D4;border-radius:12px;\n  background:#FDF6F8;padding:13px 15px;}\n.dm-bahaya b{display:block;color:#C81E4A;font-size:13.5px;}\n.dm-bahaya p{margin:5px 0 11px;font-size:13px;color:var(--muted);line-height:1.5;}\n.dm-btn-hapus{color:#C81E4A;}\n.dm-btn-hapus:hover{background:#FBE4EA;}\n\n.dm-kabari{margin-top:18px;padding:15px;border:1px solid var(--teal);border-radius:13px;background:#F3FAF9;}\n.dm-kabari b{display:block;font-size:14px;color:var(--teal-d);}\n.dm-kabari p{margin:4px 0 12px;font-size:12.5px;color:var(--muted);}\n.dm-berkas-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:11px;}\n.dm-berkas{border:1px solid var(--line);border-radius:11px;padding:10px;}\n.dm-berkas span{display:block;font-size:12px;font-weight:600;color:var(--ink2);margin-bottom:7px;}\n.dm-berkas img{width:100%;height:130px;object-fit:cover;border-radius:7px;}\n.dm-pdf-link{font-size:13px;color:var(--teal-d);}\n\n.dm-selesai{background:var(--surface);border:1px solid var(--line);border-radius:16px;padding:30px 22px;max-width:600px;margin:14px auto;text-align:center;}\n.dm-cek{display:inline-grid;place-items:center;width:52px;height:52px;border-radius:50%;background:#EFF8F7;color:var(--teal);font-size:26px;margin-bottom:12px;}\n.dm-selesai h2{font-family:'Bricolage Grotesque',sans-serif;font-size:26px;margin:0 0 10px;letter-spacing:-.02em;}\n.dm-selesai .dm-lead{margin:0 auto 18px;}\n.dm-kwitansi{border:1px dashed var(--line);border-radius:12px;padding:14px;text-align:left;margin-bottom:18px;}\n.dm-kwitansi div{display:flex;justify-content:space-between;gap:12px;padding:5px 0;font-size:13.5px;}\n.dm-kwitansi span{color:var(--muted);}\n.dm-kwitansi-total{border-top:1px solid var(--line);margin-top:6px;padding-top:9px !important;font-size:16px !important;}\n.dm-selesai .dm-row{justify-content:center;}\n\n\n/* --- Survei kepuasan & testimoni --- */\n.dm-survei{background:linear-gradient(150deg,#071620 0%,var(--ink) 52%,#123044 100%);color:#EAF2F1;\n  border:1px solid rgba(126,231,214,.18);border-radius:18px;padding:26px 22px;margin-bottom:18px;}\n.dm-survei-kepala{text-align:center;max-width:44ch;margin:0 auto 22px;}\n.dm-survei-kepala h3{font-family:'Bricolage Grotesque',sans-serif;font-weight:800;\n  font-size:clamp(19px,2.6vw,26px);line-height:1.15;letter-spacing:-.02em;margin:0 0 8px;color:#fff;display:block;}\n.dm-survei-kepala p{margin:0;font-size:12.5px;color:#9FC3C0;}\n.dm-angka-utama{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:12px;}\n.dm-angka{background:rgba(255,255,255,.05);border:1px solid rgba(126,231,214,.16);border-radius:14px;\n  padding:16px 14px;text-align:center;}\n.dm-angka-sorot{background:rgba(126,231,214,.1);border-color:rgba(126,231,214,.42);}\n.dm-angka b{display:block;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;\n  font-size:clamp(26px,4vw,40px);line-height:1;letter-spacing:-.03em;color:#7EE7D6;}\n.dm-angka em{font-style:normal;font-size:.45em;margin-left:3px;color:#9FC3C0;font-weight:700;}\n.dm-angka span{display:block;margin-top:7px;font-size:12px;line-height:1.4;color:#C9DCDA;}\n.dm-angka-rinci{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;}\n.dm-angka-rinci div{display:flex;align-items:center;gap:10px;padding:11px 13px;\n  border:1px solid rgba(255,255,255,.12);border-radius:11px;}\n.dm-angka-rinci b{font-size:18px;color:#fff;flex:none;}\n.dm-angka-rinci span{font-size:12px;line-height:1.35;color:#9FC3C0;}\n.dm-survei-ringkas{margin:18px auto 0;max-width:62ch;text-align:center;font-size:13.5px;\n  line-height:1.6;color:#C9DCDA;}\n.dm-testi-judul{font-family:'Bricolage Grotesque',sans-serif;font-size:15px;letter-spacing:.06em;\n  text-transform:uppercase;color:#7EE7D6;text-align:center;margin:26px 0 14px;}\n.dm-testi-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:12px;}\n.dm-testi{margin:0;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.13);\n  border-radius:14px;padding:15px;}\n.dm-testi blockquote{margin:9px 0 12px;font-size:13.5px;line-height:1.6;color:#EAF2F1;}\n.dm-testi figcaption b{display:block;font-size:13px;color:#fff;}\n.dm-testi figcaption span{display:block;font-size:11.5px;color:#9FC3C0;margin-top:2px;}\n.dm-testi figcaption em{font-style:normal;color:#7EE7D6;}\n.dm-bintang{color:#F5B301;font-size:14px;letter-spacing:2px;}\n.dm-bintang-sisa{color:rgba(255,255,255,.22);}\n.dm-survei-kaki{margin:20px auto 0;max-width:60ch;text-align:center;font-size:11.5px;line-height:1.6;\n  color:#7F9E9C;border-top:1px solid rgba(255,255,255,.13);padding-top:14px;}\n.dm-textarea-besar{font-size:14px;font-family:Inter,system-ui,sans-serif;}\n@media (max-width:820px){\n  .dm-angka-utama,.dm-angka-rinci{grid-template-columns:1fr;}\n  .dm-survei{padding:22px 16px;}\n}\n\n/* --- Berkarir bersama Dewa Medik --- */\n.dm-karir{background:var(--surface);border:1px solid var(--line);border-radius:18px;padding:24px 22px;\n  margin-bottom:18px;box-shadow:0 1px 2px rgba(11,31,42,.04),0 8px 22px -16px rgba(11,31,42,.28);}\n.dm-karir-kepala{text-align:center;max-width:48ch;margin:0 auto 20px;}\n.dm-karir-tanda{display:inline-block;font-size:10.5px;font-weight:700;letter-spacing:.14em;\n  text-transform:uppercase;color:var(--vital);border:1px solid var(--vital);border-radius:999px;\n  padding:3px 12px;margin-bottom:10px;}\n.dm-karir-kepala h3{font-family:'Bricolage Grotesque',sans-serif;font-weight:800;\n  font-size:clamp(19px,2.5vw,26px);letter-spacing:-.02em;margin:0 0 8px;display:block;}\n.dm-karir-kepala p{margin:0;font-size:13.5px;color:var(--ink2);}\n.dm-karir-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:12px;}\n.dm-lowongan{border:1px solid var(--line);border-left:3px solid var(--teal);border-radius:12px;padding:15px;\n  display:flex;flex-direction:column;background:#FBFDFC;}\n.dm-lowongan-atas{display:flex;justify-content:space-between;align-items:flex-start;gap:9px;}\n.dm-lowongan-atas b{font-size:15.5px;line-height:1.25;}\n.dm-lowongan-tipe{flex:none;font-size:10.5px;font-weight:600;color:var(--teal-d);\n  background:#EFF8F7;border:1px solid var(--teal);border-radius:999px;padding:2px 9px;}\n.dm-lowongan-tempat{margin:5px 0 0;font-size:12.5px;color:var(--muted);}\n.dm-lowongan-isi{margin:10px 0 0;font-size:13px;line-height:1.55;color:var(--ink2);}\n.dm-lowongan-syarat{margin:8px 0 0;font-size:12.5px;line-height:1.55;color:var(--muted);\n  border-top:1px dashed var(--line);padding-top:8px;}\n.dm-lowongan-kaki{display:flex;justify-content:space-between;align-items:center;gap:10px;\n  margin-top:auto;padding-top:13px;flex-wrap:wrap;}\n.dm-lowongan-kaki em{font-style:normal;font-size:11.5px;color:var(--muted);}\n.dm-footer{background:var(--ink);color:#EAF2F1;margin-top:34px;overflow:hidden;}\n.dm-footer .dm-ecg{height:22px;margin-bottom:6px;}\n.dm-footer-in{text-align:center;padding-top:14px;padding-bottom:30px;}\n.dm-slogan{font-family:'Bricolage Grotesque',sans-serif;font-weight:700;font-size:clamp(15px,2.2vw,19px);\n  letter-spacing:-.01em;margin:0 0 16px;color:#fff;}\n.dm-footer h4{font-family:'Bricolage Grotesque',sans-serif;font-weight:800;letter-spacing:.06em;\n  font-size:15px;margin:0;color:#fff;text-transform:uppercase;}\n.dm-motto{margin:3px 0 16px;font-size:13px;color:#8FB0AF;font-style:italic;}\n.dm-sosial{display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:8px;font-size:13.5px;}\n.dm-sosial a{color:#B7CFCD;text-decoration:none;border:1px solid rgba(255,255,255,.22);\n  border-radius:999px;padding:5px 13px;}\n.dm-sosial a:hover{background:rgba(255,255,255,.1);color:#fff;}\n.dm-handle{font-family:'JetBrains Mono',monospace;color:var(--vital);font-size:13.5px;padding-left:4px;}\n.dm-situs{display:inline-block;margin-top:14px;color:#fff;font-size:14px;font-weight:600;\n  text-decoration:none;border-bottom:2px solid var(--vital);padding-bottom:2px;}\n.dm-footer-kecil{margin:18px 0 0;font-size:12px;color:#7F9E9C;line-height:1.6;}\n.dm-toast{position:fixed;left:50%;bottom:96px;transform:translateX(-50%);background:var(--ink);color:#fff;padding:10px 18px;border-radius:999px;font-size:13px;z-index:60;}\n\n@media (max-width:820px){\n  .dm-grid2,.dm-berkas-grid{grid-template-columns:1fr;}\n  .dm-bar-in{gap:10px;}\n  .dm-bar-in .dm-btn{width:100%;}\n}\n\n/* ============================================================\n   REDESIGN TAHAP 2 — DESIGN SYSTEM & HALAMAN PESERTA\n   Ditempatkan di akhir agar menimpa aturan lama lewat cascade.\n   Kelas back office lama tidak dihapus, hanya diselaraskan.\n   ============================================================ */\n\n.dm-root{\n  --dm-navy-950:#061A23; --dm-navy-900:#082630; --dm-navy-800:#0B3540;\n  --dm-teal-600:#087F83;  --dm-teal-500:#0A969A; --dm-teal-100:#DDF4F3;\n  --dm-red-600:#D51F4B;   --dm-red-100:#FCE7ED;\n  --dm-bg:#F5F8F8; --dm-surface:#FFFFFF; --dm-surface-soft:#F8FAFA;\n  --dm-text:#102A33; --dm-text-secondary:#62747B; --dm-border:#DDE6E8;\n  --dm-success:#16865A; --dm-warning:#C77A16; --dm-danger:#C83D4D;\n\n  --dm-radius-sm:10px; --dm-radius-md:14px; --dm-radius-lg:18px; --dm-radius-xl:24px;\n  --dm-shadow-sm:0 2px 8px rgba(6,26,35,.05);\n  --dm-shadow-md:0 8px 30px rgba(6,26,35,.08);\n  --dm-shadow-lg:0 18px 50px rgba(6,26,35,.12);\n\n  --dm-s1:4px; --dm-s2:8px; --dm-s3:12px; --dm-s4:16px; --dm-s5:20px;\n  --dm-s6:24px; --dm-s8:32px; --dm-s10:40px; --dm-s12:48px; --dm-s16:64px;\n\n  --dm-t:180ms cubic-bezier(.22,.61,.36,1);\n\n  /* token lama dipetakan ke token baru agar back office ikut selaras */\n  --ink:var(--dm-navy-950); --ink2:#22414C; --paper:var(--dm-bg);\n  --surface:var(--dm-surface); --line:var(--dm-border);\n  --teal:var(--dm-teal-500); --teal-d:var(--dm-teal-600);\n  --vital:var(--dm-red-600); --muted:var(--dm-text-secondary); --wait:var(--dm-warning);\n\n  font-family:\"Plus Jakarta Sans\",\"Inter\",system-ui,-apple-system,\"Segoe UI\",sans-serif;\n  font-size:15.5px; line-height:1.6; color:var(--dm-text);\n  background:\n    radial-gradient(900px 420px at 92% -6%, rgba(10,150,154,.09), transparent 60%),\n    radial-gradient(700px 340px at -4% 2%, rgba(213,31,75,.055), transparent 58%),\n    var(--dm-bg);\n}\n\n.dm-wrap{max-width:1240px;margin:0 auto;padding:0 24px;}\n.dm-main{padding-top:0;padding-bottom:120px;}\n@media (max-width:820px){ .dm-wrap{padding:0 16px;} .dm-main{padding-bottom:150px;} }\n\n/* ---------------- NAVBAR ---------------- */\n.dm-header{\n  position:sticky;top:0;z-index:60;border-bottom:1px solid rgba(6,26,35,.07);\n  background:rgba(255,255,255,.82);backdrop-filter:blur(14px) saturate(1.6);\n  -webkit-backdrop-filter:blur(14px) saturate(1.6);color:var(--dm-text);\n}\n.dm-header-in{display:flex;align-items:center;gap:var(--dm-s5);\n  min-height:76px;padding:0 24px;flex-wrap:nowrap;}\n@media (max-width:820px){ .dm-header-in{min-height:64px;padding:0 16px;gap:var(--dm-s3);} }\n\n.dm-brand{display:flex;align-items:center;gap:var(--dm-s3);min-width:0;flex:none;}\n.dm-mark{width:46px;height:51px;border-radius:12px;object-fit:cover;background:#fff;flex:none;\n  padding:2px;box-shadow:var(--dm-shadow-sm),0 0 0 1px var(--dm-border);\n  cursor:pointer;transition:transform var(--dm-t);}\n.dm-mark:hover{transform:translateY(-1px) scale(1.03);}\n.dm-brand b{display:block;font-size:16px;font-weight:800;letter-spacing:-.02em;\n  line-height:1.2;color:var(--dm-navy-950);}\n.dm-brand i{display:block;font-style:normal;font-size:11.5px;color:var(--dm-text-secondary);\n  letter-spacing:.01em;}\n@media (max-width:820px){ .dm-mark{width:40px;height:44px;} .dm-brand b{font-size:14.5px;} .dm-brand i{font-size:10.5px;} }\n\n.dm-navlink{display:flex;align-items:center;gap:2px;margin-left:auto;}\n.dm-navlink a{font-size:13.5px;font-weight:600;color:var(--dm-text-secondary);\n  text-decoration:none;padding:9px 13px;border-radius:var(--dm-radius-sm);\n  transition:color var(--dm-t),background var(--dm-t);white-space:nowrap;}\n.dm-navlink a:hover{color:var(--dm-teal-600);background:var(--dm-teal-100);}\n@media (max-width:1080px){ .dm-navlink{display:none;} }\n\n.dm-akreditasi{display:inline-flex;align-items:center;gap:9px;margin:0 0 0 12px;flex:none;\n  background:var(--dm-teal-100);border:1px solid rgba(8,127,131,.28);\n  border-radius:var(--dm-radius-sm);padding:6px 12px;color:var(--dm-teal-600);\n  white-space:nowrap;text-align:left;}\n.dm-lencana{display:grid;place-items:center;width:24px;height:24px;flex:none;border-radius:7px;\n  background:linear-gradient(140deg,var(--dm-teal-500),var(--dm-teal-600));color:#fff;\n  font-weight:800;font-size:13.5px;line-height:1;}\n.dm-akre-teks{display:block;font-size:11.5px;font-weight:700;line-height:1.3;}\n.dm-akre-teks small{display:block;font-size:10px;font-weight:500;color:var(--dm-text-secondary);}\n@media (max-width:1080px){ .dm-akreditasi{margin-left:auto;} }\n@media (max-width:820px){ .dm-akre-teks small{display:none;} .dm-akre-teks{font-size:10.5px;} }\n@media (max-width:600px){\n  .dm-akreditasi{padding:6px 9px;gap:6px;}\n  .dm-akre-teks{font-size:0;}\n  .dm-akre-teks::after{content:\"Terakreditasi\";font-size:10.5px;font-weight:700;}\n}\n.dm-header .dm-ecg{display:none;}\n.dm-header .dm-tab{color:var(--dm-text-secondary);border-color:var(--dm-border);}\n.dm-header .dm-tab-on{background:var(--dm-navy-950);color:#fff;border-color:var(--dm-navy-950);}\n.dm-header .dm-nav{margin-left:auto;}\n\n/* ---------------- HERO ---------------- */\n.dm-hero{position:relative;overflow:hidden;border-radius:var(--dm-radius-xl);\n  margin:var(--dm-s6) 0 var(--dm-s5);padding:clamp(28px,4.4vw,58px) clamp(20px,3.4vw,52px);\n  background:\n    radial-gradient(900px 460px at 78% 8%, rgba(10,150,154,.30), transparent 58%),\n    radial-gradient(620px 400px at 6% 96%, rgba(213,31,75,.20), transparent 60%),\n    linear-gradient(140deg,var(--dm-navy-950) 0%,var(--dm-navy-900) 52%,var(--dm-navy-800) 100%);\n  color:#E9F4F3;box-shadow:var(--dm-shadow-lg);isolation:isolate;}\n.dm-hero-in{position:relative;z-index:2;display:grid;grid-template-columns:1.35fr .95fr;\n  gap:clamp(24px,3.2vw,48px);align-items:center;}\n@media (max-width:960px){ .dm-hero-in{grid-template-columns:1fr;} }\n\n.dm-eyebrow{display:inline-flex;align-items:center;gap:8px;margin:0 0 var(--dm-s4);\n  font-size:11px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;\n  color:#8FE3DA;background:rgba(10,150,154,.16);border:1px solid rgba(126,231,214,.28);\n  border-radius:999px;padding:6px 14px;}\n.dm-eyebrow::before{content:\"\";width:6px;height:6px;border-radius:50%;background:#7EE7D6;\n  box-shadow:0 0 0 4px rgba(126,231,214,.18);}\n.dm-hero h1{font-size:clamp(28px,4.1vw,52px);line-height:1.08;letter-spacing:-.033em;\n  font-weight:800;margin:0 0 var(--dm-s4);color:#fff;max-width:24ch;}\n.dm-hero h1 .dm-baris1{display:block;}\n.dm-hero-sub{margin:0 0 var(--dm-s6);font-size:clamp(14.5px,1.25vw,17px);line-height:1.65;\n  color:#B6D2D0;max-width:46ch;}\n.dm-trust{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px 18px;margin:0;\n  padding:0;list-style:none;max-width:520px;}\n.dm-trust li{display:flex;align-items:flex-start;gap:9px;font-size:13.2px;line-height:1.45;\n  color:#D3E7E5;}\n.dm-cek-kecil{display:grid;place-items:center;width:19px;height:19px;flex:none;margin-top:1px;\n  border-radius:50%;background:rgba(126,231,214,.16);border:1px solid rgba(126,231,214,.42);\n  color:#7EE7D6;font-size:10.5px;font-weight:800;}\n@media (max-width:560px){ .dm-trust{grid-template-columns:1fr;gap:9px;} }\n\n/* kartu kaca 3 langkah */\n.dm-hero-kartu{background:rgba(255,255,255,.075);border:1px solid rgba(255,255,255,.16);\n  border-radius:var(--dm-radius-lg);padding:var(--dm-s6);backdrop-filter:blur(10px);\n  -webkit-backdrop-filter:blur(10px);box-shadow:0 12px 40px -18px rgba(0,0,0,.7);}\n.dm-hero-kartu h2{font-size:17px;font-weight:800;letter-spacing:-.015em;margin:0 0 var(--dm-s5);\n  color:#fff;line-height:1.35;}\n.dm-langkah{display:flex;gap:13px;align-items:flex-start;padding:11px 0;\n  border-top:1px solid rgba(255,255,255,.1);}\n.dm-langkah:first-of-type{border-top:0;padding-top:0;}\n.dm-langkah span{display:grid;place-items:center;width:30px;height:30px;flex:none;\n  border-radius:10px;background:linear-gradient(140deg,var(--dm-teal-500),var(--dm-teal-600));\n  color:#fff;font-weight:800;font-size:13.5px;}\n.dm-langkah b{display:block;font-size:14px;font-weight:700;color:#fff;line-height:1.35;}\n.dm-langkah i{display:block;font-style:normal;font-size:12.2px;color:#9FC3C0;margin-top:2px;}\n\n/* ---------------- ECG ---------------- */\n.dm-hero-ecg{position:absolute;inset:auto 0 0 0;z-index:1;height:min(46%,230px);\n  pointer-events:none;opacity:.55;\n  -webkit-mask-image:linear-gradient(to bottom,transparent,#000 45%,#000 82%,transparent);\n  mask-image:linear-gradient(to bottom,transparent,#000 45%,#000 82%,transparent);}\n.dm-hero-ecg svg{width:100%;height:100%;display:block;}\n.dm-ecg-jalur{fill:none;stroke:#25C8BC;stroke-width:1.7;stroke-linecap:round;\n  stroke-linejoin:round;vector-effect:non-scaling-stroke;}\n.dm-ecg-tebal{stroke:#7EE7D6;stroke-width:2.1;filter:drop-shadow(0 0 5px rgba(126,231,214,.55));}\n.dm-ecg-tipis{opacity:.3;stroke-width:1.2;}\n.dm-ecg-geser{animation:dm-geser 13s linear infinite;}\n.dm-ecg-geser-pelan{animation:dm-geser 21s linear infinite;}\n@keyframes dm-geser{from{transform:translateX(0);}to{transform:translateX(-50%);}}\n.dm-denyut{r:3.4;fill:#9CF3E6;filter:drop-shadow(0 0 6px rgba(126,231,214,.9));\n  animation:dm-denyut 2.6s ease-in-out infinite;}\n@keyframes dm-denyut{0%,100%{opacity:.25;r:2.6;}12%{opacity:1;r:4.2;}30%{opacity:.35;r:3;}}\n@media (max-width:820px){ .dm-hero-ecg{opacity:.3;height:38%;} .dm-ecg-tipis{display:none;} }\n@media (prefers-reduced-motion: reduce){\n  .dm-ecg-geser,.dm-ecg-geser-pelan,.dm-denyut{animation:none;}\n  .dm-ecg path{animation:none;stroke-dashoffset:0;}\n}\n\n/* ---------------- PENCARIAN & SARINGAN ---------------- */\n.dm-cari{background:var(--dm-surface);border:1px solid var(--dm-border);\n  border-radius:var(--dm-radius-lg);padding:var(--dm-s5);margin-bottom:var(--dm-s5);\n  box-shadow:var(--dm-shadow-sm);}\n.dm-cari-baris{display:grid;grid-template-columns:1.6fr repeat(4,minmax(0,1fr)) auto;\n  gap:var(--dm-s3);align-items:end;}\n@media (max-width:1080px){ .dm-cari-baris{grid-template-columns:repeat(2,minmax(0,1fr));} }\n@media (max-width:560px){ .dm-cari-baris{grid-template-columns:1fr;} }\n.dm-cari .dm-field{margin-bottom:0;}\n.dm-cari-tombol{height:48px;white-space:nowrap;}\n@media (max-width:560px){ .dm-cari-tombol{width:100%;} }\n.dm-cari-kaki{display:flex;justify-content:space-between;align-items:center;gap:12px;\n  margin-top:var(--dm-s4);padding-top:var(--dm-s3);border-top:1px solid var(--dm-border);\n  font-size:13px;color:var(--dm-text-secondary);flex-wrap:wrap;}\n\n/* ---------------- KATALOG PELATIHAN ---------------- */\n.dm-katalog-kepala{display:flex;justify-content:space-between;align-items:flex-end;gap:16px;\n  margin:var(--dm-s8) 0 var(--dm-s4);flex-wrap:wrap;}\n.dm-katalog-kepala h2{font-size:clamp(20px,2.3vw,27px);font-weight:800;letter-spacing:-.025em;\n  margin:0;line-height:1.2;}\n.dm-katalog-kepala p{margin:5px 0 0;font-size:13.5px;color:var(--dm-text-secondary);}\n\n.dm-kelas-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--dm-s4);}\n@media (min-width:1500px){ .dm-kelas-grid{grid-template-columns:repeat(4,minmax(0,1fr));} }\n@media (max-width:1080px){ .dm-kelas-grid{grid-template-columns:repeat(2,minmax(0,1fr));} }\n@media (max-width:700px){ .dm-kelas-grid{grid-template-columns:1fr;} }\n\n.dm-kelas{position:relative;display:flex;flex-direction:column;text-align:left;\n  background:var(--dm-surface);border:1px solid var(--dm-border);border-top:0;\n  border-radius:var(--dm-radius-lg);padding:0;cursor:pointer;font:inherit;color:inherit;\n  overflow:hidden;box-shadow:var(--dm-shadow-sm);\n  transition:transform var(--dm-t),box-shadow var(--dm-t),border-color var(--dm-t);}\n.dm-kelas::before{content:\"\";display:block;height:4px;width:100%;background:var(--dm-navy-900);}\n.dm-kelas:hover:not(:disabled){transform:translateY(-3px);box-shadow:var(--dm-shadow-md);\n  border-color:rgba(8,127,131,.4);}\n.dm-kelas:focus-visible{outline:2px solid var(--dm-teal-500);outline-offset:3px;}\n.dm-kelas-on{border-color:var(--dm-teal-500);background:#F4FCFB;\n  box-shadow:0 0 0 3px rgba(10,150,154,.16),var(--dm-shadow-md);}\n.dm-kelas-off{opacity:.62;cursor:not-allowed;}\n.dm-kelas-isi{padding:var(--dm-s5);display:flex;flex-direction:column;flex:1;}\n.dm-kelas b{display:block;margin:11px 0 12px;font-size:16px;font-weight:800;\n  letter-spacing:-.02em;line-height:1.3;color:var(--dm-navy-950);}\n.dm-kelas i{display:flex;align-items:flex-start;gap:8px;font-style:normal;font-size:13px;\n  color:var(--dm-text-secondary);margin-bottom:6px;line-height:1.45;}\n.dm-ikon{flex:none;width:15px;text-align:center;color:var(--dm-teal-600);opacity:.85;\n  font-size:12.5px;margin-top:1px;}\n.dm-kelas-kaki{display:flex;justify-content:space-between;align-items:flex-end;gap:10px;\n  margin-top:auto;padding-top:var(--dm-s4);border-top:1px dashed var(--dm-border);}\n.dm-kelas-harga{display:block;font-size:19px;font-weight:800;letter-spacing:-.02em;\n  color:var(--dm-navy-950);text-decoration:none;}\n.dm-kelas-harga small{display:block;font-size:11px;font-weight:600;\n  color:var(--dm-text-secondary);letter-spacing:0;margin-bottom:1px;}\n.dm-kelas-cta{display:inline-flex;align-items:center;gap:6px;height:40px;padding:0 15px;\n  border-radius:var(--dm-radius-sm);font-size:13.5px;font-weight:700;\n  background:var(--dm-navy-950);color:#fff;transition:background var(--dm-t);}\n.dm-kelas:hover:not(:disabled) .dm-kelas-cta{background:var(--dm-teal-600);}\n.dm-kelas-on .dm-kelas-cta{background:var(--dm-teal-600);}\n.dm-kelas-off .dm-kelas-cta{background:var(--dm-border);color:var(--dm-text-secondary);}\n\n.dm-jenis{display:inline-block;background:var(--dm-navy-950);color:#fff;font-size:10.5px;\n  font-weight:800;letter-spacing:.09em;padding:4px 10px;border-radius:7px;}\n\n.dm-kuota{display:inline-flex;align-items:center;gap:6px;font-size:12px;font-weight:700;\n  padding:4px 10px;border-radius:999px;border:1px solid;}\n.dm-kuota::before{content:\"\";width:6px;height:6px;border-radius:50%;background:currentColor;}\n.dm-kuota-ada{color:var(--dm-success);border-color:rgba(22,134,90,.32);background:rgba(22,134,90,.08);}\n.dm-kuota-tipis{color:var(--dm-warning);border-color:rgba(199,122,22,.34);background:rgba(199,122,22,.09);}\n.dm-kuota-habis{color:var(--dm-danger);border-color:rgba(200,61,77,.32);background:rgba(200,61,77,.08);}\n.dm-kelas-atas{display:flex;justify-content:space-between;align-items:center;gap:10px;}\n\n.dm-terpilih{position:absolute;top:14px;right:14px;display:inline-flex;align-items:center;gap:6px;\n  background:var(--dm-teal-600);color:#fff;font-size:11px;font-weight:800;letter-spacing:.04em;\n  padding:5px 11px;border-radius:999px;box-shadow:0 4px 12px -4px rgba(8,127,131,.8);}\n\n/* ---------------- TATA LETAK PENDAFTARAN ---------------- */\n.dm-daftar-grid{display:grid;grid-template-columns:minmax(0,1fr) 372px;\n  gap:var(--dm-s5);align-items:start;margin-top:var(--dm-s5);}\n@media (max-width:1080px){ .dm-daftar-grid{grid-template-columns:1fr;} }\n.dm-sisi{position:sticky;top:96px;}\n@media (max-width:1080px){ .dm-sisi{position:static;} }\n\n/* ---------------- KARTU & FORMULIR ---------------- */\n.dm-card{background:var(--dm-surface);border:1px solid var(--dm-border);\n  border-radius:var(--dm-radius-lg);padding:var(--dm-s6);margin-bottom:var(--dm-s5);\n  box-shadow:var(--dm-shadow-sm);}\n@media (max-width:560px){ .dm-card{padding:var(--dm-s5);} }\n.dm-card h3{font-size:17.5px;font-weight:800;letter-spacing:-.02em;margin:0 0 var(--dm-s5);\n  display:flex;align-items:center;gap:11px;line-height:1.3;}\n.dm-nomor{display:grid;place-items:center;width:30px;height:30px;flex:none;border-radius:10px;\n  font-size:13.5px;font-weight:800;color:#fff;\n  background:linear-gradient(140deg,var(--dm-teal-500),var(--dm-teal-600));\n  box-shadow:0 4px 10px -4px rgba(8,127,131,.7);}\n.dm-nonaktif{opacity:.5;pointer-events:none;filter:grayscale(.25);}\n\n.dm-kelompok{margin-bottom:var(--dm-s6);}\n.dm-kelompok:last-child{margin-bottom:0;}\n.dm-kelompok-judul{display:flex;align-items:center;gap:10px;margin:0 0 var(--dm-s4);\n  font-size:12px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;\n  color:var(--dm-teal-600);}\n.dm-kelompok-judul::after{content:\"\";flex:1;height:1px;background:var(--dm-border);}\n\n.dm-field{display:block;margin-bottom:var(--dm-s4);}\n.dm-label{display:block;font-size:13px;font-weight:700;color:var(--dm-text);\n  margin-bottom:7px;letter-spacing:-.005em;}\n.dm-hint{font-size:12.2px;color:var(--dm-text-secondary);margin:6px 0 0;line-height:1.5;}\n.dm-input,.dm-textarea{width:100%;min-height:48px;padding:12px 14px;\n  border:1px solid var(--dm-border);border-radius:var(--dm-radius-sm);background:#fff;\n  font:inherit;font-size:15px;color:var(--dm-text);\n  transition:border-color var(--dm-t),box-shadow var(--dm-t),background var(--dm-t);}\n.dm-input::placeholder{color:#A9B8BD;}\n.dm-input:hover{border-color:#C2D2D6;}\n.dm-input:focus,.dm-textarea:focus{outline:none;border-color:var(--dm-teal-500);\n  box-shadow:0 0 0 3px rgba(10,150,154,.15);background:#fff;}\n.dm-field-salah .dm-input{border-color:var(--dm-danger);background:#FFF8F9;}\n.dm-field-salah .dm-input:focus{box-shadow:0 0 0 3px rgba(200,61,77,.15);}\n.dm-textarea{min-height:auto;}\nselect.dm-input{appearance:none;-webkit-appearance:none;padding-right:38px;cursor:pointer;\n  background-image:linear-gradient(45deg,transparent 50%,var(--dm-text-secondary) 50%),\n    linear-gradient(135deg,var(--dm-text-secondary) 50%,transparent 50%);\n  background-position:calc(100% - 19px) 21px,calc(100% - 14px) 21px;\n  background-size:5px 5px,5px 5px;background-repeat:no-repeat;}\n.dm-mono{font-family:\"JetBrains Mono\",ui-monospace,SFMono-Regular,Menlo,monospace;}\n.dm-grid2{display:grid;grid-template-columns:1fr 1fr;gap:var(--dm-s4);}\n@media (max-width:700px){ .dm-grid2{grid-template-columns:1fr;} }\n.dm-err{color:var(--dm-danger);font-size:12.5px;margin:6px 0 0;display:block;font-weight:600;}\n.dm-ok{color:var(--dm-success);font-size:12.5px;margin:6px 0 0;font-weight:600;}\n\n/* ---------------- TOMBOL ---------------- */\n.dm-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;\n  min-height:48px;padding:0 22px;border-radius:var(--dm-radius-sm);\n  background:linear-gradient(150deg,var(--dm-teal-500),var(--dm-teal-600));\n  color:#fff;border:1px solid var(--dm-teal-600);font:inherit;font-size:15px;font-weight:700;\n  cursor:pointer;text-decoration:none;box-shadow:0 4px 12px -6px rgba(8,127,131,.8);\n  transition:transform var(--dm-t),box-shadow var(--dm-t),filter var(--dm-t);}\n.dm-btn:hover:not(:disabled){transform:translateY(-1px);box-shadow:0 8px 20px -8px rgba(8,127,131,.85);}\n.dm-btn:active:not(:disabled){transform:translateY(0);filter:brightness(.96);}\n.dm-btn:disabled{opacity:.5;cursor:not-allowed;box-shadow:none;transform:none;}\n.dm-btn-navy{background:linear-gradient(150deg,var(--dm-navy-800),var(--dm-navy-950));\n  border-color:var(--dm-navy-950);box-shadow:0 4px 12px -6px rgba(6,26,35,.7);}\n.dm-btn-aksen{background:linear-gradient(150deg,#E4325C,var(--dm-red-600));\n  border-color:var(--dm-red-600);box-shadow:0 4px 12px -6px rgba(213,31,75,.75);}\n.dm-btn-wa{background:linear-gradient(150deg,#1EA97C,#128C7E);border-color:#128C7E;}\n.dm-btn-blok{width:100%;}\n.dm-btn-line{display:inline-flex;align-items:center;justify-content:center;gap:7px;\n  min-height:44px;padding:0 17px;border-radius:var(--dm-radius-sm);background:#fff;\n  color:var(--dm-text);border:1px solid var(--dm-border);font:inherit;font-size:14px;\n  font-weight:600;cursor:pointer;text-decoration:none;\n  transition:border-color var(--dm-t),background var(--dm-t),color var(--dm-t);}\n.dm-btn-line:hover{border-color:var(--dm-teal-500);color:var(--dm-teal-600);background:var(--dm-teal-100);}\n.dm-btn-ghost{background:transparent;border:none;color:var(--dm-teal-600);font:inherit;\n  font-size:13.5px;font-weight:600;cursor:pointer;padding:8px 6px;text-decoration:none;\n  border-bottom:1px solid transparent;transition:border-color var(--dm-t);}\n.dm-btn-ghost:hover{border-bottom-color:var(--dm-teal-600);}\n.dm-memuat{position:relative;color:transparent !important;}\n.dm-memuat::after{content:\"\";position:absolute;width:17px;height:17px;border-radius:50%;\n  border:2px solid rgba(255,255,255,.35);border-top-color:#fff;animation:dm-putar .7s linear infinite;}\n@keyframes dm-putar{to{transform:rotate(360deg);}}\nbutton:focus-visible,a:focus-visible{outline:2px solid var(--dm-teal-500);outline-offset:2px;}\n\n/* ---------------- UNGGAH ---------------- */\n.dm-unggah{margin-bottom:var(--dm-s3);}\n.dm-unggah-tombol{width:100%;display:flex;gap:14px;align-items:center;text-align:left;\n  background:var(--dm-surface-soft);border:1.5px dashed var(--dm-border);\n  border-radius:var(--dm-radius-md);padding:17px;font:inherit;color:inherit;cursor:pointer;\n  min-height:76px;transition:border-color var(--dm-t),background var(--dm-t),transform var(--dm-t);}\n.dm-unggah-tombol:hover{border-color:var(--dm-teal-500);background:var(--dm-teal-100);\n  transform:translateY(-1px);}\n.dm-unggah-nada .dm-unggah-tombol{border-color:rgba(213,31,75,.3);background:#FFF9FB;}\n.dm-unggah-nada .dm-unggah-tombol:hover{border-color:var(--dm-red-600);background:var(--dm-red-100);}\n.dm-unggah-tombol b{display:block;font-size:14.5px;font-weight:700;}\n.dm-unggah-tombol p{margin:4px 0 0;font-size:12.5px;color:var(--dm-text-secondary);line-height:1.5;}\n.dm-kamera{display:grid;place-items:center;width:46px;height:46px;flex:none;border-radius:13px;\n  background:linear-gradient(140deg,var(--dm-navy-800),var(--dm-navy-950));color:#7EE7D6;\n  font-size:20px;font-weight:300;}\n.dm-unggah-nada .dm-kamera{background:linear-gradient(140deg,#E4325C,var(--dm-red-600));color:#fff;}\n.dm-unggah-hasil{display:flex;gap:13px;align-items:center;border:1.5px solid var(--dm-teal-500);\n  background:#F4FCFB;border-radius:var(--dm-radius-md);padding:13px 15px;min-height:76px;}\n.dm-unggah-hasil img{width:50px;height:50px;object-fit:cover;border-radius:10px;flex:none;\n  border:1px solid var(--dm-border);}\n.dm-unggah-hasil div{flex:1;min-width:0;}\n.dm-unggah-hasil b{display:flex;align-items:center;gap:7px;font-size:14px;font-weight:700;\n  color:var(--dm-teal-600);}\n.dm-unggah-hasil b::before{content:\"✓\";display:grid;place-items:center;width:17px;height:17px;\n  border-radius:50%;background:var(--dm-teal-600);color:#fff;font-size:10px;flex:none;}\n.dm-unggah-hasil p{margin:3px 0 0;font-size:12px;color:var(--dm-text-secondary);\n  overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}\n.dm-pdf{display:grid;place-items:center;width:50px;height:50px;border-radius:10px;\n  background:var(--dm-navy-950);color:#7EE7D6;font-size:11px;font-weight:700;flex:none;}\n.dm-req{font-style:normal;font-size:10px;font-weight:800;color:var(--dm-red-600);\n  background:var(--dm-red-100);border-radius:5px;padding:2px 7px;margin-left:8px;\n  letter-spacing:.04em;text-transform:uppercase;}\n\n/* ---------------- RINGKASAN PENDAFTARAN ---------------- */\n.dm-ringkas{background:var(--dm-surface);border:1px solid var(--dm-border);\n  border-radius:var(--dm-radius-lg);overflow:hidden;box-shadow:var(--dm-shadow-md);}\n.dm-ringkas-kepala{padding:var(--dm-s5);color:#fff;position:relative;overflow:hidden;\n  background:linear-gradient(140deg,var(--dm-navy-950),var(--dm-navy-800));}\n.dm-ringkas-kepala h3{margin:0;font-size:16px;font-weight:800;letter-spacing:-.015em;\n  color:#fff;display:block;}\n.dm-ringkas-kepala p{margin:4px 0 0;font-size:12.2px;color:#9FC3C0;}\n.dm-ringkas-isi{padding:var(--dm-s5);}\n.dm-ringkas-kosong{text-align:center;padding:var(--dm-s6) var(--dm-s4);}\n.dm-ringkas-kosong span{display:grid;place-items:center;width:52px;height:52px;margin:0 auto 14px;\n  border-radius:16px;background:var(--dm-teal-100);color:var(--dm-teal-600);font-size:22px;}\n.dm-ringkas-kosong b{display:block;font-size:14.5px;font-weight:700;margin-bottom:5px;}\n.dm-ringkas-kosong p{margin:0;font-size:12.8px;color:var(--dm-text-secondary);line-height:1.55;}\n.dm-ringkas-kelas{padding-bottom:var(--dm-s4);margin-bottom:var(--dm-s4);\n  border-bottom:1px solid var(--dm-border);}\n.dm-ringkas-kelas b{display:block;font-size:15px;font-weight:800;letter-spacing:-.015em;\n  margin:9px 0 6px;line-height:1.35;}\n.dm-ringkas-kelas i{display:block;font-style:normal;font-size:12.5px;\n  color:var(--dm-text-secondary);margin-bottom:3px;}\n.dm-baris{display:flex;justify-content:space-between;gap:12px;padding:7px 0;font-size:13.5px;\n  color:var(--dm-text-secondary);align-items:baseline;}\n.dm-baris b{color:var(--dm-text);font-weight:700;}\n.dm-baris-diskon b{color:var(--dm-teal-600);}\n.dm-baris-total{margin-top:var(--dm-s3);padding-top:var(--dm-s4);\n  border-top:1px solid var(--dm-border);font-size:14px;color:var(--dm-text);}\n.dm-baris-total b{font-size:23px;font-weight:800;letter-spacing:-.025em;color:var(--dm-navy-950);}\n.dm-ringkas-sisa{margin:10px 0 0;padding:9px 12px;border-radius:var(--dm-radius-sm);\n  background:#FFF8EC;border:1px solid rgba(199,122,22,.3);font-size:12.2px;\n  color:#8A5A10;line-height:1.5;}\n.dm-ringkas-cta{margin-top:var(--dm-s5);}\n.dm-ringkas-aman{display:flex;align-items:flex-start;gap:8px;margin:var(--dm-s4) 0 0;\n  font-size:11.5px;color:var(--dm-text-secondary);line-height:1.5;}\n.dm-cek-voucher{display:inline-flex;align-items:center;gap:7px;font-size:12.2px;\n  color:var(--dm-teal-600);font-weight:600;margin:2px 0 0;}\n.dm-putar-kecil{width:12px;height:12px;border-radius:50%;border:2px solid rgba(8,127,131,.25);\n  border-top-color:var(--dm-teal-600);animation:dm-putar .7s linear infinite;flex:none;}\n@media (prefers-reduced-motion: reduce){ .dm-putar-kecil,.dm-memuat::after{animation:none;} }\n\n/* ---------------- BAR BAWAH (MOBILE) ---------------- */\n.dm-bar{position:sticky;bottom:0;z-index:40;border-radius:var(--dm-radius-lg);\n  margin-top:var(--dm-s5);overflow:hidden;\n  background:linear-gradient(140deg,var(--dm-navy-950),var(--dm-navy-800));\n  border:1px solid rgba(126,231,214,.2);box-shadow:0 -10px 34px rgba(6,26,35,.26);}\n.dm-bar-in{display:flex;justify-content:space-between;align-items:center;gap:14px;\n  padding:13px 18px 15px;flex-wrap:wrap;}\n.dm-bar-diskon{margin:0;font-size:12.2px;color:#7EE7D6;font-weight:600;}\n.dm-bar-sepi{color:#9FC3C0;font-weight:500;}\n.dm-bar-in b{font-size:23px;font-weight:800;letter-spacing:-.025em;color:#fff;}\n.dm-bar-in s{margin-left:9px;font-size:13.5px;color:#8FB0AF;}\n.dm-bar-sisa{margin:4px 0 0;font-size:11.5px;color:#9FC3C0;}\n@media (min-width:1081px){ .dm-bar{display:none;} }\n@media (max-width:560px){ .dm-bar-in .dm-btn{width:100%;} }\n\n/* ---------------- KOTAK INFORMASI ---------------- */\n.dm-rek{display:flex;justify-content:space-between;align-items:center;gap:14px;flex-wrap:wrap;\n  background:linear-gradient(140deg,var(--dm-navy-950),var(--dm-navy-800));color:#E9F4F3;\n  border:1px solid rgba(126,231,214,.2);border-radius:var(--dm-radius-md);\n  padding:16px 18px;margin-bottom:var(--dm-s4);}\n.dm-rek span{display:block;font-size:12.2px;color:#9FC3C0;}\n.dm-rek b{font-size:21px;font-weight:700;letter-spacing:.02em;color:#fff;}\n.dm-rek .dm-btn-line{background:rgba(255,255,255,.08);color:#fff;\n  border-color:rgba(255,255,255,.28);}\n.dm-rek .dm-btn-line:hover{background:rgba(255,255,255,.16);color:#fff;\n  border-color:rgba(126,231,214,.6);}\n.dm-awas{background:#FFFAEF;border:1px solid rgba(199,122,22,.32);\n  border-left:3px solid var(--dm-warning);border-radius:0 var(--dm-radius-sm) var(--dm-radius-sm) 0;\n  padding:13px 16px;margin:0 0 var(--dm-s4);}\n.dm-awas b{display:block;font-size:13.5px;font-weight:700;color:#7A4A05;}\n.dm-awas p{margin:5px 0 0;font-size:12.5px;color:#8A5A10;line-height:1.55;}\n.dm-awas a{color:#7A4A05;font-weight:700;}\n.dm-catatan{display:block;background:var(--dm-red-100);border:1px solid rgba(213,31,75,.28);\n  border-left:3px solid var(--dm-red-600);border-radius:0 var(--dm-radius-sm) var(--dm-radius-sm) 0;\n  padding:11px 15px;margin:0 0 var(--dm-s4);font-size:12.8px;color:#8C1633;line-height:1.55;}\n\n.dm-pilih-bayar{display:grid;grid-template-columns:1fr 1fr;gap:var(--dm-s3);margin-bottom:var(--dm-s4);}\n@media (max-width:700px){ .dm-pilih-bayar{grid-template-columns:1fr;} }\n.dm-opsi{position:relative;text-align:left;background:#fff;border:1.5px solid var(--dm-border);\n  border-radius:var(--dm-radius-md);padding:16px;cursor:pointer;font:inherit;color:inherit;\n  transition:border-color var(--dm-t),box-shadow var(--dm-t),background var(--dm-t);}\n.dm-opsi:hover{border-color:var(--dm-teal-500);}\n.dm-opsi-on{border-color:var(--dm-teal-500);background:#F4FCFB;\n  box-shadow:0 0 0 3px rgba(10,150,154,.14);}\n.dm-opsi b{display:block;font-size:15.5px;font-weight:800;letter-spacing:-.015em;}\n.dm-opsi i{display:block;font-style:normal;font-size:12.5px;color:var(--dm-text-secondary);\n  margin:5px 0 10px;line-height:1.5;}\n.dm-opsi u{text-decoration:none;font-weight:800;font-size:17px;color:var(--dm-teal-600);\n  letter-spacing:-.02em;}\n.dm-voucher{display:flex;gap:var(--dm-s2);margin-top:var(--dm-s3);}\n.dm-voucher .dm-input{flex:1;text-transform:uppercase;letter-spacing:.06em;}\n.dm-buka-kode{margin-top:var(--dm-s3);}\n\n/* ---------------- KEADAAN KOSONG & MEMUAT ---------------- */\n.dm-kosong-besar{text-align:center;padding:var(--dm-s12) var(--dm-s5);\n  background:var(--dm-surface);border:1px dashed var(--dm-border);\n  border-radius:var(--dm-radius-lg);}\n.dm-kosong-besar span{display:grid;place-items:center;width:62px;height:62px;margin:0 auto 16px;\n  border-radius:20px;background:var(--dm-teal-100);color:var(--dm-teal-600);font-size:26px;}\n.dm-kosong-besar b{display:block;font-size:17px;font-weight:800;margin-bottom:7px;\n  letter-spacing:-.015em;}\n.dm-kosong-besar p{margin:0 auto;max-width:44ch;font-size:13.5px;\n  color:var(--dm-text-secondary);line-height:1.6;}\n.dm-rangka-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--dm-s4);}\n@media (max-width:1080px){ .dm-rangka-grid{grid-template-columns:repeat(2,minmax(0,1fr));} }\n@media (max-width:700px){ .dm-rangka-grid{grid-template-columns:1fr;} }\n.dm-rangka{height:236px;border-radius:var(--dm-radius-lg);background:var(--dm-surface);\n  border:1px solid var(--dm-border);position:relative;overflow:hidden;}\n.dm-rangka::after{content:\"\";position:absolute;inset:0;\n  background:linear-gradient(90deg,transparent,rgba(10,150,154,.07),transparent);\n  animation:dm-kilau 1.5s ease-in-out infinite;}\n@keyframes dm-kilau{from{transform:translateX(-100%);}to{transform:translateX(100%);}}\n@media (prefers-reduced-motion: reduce){ .dm-rangka::after{animation:none;} }\n.dm-load{color:var(--dm-text-secondary);font-size:14px;padding:var(--dm-s6) 0;}\n.dm-kosong{color:var(--dm-text-secondary);font-size:13.5px;}\n\n/* ---------------- PENYELARASAN BAGIAN LAIN ---------------- */\n.dm-survei,.dm-karir{border-radius:var(--dm-radius-xl);margin-bottom:var(--dm-s5);}\n.dm-survei{box-shadow:var(--dm-shadow-lg);}\n.dm-selesai{border-radius:var(--dm-radius-xl);box-shadow:var(--dm-shadow-md);\n  padding:var(--dm-s12) var(--dm-s6);margin:var(--dm-s6) auto;}\n.dm-cek{width:60px;height:60px;font-size:28px;background:var(--dm-teal-100);\n  color:var(--dm-teal-600);}\n.dm-modal{border-radius:var(--dm-radius-lg);box-shadow:var(--dm-shadow-lg);}\n.dm-toast{border-radius:999px;background:var(--dm-navy-950);box-shadow:var(--dm-shadow-md);\n  bottom:110px;font-weight:600;}\n.dm-badge{font-weight:700;border-radius:999px;}\n.dm-footer{margin-top:var(--dm-s10);}\n.dm-gate{max-width:440px;margin:var(--dm-s10) auto;}\n\n\n/* ============================================================\n   PENYELARASAN DENGAN MOCKUP — katalog, kartu, ringkasan\n   ============================================================ */\n\n/* panel katalog */\n.dm-katalog{background:var(--dm-surface);border:1px solid var(--dm-border);\n  border-radius:var(--dm-radius-xl);padding:var(--dm-s6);margin-bottom:var(--dm-s5);\n  box-shadow:var(--dm-shadow-sm);}\n@media (max-width:560px){ .dm-katalog{padding:var(--dm-s5) var(--dm-s4);} }\n.dm-katalog-kepala{display:flex;justify-content:space-between;align-items:center;gap:16px;\n  margin:0 0 var(--dm-s5);flex-wrap:wrap;}\n.dm-katalog-judul{display:flex;align-items:flex-start;gap:13px;}\n.dm-katalog-ikon{display:grid;place-items:center;width:42px;height:42px;flex:none;\n  border-radius:13px;background:var(--dm-teal-100);color:var(--dm-teal-600);font-size:19px;}\n.dm-katalog-kepala h2{font-size:19px;font-weight:800;letter-spacing:-.022em;margin:0;line-height:1.3;}\n.dm-katalog-kepala p{margin:3px 0 0;font-size:13px;color:var(--dm-text-secondary);}\n.dm-urut{display:flex;align-items:center;gap:10px;font-size:13px;color:var(--dm-text-secondary);}\n.dm-urut .dm-input{min-height:42px;padding:9px 34px 9px 13px;font-size:13.5px;min-width:170px;\n  background-position:calc(100% - 17px) 18px,calc(100% - 12px) 18px;}\n@media (max-width:560px){ .dm-urut{width:100%;} .dm-urut .dm-input{flex:1;} }\n\n/* kartu kelas: kini <article>, tombol di dalamnya */\n.dm-kelas{cursor:default;}\n.dm-kelas:hover:not(.dm-kelas-off){transform:translateY(-3px);box-shadow:var(--dm-shadow-md);\n  border-color:rgba(8,127,131,.4);}\n.dm-kelas-isi{padding:var(--dm-s5) var(--dm-s5) 18px;}\n.dm-kelas b{margin:12px 0 13px;}\n.dm-kelas-kaki{padding-top:var(--dm-s4);border-top:1px dashed var(--dm-border);\n  justify-content:flex-start;}\n.dm-kelas-aksi{display:grid;grid-template-columns:1fr 1.25fr;gap:10px;margin-top:14px;}\n.dm-btn-kecil{min-height:44px;padding:0 16px;font-size:14px;}\n.dm-kelas-aksi .dm-btn-line{min-height:44px;}\n\n/* kuota dengan progress */\n.dm-kuota-blok{margin-top:var(--dm-s4);padding-top:var(--dm-s4);\n  border-top:1px dashed var(--dm-border);}\n.dm-kuota{border:0;background:transparent;padding:0;font-size:12.5px;font-weight:600;\n  color:var(--dm-text-secondary);gap:7px;}\n.dm-kuota::before{width:0;height:0;}\n.dm-kuota-ada,.dm-kuota-tipis,.dm-kuota-habis{background:transparent;}\n.dm-kuota-ada{color:var(--dm-success);}\n.dm-kuota-tipis{color:var(--dm-warning);}\n.dm-kuota-habis{color:var(--dm-danger);}\n.dm-bar-kuota{height:5px;border-radius:99px;background:#E8EFF0;overflow:hidden;margin-top:9px;}\n.dm-bar-kuota-isi{height:100%;border-radius:99px;transition:width 400ms cubic-bezier(.22,.61,.36,1);}\n.dm-bar-ada{background:linear-gradient(90deg,#20A97A,var(--dm-success));}\n.dm-bar-tipis{background:linear-gradient(90deg,#E8A33D,var(--dm-warning));}\n.dm-bar-habis{background:linear-gradient(90deg,#E4566A,var(--dm-danger));}\n@media (prefers-reduced-motion: reduce){ .dm-bar-kuota-isi{transition:none;} }\n\n/* modal detail kelas */\n.dm-detail-atas{display:flex;align-items:center;gap:10px;margin-bottom:var(--dm-s5);flex-wrap:wrap;}\n.dm-detail-list{border:1px solid var(--dm-border);border-radius:var(--dm-radius-md);\n  overflow:hidden;margin-bottom:var(--dm-s4);}\n.dm-detail-list div{display:flex;justify-content:space-between;align-items:baseline;gap:16px;\n  padding:13px 16px;border-bottom:1px solid var(--dm-border);}\n.dm-detail-list div:last-child{border-bottom:0;}\n.dm-detail-list div:nth-child(odd){background:var(--dm-surface-soft);}\n.dm-detail-list span{font-size:13px;color:var(--dm-text-secondary);flex:none;}\n.dm-detail-list b{font-size:14px;font-weight:700;text-align:right;}\n.dm-detail-harga{font-size:18px !important;color:var(--dm-teal-600);letter-spacing:-.02em;}\n\n/* pencarian: rapikan agar sebaris seperti mockup */\n.dm-cari{border-radius:var(--dm-radius-xl);padding:var(--dm-s5) var(--dm-s6);}\n.dm-cari .dm-label{font-size:11.5px;font-weight:700;letter-spacing:.03em;\n  color:var(--dm-text-secondary);text-transform:none;}\n\n/* ringkasan: samakan bahasa dengan mockup */\n.dm-ringkas{border-radius:var(--dm-radius-xl);}\n.dm-ringkas-kepala{display:flex;align-items:center;gap:12px;}\n.dm-ringkas-kepala h3{font-size:16.5px;}\n.dm-ringkas-kepala p{display:none;}\n.dm-ringkas-kepala::before{content:\"📋\";display:grid;place-items:center;width:38px;height:38px;\n  flex:none;border-radius:12px;background:rgba(126,231,214,.16);\n  border:1px solid rgba(126,231,214,.3);font-size:17px;}\n\n/* Kenapa memilih */\n.dm-kenapa{background:var(--dm-surface);border:1px solid var(--dm-border);\n  border-radius:var(--dm-radius-xl);padding:var(--dm-s8) var(--dm-s6);margin-bottom:var(--dm-s5);\n  box-shadow:var(--dm-shadow-sm);}\n.dm-kenapa h2{font-size:clamp(19px,2.2vw,25px);font-weight:800;letter-spacing:-.025em;\n  margin:0 0 var(--dm-s6);line-height:1.25;}\n.dm-kenapa-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:var(--dm-s5);}\n@media (max-width:1080px){ .dm-kenapa-grid{grid-template-columns:repeat(2,minmax(0,1fr));} }\n@media (max-width:600px){ .dm-kenapa-grid{grid-template-columns:1fr;gap:var(--dm-s4);} }\n.dm-kenapa-item b{display:block;font-size:14.5px;font-weight:800;letter-spacing:-.015em;\n  margin:13px 0 6px;}\n.dm-kenapa-item p{margin:0;font-size:13px;line-height:1.6;color:var(--dm-text-secondary);}\n.dm-kenapa-ikon{display:grid;place-items:center;width:46px;height:46px;border-radius:14px;\n  font-size:20px;}\n.dm-ki-biru{background:#E8F1FE;}\n.dm-ki-hijau{background:#E6F6EE;}\n.dm-ki-ungu{background:#F0EBFC;}\n.dm-ki-jingga{background:#FDF0E4;}\n\n/* kartu bantuan */\n.dm-bantuan{background:linear-gradient(140deg,var(--dm-navy-950),var(--dm-navy-800));\n  color:#E9F4F3;border:1px solid rgba(126,231,214,.2);border-radius:var(--dm-radius-lg);\n  padding:var(--dm-s5);margin-bottom:var(--dm-s5);box-shadow:var(--dm-shadow-md);}\n.dm-bantuan-isi{display:flex;align-items:center;gap:13px;margin-bottom:var(--dm-s4);}\n.dm-bantuan-ikon{display:grid;place-items:center;width:44px;height:44px;flex:none;\n  border-radius:13px;background:rgba(126,231,214,.14);border:1px solid rgba(126,231,214,.3);\n  font-size:19px;}\n.dm-bantuan b{display:block;font-size:15.5px;font-weight:800;color:#fff;letter-spacing:-.015em;}\n.dm-bantuan p{margin:2px 0 0;font-size:12.8px;color:#9FC3C0;}\n@media (min-width:1081px){\n  .dm-bantuan{position:sticky;bottom:24px;max-width:340px;margin-left:auto;}\n}\n\n\n/* ============================================================\n   STRUKTUR SESUAI MOCKUP — navbar gelap, hero penuh lebar,\n   kolom kanan membentang\n   ============================================================ */\n\n/* --- NAVBAR GELAP --- */\n.dm-header{background:var(--dm-navy-950);color:#EAF4F3;\n  border-bottom:1px solid rgba(255,255,255,.07);backdrop-filter:none;-webkit-backdrop-filter:none;}\n.dm-header-in{min-height:74px;}\n.dm-brand b{color:#fff;}\n.dm-brand i{color:#8FB0AF;}\n.dm-mark{background:#fff;box-shadow:0 0 0 1px rgba(255,255,255,.14),0 6px 16px -8px rgba(0,0,0,.8);}\n\n.dm-navlink{gap:6px;margin:0 auto;}\n.dm-navlink a{position:relative;color:#C6DBD9;font-size:14px;font-weight:600;padding:10px 14px;\n  border-radius:0;}\n.dm-navlink a:hover{color:#fff;background:transparent;}\n.dm-navlink a::after{content:\"\";position:absolute;left:14px;right:14px;bottom:2px;height:2px;\n  border-radius:2px;background:linear-gradient(90deg,var(--dm-teal-500),var(--dm-red-600));\n  transform:scaleX(0);transform-origin:left;transition:transform var(--dm-t);}\n.dm-navlink a:hover::after{transform:scaleX(1);}\n\n.dm-akreditasi{margin:0 0 0 12px;background:rgba(255,255,255,.06);\n  border:1px solid rgba(255,255,255,.14);color:#DCEAE9;padding:8px 14px;\n  border-radius:var(--dm-radius-md);}\n.dm-akre-teks{color:#fff;font-size:12px;}\n.dm-akre-teks small{color:#8FB0AF;font-size:10.5px;}\n.dm-lencana{background:linear-gradient(140deg,#7EE7D6,var(--dm-teal-500));color:#062A29;\n  width:26px;height:26px;border-radius:8px;}\n\n/* --- HERO PENUH LEBAR --- */\n.dm-hero{border-radius:0;margin:0;box-shadow:none;\n  padding:clamp(34px,4.6vw,64px) 0 clamp(64px,6vw,96px);}\n.dm-hero-in{padding-left:24px;padding-right:24px;align-items:start;}\n@media (max-width:820px){\n  .dm-hero{padding:26px 0 58px;}\n  .dm-hero-in{padding-left:16px;padding-right:16px;}\n}\n.dm-hero h1{max-width:21ch;}\n.dm-hero h1 .dm-baris2{display:block;\n  background:linear-gradient(96deg,#7EE7D6 0%,#4FD8E8 60%,#8FD2FF 100%);\n  -webkit-background-clip:text;background-clip:text;color:transparent;}\n.dm-trust{display:flex;flex-wrap:wrap;gap:22px 30px;max-width:none;margin-top:var(--dm-s6);}\n.dm-trust li{flex-direction:row;align-items:center;gap:11px;font-size:13px;max-width:190px;}\n.dm-cek-kecil{width:34px;height:34px;border-radius:11px;font-size:15px;margin-top:0;\n  background:rgba(126,231,214,.1);border:1px solid rgba(126,231,214,.34);}\n@media (max-width:560px){ .dm-trust{gap:14px 18px;} .dm-trust li{max-width:none;width:100%;} }\n\n.dm-hero-kartu{background:rgba(9,38,48,.55);border:1px solid rgba(126,231,214,.18);\n  border-radius:var(--dm-radius-lg);box-shadow:0 20px 60px -26px rgba(0,0,0,.85);}\n.dm-hero-kartu h2{display:flex;align-items:flex-start;gap:12px;font-size:16px;\n  margin-bottom:var(--dm-s5);}\n.dm-hero-kartu h2::before{content:\"🎓\";display:grid;place-items:center;width:40px;height:40px;\n  flex:none;border-radius:13px;background:rgba(126,231,214,.14);\n  border:1px solid rgba(126,231,214,.3);font-size:18px;}\n\n/* --- GRID DUA KOLOM UTAMA --- */\n.dm-utama-grid{display:grid;grid-template-columns:minmax(0,1fr) 348px;gap:var(--dm-s5);\n  align-items:start;margin-top:clamp(-56px,-4vw,-40px);position:relative;z-index:5;}\n@media (max-width:1080px){\n  .dm-utama-grid{grid-template-columns:1fr;margin-top:-34px;}\n}\n.dm-kolom-kiri{min-width:0;}\n.dm-kolom-kanan{min-width:0;}\n.dm-kolom-kanan .dm-sisi{position:sticky;top:94px;display:flex;flex-direction:column;\n  gap:var(--dm-s4);}\n@media (max-width:1080px){ .dm-kolom-kanan .dm-sisi{position:static;} }\n.dm-bantuan{position:static !important;max-width:none !important;margin:0 !important;}\n.dm-main{padding-bottom:110px;}\n\n/* katalog & kartu di kolom yang lebih sempit */\n.dm-kelas-grid{grid-template-columns:repeat(auto-fit,minmax(238px,1fr));}\n@media (min-width:1500px){ .dm-kelas-grid{grid-template-columns:repeat(auto-fit,minmax(238px,1fr));} }\n.dm-kelas b{font-size:15.5px;}\n.dm-kelas i{font-size:12.5px;}\n.dm-kelas-harga{font-size:18px;}\n\n/* pencarian melayang di atas hero */\n.dm-cari{box-shadow:var(--dm-shadow-lg);}\n.dm-cari-baris{grid-template-columns:1.5fr repeat(4,minmax(0,1fr)) auto;}\n@media (max-width:1240px){ .dm-cari-baris{grid-template-columns:repeat(3,minmax(0,1fr));} }\n@media (max-width:820px){ .dm-cari-baris{grid-template-columns:repeat(2,minmax(0,1fr));} }\n@media (max-width:520px){ .dm-cari-baris{grid-template-columns:1fr;} }\n\n/* survei, karir, bar bawah tetap di dalam pembungkus lebar */\n.dm-survei,.dm-karir,.dm-kenapa{margin-bottom:var(--dm-s5);}\n\n\n/* ============================================================\n   HIERARKI WARNA IDENTITAS DEWA MEDIK NUSANTARA\n   Diambil dari logo resmi: navy, royal blue, putih, merah brand.\n   Teal disisakan khusus untuk garis EKG dan detail medis kecil.\n   ============================================================ */\n\n.dm-root{\n  /* navy — dari perisai logo */\n  --dm-navy-950:#0A1626; --dm-navy-900:#0F2237; --dm-navy-800:#16304C;\n  /* royal blue — dari tulisan \"Dewa Medik\" */\n  --dm-blue-700:#122764; --dm-blue-600:#183080; --dm-blue-500:#2141A6;\n  --dm-blue-400:#3D63D2; --dm-blue-100:#E7ECFA; --dm-blue-050:#F2F5FD;\n  /* merah brand — dari tulisan \"Nusantara\" */\n  --dm-red-700:#8E2114; --dm-red-600:#B32A19; --dm-red-500:#D13520;\n  --dm-red-100:#FBEAE6;\n  /* teal hanya untuk detail medis */\n  --dm-teal-600:#0E7C7B; --dm-teal-500:#12A3A0; --dm-teal-100:#E4F5F4;\n\n  --dm-bg:#F4F7FB; --dm-surface:#FFFFFF; --dm-surface-soft:#F7F9FD;\n  --dm-text:#101F33; --dm-text-secondary:#5E6E85; --dm-border:#DCE3EE;\n  --dm-success:#12734F; --dm-warning:#B4740A; --dm-danger:#B32A19;\n\n  /* token lama dipetakan ulang: aksi utama kini royal blue */\n  --ink:var(--dm-navy-950); --ink2:#233A55; --paper:var(--dm-bg);\n  --surface:var(--dm-surface); --line:var(--dm-border);\n  --teal:var(--dm-blue-500); --teal-d:var(--dm-blue-600);\n  --vital:var(--dm-red-600); --muted:var(--dm-text-secondary); --wait:var(--dm-warning);\n\n  background:\n    radial-gradient(900px 420px at 92% -6%, rgba(33,65,166,.10), transparent 60%),\n    radial-gradient(700px 340px at -4% 2%, rgba(179,42,25,.05), transparent 58%),\n    var(--dm-bg);\n}\n\n/* --- NAVBAR: navy dengan aksen merah --- */\n.dm-header{background:linear-gradient(100deg,var(--dm-navy-950) 0%,var(--dm-navy-900) 62%,var(--dm-blue-700) 100%);}\n.dm-navlink a{color:#C4D2E6;}\n.dm-navlink a::after{background:var(--dm-red-500);}\n.dm-akreditasi{background:rgba(255,255,255,.07);border-color:rgba(255,255,255,.16);color:#DCE6F5;}\n.dm-akre-teks{color:#fff;}\n.dm-akre-teks small{color:#9DB0C9;}\n.dm-lencana{background:linear-gradient(140deg,var(--dm-blue-400),var(--dm-blue-600));color:#fff;}\n\n/* --- HERO: navy ke royal blue, aksen merah --- */\n.dm-hero{background:\n    radial-gradient(900px 460px at 80% 6%, rgba(33,65,166,.42), transparent 58%),\n    radial-gradient(620px 400px at 4% 96%, rgba(179,42,25,.24), transparent 60%),\n    linear-gradient(140deg,var(--dm-navy-950) 0%,var(--dm-navy-900) 46%,var(--dm-blue-700) 100%);}\n.dm-eyebrow{color:#EAB6AC;background:rgba(209,53,32,.16);border-color:rgba(209,53,32,.4);}\n.dm-eyebrow::before{background:var(--dm-red-500);box-shadow:0 0 0 4px rgba(209,53,32,.2);}\n.dm-hero-sub{color:#B9C9DE;}\n.dm-hero h1 .dm-baris2{background:linear-gradient(96deg,#6E92F0 0%,#96B4FF 55%,#D8E3FF 100%);\n  -webkit-background-clip:text;background-clip:text;color:transparent;}\n.dm-trust li{color:#CBD8E9;}\n.dm-cek-kecil{background:rgba(61,99,210,.16);border-color:rgba(120,158,255,.4);color:#9DB9FF;}\n.dm-hero-kartu{background:rgba(15,34,55,.6);border-color:rgba(120,158,255,.22);}\n.dm-hero-kartu h2::before{background:rgba(61,99,210,.18);border-color:rgba(120,158,255,.32);}\n.dm-langkah span{background:linear-gradient(140deg,var(--dm-blue-500),var(--dm-blue-700));}\n.dm-langkah i{color:#93A8C2;}\n\n/* --- ECG: teal tetap, ini detail medis --- */\n.dm-ecg-jalur{stroke:#1FBFB6;}\n.dm-ecg-tebal{stroke:#5FE3D6;filter:drop-shadow(0 0 5px rgba(95,227,214,.5));}\n.dm-denyut{fill:#8FF0E4;filter:drop-shadow(0 0 6px rgba(95,227,214,.85));}\n.dm-hero-ecg{opacity:.42;}\n@media (max-width:820px){ .dm-hero-ecg{opacity:.24;} }\n\n/* --- TOMBOL: royal blue utama, merah khusus aksi bertanda --- */\n.dm-btn{background:linear-gradient(150deg,var(--dm-blue-500),var(--dm-blue-700));\n  border-color:var(--dm-blue-700);box-shadow:0 4px 12px -6px rgba(24,48,128,.85);}\n.dm-btn:hover:not(:disabled){box-shadow:0 8px 20px -8px rgba(24,48,128,.9);}\n.dm-btn-navy{background:linear-gradient(150deg,var(--dm-navy-800),var(--dm-navy-950));\n  border-color:var(--dm-navy-950);}\n.dm-btn-aksen{background:linear-gradient(150deg,var(--dm-red-500),var(--dm-red-700));\n  border-color:var(--dm-red-700);box-shadow:0 4px 12px -6px rgba(142,33,20,.8);}\n.dm-btn-line:hover{border-color:var(--dm-blue-500);color:var(--dm-blue-600);\n  background:var(--dm-blue-050);}\n.dm-btn-ghost{color:var(--dm-blue-600);}\n.dm-btn-ghost:hover{border-bottom-color:var(--dm-blue-600);}\nbutton:focus-visible,a:focus-visible{outline-color:var(--dm-blue-500);}\n\n/* --- FORMULIR --- */\n.dm-input:focus,.dm-textarea:focus{border-color:var(--dm-blue-500);\n  box-shadow:0 0 0 3px rgba(33,65,166,.14);}\n.dm-nomor{background:linear-gradient(140deg,var(--dm-blue-500),var(--dm-blue-700));\n  box-shadow:0 4px 10px -4px rgba(24,48,128,.7);}\n.dm-kelompok-judul{color:var(--dm-blue-600);}\n.dm-req{color:var(--dm-red-600);background:var(--dm-red-100);}\n\n/* --- KARTU KELAS --- */\n.dm-kelas:hover:not(.dm-kelas-off){border-color:rgba(33,65,166,.4);}\n.dm-kelas-on{border-color:var(--dm-blue-500);background:var(--dm-blue-050);\n  box-shadow:0 0 0 3px rgba(33,65,166,.14),var(--dm-shadow-md);}\n.dm-terpilih{background:var(--dm-blue-600);box-shadow:0 4px 12px -4px rgba(24,48,128,.85);}\n.dm-kelas-harga{color:var(--dm-navy-900);}\n.dm-katalog-ikon{background:var(--dm-blue-100);color:var(--dm-blue-600);}\n.dm-opsi:hover{border-color:var(--dm-blue-500);}\n.dm-opsi-on{border-color:var(--dm-blue-500);background:var(--dm-blue-050);\n  box-shadow:0 0 0 3px rgba(33,65,166,.13);}\n.dm-opsi u{color:var(--dm-blue-600);}\n\n/* --- KUOTA: hijau/kuning/merah tetap, ini penanda status --- */\n.dm-bar-habis{background:linear-gradient(90deg,#D0503C,var(--dm-red-600));}\n\n/* --- UNGGAH --- */\n.dm-unggah-tombol:hover{border-color:var(--dm-blue-500);background:var(--dm-blue-050);}\n.dm-kamera{background:linear-gradient(140deg,var(--dm-navy-800),var(--dm-navy-950));color:#9DB9FF;}\n.dm-unggah-nada .dm-unggah-tombol{border-color:rgba(179,42,25,.3);background:#FEF7F5;}\n.dm-unggah-nada .dm-unggah-tombol:hover{border-color:var(--dm-red-600);background:var(--dm-red-100);}\n.dm-unggah-nada .dm-kamera{background:linear-gradient(140deg,var(--dm-red-500),var(--dm-red-700));color:#fff;}\n.dm-unggah-hasil{border-color:var(--dm-blue-500);background:var(--dm-blue-050);}\n.dm-unggah-hasil b{color:var(--dm-blue-600);}\n.dm-unggah-hasil b::before{background:var(--dm-blue-600);}\n\n/* --- RINGKASAN --- */\n.dm-ringkas-kepala{background:linear-gradient(140deg,var(--dm-navy-950),var(--dm-blue-700));}\n.dm-ringkas-kepala::before{background:rgba(120,158,255,.16);border-color:rgba(120,158,255,.3);}\n.dm-ringkas-kosong span{background:var(--dm-blue-100);color:var(--dm-blue-600);}\n.dm-baris-diskon b{color:var(--dm-red-600);}\n.dm-baris-total b{color:var(--dm-navy-900);}\n.dm-cek-voucher{color:var(--dm-blue-600);}\n.dm-putar-kecil{border-color:rgba(33,65,166,.25);border-top-color:var(--dm-blue-600);}\n.dm-detail-harga{color:var(--dm-blue-600) !important;}\n\n/* --- KOTAK INFORMASI --- */\n.dm-rek{background:linear-gradient(140deg,var(--dm-navy-950),var(--dm-blue-700));\n  border-color:rgba(120,158,255,.22);}\n.dm-rek span{color:#9DB0C9;}\n.dm-catatan{background:var(--dm-red-100);border-color:rgba(179,42,25,.28);\n  border-left-color:var(--dm-red-600);color:var(--dm-red-700);}\n.dm-bar{background:linear-gradient(140deg,var(--dm-navy-950),var(--dm-blue-700));\n  border-color:rgba(120,158,255,.2);}\n.dm-bar-diskon{color:#9DB9FF;}\n.dm-bar-sepi{color:#93A8C2;}\n.dm-bantuan{background:linear-gradient(140deg,var(--dm-navy-950),var(--dm-blue-700));\n  border-color:rgba(120,158,255,.2);}\n.dm-bantuan-ikon{background:rgba(120,158,255,.14);border-color:rgba(120,158,255,.3);}\n.dm-bantuan p{color:#9DB0C9;}\n\n/* --- KENAPA MEMILIH --- */\n.dm-ki-biru{background:var(--dm-blue-100);}\n.dm-ki-hijau{background:#E4F3EC;}\n.dm-ki-ungu{background:#EDEAFA;}\n.dm-ki-jingga{background:var(--dm-red-100);}\n\n/* --- SURVEI & KARIR --- */\n.dm-survei{background:\n    radial-gradient(700px 340px at 84% 4%, rgba(33,65,166,.34), transparent 60%),\n    linear-gradient(150deg,var(--dm-navy-950),var(--dm-blue-700));\n  border-color:rgba(120,158,255,.2);}\n.dm-angka b{color:#9DB9FF;}\n.dm-angka-sorot{background:rgba(61,99,210,.14);border-color:rgba(120,158,255,.42);}\n.dm-testi-judul{color:#9DB9FF;}\n.dm-karir-tanda{color:var(--dm-red-600);border-color:var(--dm-red-600);}\n.dm-lowongan{border-left-color:var(--dm-blue-500);}\n.dm-lowongan-tipe{color:var(--dm-blue-600);background:var(--dm-blue-100);\n  border-color:rgba(33,65,166,.3);}\n\n/* --- FOOTER & LAIN-LAIN --- */\n.dm-footer{background:linear-gradient(140deg,var(--dm-navy-950),var(--dm-blue-700));}\n.dm-situs{border-bottom-color:var(--dm-red-500);}\n.dm-handle{color:#E8A99E;}\n.dm-cek{background:var(--dm-blue-100);color:var(--dm-blue-600);}\n.dm-vital{color:var(--dm-red-600);}\n.dm-garis{background:linear-gradient(90deg,var(--dm-red-600) 0%,var(--dm-blue-500) 42%,rgba(33,65,166,0) 100%);}\n.dm-tagline{background:linear-gradient(97deg,var(--dm-navy-950) 0%,var(--dm-blue-600) 46%,\n  var(--dm-blue-400) 74%,var(--dm-red-600) 100%);\n  -webkit-background-clip:text;background-clip:text;color:transparent;}\n.dm-jenis{background:var(--dm-navy-900);}\n.dm-badge-ok{color:var(--dm-blue-600);border-color:var(--dm-blue-500);background:var(--dm-blue-050);}\n.dm-kosong-besar span{background:var(--dm-blue-100);color:var(--dm-blue-600);}\n.dm-rangka::after{background:linear-gradient(90deg,transparent,rgba(33,65,166,.06),transparent);}\n.dm-subtab .dm-tab-on{background:var(--dm-blue-600);border-color:var(--dm-blue-600);}\n.dm-chip-on{background:var(--dm-blue-600);border-color:var(--dm-blue-600);}\n.dm-kabari{border-color:var(--dm-blue-500);background:var(--dm-blue-050);}\n.dm-kabari b{color:var(--dm-blue-600);}\n\n\n/* ============================================================\n   FINAL PREMIUM POLISH\n   Hanya penghalusan visual. Tata letak dan logika tidak berubah.\n   ============================================================ */\n\n/* --- 1. HERO LEBIH RINGKAS (-18% tinggi) --- */\n.dm-hero{padding:clamp(26px,3.5vw,50px) 0 clamp(50px,4.6vw,74px);}\n.dm-hero-in{gap:clamp(22px,2.6vw,40px);}\n.dm-eyebrow{margin-bottom:var(--dm-s3);padding:5px 13px;font-size:10.5px;}\n.dm-hero h1{font-size:clamp(27px,3.7vw,46px);line-height:1.1;margin-bottom:var(--dm-s3);}\n.dm-hero-sub{margin-bottom:var(--dm-s5);font-size:clamp(14px,1.1vw,16px);}\n.dm-trust{margin-top:var(--dm-s5);gap:16px 26px;}\n.dm-cek-kecil{width:31px;height:31px;border-radius:10px;}\n.dm-hero-kartu{padding:var(--dm-s5);}\n.dm-hero-kartu h2{margin-bottom:var(--dm-s4);font-size:15.5px;}\n.dm-hero-kartu h2::before{width:36px;height:36px;border-radius:11px;}\n.dm-langkah{padding:9px 0;gap:12px;}\n.dm-langkah span{width:28px;height:28px;border-radius:9px;font-size:13px;}\n.dm-langkah b{font-size:13.5px;}\n.dm-langkah i{font-size:11.8px;}\n@media (max-width:820px){ .dm-hero{padding:20px 0 46px;} }\n\n/* --- 2. WARNA HEADLINE: royal blue elegan --- */\n.dm-hero h1 .dm-baris2{\n  background:linear-gradient(96deg,#4F74D9 0%,#6D8FE8 58%,#9FB8F2 100%);\n  -webkit-background-clip:text;background-clip:text;color:transparent;}\n\n/* --- 3. ECG LEBIH HALUS (-30% opacity, garis lebih tipis) --- */\n.dm-hero-ecg{opacity:.29;height:min(40%,190px);}\n.dm-ecg-jalur{stroke-width:1.25;}\n.dm-ecg-tebal{stroke-width:1.5;filter:drop-shadow(0 0 4px rgba(95,227,214,.32));}\n.dm-ecg-tipis{opacity:.22;stroke-width:1;}\n.dm-denyut{filter:drop-shadow(0 0 4px rgba(95,227,214,.6));}\n@keyframes dm-denyut{0%,100%{opacity:.18;r:2.2;}12%{opacity:.8;r:3.4;}30%{opacity:.26;r:2.6;}}\n@media (max-width:820px){ .dm-hero-ecg{opacity:.17;} }\n\n/* --- 4. IKON SERAGAM --- */\n.dm-svg{flex:none;display:block;}\n.dm-ikon{color:var(--dm-text-secondary);opacity:.78;width:15px;height:15px;margin-top:1px;}\n.dm-svg-samar{color:var(--dm-text-secondary);opacity:.7;margin-top:1px;}\n.dm-katalog-ikon,.dm-kenapa-ikon,.dm-bantuan-ikon,.dm-cek-kecil,\n.dm-ringkas-kosong span,.dm-kosong-besar span{display:grid;place-items:center;}\n.dm-ringkas-kepala::before,.dm-hero-kartu h2::before{content:none;}\n.dm-hero-kartu h2{padding-left:0;}\n.dm-terpilih{display:inline-flex;align-items:center;gap:5px;}\n.dm-cek::after{content:\"\";width:22px;height:22px;border-radius:50%;\n  background:no-repeat center/14px url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23183080' stroke-width='2.6' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6L9 17l-5-5'/%3E%3C/svg%3E\");}\n.dm-cek{font-size:0;}\n\n/* --- 5 & 6. KARTU LEBIH PADAT, HIERARKI JELAS --- */\n.dm-kelas-isi{padding:16px 16px 15px;}\n.dm-kelas b{margin:9px 0 10px;font-size:15px;font-weight:700;line-height:1.35;}\n.dm-kelas i{font-size:12.2px;margin-bottom:4px;gap:7px;font-weight:400;\n  color:var(--dm-text-secondary);}\n.dm-kuota-blok{margin-top:11px;padding-top:11px;}\n.dm-kuota{font-size:12px;font-weight:600;}\n.dm-bar-kuota{height:4px;margin-top:7px;}\n.dm-kelas-kaki{padding-top:11px;margin-top:11px;}\n.dm-kelas-harga{font-size:20px;font-weight:800;letter-spacing:-.025em;}\n.dm-kelas-harga small{font-size:10.5px;font-weight:500;letter-spacing:.02em;\n  color:var(--dm-text-secondary);margin-bottom:2px;}\n.dm-kelas-aksi{margin-top:12px;gap:8px;}\n.dm-btn-kecil,.dm-kelas-aksi .dm-btn-line{min-height:42px;font-size:13.5px;}\n.dm-jenis{font-size:10px;padding:3px 9px;letter-spacing:.08em;}\n\n/* --- 7. AKSEN MERAH SEBAGAI TANDA TANGAN --- */\n.dm-kelas::before{background:var(--dm-navy-900);}\n.dm-kelas-on::before{background:var(--dm-red-600);}\n.dm-katalog-kepala h2{position:relative;padding-left:11px;}\n.dm-katalog-kepala h2::before{content:\"\";position:absolute;left:0;top:.22em;bottom:.22em;\n  width:3px;border-radius:2px;background:var(--dm-red-600);}\n.dm-kenapa h2{position:relative;padding-left:11px;}\n.dm-kenapa h2::before{content:\"\";position:absolute;left:0;top:.2em;bottom:.2em;width:3px;\n  border-radius:2px;background:var(--dm-red-600);}\n.dm-req{background:var(--dm-red-100);color:var(--dm-red-700);}\n\n/* --- 8. TOOLBAR PENCARIAN TERPADU --- */\n.dm-cari{padding:16px 18px;border-radius:var(--dm-radius-lg);\n  box-shadow:0 6px 22px -14px rgba(16,31,51,.3),0 1px 2px rgba(16,31,51,.04);}\n.dm-cari-baris{gap:10px;}\n.dm-cari .dm-label{font-size:10.5px;font-weight:700;letter-spacing:.06em;\n  text-transform:uppercase;color:var(--dm-text-secondary);margin-bottom:5px;}\n.dm-cari .dm-input{min-height:44px;padding:10px 13px;font-size:14px;}\n.dm-cari select.dm-input{padding-right:32px;\n  background-position:calc(100% - 17px) 19px,calc(100% - 12px) 19px;}\n.dm-cari-tombol{height:44px;min-height:44px;font-size:14px;padding:0 18px;}\n.dm-cari-kaki{margin-top:13px;padding-top:11px;font-size:12.5px;}\n\n/* --- 9 & 10. RINGKASAN & KARTU BANTUAN --- */\n.dm-ringkas-kepala{padding:15px 18px;}\n.dm-ringkas-isi{padding:18px;}\n.dm-baris{padding:6px 0;font-size:13.2px;}\n.dm-baris-total b{font-size:22px;}\n.dm-bantuan{padding:16px;border-radius:var(--dm-radius-md);}\n.dm-bantuan-isi{gap:11px;margin-bottom:13px;}\n.dm-bantuan-ikon{width:38px;height:38px;border-radius:11px;}\n.dm-bantuan b{font-size:14.5px;}\n.dm-bantuan p{font-size:12.2px;}\n.dm-bantuan .dm-btn{min-height:42px;font-size:14px;\n  background:linear-gradient(150deg,var(--dm-blue-500),var(--dm-blue-700));\n  border-color:var(--dm-blue-700);box-shadow:none;}\n\n/* --- 11. BAYANGAN & GARIS LEBIH RINGAN --- */\n.dm-shadow-reset{}\n.dm-card,.dm-katalog,.dm-kenapa{box-shadow:0 1px 2px rgba(16,31,51,.04);}\n.dm-kelas{box-shadow:0 1px 2px rgba(16,31,51,.045);}\n.dm-kelas:hover:not(.dm-kelas-off){box-shadow:0 10px 26px -18px rgba(16,31,51,.45);}\n.dm-kelas-on{box-shadow:0 0 0 2px rgba(33,65,166,.16),0 6px 18px -14px rgba(16,31,51,.4);}\n.dm-ringkas{box-shadow:0 6px 24px -18px rgba(16,31,51,.4);}\n.dm-hero{box-shadow:none;}\n.dm-modal{box-shadow:0 24px 60px -20px rgba(16,31,51,.45);}\n.dm-unggah-tombol{border-width:1.4px;}\n.dm-opsi{border-width:1.4px;}\n\n/* --- 12. TIPOGRAFI SATU SISTEM --- */\n.dm-root{font-size:15px;}\n.dm-card h3{font-size:16.5px;font-weight:700;margin-bottom:18px;}\n.dm-katalog-kepala h2{font-size:18px;font-weight:700;}\n.dm-katalog-kepala p{font-size:12.5px;font-weight:400;}\n.dm-kelompok-judul{font-size:11px;font-weight:700;}\n.dm-label{font-size:12.5px;font-weight:600;}\n.dm-hint{font-size:11.8px;font-weight:400;}\n.dm-kenapa h2{font-size:clamp(18px,2vw,23px);font-weight:700;}\n.dm-kenapa-item b{font-size:14px;font-weight:700;}\n.dm-kenapa-item p{font-size:12.5px;font-weight:400;}\n.dm-ringkas-kepala h3{font-size:15.5px;font-weight:700;}\n.dm-detail-list b{font-weight:600;}\n.dm-mono{font-weight:400;}\n.dm-baris b,.dm-kelas-harga,.dm-baris-total b,.dm-bar-in b{font-weight:800;}\n\n/* --- 13 & 14. KESEIMBANGAN LAYAR --- */\n.dm-utama-grid{margin-top:clamp(-44px,-3vw,-32px);gap:18px;}\n.dm-kelas-grid{gap:14px;grid-template-columns:repeat(auto-fit,minmax(228px,1fr));}\n.dm-katalog{padding:20px;}\n.dm-kenapa{padding:26px 22px;}\n.dm-kenapa-grid{gap:20px;}\n@media (max-width:1080px){ .dm-utama-grid{margin-top:-28px;} }\n@media (max-width:560px){\n  .dm-hero h1{font-size:26px;}\n  .dm-hero-sub{font-size:13.8px;}\n  .dm-katalog{padding:16px 14px;}\n  .dm-kelas-grid{gap:12px;}\n  .dm-cari{padding:14px;}\n  .dm-bar-in{padding:12px 15px 14px;}\n}\n\n\n/* --- Kartu status pada Cek Pendaftaran --- */\n.dm-status{display:flex;gap:14px;align-items:flex-start;padding:16px;margin-bottom:var(--dm-s4);\n  border-radius:var(--dm-radius-md);border:1px solid;}\n.dm-status-tanda{display:grid;place-items:center;width:42px;height:42px;flex:none;\n  border-radius:13px;background:rgba(255,255,255,.7);}\n.dm-status b{display:block;font-size:15.5px;font-weight:700;}\n.dm-status p{margin:4px 0 0;font-size:13px;line-height:1.55;}\n.dm-status-menunggu{background:#FFF8EC;border-color:rgba(180,116,10,.32);color:#7A4F08;}\n.dm-status-terverifikasi{background:#E9F6F0;border-color:rgba(18,115,79,.32);color:#0E5B3F;}\n.dm-status-ditolak{background:var(--dm-red-100);border-color:rgba(179,42,25,.3);color:var(--dm-red-700);}\n.dm-status-menunggu .dm-status-tanda{color:var(--dm-warning);}\n.dm-status-terverifikasi .dm-status-tanda{color:var(--dm-success);}\n.dm-status-ditolak .dm-status-tanda{color:var(--dm-red-600);}\n\n\n/* --- Galeri fasilitas & peralatan praktik --- */\n.dm-fasilitas{background:var(--dm-surface);border:1px solid var(--dm-border);\n  border-radius:var(--dm-radius-xl);padding:26px 22px;margin-bottom:var(--dm-s5);\n  box-shadow:0 1px 2px rgba(16,31,51,.04);}\n.dm-fasilitas h2{position:relative;padding-left:11px;font-size:clamp(18px,2vw,23px);\n  font-weight:700;letter-spacing:-.025em;margin:0 0 20px;line-height:1.25;}\n.dm-fasilitas h2::before{content:\"\";position:absolute;left:0;top:.2em;bottom:.2em;width:3px;\n  border-radius:2px;background:var(--dm-red-600);}\n.dm-fasilitas-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(168px,1fr));gap:14px;}\n.dm-fasilitas-item{margin:0;border:1px solid var(--dm-border);border-radius:var(--dm-radius-md);\n  overflow:hidden;background:var(--dm-surface-soft);\n  transition:transform var(--dm-t),box-shadow var(--dm-t);}\n.dm-fasilitas-item:hover{transform:translateY(-2px);box-shadow:0 10px 24px -18px rgba(16,31,51,.45);}\n.dm-fasilitas-item img{display:block;width:100%;height:126px;object-fit:cover;background:#E9EEF6;}\n.dm-fasilitas-kosong{display:grid;place-items:center;height:126px;background:var(--dm-blue-050);\n  color:var(--dm-blue-500);}\n.dm-fasilitas-item figcaption{padding:11px 13px 13px;}\n.dm-fasilitas-item b{display:block;font-size:12.8px;font-weight:700;line-height:1.35;}\n.dm-fasilitas-item i{display:block;font-style:normal;font-size:11.5px;line-height:1.45;\n  color:var(--dm-text-secondary);margin-top:3px;}\n@media (max-width:560px){\n  .dm-fasilitas{padding:20px 15px;}\n  .dm-fasilitas-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:11px;}\n  .dm-fasilitas-item img,.dm-fasilitas-kosong{height:100px;}\n}\n\n/* --- Testimoni dengan foto alumni --- */\n.dm-testi{display:flex;flex-direction:column;}\n.dm-testi-orang{display:flex;align-items:center;gap:11px;margin-bottom:11px;}\n.dm-testi-foto{width:44px;height:44px;border-radius:50%;object-fit:cover;flex:none;\n  border:2px solid rgba(120,158,255,.35);}\n.dm-testi-inisial{display:grid;place-items:center;width:44px;height:44px;flex:none;\n  border-radius:50%;background:rgba(120,158,255,.16);border:1px solid rgba(120,158,255,.34);\n  color:#BFD1FF;font-weight:800;font-size:14px;letter-spacing:.02em;}\n.dm-testi-orang b{display:block;font-size:13.5px;font-weight:700;color:#fff;line-height:1.3;}\n.dm-testi-orang span{display:block;font-size:11.5px;color:#9FB4CE;margin-top:2px;}\n.dm-testi blockquote{margin:10px 0 0;font-size:13px;line-height:1.6;color:#DCE7F5;font-style:italic;}\n.dm-testi figcaption{margin-top:11px;padding-top:9px;border-top:1px solid rgba(255,255,255,.1);\n  font-size:11px;color:#8FA6C2;}\n\n/* --- Pengunggah foto di back office --- */\n.dm-foto-atur{display:flex;align-items:center;gap:14px;flex-wrap:wrap;}\n.dm-foto-pratinjau{width:86px;height:64px;object-fit:cover;border-radius:var(--dm-radius-sm);\n  border:1px solid var(--dm-border);flex:none;}\n.dm-foto-kosong{display:grid;place-items:center;width:86px;height:64px;flex:none;\n  border-radius:var(--dm-radius-sm);border:1px dashed var(--dm-border);\n  background:var(--dm-surface-soft);font-size:11px;color:var(--dm-text-secondary);}\n.dm-foto-mini{width:52px;height:38px;object-fit:cover;border-radius:8px;\n  border:1px solid var(--dm-border);display:block;}\n\n\n/* --- Galeri foto kegiatan: kartu lebih besar untuk foto mendatar --- */\n.dm-fasilitas-grid{grid-template-columns:repeat(auto-fit,minmax(232px,1fr));gap:16px;}\n.dm-fasilitas-item img,.dm-fasilitas-kosong{height:168px;}\n.dm-fasilitas-item figcaption{padding:12px 14px 14px;}\n.dm-fasilitas-item b{font-size:13.5px;}\n.dm-fasilitas-item i{font-size:12px;}\n@media (max-width:560px){\n  .dm-fasilitas-grid{grid-template-columns:1fr;gap:13px;}\n  .dm-fasilitas-item img,.dm-fasilitas-kosong{height:190px;}\n}\n\n\n/* ============================================================\n   OPTIMASI HP — padat, jelas, mendorong pendaftaran\n   ============================================================ */\n\n/* --- Toolbar pencarian: kotak cari + tombol filter --- */\n.dm-cari-utama{display:none;gap:9px;}\n.dm-cari-kotak{position:relative;flex:1;display:block;}\n.dm-cari-kotak .dm-input{padding-left:40px;min-height:46px;}\n.dm-cari-ikon{position:absolute;left:13px;top:50%;transform:translateY(-50%);\n  color:var(--dm-text-secondary);pointer-events:none;}\n.dm-filter-tombol{position:relative;min-height:46px;padding:0 15px;flex:none;font-weight:600;}\n.dm-filter-aktif{border-color:var(--dm-blue-500);color:var(--dm-blue-600);\n  background:var(--dm-blue-050);}\n.dm-filter-titik{position:absolute;top:9px;right:9px;width:7px;height:7px;border-radius:50%;\n  background:var(--dm-red-600);}\n\n@media (max-width:820px){\n  .dm-cari-utama{display:flex;}\n  .dm-cari-baris{display:none;margin-top:12px;padding-top:12px;\n    border-top:1px solid var(--dm-border);}\n  .dm-cari-buka{display:grid;grid-template-columns:1fr 1fr;}\n  .dm-cari-buka .dm-field:first-child{display:none;}  /* kotak cari sudah di atas */\n  .dm-cari-tombol{grid-column:1 / -1;}\n  .dm-cari-kaki{margin-top:11px;padding-top:9px;}\n}\n@media (max-width:400px){ .dm-cari-buka{grid-template-columns:1fr;} }\n\n/* --- Hero jauh lebih ringkas di HP --- */\n@media (max-width:820px){\n  .dm-hero{padding:18px 0 40px;}\n  .dm-hero-in{gap:18px;}\n  .dm-eyebrow{margin-bottom:10px;padding:4px 11px;font-size:9.5px;letter-spacing:.12em;}\n  .dm-hero h1{font-size:25px;line-height:1.16;margin-bottom:9px;max-width:none;}\n  .dm-hero-sub{font-size:13.5px;line-height:1.55;margin-bottom:14px;max-width:none;}\n  .dm-trust{gap:8px;margin-top:0;}\n  .dm-trust li{width:calc(50% - 4px);max-width:none;gap:8px;font-size:11.5px;line-height:1.3;\n    background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);\n    border-radius:10px;padding:8px 9px;}\n  .dm-cek-kecil{width:22px;height:22px;border-radius:7px;}\n  .dm-cek-kecil svg{width:12px;height:12px;}\n\n  /* kartu 3 langkah jadi baris mendatar ringkas */\n  .dm-hero-kartu{padding:13px;border-radius:14px;}\n  .dm-hero-kartu h2{font-size:13px;margin-bottom:11px;gap:9px;}\n  .dm-hero-kartu h2::before{display:none;}\n  .dm-langkah{border-top:0;padding:0;flex-direction:column;align-items:center;text-align:center;\n    flex:1;gap:6px;}\n  .dm-hero-kartu{display:flex;flex-direction:column;}\n  .dm-hero-kartu > .dm-langkah:first-of-type{margin-left:0;}\n  .dm-hero-kartu{gap:0;}\n  .dm-hero-kartu h2 + .dm-langkah,\n  .dm-hero-kartu .dm-langkah{display:flex;}\n  .dm-langkah span{width:26px;height:26px;font-size:12px;border-radius:8px;}\n  .dm-langkah b{font-size:11.5px;line-height:1.3;}\n  .dm-langkah i{display:none;}\n}\n@media (max-width:820px){\n  /* susun tiga langkah menyamping */\n  .dm-hero-kartu{position:relative;}\n  .dm-hero-kartu h2{display:flex;}\n  .dm-langkah-baris{display:flex;gap:8px;}\n}\n\n/* --- Kartu kelas: padat dan mudah disentuh --- */\n@media (max-width:820px){\n  .dm-utama-grid{margin-top:-22px;gap:14px;}\n  .dm-katalog{padding:14px 13px;border-radius:16px;}\n  .dm-katalog-kepala{margin-bottom:13px;gap:10px;}\n  .dm-katalog-ikon{width:34px;height:34px;border-radius:10px;}\n  .dm-katalog-kepala h2{font-size:16px;}\n  .dm-katalog-kepala p{font-size:11.5px;}\n  .dm-urut{width:100%;font-size:11.5px;}\n  .dm-urut .dm-input{min-height:38px;font-size:12.5px;}\n\n  .dm-kelas-grid{gap:11px;}\n  .dm-kelas-isi{padding:13px;}\n  .dm-kelas b{font-size:15px;margin:8px 0 9px;}\n  .dm-kelas i{font-size:12px;margin-bottom:3px;}\n  .dm-kuota-blok{margin-top:9px;padding-top:9px;}\n  .dm-kelas-kaki{margin-top:9px;padding-top:9px;}\n  .dm-kelas-harga{font-size:19px;}\n  .dm-kelas-aksi{margin-top:10px;grid-template-columns:auto 1fr;}\n  .dm-kelas-aksi .dm-btn-line,.dm-btn-kecil{min-height:46px;}\n}\n\n/* --- Bagian lain lebih rapat di HP --- */\n@media (max-width:820px){\n  .dm-card{padding:16px 14px;border-radius:16px;margin-bottom:14px;}\n  .dm-card h3{font-size:15.5px;margin-bottom:14px;gap:9px;}\n  .dm-nomor{width:27px;height:27px;font-size:12.5px;}\n  .dm-kelompok{margin-bottom:20px;}\n  .dm-field{margin-bottom:13px;}\n  .dm-rek{padding:13px 14px;}\n  .dm-rek b{font-size:18px;}\n  .dm-unggah-tombol{padding:14px;min-height:70px;}\n  .dm-kamera{width:40px;height:40px;border-radius:11px;}\n  .dm-survei,.dm-karir,.dm-kenapa,.dm-fasilitas{padding:20px 15px;border-radius:16px;\n    margin-bottom:14px;}\n  .dm-kenapa-grid{gap:15px;}\n  .dm-footer-in{padding-bottom:24px;}\n}\n\n/* --- Bar aksi bawah: pusat pendaftaran di HP --- */\n.dm-bar-buka{display:none;}\n.dm-bar-ringkas{display:none;}\n@media (max-width:1080px){\n  .dm-bar{margin-left:-16px;margin-right:-16px;border-radius:16px 16px 0 0;\n    border-bottom:0;box-shadow:0 -8px 28px rgba(6,26,35,.3);}\n  .dm-bar-in{padding:11px 16px calc(13px + env(safe-area-inset-bottom));\n    flex-wrap:nowrap;align-items:center;gap:12px;}\n  .dm-bar-in > div{min-width:0;flex:1;}\n  .dm-bar-diskon{font-size:11px;}\n  .dm-bar-in b{font-size:20px;display:flex;align-items:baseline;gap:9px;flex-wrap:wrap;}\n  .dm-bar-in s{display:none;}\n  .dm-bar-sisa{font-size:10.5px;}\n  .dm-bar-in .dm-btn{width:auto;flex:none;min-height:46px;padding:0 18px;font-size:14.5px;}\n  .dm-bar-buka{display:inline-block;background:transparent;border:0;padding:0;\n    font:inherit;font-size:11px;font-weight:600;color:#9DB9FF;cursor:pointer;\n    text-decoration:underline;text-underline-offset:3px;}\n  .dm-bar-ringkas{display:block;padding:13px 16px 3px;\n    border-bottom:1px solid rgba(255,255,255,.1);}\n  .dm-bar-ringkas .dm-baris{padding:4px 0;font-size:12.5px;color:#9FB4CE;}\n  .dm-bar-ringkas .dm-baris b{color:#fff;font-size:13px;}\n  .dm-bar-ringkas .dm-baris:first-child span{color:#fff;font-weight:700;font-size:13px;}\n  .dm-bar-hemat{color:#8FE3D3 !important;}\n}\n@media (max-width:400px){\n  .dm-bar-in .dm-btn{padding:0 14px;font-size:13.5px;}\n  .dm-bar-in b{font-size:18px;}\n}\n\n/* --- Sentuhan nyaman di layar sentuh --- */\n@media (hover:none){\n  .dm-kelas:hover{transform:none;box-shadow:0 1px 2px rgba(16,31,51,.045);}\n  .dm-btn:hover:not(:disabled){transform:none;}\n  .dm-fasilitas-item:hover{transform:none;}\n}\n@media (max-width:820px){\n  .dm-modal-bg{padding:0;align-items:flex-end;}\n  .dm-modal{max-height:92vh;border-radius:20px 20px 0 0;}\n  .dm-modal-isi{padding:16px 15px calc(20px + env(safe-area-inset-bottom));}\n  .dm-modal-head{padding:14px 15px;}\n  .dm-detail-list div{padding:11px 13px;}\n  .dm-detail-list span{font-size:12px;}\n  .dm-detail-list b{font-size:13px;}\n}\n\n.dm-langkah-wadah{display:block;}\n@media (max-width:820px){\n  .dm-langkah-wadah{display:flex;gap:8px;}\n  .dm-langkah-wadah .dm-langkah{flex:1;min-width:0;}\n}\n\n\n/* --- Foto dokumentasi sebagai latar hero --- */\n.dm-hero-foto{position:absolute;inset:0 0 0 auto;width:60%;z-index:0;\n  background-size:cover;background-position:center 42%;\n  -webkit-mask-image:linear-gradient(100deg,transparent 0%,rgba(0,0,0,.55) 32%,#000 72%);\n  mask-image:linear-gradient(100deg,transparent 0%,rgba(0,0,0,.55) 32%,#000 72%);\n  opacity:.5;filter:saturate(.85);}\n.dm-hero-tirai{position:absolute;inset:0;z-index:1;pointer-events:none;\n  background:\n    linear-gradient(97deg,var(--dm-navy-950) 22%,rgba(10,22,38,.86) 44%,rgba(10,22,38,.42) 68%,rgba(10,22,38,.55) 100%),\n    linear-gradient(to bottom,rgba(10,22,38,.35),transparent 34%,rgba(10,22,38,.55));}\n.dm-hero-in{position:relative;z-index:3;}\n.dm-hero-ecg{z-index:2;}\n@media (max-width:960px){\n  .dm-hero-foto{width:100%;opacity:.3;\n    -webkit-mask-image:linear-gradient(to bottom,rgba(0,0,0,.35),#000 60%);\n    mask-image:linear-gradient(to bottom,rgba(0,0,0,.35),#000 60%);}\n  .dm-hero-tirai{background:linear-gradient(to bottom,rgba(10,22,38,.82),rgba(10,22,38,.9));}\n}\n@media (max-width:820px){ .dm-hero-foto{opacity:.22;} }\n\n.dm-hero-foto{opacity:.42;filter:saturate(.8) brightness(.92);background-position:center 46%;}\n.dm-hero-tirai{background:\n    linear-gradient(97deg,var(--dm-navy-950) 24%,rgba(10,22,38,.9) 46%,rgba(10,22,38,.5) 70%,rgba(10,22,38,.6) 100%),\n    linear-gradient(to bottom,rgba(10,22,38,.4),transparent 32%,rgba(10,22,38,.6));}\n@media (max-width:960px){ .dm-hero-foto{opacity:.26;} }\n@media (max-width:820px){ .dm-hero-foto{opacity:.19;} }\n\n/* Foto ACLS: banyak merah seragam, jadi kejenuhan warna diturunkan\n   agar tidak bertabrakan dengan merah brand, dan tirai dipekatkan. */\n.dm-hero-foto{opacity:.4;filter:saturate(.62) brightness(.86);background-position:center 48%;}\n.dm-hero-tirai{background:\n    linear-gradient(97deg,var(--dm-navy-950) 26%,rgba(10,22,38,.93) 48%,rgba(10,22,38,.56) 72%,rgba(10,22,38,.66) 100%),\n    linear-gradient(to bottom,rgba(10,22,38,.42),transparent 30%,rgba(10,22,38,.62));}\n@media (max-width:960px){ .dm-hero-foto{opacity:.24;} }\n@media (max-width:820px){ .dm-hero-foto{opacity:.17;} }\n\n\n/* ============================================================\n   INVOICE / FAKTUR TAGIHAN\n   Ukuran mengikuti kertas A4 dengan huruf serif seperti berkas asli.\n   ============================================================ */\n.dm-inv-layar{position:fixed;inset:0;z-index:200;background:#5A6472;overflow:auto;padding:0 0 40px;}\n.dm-inv-alat{position:sticky;top:0;z-index:5;display:flex;justify-content:space-between;\n  align-items:center;gap:16px;flex-wrap:wrap;background:var(--dm-navy-950);color:#fff;\n  padding:14px 20px;box-shadow:0 4px 18px rgba(0,0,0,.35);}\n.dm-inv-alat b{font-size:15px;}\n.dm-inv-alat .dm-hint{color:#9DB0C9;margin:3px 0 0;max-width:60ch;}\n.dm-inv-alat .dm-hint b{font-size:inherit;color:#fff;}\n.dm-inv-kertas{margin:24px auto;width:210mm;background:#fff;box-shadow:0 10px 40px rgba(0,0,0,.4);}\n@media (max-width:820px){\n  .dm-inv-kertas{width:100%;transform-origin:top left;}\n  .dm-inv-alat{padding:12px 14px;}\n}\n\n.dm-invoice{width:210mm;min-height:297mm;padding:14mm 16mm;background:#fff;color:#000;\n  font-family:\"Times New Roman\",Times,serif;font-size:11pt;line-height:1.42;box-sizing:border-box;}\n.dm-invoice p{margin:0 0 7pt;}\n\n.dm-inv-kop{display:flex;align-items:flex-start;gap:8pt;}\n.dm-inv-logo{width:52pt;height:58pt;object-fit:contain;flex:none;}\n.dm-inv-kop-teks{flex:1;text-align:center;}\n.dm-inv-kop-teks h1{font-size:15pt;font-weight:bold;margin:0 0 1pt;letter-spacing:.3pt;}\n.dm-inv-kop-teks p{margin:0;font-size:10.5pt;line-height:1.3;}\n.dm-inv-akre{flex:none;width:120pt;text-align:right;}\n.dm-inv-akre b{display:block;font-size:6.6pt;line-height:1.28;color:#1a3a7a;}\n.dm-inv-garis{border-bottom:2.4pt solid #000;margin:4pt 0 12pt;}\n\n.dm-inv-judul{text-align:center;font-size:13.5pt;font-weight:bold;color:#1a3a7a;margin:0 0 2pt;\n  letter-spacing:.2pt;}\n.dm-inv-subjudul{text-align:center;font-style:italic;font-size:10.5pt;margin:0 0 12pt;}\n\n.dm-inv-meta{width:100%;border-collapse:collapse;margin-bottom:10pt;}\n.dm-inv-meta td{padding:1.5pt 0;vertical-align:top;font-size:11pt;}\n.dm-inv-label{width:70pt;}\n.dm-inv-titik{width:12pt;}\n.dm-inv-kota{text-align:right;white-space:nowrap;}\n.dm-inv-kepada{margin-bottom:10pt;}\n.dm-inv-paragraf{text-align:justify;}\n\n.dm-inv-tabel{width:100%;border-collapse:collapse;margin:8pt 0 10pt;font-size:10.5pt;}\n.dm-inv-tabel th,.dm-inv-tabel td{border:.8pt solid #000;padding:5pt 7pt;vertical-align:middle;}\n.dm-inv-tabel th{background:#dbe5f1;font-weight:bold;text-align:center;}\n.dm-inv-tengah{text-align:center;}\n.dm-inv-total td{background:#dbe5f1;}\n.dm-inv-terbilang{margin-bottom:9pt;}\n\n.dm-inv-bank{border-collapse:collapse;margin:6pt 0 10pt 18pt;}\n.dm-inv-bank td{padding:2pt 0;font-size:11pt;}\n.dm-inv-bank .dm-inv-label{width:88pt;}\n.dm-inv-batal{position:relative;}\n.dm-inv-cap{position:absolute;top:44%;left:50%;\n  transform:translate(-50%,-50%) rotate(-16deg);pointer-events:none;z-index:5;\n  font-family:'Bricolage Grotesque',sans-serif;font-weight:800;letter-spacing:.14em;\n  font-size:60px;color:rgba(200,30,74,.26);border:7px solid rgba(200,30,74,.26);\n  border-radius:14px;padding:10px 30px;white-space:nowrap;}\n.dm-inv-alasan{border:1.4px solid #C81E4A;border-radius:10px;background:#FDF2F5;\n  padding:11px 14px;margin:14px 0 4px;}\n.dm-inv-alasan b{color:#C81E4A;display:block;margin-bottom:3px;}\n\n.dm-inv-ttd{display:flex;justify-content:flex-end;margin-top:10pt;}\n.dm-inv-ttd img{width:150pt;height:auto;}\n\n/* baris pengisian rincian di back office */\n.dm-inv-baris-isi{display:grid;grid-template-columns:1fr 88px 148px auto;gap:8px;\n  align-items:center;margin-bottom:9px;}\n@media (max-width:700px){ .dm-inv-baris-isi{grid-template-columns:1fr;} }\n\n/* Saat dicetak, hanya lembar invoice yang keluar. */\n@media print{\n  @page{size:A4;margin:0;}\n  body{background:#fff;}\n  .dm-root > *:not(.dm-inv-layar){display:none !important;}\n  .dm-inv-layar{position:static;background:#fff;padding:0;overflow:visible;}\n  .dm-inv-alat{display:none !important;}\n  .dm-inv-kertas{margin:0;width:auto;box-shadow:none;}\n  .dm-invoice{width:auto;min-height:auto;padding:12mm 15mm;}\n  .dm-modal-bg,.dm-toast,.dm-header,.dm-footer,.dm-bar{display:none !important;}\n}\n\n/* --- Lembar kuitansi --- */\n.dm-kuitansi .dm-inv-judul{letter-spacing:.18em;}\n.dm-kw-nomor{text-align:center;margin:-6px 0 20px;font-size:13px;font-weight:700;}\n.dm-kw-isi{width:100%;border-collapse:collapse;font-size:13.5px;line-height:2.05;}\n.dm-kw-isi td{vertical-align:top;padding:2px 0;}\n.dm-kw-label{width:150px;color:#333;}\n.dm-kw-terbilang{display:block;border-bottom:1px dotted #999;padding-bottom:2px;\n  text-transform:capitalize;}\n.dm-kw-bawah{display:flex;align-items:flex-end;justify-content:space-between;\n  gap:24px;margin-top:26px;}\n.dm-kw-nominal{border:2px solid #16357e;border-radius:6px;padding:11px 20px;\n  display:inline-flex;align-items:baseline;gap:8px;background:#f7f9ff;}\n.dm-kw-nominal span{font-size:14px;font-weight:700;color:#16357e;}\n.dm-kw-nominal b{font-size:21px;font-weight:800;letter-spacing:-.01em;color:#16357e;}\n.dm-kw-ttd{text-align:center;font-size:13px;}\n.dm-kw-ttd p{margin:0 0 2px;}\n.dm-kw-ttd img{display:block;max-width:230px;}\n.dm-kw-catatan{margin-top:18px;font-size:12.5px;font-style:italic;color:#444;}\n.dm-kw-kaki{margin-top:22px;font-size:11px;line-height:1.6;color:#555;\n  border-top:1px solid #ddd;padding-top:10px;}\n@media (max-width:620px){\n  .dm-kw-bawah{flex-direction:column;align-items:stretch;gap:18px;}\n  .dm-kw-label{width:120px;}\n}\n\n/* --- Permintaan invoice --- */\n.dm-inv-minta{background:var(--dm-blue-050);border:1px solid rgba(33,65,166,.2);\n  border-radius:var(--dm-radius-md);padding:15px 15px 6px;margin-bottom:var(--dm-s4);}\n.dm-inv-minta .dm-hint{margin-top:2px;}\n.dm-tanda-invoice{display:inline-block;margin-left:7px;font-size:10px;font-weight:700;\n  letter-spacing:.05em;text-transform:uppercase;color:var(--dm-blue-600);\n  background:var(--dm-blue-100);border-radius:5px;padding:2px 7px;vertical-align:middle;}\n\n";
/* ============================================================
   AKADEMIA DEWAMEDIK — Aplikasi Pendaftaran (versi produksi)
   Terhubung ke Supabase. LOGO_DMN dan CSS disisipkan saat build.
   ============================================================ */

/* Membetulkan bentuk alamat yang sering salah tersalin. */
function bersihkanUrl(u) {
  let x = String(u || "").trim().replace(/\/+$/, "");
  const dash = x.match(/supabase\.com\/dashboard\/project\/([a-z0-9]+)/i);
  if (dash) return "https://" + dash[1] + ".supabase.co";
  x = x.replace(/\/(rest|auth|storage|realtime)(\/.*)?$/i, "");
  if (x && !/^https?:\/\//i.test(x)) x = "https://" + x;
  return x;
}
const SB = supabase.createClient(bersihkanUrl(window.DMN_CONFIG.url), String(window.DMN_CONFIG.anonKey || "").trim());

/* ============================================================
   Link khusus per kampanye.

   Alamat seperti  ...?k=solo-september  membuka halaman yang
   sama persis, tetapi hanya menampilkan kelas yang dipilih
   pengurus untuk kampanye itu. Gerbang biaya dan alur
   pendaftaran tidak berubah sedikit pun.
   ============================================================ */
window.DM_SLUG = (function () {
  try {
    var v = new URLSearchParams(window.location.search).get("k") || "";
    v = String(v).trim().toLowerCase();
    return /^[a-z0-9][a-z0-9-]{0,58}[a-z0-9]$/.test(v) ? v : null;
  } catch (e) {
    return null;
  }
})();

/* Dicatat diam-diam; kalau gagal, tidak boleh mengganggu pengunjung. */

/* ============================================================
   Berlangganan kalender.

   Alamat .ics dilayani Supabase Edge Function yang membaca tabel
   jadwal secara langsung. Begitu pengurus mengubah tanggal,
   lokasi, atau status sebuah kelas, kalender yang sudah
   berlangganan ikut menyesuaikan pada penyegaran berikutnya.

   webcal:// dipakai supaya Apple Calendar langsung menawarkan
   dialog berlangganan, bukan mengunduh satu berkas mati.
   ============================================================ */
(function () {
  var DASAR = "https://pczylrzlymkipgpismua.supabase.co/functions/v1/kalender-ics";
  var ALAMAT = "";
  var WEBCAL = "";

  function gaya() {
    if (document.getElementById("dm-gaya-kal")) return;
    var g = document.createElement("style");
    g.id = "dm-gaya-kal";
    g.textContent = [
      ".dm-kal-tirai{position:fixed;inset:0;z-index:9999;background:rgba(10,18,38,.55);",
      "  display:flex;align-items:center;justify-content:center;padding:20px;}",
      ".dm-kal-kotak{background:#fff;border-radius:16px;max-width:470px;width:100%;",
      "  padding:26px 24px;box-shadow:0 24px 60px rgba(10,18,38,.3);",
      "  font:14px/1.6 -apple-system,BlinkMacSystemFont,'Segoe UI',Inter,Roboto,sans-serif;color:#16202e;}",
      ".dm-kal-kotak h3{margin:0 0 6px;font-size:17px;}",
      ".dm-kal-kotak p{margin:0 0 14px;font-size:13.5px;color:#5b6577;}",
      ".dm-kal-kotak ol{margin:0 0 16px;padding-left:18px;font-size:13.5px;color:#5b6577;line-height:1.8;}",
      ".dm-kal-alamat{font:12.5px/1.5 ui-monospace,SFMono-Regular,Menlo,monospace;background:#f3f6fb;",
      "  border:1px solid #dfe5ee;border-radius:9px;padding:10px 12px;word-break:break-all;margin:0 0 16px;}",
      ".dm-kal-aksi{display:flex;gap:9px;flex-wrap:wrap;}",
      ".dm-kal-aksi button,.dm-kal-aksi a{flex:1;min-width:130px;padding:10px;border-radius:10px;",
      "  font:600 14px inherit;cursor:pointer;text-align:center;text-decoration:none;}",
      ".dm-kal-tutup{background:#fff;border:1px solid #dfe5ee;color:#16202e;}",
      ".dm-kal-salin{background:#fff;border:1px solid #dfe5ee;color:#16202e;}",
      ".dm-kal-buka{background:#16357e;border:1px solid #16357e;color:#fff;}"
    ].join("\n");
    document.head.appendChild(g);
  }

  /* Kunci kalender disimpan di tabel yang hanya bisa dibaca pengurus,
     jadi ia tidak pernah ikut tercetak di halaman umum. Diambil saat
     tombol ditekan, bukan saat halaman dimuat. */
  window.dmLanggananKalender = async function () {
    gaya();
    var kunci = "";
    try {
      var h = await SB.from("kalender_kunci").select("kunci").eq("id", 1).maybeSingle();
      kunci = h && h.data && h.data.kunci ? String(h.data.kunci) : "";
    } catch (e) {}
    if (!kunci) {
      var gagal = document.createElement("div");
      gagal.className = "dm-kal-tirai";
      gagal.innerHTML =
        '<div class="dm-kal-kotak" role="dialog" aria-modal="true">' +
        "<h3>Kunci kalender tidak terbaca</h3>" +
        "<p>Hanya pengurus yang sudah masuk yang bisa membuka alamat kalender. " +
        "Coba masuk ulang ke back office, lalu tekan tombolnya lagi.</p>" +
        '<div class="dm-kal-aksi"><button type="button" class="dm-kal-tutup">Tutup</button></div>' +
        "</div>";
      document.body.appendChild(gagal);
      gagal.querySelector(".dm-kal-tutup").onclick = function () {
        if (gagal.parentNode) gagal.parentNode.removeChild(gagal);
      };
      gagal.onclick = function (e) {
        if (e.target === gagal && gagal.parentNode) gagal.parentNode.removeChild(gagal);
      };
      return;
    }
    /* Kunci ditaruh sebagai ruas alamat, bukan query string: query
       string lebih gampang ikut tercatat di log dan riwayat peramban. */
    ALAMAT = DASAR + "/" + encodeURIComponent(kunci);
    WEBCAL = ALAMAT.replace(/^https:\/\//, "webcal://");
    var tirai = document.createElement("div");
    tirai.className = "dm-kal-tirai";
    tirai.innerHTML =
      '<div class="dm-kal-kotak" role="dialog" aria-modal="true">' +
      "<h3>Subscribe Kalender Dewa Medik</h3>" +
      "<p>Jadwal pelatihan masuk ke aplikasi kalender Anda dan ikut berubah sendiri " +
      "setiap kali kami memperbarui atau membatalkan kelas. Tidak perlu dicek berkala.</p>" +
      "<ol>" +
      "<li><b>iPhone, iPad, Mac:</b> tekan Berlangganan, lalu setujui di Apple Calendar.</li>" +
      "<li><b>Google Calendar:</b> salin alamatnya, lalu tambahkan lewat " +
      "Setelan &rsaquo; Tambahkan kalender &rsaquo; Dari URL.</li>" +
      "</ol>" +
      '<p style="color:#9a5b00">Alamat ini memuat kunci. Bagikan hanya ke pengurus &mdash; ' +
      "siapa pun yang memegangnya bisa ikut melihat jadwal internal.</p>" +
      '<p style="margin-bottom:6px">Alamat kalender:</p>' +
      '<div class="dm-kal-alamat">' + ALAMAT + "</div>" +
      '<div class="dm-kal-aksi">' +
      '<button type="button" class="dm-kal-tutup">Tutup</button>' +
      '<button type="button" class="dm-kal-salin">Salin alamat</button>' +
      '<a class="dm-kal-buka" href="' + WEBCAL + '">Berlangganan</a>' +
      "</div></div>";
    document.body.appendChild(tirai);

    function tutup() {
      if (tirai.parentNode) tirai.parentNode.removeChild(tirai);
    }
    tirai.querySelector(".dm-kal-tutup").onclick = tutup;
    tirai.onclick = function (e) { if (e.target === tirai) tutup(); };

    var salin = tirai.querySelector(".dm-kal-salin");
    salin.onclick = function () {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(ALAMAT).then(function () {
          salin.textContent = "Tersalin";
          setTimeout(function () { salin.textContent = "Salin alamat"; }, 1800);
        });
      } else {
        salin.textContent = "Salin manual di atas";
      }
    };
  };
})();

window.dmCatatAsal = async function (nomor, wa) {
  if (!window.DM_SLUG) return;
  try {
    await SB.rpc("catat_asal", {
      p_nomor: nomor || null,
      p_wa: wa || null,
      p_slug: window.DM_SLUG
    });
  } catch (e) {}
};


/* ============================================================
   Gerbang biaya.

   Biaya pelatihan tidak ikut dikirim ke halaman. Pengunjung
   membukanya dengan meninggalkan nama dan nomor WhatsApp, lalu
   server mengembalikan daftar biayanya. Datanya juga tersimpan
   sebagai calon peserta, jadi yang benar-benar berminat tercatat.

   Ditulis tanpa React supaya tidak menyentuh alur halaman.
   ============================================================ */
(function () {
  var KUNCI = "dm-biaya-sesi";
  var UMUR = 10 * 60 * 60 * 1000; /* 10 jam */

  /* Harga yang sudah dibuka hanya bertahan 10 jam. Lewat itu
     pengunjung mengisi datanya lagi — supaya satu kali isi tidak
     jadi jalan masuk permanen untuk mengintip harga. */
  try {
    var simpan = sessionStorage.getItem(KUNCI);
    if (simpan) {
      var isi = JSON.parse(simpan);
      var segar = isi && isi.waktu && (Date.now() - Number(isi.waktu) < UMUR);
      if (segar && isi.peta) {
        window.DM_BIAYA = isi.peta;
      } else {
        sessionStorage.removeItem(KUNCI);
      }
    }
  } catch (e) {
    try { sessionStorage.removeItem(KUNCI); } catch (e2) {}
  }

  var sedang = false;

  function gaya() {
    if (document.getElementById("dm-gaya-biaya")) return;
    var g = document.createElement("style");
    g.id = "dm-gaya-biaya";
    g.textContent = [
      ".dm-buka-biaya{display:inline-block;margin-top:2px;padding:6px 13px;border-radius:9px;",
      "  border:1px solid rgba(24,48,128,.28);background:#eef3fd;color:#1b3a86;",
      "  font:600 13.5px/1.2 inherit;cursor:pointer;letter-spacing:-.01em;}",
      ".dm-buka-biaya:hover{background:#e2ebfb;}",
      ".dm-gb-tirai{position:fixed;inset:0;z-index:9999;background:rgba(10,18,38,.55);",
      "  display:flex;align-items:center;justify-content:center;padding:20px;}",
      ".dm-gb-kotak{background:#fff;border-radius:16px;max-width:420px;width:100%;",
      "  padding:26px 24px;box-shadow:0 24px 60px rgba(10,18,38,.3);",
      "  font:14px/1.55 -apple-system,BlinkMacSystemFont,'Segoe UI',Inter,Roboto,sans-serif;color:#16202e;}",
      ".dm-gb-kotak h3{margin:0 0 6px;font-size:17px;}",
      ".dm-gb-kotak p.ket{margin:0 0 18px;font-size:13.5px;color:#5b6577;}",
      ".dm-gb-kotak label{display:block;font-size:13px;font-weight:600;margin:12px 0 5px;}",
      ".dm-gb-kotak input{width:100%;box-sizing:border-box;padding:9px 11px;font:inherit;",
      "  border:1px solid #dfe5ee;border-radius:9px;}",
      ".dm-gb-kotak input:focus{outline:2px solid #e5edfb;border-color:#2a56c6;}",
      ".dm-gb-galat{margin:12px 0 0;color:#a3271f;font-size:13px;}",
      ".dm-gb-aksi{display:flex;gap:9px;margin-top:20px;}",
      ".dm-gb-aksi button{flex:1;padding:10px;border-radius:10px;font:600 14px inherit;cursor:pointer;}",
      ".dm-gb-batal{background:#fff;border:1px solid #dfe5ee;color:#16202e;}",
      ".dm-gb-kirim{background:#16357e;border:1px solid #16357e;color:#fff;}",
      ".dm-gb-kirim:disabled{opacity:.6;cursor:default;}",
      ".dm-gb-kotak label .ops{font-weight:400;font-size:11.5px;color:#7A8C95;border:1px solid #D9E2E5;border-radius:999px;padding:1px 7px;margin-left:6px;}"
    ].join("\n");
    document.head.appendChild(g);
  }

  window.dmMintaBiaya = function () {
    if (sedang) return;
    sedang = true;
    gaya();

    var tirai = document.createElement("div");
    tirai.className = "dm-gb-tirai";
    tirai.innerHTML =
      '<div class="dm-gb-kotak" role="dialog" aria-modal="true">' +
      "<h3>Lihat biaya pelatihan</h3>" +
      '<p class="ket">Isi nama, nomor WhatsApp, dan email Anda. Biaya seluruh kelas langsung ' +
      "tampil, dan tim kami dapat membantu bila Anda butuh penjelasan.</p>" +
      '<label for="dm-gb-nama">Nama lengkap</label>' +
      '<input id="dm-gb-nama" type="text" autocomplete="name">' +
      '<label for="dm-gb-wa">Nomor WhatsApp</label>' +
      '<input id="dm-gb-wa" type="tel" inputmode="numeric" autocomplete="tel" placeholder="08xxxxxxxxxx">' +
      '<label for="dm-gb-surel">Email</label>' +
      '<input id="dm-gb-surel" type="email" autocomplete="email" placeholder="nama@contoh.com">' +
      '<label for="dm-gb-kota">Kota atau instansi <span class="ops">opsional</span></label>' +
      '<input id="dm-gb-kota" type="text" autocomplete="address-level2" placeholder="Tangerang / RSUD Kota Tangerang">' +
      '<p class="dm-gb-galat" hidden></p>' +
      '<div class="dm-gb-aksi">' +
      '<button type="button" class="dm-gb-batal">Batal</button>' +
      '<button type="button" class="dm-gb-kirim">Tampilkan biaya</button>' +
      "</div></div>";
    document.body.appendChild(tirai);

    var nama = tirai.querySelector("#dm-gb-nama");
    var wa = tirai.querySelector("#dm-gb-wa");
    var surel = tirai.querySelector("#dm-gb-surel");
    var kota = tirai.querySelector("#dm-gb-kota");
    var galat = tirai.querySelector(".dm-gb-galat");
    var kirim = tirai.querySelector(".dm-gb-kirim");
    setTimeout(function () { nama.focus(); }, 50);

    function tutup() {
      sedang = false;
      if (tirai.parentNode) tirai.parentNode.removeChild(tirai);
    }
    tirai.querySelector(".dm-gb-batal").onclick = tutup;
    tirai.onclick = function (e) { if (e.target === tirai) tutup(); };

    kirim.onclick = async function () {
      galat.hidden = true;
      var n = (nama.value || "").trim();
      var w = (wa.value || "").replace(/[^0-9]/g, "");
      if (n.length < 3) { galat.textContent = "Nama belum lengkap."; galat.hidden = false; return; }
      var wn = w;
      if (wn.slice(0, 2) === "62") { /* sudah bentuk 62 */ }
      else if (wn.charAt(0) === "0") wn = "62" + wn.slice(1);
      else if (wn.charAt(0) === "8") wn = "62" + wn;
      if (!/^628[0-9]{7,11}$/.test(wn)) {
        galat.textContent = "Masukkan nomor WhatsApp Indonesia, contoh 081234567890.";
        galat.hidden = false; return;
      }
      var em = (surel.value || "").trim().toLowerCase();
      var polaSurel = /^[a-z0-9]([a-z0-9._%+-]{0,62}[a-z0-9])?@([a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,24}$/;
      if (!polaSurel.test(em) || em.indexOf("..") > -1) {
        galat.textContent = "Alamat email tidak wajar. Contoh yang benar: nama@gmail.com";
        galat.hidden = false; return;
      }
      kirim.disabled = true;
      kirim.textContent = "Mohon tunggu…";
      try {
        /* Periksa apakah domain emailnya sungguh ada dan siap menerima surat.
           Kalau pemeriksaannya sendiri gagal (jaringan), jangan hambat orang. */
        kirim.textContent = "Memeriksa email…";
        var domain = em.split("@")[1];
        var domainAda = true;
        try {
          var tanya = async function (jenis) {
            var jw = await fetch("https://dns.google/resolve?name=" +
              encodeURIComponent(domain) + "&type=" + jenis);
            if (!jw.ok) return null;
            var isi = await jw.json();
            return Array.isArray(isi.Answer) ? isi.Answer : [];
          };
          var mx = await tanya("MX");
          if (mx !== null) {
            domainAda = mx.some(function (x) { return x.type === 15; });
            if (!domainAda) {
              var aa = await tanya("A");
              domainAda = aa !== null && aa.length > 0;
            }
          }
        } catch (e) { domainAda = true; }
        if (!domainAda) {
          throw new Error("Domain \"" + domain + "\" tidak ditemukan. Periksa lagi alamat email Anda.");
        }
        kirim.textContent = "Mohon tunggu…";
        var hasil = await SB.rpc("lihat_biaya", { p_nama: n, p_wa: w, p_email: em });
        if (hasil.error) throw new Error(hasil.error.message);
        var peta = {};
        (hasil.data || []).forEach(function (x) { peta[x.id] = Number(x.harga); });
        window.DM_BIAYA = peta;
        try { sessionStorage.setItem(KUNCI, JSON.stringify({ peta: peta, waktu: Date.now() })); } catch (e) {}
        if (window.dmCatatAsal) { try { await window.dmCatatAsal(null, wn); } catch (e) {} }
        /* Kota yang ditulis sendiri jauh lebih dipercaya daripada tebakan IP.
           Kalau pengirimannya gagal, jangan menghambat tampilnya biaya. */
        var kt = (kota.value || "").trim();
        if (kt) {
          try { await SB.rpc("catat_kota_prospek", { p_wa: wn, p_kota: kt }); } catch (e) {}
        }
        location.reload();
      } catch (e) {
        galat.textContent = /tidak ditemukan|tidak wajar|belum benar|belum diisi|benar-benar Anda pakai/.test(e.message)
          ? e.message
          : "Gagal menampilkan biaya: " + e.message;
        galat.hidden = false;
        kirim.disabled = false;
        kirim.textContent = "Tampilkan biaya";
      }
    };

    [nama, wa, surel].forEach(function (el) {
      el.addEventListener("keydown", function (e) { if (e.key === "Enter") kirim.onclick(); });
    });
  };

  /* Gayanya dipasang sejak halaman dibuka, bukan menunggu kotaknya
     muncul — kalau tidak, tombol "Lihat biaya" di kartu kelas tampil
     polos seperti tombol bawaan browser. */
  if (document.head) gaya();
  else document.addEventListener("DOMContentLoaded", gaya);
})();


/* Foto latar hero: dokumentasi asli pelatihan DEWAMEDIK. */
const HERO_FOTO = "hero-pelatihan.jpg";

/* Cap, tanda tangan, dan nama finance diambil dari invoice resmi DMN.
   Disimpan sebagai gambar agar tidak pernah berubah. */
const TTD_INVOICE = "ttd-dmn.jpg";
const JENIS = ["BTCLS", "ACLS", "KKMN", "EKG", "PKID", "PPIK", "BONELS"];
const PROFESI = ["Perawat", "Bidan", "Dokter", "Mahasiswa Keperawatan", "Lainnya"];
const PLATARAN = ["Sudah punya", "Belum punya", "Belum tahu"];

/* Data tetap pada invoice — tidak diubah lewat back office. */
const KOP = {
  nama: "DEWA MEDIK NUSANTARA",
  alamat1: "Jl. Irigasi Sipon, RT.004/RW.003 No. 206, Poris Plawad Utara, Kec. Cipondoh,",
  alamat2: "Kota Tangerang, Banten Kode Pos 15141. No. Hp +62813 6666 4911",
  situs: "www.dewamedik911.com",
  email: "dmn911@dewamedik911.com",
  akreditasi1: "Institusi Penyelenggara Pelatihan",
  akreditasi2: "Terakreditasi B KEMENKES RI",
  akreditasi3: "Nomor : HK.02.02/F/4052/2024",
  bank: "BRI (Bank Rakyat Indonesia)",
  rekening: "201001000824562",
  atasNama: "Dewa Medik Nusantara",
  npwp: "50.170.370.6-416.000"
};
const BULAN_ROMAWI = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];

/* Angka menjadi kata, untuk baris "Terbilang". */
function terbilang(n) {
  n = Math.floor(Math.abs(Number(n) || 0));
  const satuan = ["", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan", "sepuluh", "sebelas"];
  function ubah(x) {
    if (x < 12) return satuan[x];
    if (x < 20) return ubah(x - 10) + " belas";
    if (x < 100) return ubah(Math.floor(x / 10)) + " puluh" + (x % 10 ? " " + ubah(x % 10) : "");
    if (x < 200) return "seratus" + (x % 100 ? " " + ubah(x % 100) : "");
    if (x < 1000) return ubah(Math.floor(x / 100)) + " ratus" + (x % 100 ? " " + ubah(x % 100) : "");
    if (x < 2000) return "seribu" + (x % 1000 ? " " + ubah(x % 1000) : "");
    if (x < 1000000) return ubah(Math.floor(x / 1000)) + " ribu" + (x % 1000 ? " " + ubah(x % 1000) : "");
    if (x < 1000000000) return ubah(Math.floor(x / 1000000)) + " juta" + (x % 1000000 ? " " + ubah(x % 1000000) : "");
    return ubah(Math.floor(x / 1000000000)) + " miliar" + (x % 1000000000 ? " " + ubah(x % 1000000000) : "");
  }
  if (n === 0) return "Nol rupiah";
  const t = ubah(n).replace(/\s+/g, " ").trim();
  return t.charAt(0).toUpperCase() + t.slice(1) + " rupiah";
}
const tglPanjang = v => {
  if (!v) return "";
  const d = new Date(String(v).slice(0, 10) + "T00:00:00");
  return isNaN(d) ? "" : d.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
};

/* ---------- util ---------- */
const rp = n => "Rp " + (Number(n) || 0).toLocaleString("id-ID", {
  maximumFractionDigits: 0
});
const tgl = s => {
  if (!s) return "—";
  const d = new Date(String(s).slice(0, 10) + "T00:00:00");
  return isNaN(d) ? s : d.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });
};
const rentang = (a, b) => !b || a === b ? tgl(a) : `${tgl(a)} – ${tgl(b)}`;
/* Rentang tanggal versi panjang untuk kalimat resmi, mis. "13 s.d. 18 Oktober 2026". */
/* Tulisan mentah dari basis data tidak pernah ditunjukkan ke peserta.
   Yang muncul harus kalimat yang bisa mereka tindak lanjuti. */
const pesanRamah = pesan => {
  const p = String(pesan || "");
  if (/duplicate key|unique constraint|nomor_key/i.test(p))
    return "Nomor pendaftaran bentrok di server. Tekan Kirim pendaftaran sekali lagi. Bila masih gagal, hubungi admin DEWAMEDIK di 0813-6666-4911.";
  if (/row-level security|permission denied|not authorized/i.test(p))
    return "Server menolak pendaftaran karena izin. Hubungi admin DEWAMEDIK di 0813-6666-4911.";
  if (/failed to fetch|networkerror|network request failed|timeout/i.test(p))
    return "Sambungan internet terputus saat mengirim. Periksa jaringan lalu tekan Kirim pendaftaran lagi.";
  if (/violates|constraint|syntax|null value/i.test(p))
    return "Data pendaftaran ditolak server. Hubungi admin DEWAMEDIK di 0813-6666-4911 dengan menyebut nama dan kelas yang dipilih.";
  return p;
};

const rentangPanjang = (a, b) => {
  if (!a) return "";
  if (!b || a === b) return tglPanjang(a);
  const x = new Date(a + "T00:00:00"), y = new Date(b + "T00:00:00");
  if (x.getMonth() === y.getMonth() && x.getFullYear() === y.getFullYear())
    return x.getDate() + " s.d. " + tglPanjang(b);
  return tglPanjang(a) + " s.d. " + tglPanjang(b);
};
const emailValid = e => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test((e || "").trim());
const hariIni = () => new Date().toISOString().slice(0, 10);
const acakId = () => window.crypto && window.crypto.randomUUID ? window.crypto.randomUUID() : "x" + Date.now().toString(36) + Math.random().toString(36).slice(2, 10);
const readAsDataURL = file => new Promise((res, rej) => {
  const r = new FileReader();
  r.onload = () => res(r.result);
  r.onerror = () => rej(new Error("Berkas gagal dibaca."));
  r.readAsDataURL(file);
});
const loadImage = src => new Promise((res, rej) => {
  const i = new Image();
  i.onload = () => res(i);
  i.onerror = () => rej(new Error("Gambar tidak terbaca."));
  i.src = src;
});

/* Foto dikecilkan di HP peserta sebelum dikirim, supaya hemat kuota. */
async function siapkanBerkas(file, mode) {
  if (file.size > 10 * 1024 * 1024) throw new Error("Ukuran berkas maksimal 10 MB.");
  // Pas foto cukup kecil: hemat penyimpanan, tetap tajam untuk sertifikat.
  const sisiMaks = mode === "pasfoto" ? 600 : 1400;
  const mutu = mode === "pasfoto" ? 0.72 : 0.7;
  if (file.type.startsWith("image/")) {
    const url = await readAsDataURL(file);
    const img = await loadImage(url);
    const skala = Math.min(1, sisiMaks / Math.max(img.width, img.height));
    const c = document.createElement("canvas");
    c.width = Math.round(img.width * skala);
    c.height = Math.round(img.height * skala);
    c.getContext("2d").drawImage(img, 0, 0, c.width, c.height);
    const blob = await new Promise(r => c.toBlob(r, "image/jpeg", mutu));
    return {
      nama: file.name,
      tipe: "image/jpeg",
      blob,
      pratinjau: URL.createObjectURL(blob)
    };
  }
  if (file.type === "application/pdf") {
    if (mode === "pasfoto") throw new Error("Pas foto harus berupa gambar JPG atau PNG, bukan PDF.");
    if (file.size > 5 * 1024 * 1024) throw new Error("PDF maksimal 5 MB. Foto berkasnya saja juga boleh.");
    return {
      nama: file.name,
      tipe: "application/pdf",
      blob: file,
      pratinjau: null
    };
  }
  throw new Error("Format harus foto (JPG/PNG) atau PDF.");
}
async function unggahKeGudang(folder, kunci, b) {
  if (!b) return null;
  const ext = b.tipe === "application/pdf" ? "pdf" : "jpg";
  const path = `${folder}/${kunci}.${ext}`;
  const {
    error
  } = await SB.storage.from("bukti").upload(path, b.blob, {
    contentType: b.tipe,
    upsert: false
  });
  if (error) {
    const pesan = /row-level security|violates/i.test(error.message || "") ? "Berkas gagal diunggah karena izin di server. Hubungi admin DEWAMEDIK." : "Berkas gagal diunggah: " + error.message;
    throw new Error(pesan);
  }
  return path;
}

/* Foto galeri disimpan di bucket publik; nilai kolom foto berupa jalur di bucket itu.
   Bila admin menempel URL penuh, dipakai apa adanya. */
function urlFoto(jalur) {
  if (!jalur) return null;
  if (/^https?:\/\//i.test(jalur)) return jalur;
  const {
    data
  } = SB.storage.from("publik").getPublicUrl(jalur);
  return data ? data.publicUrl : null;
}
function inisial(nama) {
  return String(nama || "").replace(/^(Ns\.|Dr\.|dr\.|drg\.)\s*/i, "").split(/\s+/).slice(0, 2).map(x => x[0]).join("").toUpperCase();
}

/* Tautan bantuan memakai nomor WhatsApp admin yang sudah ada di pengaturan. */
function waBantuan(setelan, jenis) {
  const nomor = setelan && setelan.wa_nomor || "6282123486576";
  const teks = jenis === "cek" ? "Halo Akademia DEWAMEDIK, saya ingin menanyakan status pendaftaran pelatihan saya." : "Halo Akademia DEWAMEDIK, saya ingin bertanya mengenai pendaftaran pelatihan.";
  return `https://wa.me/${nomor}?text=${encodeURIComponent(teks)}`;
}

/* ---------- pesan pemberitahuan ke peserta ---------- */
const waLink = (hp, teks) => {
  let n = String(hp || "").replace(/[^0-9]/g, "");
  if (n.startsWith("0")) n = "62" + n.slice(1);else if (!n.startsWith("62")) n = "62" + n;
  return `https://wa.me/${n}?text=${encodeURIComponent(teks)}`;
};
const mailLink = (email, judul, teks) => `mailto:${email}?subject=${encodeURIComponent(judul)}&body=${encodeURIComponent(teks)}`;

/* Sapaan menyesuaikan waktu setempat saat pesan dibuat. */
function sapaan() {
  const j = new Date().getHours();
  if (j < 11) return "Semangat pagi";
  if (j < 15) return "Semangat siang";
  if (j < 18) return "Semangat sore";
  return "Selamat malam";
}
function pesanTerverifikasi(r, setelan) {
  const kelas = r.pelatihan ? r.pelatihan.judul : "pelatihan DEWAMEDIK";
  const jadwal = r.pelatihan ? rentang(r.pelatihan.tanggal_mulai, r.pelatihan.tanggal_selesai) : "-";
  const tempat = setelan && setelan.alamat ? setelan.alamat : "Kantor DEWAMEDIK, Tangerang";
  const b = [];
  b.push(`${sapaan()} Kak ${r.nama},`);
  b.push("");
  b.push(`Selamat ya Kak, pendaftaran Kakak sudah *BERHASIL DIVERIFIKASI*. Kursi Kakak sudah kami kunci.`);
  b.push("");
  b.push("*RINCIAN PENDAFTARAN*");
  b.push(`Nomor registrasi : ${r.nomor}`);
  b.push(`Pelatihan        : ${kelas}`);
  b.push(`Jadwal           : ${jadwal}`);
  b.push(`Tempat           : ${tempat}`);
  if (r.tipe_bayar === "booking" && Number(r.sisa_bayar) > 0) {
    b.push(`Pembayaran       : Booking seat, uang muka ${rp(r.jumlah_bayar)} sudah kami terima`);
    b.push(`Sisa pelunasan   : ${rp(r.sisa_bayar)}`);
    b.push("");
    b.push("Mohon sisa pembayaran dilunasi sebelum pelatihan dimulai ya Kak.");
  } else {
    b.push(`Pembayaran       : LUNAS ${rp(r.total)}`);
  }
  if (Number(r.diskon) > 0) {
    b.push(`Potongan         : ${rp(r.diskon)} (${r.persen}%${r.voucher_kode ? " · " + r.voucher_kode : ""})`);
  }
  if (r.minta_invoice) {
    b.push("");
    b.push(`Untuk invoice resmi ke ${r.invoice_instansi || "instansi Kakak"}, tim kami akan menghubungi Kakak menyusul ya.`);
  }
  if (r.catatan && r.catatan.trim()) {
    b.push("");
    b.push(`Catatan: ${r.catatan.trim()}`);
  }
  const grup = r.pelatihan && r.pelatihan.wa_grup ? String(r.pelatihan.wa_grup).trim() : "";
  if (grup) {
    b.push("");
    b.push("*GRUP KELAS*");
    b.push("Silakan bergabung ke grup WhatsApp kelas Kakak di tautan berikut:");
    b.push(grup);
    b.push("Permintaan bergabung akan kami setujui setelah kami cocokkan dengan data pendaftaran Kakak.");
  }
  b.push("");
  b.push("Mohon simpan pesan ini sebagai bukti pendaftaran ya Kak. Informasi teknis pelaksanaan akan kami sampaikan menjelang hari pelatihan.");
  b.push("");
  b.push("Hati-hati penipuan mengatasnamakan Dewa Medik Nusantara. Kami tidak pernah meminta transfer tambahan ke rekening pribadi.");
  b.push("");
  b.push("Terima kasih sudah mempercayakan pelatihan Kakak kepada kami. Sampai jumpa di kelas!");
  b.push("");
  b.push("Akademia DEWAMEDIK");
  b.push("PT. Dewa Medik Nusantara");
  b.push("_Excellence Is The Way_");
  return b.join("\n");
}
function pesanPerbaikan(r, setelan) {
  const kelas = r.pelatihan ? r.pelatihan.judul : "pelatihan DEWAMEDIK";
  return [`${sapaan()} Kak ${r.nama},`, "", `Terima kasih sudah mendaftar ${kelas} (${r.nomor}).`, "", "Setelah kami periksa, berkas pendaftaran Anda masih perlu dilengkapi atau diperbaiki:", "", r.catatan && r.catatan.trim() || "(mohon hubungi kami untuk keterangan lebih lanjut)", "", "Mohon segera kirimkan perbaikannya agar kursi Anda dapat kami kunci. Kuota kelas terbatas dan pendaftaran yang belum lengkap belum terhitung sebagai peserta.", "", `Balas pesan ini bila ada yang perlu ditanyakan, atau hubungi ${setelan && setelan.wa_nama ? setelan.wa_nama : "admin kami"}.`, "", "Akademia DEWAMEDIK — PT. Dewa Medik Nusantara"].join("\n");
}

/* ================= komponen kecil ================= */
/* Gelombang ECG: baseline -> P -> QRS -> T, digambar dua kali agar
   pergeseran -50% terlihat menyambung tanpa putus. */
const SATU_SIKLUS = "h26 q7 -9 14 0 h22 l7 -5 l6 26 l8 -38 l7 20 l6 -3 h20 q11 -13 22 0 h32";
function jalurEcg(ulang, y) {
  let d = "M0 " + y;
  for (let i = 0; i < ulang; i++) d += " " + SATU_SIKLUS;
  return d;
}
function EcgHero() {
  return /*#__PURE__*/React.createElement("div", {
    className: "dm-hero-ecg",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 1200 200",
    preserveAspectRatio: "none"
  }, /*#__PURE__*/React.createElement("g", {
    className: "dm-ecg-geser-pelan"
  }, /*#__PURE__*/React.createElement("path", {
    className: "dm-ecg-jalur dm-ecg-tipis",
    d: jalurEcg(20, 58)
  })), /*#__PURE__*/React.createElement("g", {
    className: "dm-ecg-geser"
  }, /*#__PURE__*/React.createElement("path", {
    className: "dm-ecg-jalur dm-ecg-tebal",
    d: jalurEcg(20, 132)
  }), /*#__PURE__*/React.createElement("circle", {
    className: "dm-denyut",
    cx: "248",
    cy: "132"
  }), /*#__PURE__*/React.createElement("circle", {
    className: "dm-denyut",
    cx: "1016",
    cy: "132",
    style: {
      animationDelay: "1.3s"
    }
  }))));
}

/* Ikon garis 24x24, stroke 1.75, mengikuti gaya Lucide.
   Satu komponen agar ukuran, ketebalan, dan warna selalu seragam. */
const JALUR_IKON = {
  kalender: "M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z",
  lokasi: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0zM12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
  toga: "M22 9L12 5 2 9l10 4 10-4zM6 11.5V16c0 1.5 3 3 6 3s6-1.5 6-3v-4.5",
  kursi: "M16 20v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8M22 20v-2a4 4 0 0 0-3-3.87M16 2.13a4 4 0 0 1 0 7.75",
  perisai: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4",
  medali: "M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM8.2 13.9L7 22l5-3 5 3-1.2-8.1",
  petir: "M13 2L4.1 13.4a1 1 0 0 0 .8 1.6H11l-1 7 8.9-11.4a1 1 0 0 0-.8-1.6H12l1-7z",
  papan: "M9 3h6a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2M9 12h6M9 16h4",
  headset: "M3 14v-3a9 9 0 0 1 18 0v3M21 15a2 2 0 0 1-2 2h-1v-6h1a2 2 0 0 1 2 2v2zM3 15a2 2 0 0 0 2 2h1v-6H5a2 2 0 0 0-2 2v2zM18 17v1a3 3 0 0 1-3 3h-2",
  gembok: "M5 11h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1zM8 11V7a4 4 0 0 1 8 0v4",
  cari: "M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM21 21l-4.35-4.35",
  saring: "M3 5h18l-7 8v6l-4 2v-8L3 5z",
  centang: "M20 6L9 17l-5-5",
  bintang: "M12 2l3 6.6 7 .9-5 4.9 1.2 7L12 18l-6.2 3.4L7 14.4 2 9.5l7-.9L12 2z"
};
function Ikon({
  nama,
  ukuran = 18,
  tebal = 1.75,
  kelas = ""
}) {
  const d = JALUR_IKON[nama];
  if (!d) return null;
  return /*#__PURE__*/React.createElement("svg", {
    className: "dm-svg " + kelas,
    width: ukuran,
    height: ukuran,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: tebal,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    focusable: "false"
  }, d.split("M").filter(Boolean).map((seg, i) => /*#__PURE__*/React.createElement("path", {
    key: i,
    d: "M" + seg
  })));
}
function Ecg({
  beat
}) {
  return /*#__PURE__*/React.createElement("svg", {
    className: "dm-ecg" + (beat ? " dm-ecg-beat" : ""),
    viewBox: "0 0 600 40",
    preserveAspectRatio: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 20 H120 l10 -14 l8 28 l9 -30 l10 16 H300 l12 -10 l7 20 l8 -24 l9 14 H600"
  }));
}
function Field({
  label,
  hint,
  salah,
  children
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: "dm-field" + (salah ? " dm-field-salah" : "")
  }, /*#__PURE__*/React.createElement("span", {
    className: "dm-label"
  }, label), children, salah ? /*#__PURE__*/React.createElement("span", {
    className: "dm-err"
  }, salah) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "dm-hint"
  }, hint) : null);
}
function Badge({
  status
}) {
  const map = {
    menunggu: ["dm-badge dm-badge-wait", "Menunggu diperiksa"],
    terverifikasi: ["dm-badge dm-badge-ok", "Terverifikasi"],
    ditolak: ["dm-badge dm-badge-no", "Perlu diperbaiki"],
    batal: ["dm-badge dm-badge-no", "Dibatalkan"],
    refund: ["dm-badge dm-badge-no", "Refund"],
    buka: ["dm-badge dm-badge-ok", "Buka"],
    tutup: ["dm-badge dm-badge-no", "Tutup"],
    selesai: ["dm-badge", "Selesai"]
  };
  const [cls, txt] = map[status] || ["dm-badge", status];
  return /*#__PURE__*/React.createElement("span", {
    className: cls
  }, txt);
}
function Unggah({
  judul,
  keterangan,
  wajib,
  nilai,
  onPilih,
  onHapus,
  nada,
  mode
}) {
  const ref = useRef(null);
  const [err, setErr] = useState("");
  const [sibuk, setSibuk] = useState(false);
  async function pilih(e) {
    const f = e.target.files && e.target.files[0];
    e.target.value = "";
    if (!f) return;
    setErr("");
    setSibuk(true);
    try {
      onPilih(await siapkanBerkas(f, mode));
    } catch (ex) {
      setErr(ex.message);
    }
    setSibuk(false);
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "dm-unggah" + (nilai ? " dm-unggah-isi" : "") + (nada ? " dm-unggah-nada" : "")
  }, nilai ? /*#__PURE__*/React.createElement("div", {
    className: "dm-unggah-hasil"
  }, nilai.pratinjau ? /*#__PURE__*/React.createElement("img", {
    src: nilai.pratinjau,
    alt: judul
  }) : /*#__PURE__*/React.createElement("span", {
    className: "dm-pdf"
  }, "PDF"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, judul, " tersimpan"), /*#__PURE__*/React.createElement("p", null, nilai.nama)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "dm-btn-ghost",
    onClick: onHapus
  }, "Ganti")) : /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "dm-unggah-tombol",
    onClick: () => ref.current && ref.current.click(),
    disabled: sibuk
  }, /*#__PURE__*/React.createElement("span", {
    className: "dm-kamera"
  }, "＋"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, sibuk ? "Memproses foto…" : judul, wajib ? /*#__PURE__*/React.createElement("em", {
    className: "dm-req"
  }, "wajib") : null), /*#__PURE__*/React.createElement("p", null, keterangan))), err ? /*#__PURE__*/React.createElement("p", {
    className: "dm-err"
  }, err) : null, /*#__PURE__*/React.createElement("input", {
    ref: ref,
    type: "file",
    accept: mode === "pasfoto" ? "image/*" : "image/*,application/pdf",
    capture: "environment",
    onChange: pilih,
    style: {
      display: "none"
    }
  }));
}
function Modal({
  judul,
  onTutup,
  children,
  lebar
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "dm-modal-bg",
    onClick: onTutup
  }, /*#__PURE__*/React.createElement("div", {
    className: "dm-modal",
    style: lebar ? {
      maxWidth: lebar
    } : undefined,
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "dm-modal-head"
  }, /*#__PURE__*/React.createElement("h3", null, judul), /*#__PURE__*/React.createElement("button", {
    className: "dm-btn-ghost",
    onClick: onTutup
  }, "Tutup")), /*#__PURE__*/React.createElement("div", {
    className: "dm-modal-isi"
  }, children)));
}
function Bintang({
  n
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "dm-bintang",
    "aria-label": n + " dari 5"
  }, "★★★★★".slice(0, n), /*#__PURE__*/React.createElement("span", {
    className: "dm-bintang-sisa"
  }, "★★★★★".slice(n)));
}
function Survei({
  data,
  testimoni
}) {
  if (!data || data.aktif === false) return null;
  return /*#__PURE__*/React.createElement("section", {
    className: "dm-survei"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dm-survei-kepala"
  }, /*#__PURE__*/React.createElement("h3", null, data.judul), /*#__PURE__*/React.createElement("p", null, "Survei Kepuasan Pelanggan periode ", data.periode, " terhadap ", data.responden, " responden valid.")), /*#__PURE__*/React.createElement("div", {
    className: "dm-angka-utama"
  }, (data.utama || []).map((k, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "dm-angka" + (i === 0 ? " dm-angka-sorot" : "")
  }, /*#__PURE__*/React.createElement("b", null, k.angka, /*#__PURE__*/React.createElement("em", null, k.satuan)), /*#__PURE__*/React.createElement("span", null, k.label)))), /*#__PURE__*/React.createElement("div", {
    className: "dm-angka-rinci"
  }, (data.rinci || []).map((k, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("b", {
    className: "dm-mono"
  }, k.angka), /*#__PURE__*/React.createElement("span", null, k.label)))), data.ringkasan ? /*#__PURE__*/React.createElement("p", {
    className: "dm-survei-ringkas"
  }, data.ringkasan) : null, testimoni && testimoni.length ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h4", {
    className: "dm-testi-judul"
  }, "Testimoni & Alumni"), /*#__PURE__*/React.createElement("div", {
    className: "dm-testi-grid"
  }, testimoni.map(t => {
    const src = urlFoto(t.foto);
    return /*#__PURE__*/React.createElement("figure", {
      key: t.id,
      className: "dm-testi"
    }, /*#__PURE__*/React.createElement("div", {
      className: "dm-testi-orang"
    }, src ? /*#__PURE__*/React.createElement("img", {
      className: "dm-testi-foto",
      src: src,
      alt: t.nama,
      loading: "lazy"
    }) : /*#__PURE__*/React.createElement("span", {
      className: "dm-testi-inisial"
    }, inisial(t.nama)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, t.nama), /*#__PURE__*/React.createElement("span", null, [t.asal, t.pelatihan].filter(Boolean).join(" · ")))), /*#__PURE__*/React.createElement(Bintang, {
      n: t.bintang
    }), /*#__PURE__*/React.createElement("blockquote", null, t.isi), t.sumber ? /*#__PURE__*/React.createElement("figcaption", null, t.sumber) : null);
  }))) : null, data.catatan ? /*#__PURE__*/React.createElement("p", {
    className: "dm-survei-kaki"
  }, data.catatan) : null);
}
function Fasilitas({
  daftar
}) {
  if (!daftar || daftar.length === 0) return null;
  return /*#__PURE__*/React.createElement("section", {
    className: "dm-fasilitas"
  }, /*#__PURE__*/React.createElement("h2", null, "Galeri Kegiatan & Praktik"), /*#__PURE__*/React.createElement("div", {
    className: "dm-fasilitas-grid"
  }, daftar.map(f => {
    const src = urlFoto(f.foto);
    return /*#__PURE__*/React.createElement("figure", {
      key: f.id,
      className: "dm-fasilitas-item"
    }, src ? /*#__PURE__*/React.createElement("img", {
      src: src,
      alt: f.nama,
      loading: "lazy"
    }) : /*#__PURE__*/React.createElement("span", {
      className: "dm-fasilitas-kosong"
    }, /*#__PURE__*/React.createElement(Ikon, {
      nama: "perisai",
      ukuran: 22
    })), /*#__PURE__*/React.createElement("figcaption", null, /*#__PURE__*/React.createElement("b", null, f.nama), f.keterangan ? /*#__PURE__*/React.createElement("i", null, f.keterangan) : null));
  })));
}
function CekPendaftaran({
  setelan,
  onTutup
}) {
  const [nomor, setNomor] = useState("");
  const [email, setEmail] = useState("");
  const [sibuk, setSibuk] = useState(false);
  const [pesan, setPesan] = useState("");
  const [hasil, setHasil] = useState(null);
  const [linkGrup, setLinkGrup] = useState("");
  async function periksa() {
    setLinkGrup("");
    setPesan("");
    setHasil(null);
    if (!nomor.trim()) return setPesan("Masukkan nomor registrasi Anda.");
    if (!emailValid(email)) return setPesan("Masukkan alamat email yang Anda pakai saat mendaftar.");
    setSibuk(true);
    const {
      data,
      error
    } = await SB.rpc("cek_status_pendaftaran", {
      p_nomor: nomor,
      p_email: email
    });
    setSibuk(false);
    if (error) return setPesan("Gagal menghubungi server. Coba lagi sebentar.");
    if (!data || !data.ok) return setPesan(data && data.pesan || "Data tidak ditemukan.");
    setHasil(data);
    if (data.status !== "ditolak") {
      try {
        const g = await SB.rpc("link_grup", { p_nomor: nomor.trim() });
        if (!g.error && g.data) setLinkGrup(String(g.data));
      } catch (e) {}
    }
  }
  const keterangan = {
    menunggu: ["Menunggu verifikasi", "Bukti pembayaran Anda sedang kami periksa. Biasanya selesai kurang dari 1×24 jam kerja."],
    terverifikasi: ["Terverifikasi", "Pendaftaran Anda berhasil dan kursi Anda sudah dikunci. Sampai jumpa di kelas."],
    ditolak: ["Perlu diperbaiki", "Ada berkas yang perlu Anda lengkapi atau perbaiki. Lihat catatan di bawah."]
  };
  return /*#__PURE__*/React.createElement(Modal, {
    judul: "Cek Pendaftaran",
    onTutup: onTutup,
    lebar: 620
  }, !hasil ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    className: "dm-lead dm-lead-kecil"
  }, "Masukkan nomor registrasi beserta email yang Anda pakai saat mendaftar. Keduanya harus cocok demi menjaga kerahasiaan data peserta."), /*#__PURE__*/React.createElement("div", {
    className: "dm-grid2"
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Nomor registrasi",
    hint: "Contoh: DMN/REG/2026/0001"
  }, /*#__PURE__*/React.createElement("input", {
    className: "dm-input dm-mono",
    value: nomor,
    onChange: e => setNomor(e.target.value.toUpperCase()),
    placeholder: "DMN/REG/2026/0001",
    onKeyDown: e => e.key === "Enter" && periksa()
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Email saat mendaftar"
  }, /*#__PURE__*/React.createElement("input", {
    className: "dm-input",
    type: "email",
    value: email,
    onChange: e => setEmail(e.target.value),
    placeholder: "nama@gmail.com",
    onKeyDown: e => e.key === "Enter" && periksa()
  }))), pesan ? /*#__PURE__*/React.createElement("p", {
    className: "dm-err"
  }, pesan) : null, /*#__PURE__*/React.createElement("div", {
    className: "dm-row dm-row-akhir"
  }, /*#__PURE__*/React.createElement("button", {
    className: "dm-btn" + (sibuk ? " dm-memuat" : ""),
    onClick: periksa,
    disabled: sibuk
  }, sibuk ? "Memeriksa" : "Cek Status"), /*#__PURE__*/React.createElement("button", {
    className: "dm-btn-line",
    onClick: onTutup
  }, "Batal"))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "dm-status dm-status-" + hasil.status
  }, /*#__PURE__*/React.createElement("span", {
    className: "dm-status-tanda"
  }, /*#__PURE__*/React.createElement(Ikon, {
    nama: hasil.status === "terverifikasi" ? "centang" : hasil.status === "ditolak" ? "saring" : "kalender",
    ukuran: 20,
    tebal: 2.2
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, (keterangan[hasil.status] || [hasil.status])[0]), /*#__PURE__*/React.createElement("p", null, (keterangan[hasil.status] || ["", ""])[1]))), linkGrup ? /*#__PURE__*/React.createElement("div", {
    className: "dm-catatan",
    style: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", null, "Grup WhatsApp kelas Anda sudah dibuka. Ajukan bergabung sekarang — permintaan disetujui pengurus setelah pembayaran terverifikasi."), /*#__PURE__*/React.createElement("a", {
    className: "dm-btn",
    href: linkGrup,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      textDecoration: "none",
      whiteSpace: "nowrap"
    }
  }, "Gabung grup WhatsApp")) : null, hasil.status === "ditolak" && hasil.catatan ? /*#__PURE__*/React.createElement("p", {
    className: "dm-catatan"
  }, "Catatan dari tim kami: ", hasil.catatan) : null, /*#__PURE__*/React.createElement("div", {
    className: "dm-detail-list"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Nomor registrasi"), /*#__PURE__*/React.createElement("b", {
    className: "dm-mono"
  }, hasil.nomor)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Nama peserta"), /*#__PURE__*/React.createElement("b", null, hasil.nama)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Pelatihan"), /*#__PURE__*/React.createElement("b", null, hasil.judul)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Jadwal"), /*#__PURE__*/React.createElement("b", null, rentang(hasil.tanggal_mulai, hasil.tanggal_selesai))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Lokasi"), /*#__PURE__*/React.createElement("b", null, hasil.lokasi)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Metode"), /*#__PURE__*/React.createElement("b", null, hasil.format)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Biaya pelatihan"), /*#__PURE__*/React.createElement("b", null, rp(hasil.harga_awal))), Number(hasil.diskon) > 0 ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Diskon ", hasil.persen, "%", hasil.voucher_kode ? ` · ${hasil.voucher_kode}` : ""), /*#__PURE__*/React.createElement("b", null, "− ", rp(hasil.diskon))) : null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, hasil.tipe_bayar === "booking" ? "Uang muka dibayar" : "Total dibayar"), /*#__PURE__*/React.createElement("b", {
    className: "dm-detail-harga"
  }, rp(hasil.jumlah_bayar != null ? hasil.jumlah_bayar : hasil.total))), Number(hasil.sisa_bayar) > 0 ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Sisa pelunasan"), /*#__PURE__*/React.createElement("b", null, rp(hasil.sisa_bayar))) : null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Tanggal mendaftar"), /*#__PURE__*/React.createElement("b", null, new Date(hasil.dibuat).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "dm-row dm-row-akhir"
  }, /*#__PURE__*/React.createElement("a", {
    className: "dm-btn dm-btn-wa",
    href: `https://wa.me/${setelan && setelan.wa_nomor || "6282123486576"}?text=${encodeURIComponent(`Halo ${setelan && setelan.wa_nama || "admin"}, saya ingin menanyakan pendaftaran ${hasil.nomor} atas nama ${hasil.nama}.`)}`,
    target: "_blank",
    rel: "noreferrer"
  }, "Hubungi Admin"), /*#__PURE__*/React.createElement("button", {
    className: "dm-btn-line",
    onClick: () => setHasil(null)
  }, "Cek nomor lain"))));
}
function Karir({
  lowongan,
  setelan
}) {
  if (!lowongan || lowongan.length === 0) return null;
  return /*#__PURE__*/React.createElement("section", {
    className: "dm-karir"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dm-karir-kepala"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dm-karir-tanda"
  }, "Karir"), /*#__PURE__*/React.createElement("h3", null, "Berkarir Bersama Dewa Medik"), /*#__PURE__*/React.createElement("p", null, "Kami membuka kesempatan bagi tenaga kesehatan dan profesional yang ingin tumbuh bersama Akademia DEWAMEDIK.")), /*#__PURE__*/React.createElement("div", {
    className: "dm-karir-grid"
  }, lowongan.map(l => /*#__PURE__*/React.createElement("article", {
    key: l.id,
    className: "dm-lowongan"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dm-lowongan-atas"
  }, /*#__PURE__*/React.createElement("b", null, l.posisi), l.tipe ? /*#__PURE__*/React.createElement("span", {
    className: "dm-lowongan-tipe"
  }, l.tipe) : null), l.penempatan ? /*#__PURE__*/React.createElement("p", {
    className: "dm-lowongan-tempat"
  }, l.penempatan) : null, l.ringkasan ? /*#__PURE__*/React.createElement("p", {
    className: "dm-lowongan-isi"
  }, l.ringkasan) : null, l.syarat ? /*#__PURE__*/React.createElement("p", {
    className: "dm-lowongan-syarat"
  }, l.syarat) : null, /*#__PURE__*/React.createElement("div", {
    className: "dm-lowongan-kaki"
  }, l.batas_lamar ? /*#__PURE__*/React.createElement("em", null, "Lamaran ditutup ", tgl(l.batas_lamar)) : /*#__PURE__*/React.createElement("em", null, "Dibuka sampai terisi"), l.link_daftar ? /*#__PURE__*/React.createElement("a", {
    className: "dm-btn-line",
    href: l.link_daftar,
    target: "_blank",
    rel: "noreferrer"
  }, "Lamar sekarang") : /*#__PURE__*/React.createElement("a", {
    className: "dm-btn-line",
    href: `mailto:${setelan.email_admin}?subject=${encodeURIComponent("Lamaran — " + l.posisi)}`
  }, "Kirim lamaran"))))));
}
function Footer({
  setelan
}) {
  const sosial = [["Instagram", "https://www.instagram.com/dewamedik_hc"], ["TikTok", "https://www.tiktok.com/@dewamedik_hc"], ["YouTube", "https://www.youtube.com/@dewamedik_hc"]];
  return /*#__PURE__*/React.createElement("footer", {
    className: "dm-footer"
  }, /*#__PURE__*/React.createElement(Ecg, null), /*#__PURE__*/React.createElement("div", {
    className: "dm-wrap dm-footer-in"
  }, /*#__PURE__*/React.createElement("p", {
    className: "dm-slogan"
  }, "Every Second Counts. Be Ready to Save Lives."), /*#__PURE__*/React.createElement("h4", null, "DEWA MEDIK NUSANTARA"), /*#__PURE__*/React.createElement("p", {
    className: "dm-motto"
  }, "Excellence Is The Way"), /*#__PURE__*/React.createElement("div", {
    className: "dm-sosial"
  }, sosial.map(([nama, url]) => /*#__PURE__*/React.createElement("a", {
    key: nama,
    href: url,
    target: "_blank",
    rel: "noreferrer"
  }, nama)), /*#__PURE__*/React.createElement("span", {
    className: "dm-handle"
  }, "@dewamedik_hc")), /*#__PURE__*/React.createElement("a", {
    className: "dm-situs",
    href: "https://www.dewamedik911.com",
    target: "_blank",
    rel: "noreferrer"
  }, "www.dewamedik911.com"), /*#__PURE__*/React.createElement("p", {
    className: "dm-footer-awas"
  }, "Waspada penipuan mengatasnamakan Dewa Medik Nusantara. Pengaduan:", " ", /*#__PURE__*/React.createElement("a", {
    href: "https://wa.me/6281366664911",
    target: "_blank",
    rel: "noreferrer"
  }, "0813-6666-4911")), /*#__PURE__*/React.createElement("p", {
    className: "dm-footer-kecil"
  }, setelan.alamat ? /*#__PURE__*/React.createElement(React.Fragment, null, "PT. Dewa Medik Nusantara · ", setelan.alamat) : null, setelan.akreditasi ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("br", null), setelan.akreditasi) : null)));
}

/* ================= APLIKASI ================= */
/* ============================================================
   PENGAJUAN KERJA SAMA INSTITUSI
   Data dikirim ke Edge Function Dewa Medik, bukan ke database portal,
   sehingga tidak menyentuh alur pendaftaran peserta sama sekali.
   ============================================================ */
var KERJASAMA_PROGRAM = ["BTCLS", "ACLS for Nurse", "ACLS for Doctor", "EKG", "KKMN", "PKID", "PPIK", "BONELS", "Code Blue", "PPGD", "UKOM Academy", "Lainnya"];
var KERJASAMA_BENTUK = [
  ["in-house", "In-house di tempat kami", "Tim DEWAMEDIK datang ke institusi Anda"],
  ["kirim-peserta", "Mengirim peserta ke kelas reguler", "Peserta bergabung di jadwal yang sudah berjalan"],
  ["penyelenggaraan-bersama", "Penyelenggaraan bersama", "Kerja sama sebagai mitra penyelenggara"],
  ["belum-tahu", "Belum menentukan", "Kami bantu carikan bentuk yang paling sesuai"]
];

function FormKerjasama() {
  const kosong = {
    institusi: "", pic_nama: "", pic_jabatan: "", email: "", whatsapp: "", kota: "",
    program: [], jumlah_peserta: "", waktu_rencana: "", bentuk: "belum-tahu",
    perlu_penawaran: false, catatan: ""
  };
  const [d, setD] = useState(kosong);
  const [kirim, setKirim] = useState(false);
  const [selesai, setSelesai] = useState(false);
  const [pesan, setPesan] = useState("");
  /* Formulir panjang ini menutup diri di halaman depan supaya calon peserta
     perorangan tidak salah mengisinya. Baru terbuka bila sengaja diklik. */
  const [terbuka, setTerbuka] = useState(false);
  useEffect(() => {
    const buka = () => {
      setTerbuka(true);
      setTimeout(() => {
        const s = document.getElementById("kerjasama");
        if (s) s.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 60);
    };
    window.addEventListener("dm-buka-kerjasama", buka);
    return () => window.removeEventListener("dm-buka-kerjasama", buka);
  }, []);

  const ubah = (k, v) => setD(s => ({ ...s, [k]: v }));
  const togglProgram = p => setD(s => ({
    ...s, program: s.program.indexOf(p) > -1 ? s.program.filter(x => x !== p) : s.program.concat([p])
  }));

  async function ajukan(e) {
    e.preventDefault();
    if (kirim) return;
    setPesan("");
    if (d.institusi.trim().length < 3) { setPesan("Nama institusi belum lengkap."); return; }
    if (d.pic_nama.trim().length < 3) { setPesan("Nama penanggung jawab belum lengkap."); return; }
    if (d.whatsapp.replace(/\D/g, "").length < 9) { setPesan("Nomor WhatsApp belum benar."); return; }
    setKirim(true);
    try {
      const { error } = await SB.from("kerjasama_pengajuan").insert({
        institusi: d.institusi.trim(),
        kota: d.kota.trim() || null,
        pic_nama: d.pic_nama.trim(),
        pic_jabatan: d.pic_jabatan.trim() || null,
        whatsapp: d.whatsapp.trim(),
        email: d.email.trim() || null,
        program: d.program,
        jumlah_peserta: d.jumlah_peserta.trim() || null,
        waktu_rencana: d.waktu_rencana.trim() || null,
        bentuk: d.bentuk,
        perlu_penawaran: !!d.perlu_penawaran,
        catatan: d.catatan.trim() || null
      });
      if (error) throw new Error(error.message);
      setSelesai(true);
    } catch (err) {
      setPesan("Pengajuan belum terkirim: " + err.message);
    } finally {
      setKirim(false);
    }
  }

  if (selesai) {
    return React.createElement("section", { className: "dm-card dm-ks", id: "kerjasama" },
      React.createElement("div", { className: "dm-ks-beres" },
        React.createElement("h3", null, "Pengajuan Anda sudah kami terima"),
        React.createElement("p", null, "Tim Akademia DEWAMEDIK akan menghubungi " + d.pic_nama + " melalui WhatsApp dalam 1×24 jam kerja untuk membahas kebutuhan " + d.institusi + "."),
        React.createElement("p", { className: "dm-hint" }, "Bila mendesak, Anda dapat langsung menghubungi kami di 0821-2348-6576."),
        React.createElement("div", { className: "dm-row" },
          React.createElement("button", {
            className: "dm-btn-line",
            onClick: () => { setD(kosong); setSelesai(false); }
          }, "Ajukan untuk institusi lain"),
          React.createElement("button", {
            className: "dm-btn-ghost",
            onClick: () => { setD(kosong); setSelesai(false); setTerbuka(false); }
          }, "Selesai"))
      )
    );
  }

  /* Di beranda cukup satu baris kalimat di paling bawah. Formulir panjangnya
     baru terbuka bila kalimat ini diklik, supaya calon peserta perorangan
     tidak terganggu isian yang bukan untuk mereka. */
  if (!terbuka) {
    return React.createElement("p", { className: "dm-ks-ajakan", id: "kerjasama" },
      "Mau mengajukan kerja sama institusi atau angkatan khusus? ",
      React.createElement("button", {
        className: "dm-ks-tautan",
        onClick: () => {
          setTerbuka(true);
          setTimeout(() => {
            const s = document.getElementById("kerjasama");
            if (s) s.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 60);
        }
      }, "Klik di sini")
    );
  }

  return React.createElement("section", { className: "dm-card dm-ks", id: "kerjasama" },
    React.createElement("div", { className: "dm-ks-kepala" },
      React.createElement("span", { className: "dm-ks-label" }, "Untuk Institusi"),
      React.createElement("h3", null, "Pengajuan Kerja Sama Pelatihan"),
      React.createElement("p", null, "Rumah sakit, puskesmas, kampus, dan instansi yang ingin melatih tenaga kesehatannya dapat mengajukan kerja sama di sini. Kami menyusun jadwal, kurikulum, dan rincian biaya sesuai kebutuhan institusi Anda."),
      React.createElement("button", {
        className: "dm-btn-ghost dm-ks-tutup",
        onClick: () => setTerbuka(false)
      }, "Tutup formulir")
    ),

    React.createElement("form", { onSubmit: ajukan },
      React.createElement("div", { className: "dm-kelompok" },
        React.createElement("p", { className: "dm-kelompok-judul" }, "Institusi dan Penanggung Jawab"),
        React.createElement("div", { className: "dm-grid2" },
          React.createElement(Field, { label: "Nama institusi" },
            React.createElement("input", { className: "dm-input", value: d.institusi, onChange: e => ubah("institusi", e.target.value), placeholder: "RSUD Kota Tangerang" })),
          React.createElement(Field, { label: "Kota" },
            React.createElement("input", { className: "dm-input", value: d.kota, onChange: e => ubah("kota", e.target.value), placeholder: "Tangerang" }))
        ),
        React.createElement("div", { className: "dm-grid2" },
          React.createElement(Field, { label: "Nama penanggung jawab" },
            React.createElement("input", { className: "dm-input", value: d.pic_nama, onChange: e => ubah("pic_nama", e.target.value), placeholder: "Ns. Siti Rahmawati, S.Kep." })),
          React.createElement(Field, { label: "Jabatan" },
            React.createElement("input", { className: "dm-input", value: d.pic_jabatan, onChange: e => ubah("pic_jabatan", e.target.value), placeholder: "Kepala Bidang Keperawatan" }))
        ),
        React.createElement("div", { className: "dm-grid2" },
          React.createElement(Field, { label: "Nomor WhatsApp", hint: "Kami menghubungi lewat nomor ini." },
            React.createElement("input", { className: "dm-input", inputMode: "tel", value: d.whatsapp, onChange: e => ubah("whatsapp", e.target.value), placeholder: "0812 3456 7890" })),
          React.createElement(Field, { label: "Email institusi" },
            React.createElement("input", { className: "dm-input", type: "email", inputMode: "email", value: d.email, onChange: e => ubah("email", e.target.value), placeholder: "diklat@institusi.go.id" }))
        )
      ),

      React.createElement("div", { className: "dm-kelompok" },
        React.createElement("p", { className: "dm-kelompok-judul" }, "Kebutuhan Pelatihan"),
        React.createElement("span", { className: "dm-label" }, "Program yang diminati"),
        React.createElement("div", { className: "dm-ks-cip" },
          KERJASAMA_PROGRAM.map(p => React.createElement("button", {
            key: p, type: "button",
            className: "dm-ks-cip-btn" + (d.program.indexOf(p) > -1 ? " aktif" : ""),
            onClick: () => togglProgram(p)
          }, p))
        ),
        React.createElement("p", { className: "dm-hint" }, "Boleh memilih lebih dari satu. Belum yakin pun tidak masalah."),
        React.createElement("div", { className: "dm-grid2", style: { marginTop: "14px" } },
          React.createElement(Field, { label: "Perkiraan jumlah peserta" },
            React.createElement("input", { className: "dm-input", value: d.jumlah_peserta, onChange: e => ubah("jumlah_peserta", e.target.value), placeholder: "25 orang" })),
          React.createElement(Field, { label: "Rencana waktu pelaksanaan" },
            React.createElement("input", { className: "dm-input", value: d.waktu_rencana, onChange: e => ubah("waktu_rencana", e.target.value), placeholder: "November 2026" }))
        )
      ),

      React.createElement("div", { className: "dm-kelompok" },
        React.createElement("p", { className: "dm-kelompok-judul" }, "Bentuk Kerja Sama"),
        React.createElement("div", { className: "dm-ks-pilih" },
          KERJASAMA_BENTUK.map(b => React.createElement("button", {
            key: b[0], type: "button",
            className: "dm-ks-pilih-item" + (d.bentuk === b[0] ? " aktif" : ""),
            onClick: () => ubah("bentuk", b[0])
          },
            React.createElement("b", null, b[1]),
            React.createElement("span", null, b[2])
          ))
        )
      ),

      React.createElement("div", { className: "dm-kelompok" },
        React.createElement(Field, { label: "Catatan tambahan", hint: "Kebutuhan khusus, jumlah angkatan, ketersediaan ruang, atau hal lain yang perlu kami tahu." },
          React.createElement("textarea", {
            className: "dm-input dm-ks-catatan", value: d.catatan,
            onChange: e => ubah("catatan", e.target.value),
            placeholder: "Contoh: kami merencanakan dua angkatan, ruang aula tersedia, peserta gabungan perawat dan bidan."
          })),
        React.createElement("label", { className: "dm-ks-centang" },
          React.createElement("input", {
            type: "checkbox", checked: d.perlu_penawaran,
            onChange: e => ubah("perlu_penawaran", e.target.checked)
          }),
          React.createElement("span", null, "Kami memerlukan surat penawaran resmi dan rincian anggaran biaya (RAB) untuk keperluan pengajuan internal.")
        )
      ),

      pesan ? React.createElement("p", { className: "dm-err" }, pesan) : null,
      React.createElement("div", { className: "dm-row dm-row-akhir" },
        React.createElement("button", { className: "dm-btn", type: "submit", disabled: kirim },
          kirim ? "Mengirim…" : "Kirim Pengajuan"),
        React.createElement("a", {
          className: "dm-btn-line",
          href: "https://wa.me/6282123486576?text=Halo%20Akademia%20DEWAMEDIK%2C%20institusi%20kami%20ingin%20menjajaki%20kerja%20sama%20pelatihan.",
          target: "_blank", rel: "noopener"
        }, "Tanya dulu lewat WhatsApp")
      ),
      React.createElement("p", { className: "dm-hint" }, "Pengajuan ini belum mengikat. Kami menghubungi Anda lebih dulu untuk membahas kebutuhan sebelum apa pun diputuskan.")
    )
  );
}

function App() {
  const [siap, setSiap] = useState(false);
  const [galat, setGalat] = useState("");
  const [setelan, setSetelan] = useState(null);
  const [kelas, setKelas] = useState([]);
  const [testimoni, setTestimoni] = useState([]);
  const [lowongan, setLowongan] = useState([]);
  const [fasilitas, setFasilitas] = useState([]);
  const [kampanye, setKampanye] = useState(null);
  const [sisi, setSisi] = useState("daftar");
  const [toast, setToast] = useState("");
  const ketukRef = useRef([]);
  const [bukaCek, setBukaCek] = useState(false);
  function beriTahu(t) {
    setToast(t);
    setTimeout(() => setToast(""), 2600);
  }
  async function muatPublik() {
    const [a, b, c, d, f, g] = await Promise.all([SB.from("pengaturan").select("*").eq("id", 1).single(), SB.from("pelatihan_publik").select("id,jenis,judul,tanggal_mulai,tanggal_selesai,lokasi,format,kuota,status,sisa").order("tanggal_mulai"), SB.from("testimoni").select("*").eq("tampil", true).order("urutan").limit(6), SB.from("lowongan").select("*").order("urutan").limit(6), SB.from("fasilitas").select("*").eq("tampil", true).order("urutan").limit(12), window.DM_SLUG ? SB.from("kampanye").select("*").eq("slug", window.DM_SLUG).eq("aktif", true).maybeSingle() : Promise.resolve({ data: null })]);
    if (a.error) throw new Error("Pengaturan gagal dimuat: " + a.error.message);
    if (b.error) throw new Error("Jadwal gagal dimuat: " + b.error.message);
    setSetelan(a.data);
    /* Kampanye yang tidak ditemukan atau sudah dimatikan diperlakukan
       seperti tidak ada — pengunjung tetap melihat halaman biasa,
       bukan halaman kosong. */
    const kmp = g && !g.error ? g.data : null;
    setKampanye(kmp);
    let daftarKelas = (b.data || []).map(function (x) {
      var h = (window.DM_BIAYA || {})[x.id];
      return Object.assign({}, x, { harga: h == null ? null : Number(h) });
    });
    if (kmp && Array.isArray(kmp.kelas_id) && kmp.kelas_id.length) {
      daftarKelas = daftarKelas.filter(x => kmp.kelas_id.indexOf(x.id) > -1);
    }
    setKelas(daftarKelas);
    setTestimoni(c.error ? [] : c.data || []);
    setLowongan(d.error ? [] : d.data || []);
    setFasilitas(f.error ? [] : f.data || []);
  }
  useEffect(() => {
    (async () => {
      try {
        await muatPublik();
      } catch (e) {
        setGalat(e.message);
      }
      setSiap(true);
    })();
    const cek = () => {
      const h = (window.location.hash || "").toLowerCase();
      if (h === "#admin" || h === "#backoffice") setSisi("admin");
      /* Datang dari tautan pemulihan kata sandi: buka sisi pengurus,
         karena di situlah layar setel sandi barunya berada. */
      try {
        if (new URLSearchParams(window.location.search).get("pulih") === "1" ||
            String(window.location.hash || "").indexOf("type=recovery") > -1) setSisi("admin");
      } catch (e) {}
    };
    cek();
    window.addEventListener("hashchange", cek);
    return () => window.removeEventListener("hashchange", cek);
  }, []);
  function ketukLogo() {
    const kini = Date.now();
    ketukRef.current = [...ketukRef.current.filter(t => kini - t < 2500), kini];
    if (ketukRef.current.length >= 5) {
      ketukRef.current = [];
      setSisi("admin");
    }
  }
  function tutupBackOffice() {
    if (window.location.hash) window.location.hash = "";
    setSisi("daftar");
    muatPublik().catch(() => {});
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "dm-root"
  }, /*#__PURE__*/React.createElement("style", null, CSS), /*#__PURE__*/React.createElement("header", {
    className: "dm-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dm-wrap dm-header-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dm-brand"
  }, /*#__PURE__*/React.createElement("img", {
    className: "dm-mark",
    src: LOGO_DMN,
    alt: "Logo Dewa Medik Nusantara",
    onClick: ketukLogo
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "Akademia DEWAMEDIK"), /*#__PURE__*/React.createElement("i", null, "PT. Dewa Medik Nusantara"))), sisi !== "admin" ? /*#__PURE__*/React.createElement("nav", {
    className: "dm-navlink"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#jadwal"
  }, "Jadwal Pelatihan"), /*#__PURE__*/React.createElement("a", {
    className: "dm-nav-ks",
    href: "#kerjasama",
    onClick: e => {
      e.preventDefault();
      window.dispatchEvent(new CustomEvent("dm-buka-kerjasama"));
    }
  }, "Kerja Sama Institusi"), /*#__PURE__*/React.createElement("a", {
    href: "#cek",
    onClick: e => {
      e.preventDefault();
      setBukaCek(true);
    }
  }, "Cek Pendaftaran"), /*#__PURE__*/React.createElement("a", {
    href: waBantuan(setelan, "bantuan"),
    target: "_blank",
    rel: "noreferrer"
  }, "Bantuan"), /*#__PURE__*/React.createElement("a", {
    href: "https://www.dewamedik911.com",
    target: "_blank",
    rel: "noreferrer"
  }, "Tentang Kami")) : null, sisi !== "admin" && setelan && setelan.akreditasi ? /*#__PURE__*/React.createElement("p", {
    className: "dm-akreditasi"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dm-lencana"
  }, "B"), /*#__PURE__*/React.createElement("span", {
    className: "dm-akre-teks"
  }, "Terakreditasi Kemenkes RI", /*#__PURE__*/React.createElement("small", null, setelan.akreditasi))) : null, sisi === "admin" ? /*#__PURE__*/React.createElement("nav", {
    className: "dm-nav"
  }, /*#__PURE__*/React.createElement("button", {
    className: "dm-tab dm-tab-on",
    onClick: tutupBackOffice
  }, "Kembali ke halaman peserta")) : null)), /*#__PURE__*/React.createElement("main", {
    className: "dm-main"
  }, !siap ? /*#__PURE__*/React.createElement("div", {
    className: "dm-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dm-rangka",
    style: {
      height: 300,
      marginTop: 24,
      marginBottom: 20
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "dm-rangka-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dm-rangka"
  }), /*#__PURE__*/React.createElement("div", {
    className: "dm-rangka"
  }), /*#__PURE__*/React.createElement("div", {
    className: "dm-rangka"
  })), /*#__PURE__*/React.createElement("p", {
    className: "dm-load"
  }, "Memuat kelas yang dibuka…")) : galat ? /*#__PURE__*/React.createElement("div", {
    className: "dm-wrap",
    style: {
      paddingTop: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dm-card"
  }, /*#__PURE__*/React.createElement("h3", null, "Tidak bisa terhubung ke server"), /*#__PURE__*/React.createElement("p", {
    className: "dm-err"
  }, galat), /*#__PURE__*/React.createElement("p", {
    className: "dm-hint"
  }, "Periksa isi berkas config.js, lalu muat ulang halaman ini. Alamat yang dipakai sekarang:", " ", /*#__PURE__*/React.createElement("b", {
    className: "dm-mono"
  }, bersihkanUrl(window.DMN_CONFIG.url) || "(kosong)"), " — bentuk yang benar berakhiran .supabase.co tanpa tambahan apa pun."))) : sisi === "admin" ? /*#__PURE__*/React.createElement("div", {
    className: "dm-wrap",
    style: {
      paddingTop: 24
    }
  }, /*#__PURE__*/React.createElement(BackOffice, {
    beriTahu: beriTahu
  })) : /*#__PURE__*/React.createElement(Pendaftaran, {
    setelan: setelan,
    kampanye: kampanye,
    kelas: kelas,
    testimoni: testimoni,
    lowongan: lowongan,
    fasilitas: fasilitas,
    beriTahu: beriTahu,
    muatUlang: muatPublik
  })), bukaCek && setelan ? /*#__PURE__*/React.createElement(CekPendaftaran, {
    setelan: setelan,
    onTutup: () => setBukaCek(false)
  }) : null, siap && !galat && setelan && sisi !== "admin" ? /*#__PURE__*/React.createElement(Footer, {
    setelan: setelan
  }) : null, toast ? /*#__PURE__*/React.createElement("div", {
    className: "dm-toast"
  }, toast) : null);
}

/* ================= SISI PESERTA ================= */
function Pendaftaran({
  setelan,
  kampanye,
  kelas,
  testimoni,
  lowongan,
  fasilitas,
  beriTahu,
  muatUlang
}) {
  const [pilihId, setPilihId] = useState(null);
  const [data, setData] = useState({
    email: "",
    nik: "",
    nama: "",
    hp: "",
    instansi: "",
    profesi: "Perawat",
    plataran: ""
  });
  const [berkas, setBerkas] = useState({
    transfer: null,
    member: null,
    alumni: null,
    foto: null
  });
  const [kode, setKode] = useState("");
  const [kodeManual, setKodeManual] = useState(null);
  const [pesanKode, setPesanKode] = useState("");
  const [bukaKode, setBukaKode] = useState(false);
  const [otomatis, setOtomatis] = useState(null);
  const [syarat, setSyarat] = useState({
    alumni: false,
    member: false
  });
  const [tipeBayar, setTipeBayar] = useState("lunas");
  /* Peserta harus menyatakan paham bahwa biaya tidak dapat dikembalikan.
     Dicentang sendiri, bukan dicentang otomatis, supaya benar-benar dibaca. */
  const [setuju, setSetuju] = useState(false);
  /* Saringan bekerja di sisi browser atas data pelatihan_publik yang sudah diterima.
     Tidak ada query database baru dan tidak ada perubahan logika bisnis. */
  const [cari, setCari] = useState("");
  const [fJenis, setFJenis] = useState("");
  const [fLokasi, setFLokasi] = useState("");
  const [fBulan, setFBulan] = useState("");
  const [fMetode, setFMetode] = useState("");
  const [cekVoucher, setCekVoucher] = useState(false);
  const [detailKelas, setDetailKelas] = useState(null);
  const [urutkan, setUrutkan] = useState("tanggal");
  const [bukaFilter, setBukaFilter] = useState(false);
  const [bukaRingkas, setBukaRingkas] = useState(false);
  const [mintaInvoice, setMintaInvoice] = useState(false);
  const [invInstansi, setInvInstansi] = useState("");
  const [invPenerima, setInvPenerima] = useState("");
  const [salah, setSalah] = useState({});
  const [mengirim, setMengirim] = useState(false);
  const [hasil, setHasil] = useState(null);
  const [grupBaru, setGrupBaru] = useState("");
  const [beat, setBeat] = useState(false);
  const refData = useRef(null);
  const refKelas = useRef(null);
  const training = useMemo(() => kelas.find(t => t.id === pilihId) || null, [pilihId, kelas]);
  const pilihanLokasi = useMemo(() => Array.from(new Set(kelas.map(t => t.lokasi).filter(Boolean))), [kelas]);
  const pilihanMetode = useMemo(() => Array.from(new Set(kelas.map(t => t.format).filter(Boolean))), [kelas]);
  const pilihanJenis = useMemo(() => Array.from(new Set(kelas.map(t => t.jenis).filter(Boolean))), [kelas]);
  const pilihanBulan = useMemo(() => {
    const m = new Map();
    kelas.forEach(t => {
      if (!t.tanggal_mulai) return;
      const kunci = String(t.tanggal_mulai).slice(0, 7);
      if (!m.has(kunci)) m.set(kunci, new Date(kunci + "-01T00:00:00").toLocaleDateString("id-ID", {
        month: "long",
        year: "numeric"
      }));
    });
    return Array.from(m.entries()).sort();
  }, [kelas]);
  const kelasTampil = useMemo(() => {
    const q = cari.trim().toLowerCase();
    const hasil = kelas.filter(t => {
      if (fJenis && t.jenis !== fJenis) return false;
      if (fLokasi && t.lokasi !== fLokasi) return false;
      if (fMetode && t.format !== fMetode) return false;
      if (fBulan && String(t.tanggal_mulai || "").slice(0, 7) !== fBulan) return false;
      if (q) {
        const teks = [t.judul, t.jenis, t.lokasi, t.format].filter(Boolean).join(" ").toLowerCase();
        if (!teks.includes(q)) return false;
      }
      return true;
    });
    /* Pengurutan dilakukan di sisi browser atas data yang sudah diterima. */
    const urut = hasil.slice();
    if (urutkan === "harga-murah") urut.sort((a, b) => Number(a.harga) - Number(b.harga));else if (urutkan === "harga-mahal") urut.sort((a, b) => Number(b.harga) - Number(a.harga));else if (urutkan === "kuota") urut.sort((a, b) => Number(b.sisa) - Number(a.sisa));else urut.sort((a, b) => String(a.tanggal_mulai).localeCompare(String(b.tanggal_mulai)));
    return urut;
  }, [kelas, cari, fJenis, fLokasi, fBulan, fMetode, urutkan]);
  const adaSaringan = !!(cari || fJenis || fLokasi || fBulan || fMetode);

  /* Hanya untuk menentukan label tombol. Pemeriksaan sebenarnya tetap dilakukan
     di dalam kirim() dan di server — tidak ada logika yang berubah. */
  const formLengkap = !!training && emailValid(data.email) && /^[0-9]{16}$/.test(data.nik) && !!data.nama.trim() && /^[0-9+\-\s]{8,}$/.test(data.hp) && !!data.instansi.trim() && !!data.plataran && !!berkas.foto && !!berkas.transfer;

  /* Daftar apa saja yang masih kurang. Ditampilkan tepat di atas tombol
     supaya peserta tidak menatap tombol mati tanpa tahu sebabnya. */
  const kurang = [];
  if (!training) kurang.push("Pilih kelas pelatihan");
  if (!data.nama.trim()) kurang.push("Nama lengkap");
  if (!/^[0-9]{16}$/.test(data.nik)) kurang.push("NIK 16 angka");
  if (!emailValid(data.email)) kurang.push("Email aktif");
  if (!/^[0-9+\-\s]{8,}$/.test(data.hp)) kurang.push("Nomor WhatsApp");
  if (!data.instansi.trim()) kurang.push("Asal instansi");
  if (!data.plataran) kurang.push("Jawaban akun Plataran Sehat");
  if (!berkas.foto) kurang.push("Pas foto");
  if (!berkas.transfer) kurang.push("Foto bukti transfer");
  if (mintaInvoice && !invInstansi.trim()) kurang.push("Instansi penagihan invoice");
  if (!setuju) kurang.push("Centang pernyataan di bawah");
  function bersihkanSaringan() {
    setCari("");
    setFJenis("");
    setFLokasi("");
    setFBulan("");
    setFMetode("");
  }
  function persenTerisi(t) {
    const kuota = Number(t.kuota) || 0;
    const sisa = Number(t.sisa) || 0;
    if (kuota <= 0) return 0;
    return Math.min(100, Math.max(0, Math.round((kuota - sisa) / kuota * 100)));
  }
  function warnaKuota(sisa) {
    if (sisa <= 0) return "habis";
    if (sisa <= 5) return "tipis";
    return "ada";
  }

  /* Yang ditampilkan ke peserta adalah jumlah kuota yang dibuka.
     Angka sisa kursi tetap dipakai di balik layar untuk menutup kelas
     yang sudah penuh, tetapi tidak lagi diperlihatkan. */
  function labelKuota(t) {
    const sisa = Number(t.sisa) || 0;
    const kuota = Number(t.kuota) || 0;
    if (sisa <= 0) return ["dm-kuota dm-kuota-habis", "Pendaftaran ditutup"];
    if (sisa <= 5) return ["dm-kuota dm-kuota-tipis", `Kuota dibuka ${kuota} peserta`];
    return ["dm-kuota dm-kuota-ada", `Kuota dibuka ${kuota} peserta`];
  }
  const email = data.email.trim().toLowerCase();

  /* Kotak unggahan hanya muncul kalau kelas ini memang punya vouchernya. */
  useEffect(() => {
    let batal = false;
    (async () => {
      if (!training) return setSyarat({
        alumni: false,
        member: false
      });
      const {
        data: sy
      } = await SB.rpc("syarat_berkas", {
        p_pelatihan: training.id
      });
      if (batal) return;
      const hasil = sy || {
        alumni: false,
        member: false
      };
      setSyarat(hasil);
      // berkas yang tidak lagi diminta ikut dibuang
      setBerkas(b => ({
        ...b,
        alumni: hasil.alumni ? b.alumni : null,
        member: hasil.member ? b.member : null
      }));
    })();
    return () => {
      batal = true;
    };
  }, [training && training.id]);

  /* Diskon dihitung di server, bukan di browser. */
  useEffect(() => {
    let batal = false;
    (async () => {
      if (!training) return setOtomatis(null);
      setCekVoucher(true);
      const {
        data: v
      } = await SB.rpc("voucher_otomatis", {
        p_pelatihan: training.id,
        p_alumni: !!berkas.alumni,
        p_member: !!berkas.member,
        p_email: emailValid(email) ? email : null
      });
      if (!batal) {
        setOtomatis(v || null);
        setCekVoucher(false);
      }
    })();
    return () => {
      batal = true;
    };
  }, [training && training.id, berkas.alumni, berkas.member, email]);
  const dipakai = kodeManual && (!otomatis || kodeManual.potongan >= otomatis.potongan) ? kodeManual : otomatis;
  const potongan = dipakai ? Number(dipakai.potongan) : 0;
  const total = training ? Math.max(0, Number(training.harga) - potongan) : 0;
  const dp = Math.min(Number(setelan.dp_nominal || 500000), total);
  const bayarSekarang = tipeBayar === "booking" ? dp : total;
  const sisaBayar = Math.max(0, total - bayarSekarang);
  useEffect(() => {
    if (dipakai) {
      setBeat(true);
      const t = setTimeout(() => setBeat(false), 1200);
      return () => clearTimeout(t);
    }
  }, [dipakai && dipakai.kode, potongan]);
  function pilihKelas(t) {
    setPilihId(t.id);
    setKodeManual(null);
    setPesanKode("");
    setTimeout(() => refData.current && refData.current.scrollIntoView({
      behavior: "smooth",
      block: "start"
    }), 120);
  }
  async function pakaiKode() {
    if (!training) return setPesanKode("Pilih kelasnya dulu.");
    const {
      data: h,
      error
    } = await SB.rpc("cek_voucher", {
      p_pelatihan: training.id,
      p_kode: kode,
      p_alumni: !!berkas.alumni,
      p_member: !!berkas.member,
      p_email: emailValid(email) ? email : null
    });
    if (error) return setPesanKode("Gagal memeriksa kode. Coba lagi.");
    if (h && h.ok) {
      setKodeManual(h);
      setPesanKode(`Diskon ${h.persen}% terpasang.`);
    } else {
      setKodeManual(null);
      setPesanKode(h && h.pesan || "Kode tidak berlaku.");
    }
  }
  function salinRekening() {
    const teks = setelan.rek_nomor;
    if (navigator.clipboard) navigator.clipboard.writeText(teks).then(() => beriTahu("Nomor rekening disalin."));else beriTahu("Nomor rekening: " + teks);
  }
  async function kirim() {
    const s = {};
    if (!training) s.kelas = "Pilih kelas dulu.";
    if (!emailValid(data.email)) s.email = "Tulis email yang aktif, contoh: nama@gmail.com";
    if (!/^[0-9]{16}$/.test(data.nik)) s.nik = "NIK terdiri dari 16 angka sesuai KTP.";
    if (!data.nama.trim()) s.nama = "Tulis nama lengkap Anda.";
    if (!/^[0-9+\-\s]{8,}$/.test(data.hp)) s.hp = "Tulis nomor WhatsApp yang aktif.";
    if (!data.instansi.trim()) s.instansi = "Tulis asal instansi atau kampus.";
    if (!data.plataran) s.plataran = "Pilih salah satu.";
    if (!berkas.foto) s.foto = "Pas foto belum diunggah.";
    if (!berkas.transfer) s.transfer = "Foto bukti transfer belum diunggah.";
    if (mintaInvoice && !invInstansi.trim()) s.invInstansi = "Tulis nama instansi yang akan ditagihkan.";
    if (!setuju) s.setuju = "Centang dulu pernyataan bahwa biaya tidak dapat dikembalikan.";
    setSalah(s);
    if (Object.keys(s).length) {
      /* Setiap acuan diperiksa dulu. Kalau tidak ada, jangan sampai
         menimbulkan galat yang membuat tombol seolah mati. */
      const keTempat = el => {
        if (el && el.scrollIntoView) el.scrollIntoView({ behavior: "smooth", block: "center" });
      };
      if (Object.keys(s).length === 1 && s.setuju) {
        keTempat(document.getElementById("dm-setuju-kotak") || refData.current);
      } else {
        keTempat(s.kelas ? refKelas.current : refData.current);
      }
      return;
    }
    setMengirim(true);
    try {
      const folder = acakId();
      const [pTransfer, pAlumni, pMember, pFoto] = await Promise.all([unggahKeGudang(folder, "transfer", berkas.transfer), unggahKeGudang(folder, "alumni", berkas.alumni), unggahKeGudang(folder, "member", berkas.member), unggahKeGudang(folder, "foto", berkas.foto)]);
      const {
        data: h,
        error
      } = await SB.rpc("kirim_pendaftaran", {
        p_pelatihan: training.id,
        p_email: email,
        p_nik: data.nik,
        p_nama: data.nama,
        p_hp: data.hp,
        p_instansi: data.instansi,
        p_profesi: data.profesi,
        p_plataran: data.plataran,
        p_transfer: pTransfer,
        p_alumni: pAlumni,
        p_member: pMember,
        p_kode: kodeManual ? kodeManual.kode : null,
        p_tipe: tipeBayar,
        p_foto: pFoto,
        p_minta_invoice: mintaInvoice,
        p_inv_instansi: mintaInvoice ? invInstansi : null,
        p_inv_penerima: mintaInvoice ? invPenerima : null
      });
      if (error) throw new Error(error.message);
      if (!h || !h.ok) throw new Error(h && h.pesan || "Pendaftaran gagal dikirim.");

      if (window.dmCatatAsal) window.dmCatatAsal(h.nomor, null);
      setHasil({
        ...h,
        nama: data.nama,
        email
      });
      /* Tautan grup diambil setelah pendaftaran tersimpan, dengan
         bekal nomor registrasi. Tidak pernah ikut termuat di
         halaman sebelum ada yang benar-benar mendaftar. */
      setGrupBaru("");
      try {
        const g = await SB.rpc("link_grup", { p_nomor: h.nomor });
        if (!g.error && g.data) setGrupBaru(String(g.data));
      } catch (e2) {}
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      muatUlang().catch(() => {});
    } catch (e) {
      setSalah({
        transfer: pesanRamah(e.message)
      });
    }
    setMengirim(false);
  }
  function daftarLagi() {
    setHasil(null);
    setGrupBaru("");
    setPilihId(null);
    setBerkas({
      transfer: null,
      member: null,
      alumni: null
    });
    setKode("");
    setKodeManual(null);
    setPesanKode("");
    setSalah({});
  }

  /* --- halaman selesai --- */
  if (hasil) {
    const namaAdmin = setelan.wa_nama || "admin DEWAMEDIK";
    const wa = `https://wa.me/${setelan.wa_nomor}?text=${encodeURIComponent(`Halo ${namaAdmin}, saya ${hasil.nama} sudah mendaftar ${hasil.judul}. Nomor registrasi ${hasil.nomor}. ${hasil.tipe_bayar === "booking" ? `Booking seat dengan uang muka ${rp(hasil.jumlah_bayar)}, sisa ${rp(hasil.sisa_bayar)}` : `Pembayaran penuh ${rp(hasil.total)}`}. Mohon konfirmasi pendaftaran saya, terima kasih.`)}`;
    return /*#__PURE__*/React.createElement("div", {
      className: "dm-wrap"
    }, /*#__PURE__*/React.createElement("div", {
      className: "dm-selesai"
    }, /*#__PURE__*/React.createElement("span", {
      className: "dm-cek"
    }, "✓"), /*#__PURE__*/React.createElement("h2", null, "Pendaftaran Anda terkirim"), /*#__PURE__*/React.createElement("p", {
      className: "dm-lead"
    }, "Simpan nomor registrasi ", /*#__PURE__*/React.createElement("b", {
      className: "dm-mono"
    }, hasil.nomor), ". Tinggal satu langkah lagi: kirim konfirmasi ke ", namaAdmin, " lewat WhatsApp agar kursi Anda segera dikunci."), /*#__PURE__*/React.createElement("div", {
      className: "dm-kwitansi"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Pelatihan"), /*#__PURE__*/React.createElement("b", null, hasil.judul)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Jadwal"), /*#__PURE__*/React.createElement("b", null, rentang(hasil.tanggal_mulai, hasil.tanggal_selesai))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Biaya"), /*#__PURE__*/React.createElement("b", {
      className: "dm-mono"
    }, rp(hasil.harga_awal))), Number(hasil.diskon) > 0 ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Diskon ", hasil.persen, "%"), /*#__PURE__*/React.createElement("b", {
      className: "dm-mono dm-vital"
    }, "− ", rp(hasil.diskon))) : null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Jenis pendaftaran"), /*#__PURE__*/React.createElement("b", null, hasil.tipe_bayar === "booking" ? "Booking seat" : "Bayar penuh")), /*#__PURE__*/React.createElement("div", {
      className: "dm-kwitansi-total"
    }, /*#__PURE__*/React.createElement("span", null, hasil.tipe_bayar === "booking" ? "Uang muka dibayar" : "Total dibayar"), /*#__PURE__*/React.createElement("b", {
      className: "dm-mono"
    }, rp(hasil.jumlah_bayar != null ? hasil.jumlah_bayar : hasil.total))), Number(hasil.sisa_bayar) > 0 ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Sisa pelunasan"), /*#__PURE__*/React.createElement("b", {
      className: "dm-mono"
    }, rp(hasil.sisa_bayar))) : null), /*#__PURE__*/React.createElement("div", {
      className: "dm-row"
    }, /*#__PURE__*/React.createElement("a", {
      className: "dm-btn dm-btn-wa",
      href: wa,
      target: "_blank",
      rel: "noreferrer"
    }, "Konfirmasi ke ", namaAdmin, " lewat WhatsApp"), grupBaru ? /*#__PURE__*/React.createElement("a", {
      className: "dm-btn-line",
      href: grupBaru,
      target: "_blank",
      rel: "noreferrer"
    }, "Gabung grup WhatsApp kelas") : null, /*#__PURE__*/React.createElement("button", {
      className: "dm-btn-line",
      onClick: daftarLagi
    }, "Daftar kelas lain")), hasil.minta_invoice ? /*#__PURE__*/React.createElement("p", {
      className: "dm-ok",
      style: {
        marginTop: 14
      }
    }, "Permintaan invoice Anda tercatat. Tim kami akan menghubungi Anda lewat WhatsApp untuk mengurusnya setelah pendaftaran diverifikasi.") : null, hasil.tipe_bayar === "booking" ? /*#__PURE__*/React.createElement("p", {
      className: "dm-catatan dm-catatan-tengah"
    }, "Sisa pembayaran ", rp(hasil.sisa_bayar), " dilunasi sebelum pelatihan dimulai. Uang muka tidak dapat dikembalikan apabila peserta mengundurkan diri.") : null, /*#__PURE__*/React.createElement("p", {
      className: "dm-hint"
    }, grupBaru
      ? "Kirim konfirmasinya dulu, lalu ajukan gabung ke grup kelas. Permintaan Anda kami setujui di grup setelah pembayaran terverifikasi."
      : "Pesannya sudah kami siapkan lengkap dengan nomor registrasi Anda — tinggal ditekan kirim.")));
  }

  /* Kartu ringkasan dipakai di kolom kanan; isinya memakai nilai dari logika yang sudah ada. */
  const ringkasan = /*#__PURE__*/React.createElement("div", {
    className: "dm-ringkas"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dm-ringkas-kepala"
  }, /*#__PURE__*/React.createElement("h3", null, "Ringkasan Pendaftaran"), /*#__PURE__*/React.createElement("p", null, "Angka dihitung otomatis oleh sistem.")), /*#__PURE__*/React.createElement("div", {
    className: "dm-ringkas-isi"
  }, !training ? /*#__PURE__*/React.createElement("div", {
    className: "dm-ringkas-kosong"
  }, /*#__PURE__*/React.createElement(Ikon, {
    nama: "toga",
    ukuran: 24
  }), /*#__PURE__*/React.createElement("b", null, "Belum ada kelas yang dipilih"), /*#__PURE__*/React.createElement("p", null, "Pilih salah satu pelatihan untuk melihat ringkasan pendaftaran.")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "dm-ringkas-kelas"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dm-jenis dm-j-" + training.jenis
  }, training.jenis), /*#__PURE__*/React.createElement("b", null, training.judul), /*#__PURE__*/React.createElement("i", null, rentang(training.tanggal_mulai, training.tanggal_selesai)), /*#__PURE__*/React.createElement("i", null, training.lokasi), /*#__PURE__*/React.createElement("i", null, training.format)), /*#__PURE__*/React.createElement("div", {
    className: "dm-baris"
  }, /*#__PURE__*/React.createElement("span", null, "Subtotal"), /*#__PURE__*/React.createElement("b", null, rp(training.harga))), cekVoucher ? /*#__PURE__*/React.createElement("p", {
    className: "dm-cek-voucher"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dm-putar-kecil"
  }), "Memeriksa kode member…") : /*#__PURE__*/React.createElement("div", {
    className: "dm-baris dm-baris-diskon"
  }, /*#__PURE__*/React.createElement("span", null, "Diskon / Member", dipakai ? ` · ${dipakai.persen}%` : ""), /*#__PURE__*/React.createElement("b", null, potongan > 0 ? "− " + rp(potongan) : rp(0))), /*#__PURE__*/React.createElement("div", {
    className: "dm-baris"
  }, /*#__PURE__*/React.createElement("span", null, "Jenis pendaftaran"), /*#__PURE__*/React.createElement("b", null, tipeBayar === "booking" ? "Booking seat" : "Bayar penuh")), /*#__PURE__*/React.createElement("div", {
    className: "dm-baris dm-baris-total"
  }, /*#__PURE__*/React.createElement("span", null, tipeBayar === "booking" ? "Dibayar sekarang" : "Total dibayar"), /*#__PURE__*/React.createElement("b", null, rp(bayarSekarang))), sisaBayar > 0 ? /*#__PURE__*/React.createElement("p", {
    className: "dm-ringkas-sisa"
  }, "Sisa pelunasan ", rp(sisaBayar), " dibayarkan sebelum pelatihan dimulai. Uang muka tidak dapat dikembalikan apabila peserta mengundurkan diri.") : null, kurang.length ? /*#__PURE__*/React.createElement("div", {
    className: "dm-kurang"
  }, /*#__PURE__*/React.createElement("b", null, "Masih perlu dilengkapi:"), /*#__PURE__*/React.createElement("ul", null,
    kurang.slice(0, 4).map((k, i) => /*#__PURE__*/React.createElement("li", { key: i }, k)),
    kurang.length > 4 ? /*#__PURE__*/React.createElement("li", null, "dan ", kurang.length - 4, " lagi") : null)) : null,
    /*#__PURE__*/React.createElement("div", {
    className: "dm-ringkas-cta"
  }, /*#__PURE__*/React.createElement("button", {
    className: "dm-btn dm-btn-blok" + (mengirim ? " dm-memuat" : ""),
    onClick: kirim,
    disabled: mengirim
  }, mengirim ? "Mengirim" : formLengkap ? "Kirim pendaftaran" : "Lanjutkan Pendaftaran")), /*#__PURE__*/React.createElement("p", {
    className: "dm-ringkas-aman"
  }, /*#__PURE__*/React.createElement(Ikon, {
    nama: "gembok",
    ukuran: 14,
    kelas: "dm-svg-samar"
  }), "Data dan bukti pembayaran Anda hanya dapat dibuka oleh admin Akademia DEWAMEDIK."))));

  /* --- halaman pendaftaran --- */
  return /*#__PURE__*/React.createElement("div", {
    className: "dm-daftar"
  }, /*#__PURE__*/React.createElement("section", {
    className: "dm-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dm-hero-foto",
    style: {
      backgroundImage: `url(${HERO_FOTO})`
    },
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "dm-hero-tirai",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement(EcgHero, null), /*#__PURE__*/React.createElement("div", {
    className: "dm-wrap dm-hero-in"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "dm-eyebrow"
  }, kampanye ? "Pendaftaran Kelas Pilihan" : "Portal Pendaftaran Pelatihan"), kampanye ? /*#__PURE__*/React.createElement("h1", null, /*#__PURE__*/React.createElement("span", {
    className: "dm-baris1"
  }, kampanye.judul)) : /*#__PURE__*/React.createElement("h1", null, /*#__PURE__*/React.createElement("span", {
    className: "dm-baris1"
  }, "Kalender Pelatihan Dewa Medik"), "Pelatihan Kesehatan dan Sertifikasi Profesional,", /*#__PURE__*/React.createElement("span", {
    className: "dm-baris2"
  }, "Lebih Mudah Diakses")), /*#__PURE__*/React.createElement("p", {
    className: "dm-hero-sub"
  }, kampanye ? kampanye.subjudul || "Pilih jadwal yang tersedia, lalu selesaikan pendaftaran Anda." : "Pilih jadwal, selesaikan pendaftaran, dan tingkatkan kompetensi Anda bersama Akademia DEWAMEDIK."), /*#__PURE__*/React.createElement("ul", {
    className: "dm-trust"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "dm-cek-kecil"
  }, /*#__PURE__*/React.createElement(Ikon, {
    nama: "centang",
    ukuran: 15,
    tebal: 2.4
  })), " Terakreditasi Kemenkes RI"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "dm-cek-kecil"
  }, /*#__PURE__*/React.createElement(Ikon, {
    nama: "centang",
    ukuran: 15,
    tebal: 2.4
  })), " Sertifikat Terintegrasi SATUSEHAT SDMK"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "dm-cek-kecil"
  }, /*#__PURE__*/React.createElement(Ikon, {
    nama: "centang",
    ukuran: 15,
    tebal: 2.4
  })), " Pembayaran Terverifikasi"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "dm-cek-kecil"
  }, /*#__PURE__*/React.createElement(Ikon, {
    nama: "centang",
    ukuran: 15,
    tebal: 2.4
  })), " Customer Support"))), /*#__PURE__*/React.createElement("aside", {
    className: "dm-hero-kartu"
  }, /*#__PURE__*/React.createElement("h2", null, "Daftar pelatihan dalam 3 langkah mudah"), /*#__PURE__*/React.createElement("div", {
    className: "dm-langkah-wadah"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dm-langkah"
  }, /*#__PURE__*/React.createElement("span", null, "1"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "Pilih kelas pelatihan"), /*#__PURE__*/React.createElement("i", null, "Jadwal, lokasi, dan biaya tampil lengkap."))), /*#__PURE__*/React.createElement("div", {
    className: "dm-langkah"
  }, /*#__PURE__*/React.createElement("span", null, "2"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "Isi data peserta"), /*#__PURE__*/React.createElement("i", null, "Identitas dan dokumen pendukung Anda."))), /*#__PURE__*/React.createElement("div", {
    className: "dm-langkah"
  }, /*#__PURE__*/React.createElement("span", null, "3"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "Lakukan pembayaran"), /*#__PURE__*/React.createElement("i", null, "Transfer lalu unggah buktinya."))))))), /*#__PURE__*/React.createElement("div", {
    className: "dm-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dm-utama-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dm-kolom-kiri"
  }, /*#__PURE__*/React.createElement("section", {
    className: "dm-cari"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dm-cari-utama"
  }, /*#__PURE__*/React.createElement("label", {
    className: "dm-cari-kotak"
  }, /*#__PURE__*/React.createElement(Ikon, {
    nama: "cari",
    ukuran: 17,
    kelas: "dm-cari-ikon"
  }), /*#__PURE__*/React.createElement("input", {
    className: "dm-input",
    type: "search",
    value: cari,
    onChange: e => setCari(e.target.value),
    placeholder: "Cari pelatihan..."
  })), /*#__PURE__*/React.createElement("button", {
    className: "dm-btn-line dm-filter-tombol" + (adaSaringan ? " dm-filter-aktif" : ""),
    onClick: () => setBukaFilter(!bukaFilter)
  }, /*#__PURE__*/React.createElement(Ikon, {
    nama: "saring",
    ukuran: 16
  }), "Filter", adaSaringan ? /*#__PURE__*/React.createElement("em", {
    className: "dm-filter-titik"
  }) : null)), /*#__PURE__*/React.createElement("div", {
    className: "dm-cari-baris" + (bukaFilter ? " dm-cari-buka" : "")
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Cari pelatihan"
  }, /*#__PURE__*/React.createElement("input", {
    className: "dm-input",
    type: "search",
    value: cari,
    onChange: e => setCari(e.target.value),
    placeholder: "Cari pelatihan..."
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Jenis Pelatihan"
  }, /*#__PURE__*/React.createElement("select", {
    className: "dm-input",
    value: fJenis,
    onChange: e => setFJenis(e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Semua jenis"), pilihanJenis.map(x => /*#__PURE__*/React.createElement("option", {
    key: x
  }, x)))), /*#__PURE__*/React.createElement(Field, {
    label: "Lokasi"
  }, /*#__PURE__*/React.createElement("select", {
    className: "dm-input",
    value: fLokasi,
    onChange: e => setFLokasi(e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Semua lokasi"), pilihanLokasi.map(x => /*#__PURE__*/React.createElement("option", {
    key: x
  }, x)))), /*#__PURE__*/React.createElement(Field, {
    label: "Bulan"
  }, /*#__PURE__*/React.createElement("select", {
    className: "dm-input",
    value: fBulan,
    onChange: e => setFBulan(e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Semua bulan"), pilihanBulan.map(([kunci, nama]) => /*#__PURE__*/React.createElement("option", {
    key: kunci,
    value: kunci
  }, nama)))), /*#__PURE__*/React.createElement(Field, {
    label: "Metode"
  }, /*#__PURE__*/React.createElement("select", {
    className: "dm-input",
    value: fMetode,
    onChange: e => setFMetode(e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Semua metode"), pilihanMetode.map(x => /*#__PURE__*/React.createElement("option", {
    key: x
  }, x)))), /*#__PURE__*/React.createElement("button", {
    className: "dm-btn dm-btn-navy dm-cari-tombol",
    onClick: () => {
      setBukaFilter(false);
      if (refKelas.current) refKelas.current.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  }, /*#__PURE__*/React.createElement(Ikon, {
    nama: "saring",
    ukuran: 16
  }), " Cari Pelatihan")), /*#__PURE__*/React.createElement("div", {
    className: "dm-cari-kaki"
  }, /*#__PURE__*/React.createElement("span", null, "Menampilkan ", /*#__PURE__*/React.createElement("b", null, kelasTampil.length), " dari ", kelas.length, " kelas yang sedang dibuka."), adaSaringan ? /*#__PURE__*/React.createElement("button", {
    className: "dm-btn-ghost",
    onClick: bersihkanSaringan
  }, "Hapus semua saringan") : null)), /*#__PURE__*/React.createElement("section", {
    className: "dm-katalog",
    id: "jadwal",
    ref: refKelas
  }, /*#__PURE__*/React.createElement("div", {
    className: "dm-katalog-kepala"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dm-katalog-judul"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dm-katalog-ikon"
  }, /*#__PURE__*/React.createElement(Ikon, {
    nama: "papan",
    ukuran: 20
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Daftar Pelatihan"), /*#__PURE__*/React.createElement("p", null, "Temukan pelatihan terbaik sesuai kebutuhan Anda"))), /*#__PURE__*/React.createElement("label", {
    className: "dm-urut"
  }, /*#__PURE__*/React.createElement("span", null, "Urutkan"), /*#__PURE__*/React.createElement("select", {
    className: "dm-input",
    value: urutkan,
    onChange: e => setUrutkan(e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: "tanggal"
  }, "Tanggal Terdekat"), /*#__PURE__*/React.createElement("option", {
    value: "harga-murah"
  }, "Harga Terendah"), /*#__PURE__*/React.createElement("option", {
    value: "harga-mahal"
  }, "Harga Tertinggi"), /*#__PURE__*/React.createElement("option", {
    value: "kuota"
  }, "Kuota Terbanyak")))), kelas.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "dm-kosong-besar"
  }, /*#__PURE__*/React.createElement(Ikon, {
    nama: "kalender",
    ukuran: 26
  }), /*#__PURE__*/React.createElement("b", null, "Belum ada kelas yang dibuka"), /*#__PURE__*/React.createElement("p", null, "Jadwal pelatihan berikutnya sedang kami siapkan. Hubungi ", setelan.email_admin, " untuk menanyakan jadwal terdekat.")) : kelasTampil.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "dm-kosong-besar"
  }, /*#__PURE__*/React.createElement(Ikon, {
    nama: "cari",
    ukuran: 26
  }), /*#__PURE__*/React.createElement("b", null, "Tidak ada kelas yang cocok"), /*#__PURE__*/React.createElement("p", null, "Coba ubah kata kunci atau longgarkan saringan yang Anda pakai."), /*#__PURE__*/React.createElement("div", {
    className: "dm-row",
    style: {
      justifyContent: "center",
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "dm-btn-line",
    onClick: bersihkanSaringan
  }, "Hapus semua saringan"))) : /*#__PURE__*/React.createElement("div", {
    className: "dm-kelas-grid"
  }, kelasTampil.map(t => {
    const [klsKuota, teksKuota] = labelKuota(t);
    const terpilih = pilihId === t.id;
    const penuh = t.sisa <= 0;
    const w = warnaKuota(t.sisa);
    return /*#__PURE__*/React.createElement("article", {
      key: t.id,
      className: "dm-kelas dm-k-" + t.jenis + (terpilih ? " dm-kelas-on" : "") + (penuh ? " dm-kelas-off" : "")
    }, terpilih ? /*#__PURE__*/React.createElement("span", {
      className: "dm-terpilih"
    }, /*#__PURE__*/React.createElement(Ikon, {
      nama: "centang",
      ukuran: 13,
      tebal: 2.6
    }), " Dipilih") : null, /*#__PURE__*/React.createElement("div", {
      className: "dm-kelas-isi"
    }, /*#__PURE__*/React.createElement("div", {
      className: "dm-kelas-atas"
    }, /*#__PURE__*/React.createElement("span", {
      className: "dm-jenis dm-j-" + t.jenis
    }, t.jenis)), /*#__PURE__*/React.createElement("b", null, t.judul), /*#__PURE__*/React.createElement("i", null, /*#__PURE__*/React.createElement(Ikon, {
      nama: "kalender",
      ukuran: 15,
      kelas: "dm-ikon"
    }), rentang(t.tanggal_mulai, t.tanggal_selesai)), /*#__PURE__*/React.createElement("i", null, /*#__PURE__*/React.createElement(Ikon, {
      nama: "lokasi",
      ukuran: 15,
      kelas: "dm-ikon"
    }), t.lokasi), /*#__PURE__*/React.createElement("i", null, /*#__PURE__*/React.createElement(Ikon, {
      nama: "toga",
      ukuran: 15,
      kelas: "dm-ikon"
    }), t.format), /*#__PURE__*/React.createElement("div", {
      className: "dm-kuota-blok"
    }, /*#__PURE__*/React.createElement("span", {
      className: klsKuota
    }, teksKuota), /*#__PURE__*/React.createElement("div", {
      className: "dm-bar-kuota",
      role: "presentation"
    }, /*#__PURE__*/React.createElement("div", {
      className: "dm-bar-kuota-isi dm-bar-" + w,
      style: {
        width: "100%"
      }
    }))), /*#__PURE__*/React.createElement("div", {
      className: "dm-kelas-kaki"
    }, /*#__PURE__*/React.createElement("span", {
      className: "dm-kelas-harga"
    }, /*#__PURE__*/React.createElement("small", null, "Biaya pelatihan"), t.harga == null ? React.createElement("button", {
      type: "button",
      className: "dm-buka-biaya",
      onClick: function (e) { e.stopPropagation(); window.dmMintaBiaya(); }
    }, "Lihat biaya") : rp(t.harga))), /*#__PURE__*/React.createElement("div", {
      className: "dm-kelas-aksi"
    }, /*#__PURE__*/React.createElement("button", {
      className: "dm-btn-line",
      onClick: () => t.harga == null ? window.dmMintaBiaya() : setDetailKelas(t)
    }, "Detail"), /*#__PURE__*/React.createElement("button", {
      className: "dm-btn dm-btn-navy dm-btn-kecil",
      disabled: penuh,
      onClick: () => t.harga == null ? window.dmMintaBiaya() : pilihKelas(t)
    }, penuh ? "Penuh" : terpilih ? "Terpilih" : "Pilih Kelas"))));
  })), salah.kelas ? /*#__PURE__*/React.createElement("p", {
    className: "dm-err"
  }, salah.kelas) : null), detailKelas ? /*#__PURE__*/React.createElement(Modal, {
    judul: detailKelas.judul,
    onTutup: () => setDetailKelas(null),
    lebar: 620
  }, /*#__PURE__*/React.createElement("div", {
    className: "dm-detail-atas"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dm-jenis dm-j-" + detailKelas.jenis
  }, detailKelas.jenis), /*#__PURE__*/React.createElement("span", {
    className: labelKuota(detailKelas)[0]
  }, labelKuota(detailKelas)[1])), /*#__PURE__*/React.createElement("div", {
    className: "dm-detail-list"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Jadwal pelaksanaan"), /*#__PURE__*/React.createElement("b", null, rentang(detailKelas.tanggal_mulai, detailKelas.tanggal_selesai))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Lokasi"), /*#__PURE__*/React.createElement("b", null, detailKelas.lokasi)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Metode pembelajaran"), /*#__PURE__*/React.createElement("b", null, detailKelas.format)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Kuota peserta"), /*#__PURE__*/React.createElement("b", null, detailKelas.kuota, " peserta")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Biaya pelatihan"), /*#__PURE__*/React.createElement("b", {
    className: "dm-detail-harga"
  }, rp(detailKelas.harga))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Uang muka booking seat"), /*#__PURE__*/React.createElement("b", null, rp(Math.min(Number(setelan.dp_nominal || 500000), Number(detailKelas.harga)))))), /*#__PURE__*/React.createElement("p", {
    className: "dm-hint"
  }, "Biaya di atas belum memperhitungkan potongan member. Potongan akan terpasang otomatis pada langkah pembayaran bila Anda memenuhi syaratnya."), /*#__PURE__*/React.createElement("div", {
    className: "dm-row dm-row-akhir"
  }, /*#__PURE__*/React.createElement("button", {
    className: "dm-btn",
    disabled: detailKelas.sisa <= 0,
    onClick: () => {
      const t = detailKelas;
      setDetailKelas(null);
      pilihKelas(t);
    }
  }, detailKelas.sisa <= 0 ? "Kuota penuh" : "Pilih kelas ini"), /*#__PURE__*/React.createElement("button", {
    className: "dm-btn-line",
    onClick: () => setDetailKelas(null)
  }, "Tutup"))) : null, /*#__PURE__*/React.createElement("section", {
    className: "dm-card" + (training ? "" : " dm-nonaktif"),
    ref: refData
  }, /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement("span", {
    className: "dm-nomor"
  }, "2"), " Isi data Anda"), /*#__PURE__*/React.createElement("div", {
    className: "dm-kelompok"
  }, /*#__PURE__*/React.createElement("p", {
    className: "dm-kelompok-judul"
  }, "Data Pribadi"), /*#__PURE__*/React.createElement(Field, {
    label: "Email aktif",
    hint: "Konfirmasi kelas dikirim ke email ini.",
    salah: salah.email
  }, /*#__PURE__*/React.createElement("input", {
    className: "dm-input",
    type: "email",
    inputMode: "email",
    value: data.email,
    onChange: e => setData({
      ...data,
      email: e.target.value
    }),
    placeholder: "nama@gmail.com"
  })), /*#__PURE__*/React.createElement("div", {
    className: "dm-grid2"
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Nama lengkap dan gelar",
    salah: salah.nama
  }, /*#__PURE__*/React.createElement("input", {
    className: "dm-input",
    value: data.nama,
    onChange: e => setData({
      ...data,
      nama: e.target.value
    }),
    placeholder: "Ns. Budi Santoso, S.Kep."
  })), /*#__PURE__*/React.createElement(Field, {
    label: "NIK (16 angka sesuai KTP)",
    salah: salah.nik
  }, /*#__PURE__*/React.createElement("input", {
    className: "dm-input dm-mono",
    inputMode: "numeric",
    maxLength: 16,
    value: data.nik,
    onChange: e => setData({
      ...data,
      nik: e.target.value.replace(/[^0-9]/g, "")
    }),
    placeholder: "3671xxxxxxxxxxxx"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Nomor WhatsApp",
    salah: salah.hp
  }, /*#__PURE__*/React.createElement("input", {
    className: "dm-input",
    inputMode: "tel",
    value: data.hp,
    onChange: e => setData({
      ...data,
      hp: e.target.value
    }),
    placeholder: "0812 3456 7890"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "dm-kelompok"
  }, /*#__PURE__*/React.createElement("p", {
    className: "dm-kelompok-judul"
  }, "Informasi Peserta"), /*#__PURE__*/React.createElement("div", {
    className: "dm-grid2"
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Instansi atau kampus",
    salah: salah.instansi
  }, /*#__PURE__*/React.createElement("input", {
    className: "dm-input",
    value: data.instansi,
    onChange: e => setData({
      ...data,
      instansi: e.target.value
    }),
    placeholder: "RSUD ..."
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Profesi"
  }, /*#__PURE__*/React.createElement("select", {
    className: "dm-input",
    value: data.profesi,
    onChange: e => setData({
      ...data,
      profesi: e.target.value
    })
  }, PROFESI.map(p => /*#__PURE__*/React.createElement("option", {
    key: p
  }, p)))))), /*#__PURE__*/React.createElement("div", {
    className: "dm-kelompok"
  }, /*#__PURE__*/React.createElement("p", {
    className: "dm-kelompok-judul"
  }, "Akun & Membership"), /*#__PURE__*/React.createElement(Field, {
    label: "Akun Plataran Sehat / SATUSEHAT SDMK",
    hint: "Dipakai untuk pencatatan SKP pelatihan Anda.",
    salah: salah.plataran
  }, /*#__PURE__*/React.createElement("select", {
    className: "dm-input",
    value: data.plataran,
    onChange: e => setData({
      ...data,
      plataran: e.target.value
    })
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Pilih salah satu"), PLATARAN.map(p => /*#__PURE__*/React.createElement("option", {
    key: p
  }, p)))))), /*#__PURE__*/React.createElement("section", {
    className: "dm-card" + (training ? "" : " dm-nonaktif")
  }, /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement("span", {
    className: "dm-nomor"
  }, "3"), " Transfer dan unggah bukti"), /*#__PURE__*/React.createElement("div", {
    className: "dm-pilih-bayar"
  }, /*#__PURE__*/React.createElement("button", {
    className: "dm-opsi" + (tipeBayar === "lunas" ? " dm-opsi-on" : ""),
    onClick: () => setTipeBayar("lunas")
  }, /*#__PURE__*/React.createElement("b", null, "Bayar penuh"), /*#__PURE__*/React.createElement("i", null, "Lunas sekarang, tidak ada sisa pembayaran."), /*#__PURE__*/React.createElement("u", {
    className: "dm-mono"
  }, training ? rp(total) : "—")), /*#__PURE__*/React.createElement("button", {
    className: "dm-opsi" + (tipeBayar === "booking" ? " dm-opsi-on" : ""),
    onClick: () => setTipeBayar("booking")
  }, /*#__PURE__*/React.createElement("b", null, "Booking seat"), /*#__PURE__*/React.createElement("i", null, "Uang muka minimal ", rp(setelan.dp_nominal || 500000), " untuk mengunci kursi. Sisanya dilunasi sebelum pelatihan dimulai."), /*#__PURE__*/React.createElement("u", {
    className: "dm-mono"
  }, training ? rp(dp) : rp(setelan.dp_nominal || 500000)))), /*#__PURE__*/React.createElement("div", {
    className: "dm-awas"
  }, /*#__PURE__*/React.createElement("b", null, "Hati-hati penipuan mengatasnamakan Dewa Medik Nusantara."), /*#__PURE__*/React.createElement("p", null, "Pembayaran hanya melalui rekening resmi di bawah ini atas nama ", setelan.rek_atas_nama, ". Kami tidak pernah meminta transfer ke rekening pribadi atau nama lain. Bila ragu, laporkan ke layanan pengaduan", " ", /*#__PURE__*/React.createElement("a", {
    href: "https://wa.me/6281366664911",
    target: "_blank",
    rel: "noreferrer"
  }, "0813-6666-4911"), ".")), /*#__PURE__*/React.createElement("p", {
    className: "dm-kelompok-judul"
  }, "Pembayaran"), /*#__PURE__*/React.createElement("div", {
    className: "dm-rek"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, setelan.rek_bank, " a.n. ", setelan.rek_atas_nama), /*#__PURE__*/React.createElement("b", {
    className: "dm-mono"
  }, setelan.rek_nomor)), /*#__PURE__*/React.createElement("button", {
    className: "dm-btn-line",
    onClick: salinRekening
  }, "Salin nomor")), /*#__PURE__*/React.createElement("div", {
    id: "dm-setuju-kotak",
    style: {
      marginTop: 14,
      padding: "13px 15px",
      borderRadius: 11,
      border: "1px solid " + (salah.setuju ? "#e0b4b4" : "#f0d9b5"),
      background: salah.setuju ? "#fdf1f1" : "#fdf7ec",
      color: "#6b4a12"
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      display: "block",
      marginBottom: 4,
      fontSize: 13.5
    }
  }, "Biaya pendaftaran tidak dapat dikembalikan"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 10px",
      fontSize: 13,
      lineHeight: 1.6
    }
  }, "Biaya yang sudah dibayarkan bersifat non-refundable, kecuali terjadi keadaan kahar (force majeure) \u2014 antara lain bencana alam, wabah penyakit, kerusuhan, atau kebijakan pemerintah yang menyebabkan pelatihan tidak dapat diselenggarakan, atau panitia melakukan perubahan tanggal pelaksanaan."), /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 9,
      fontSize: 13.5,
      fontWeight: 600,
      lineHeight: 1.5,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: setuju,
    onChange: e => setSetuju(e.target.checked),
    style: {
      marginTop: 2,
      width: 17,
      height: 17,
      flex: "0 0 auto"
    }
  }), "Saya sudah membaca dan menyetujui ketentuan ini."), salah.setuju ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "9px 0 0",
      fontSize: 13,
      fontWeight: 600,
      color: "#a3271f"
    }
  }, salah.setuju) : null), /*#__PURE__*/React.createElement("p", {
    className: "dm-kelompok-judul",
    style: {
      marginTop: 26
    }
  }, "Dokumen Pendukung"), syarat.alumni ? /*#__PURE__*/React.createElement(Unggah, {
    nada: true,
    judul: "Sertifikat BTCLS Dewa Medik Nusantara",
    keterangan: "Sertifikat pelatihan BTCLS bersama Dewa Medik Nusantara. Format JPG, PNG, atau PDF. Lewati bila Anda belum pernah mengikutinya.",
    nilai: berkas.alumni,
    onPilih: f => setBerkas({
      ...berkas,
      alumni: f
    }),
    onHapus: () => setBerkas({
      ...berkas,
      alumni: null
    })
  }) : null, syarat.member ? /*#__PURE__*/React.createElement(Unggah, {
    nada: true,
    judul: "Kartu anggota",
    keterangan: "Kartu member DEWAMEDIK. Format JPG, PNG, atau PDF. Boleh dilewati.",
    nilai: berkas.member,
    onPilih: f => setBerkas({
      ...berkas,
      member: f
    }),
    onHapus: () => setBerkas({
      ...berkas,
      member: null
    })
  }) : null, /*#__PURE__*/React.createElement(Unggah, {
    judul: "Pas foto",
    keterangan: "Wajah tampak jelas, latar polos, untuk dicetak di sertifikat. Format JPG atau PNG.",
    wajib: true,
    mode: "pasfoto",
    nilai: berkas.foto,
    onPilih: f => setBerkas({
      ...berkas,
      foto: f
    }),
    onHapus: () => setBerkas({
      ...berkas,
      foto: null
    })
  }), salah.foto ? /*#__PURE__*/React.createElement("p", {
    className: "dm-err"
  }, salah.foto) : null, /*#__PURE__*/React.createElement(Unggah, {
    judul: "Foto bukti transfer",
    keterangan: "Struk atau tangkapan layar mutasi. Boleh langsung dari kamera. Format JPG, PNG, atau PDF.",
    wajib: true,
    nilai: berkas.transfer,
    onPilih: f => setBerkas({
      ...berkas,
      transfer: f
    }),
    onHapus: () => setBerkas({
      ...berkas,
      transfer: null
    })
  }), salah.transfer ? /*#__PURE__*/React.createElement("p", {
    className: "dm-err"
  }, salah.transfer) : null, /*#__PURE__*/React.createElement("p", {
    className: "dm-kelompok-judul",
    style: {
      marginTop: 26
    }
  }, "Invoice Resmi"), /*#__PURE__*/React.createElement("div", {
    className: "dm-pilih-bayar"
  }, /*#__PURE__*/React.createElement("button", {
    className: "dm-opsi" + (!mintaInvoice ? " dm-opsi-on" : ""),
    onClick: () => setMintaInvoice(false)
  }, /*#__PURE__*/React.createElement("b", null, "Tidak perlu invoice"), /*#__PURE__*/React.createElement("i", null, "Biaya ditanggung sendiri. Bukti pendaftaran cukup dari konfirmasi kami.")), /*#__PURE__*/React.createElement("button", {
    className: "dm-opsi" + (mintaInvoice ? " dm-opsi-on" : ""),
    onClick: () => setMintaInvoice(true)
  }, /*#__PURE__*/React.createElement("b", null, "Ajukan invoice"), /*#__PURE__*/React.createElement("i", null, "Untuk peserta yang biayanya ditanggung rumah sakit atau instansi."))), mintaInvoice ? /*#__PURE__*/React.createElement("div", {
    className: "dm-inv-minta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dm-grid2"
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Instansi yang ditagihkan",
    salah: salah.invInstansi
  }, /*#__PURE__*/React.createElement("input", {
    className: "dm-input",
    value: invInstansi,
    onChange: e => setInvInstansi(e.target.value),
    placeholder: "RSUD ..."
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Ditujukan kepada",
    hint: "Opsional. Contoh: Direktur, Kepala Diklat."
  }, /*#__PURE__*/React.createElement("input", {
    className: "dm-input",
    value: invPenerima,
    onChange: e => setInvPenerima(e.target.value),
    placeholder: "Direktur"
  }))), /*#__PURE__*/React.createElement("p", {
    className: "dm-hint"
  }, "Tim kami akan menghubungi Anda lewat WhatsApp untuk mengurus invoice resmi berkop DEWAMEDIK setelah pendaftaran diverifikasi.")) : null, /*#__PURE__*/React.createElement("button", {
    className: "dm-btn-ghost dm-buka-kode",
    onClick: () => setBukaKode(!bukaKode)
  }, bukaKode ? "Tutup" : "Punya kode member dari DEWAMEDIK?"), bukaKode ? /*#__PURE__*/React.createElement("div", {
    className: "dm-voucher"
  }, /*#__PURE__*/React.createElement("input", {
    className: "dm-input dm-mono",
    value: kode,
    onChange: e => setKode(e.target.value.toUpperCase()),
    placeholder: "KODE VOUCHER"
  }), /*#__PURE__*/React.createElement("button", {
    className: "dm-btn-line",
    onClick: pakaiKode
  }, "Pakai")) : null, pesanKode ? /*#__PURE__*/React.createElement("p", {
    className: kodeManual ? "dm-ok" : "dm-err"
  }, pesanKode) : null), /*#__PURE__*//*#__PURE__*/React.createElement("section", {
    className: "dm-kenapa"
  }, /*#__PURE__*/React.createElement("h2", null, "Kenapa Memilih Akademia DEWAMEDIK?"), /*#__PURE__*/React.createElement("div", {
    className: "dm-kenapa-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dm-kenapa-item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dm-kenapa-ikon dm-ki-biru"
  }, /*#__PURE__*/React.createElement(Ikon, {
    nama: "perisai",
    ukuran: 21
  })), /*#__PURE__*/React.createElement("b", null, "Terakreditasi Kemenkes"), /*#__PURE__*/React.createElement("p", null, "Pelatihan mengikuti standar dan sistem akreditasi Kementerian Kesehatan.")), /*#__PURE__*/React.createElement("div", {
    className: "dm-kenapa-item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dm-kenapa-ikon dm-ki-hijau"
  }, /*#__PURE__*/React.createElement(Ikon, {
    nama: "kursi",
    ukuran: 21
  })), /*#__PURE__*/React.createElement("b", null, "Trainer Profesional"), /*#__PURE__*/React.createElement("p", null, "Didukung tenaga pelatih berpengalaman di bidang kegawatdaruratan.")), /*#__PURE__*/React.createElement("div", {
    className: "dm-kenapa-item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dm-kenapa-ikon dm-ki-ungu"
  }, /*#__PURE__*/React.createElement(Ikon, {
    nama: "medali",
    ukuran: 21
  })), /*#__PURE__*/React.createElement("b", null, "Sertifikat Terintegrasi"), /*#__PURE__*/React.createElement("p", null, "Sertifikat pelatihan terintegrasi dengan sistem SATUSEHAT SDMK sesuai ketentuan.")), /*#__PURE__*/React.createElement("div", {
    className: "dm-kenapa-item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dm-kenapa-ikon dm-ki-jingga"
  }, /*#__PURE__*/React.createElement(Ikon, {
    nama: "petir",
    ukuran: 21
  })), /*#__PURE__*/React.createElement("b", null, "Proses Mudah"), /*#__PURE__*/React.createElement("p", null, "Pendaftaran, pembayaran, dan verifikasi dilakukan secara digital.")), /*#__PURE__*/React.createElement("div", {
    className: "dm-kenapa-item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dm-kenapa-ikon dm-ki-biru"
  }, /*#__PURE__*/React.createElement(Ikon, {
    nama: "kalender",
    ukuran: 21
  })), /*#__PURE__*/React.createElement("b", null, "Jadwal Fleksibel"), /*#__PURE__*/React.createElement("p", null, "Pilihan tanggal dan metode pelatihan yang beragam sepanjang tahun.")), /*#__PURE__*/React.createElement("div", {
    className: "dm-kenapa-item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dm-kenapa-ikon dm-ki-hijau"
  }, /*#__PURE__*/React.createElement(Ikon, {
    nama: "headset",
    ukuran: 21
  })), /*#__PURE__*/React.createElement("b", null, "Dukungan Profesional"), /*#__PURE__*/React.createElement("p", null, "Tim kami mendampingi sebelum hingga setelah pelatihan berlangsung.")))), /*#__PURE__*/React.createElement(FormKerjasama, null)), /*#__PURE__*/React.createElement("aside", {
    className: "dm-kolom-kanan"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dm-sisi"
  }, ringkasan, /*#__PURE__*/React.createElement("div", {
    className: "dm-bantuan"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dm-bantuan-isi"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dm-bantuan-ikon"
  }, /*#__PURE__*/React.createElement(Ikon, {
    nama: "headset",
    ukuran: 20
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "Butuh Bantuan?"), /*#__PURE__*/React.createElement("p", null, "Tim kami siap membantu Anda."))), /*#__PURE__*/React.createElement("a", {
    className: "dm-btn dm-btn-wa dm-btn-blok",
    href: waBantuan(setelan, "bantuan"),
    target: "_blank",
    rel: "noreferrer"
  }, "Hubungi Kami"))))), /*#__PURE__*/React.createElement(Survei, {
    data: setelan.survei,
    testimoni: testimoni
  }), /*#__PURE__*/React.createElement(Fasilitas, {
    daftar: fasilitas
  }), /*#__PURE__*/React.createElement(Karir, {
    lowongan: lowongan,
    setelan: setelan
  }), /*#__PURE__*/React.createElement("div", {
    className: "dm-bar"
  }, training && bukaRingkas ? /*#__PURE__*/React.createElement("div", {
    className: "dm-bar-ringkas"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dm-baris"
  }, /*#__PURE__*/React.createElement("span", null, training.judul)), /*#__PURE__*/React.createElement("div", {
    className: "dm-baris"
  }, /*#__PURE__*/React.createElement("span", null, "Subtotal"), /*#__PURE__*/React.createElement("b", null, rp(training.harga))), potongan > 0 ? /*#__PURE__*/React.createElement("div", {
    className: "dm-baris"
  }, /*#__PURE__*/React.createElement("span", null, "Diskon ", dipakai ? dipakai.persen + "%" : ""), /*#__PURE__*/React.createElement("b", {
    className: "dm-bar-hemat"
  }, "− ", rp(potongan))) : null, /*#__PURE__*/React.createElement("div", {
    className: "dm-baris"
  }, /*#__PURE__*/React.createElement("span", null, "Jenis pendaftaran"), /*#__PURE__*/React.createElement("b", null, tipeBayar === "booking" ? "Booking seat" : "Bayar penuh")), sisaBayar > 0 ? /*#__PURE__*/React.createElement("div", {
    className: "dm-baris"
  }, /*#__PURE__*/React.createElement("span", null, "Sisa pelunasan"), /*#__PURE__*/React.createElement("b", null, rp(sisaBayar))) : null) : null, /*#__PURE__*/React.createElement(Ecg, {
    beat: beat
  }), /*#__PURE__*/React.createElement("div", {
    className: "dm-bar-in"
  }, /*#__PURE__*/React.createElement("div", null, dipakai ? /*#__PURE__*/React.createElement("p", {
    className: "dm-bar-diskon"
  }, "Diskon ", dipakai.persen, "% terpasang · hemat ", rp(potongan)) : /*#__PURE__*/React.createElement("p", {
    className: "dm-bar-diskon dm-bar-sepi"
  }, !training ? "Pilih kelas untuk melihat total" : tipeBayar === "booking" ? "Uang muka yang perlu ditransfer sekarang" : "Total yang perlu ditransfer"), /*#__PURE__*/React.createElement("b", {
    className: "dm-mono"
  }, training ? rp(bayarSekarang) : "—", training ? /*#__PURE__*/React.createElement("button", {
    className: "dm-bar-buka",
    onClick: () => setBukaRingkas(!bukaRingkas),
    "aria-label": bukaRingkas ? "Tutup rincian" : "Lihat rincian"
  }, bukaRingkas ? "Tutup rincian" : "Rincian") : null), potongan > 0 && tipeBayar === "lunas" ? /*#__PURE__*/React.createElement("s", {
    className: "dm-mono"
  }, rp(training.harga)) : null, training && sisaBayar > 0 ? /*#__PURE__*/React.createElement("p", {
    className: "dm-bar-sisa"
  }, "Sisa ", rp(sisaBayar), " dilunasi sebelum pelatihan dimulai") : null), /*#__PURE__*/React.createElement("button", {
    className: "dm-btn" + (mengirim ? " dm-memuat" : ""),
    onClick: kirim,
    disabled: mengirim
  }, mengirim ? "Mengirim" : formLengkap ? "Kirim pendaftaran" : "Lanjutkan Pendaftaran")))));
}

/* ================= BACK OFFICE ================= */
function TabAkun({ beriTahu }) {
  const [baris, setBaris] = useState(null);
  const [buka, setBuka] = useState(null);
  const [sibuk, setSibuk] = useState(false);
  const [sandiTampil, setSandiTampil] = useState({});
  const kosong = { nama: "", email: "", peran: "diklat", sandi: "" };

  async function muat() {
    const { data, error } = await SB.rpc("daftar_pengurus");
    if (error) return beriTahu("Gagal memuat: " + error.message);
    setBaris(Array.isArray(data) ? data : []);
  }
  useEffect(() => { muat(); }, []);

  /* Semua perubahan akun lewat Edge Function. Kunci service role
     tidak pernah ada di halaman ini. */
  async function panggil(muatan) {
    const { data: sesi } = await SB.auth.getSession();
    const token = sesi && sesi.session ? sesi.session.access_token : "";
    const dasar = String(window.DMN_CONFIG.url).replace(/\/+$/, "") + "/functions/v1";
    const r = await fetch(dasar + "/kelola-pengurus", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
        apikey: String(window.DMN_CONFIG.anonKey || "").trim()
      },
      body: JSON.stringify(muatan)
    });
    let hasil = {};
    try { hasil = await r.json(); } catch (e) {}
    if (!r.ok || hasil.galat) throw new Error(hasil.galat || "Permintaan ditolak.");
    return hasil;
  }

  async function simpan() {
    setSibuk(true);
    try {
      if (buka.user_id) {
        await panggil({ tindakan: "sandi", user_id: buka.user_id, sandi: buka.sandi });
        beriTahu("Kata sandi diperbarui.");
      } else {
        await panggil({
          tindakan: "buat",
          nama: buka.nama,
          email: buka.email,
          peran: buka.peran,
          sandi: buka.sandi
        });
        beriTahu("Akun dibuat.");
      }
      setBuka(null);
      muat();
    } catch (e) {
      beriTahu(e.message);
    }
    setSibuk(false);
  }

  async function bekukan(a, nyala) {
    try {
      await panggil({ tindakan: "aktif", user_id: a.user_id, nyala: nyala });
      beriTahu(nyala ? "Akses dihidupkan." : "Akses dibekukan.");
      muat();
    } catch (e) { beriTahu(e.message); }
  }

  async function hapus(a) {
    if (!window.confirm("Hapus akun " + (a.email || a.nama) + "? Aksesnya mati saat itu juga dan tidak bisa dibatalkan.")) return;
    try {
      await panggil({ tindakan: "hapus", user_id: a.user_id });
      beriTahu("Akun dihapus.");
      muat();
    } catch (e) { beriTahu(e.message); }
  }

  /* Sandi tidak ikut terkirim bersama daftar akun. Ia baru diambil
     satu per satu saat ditekan, lewat fungsi yang memeriksa ulang
     bahwa pemanggilnya pemilik. */
  async function lihatSandi(a) {
    if (sandiTampil[a.user_id]) {
      const t = Object.assign({}, sandiTampil);
      delete t[a.user_id];
      return setSandiTampil(t);
    }
    const { data, error } = await SB.rpc("lihat_sandi_pengurus", { p_user: a.user_id });
    if (error) return beriTahu("Gagal membuka: " + error.message);
    if (!data) return beriTahu("Sandi akun ini belum pernah disimpan. Pakai Ganti sandi untuk menyetel yang baru.");
    setSandiTampil(Object.assign({}, sandiTampil, { [a.user_id]: data }));
  }

  const waktu = v => {
    if (!v) return "belum pernah";
    try {
      return new Date(v).toLocaleString("id-ID", {
        day: "2-digit", month: "short", year: "numeric",
        hour: "2-digit", minute: "2-digit", timeZone: "Asia/Jakarta"
      });
    } catch (e) { return "—"; }
  };

  const namaPeran = { pemilik: "Pemilik", diklat: "Manajer Diklat" };

  if (!baris) return React.createElement("p", { className: "dm-load" }, "Memuat akun…");

  return React.createElement("section", { className: "dm-card" },
    React.createElement("div", { className: "dm-toolbar" },
      React.createElement("h3", null, "Akun Pengguna Back Office"),
      React.createElement("button", { className: "dm-btn", onClick: () => setBuka(kosong) }, "Buat akun")
    ),
    React.createElement("p", { className: "dm-hint", style: { marginBottom: 12 } },
      "Manajer Diklat hanya melihat tab Pendaftar dan Jadwal. Dia tidak bisa membuka kode member, invoice, pengaturan, keamanan, maupun akun pengguna, dan tidak melihat nilai terverifikasi. Batas ini dijaga di database, bukan hanya di tampilan."),

    React.createElement("div", { className: "dm-tabel-bungkus" },
      React.createElement("table", { className: "dm-tabel" },
        React.createElement("thead", null,
          React.createElement("tr", null,
            React.createElement("th", null, "Nama"),
            React.createElement("th", null, "Peran"),
            React.createElement("th", null, "Kata sandi"),
            React.createElement("th", null, "Terakhir masuk"),
            React.createElement("th", null, "Status"),
            React.createElement("th", null))),
        React.createElement("tbody", null, baris.map(a =>
          React.createElement("tr", { key: a.user_id },
            React.createElement("td", null,
              React.createElement("b", null, a.nama || "—"),
              React.createElement("p", { className: "dm-hint" }, a.email || "—")),
            React.createElement("td", null, namaPeran[a.peran] || a.peran),
            React.createElement("td", { className: "dm-mono" },
              a.peran === "pemilik"
                ? React.createElement("span", { className: "dm-hint" }, "—")
                : React.createElement("button", {
                    className: "dm-btn-ghost",
                    onClick: () => lihatSandi(a)
                  }, sandiTampil[a.user_id] || "Lihat sandi")),
            React.createElement("td", { className: "dm-hint" }, waktu(a.terakhir_masuk)),
            React.createElement("td", null, React.createElement(Badge, { status: a.aktif ? "buka" : "tutup" })),
            React.createElement("td", { className: "dm-aksi" },
              a.peran === "pemilik"
                ? React.createElement("span", { className: "dm-hint" }, "Akun Anda")
                : React.createElement(React.Fragment, null,
                    React.createElement("button", {
                      className: "dm-btn-ghost",
                      onClick: () => setBuka({ user_id: a.user_id, nama: a.nama, email: a.email, peran: a.peran, sandi: "" })
                    }, "Ganti sandi"),
                    React.createElement("button", {
                      className: "dm-btn-ghost",
                      onClick: () => bekukan(a, !a.aktif)
                    }, a.aktif ? "Bekukan" : "Aktifkan"),
                    React.createElement("button", {
                      className: "dm-btn-ghost",
                      onClick: () => hapus(a)
                    }, "Hapus"))))))
      )),

    buka ? React.createElement(Modal, {
      judul: buka.user_id ? "Ganti kata sandi" : "Buat akun pengurus",
      onTutup: () => setBuka(null)
    },
      buka.user_id
        ? React.createElement("p", { className: "dm-hint", style: { marginBottom: 12 } },
            "Sandi baru untuk " + (buka.email || buka.nama) + ". Sandi lama langsung tidak berlaku.")
        : React.createElement("div", { className: "dm-grid2" },
            React.createElement(Field, { label: "Nama lengkap" },
              React.createElement("input", {
                className: "dm-input",
                value: buka.nama,
                onChange: e => setBuka(Object.assign({}, buka, { nama: e.target.value }))
              })),
            React.createElement(Field, { label: "Email untuk masuk" },
              React.createElement("input", {
                className: "dm-input",
                type: "email",
                value: buka.email,
                onChange: e => setBuka(Object.assign({}, buka, { email: e.target.value }))
              }))),

      React.createElement(Field, {
        label: "Kata sandi",
        hint: "Minimal 10 karakter, harus memuat huruf dan angka. Bapak yang menentukan — sandi ini tersimpan terenkripsi dan bisa dilihat lagi di daftar akun."
      }, React.createElement("input", {
        className: "dm-input dm-mono",
        type: "text",
        autoComplete: "new-password",
        value: buka.sandi,
        placeholder: "ketik sandi di sini",
        onChange: e => setBuka(Object.assign({}, buka, { sandi: e.target.value }))
      })),

      React.createElement("div", { className: "dm-row dm-row-akhir" },
        React.createElement("button", {
          className: "dm-btn",
          onClick: simpan,
          disabled: sibuk
        }, sibuk ? "Menyimpan…" : (buka.user_id ? "Simpan sandi baru" : "Buat akun")),
        React.createElement("button", {
          className: "dm-btn-line",
          onClick: () => setBuka(null)
        }, "Batal"))
    ) : null
  );
}

function BackOffice({
  beriTahu
}) {
  const [sesi, setSesi] = useState(null);
  const [cekSesi, setCekSesi] = useState(true);
  const [email, setEmail] = useState("");
  const [sandi, setSandi] = useState("");
  const [err, setErr] = useState("");
  const [masuk, setMasuk] = useState(false);
  const [tab, setTab] = useState("pendaftar");
  /* Peran menentukan tab apa yang tampil. Penjaga sebenarnya ada
     di RLS: akun diklat memang tidak bisa membaca tabel lain
     walau URL-nya dipaksa. */
  const [peran, setPeran] = useState(null);

  /* Lapis kedua. Selama akun ini belum mendaftarkan aplikasi
     Authenticator, tidak ada yang berubah: masuk cukup dengan kata
     sandi. Begitu didaftarkan, sesi yang baru lolos kata sandi harus
     dinaikkan dulu dengan kode 6 angka sebelum bisa membuka apa pun. */
  const [perluKode, setPerluKode] = useState(false);
  const [kode, setKode] = useState("");

  /* Lupa kata sandi. Dua tahap: kirim tautan ke email, lalu
     setel sandi baru begitu tautannya dibuka. */
  const [modePulih, setModePulih] = useState(false);
  const [pesanPulih, setPesanPulih] = useState("");
  const [sandiBaru, setSandiBaru] = useState("");
  const [sandiUlang, setSandiUlang] = useState("");
  const [lihatSandi, setLihatSandi] = useState(false);

  const syaratPulih = [
    ["Minimal 12 karakter", sandiBaru.length >= 12],
    ["Ada huruf kecil (a-z)", /[a-z]/.test(sandiBaru)],
    ["Ada huruf besar (A-Z)", /[A-Z]/.test(sandiBaru)],
    ["Ada angka (0-9)", /[0-9]/.test(sandiBaru)],
    ["Ada simbol, misal ! ? @ #", /[^A-Za-z0-9]/.test(sandiBaru)],
    ["Kedua isian sama", sandiBaru.length > 0 && sandiBaru === sandiUlang]
  ];
  const pulihSiap = syaratPulih.every(x => x[1]);

  /* Sengaja tidak membedakan email terdaftar dan tidak: jawaban yang
     berbeda akan memberi tahu penebak alamat mana yang punya akun. */
  async function kirimPemulihan() {
    const alamat = String(email || "").trim();
    if (!alamat) {
      setErr("Isi dulu alamat email Anda di atas, baru tekan Lupa kata sandi.");
      return;
    }
    setErr("");
    setPesanPulih("");
    setMasuk(true);
    try {
      await SB.auth.resetPasswordForEmail(alamat, {
        redirectTo: location.origin + location.pathname + "?pulih=1"
      });
    } catch (e) {}
    setMasuk(false);
    setPesanPulih("Kalau alamat itu memang terdaftar, tautan pemulihan sudah dikirim ke sana. Periksa kotak masuk dan folder spam — tautannya berlaku satu jam.");
  }

  async function simpanSandiPulih() {
    setErr("");
    setMasuk(true);
    try {
      const { error } = await SB.auth.updateUser({ password: sandiBaru });
      if (error) throw error;
      setSandiBaru("");
      setSandiUlang("");
      setLihatSandi(false);
      setModePulih(false);
      setPesanPulih("Kata sandi baru tersimpan. Pakai yang ini untuk masuk berikutnya.");
      try { history.replaceState(null, "", location.pathname + "#admin"); } catch (e) {}
      try { await SB.auth.signOut(); } catch (e) {}
    } catch (e) {
      setErr("Gagal menyimpan: " + e.message);
    }
    setMasuk(false);
  }

  async function periksaLapis() {
    try {
      const {
        data
      } = await SB.auth.mfa.getAuthenticatorAssuranceLevel();
      setPerluKode(!!(data && data.nextLevel === "aal2" && data.currentLevel !== "aal2"));
    } catch (e) {
      setPerluKode(false);
    }
  }
  useEffect(() => {
    /* Tautan pemulihan membawa penanda di alamat. Diperiksa langsung,
       karena pustaka Supabase kadang sudah menukarnya jadi sesi sebelum
       pendengar di bawah sempat terpasang. */
    try {
      if (String(location.hash || "").indexOf("type=recovery") > -1 ||
          new URLSearchParams(location.search).get("pulih") === "1") setModePulih(true);
    } catch (e) {}
    SB.auth.getSession().then(async ({
      data
    }) => {
      setSesi(data.session);
      if (data.session) await periksaLapis();
      setCekSesi(false);
    });
    const {
      data: sub
    } = SB.auth.onAuthStateChange((_e, s) => {
      if (_e === "PASSWORD_RECOVERY") setModePulih(true);
      setSesi(s);
      if (s) periksaLapis();else setPerluKode(false);
    });
    return () => sub.subscription.unsubscribe();
  }, []);
  useEffect(() => {
    if (!sesi || perluKode) {
      setPeran(null);
      return;
    }
    let batal = false;
    SB.rpc("peran_saya").then(({ data }) => {
      if (!batal) setPeran(data || "tanpa-akses");
    }).catch(() => {
      if (!batal) setPeran("tanpa-akses");
    });
    return () => { batal = true; };
  }, [sesi, perluKode]);
  useEffect(() => {
    if (peran === "diklat" && tab !== "pendaftar" && tab !== "jadwal") setTab("pendaftar");
  }, [peran, tab]);
  async function login() {
    setErr("");
    setMasuk(true);
    const {
      error
    } = await SB.auth.signInWithPassword({
      email: email.trim(),
      password: sandi
    });
    setMasuk(false);
    if (error) setErr("Email atau kata sandi salah.");
  }
  async function kirimKode() {
    setErr("");
    setMasuk(true);
    try {
      const {
        data: daftar,
        error: e1
      } = await SB.auth.mfa.listFactors();
      if (e1) throw e1;
      const f = (daftar.totp || [])[0];
      if (!f) throw new Error("tanpa faktor");
      const {
        data: tantang,
        error: e2
      } = await SB.auth.mfa.challenge({
        factorId: f.id
      });
      if (e2) throw e2;
      const {
        error: e3
      } = await SB.auth.mfa.verify({
        factorId: f.id,
        challengeId: tantang.id,
        code: String(kode).replace(/[^0-9]/g, "")
      });
      if (e3) throw e3;
      setKode("");
      await periksaLapis();
    } catch (e) {
      setErr("Kode salah atau sudah kedaluwarsa. Lihat kode terbaru di aplikasi Authenticator.");
    }
    setMasuk(false);
  }
  async function keluar() {
    await SB.auth.signOut();
    setSandi("");
    setKode("");
    setPerluKode(false);
  }
  if (cekSesi) return /*#__PURE__*/React.createElement("p", {
    className: "dm-load"
  }, "Memeriksa sesi…");
  if (modePulih) return /*#__PURE__*/React.createElement("div", {
    className: "dm-card dm-gate"
  }, /*#__PURE__*/React.createElement("h3", null, "Setel kata sandi baru"), /*#__PURE__*/React.createElement("p", {
    className: "dm-lead dm-lead-kecil"
  }, "Tautan pemulihan Anda berlaku. Pasang kata sandi baru sekarang, lalu tautannya hangus."), /*#__PURE__*/React.createElement(Field, {
    label: "Kata sandi baru"
  }, /*#__PURE__*/React.createElement("input", {
    className: "dm-input",
    type: lihatSandi ? "text" : "password",
    autoComplete: "new-password",
    value: sandiBaru,
    onChange: e => setSandiBaru(e.target.value)
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Ulangi kata sandi baru"
  }, /*#__PURE__*/React.createElement("input", {
    className: "dm-input",
    type: lihatSandi ? "text" : "password",
    autoComplete: "new-password",
    value: sandiUlang,
    onChange: e => setSandiUlang(e.target.value),
    onKeyDown: e => {
      if (e.key === "Enter" && pulihSiap) simpanSandiPulih();
    }
  })), /*#__PURE__*/React.createElement("label", {
    style: { display: "flex", alignItems: "center", gap: 8, margin: "4px 0 10px", fontSize: 13 }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: lihatSandi,
    onChange: e => setLihatSandi(e.target.checked)
  }), "Tampilkan kata sandi"), /*#__PURE__*/React.createElement("ul", {
    style: { listStyle: "none", padding: 0, margin: "0 0 14px", fontSize: 13, lineHeight: 1.9 }
  }, syaratPulih.map(([teks, lolos], i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: { color: lolos ? "#186b4a" : "#7a8496" }
  }, (lolos ? "\u2713 " : "\u25cb ") + teks))), err ? /*#__PURE__*/React.createElement("p", {
    className: "dm-err"
  }, err) : null, /*#__PURE__*/React.createElement("div", {
    className: "dm-row dm-row-akhir"
  }, /*#__PURE__*/React.createElement("button", {
    className: "dm-btn",
    onClick: simpanSandiPulih,
    disabled: masuk || !pulihSiap
  }, masuk ? "Menyimpan…" : "Simpan kata sandi")));
  if (!sesi) return /*#__PURE__*/React.createElement("div", {
    className: "dm-card dm-gate"
  }, /*#__PURE__*/React.createElement("h3", null, "Back office"), /*#__PURE__*/React.createElement("p", {
    className: "dm-lead dm-lead-kecil"
  }, "Masuk dengan akun pengelola DEWAMEDIK."), /*#__PURE__*/React.createElement(Field, {
    label: "Email"
  }, /*#__PURE__*/React.createElement("input", {
    className: "dm-input",
    type: "email",
    value: email,
    onChange: e => setEmail(e.target.value),
    placeholder: "admin@dewamedik911.com"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Kata sandi"
  }, /*#__PURE__*/React.createElement("input", {
    className: "dm-input",
    type: "password",
    value: sandi,
    onChange: e => setSandi(e.target.value),
    onKeyDown: e => e.key === "Enter" && login()
  })), err ? /*#__PURE__*/React.createElement("p", {
    className: "dm-err"
  }, err) : null, pesanPulih ? /*#__PURE__*/React.createElement("p", {
    className: "dm-hint",
    style: { marginTop: 0 }
  }, pesanPulih) : null, /*#__PURE__*/React.createElement("div", {
    className: "dm-row dm-row-akhir",
    style: { justifyContent: "space-between", alignItems: "center", gap: 10 }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "dm-btn-ghost",
    onClick: kirimPemulihan,
    disabled: masuk
  }, "Lupa kata sandi?"), /*#__PURE__*/React.createElement("button", {
    className: "dm-btn",
    onClick: login,
    disabled: masuk
  }, masuk ? "Memeriksa…" : "Masuk")));
  if (perluKode) return /*#__PURE__*/React.createElement("div", {
    className: "dm-card dm-gate"
  }, /*#__PURE__*/React.createElement("h3", null, "Verifikasi dua langkah"), /*#__PURE__*/React.createElement("p", {
    className: "dm-lead dm-lead-kecil"
  }, "Buka aplikasi Authenticator di ponsel Anda, lalu masukkan 6 angka yang sedang tampil."), /*#__PURE__*/React.createElement(Field, {
    label: "Kode 6 angka"
  }, /*#__PURE__*/React.createElement("input", {
    className: "dm-input dm-mono",
    style: { maxWidth: 180, letterSpacing: "0.28em" },
    type: "text",
    inputMode: "numeric",
    autoComplete: "one-time-code",
    maxLength: 6,
    autoFocus: true,
    value: kode,
    onChange: e => setKode(e.target.value.replace(/[^0-9]/g, "")),
    onKeyDown: e => {
      if (e.key === "Enter" && kode.length === 6) kirimKode();
    }
  })), err ? /*#__PURE__*/React.createElement("p", {
    className: "dm-err"
  }, err) : null, /*#__PURE__*/React.createElement("div", {
    className: "dm-row dm-row-akhir"
  }, /*#__PURE__*/React.createElement("button", {
    className: "dm-btn-ghost",
    onClick: keluar
  }, "Batal"), /*#__PURE__*/React.createElement("button", {
    className: "dm-btn",
    onClick: kirimKode,
    disabled: masuk || kode.length !== 6
  }, masuk ? "Memeriksa…" : "Lanjut")));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "dm-sesi"
  }, /*#__PURE__*/React.createElement("span", null, "Masuk sebagai ", /*#__PURE__*/React.createElement("b", null, sesi.user.email)), /*#__PURE__*/React.createElement("button", {
    className: "dm-btn-ghost",
    onClick: keluar
  }, "Keluar")), /*#__PURE__*/React.createElement("div", {
    className: "dm-subtab"
  }, (peran === "diklat"
      ? [["pendaftar", "Pendaftar"], ["jadwal", "Jadwal"]]
      : [["pendaftar", "Pendaftar"], ["jadwal", "Jadwal"], ["voucher", "Member"], ["testimoni", "Testimoni"], ["kerjasama", "Kerja Sama"], ["prospek", "Pelihat Harga"], ["karir", "Karir"], ["fasilitas", "Fasilitas"], ["invoice", "Invoice"], ["kuitansi", "Kuitansi"], ["linkkelas", "Link Kelas"], ["akun", "Akun Pengguna"], ["setelan", "Pengaturan"], ["keamanan", "Keamanan"]]).map(([k, l]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    className: tab === k ? "dm-tab dm-tab-on" : "dm-tab",
    onClick: () => setTab(k)
  }, l))), tab === "akun" && peran !== "diklat" && /*#__PURE__*/React.createElement(TabAkun, {
    beriTahu: beriTahu
  }), tab === "pendaftar" && /*#__PURE__*/React.createElement(TabPendaftar, {
    beriTahu: beriTahu,
    peran: peran
  }), tab === "jadwal" && /*#__PURE__*/React.createElement(TabJadwal, {
    beriTahu: beriTahu,
    peran: peran
  }), tab === "voucher" && /*#__PURE__*/React.createElement(TabVoucher, {
    beriTahu: beriTahu
  }), tab === "testimoni" && /*#__PURE__*/React.createElement(TabTestimoni, {
    beriTahu: beriTahu
  }), tab === "kerjasama" && /*#__PURE__*/React.createElement(TabKerjasama, {
    beriTahu: beriTahu
  }), tab === "prospek" && /*#__PURE__*/React.createElement(TabProspek, {
    beriTahu: beriTahu
  }), tab === "karir" && /*#__PURE__*/React.createElement(TabKarir, {
    beriTahu: beriTahu
  }), tab === "fasilitas" && /*#__PURE__*/React.createElement(TabFasilitas, {
    beriTahu: beriTahu
  }), tab === "invoice" && /*#__PURE__*/React.createElement(TabInvoice, {
    beriTahu: beriTahu
  }), tab === "kuitansi" && peran !== "diklat" && /*#__PURE__*/React.createElement(TabKuitansi, {
    beriTahu: beriTahu
  }), tab === "setelan" && /*#__PURE__*/React.createElement(TabSetelan, {
    beriTahu: beriTahu
  }), tab === "keamanan" && /*#__PURE__*/React.createElement(TabKeamanan, {
    beriTahu: beriTahu
  }), tab === "linkkelas" && /*#__PURE__*/React.createElement(TabLinkKelas, {
    beriTahu: beriTahu
  }));
}
function TabPendaftar({
  beriTahu,
  peran
}) {
  const [setelan, setSetelan] = useState(null);
  useEffect(() => {
    SB.from("pengaturan").select("*").eq("id", 1).single().then(({
      data
    }) => setSetelan(data));
  }, []);
  const [baris, setBaris] = useState(null);
  const [filter, setFilter] = useState("aktif");
  const [cari, setCari] = useState("");
  const [detail, setDetail] = useState(null);
  const [tautan, setTautan] = useState({});
  const [alasan, setAlasan] = useState("");
  const [kelas, setKelas] = useState([]);
  const [pindah, setPindah] = useState(null);      /* {r, tujuan, sebab} */
  useEffect(() => {
    SB.from("pelatihan").select("id,judul,tanggal_mulai,tanggal_selesai,status")
      .order("tanggal_mulai", { ascending: true })
      .then(({ data }) => setKelas(data || []));
  }, []);
  async function muat() {
    const {
      data,
      error
    } = await SB.from("pendaftaran").select("*, pelatihan(id, judul, jenis, tanggal_mulai, tanggal_selesai, wa_grup)").order("dibuat", {
      ascending: false
    });
    if (error) return beriTahu("Data gagal dimuat: " + error.message);
    setBaris(data || []);
  }
  useEffect(() => {
    muat();
  }, []);
  async function buka(r) {
    setDetail(r);
    setAlasan(r.catatan || "");
    setTautan({});
    const jalur = {
      foto: r.berkas_foto,
      transfer: r.berkas_transfer,
      alumni: r.berkas_alumni,
      member: r.berkas_member
    };
    const hasil = {};
    for (const k of Object.keys(jalur)) {
      if (!jalur[k]) continue;
      const {
        data
      } = await SB.storage.from("bukti").createSignedUrl(jalur[k], 3600);
      if (data) hasil[k] = {
        url: data.signedUrl,
        pdf: jalur[k].endsWith(".pdf")
      };
    }
    setTautan(hasil);
  }
  async function ubahStatus(r, status, catatan = "") {
    const {
      error
    } = await SB.from("pendaftaran").update({
      status,
      catatan,
      diperiksa: new Date().toISOString()
    }).eq("id", r.id);
    if (error) return beriTahu("Gagal menyimpan: " + error.message);
    setDetail({
      ...r,
      status,
      catatan
    });
    beriTahu("Tersimpan.");
    muat();
  }

  /* Pembatalan dan penghapusan hanya untuk pemilik. Manajer diklat
     ditolak di tingkat basis data, bukan sekadar disembunyikan tombolnya. */
  async function batalkan(r, status) {
    const kata = status === "refund" ? "refund" : "pembatalan";
    const sebab = (alasan || "").trim();
    if (!sebab) return beriTahu("Tulis dulu alasan " + kata + " di kolom catatan.");
    if (!window.confirm(
      (status === "refund"
        ? "Tandai pendaftaran " + r.nomor + " sebagai REFUND?"
        : "Batalkan pendaftaran " + r.nomor + "?") +
      "\n\nBaris tetap tersimpan, tetapi keluar dari hitungan pendaftar dan nilai terverifikasi."
    )) return;
    const { data, error } = await SB.from("pendaftaran")
      .update({ status, catatan: sebab, diperiksa: new Date().toISOString() })
      .eq("id", r.id).select("id");
    if (error) return beriTahu("Gagal: " + error.message);
    if (!data || !data.length) return beriTahu("Ditolak: hanya pemilik yang boleh membatalkan atau merefund.");
    setDetail(null);
    beriTahu(status === "refund" ? "Ditandai refund." : "Pendaftaran dibatalkan.");
    muat();
  }

  async function simpanPindah() {
    const { r, tujuan, sebab } = pindah;
    if (!tujuan) return beriTahu("Pilih dulu kelas tujuannya.");
    if (!(sebab || "").trim()) return beriTahu("Tulis dulu alasan pemindahan.");
    const { data, error } = await SB.rpc("pindah_jadwal", {
      p_id: r.id, p_kelas: tujuan, p_alasan: sebab.trim()
    });
    if (error) return beriTahu("Gagal memindahkan: " + error.message);
    if (!data) return beriTahu("Ditolak: hanya pemilik yang boleh memindahkan jadwal.");
    setPindah(null);
    setDetail(null);
    beriTahu("Peserta dipindahkan ke kelas baru.");
    muat();
  }

  async function hapusPendaftar(r) {
    if (!window.confirm(
      "Hapus permanen pendaftaran " + r.nomor + " atas nama " + r.nama + "?" +
      "\n\nData dan jejaknya hilang selamanya dan tidak bisa dikembalikan. " +
      "Kalau hanya ingin membersihkan daftar, pakai Batalkan \u2014 datanya tetap tersimpan."
    )) return;
    if (!window.confirm("Sekali lagi: yakin menghapus " + r.nomor + " secara permanen?")) return;
    const { data, error } = await SB.from("pendaftaran").delete().eq("id", r.id).select("id");
    if (error) return beriTahu("Gagal menghapus: " + error.message);
    if (!data || !data.length) return beriTahu("Ditolak: hanya pemilik yang boleh menghapus pendaftar.");
    setDetail(null);
    beriTahu("Pendaftaran " + r.nomor + " dihapus.");
    muat();
  }

  /* Berkas diunduh langsung dalam bentuk yang siap dibuka Excel:
     pemisah titik koma (standar Excel Indonesia), penanda UTF-8 agar
     huruf beraksen tidak rusak, dan angka ditulis polos tanpa "Rp"
     supaya bisa langsung dijumlahkan. */
  function unduhCsv() {
    const data = tampil.length ? tampil : baris || [];
    if (!data.length) return beriTahu("Tidak ada data untuk diekspor.");
    const head = ["No registrasi", "Tanggal daftar", "Nama", "NIK", "Email", "WhatsApp", "Instansi", "Profesi", "Akun Plataran Sehat/SATUSEHAT SDMK", "Pelatihan", "Jadwal", "Harga awal", "Kode member", "Persen diskon", "Diskon", "Total", "Jenis pendaftaran", "Dibayar", "Sisa pelunasan", "Minta invoice", "Instansi penagihan", "Asal link", "Status", "Catatan"];
    const tglRingkas = v => {
      if (!v) return "";
      const d = new Date(v);
      const p = x => String(x).padStart(2, "0");
      return `${p(d.getDate())}/${p(d.getMonth() + 1)}/${d.getFullYear()} ${p(d.getHours())}:${p(d.getMinutes())}`;
    };
    const statusTeks = {
      menunggu: "Menunggu verifikasi",
      terverifikasi: "Terverifikasi",
      ditolak: "Perlu diperbaiki",
      batal: "Dibatalkan",
      refund: "Refund"
    };
    const isi = data.map(r => [r.nomor, tglRingkas(r.dibuat), r.nama, "'" + (r.nik || ""),
    // apostrof agar NIK tidak berubah jadi notasi ilmiah
    r.email, "'" + (r.hp || ""),
    // agar angka 0 di depan tidak hilang
    r.instansi, r.profesi, r.plataran, r.pelatihan ? r.pelatihan.judul : "", r.pelatihan ? rentang(r.pelatihan.tanggal_mulai, r.pelatihan.tanggal_selesai) : "", Number(r.harga_awal) || 0, r.voucher_kode || "", Number(r.persen) || 0, Number(r.diskon) || 0, Number(r.total) || 0, r.tipe_bayar === "booking" ? "Booking seat" : "Bayar penuh", Number(r.jumlah_bayar != null ? r.jumlah_bayar : r.total) || 0, Number(r.sisa_bayar) || 0, r.minta_invoice ? "Ya" : "Tidak", r.invoice_instansi || "", r.kampanye || "", statusTeks[r.status] || r.status, r.catatan || ""]);
    const sel = v => {
      if (typeof v === "number") return String(v); // angka polos, siap dijumlahkan
      const t = String(v ?? "");
      return '"' + t.replace(/"/g, '""') + '"';
    };
    const teks = [head.map(sel).join(";"), ...isi.map(b => b.map(sel).join(";"))].join("\r\n");
    const hariIni = new Date();
    const p = x => String(x).padStart(2, "0");
    const namaBerkas = `Pendaftar-DEWAMEDIK-${hariIni.getFullYear()}${p(hariIni.getMonth() + 1)}${p(hariIni.getDate())}.csv`;

    // \uFEFF adalah penanda UTF-8 yang dibaca Excel
    const blob = new Blob(["\uFEFF" + teks], {
      type: "text/csv;charset=utf-8;"
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = namaBerkas;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1500);
    beriTahu(`${data.length} baris diunduh sebagai ${namaBerkas}`);
  }
  if (!baris) return /*#__PURE__*/React.createElement("p", {
    className: "dm-load"
  }, "Memuat pendaftar…");
  /* Pendaftaran yang dibatalkan atau direfund tidak ikut dihitung,
     dan disembunyikan dari daftar utama kecuali sengaja difilter. */
  const mati = r => r.status === "batal" || r.status === "refund";
  const aktif = baris.filter(r => !mati(r));
  const tampil = baris
    .filter(r => filter === "aktif" ? !mati(r) : filter === "semua" ? true : r.status === filter)
    .filter(r => cari ? (r.nama + r.email + r.nomor + r.nik).toLowerCase().includes(cari.toLowerCase()) : true);
  const nilai = aktif.filter(r => r.status === "terverifikasi").reduce((a, b) => a + Number(b.total), 0);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "dm-stat"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Pendaftar"), /*#__PURE__*/React.createElement("b", {
    className: "dm-mono"
  }, aktif.length), baris.length - aktif.length > 0 ? /*#__PURE__*/React.createElement("p", {
    className: "dm-hint"
  }, baris.length - aktif.length, " batal/refund") : null), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Perlu diperiksa"), /*#__PURE__*/React.createElement("b", {
    className: "dm-mono"
  }, aktif.filter(r => r.status === "menunggu").length)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Terverifikasi"), /*#__PURE__*/React.createElement("b", {
    className: "dm-mono"
  }, aktif.filter(r => r.status === "terverifikasi").length)), peran === "diklat" ? null : /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Nilai terverifikasi"), /*#__PURE__*/React.createElement("b", {
    className: "dm-mono"
  }, rp(nilai)))), /*#__PURE__*/React.createElement("section", {
    className: "dm-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dm-toolbar"
  }, /*#__PURE__*/React.createElement("input", {
    className: "dm-input",
    placeholder: "Cari nama, email, NIK, nomor registrasi",
    value: cari,
    onChange: e => setCari(e.target.value)
  }), /*#__PURE__*/React.createElement("select", {
    className: "dm-input",
    value: filter,
    onChange: e => setFilter(e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: "aktif"
  }, "Aktif \u2014 tanpa batal/refund"), /*#__PURE__*/React.createElement("option", {
    value: "semua"
  }, "Semua termasuk batal/refund"), /*#__PURE__*/React.createElement("option", {
    value: "menunggu"
  }, "Perlu diperiksa"), /*#__PURE__*/React.createElement("option", {
    value: "terverifikasi"
  }, "Terverifikasi"), /*#__PURE__*/React.createElement("option", {
    value: "ditolak"
  }, "Perlu diperbaiki"), peran === "diklat" ? null : /*#__PURE__*/React.createElement("option", {
    value: "batal"
  }, "Dibatalkan"), peran === "diklat" ? null : /*#__PURE__*/React.createElement("option", {
    value: "refund"
  }, "Refund")), peran === "diklat" ? null : /*#__PURE__*/React.createElement("button", {
    className: "dm-btn-line",
    onClick: unduhCsv
  }, /*#__PURE__*/React.createElement(Ikon, {
    nama: "papan",
    ukuran: 15
  }), " Unduh Excel (CSV)")), tampil.length === 0 ? /*#__PURE__*/React.createElement("p", {
    className: "dm-kosong"
  }, "Belum ada pendaftar yang cocok.") : /*#__PURE__*/React.createElement("div", {
    className: "dm-tabel-bungkus"
  }, /*#__PURE__*/React.createElement("table", {
    className: "dm-tabel"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "No. registrasi"), /*#__PURE__*/React.createElement("th", null, "Peserta"), /*#__PURE__*/React.createElement("th", null, "Pelatihan"), /*#__PURE__*/React.createElement("th", null, "Kode member"), /*#__PURE__*/React.createElement("th", null, "Total"), /*#__PURE__*/React.createElement("th", null, "Status"), /*#__PURE__*/React.createElement("th", null))), /*#__PURE__*/React.createElement("tbody", null, tampil.map(r => /*#__PURE__*/React.createElement("tr", {
    key: r.id,
    className: mati(r) ? "dm-baris-mati" : null
  }, /*#__PURE__*/React.createElement("td", {
    className: "dm-mono"
  }, r.nomor), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("b", null, r.nama), mati(r) ? /*#__PURE__*/React.createElement("span", {
    className: "dm-tanda-mati"
  }, r.status === "refund" ? "REFUND" : "BATAL") : null, r.minta_invoice ? /*#__PURE__*/React.createElement("span", {
    className: "dm-tanda-invoice"
  }, "Invoice") : null, /*#__PURE__*/React.createElement("p", {
    className: "dm-hint"
  }, r.email)), /*#__PURE__*/React.createElement("td", null, r.pelatihan ? r.pelatihan.judul : "—", r.pelatihan && r.pelatihan.tanggal_mulai ? /*#__PURE__*/React.createElement("p", {
    className: "dm-hint"
  }, rentang(r.pelatihan.tanggal_mulai, r.pelatihan.tanggal_selesai)) : null), /*#__PURE__*/React.createElement("td", {
    className: "dm-mono"
  }, r.voucher_kode ? `${r.voucher_kode} (${r.persen}%)` : "—"), /*#__PURE__*/React.createElement("td", {
    className: "dm-mono"
  }, rp(r.jumlah_bayar != null ? r.jumlah_bayar : r.total), r.tipe_bayar === "booking" ? /*#__PURE__*/React.createElement("p", {
    className: "dm-hint"
  }, "DP · sisa ", rp(r.sisa_bayar)) : null), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Badge, {
    status: r.status
  })), /*#__PURE__*/React.createElement("td", {
    className: "dm-aksi-ket"
  }, mati(r) || r.pindah_pada ? /*#__PURE__*/React.createElement("div", {
    className: "dm-ket" + (mati(r) ? " dm-ket-merah" : " dm-ket-biru")
  }, /*#__PURE__*/React.createElement("b", null,
    r.status === "refund" ? "Refund" : r.status === "batal" ? "Dibatalkan" : "Pindah jadwal"),
    r.pindah_pada && !mati(r) ? /*#__PURE__*/React.createElement("i", null, "dari ", r.pindah_dari || "kelas sebelumnya") : null,
    r.catatan ? /*#__PURE__*/React.createElement("p", { title: r.catatan },
      r.catatan.length > 80 ? r.catatan.slice(0, 80) + "\u2026" : r.catatan) : null) : null,
    /*#__PURE__*/React.createElement("button", {
    className: "dm-btn-ghost",
    onClick: () => buka(r)
  }, "Periksa")))))))), detail ? /*#__PURE__*/React.createElement(Modal, {
    judul: `${detail.nomor} · ${detail.nama}`,
    onTutup: () => setDetail(null),
    lebar: 760
  }, /*#__PURE__*/React.createElement("div", {
    className: "dm-grid2"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "dm-hint"
  }, "Email"), /*#__PURE__*/React.createElement("p", null, detail.email), /*#__PURE__*/React.createElement("p", {
    className: "dm-hint"
  }, "NIK"), /*#__PURE__*/React.createElement("p", {
    className: "dm-mono"
  }, detail.nik), /*#__PURE__*/React.createElement("p", {
    className: "dm-hint"
  }, "WhatsApp"), /*#__PURE__*/React.createElement("p", null, detail.hp), /*#__PURE__*/React.createElement("p", {
    className: "dm-hint"
  }, "Instansi"), /*#__PURE__*/React.createElement("p", null, detail.instansi)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "dm-hint"
  }, "Profesi"), /*#__PURE__*/React.createElement("p", null, detail.profesi), /*#__PURE__*/React.createElement("p", {
    className: "dm-hint"
  }, "Akun Plataran Sehat / SATUSEHAT SDMK"), /*#__PURE__*/React.createElement("p", null, detail.plataran), /*#__PURE__*/React.createElement("p", {
    className: "dm-hint"
  }, "Permintaan invoice"), /*#__PURE__*/React.createElement("p", null, detail.minta_invoice ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("b", null, "Ya"), " — ", detail.invoice_instansi || "instansi tidak diisi", detail.invoice_penerima ? ` (u.p. ${detail.invoice_penerima})` : "") : "Tidak"), /*#__PURE__*/React.createElement("p", {
    className: "dm-hint"
  }, "Pelatihan"), /*#__PURE__*/React.createElement("p", null, detail.pelatihan ? detail.pelatihan.judul : "—"), /*#__PURE__*/React.createElement("p", {
    className: "dm-hint"
  }, "Biaya"), /*#__PURE__*/React.createElement("p", {
    className: "dm-mono"
  }, rp(detail.harga_awal), Number(detail.diskon) > 0 ? ` − ${rp(detail.diskon)} (${detail.voucher_kode})` : "", " = ", /*#__PURE__*/React.createElement("b", null, rp(detail.total))), /*#__PURE__*/React.createElement("p", {
    className: "dm-hint"
  }, "Jenis pendaftaran"), /*#__PURE__*/React.createElement("p", null, detail.tipe_bayar === "booking" ? "Booking seat" : "Bayar penuh", " · dibayar", " ", /*#__PURE__*/React.createElement("b", {
    className: "dm-mono"
  }, rp(detail.jumlah_bayar != null ? detail.jumlah_bayar : detail.total)), Number(detail.sisa_bayar) > 0 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("br", null), "Sisa pelunasan ", /*#__PURE__*/React.createElement("b", {
    className: "dm-mono"
  }, rp(detail.sisa_bayar))) : null))), /*#__PURE__*/React.createElement("h4", {
    className: "dm-h4"
  }, "Berkas"), /*#__PURE__*/React.createElement("div", {
    className: "dm-berkas-grid"
  }, [["foto", "Pas foto"], ["transfer", "Bukti transfer"], ["alumni", "Sertifikat BTCLS"], ["member", "Kartu anggota"]].map(([k, l]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    className: "dm-berkas"
  }, /*#__PURE__*/React.createElement("span", null, l), tautan[k] ? tautan[k].pdf ? /*#__PURE__*/React.createElement("a", {
    href: tautan[k].url,
    target: "_blank",
    rel: "noreferrer",
    className: "dm-pdf-link"
  }, "Buka PDF") : /*#__PURE__*/React.createElement("a", {
    href: tautan[k].url,
    target: "_blank",
    rel: "noreferrer"
  }, /*#__PURE__*/React.createElement("img", {
    src: tautan[k].url,
    alt: l
  })) : /*#__PURE__*/React.createElement("p", {
    className: "dm-kosong"
  }, "Tidak diunggah")))), /*#__PURE__*/React.createElement(Field, {
    label: "Catatan untuk peserta"
  }, /*#__PURE__*/React.createElement("input", {
    className: "dm-input",
    value: alasan,
    onChange: e => setAlasan(e.target.value),
    placeholder: "Bukti transfer tidak terbaca"
  })), /*#__PURE__*/React.createElement("div", {
    className: "dm-row dm-row-akhir"
  }, /*#__PURE__*/React.createElement("button", {
    className: "dm-btn",
    onClick: () => ubahStatus(detail, "terverifikasi", alasan)
  }, "Verifikasi"), /*#__PURE__*/React.createElement("button", {
    className: "dm-btn-line",
    onClick: () => ubahStatus(detail, "ditolak", alasan)
  }, "Minta perbaikan"), /*#__PURE__*/React.createElement("button", {
    className: "dm-btn-ghost",
    onClick: () => ubahStatus(detail, "menunggu", alasan)
  }, "Kembalikan ke menunggu")), detail.pindah_pada && !(detail.status === "batal" || detail.status === "refund")
    ? /*#__PURE__*/React.createElement("div", {
    className: "dm-pindah-kabar"
  }, /*#__PURE__*/React.createElement("b", null, "Peserta ini sudah dipindahkan jadwalnya"),
    /*#__PURE__*/React.createElement("p", null, "Dari ", detail.pindah_dari || "kelas sebelumnya",
      " \u2192 ", detail.pelatihan ? detail.pelatihan.judul : "kelas sekarang",
      " \u00b7 dipindahkan ", tglPanjang(String(detail.pindah_pada).slice(0, 10))),
    detail.catatan ? /*#__PURE__*/React.createElement("p", null, detail.catatan) : null) : null,
    detail.status === "batal" || detail.status === "refund" ? /*#__PURE__*/React.createElement("div", {
    className: "dm-mati-kabar"
  }, /*#__PURE__*/React.createElement("b", null, detail.status === "refund"
    ? "Pendaftaran ini sudah direfund"
    : "Pendaftaran ini sudah dibatalkan"), /*#__PURE__*/React.createElement("p", null, detail.catatan || "Tanpa keterangan."),
    /*#__PURE__*/React.createElement("p", null, "Tidak ikut dihitung sebagai pendaftar maupun nilai terverifikasi. Untuk mengaktifkan kembali, tekan Kembalikan ke menunggu.")) : null, peran === "diklat" ? null : /*#__PURE__*/React.createElement("div", {
    className: "dm-bahaya"
  }, /*#__PURE__*/React.createElement("b", null, "Pembersihan data \u2014 khusus pimpinan"), /*#__PURE__*/React.createElement("p", null, "Batalkan memakai kalimat pada kolom catatan di atas sebagai alasan. Barisnya tetap tersimpan, tetapi keluar dari hitungan pendaftar dan nilai terverifikasi. Hapus permanen hanya untuk data uji coba atau entri ganda."), /*#__PURE__*/React.createElement("div", {
    className: "dm-row"
  }, /*#__PURE__*/React.createElement("button", {
    className: "dm-btn-line",
    onClick: () => batalkan(detail, "batal")
  }, "Batalkan pendaftaran"), /*#__PURE__*/React.createElement("button", {
    className: "dm-btn-line",
    onClick: () => batalkan(detail, "refund")
  }, "Tandai refund"), /*#__PURE__*/React.createElement("button", {
    className: "dm-btn-line",
    onClick: () => setPindah({
      r: detail,
      tujuan: "",
      sebab: detail.catatan || ""
    })
  }, "Pindah jadwal"), /*#__PURE__*/React.createElement("button", {
    className: "dm-btn-ghost dm-btn-hapus",
    onClick: () => hapusPendaftar(detail)
  }, "Hapus permanen"))), detail.status === "terverifikasi" || detail.status === "ditolak" ? /*#__PURE__*/React.createElement("div", {
    className: "dm-kabari"
  }, /*#__PURE__*/React.createElement("b", null, detail.status === "terverifikasi" ? "Kabari peserta bahwa pendaftarannya berhasil" : "Kabari peserta agar segera memperbaiki berkasnya"), /*#__PURE__*/React.createElement("p", null, "Pesannya sudah tersusun lengkap — tinggal ditekan kirim."), /*#__PURE__*/React.createElement("div", {
    className: "dm-row"
  }, /*#__PURE__*/React.createElement("a", {
    className: "dm-btn dm-btn-wa",
    href: waLink(detail.hp, detail.status === "terverifikasi" ? pesanTerverifikasi(detail, setelan) : pesanPerbaikan(detail, setelan)),
    target: "_blank",
    rel: "noreferrer"
  }, "Kirim lewat WhatsApp"), /*#__PURE__*/React.createElement("a", {
    className: "dm-btn-line",
    href: mailLink(detail.email, detail.status === "terverifikasi" ? `Pendaftaran Berhasil — ${detail.nomor} · Akademia DEWAMEDIK` : `Perlu Dilengkapi — ${detail.nomor} · Akademia DEWAMEDIK`, detail.status === "terverifikasi" ? pesanTerverifikasi(detail, setelan) : pesanPerbaikan(detail, setelan))
  }, "Kirim lewat email"))) : null) : null,

    pindah ? /*#__PURE__*/React.createElement(Modal, {
      judul: "Pindah jadwal — " + pindah.r.nama,
      onTutup: () => setPindah(null)
    }, /*#__PURE__*/React.createElement("p", {
      className: "dm-hint",
      style: { marginBottom: 14 }
    }, "Kelas sekarang: ", /*#__PURE__*/React.createElement("b", null,
      pindah.r.pelatihan ? pindah.r.pelatihan.judul : "—"),
      pindah.r.pelatihan && pindah.r.pelatihan.tanggal_mulai
        ? " · " + rentang(pindah.r.pelatihan.tanggal_mulai, pindah.r.pelatihan.tanggal_selesai) : ""),
      /*#__PURE__*/React.createElement(Field, {
        label: "Pindahkan ke kelas",
        hint: "Hanya kelas yang tanggalnya belum lewat."
      }, /*#__PURE__*/React.createElement("select", {
        className: "dm-input",
        value: pindah.tujuan,
        onChange: e => setPindah({ ...pindah, tujuan: e.target.value })
      }, /*#__PURE__*/React.createElement("option", { value: "" }, "— pilih kelas tujuan —"),
        kelas
          .filter(k => k.id !== (pindah.r.pelatihan && pindah.r.pelatihan.id))
          .filter(k => !k.tanggal_mulai || k.tanggal_mulai >= hariIni())
          .map(k => /*#__PURE__*/React.createElement("option", { key: k.id, value: k.id },
            k.judul + " · " + rentang(k.tanggal_mulai, k.tanggal_selesai))))),
      /*#__PURE__*/React.createElement(Field, {
        label: "Alasan pemindahan",
        hint: "Wajib diisi. Tersimpan sebagai catatan peserta dan terbaca di daftar."
      }, /*#__PURE__*/React.createElement("textarea", {
        className: "dm-textarea dm-textarea-besar",
        rows: 2,
        value: pindah.sebab,
        onChange: e => setPindah({ ...pindah, sebab: e.target.value }),
        placeholder: "mis. Peserta mundur karena dinas, dipindahkan ke angkatan berikutnya atas permintaan sendiri."
      })),
      /*#__PURE__*/React.createElement("div", { className: "dm-row dm-row-akhir" },
        /*#__PURE__*/React.createElement("button", {
          className: "dm-btn",
          onClick: simpanPindah
        }, "Pindahkan"),
        /*#__PURE__*/React.createElement("button", {
          className: "dm-btn-line",
          onClick: () => setPindah(null)
        }, "Batal"))) : null);
}
/* ============================================================
   KALENDER JADWAL — tampilan bulanan untuk back office.
   Hanya membaca data tabel "pelatihan" yang sudah ada.
   Klik satu batang kelas untuk membuka form Ubah.
   ============================================================ */

var KAL_BULAN = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
var KAL_NAMA_HARI = ["SEN", "SEL", "RAB", "KAM", "JUM", "SAB", "MIN"];

function kalTanggal(teks) {
  if (!teks) return null;
  var bagian = String(teks).slice(0, 10).split("-");
  if (bagian.length < 3) return null;
  var d = new Date(Number(bagian[0]), Number(bagian[1]) - 1, Number(bagian[2]));
  return isNaN(d.getTime()) ? null : d;
}

function kalSelisihHari(a, b) {
  return Math.round((b.getTime() - a.getTime()) / 86400000);
}

function kalKunciHari(d) {
  return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
}

/* Menyusun batang kelas untuk satu baris pekan, lengkap dengan jalur
   bertingkat supaya kelas yang tanggalnya bertumpuk tidak saling menimpa. */
function kalSegmenPekan(pekan, daftar) {
  var awal = pekan[0];
  var akhir = pekan[6];
  var segmen = [];
  daftar.forEach(function (t) {
    var mulai = kalTanggal(t.tanggal_mulai);
    if (!mulai) return;
    var selesai = kalTanggal(t.tanggal_selesai) || mulai;
    if (selesai < mulai) selesai = mulai;
    if (selesai < awal || mulai > akhir) return;
    var kolMulai = Math.max(0, kalSelisihHari(awal, mulai));
    var kolAkhir = Math.min(6, kalSelisihHari(awal, selesai));
    if (kolAkhir < kolMulai) return;
    segmen.push({
      t: t,
      kolMulai: kolMulai,
      rentang: kolAkhir - kolMulai + 1,
      potongKiri: mulai < awal,
      potongKanan: selesai > akhir,
      jalur: 0
    });
  });
  segmen.sort(function (a, b) {
    return a.kolMulai - b.kolMulai || b.rentang - a.rentang;
  });
  var jalur = [];
  segmen.forEach(function (g) {
    var l = 0;
    while (l < 12) {
      if (!jalur[l]) jalur[l] = [];
      var bentrok = jalur[l].some(function (x) {
        return !(g.kolMulai > x.kolMulai + x.rentang - 1 || g.kolMulai + g.rentang - 1 < x.kolMulai);
      });
      if (!bentrok) {
        jalur[l].push(g);
        g.jalur = l;
        return;
      }
      l++;
    }
    g.jalur = 11;
  });
  return segmen;
}

function KalenderJadwal({
  baris,
  onPilih
}) {
  var awalnya = new Date();
  const [kursor, setKursor] = useState({
    tahun: awalnya.getFullYear(),
    bulan: awalnya.getMonth()
  });
  const kunciHariIni = kalKunciHari(new Date());

  function geser(langkah) {
    var d = new Date(kursor.tahun, kursor.bulan + langkah, 1);
    setKursor({
      tahun: d.getFullYear(),
      bulan: d.getMonth()
    });
  }

  const daftar = (baris || []).filter(function (t) {
    return !!t.tanggal_mulai;
  });

  /* Grid selalu 6 pekan supaya tinggi kalender tidak melompat tiap bulan. */
  const awalBulan = new Date(kursor.tahun, kursor.bulan, 1);
  const mundur = (awalBulan.getDay() + 6) % 7;
  const pekanan = [];
  for (var p = 0; p < 6; p++) {
    var isi = [];
    for (var h = 0; h < 7; h++) {
      isi.push(new Date(kursor.tahun, kursor.bulan, 1 - mundur + p * 7 + h));
    }
    pekanan.push(isi);
  }

  const dalamBulan = daftar.filter(function (t) {
    var mulai = kalTanggal(t.tanggal_mulai);
    if (!mulai) return false;
    var selesai = kalTanggal(t.tanggal_selesai) || mulai;
    var batasAwal = pekanan[0][0];
    var batasAkhir = pekanan[5][6];
    return !(selesai < batasAwal || mulai > batasAkhir);
  });

  const jenisTampil = [];
  dalamBulan.forEach(function (t) {
    if (t.jenis && jenisTampil.indexOf(t.jenis) < 0) jenisTampil.push(t.jenis);
  });

  return /*#__PURE__*/React.createElement("div", {
    className: "dm-kal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dm-kal-kepala"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "dm-kal-judul"
  }, KAL_BULAN[kursor.bulan], " ", kursor.tahun), /*#__PURE__*/React.createElement("button", {
    className: "dm-kal-nav",
    onClick: function () {
      geser(-1);
    },
    title: "Bulan sebelumnya",
    type: "button"
  }, "‹"), /*#__PURE__*/React.createElement("button", {
    className: "dm-kal-nav",
    onClick: function () {
      geser(1);
    },
    title: "Bulan berikutnya",
    type: "button"
  }, "›"), /*#__PURE__*/React.createElement("button", {
    className: "dm-kal-kini",
    type: "button",
    onClick: function () {
      var d = new Date();
      setKursor({
        tahun: d.getFullYear(),
        bulan: d.getMonth()
      });
    }
  }, "Hari ini")), /*#__PURE__*/React.createElement("div", {
    className: "dm-kal-namahari"
  }, KAL_NAMA_HARI.map(function (n) {
    return /*#__PURE__*/React.createElement("span", {
      key: n
    }, n);
  })), pekanan.map(function (pekan, i) {
    var segmen = kalSegmenPekan(pekan, daftar);
    var jumlahJalur = 0;
    segmen.forEach(function (g) {
      if (g.jalur + 1 > jumlahJalur) jumlahJalur = g.jalur + 1;
    });
    var tinggi = 42 + jumlahJalur * 23;
    if (tinggi < 82) tinggi = 82;
    return /*#__PURE__*/React.createElement("div", {
      className: "dm-kal-pekan",
      key: i
    }, /*#__PURE__*/React.createElement("div", {
      className: "dm-kal-sel-lapis"
    }, pekan.map(function (d, k) {
      var kunci = kalKunciHari(d);
      var kelas = "dm-kal-sel";
      if (d.getMonth() !== kursor.bulan) kelas += " dm-kal-luar";
      if (k >= 5) kelas += " dm-kal-pekanan";
      if (kunci === kunciHariIni) kelas += " dm-kal-kinisel";
      return /*#__PURE__*/React.createElement("div", {
        key: kunci,
        className: kelas,
        style: {
          minHeight: tinggi
        }
      }, /*#__PURE__*/React.createElement("span", {
        className: "dm-kal-angka"
      }, d.getDate()));
    })), /*#__PURE__*/React.createElement("div", {
      className: "dm-kal-acara"
    }, segmen.map(function (g, n) {
      var t = g.t;
      var kelas = "dm-kal-bar dm-j-" + (t.jenis || "");
      if (t.status && t.status !== "buka") kelas += " dm-kal-tutup";
      if (g.potongKiri) kelas += " dm-kal-potkiri";
      if (g.potongKanan) kelas += " dm-kal-potkanan";
      return /*#__PURE__*/React.createElement("button", {
        key: String(t.id) + "-" + i + "-" + n,
        type: "button",
        className: kelas,
        style: {
          gridColumn: g.kolMulai + 1 + " / span " + g.rentang,
          gridRow: g.jalur + 1
        },
        title: (t.jenis ? t.jenis + " · " : "") + t.judul + "\n" + rentang(t.tanggal_mulai, t.tanggal_selesai) + "\n" + (t.lokasi || "") + "\nKlik untuk mengubah kelas ini.",
        onClick: function () {
          onPilih(t);
        }
      }, g.potongKiri ? "‹ " : "", t.judul);
    })));
  }), dalamBulan.length ? /*#__PURE__*/React.createElement("div", {
    className: "dm-kal-kaki"
  }, /*#__PURE__*/React.createElement("b", null, dalamBulan.length, " kelas pada ", KAL_BULAN[kursor.bulan], " ", kursor.tahun), jenisTampil.map(function (j) {
    return /*#__PURE__*/React.createElement("span", {
      className: "dm-kal-legenda",
      key: j
    }, /*#__PURE__*/React.createElement("i", {
      className: "dm-kal-titik dm-j-" + j
    }), j);
  }), /*#__PURE__*/React.createElement("span", null, "Batang pudar = kelas berstatus tutup.")) : /*#__PURE__*/React.createElement("p", {
    className: "dm-kal-kosong"
  }, "Belum ada kelas pada bulan ini."));
}

function TabJadwal({
  beriTahu,
  peran
}) {
  const [baris, setBaris] = useState(null);
  const [edit, setEdit] = useState(null);
  const [tampilan, setTampilan] = useState("tabel");
  const kosong = {
    jenis: "ACLS",
    judul: "",
    tanggal_mulai: "",
    tanggal_selesai: "",
    lokasi: "Kantor DEWAMEDIK, Tangerang",
    format: "3 hari daring + 3 hari luring",
    kuota: 30,
    harga: 2500000,
    wa_grup: "",
    status: "buka"
  };
  async function muat() {
    const {
      data,
      error
    } = await SB.from("pelatihan").select("*").order("tanggal_mulai", {
      ascending: false
    });
    if (error) return beriTahu("Gagal memuat: " + error.message);
    setBaris(data || []);
  }
  useEffect(() => {
    muat();
  }, []);
  async function simpan() {
    if (!edit.judul.trim() || !edit.tanggal_mulai) return beriTahu("Judul dan tanggal mulai wajib diisi.");
    const isi = {
      jenis: edit.jenis,
      judul: edit.judul,
      tanggal_mulai: edit.tanggal_mulai,
      tanggal_selesai: edit.tanggal_selesai || null,
      lokasi: edit.lokasi,
      format: edit.format,
      kuota: Number(edit.kuota),
      harga: Number(edit.harga),
      wa_grup: (edit.wa_grup || "").trim() || null,
      status: edit.status
    };
    const {
      error
    } = edit.id ? await SB.from("pelatihan").update(isi).eq("id", edit.id) : await SB.from("pelatihan").insert(isi);
    if (error) return beriTahu("Gagal menyimpan: " + error.message);
    setEdit(null);
    beriTahu("Tersimpan.");
    muat();
  }
  async function hapus(t) {
    if (!window.confirm(`Hapus ${t.judul}?`)) return;
    const {
      error
    } = await SB.from("pelatihan").delete().eq("id", t.id);
    if (error) return beriTahu("Kelas ini sudah punya pendaftar. Ubah statusnya jadi Tutup saja.");
    beriTahu("Terhapus.");
    muat();
  }
  if (!baris) return /*#__PURE__*/React.createElement("p", {
    className: "dm-load"
  }, "Memuat jadwal…");
  return /*#__PURE__*/React.createElement("section", {
    className: "dm-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dm-toolbar"
  }, /*#__PURE__*/React.createElement("h3", null, "Jadwal pelatihan"), /*#__PURE__*/React.createElement("button", {
    className: "dm-btn",
    onClick: () => setEdit(kosong)
  }, "Buka kelas baru"), /*#__PURE__*/React.createElement("button", {
    className: "dm-btn-ghost",
    type: "button",
    onClick: () => setTampilan(tampilan === "kalender" ? "tabel" : "kalender")
  }, tampilan === "kalender" ? "Tampilan tabel" : "Tampilan kalender"), peran === "diklat" ? null : /*#__PURE__*/React.createElement("button", {
    className: "dm-btn-ghost",
    type: "button",
    onClick: () => window.dmLanggananKalender && window.dmLanggananKalender()
  }, "Subscribe kalender")), /*#__PURE__*/React.createElement("p", {
    className: "dm-hint",
    style: {
      marginBottom: 12
    }
  }, "Kelas yang tanggal selesainya sudah lewat otomatis hilang dari halaman peserta. Pakai Duplikat untuk membuka batch berikutnya tanpa mengetik ulang."), tampilan === "kalender" ? /*#__PURE__*/React.createElement(KalenderJadwal, {
    baris: baris,
    onPilih: t => setEdit(t)
  }) : /*#__PURE__*/React.createElement("div", {
    className: "dm-tabel-bungkus"
  }, /*#__PURE__*/React.createElement("table", {
    className: "dm-tabel"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Kelas"), /*#__PURE__*/React.createElement("th", null, "Jadwal"), /*#__PURE__*/React.createElement("th", null, "Harga"), /*#__PURE__*/React.createElement("th", null, "Kuota"), /*#__PURE__*/React.createElement("th", null, "Status"), /*#__PURE__*/React.createElement("th", null))), /*#__PURE__*/React.createElement("tbody", null, baris.map(t => /*#__PURE__*/React.createElement("tr", {
    key: t.id
  }, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
    className: "dm-jenis dm-j-" + t.jenis
  }, t.jenis), /*#__PURE__*/React.createElement("b", null, " ", t.judul), /*#__PURE__*/React.createElement("p", {
    className: "dm-hint"
  }, t.lokasi, " · ", t.format)), /*#__PURE__*/React.createElement("td", null, rentang(t.tanggal_mulai, t.tanggal_selesai)), /*#__PURE__*/React.createElement("td", {
    className: "dm-mono"
  }, rp(t.harga)), /*#__PURE__*/React.createElement("td", {
    className: "dm-mono"
  }, t.kuota), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Badge, {
    status: t.tanggal_selesai && t.tanggal_selesai < hariIni() ? "selesai" : t.status
  })), /*#__PURE__*/React.createElement("td", {
    className: "dm-aksi"
  }, /*#__PURE__*/React.createElement("button", {
    className: "dm-btn-ghost",
    onClick: () => setEdit(t)
  }, "Ubah"), /*#__PURE__*/React.createElement("button", {
    className: "dm-btn-ghost",
    onClick: () => setEdit({
      ...t,
      id: undefined,
      judul: t.judul + " (salinan)",
      tanggal_mulai: "",
      tanggal_selesai: "",
      wa_grup: "",
      status: "buka"
    })
  }, "Duplikat"), peran === "diklat" ? null : /*#__PURE__*/React.createElement("button", {
    className: "dm-btn-ghost",
    onClick: () => hapus(t)
  }, "Hapus"))))))), edit ? /*#__PURE__*/React.createElement(Modal, {
    judul: edit.id ? "Ubah kelas" : "Buka kelas baru",
    onTutup: () => setEdit(null)
  }, /*#__PURE__*/React.createElement("div", {
    className: "dm-grid2"
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Jenis pelatihan"
  }, /*#__PURE__*/React.createElement("select", {
    className: "dm-input",
    value: edit.jenis,
    onChange: e => setEdit({
      ...edit,
      jenis: e.target.value
    })
  }, JENIS.map(j => /*#__PURE__*/React.createElement("option", {
    key: j
  }, j)))), /*#__PURE__*/React.createElement(Field, {
    label: "Judul kelas"
  }, /*#__PURE__*/React.createElement("input", {
    className: "dm-input",
    value: edit.judul,
    onChange: e => setEdit({
      ...edit,
      judul: e.target.value
    }),
    placeholder: "ACLS untuk Perawat — Batch IX"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Tanggal mulai"
  }, /*#__PURE__*/React.createElement("input", {
    className: "dm-input",
    type: "date",
    value: edit.tanggal_mulai || "",
    onChange: e => setEdit({
      ...edit,
      tanggal_mulai: e.target.value
    })
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Tanggal selesai"
  }, /*#__PURE__*/React.createElement("input", {
    className: "dm-input",
    type: "date",
    value: edit.tanggal_selesai || "",
    onChange: e => setEdit({
      ...edit,
      tanggal_selesai: e.target.value
    })
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Lokasi"
  }, /*#__PURE__*/React.createElement("input", {
    className: "dm-input",
    value: edit.lokasi,
    onChange: e => setEdit({
      ...edit,
      lokasi: e.target.value
    })
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Link grup WhatsApp kelas",
    hint: "Hanya diberikan kepada peserta yang sudah terverifikasi. Kosongkan bila kelas ini belum punya grup."
  }, /*#__PURE__*/React.createElement("input", {
    className: "dm-input dm-mono",
    type: "url",
    placeholder: "https://chat.whatsapp.com/…",
    value: edit.wa_grup || "",
    onChange: e => setEdit({
      ...edit,
      wa_grup: e.target.value
    })
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Format"
  }, /*#__PURE__*/React.createElement("input", {
    className: "dm-input",
    value: edit.format,
    onChange: e => setEdit({
      ...edit,
      format: e.target.value
    })
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Kuota peserta"
  }, /*#__PURE__*/React.createElement("input", {
    className: "dm-input dm-mono",
    type: "number",
    value: edit.kuota,
    onChange: e => setEdit({
      ...edit,
      kuota: e.target.value
    })
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Biaya pelatihan (Rp)"
  }, /*#__PURE__*/React.createElement("input", {
    className: "dm-input dm-mono",
    type: "number",
    step: "50000",
    value: edit.harga,
    onChange: e => setEdit({
      ...edit,
      harga: e.target.value
    })
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Status pendaftaran"
  }, /*#__PURE__*/React.createElement("select", {
    className: "dm-input",
    value: edit.status,
    onChange: e => setEdit({
      ...edit,
      status: e.target.value
    })
  }, /*#__PURE__*/React.createElement("option", {
    value: "buka"
  }, "Buka"), /*#__PURE__*/React.createElement("option", {
    value: "tutup"
  }, "Tutup"), /*#__PURE__*/React.createElement("option", {
    value: "batal"
  }, "Dibatalkan")))), /*#__PURE__*/React.createElement("div", {
    className: "dm-row dm-row-akhir"
  }, /*#__PURE__*/React.createElement("button", {
    className: "dm-btn",
    onClick: simpan
  }, "Simpan kelas"), /*#__PURE__*/React.createElement("button", {
    className: "dm-btn-line",
    onClick: () => setEdit(null)
  }, "Batal"))) : null);
}
function TabVoucher({
  beriTahu
}) {
  const [baris, setBaris] = useState(null);
  const [edit, setEdit] = useState(null);
  const kosong = {
    kode: "",
    label: "",
    persen: 20,
    jenis_berlaku: ["ACLS"],
    wajib_alumni: true,
    wajib_member: false,
    maks_diskon: 0,
    kuota: 25,
    berlaku_sampai: "",
    aktif: true
  };
  async function muat() {
    const {
      data,
      error
    } = await SB.from("voucher").select("*").order("dibuat", {
      ascending: false
    });
    if (error) return beriTahu("Gagal memuat: " + error.message);
    setBaris(data || []);
  }
  useEffect(() => {
    muat();
  }, []);
  async function simpan() {
    if (!edit.kode.trim()) return beriTahu("Kode member wajib diisi.");
    const isi = {
      kode: edit.kode.trim().toUpperCase(),
      label: edit.label,
      persen: Number(edit.persen),
      jenis_berlaku: edit.jenis_berlaku,
      wajib_alumni: edit.wajib_alumni,
      wajib_member: edit.wajib_member,
      maks_diskon: Number(edit.maks_diskon),
      kuota: Number(edit.kuota),
      berlaku_sampai: edit.berlaku_sampai || null,
      aktif: edit.aktif
    };
    const {
      error
    } = edit.id ? await SB.from("voucher").update(isi).eq("id", edit.id) : await SB.from("voucher").insert(isi);
    if (error) return beriTahu("Gagal menyimpan: " + error.message);
    setEdit(null);
    beriTahu("Tersimpan.");
    muat();
  }
  function toggleJenis(j) {
    const ada = edit.jenis_berlaku.includes(j);
    setEdit({
      ...edit,
      jenis_berlaku: ada ? edit.jenis_berlaku.filter(x => x !== j) : [...edit.jenis_berlaku, j]
    });
  }
  async function hapus(v) {
    let terpakai = 0;
    try {
      const {
        count
      } = await SB.from("pendaftaran").select("id", {
        count: "exact",
        head: true
      }).eq("voucher_kode", v.kode);
      terpakai = Number(count) || 0;
    } catch (e) {}
    const peringatan = terpakai > 0 ? `Kode ${v.kode} sudah dipakai ${terpakai} pendaftar. Data pendaftar tidak ikut terhapus, tapi kodenya tidak bisa dipakai lagi.\n\nTetap hapus?` : `Hapus kode member ${v.kode}?`;
    if (!window.confirm(peringatan)) return;
    const {
      data: sisa,
      error
    } = await SB.from("voucher").delete().eq("id", v.id).select("id");
    if (error) return beriTahu("Gagal menghapus: " + error.message + " — nonaktifkan kode member ini saja lewat Ubah.");
    if (!sisa || !sisa.length) return beriTahu("Kode member tidak terhapus — izin pengurus belum mencakup hapus kode member. Nonaktifkan saja lewat Ubah.");
    beriTahu("Kode member terhapus.");
    muat();
  }
  if (!baris) return /*#__PURE__*/React.createElement("p", {
    className: "dm-load"
  }, "Memuat kode member…");
  return /*#__PURE__*/React.createElement("section", {
    className: "dm-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dm-toolbar"
  }, /*#__PURE__*/React.createElement("h3", null, "Kode Member"), /*#__PURE__*/React.createElement("button", {
    className: "dm-btn",
    onClick: () => setEdit(kosong)
  }, "Buat kode member")), /*#__PURE__*/React.createElement("p", {
    className: "dm-hint",
    style: {
      marginBottom: 12
    }
  }, "Kode member bersyarat berkas terpasang otomatis begitu peserta mengunggah berkasnya. Bila ada dua kode yang cocok, peserta mendapat yang potongannya paling besar."), /*#__PURE__*/React.createElement("div", {
    className: "dm-tabel-bungkus"
  }, /*#__PURE__*/React.createElement("table", {
    className: "dm-tabel"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Kode"), /*#__PURE__*/React.createElement("th", null, "Diskon"), /*#__PURE__*/React.createElement("th", null, "Untuk"), /*#__PURE__*/React.createElement("th", null, "Syarat"), /*#__PURE__*/React.createElement("th", null, "Kuota"), /*#__PURE__*/React.createElement("th", null, "Status"), /*#__PURE__*/React.createElement("th", null))), /*#__PURE__*/React.createElement("tbody", null, baris.map(v => /*#__PURE__*/React.createElement("tr", {
    key: v.id
  }, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("b", {
    className: "dm-mono"
  }, v.kode), /*#__PURE__*/React.createElement("p", {
    className: "dm-hint"
  }, v.label)), /*#__PURE__*/React.createElement("td", {
    className: "dm-mono"
  }, v.persen, "%", Number(v.maks_diskon) > 0 ? ` · maks ${rp(v.maks_diskon)}` : ""), /*#__PURE__*/React.createElement("td", null, (v.jenis_berlaku || []).join(", ")), /*#__PURE__*/React.createElement("td", {
    className: "dm-hint"
  }, [v.wajib_alumni ? "Sertifikat BTCLS" : null, v.wajib_member ? "Kartu anggota" : null].filter(Boolean).join(" + ") || "Tanpa syarat"), /*#__PURE__*/React.createElement("td", {
    className: "dm-mono"
  }, v.kuota > 0 ? v.kuota : "∞"), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Badge, {
    status: v.aktif ? "buka" : "tutup"
  })), /*#__PURE__*/React.createElement("td", {
    className: "dm-aksi"
  }, /*#__PURE__*/React.createElement("button", {
    className: "dm-btn-ghost",
    onClick: () => setEdit({
      ...v,
      berlaku_sampai: v.berlaku_sampai || ""
    })
  }, "Ubah"), /*#__PURE__*/React.createElement("button", {
    className: "dm-btn-ghost",
    onClick: () => hapus(v)
  }, "Hapus"))))))), edit ? /*#__PURE__*/React.createElement(Modal, {
    judul: edit.id ? "Ubah kode member" : "Buat kode member",
    onTutup: () => setEdit(null)
  }, /*#__PURE__*/React.createElement("div", {
    className: "dm-grid2"
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Kode member",
    hint: "Tetap dibuat walau peserta tidak perlu mengetiknya."
  }, /*#__PURE__*/React.createElement("input", {
    className: "dm-input dm-mono",
    value: edit.kode,
    onChange: e => setEdit({
      ...edit,
      kode: e.target.value.toUpperCase()
    })
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Keterangan internal"
  }, /*#__PURE__*/React.createElement("input", {
    className: "dm-input",
    value: edit.label || "",
    onChange: e => setEdit({
      ...edit,
      label: e.target.value
    })
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Besar diskon (%)"
  }, /*#__PURE__*/React.createElement("input", {
    className: "dm-input dm-mono",
    type: "number",
    min: "1",
    max: "100",
    value: edit.persen,
    onChange: e => setEdit({
      ...edit,
      persen: e.target.value
    })
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Batas potongan (Rp)",
    hint: "Isi 0 bila tanpa batas."
  }, /*#__PURE__*/React.createElement("input", {
    className: "dm-input dm-mono",
    type: "number",
    step: "50000",
    value: edit.maks_diskon,
    onChange: e => setEdit({
      ...edit,
      maks_diskon: e.target.value
    })
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Kuota pemakaian",
    hint: "Isi 0 bila tak terbatas."
  }, /*#__PURE__*/React.createElement("input", {
    className: "dm-input dm-mono",
    type: "number",
    value: edit.kuota,
    onChange: e => setEdit({
      ...edit,
      kuota: e.target.value
    })
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Berlaku sampai"
  }, /*#__PURE__*/React.createElement("input", {
    className: "dm-input",
    type: "date",
    value: edit.berlaku_sampai || "",
    onChange: e => setEdit({
      ...edit,
      berlaku_sampai: e.target.value
    })
  }))), /*#__PURE__*/React.createElement(Field, {
    label: "Berlaku untuk jenis pelatihan"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dm-chips"
  }, JENIS.map(j => /*#__PURE__*/React.createElement("button", {
    key: j,
    className: edit.jenis_berlaku.includes(j) ? "dm-chip dm-chip-on" : "dm-chip",
    onClick: () => toggleJenis(j)
  }, j)))), /*#__PURE__*/React.createElement("div", {
    className: "dm-cek-list"
  }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: edit.wajib_alumni,
    onChange: e => setEdit({
      ...edit,
      wajib_alumni: e.target.checked
    })
  }), "Wajib unggah sertifikat BTCLS Dewa Medik Nusantara"), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: edit.wajib_member,
    onChange: e => setEdit({
      ...edit,
      wajib_member: e.target.checked
    })
  }), "Wajib unggah kartu anggota"), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: edit.aktif,
    onChange: e => setEdit({
      ...edit,
      aktif: e.target.checked
    })
  }), "Kode member aktif")), /*#__PURE__*/React.createElement("div", {
    className: "dm-row dm-row-akhir"
  }, /*#__PURE__*/React.createElement("button", {
    className: "dm-btn",
    onClick: simpan
  }, "Simpan kode member"), /*#__PURE__*/React.createElement("button", {
    className: "dm-btn-line",
    onClick: () => setEdit(null)
  }, "Batal"))) : null);
}
async function unggahFotoPublik(file, awalan) {
  if (!file.type.startsWith("image/")) throw new Error("Berkas harus berupa gambar JPG, PNG, atau WebP.");
  const b = await siapkanBerkas(file);
  const nama = `${awalan}/${acakId()}.jpg`;
  const {
    error
  } = await SB.storage.from("publik").upload(nama, b.blob, {
    contentType: "image/jpeg",
    upsert: false
  });
  if (error) throw new Error("Foto gagal diunggah: " + error.message);
  return nama;
}
function UnggahFoto({
  nilai,
  awalan,
  onGanti
}) {
  const ref = useRef(null);
  const [sibuk, setSibuk] = useState(false);
  const [err, setErr] = useState("");
  const src = urlFoto(nilai);
  async function pilih(e) {
    const f = e.target.files && e.target.files[0];
    e.target.value = "";
    if (!f) return;
    setErr("");
    setSibuk(true);
    try {
      onGanti(await unggahFotoPublik(f, awalan));
    } catch (ex) {
      setErr(ex.message);
    }
    setSibuk(false);
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "dm-foto-atur"
  }, src ? /*#__PURE__*/React.createElement("img", {
    className: "dm-foto-pratinjau",
    src: src,
    alt: ""
  }) : /*#__PURE__*/React.createElement("span", {
    className: "dm-foto-kosong"
  }, "Tanpa foto"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    className: "dm-btn-line",
    onClick: () => ref.current && ref.current.click(),
    disabled: sibuk
  }, sibuk ? "Mengunggah…" : src ? "Ganti foto" : "Unggah foto"), src ? /*#__PURE__*/React.createElement("button", {
    className: "dm-btn-ghost",
    onClick: () => onGanti(null)
  }, "Hapus foto") : null, err ? /*#__PURE__*/React.createElement("p", {
    className: "dm-err"
  }, err) : null), /*#__PURE__*/React.createElement("input", {
    ref: ref,
    type: "file",
    accept: "image/*",
    onChange: pilih,
    style: {
      display: "none"
    }
  }));
}
function LembarInvoice({
  inv
}) {
  const total = (inv.rincian || []).reduce((a, b) => a + (Number(b.biaya) || 0), 0);
  const totalPeserta = (inv.rincian || []).reduce((a, b) => a + (Number(b.peserta) || 0), 0);
  const rentangKegiatan = inv.tanggal_mulai && inv.tanggal_selesai ? `${new Date(inv.tanggal_mulai + "T00:00:00").getDate()} s.d. ${tglPanjang(inv.tanggal_selesai)}` : tglPanjang(inv.tanggal_mulai);
  const dibatalkan = inv.status === "batal" || inv.status === "refund";
  const capKata = inv.status === "refund" ? "REFUND" : "DIBATALKAN";
  return /*#__PURE__*/React.createElement("div", {
    className: "dm-invoice" + (dibatalkan ? " dm-inv-batal" : ""),
    id: "lembar-invoice"
  }, dibatalkan ? /*#__PURE__*/React.createElement("div", {
    className: "dm-inv-cap"
  }, capKata) : null, /*#__PURE__*/React.createElement("header", {
    className: "dm-inv-kop"
  }, /*#__PURE__*/React.createElement("img", {
    src: LOGO_DMN,
    alt: "",
    className: "dm-inv-logo"
  }), /*#__PURE__*/React.createElement("div", {
    className: "dm-inv-kop-teks"
  }, /*#__PURE__*/React.createElement("h1", null, KOP.nama), /*#__PURE__*/React.createElement("p", null, KOP.alamat1), /*#__PURE__*/React.createElement("p", null, KOP.alamat2), /*#__PURE__*/React.createElement("p", null, "website: ", KOP.situs, " Email : ", KOP.email)), /*#__PURE__*/React.createElement("div", {
    className: "dm-inv-akre"
  }, /*#__PURE__*/React.createElement("b", null, KOP.akreditasi1), /*#__PURE__*/React.createElement("b", null, KOP.akreditasi2), /*#__PURE__*/React.createElement("b", null, KOP.akreditasi3))), /*#__PURE__*/React.createElement("div", {
    className: "dm-inv-garis"
  }), /*#__PURE__*/React.createElement("h2", {
    className: "dm-inv-judul"
  }, "INVOICE / FAKTUR TAGIHAN"), /*#__PURE__*/React.createElement("p", {
    className: "dm-inv-subjudul"
  }, inv.perihal), /*#__PURE__*/React.createElement("table", {
    className: "dm-inv-meta"
  }, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "dm-inv-label"
  }, "Nomor"), /*#__PURE__*/React.createElement("td", {
    className: "dm-inv-titik"
  }, ":"), /*#__PURE__*/React.createElement("td", null, inv.nomor), /*#__PURE__*/React.createElement("td", {
    className: "dm-inv-kota"
  }, "Tangerang, ", tglPanjang(inv.tanggal))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "dm-inv-label"
  }, "Lampiran"), /*#__PURE__*/React.createElement("td", {
    className: "dm-inv-titik"
  }, ":"), /*#__PURE__*/React.createElement("td", {
    colSpan: 2
  }, inv.lampiran)), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "dm-inv-label"
  }, /*#__PURE__*/React.createElement("b", null, "Perihal")), /*#__PURE__*/React.createElement("td", {
    className: "dm-inv-titik"
  }, ":"), /*#__PURE__*/React.createElement("td", {
    colSpan: 2
  }, /*#__PURE__*/React.createElement("b", null, inv.perihal))))), /*#__PURE__*/React.createElement("p", {
    className: "dm-inv-kepada"
  }, "Kepada Yth,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("b", null, inv.kepada_jabatan), /*#__PURE__*/React.createElement("br", null), inv.kepada_alamat), /*#__PURE__*/React.createElement("p", null, "Dengan hormat,"), /*#__PURE__*/React.createElement("p", {
    className: "dm-inv-paragraf"
  }, "Sehubungan dengan telah terselenggaranya kegiatan ", inv.kegiatan, " yang diselenggarakan oleh Dewamedik Nusantara", inv.mitra ? ` bekerja sama dengan ${inv.mitra}` : "", rentangKegiatan ? ` pada tanggal ${rentangKegiatan}` : "", ", dengan ini kami mengajukan penagihan pembayaran atas biaya penyelenggaraan kegiatan dimaksud dengan rincian sebagai berikut:"), /*#__PURE__*/React.createElement("p", {
    className: "dm-inv-paragraf"
  }, "Rincian biaya penagihan adalah sebagai berikut:"), /*#__PURE__*/React.createElement("table", {
    className: "dm-inv-tabel"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      width: "8%"
    }
  }, "No"), /*#__PURE__*/React.createElement("th", null, "Uraian"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: "20%"
    }
  }, "Jumlah Peserta"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: "24%"
    }
  }, "Biaya"))), /*#__PURE__*/React.createElement("tbody", null, (inv.rincian || []).map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, /*#__PURE__*/React.createElement("td", {
    className: "dm-inv-tengah"
  }, i + 1), /*#__PURE__*/React.createElement("td", null, r.uraian), /*#__PURE__*/React.createElement("td", {
    className: "dm-inv-tengah"
  }, r.peserta ? `${r.peserta} orang` : "—"), /*#__PURE__*/React.createElement("td", {
    className: "dm-inv-tengah"
  }, rp(r.biaya)))), /*#__PURE__*/React.createElement("tr", {
    className: "dm-inv-total"
  }, /*#__PURE__*/React.createElement("td", {
    colSpan: 2
  }, /*#__PURE__*/React.createElement("b", null, "Total Peserta / Total Tagihan")), /*#__PURE__*/React.createElement("td", {
    className: "dm-inv-tengah"
  }, /*#__PURE__*/React.createElement("b", null, totalPeserta, " orang")), /*#__PURE__*/React.createElement("td", {
    className: "dm-inv-tengah"
  }, /*#__PURE__*/React.createElement("b", null, rp(total)))))), /*#__PURE__*/React.createElement("p", {
    className: "dm-inv-terbilang"
  }, /*#__PURE__*/React.createElement("b", null, "Terbilang:"), " ", /*#__PURE__*/React.createElement("i", null, terbilang(total))), dibatalkan ? /*#__PURE__*/React.createElement("div", {
    className: "dm-inv-alasan"
  }, /*#__PURE__*/React.createElement("b", null, inv.status === "refund"
    ? "INVOICE INI DIREFUND \u2014 dana telah dikembalikan"
    : "INVOICE INI DIBATALKAN \u2014 tidak berlaku sebagai tagihan"), /*#__PURE__*/React.createElement("span", null, inv.keterangan || "\u2014")) : null, /*#__PURE__*/React.createElement("p", {
    className: "dm-inv-paragraf"
  }, "Sehubungan dengan hal tersebut, kami mohon kesediaan Bapak/Ibu untuk dapat melakukan pembayaran selambat-lambatnya ", inv.hari_tempo || 7, " (", terbilang(inv.hari_tempo || 7).replace(" rupiah", "").toLowerCase(), ") hari kerja terhitung sejak kegiatan pelatihan selesai dilaksanakan", inv.jatuh_tempo ? `, yaitu paling lambat tanggal ` : "", inv.jatuh_tempo ? /*#__PURE__*/React.createElement("b", null, tglPanjang(inv.jatuh_tempo)) : null, ", melalui transfer ke rekening berikut:"), /*#__PURE__*/React.createElement("table", {
    className: "dm-inv-bank"
  }, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "dm-inv-label"
  }, "Bank"), /*#__PURE__*/React.createElement("td", {
    className: "dm-inv-titik"
  }, ":"), /*#__PURE__*/React.createElement("td", null, KOP.bank)), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "dm-inv-label"
  }, "No. Rekening"), /*#__PURE__*/React.createElement("td", {
    className: "dm-inv-titik"
  }, ":"), /*#__PURE__*/React.createElement("td", null, KOP.rekening)), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "dm-inv-label"
  }, "Atas Nama"), /*#__PURE__*/React.createElement("td", {
    className: "dm-inv-titik"
  }, ":"), /*#__PURE__*/React.createElement("td", null, KOP.atasNama)), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "dm-inv-label"
  }, "NPWP"), /*#__PURE__*/React.createElement("td", {
    className: "dm-inv-titik"
  }, ":"), /*#__PURE__*/React.createElement("td", null, KOP.npwp)))), /*#__PURE__*/React.createElement("p", {
    className: "dm-inv-paragraf"
  }, /*#__PURE__*/React.createElement("b", null, "Ketentuan: "), "Biaya pelatihan yang telah dibayarkan tidak dapat dikembalikan (non-refundable), kecuali terjadi keadaan kahar (force majeure) yang menyebabkan pelatihan tidak dapat diselenggarakan, atau panitia melakukan perubahan tanggal pelaksanaan."), /*#__PURE__*/React.createElement("p", {
    className: "dm-inv-paragraf"
  }, inv.catatan_akhir || "Sebagai bahan kelengkapan administrasi, bersama surat ini kami lampirkan invoice, daftar hadir peserta, dan dokumentasi kegiatan.", " ", "Demikian surat penagihan ini kami sampaikan. Atas perhatian dan kerja sama Bapak/Ibu, kami ucapkan terima kasih."), /*#__PURE__*/React.createElement("div", {
    className: "dm-inv-ttd"
  }, /*#__PURE__*/React.createElement("img", {
    src: TTD_INVOICE,
    alt: "Hormat kami, Dewamedik Nusantara — Dheanisa Rahma, Finance"
  })));
}
function TabInvoice({
  beriTahu
}) {
  const [baris, setBaris] = useState(null);
  const [edit, setEdit] = useState(null);
  const [pratinjau, setPratinjau] = useState(null);
  const [sibukPdf, setSibukPdf] = useState(false);
  const kosong = {
    nomor: "",
    tanggal: hariIni(),
    perihal: "Penagihan Pembayaran Kegiatan Pelatihan",
    kegiatan: "",
    mitra: "",
    kepada_jabatan: "",
    kepada_alamat: "di Tempat",
    tanggal_mulai: "",
    tanggal_selesai: "",
    lampiran: "1 (satu) berkas",
    jatuh_tempo: "",
    hari_tempo: 7,
    catatan_akhir: "",
    status: "draf",
    keterangan: "",
    rincian: [{
      uraian: "",
      peserta: "",
      biaya: ""
    }]
  };
  async function muat() {
    const {
      data,
      error
    } = await SB.from("invoice").select("*").order("tanggal", {
      ascending: false
    });
    if (error) return beriTahu("Gagal memuat: " + error.message);
    setBaris(data || []);
  }
  useEffect(() => {
    muat();
  }, []);
  async function baru() {
    const {
      data
    } = await SB.rpc("nomor_invoice_berikut");
    setEdit({
      ...kosong,
      nomor: data || ""
    });
  }
  async function simpan() {
    if (!edit.nomor.trim()) return beriTahu("Nomor invoice wajib diisi.");
    if (!edit.kepada_jabatan.trim()) return beriTahu("Tujuan penagihan wajib diisi.");
    if (!edit.kegiatan.trim()) return beriTahu("Nama kegiatan wajib diisi.");
    const rincian = (edit.rincian || []).filter(r => r.uraian && r.uraian.trim()).map(r => ({
      uraian: r.uraian.trim(),
      peserta: Number(r.peserta) || 0,
      biaya: Number(r.biaya) || 0
    }));
    if (!rincian.length) return beriTahu("Isi minimal satu baris rincian.");
    if ((edit.status === "batal" || edit.status === "refund") && !(edit.keterangan || "").trim())
      return beriTahu("Alasan pembatalan/refund wajib diisi.");
    const isi = {
      nomor: edit.nomor.trim(),
      tanggal: edit.tanggal,
      perihal: edit.perihal,
      kegiatan: edit.kegiatan.trim(),
      mitra: edit.mitra || null,
      kepada_jabatan: edit.kepada_jabatan.trim(),
      kepada_alamat: edit.kepada_alamat,
      tanggal_mulai: edit.tanggal_mulai || null,
      tanggal_selesai: edit.tanggal_selesai || null,
      lampiran: edit.lampiran,
      jatuh_tempo: edit.jatuh_tempo || null,
      hari_tempo: Number(edit.hari_tempo) || 7,
      catatan_akhir: edit.catatan_akhir || null,
      status: edit.status,
      keterangan: (edit.status === "batal" || edit.status === "refund")
        ? (edit.keterangan || "").trim() || null : null,
      rincian,
      dibarui: new Date().toISOString()
    };
    const {
      error
    } = edit.id ? await SB.from("invoice").update(isi).eq("id", edit.id) : await SB.from("invoice").insert(isi);
    if (error) return beriTahu("Gagal menyimpan: " + error.message);
    setEdit(null);
    beriTahu("Invoice tersimpan.");
    muat();
  }
  async function hapus(v) {
    if (!window.confirm(`Hapus invoice ${v.nomor}?`)) return;
    const {
      error
    } = await SB.from("invoice").delete().eq("id", v.id);
    if (error) return beriTahu("Gagal menghapus: " + error.message);
    beriTahu("Terhapus.");
    muat();
  }
  function ubahRincian(i, kunci, nilai) {
    const r = (edit.rincian || []).slice();
    r[i] = {
      ...r[i],
      [kunci]: nilai
    };
    setEdit({
      ...edit,
      rincian: r
    });
  }
  function tambahBaris() {
    setEdit({
      ...edit,
      rincian: [...(edit.rincian || []), {
        uraian: "",
        peserta: "",
        biaya: ""
      }]
    });
  }
  function hapusBaris(i) {
    setEdit({
      ...edit,
      rincian: (edit.rincian || []).filter((_, k) => k !== i)
    });
  }
  const totalEdit = edit ? (edit.rincian || []).reduce((a, b) => a + (Number(b.biaya) || 0), 0) : 0;
  if (!baris) return /*#__PURE__*/React.createElement("p", {
    className: "dm-load"
  }, "Memuat invoice…");
  return /*#__PURE__*/React.createElement("section", {
    className: "dm-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dm-toolbar"
  }, /*#__PURE__*/React.createElement("h3", null, "Invoice / Faktur Tagihan"), /*#__PURE__*/React.createElement("button", {
    className: "dm-btn",
    onClick: baru
  }, "Buat invoice")), /*#__PURE__*/React.createElement("p", {
    className: "dm-hint",
    style: {
      marginBottom: 12
    }
  }, "Kop surat, nomor rekening, NPWP, nama finance, cap, dan tanda tangan sudah tetap dan tidak dapat diubah dari sini. Yang Anda isi hanya bagian yang berbeda tiap penagihan."), baris.length === 0 ? /*#__PURE__*/React.createElement("p", {
    className: "dm-kosong"
  }, "Belum ada invoice.") : /*#__PURE__*/React.createElement("div", {
    className: "dm-tabel-bungkus"
  }, /*#__PURE__*/React.createElement("table", {
    className: "dm-tabel"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Nomor"), /*#__PURE__*/React.createElement("th", null, "Kepada"), /*#__PURE__*/React.createElement("th", null, "Kegiatan"), /*#__PURE__*/React.createElement("th", null, "Total"), /*#__PURE__*/React.createElement("th", null, "Status"), /*#__PURE__*/React.createElement("th", null))), /*#__PURE__*/React.createElement("tbody", null, baris.map(v => {
    const total = (v.rincian || []).reduce((a, b) => a + (Number(b.biaya) || 0), 0);
    return /*#__PURE__*/React.createElement("tr", {
      key: v.id
    }, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("b", {
      className: "dm-mono"
    }, v.nomor), /*#__PURE__*/React.createElement("p", {
      className: "dm-hint"
    }, tglPanjang(v.tanggal))), /*#__PURE__*/React.createElement("td", null, v.kepada_jabatan), /*#__PURE__*/React.createElement("td", null, v.kegiatan), /*#__PURE__*/React.createElement("td", {
      className: "dm-mono"
    }, rp(total)), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Badge, {
      status: v.status === "lunas" ? "terverifikasi"
        : (v.status === "batal" || v.status === "refund") ? "ditolak" : "menunggu"
    })), /*#__PURE__*/React.createElement("td", {
      className: "dm-aksi"
    }, /*#__PURE__*/React.createElement("button", {
      className: "dm-btn-ghost",
      onClick: () => setPratinjau(v)
    }, "Cetak"), /*#__PURE__*/React.createElement("button", {
      className: "dm-btn-ghost",
      onClick: () => setEdit({
        ...v,
        tanggal_mulai: v.tanggal_mulai || "",
        tanggal_selesai: v.tanggal_selesai || "",
        jatuh_tempo: v.jatuh_tempo || "",
        rincian: v.rincian && v.rincian.length ? v.rincian : [{
          uraian: "",
          peserta: "",
          biaya: ""
        }]
      })
    }, "Ubah"), /*#__PURE__*/React.createElement("button", {
      className: "dm-btn-ghost",
      onClick: () => hapus(v)
    }, "Hapus")));
  })))), edit ? /*#__PURE__*/React.createElement(Modal, {
    judul: edit.id ? "Ubah invoice" : "Buat invoice",
    onTutup: () => setEdit(null),
    lebar: 760
  }, /*#__PURE__*/React.createElement("div", {
    className: "dm-grid2"
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Nomor invoice",
    hint: "Terisi otomatis, boleh disesuaikan."
  }, /*#__PURE__*/React.createElement("input", {
    className: "dm-input dm-mono",
    value: edit.nomor,
    onChange: e => setEdit({
      ...edit,
      nomor: e.target.value
    })
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Tanggal surat"
  }, /*#__PURE__*/React.createElement("input", {
    className: "dm-input",
    type: "date",
    value: edit.tanggal,
    onChange: e => setEdit({
      ...edit,
      tanggal: e.target.value
    })
  }))), /*#__PURE__*/React.createElement(Field, {
    label: "Perihal"
  }, /*#__PURE__*/React.createElement("input", {
    className: "dm-input",
    value: edit.perihal,
    onChange: e => setEdit({
      ...edit,
      perihal: e.target.value
    }),
    placeholder: "Penagihan Pembayaran Kegiatan Pelatihan EKG"
  })), /*#__PURE__*/React.createElement("div", {
    className: "dm-grid2"
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Ditujukan kepada",
    hint: "Jabatan dan instansi lengkap."
  }, /*#__PURE__*/React.createElement("input", {
    className: "dm-input",
    value: edit.kepada_jabatan,
    onChange: e => setEdit({
      ...edit,
      kepada_jabatan: e.target.value
    }),
    placeholder: "Direktur RSUD ..."
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Alamat tujuan"
  }, /*#__PURE__*/React.createElement("input", {
    className: "dm-input",
    value: edit.kepada_alamat,
    onChange: e => setEdit({
      ...edit,
      kepada_alamat: e.target.value
    })
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Nama kegiatan"
  }, /*#__PURE__*/React.createElement("input", {
    className: "dm-input",
    value: edit.kegiatan,
    onChange: e => setEdit({
      ...edit,
      kegiatan: e.target.value
    }),
    placeholder: "Pelatihan EKG (Elektrokardiografi)"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Bekerja sama dengan",
    hint: "Kosongkan bila diselenggarakan sendiri."
  }, /*#__PURE__*/React.createElement("input", {
    className: "dm-input",
    value: edit.mitra || "",
    onChange: e => setEdit({
      ...edit,
      mitra: e.target.value
    }),
    placeholder: "RSUD ..."
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Tanggal kegiatan mulai"
  }, /*#__PURE__*/React.createElement("input", {
    className: "dm-input",
    type: "date",
    value: edit.tanggal_mulai,
    onChange: e => setEdit({
      ...edit,
      tanggal_mulai: e.target.value
    })
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Tanggal kegiatan selesai"
  }, /*#__PURE__*/React.createElement("input", {
    className: "dm-input",
    type: "date",
    value: edit.tanggal_selesai,
    onChange: e => setEdit({
      ...edit,
      tanggal_selesai: e.target.value
    })
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Batas pembayaran (hari kerja)"
  }, /*#__PURE__*/React.createElement("input", {
    className: "dm-input dm-mono",
    type: "number",
    value: edit.hari_tempo,
    onChange: e => setEdit({
      ...edit,
      hari_tempo: e.target.value
    })
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Jatuh tempo"
  }, /*#__PURE__*/React.createElement("input", {
    className: "dm-input",
    type: "date",
    value: edit.jatuh_tempo,
    onChange: e => setEdit({
      ...edit,
      jatuh_tempo: e.target.value
    })
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Lampiran"
  }, /*#__PURE__*/React.createElement("input", {
    className: "dm-input",
    value: edit.lampiran,
    onChange: e => setEdit({
      ...edit,
      lampiran: e.target.value
    })
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Status"
  }, /*#__PURE__*/React.createElement("select", {
    className: "dm-input",
    value: edit.status,
    onChange: e => setEdit({
      ...edit,
      status: e.target.value
    })
  }, /*#__PURE__*/React.createElement("option", {
    value: "draf"
  }, "Draf"), /*#__PURE__*/React.createElement("option", {
    value: "terkirim"
  }, "Terkirim"), /*#__PURE__*/React.createElement("option", {
    value: "lunas"
  }, "Lunas"), /*#__PURE__*/React.createElement("option", {
    value: "batal"
  }, "Batal \u2014 tagihan dihapuskan"), /*#__PURE__*/React.createElement("option", {
    value: "refund"
  }, "Refund \u2014 dana dikembalikan"))), edit.status === "batal" || edit.status === "refund" ? /*#__PURE__*/React.createElement(Field, {
    label: edit.status === "refund" ? "Alasan refund" : "Alasan pembatalan",
    hint: "Wajib diisi. Kalimat ini ikut tercetak pada lembar invoice."
  }, /*#__PURE__*/React.createElement("textarea", {
    className: "dm-textarea dm-textarea-besar",
    rows: 2,
    value: edit.keterangan || "",
    onChange: e => setEdit({
      ...edit,
      keterangan: e.target.value
    }),
    placeholder: edit.status === "refund"
      ? "mis. Peserta mengundurkan diri, dana dikembalikan penuh melalui transfer BRI pada 20 Oktober 2026."
      : "mis. Kegiatan dibatalkan oleh instansi pemohon, tidak ada tagihan yang harus dibayarkan."
  })) : null), /*#__PURE__*/React.createElement("p", {
    className: "dm-kelompok-judul",
    style: {
      marginTop: 18
    }
  }, "Rincian tagihan"), (edit.rincian || []).map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "dm-inv-baris-isi"
  }, /*#__PURE__*/React.createElement("input", {
    className: "dm-input",
    value: r.uraian,
    onChange: e => ubahRincian(i, "uraian", e.target.value),
    placeholder: "Paket Pelatihan EKG - Batch 1 (13-15 Juli 2026)"
  }), /*#__PURE__*/React.createElement("input", {
    className: "dm-input dm-mono",
    type: "number",
    value: r.peserta,
    onChange: e => ubahRincian(i, "peserta", e.target.value),
    placeholder: "30"
  }), /*#__PURE__*/React.createElement("input", {
    className: "dm-input dm-mono",
    type: "number",
    step: "100000",
    value: r.biaya,
    onChange: e => ubahRincian(i, "biaya", e.target.value),
    placeholder: "51000000"
  }), /*#__PURE__*/React.createElement("button", {
    className: "dm-btn-ghost",
    onClick: () => hapusBaris(i),
    disabled: (edit.rincian || []).length <= 1
  }, "Hapus"))), /*#__PURE__*/React.createElement("div", {
    className: "dm-row",
    style: {
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "dm-btn-line",
    onClick: tambahBaris
  }, "Tambah baris"), /*#__PURE__*/React.createElement("b", {
    className: "dm-mono"
  }, "Total ", rp(totalEdit))), /*#__PURE__*/React.createElement(Field, {
    label: "Kalimat penutup",
    hint: "Kosongkan untuk memakai kalimat baku."
  }, /*#__PURE__*/React.createElement("textarea", {
    className: "dm-textarea dm-textarea-besar",
    rows: 2,
    value: edit.catatan_akhir || "",
    onChange: e => setEdit({
      ...edit,
      catatan_akhir: e.target.value
    }),
    placeholder: "Sebagai bahan kelengkapan administrasi, bersama surat ini kami lampirkan invoice, daftar hadir peserta, dan dokumentasi kegiatan."
  })), /*#__PURE__*/React.createElement("div", {
    className: "dm-row dm-row-akhir"
  }, /*#__PURE__*/React.createElement("button", {
    className: "dm-btn",
    onClick: simpan
  }, "Simpan invoice"), /*#__PURE__*/React.createElement("button", {
    className: "dm-btn-line",
    onClick: () => setEdit(null)
  }, "Batal"))) : null, pratinjau ? /*#__PURE__*/React.createElement("div", {
    className: "dm-inv-layar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dm-inv-alat"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, pratinjau.nomor), /*#__PURE__*/React.createElement("p", {
    className: "dm-hint"
  }, "Berkas PDF ukuran A4 langsung tersimpan ke perangkat Anda \u2014 tanpa jendela cetak.")), /*#__PURE__*/React.createElement("div", {
    className: "dm-row"
  }, /*#__PURE__*/React.createElement("button", {
    className: "dm-btn",
    disabled: sibukPdf,
    onClick: async () => {
      setSibukPdf(true);
      try {
        const n = await unduhPdfInvoice(pratinjau);
        beriTahu("PDF tersimpan: " + n);
      } catch (e) {
        beriTahu("Gagal membuat PDF: " + e.message);
      }
      setSibukPdf(false);
    }
  }, sibukPdf ? "Menyiapkan\u2026" : "Unduh PDF"), /*#__PURE__*/React.createElement("button", {
    className: "dm-btn-line",
    onClick: () => setPratinjau(null)
  }, "Tutup"))), /*#__PURE__*/React.createElement("div", {
    className: "dm-inv-kertas"
  }, /*#__PURE__*/React.createElement(LembarInvoice, {
    inv: pratinjau
  }))) : null);
}
/* ---------- penghasil PDF ---------- */

const PT = 2.834645669;              /* 1 mm dalam satuan PDF */
const LEBAR_MM = 210, TINGGI_MM = 297;

/* PDF memakai WinAnsi. Huruf Latin biasa aman; beberapa tanda baca
   cerdas perlu dipetakan supaya tidak jadi tanda tanya. */
const PETA_ANSI = { "—": "\x97", "–": "\x96", "‘": "\x91",
  "’": "\x92", "“": "\x93", "”": "\x94", "…": "\x85",
  "·": "\xB7", " ": " " };

function ansi(t) {
  return String(t == null ? "" : t).replace(/[—–‘’“”…· ]/g,
    c => PETA_ANSI[c] || "?");
}
function kutip(t) {
  return ansi(t).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

/* Lebar teks diukur pakai kanvas dengan font yang setara, supaya
   rata tengah dan rata kanan benar-benar pas. */
let _kanvas = null;
function lebarTeks(teks, ukuran, tebal, miring, mono) {
  if (!_kanvas) _kanvas = document.createElement("canvas").getContext("2d");
  _kanvas.font = (miring ? "italic " : "") + (tebal ? "bold " : "") + ukuran +
    "px " + (mono ? "'Courier New',monospace" : "'Times New Roman',Times,serif");
  return _kanvas.measureText(String(teks == null ? "" : teks)).width;
}

function Kertas() {
  const isi = [];
  let kataCap = null;       /* stempel miring yang dibubuhkan ke semua halaman */
  const halamanIsi = [];    /* aliran isi tiap halaman yang sudah ditutup */
  const gambar = [];        /* {nama, data(Uint8Array), w, h} */
  const api = {
    /* Menutup halaman berjalan dan memulai halaman kosong berikutnya. */
    halamanBaru() {
      halamanIsi.push(isi.join("\n"));
      isi.length = 0;
    },
    /* y dihitung dari atas, dalam milimeter — lebih mudah dibaca
       daripada sistem koordinat PDF yang terbalik. */
    teks(x, y, t, o) {
      o = o || {};
      const uk = o.ukuran || 10;
      const font = o.mono ? "/F4" : o.tebal ? "/F2" : o.miring ? "/F3" : "/F1";
      let px = x;
      const lb = lebarTeks(t, uk, o.tebal, o.miring, o.mono) / PT;
      if (o.rata === "tengah") px = x - lb / 2;
      if (o.rata === "kanan") px = x - lb;
      const w = o.warna || [0, 0, 0];
      isi.push("BT " + w.join(" ") + " rg " + font + " " + uk + " Tf " +
        (o.renggang ? o.renggang + " Tc " : "0 Tc ") +
        (px * PT).toFixed(2) + " " + ((TINGGI_MM - y) * PT).toFixed(2) + " Td (" +
        kutip(t) + ") Tj ET");
      return lb;
    },
    garis(x1, y1, x2, y2, tebal, warna) {
      const w = warna || [0, 0, 0];
      isi.push(w.join(" ") + " RG " + ((tebal || 0.3) * PT).toFixed(2) + " w " +
        (x1 * PT).toFixed(2) + " " + ((TINGGI_MM - y1) * PT).toFixed(2) + " m " +
        (x2 * PT).toFixed(2) + " " + ((TINGGI_MM - y2) * PT).toFixed(2) + " l S");
    },
    kotak(x, y, w, h, garisW, warnaGaris, warnaIsi) {
      const g = warnaGaris || [0, 0, 0];
      let ops = "";
      if (warnaIsi) ops += warnaIsi.join(" ") + " rg ";
      ops += g.join(" ") + " RG " + ((garisW || 0.4) * PT).toFixed(2) + " w " +
        (x * PT).toFixed(2) + " " + ((TINGGI_MM - y - h) * PT).toFixed(2) + " " +
        (w * PT).toFixed(2) + " " + (h * PT).toFixed(2) + " re " +
        (warnaIsi ? "B" : "S");
      isi.push(ops);
    },
    gambar(nama, data, lebarAsli, tinggiAsli, x, y, w) {
      const h = w * tinggiAsli / lebarAsli;
      gambar.push({ nama: nama, data: data, w: lebarAsli, h: tinggiAsli });
      isi.push("q " + (w * PT).toFixed(2) + " 0 0 " + (h * PT).toFixed(2) + " " +
        (x * PT).toFixed(2) + " " + ((TINGGI_MM - y - h) * PT).toFixed(2) +
        " cm /" + nama + " Do Q");
      return h;
    },
    /* Stempel miring, dibubuhkan ke SEMUA halaman saat berkas disusun.
       Digambar paling bawah dan tembus pandang agar teks tetap terbaca. */
    cap(kata) { kataCap = kata; },
    /* Memecah kalimat panjang jadi beberapa baris selebar w mm. */
    paragraf(x, y, w, t, o) {
      o = o || {};
      const uk = o.ukuran || 10, jarak = o.jarak || uk * 0.42;
      const kata = String(t || "").split(/\s+/);
      let baris = "", ny = y;
      for (let i = 0; i < kata.length; i++) {
        const coba = baris ? baris + " " + kata[i] : kata[i];
        if (lebarTeks(coba, uk, o.tebal, o.miring, o.mono) / PT > w && baris) {
          api.teks(x, ny, baris, o); ny += jarak; baris = kata[i];
        } else baris = coba;
      }
      if (baris) { api.teks(x, ny, baris, o); ny += jarak; }
      return ny;
    },
    async bangun() {
      if (isi.length) { halamanIsi.push(isi.join("\n")); isi.length = 0; }
      if (!halamanIsi.length) halamanIsi.push("");
      /* Susun perintah gambar stempel sekali, lalu taruh di awal tiap
         halaman supaya isi surat tercetak di atasnya. */
      let opsCap = "";
      if (kataCap) {
        const uk = 46, sudut = 16 * Math.PI / 180;
        const c = Math.cos(sudut), sn = Math.sin(sudut);
        const lb = (lebarTeks(kataCap, uk, true, false, false) + 2.6 * (kataCap.length - 1)) / PT;
        const bw = lb + 28, bh = 26;
        const baris = [];
        baris.push("q /GSCap gs 0.784 0.118 0.290 RG 0.784 0.118 0.290 rg 2.6 w");
        baris.push(c.toFixed(5) + " " + sn.toFixed(5) + " " + (-sn).toFixed(5) + " " +
          c.toFixed(5) + " " + (LEBAR_MM / 2 * PT).toFixed(2) + " " +
          ((TINGGI_MM - 150) * PT).toFixed(2) + " cm");
        baris.push((-bw / 2 * PT).toFixed(2) + " " + (-bh / 2 * PT).toFixed(2) + " " +
          (bw * PT).toFixed(2) + " " + (bh * PT).toFixed(2) + " re S");
        baris.push("BT /F2 " + uk + " Tf 2.6 Tc " + (-lb / 2 * PT).toFixed(2) + " " +
          (-uk * 0.34).toFixed(2) + " Td (" + kutip(kataCap) + ") Tj ET");
        baris.push("Q");
        opsCap = baris.join("\n") + "\n";
        for (let i = 0; i < halamanIsi.length; i++) halamanIsi[i] = opsCap + halamanIsi[i];
      }
      /* Isi PDF ditulis byte demi byte (latin-1), bukan UTF-8.
         Kalau dipaksa UTF-8, tanda seperti em dash berubah jadi dua
         byte dan terbaca "Ã¢â‚¬â€" di pembaca PDF. */
      const enc = { encode: t => {
        const n = t.length, b = new Uint8Array(n);
        for (let i = 0; i < n; i++) b[i] = t.charCodeAt(i) & 0xFF;
        return b;
      } };
      const bagian = [];
      const objek = [];
      let panjang = 0;
      function tulis(t) {
        const b = typeof t === "string" ? enc.encode(t) : t;
        bagian.push(b); panjang += b.length; return b.length;
      }
      function objekBaru(teks, aliran) {
        objek.push(panjang);
        tulis((objek.length) + " 0 obj\n" + teks);
        if (aliran) { tulis("\nstream\n"); tulis(aliran); tulis("\nendstream"); }
        tulis("\nendobj\n");
      }
      tulis("%PDF-1.4\n%\xE2\xE3\xCF\xD3\n");

      /* Penomoran objek: 1 katalog, 2 induk-halaman, lalu tiap halaman
         memakai dua objek (halaman + isi), disusul 4 font dan gambar. */
      const P = halamanIsi.length;
      const noFont = 3 + 2 * P;
      const noCap = noFont + 4;            /* keadaan grafis untuk stempel */
      const noGambar = noCap + 1;
      let sumber = "";
      gambar.forEach((g, i) => {
        sumber += "/" + g.nama + " " + (noGambar + i) + " 0 R ";
      });
      const anak = [];
      for (let p = 0; p < P; p++) anak.push((3 + 2 * p) + " 0 R");

      objekBaru("<< /Type /Catalog /Pages 2 0 R >>");
      objekBaru("<< /Type /Pages /Kids [" + anak.join(" ") + "] /Count " + P + " >>");
      for (let p = 0; p < P; p++) {
        const aliran = enc.encode(halamanIsi[p]);
        objekBaru("<< /Type /Page /Parent 2 0 R /MediaBox [0 0 " +
          (LEBAR_MM * PT).toFixed(2) + " " + (TINGGI_MM * PT).toFixed(2) +
          "] /Resources << /Font << /F1 " + noFont + " 0 R /F2 " + (noFont + 1) +
          " 0 R /F3 " + (noFont + 2) + " 0 R /F4 " + (noFont + 3) + " 0 R >>" +
          (sumber ? " /XObject << " + sumber + ">>" : "") +
          " /ExtGState << /GSCap " + noCap + " 0 R >>" +
          " >> /Contents " + (4 + 2 * p) + " 0 R >>");
        objekBaru("<< /Length " + aliran.length + " >>", aliran);
      }
      objekBaru("<< /Type /Font /Subtype /Type1 /BaseFont /Times-Roman /Encoding /WinAnsiEncoding >>");
      objekBaru("<< /Type /Font /Subtype /Type1 /BaseFont /Times-Bold /Encoding /WinAnsiEncoding >>");
      objekBaru("<< /Type /Font /Subtype /Type1 /BaseFont /Times-Italic /Encoding /WinAnsiEncoding >>");
      objekBaru("<< /Type /Font /Subtype /Type1 /BaseFont /Courier /Encoding /WinAnsiEncoding >>");
      objekBaru("<< /Type /ExtGState /ca 0.22 /CA 0.38 >>");
      gambar.forEach(g => {
        objekBaru("<< /Type /XObject /Subtype /Image /Width " + g.w + " /Height " + g.h +
          " /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length " +
          g.data.length + " >>", g.data);
      });

      const awalXref = panjang;
      let xref = "xref\n0 " + (objek.length + 1) + "\n0000000000 65535 f \n";
      objek.forEach(p => { xref += String(p).padStart(10, "0") + " 00000 n \n"; });
      tulis(xref);
      tulis("trailer\n<< /Size " + (objek.length + 1) + " /Root 1 0 R >>\nstartxref\n" +
        awalXref + "\n%%EOF\n");

      const total = new Uint8Array(panjang);
      let ofs = 0;
      bagian.forEach(b => { total.set(b, ofs); ofs += b.length; });
      return new Blob([total], { type: "application/pdf" });
    }
  };
  return api;
}

async function ambilJpeg(alamat) {
  const r = await fetch(alamat, { cache: "force-cache" });
  if (!r.ok) throw new Error("Gambar " + alamat + " tidak terbaca.");
  return new Uint8Array(await r.arrayBuffer());
}

/* Menyusun lembar kuitansi sebagai PDF A4 dan langsung mengunduhnya. */
async function unduhPdfKuitansi(kw) {
  const k = Kertas();
  const jumlah = Number(kw.jumlah) || 0;
  const NAVY = [0.086, 0.208, 0.494];
  const ABU = [0.35, 0.35, 0.35];

  let logo = null, ttd = null;
  try { logo = await ambilJpeg(LOGO_PDF); } catch (e) {}
  try { ttd = await ambilJpeg(TTD_INVOICE); } catch (e) {}

  /* --- kop --- */
  if (logo) k.gambar("Im1", logo, 268, 300, 18, 14, 19);
  k.teks(107, 21, KOP.nama, { ukuran: 15, tebal: true, rata: "tengah" });
  k.teks(107, 26, KOP.alamat1, { ukuran: 8, rata: "tengah" });
  k.teks(107, 30, KOP.alamat2, { ukuran: 8, rata: "tengah" });
  k.teks(107, 34, "website: " + KOP.situs + "   Email: " + KOP.email, { ukuran: 8, rata: "tengah" });
  k.teks(192, 19, KOP.akreditasi1, { ukuran: 6.5, tebal: true, rata: "kanan", warna: NAVY });
  k.teks(192, 22.5, KOP.akreditasi2, { ukuran: 6.5, tebal: true, rata: "kanan", warna: NAVY });
  k.teks(192, 26, KOP.akreditasi3, { ukuran: 6.5, tebal: true, rata: "kanan", warna: NAVY });
  k.garis(18, 39, 192, 39, 1.1);

  /* --- judul --- */
  k.teks(107, 50, "KUITANSI", { ukuran: 17, tebal: true, rata: "tengah", renggang: 3.2, warna: NAVY });
  k.teks(107, 56, "No. " + kw.nomor, { ukuran: 10.5, tebal: true, rata: "tengah" });

  /* --- isi --- */
  const baris = [
    ["Sudah terima dari", kw.diterima_dari, { tebal: true }],
    ["Uang sejumlah", terbilang(jumlah), { miring: true, garisBawah: true }],
    ["Untuk pembayaran", kw.untuk_pembayaran, {}],
  ];
  if (kw.cara_bayar) baris.push(["Cara pembayaran", kw.cara_bayar, {}]);
  if (kw.pendaftaran_nomor) baris.push(["No. registrasi", kw.pendaftaran_nomor, { mono: true, ukuran: 9.5 }]);

  let y = 70;
  baris.forEach(b => {
    k.teks(20, y, b[0], { ukuran: 10.5, warna: ABU });
    k.teks(63, y, ":", { ukuran: 10.5 });
    const o = Object.assign({ ukuran: 10.5 }, b[2]);
    const akhir = k.paragraf(67, y, 125, b[1], o);
    if (b[2].garisBawah) k.garis(67, y + 1.6, 192, y + 1.6, 0.2, [0.6, 0.6, 0.6]);
    y = Math.max(y + 9, akhir + 4.5);
  });

  /* --- nominal + tanda tangan --- */
  const yKotak = Math.max(y + 8, 118);
  k.kotak(20, yKotak, 62, 15, 0.8, NAVY, [0.968, 0.976, 1]);
  k.teks(26, yKotak + 9.8, "Rp", { ukuran: 11.5, tebal: true, warna: NAVY });
  k.teks(78, yKotak + 10.2, new Intl.NumberFormat("id-ID").format(jumlah) + ",-",
    { ukuran: 16, tebal: true, rata: "kanan", warna: NAVY });

  k.teks(192, yKotak - 8, "Tangerang, " + tglPanjang(kw.tanggal), { ukuran: 10.5, rata: "kanan" });
  if (ttd) k.gambar("Im2", ttd, 336, 192, 138, yKotak - 5, 54);

  let yBawah = yKotak + 22;
  if (kw.catatan) {
    yBawah = k.paragraf(20, yBawah, 172, kw.catatan, { ukuran: 9, miring: true, warna: ABU }) + 4;
  }

  /* --- kaki --- */
  const yKaki = Math.max(yBawah + 6, 165);
  k.garis(18, yKaki, 192, yKaki, 0.2, [0.78, 0.78, 0.78]);
  k.paragraf(18, yKaki + 5, 174,
    "Kuitansi ini sah sebagai bukti penerimaan pembayaran dan diterbitkan oleh " + KOP.nama +
    ". Biaya pelatihan yang telah dibayarkan tidak dapat dikembalikan (non-refundable), " +
    "kecuali terjadi keadaan kahar atau perubahan jadwal pelaksanaan oleh panitia.",
    { ukuran: 8, warna: ABU, jarak: 3.8 });

  const blob = await k.bangun();
  const nama = "Kuitansi " + String(kw.nomor || "").replace(/[\/\\:*?"<>|]/g, "-") + ".pdf";
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = nama;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1500);
  return nama;
}

/* Memecah kalimat jadi larik baris selebar w mm (tanpa menggambar). */
function pecahBaris(t, w, o) {
  o = o || {};
  const uk = o.ukuran || 10;
  const kata = String(t == null ? "" : t).split(/\s+/).filter(Boolean);
  const hasil = [];
  let baris = "";
  for (let i = 0; i < kata.length; i++) {
    const coba = baris ? baris + " " + kata[i] : kata[i];
    if (lebarTeks(coba, uk, o.tebal, o.miring, o.mono) / PT > w && baris) {
      hasil.push(baris); baris = kata[i];
    } else baris = coba;
  }
  if (baris) hasil.push(baris);
  return hasil.length ? hasil : [""];
}

/* Menyusun lembar invoice sebagai PDF A4 dan langsung mengunduhnya.
   Isi yang panjang otomatis dipindah ke halaman berikutnya. */
async function unduhPdfInvoice(inv) {
  const k = Kertas();
  const NAVY = [0.086, 0.208, 0.494];
  const ABU = [0.35, 0.35, 0.35];
  const KIRI = 18, KANAN = 192, LEBAR = KANAN - KIRI;
  const BATAS = 272;                 /* batas bawah isi, dalam mm */

  let logo = null, ttd = null;
  try { logo = await ambilJpeg(LOGO_PDF); } catch (e) {}
  try { ttd = await ambilJpeg(TTD_INVOICE); } catch (e) {}

  const dibatalkan = inv.status === "batal" || inv.status === "refund";
  const capKata = inv.status === "refund" ? "REFUND" : "DIBATALKAN";

  let y = 0;
  function kop() {
    if (logo) k.gambar("Im1", logo, 268, 300, KIRI, 14, 19);
    k.teks(107, 21, KOP.nama, { ukuran: 15, tebal: true, rata: "tengah" });
    k.teks(107, 26, KOP.alamat1, { ukuran: 8, rata: "tengah" });
    k.teks(107, 30, KOP.alamat2, { ukuran: 8, rata: "tengah" });
    k.teks(107, 34, "website: " + KOP.situs + "   Email: " + KOP.email, { ukuran: 8, rata: "tengah" });
    k.teks(KANAN, 19, KOP.akreditasi1, { ukuran: 6.5, tebal: true, rata: "kanan", warna: NAVY });
    k.teks(KANAN, 22.5, KOP.akreditasi2, { ukuran: 6.5, tebal: true, rata: "kanan", warna: NAVY });
    k.teks(KANAN, 26, KOP.akreditasi3, { ukuran: 6.5, tebal: true, rata: "kanan", warna: NAVY });
    k.garis(KIRI, 39, KANAN, 39, 1.1);
    y = 46.5;
  }
  /* Pindah halaman bila ruang tersisa kurang dari yang dibutuhkan. */
  function ruang(perlu) {
    if (y + perlu <= BATAS) return;
    k.halamanBaru();
    y = 22;
    k.teks(KANAN, 16, "Invoice " + (inv.nomor || "") + " \u2014 hal. 2", { ukuran: 8, rata: "kanan", warna: ABU });
    k.garis(KIRI, 18, KANAN, 18, 0.2, [0.78, 0.78, 0.78]);
  }
  function alinea(t, o) {
    o = Object.assign({ ukuran: 10, jarak: 4.5 }, o || {});
    const baris = pecahBaris(t, LEBAR, o);
    ruang(baris.length * o.jarak + 2);
    baris.forEach(b => { k.teks(KIRI, y, b, o); y += o.jarak; });
    y += 1.3;
  }

  kop();

  /* --- judul --- */
  k.teks(107, y, "INVOICE / FAKTUR TAGIHAN", { ukuran: 14, tebal: true, rata: "tengah", renggang: 1.6, warna: NAVY });
  y += 5.4;
  k.teks(107, y, inv.perihal || "", { ukuran: 9.5, miring: true, rata: "tengah", warna: ABU });
  y += 9;

  /* --- keterangan surat --- */
  k.teks(KANAN, y, "Tangerang, " + tglPanjang(inv.tanggal), { ukuran: 10, rata: "kanan" });
  const meta = [["Nomor", inv.nomor || "-"], ["Lampiran", inv.lampiran || "-"], ["Perihal", inv.perihal || "-"]];
  meta.forEach((m, i) => {
    k.teks(KIRI, y, m[0], { ukuran: 10, tebal: i === 2, warna: i === 2 ? [0, 0, 0] : ABU });
    k.teks(KIRI + 24, y, ":", { ukuran: 10 });
    y = Math.max(y + 5, k.paragraf(KIRI + 28, y, LEBAR - 28 - (i === 0 ? 46 : 0), m[1], { ukuran: 10, tebal: i === 2, jarak: 4.4 }) + 0.6);
  });
  y += 3;

  /* --- tujuan --- */
  k.teks(KIRI, y, "Kepada Yth,", { ukuran: 10 }); y += 4.8;
  y = k.paragraf(KIRI, y, 110, inv.kepada_jabatan || "-", { ukuran: 10, tebal: true, jarak: 4.6 });
  y = k.paragraf(KIRI, y, 110, inv.kepada_alamat || "di Tempat", { ukuran: 10, jarak: 4.6 }) + 3;

  alinea("Dengan hormat,");

  const rentang = inv.tanggal_mulai && inv.tanggal_selesai
    ? new Date(inv.tanggal_mulai + "T00:00:00").getDate() + " s.d. " + tglPanjang(inv.tanggal_selesai)
    : (inv.tanggal_mulai ? tglPanjang(inv.tanggal_mulai) : "");
  alinea("Sehubungan dengan telah terselenggaranya kegiatan " + (inv.kegiatan || "-") +
    " yang diselenggarakan oleh Dewamedik Nusantara" +
    (inv.mitra ? " bekerja sama dengan " + inv.mitra : "") +
    (rentang ? " pada tanggal " + rentang : "") +
    ", dengan ini kami mengajukan penagihan pembayaran atas biaya penyelenggaraan kegiatan dimaksud dengan rincian sebagai berikut:");
  alinea("Rincian biaya penagihan adalah sebagai berikut:");

  /* --- tabel rincian --- */
  const KOL = [KIRI, KIRI + 12, KIRI + 96, KIRI + 128, KANAN];   /* No | Uraian | Peserta | Biaya */
  function barisTabel(sel, o) {
    o = o || {};
    const uk = o.ukuran || 9.5;
    const pecahan = pecahBaris(sel[1], KOL[2] - KOL[1] - 6, { ukuran: uk, tebal: o.tebal });
    const tinggi = Math.max(7.4, pecahan.length * 4.4 + 3);
    ruang(tinggi + 4);
    if (o.arsir) k.kotak(KOL[0], y - 4.6, LEBAR, tinggi, 0.35, [0.55, 0.6, 0.66], o.arsir);
    else k.kotak(KOL[0], y - 4.6, LEBAR, tinggi, 0.35, [0.55, 0.6, 0.66]);
    for (let i = 1; i < KOL.length - 1; i++) k.garis(KOL[i], y - 4.6, KOL[i], y - 4.6 + tinggi, 0.35, [0.55, 0.6, 0.66]);
    k.teks((KOL[0] + KOL[1]) / 2, y, sel[0], { ukuran: uk, rata: "tengah", tebal: o.tebal });
    pecahan.forEach((b, i) => k.teks(KOL[1] + 3, y + i * 4.4, b, { ukuran: uk, tebal: o.tebal }));
    k.teks((KOL[2] + KOL[3]) / 2, y, sel[2], { ukuran: uk, rata: "tengah", tebal: o.tebal });
    k.teks(KOL[4] - 3, y, sel[3], { ukuran: uk, rata: "kanan", tebal: o.tebal });
    y += tinggi;
  }
  y += 4.6;
  barisTabel(["No", "Uraian", "Jumlah Peserta", "Biaya"], { tebal: true, arsir: [0.93, 0.95, 0.97] });
  const rincian = inv.rincian || [];
  let total = 0, totalPeserta = 0;
  rincian.forEach((r, i) => {
    total += Number(r.biaya) || 0;
    totalPeserta += Number(r.peserta) || 0;
    barisTabel([String(i + 1), r.uraian || "-", r.peserta ? r.peserta + " orang" : "\u2014", rp(r.biaya)]);
  });
  barisTabel(["", "Total Peserta / Total Tagihan", totalPeserta + " orang", rp(total)],
    { tebal: true, arsir: [0.93, 0.95, 0.97] });
  y += 2;

  ruang(9);
  const lb = k.teks(KIRI, y, "Terbilang: ", { ukuran: 10, tebal: true });
  k.paragraf(KIRI + lb, y, LEBAR - lb, terbilang(total), { ukuran: 10, miring: true, jarak: 4.4 });
  y += 8;

  if (dibatalkan) {
    const judulKotak = inv.status === "refund"
      ? "INVOICE INI DIREFUND \u2014 dana telah dikembalikan"
      : "INVOICE INI DIBATALKAN \u2014 tidak berlaku sebagai tagihan";
    const MERAH = [0.784, 0.118, 0.290];
    const isiKotak = pecahBaris(inv.keterangan || "\u2014", LEBAR - 8, { ukuran: 9.5 });
    const tinggiKotak = 10 + isiKotak.length * 4.4;
    ruang(tinggiKotak + 6);
    k.kotak(KIRI, y - 4.4, LEBAR, tinggiKotak, 0.6, MERAH, [0.992, 0.949, 0.961]);
    k.teks(KIRI + 4, y, judulKotak, { ukuran: 9.5, tebal: true, warna: MERAH });
    y += 5;
    isiKotak.forEach(b => { k.teks(KIRI + 4, y, b, { ukuran: 9.5 }); y += 4.4; });
    y += 6;
  }

  const hari = inv.hari_tempo || 7;
  alinea("Sehubungan dengan hal tersebut, kami mohon kesediaan Bapak/Ibu untuk dapat melakukan pembayaran " +
    "selambat-lambatnya " + hari + " (" + terbilang(hari).replace(" rupiah", "").toLowerCase() + ") hari kerja " +
    "terhitung sejak kegiatan pelatihan selesai dilaksanakan" +
    (inv.jatuh_tempo ? ", yaitu paling lambat tanggal " + tglPanjang(inv.jatuh_tempo) : "") +
    ", melalui transfer ke rekening berikut:");

  /* --- rekening --- */
  const bank = [["Bank", KOP.bank], ["No. Rekening", KOP.rekening], ["Atas Nama", KOP.atasNama], ["NPWP", KOP.npwp]];
  ruang(bank.length * 5 + 6);
  k.kotak(KIRI, y - 4.4, LEBAR, bank.length * 5 + 3.4, 0.35, [0.55, 0.6, 0.66], [0.968, 0.976, 1]);
  bank.forEach(b => {
    k.teks(KIRI + 4, y, b[0], { ukuran: 9.5, warna: ABU });
    k.teks(KIRI + 34, y, ":", { ukuran: 9.5 });
    k.teks(KIRI + 38, y, b[1] || "-", { ukuran: 9.5, tebal: true });
    y += 4.8;
  });
  y += 4;

  alinea("Ketentuan: Biaya pelatihan yang telah dibayarkan tidak dapat dikembalikan (non-refundable), " +
    "kecuali terjadi keadaan kahar (force majeure) yang menyebabkan pelatihan tidak dapat diselenggarakan, " +
    "atau panitia melakukan perubahan tanggal pelaksanaan.", { ukuran: 9.5, jarak: 4.4 });

  alinea((inv.catatan_akhir ||
    "Sebagai bahan kelengkapan administrasi, bersama surat ini kami lampirkan invoice, daftar hadir peserta, dan dokumentasi kegiatan.") +
    " Demikian surat penagihan ini kami sampaikan. Atas perhatian dan kerja sama Bapak/Ibu, kami ucapkan terima kasih.",
    { ukuran: 9.5, jarak: 4.4 });

  /* --- tanda tangan --- */
  if (y + 33 > 287) { k.halamanBaru(); y = 26; }
  y += 2;
  if (ttd) k.gambar("Im2", ttd, 336, 192, KANAN - 52, y, 52);
  else {
    k.teks(KANAN - 52, y + 4, "Hormat kami,", { ukuran: 10 });
    k.teks(KANAN - 52, y + 24, "Dewamedik Nusantara", { ukuran: 10, tebal: true });
  }

  /* Stempel miring digambar paling akhir agar berada di atas teks. */
  if (dibatalkan) k.cap(capKata);

  const blob = await k.bangun();
  const nama = "Invoice " + String(inv.nomor || "").replace(/[\/\\:*?"<>|]/g, "-") + ".pdf";
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = nama;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1500);
  return nama;
}

function LembarKuitansi({ kw }) {
  const jumlah = Number(kw.jumlah) || 0;
  return React.createElement("div", { className: "dm-invoice dm-kuitansi", id: "lembar-invoice" },

    React.createElement("header", { className: "dm-inv-kop" },
      React.createElement("img", { src: LOGO_DMN, alt: "", className: "dm-inv-logo" }),
      React.createElement("div", { className: "dm-inv-kop-teks" },
        React.createElement("h1", null, KOP.nama),
        React.createElement("p", null, KOP.alamat1),
        React.createElement("p", null, KOP.alamat2),
        React.createElement("p", null, "website: ", KOP.situs, " Email : ", KOP.email)),
      React.createElement("div", { className: "dm-inv-akre" },
        React.createElement("b", null, KOP.akreditasi1),
        React.createElement("b", null, KOP.akreditasi2),
        React.createElement("b", null, KOP.akreditasi3))),
    React.createElement("div", { className: "dm-inv-garis" }),

    React.createElement("h2", { className: "dm-inv-judul" }, "KUITANSI"),
    React.createElement("p", { className: "dm-kw-nomor" }, "No. ", kw.nomor),

    React.createElement("table", { className: "dm-kw-isi" },
      React.createElement("tbody", null,
        React.createElement("tr", null,
          React.createElement("td", { className: "dm-kw-label" }, "Sudah terima dari"),
          React.createElement("td", { className: "dm-inv-titik" }, ":"),
          React.createElement("td", null, React.createElement("b", null, kw.diterima_dari))),
        React.createElement("tr", null,
          React.createElement("td", { className: "dm-kw-label" }, "Uang sejumlah"),
          React.createElement("td", { className: "dm-inv-titik" }, ":"),
          React.createElement("td", null,
            React.createElement("i", { className: "dm-kw-terbilang" }, terbilang(jumlah)))),
        React.createElement("tr", null,
          React.createElement("td", { className: "dm-kw-label" }, "Untuk pembayaran"),
          React.createElement("td", { className: "dm-inv-titik" }, ":"),
          React.createElement("td", null, kw.untuk_pembayaran)),
        kw.cara_bayar ? React.createElement("tr", null,
          React.createElement("td", { className: "dm-kw-label" }, "Cara pembayaran"),
          React.createElement("td", { className: "dm-inv-titik" }, ":"),
          React.createElement("td", null, kw.cara_bayar)) : null,
        kw.pendaftaran_nomor ? React.createElement("tr", null,
          React.createElement("td", { className: "dm-kw-label" }, "No. registrasi"),
          React.createElement("td", { className: "dm-inv-titik" }, ":"),
          React.createElement("td", { className: "dm-mono" }, kw.pendaftaran_nomor)) : null)),

    React.createElement("div", { className: "dm-kw-bawah" },
      React.createElement("div", { className: "dm-kw-nominal" },
        React.createElement("span", null, "Rp"),
        React.createElement("b", null, new Intl.NumberFormat("id-ID").format(jumlah), ",-")),
      React.createElement("div", { className: "dm-kw-ttd" },
        React.createElement("p", null, "Tangerang, ", tglPanjang(kw.tanggal)),
        React.createElement("img", {
          src: TTD_INVOICE,
          alt: "Dewamedik Nusantara — Dheanisa Rahma, Finance"
        }))),

    kw.catatan ? React.createElement("p", { className: "dm-kw-catatan" }, kw.catatan) : null,

    React.createElement("p", { className: "dm-kw-kaki" },
      "Kuitansi ini sah sebagai bukti penerimaan pembayaran dan diterbitkan oleh ",
      KOP.nama, ". Biaya pelatihan yang telah dibayarkan tidak dapat dikembalikan ",
      "(non-refundable), kecuali terjadi keadaan kahar atau perubahan jadwal oleh panitia.")
  );
}

function TabKuitansi({ beriTahu }) {
  const [baris, setBaris] = useState(null);
  const [edit, setEdit] = useState(null);
  const [pratinjau, setPratinjau] = useState(null);
  const [ambil, setAmbil] = useState(null);   /* daftar pendaftar untuk diambil */
  const [sibukPdf, setSibukPdf] = useState(false);
  const [cari, setCari] = useState("");

  const kosong = {
    nomor: "",
    tanggal: hariIni(),
    diterima_dari: "",
    untuk_pembayaran: "",
    jumlah: "",
    cara_bayar: "Transfer Bank",
    pendaftaran_nomor: "",
    kegiatan: "",
    catatan: "",
    status: "draf"
  };

  async function muat() {
    const { data, error } = await SB.from("kuitansi").select("*").order("tanggal", { ascending: false });
    if (error) return beriTahu("Gagal memuat: " + error.message);
    setBaris(data || []);
  }
  useEffect(() => { muat(); }, []);

  async function baru() {
    const { data } = await SB.rpc("nomor_kuitansi_berikut");
    setEdit({ ...kosong, nomor: data || "" });
  }

  /* Hanya peserta terverifikasi yang boleh dibuatkan kuitansi —
     kuitansi menyatakan uang sudah diterima, jadi tidak masuk akal
     dibuat untuk pendaftaran yang pembayarannya belum diperiksa. */
  async function bukaAmbil() {
    const { data, error } = await SB
      .from("pendaftaran")
      .select("nomor,nama,instansi,total,jumlah_bayar,sisa_bayar,tipe_bayar,dibuat,pelatihan(judul,tanggal_mulai,tanggal_selesai)")
      .eq("status", "terverifikasi")
      .order("dibuat", { ascending: false })
      .limit(300);
    if (error) return beriTahu("Gagal memuat pendaftar: " + error.message);
    setCari("");
    setAmbil(data || []);
  }

  async function pakaiPendaftar(r) {
    const judul = r.pelatihan ? r.pelatihan.judul : "pelatihan DEWAMEDIK";
    const jadwal = r.pelatihan && r.pelatihan.tanggal_mulai
      ? rentangPanjang(r.pelatihan.tanggal_mulai, r.pelatihan.tanggal_selesai) : "";
    const dibayar = r.jumlah_bayar != null ? Number(r.jumlah_bayar) : Number(r.total) || 0;
    const muka = r.tipe_bayar === "booking" && Number(r.sisa_bayar) > 0;
    let nomor = edit && edit.nomor;
    if (!nomor) {
      const { data } = await SB.rpc("nomor_kuitansi_berikut");
      nomor = data || "";
    }
    setEdit({
      ...kosong,
      ...(edit || {}),
      nomor: nomor,
      diterima_dari: r.nama + (r.instansi ? " — " + r.instansi : ""),
      untuk_pembayaran: (muka ? "Uang muka biaya pelatihan " : "Biaya pelatihan ") + judul +
        (jadwal ? " yang dilaksanakan pada " + jadwal : ""),
      jumlah: dibayar,
      kegiatan: judul,
      pendaftaran_nomor: r.nomor,
      catatan: muka ? "Sisa pelunasan " + rp(r.sisa_bayar) + " dibayarkan sebelum pelatihan dimulai." : ""
    });
    setAmbil(null);
  }

  async function simpan() {
    if (!edit.nomor.trim()) return beriTahu("Nomor kuitansi wajib diisi.");
    if (!edit.diterima_dari.trim()) return beriTahu("Kolom \"Sudah terima dari\" wajib diisi.");
    if (!edit.untuk_pembayaran.trim()) return beriTahu("Kolom \"Untuk pembayaran\" wajib diisi.");
    if (!(Number(edit.jumlah) > 0)) return beriTahu("Jumlah uang harus lebih dari nol.");
    const isi = {
      nomor: edit.nomor.trim(),
      tanggal: edit.tanggal,
      diterima_dari: edit.diterima_dari.trim(),
      untuk_pembayaran: edit.untuk_pembayaran.trim(),
      jumlah: Number(edit.jumlah),
      cara_bayar: (edit.cara_bayar || "").trim() || null,
      pendaftaran_nomor: (edit.pendaftaran_nomor || "").trim() || null,
      kegiatan: (edit.kegiatan || "").trim() || null,
      catatan: (edit.catatan || "").trim() || null,
      status: edit.status,
      dibarui: new Date().toISOString()
    };
    const { error } = edit.id
      ? await SB.from("kuitansi").update(isi).eq("id", edit.id)
      : await SB.from("kuitansi").insert(isi);
    if (error) {
      return beriTahu(/duplicate|unique/i.test(error.message)
        ? "Nomor " + isi.nomor + " sudah dipakai kuitansi lain."
        : "Gagal menyimpan: " + error.message);
    }
    setEdit(null);
    beriTahu("Kuitansi tersimpan.");
    muat();
  }

  async function hapus(v) {
    if (!window.confirm("Hapus kuitansi " + v.nomor + "?")) return;
    const { error } = await SB.from("kuitansi").delete().eq("id", v.id);
    if (error) return beriTahu("Gagal menghapus: " + error.message);
    beriTahu("Terhapus.");
    muat();
  }

  if (!baris) return React.createElement("p", { className: "dm-load" }, "Memuat kuitansi…");

  const tersaring = (ambil || []).filter(r => {
    if (!cari.trim()) return true;
    const k = cari.toLowerCase();
    return (r.nama + " " + r.nomor + " " + (r.instansi || "")).toLowerCase().includes(k);
  });

  return React.createElement("section", { className: "dm-card" },
    React.createElement("div", { className: "dm-toolbar" },
      React.createElement("h3", null, "Kuitansi Penerimaan Pembayaran"),
      React.createElement("button", { className: "dm-btn", onClick: baru }, "Buat kuitansi")),
    React.createElement("p", { className: "dm-hint", style: { marginBottom: 12 } },
      "Bukti bahwa uang sudah diterima — beda dengan invoice yang menagih sebelum bayar. ",
      "Kop, cap, dan tanda tangan sudah tetap. Pakai “Ambil dari pendaftar” agar nama, kelas, ",
      "dan nominalnya terisi sendiri dari data peserta yang sudah terverifikasi."),

    baris.length === 0
      ? React.createElement("p", { className: "dm-kosong" }, "Belum ada kuitansi.")
      : React.createElement("div", { className: "dm-tabel-bungkus" },
          React.createElement("table", { className: "dm-tabel" },
            React.createElement("thead", null,
              React.createElement("tr", null,
                React.createElement("th", null, "Nomor"),
                React.createElement("th", null, "Diterima dari"),
                React.createElement("th", null, "Untuk"),
                React.createElement("th", null, "Jumlah"),
                React.createElement("th", null, "Tanggal"),
                React.createElement("th", null))),
            React.createElement("tbody", null, baris.map(v =>
              React.createElement("tr", { key: v.id },
                React.createElement("td", null,
                  React.createElement("b", { className: "dm-mono" }, v.nomor),
                  v.pendaftaran_nomor
                    ? React.createElement("p", { className: "dm-hint dm-mono" }, v.pendaftaran_nomor)
                    : null),
                React.createElement("td", null, v.diterima_dari),
                React.createElement("td", { className: "dm-hint" }, v.untuk_pembayaran),
                React.createElement("td", { className: "dm-mono" }, rp(v.jumlah)),
                React.createElement("td", { className: "dm-hint" }, tglPanjang(v.tanggal)),
                React.createElement("td", { className: "dm-aksi" },
                  React.createElement("button", {
                    className: "dm-btn-ghost",
                    onClick: () => setPratinjau(v)
                  }, "Cetak"),
                  React.createElement("button", {
                    className: "dm-btn-ghost",
                    onClick: () => setEdit({ ...v, jumlah: Number(v.jumlah) || 0 })
                  }, "Ubah"),
                  React.createElement("button", {
                    className: "dm-btn-ghost",
                    onClick: () => hapus(v)
                  }, "Hapus")))))))
    ,

    /* ---------- kotak isian ---------- */
    edit ? React.createElement(Modal, {
      judul: edit.id ? "Ubah kuitansi" : "Buat kuitansi",
      onTutup: () => setEdit(null)
    },
      React.createElement("div", { className: "dm-row", style: { marginBottom: 14 } },
        React.createElement("button", {
          className: "dm-btn-line",
          type: "button",
          onClick: bukaAmbil
        }, "Ambil dari pendaftar")),

      React.createElement("div", { className: "dm-grid2" },
        React.createElement(Field, { label: "Nomor kuitansi" },
          React.createElement("input", {
            className: "dm-input dm-mono",
            value: edit.nomor,
            onChange: e => setEdit({ ...edit, nomor: e.target.value })
          })),
        React.createElement(Field, { label: "Tanggal" },
          React.createElement("input", {
            className: "dm-input",
            type: "date",
            value: edit.tanggal,
            onChange: e => setEdit({ ...edit, tanggal: e.target.value })
          }))),

      React.createElement(Field, {
        label: "Sudah terima dari",
        hint: "Nama orang atau institusi yang membayar."
      }, React.createElement("input", {
        className: "dm-input",
        value: edit.diterima_dari,
        onChange: e => setEdit({ ...edit, diterima_dari: e.target.value })
      })),

      React.createElement(Field, { label: "Untuk pembayaran" },
        React.createElement("input", {
          className: "dm-input",
          value: edit.untuk_pembayaran,
          placeholder: "Biaya pelatihan BTCLS Angkatan 50",
          onChange: e => setEdit({ ...edit, untuk_pembayaran: e.target.value })
        })),

      React.createElement("div", { className: "dm-grid2" },
        React.createElement(Field, {
          label: "Jumlah uang (Rp)",
          hint: Number(edit.jumlah) > 0 ? "Terbilang: " + terbilang(edit.jumlah) : "Angka saja, tanpa titik."
        }, React.createElement("input", {
          className: "dm-input dm-mono",
          type: "number",
          value: edit.jumlah,
          onChange: e => setEdit({ ...edit, jumlah: e.target.value })
        })),
        React.createElement(Field, { label: "Cara pembayaran" },
          React.createElement("input", {
            className: "dm-input",
            value: edit.cara_bayar || "",
            placeholder: "Transfer Bank",
            onChange: e => setEdit({ ...edit, cara_bayar: e.target.value })
          }))),

      React.createElement("div", { className: "dm-grid2" },
        React.createElement(Field, {
          label: "No. registrasi peserta",
          hint: "Boleh dikosongkan bila bukan dari pendaftaran portal."
        }, React.createElement("input", {
          className: "dm-input dm-mono",
          value: edit.pendaftaran_nomor || "",
          onChange: e => setEdit({ ...edit, pendaftaran_nomor: e.target.value })
        })),
        React.createElement(Field, { label: "Status" },
          React.createElement("select", {
            className: "dm-input",
            value: edit.status,
            onChange: e => setEdit({ ...edit, status: e.target.value })
          },
            React.createElement("option", { value: "draf" }, "Draf"),
            React.createElement("option", { value: "terbit" }, "Terbit")))),

      React.createElement(Field, {
        label: "Catatan tambahan",
        hint: "Tampil di bawah nominal. Boleh dikosongkan."
      }, React.createElement("input", {
        className: "dm-input",
        value: edit.catatan || "",
        onChange: e => setEdit({ ...edit, catatan: e.target.value })
      })),

      React.createElement("div", { className: "dm-row dm-row-akhir" },
        React.createElement("button", { className: "dm-btn", onClick: simpan }, "Simpan kuitansi"),
        React.createElement("button", {
          className: "dm-btn-line",
          onClick: () => setPratinjau({ ...edit, jumlah: Number(edit.jumlah) || 0 })
        }, "Pratinjau"),
        React.createElement("button", {
          className: "dm-btn-line",
          onClick: () => setEdit(null)
        }, "Batal"))
    ) : null,

    /* ---------- kotak ambil dari pendaftar ---------- */
    ambil ? React.createElement(Modal, {
      judul: "Ambil dari pendaftar terverifikasi",
      onTutup: () => setAmbil(null)
    },
      React.createElement("input", {
        className: "dm-input",
        style: { marginBottom: 12 },
        type: "search",
        placeholder: "Cari nama, instansi, atau nomor registrasi…",
        value: cari,
        onChange: e => setCari(e.target.value)
      }),
      tersaring.length === 0
        ? React.createElement("p", { className: "dm-kosong" },
            (ambil.length ? "Tidak ada yang cocok." : "Belum ada pendaftar terverifikasi."))
        : React.createElement("div", { className: "dm-tabel-bungkus", style: { maxHeight: 380, overflowY: "auto" } },
            React.createElement("table", { className: "dm-tabel" },
              React.createElement("tbody", null, tersaring.map(r =>
                React.createElement("tr", { key: r.nomor },
                  React.createElement("td", null,
                    React.createElement("b", null, r.nama),
                    React.createElement("p", { className: "dm-hint" },
                      (r.pelatihan ? r.pelatihan.judul : "—"),
                      r.instansi ? " · " + r.instansi : ""),
                    r.pelatihan && r.pelatihan.tanggal_mulai
                      ? React.createElement("p", { className: "dm-hint" },
                          "Pelaksanaan: " + rentang(r.pelatihan.tanggal_mulai, r.pelatihan.tanggal_selesai))
                      : null),
                  React.createElement("td", { className: "dm-mono" },
                    rp(r.jumlah_bayar != null ? r.jumlah_bayar : r.total),
                    r.tipe_bayar === "booking" && Number(r.sisa_bayar) > 0
                      ? React.createElement("p", { className: "dm-hint" }, "uang muka")
                      : null),
                  React.createElement("td", { className: "dm-aksi" },
                    React.createElement("button", {
                      className: "dm-btn-ghost",
                      onClick: () => pakaiPendaftar(r)
                    }, "Pakai")))))))
    ) : null,

    /* ---------- lembar cetak ---------- */
    pratinjau ? React.createElement("div", { className: "dm-inv-layar" },
      React.createElement("div", { className: "dm-inv-alat" },
        React.createElement("div", null,
          React.createElement("b", null, pratinjau.nomor),
          React.createElement("p", { className: "dm-hint" },
            "Tekan Unduh PDF — berkasnya langsung tersimpan dalam ukuran A4, siap dikirim ke peserta.")),
        React.createElement("div", { className: "dm-row" },
          React.createElement("button", {
            className: "dm-btn",
            disabled: sibukPdf,
            onClick: async () => {
              setSibukPdf(true);
              try {
                const n = await unduhPdfKuitansi(pratinjau);
                beriTahu("PDF tersimpan: " + n);
              } catch (e) {
                beriTahu("Gagal membuat PDF: " + e.message);
              }
              setSibukPdf(false);
            }
          }, sibukPdf ? "Menyiapkan…" : "Unduh PDF"),
          React.createElement("button", { className: "dm-btn-line", onClick: () => setPratinjau(null) }, "Tutup"))),
      React.createElement("div", { className: "dm-inv-kertas" },
        React.createElement(LembarKuitansi, { kw: pratinjau }))) : null
  );
}

function TabFasilitas({
  beriTahu
}) {
  const [baris, setBaris] = useState(null);
  const [edit, setEdit] = useState(null);
  const kosong = {
    nama: "",
    keterangan: "",
    foto: null,
    urutan: 0,
    tampil: true
  };
  async function muat() {
    const {
      data,
      error
    } = await SB.from("fasilitas").select("*").order("urutan");
    if (error) return beriTahu("Gagal memuat: " + error.message);
    setBaris(data || []);
  }
  useEffect(() => {
    muat();
  }, []);
  async function simpan() {
    if (!edit.nama.trim()) return beriTahu("Nama fasilitas wajib diisi.");
    const isi = {
      nama: edit.nama.trim(),
      keterangan: edit.keterangan,
      foto: edit.foto,
      urutan: Number(edit.urutan) || 0,
      tampil: edit.tampil
    };
    const {
      error
    } = edit.id ? await SB.from("fasilitas").update(isi).eq("id", edit.id) : await SB.from("fasilitas").insert(isi);
    if (error) return beriTahu("Gagal menyimpan: " + error.message);
    setEdit(null);
    beriTahu("Tersimpan.");
    muat();
  }
  async function hapus(f) {
    if (!window.confirm(`Hapus ${f.nama}?`)) return;
    const {
      error
    } = await SB.from("fasilitas").delete().eq("id", f.id);
    if (error) return beriTahu("Gagal menghapus: " + error.message);
    beriTahu("Terhapus.");
    muat();
  }
  if (!baris) return /*#__PURE__*/React.createElement("p", {
    className: "dm-load"
  }, "Memuat fasilitas…");
  return /*#__PURE__*/React.createElement("section", {
    className: "dm-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dm-toolbar"
  }, /*#__PURE__*/React.createElement("h3", null, "Galeri kegiatan & praktik"), /*#__PURE__*/React.createElement("button", {
    className: "dm-btn",
    onClick: () => setEdit(kosong)
  }, "Tambah fasilitas")), /*#__PURE__*/React.createElement("p", {
    className: "dm-hint",
    style: {
      marginBottom: 12
    }
  }, "Unggah foto asli kegiatan pelatihan, praktik, dan ruang kelas DEWAMEDIK. Selama daftar ini kosong, bagian galeri tidak tampil di halaman pendaftaran."), baris.length === 0 ? /*#__PURE__*/React.createElement("p", {
    className: "dm-kosong"
  }, "Belum ada fasilitas yang ditambahkan.") : /*#__PURE__*/React.createElement("div", {
    className: "dm-tabel-bungkus"
  }, /*#__PURE__*/React.createElement("table", {
    className: "dm-tabel"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Foto"), /*#__PURE__*/React.createElement("th", null, "Nama"), /*#__PURE__*/React.createElement("th", null, "Urutan"), /*#__PURE__*/React.createElement("th", null, "Tampil"), /*#__PURE__*/React.createElement("th", null))), /*#__PURE__*/React.createElement("tbody", null, baris.map(f => /*#__PURE__*/React.createElement("tr", {
    key: f.id
  }, /*#__PURE__*/React.createElement("td", null, urlFoto(f.foto) ? /*#__PURE__*/React.createElement("img", {
    className: "dm-foto-mini",
    src: urlFoto(f.foto),
    alt: ""
  }) : /*#__PURE__*/React.createElement("span", {
    className: "dm-hint"
  }, "—")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("b", null, f.nama), /*#__PURE__*/React.createElement("p", {
    className: "dm-hint"
  }, f.keterangan)), /*#__PURE__*/React.createElement("td", {
    className: "dm-mono"
  }, f.urutan), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Badge, {
    status: f.tampil ? "buka" : "tutup"
  })), /*#__PURE__*/React.createElement("td", {
    className: "dm-aksi"
  }, /*#__PURE__*/React.createElement("button", {
    className: "dm-btn-ghost",
    onClick: () => setEdit(f)
  }, "Ubah"), /*#__PURE__*/React.createElement("button", {
    className: "dm-btn-ghost",
    onClick: () => hapus(f)
  }, "Hapus"))))))), edit ? /*#__PURE__*/React.createElement(Modal, {
    judul: edit.id ? "Ubah fasilitas" : "Tambah fasilitas",
    onTutup: () => setEdit(null)
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Foto",
    hint: "Foto asli peralatan atau ruang praktik. Maksimal 3 MB."
  }, /*#__PURE__*/React.createElement(UnggahFoto, {
    nilai: edit.foto,
    awalan: "fasilitas",
    onGanti: v => setEdit({
      ...edit,
      foto: v
    })
  })), /*#__PURE__*/React.createElement("div", {
    className: "dm-grid2"
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Nama fasilitas"
  }, /*#__PURE__*/React.createElement("input", {
    className: "dm-input",
    value: edit.nama,
    onChange: e => setEdit({
      ...edit,
      nama: e.target.value
    }),
    placeholder: "Simulasi Defibrilasi ACLS"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Urutan tampil",
    hint: "Angka lebih kecil tampil lebih dulu."
  }, /*#__PURE__*/React.createElement("input", {
    className: "dm-input dm-mono",
    type: "number",
    value: edit.urutan,
    onChange: e => setEdit({
      ...edit,
      urutan: e.target.value
    })
  }))), /*#__PURE__*/React.createElement(Field, {
    label: "Keterangan singkat"
  }, /*#__PURE__*/React.createElement("input", {
    className: "dm-input",
    value: edit.keterangan || "",
    onChange: e => setEdit({
      ...edit,
      keterangan: e.target.value
    }),
    placeholder: "Sesi praktik BTCLS di RS Adhyaksa Banten"
  })), /*#__PURE__*/React.createElement("div", {
    className: "dm-cek-list"
  }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: edit.tampil,
    onChange: e => setEdit({
      ...edit,
      tampil: e.target.checked
    })
  }), "Tampilkan di halaman pendaftaran")), /*#__PURE__*/React.createElement("div", {
    className: "dm-row dm-row-akhir"
  }, /*#__PURE__*/React.createElement("button", {
    className: "dm-btn",
    onClick: simpan
  }, "Simpan fasilitas"), /*#__PURE__*/React.createElement("button", {
    className: "dm-btn-line",
    onClick: () => setEdit(null)
  }, "Batal"))) : null);
}
function TabTestimoni({
  beriTahu
}) {
  const [baris, setBaris] = useState(null);
  const [edit, setEdit] = useState(null);
  const kosong = {
    nama: "",
    asal: "",
    pelatihan: "",
    isi: "",
    bintang: 5,
    sumber: "Google Maps",
    tampil: true,
    urutan: 0,
    foto: null
  };
  async function muat() {
    const {
      data,
      error
    } = await SB.from("testimoni").select("*").order("urutan");
    if (error) return beriTahu("Gagal memuat: " + error.message);
    setBaris(data || []);
  }
  useEffect(() => {
    muat();
  }, []);
  async function simpan() {
    if (!edit.nama.trim() || !edit.isi.trim()) return beriTahu("Nama dan isi testimoni wajib diisi.");
    const isi = {
      nama: edit.nama.trim(),
      asal: edit.asal,
      pelatihan: edit.pelatihan,
      isi: edit.isi.trim(),
      foto: edit.foto,
      bintang: Number(edit.bintang),
      sumber: edit.sumber,
      tampil: edit.tampil,
      urutan: Number(edit.urutan) || 0
    };
    const {
      error
    } = edit.id ? await SB.from("testimoni").update(isi).eq("id", edit.id) : await SB.from("testimoni").insert(isi);
    if (error) return beriTahu("Gagal menyimpan: " + error.message);
    setEdit(null);
    beriTahu("Tersimpan.");
    muat();
  }
  async function hapus(t) {
    if (!window.confirm(`Hapus testimoni dari ${t.nama}?`)) return;
    const {
      error
    } = await SB.from("testimoni").delete().eq("id", t.id);
    if (error) return beriTahu("Gagal menghapus: " + error.message);
    beriTahu("Terhapus.");
    muat();
  }
  if (!baris) return /*#__PURE__*/React.createElement("p", {
    className: "dm-load"
  }, "Memuat testimoni…");
  return /*#__PURE__*/React.createElement("section", {
    className: "dm-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dm-toolbar"
  }, /*#__PURE__*/React.createElement("h3", null, "Testimoni alumni"), /*#__PURE__*/React.createElement("button", {
    className: "dm-btn",
    onClick: () => setEdit(kosong)
  }, "Tambah testimoni")), /*#__PURE__*/React.createElement("p", {
    className: "dm-hint",
    style: {
      marginBottom: 12
    }
  }, "Salin ulasan asli dari Google Maps atau testimoni tertulis peserta. Enam testimoni dengan urutan terkecil yang akan tampil di halaman pendaftaran. Tulis apa adanya sesuai ulasan aslinya."), baris.length === 0 ? /*#__PURE__*/React.createElement("p", {
    className: "dm-kosong"
  }, "Belum ada testimoni.") : /*#__PURE__*/React.createElement("div", {
    className: "dm-tabel-bungkus"
  }, /*#__PURE__*/React.createElement("table", {
    className: "dm-tabel"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Nama"), /*#__PURE__*/React.createElement("th", null, "Isi"), /*#__PURE__*/React.createElement("th", null, "Bintang"), /*#__PURE__*/React.createElement("th", null, "Urutan"), /*#__PURE__*/React.createElement("th", null, "Tampil"), /*#__PURE__*/React.createElement("th", null))), /*#__PURE__*/React.createElement("tbody", null, baris.map(t => /*#__PURE__*/React.createElement("tr", {
    key: t.id
  }, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("b", null, t.nama), /*#__PURE__*/React.createElement("p", {
    className: "dm-hint"
  }, [t.asal, t.pelatihan].filter(Boolean).join(" · "))), /*#__PURE__*/React.createElement("td", null, t.isi.length > 90 ? t.isi.slice(0, 90) + "…" : t.isi), /*#__PURE__*/React.createElement("td", {
    className: "dm-mono"
  }, t.bintang), /*#__PURE__*/React.createElement("td", {
    className: "dm-mono"
  }, t.urutan), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Badge, {
    status: t.tampil ? "buka" : "tutup"
  })), /*#__PURE__*/React.createElement("td", {
    className: "dm-aksi"
  }, /*#__PURE__*/React.createElement("button", {
    className: "dm-btn-ghost",
    onClick: () => setEdit(t)
  }, "Ubah"), /*#__PURE__*/React.createElement("button", {
    className: "dm-btn-ghost",
    onClick: () => hapus(t)
  }, "Hapus"))))))), edit ? /*#__PURE__*/React.createElement(Modal, {
    judul: edit.id ? "Ubah testimoni" : "Tambah testimoni",
    onTutup: () => setEdit(null)
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Foto peserta",
    hint: "Opsional. Gunakan foto asli dan pastikan yang bersangkutan mengizinkan."
  }, /*#__PURE__*/React.createElement(UnggahFoto, {
    nilai: edit.foto,
    awalan: "alumni",
    onGanti: v => setEdit({
      ...edit,
      foto: v
    })
  })), /*#__PURE__*/React.createElement("div", {
    className: "dm-grid2"
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Nama peserta",
    hint: "Sesuai nama pada ulasan aslinya."
  }, /*#__PURE__*/React.createElement("input", {
    className: "dm-input",
    value: edit.nama,
    onChange: e => setEdit({
      ...edit,
      nama: e.target.value
    })
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Asal instansi atau kota"
  }, /*#__PURE__*/React.createElement("input", {
    className: "dm-input",
    value: edit.asal || "",
    onChange: e => setEdit({
      ...edit,
      asal: e.target.value
    }),
    placeholder: "RSUD ..."
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Pelatihan yang diikuti"
  }, /*#__PURE__*/React.createElement("input", {
    className: "dm-input",
    value: edit.pelatihan || "",
    onChange: e => setEdit({
      ...edit,
      pelatihan: e.target.value
    }),
    placeholder: "BTCLS Angkatan 148"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Sumber",
    hint: "Google Maps, Instagram, atau formulir evaluasi."
  }, /*#__PURE__*/React.createElement("input", {
    className: "dm-input",
    value: edit.sumber || "",
    onChange: e => setEdit({
      ...edit,
      sumber: e.target.value
    })
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Bintang"
  }, /*#__PURE__*/React.createElement("select", {
    className: "dm-input",
    value: edit.bintang,
    onChange: e => setEdit({
      ...edit,
      bintang: e.target.value
    })
  }, [5, 4, 3, 2, 1].map(n => /*#__PURE__*/React.createElement("option", {
    key: n,
    value: n
  }, n)))), /*#__PURE__*/React.createElement(Field, {
    label: "Urutan tampil",
    hint: "Angka lebih kecil tampil lebih dulu."
  }, /*#__PURE__*/React.createElement("input", {
    className: "dm-input dm-mono",
    type: "number",
    value: edit.urutan,
    onChange: e => setEdit({
      ...edit,
      urutan: e.target.value
    })
  }))), /*#__PURE__*/React.createElement(Field, {
    label: "Isi testimoni",
    hint: "Salin apa adanya dari ulasan asli, jangan diubah maknanya."
  }, /*#__PURE__*/React.createElement("textarea", {
    className: "dm-textarea dm-textarea-besar",
    rows: 4,
    value: edit.isi,
    onChange: e => setEdit({
      ...edit,
      isi: e.target.value
    })
  })), /*#__PURE__*/React.createElement("div", {
    className: "dm-cek-list"
  }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: edit.tampil,
    onChange: e => setEdit({
      ...edit,
      tampil: e.target.checked
    })
  }), "Tampilkan di halaman pendaftaran")), /*#__PURE__*/React.createElement("div", {
    className: "dm-row dm-row-akhir"
  }, /*#__PURE__*/React.createElement("button", {
    className: "dm-btn",
    onClick: simpan
  }, "Simpan testimoni"), /*#__PURE__*/React.createElement("button", {
    className: "dm-btn-line",
    onClick: () => setEdit(null)
  }, "Batal"))) : null);
}
var KS_STATUS = [["baru", "Baru"], ["dihubungi", "Sudah dihubungi"], ["penawaran", "Penawaran dikirim"], ["deal", "Deal"], ["batal", "Batal"]];
var KS_BENTUK_LABEL = {
  "in-house": "In-house di tempat mereka",
  "kirim-peserta": "Kirim peserta ke kelas reguler",
  "penyelenggaraan-bersama": "Penyelenggaraan bersama",
  "belum-tahu": "Belum menentukan"
};


/* ============================================================
   Tab Prospek — orang yang membuka biaya pelatihan.

   Nomor sudah diseragamkan ke bentuk 62 oleh server dan hanya
   nomor seluler Indonesia yang diterima, jadi semuanya siap
   langsung dihubungi lewat WhatsApp.
   ============================================================ */

/* ============================================================
   Tab Keamanan — dua langkah masuk (TOTP).

   Penjagaan sebenarnya ada di database: fungsi is_admin() menolak
   sesi yang hanya lolos kata sandi begitu akun punya aplikasi
   Authenticator terdaftar. Halaman ini cuma pintu pendaftarannya.
   ============================================================ */

/* ============================================================
   Tab Link Kelas — satu alamat khusus per kampanye.

   Pengurus mencentang batch mana saja yang ikut, memberi nama
   alamatnya sendiri, lalu menyalin tautannya untuk disebar.
   Halaman yang dibuka tetap halaman pendaftaran yang sama —
   termasuk gerbang biaya — hanya daftar kelasnya yang disaring.
   ============================================================ */
function TabLinkKelas({ beriTahu }) {
  const [baris, setBaris] = useState(null);
  const [kelas, setKelas] = useState([]);
  const [edit, setEdit] = useState(null);
  const [sibuk, setSibuk] = useState(false);
  const [galat, setGalat] = useState("");

  const kosong = { slug: "", judul: "", subjudul: "", kelas_id: [], aktif: true, wa_grup: "" };

  async function muat() {
    const [a, b] = await Promise.all([
      SB.from("kampanye").select("*").order("dibuat", { ascending: false }),
      SB.from("pelatihan").select("id,judul,jenis,lokasi,tanggal_mulai,tanggal_selesai,status")
        .order("tanggal_mulai", { ascending: false }).limit(200)
    ]);
    if (a.error) return beriTahu("Gagal memuat: " + a.error.message);
    setBaris(a.data || []);
    setKelas(b.error ? [] : b.data || []);
  }
  useEffect(() => { muat(); }, []);

  function rapikanSlug(t) {
    return String(t || "").toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 60);
  }

  function alamat(slug) {
    return window.location.origin + window.location.pathname + "?k=" + slug;
  }

  function salin(slug) {
    const t = alamat(slug);
    if (navigator.clipboard) navigator.clipboard.writeText(t).then(() => beriTahu("Tautan disalin."));
    else beriTahu(t);
  }

  function ubahPilihan(id) {
    const ada = edit.kelas_id.indexOf(id) > -1;
    setEdit({
      ...edit,
      kelas_id: ada ? edit.kelas_id.filter(x => x !== id) : edit.kelas_id.concat([id])
    });
  }

  async function simpan() {
    setGalat("");
    const slug = rapikanSlug(edit.slug);
    if (slug.length < 3) return setGalat("Nama alamat minimal 3 huruf, contoh: solo-september.");
    if (!edit.judul.trim()) return setGalat("Judul halaman belum diisi.");
    if (!edit.kelas_id.length) return setGalat("Centang dulu kelas mana saja yang masuk.");
    setSibuk(true);
    const isi = {
      slug,
      judul: edit.judul.trim(),
      subjudul: edit.subjudul.trim() || null,
      kelas_id: edit.kelas_id,
      aktif: !!edit.aktif,
      wa_grup: (edit.wa_grup || "").trim() || null
    };
    const { error } = edit.id
      ? await SB.from("kampanye").update(isi).eq("id", edit.id)
      : await SB.from("kampanye").insert(isi);
    setSibuk(false);
    if (error) {
      return setGalat(/duplicate|unique/i.test(error.message)
        ? "Nama alamat \"" + slug + "\" sudah dipakai kampanye lain. Pilih nama lain."
        : "Gagal menyimpan: " + error.message);
    }
    setEdit(null);
    beriTahu("Tersimpan.");
    muat();
  }

  async function ubahAktif(r) {
    const { error } = await SB.from("kampanye").update({ aktif: !r.aktif }).eq("id", r.id);
    if (error) return beriTahu("Gagal mengubah: " + error.message);
    muat();
  }

  function tgl(a, b) {
    try { return rentang(a, b); } catch (e) { return ""; }
  }

  if (baris === null) {
    return React.createElement("p", { className: "dm-load" }, "Memuat link kelas…");
  }

  /* ---------- kotak ubah ---------- */
  if (edit) {
    return React.createElement("section", { className: "dm-card" },
      React.createElement("div", { className: "dm-toolbar" },
        React.createElement("h3", null, edit.id ? "Ubah link kelas" : "Buat link kelas baru")),

      React.createElement(Field, {
        label: "Judul halaman",
        hint: "Tampil sebagai judul besar, contoh: Pelatihan BTCLS Solo September 2026."
      }, React.createElement("input", {
        className: "dm-input",
        value: edit.judul,
        onChange: e => setEdit({ ...edit, judul: e.target.value })
      })),

      React.createElement(Field, {
        label: "Kalimat pendukung",
        hint: "Satu kalimat di bawah judul. Boleh dikosongkan."
      }, React.createElement("input", {
        className: "dm-input",
        value: edit.subjudul,
        onChange: e => setEdit({ ...edit, subjudul: e.target.value })
      })),

      React.createElement(Field, {
        label: "Nama alamat",
        hint: "Huruf kecil dan tanda hubung saja. Inilah yang muncul di tautan."
      }, React.createElement("input", {
        className: "dm-input dm-mono",
        value: edit.slug,
        placeholder: "solo-september",
        onChange: e => setEdit({ ...edit, slug: e.target.value })
      })),

      React.createElement("p", { className: "dm-hint", style: { marginTop: -6, marginBottom: 16 } },
        "Tautannya nanti: ",
        React.createElement("b", { className: "dm-mono" },
          alamat(rapikanSlug(edit.slug) || "nama-alamat"))),

      React.createElement(Field, {
        label: "Link grup WhatsApp angkatan",
        hint: "Peserta yang mendaftar lewat tautan ini langsung mendapat tombol gabung begitu pendaftarannya terkirim. Kosongkan bila ingin memakai link grup per kelas dari tab Jadwal."
      }, React.createElement("input", {
        className: "dm-input",
        type: "url",
        value: edit.wa_grup || "",
        placeholder: "https://chat.whatsapp.com/…",
        onChange: e => setEdit({ ...edit, wa_grup: e.target.value })
      })),

      React.createElement("p", { className: "dm-kelompok-judul" }, "Kelas yang ikut"),
      React.createElement("p", { className: "dm-hint", style: { marginBottom: 10 } },
        edit.kelas_id.length
          ? edit.kelas_id.length + " kelas dicentang."
          : "Belum ada yang dicentang. Halaman tidak akan menampilkan apa pun sampai ada yang dipilih."),

      kelas.length === 0
        ? React.createElement("p", { className: "dm-kosong" }, "Belum ada kelas di jadwal.")
        : React.createElement("div", { className: "dm-tabel-bungkus", style: { maxHeight: 340, overflowY: "auto" } },
            React.createElement("table", { className: "dm-tabel" },
              React.createElement("tbody", null,
                kelas.map(k => React.createElement("tr", { key: k.id },
                  React.createElement("td", { style: { width: 34 } },
                    React.createElement("input", {
                      type: "checkbox",
                      checked: edit.kelas_id.indexOf(k.id) > -1,
                      onChange: () => ubahPilihan(k.id),
                      style: { width: 16, height: 16 }
                    })),
                  React.createElement("td", null,
                    React.createElement("b", null, k.judul),
                    React.createElement("div", { className: "dm-hint" },
                      [k.jenis, k.lokasi, tgl(k.tanggal_mulai, k.tanggal_selesai)]
                        .filter(Boolean).join(" · "))),
                  React.createElement("td", { style: { textAlign: "right" } },
                    k.status === "buka"
                      ? React.createElement("span", { className: "dm-hint" }, "dibuka")
                      : React.createElement("span", { className: "dm-hint" }, k.status))
                ))
              ))),

      React.createElement("label",
        { className: "dm-hint", style: { display: "block", margin: "16px 0 4px", cursor: "pointer" } },
        React.createElement("input", {
          type: "checkbox",
          checked: !!edit.aktif,
          onChange: e => setEdit({ ...edit, aktif: e.target.checked }),
          style: { marginRight: 7 }
        }),
        "Aktif — tautannya bisa dibuka orang"),

      galat ? React.createElement("p", { className: "dm-err" }, galat) : null,

      React.createElement("div", { className: "dm-row dm-row-akhir", style: { marginTop: 16 } },
        React.createElement("button", {
          className: "dm-btn-line", onClick: () => { setEdit(null); setGalat(""); }
        }, "Batal"),
        React.createElement("button", {
          className: "dm-btn", onClick: simpan, disabled: sibuk
        }, sibuk ? "Menyimpan…" : "Simpan")));
  }

  /* ---------- daftar ---------- */
  return React.createElement("section", { className: "dm-card" },
    React.createElement("div", { className: "dm-toolbar" },
      React.createElement("h3", null, "Link Kelas"),
      React.createElement("button", {
        className: "dm-btn",
        onClick: () => { setGalat(""); setEdit(Object.assign({}, kosong)); }
      }, "Buat link baru")),

    React.createElement("p", { className: "dm-hint", style: { marginBottom: 14 } },
      "Satu tautan khusus yang hanya menampilkan kelas pilihan Anda — cocok untuk broadcast " +
      "satu kota atau satu angkatan. Halamannya sama dengan halaman pendaftaran biasa, " +
      "gerbang biaya tetap berlaku, dan pendaftar yang masuk lewat tautan ini tercatat asalnya."),

    baris.length === 0
      ? React.createElement("p", { className: "dm-kosong" },
          "Belum ada link kelas. Tekan “Buat link baru” untuk mulai.")
      : React.createElement("div", { className: "dm-tabel-bungkus" },
          React.createElement("table", { className: "dm-tabel" },
            React.createElement("thead", null,
              React.createElement("tr", null,
                React.createElement("th", null, "Judul"),
                React.createElement("th", null, "Tautan"),
                React.createElement("th", null, "Kelas"),
                React.createElement("th", null, "Status"),
                React.createElement("th", null, ""))),
            React.createElement("tbody", null,
              baris.map(r => React.createElement("tr", { key: r.id },
                React.createElement("td", null, React.createElement("b", null, r.judul)),
                React.createElement("td", { className: "dm-mono" }, "?k=" + r.slug),
                React.createElement("td", null, (r.kelas_id || []).length),
                React.createElement("td", null,
                  React.createElement("span", {
                    style: { fontWeight: 600, color: r.aktif ? "#166534" : "#8a6d3b" }
                  }, r.aktif ? "Aktif" : "Nonaktif")),
                React.createElement("td", null,
                  React.createElement("div", { className: "dm-row" },
                    React.createElement("button", {
                      className: "dm-btn-line", onClick: () => salin(r.slug)
                    }, "Salin tautan"),
                    React.createElement("a", {
                      className: "dm-btn-line",
                      style: { textDecoration: "none" },
                      href: alamat(r.slug),
                      target: "_blank",
                      rel: "noreferrer"
                    }, "Lihat"),
                    React.createElement("button", {
                      className: "dm-btn-line",
                      onClick: () => {
                        setGalat("");
                        setEdit({
                          id: r.id,
                          slug: r.slug,
                          judul: r.judul,
                          subjudul: r.subjudul || "",
                          kelas_id: (r.kelas_id || []).slice(),
                          aktif: r.aktif,
                          wa_grup: r.wa_grup || ""
                        });
                      }
                    }, "Ubah"),
                    React.createElement("button", {
                      className: "dm-btn-line", onClick: () => ubahAktif(r)
                    }, r.aktif ? "Matikan" : "Aktifkan")))
              ))))));
}

function TabKeamanan({ beriTahu }) {
  const [faktor, setFaktor] = useState(undefined);
  const [baru, setBaru] = useState(null);
  const [kode, setKode] = useState("");
  const [sibuk, setSibuk] = useState(false);
  const [yakin, setYakin] = useState(false);
  const [galat, setGalat] = useState("");

  /* Ganti kata sandi. Ada di sini supaya pengelola yang masih
     berhasil masuk bisa memasang kata sandi baru tanpa perlu
     mengingat yang lama. */
  const [sandiBaru, setSandiBaru] = useState("");
  const [sandiUlang, setSandiUlang] = useState("");
  const [sandiSibuk, setSandiSibuk] = useState(false);
  const [sandiGalat, setSandiGalat] = useState("");
  const [lihatSandi, setLihatSandi] = useState(false);

  /* Cadangan harian. Dibuat otomatis oleh penjadwal di database,
     jadi kartu ini gunanya dua: memperlihatkan kalau penjadwalnya
     diam-diam berhenti, dan memberi jalan menyimpan salinan di luar. */
  const [cadangan, setCadangan] = useState(null);
  const [cadSibuk, setCadSibuk] = useState(false);

  async function muatCadangan() {
    try {
      const { data, error } = await SB.rpc("cadangan_terakhir");
      setCadangan(error ? { ada: false } : data);
    } catch (e) {
      setCadangan({ ada: false });
    }
  }
  useEffect(() => { muatCadangan(); }, []);

  async function cadangSekarang() {
    setCadSibuk(true);
    try {
      const { error } = await SB.rpc("buat_cadangan");
      if (error) throw error;
      beriTahu("Cadangan baru dibuat.");
      await muatCadangan();
    } catch (e) {
      beriTahu("Gagal membuat cadangan: " + e.message);
    }
    setCadSibuk(false);
  }

  async function unduhCadangan() {
    setCadSibuk(true);
    try {
      const { data, error } = await SB.from("cadangan_harian")
        .select("dibuat, isi").order("dibuat", { ascending: false }).limit(1);
      if (error) throw error;
      if (!data || !data.length) throw new Error("belum ada cadangan");
      const tgl = new Date(data[0].dibuat);
      const p = x => String(x).padStart(2, "0");
      const nama = "cadangan-dewamedik-" + tgl.getFullYear() + p(tgl.getMonth() + 1) + p(tgl.getDate()) + ".json";
      const blob = new Blob([JSON.stringify(data[0].isi, null, 1)], { type: "application/json" });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = nama;
      document.body.appendChild(a);
      a.click();
      setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 2000);
    } catch (e) {
      beriTahu("Gagal mengunduh: " + e.message);
    }
    setCadSibuk(false);
  }

  function usiaCadangan() {
    if (!cadangan || !cadangan.ada) return null;
    return (Date.now() - new Date(cadangan.dibuat).getTime()) / 36e5;
  }

  const syarat = [
    ["Minimal 12 karakter", sandiBaru.length >= 12],
    ["Ada huruf kecil (a-z)", /[a-z]/.test(sandiBaru)],
    ["Ada huruf besar (A-Z)", /[A-Z]/.test(sandiBaru)],
    ["Ada angka (0-9)", /[0-9]/.test(sandiBaru)],
    ["Ada simbol, misal ! ? @ #", /[^A-Za-z0-9]/.test(sandiBaru)],
    ["Kedua isian sama", sandiBaru.length > 0 && sandiBaru === sandiUlang]
  ];
  const sandiSiap = syarat.every(x => x[1]);

  async function simpanSandi() {
    setSandiGalat("");
    setSandiSibuk(true);
    try {
      const { error } = await SB.auth.updateUser({ password: sandiBaru });
      if (error) throw error;
      setSandiBaru("");
      setSandiUlang("");
      setLihatSandi(false);
      beriTahu("Kata sandi baru tersimpan. Pakai yang ini saat masuk berikutnya.");
    } catch (e) {
      setSandiGalat("Gagal menyimpan: " + e.message);
    }
    setSandiSibuk(false);
  }

  async function muat() {
    const { data, error } = await SB.auth.mfa.listFactors();
    if (error) {
      setFaktor(null);
      return beriTahu("Gagal memeriksa: " + error.message);
    }
    const siap = (data.totp || []).filter(f => f.status === "verified");
    setFaktor(siap.length ? siap[0] : null);
  }
  useEffect(() => { muat(); }, []);

  async function mulai() {
    setGalat("");
    setSibuk(true);
    try {
      /* Bersihkan pendaftaran lama yang tidak sempat diselesaikan,
         supaya namanya tidak bentrok. */
      const { data: d } = await SB.auth.mfa.listFactors();
      const sisa = ((d && d.all) || []).filter(f => f.status !== "verified");
      for (const f of sisa) {
        try { await SB.auth.mfa.unenroll({ factorId: f.id }); } catch (e) {}
      }
      const { data, error } = await SB.auth.mfa.enroll({
        factorType: "totp",
        friendlyName: "Back office DEWAMEDIK " + Date.now()
      });
      if (error) throw error;
      setBaru({ id: data.id, qr: data.totp.qr_code, kunci: data.totp.secret });
    } catch (e) {
      setGalat("Gagal memulai: " + e.message);
    }
    setSibuk(false);
  }

  async function pastikan() {
    setGalat("");
    setSibuk(true);
    try {
      const { data: t, error: e1 } = await SB.auth.mfa.challenge({ factorId: baru.id });
      if (e1) throw e1;
      const { error: e2 } = await SB.auth.mfa.verify({
        factorId: baru.id,
        challengeId: t.id,
        code: kode.replace(/[^0-9]/g, "")
      });
      if (e2) throw e2;
      setBaru(null);
      setKode("");
      beriTahu("Dua langkah aktif. Mulai sekarang setiap masuk perlu kode dari aplikasi.");
      await muat();
    } catch (e) {
      setGalat("Kode belum cocok. Pakai 6 angka yang sedang tampil di aplikasi.");
    }
    setSibuk(false);
  }

  async function batalDaftar() {
    if (baru) {
      try { await SB.auth.mfa.unenroll({ factorId: baru.id }); } catch (e) {}
    }
    setBaru(null);
    setKode("");
    setGalat("");
  }

  async function matikan() {
    setGalat("");
    setSibuk(true);
    try {
      const { error } = await SB.auth.mfa.unenroll({ factorId: faktor.id });
      if (error) throw error;
      setYakin(false);
      beriTahu("Dua langkah dimatikan.");
      await muat();
    } catch (e) {
      setGalat("Gagal mematikan: " + e.message);
    }
    setSibuk(false);
  }

  if (faktor === undefined) {
    return React.createElement("p", { className: "dm-load" }, "Memeriksa keamanan akun…");
  }

  const isi = faktor
    ? React.createElement("div", null,
        React.createElement("p", { style: { fontWeight: 700, margin: "0 0 4px" } }, "Status: aktif"),
        React.createElement("p", { className: "dm-hint" },
          "Didaftarkan " +
          (faktor.created_at ? new Date(faktor.created_at).toLocaleString("id-ID") : "—") +
          ". Simpan ponsel itu baik-baik; tanpa kodenya, kata sandi saja tidak cukup untuk masuk."),
        galat ? React.createElement("p", { className: "dm-err" }, galat) : null,
        yakin
          ? React.createElement("div", null,
              React.createElement("p", { className: "dm-hint" },
                "Yakin dimatikan? Setelah ini back office kembali hanya dijaga kata sandi."),
              React.createElement("div", { className: "dm-row" },
                React.createElement("button", {
                  className: "dm-btn-line", onClick: () => setYakin(false)
                }, "Batal"),
                React.createElement("button", {
                  className: "dm-btn", onClick: matikan, disabled: sibuk
                }, sibuk ? "Memproses…" : "Ya, matikan")))
          : React.createElement("button", {
              className: "dm-btn-line", onClick: () => setYakin(true)
            }, "Matikan dua langkah"))

    : baru
    ? React.createElement("div", null,
        React.createElement("ol", { className: "dm-hint", style: { paddingLeft: 18, lineHeight: 1.8 } },
          React.createElement("li", null, "Buka aplikasi Authenticator di ponsel."),
          React.createElement("li", null, "Pilih tambah akun, lalu pindai kode di bawah ini."),
          React.createElement("li", null, "Ketik 6 angka yang muncul, lalu tekan Aktifkan.")),
        React.createElement("img", {
          src: baru.qr,
          alt: "Kode QR untuk aplikasi Authenticator",
          style: {
            width: 208, height: 208, display: "block", background: "#fff",
            padding: 10, borderRadius: 12, border: "1px solid #dfe5ee", margin: "4px 0 14px"
          }
        }),
        React.createElement("p", { className: "dm-hint", style: { marginBottom: 4 } },
          "Tidak bisa memindai? Ketik kunci ini di aplikasi:"),
        React.createElement("p", {
          className: "dm-mono",
          style: { wordBreak: "break-all", fontWeight: 700, margin: "0 0 14px" }
        }, baru.kunci),
        React.createElement(Field, { label: "Kode 6 angka" },
          React.createElement("input", {
            className: "dm-input dm-mono",
            style: { maxWidth: 180, letterSpacing: "0.28em" },
            type: "text", inputMode: "numeric", maxLength: 6, autoFocus: true,
            value: kode,
            onChange: e => setKode(e.target.value.replace(/[^0-9]/g, "")),
            onKeyDown: e => {
              if (e.key === "Enter" && kode.length === 6) pastikan();
            }
          })),
        galat ? React.createElement("p", { className: "dm-err" }, galat) : null,
        React.createElement("div", { className: "dm-row" },
          React.createElement("button", {
            className: "dm-btn-line", onClick: batalDaftar, disabled: sibuk
          }, "Batal"),
          React.createElement("button", {
            className: "dm-btn", onClick: pastikan, disabled: sibuk || kode.length !== 6
          }, sibuk ? "Memeriksa…" : "Aktifkan")))

    : React.createElement("div", null,
        React.createElement("p", { style: { fontWeight: 700, margin: "0 0 4px" } }, "Status: belum aktif"),
        React.createElement("p", { className: "dm-hint" },
          "Saat ini back office hanya dijaga kata sandi."),
        galat ? React.createElement("p", { className: "dm-err" }, galat) : null,
        React.createElement("button", {
          className: "dm-btn", onClick: mulai, disabled: sibuk
        }, sibuk ? "Menyiapkan…" : "Aktifkan dua langkah"));

  const kartuSandi = React.createElement("section",
    { className: "dm-card", style: { marginTop: 18 } },
    React.createElement("div", { className: "dm-toolbar" },
      React.createElement("h3", null, "Ganti kata sandi")),
    React.createElement("p", { className: "dm-hint", style: { marginBottom: 14 } },
      "Selama Anda masih berhasil masuk seperti sekarang, kata sandi baru bisa dipasang " +
      "langsung di sini — tidak perlu mengingat yang lama. Setelah tersimpan, Anda tetap " +
      "masuk; kata sandi baru dipakai pada masuk berikutnya."),
    React.createElement(Field, { label: "Kata sandi baru" },
      React.createElement("input", {
        className: "dm-input",
        style: { maxWidth: 340 },
        type: lihatSandi ? "text" : "password",
        autoComplete: "new-password",
        value: sandiBaru,
        onChange: e => setSandiBaru(e.target.value)
      })),
    React.createElement(Field, { label: "Ulangi kata sandi baru" },
      React.createElement("input", {
        className: "dm-input",
        style: { maxWidth: 340 },
        type: lihatSandi ? "text" : "password",
        autoComplete: "new-password",
        value: sandiUlang,
        onChange: e => setSandiUlang(e.target.value),
        onKeyDown: e => {
          if (e.key === "Enter" && sandiSiap && !sandiSibuk) simpanSandi();
        }
      })),
    React.createElement("label",
      { className: "dm-hint", style: { display: "block", margin: "2px 0 14px", cursor: "pointer" } },
      React.createElement("input", {
        type: "checkbox",
        checked: lihatSandi,
        onChange: e => setLihatSandi(e.target.checked),
        style: { marginRight: 7 }
      }),
      "Tampilkan kata sandi"),
    React.createElement("ul",
      { className: "dm-hint", style: { listStyle: "none", padding: 0, margin: "0 0 14px", lineHeight: 1.8 } },
      syarat.map((x, i) => React.createElement("li",
        { key: i, style: { color: x[1] ? "#166534" : undefined } },
        (x[1] ? "\u2713 " : "\u2022 ") + x[0]))),
    sandiGalat ? React.createElement("p", { className: "dm-err" }, sandiGalat) : null,
    React.createElement("button", {
      className: "dm-btn",
      onClick: simpanSandi,
      disabled: !sandiSiap || sandiSibuk
    }, sandiSibuk ? "Menyimpan…" : "Simpan kata sandi baru"));

  const jam = usiaCadangan();
  const basi = jam === null || jam > 30;
  const kartuCadangan = React.createElement("section",
    { className: "dm-card", style: { marginTop: 18 } },
    React.createElement("div", { className: "dm-toolbar" },
      React.createElement("h3", null, "Cadangan data")),
    React.createElement("p", { className: "dm-hint", style: { marginBottom: 12 } },
      "Seluruh isi tabel disalin otomatis setiap hari pukul 01.00 WIB dan disimpan 14 hari terakhir. " +
      "Salinan ini melindungi dari salah hapus dan salah ubah — bukan dari hilangnya seluruh project. " +
      "Untuk itu, sesekali unduh dan simpan di tempat lain."),
    React.createElement("p", {
      style: {
        margin: "0 0 14px", fontWeight: 600,
        color: basi ? "#9d2f2f" : "#186b4a"
      }
    }, cadangan === null
      ? "Memeriksa…"
      : !cadangan.ada
        ? "Belum ada cadangan sama sekali."
        : (basi
            ? "Cadangan terakhir sudah lebih dari sehari — penjadwalnya mungkin berhenti. "
            : "Cadangan terakhir: ")
          + new Date(cadangan.dibuat).toLocaleString("id-ID", { dateStyle: "long", timeStyle: "short" })
          + " · " + Math.round((cadangan.ukuran || 0) / 1024) + " KB"
          + " · " + cadangan.jumlah + " salinan tersimpan"),
    React.createElement("div", { className: "dm-row" },
      React.createElement("button", {
        className: "dm-btn", onClick: unduhCadangan,
        disabled: cadSibuk || !(cadangan && cadangan.ada)
      }, "Unduh cadangan terakhir"),
      React.createElement("button", {
        className: "dm-btn-ghost", onClick: cadangSekarang, disabled: cadSibuk
      }, cadSibuk ? "Menyiapkan…" : "Buat cadangan sekarang")));

  return React.createElement(React.Fragment, null,
    React.createElement("section", { className: "dm-card" },
      React.createElement("div", { className: "dm-toolbar" },
        React.createElement("h3", null, "Keamanan akun")),
      React.createElement("p", { className: "dm-hint", style: { marginBottom: 14 } },
        "Dua langkah masuk memakai aplikasi Authenticator di ponsel Anda — Google Authenticator, " +
        "Microsoft Authenticator, atau sejenisnya. Setelah aktif, orang yang tahu kata sandi tetap " +
        "tidak bisa membuka back office tanpa ponsel Anda."),
      isi),
    kartuSandi,
    kartuCadangan);
}

function TabProspek({ beriTahu }) {
  const [baris, setBaris] = useState(null);
  const [cari, setCari] = useState("");
  const [sibuk, setSibuk] = useState(false);

  /* Kota yang ditulis sendiri selalu dipakai lebih dulu. Tebakan dari
     alamat IP hanya cadangan, dan ditandai supaya tidak dikira pasti. */
  function lokasiBaris(r) {
    if (r.kota) return { teks: r.kota, pasti: true };
    if (r.lokasi) return { teks: r.lokasi, pasti: false };
    return null;
  }

  /* Alamat IP diterjemahkan jadi nama kota lewat layanan gratis ipapi.co,
     dipanggil dari peramban ini, bukan dari server. Hasilnya disimpan
     supaya satu alamat cukup dicari sekali saja. */
  async function cekLokasi() {
    const perlu = (baris || []).filter(r => r.ip && !r.lokasi && !r.kota);
    if (!perlu.length) return beriTahu("Semua baris sudah punya keterangan lokasi.");
    setSibuk(true);
    const sudah = {};
    let berhasil = 0, gagal = 0;
    for (const r of perlu.slice(0, 40)) {
      try {
        let tempat = sudah[r.ip];
        if (tempat === undefined) {
          const jw = await fetch("https://ipapi.co/" + encodeURIComponent(r.ip) + "/json/");
          const j = await jw.json();
          tempat = j && j.city
            ? [j.city, j.region].filter(Boolean).join(", ") +
              (j.org ? " \u00b7 " + j.org : "")
            : null;
          sudah[r.ip] = tempat;
          await new Promise(t => setTimeout(t, 1100));   /* jangan menggedor layanannya */
        }
        if (!tempat) { gagal++; continue; }
        const { error } = await SB.from("prospek")
          .update({ lokasi: tempat, lokasi_dicek: new Date().toISOString() })
          .eq("id", r.id);
        if (error) { gagal++; } else { berhasil++; }
      } catch (e) { gagal++; }
    }
    setSibuk(false);
    beriTahu(berhasil + " lokasi ditemukan" + (gagal ? ", " + gagal + " gagal" : "") + ".");
    muat();
  }

  async function muat() {
    const { data, error } = await SB.from("prospek")
      .select("*").order("dibuat_pada", { ascending: false }).limit(1000);
    if (error) return beriTahu("Gagal memuat: " + error.message);
    setBaris(data || []);
  }
  useEffect(() => { muat(); }, []);

  function jam(iso) {
    if (!iso) return "—";
    try {
      return new Date(iso).toLocaleString("id-ID", {
        day: "numeric", month: "short", year: "numeric",
        hour: "2-digit", minute: "2-digit"
      });
    } catch (e) { return iso; }
  }
  function tampilWa(w) {
    const d = String(w || "");
    return d.slice(0, 2) === "62" ? "+62 " + d.slice(2) : d;
  }

  const semua = baris || [];
  const kata = cari.trim().toLowerCase();
  const pakai = kata
    ? semua.filter(r => (r.nama + " " + r.whatsapp + " " + (r.email || "") + " " +
        (r.kampanye || "") + " " + (r.kota || "") + " " + (r.lokasi || "")).toLowerCase().indexOf(kata) > -1)
    : semua;

  const kini = Date.now();
  const hariIni = semua.filter(r => kini - new Date(r.dibuat_pada).getTime() < 86400000).length;
  const pekanIni = semua.filter(r => kini - new Date(r.dibuat_pada).getTime() < 604800000).length;

  function simpanBerkas(blob, namaBerkas) {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = namaBerkas;
    document.body.appendChild(a); a.click();
    setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1500);
  }

  function unduhCsv(tgl) {
    const sel = v => {
      const t = String(v == null ? "" : v);
      return /[",\n;]/.test(t) ? '"' + t.replace(/"/g, '""') + '"' : t;
    };
    const isi = ["Nama;WhatsApp;Email;Kota ditulis sendiri;Perkiraan dari IP;Asal;Waktu"].concat(
      semua.map(r => [r.nama, tampilWa(r.whatsapp), r.email || "", r.kota || "",
        r.lokasi || "", r.kampanye || "", jam(r.dibuat_pada)].map(sel).join(";"))
    ).join("\r\n");
    simpanBerkas(new Blob(["﻿" + isi], { type: "text/csv;charset=utf-8" }),
                 "pelihat-harga-" + tgl + ".csv");
  }

  /* Pustaka Excel diambil hanya saat tombolnya ditekan, supaya
     halaman tidak jadi berat untuk pengunjung biasa. */
  function muatPustakaExcel() {
    if (window.XLSX) return Promise.resolve(window.XLSX);
    return new Promise((selesai, gagal) => {
      const sc = document.createElement("script");
      sc.src = "https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js";
      sc.onload = () => window.XLSX ? selesai(window.XLSX) : gagal(new Error("Pustaka tidak siap"));
      sc.onerror = () => gagal(new Error("Pustaka gagal diunduh"));
      document.head.appendChild(sc);
    });
  }

  async function unduh() {
    const tgl = new Date().toISOString().slice(0, 10);
    if (!semua.length) return beriTahu("Belum ada data untuk diunduh.");
    try {
      const XLSX = await muatPustakaExcel();
      const baris = semua.map(r => ({
        Nama: r.nama,
        WhatsApp: tampilWa(r.whatsapp),
        Email: r.email || "",
        "Kota ditulis sendiri": r.kota || "",
        "Perkiraan dari IP": r.lokasi || "",
        Asal: r.kampanye || "",
        Waktu: jam(r.dibuat_pada)
      }));
      const lembar = XLSX.utils.json_to_sheet(baris);
      lembar["!cols"] = [{ wch: 28 }, { wch: 20 }, { wch: 30 }, { wch: 24 },
                         { wch: 34 }, { wch: 20 }, { wch: 22 }];
      const buku = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(buku, lembar, "Pelihat Harga");
      const isi = XLSX.write(buku, { bookType: "xlsx", type: "array" });
      simpanBerkas(
        new Blob([isi], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" }),
        "pelihat-harga-" + tgl + ".xlsx"
      );
    } catch (e) {
      beriTahu("Excel gagal dibuat, diunduh sebagai CSV.");
      unduhCsv(tgl);
    }
  }

  if (baris === null) {
    return React.createElement("p", { className: "dm-load" }, "Memuat data pelihat harga…");
  }

  return React.createElement("section", { className: "dm-card" },
    React.createElement("div", { className: "dm-toolbar" },
      React.createElement("h3", null, "Pelihat Harga — orang yang membuka biaya pelatihan"),
      React.createElement("div", { style: { display: "flex", gap: 8, flexWrap: "wrap" } },
        React.createElement("button", { className: "dm-btn-line", onClick: muat }, "Muat ulang"),
        React.createElement("button", {
          className: "dm-btn-line",
          disabled: sibuk,
          onClick: cekLokasi
        }, sibuk ? "Mencari lokasi\u2026" : "Cek lokasi dari IP"),
        React.createElement("button", { className: "dm-btn-line", onClick: unduh }, "Unduh Excel")
      )
    ),
    React.createElement("p", { className: "dm-hint" },
      semua.length + " orang tercatat · " + hariIni + " dalam 24 jam terakhir · " +
      pekanIni + " dalam 7 hari terakhir. Nomor sudah dipastikan nomor seluler Indonesia."
    ),
    React.createElement("p", { className: "dm-hint", style: { marginTop: -6 } },
      "Lokasi bertanda hitam ditulis sendiri oleh pengunjung dan bisa dipercaya. " +
      "Yang bertanda \u201cperkiraan\u201d berasal dari alamat IP \u2014 pengguna data seluler " +
      "sering terbaca sebagai kota gerbang operatornya, bukan kota tempat ia berada."
    ),
    React.createElement("input", {
      className: "dm-input",
      style: { maxWidth: 320, marginBottom: 14 },
      type: "search",
      placeholder: "Cari nama atau nomor…",
      value: cari,
      onChange: e => setCari(e.target.value)
    }),
    pakai.length === 0
      ? React.createElement("p", { className: "dm-kosong" },
          semua.length ? "Tidak ada yang cocok dengan pencarian ini."
                       : "Belum ada yang membuka biaya pelatihan.")
      : React.createElement("div", { className: "dm-tabel-bungkus" },
          React.createElement("table", { className: "dm-tabel" },
            React.createElement("thead", null,
              React.createElement("tr", null,
                React.createElement("th", null, "Nama"),
                React.createElement("th", null, "WhatsApp"),
                React.createElement("th", null, "Email"),
                React.createElement("th", null, "Lokasi"),
                React.createElement("th", null, "Asal"),
                React.createElement("th", null, "Waktu"),
                React.createElement("th", null, "")
              )
            ),
            React.createElement("tbody", null,
              pakai.map(r => React.createElement("tr", { key: r.id },
                React.createElement("td", null, React.createElement("b", null, r.nama)),
                React.createElement("td", { className: "dm-mono" }, tampilWa(r.whatsapp)),
                React.createElement("td", null, r.email
                  ? React.createElement("a", { href: "mailto:" + r.email }, r.email)
                  : "—"),
                React.createElement("td", null, (() => {
                  const l = lokasiBaris(r);
                  if (!l) return React.createElement("span", { className: "dm-hint" },
                    r.ip ? "belum dicek" : "\u2014");
                  return React.createElement("span", {
                    className: l.pasti ? "dm-lok-pasti" : "dm-lok-kira",
                    title: l.pasti ? "Ditulis sendiri oleh pengunjung"
                                   : "Perkiraan dari alamat IP \u2014 bisa meleset"
                  }, l.teks, l.pasti ? null : React.createElement("i", null, "perkiraan"));
                })()),
                React.createElement("td", { className: "dm-mono" }, r.kampanye || "—"),
                React.createElement("td", null, jam(r.dibuat_pada)),
                React.createElement("td", null,
                  React.createElement("a", {
                    className: "dm-btn-line",
                    style: { textDecoration: "none" },
                    href: "https://wa.me/" + r.whatsapp,
                    target: "_blank",
                    rel: "noreferrer"
                  }, "WhatsApp")
                )
              ))
            )
          )
        )
  );
}

function TabKerjasama({ beriTahu }) {
  const [baris, setBaris] = useState(null);
  const [saring, setSaring] = useState("semua");
  const [catat, setCatat] = useState(null);

  async function muat() {
    const { data, error } = await SB.from("kerjasama_pengajuan").select("*").order("dibuat_pada", { ascending: false });
    if (error) return beriTahu("Gagal memuat: " + error.message);
    setBaris(data || []);
  }
  useEffect(() => { muat(); }, []);

  async function ubahStatus(r, status) {
    const { error } = await SB.from("kerjasama_pengajuan")
      .update({ status, diperbarui: new Date().toISOString() }).eq("id", r.id);
    if (error) return beriTahu("Gagal menyimpan: " + error.message);
    muat();
  }

  async function simpanCatatan() {
    const { error } = await SB.from("kerjasama_pengajuan")
      .update({ catatan_internal: catat.isi || null, diperbarui: new Date().toISOString() }).eq("id", catat.id);
    if (error) return beriTahu("Gagal menyimpan: " + error.message);
    setCatat(null);
    beriTahu("Catatan tersimpan.");
    muat();
  }

  function bukaWA(r) {
    let wa = String(r.whatsapp || "").replace(/\D/g, "");
    if (!wa) return beriTahu("Nomor WhatsApp tidak tersedia.");
    if (wa.indexOf("0") === 0) wa = "62" + wa.slice(1);
    const teks = "Halo " + r.pic_nama + ",\n\n" +
      "Terima kasih atas pengajuan kerja sama pelatihan dari " + r.institusi + " kepada Akademia DEWAMEDIK.\n\n" +
      "Saya dari Tim Akademik Dewa Medik Nusantara ingin menindaklanjuti dan membahas kebutuhan pelatihan Bapak/Ibu. " +
      "Kapan waktu yang nyaman untuk kami hubungi?\n\nSalam,\nTim Akademik Dewa Medik Nusantara";
    window.open("https://wa.me/" + wa + "?text=" + encodeURIComponent(teks), "_blank");
  }

  function unduh() {
    if (!baris || !baris.length) return;
    const aman = v => '"' + String(v == null ? "" : v).replace(/"/g, '""') + '"';
    const isi = "Waktu Masuk;Institusi;Kota;Penanggung Jawab;Jabatan;WhatsApp;Email;Program;Bentuk;Jumlah Peserta;Rencana Waktu;Minta Penawaran;Catatan Pemohon;Status;Catatan Internal\n" +
      baris.map(r => [r.dibuat_pada, r.institusi, r.kota, r.pic_nama, r.pic_jabatan, r.whatsapp, r.email,
        (r.program || []).join(", "), KS_BENTUK_LABEL[r.bentuk] || r.bentuk, r.jumlah_peserta, r.waktu_rencana,
        r.perlu_penawaran ? "Ya" : "Tidak", r.catatan, r.status, r.catatan_internal].map(aman).join(";")).join("\n");
    const b = new Blob(["﻿" + isi], { type: "text/csv;charset=utf-8" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(b);
    a.download = "pengajuan-kerjasama-" + new Date().toISOString().slice(0, 10) + ".csv";
    document.body.appendChild(a); a.click();
    setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
  }

  if (!baris) return React.createElement("p", { className: "dm-load" }, "Memuat pengajuan kerja sama…");

  const tampil = saring === "semua" ? baris : baris.filter(r => r.status === saring);
  const jumlahBaru = baris.filter(r => r.status === "baru").length;

  return React.createElement("section", { className: "dm-card" },
    React.createElement("div", { className: "dm-toolbar" },
      React.createElement("h3", null, "Pengajuan Kerja Sama Institusi"),
      React.createElement("div", { className: "dm-row" },
        React.createElement("select", {
          className: "dm-input", value: saring, style: { width: "auto" },
          onChange: e => setSaring(e.target.value)
        },
          React.createElement("option", { value: "semua" }, "Semua status"),
          KS_STATUS.map(s => React.createElement("option", { key: s[0], value: s[0] }, s[1]))
        ),
        React.createElement("button", { className: "dm-btn-line", onClick: muat }, "Muat ulang"),
        React.createElement("button", { className: "dm-btn-line", onClick: unduh }, "Unduh CSV")
      )
    ),

    React.createElement("p", { className: "dm-hint", style: { marginBottom: 12 } },
      baris.length + " pengajuan tercatat" + (jumlahBaru ? " · " + jumlahBaru + " belum ditindaklanjuti" : " · semuanya sudah ditindaklanjuti") +
      ". Pengajuan masuk dari bagian Kerja Sama di halaman pendaftaran."),

    tampil.length === 0
      ? React.createElement("p", { className: "dm-kosong" }, "Belum ada pengajuan pada saringan ini.")
      : React.createElement("div", { className: "dm-ks-daftar" },
          tampil.map(r => React.createElement("div", {
            key: r.id,
            className: "dm-ks-baris" + (r.status === "baru" ? " dm-ks-baru" : "")
          },
            React.createElement("div", { className: "dm-ks-utama" },
              React.createElement("b", null, r.institusi),
              React.createElement("span", { className: "dm-ks-waktu" },
                new Date(r.dibuat_pada).toLocaleString("id-ID", { dateStyle: "medium", timeStyle: "short" })),
              React.createElement("p", { className: "dm-ks-pic" },
                r.pic_nama + (r.pic_jabatan ? " · " + r.pic_jabatan : "") + (r.kota ? " · " + r.kota : "")),
              React.createElement("p", { className: "dm-ks-kontak" },
                r.whatsapp + (r.email ? " · " + r.email : "")),
              React.createElement("p", { className: "dm-ks-butuh" },
                ((r.program || []).length ? (r.program || []).join(", ") : "program belum ditentukan") +
                " — " + (KS_BENTUK_LABEL[r.bentuk] || r.bentuk)),
              React.createElement("p", { className: "dm-ks-butuh" },
                (r.jumlah_peserta || "jumlah belum disebut") + " · " + (r.waktu_rencana || "waktu belum disebut")),
              r.perlu_penawaran ? React.createElement("span", { className: "dm-ks-tanda" }, "Minta surat penawaran + RAB") : null,
              r.catatan ? React.createElement("p", { className: "dm-ks-catatan" }, "“" + r.catatan + "”") : null,
              r.catatan_internal ? React.createElement("p", { className: "dm-ks-internal" }, "Catatan tim: " + r.catatan_internal) : null
            ),
            React.createElement("div", { className: "dm-ks-aksi" },
              React.createElement("select", {
                className: "dm-input", value: r.status,
                onChange: e => ubahStatus(r, e.target.value)
              }, KS_STATUS.map(s => React.createElement("option", { key: s[0], value: s[0] }, s[1]))),
              React.createElement("button", { className: "dm-btn", onClick: () => bukaWA(r) }, "Buka WhatsApp"),
              React.createElement("button", {
                className: "dm-btn-line",
                onClick: () => setCatat({ id: r.id, isi: r.catatan_internal || "", institusi: r.institusi })
              }, "Catatan tim")
            )
          ))
        ),

    catat ? React.createElement("div", { className: "dm-modal-latar", onClick: () => setCatat(null) },
      React.createElement("div", { className: "dm-modal", onClick: e => e.stopPropagation() },
        React.createElement("h3", null, "Catatan tim — " + catat.institusi),
        React.createElement("p", { className: "dm-hint" }, "Hanya dibaca tim DEWAMEDIK, tidak terlihat oleh pemohon."),
        React.createElement("textarea", {
          className: "dm-input", style: { minHeight: "120px" }, value: catat.isi,
          onChange: e => setCatat({ ...catat, isi: e.target.value }),
          placeholder: "Contoh: sudah dihubungi 9 Sep, minta penawaran untuk 2 angkatan, tunggu disposisi direktur."
        }),
        React.createElement("div", { className: "dm-row dm-row-akhir" },
          React.createElement("button", { className: "dm-btn", onClick: simpanCatatan }, "Simpan"),
          React.createElement("button", { className: "dm-btn-line", onClick: () => setCatat(null) }, "Batal")
        )
      )
    ) : null
  );
}

function TabKarir({
  beriTahu
}) {
  const [baris, setBaris] = useState(null);
  const [edit, setEdit] = useState(null);
  const kosong = {
    posisi: "",
    penempatan: "Kantor DEWAMEDIK, Tangerang",
    tipe: "Penuh waktu",
    ringkasan: "",
    syarat: "",
    link_daftar: "",
    batas_lamar: "",
    aktif: true,
    urutan: 0
  };
  async function muat() {
    const {
      data,
      error
    } = await SB.from("lowongan").select("*").order("urutan");
    if (error) return beriTahu("Gagal memuat: " + error.message);
    setBaris(data || []);
  }
  useEffect(() => {
    muat();
  }, []);
  async function simpan() {
    if (!edit.posisi.trim()) return beriTahu("Nama posisi wajib diisi.");
    const isi = {
      posisi: edit.posisi.trim(),
      penempatan: edit.penempatan,
      tipe: edit.tipe,
      ringkasan: edit.ringkasan,
      syarat: edit.syarat,
      link_daftar: edit.link_daftar ? edit.link_daftar.trim() : null,
      batas_lamar: edit.batas_lamar || null,
      aktif: edit.aktif,
      urutan: Number(edit.urutan) || 0
    };
    const {
      error
    } = edit.id ? await SB.from("lowongan").update(isi).eq("id", edit.id) : await SB.from("lowongan").insert(isi);
    if (error) return beriTahu("Gagal menyimpan: " + error.message);
    setEdit(null);
    beriTahu("Tersimpan.");
    muat();
  }
  async function hapus(l) {
    if (!window.confirm(`Hapus lowongan ${l.posisi}?`)) return;
    const {
      error
    } = await SB.from("lowongan").delete().eq("id", l.id);
    if (error) return beriTahu("Gagal menghapus: " + error.message);
    beriTahu("Terhapus.");
    muat();
  }
  if (!baris) return /*#__PURE__*/React.createElement("p", {
    className: "dm-load"
  }, "Memuat lowongan…");
  return /*#__PURE__*/React.createElement("section", {
    className: "dm-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dm-toolbar"
  }, /*#__PURE__*/React.createElement("h3", null, "Berkarir Bersama Dewa Medik"), /*#__PURE__*/React.createElement("button", {
    className: "dm-btn",
    onClick: () => setEdit(kosong)
  }, "Buka lowongan")), /*#__PURE__*/React.createElement("p", {
    className: "dm-hint",
    style: {
      marginBottom: 12
    }
  }, "Selama tidak ada lowongan yang aktif, bagian karir otomatis tersembunyi dari halaman pendaftaran. Lowongan yang sudah lewat batas lamarannya juga hilang dengan sendirinya."), baris.length === 0 ? /*#__PURE__*/React.createElement("p", {
    className: "dm-kosong"
  }, "Belum ada lowongan. Bagian karir sedang tidak tampil di halaman peserta.") : /*#__PURE__*/React.createElement("div", {
    className: "dm-tabel-bungkus"
  }, /*#__PURE__*/React.createElement("table", {
    className: "dm-tabel"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Posisi"), /*#__PURE__*/React.createElement("th", null, "Penempatan"), /*#__PURE__*/React.createElement("th", null, "Batas lamar"), /*#__PURE__*/React.createElement("th", null, "Urutan"), /*#__PURE__*/React.createElement("th", null, "Status"), /*#__PURE__*/React.createElement("th", null))), /*#__PURE__*/React.createElement("tbody", null, baris.map(l => /*#__PURE__*/React.createElement("tr", {
    key: l.id
  }, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("b", null, l.posisi), /*#__PURE__*/React.createElement("p", {
    className: "dm-hint"
  }, l.tipe)), /*#__PURE__*/React.createElement("td", null, l.penempatan || "—"), /*#__PURE__*/React.createElement("td", null, l.batas_lamar ? tgl(l.batas_lamar) : "Sampai terisi"), /*#__PURE__*/React.createElement("td", {
    className: "dm-mono"
  }, l.urutan), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Badge, {
    status: l.aktif ? "buka" : "tutup"
  })), /*#__PURE__*/React.createElement("td", {
    className: "dm-aksi"
  }, /*#__PURE__*/React.createElement("button", {
    className: "dm-btn-ghost",
    onClick: () => setEdit({
      ...l,
      batas_lamar: l.batas_lamar || ""
    })
  }, "Ubah"), /*#__PURE__*/React.createElement("button", {
    className: "dm-btn-ghost",
    onClick: () => hapus(l)
  }, "Hapus"))))))), edit ? /*#__PURE__*/React.createElement(Modal, {
    judul: edit.id ? "Ubah lowongan" : "Buka lowongan",
    onTutup: () => setEdit(null)
  }, /*#__PURE__*/React.createElement("div", {
    className: "dm-grid2"
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Posisi"
  }, /*#__PURE__*/React.createElement("input", {
    className: "dm-input",
    value: edit.posisi,
    onChange: e => setEdit({
      ...edit,
      posisi: e.target.value
    }),
    placeholder: "Instruktur BTCLS"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Penempatan"
  }, /*#__PURE__*/React.createElement("input", {
    className: "dm-input",
    value: edit.penempatan || "",
    onChange: e => setEdit({
      ...edit,
      penempatan: e.target.value
    })
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Tipe"
  }, /*#__PURE__*/React.createElement("select", {
    className: "dm-input",
    value: edit.tipe || "Penuh waktu",
    onChange: e => setEdit({
      ...edit,
      tipe: e.target.value
    })
  }, ["Penuh waktu", "Paruh waktu", "Kontrak", "Freelance", "Magang"].map(t => /*#__PURE__*/React.createElement("option", {
    key: t
  }, t)))), /*#__PURE__*/React.createElement(Field, {
    label: "Batas lamaran",
    hint: "Kosongkan bila dibuka sampai terisi."
  }, /*#__PURE__*/React.createElement("input", {
    className: "dm-input",
    type: "date",
    value: edit.batas_lamar || "",
    onChange: e => setEdit({
      ...edit,
      batas_lamar: e.target.value
    })
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Urutan tampil",
    hint: "Angka lebih kecil tampil lebih dulu."
  }, /*#__PURE__*/React.createElement("input", {
    className: "dm-input dm-mono",
    type: "number",
    value: edit.urutan,
    onChange: e => setEdit({
      ...edit,
      urutan: e.target.value
    })
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Link pendaftaran",
    hint: "Google Form atau tautan lain. Kosongkan bila lamaran lewat email."
  }, /*#__PURE__*/React.createElement("input", {
    className: "dm-input",
    value: edit.link_daftar || "",
    onChange: e => setEdit({
      ...edit,
      link_daftar: e.target.value
    }),
    placeholder: "https://forms.gle/..."
  }))), /*#__PURE__*/React.createElement(Field, {
    label: "Ringkasan pekerjaan"
  }, /*#__PURE__*/React.createElement("textarea", {
    className: "dm-textarea dm-textarea-besar",
    rows: 3,
    value: edit.ringkasan || "",
    onChange: e => setEdit({
      ...edit,
      ringkasan: e.target.value
    }),
    placeholder: "Memfasilitasi pelatihan BTCLS dan ACLS di kelas dan simulasi."
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Persyaratan"
  }, /*#__PURE__*/React.createElement("textarea", {
    className: "dm-textarea dm-textarea-besar",
    rows: 3,
    value: edit.syarat || "",
    onChange: e => setEdit({
      ...edit,
      syarat: e.target.value
    }),
    placeholder: "Ners, pengalaman minimal 2 tahun, memiliki sertifikat BTCLS aktif."
  })), /*#__PURE__*/React.createElement("div", {
    className: "dm-cek-list"
  }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: edit.aktif,
    onChange: e => setEdit({
      ...edit,
      aktif: e.target.checked
    })
  }), "Tampilkan di halaman pendaftaran")), /*#__PURE__*/React.createElement("div", {
    className: "dm-row dm-row-akhir"
  }, /*#__PURE__*/React.createElement("button", {
    className: "dm-btn",
    onClick: simpan
  }, "Simpan lowongan"), /*#__PURE__*/React.createElement("button", {
    className: "dm-btn-line",
    onClick: () => setEdit(null)
  }, "Batal"))) : null);
}
function TabSetelan({
  beriTahu
}) {
  const [s, setS] = useState(null);
  useEffect(() => {
    SB.from("pengaturan").select("*").eq("id", 1).single().then(({
      data
    }) => setS(data));
  }, []);
  async function simpan() {
    const {
      error
    } = await SB.from("pengaturan").update({
      rek_bank: s.rek_bank,
      rek_nomor: s.rek_nomor,
      rek_atas_nama: s.rek_atas_nama,
      wa_nama: s.wa_nama,
      wa_nomor: s.wa_nomor,
      email_admin: s.email_admin,
      alamat: s.alamat,
      akreditasi: s.akreditasi,
      dp_nominal: Number(s.dp_nominal) || 0,
      dibarui: new Date().toISOString()
    }).eq("id", 1);
    beriTahu(error ? "Gagal menyimpan: " + error.message : "Tersimpan.");
  }
  if (!s) return /*#__PURE__*/React.createElement("p", {
    className: "dm-load"
  }, "Memuat pengaturan…");
  return /*#__PURE__*/React.createElement("section", {
    className: "dm-card"
  }, /*#__PURE__*/React.createElement("h3", null, "Pengaturan"), /*#__PURE__*/React.createElement("div", {
    className: "dm-grid2"
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Nama bank"
  }, /*#__PURE__*/React.createElement("input", {
    className: "dm-input",
    value: s.rek_bank,
    onChange: e => setS({
      ...s,
      rek_bank: e.target.value
    })
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Nomor rekening"
  }, /*#__PURE__*/React.createElement("input", {
    className: "dm-input dm-mono",
    value: s.rek_nomor,
    onChange: e => setS({
      ...s,
      rek_nomor: e.target.value
    })
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Atas nama"
  }, /*#__PURE__*/React.createElement("input", {
    className: "dm-input",
    value: s.rek_atas_nama,
    onChange: e => setS({
      ...s,
      rek_atas_nama: e.target.value
    })
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Nama admin konfirmasi"
  }, /*#__PURE__*/React.createElement("input", {
    className: "dm-input",
    value: s.wa_nama,
    onChange: e => setS({
      ...s,
      wa_nama: e.target.value
    })
  })), /*#__PURE__*/React.createElement(Field, {
    label: "WhatsApp admin",
    hint: "Format 62..., contoh 6282123486576."
  }, /*#__PURE__*/React.createElement("input", {
    className: "dm-input dm-mono",
    value: s.wa_nomor,
    onChange: e => setS({
      ...s,
      wa_nomor: e.target.value
    })
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Email admin"
  }, /*#__PURE__*/React.createElement("input", {
    className: "dm-input",
    value: s.email_admin,
    onChange: e => setS({
      ...s,
      email_admin: e.target.value
    })
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Uang muka booking seat (Rp)",
    hint: "Nominal yang ditransfer peserta saat memilih Booking seat."
  }, /*#__PURE__*/React.createElement("input", {
    className: "dm-input dm-mono",
    type: "number",
    step: "50000",
    value: s.dp_nominal || 0,
    onChange: e => setS({
      ...s,
      dp_nominal: e.target.value
    })
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Alamat kantor"
  }, /*#__PURE__*/React.createElement("input", {
    className: "dm-input",
    value: s.alamat || "",
    onChange: e => setS({
      ...s,
      alamat: e.target.value
    })
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Nomor akreditasi Kemenkes",
    hint: "Tampil di bagian atas halaman pendaftaran."
  }, /*#__PURE__*/React.createElement("input", {
    className: "dm-input",
    value: s.akreditasi || "",
    onChange: e => setS({
      ...s,
      akreditasi: e.target.value
    })
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dm-row dm-row-akhir"
  }, /*#__PURE__*/React.createElement("button", {
    className: "dm-btn",
    onClick: simpan
  }, "Simpan pengaturan")));
}
ReactDOM.createRoot(document.getElementById("akar")).render(React.createElement(App));
