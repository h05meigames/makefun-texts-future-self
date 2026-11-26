// makefun-texts-future-self — Texts From Your Future Self
// Slug: u-motasimfuad-texts-from-your-future-self-dd44595e
//
// DRAF v1 (DITOLAK):
//   "Hey, it's you from 2046. Good news: we finally fixed the code. Bad news:
//   future you is still debugging it at 3am."
//   (117 karakter)
//   Analisis cacat: ini lelucon generik tentang "masih debugging / masih
//   begadang" — sudut yang sudah usang dan persis klise yang juri minta
//   dihindari ("still tired"). Tidak ada detail spesifik yang hanya bisa
//   datang dari hidup si pengirim: "the code" bisa milik siapa saja, dan
//   punchline-nya ("still debugging") adalah keluhan, bukan pengakuan.
//   Pesan dari masa depan harus terasa seperti dikirim ke satu orang yang
//   spesifik; draf ini bisa dikirim ke siapa pun dan tetap (tidak) lucu.
//
// REVISI v2 (satu ketukan baru):
//   Cacat pada draf v1 adalah tidak adanya adegan: tidak ada yang bisa
//   dibayangkan juri. Perbaikan: ganti keluhan abstrak dengan satu adegan
//   konkret dan memalukan — dokter di tahun 2036 membacakan riwayat pencarian
//   Google si pengirim di depan anak-anaknya. Twist-nya mendarat di kata
//   terakhir adegan itu ("in front of your kids"), dan perintah panik
//   "Delete it all. Now." adalah suara diri masa depan yang asli: ia sudah
//   mengalami konsekuensinya dan tidak sempat bercanda panjang. Sudutnya
//   segar (bukan bangkrut, bukan lelah), detailnya spesifik (Googling gejala,
//   2036, anak-anak), dan punchline tiba cepat.
//
// REVISI v3 (punchline dikubur + anak jadi penonton pasif):
//   Cacat nyata v2 ada dua, dan keduanya soal penempatan punch. Pertama,
//   "in front of your kids" menjadikan anak-anak penonton pasif di pinggir
//   adegan — mereka kebetulan hadir, bukan sasaran penghinaan. Padahal yang
//   memalukan adalah dokter membacakan riwayat itu KEPADA mereka. Kedua,
//   punch v2 ("...in front of your kids") dikubur: sesudahnya masih ada dua
//   fragmen ("Delete it all. Now.") yang menginjak tawa — lelucon satu baris
//   harus berakhir tepat di kata tertawanya, bukan di epilog perintah.
//   Perbaikan: anak-anak jadi audiens langsung ("to your kids") di adegan
//   konkret ("over dinner"), dan perintah panik dihapus — suara diri masa
//   depan sudah diwakili pembuka "Future you here", jadi baris berakhir
//   tepat di kata punch "kids". Hasilnya lebih pendek (127 vs 145 karakter)
//   dan tawa terakhir jatuh di tempat yang benar.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Future you here. Stop Googling your symptoms — in 2036 your doctor reads your search history out loud over dinner to your kids.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");

console.log(ENTRY);
console.log(`characters: ${ENTRY.length}`);
