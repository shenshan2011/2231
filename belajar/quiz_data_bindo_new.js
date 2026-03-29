// ============================================================
//  quiz_data_bindo_new.js — BelajarCeria
//  Bank Soal Bahasa Indonesia Kelas 6 SD — Topik Baru
//  Topik: Makna Kata, Imbuhan, Literasi Teks,
//         Jenis Teks & Laporan, Surat & Praktis
//  Format: 15 soal per topik (5 mudah, 5 sedang, 5 sulit)
//  ans = indeks opsi yang benar (0-3), sudah diacak posisinya
// ============================================================

export const QUIZ_DATA_BINDO_NEW = {

  // ============================================================
  //  bindo-9 | MAKNA KATA (Denotatif, Konotatif, Majas, Ungkapan)
  // ============================================================
  'bindo-9': [

    // --- MUDAH (1-5) ---
    {
      type: 'mc',
      level: 'mudah',
      q: 'Kata "buaya" dalam kalimat "Pak Harun adalah buaya darat yang ditakuti di kampung itu" termasuk makna...',
      opts: [
        'Denotatif — berarti hewan reptil besar',
        'Konotatif — berarti orang yang licik dan jahat',
        'Sinonim — memiliki persamaan arti',
        'Antonim — memiliki perlawanan arti'
      ],
      ans: 1,
      hint: 'Apakah kata "buaya" di sini berarti hewan sungguhan, atau bermakna lain?',
      explanation: 'Makna konotatif adalah makna tambahan atau kiasan yang tidak sesuai makna harfiahnya. "Buaya darat" bukan buaya sungguhan, melainkan bermakna orang yang licik, jahat, dan suka menipu. Makna denotatif = makna sebenarnya (hewan reptil).'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Sinonim kata "rajin" adalah...',
      opts: ['Malas', 'Gigih', 'Lemah', 'Diam'],
      ans: 1,
      hint: 'Sinonim = kata yang maknanya sama/mirip. Orang rajin selalu berusaha keras, ia bisa disebut...',
      explanation: '"Gigih" bermakna teguh pendirian dan terus berusaha tanpa menyerah — makna ini mirip dengan "rajin". Antonim rajin adalah malas. Gigih = sinonim rajin yang paling tepat.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Antonim kata "dermawan" adalah...',
      opts: ['Pemurah', 'Kikir', 'Baik hati', 'Sopan'],
      ans: 1,
      hint: 'Antonim = lawan kata. Dermawan berarti suka memberi. Kebalikannya adalah...',
      explanation: 'Antonim adalah kata yang berlawanan makna. "Dermawan" berarti suka memberi/beramal. Lawannya adalah "kikir" (pelit, tidak suka memberi). Pemurah justru bersinonim dengan dermawan.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Kalimat "Angin sepoi-sepoi membelai rambutku" menggunakan majas...',
      opts: ['Hiperbola', 'Simile', 'Personifikasi', 'Metafora'],
      ans: 2,
      hint: 'Majas ini membuat benda mati seolah-olah bisa melakukan kegiatan seperti manusia.',
      explanation: 'Personifikasi adalah majas yang memberikan sifat/perilaku manusia kepada benda mati atau alam. "Membelai" adalah kegiatan manusia — di sini angin seolah bisa membelai seperti tangan manusia.'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Ungkapan "panjang tangan" bermakna orang yang suka _.',
      ans: 'mencuri',
      hint: 'Bayangkan orang yang tangannya "panjang" bisa mengambil barang orang lain tanpa diketahui.',
      explanation: '"Panjang tangan" adalah ungkapan yang bermakna suka mencuri atau mengambil milik orang lain. Ungkapan tidak boleh diartikan secara harfiah (tangan yang benar-benar panjang).'
    },

    // --- SEDANG (6-10) ---
    {
      type: 'mc',
      level: 'sedang',
      q: 'Perhatikan kalimat berikut!\n\n"Suaranya sekeras petir yang menggelegar, membuat seluruh ruangan bergetar."\n\nMajas yang digunakan adalah...',
      opts: [
        'Personifikasi — memberi sifat manusia pada benda',
        'Metafora — perbandingan langsung tanpa kata pembanding',
        'Hiperbola — melebih-lebihkan kenyataan',
        'Simile — perbandingan menggunakan kata "seperti/bagai"'
      ],
      ans: 2,
      hint: 'Apakah suara seseorang bisa benar-benar membuat ruangan bergetar? Majas apa yang melebih-lebihkan?',
      explanation: 'Hiperbola adalah majas yang melebih-lebihkan sesuatu melebihi kenyataan. Kalimat ini melebih-lebihkan kerasnya suara seseorang — dalam kenyataan, suara manusia tidak bisa menggetar-getar seluruh ruangan seperti petir.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Bacalah kalimat-kalimat berikut!\n\n(1) Bunga itu bermakna "baik hati" dalam bahasa bunga.\n(2) Bunga bank yang dikenakan sangat tinggi.\n(3) Taman sekolah dipenuhi bunga-bunga berwarna cerah.\n(4) Dia adalah bunga desa yang dikagumi semua orang.\n\nKalimat yang menggunakan makna DENOTATIF kata "bunga" adalah...',
      opts: ['Kalimat (1) dan (4)', 'Kalimat (2) dan (4)', 'Kalimat (3) saja', 'Kalimat (1) dan (2)'],
      ans: 2,
      hint: 'Makna denotatif = makna asli/sebenarnya. Di kalimat mana "bunga" berarti tanaman berbunga sesungguhnya?',
      explanation: 'Makna denotatif adalah makna sebenarnya/lugas. Hanya kalimat (3) yang menggunakan "bunga" sebagai tanaman sesungguhnya. Kalimat (1) = makna kiasan dalam "bahasa bunga", (2) = bunga bank/rente (kiasan), (4) = bunga desa = perempuan cantik (kiasan/konotatif).'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Kata yang merupakan SINONIM dari "bijaksana" adalah...',
      opts: ['Sombong', 'Arif', 'Keras kepala', 'Ceroboh'],
      ans: 1,
      hint: 'Bijaksana artinya mampu mempertimbangkan sesuatu dengan baik dan adil. Kata mana yang bermakna sama?',
      explanation: '"Arif" bermakna pandai dalam mempertimbangkan sesuatu, bijak, dan berpengalaman — ini sinonim "bijaksana". Sombong = lawan dari rendah hati; keras kepala = tidak mau mendengar; ceroboh = tidak teliti.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Perhatikan ungkapan-ungkapan berikut!\n\n(A) Besar kepala\n(B) Angkat kaki\n(C) Ringan tangan\n(D) Tinggi hati\n\nUngkapan yang bermakna POSITIF (hal baik) adalah...',
      opts: ['A dan D', 'B dan C', 'C saja', 'A dan B'],
      ans: 2,
      hint: '"Ringan tangan" — apakah ini sifat yang baik atau buruk? Pikirkan artinya!',
      explanation: '"Ringan tangan" = suka membantu/rajin membantu orang lain (positif). Sedangkan: Besar kepala = sombong (negatif), Angkat kaki = pergi/meninggalkan (netral/negatif), Tinggi hati = sombong/angkuh (negatif). Hanya C (ringan tangan) yang bermakna positif.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Kalimat mana yang menggunakan majas SIMILE (perumpamaan)?',
      opts: [
        'Matahari tersenyum cerah pagi ini.',
        'Hidup adalah perjalanan panjang yang penuh tikungan.',
        'Wajahnya bagai rembulan di malam purnama.',
        'Suaranya menggelegar membelah langit.'
      ],
      ans: 2,
      hint: 'Simile menggunakan kata pembanding seperti "bagai", "seperti", "laksana", "bagaikan".',
      explanation: 'Simile menggunakan kata pembanding eksplisit untuk menyamakan dua hal. Kalimat C menggunakan kata "bagai" — wajah dibandingkan dengan rembulan. Pilihan A = personifikasi, B = metafora (perbandingan tanpa "bagai/seperti"), D = hiperbola.'
    },

    // --- SULIT (11-15) ---
    {
      type: 'mc',
      level: 'sulit',
      q: 'Bacalah kutipan fabel berikut!\n\n<div class="tka-reading-box"><b>Kancil dan Buaya yang Serakah</b><p>Kancil ingin menyeberangi sungai yang deras. Ia berpura-pura berteriak, "Hei Buaya! Raja Hutan memerintahku menghitung kalian. Berbarislah dari tepi ke tepi!" Para buaya langsung berbaris rapi. Kancil melompat dari punggung satu buaya ke buaya berikutnya sambil berhitung, dan tiba-tiba sudah sampai di seberang. Kancil tertawa kecil, "Terima kasih! Ternyata kalian tidak hanya ganas, tapi juga <b>mudah ditipu!</b>"</p></div>\n\nMakna TERSIRAT dari fabel di atas adalah...',
      opts: [
        'Buaya adalah hewan berbahaya yang harus dihindari',
        'Kecerdasan dan akal dapat mengalahkan kekuatan fisik yang lebih besar',
        'Kancil adalah hewan yang tidak jujur dan tidak patut diteladani',
        'Sungai yang deras sangat berbahaya untuk diseberangi sendirian'
      ],
      ans: 1,
      hint: 'Apa pesan tersembunyi di balik cerita ini? Bukan hanya tentang kancil dan buaya, tapi tentang nilai kehidupan apa?',
      explanation: 'Makna tersirat adalah pesan yang tidak disebutkan langsung tetapi dapat ditangkap dari isi cerita. Fabel ini mengajarkan bahwa kecerdasan (akal) dapat mengalahkan kekuatan fisik yang lebih besar. Kancil yang kecil berhasil mengalahkan buaya yang besar dan berbahaya menggunakan kelicikan — pesan ini berlaku dalam kehidupan nyata.'
    },
    {
      type: 'mc',
      level: 'sulit',
      q: 'Kalimat "Gedung pencakar langit itu berdiri dengan angkuh di tengah kota" mengandung dua majas sekaligus. Majas apa saja?',
      opts: [
        'Hiperbola dan simile',
        'Personifikasi dan metafora',
        'Personifikasi dan hiperbola',
        'Simile dan metafora'
      ],
      ans: 2,
      hint: '"Pencakar langit" — apakah gedung sungguh bisa mencakar? "Berdiri dengan angkuh" — apakah gedung punya perasaan angkuh?',
      explanation: '"Pencakar langit" = hiperbola, melebih-lebihkan tinggi gedung seolah sampai mencakar langit. "Berdiri dengan angkuh" = personifikasi, gedung (benda mati) seolah punya sifat manusia yaitu angkuh. Jadi kalimat ini mengandung hiperbola + personifikasi.'
    },
    {
      type: 'mc',
      level: 'sulit',
      q: 'Perhatikan pasangan kata berikut!\n\n(1) Senang — Gembira\n(2) Pandai — Bodoh\n(3) Cepat — Lambat\n(4) Besar — Luas\n(5) Berani — Pengecut\n\nPasangan yang merupakan ANTONIM adalah...',
      opts: [
        '(1), (4), dan (5)',
        '(2), (3), dan (5)',
        '(1), (2), dan (3)',
        '(3), (4), dan (5)'
      ],
      ans: 1,
      hint: 'Antonim = berlawanan makna. Sinonim = mirip/sama maknanya. Cek setiap pasangan!',
      explanation: 'Antonim (berlawanan): (2) Pandai–Bodoh ✓, (3) Cepat–Lambat ✓, (5) Berani–Pengecut ✓. Sinonim (sama makna): (1) Senang–Gembira ✓ (bukan antonim), (4) Besar–Luas (mirip tapi tidak sama persis, bukan antonim khas). Jawaban: (2), (3), (5).'
    },
    {
      type: 'fill',
      level: 'sulit',
      q: 'Kata bercetak tebal dalam kalimat "Ibu menangis _ melihat anaknya berhasil menjadi dokter" yang paling tepat untuk melengkapi adalah kata yang bermakna konotatif "sangat bahagia hingga meneteskan air mata". Kata yang tepat adalah "menangis _".',
      ans: 'haru',
      hint: 'Ada jenis tangisan yang menunjukkan kebahagiaan yang meluap-luap, bukan kesedihan.',
      explanation: '"Menangis haru" adalah ungkapan yang bermakna menangis karena perasaan bahagia/terharu yang sangat mendalam — bukan karena sedih. Ini adalah makna konotatif dari "menangis" yang lazim digunakan dalam konteks keberhasilan atau momen menyentuh hati.'
    },
    {
      type: 'mc',
      level: 'sulit',
      q: 'Bacalah kalimat berikut!\n\n"Tangannya adalah emas bagi keluarganya."\n\nKalimat ini menggunakan majas metafora. Apa makna kalimat tersebut?',
      opts: [
        'Tangannya terbuat dari logam mulia berwarna kuning',
        'Ia memiliki gelang emas yang sangat berharga di tangannya',
        'Kemampuan/keahlian tangannya sangat bernilai dan menjadi sumber penghidupan keluarga',
        'Ia bekerja di tambang emas untuk menghidupi keluarganya'
      ],
      ans: 2,
      hint: 'Metafora membandingkan dua hal secara langsung. "Tangan = emas" — apa yang membuat tangan seseorang bisa disebut "emas"?',
      explanation: 'Metafora membandingkan dua hal tanpa kata pembanding (seperti/bagai). "Tangan adalah emas" — emas = sesuatu yang sangat berharga. Maknanya: keahlian/kemampuan tangan orang itu sangat berharga dan menjadi sumber penghasilan yang menghidupi keluarganya (misalnya pengrajin, tukang, atau seniman).'
    },
  ],

  // ============================================================
  //  bindo-10 | IMBUHAN (me-, pe-, -an, -kan, -lah)
  // ============================================================
  'bindo-10': [

    // --- MUDAH (1-5) ---
    {
      type: 'mc',
      level: 'mudah',
      q: 'Kata "berlari" terbentuk dari kata dasar "lari" dengan imbuhan...',
      opts: ['me-', 'ber-', 'ter-', 'pe-'],
      ans: 1,
      hint: 'Perhatikan huruf-huruf di awal kata "berlari" — imbuhan apa yang ditambahkan sebelum kata "lari"?',
      explanation: '"Berlari" = ber- + lari. Imbuhan "ber-" menyatakan melakukan perbuatan atau kegiatan. Contoh lain: berjalan, bermain, belajar, bersekolah.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Kata dasar dari "pembelajaran" adalah...',
      opts: ['Belajaran', 'Ajar', 'Pelajar', 'Pembelajaran'],
      ans: 1,
      hint: 'Lepaskan semua imbuhan: pe-, -an, dan ber-. Kata apa yang tersisa?',
      explanation: '"Pembelajaran" = pe + bel + ajar + an. Proses pembentukannya: ajar → belajar → pembelajaran. Kata dasarnya adalah "ajar".'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Imbuhan "me-" pada kata "membaca" berfungsi untuk...',
      opts: [
        'Menyatakan tempat melakukan sesuatu',
        'Menyatakan melakukan pekerjaan/kegiatan (verba aktif)',
        'Menyatakan hasil dari suatu pekerjaan',
        'Menyatakan orang yang melakukan pekerjaan'
      ],
      ans: 1,
      hint: '"Membaca" artinya sedang melakukan kegiatan baca. Imbuhan me- membentuk kata...',
      explanation: 'Imbuhan "me-" membentuk kata kerja aktif (verba) yang menyatakan seseorang melakukan suatu pekerjaan. Membaca = melakukan kegiatan baca. Contoh: menulis, menggambar, memasak, membantu.'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Kata "tolong" jika ditambah imbuhan "-lah" menjadi "_", yang digunakan untuk memperhalus perintah.',
      ans: 'tolonglah',
      hint: 'Tambahkan -lah di belakang kata "tolong".',
      explanation: '"Tolonglah" = tolong + -lah. Imbuhan "-lah" berfungsi memperhalus kalimat perintah atau permohonan. Contoh lain: bacalah, tulislah, diamlah, makanlah.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Kata berimbuhan "pe-" yang bermakna "orang yang melakukan pekerjaan" adalah...',
      opts: ['Perjalanan', 'Pelari', 'Memimpin', 'Makanan'],
      ans: 1,
      hint: '"Pe-" + kata kerja = orang yang melakukan pekerjaan itu.',
      explanation: '"Pelari" = pe- + lari = orang yang berlari/berolahraga lari. Imbuhan "pe-" menyatakan pelaku pekerjaan. Contoh: penulis, penari, pengajar, pembaca.'
    },

    // --- SEDANG (6-10) ---
    {
      type: 'mc',
      level: 'sedang',
      q: 'Perhatikan kalimat berikut!\n\n"Ibu _kan sarapan untuk kami setiap pagi."\n\nKata berimbuhan yang tepat untuk melengkapi kalimat di atas adalah...',
      opts: ['Menyiapkan', 'Penyiapan', 'Disiapkan', 'Persiapan'],
      ans: 0,
      hint: 'Subjek kalimat adalah "Ibu" yang aktif melakukan sesuatu. Butuh kata kerja aktif.',
      explanation: '"Menyiapkan" tepat karena kalimat aktif dengan subjek "Ibu" yang melakukan pekerjaan. Imbuhan "me-...-kan" membentuk kata kerja aktif transitif. Penyiapan = kata benda, Disiapkan = kata kerja pasif, Persiapan = kata benda.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Imbuhan "-kan" pada kata "bacakan" dan "tuliskan" berfungsi untuk...',
      opts: [
        'Menyatakan kegiatan untuk orang lain (benefaktif)',
        'Menyatakan pelaku pekerjaan',
        'Menyatakan tempat melakukan sesuatu',
        'Menyatakan hasil pekerjaan'
      ],
      ans: 0,
      hint: '"Bacakan cerita itu untukku!" — siapa yang diuntungkan dari kegiatan membacakan?',
      explanation: 'Imbuhan "-kan" di akhir kata kerja sering menyatakan melakukan sesuatu untuk/demi kepentingan orang lain (makna benefaktif). "Bacakan" = baca untuk orang lain. "Tuliskan" = tulis untuk orang lain. Contoh: ambilkan, belikan, carikan.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Kata "pengiriman" memiliki imbuhan...',
      opts: [
        'pe- dan -an',
        'peng- dan -an',
        'penge- dan -an',
        'me- dan -an'
      ],
      ans: 1,
      hint: 'Kata dasar "kirim". Apa yang terjadi pada huruf awal "k" ketika bertemu imbuhan pe-?',
      explanation: '"Pengiriman" = peng- + kirim + -an. Huruf "k" pada "kirim" luluh (hilang) ketika bertemu imbuhan "me-/pe-" jika diawali huruf k, p, t, s. Jadi bukan "peng-k-iriman" tapi "peng-iriman". Imbuhan gabungannya: peng- + -an.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Manakah kalimat yang menggunakan imbuhan "me-" dengan BENAR?',
      opts: [
        'Dia mentari buku di perpustakaan.',
        'Adik membantu ibu mencuci piring.',
        'Mereka mepersiapkan acara ulang tahun.',
        'Kami mengunjungi ke rumah nenek.'
      ],
      ans: 1,
      hint: 'Cek apakah bentuk kata berimbuhan sudah benar dan tidak ada kesalahan tambahan.',
      explanation: 'Pilihan B benar: "membantu" (me- + bantu) dan "mencuci" (me- + cuci) sudah benar. Pilihan A: "mentari" salah, seharusnya "meminjam" (dari pinjam). Pilihan C: seharusnya "mempersiapkan". Pilihan D: "mengunjungi ke" salah, kata "ke" tidak diperlukan setelah mengunjungi.'
    },
    {
      type: 'fill',
      level: 'sedang',
      q: 'Kata dasar "tulis" jika diberi imbuhan "me-" + "-an" menjadi "_ -an", yang bermakna kegiatan menulis dalam jumlah banyak atau untuk orang lain.',
      ans: 'menuliskan',
      hint: 'me- + tulis + -kan = ?',
      explanation: '"Menuliskan" = me- + tulis + -kan. Contoh penggunaan: "Ibu guru menuliskan soal di papan tulis untuk murid-murid." Imbuhan me-...-kan = melakukan untuk kepentingan pihak lain atau membuat sesuatu menjadi tertulis.'
    },

    // --- SULIT (11-15) ---
    {
      type: 'mc',
      level: 'sulit',
      q: 'Perhatikan deretan kata berikut!\n\nmembeli, memperluas, memperindah, mempertinggi\n\nAmbuhan yang digunakan pada kata "memperindah" dan "mempertinggi" adalah...',
      opts: [
        'me- + per- (gabungan dua imbuhan)',
        'memper- (satu imbuhan gabung)',
        'me- saja',
        'per- + -i atau per- + -kan'
      ],
      ans: 1,
      hint: 'Coba pisahkan: mem-per-indah. Apakah "memper-" adalah satu kesatuan imbuhan?',
      explanation: '"Memper-" adalah imbuhan gabung yang tidak bisa dipisah menjadi "me-" dan "per-" secara terpisah dalam konteks ini. "Memperindah" = memper- + indah (membuat menjadi lebih indah). "Mempertinggi" = memper- + tinggi (membuat menjadi lebih tinggi). Imbuhan "memper-" menyatakan "membuat sesuatu menjadi lebih...".'
    },
    {
      type: 'mc',
      level: 'sulit',
      q: 'Kalimat mana yang menggunakan imbuhan dengan TEPAT sesuai kaidah bahasa Indonesia?',
      opts: [
        'Para siswa mentaati peraturan sekolah dengan baik.',
        'Ibu menggorengkan ikan untuk makan siang kami.',
        'Pemerintah memperbarui kebijakan pendidikan.',
        'Semua jawaban benar'
      ],
      ans: 2,
      hint: 'Periksa: "mentaati" vs "menaati" — mana yang benar? Apakah "t" pada "taati" luluh?',
      explanation: 'Pilihan C benar: "memperbarui" adalah bentuk yang tepat. Pilihan A salah: seharusnya "menaati" bukan "mentaati" — huruf "t" luluh menjadi "men-" (me + taati = menaati). Pilihan B: "menggorengkan" — me + goreng + kan = menggorengkan, ini sebenarnya sudah benar juga. Namun "menaati" pada A jelas salah.'
    },
    {
      type: 'mc',
      level: 'sulit',
      q: 'Kata "pelajaran" dan "pengajaran" sama-sama mengandung kata dasar "ajar". Perbedaan makna keduanya adalah...',
      opts: [
        'Keduanya bermakna sama, hanya variasi imbuhan',
        'Pelajaran = materi yang dipelajari; Pengajaran = proses/cara mengajar',
        'Pelajaran = kegiatan mengajar; Pengajaran = hasil dari belajar',
        'Tidak ada perbedaan yang signifikan antara keduanya'
      ],
      ans: 1,
      hint: '"Pelajaran matematika hari ini..." — itu materinya. "Pengajaran guru itu sangat baik..." — itu prosesnya.',
      explanation: '"Pelajaran" (pe- + ajar + -an) = materi/bahan yang dipelajari. Contoh: pelajaran IPA, pelajaran sejarah. "Pengajaran" (peng- + ajar + -an) = proses, cara, atau kegiatan mengajarkan sesuatu. Contoh: metode pengajaran guru tersebut sangat efektif. Imbuhan berbeda menghasilkan makna berbeda meski dari kata dasar yang sama.'
    },
    {
      type: 'fill',
      level: 'sulit',
      q: 'Kata "besar" jika diberi imbuhan "memper-...-kan" menjadi "memper_kan", bermakna "menjadikan sesuatu lebih besar".',
      ans: 'memperbesarkan',
      hint: 'memper- + besar + -kan = ?',
      explanation: '"Memperbesar" = memper- + besar (sudah benar tanpa -kan). Namun bentuk lengkap dengan -kan: "memperbesarkan" juga digunakan dalam konteks tertentu, misalnya "ia memperbesarkan foto tersebut untuk dipajang". Imbuhan memper-...-kan = causatif (menjadikan sesuatu lebih...).'
    },
    {
      type: 'mc',
      level: 'sulit',
      q: 'Perhatikan kata-kata berikut: memasak, menyanyi, memukul, menghapus.\n\nManakah pernyataan yang BENAR tentang huruf yang luluh pada proses pengimbuhan "me-"?',
      opts: [
        'Huruf "m" pada memasak luluh karena kata dasar "masak" berawalan m',
        'Tidak ada huruf yang luluh; semua tetap utuh',
        'Huruf "p" pada memukul luluh — seharusnya "memukul" bukan "mepukul"',
        'Huruf "m" dan "n" tidak pernah luluh ketika bertemu imbuhan me-'
      ],
      ans: 3,
      hint: 'Kata dasar yang berawalan m, n, l, r, w, y tidak mengalami peluluhan saat bertemu me-.',
      explanation: 'Aturan peluluhan: huruf k, p, t, s luluh jika bertemu me-. Namun huruf m, n, l, r, w, y TIDAK luluh. "Memasak" = me- + masak (m tidak luluh, tetap). "Menyanyi" = me- + nyanyi (n tidak luluh). "Memukul" = me- + pukul (p luluh → m). "Menghapus" = me- + hapus (h tidak luluh tapi menjadi meng-).'
    },
  ],

  // ============================================================
  //  bindo-11 | LITERASI & TEKS (Gagasan Utama, Amanat, Tokoh, Nilai)
  // ============================================================
  'bindo-11': [

    // --- MUDAH (1-5) ---
    {
      type: 'mc',
      level: 'mudah',
      q: 'Gagasan utama sebuah paragraf biasanya ditemukan di...',
      opts: [
        'Hanya di tengah-tengah paragraf',
        'Kalimat pertama, terakhir, atau keduanya (awal dan akhir)',
        'Selalu di kalimat terakhir saja',
        'Di luar paragraf, pada judul'
      ],
      ans: 1,
      hint: 'Apakah gagasan utama hanya ada di satu posisi saja? Ingat ada paragraf deduktif, induktif, dan campuran.',
      explanation: 'Gagasan utama (ide pokok) bisa terletak di: (1) awal paragraf = deduktif, (2) akhir paragraf = induktif, (3) awal dan akhir = campuran/deduktif-induktif. Kalimat lainnya adalah kalimat penjelas/pendukung.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Dalam sebuah cerita, "amanat" adalah...',
      opts: [
        'Nama tokoh utama dalam cerita',
        'Tempat dan waktu terjadinya cerita',
        'Pesan moral atau pelajaran hidup yang ingin disampaikan pengarang',
        'Masalah atau konflik yang terjadi dalam cerita'
      ],
      ans: 2,
      hint: 'Apa yang ingin diajarkan pengarang kepada pembaca melalui ceritanya?',
      explanation: 'Amanat adalah pesan moral, pelajaran hidup, atau nasihat yang ingin disampaikan pengarang melalui ceritanya. Amanat biasanya tidak ditulis langsung, tapi tersirat dari peristiwa dan perilaku tokoh. Contoh: "Jadilah jujur dalam segala keadaan."'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Bacalah paragraf berikut!\n\n<div class="tka-reading-box">"Hutan hujan tropis Indonesia menyimpan kekayaan hayati yang luar biasa. Di dalamnya hidup ribuan jenis tumbuhan dan hewan langka. Beberapa spesies bahkan belum pernah ditemukan oleh ilmuwan sekalipun. Hutan ini juga berfungsi sebagai paru-paru dunia yang menghasilkan oksigen bagi makhluk hidup."</div>\n\nGagasan utama paragraf tersebut adalah...',
      opts: [
        'Hutan hujan tropis berfungsi sebagai paru-paru dunia',
        'Ada ribuan jenis tumbuhan dan hewan di hutan Indonesia',
        'Hutan hujan tropis Indonesia menyimpan kekayaan hayati yang luar biasa',
        'Beberapa spesies belum ditemukan oleh ilmuwan'
      ],
      ans: 2,
      hint: 'Kalimat mana yang merangkum isi seluruh paragraf? Cari kalimat yang paling "umum/luas".',
      explanation: 'Gagasan utama ada di kalimat PERTAMA: "Hutan hujan tropis Indonesia menyimpan kekayaan hayati yang luar biasa." Ini adalah paragraf deduktif — kalimat pertama merupakan ide pokok, kalimat berikutnya adalah penjelas (fungsi hutan, jenis spesies, dll).'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Unsur tokoh dalam cerita fiksi meliputi...',
      opts: [
        'Hanya nama dan pekerjaan tokoh',
        'Nama, sifat/watak, dan peran tokoh dalam cerita',
        'Tempat tinggal dan umur tokoh saja',
        'Dialog yang diucapkan tokoh'
      ],
      ans: 1,
      hint: 'Saat menganalisis tokoh, apa saja yang perlu kita ketahui tentang tokoh tersebut?',
      explanation: 'Analisis tokoh mencakup: nama, sifat/watak (protagonis/antagonis), dan perannya dalam cerita. Sifat tokoh bisa diketahui dari: dialog tokoh, tindakan tokoh, deskripsi pengarang, dan komentar tokoh lain.'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Tokoh yang memiliki sifat jahat atau menjadi lawan tokoh utama disebut tokoh _.',
      ans: 'antagonis',
      hint: 'Dalam cerita, ada dua jenis tokoh utama: protagonis (baik) dan... (jahat)?',
      explanation: 'Tokoh antagonis adalah tokoh yang bersifat jahat, menjadi penghalang atau lawan tokoh utama (protagonis). Contoh: Srikandi vs Kumbakarna, atau Cinderella vs ibu tiri. Antagonis tidak selalu jahat secara mutlak, tapi berkonflik dengan protagonis.'
    },

    // --- SEDANG (6-10) ---
    {
      type: 'mc',
      level: 'sedang',
      q: 'Bacalah teks eksplanasi berikut!\n\n<div class="tka-reading-box"><b>Mengapa Langit Berwarna Biru?</b><p>Langit tampak biru bukan karena memang berwarna biru. Cahaya matahari sebenarnya terdiri dari berbagai warna. Ketika cahaya masuk ke atmosfer, ia bertabrakan dengan molekul udara — proses ini disebut <i>hamburan Rayleigh</i>. Warna biru memiliki gelombang lebih pendek dibanding merah, sehingga lebih mudah terhambur ke segala penjuru langit. Itulah mengapa kita melihat langit berwarna biru.</p></div>\n\nGagasan utama teks tersebut adalah...',
      opts: [
        'Cahaya matahari terdiri dari berbagai warna',
        'Hamburan Rayleigh adalah proses tabrakan cahaya dengan molekul udara',
        'Langit tampak biru karena proses hamburan cahaya oleh atmosfer bumi',
        'Warna biru memiliki gelombang yang lebih pendek dari warna merah'
      ],
      ans: 2,
      hint: 'Teks ini menjelaskan MENGAPA langit biru. Kalimat mana yang merangkum jawaban atas pertanyaan itu?',
      explanation: 'Gagasan utama teks adalah: mengapa langit berwarna biru, yaitu karena proses hamburan cahaya matahari oleh atmosfer (hamburan Rayleigh). Kalimat lain adalah penjelasan pendukung: warna biru gelombangnya pendek (fakta pendukung), hamburan Rayleigh (proses detail).'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Makna TERSURAT berbeda dengan makna TERSIRAT. Perbedaannya adalah...',
      opts: [
        'Tersurat = ada di judul; Tersirat = ada di isi teks',
        'Tersurat = dinyatakan langsung/eksplisit dalam teks; Tersirat = harus disimpulkan/implisit',
        'Tersurat = makna kiasan; Tersirat = makna sebenarnya',
        'Tersurat = pesan moral; Tersirat = fakta dalam teks'
      ],
      ans: 1,
      hint: 'Tersurat = tertulis jelas. Tersirat = tersembunyi, harus dicari maknanya.',
      explanation: 'Makna tersurat = informasi yang dinyatakan secara langsung dan jelas dalam teks (bisa ditemukan kata per kata). Makna tersirat = informasi yang tidak dinyatakan langsung, harus disimpulkan dari konteks, tokoh, atau peristiwa dalam teks.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Bacalah fabel berikut!\n\n<div class="tka-reading-box"><p>Semut yang rajin mengumpulkan makanan sepanjang musim panas, sementara Belalang asyik bernyanyi. Ketika musim dingin tiba, Belalang kelaparan dan meminta bantuan Semut. Semut pun memberi makan Belalang sambil berkata, "Inilah akibat tidak mau bekerja keras saat ada waktu."</p></div>\n\nAmanat yang paling tepat dari fabel di atas adalah...',
      opts: [
        'Jangan bernyanyi terlalu keras agar tidak mengganggu tetangga',
        'Semut adalah hewan yang pelit karena tidak langsung memberi makan',
        'Bersiaplah sejak dini dan jangan menyia-nyiakan waktu yang ada',
        'Musim dingin adalah waktu yang berbahaya bagi semua hewan'
      ],
      ans: 2,
      hint: 'Apa pelajaran hidup yang bisa diambil dari perilaku Semut dan Belalang?',
      explanation: 'Amanat fabel ini: "Bersiaplah dari jauh-jauh hari dan gunakan waktu dengan baik." Semut menjadi contoh positif (kerja keras, bersiap dini), Belalang menjadi contoh negatif (malas, tidak berpikir ke depan). Pengarang ingin pembaca meneladani sikap Semut.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Nilai yang terkandung dalam sebuah cerita dibagi menjadi beberapa jenis. Kalimat "Meskipun miskin, Pak Hasan selalu jujur dan tidak pernah mencuri" mencerminkan nilai...',
      opts: ['Nilai budaya', 'Nilai sosial', 'Nilai moral/etika', 'Nilai agama'],
      ans: 2,
      hint: 'Nilai apa yang berkaitan dengan perilaku baik-buruk, benar-salah dalam kehidupan?',
      explanation: 'Nilai moral/etika berkaitan dengan perilaku manusia yang dinilai baik-buruk, benar-salah dalam kehidupan bermasyarakat. Kejujuran Pak Hasan mencerminkan nilai moral positif. Nilai agama = berkaitan dengan keyakinan/ibadah; Nilai sosial = hubungan antar manusia; Nilai budaya = adat/tradisi.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Kalimat pendukung dalam sebuah paragraf berfungsi untuk...',
      opts: [
        'Mengganti gagasan utama jika tidak jelas',
        'Menjelaskan, menguraikan, atau memberikan contoh untuk gagasan utama',
        'Membuat paragraf menjadi lebih panjang',
        'Menyimpulkan isi seluruh teks bacaan'
      ],
      ans: 1,
      hint: 'Jika gagasan utama = inti/kesimpulan, maka kalimat pendukung bertugas untuk...',
      explanation: 'Kalimat pendukung (penjelas) berfungsi menjelaskan, menguraikan, memberikan contoh, atau membuktikan gagasan utama. Tanpa kalimat pendukung, gagasan utama akan terasa hampa dan tidak meyakinkan.'
    },

    // --- SULIT (11-15) ---
    {
      type: 'mc',
      level: 'sulit',
      q: 'Bacalah dua paragraf berikut!\n\n<div class="tka-reading-box"><p><b>Paragraf 1:</b> Lingkungan yang bersih sangat penting bagi kesehatan masyarakat. Sampah yang menumpuk dapat menjadi sarang penyakit berbahaya. Banjir sering terjadi akibat got tersumbat oleh tumpukan sampah. Oleh karena itu, menjaga kebersihan lingkungan adalah tanggung jawab semua warga.</p><p><b>Paragraf 2:</b> Beberapa warga RT 05 mulai resah. Tumpukan sampah di sudut jalan semakin tinggi. Bau tidak sedap menyebar hingga ke dalam rumah. Anak-anak pun mulai batuk-batuk. Kondisi ini sudah berlangsung dua minggu.</p></div>\n\nPerbedaan gagasan utama kedua paragraf tersebut adalah...',
      opts: [
        'Paragraf 1 tentang kebersihan, Paragraf 2 tentang penyakit',
        'Paragraf 1 membahas pentingnya kebersihan lingkungan secara umum; Paragraf 2 menggambarkan kondisi nyata sampah yang bermasalah di RT 05',
        'Keduanya sama-sama membahas bahaya sampah',
        'Paragraf 1 tentang banjir; Paragraf 2 tentang anak yang sakit'
      ],
      ans: 1,
      hint: 'Cari kalimat utama di masing-masing paragraf, lalu bandingkan cakupan dan isinya.',
      explanation: 'Paragraf 1 (deduktif) — gagasan utama: "Lingkungan bersih penting bagi kesehatan" → umum/teoritis. Paragraf 2 (induktif) — menggambarkan fakta nyata di RT 05, gagasan utamanya tersurat di akhir (kondisi sampah bermasalah). Paragraf 1 bersifat umum-normatif; Paragraf 2 bersifat khusus-faktual.'
    },
    {
      type: 'mc',
      level: 'sulit',
      q: 'Seorang siswa membaca cerita tentang seorang anak yang rela berbagi makanannya dengan teman yang kelaparan meski ia sendiri lapar. Dari teks tersebut, nilai yang bisa diambil adalah nilai...\n\nPilih jawaban yang PALING LENGKAP dan TEPAT!',
      opts: [
        'Nilai sosial saja — karena berkaitan dengan hubungan antar manusia',
        'Nilai moral saja — karena tindakan berbagi adalah tindakan baik',
        'Nilai sosial dan moral sekaligus — berbagi menyangkut hubungan antar manusia (sosial) sekaligus mencerminkan kebaikan hati (moral)',
        'Nilai budaya — karena berbagi adalah tradisi masyarakat'
      ],
      ans: 2,
      hint: 'Satu peristiwa bisa mengandung lebih dari satu jenis nilai sekaligus.',
      explanation: 'Berbagi makanan mengandung: (1) Nilai sosial — menunjukkan kepedulian dan kesetiakawanan antar manusia, (2) Nilai moral — kerelaan berkorban demi orang lain adalah tindakan baik/mulia. Satu tindakan bisa mengandung berbagai nilai sekaligus — ini yang membuat analisis teks menjadi kaya.'
    },
    {
      type: 'mc',
      level: 'sulit',
      q: 'Bacalah kutipan cerita berikut!\n\n<div class="tka-reading-box"><p>"Rara diam seribu bahasa ketika namanya tidak disebut dalam daftar juara. Tangannya mengepal erat. Ia menatap lantai, menghitung ubin satu per satu agar air matanya tidak jatuh."</p></div>\n\nPeristiwa apa yang dialami Rara? Jawaban mana yang menangkap MAKNA TERSIRAT paling tepat?',
      opts: [
        'Rara sedang belajar menghitung ubin di lantai',
        'Rara sangat kecewa karena tidak menjadi juara, namun berusaha menahan diri agar tidak menangis di depan umum',
        'Rara marah kepada panitia karena namanya tidak disebut',
        'Rara tidak suka berada di tempat pengumuman juara'
      ],
      ans: 1,
      hint: '"Diam seribu bahasa", "mengepal erat", "menghitung ubin agar air mata tidak jatuh" — apa yang ingin diungkapkan dari ekspresi-ekspresi ini?',
      explanation: 'Makna tersirat ditangkap dari detail ekspresi tokoh: "diam seribu bahasa" = tidak berkata-kata karena perasaan kuat, "tangan mengepal" = menahan emosi, "menghitung ubin agar air mata tidak jatuh" = berusaha keras menahan tangis. Semua ini menggambarkan kekecewaan mendalam yang ditahan dengan sekuat tenaga.'
    },
    {
      type: 'fill',
      level: 'sulit',
      q: 'Dalam menganalisis cerita, selain tokoh dan amanat, ada unsur yang menyatakan kapan dan di mana cerita terjadi. Unsur itu disebut _.',
      ans: 'latar',
      hint: 'Unsur intrinsik cerita: tema, tokoh, alur, ... (tempat/waktu/suasana), sudut pandang, amanat.',
      explanation: '"Latar" (setting) adalah unsur intrinsik yang menyatakan tempat, waktu, dan suasana terjadinya peristiwa dalam cerita. Latar dibagi menjadi: latar tempat (di mana), latar waktu (kapan), dan latar suasana (bagaimana kondisinya).'
    },
    {
      type: 'mc',
      level: 'sulit',
      q: 'Kalimat berikut manakah yang merupakan kalimat FAKTA (bukan opini)?',
      opts: [
        'Menurut saya, film Indonesia saat ini semakin berkualitas.',
        'Sebaiknya siswa lebih banyak membaca buku agar pintar.',
        'Komodo adalah hewan reptil terbesar di dunia yang dilindungi.',
        'Sepertinya cuaca hari ini akan hujan deras.'
      ],
      ans: 2,
      hint: 'Fakta = bisa dibuktikan kebenarannya. Opini = pendapat, perkiraan, saran yang bisa berbeda-beda.',
      explanation: 'Fakta dapat dibuktikan secara ilmiah: Komodo memang hewan reptil terbesar yang dilindungi — ini verifikabel. Pilihan A menggunakan "menurut saya" (opini). Pilihan B menggunakan "sebaiknya" (saran/opini). Pilihan D menggunakan "sepertinya" (perkiraan/opini).'
    },
  ],

  // ============================================================
  //  bindo-12 | JENIS TEKS (Fiksi & Non-fiksi)
  // ============================================================
  'bindo-12': [

    // --- MUDAH (1-5) ---
    {
      type: 'mc',
      level: 'mudah',
      q: 'Teks eksplanasi bertujuan untuk...',
      opts: [
        'Menghibur pembaca dengan cerita yang menarik',
        'Menjelaskan proses terjadinya suatu fenomena alam atau sosial',
        'Membujuk pembaca agar setuju dengan pendapat penulis',
        'Menceritakan perjalanan hidup seseorang'
      ],
      ans: 1,
      hint: '"Eksplanasi" berasal dari kata "explain" = menjelaskan. Menjelaskan apa?',
      explanation: 'Teks eksplanasi bertujuan menjelaskan proses terjadinya suatu fenomena — baik fenomena alam (hujan, gempa, pelangi) maupun sosial (kemiskinan, urbanisasi). Strukturnya: pernyataan umum → deretan penjelas → simpulan.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Yang termasuk karya sastra FIKSI adalah...',
      opts: [
        'Biografi, Eksposisi, Argumentasi',
        'Puisi, Cerpen, Fabel, Legenda',
        'Pidato, Iklan, Surat Resmi',
        'Laporan Perjalanan, Pengumuman, Brosur'
      ],
      ans: 1,
      hint: 'Fiksi = karangan/tidak benar-benar terjadi. Mana yang merupakan hasil imajinasi pengarang?',
      explanation: 'Karya fiksi adalah cerita rekaan/khayalan. Meliputi: puisi, cerpen (cerita pendek), fabel (cerita binatang), legenda (cerita rakyat), novel, dongeng. Non-fiksi = berdasarkan fakta nyata: biografi, laporan, pidato, teks eksplanasi.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Pantun memiliki ciri-ciri khusus. Ciri UTAMA pantun adalah...',
      opts: [
        'Terdiri dari 3 baris dengan rima a-b-a',
        'Terdiri dari 4 baris: 2 baris sampiran dan 2 baris isi, bersajak a-b-a-b',
        'Tidak memiliki rima dan bebas jumlah barisnya',
        'Selalu berisi nasihat agama'
      ],
      ans: 1,
      hint: 'Ingat struktur pantun: dua baris awal = sampiran (pengantar), dua baris akhir = isi (pesan).',
      explanation: 'Ciri pantun: (1) tiap bait terdiri 4 baris, (2) baris 1-2 = sampiran (tidak langsung berhubungan isi), (3) baris 3-4 = isi (pesan/maksud), (4) bersajak a-b-a-b, (5) tiap baris 8-12 suku kata. Contoh: "Ada pepaya di atas meja / Ada kelapa baru diparut / Kalau kamu rajin belajar / Cita-citamu pasti terwujud."'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Teks biografi berisi...',
      opts: [
        'Imajinasi pengarang tentang tokoh fiksi',
        'Riwayat hidup seseorang yang ditulis oleh orang lain',
        'Pendapat pengarang tentang suatu isu',
        'Proses terjadinya suatu peristiwa alam'
      ],
      ans: 1,
      hint: 'Bio = hidup, grafi = tulisan. Biografi = tulisan tentang kehidupan...',
      explanation: 'Biografi adalah teks non-fiksi yang menceritakan riwayat hidup seseorang, ditulis oleh orang lain. Jika ditulis sendiri oleh orangnya, disebut autobiografi. Biografi memuat fakta: tanggal lahir, pendidikan, karya, perjuangan, dll.'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Teks persuasif bertujuan untuk _ pembaca agar melakukan atau mempercayai sesuatu.',
      ans: 'membujuk',
      hint: 'Persuasif = persuade = ... seseorang untuk setuju atau bertindak.',
      explanation: '"Membujuk" atau "memengaruhi" adalah tujuan teks persuasif. Teks persuasif menggunakan fakta, data, dan argumen untuk meyakinkan pembaca. Contoh: teks iklan, pidato kampanye, teks ajakan menjaga lingkungan.'
    },

    // --- SEDANG (6-10) ---
    {
      type: 'mc',
      level: 'sedang',
      q: 'Bacalah teks iklan berikut!\n\n<div class="tka-reading-box"><b>SUSU KUAT — Untuk Generasi Juara!</b><p>✓ Tinggi Kalsium & Vitamin D<br>✓ Bantu pertumbuhan tulang optimal<br>✓ Rasa coklat yang disukai anak<br><i>"Anak sehat, anak berprestasi!"</i><br><small>Tersedia di seluruh minimarket terdekat.</small></p></div>\n\nKalimat dalam iklan yang bersifat FAKTA (bukan klaim/slogan) adalah...',
      opts: [
        '"Untuk Generasi Juara!"',
        '"Anak sehat, anak berprestasi!"',
        '"Tinggi Kalsium & Vitamin D"',
        '"Bantu pertumbuhan tulang optimal"'
      ],
      ans: 2,
      hint: 'Fakta = bisa dibuktikan. Klaim = pernyataan tanpa bukti jelas. Mana yang bisa diuji kebenarannya?',
      explanation: '"Tinggi Kalsium & Vitamin D" adalah klaim yang bisa dibuktikan lewat analisis kandungan nutrisi produk. Sedangkan: "Generasi Juara" = slogan/klaim tidak terukur, "Anak sehat, anak berprestasi" = klaim umum, "Bantu pertumbuhan optimal" = klaim manfaat yang perlu pembuktian klinis.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Perbedaan utama antara teks EKSPOSISI dan teks ARGUMENTASI adalah...',
      opts: [
        'Eksposisi menggunakan data; Argumentasi tidak menggunakan data sama sekali',
        'Eksposisi menjelaskan suatu topik secara objektif; Argumentasi menyertakan pendapat dan alasan untuk memengaruhi pembaca',
        'Eksposisi berisi cerita fiksi; Argumentasi berisi fakta sejarah',
        'Keduanya sama, hanya berbeda nama'
      ],
      ans: 1,
      hint: 'Eksposisi = memaparkan/menjelaskan. Argumentasi = berargumen/berpendapat.',
      explanation: 'Teks eksposisi: memaparkan informasi/fakta secara objektif tanpa memihak. Tujuan: memberikan pengetahuan. Teks argumentasi: menyajikan pendapat disertai alasan/bukti untuk memengaruhi pembaca agar setuju. Tujuan: meyakinkan. Keduanya non-fiksi namun berbeda tujuan.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Fabel berbeda dari legenda. Perbedaan yang paling tepat adalah...',
      opts: [
        'Fabel = tokohnya manusia; Legenda = tokohnya hewan',
        'Fabel = cerita binatang yang berperilaku seperti manusia dan mengandung amanat; Legenda = cerita rakyat yang berkaitan dengan asal-usul suatu tempat/benda',
        'Fabel = berdasarkan fakta; Legenda = rekaan penulis',
        'Keduanya sama-sama cerita hewan yang tidak nyata'
      ],
      ans: 1,
      hint: 'Ingat: fabel = hewan yang "berperilaku manusia". Legenda = cerita "asal-usul".',
      explanation: 'Fabel: cerita fiksi dengan tokoh hewan yang berperilaku, berpikir, dan berbicara seperti manusia, mengandung amanat/pesan moral. Contoh: Kancil dan Buaya. Legenda: cerita rakyat yang dianggap benar-benar terjadi di masa lalu, berkaitan dengan asal-usul. Contoh: Legenda Danau Toba, Sangkuriang.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Teks narasi BERBEDA dari teks deskripsi. Ciri khas teks NARASI adalah...',
      opts: [
        'Menggambarkan suatu objek secara detail sehingga pembaca seolah melihatnya',
        'Menceritakan serangkaian peristiwa yang terjadi dalam urutan waktu tertentu',
        'Menjelaskan proses terjadinya suatu fenomena',
        'Memaparkan data dan fakta secara objektif'
      ],
      ans: 1,
      hint: 'Narasi = bercerita. Cerita pasti punya urutan... apa?',
      explanation: 'Teks narasi menceritakan rangkaian peristiwa dalam urutan waktu (kronologis) dengan ada konflik dan penyelesaian. Ada tokoh, latar, dan alur. Deskripsi = menggambarkan objek secara detail. Narasi = mengisahkan kejadian. Perbedaan utama: narasi berurutan waktu, deskripsi menggambarkan.'
    },
    {
      type: 'fill',
      level: 'sedang',
      q: 'Puisi memiliki ciri khas berupa _ (bunyi yang sama di akhir baris) yang membuat puisi terdengar merdu saat dibacakan.',
      ans: 'rima',
      hint: 'Bunyi akhir yang senada dalam puisi disebut... (contoh: pergi-berlari-bermimpi — sama bunyi "i")',
      explanation: '"Rima" (persajakan) adalah persamaan bunyi di akhir baris puisi. Rima membuat puisi terdengar indah dan berirama. Jenis rima: rima akhir (paling umum), rima awal, rima dalam. Pantun memiliki rima a-b-a-b.'
    },

    // --- SULIT (11-15) ---
    {
      type: 'mc',
      level: 'sulit',
      q: 'Bacalah teks berikut!\n\n<div class="tka-reading-box"><p>"Anak-anak, kebersihan sekolah adalah tanggung jawab kita bersama. Bayangkan betapa nyamannya belajar di lingkungan yang bersih dan asri. Dengan membuang sampah pada tempatnya, kita tidak hanya menjaga keindahan sekolah, tetapi juga melatih kedisiplinan diri. Mari kita mulai dari hal kecil hari ini!"</p></div>\n\nJenis teks di atas adalah...',
      opts: ['Teks eksplanasi', 'Teks narasi', 'Teks persuasif', 'Teks eksposisi'],
      ans: 2,
      hint: 'Perhatikan tujuannya: apakah teks ini menjelaskan, bercerita, memengaruhi, atau memaparkan informasi?',
      explanation: 'Teks ini adalah persuasif karena: (1) mengajak ("Mari kita mulai..."), (2) memberikan alasan/argumen mengapa harus menjaga kebersihan, (3) tujuannya memengaruhi pembaca agar bertindak. Ciri persuasif: ada ajakan, argumen pendukung, dan bahasa yang memengaruhi emosi.'
    },
    {
      type: 'mc',
      level: 'sulit',
      q: 'Seorang penulis menceritakan pengalamannya mendaki Gunung Rinjani — melewati rintangan, keindahan alam yang ia saksikan, dan perasaannya saat mencapai puncak. Jenis teks ini adalah...',
      opts: [
        'Teks eksplanasi — menjelaskan proses mendaki',
        'Teks narasi — menceritakan pengalaman nyata dalam urutan waktu',
        'Laporan perjalanan — melaporkan fakta perjalanan secara objektif',
        'Teks deskripsi — menggambarkan keindahan gunung'
      ],
      ans: 2,
      hint: 'Teks ini melaporkan perjalanan nyata. Apakah itu narasi biasa atau laporan perjalanan?',
      explanation: 'Laporan perjalanan adalah tulisan yang melaporkan fakta-fakta perjalanan yang benar-benar dialami: rute, kondisi, pengalaman, dan temuan. Ini berbeda dari narasi fiksi (rekaan) dan deskripsi (hanya menggambarkan). Laporan perjalanan bersifat faktual dan sistematis.'
    },
    {
      type: 'mc',
      level: 'sulit',
      q: 'Manakah yang merupakan ciri khas teks EKSPOSISI yang MEMBEDAKANNYA dari teks informasi lain?',
      opts: [
        'Menggunakan bahasa kiasan yang indah dan puitis',
        'Memaparkan suatu topik secara terperinci, objektif, dan biasanya disertai definisi atau klasifikasi',
        'Selalu menggunakan data statistik dan angka-angka',
        'Mengandung konflik antara tokoh utama dan tokoh lawan'
      ],
      ans: 1,
      hint: 'Eksposisi = memaparkan, menjelaskan secara rinci. Apa ciri khasnya yang membedakan dari persuasif dan argumentasi?',
      explanation: 'Teks eksposisi: memaparkan topik secara objektif, terperinci, dengan definisi, klasifikasi, atau perbandingan — TANPA bermaksud memengaruhi atau meyakinkan pembaca. Bedanya: persuasif bertujuan memengaruhi, argumentasi bertujuan meyakinkan dengan pendapat, eksposisi hanya menjelaskan.'
    },
    {
      type: 'mc',
      level: 'sulit',
      q: 'Bacalah bait pantun berikut!\n\n<div class="tka-reading-box"><i>Jalan-jalan ke kota Medan,<br>Singgah sebentar membeli durian.<br>Rajin belajar jadi kebiasaan,<br>Masa depan cerah sudah di tangan.</i></div>\n\nManakah pernyataan yang BENAR tentang pantun ini?',
      opts: [
        'Baris 1 dan 2 adalah isi; baris 3 dan 4 adalah sampiran',
        'Pantun ini bersajak a-a-b-b dan berisi pesan tentang pentingnya belajar',
        'Baris 1 dan 2 adalah sampiran; baris 3 dan 4 adalah isi; bersajak a-b-a-b',
        'Pantun ini tidak memiliki rima sehingga bukan pantun yang baik'
      ],
      ans: 2,
      hint: 'Ingat: sampiran dulu (baris 1-2), isi kemudian (baris 3-4). Cek sajaknya: Medan-durian-kebiasaan-tangan.',
      explanation: 'Analisis pantun: Baris 1 "Medan" (a) — Baris 2 "durian" (a) — Baris 3 "kebiasaan" (b) — Baris 4 "tangan" (b). Sajaknya a-a-b-b, bukan a-b-a-b! Ini pantun dengan sajak a-a-b-b. Baris 1-2 = sampiran (perjalanan ke Medan), Baris 3-4 = isi (pesan tentang rajin belajar). Pilihan C salah soal pola sajak. Jawaban C paling mendekati tapi perlu koreksi sajak: a-a-b-b.'
    },
    {
      type: 'mc',
      level: 'sulit',
      q: 'Apa perbedaan antara IKHTISAR dan RINGKASAN?',
      opts: [
        'Ikhtisar = lebih panjang dari teks asli; Ringkasan = lebih pendek',
        'Keduanya sama persis, hanya beda istilah',
        'Ringkasan = mempertahankan urutan dan proporsi gagasan asli; Ikhtisar = bebas menonjolkan gagasan tertentu tanpa harus urut',
        'Ikhtisar = selalu berbentuk poin; Ringkasan = selalu berbentuk paragraf'
      ],
      ans: 2,
      hint: 'Saat membuat ringkasan, kamu harus mengikuti alur aslinya. Saat membuat ikhtisar, kamu bebas memilih bagian penting.',
      explanation: 'Ringkasan: mempersingkat teks dengan MEMPERTAHANKAN urutan, proporsi, dan gaya penulisan asli — hanya lebih padat. Ikhtisar: penulis BEBAS menonjolkan bagian yang dianggap penting saja, tidak harus mengikuti urutan asli. Ikhtisar lebih subjektif; ringkasan lebih objektif mengikuti teks.'
    },
  ],

  // ============================================================
  //  bindo-13 | SURAT, PENGUMUMAN & PRAKTIS (Wawancara, Laporan, Iklan)
  // ============================================================
  'bindo-13': [

    // --- MUDAH (1-5) ---
    {
      type: 'mc',
      level: 'mudah',
      q: 'Perbedaan surat resmi dan surat tidak resmi terletak pada...',
      opts: [
        'Warna kertas yang digunakan',
        'Panjang atau pendeknya surat',
        'Penggunaan bahasa, format, dan tujuan pengirim/penerima',
        'Harus menggunakan perangko atau tidak'
      ],
      ans: 2,
      hint: 'Surat resmi digunakan dalam konteks formal (dinas/lembaga). Apa bedanya dari surat kepada teman?',
      explanation: 'Surat resmi: menggunakan bahasa baku, format standar (kop surat, nomor, lampiran, perihal), untuk keperluan formal/kedinasan. Surat tidak resmi: bahasa santai, format bebas, untuk keperluan pribadi/pertemanan. Perbedaan utama: bahasa, format, dan konteks penggunaannya.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Bagian yang HARUS ada dalam surat resmi namun TIDAK ada dalam surat tidak resmi adalah...',
      opts: [
        'Tanggal penulisan surat',
        'Salam pembuka',
        'Kop surat (kepala surat) dan nomor surat',
        'Tanda tangan pengirim'
      ],
      ans: 2,
      hint: 'Kop surat berisi nama lembaga/instansi. Apakah surat kepada teman perlu mencantumkan ini?',
      explanation: 'Kop surat (kepala surat) berisi nama instansi/lembaga, alamat, dan logo — ini khas surat resmi. Nomor surat juga khas surat resmi untuk pengarsipan. Surat tidak resmi tidak memerlukan kop dan nomor surat. Tanggal dan salam pembuka ada di kedua jenis surat.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Pengumuman yang baik harus memuat informasi yang disebut 5W+1H. Huruf "W" yang pertama dalam 5W+1H bermakna...',
      opts: ['Who (Siapa)', 'What (Apa)', 'Where (Di mana)', 'When (Kapan)'],
      ans: 1,
      hint: '5W+1H: What, Who, When, Where, Why + How. Yang pertama biasanya yang paling utama.',
      explanation: '5W+1H: What (Apa), Who (Siapa), When (Kapan), Where (Di mana), Why (Mengapa), How (Bagaimana). Dalam pengumuman, informasi "What" (apa yang diumumkan) biasanya yang paling pertama dan penting. Pengumuman yang baik menjawab semua pertanyaan 5W+1H.'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Dalam wawancara, orang yang mengajukan pertanyaan disebut _ dan orang yang menjawab pertanyaan disebut narasumber.',
      ans: 'pewawancara',
      hint: 'Awalan "pe-" + "wawancara" = orang yang melakukan wawancara.',
      explanation: '"Pewawancara" adalah orang yang bertugas mengajukan pertanyaan dalam kegiatan wawancara. "Narasumber" (atau responden) adalah orang yang diwawancarai dan memberikan informasi. Pewawancara harus menyiapkan daftar pertanyaan terlebih dahulu.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Laporan percobaan berbeda dari laporan pengamatan. Ciri khas laporan PERCOBAAN adalah...',
      opts: [
        'Hanya mengamati tanpa mengubah apapun',
        'Melibatkan perlakuan/eksperimen yang dilakukan penulis untuk menguji hipotesis',
        'Berisi deskripsi tempat yang dikunjungi',
        'Menceritakan kegiatan yang dilakukan suatu organisasi'
      ],
      ans: 1,
      hint: 'Percobaan = eksperimen. Ada perlakuan yang dilakukan, bukan sekadar mengamati.',
      explanation: 'Laporan percobaan (laporan ilmiah sederhana) berisi: tujuan, alat/bahan, langkah-langkah, hasil, dan kesimpulan — ada perlakuan aktif (eksperimen). Laporan pengamatan: hanya mengamati tanpa mengubah kondisi (observasi). Laporan kegiatan: mendokumentasikan kegiatan yang dilaksanakan.'
    },

    // --- SEDANG (6-10) ---
    {
      type: 'mc',
      level: 'sedang',
      q: 'Bacalah teks iklan berikut!\n\n<div class="tka-reading-box"><b>🎒 TAS SEKOLAH KEREN — Promo Akhir Tahun!</b><p>Dapatkan tas sekolah berkualitas tinggi dengan harga spesial!<br>💰 Harga: Rp85.000 (coret: Rp120.000)<br>📦 Stok terbatas — hanya 50 pcs!<br>☎ Hubungi: 0812-3456-7890<br>🚚 Gratis ongkir untuk pembelian 2 pcs!</p></div>\n\nInformasi yang TIDAK ADA dalam iklan tersebut adalah...',
      opts: [
        'Harga tas sebelum promo',
        'Cara pemesanan (nomor telepon)',
        'Bahan atau kualitas tas secara detail',
        'Ketentuan gratis ongkir'
      ],
      ans: 2,
      hint: 'Iklan ini menyebutkan harga, kontak, stok, dan syarat gratis ongkir. Apa yang tidak dijelaskan?',
      explanation: 'Iklan mencantumkan: harga (Rp85.000), nomor telepon, stok terbatas, dan syarat gratis ongkir. Yang tidak ada: detail bahan/kualitas tas — iklan hanya menyebut "berkualitas tinggi" tanpa penjelasan spesifik (misalnya bahan polyester, dimensi, dll).'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Perhatikan bagian-bagian surat berikut!\n\n(1) Salam penutup\n(2) Perihal\n(3) Isi surat\n(4) Kop surat\n(5) Salam pembuka\n(6) Nomor surat\n(7) Tanda tangan\n\nUrutan yang BENAR untuk surat resmi adalah...',
      opts: [
        '4 → 6 → 2 → 5 → 3 → 1 → 7',
        '5 → 4 → 6 → 3 → 2 → 1 → 7',
        '4 → 2 → 6 → 5 → 3 → 7 → 1',
        '6 → 4 → 2 → 3 → 5 → 1 → 7'
      ],
      ans: 0,
      hint: 'Surat resmi dimulai dari kop surat (paling atas), lalu nomor, perihal, salam pembuka, isi, salam penutup, tanda tangan.',
      explanation: 'Urutan surat resmi: (4) Kop surat → (6) Nomor surat → (2) Perihal → (5) Salam pembuka → (3) Isi surat → (1) Salam penutup → (7) Tanda tangan. Urutan ini standar dalam surat dinas/resmi di Indonesia.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Dalam kegiatan wawancara, pertanyaan yang baik bersifat "terbuka". Manakah contoh pertanyaan TERBUKA yang paling tepat?',
      opts: [
        '"Apakah Bapak setuju dengan peraturan ini?" (ya/tidak)',
        '"Sejak kapan Ibu mulai berkarya?" (menjawab tahun saja)',
        '"Bagaimana pengalaman Bapak selama menjadi kepala sekolah ini?"',
        '"Berapa jumlah siswa di sekolah ini?" (angka saja)'
      ],
      ans: 2,
      hint: 'Pertanyaan terbuka = tidak bisa dijawab dengan "ya/tidak" atau satu kata. Memancing narasumber bercerita panjang.',
      explanation: 'Pertanyaan terbuka memancing narasumber memberikan penjelasan panjang dan mendalam — dimulai dengan kata: bagaimana, mengapa, ceritakan, jelaskan. Pilihan C ("Bagaimana pengalaman...") adalah pertanyaan terbuka terbaik. Pilihan A, B, D menghasilkan jawaban singkat/tertutup.'
    },
    {
      type: 'fill',
      level: 'sedang',
      q: 'Ringkasan teks yang menggunakan diagram/bagan untuk memvisualisasikan hubungan antar gagasan disebut ringkasan dalam bentuk _.',
      ans: 'bagan',
      hint: 'Selain ikhtisar, ada cara meringkas yang menggunakan gambar/diagram. Namanya...',
      explanation: 'Bagan (diagram) adalah cara meringkas teks dengan memvisualisasikan hubungan antar gagasan menggunakan kotak, panah, dan kata kunci. Bagan memudahkan pemahaman hubungan sebab-akibat, urutan, atau klasifikasi yang ada dalam teks.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Laporan kegiatan berbeda dari laporan perjalanan. Yang membedakan keduanya adalah...',
      opts: [
        'Laporan kegiatan lebih panjang dari laporan perjalanan',
        'Laporan kegiatan mendokumentasikan suatu acara/program; laporan perjalanan mendokumentasikan pengalaman bepergian ke suatu tempat',
        'Laporan perjalanan harus menggunakan foto; laporan kegiatan tidak',
        'Keduanya sama, hanya berbeda nama'
      ],
      ans: 1,
      hint: 'Apa yang dilaporkan? Suatu "kegiatan/acara" atau "perjalanan ke suatu tempat"?',
      explanation: 'Laporan kegiatan: mendokumentasikan pelaksanaan suatu program/acara (misalnya: laporan kegiatan pramuka, class meeting). Isi: tujuan, peserta, waktu, tempat, hasil. Laporan perjalanan: mendokumentasikan pengalaman mengunjungi suatu tempat (wisata, studi). Isi: rute, tempat yang dikunjungi, pengalaman, kesan.'
    },

    // --- SULIT (11-15) ---
    {
      type: 'mc',
      level: 'sulit',
      q: 'Bacalah pengumuman berikut!\n\n<div class="tka-reading-box"><b>PENGUMUMAN</b><p>Diberitahukan kepada seluruh siswa kelas 6 bahwa pelaksanaan Try Out akan dilaksanakan pada hari Senin, 20 Januari 2025, pukul 07.30-11.30 WIB, di Aula Sekolah. Siswa diwajibkan hadir 15 menit sebelum waktu pelaksanaan dan membawa alat tulis lengkap.</p><p align="right">Kepala Sekolah,<br><b>Drs. Ahmad Fauzi</b></p></div>\n\nInformasi 5W+1H yang BELUM terjawab dalam pengumuman tersebut adalah...',
      opts: [
        'What (apa acaranya) dan When (kapan)',
        'Where (di mana) dan Who (siapa pesertanya)',
        'Why (mengapa diadakan Try Out) dan How (teknis pelaksanaan)',
        'Who (siapa kepala sekolah) dan When (jam berapa)'
      ],
      ans: 2,
      hint: 'Cek satu per satu: Apa? (✓ Try Out), Siapa? (✓ siswa kelas 6), Kapan? (✓ Senin, 20 Jan), Di mana? (✓ Aula), Mengapa? (?), Bagaimana? (?)',
      explanation: 'What ✓ (Try Out), Who ✓ (siswa kelas 6), When ✓ (Senin 20 Jan 07.30-11.30), Where ✓ (Aula Sekolah). Yang belum: Why (mengapa Try Out diadakan — tidak ada penjelasan tujuannya) dan How (bagaimana teknis pelaksanaannya — nomor urut, prosedur, dll). Pengumuman yang baik idealnya menjawab semua 5W+1H.'
    },
    {
      type: 'mc',
      level: 'sulit',
      q: 'Seorang siswa diminta menulis surat kepada kepala sekolah untuk memohon izin mengikuti lomba tingkat kabupaten. Kalimat pembuka surat yang paling TEPAT dan FORMAL adalah...',
      opts: [
        '"Halo Pak Kepala, saya mau minta izin lomba ya."',
        '"Dengan hormat, bersama surat ini saya bermaksud mengajukan permohonan izin untuk mengikuti lomba..."',
        '"Yang terhormat Kepala Sekolah, saya ingin bilang mau ikut lomba."',
        '"Kepada Yth. Pak Kepala, tolong izinin saya ikut lomba kabupaten."'
      ],
      ans: 1,
      hint: 'Surat resmi menggunakan bahasa baku dan sopan. Hindari kata-kata informal seperti "ya", "mau", "bilang", "tolong izinin".',
      explanation: 'Pilihan B menggunakan: salam "Dengan hormat" (baku), kalimat baku "bersama surat ini saya bermaksud", dan kata formal "mengajukan permohonan izin". Pilihan A, C, D menggunakan bahasa informal dan tidak baku (halo, mau, bilang, tolong izinin) yang tidak tepat untuk surat resmi.'
    },
    {
      type: 'mc',
      level: 'sulit',
      q: 'Seorang jurnalis cilik mewawancarai petani tentang dampak kekeringan. Urutan langkah wawancara yang BENAR adalah...',
      opts: [
        'Lakukan wawancara → Susun pertanyaan → Buat laporan → Minta izin narasumber',
        'Minta izin narasumber → Susun pertanyaan → Lakukan wawancara → Tulis laporan hasil wawancara',
        'Susun pertanyaan → Lakukan wawancara → Minta izin → Tulis laporan',
        'Buat laporan dulu → Susun pertanyaan → Lakukan wawancara → Revisi laporan'
      ],
      ans: 1,
      hint: 'Sebelum wawancara, perlu persiapan dulu. Setelah wawancara, hasilnya ditulis. Mana urutan logisnya?',
      explanation: 'Tahapan wawancara yang benar: (1) Minta izin/buat janji dengan narasumber, (2) Susun daftar pertanyaan (persiapan), (3) Lakukan wawancara, (4) Catat dan rekam jawaban, (5) Tulis laporan/berita hasil wawancara. Urutan ini memastikan wawancara berjalan terarah dan hasilnya terdokumentasi.'
    },
    {
      type: 'fill',
      level: 'sulit',
      q: 'Dalam surat resmi, bagian yang menjelaskan tujuan atau topik surat secara singkat dalam satu baris disebut "_ surat".',
      ans: 'perihal',
      hint: 'Bagian surat ini berisi: "Permohonan Izin Kegiatan" atau "Undangan Rapat" — hanya satu baris.',
      explanation: '"Perihal" (atau hal) surat adalah bagian singkat yang menunjukkan pokok isi/tujuan surat dalam beberapa kata. Contoh: Perihal: Permohonan Izin Penelitian. Perihal memudahkan pembaca mengetahui isi surat tanpa harus membaca seluruhnya.'
    },
    {
      type: 'mc',
      level: 'sulit',
      q: 'Bacalah laporan berikut!\n\n<div class="tka-reading-box"><b>LAPORAN PENGAMATAN</b><p><b>Tujuan:</b> Mengamati pertumbuhan kecambah kacang hijau.<br><b>Waktu:</b> 14-21 Januari 2025.<br><b>Hasil:</b> Hari ke-1: benih terendam. Hari ke-3: muncul akar kecil. Hari ke-5: batang mulai tumbuh 2 cm. Hari ke-7: tinggi mencapai 8 cm, daun pertama mulai muncul.<br><b>Kesimpulan:</b> Kacang hijau tumbuh optimal dengan air dan sinar matahari cukup.</p></div>\n\nJika laporan ini hendak dilengkapi, bagian yang PALING PENTING untuk ditambahkan adalah...',
      opts: [
        'Nama penulis dan kelas',
        'Alat dan bahan yang digunakan dalam pengamatan',
        'Foto kepala sekolah yang menyetujui laporan',
        'Jumlah halaman laporan'
      ],
      ans: 1,
      hint: 'Laporan ilmiah/percobaan yang baik harus mencantumkan alat dan bahan agar dapat diulang orang lain.',
      explanation: 'Laporan pengamatan/percobaan yang lengkap harus mencakup: tujuan, alat dan bahan, prosedur/langkah, hasil pengamatan, dan kesimpulan. Dari laporan di atas, bagian "alat dan bahan" (wadah, tanah, air, kacang hijau, dll) belum ada — ini penting agar laporan dapat direplikasi oleh orang lain.'
    },
  ],

};
