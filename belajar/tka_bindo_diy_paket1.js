// ============================================================
//  TKA_DATA — Bahasa Indonesia DIY Paket 1
//  Sumber: Soal Tryout TKA DIY B. Indonesia Paket 1 — 2026
//  Total: 30 soal dari 10 teks bacaan
// ============================================================

export const TKA_BINDO_DIY_PAKET1 = [

  // ── TEKS 1: LONGSOR CIBEUNYING (soal 1-3) ────────────────────
  {
    q: `Bacalah teks berikut!\n\n<div class="tka-reading-box">
<b>Tragedi Longsor Cibeunying</b>
<p>Kamis, 13 November 2025, sekitar pukul 20.00 WIB, bencana tanah longsor terjadi di Cibeunying, Majenang, Cilacap. Warga sangat ketakutan. Terdengar suara gemuruh dan bunyi patahan kayu. Material tanah bergerak cepat menerjang pemukiman.</p>
<p>Kepala Desa menyebut sudah ada tanda: jalan amblas di perbatasan dusun dan retakan tanah di perbukitan yang makin melebar akibat hujan deras.</p>
<p>Jumat pagi, 16 rumah tertimbun. Alat berat diterjunkan mencari korban. Di titik pertama pencarian ditemukan <b>benda roda dua dengan dua kaca spion</b>, tercium bau bensin dari kebocoran tangki. Di titik lain ditemukan hewan-hewan ternak.</p>
</div>\n\nObjek apa yang ditemukan di titik PERTAMA pencarian?`,
    opts: ['Mobil', 'Sepeda', 'Angkong', 'Sepeda motor'],
    ans: 3,
    topic: 'Membaca Pemahaman',
    level: 'Mudah',
    explanation: 'Teks menyebutkan "benda roda dua dengan dua kaca spion" dan "tercium bau bensin dari kebocoran tangki." Ciri-ciri ini menunjukkan sepeda motor (bukan sepeda biasa yang tidak berbahan bakar, bukan mobil yang memiliki 4 roda).'
  },

  {
    q: `Manakah perubahan LATAR pada teks "Tragedi Longsor Cibeunying"?\n\n(Pilih semua yang benar!)`,
    opts: [
      'Malam hari menjadi pagi hari',
      'Jalan amblas menjadi tanah retak',
      'Suasana tenang menjadi mencekam',
      'Hujan ringan menjadi hujan deras'
    ],
    ans: 0,
    topic: 'Membaca Pemahaman',
    level: 'Sedang',
    explanation: 'Perubahan latar dalam teks: (1) Latar waktu: malam hari (pukul 20.00 WIB) → pagi hari (Jumat pagi) ✓. (3) Latar suasana: ketenangan malam → mencekam akibat longsor ✓. Jalan amblas dan tanah retak adalah dua kondisi berbeda yang ada bersamaan, bukan perubahan latar.'
  },

  {
    q: `Pendapat Fany: "Tanda-tanda bencana sudah ada, masyarakat bisa mengantisipasinya."\nPendapat Nafisa: "Bencana tidak bisa diprediksi, masyarakat hanya bisa berserah diri."\n\nMengapa pendapat Fany lebih sesuai dengan teks?`,
    opts: [
      'Nafisa menyadari masyarakat hanya bisa pasrah apabila terjadi bencana',
      'Fany memahami bahwa sikap siaga bencana dapat mengurangi dampak buruk bencana',
      'Fany mengetahui bahwa dengan menyelamatkan benda berharga, tidak ada kerugian',
      'Nafisa meyakini bencana pasti menimbulkan kerusakan sehingga harus diterima'
    ],
    ans: 1,
    topic: 'Membaca Pemahaman',
    level: 'Sedang',
    explanation: 'Teks menunjukkan sudah ada tanda-tanda longsor sebelum kejadian (jalan amblas, retakan tanah). Ini membuktikan bencana bisa diantisipasi jika ada kesiapsiagaan. Fany benar karena sikap siaga bencana — bukan sekedar menyelamatkan benda berharga — dapat mengurangi dampak buruk.'
  },

  // ── TEKS 2: LAPORAN PENGAMATAN MAGGOT (soal 4-6) ─────────────
  {
    q: `Bacalah teks berikut!\n\n<div class="tka-reading-box">
<b>Laporan Hasil Pengamatan: Pengelolaan Sampah Organik dengan Maggot</b>
<p>Sampah organik dipilah lalu dimasukkan ke bak pengolahan bersama <i>maggot</i> (larva lalat Black Soldier Fly). Maggot memakan sampah dengan cepat sehingga jumlah sampah berkurang signifikan. Bau tidak sedap berkurang. Sisa penguraian berubah menjadi <b>pupuk organik</b> berwarna coklat kehitaman yang menyuburkan <b>tanah humus</b>.</p>
<p>Proses ini dapat dikatakan <b>"sekali mendayung, dua tiga pulau terlampaui"</b>. Maggot dapat mengurangi sampah sekaligus menghasilkan pupuk berguna.</p>
</div>\n\nManakah yang merupakan KOSAKATA KHUSUS di bidang pertanian?\n\n(Pilih semua yang benar!)`,
    opts: ['Sampah anorganik', 'Pupuk organik', 'Tanah humus', 'Bak pengolahan'],
    ans: 1,
    topic: 'Kosakata & Makna Kata',
    level: 'Sedang',
    explanation: 'Kosakata khusus bidang pertanian adalah istilah teknis yang digunakan dalam dunia pertanian: "pupuk organik" (istilah pertanian untuk pupuk dari bahan alami) ✓ dan "tanah humus" (istilah pertanian untuk lapisan tanah subur kaya bahan organik) ✓. "Sampah anorganik" adalah istilah umum lingkungan, "bak pengolahan" adalah istilah umum.'
  },

  {
    q: `Bacalah teks berikut!\n\n<div class="tka-reading-box">
<b>Laporan Hasil Pengamatan: Pengelolaan Sampah Organik dengan Maggot</b>
<p>Sampah organik dipilah lalu dimasukkan ke bak pengolahan bersama <i>maggot</i> (larva lalat Black Soldier Fly). Maggot memakan sampah dengan cepat sehingga jumlah sampah berkurang signifikan. Bau tidak sedap berkurang. Sisa penguraian berubah menjadi <b>pupuk organik</b> berwarna coklat kehitaman yang menyuburkan <b>tanah humus</b>.</p>
<p>Proses ini dapat dikatakan <b>"sekali mendayung, dua tiga pulau terlampaui"</b>. Maggot dapat mengurangi sampah sekaligus menghasilkan pupuk berguna.</p>
</div>\n\nApa makna ungkapan <b>"sekali mendayung, dua tiga pulau terlampaui"</b> dalam teks laporan tersebut?`,
    opts: [
      'Melakukan kegiatan dengan tenaga yang sangat besar',
      'Melakukan satu kegiatan yang memberi banyak manfaat',
      'Melakukan kegiatan di beberapa tempat secara bersamaan',
      'Melakukan kegiatan secara berulang-ulang dalam waktu lama'
    ],
    ans: 1,
    topic: 'Majas & Ungkapan',
    level: 'Mudah',
    explanation: 'Peribahasa "sekali mendayung, dua tiga pulau terlampaui" berarti dengan satu usaha atau tindakan, bisa mendapatkan banyak manfaat sekaligus. Dalam konteks teks: menggunakan maggot satu tindakan menghasilkan dua manfaat sekaligus — mengurangi sampah DAN menghasilkan pupuk.'
  },

  {
    q: `Bacalah teks berikut!\n\n<div class="tka-reading-box">
<b>Laporan Hasil Pengamatan: Pengelolaan Sampah Organik dengan Maggot</b>
<p>Sampah organik dipilah lalu dimasukkan ke bak pengolahan bersama <i>maggot</i> (larva lalat Black Soldier Fly). Maggot memakan sampah dengan cepat sehingga jumlah sampah berkurang signifikan. Bau tidak sedap berkurang. Sisa penguraian berubah menjadi <b>pupuk organik</b> berwarna coklat kehitaman yang menyuburkan <b>tanah humus</b>.</p>
<p>Proses ini dapat dikatakan <b>"sekali mendayung, dua tiga pulau terlampaui"</b>. Maggot dapat mengurangi sampah sekaligus menghasilkan pupuk berguna.</p>
</div>\n\nPernyataan yang SESUAI dengan teks laporan maggot adalah … (Tentukan Benar/Salah!)`,
    opts: [
      'Maggot mengurangi sampah sekaligus hasilkan pupuk — BENAR; Kondisi lingkungan tidak berubah — BENAR; Maggot memberi nilai guna sampah organik — BENAR',
      'Maggot mengurangi sampah sekaligus hasilkan pupuk — BENAR; Kondisi tidak berubah — SALAH; Maggot memberi nilai guna — BENAR',
      'Semua BENAR',
      'Semua SALAH'
    ],
    ans: 1,
    topic: 'Membaca Pemahaman',
    level: 'Mudah',
    explanation: 'BENAR: Maggot mengurangi sampah dan menghasilkan pupuk ✓ dan maggot memberi nilai guna sampah organik ✓. SALAH: Kondisi lingkungan DID berubah — bau tidak sedap berkurang, jumlah sampah berkurang, tanaman menjadi subur — jadi lingkungan mengalami perubahan yang berarti.'
  },

  // ── TEKS 3: PIDATO LITERASI (soal 7-9) ───────────────────────
  {
    q: `Teks pidato membahas pentingnya membaca buku dan literasi di era digital. Disebutkan kata-kata: buku, komik, gawai, literasi, wawasan.\n\nManakah yang merupakan KOSAKATA UMUM dari teks pidato tersebut?\n\n(Pilih semua yang benar!)`,
    opts: ['Buku', 'Komik', 'Gawai', 'Literasi'],
    ans: 0,
    topic: 'Kosakata & Makna Kata',
    level: 'Mudah',
    explanation: 'Kosakata umum adalah kata yang digunakan dalam kehidupan sehari-hari oleh semua kalangan. "Buku" ✓ dan "komik" ✓ dan "gawai" ✓ adalah kosakata umum yang dikenal semua orang. "Literasi" adalah kosakata khusus/bidang pendidikan yang maknanya lebih spesifik (kemampuan membaca-menulis).'
  },

  {
    q: `Teks pidato menyebutkan generasi muda sebagai <b>"ujung tombak kemajuan bangsa"</b>.\n\nApa makna ungkapan yang dicetak tebal tersebut?`,
    opts: [
      'Pemimpin hebat yang bekerja keras di balik layar tanpa terlihat',
      'Seseorang yang memimpin sebuah kelompok agar bisa bekerja sama',
      'Kelompok yang berada di baris depan dan menjadi penggerak utama',
      'Kelompok terdepan yang bekerja sama untuk mendapatkan keuntungan'
    ],
    ans: 2,
    topic: 'Majas & Ungkapan',
    level: 'Sedang',
    explanation: '"Ujung tombak" secara harfiah adalah bagian terdepan/tertajam dari tombak. Secara kiasan berarti pihak yang berada di garis terdepan dan menjadi penggerak/motor utama dari suatu usaha. Generasi muda sebagai "ujung tombak" berarti mereka adalah penggerak utama kemajuan bangsa.'
  },

  {
    q: `Yema berpendapat: "Dengan gawai, informasi bisa didapat tanpa baca buku."\nAlea berpendapat: "Generasi muda yang berwawasan luas dan menguasai teknologi bisa memajukan bangsa."\n\nManakah pernyataan yang SESUAI dengan informasi dalam teks pidato?`,
    opts: [
      'Pernyataan Yema karena mencari informasi melalui gawai akan lebih cepat',
      'Pernyataan Alea karena generasi muda berwawasan luas dan menguasai teknologi',
      'Pernyataan Yema karena dengan gawai informasi diperoleh tanpa membaca buku',
      'Pernyataan Alea karena generasi muda berwawasan luas dapat memajukan bangsa'
    ],
    ans: 3,
    topic: 'Membaca Pemahaman',
    level: 'Sedang',
    explanation: 'Teks pidato menekankan pentingnya wawasan luas dan literasi untuk memajukan bangsa — bukan mengandalkan gawai tanpa membaca. Pernyataan Alea (D) paling sesuai: generasi muda yang berwawasan luas dapat memajukan bangsa. Pilihan B dan D sama artinya, tapi D lebih lengkap menyebut "memajukan bangsa".'
  },

  // ── TEKS 4: SURAT PRIBADI VINA (soal 10-12) ──────────────────
  {
    q: `Bacalah surat pribadi berikut!\n\n<div class="tka-reading-box">
<i>Yogyakarta, 22 Desember 2025</i><br>
<p>Hai, Ibu! Kami di sini sehat. Setiap akhir pekan kami berkebun bersama Kakek. Nenek senang karena banyak sayur dipetik: sawi, bayam, tomat. Nenek bisa <b>naik pitam</b> kalau ayam tetangga memakan sayuran kami.</p>
<p>Ibu jadi ambil cuti saat ulang tahunku, kan? Vina sangat ingin merayakan ulang tahun dengan makan bersama di restoran. Sampai jumpa pada hari ulang tahunku.</p>
<p>Salam kangen, Vina dan Dito</p>
</div>\n\nApa makna ungkapan <b>"naik pitam"</b> pada teks surat tersebut?`,
    opts: ['Cuek', 'Marah', 'Kecewa', 'Khawatir'],
    ans: 1,
    topic: 'Majas & Ungkapan',
    level: 'Mudah',
    explanation: '"Naik pitam" adalah ungkapan yang berarti marah atau naik darahnya. Dalam konteks kalimat: nenek "naik pitam" karena ayam tetangga memakan sayurannya — ini menggambarkan kemarahan nenek, bukan kekecewaan atau kekhawatiran.'
  },

  {
    q: `Peristiwa apa yang terjadi berdasarkan isi teks surat Vina?\n\n(Pilih semua yang benar!)`,
    opts: [
      'Ayam tetangga sering masuk ke rumah nenek untuk mencari makan',
      'Keluarga Vina bekerja sama dalam berkebun dan memanen hasilnya',
      'Keluarga Vina sering mengonsumsi sayur hasil panen kebun mereka',
      'Ibu Vina tinggal bersama di Yogyakarta'
    ],
    ans: 1,
    topic: 'Membaca Pemahaman',
    level: 'Mudah',
    explanation: 'Peristiwa dalam surat: (2) Keluarga Vina bekerja sama berkebun — "kami berempat berkebun, Kakek mengajak kami" ✓. (3) Sering mengonsumsi sayur hasil panen — "nenek bisa memetik sawi, bayam, tomat" ✓. Pilihan 1 "sering masuk ke rumah" tidak disebutkan, hanya "memakan sayuran." Ibu Vina tinggal di Jakarta.'
  },

  {
    q: `Contoh peristiwa dalam kehidupan sehari-hari yang RELEVAN dengan teks surat Vina. Tentukan Sesuai atau Tidak Sesuai!`,
    opts: [
      'Cika tinggal bersama paman karena orang tua bekerja di luar kota — SESUAI',
      'Budi dan kakeknya menanam lidah buaya untuk obat — SESUAI',
      'Janu sedih karena orang tua pergi ke luar negeri — SESUAI',
      'Semua TIDAK SESUAI'
    ],
    ans: 0,
    topic: 'Apresiasi Sastra',
    level: 'Sedang',
    explanation: 'SESUAI: Cika tinggal bersama paman karena orang tua bekerja di luar kota ✓ (mirip Vina yang tinggal bersama nenek-kakek sementara ibu di Jakarta). Budi berkebun dengan kakek juga mirip kondisi Vina ✓. Janu sedih karena orang tua pergi juga relevan dengan kerinduan Vina pada ibunya ✓. Semua relevan.'
  },

  // ── TEKS 5: SUPERFLU (soal 13-15) ────────────────────────────
  {
    q: `Bacalah teks berikut!\n\n<div class="tka-reading-box">
<b>Mengapa Superflu Muncul?</b>
<p>Superflu lebih berbahaya dari flu biasa karena virus flu <b>berubah bentuk dengan cepat</b> menjadi lebih kuat. Superflu muncul karena interaksi manusia dengan hewan ternak (ayam/babi) — virus dari hewan berpindah ke manusia dan bergabung menjadi virus baru yang lebih berbahaya.</p>
<p>Lingkungan kotor mempercepat penyebaran. Kita perlu menjaga kebersihan diri dan lingkungan serta menjaga jarak dari hewan yang sakit.</p>
</div>\n\nManakah RINGKASAN yang tepat berdasarkan teks tersebut?`,
    opts: [
      'Sistem imun sulit mendeteksi superflu. Kombinasi virus flu hewan-manusia berbahaya. Lingkungan bersih membantu ketahanan tubuh.',
      'Gejala superflu berat. Virus berpindah dari hewan ke manusia. Lingkungan kotor mempercepat mutasi virus.',
      'Superflu adalah virus hasil mutasi dengan gejala berat. Interaksi manusia-hewan ternak menciptakan virus baru. Hidup bersih dan jaga jarak mencegah virus ini.',
      'Mutasi genetik cepat membuat penyakit mematikan. Virus babi berpindah ke manusia menciptakan antibodi baru. Sirkulasi udara harus dijaga.'
    ],
    ans: 2,
    topic: 'Ide Pokok & Gagasan',
    level: 'Sedang',
    explanation: 'Ringkasan yang baik mencakup isi utama semua paragraf secara akurat. Pilihan C paling tepat: (1) Superflu = virus mutasi dengan gejala berat ✓, (2) interaksi manusia-hewan ternak menciptakan virus baru ✓, (3) hidup bersih dan jaga jarak dapat mencegah ✓. Pilihan D salah karena menyebut "antibodi baru" yang tidak ada di teks.'
  },

  {
    q: `Bacalah teks berikut!\n\n<div class="tka-reading-box">
<b>Mengapa Superflu Muncul?</b>
<p>Superflu lebih berbahaya dari flu biasa karena virus flu <b>berubah bentuk dengan cepat</b> menjadi lebih kuat. Superflu muncul karena interaksi manusia dengan hewan ternak (ayam/babi) — virus dari hewan berpindah ke manusia dan bergabung menjadi virus baru yang lebih berbahaya.</p>
<p>Lingkungan kotor mempercepat penyebaran. Kita perlu menjaga kebersihan diri dan lingkungan serta menjaga jarak dari hewan yang sakit.</p>
</div>\n\nPerubahan apa yang terjadi pada VIRUS berdasarkan teks tentang Superflu?`,
    opts: [
      'Virus bermutasi cepat sehingga menjadi lebih kuat dan sulit dikenali imun',
      'Virus berpindah ke hewan ternak sehingga sistem imun hewan menjadi lemah',
      'Virus berubah warna karena sanitasi buruk dan sirkulasi udara tidak terjaga',
      'Virus berubah menjadi antibodi baru untuk membantu manusia melawan gejala flu'
    ],
    ans: 0,
    topic: 'Membaca Pemahaman',
    level: 'Mudah',
    explanation: 'Teks menyebutkan: "virus flu berubah bentuk dengan cepat, perubahan ini membuat virus menjadi lebih kuat dan sulit dilawan oleh tubuh manusia." Ini adalah deskripsi mutasi virus yang membuat sistem imun sulit mengenalinya. Jawaban A paling sesuai dengan teks.'
  },

  {
    q: `Apa yang SEBAIKNYA dilakukan jika di sekitarmu ada yang terjangkit virus seperti teks Superflu?\n\n(Pilih semua yang benar!)`,
    opts: [
      'Segera beri vaksin pada unggas agar virus tidak bermutasi dalam hewan',
      'Terapkan hidup bersih dan jaga sanitasi agar virus tidak berkembang biak',
      'Jaga jarak aman dengan hewan sakit untuk memutus rantai penyebaran virus',
      'Minum antibiotik agar tubuh kebal dari virus'
    ],
    ans: 1,
    topic: 'Membaca Pemahaman',
    level: 'Mudah',
    explanation: 'Berdasarkan teks, langkah pencegahan: (2) Menjaga kebersihan dan sanitasi ✓ dan (3) menjaga jarak dari hewan yang sakit ✓. Memvaksin unggas tidak disebutkan dalam teks sebagai solusi individu. Antibiotik untuk bakteri, bukan virus.'
  },

  // ── TEKS 6: CARA CUCI TANGAN (soal 16-18) ────────────────────
  {
    q: `Bacalah teks berikut!\n\n<div class="tka-reading-box">
<b>Mengapa Superflu Muncul?</b>
<p>Superflu lebih berbahaya dari flu biasa karena virus flu <b>berubah bentuk dengan cepat</b> menjadi lebih kuat. Superflu muncul karena interaksi manusia dengan hewan ternak (ayam/babi) — virus dari hewan berpindah ke manusia dan bergabung menjadi virus baru yang lebih berbahaya.</p>
<p>Lingkungan kotor mempercepat penyebaran. Kita perlu menjaga kebersihan diri dan lingkungan serta menjaga jarak dari hewan yang sakit.</p>
</div>\n\nTeks prosedur "Cara Mencuci Tangan yang Benar" berisi 8 langkah mencuci tangan dengan sabun dan air mengalir.\n\nManakah informasi yang SESUAI berdasarkan teks tersebut?\n\n(Pilih semua yang benar!)`,
    opts: [
      'Sabun berfungsi membunuh semua kuman sehingga langkah menggosok tidak terlalu penting',
      'Menggosok sela-sela jari diperlukan karena bagian tersebut sering menjadi tempat kuman',
      'Membersihkan ujung jari dan kuku membantu mengurangi kuman yang sulit terlihat',
      'Cukup membasahi tangan dengan air tanpa sabun untuk membersihkan kuman'
    ],
    ans: 1,
    topic: 'Membaca Pemahaman',
    level: 'Mudah',
    explanation: 'SESUAI: (2) Menggosok sela jari — "kuman dan bakteri yang menempel di sela-sela jari dapat terangkat" ✓. (3) Membersihkan ujung jari dan kuku — "kuman di ujung jari dan kuku dapat terangkat" ✓. TIDAK SESUAI: Menggosok tetap penting meski ada sabun. Air saja tidak cukup tanpa sabun.'
  },

  {
    q: `Amanat apa yang kamu dapatkan dari teks prosedur "Cara Mencuci Tangan yang Benar"?`,
    opts: [
      'Kita hendaknya mencuci tangan menggunakan sabun hanya saat beraktivitas berat',
      'Kita seharusnya mencuci tangan hanya jika tangan terlihat kotor agar tidak boros air',
      'Kita perlu mencuci tangan sesekali saja selama tangan tidak menyentuh benda kotor',
      'Kita sebaiknya mencuci tangan dengan langkah yang benar untuk mencegah penyakit'
    ],
    ans: 3,
    topic: 'Amanat & Nilai Teks',
    level: 'Mudah',
    explanation: 'Amanat teks: "Dengan mencuci tangan secara benar dan rutin, kita dapat mencegah penyebaran kuman dan penyakit." Pesan utamanya adalah cuci tangan dengan cara yang benar (8 langkah yang dijelaskan) secara rutin, bukan hanya sesekali atau saat tangan kelihatan kotor.'
  },

  {
    q: `Tentukan SESUAI atau TIDAK SESUAI peristiwa berikut dengan teks cuci tangan!`,
    opts: [
      'Rafa membilas dengan air mengalir hingga tidak ada sisa sabun — SESUAI',
      'Doni melewatkan langkah gosok sela jari karena merasa sudah bersih — TIDAK SESUAI',
      'Siti membasahi tangan dengan air mengalir dan sabun — SESUAI',
      'Semua TIDAK SESUAI'
    ],
    ans: 0,
    topic: 'Membaca Pemahaman',
    level: 'Mudah',
    explanation: 'SESUAI: Rafa membilas dengan air mengalir — sesuai langkah 8 teks ✓ dan Siti membasahi dengan air mengalir dan sabun — sesuai langkah 1-2 ✓. TIDAK SESUAI: Doni melewatkan gosok sela jari — teks jelas menyatakan langkah ini penting karena kuman bersarang di sela jari.'
  },

  // ── TEKS 7: RAGAM TARIAN INDONESIA (soal 19-21) ───────────────
  {
    q: `Bacalah teks berikut!\n\n<div class="tka-reading-box">
<b>Ragam Tarian di Indonesia</b>
<p>Tari kreasi adalah tari yang gerakannya merupakan perkembangan dari gerak tari tradisional, tanpa aturan tertentu.</p>
<p>Tiga jenis tari kreasi: (1) <b>Tari kreasi daerah/tradisional</b> — mengalami perubahan dari tari tradisi tapi tetap mempertahankan ciri khas daerah. (2) <b>Tari kreasi modern</b> — tidak memiliki aturan tertentu. (3) <b>Tari kreasi kontemporer</b> — dibuat berdasarkan isu yang beredar pada waktu tertentu.</p>
<p>Bentuk: tari tunggal (1 penari), tari berpasangan (2 penari), tari kelompok (lebih dari 2 penari).</p>
</div>\n\nInformasi yang SESUAI dengan teks tersebut adalah … (Jawaban lebih dari satu)`,
    opts: [
      'Tari kreasi daerah tidak mengalami perubahan dari tari tradisi',
      'Tari kontemporer dibuat berdasarkan isu yang beredar pada waktu tertentu',
      'Tari kelompok diperagakan oleh lebih dari dua penari',
      'Tari kreasi modern memiliki aturan yang sangat ketat'
    ],
    ans: 1,
    topic: 'Membaca Pemahaman',
    level: 'Mudah',
    explanation: 'SESUAI: (2) Tari kontemporer "dibuat berdasarkan isu yang beredar pada waktu tertentu" ✓ dan (3) tari kelompok "diperagakan oleh lebih dari dua penari" ✓. TIDAK SESUAI: Tari kreasi daerah MENGALAMI perubahan (bukan tidak berubah). Tari kreasi modern justru TIDAK memiliki aturan tertentu.'
  },

  {
    q: `Manakah BAGAN ALUR yang paling sesuai untuk menggambarkan informasi dalam teks Ragam Tarian?`,
    opts: [
      'Pengertian tari kreasi → Jenis tari kreasi → Contoh tari kreasi',
      'Pengertian tari kreasi → Bentuk karya tari kreasi → Jenis tari kreasi',
      'Pengertian tari kreasi → Jenis tari kreasi → Bentuk karya tari kreasi',
      'Pengertian tari kreasi → Bentuk karya tari kreasi → Contoh tari kreasi'
    ],
    ans: 2,
    topic: 'Ide Pokok & Gagasan',
    level: 'Sedang',
    explanation: 'Urutan isi teks: (1) Paragraf 1: Pengertian tari kreasi → (2) Paragraf 2: Jenis tari kreasi (3 jenis) → (3) Paragraf 3: Bentuk karya tari kreasi (tunggal/pasangan/kelompok). Bagan alur yang paling sesuai: Pengertian → Jenis → Bentuk = pilihan C.'
  },

  {
    q: `Apa IDE POKOK paragraf KEDUA dalam teks Ragam Tarian?`,
    opts: [
      'Ada tiga jenis tari kreasi: tradisional, modern, dan kontemporer',
      'Indonesia kaya akan budaya di antaranya karya tari',
      'Bentuk karya tari kreasi',
      'Jenis-jenis tari kreasi'
    ],
    ans: 0,
    topic: 'Ide Pokok & Gagasan',
    level: 'Mudah',
    explanation: 'Kalimat utama/ide pokok paragraf kedua adalah: "Ada tiga jenis tari kreasi yaitu tari kreasi daerah/tradisional, tari kreasi modern, dan tari kreasi kontemporer." Kalimat ini mencakup seluruh isi paragraf kedua yang menjelaskan ketiga jenis tersebut.'
  },

  // ── TEKS 8: MUSANG YANG PENASARAN (soal 22-24) ────────────────
  {
    q: `Bacalah teks berikut!\n\n<div class="tka-reading-box">
<b>Musang yang Penasaran</b>
<p>Tipo dan Tipi si musang melihat Lala, anak perempuan yang suka menggambar, datang ke hutan. Tipo bersemangat ingin digambar Lala. Namun Tipi berkata, <i>"Aku malu! Aku tidak mau!"</i> dan berlari menjauhi Tipo.</p>
</div>\n\nMengapa Tipi berlari menjauhi Tipo? Tentukan Sesuai atau Tidak Sesuai!`,
    opts: [
      'Tipi merasa malu jika dirinya dijadikan objek gambar oleh Lala — SESUAI',
      'Tipi merasa takut akan ditangkap oleh Lala — TIDAK SESUAI',
      'Tipi ingin pulang — SESUAI',
      'Semua TIDAK SESUAI'
    ],
    ans: 0,
    topic: 'Unsur Intrinsik Cerita',
    level: 'Mudah',
    explanation: 'SESUAI: Tipi malu jika dijadikan objek gambar — teks jelas: "Aku malu kalau dia menggambar aku. Aku pulang saja!" ✓ dan Tipi ingin pulang ✓. TIDAK SESUAI: Tidak ada teks yang menyebut Tipi takut ditangkap — alasannya murni karena malu, bukan takut.'
  },

  {
    q: `Apa AMANAT dari cerita "Musang yang Penasaran"?`,
    opts: [
      'Rasa malu membuat kita tidak perlu berinteraksi dengan orang lain',
      'Kita harus selalu menghindari manusia yang datang ke hutan',
      'Hewan sebaiknya bersembunyi saat ada manusia datang',
      'Kita perlu percaya diri dan tidak malu menjadi diri sendiri'
    ],
    ans: 3,
    topic: 'Amanat & Nilai Teks',
    level: 'Mudah',
    explanation: 'Kontras antara Tipo (percaya diri, ingin digambar, "hati berbunga-bunga") dan Tipi (malu, lari) menyampaikan amanat: kita perlu percaya diri dan tidak perlu malu menjadi diri sendiri. Cerita memperlihatkan rasa malu yang berlebihan membuat Tipi melewatkan pengalaman yang menyenangkan.'
  },

  {
    q: `Bacalah teks berikut!\n\n<div class="tka-reading-box">
<b>Musang yang Penasaran</b>
<p>Tipo dan Tipi si musang melihat Lala, anak perempuan yang suka menggambar, datang ke hutan. Tipo bersemangat ingin digambar Lala. Namun Tipi berkata, <i>"Aku malu! Aku tidak mau!"</i> dan berlari menjauhi Tipo.</p>
</div>\n\nBerdasarkan teks "Musang yang Penasaran", bagaimanakah SUASANA HATI yang dialami Tipo? Tentukan Benar atau Salah!`,
    opts: [
      'Takut — SALAH; Percaya diri — BENAR; Berbunga-bunga — BENAR',
      'Takut — BENAR; Percaya diri — BENAR; Berbunga-bunga — SALAH',
      'Takut — SALAH; Percaya diri — SALAH; Berbunga-bunga — BENAR',
      'Semua BENAR'
    ],
    ans: 0,
    topic: 'Unsur Intrinsik Cerita',
    level: 'Mudah',
    explanation: 'Suasana hati Tipo: SALAH takut (Tipo justru semangat dan ingin digambar). BENAR percaya diri ("Gambarnya bagus! Aku ingin dia menggambar kita!") ✓. BENAR berbunga-bunga ("Hati Tipo berbunga-bunga membayangkan Lala akan menggambarnya") ✓ — ini bahkan langsung disebutkan dalam teks.'
  },

  // ── TEKS 9: LEGENDA DANAU TOBA (soal 25-27) ───────────────────
  {
    q: `Bacalah teks berikut!\n\n<div class="tka-reading-box">
<b>Danau Toba</b>
<p>Toba petani miskin menangkap ikan mas yang berubah menjadi wanita cantik (putri dewa yang dikutuk). Mereka menikah dengan syarat Toba tidak boleh memberitahu asal-usul istrinya.</p>
<p>Mereka punya anak bernama Samosir yang pemalas. Toba marah karena Samosir memakan bekalnya, dan tanpa sadar berkata <i>"Dasar anak ikan!"</i> — melanggar janjinya. Sang ibu menangis dan menyuruh Samosir lari ke bukit. Hujan deras turun, air menyembur dari bekas pijakan kaki istri dan anak, membentuk Danau Toba dan Pulau Samosir.</p>
</div>\n\nBagaimana reaksi Ibu Samosir setelah mengetahui Toba melanggar janjinya? Tentukan Setuju atau Tidak Setuju!`,
    opts: [
      'Ibu menyemburkan air dari bekas pijakan kakinya — SETUJU',
      'Ibu menangis karena mendengar kutukan — SETUJU',
      'Ibu menyuruh Samosir berlari ke atas bukit — SETUJU',
      'Ibu marah kepada Toba dan langsung pergi — SETUJU'
    ],
    ans: 1,
    topic: 'Membaca Pemahaman',
    level: 'Sedang',
    explanation: 'Dari teks: (1) Air menyembur dari BEKAS PIJAKAN KAKI, bukan ibu yang menyemburkan secara aktif — TIDAK SETUJU. (2) "Sang ibu menangis" setelah mendengar kutukan ✓ — SETUJU. (3) "Menyuruh Samosir berlari ke atas bukit" ✓ — SETUJU. (4) Ibu tidak secara eksplisit marah lalu pergi — TIDAK SETUJU.'
  },

  {
    q: `Apa IKHTISAR yang paling tepat dari legenda Danau Toba?`,
    opts: [
      'Toba menikahi putri dewa berwujud ikan. Anaknya Samosir pemalas. Samosir mengadu kepada ibunya. Ayahnya menyebut Samosir anak ikan. Seketika turun hujan dan terbentuklah Danau Toba.',
      'Toba menikahi putri dewa berwujud ikan. Samosir pemalas. Awalnya tidak mau mengantar makanan. Samosir mengadu. Ibunya menyuruh lari ke bukit. Hujan deras dan terbentuklah Danau Toba.',
      'Toba petani miskin menikahi putri dewa yang dikutuk jadi ikan dengan syarat tidak melanggar janji. Samosir malas dan nakal. Toba marah karena bekalnya dimakan dan melanggar janji. Samosir mengadu. Hujan deras turun dan terbentuklah Danau Toba dan Pulau Samosir.',
      'Toba petani miskin menikahi wanita cantik berwujud ikan. Anaknya pemalas. Samosir mengantar makanan. Ayahnya menyebut Samosir anak ikan. Seketika hujan dan menyemburlah air dari kaki istri Toba.'
    ],
    ans: 2,
    topic: 'Ide Pokok & Gagasan',
    level: 'Sedang',
    explanation: 'Ikhtisar yang baik mencakup semua poin utama secara akurat dan ringkas. Pilihan C paling tepat: menyebutkan syarat pernikahan, karakter Samosir, sebab Toba melanggar janji (marah karena bekal dimakan), dan akibatnya (Danau Toba dan Pulau Samosir). Pilihan lain kurang lengkap atau ada detail yang salah.'
  },

  {
    q: `Jika kamu menjadi Toba, bagaimana perasaanmu setelah mengetahui akibat melanggar janji?`,
    opts: [
      'Aku akan menyesal atas kesalahan karena telah menyebabkan desa tenggelam',
      'Aku merasa biasa saja, karena hal itu wajar dilakukan kepada anak yang nakal',
      'Aku akan tetap marah kepada Toba yang telah memakan sebagian makananku',
      'Aku akan merasa kesal pada keadaan yang mengharuskan aku melanggar janji'
    ],
    ans: 0,
    topic: 'Apresiasi Sastra',
    level: 'Mudah',
    explanation: 'Respons emosional yang paling sesuai dengan nilai moral cerita adalah menyesal. Toba melanggar janji yang berakibat bencana besar — desa tenggelam dan ia sendiri tenggelam. Rasa sesal atas akibat melanggar janji adalah respons yang mencerminkan pemahaman moral dari cerita.'
  },

  // ── TEKS 10: RUMAH WORTEL (soal 28-30) ───────────────────────
  {
    q: `Bacalah teks berikut!\n\n<div class="tka-reading-box">
<b>Rumah Wortel</b>
<p>Elis si kelinci ingin menanam wortel sendiri karena wortel langka. Ia menanam sisa bonggol tapi tidak berbuah. Ia tidak menyerah, mengumpulkan biji wortel dari bunga. Namun burung memakan bijinya. Ia pasang jaring, tapi tikus tanah merusak akar. Akhirnya ia menanam wortel di pot dari barang bekas yang digantung di luar rumah. Panen wortel melimpah. <b>Berakit-rakit ke hulu, berenang-renang ke tepian.</b> Elis bangga karena tidak menyerah.</p>
</div>\n\nApa saja MASALAH yang dialami Elis saat menanam wortel? Tentukan Setuju atau Tidak Setuju!`,
    opts: [
      'Burung memakan biji wortel — SETUJU',
      'Tikus tanah merusak akar wortel — SETUJU',
      'Pot gantung tidak terkena sinar matahari — SETUJU',
      'Tetangga mencuri hasil panen Elis — TIDAK SETUJU'
    ],
    ans: 0,
    topic: 'Membaca Pemahaman',
    level: 'Mudah',
    explanation: 'Masalah yang dialami Elis: (1) Burung memakan biji ✓ — SETUJU. (2) Tikus tanah merusak akar ✓ — SETUJU. (3) Pot dalam rumah tidak kena matahari ✓ — SETUJU (makanya dipindah ke luar). Tetangga mencuri tidak ada dalam teks — TIDAK SETUJU.'
  },

  {
    q: `Apa nilai KETELADANAN dari tokoh Elis dalam cerita "Rumah Wortel"?\n\n(Pilih semua yang benar!)`,
    opts: [
      'Elis memiliki sikap pantang menyerah',
      'Elis selalu mengandalkan ayah dan ibunya',
      'Elis rajin dan kreatif dalam mewujudkan tujuan',
      'Elis tidak peduli dengan lingkungan sekitar'
    ],
    ans: 0,
    topic: 'Unsur Intrinsik Cerita',
    level: 'Mudah',
    explanation: 'Nilai keteladanan Elis: (1) Pantang menyerah — meski gagal berkali-kali (bonggol tidak berbuah, biji dimakan burung, akar dirusak tikus), Elis terus mencari cara ✓. (3) Rajin dan kreatif — rajin merawat tanaman dan kreatif menggunakan barang bekas untuk pot gantung ✓. Elis justru mandiri, tidak mengandalkan orang tua.'
  },

  {
    q: `Apa makna PERIBAHASA <b>"Berakit-rakit ke hulu, berenang-renang ke tepian"</b> dalam cerita Elis?`,
    opts: [
      'Bersakit-sakit selalu akan mengubah keadaan menjadi impian nyata meskipun tanpa perjuangan',
      'Bersenang-senang dan menunggu keadaan membaik adalah kunci keberhasilan',
      'Tujuan akan selalu tercapai dengan mengandalkan angan-angan agar kelak bisa bersenang-senang',
      'Kesuksesan dapat dicapai dengan rela berjuang dan bekerja keras dalam mengatasi kesulitan'
    ],
    ans: 3,
    topic: 'Majas & Ungkapan',
    level: 'Mudah',
    explanation: '"Berakit-rakit ke hulu, berenang-renang ke tepian" — artinya: bersakit-sakit dahulu, bersenang-senang kemudian. Maknanya: untuk mencapai kesenangan/kesuksesan, kita harus terlebih dahulu mau berjuang dan bekerja keras menghadapi kesulitan. Cocok dengan kisah Elis yang berjuang keras akhirnya panen melimpah.'
  },
];
