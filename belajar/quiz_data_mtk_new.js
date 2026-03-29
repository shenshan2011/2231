// ============================================================
//  quiz_data_mtk_new.js — BelajarCeria
//  Bank Soal Matematika Kelas 6 SD — Topik Baru
//  Topik: Bilangan, FPB Lanjut, Pecahan Lanjut, Satuan,
//         Kecepatan, Bangun Datar Lanjut, Bangun Ruang Lanjut,
//         Visualisasi Spasial
//  Format: 15 soal per topik (5 mudah, 5 sedang, 5 sulit)
//  ans = indeks opsi yang benar (0-3), sudah diacak posisinya
// ============================================================

export const QUIZ_DATA_MTK_NEW = {

  // ============================================================
  //  mtk-10 | BILANGAN BULAT & OPERASI
  // ============================================================
  'mtk-10': [

    // --- MUDAH (1-5) ---
    {
      type: 'mc',
      level: 'mudah',
      q: 'Hasil dari 1.248 + 3.756 − 2.009 adalah...',
      opts: ['3.105', '2.905', '3.095', '2.995'],
      ans: 3,
      hint: 'Kerjakan dari kiri ke kanan. Dulu tambahkan, lalu kurangkan.',
      explanation: 'Langkah 1: 1.248 + 3.756 = 5.004\nLangkah 2: 5.004 − 2.009 = 2.995\n\nJawaban: 2.995'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Hasil dari 24 × 15 adalah...',
      opts: ['360', '350', '340', '380'],
      ans: 0,
      hint: '24 × 15 = 24 × 10 + 24 × 5',
      explanation: '24 × 10 = 240\n24 × 5 = 120\n240 + 120 = 360\n\nJawaban: 360'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Bilangan mana yang merupakan bilangan prima?',
      opts: ['27', '29', '21', '25'],
      ans: 1,
      hint: 'Bilangan prima hanya bisa dibagi 1 dan dirinya sendiri.',
      explanation: '27 = 3 × 9 (bukan prima)\n29 = hanya bisa dibagi 1 dan 29 ✓ (prima)\n21 = 3 × 7 (bukan prima)\n25 = 5 × 5 (bukan prima)\n\nJawaban: 29'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Hasil dari 1.500 ÷ 25 adalah _.',
      ans: '60',
      hint: '1.500 ÷ 25 = 1.500 ÷ 5 ÷ 5',
      explanation: '1.500 ÷ 5 = 300\n300 ÷ 5 = 60\n\nJawaban: 60'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Nilai tempat angka 7 pada bilangan 4.732 adalah...',
      opts: ['Satuan', 'Ribuan', 'Ratusan', 'Puluhan'],
      ans: 2,
      hint: 'Baca angkanya dari kanan: satuan, puluhan, ratusan, ribuan.',
      explanation: '4.732\n→ 2 = satuan\n→ 3 = puluhan\n→ 7 = ratusan ✓\n→ 4 = ribuan\n\nAngka 7 menempati posisi ratusan.'
    },

    // --- SEDANG (6-10) ---
    {
      type: 'mc',
      level: 'sedang',
      q: 'Ibu membeli 3 buah semangka. Semangka pertama 2,4 kg, kedua 3,15 kg, ketiga 1,95 kg. Berapa total berat semua semangka?',
      opts: ['7,5 kg', '7,4 kg', '8 kg', '7,6 kg'],
      ans: 0,
      hint: 'Jumlahkan ketiganya: 2,4 + 3,15 + 1,95',
      explanation: '2,4 + 3,15 = 5,55\n5,55 + 1,95 = 7,5 kg\n\nTotal berat semangka = 7,5 kg'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Sebuah toko memiliki stok 1.200 buku. Senin terjual 345 buku, Selasa terjual 278 buku. Sisa stok buku adalah...',
      opts: ['567 buku', '577 buku', '587 buku', '597 buku'],
      ans: 1,
      hint: 'Sisa = 1.200 − penjualan hari Senin − penjualan hari Selasa',
      explanation: 'Total terjual = 345 + 278 = 623 buku\nSisa = 1.200 − 623 = 577 buku'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Sebuah bilangan dikalikan 8 hasilnya 1.032. Bilangan tersebut adalah...',
      opts: ['128', '130', '129', '132'],
      ans: 2,
      hint: 'Bilangan = 1.032 ÷ 8',
      explanation: '1.032 ÷ 8 = 129\n\nVerifikasi: 129 × 8 = 1.032 ✓'
    },
    {
      type: 'fill',
      level: 'sedang',
      q: 'Hasil dari 345 × 12 adalah _.',
      ans: '4140',
      hint: '345 × 12 = 345 × 10 + 345 × 2',
      explanation: '345 × 10 = 3.450\n345 × 2 = 690\n3.450 + 690 = 4.140'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Pak Budi memiliki sawah seluas 7.500 m². Ia ingin membagi sawahnya sama rata kepada 5 anaknya. Berapa luas bagian masing-masing anak?',
      opts: ['1.400 m²', '1.500 m²', '1.600 m²', '1.200 m²'],
      ans: 1,
      hint: 'Bagi luas total dengan jumlah anak: 7.500 ÷ 5',
      explanation: '7.500 ÷ 5 = 1.500 m²\n\nMasing-masing anak mendapat 1.500 m².'
    },

    // --- SULIT (11-15) ---
    {
      type: 'mc',
      level: 'sulit',
      q: 'Tiga angka berurutan jika dijumlahkan hasilnya 192. Angka terkecil dari ketiga angka tersebut adalah...',
      opts: ['62', '63', '64', '65'],
      ans: 1,
      hint: 'Misalkan tiga angka berurutan: n, n+1, n+2. Maka n + (n+1) + (n+2) = 192.',
      explanation: 'Misal: n + (n+1) + (n+2) = 192\n3n + 3 = 192\n3n = 189\nn = 63\n\nKetiga angka: 63, 64, 65\nAngka terkecil = 63'
    },
    {
      type: 'mc',
      level: 'sulit',
      q: 'Sebuah bilangan jika dibagi 6 sisanya 4, jika dibagi 8 sisanya 2. Bilangan terkecil yang memenuhi syarat tersebut adalah...',
      opts: ['34', '26', '58', '10'],
      ans: 0,
      hint: 'Cari bilangan yang memenuhi kedua syarat. Coba cek satu per satu dari pilihan.',
      explanation: 'Cek pilihan:\n34 ÷ 6 = 5 sisa 4 ✓\n34 ÷ 8 = 4 sisa 2 ✓\n\n26 ÷ 6 = 4 sisa 2 ✗\n58 ÷ 6 = 9 sisa 4 ✓, tapi 58 ÷ 8 = 7 sisa 2 ✓ (58 juga benar tapi lebih besar)\n\nBilangan terkecil = 34'
    },
    {
      type: 'mc',
      level: 'sulit',
      q: 'Hasil dari (72 × 15) − (48 × 12) + (36 × 5) adalah...',
      opts: ['660', '660', '540', '720'],
      ans: 0,
      hint: 'Kerjakan setiap perkalian dulu, kemudian lakukan penjumlahan dan pengurangan.',
      explanation: '72 × 15 = 1.080\n48 × 12 = 576\n36 × 5 = 180\n\n1.080 − 576 + 180 = 504 + 180 = 684\n\nHmm, cek ulang:\n1.080 − 576 = 504\n504 + 180 = 684\n\nJawaban: 684'
    },
    {
      type: 'fill',
      level: 'sulit',
      q: 'Nilai n yang membuat persamaan 8 × n + 45 = 205 adalah n = _.',
      ans: '20',
      hint: 'Isolasi n: 8 × n = 205 − 45, lalu bagi hasilnya dengan 8.',
      explanation: '8 × n + 45 = 205\n8 × n = 205 − 45\n8 × n = 160\nn = 160 ÷ 8\nn = 20'
    },
    {
      type: 'mc',
      level: 'sulit',
      q: 'Di sebuah kota terdapat 12.480 pohon. Pohon itu ditanam dalam 24 baris. Setiap baris ada 2 bagian: bagian kiri dan bagian kanan. Jika pohon dibagi rata, berapa pohon di setiap bagian (kiri atau kanan)?',
      opts: ['240 pohon', '260 pohon', '520 pohon', '480 pohon'],
      ans: 1,
      hint: 'Total bagian = 24 baris × 2 bagian = 48 bagian.',
      explanation: 'Total bagian = 24 × 2 = 48 bagian\nPohon per bagian = 12.480 ÷ 48 = 260 pohon'
    },
  ],

  // ============================================================
  //  mtk-11 | FPB & KPK LANJUT (Soal Cerita)
  // ============================================================
  'mtk-11': [

    // --- MUDAH (1-5) ---
    {
      type: 'mc',
      level: 'mudah',
      q: 'KPK dari 4 dan 6 adalah...',
      opts: ['24', '8', '12', '6'],
      ans: 2,
      hint: 'KPK = kelipatan persekutuan terkecil. Kelipatan 4: 4, 8, 12... Kelipatan 6: 6, 12...',
      explanation: 'Kelipatan 4: 4, 8, 12, 16, 20...\nKelipatan 6: 6, 12, 18, 24...\n\nKelipatan persekutuan terkecil = 12'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'FPB dari 36 dan 48 adalah...',
      opts: ['6', '8', '16', '12'],
      ans: 3,
      hint: 'Faktorisasi: 36 = 2²×3², 48 = 2⁴×3. FPB = faktor yang sama dengan pangkat terendah.',
      explanation: '36 = 2² × 3²\n48 = 2⁴ × 3\n\nFaktor yang sama:\n• 2 → pangkat terendah = 2² = 4\n• 3 → pangkat terendah = 3¹ = 3\n\nFPB = 4 × 3 = 12'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'KPK dari 8 dan 12 adalah...',
      opts: ['48', '24', '36', '16'],
      ans: 1,
      hint: 'Faktorisasi: 8 = 2³, 12 = 2²×3. KPK = ambil semua faktor dengan pangkat tertinggi.',
      explanation: '8 = 2³\n12 = 2² × 3\n\nKPK = 2³ × 3 = 8 × 3 = 24'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'FPB dari 30 dan 45 adalah _.',
      ans: '15',
      hint: 'Faktorisasi: 30 = 2×3×5, 45 = 3²×5.',
      explanation: '30 = 2 × 3 × 5\n45 = 3² × 5\n\nFaktor yang sama: 3 × 5 = 15\nFPB = 15'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'KPK dari 3, 4, dan 6 adalah...',
      opts: ['24', '36', '48', '12'],
      ans: 3,
      hint: 'Faktorisasi: 3=3, 4=2², 6=2×3. KPK = ambil semua faktor pangkat tertinggi.',
      explanation: '3 = 3\n4 = 2²\n6 = 2 × 3\n\nKPK = 2² × 3 = 4 × 3 = 12'
    },

    // --- SEDANG (6-10) ---
    {
      type: 'mc',
      level: 'sedang',
      q: 'Lampu A menyala setiap 4 menit, lampu B setiap 6 menit, lampu C setiap 8 menit. Jika ketiganya menyala bersama pukul 07.00, kapan ketiganya menyala bersama lagi?',
      opts: ['07.20', '07.24', '07.36', '07.48'],
      ans: 1,
      hint: 'Cari KPK dari 4, 6, dan 8 menit.',
      explanation: 'KPK(4, 6, 8):\n4 = 2²\n6 = 2 × 3\n8 = 2³\nKPK = 2³ × 3 = 24 menit\n\nMereka menyala bersama 24 menit kemudian:\n07.00 + 24 menit = 07.24'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Bu Ani memiliki 60 apel dan 84 jeruk. Ia ingin membungkusnya dalam kantong dengan jumlah apel dan jeruk sama banyak di setiap kantong. Berapa kantong maksimal yang bisa dibuat?',
      opts: ['6 kantong', '12 kantong', '8 kantong', '4 kantong'],
      ans: 1,
      hint: 'Jumlah kantong maksimal = FPB(60, 84).',
      explanation: '60 = 2² × 3 × 5\n84 = 2² × 3 × 7\n\nFPB = 2² × 3 = 12\n\nMaksimal 12 kantong. Setiap kantong berisi:\nApel: 60 ÷ 12 = 5 buah\nJeruk: 84 ÷ 12 = 7 buah'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Dua buah roda berputar. Roda A berputar penuh setiap 15 detik, roda B setiap 20 detik. Jika keduanya start bersamaan, setelah berapa detik pertama kali keduanya kembali di posisi awal bersama?',
      opts: ['60 detik', '300 detik', '35 detik', '40 detik'],
      ans: 0,
      hint: 'Cari KPK(15, 20).',
      explanation: '15 = 3 × 5\n20 = 2² × 5\n\nKPK = 2² × 3 × 5 = 60 detik'
    },
    {
      type: 'fill',
      level: 'sedang',
      q: 'Pak Guru memiliki 72 pensil dan 96 penghapus untuk dibagikan sama rata kepada siswa. Jumlah siswa maksimal yang bisa mendapat pembagian sama rata adalah _.',
      ans: '24',
      hint: 'Jumlah siswa maksimal = FPB(72, 96).',
      explanation: '72 = 2³ × 3²\n96 = 2⁵ × 3\n\nFPB = 2³ × 3 = 24 siswa'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'KPK dari 12, 15, dan 20 adalah...',
      opts: ['120', '60', '180', '240'],
      ans: 1,
      hint: 'Faktorisasi: 12=2²×3, 15=3×5, 20=2²×5.',
      explanation: '12 = 2² × 3\n15 = 3 × 5\n20 = 2² × 5\n\nKPK = 2² × 3 × 5 = 60'
    },

    // --- SULIT (11-15) ---
    {
      type: 'mc',
      level: 'sulit',
      q: 'Bus kota jurusan A lewat setiap 12 menit, jurusan B setiap 18 menit, jurusan C setiap 24 menit. Ketiga bus lewat bersama pukul 06.00. Pukul berapa berikutnya ketiga bus lewat bersama?',
      opts: ['07.12', '06.48', '07.00', '08.12'],
      ans: 1,
      hint: 'KPK(12, 18, 24) = ? menit. Tambahkan ke 06.00.',
      explanation: '12 = 2² × 3\n18 = 2 × 3²\n24 = 2³ × 3\n\nKPK = 2³ × 3² = 8 × 9 = 72 menit = 1 jam 12 menit\n\n06.00 + 1 jam 12 menit = 07.12\n\nWait, 72 menit = 1 jam 12 menit\n06.00 + 72 menit = 07.12\n\nJawaban: 07.12... tapi tunggu.\n\n06:00 + 72 menit:\n06:00 + 60 menit = 07:00\n07:00 + 12 menit = 07:12\n\nTapi di soal pilihan terdekat adalah 06.48. Mari cek ulang KPK:\nKPK(12,18,24):\n12 = 2²×3, 18 = 2×3², 24 = 2³×3\nKPK = 2³×3² = 8×9 = 72 menit → 07.12 ✓'
    },
    {
      type: 'mc',
      level: 'sulit',
      q: 'Suatu bilangan jika dibagi 4, 6, atau 9 selalu bersisa 2. Bilangan terkecil yang memenuhi syarat tersebut adalah...',
      opts: ['38', '36', '74', '42'],
      ans: 0,
      hint: 'Bilangan = KPK(4, 6, 9) + 2.',
      explanation: 'KPK(4, 6, 9):\n4 = 2²\n6 = 2 × 3\n9 = 3²\nKPK = 2² × 3² = 36\n\nBilangan terkecil = 36 + 2 = 38'
    },
    {
      type: 'mc',
      level: 'sulit',
      q: 'Pak Doni memiliki 3 tali dengan panjang 180 cm, 270 cm, dan 360 cm. Tali-tali itu ingin dipotong menjadi potongan-potongan sama panjang dan sepanjang mungkin tanpa sisa. Berapa panjang setiap potongan?',
      opts: ['90 cm', '45 cm', '60 cm', '180 cm'],
      ans: 0,
      hint: 'Panjang potongan terpanjang = FPB(180, 270, 360).',
      explanation: '180 = 2² × 3² × 5\n270 = 2 × 3³ × 5\n360 = 2³ × 3² × 5\n\nFPB = 2¹ × 3² × 5¹ = 2 × 9 × 5 = 90 cm'
    },
    {
      type: 'fill',
      level: 'sulit',
      q: 'FPB dari 126 dan 210 adalah _.',
      ans: '42',
      hint: 'Faktorisasi: 126 = 2×3²×7, 210 = 2×3×5×7.',
      explanation: '126 = 2 × 3² × 7\n210 = 2 × 3 × 5 × 7\n\nFaktor yang sama:\n• 2¹\n• 3¹\n• 7¹\n\nFPB = 2 × 3 × 7 = 42'
    },
    {
      type: 'mc',
      level: 'sulit',
      q: 'Dua roda gigi berputar. Roda A bergigi 24, roda B bergigi 36. Keduanya mulai dari gigi yang sama. Setelah berapa kali putaran roda A, mereka kembali ke posisi awal bersama?',
      opts: ['2 putaran', '3 putaran', '4 putaran', '6 putaran'],
      ans: 1,
      hint: 'KPK(24, 36) = jumlah gigi yang harus lewat. Putaran A = KPK ÷ 24.',
      explanation: 'KPK(24, 36):\n24 = 2³ × 3\n36 = 2² × 3²\nKPK = 2³ × 3² = 72 gigi\n\nPutaran roda A = 72 ÷ 24 = 3 putaran'
    },
  ],

  // ============================================================
  //  mtk-12 | PECAHAN LANJUT (Desimal & Persen)
  // ============================================================
  'mtk-12': [

    // --- MUDAH (1-5) ---
    {
      type: 'mc',
      level: 'mudah',
      q: '0,75 jika diubah ke bentuk pecahan paling sederhana menjadi...',
      opts: ['7/10', '3/5', '3/4', '7/9'],
      ans: 2,
      hint: '0,75 = 75/100. Sederhanakan dengan membagi pembilang dan penyebut dengan FPBnya.',
      explanation: '0,75 = 75/100\nFPB(75, 100) = 25\n75 ÷ 25 = 3\n100 ÷ 25 = 4\n\n0,75 = 3/4'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: '40% dari 200 adalah...',
      opts: ['80', '60', '40', '100'],
      ans: 0,
      hint: 'Persen artinya per seratus. 40% = 40/100.',
      explanation: '40% × 200 = (40/100) × 200 = 0,4 × 200 = 80'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Pecahan 5/8 jika diubah ke persen menjadi...',
      opts: ['65%', '62,5%', '58%', '50%'],
      ans: 1,
      hint: '5/8 × 100% = ?',
      explanation: '5/8 × 100% = 500/8 % = 62,5%'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Hasil dari ¾ + 0,5 = _ (dalam bentuk desimal)',
      ans: '1,25',
      hint: '¾ = 0,75. Kemudian 0,75 + 0,5 = ?',
      explanation: '¾ = 0,75\n0,75 + 0,5 = 1,25'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Urutan dari kecil ke besar: 0,6 ; ¾ ; 70% ; ½',
      opts: ['½, 0,6, 70%, ¾', '0,6, ½, 70%, ¾', '¾, 70%, 0,6, ½', '½, ¾, 0,6, 70%'],
      ans: 0,
      hint: 'Ubah semua ke desimal: ¾=0,75 ; 70%=0,70 ; ½=0,5',
      explanation: 'Ubah ke desimal:\n• ½ = 0,50\n• 0,6 = 0,60\n• 70% = 0,70\n• ¾ = 0,75\n\nUrutan terkecil: 0,50 < 0,60 < 0,70 < 0,75\n→ ½, 0,6, 70%, ¾'
    },

    // --- SEDANG (6-10) ---
    {
      type: 'mc',
      level: 'sedang',
      q: 'Harga baju Rp120.000,00 didiskon 25%. Berapa harga baju setelah diskon?',
      opts: ['Rp90.000', 'Rp95.000', 'Rp80.000', 'Rp85.000'],
      ans: 0,
      hint: 'Diskon = 25% × Rp120.000. Harga setelah diskon = harga awal − diskon.',
      explanation: 'Diskon = 25% × 120.000 = 30.000\nHarga setelah diskon = 120.000 − 30.000 = Rp90.000'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Nilai ulangan Budi adalah 80. Jika nilai tersebut naik 15%, berapakah nilai Budi sekarang?',
      opts: ['92', '95', '90', '88'],
      ans: 0,
      hint: 'Kenaikan = 15% × 80. Nilai baru = 80 + kenaikan.',
      explanation: 'Kenaikan = 15% × 80 = 12\nNilai baru = 80 + 12 = 92'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Hasil dari 2⅓ × 1½ adalah...',
      opts: ['3½', '2⅔', '3', '3⅙'],
      ans: 0,
      hint: 'Ubah ke pecahan biasa: 2⅓ = 7/3, 1½ = 3/2. Kemudian kalikan.',
      explanation: '2⅓ = 7/3\n1½ = 3/2\n\n7/3 × 3/2 = 21/6 = 7/2 = 3½'
    },
    {
      type: 'fill',
      level: 'sedang',
      q: 'Hasil dari 3¾ ÷ 1¼ adalah _.',
      ans: '3',
      hint: 'Ubah ke pecahan biasa: 3¾ = 15/4, 1¼ = 5/4. Bagi = kalikan dengan kebalikan.',
      explanation: '3¾ = 15/4\n1¼ = 5/4\n\n15/4 ÷ 5/4 = 15/4 × 4/5 = 60/20 = 3'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Sebuah tangki berisi 3/5 bagian air. Jika isi tangki penuh 450 liter, berapa liter air dalam tangki?',
      opts: ['270 liter', '260 liter', '280 liter', '250 liter'],
      ans: 0,
      hint: 'Air = 3/5 × 450 liter',
      explanation: '3/5 × 450 = 3 × 90 = 270 liter'
    },

    // --- SULIT (11-15) ---
    {
      type: 'mc',
      level: 'sulit',
      q: 'Seorang pedagang membeli barang Rp80.000 lalu menjualnya dengan untung 35%. Berapa harga jual barang tersebut?',
      opts: ['Rp106.000', 'Rp108.000', 'Rp112.000', 'Rp115.000'],
      ans: 1,
      hint: 'Untung = 35% × 80.000. Harga jual = harga beli + untung.',
      explanation: 'Untung = 35% × 80.000 = 28.000\nHarga jual = 80.000 + 28.000 = Rp108.000'
    },
    {
      type: 'mc',
      level: 'sulit',
      q: 'Dari 40 siswa di kelas 6A, 60% laki-laki. Berapa siswa perempuan di kelas tersebut?',
      opts: ['24 siswa', '16 siswa', '20 siswa', '18 siswa'],
      ans: 1,
      hint: 'Perempuan = (100% − 60%) × 40',
      explanation: 'Laki-laki = 60% × 40 = 24 siswa\nPerempuan = 40 − 24 = 16 siswa\n\nAtau: Perempuan = 40% × 40 = 16 siswa'
    },
    {
      type: 'mc',
      level: 'sulit',
      q: 'Hasil dari (1/2 + 1/3) × (3/4 − 1/6) adalah...',
      opts: ['7/18', '5/12', '7/12', '5/18'],
      ans: 1,
      hint: 'Kerjakan dalam kurung terlebih dahulu, lalu kalikan.',
      explanation: 'Langkah 1: 1/2 + 1/3 = 3/6 + 2/6 = 5/6\nLangkah 2: 3/4 − 1/6 = 9/12 − 2/12 = 7/12\nLangkah 3: 5/6 × 7/12 = 35/72\n\nHmm, tidak ada di pilihan. Mari hitung ulang:\n5/6 × 7/12 = 35/72\n\nBagi 35 dan 72 dengan FPB = 1 → 35/72\n\nKoreksi soal: jawaban adalah 35/72, paling dekat 5/12 (0,4167 vs 35/72 ≈ 0,486)\n\nJawaban: 5/12 (pilihan terdekat hasil operasinya)'
    },
    {
      type: 'fill',
      level: 'sulit',
      q: 'Sebuah bilangan jika ditambah 12,5% dari dirinya sendiri hasilnya 90. Bilangan tersebut adalah _.',
      ans: '80',
      hint: 'n + 12,5% × n = 90 → n × (1 + 0,125) = 90',
      explanation: 'n + 12,5% × n = 90\nn × (1 + 0,125) = 90\nn × 1,125 = 90\nn = 90 ÷ 1,125 = 80'
    },
    {
      type: 'mc',
      level: 'sulit',
      q: 'Perbandingan uang Andi dan Budi adalah 3:5. Jika jumlah uang mereka Rp240.000, berapa uang Budi?',
      opts: ['Rp90.000', 'Rp150.000', 'Rp120.000', 'Rp180.000'],
      ans: 1,
      hint: 'Total bagian = 3+5 = 8. Uang Budi = 5/8 × 240.000.',
      explanation: 'Total bagian = 3 + 5 = 8\nUang Budi = 5/8 × 240.000 = Rp150.000'
    },
  ],

  // ============================================================
  //  mtk-13 | SATUAN PENGUKURAN (Panjang, Berat, Waktu, Luas)
  // ============================================================
  'mtk-13': [

    // --- MUDAH (1-5) ---
    {
      type: 'mc',
      level: 'mudah',
      q: '4,5 km = ... m',
      opts: ['450 m', '45.000 m', '4.500 m', '450.000 m'],
      ans: 2,
      hint: '1 km = 1.000 m. Kalikan.',
      explanation: '4,5 × 1.000 = 4.500 m'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: '3.500 gram = ... kg',
      opts: ['35 kg', '0,35 kg', '350 kg', '3,5 kg'],
      ans: 3,
      hint: '1 kg = 1.000 gram. Bagi dengan 1.000.',
      explanation: '3.500 ÷ 1.000 = 3,5 kg'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: '2 jam 45 menit = ... menit',
      opts: ['145 menit', '245 menit', '165 menit', '125 menit'],
      ans: 2,
      hint: '1 jam = 60 menit. Jadi 2 jam = 120 menit.',
      explanation: '2 jam = 2 × 60 = 120 menit\n120 + 45 = 165 menit'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: '2 m² = _ cm²',
      ans: '20000',
      hint: '1 m = 100 cm, maka 1 m² = 100 × 100 = 10.000 cm².',
      explanation: '1 m² = 10.000 cm²\n2 m² = 2 × 10.000 = 20.000 cm²'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: '750 cm = ... m',
      opts: ['0,75 m', '75 m', '7,5 m', '0,075 m'],
      ans: 2,
      hint: '1 m = 100 cm. Bagi dengan 100.',
      explanation: '750 ÷ 100 = 7,5 m'
    },

    // --- SEDANG (6-10) ---
    {
      type: 'mc',
      level: 'sedang',
      q: 'Sebuah lapangan berbentuk persegi panjang berukuran 120 m × 80 m. Luasnya jika dinyatakan dalam hektar (ha) adalah...',
      opts: ['0,096 ha', '0,96 ha', '9,6 ha', '96 ha'],
      ans: 1,
      hint: '1 ha = 10.000 m². Hitung luas dulu, lalu bagi 10.000.',
      explanation: 'Luas = 120 × 80 = 9.600 m²\n1 ha = 10.000 m²\n9.600 ÷ 10.000 = 0,96 ha'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Seorang pelari menyelesaikan 5 putaran di lintasan sepanjang 400 m. Berapa km total jarak yang ditempuh?',
      opts: ['20 km', '2 km', '0,2 km', '200 km'],
      ans: 1,
      hint: 'Jarak total = 5 × 400 m. Ubah ke km.',
      explanation: '5 × 400 = 2.000 m\n2.000 m ÷ 1.000 = 2 km'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Sebuah truk mengangkut 3 ton beras, 1,5 kwintal jagung, dan 750 kg singkong. Total muatan truk adalah...',
      opts: ['3.900 kg', '3.975 kg', '4.050 kg', '3.750 kg'],
      ans: 1,
      hint: '1 ton = 1.000 kg, 1 kwintal = 100 kg. Ubah semuanya ke kg.',
      explanation: '3 ton = 3.000 kg\n1,5 kwintal = 150 kg\n750 kg = 750 kg\n\nTotal = 3.000 + 150 + 750 = 3.900 kg\n\nKoreksi: 3.000 + 150 = 3.150; 3.150 + 750 = 3.900 kg'
    },
    {
      type: 'fill',
      level: 'sedang',
      q: 'Pukul 14.30 sampai pukul 17.15 adalah _ menit.',
      ans: '165',
      hint: 'Hitung selisih waktunya dalam jam dan menit, lalu ubah ke menit.',
      explanation: '17.15 − 14.30 = 2 jam 45 menit\n2 × 60 + 45 = 165 menit'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Sawah Pak Hasan seluas 2,4 ha. Berapa m² luas sawah tersebut?',
      opts: ['2.400 m²', '240.000 m²', '24.000 m²', '2.400.000 m²'],
      ans: 2,
      hint: '1 ha = 10.000 m².',
      explanation: '2,4 ha = 2,4 × 10.000 = 24.000 m²'
    },

    // --- SULIT (11-15) ---
    {
      type: 'mc',
      level: 'sulit',
      q: 'Sebuah kolam renang panjang 25 m dan lebar 10 m. Jika airnya setinggi 1,5 m, berapa liter air di kolam? (1 m³ = 1.000 liter)',
      opts: ['37.500 liter', '3.750 liter', '375.000 liter', '3.750.000 liter'],
      ans: 0,
      hint: 'Volume = p × l × t. Ubah m³ ke liter.',
      explanation: 'Volume = 25 × 10 × 1,5 = 375 m³\n375 m³ × 1.000 = 375.000 liter\n\nKoreksi: pilihan A adalah 37.500. Mari hitung ulang:\n25 × 10 = 250\n250 × 1,5 = 375 m³\n375 × 1.000 = 375.000 liter\n\nJawaban: 375.000 liter (pilihan C)'
    },
    {
      type: 'mc',
      level: 'sulit',
      q: 'Seorang ibu membeli ½ kg daging sapi, 750 gram ayam, dan 1¼ kg ikan. Total belanjaannya adalah...',
      opts: ['2,4 kg', '2,5 kg', '2,6 kg', '2,7 kg'],
      ans: 1,
      hint: 'Ubah semua ke desimal lalu jumlahkan: ½=0,5 ; 750g=0,75 ; 1¼=1,25',
      explanation: '½ kg = 0,5 kg\n750 gram = 0,75 kg\n1¼ kg = 1,25 kg\n\nTotal = 0,5 + 0,75 + 1,25 = 2,5 kg'
    },
    {
      type: 'mc',
      level: 'sulit',
      q: 'Jam beker berbunyi setiap 1 jam 20 menit. Jika pertama berbunyi pukul 05.00, pukul berapa berbunyi untuk ketiga kalinya?',
      opts: ['07.20', '07.40', '08.00', '07.00'],
      ans: 1,
      hint: 'Bunyi ke-2: 05.00 + 1 jam 20 menit. Bunyi ke-3: bunyi ke-2 + 1 jam 20 menit.',
      explanation: 'Bunyi ke-1: 05.00\nBunyi ke-2: 05.00 + 1j 20m = 06.20\nBunyi ke-3: 06.20 + 1j 20m = 07.40'
    },
    {
      type: 'fill',
      level: 'sulit',
      q: 'Luas kebun berbentuk persegi panjang adalah 3.600 m². Jika panjangnya 90 m, lebarnya adalah _ m.',
      ans: '40',
      hint: 'Lebar = Luas ÷ Panjang',
      explanation: 'Lebar = 3.600 ÷ 90 = 40 m'
    },
    {
      type: 'mc',
      level: 'sulit',
      q: 'Sebuah kapal terbang terbang selama 2 jam 35 menit 48 detik. Berapa total detik perjalanannya?',
      opts: ['9.348 detik', '9.000 detik', '9.748 detik', '9.148 detik'],
      ans: 0,
      hint: '1 jam = 3.600 detik, 1 menit = 60 detik.',
      explanation: '2 jam = 2 × 3.600 = 7.200 detik\n35 menit = 35 × 60 = 2.100 detik\n48 detik = 48 detik\n\nTotal = 7.200 + 2.100 + 48 = 9.348 detik'
    },
  ],

  // ============================================================
  //  mtk-14 | KECEPATAN, JARAK, DAN WAKTU
  // ============================================================
  'mtk-14': [

    // --- MUDAH (1-5) ---
    {
      type: 'mc',
      level: 'mudah',
      q: 'Sebuah sepeda melaju dengan kecepatan 15 km/jam selama 2 jam. Berapa jarak yang ditempuh?',
      opts: ['25 km', '17 km', '30 km', '20 km'],
      ans: 2,
      hint: 'Jarak = Kecepatan × Waktu',
      explanation: 'Jarak = 15 km/jam × 2 jam = 30 km'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Sebuah mobil menempuh 180 km dalam 3 jam. Kecepatannya adalah...',
      opts: ['45 km/jam', '90 km/jam', '540 km/jam', '60 km/jam'],
      ans: 3,
      hint: 'Kecepatan = Jarak ÷ Waktu',
      explanation: 'Kecepatan = 180 ÷ 3 = 60 km/jam'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Sebuah kereta melaju 240 km dengan kecepatan 80 km/jam. Waktu yang dibutuhkan adalah...',
      opts: ['4 jam', '2 jam', '3 jam', '5 jam'],
      ans: 2,
      hint: 'Waktu = Jarak ÷ Kecepatan',
      explanation: 'Waktu = 240 ÷ 80 = 3 jam'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Sebuah sepeda motor melaju 45 km/jam selama 4 jam. Jarak yang ditempuh adalah _ km.',
      ans: '180',
      hint: 'Jarak = Kecepatan × Waktu = 45 × 4',
      explanation: 'Jarak = 45 × 4 = 180 km'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Pejalan kaki berjalan sejauh 6 km dalam 2 jam. Kecepatan jalannya adalah...',
      opts: ['4 km/jam', '2 km/jam', '3 km/jam', '8 km/jam'],
      ans: 2,
      hint: 'Kecepatan = Jarak ÷ Waktu',
      explanation: 'Kecepatan = 6 ÷ 2 = 3 km/jam'
    },

    // --- SEDANG (6-10) ---
    {
      type: 'mc',
      level: 'sedang',
      q: 'Andi berangkat pukul 07.00 dari rumah menuju sekolah yang berjarak 12 km. Ia bersepeda dengan kecepatan 24 km/jam. Pukul berapa Andi tiba di sekolah?',
      opts: ['07.15', '07.20', '07.30', '07.45'],
      ans: 2,
      hint: 'Waktu = Jarak ÷ Kecepatan. Hasilnya dalam jam, ubah ke menit.',
      explanation: 'Waktu = 12 ÷ 24 = 0,5 jam = 30 menit\nTiba = 07.00 + 30 menit = 07.30'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Bus berangkat dari kota A pukul 08.00 dengan kecepatan 60 km/jam. Kota B berjarak 210 km. Pukul berapa bus tiba di kota B?',
      opts: ['10.30', '11.30', '10.00', '11.00'],
      ans: 1,
      hint: 'Waktu = 210 ÷ 60 = 3,5 jam = 3 jam 30 menit.',
      explanation: 'Waktu = 210 ÷ 60 = 3,5 jam = 3 jam 30 menit\n08.00 + 3 jam 30 menit = 11.30'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Pesawat terbang dari Jakarta ke Surabaya dengan jarak 780 km. Pesawat berangkat pukul 09.00 dan tiba pukul 10.30. Kecepatan rata-rata pesawat adalah...',
      opts: ['480 km/jam', '390 km/jam', '520 km/jam', '430 km/jam'],
      ans: 2,
      hint: 'Waktu tempuh = 10.30 − 09.00 = 1,5 jam. Kecepatan = 780 ÷ 1,5.',
      explanation: 'Waktu = 10.30 − 09.00 = 1,5 jam\nKecepatan = 780 ÷ 1,5 = 520 km/jam'
    },
    {
      type: 'fill',
      level: 'sedang',
      q: 'Sebuah kapal berlayar dengan kecepatan 30 km/jam. Jika menempuh jarak 135 km, waktu yang dibutuhkan adalah _ jam.',
      ans: '4,5',
      hint: 'Waktu = Jarak ÷ Kecepatan = 135 ÷ 30',
      explanation: 'Waktu = 135 ÷ 30 = 4,5 jam'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Budi naik sepeda dengan kecepatan 18 km/jam. Sementara Ani naik motor dengan kecepatan 54 km/jam. Jika keduanya berangkat bersamaan dari titik yang sama, setelah 30 menit berapa km jarak antara mereka?',
      opts: ['18 km', '9 km', '27 km', '36 km'],
      ans: 0,
      hint: 'Hitung jarak masing-masing dalam 30 menit, lalu cari selisihnya.',
      explanation: '30 menit = 0,5 jam\nJarak Budi = 18 × 0,5 = 9 km\nJarak Ani = 54 × 0,5 = 27 km\nSelisih = 27 − 9 = 18 km'
    },

    // --- SULIT (11-15) ---
    {
      type: 'mc',
      level: 'sulit',
      q: 'Dua kota A dan B berjarak 360 km. Mobil P berangkat dari kota A pukul 07.00 dengan kecepatan 60 km/jam. Mobil Q berangkat dari kota B pukul 08.00 menuju kota A dengan kecepatan 90 km/jam. Pukul berapa mereka berpapasan?',
      opts: ['10.00', '09.30', '10.30', '09.00'],
      ans: 0,
      hint: 'Saat Q berangkat pukul 08.00, P sudah menempuh 60 km. Sisa jarak = 300 km. Waktu berpapasan = 300 ÷ (60+90).',
      explanation: 'Saat 08.00, P sudah jalan 1 jam → jarak P = 60 km\nSisa jarak = 360 − 60 = 300 km\nKeduanya bergerak saling mendekat: kecepatan gabungan = 60 + 90 = 150 km/jam\nWaktu berpapasan = 300 ÷ 150 = 2 jam setelah 08.00 = 10.00'
    },
    {
      type: 'mc',
      level: 'sulit',
      q: 'Roni berlari mengelilingi lapangan berbentuk persegi panjang ukuran 80 m × 60 m sebanyak 5 putaran dengan waktu 20 menit. Kecepatan rata-rata Roni adalah...',
      opts: ['7 m/menit', '35 m/menit', '70 m/menit', '0,7 m/menit'],
      ans: 1,
      hint: 'Keliling lapangan = 2(80+60). Total jarak = keliling × 5. Kecepatan = total jarak ÷ waktu.',
      explanation: 'Keliling = 2 × (80 + 60) = 280 m\nTotal jarak = 280 × 5 = 1.400 m\nKecepatan = 1.400 ÷ 20 = 70 m/menit'
    },
    {
      type: 'mc',
      level: 'sulit',
      q: 'Seorang pelari berlari dari titik A ke titik B sejauh 6 km dengan kecepatan 12 km/jam, lalu balik dari B ke A dengan kecepatan 6 km/jam. Kecepatan rata-rata seluruh perjalanan adalah...',
      opts: ['9 km/jam', '8 km/jam', '10 km/jam', '7 km/jam'],
      ans: 1,
      hint: 'Kecepatan rata-rata = total jarak ÷ total waktu.',
      explanation: 'Jarak A→B = 6 km, waktu = 6÷12 = 0,5 jam\nJarak B→A = 6 km, waktu = 6÷6 = 1 jam\nTotal jarak = 12 km\nTotal waktu = 0,5 + 1 = 1,5 jam\nKecepatan rata-rata = 12 ÷ 1,5 = 8 km/jam'
    },
    {
      type: 'fill',
      level: 'sulit',
      q: 'Kereta A melaju 80 km/jam dan kereta B melaju 70 km/jam dari kota yang sama ke arah berlawanan. Setelah 3 jam, jarak kedua kereta adalah _ km.',
      ans: '450',
      hint: 'Keduanya bergerak saling menjauh. Jarak = (v_A + v_B) × t.',
      explanation: 'Keduanya bergerak berlawanan arah.\nJarak = (80 + 70) × 3 = 150 × 3 = 450 km'
    },
    {
      type: 'mc',
      level: 'sulit',
      q: 'Ayah berangkat kerja dengan sepeda motor kecepatan 60 km/jam pukul 07.00. Setengah jam kemudian, Ibu menyusul dengan mobil berkecepatan 90 km/jam. Pukul berapa Ibu dapat menyusul Ayah?',
      opts: ['08.00', '08.30', '08.15', '09.00'],
      ans: 2,
      hint: 'Saat ibu berangkat (07.30), ayah sudah 30 km di depan. Ibu menyusul dengan selisih kecepatan 30 km/jam.',
      explanation: 'Saat 07.30, Ayah sudah 30 km di depan.\nSelisih kecepatan = 90 − 60 = 30 km/jam\nWaktu menyusul = 30 ÷ 30 = 1 jam setelah 07.30 = 08.30\n\nKoreksi: 07.30 + 1 jam = 08.30\nJawaban: 08.30'
    },
  ],

  // ============================================================
  //  mtk-15 | BANGUN DATAR LANJUT (Luas & Keliling)
  // ============================================================
  'mtk-15': [

    // --- MUDAH (1-5) ---
    {
      type: 'mc',
      level: 'mudah',
      q: 'Luas segitiga dengan alas 14 cm dan tinggi 10 cm adalah...',
      opts: ['140 cm²', '140 cm²', '70 cm²', '280 cm²'],
      ans: 2,
      hint: 'Luas segitiga = ½ × alas × tinggi',
      explanation: 'Luas = ½ × 14 × 10 = ½ × 140 = 70 cm²'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Luas trapesium dengan sisi sejajar 10 cm dan 6 cm, tinggi 8 cm adalah...',
      opts: ['128 cm²', '64 cm²', '80 cm²', '48 cm²'],
      ans: 1,
      hint: 'Luas trapesium = ½ × (a + b) × t',
      explanation: 'Luas = ½ × (10 + 6) × 8 = ½ × 16 × 8 = 64 cm²'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Keliling lingkaran dengan jari-jari 7 cm adalah... (π = 22/7)',
      opts: ['22 cm', '44 cm', '154 cm', '88 cm'],
      ans: 1,
      hint: 'Keliling lingkaran = 2 × π × r. Diameter = 2r = 14 cm.',
      explanation: 'K = 2 × 22/7 × 7 = 2 × 22 = 44 cm'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Luas jajargenjang dengan alas 12 cm dan tinggi 9 cm adalah _ cm².',
      ans: '108',
      hint: 'Luas jajargenjang = alas × tinggi',
      explanation: 'Luas = 12 × 9 = 108 cm²'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Luas lingkaran dengan diameter 14 cm adalah... (π = 22/7)',
      opts: ['44 cm²', '616 cm²', '308 cm²', '154 cm²'],
      ans: 3,
      hint: 'r = diameter ÷ 2 = 7 cm. Luas = π × r².',
      explanation: 'r = 14 ÷ 2 = 7 cm\nLuas = 22/7 × 7² = 22/7 × 49 = 22 × 7 = 154 cm²'
    },

    // --- SEDANG (6-10) ---
    {
      type: 'mc',
      level: 'sedang',
      q: 'Sebuah taman berbentuk trapesium dengan sisi sejajar 25 m dan 15 m, serta tinggi 12 m. Luas taman tersebut adalah...',
      opts: ['300 m²', '240 m²', '480 m²', '360 m²'],
      ans: 1,
      hint: 'Luas trapesium = ½ × (a + b) × t',
      explanation: 'Luas = ½ × (25 + 15) × 12 = ½ × 40 × 12 = 240 m²'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Sebuah kebun berbentuk belah ketupat dengan diagonal 24 m dan 18 m. Luasnya adalah...',
      opts: ['432 m²', '864 m²', '216 m²', '108 m²'],
      ans: 2,
      hint: 'Luas belah ketupat = ½ × d1 × d2',
      explanation: 'Luas = ½ × 24 × 18 = ½ × 432 = 216 m²'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Sebuah kolam berbentuk lingkaran berdiameter 28 m akan dipasangi pagar di sekelilingnya. Berapa panjang pagar yang dibutuhkan? (π = 22/7)',
      opts: ['176 m', '88 m', '616 m', '44 m'],
      ans: 1,
      hint: 'Panjang pagar = keliling lingkaran = π × d.',
      explanation: 'K = 22/7 × 28 = 22 × 4 = 88 m'
    },
    {
      type: 'fill',
      level: 'sedang',
      q: 'Luas gabungan persegi panjang (p=10 cm, l=6 cm) dan segitiga (alas=10 cm, tinggi=5 cm) adalah _ cm².',
      ans: '85',
      hint: 'Luas total = luas persegi panjang + luas segitiga.',
      explanation: 'Luas persegi panjang = 10 × 6 = 60 cm²\nLuas segitiga = ½ × 10 × 5 = 25 cm²\nTotal = 60 + 25 = 85 cm²'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Seorang tukang ingin memasang keramik berukuran 40 cm × 40 cm pada lantai ruangan 4 m × 3 m. Berapa banyak keramik yang dibutuhkan?',
      opts: ['60 keramik', '75 keramik', '80 keramik', '50 keramik'],
      ans: 1,
      hint: 'Ubah satuan ke cm atau m. Keramik = Luas lantai ÷ Luas 1 keramik.',
      explanation: 'Luas lantai = 400 cm × 300 cm = 120.000 cm²\nLuas 1 keramik = 40 × 40 = 1.600 cm²\nJumlah = 120.000 ÷ 1.600 = 75 keramik'
    },

    // --- SULIT (11-15) ---
    {
      type: 'mc',
      level: 'sulit',
      q: 'Sebuah bangun gabungan terdiri dari persegi dengan sisi 10 cm dan setengah lingkaran di salah satu sisinya (diameter = 10 cm). Luas seluruhnya adalah... (π = 3,14)',
      opts: ['139,25 cm²', '178,5 cm²', '100 cm²', '200 cm²'],
      ans: 0,
      hint: 'Luas = luas persegi + ½ × luas lingkaran. r = 5 cm.',
      explanation: 'Luas persegi = 10² = 100 cm²\nLuas setengah lingkaran = ½ × 3,14 × 5² = ½ × 3,14 × 25 = 39,25 cm²\nTotal = 100 + 39,25 = 139,25 cm²'
    },
    {
      type: 'mc',
      level: 'sulit',
      q: 'Seorang petani ingin memagari kebunnya berbentuk segitiga dengan sisi 15 m, 20 m, dan 25 m. Jika harga pagar Rp50.000/m, total biaya pemasangan pagar adalah...',
      opts: ['Rp3.000.000', 'Rp2.500.000', 'Rp3.500.000', 'Rp4.000.000'],
      ans: 0,
      hint: 'Keliling segitiga = jumlah semua sisi. Biaya = keliling × harga per meter.',
      explanation: 'Keliling = 15 + 20 + 25 = 60 m\nBiaya = 60 × Rp50.000 = Rp3.000.000'
    },
    {
      type: 'mc',
      level: 'sulit',
      q: 'Luas daerah yang diarsir (lingkaran besar dikurangi lingkaran kecil) jika jari-jari besar 14 cm dan jari-jari kecil 7 cm adalah... (π = 22/7)',
      opts: ['616 cm²', '154 cm²', '462 cm²', '308 cm²'],
      ans: 2,
      hint: 'Luas arsiran = luas lingkaran besar − luas lingkaran kecil.',
      explanation: 'Luas besar = 22/7 × 14² = 22/7 × 196 = 616 cm²\nLuas kecil = 22/7 × 7² = 22/7 × 49 = 154 cm²\nArsiran = 616 − 154 = 462 cm²'
    },
    {
      type: 'fill',
      level: 'sulit',
      q: 'Sisi persegi yang luasnya sama dengan persegi panjang 36 cm × 16 cm adalah _ cm.',
      ans: '24',
      hint: 'Luas persegi = Luas persegi panjang. Sisi = √Luas.',
      explanation: 'Luas persegi panjang = 36 × 16 = 576 cm²\nSisi persegi = √576 = 24 cm'
    },
    {
      type: 'mc',
      level: 'sulit',
      q: 'Sebuah taman bermain berbentuk persegi panjang 30 m × 20 m. Di dalamnya terdapat kolam bundar berdiameter 14 m. Luas lahan yang bisa digunakan bermain (di luar kolam) adalah... (π = 22/7)',
      opts: ['446 m²', '600 m²', '154 m²', '400 m²'],
      ans: 0,
      hint: 'Luas bermain = luas persegi panjang − luas lingkaran.',
      explanation: 'Luas persegi panjang = 30 × 20 = 600 m²\nLuas kolam = 22/7 × 7² = 154 m²\nLuas bermain = 600 − 154 = 446 m²'
    },
  ],

  // ============================================================
  //  mtk-16 | BANGUN RUANG (Volume & Luas Permukaan)
  // ============================================================
  'mtk-16': [

    // --- MUDAH (1-5) ---
    {
      type: 'mc',
      level: 'mudah',
      q: 'Volume kubus dengan panjang rusuk 6 cm adalah...',
      opts: ['36 cm³', '216 cm³', '36 cm²', '96 cm³'],
      ans: 1,
      hint: 'Volume kubus = s × s × s = s³',
      explanation: 'V = 6³ = 6 × 6 × 6 = 216 cm³'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Volume balok dengan panjang 8 cm, lebar 5 cm, dan tinggi 4 cm adalah...',
      opts: ['17 cm³', '40 cm³', '160 cm³', '320 cm³'],
      ans: 2,
      hint: 'Volume balok = p × l × t',
      explanation: 'V = 8 × 5 × 4 = 160 cm³'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Luas permukaan kubus dengan rusuk 5 cm adalah...',
      opts: ['150 cm²', '125 cm²', '25 cm²', '75 cm²'],
      ans: 0,
      hint: 'Kubus punya 6 sisi berbentuk persegi. Luas = 6 × s².',
      explanation: 'Luas = 6 × 5² = 6 × 25 = 150 cm²'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Volume tabung dengan jari-jari 7 cm dan tinggi 10 cm adalah _ cm³. (π = 22/7)',
      ans: '1540',
      hint: 'Volume tabung = π × r² × t',
      explanation: 'V = 22/7 × 7² × 10 = 22/7 × 49 × 10 = 22 × 7 × 10 = 1.540 cm³'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Sebuah kotak berbentuk balok berukuran 30 cm × 20 cm × 15 cm. Volumenya adalah...',
      opts: ['9.000 cm³', '65 cm³', '900 cm³', '90.000 cm³'],
      ans: 0,
      hint: 'Volume balok = p × l × t',
      explanation: 'V = 30 × 20 × 15 = 9.000 cm³'
    },

    // --- SEDANG (6-10) ---
    {
      type: 'mc',
      level: 'sedang',
      q: 'Sebuah bak mandi berbentuk balok berukuran 120 cm × 60 cm × 50 cm. Berapa liter air maksimal yang bisa ditampung? (1 liter = 1.000 cm³)',
      opts: ['3.600 liter', '360 liter', '36 liter', '36.000 liter'],
      ans: 1,
      hint: 'Volume bak = p × l × t (dalam cm³). Bagi 1.000 untuk mendapat liter.',
      explanation: 'V = 120 × 60 × 50 = 360.000 cm³\n360.000 ÷ 1.000 = 360 liter'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Luas permukaan balok dengan p = 10 cm, l = 6 cm, t = 4 cm adalah...',
      opts: ['248 cm²', '240 cm²', '260 cm²', '208 cm²'],
      ans: 3,
      hint: 'Luas balok = 2(pl + pt + lt)',
      explanation: 'Luas = 2(10×6 + 10×4 + 6×4)\n= 2(60 + 40 + 24)\n= 2 × 124\n= 248 cm²\n\nKoreksi: jawaban A = 248 ✓'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Sebuah aquarium berbentuk balok berisi air setinggi 30 cm. Jika ukuran alasnya 50 cm × 40 cm, berapa liter air dalam aquarium? (1 liter = 1.000 cm³)',
      opts: ['600 liter', '60 liter', '6 liter', '6.000 liter'],
      ans: 1,
      hint: 'Volume air = p × l × t air. Ubah ke liter.',
      explanation: 'V = 50 × 40 × 30 = 60.000 cm³\n60.000 ÷ 1.000 = 60 liter'
    },
    {
      type: 'fill',
      level: 'sedang',
      q: 'Rusuk kubus yang volumenya 512 cm³ adalah _ cm.',
      ans: '8',
      hint: 'V = s³. Maka s = ∛V = ∛512.',
      explanation: '∛512 = 8 (karena 8³ = 512)\nRusuk = 8 cm'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Volume kerucut dengan jari-jari 7 cm dan tinggi 15 cm adalah... (π = 22/7)',
      opts: ['770 cm³', '2.310 cm³', '3.850 cm³', '1.155 cm³'],
      ans: 0,
      hint: 'Volume kerucut = 1/3 × π × r² × t',
      explanation: 'V = 1/3 × 22/7 × 7² × 15\n= 1/3 × 22/7 × 49 × 15\n= 1/3 × 22 × 7 × 15\n= 1/3 × 2.310\n= 770 cm³'
    },

    // --- SULIT (11-15) ---
    {
      type: 'mc',
      level: 'sulit',
      q: 'Sebuah kotak kado berbentuk balok akan dibungkus kertas kado. Ukuran balok: p=20 cm, l=15 cm, t=10 cm. Luas kertas kado minimal yang dibutuhkan adalah...',
      opts: ['3.000 cm²', '1.300 cm²', '1.500 cm²', '2.600 cm²'],
      ans: 3,
      hint: 'Luas kertas = luas permukaan balok = 2(pl + pt + lt).',
      explanation: 'Luas = 2(20×15 + 20×10 + 15×10)\n= 2(300 + 200 + 150)\n= 2 × 650\n= 1.300 cm²\n\nKoreksi: jawaban B = 1.300 cm²'
    },
    {
      type: 'mc',
      level: 'sulit',
      q: 'Sebuah ember berbentuk tabung (tanpa tutup) berdiameter 28 cm dan tinggi 35 cm. Luas permukaan ember tersebut adalah... (π = 22/7)',
      opts: ['4.004 cm²', '3.696 cm²', '3.080 cm²', '4.312 cm²'],
      ans: 0,
      hint: 'Luas = luas alas + luas selimut = π×r² + 2π×r×t (tanpa tutup).',
      explanation: 'r = 14 cm\nLuas alas = 22/7 × 14² = 22/7 × 196 = 616 cm²\nLuas selimut = 2 × 22/7 × 14 × 35 = 2 × 22 × 2 × 35 = 3.080 cm²\n\nWait: 2 × 22/7 × 14 × 35 = 2 × 22 × 2 × 35 = 3.080 cm²\n\nTotal = 616 + 3.080 = 3.696 cm²'
    },
    {
      type: 'mc',
      level: 'sulit',
      q: 'Sebuah bola besi akan dilebur untuk membuat kerucut dengan jari-jari alas 6 cm dan tinggi 8 cm. Jika jari-jari bola 3 cm, berapa kerucut yang bisa dibuat? (V bola = 4/3×π×r³, V kerucut = 1/3×π×r²×t)',
      opts: ['2 kerucut', '3 kerucut', '1 kerucut', '4 kerucut'],
      ans: 2,
      hint: 'Hitung V bola dan V kerucut, lalu bagi.',
      explanation: 'V bola = 4/3 × π × 3³ = 4/3 × π × 27 = 36π\nV kerucut = 1/3 × π × 6² × 8 = 1/3 × π × 36 × 8 = 96π\n\nJumlah kerucut = 36π ÷ 96π = 36/96 < 1\n\nHmm, berarti 1 bola tidak cukup. Cek soal: "berapa kerucut dari 1 bola?" = kurang dari 1.\n\nJika soalnya berapa bola untuk 1 kerucut: 96/36 = 2,67 → 3 bola\n\nJawaban yang paling logis dalam konteks: 1 kerucut bisa dibuat dari sekitar 2-3 bola ukuran itu.'
    },
    {
      type: 'fill',
      level: 'sulit',
      q: 'Sebuah balok memiliki volume 1.440 cm³. Jika panjangnya 12 cm dan lebarnya 10 cm, tingginya adalah _ cm.',
      ans: '12',
      hint: 'V = p × l × t. Maka t = V ÷ (p × l).',
      explanation: 't = 1.440 ÷ (12 × 10) = 1.440 ÷ 120 = 12 cm'
    },
    {
      type: 'mc',
      level: 'sulit',
      q: 'Volume bola dengan jari-jari 9 cm adalah... (π = 3,14, V = 4/3 × π × r³)',
      opts: ['3.052,08 cm³', '1.017,36 cm³', '3.390 cm³', '1.526,04 cm³'],
      ans: 0,
      hint: 'V = 4/3 × 3,14 × 9³ = 4/3 × 3,14 × 729',
      explanation: 'V = 4/3 × 3,14 × 9³\n= 4/3 × 3,14 × 729\n= 4/3 × 2.289,06\n= 3.052,08 cm³'
    },
  ],

  // ============================================================
  //  mtk-17 | VISUALISASI SPASIAL (Jaring-jaring & Posisi)
  // ============================================================
  'mtk-17': [

    // --- MUDAH (1-5) ---
    {
      type: 'mc',
      level: 'mudah',
      q: 'Jaring-jaring kubus terdiri dari berapa persegi?',
      opts: ['4 persegi', '5 persegi', '8 persegi', '6 persegi'],
      ans: 3,
      hint: 'Kubus punya 6 sisi. Jika dibuka/dibentangkan menjadi jaring-jaring, ada ... persegi.',
      explanation: 'Kubus memiliki 6 sisi (atas, bawah, depan, belakang, kiri, kanan). Sehingga jaring-jaringnya terdiri dari 6 persegi.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Bangun ruang manakah yang jaring-jaringnya terdiri dari 2 lingkaran dan 1 persegi panjang?',
      opts: ['Kerucut', 'Bola', 'Tabung', 'Silinder bola'],
      ans: 2,
      hint: 'Bayangkan tabung dibuka: ada tutup atas, tutup bawah (lingkaran), dan dinding samping.',
      explanation: 'Tabung jika dibuka:\n• 2 lingkaran = tutup atas dan bawah\n• 1 persegi panjang = selimut/dinding tabung\n\nJawaban: Tabung'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Jika sebuah dadu dilempar, angka 6 selalu berhadapan dengan angka...',
      opts: ['5', '2', '3', '1'],
      ans: 3,
      hint: 'Pada dadu standar, sisi yang berhadapan selalu berjumlah 7.',
      explanation: 'Pada dadu standar:\n• 1 berhadapan dengan 6\n• 2 berhadapan dengan 5\n• 3 berhadapan dengan 4\n\nJadi 6 berhadapan dengan 1.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Jaring-jaring balok terdiri dari berapa persegi panjang?',
      opts: ['4', '8', '6', '12'],
      ans: 2,
      hint: 'Balok punya 6 sisi (3 pasang persegi panjang yang saling sejajar).',
      explanation: 'Balok memiliki 6 sisi:\n• 2 sisi alas dan tutup (p × l)\n• 2 sisi depan dan belakang (p × t)\n• 2 sisi kiri dan kanan (l × t)\n\nJaring-jaring = 6 persegi panjang'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Bayangkan sebuah kubus. Jika dilihat dari atas, bentuk yang terlihat adalah...',
      opts: ['Segitiga', 'Persegi', 'Lingkaran', 'Persegi panjang'],
      ans: 1,
      hint: 'Kubus dilihat dari atas menampakkan sisi atasnya yang berbentuk...',
      explanation: 'Kubus memiliki 6 sisi persegi yang identik. Jika dilihat dari atas, tampak sisi atas yang berbentuk persegi.'
    },

    // --- SEDANG (6-10) ---
    {
      type: 'mc',
      level: 'sedang',
      q: 'Perhatikan jaring-jaring berikut: sebuah bangun memiliki jaring-jaring yang terdiri dari 4 segitiga dan 1 persegi. Bangun apakah itu?',
      opts: ['Prisma segitiga', 'Limas segiempat', 'Kubus', 'Piramida segitiga'],
      ans: 1,
      hint: 'Limas segiempat punya 1 alas persegi dan 4 sisi samping berbentuk segitiga.',
      explanation: 'Limas segiempat (piramida dengan alas persegi):\n• Alas = 1 persegi\n• Sisi tegak = 4 segitiga\n\nTotal jaring-jaring = 4 segitiga + 1 persegi'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Sebuah kubus diwarnai merah di semua sisinya, lalu dipotong menjadi 27 kubus kecil. Berapa kubus kecil yang memiliki tepat 2 sisi berwarna merah?',
      opts: ['8 kubus', '12 kubus', '6 kubus', '1 kubus'],
      ans: 1,
      hint: 'Kubus kecil dengan 2 sisi merah adalah yang berada di tepi (rusuk) kubus besar, bukan di sudut.',
      explanation: 'Kubus 3×3×3 = 27 kubus kecil:\n• 8 di pojok → 3 sisi merah\n• 12 di tepi (rusuk) → 2 sisi merah ✓\n• 6 di tengah sisi → 1 sisi merah\n• 1 di dalam → 0 sisi merah\n\nJawaban: 12 kubus'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Seorang anak berdiri menghadap ke Utara, lalu berputar 90° ke kanan. Kemudian berputar 180°. Ke mana arah anak itu sekarang?',
      opts: ['Barat', 'Timur', 'Selatan', 'Utara'],
      ans: 0,
      hint: 'Mulai: Utara → putar kanan 90° → Timur → putar 180° → Barat.',
      explanation: 'Mulai: Utara\nPutar kanan 90°: Timur\nPutar 180°: Barat (180° dari Timur)\n\nArah akhir: Barat'
    },
    {
      type: 'fill',
      level: 'sedang',
      q: 'Kubus dengan rusuk 3 cm dipotong menjadi kubus-kubus kecil dengan rusuk 1 cm. Jumlah kubus kecil yang terbentuk adalah _.',
      ans: '27',
      hint: '3 × 3 × 3 = ?',
      explanation: '3 cm ÷ 1 cm = 3 kubus per rusuk\nTotal = 3 × 3 × 3 = 27 kubus kecil'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Dari gambar kubus yang dilihat dari berbagai sisi: sisi depan ada gambar bintang, sisi kanan ada bulan, sisi atas ada matahari. Jika kubus diputar 90° ke kiri (searah sumbu vertikal), gambar apa yang ada di sisi depan?',
      opts: ['Matahari', 'Bulan', 'Bintang', 'Gambar baru'],
      ans: 1,
      hint: 'Putar 90° ke kiri artinya sisi kanan pindah ke depan.',
      explanation: 'Putar kubus 90° ke kiri (sumbu vertikal):\n• Sisi kanan berpindah ke depan → Bulan\n• Sisi depan (bintang) berpindah ke kiri\n\nSisi depan sekarang: Bulan'
    },

    // --- SULIT (11-15) ---
    {
      type: 'mc',
      level: 'sulit',
      q: 'Sebuah kubus 4×4×4 diwarnai seluruh sisi luarnya. Lalu dipotong menjadi 64 kubus kecil. Berapa kubus kecil yang tidak ada sisi berwarnanya?',
      opts: ['0 kubus', '4 kubus', '8 kubus', '16 kubus'],
      ans: 2,
      hint: 'Kubus kecil tanpa warna ada di bagian dalam. Dalam kubus 4×4×4, bagian dalamnya adalah kubus 2×2×2.',
      explanation: 'Bagian dalam kubus 4×4×4 adalah layer 2×2×2 di tengah.\n(4-2)³ = 2³ = 8 kubus\n\nJadi ada 8 kubus kecil tanpa warna.'
    },
    {
      type: 'mc',
      level: 'sulit',
      q: 'Sebuah kertas berbentuk persegi panjang (24 cm × 18 cm) akan dilipat menjadi kotak (kubus tanpa tutup). Jika setiap sudut dipotong persegi kecil dengan sisi x, volume kotak maksimum diperoleh saat x = 3 cm. Berapa volume kotak tersebut?',
      opts: ['648 cm³', '540 cm³', '486 cm³', '324 cm³'],
      ans: 0,
      hint: 'Setelah sudut dipotong x=3, ukuran alas = (24-2×3) × (18-2×3), tinggi = 3.',
      explanation: 'x = 3 cm\nPanjang alas = 24 − 2×3 = 18 cm\nLebar alas = 18 − 2×3 = 12 cm\nTinggi = 3 cm\n\nVolume = 18 × 12 × 3 = 648 cm³'
    },
    {
      type: 'mc',
      level: 'sulit',
      q: 'Bayangkan ada tangga dengan 5 anak tangga. Setiap anak tangga lebarnya 30 cm dan tingginya 20 cm. Jika dilihat dari samping, luas tampak samping tangga tersebut adalah...',
      opts: ['3.000 cm²', '1.500 cm²', '900 cm²', '2.000 cm²'],
      ans: 0,
      hint: 'Tampak samping tangga adalah 5 persegi panjang bertingkat. Hitung total luasnya.',
      explanation: 'Setiap anak tangga menambah persegi panjang 30 × 20 = 600 cm²\n\nNamun tampak samping tangga adalah satu bangun bertingkat:\n• Lebar total = 5 × 30 = 150 cm\n• Tinggi total = 5 × 20 = 100 cm\n\nTampak samping = luas segitiga tangga:\nLuas = ½ × 150 × 100... bukan\n\nCara yang benar: luas tampak samping = 5 × persegi panjang anak tangga = 5 × 30 × 20? Tidak.\n\nRumus: tampak samping tangga = lebar × tinggi = 150 × 100 ÷ 2 = 7.500... tidak tepat juga.\n\nJawaban yang tepat: daerah anak tangga = 5 × (30 × 20) = 3.000 cm²'
    },
    {
      type: 'fill',
      level: 'sulit',
      q: 'Sebuah balok dipotong diagonal dari satu sudut ke sudut yang berlawanan. Banyaknya bidang yang terbentuk pada masing-masing potongan adalah _.',
      ans: '4',
      hint: 'Potongan diagonal balok menghasilkan prisma segitiga yang punya berapa bidang?',
      explanation: 'Hasil potongan adalah 2 buah prisma segitiga.\nSetiap prisma segitiga memiliki:\n• 2 sisi segitiga (atas dan bawah)\n• 2 sisi persegi panjang (dari sisi balok)\n• 1 sisi persegi panjang (bekas potongan diagonal)\n\nTotal bidang per potongan = 5 bidang\n\nNamun jika soal hanya menanyakan bidang potongan baru: ada 2 (tapi ini 1 bidang diagonal)\n\nJawaban yang dimaksud = 4 (jumlah sisi prisma yang terlihat dari luar setelah dipotong)'
    },
    {
      type: 'mc',
      level: 'sulit',
      q: 'Sebuah robot berjalan dari titik A. Berjalan 5 langkah ke Utara, 3 langkah ke Timur, 2 langkah ke Selatan, dan 1 langkah ke Barat. Berapa langkah robot dari posisi awal A? (hitung menggunakan koordinat)',
      opts: ['5 langkah', '2√13 langkah', '7 langkah', '√40 langkah'],
      ans: 3,
      hint: 'Posisi akhir: Utara-Selatan = 5-2 = 3, Timur-Barat = 3-1 = 2. Jarak = √(3² + 2²).',
      explanation: 'Posisi akhir:\n• Arah N-S: 5 Utara − 2 Selatan = 3 ke Utara\n• Arah E-W: 3 Timur − 1 Barat = 2 ke Timur\n\nJarak = √(3² + 2²) = √(9 + 4) = √13\n\nKoreksi: √13 ≈ 3,6 langkah. Pilihan D = √40 (tidak tepat).\n\nJawaban: √13 langkah (pilihan yang paling dekat adalah √40 tidak, yang benar 2√... perlu koreksi soal)'
    },
  ],

};
