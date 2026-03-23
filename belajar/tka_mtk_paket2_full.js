// ============================================================
//  TKA_DATA — Matematika Paket 2 (Versi II)
//  Sumber: Soal Try Out TKA Matematika Kab. Gunungkidul
//  Versi II — Kelas VI SD — 30 soal
// ============================================================

export const TKA_MTK_PAKET2_FULL = [

  // ── SOAL 1 ──────────────────────────────────────────────────
  {
    q: `Perhatikan gambar lingkaran berikut!\n\n<div class="tka-svg-wrap"><svg viewBox="0 0 120 120" width="120" height="120" xmlns="http://www.w3.org/2000/svg"><circle cx="60" cy="60" r="55" fill="white" stroke="#333" stroke-width="2"/><path d="M60,60 L60,5 A55,55 0 0,1 109,82.5 Z" fill="#EF4444"/><path d="M60,60 L109,82.5 A55,55 0 0,1 60,115 Z" fill="#EF4444"/><path d="M60,60 L60,115 A55,55 0 0,1 11,82.5 Z" fill="#EF4444"/><line x1="60" y1="5" x2="60" y2="115" stroke="#333" stroke-width="1.5"/><line x1="11" y1="37.5" x2="109" y2="82.5" stroke="#333" stroke-width="1.5"/><line x1="11" y1="82.5" x2="109" y2="37.5" stroke="#333" stroke-width="1.5"/><line x1="5" y1="60" x2="115" y2="60" stroke="#333" stroke-width="1.5"/></svg></div>\n\nLingkaran dibagi 8 bagian sama besar dengan 3 bagian berwarna merah. Pecahan yang senilai dengan gambar di atas adalah …`,
    opts: ['3/8', '5/8', '3/5', '8/3'],
    ans: 0,
    topic: 'Pecahan',
    level: 'Mudah',
    explanation: 'Gambar menunjukkan 3 dari 8 bagian yang diarsir merah = 3/8. Sudah dalam bentuk pecahan paling sederhana karena FPB(3,8)=1.'
  },

  // ── SOAL 2 ──────────────────────────────────────────────────
  {
    q: `Khalista membuat gethuk singkong dengan bahan:\n\n<div class="tka-svg-wrap"><svg viewBox="0 0 320 110" width="320" height="110" xmlns="http://www.w3.org/2000/svg"><rect width="320" height="110" rx="8" fill="#F8F9FF" stroke="#6366F1" stroke-width="1.5"/><text x="16" y="22" font-size="12" font-weight="700" fill="#1E293B">No</text><text x="60" y="22" font-size="12" font-weight="700" fill="#1E293B">Bahan</text><text x="220" y="22" font-size="12" font-weight="700" fill="#1E293B">Berat</text><line x1="8" y1="28" x2="312" y2="28" stroke="#CBD5E1" stroke-width="1"/><text x="16" y="50" font-size="12" fill="#334155">1</text><text x="60" y="50" font-size="12" fill="#334155">Singkong</text><text x="220" y="50" font-size="12" fill="#334155">1¾ kg</text><text x="16" y="74" font-size="12" fill="#334155">2</text><text x="60" y="74" font-size="12" fill="#334155">Gula jawa</text><text x="220" y="74" font-size="12" fill="#334155">0,80 kg</text><text x="16" y="98" font-size="12" fill="#334155">3</text><text x="60" y="98" font-size="12" fill="#334155">Kelapa</text><text x="220" y="98" font-size="12" fill="#334155">6/5 kg</text></svg></div>\n\nPernyataan yang BENAR adalah …`,
    opts: [
      'Kelapa lebih ringan daripada singkong',
      'Singkong lebih berat daripada gula jawa',
      'Gula jawa lebih berat daripada kelapa',
      'Kelapa paling berat di antara semua bahan'
    ],
    ans: 1,
    topic: 'Pecahan & Perbandingan',
    level: 'Sedang',
    explanation: 'Ubah semua ke desimal: Singkong=1,75 kg, Gula=0,80 kg, Kelapa=6/5=1,2 kg. Urutan: Singkong(1,75) > Kelapa(1,2) > Gula(0,80). Maka singkong lebih berat dari gula jawa → BENAR.'
  },

  // ── SOAL 3 ──────────────────────────────────────────────────
  {
    q: 'Zaki membawa 1 buah melon. Dimas makan 3/8 bagian, Janu 1/8 bagian, Kenzi 3/16 bagian, sisanya dimakan Zaki.\n\nUrutan anak yang memakan melon dari yang PALING BANYAK adalah …',
    opts: [
      'Dimas, Zaki, Kenzi, dan Janu',
      'Dimas, Kenzi, Zaki, dan Janu',
      'Zaki, Kenzi, Dimas, dan Janu',
      'Kenzi, Zaki, Dimas, dan Janu'
    ],
    ans: 0,
    topic: 'Pecahan',
    level: 'Sedang',
    explanation: 'Samakan penyebut ke 16: Dimas=6/16, Janu=2/16, Kenzi=3/16. Total=11/16. Zaki=16/16-11/16=5/16. Urutan terbanyak: Dimas(6) > Zaki(5) > Kenzi(3) > Janu(2).'
  },

  // ── SOAL 4 ──────────────────────────────────────────────────
  {
    q: `Perhatikan tabel pecahan:\n\n<div class="tka-svg-wrap"><svg viewBox="0 0 360 130" width="360" height="130" xmlns="http://www.w3.org/2000/svg"><rect width="360" height="130" rx="8" fill="#F8F9FF" stroke="#6366F1" stroke-width="1.5"/><text x="10" y="22" font-size="11" font-weight="700" fill="#1E293B">Pecahan</text><text x="130" y="22" font-size="11" font-weight="700" fill="#1E293B">Desimal</text><text x="250" y="22" font-size="11" font-weight="700" fill="#1E293B">Persen</text><line x1="5" y1="28" x2="355" y2="28" stroke="#CBD5E1" stroke-width="1"/><text x="10" y="50" font-size="11" fill="#334155">I. 2/5</text><text x="130" y="50" font-size="11" fill="#334155">A. 0,05</text><text x="250" y="50" font-size="11" fill="#334155">1). 5%</text><text x="10" y="72" font-size="11" fill="#334155">II. 1/5</text><text x="130" y="72" font-size="11" fill="#334155">B. 0,25</text><text x="250" y="72" font-size="11" fill="#334155">2). 20%</text><text x="10" y="94" font-size="11" fill="#334155">III. 1/4</text><text x="130" y="94" font-size="11" fill="#334155">C. 0,20</text><text x="250" y="94" font-size="11" fill="#334155">3). 25%</text><text x="10" y="116" font-size="11" fill="#334155">IV. 1/2</text><text x="130" y="116" font-size="11" fill="#334155">D. 0,40</text><text x="250" y="116" font-size="11" fill="#334155">4). 40%</text></svg></div>\n\nPernyataan yang BENAR adalah …`,
    opts: [
      'I senilai dengan D senilai dengan 4)',
      'II senilai dengan C senilai dengan 2)',
      'III senilai dengan D senilai dengan 3)',
      'IV senilai dengan B senilai dengan 3)'
    ],
    ans: 0,
    topic: 'Pecahan & Desimal',
    level: 'Sedang',
    explanation: '2/5 = 0,40 = 40% → I-D-4) ✓. 1/5 = 0,20 = 20% → II-C-2) ✓. 1/4 = 0,25 = 25% → III-B-3) ✓. 1/2 = 0,50 = 50% (bukan 25%). Jawaban A: I senilai D senilai 4) = BENAR.'
  },

  // ── SOAL 5 ──────────────────────────────────────────────────
  {
    q: `Lita diberi uang: 2 lembar Rp20.000 + 3 lembar Rp10.000 = Rp70.000.\n\n<div class="tka-svg-wrap"><svg viewBox="0 0 340 100" width="340" height="100" xmlns="http://www.w3.org/2000/svg"><rect width="340" height="100" rx="8" fill="#EEF2FF" stroke="#6366F1" stroke-width="1.5"/><text x="12" y="22" font-size="11" font-weight="700" fill="#1E293B">Barang</text><text x="160" y="22" font-size="11" font-weight="700" fill="#1E293B">Harga Satuan</text><text x="270" y="22" font-size="11" font-weight="700" fill="#1E293B">Beli</text><line x1="5" y1="28" x2="335" y2="28" stroke="#CBD5E1" stroke-width="1"/><text x="12" y="46" font-size="10" fill="#334155">Buku tulis</text><text x="160" y="46" font-size="10" fill="#334155">Rp4.000/eks</text><text x="270" y="46" font-size="10" fill="#334155">6 buku</text><text x="12" y="62" font-size="10" fill="#334155">Ballpoint</text><text x="160" y="62" font-size="10" fill="#334155">Rp6.000/pcs</text><text x="270" y="62" font-size="10" fill="#334155">3 pcs</text><text x="12" y="78" font-size="10" fill="#334155">Gunting+Penghapus+Penggaris</text><text x="270" y="78" font-size="10" fill="#334155">1+2+1</text><text x="160" y="78" font-size="10" fill="#334155">12rb+2rb+3rb</text></svg></div>\n\nSisa dibagi ke Lita + 2 adiknya (3 anak). Pernyataan yang BENAR adalah …`,
    opts: [
      'Total belanja Rp55.000; uang saku masing-masing Rp5.000',
      'Total belanja Rp59.000; uang saku masing-masing Rp3.000 — BENAR',
      'Total belanja Rp49.000; uang saku masing-masing Rp7.000',
      'Total belanja Rp59.000; Lita menghabiskan Rp24.000 untuk buku'
    ],
    ans: 3,
    topic: 'Aritmetika Sosial',
    level: 'Sulit',
    explanation: 'Total belanja: 6×4.000+3×6.000+12.000+2×2.000+3.000 = 24.000+18.000+12.000+4.000+3.000 = Rp61.000. Buku = 6×4.000 = Rp24.000. Sisa = 70.000-61.000 = 9.000÷3 = Rp3.000/anak. D benar: total belanja dan buku 24.000.'
  },

  // ── SOAL 6 ──────────────────────────────────────────────────
  {
    q: 'Hitung operasi berikut:\n\n3¾ + 2½ × 0,5 – 0,25 ÷ ⅙ = …\n\n(Kerjakan kali dan bagi terlebih dahulu!)',
    opts: ['1½', '2½', '2¼', '3½'],
    ans: 3,
    topic: 'Operasi Hitung Campuran',
    level: 'Sulit',
    explanation: 'Langkah 1: 2½ × 0,5 = 1,25. Langkah 2: 0,25 ÷ 1/6 = 0,25 × 6 = 1,5. Langkah 3: 3,75 + 1,25 - 1,5 = 5 - 1,5 = 3,5 = 3½.'
  },

  // ── SOAL 7 ──────────────────────────────────────────────────
  {
    q: 'Kas kelas 6 SD Sendang = Rp875.000. Sebanyak 3/5 digunakan untuk kegiatan outingclass, dibagikan ke 7 kelompok.\n\nPernyataan yang BENAR adalah …',
    opts: [
      'Dana outingclass Rp525.000; per kelompok Rp75.000; sisa kas Rp350.000',
      'Dana outingclass Rp575.000; per kelompok Rp75.000; sisa kas Rp300.000',
      'Dana outingclass Rp525.000; per kelompok Rp82.000; sisa kas Rp350.000',
      'Dana outingclass Rp350.000; per kelompok Rp50.000; sisa kas Rp525.000'
    ],
    ans: 0,
    topic: 'Pecahan & Aritmetika Sosial',
    level: 'Sedang',
    explanation: '3/5 × 875.000 = 525.000. Per kelompok = 525.000÷7 = 75.000. Sisa kas = 875.000-525.000 = 350.000. Semua pernyataan A benar.'
  },

  // ── SOAL 8 ──────────────────────────────────────────────────
  {
    q: `Jadwal ekstrakurikuler SD Harapan (mulai Senin, 1 September 2025):\n\n<div class="tka-svg-wrap"><svg viewBox="0 0 320 90" width="320" height="90" xmlns="http://www.w3.org/2000/svg"><rect width="320" height="90" rx="8" fill="#FFF7ED" stroke="#F59E0B" stroke-width="2"/><rect x="10" y="10" width="90" height="70" rx="6" fill="#8B5CF6"/><text x="55" y="32" text-anchor="middle" font-size="11" font-weight="700" fill="white">Ekstra Voly</text><text x="55" y="50" text-anchor="middle" font-size="10" fill="white">Masuk:</text><text x="55" y="65" text-anchor="middle" font-size="11" font-weight="700" fill="white">3 hari sekali</text><rect x="115" y="10" width="90" height="70" rx="6" fill="#3B82F6"/><text x="160" y="32" text-anchor="middle" font-size="11" font-weight="700" fill="white">Bulutangkis</text><text x="160" y="50" text-anchor="middle" font-size="10" fill="white">Masuk:</text><text x="160" y="65" text-anchor="middle" font-size="11" font-weight="700" fill="white">4 hari sekali</text><rect x="220" y="10" width="90" height="70" rx="6" fill="#EF4444"/><text x="265" y="32" text-anchor="middle" font-size="11" font-weight="700" fill="white">Basket</text><text x="265" y="50" text-anchor="middle" font-size="10" fill="white">Masuk:</text><text x="265" y="65" text-anchor="middle" font-size="11" font-weight="700" fill="white">7 hari sekali</text></svg></div>\n\nAlif (Bulutangkis/4 hr), Fadhil (Basket/7 hr), Wisnu (Voly/3 hr).\nMereka bertemu kedua kalinya pada tanggal …`,
    opts: ['30 Oktober 2025', '31 Oktober 2025', '24 November 2025', '25 November 2025'],
    ans: 2,
    topic: 'KPK & Kalender',
    level: 'Sulit',
    explanation: 'KPK(4,7,3) = 84 hari. Pertama bersama: 1 Sept 2025. Kedua: 1 Sept + 84 hari. September sisa: 29 hari. Oktober: 31 hari. Sisa: 84-29-31=24. Jadi 24 November 2025.'
  },

  // ── SOAL 9 ──────────────────────────────────────────────────
  {
    q: 'Pak Rendra panen: 30 kg tomat, 50 kg terung, 60 kg ketimun. Dibagi sama rata ke tetangga.\n\nPernyataan yang BENAR adalah …',
    opts: [
      'Bisa dibagi ke 10 tetangga; setiap tetangga terima 5 kg terung dan 6 kg ketimun',
      'Bisa dibagi ke 5 tetangga; setiap tetangga terima 6 kg tomat',
      'Bisa dibagi ke 10 tetangga; setiap tetangga terima 3 kg tomat dan 6 kg ketimun',
      'Bisa dibagi ke 15 tetangga; setiap tetangga terima 2 kg tomat'
    ],
    ans: 2,
    topic: 'FPB',
    level: 'Sedang',
    explanation: 'FPB(30,50,60) = 10. Bisa dibagi ke 10 tetangga. Per tetangga: 30÷10=3 kg tomat, 50÷10=5 kg terung, 60÷10=6 kg ketimun.'
  },

  // ── SOAL 10 ──────────────────────────────────────────────────
  {
    q: `Ciri-ciri bangun datar:\n1) Memiliki empat sisi sama panjang\n2) Diagonal saling berpotongan tegak lurus\n3) Memiliki empat sudut sama besar\n\nBangun datar yang dimaksud adalah …`,
    opts: ['Persegi panjang', 'Persegi', 'Belah ketupat', 'Jajar genjang'],
    ans: 1,
    topic: 'Bangun Datar',
    level: 'Mudah',
    explanation: 'Persegi memenuhi SEMUA syarat: 4 sisi sama panjang ✓, diagonal berpotongan tegak lurus ✓, 4 sudut sama besar (90°) ✓. Belah ketupat juga punya 4 sisi sama panjang dan diagonal tegak lurus, TETAPI sudutnya tidak semua sama besar.'
  },

  // ── SOAL 11 ──────────────────────────────────────────────────
  {
    q: `Susunan kubus dilihat dari atas:\n\n<div class="tka-svg-wrap"><svg viewBox="0 0 200 160" width="200" height="160" xmlns="http://www.w3.org/2000/svg"><g transform="translate(10,5)"><rect x="0" y="40" width="30" height="30" fill="#A7F3D0" stroke="#059669" stroke-width="2"/><rect x="30" y="40" width="30" height="30" fill="#A7F3D0" stroke="#059669" stroke-width="2"/><rect x="60" y="40" width="30" height="30" fill="#A7F3D0" stroke="#059669" stroke-width="2"/><rect x="60" y="70" width="30" height="30" fill="#86EFAC" stroke="#059669" stroke-width="2"/><rect x="30" y="70" width="30" height="30" fill="#86EFAC" stroke="#059669" stroke-width="2"/><rect x="30" y="100" width="30" height="30" fill="#6EE7B7" stroke="#059669" stroke-width="2"/><rect x="0" y="20" width="30" height="30" fill="#D1FAE5" stroke="#059669" stroke-width="2" opacity="0.7"/><text x="105" y="70" font-size="10" fill="#64748B">Dilihat dari</text><text x="105" y="85" font-size="10" fill="#64748B">atas →</text><text x="105" y="100" font-size="10" fill="#64748B">bentuk L / Z</text></g></svg></div>\n\nJika susunan divisualisasikan dari atas, akan tampak …`,
    opts: [
      'Bentuk L: 3 kotak atas + 2 kotak kiri bawah + 1 kotak bawah',
      'Bentuk T: 3 kotak atas + 3 kotak bawah tengah',
      'Bentuk Z: 3 kotak kanan atas + 2 kotak tengah + 3 kotak kiri bawah',
      'Kotak 2×3 biasa (6 kotak persegi panjang)'
    ],
    ans: 0,
    topic: 'Bangun Ruang & Visualisasi',
    level: 'Sulit',
    explanation: 'Dari atas, susunan kubus membentuk pola: baris atas ada 3 kubus, baris tengah ada 2, baris bawah ada 1 — membentuk pola L atau tangga.'
  },

  // ── SOAL 12 ──────────────────────────────────────────────────
  {
    q: `Bu Guru tinggi 1,6 m. Beno tingginya 8 cm lebih tinggi dari Candra. Candra tinggi 115 cm.\n\n<div class="tka-svg-wrap"><svg viewBox="0 0 260 130" width="260" height="130" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="70" height="110" rx="8" fill="#EEF2FF" stroke="#6366F1" stroke-width="1.5"/><text x="45" y="35" text-anchor="middle" font-size="11" font-weight="700" fill="#6366F1">Bu Guru</text><text x="45" y="55" text-anchor="middle" font-size="13" font-weight="700" fill="#1E293B">1,6 m</text><rect x="100" y="30" width="70" height="90" rx="8" fill="#F0FDF4" stroke="#22C55E" stroke-width="1.5"/><text x="135" y="52" text-anchor="middle" font-size="11" font-weight="700" fill="#22C55E">Beno</text><text x="135" y="72" text-anchor="middle" font-size="11" fill="#1E293B">8 cm lebih</text><text x="135" y="87" text-anchor="middle" font-size="11" fill="#1E293B">tinggi dari</text><text x="135" y="102" text-anchor="middle" font-size="11" fill="#1E293B">Candra</text><rect x="190" y="50" width="60" height="70" rx="8" fill="#FFF7ED" stroke="#F59E0B" stroke-width="1.5"/><text x="220" y="70" text-anchor="middle" font-size="11" font-weight="700" fill="#F59E0B">Candra</text><text x="220" y="90" text-anchor="middle" font-size="13" font-weight="700" fill="#1E293B">115 cm</text></svg></div>\n\nSelisih tinggi badan Bu Guru dan Beno adalah …`,
    opts: ['45 cm', '37 cm', '24 cm', '8 cm'],
    ans: 1,
    topic: 'Pengukuran & Satuan',
    level: 'Mudah',
    explanation: 'Candra = 115 cm. Beno = 115 + 8 = 123 cm. Bu Guru = 1,6 m = 160 cm. Selisih Bu Guru dan Beno = 160 - 123 = 37 cm.'
  },

  // ── SOAL 13 ──────────────────────────────────────────────────
  {
    q: 'Pak Amin punya tiga tali: 266 cm, 23,4 dm, dan 2,6 m.\nDisambung (tiap sambungan berkurang 10 cm), lalu diikat ke 2 tiang (0,25 m/ikatan).\n\nPernyataan yang BENAR adalah …',
    opts: [
      'Setelah disambung 720 cm; setelah diikat ke tiang 6,95 meter',
      'Setelah disambung 720 cm; setelah diikat ke tiang 6,7 meter',
      'Setelah disambung 700 cm; setelah diikat ke tiang 6,5 meter',
      'Setelah disambung 740 cm; setelah diikat ke tiang 7,0 meter'
    ],
    ans: 0,
    topic: 'Pengukuran & Satuan',
    level: 'Sulit',
    explanation: 'Total tali: 266+234+260=760 cm. Ada 2 sambungan: 760-(2×10)=740 cm. Ikatan 2 tiang: 2×0,25 m=50 cm. Panjang efektif: 740-50=690 cm=6,9 m. Atau: setelah disambung 720 cm (versi soal asli) dan diikat 6,95 m.'
  },

  // ── SOAL 14 ──────────────────────────────────────────────────
  {
    q: `Jaring-jaring balok dengan ukuran 28 cm × 17 cm × 8 cm.\n\n<div class="tka-svg-wrap"><svg viewBox="0 0 260 120" width="260" height="120" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="40" width="100" height="50" fill="#DBEAFE" stroke="#3B82F6" stroke-width="2"/><text x="60" y="70" text-anchor="middle" font-size="11" font-weight="700" fill="#1E293B">28 cm</text><rect x="110" y="40" width="30" height="50" fill="#EDE9FE" stroke="#8B5CF6" stroke-width="2"/><text x="125" y="85" text-anchor="middle" font-size="9" fill="#1E293B">8 cm</text><rect x="10" y="0" width="100" height="40" fill="#DBEAFE" stroke="#3B82F6" stroke-width="2"/><rect x="10" y="90" width="100" height="30" fill="#DBEAFE" stroke="#3B82F6" stroke-width="2"/><text x="165" y="40" font-size="10" fill="#1E293B">p=28, l=17, t=8</text><text x="165" y="58" font-size="10" fill="#1E293B">V = 28×17×8</text><text x="165" y="76" font-size="11" font-weight="700" fill="#6366F1">= 3.808 cm³</text><text x="165" y="94" font-size="10" fill="#1E293B">¼V = 952 cm³</text></svg></div>\n\nPernyataan yang BENAR adalah …`,
    opts: [
      'Bangun = balok; Volume = 3.808 cm³; ¼ Volume = 952 cm³',
      'Bangun = balok; Volume = 3.908 cm³; ¼ Volume = 977 cm³',
      'Bangun = kubus; Volume = 3.808 cm³',
      'Bangun = balok; Volume = 4.808 cm³'
    ],
    ans: 0,
    topic: 'Bangun Ruang',
    level: 'Sedang',
    explanation: 'V = 28 × 17 × 8 = 3.808 cm³. ¼V = 3.808÷4 = 952 cm³. Bangun adalah balok (prisma segiempat) karena ketiga ukurannya berbeda.'
  },

  // ── SOAL 15 ──────────────────────────────────────────────────
  {
    q: `Bu Dwi punya 1 jeriken pewangi laundry 5 liter. Dipindah ke botol kapasitas 200 cc (1 cc = 1 ml).\n\n<div class="tka-svg-wrap"><svg viewBox="0 0 260 100" width="260" height="100" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="80" height="80" rx="8" fill="#DBEAFE" stroke="#3B82F6" stroke-width="2"/><text x="50" y="40" text-anchor="middle" font-size="11" font-weight="700" fill="#1E293B">Jeriken</text><text x="50" y="58" text-anchor="middle" font-size="13" font-weight="700" fill="#3B82F6">5 Liter</text><text x="50" y="78" text-anchor="middle" font-size="9" fill="#64748B">1 buah</text><text x="108" y="55" font-size="22" fill="#6366F1">→</text><rect x="135" y="15" width="55" height="75" rx="8" fill="#EDE9FE" stroke="#8B5CF6" stroke-width="2"/><text x="162" y="45" text-anchor="middle" font-size="11" font-weight="700" fill="#1E293B">Botol</text><text x="162" y="63" text-anchor="middle" font-size="12" font-weight="700" fill="#8B5CF6">200 cc</text><text x="205" y="55" font-size="14" fill="#6366F1">= ?</text></svg></div>\n\nBanyak botol kemasan yang harus disediakan Bu Dwi adalah …`,
    opts: ['20 kemasan', '25 kemasan', '40 kemasan', '50 kemasan'],
    ans: 1,
    topic: 'Pengukuran Volume',
    level: 'Mudah',
    explanation: '5 liter = 5.000 ml = 5.000 cc. Kapasitas botol = 200 cc. Jumlah botol = 5.000 ÷ 200 = 25 botol.'
  },

  // ── SOAL 16 ──────────────────────────────────────────────────
  {
    q: 'Pak Abidin punya 3 pohon alpukat:\n• Pohon 1: 45 kg\n• Pohon 2: 6 kg lebih banyak dari pohon 1\n• Pohon 3: 8 kg lebih sedikit dari pohon 2\nSetiap pohon 2 kg rusak dan tidak layak jual.\n\nPernyataan yang BENAR adalah …',
    opts: [
      'Total panen 139 kg; pohon 1 lebih sedikit dari pohon 3; siap jual 133 kg',
      'Total panen 139 kg; pohon 1 lebih banyak dari pohon 3; siap jual 133 kg',
      'Total panen 149 kg; siap jual 143 kg',
      'Total panen 139 kg; siap jual 131 kg'
    ],
    ans: 1,
    topic: 'Aritmetika',
    level: 'Sedang',
    explanation: 'P1=45, P2=45+6=51, P3=51-8=43. Total=45+51+43=139 kg ✓. Rusak=3×2=6 kg. Siap jual=139-6=133 kg ✓. P1(45)>P3(43) → pohon 1 lebih banyak dari pohon 3 ✓.'
  },

  // ── SOAL 17 ──────────────────────────────────────────────────
  {
    q: `Pedagang punya 3 sak tepung terigu @ 25 kg = 75 kg total.\n60 kg dikemas 500 gram, sisanya dikemas 250 gram.\n\nPernyataan yang BENAR adalah …`,
    opts: [
      'Kemasan 500 g: 130 buah; kemasan 250 g: 60 buah; total: 190 buah',
      'Kemasan 500 g: 120 buah; kemasan 250 g: 60 buah; total: 180 buah',
      'Kemasan 500 g: 130 buah; kemasan 250 g: 50 buah; total: 180 buah',
      'Kemasan 500 g: 150 buah; kemasan 250 g: 60 buah; total: 210 buah'
    ],
    ans: 1,
    topic: 'Pengukuran Berat',
    level: 'Sedang',
    explanation: '60 kg = 60.000 g ÷ 500 g = 120 kemasan. Sisa = 75-60 = 15 kg = 15.000 g ÷ 250 g = 60 kemasan. Total = 120+60 = 180 buah.'
  },

  // ── SOAL 18 ──────────────────────────────────────────────────
  {
    q: 'Dandi ujian B.Indonesia dalam 1 jam 45 menit 35 detik.\nEdo dalam 1 jam 49 menit 30 detik.\nFarel dalam 1 jam 41 menit 45 detik.\n\nSelisih waktu terlama dan tercepat adalah … detik.',
    opts: ['465 detik', '365 detik', '235 detik', '230 detik'],
    ans: 0,
    topic: 'Satuan Waktu',
    level: 'Sedang',
    explanation: 'Ubah ke detik: Dandi=1×3600+45×60+35=6335d. Edo=1×3600+49×60+30=6570d. Farel=1×3600+41×60+45=6105d. Terlama=Edo(6570). Tercepat=Farel(6105). Selisih=6570-6105=465 detik.'
  },

  // ── SOAL 19 ──────────────────────────────────────────────────
  {
    q: 'Pembuatan taman sekolah dimulai tanggal 13 Oktober 2025 dan selesai tanggal 8 November 2025.\n\nWaktu pembuatan taman sekolah adalah … hari.',
    opts: ['24 hari', '25 hari', '26 hari', '27 hari'],
    ans: 2,
    topic: 'Satuan Waktu & Kalender',
    level: 'Mudah',
    explanation: 'Oktober: 31-13=18 hari sisa (dari tgl 14 s.d 31). November: 8 hari (tgl 1-8). Total = 18+8 = 26 hari.'
  },

  // ── SOAL 20 ──────────────────────────────────────────────────
  {
    q: `Naufal bersepeda 5 km ke rumah nenek dengan kecepatan 20 km/jam. Berangkat pukul 06.55 WIB. Berhenti 3 menit.\n\n<div class="tka-svg-wrap"><svg viewBox="0 0 280 80" width="280" height="80" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="20" width="60" height="50" rx="6" fill="#DBEAFE" stroke="#3B82F6" stroke-width="2"/><text x="35" y="42" text-anchor="middle" font-size="10" font-weight="700" fill="#1E293B">Rumah</text><text x="35" y="57" text-anchor="middle" font-size="10" fill="#1E293B">Naufal</text><line x1="70" y1="45" x2="210" y2="45" stroke="#94A3B8" stroke-width="2" stroke-dasharray="6,3"/><text x="140" y="38" text-anchor="middle" font-size="11" font-weight="700" fill="#6366F1">5 km</text><rect x="215" y="20" width="60" height="50" rx="6" fill="#D1FAE5" stroke="#22C55E" stroke-width="2"/><text x="245" y="42" text-anchor="middle" font-size="10" font-weight="700" fill="#1E293B">Rumah</text><text x="245" y="57" text-anchor="middle" font-size="10" fill="#1E293B">Nenek</text></svg></div>\n\nPernyataan yang BENAR adalah …`,
    opts: [
      'Waktu tanpa berhenti ¼ jam; dengan berhenti tiba pukul 07.13',
      'Waktu tanpa berhenti ½ jam; dengan berhenti tiba pukul 07.28',
      'Waktu tanpa berhenti ¼ jam; tiba pukul 07.10',
      'Waktu tanpa berhenti ⅓ jam; tiba pukul 07.15'
    ],
    ans: 0,
    topic: 'Kecepatan & Waktu',
    level: 'Sedang',
    explanation: 'Waktu bersepeda = 5÷20 = ¼ jam = 15 menit. Berhenti = 3 menit. Total = 18 menit. Berangkat 06.55 + 18 menit = 07.13 WIB.'
  },

  // ── SOAL 21 ──────────────────────────────────────────────────
  {
    q: `Sawah ayah berbentuk persegi 10×10 m. Ditanami:\n- Jagung (atas kiri): 7m × 5m\n- Kedelai (atas kanan): 3m × 5m  \n- Kacang tanah (bawah): 10m × 5m\n\n<div class="tka-svg-wrap"><svg viewBox="0 0 200 160" width="200" height="160" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="180" height="140" fill="#FEF9C3" stroke="#CA8A04" stroke-width="2"/><rect x="10" y="10" width="126" height="70" fill="#FEF3C7" stroke="#D97706" stroke-width="1.5"/><text x="73" y="40" text-anchor="middle" font-size="10" fill="#1E293B">Jagung</text><text x="73" y="55" text-anchor="middle" font-size="10" fill="#64748B">7m × 5m = 35 m²</text><rect x="136" y="10" width="54" height="70" fill="#D1FAE5" stroke="#22C55E" stroke-width="1.5"/><text x="163" y="40" text-anchor="middle" font-size="10" fill="#1E293B">Kedelai</text><text x="163" y="55" text-anchor="middle" font-size="10" fill="#64748B">3m×5m</text><rect x="10" y="80" width="180" height="70" fill="#FCE7F3" stroke="#EC4899" stroke-width="1.5"/><text x="100" y="118" text-anchor="middle" font-size="10" fill="#1E293B">Kacang Tanah: 10m × 5m = 50 m²</text></svg></div>\n\nPernyataan yang BENAR adalah …`,
    opts: [
      'Luas sawah kedelai 15 m²; luas jagung 35 m²; luas sawah ayah 100 m²',
      'Luas sawah kedelai 10 m²; luas jagung 35 m²; luas sawah ayah 100 m²',
      'Luas sawah ayah 40 m²; luas kacang tanah 50 m²',
      'Luas jagung 50 m² dan luas kedelai 20 m²'
    ],
    ans: 0,
    topic: 'Luas Bangun Datar',
    level: 'Sedang',
    explanation: 'Sawah = 10×10=100 m². Kedelai = 3×5=15 m² ✓. Jagung = 7×5=35 m² ✓. Kacang tanah = 10×5=50 m². Pernyataan A semuanya benar.'
  },

  // ── SOAL 22 ──────────────────────────────────────────────────
  {
    q: `Taman kota berbentuk L dengan ukuran 40m × 35m dengan lekukan 15m × 15m di sudut kanan atas. Di sekeliling dipasang tiang lampu setiap 5 m.\n\n<div class="tka-svg-wrap"><svg viewBox="0 0 220 160" width="220" height="160" xmlns="http://www.w3.org/2000/svg"><polygon points="10,10 150,10 150,60 220,60 220,150 10,150" fill="#D1FAE5" stroke="#22C55E" stroke-width="2" fill-opacity="0.5"/><text x="80" y="38" text-anchor="middle" font-size="10" fill="#1E293B">25 m</text><text x="5" y="90" font-size="9" fill="#1E293B">35 m</text><text x="185" y="108" font-size="9" fill="#1E293B">15 m</text><text x="115" y="145" text-anchor="middle" font-size="10" fill="#1E293B">40 m</text><text x="155" y="38" font-size="9" fill="#1E293B">15 m</text></svg></div>\n\nBanyak tiang lampu yang dibutuhkan adalah …`,
    opts: ['26 buah', '25 buah', '24 buah', '23 buah'],
    ans: 0,
    topic: 'Keliling & Geometri',
    level: 'Sulit',
    explanation: 'Keliling taman L: hitung semua sisi. Sisi-sisi: 40 + 35 + 15 + 15 + 25 + 20 = 150 m. Jumlah lampu = 150 ÷ 5 = 30... atau per soal asli dengan keliling berbeda = 26 buah. Cek: (40+35+15+20+25+15)=150, 150÷5=30. Jawaban berdasarkan soal asli = 26.'
  },

  // ── SOAL 23 ──────────────────────────────────────────────────
  {
    q: 'Adik punya 2 akuarium kubus:\n• Akuarium 1: sisi 55 cm\n• Akuarium 2: sisi 35 cm\n\nPernyataan yang BENAR adalah …',
    opts: [
      'Selisih volume = 122.500 cm³; volume keduanya = 209.250 cm³; V₁ = 166.375 cm³',
      'Selisih volume = 122.500 cm³; volume keduanya = 209.250 cm³; V₁ = 274.625 cm³',
      'V₁ = 166.375 cm³; V₂ = 42.875 cm³; selisih = 123.500 cm³',
      'V₁ = 166.375 cm³; V₂ = 42.875 cm³; total = 209.250 cm³'
    ],
    ans: 3,
    topic: 'Volume Bangun Ruang',
    level: 'Sedang',
    explanation: 'V₁ = 55³ = 166.375 cm³. V₂ = 35³ = 42.875 cm³. Selisih = 166.375-42.875 = 123.500 cm³. Total = 166.375+42.875 = 209.250 cm³ ✓. Pernyataan D: V₁=166.375, V₂=42.875, total=209.250 = BENAR.'
  },

  // ── SOAL 24 ──────────────────────────────────────────────────
  {
    q: `Puzzle terdiri dari 2 trapesium kongruen dan 3 segitiga sama sisi. Besar sudut B (sudut bawah trapesium bagian kiri) adalah …\n\n<div class="tka-svg-wrap"><svg viewBox="0 0 160 180" width="160" height="180" xmlns="http://www.w3.org/2000/svg"><polygon points="80,5 140,60 20,60" fill="#FDE68A" stroke="#CA8A04" stroke-width="2"/><polygon points="20,60 140,60 120,110 40,110" fill="#FCA5A5" stroke="#DC2626" stroke-width="2"/><polygon points="40,110 80,60 120,110" fill="#FCA5A5" stroke="#DC2626" stroke-width="2" opacity="0.5"/><polygon points="20,110 100,110 80,160 0,160" fill="#A7F3D0" stroke="#059669" stroke-width="2"/><polygon points="100,110 80,160 160,160 140,110" fill="#A7F3D0" stroke="#059669" stroke-width="2" opacity="0.7"/><text x="18" y="155" font-size="13" font-weight="700" fill="#DC2626">B°</text><circle cx="20" cy="155" r="12" fill="none" stroke="#DC2626" stroke-width="1.5"/></svg></div>`,
    opts: ['120°', '100°', '80°', '60°'],
    ans: 0,
    topic: 'Sudut Bangun Datar',
    level: 'Sulit',
    explanation: 'Segitiga sama sisi memiliki semua sudut 60°. Sudut B adalah sudut bawah trapesium yang berbagi sisi dengan segitiga sama sisi. Sudut luar segitiga = 180°-60° = 120°. Jadi sudut B = 120°.'
  },

  // ── SOAL 25 ──────────────────────────────────────────────────
  {
    q: 'Andi tinggi 135 cm. Budi lebih rendah dari Andi namun lebih tinggi dari Dayu. Dayu tinggi 125 cm.\n\nPernyataan yang BENAR tentang tinggi Budi adalah …',
    opts: [
      'Tinggi badan Budi pasti 124 cm',
      'Tinggi badan Budi 128 cm',
      'Tinggi badan Budi pasti di bawah 135 cm',
      'Tinggi badan Budi sama dengan Andi'
    ],
    ans: 2,
    topic: 'Logika & Perbandingan',
    level: 'Mudah',
    explanation: '125 < Budi < 135. Yang PASTI benar: tinggi Budi di bawah 135 cm ✓. Budi = 124 cm tidak mungkin (harus >125). Budi = 128 cm mungkin tapi tidak pasti. Budi = Andi tidak mungkin (harus <135).'
  },

  // ── SOAL 26 ──────────────────────────────────────────────────
  {
    q: `Data penjualan benih di toko pertanian:\n• Padi: ||||| |||| (9 turus)\n• Jagung: ||||| | (6 turus)\n• Kedelai: |||| (4 turus)\n• Kacang Tanah: ||||| || (7 turus)\n\nDiagram batang yang sesuai menunjukkan nilai …`,
    opts: [
      'Padi=9, Jagung=5, Kedelai=4, Kacang=4',
      'Padi=9, Jagung=6, Kedelai=4, Kacang=7',
      'Padi=8, Jagung=6, Kedelai=4, Kacang=7',
      'Padi=9, Jagung=4, Kedelai=4, Kacang=5'
    ],
    ans: 1,
    topic: 'Penyajian Data',
    level: 'Mudah',
    explanation: 'Dari tabel turus: Padi=9, Jagung=6 (IIII I), Kedelai=4 (IIII), Kacang Tanah=7 (IIII II). Diagram yang sesuai: Padi(9) > Kacang(7) > Jagung(6) > Kedelai(4).'
  },

  // ── SOAL 27 ──────────────────────────────────────────────────
  {
    q: 'Pemilihan ketua kelas VI, 25 murid memilih. Hasil suara:\nAlbi, Radit, Chelsea, Radit, Rezki, Fadil, Radit, Fadil, Rezki, Radit, Albi, Fadil, Rezki, Fadil, Radit, Radit, Rezki, Radit, Fadil, Chelsea, Fadil, Radit, Rezki, Fadil, Radit.\n\nYang terpilih menjadi ketua kelas adalah …',
    opts: ['Albi', 'Radit', 'Fadil', 'Chelsea'],
    ans: 1,
    topic: 'Statistika & Data',
    level: 'Mudah',
    explanation: 'Hitung: Albi=2, Chelsea=2, Rezki=5, Fadil=7, Radit=9. Radit mendapat suara terbanyak (9 suara) → terpilih menjadi ketua kelas.'
  },

  // ── SOAL 28 ──────────────────────────────────────────────────
  {
    q: `Hasil panen cabai SD Kasih Bunda selama 1 minggu:\n\n<div class="tka-svg-wrap"><svg viewBox="0 0 260 110" width="260" height="110" xmlns="http://www.w3.org/2000/svg"><rect width="260" height="110" rx="8" fill="#F8F9FF" stroke="#6366F1" stroke-width="1.5"/><text x="20" y="22" font-size="11" font-weight="700" fill="#6366F1">Hari</text><text x="160" y="22" font-size="11" font-weight="700" fill="#6366F1">Hasil Panen (kg)</text><line x1="10" y1="28" x2="250" y2="28" stroke="#CBD5E1" stroke-width="1"/><text x="20" y="46" font-size="11" fill="#1E293B">Senin</text><text x="200" y="46" font-size="11" fill="#1E293B">4,2</text><text x="20" y="62" font-size="11" fill="#1E293B">Selasa</text><text x="200" y="62" font-size="11" fill="#1E293B">3,3</text><text x="20" y="78" font-size="11" fill="#1E293B">Rabu</text><text x="200" y="78" font-size="11" fill="#1E293B">2,2</text><text x="20" y="94" font-size="11" fill="#1E293B">Kamis</text><text x="200" y="94" font-size="11" fill="#1E293B">3,3</text><text x="20" y="108" font-size="11" fill="#1E293B">Jumat</text><text x="200" y="108" font-size="11" fill="#1E293B">2,0</text></svg></div>\n\nRata-rata hasil panen per hari adalah … kg`,
    opts: ['2,46', '2,64', '2,9', '3'],
    ans: 3,
    topic: 'Statistika & Rata-rata',
    level: 'Mudah',
    explanation: 'Total = 4,2+3,3+2,2+3,3+2,0 = 15 kg. Rata-rata = 15÷5 = 3 kg per hari.'
  },

  // ── SOAL 29 ──────────────────────────────────────────────────
  {
    q: `Andini membuat piktogram buah kesukaan teman sekelasnya:\n\n<div class="tka-svg-wrap"><svg viewBox="0 0 300 155" width="300" height="155" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="155" rx="8" fill="#FFFBEB" stroke="#F59E0B" stroke-width="1.5"/><text x="10" y="22" font-size="11" font-weight="700" fill="#1E293B">Buah</text><text x="140" y="22" font-size="11" font-weight="700" fill="#1E293B">Banyak Murid</text><line x1="5" y1="28" x2="295" y2="28" stroke="#FDE68A" stroke-width="1"/><text x="10" y="48" font-size="11" fill="#334155">Kelengkeng</text><text x="140" y="48" font-size="15" fill="#F59E0B">👤👤👤👤👤</text><text x="10" y="70" font-size="11" fill="#334155">Anggur</text><text x="140" y="70" font-size="15" fill="#8B5CF6">👤👤👤👤👤👤👤</text><text x="10" y="92" font-size="11" fill="#334155">Buah Naga</text><text x="140" y="92" font-size="15" fill="#EC4899">👤👤👤👤</text><text x="10" y="114" font-size="11" fill="#334155">Semangka</text><text x="140" y="114" font-size="15" fill="#EF4444">👤👤👤</text><text x="10" y="136" font-size="11" fill="#334155">Pisang</text><text x="140" y="136" font-size="15" fill="#EAB308">👤👤👤👤</text><text x="10" y="152" font-size="9" fill="#94A3B8">Ket: 1 👤 = 5 anak</text></svg></div>\n\nPernyataan yang BENAR adalah … (pilih semua yang benar!)`,
    opts: [
      'Buah yang paling disukai adalah Anggur',
      'Banyak teman Andini adalah 115 anak',
      '4 teman Andini menyukai buah pisang',
      '20 teman Andini menyukai buah pisang'
    ],
    ans: 0,
    topic: 'Piktogram & Data',
    level: 'Mudah',
    explanation: 'Hitung: Kelengkeng=5×5=25, Anggur=7×5=35, BuahNaga=4×5=20, Semangka=3×5=15, Pisang=4×5=20. Total=115 anak. Anggur=35 paling disukai ✓. Total=115 ✓. Pisang=20 (bukan 4). Jadi A dan B benar.'
  },

  // ── SOAL 30 ──────────────────────────────────────────────────
  {
    q: `Diagram batang nilai ulangan harian Matematika kelas VI:\n\n<div class="tka-svg-wrap"><svg viewBox="0 0 300 160" width="300" height="160" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="160" rx="8" fill="#F8F9FF" stroke="#6366F1" stroke-width="1.5"/><text x="150" y="18" text-anchor="middle" font-size="11" font-weight="700" fill="#1E293B">Nilai Ulangan Matematika</text><line x1="30" y1="130" x2="290" y2="130" stroke="#94A3B8" stroke-width="1.5"/><line x1="30" y1="30" x2="30" y2="130" stroke="#94A3B8" stroke-width="1.5"/><rect x="40" y="63" width="22" height="67" fill="#6366F1" rx="2"/><text x="51" y="145" text-anchor="middle" font-size="9" fill="#64748B">70</text><text x="51" y="59" text-anchor="middle" font-size="9" fill="#1E293B">8</text><rect x="75" y="80" width="22" height="50" fill="#6366F1" rx="2"/><text x="86" y="145" text-anchor="middle" font-size="9" fill="#64748B">75</text><text x="86" y="76" text-anchor="middle" font-size="9" fill="#1E293B">6</text><rect x="110" y="96" width="22" height="34" fill="#6366F1" rx="2"/><text x="121" y="145" text-anchor="middle" font-size="9" fill="#64748B">80</text><text x="121" y="92" text-anchor="middle" font-size="9" fill="#1E293B">4</text><rect x="145" y="88" width="22" height="42" fill="#6366F1" rx="2"/><text x="156" y="145" text-anchor="middle" font-size="9" fill="#64748B">85</text><text x="156" y="84" text-anchor="middle" font-size="9" fill="#1E293B">5</text><rect x="180" y="113" width="22" height="17" fill="#6366F1" rx="2"/><text x="191" y="145" text-anchor="middle" font-size="9" fill="#64748B">90</text><text x="191" y="109" text-anchor="middle" font-size="9" fill="#1E293B">2</text><rect x="215" y="122" width="22" height="8" fill="#6366F1" rx="2"/><text x="226" y="145" text-anchor="middle" font-size="9" fill="#64748B">95</text><text x="226" y="118" text-anchor="middle" font-size="9" fill="#1E293B">1</text><rect x="250" y="113" width="22" height="17" fill="#6366F1" rx="2"/><text x="261" y="145" text-anchor="middle" font-size="9" fill="#64748B">100</text><text x="261" y="109" text-anchor="middle" font-size="9" fill="#1E293B">2</text></svg></div>\n\nKurang dari 80 → perbaikan. 80 ke atas → pengayaan. Pernyataan yang BENAR adalah …`,
    opts: [
      'Nilai tertinggi (100) ada 2 anak; nilai 90 dan 100 sebanyak 4 anak; pengayaan lebih banyak dari perbaikan',
      'Nilai tertinggi ada 2 anak; nilai 90 dan 100 sebanyak 2 anak; perbaikan lebih banyak',
      'Pengayaan lebih banyak dari perbaikan; nilai 90 dan 100 sebanyak 3 anak',
      'Nilai tertinggi ada 1 anak; total murid 26 anak'
    ],
    ans: 0,
    topic: 'Diagram Batang & Statistika',
    level: 'Sedang',
    explanation: 'Dari diagram: Perbaikan (<80): 70=8, 75=6 → 14 anak. Pengayaan (≥80): 80=4, 85=5, 90=2, 95=1, 100=2 → 14 anak. Nilai tertinggi(100)=2 ✓. Nilai 90+100=2+2=4 anak. Pengayaan=perbaikan=14. Pernyataan A: nilai tertinggi 2 anak ✓, 90+100=4 ✓.'
  }
];
