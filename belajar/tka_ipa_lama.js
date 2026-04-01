// ============================================================
//  TKA IPA — Soal Latihan Harian
//  Sumber: Soal bawaan BelajarCeria (soal latihan harian)
//  Dipindah dari data.js untuk maintainability
// ============================================================

export const TKA_IPA_LAMA = [
// ── SISTEM PENCERNAAN (5 soal) ──
  { id:'tka-ipa-1', topic:'Sistem Pencernaan', level:'mudah',
    q:'Organ pencernaan yang berfungsi menyerap sari-sari makanan dan mendistribusikannya ke seluruh tubuh adalah…',
    opts:['Lambung','Usus besar','Usus halus','Kerongkongan'],
    ans:2,
    explanation:'Usus halus adalah tempat utama penyerapan sari-sari makanan. Dindingnya memiliki jonjot (vili) yang memperluas area penyerapan sehingga nutrisi bisa diserap ke pembuluh darah dengan efisien.'
  },
  { id:'tka-ipa-2', topic:'Sistem Pencernaan', level:'sedang',
    q:'Perhatikan pernyataan berikut:\n(1) Menghasilkan enzim amilase\n(2) Menghancurkan makanan secara mekanis\n(3) Mengandung asam klorida (HCl)\n(4) Menghasilkan empedu\nPernyataan yang benar tentang lambung adalah…',
    opts:['(1) dan (2)','(2) dan (3)','(3) dan (4)','(1) dan (4)'],
    ans:1,
    explanation:'Lambung menghancurkan makanan secara mekanis melalui kontraksi otot (no.2) dan mengandung asam klorida (HCl) untuk membunuh bakteri serta mengaktifkan enzim pepsin (no.3). Amilase dihasilkan kelenjar ludah, empedu dihasilkan hati.'
  },
  { id:'tka-ipa-3', topic:'Sistem Pencernaan', level:'sedang',
    q:'Enzim yang berfungsi memecah protein menjadi pepton di lambung adalah…',
    opts:['Amilase','Lipase','Pepsin','Tripsin'],
    ans:2,
    explanation:'Pepsin adalah enzim di lambung yang memecah protein menjadi pepton (rantai peptida lebih pendek). Amilase memecah amilum, lipase memecah lemak, dan tripsin bekerja di usus halus.'
  },
  { id:'tka-ipa-4', topic:'Sistem Pencernaan', level:'susah',
    q:'Seorang anak mengalami gangguan pencernaan yang menyebabkan makanan tidak dicerna dengan baik karena produksi empedu berkurang. Organ manakah yang mengalami gangguan dan apa fungsi empedu yang terganggu?',
    opts:['Pankreas; menghasilkan insulin','Hati; mengemulsikan lemak','Lambung; menghasilkan HCl','Usus besar; menyerap air'],
    ans:1,
    explanation:'Empedu dihasilkan oleh hati dan disimpan di kantong empedu. Fungsi utamanya adalah mengemulsikan lemak (memecah gumpalan lemak menjadi butiran kecil) sehingga enzim lipase dapat bekerja lebih efektif. Jika empedu berkurang, pencernaan lemak terganggu.'
  },
  { id:'tka-ipa-5', topic:'Sistem Pencernaan', level:'susah',
    q:'Urutan proses pencernaan makanan yang benar mulai dari penyerapan air hingga pembentukan feses adalah…',
    opts:['Lambung → Usus halus → Usus besar → Anus','Mulut → Kerongkongan → Lambung → Usus halus → Usus besar → Anus','Mulut → Lambung → Usus halus → Anus','Kerongkongan → Lambung → Usus besar → Anus'],
    ans:1,
    explanation:'Urutan lengkap: Mulut (pencernaan mekanis+kimiawi) → Kerongkongan (peristaltik) → Lambung (pencernaan kimiawi+mekanis) → Usus halus (penyerapan sari makanan) → Usus besar (penyerapan air, pembentukan feses) → Anus (pengeluaran).'
  },

  // ── SISTEM PERNAPASAN (4 soal) ──
  { id:'tka-ipa-6', topic:'Sistem Pernapasan', level:'mudah',
    q:'Organ pernapasan yang berfungsi sebagai tempat pertukaran gas oksigen (O₂) dan karbon dioksida (CO₂) adalah…',
    opts:['Trakea','Bronkus','Alveolus','Diafragma'],
    ans:2,
    explanation:'Alveolus (jamak: alveoli) adalah kantung udara kecil di ujung bronkiolus yang dikelilingi kapiler darah. Di sinilah terjadi pertukaran gas: O₂ masuk ke darah, CO₂ dikeluarkan dari darah ke alveolus.'
  },
  { id:'tka-ipa-7', topic:'Sistem Pernapasan', level:'sedang',
    q:'Ketika kita menarik napas (inspirasi), yang terjadi pada diafragma dan rongga dada adalah…',
    opts:['Diafragma naik, rongga dada mengecil','Diafragma turun, rongga dada membesar','Diafragma naik, rongga dada membesar','Diafragma turun, rongga dada mengecil'],
    ans:1,
    explanation:'Saat inspirasi, diafragma berkontraksi dan bergerak turun (mendatar), sementara otot interkostal mengangkat tulang rusuk. Akibatnya rongga dada membesar, tekanan udara dalam paru-paru turun, dan udara luar masuk.'
  },
  { id:'tka-ipa-8', topic:'Sistem Pernapasan', level:'sedang',
    q:'Perhatikan tabel berikut:\n\nUdara Masuk: O₂ = 21%, CO₂ = 0,04%\nUdara Keluar: O₂ = 16%, CO₂ = 4%\n\nBerdasarkan data tersebut, dapat disimpulkan bahwa…',
    opts:['Tubuh memproduksi O₂ saat bernapas','Tubuh menggunakan O₂ dan melepaskan CO₂ dalam proses respirasi','Jumlah O₂ dan CO₂ dalam udara selalu tetap','Paru-paru menyimpan sebagian O₂'],
    ans:1,
    explanation:'Data menunjukkan O₂ berkurang (21% → 16%) dan CO₂ bertambah (0,04% → 4%) setelah melewati paru-paru. Ini membuktikan bahwa respirasi seluler menggunakan O₂ dan menghasilkan CO₂ sebagai produk sampingan.'
  },
  { id:'tka-ipa-9', topic:'Sistem Pernapasan', level:'susah',
    q:'Seorang pasien didiagnosis mengalami penebalan dinding alveolus akibat infeksi. Dampak yang paling mungkin terjadi adalah…',
    opts:['Pernapasan menjadi lebih cepat karena O₂ berlebih','Pertukaran gas terhambat sehingga kadar O₂ dalam darah menurun','Produksi CO₂ meningkat drastis','Diafragma tidak dapat bergerak'],
    ans:1,
    explanation:'Penebalan dinding alveolus menghambat difusi gas (O₂ dan CO₂ harus melewati membran yang lebih tebal). Akibatnya O₂ sulit masuk ke darah dan CO₂ sulit dikeluarkan, sehingga kadar O₂ dalam darah turun (hipoksia).'
  },

  // ── ADAPTASI MAKHLUK HIDUP (4 soal) ──
  { id:'tka-ipa-10', topic:'Adaptasi Makhluk Hidup', level:'mudah',
    q:'Kaktus mampu bertahan hidup di gurun yang kering karena memiliki adaptasi berupa…',
    opts:['Daun yang lebar untuk fotosintesis','Batang tebal berisi cadangan air dan daun berbentuk duri','Akar pendek untuk menyimpan air','Stomata terbuka lebar pada siang hari'],
    ans:1,
    explanation:'Kaktus beradaptasi dengan batang tebal berdaging yang menyimpan air (CAM metabolism), daun berubah menjadi duri untuk mengurangi penguapan, dan akar yang panjang menyebar luas untuk menyerap air hujan.'
  },
  { id:'tka-ipa-11', topic:'Adaptasi Makhluk Hidup', level:'sedang',
    q:'Teratai hidup di air dan memiliki daun yang lebar, tipis, dan mengapung di permukaan air. Tujuan adaptasi daun yang lebar tersebut adalah…',
    opts:['Agar lebih mudah dimakan hewan air','Untuk memperluas permukaan penguapan dan fotosintesis','Agar tidak mudah tenggelam akibat gelombang','Untuk menyimpan cadangan makanan'],
    ans:1,
    explanation:'Daun teratai yang lebar berfungsi untuk memaksimalkan penerimaan cahaya matahari untuk fotosintesis dan juga mempercepat penguapan (transpirasi) yang membantu mengalirkan air dan mineral dari akar ke seluruh tanaman.'
  },
  { id:'tka-ipa-12', topic:'Adaptasi Makhluk Hidup', level:'sedang',
    q:'Beruang kutub memiliki bulu berwarna putih. Fungsi adaptasi warna bulu tersebut dalam konteks lingkungan kutub adalah…',
    opts:['Menyerap panas matahari lebih banyak','Kamuflase untuk berburu dan perlindungan dari predator','Mengurangi pantulan sinar UV berbahaya','Menghasilkan panas tubuh lebih efisien'],
    ans:1,
    explanation:'Bulu putih beruang kutub berfungsi sebagai kamuflase (penyamaran) di lingkungan salju dan es. Ini membantu mereka berburu mangsa tanpa terdeteksi dan juga menghindari ancaman dari pemangsa lain.'
  },
  { id:'tka-ipa-13', topic:'Adaptasi Makhluk Hidup', level:'susah',
    q:'Perhatikan pernyataan tentang adaptasi berikut:\n(1) Kantong semar mencerna serangga untuk mendapatkan nitrogen\n(2) Pohon bakau memiliki akar napas yang muncul ke permukaan lumpur\n(3) Unta menyimpan air dalam punuknya\n(4) Ikan laut memiliki insang yang efisien membuang garam\nAdaptasi fisiologi ditunjukkan oleh nomor…',
    opts:['(1) dan (2)','(2) dan (3)','(1) dan (4)','(3) dan (4)'],
    ans:2,
    explanation:'Adaptasi fisiologi berkaitan dengan fungsi/proses dalam tubuh. (1) Kantong semar mencerna serangga untuk mendapatkan nitrogen = adaptasi fisiologi. (4) Insang ikan laut membuang garam secara aktif = adaptasi fisiologi. Sedangkan (2) akar napas dan (3) punuk unta adalah adaptasi morfologi (bentuk fisik).'
  },

  // ── RANTAI MAKANAN & EKOSISTEM (4 soal) ──
  { id:'tka-ipa-14', topic:'Rantai Makanan & Ekosistem', level:'mudah',
    q:'Dalam rantai makanan: Padi → Tikus → Ular → Elang, organisme yang berperan sebagai produsen adalah…',
    opts:['Tikus','Ular','Padi','Elang'],
    ans:2,
    explanation:'Produsen adalah organisme yang dapat membuat makanan sendiri melalui fotosintesis. Dalam rantai makanan ini, padi adalah tumbuhan yang berfotosintesis sehingga berperan sebagai produsen.'
  },
  { id:'tka-ipa-15', topic:'Rantai Makanan & Ekosistem', level:'sedang',
    q:'Perhatikan rantai makanan: Rumput → Belalang → Katak → Ular → Elang.\nJika populasi katak menurun drastis akibat perburuan, prediksi perubahan yang paling mungkin terjadi adalah…',
    opts:['Populasi belalang menurun dan populasi ular meningkat','Populasi belalang meningkat dan populasi ular menurun','Populasi rumput menurun dan populasi elang meningkat','Semua populasi akan tetap stabil'],
    ans:1,
    explanation:'Jika katak berkurang: (1) Belalang tidak dimangsa katak → populasi belalang meningkat. (2) Ular kekurangan makanan (katak) → populasi ular menurun. Ini menyebabkan ketidakseimbangan ekosistem secara berantai.'
  },
  { id:'tka-ipa-16', topic:'Rantai Makanan & Ekosistem', level:'sedang',
    q:'Organisme pengurai (dekomposer) memiliki peran penting dalam ekosistem karena…',
    opts:['Menghasilkan O₂ untuk respirasi semua makhluk hidup','Mengubah zat organik dari organisme mati menjadi mineral yang dapat digunakan tumbuhan','Menyediakan makanan bagi konsumen tingkat pertama','Mengurangi populasi produsen agar tidak berlebihan'],
    ans:1,
    explanation:'Dekomposer (seperti jamur dan bakteri pengurai) menguraikan bangkai dan sisa organisme menjadi mineral anorganik. Mineral ini dikembalikan ke tanah dan dapat diserap oleh tumbuhan sebagai nutrisi, sehingga siklus materi dalam ekosistem terus berlangsung.'
  },
  { id:'tka-ipa-17', topic:'Rantai Makanan & Ekosistem', level:'susah',
    q:'Di suatu ekosistem sawah, petani menggunakan pestisida untuk membasmi hama wereng. Setelah beberapa bulan, populasi burung pipit di area tersebut juga menurun drastis meskipun burung pipit bukan target pestisida. Fenomena ini paling tepat dijelaskan oleh konsep…',
    opts:['Seleksi alam karena burung pipit tidak adaptif','Akumulasi pestisida dalam rantai makanan (biomagnifikasi)','Kompetisi antarspesies yang semakin ketat','Perpindahan habitat burung pipit ke area lain'],
    ans:1,
    explanation:'Biomagnifikasi adalah penumpukan zat beracun (pestisida) dalam rantai makanan. Wereng mengonsumsi padi yang terkontaminasi → burung pipit memakan banyak wereng → kadar pestisida terakumulasi dalam tubuh burung pipit hingga konsentrasi yang berbahaya, menyebabkan kematian.'
  },

  // ── ENERGI & PERUBAHANNYA (4 soal) ──
  { id:'tka-ipa-18', topic:'Energi & Perubahannya', level:'mudah',
    q:'Ketika seseorang mengayuh sepeda, terjadi perubahan energi dari…',
    opts:['Energi kimia → Energi gerak','Energi gerak → Energi listrik','Energi panas → Energi gerak','Energi cahaya → Energi gerak'],
    ans:0,
    explanation:'Saat mengayuh sepeda, energi kimia dari makanan yang telah dicerna tubuh diubah menjadi energi gerak (kinetik) untuk memutar pedal dan roda sepeda. Proses ini terjadi melalui metabolisme sel otot.'
  },
  { id:'tka-ipa-19', topic:'Energi & Perubahannya', level:'sedang',
    q:'Panel surya mengubah energi matahari menjadi energi listrik. Prinsip yang digunakan dalam panel surya adalah efek…',
    opts:['Termal — panas matahari memanaskan cairan','Fotovoltaik — cahaya menghasilkan arus listrik','Elektromagnetik — medan magnet menghasilkan listrik','Piezoelektrik — tekanan menghasilkan listrik'],
    ans:1,
    explanation:'Panel surya menggunakan efek fotovoltaik: foton dari cahaya matahari mengenai material semikonduktor (biasanya silikon) dan membebaskan elektron, menghasilkan arus listrik searah (DC). Ini berbeda dengan generator yang menggunakan elektromagnetik.'
  },
  { id:'tka-ipa-20', topic:'Energi & Perubahannya', level:'sedang',
    q:'Perhatikan daftar perubahan energi berikut:\n(1) Lampu → listrik jadi cahaya dan panas\n(2) Setrika → listrik jadi panas\n(3) Bel listrik → listrik jadi bunyi\n(4) Dinamo → gerak jadi listrik\nPerubahan energi pada generator PLTA paling mirip dengan nomor…',
    opts:['(1)','(2)','(3)','(4)'],
    ans:3,
    explanation:'Generator PLTA mengubah energi gerak (putaran turbin oleh air) menjadi energi listrik. Hal ini sama dengan prinsip dinamo (no.4) yang juga mengubah energi gerak menjadi energi listrik melalui induksi elektromagnetik.'
  },
  { id:'tka-ipa-21', topic:'Energi & Perubahannya', level:'susah',
    q:'Hukum Kekekalan Energi menyatakan bahwa energi tidak dapat diciptakan atau dimusnahkan. Berdasarkan hukum ini, pada kenyataannya mengapa mesin tidak pernah memiliki efisiensi 100%?',
    opts:['Karena hukum kekekalan energi hanya berlaku di laboratorium','Karena sebagian energi selalu berubah menjadi energi panas yang terbuang','Karena mesin modern belum sempurna secara teknologi','Karena energi berkurang sedikit setiap kali berpindah bentuk'],
    ans:1,
    explanation:'Meskipun energi total terjaga, setiap perubahan bentuk energi selalu disertai pelepasan sebagian energi sebagai panas (akibat gesekan, hambatan listrik, dll.) ke lingkungan. Panas yang terbuang ini tidak dapat digunakan untuk kerja, sehingga efisiensi mesin selalu di bawah 100%.'
  },

  // ── RANGKAIAN LISTRIK (4 soal) ──
  { id:'tka-ipa-22', topic:'Rangkaian Listrik', level:'mudah',
    q:'Sebuah rangkaian memiliki 4 lampu yang dipasang secara paralel. Jika salah satu lampu dilepas, yang terjadi adalah…',
    opts:['Semua lampu mati','Ketiga lampu lainnya tetap menyala','Ketiga lampu lainnya menjadi lebih redup','Arus listrik berhenti mengalir'],
    ans:1,
    explanation:'Pada rangkaian paralel, setiap komponen memiliki jalur tersendiri menuju sumber listrik. Jika satu lampu dilepas, jalur lain tetap terhubung sehingga tiga lampu lainnya tetap menyala dengan kecerahan yang sama.'
  },
  { id:'tka-ipa-23', topic:'Rangkaian Listrik', level:'sedang',
    q:'Perhatikan tabel perbandingan rangkaian seri dan paralel:\n\nSeri: jika 1 putus → semua mati, tegangan terbagi\nParalel: jika 1 putus → lain tetap nyala, tegangan sama\n\nInstalasi listrik rumah menggunakan rangkaian paralel karena alasan utama…',
    opts:['Lebih hemat kabel','Lebih murah biaya pemasangan','Setiap ruangan dapat dikontrol secara mandiri dengan tegangan penuh','Mengurangi risiko kebakaran listrik'],
    ans:2,
    explanation:'Rangkaian paralel digunakan di rumah karena setiap ruangan mendapat tegangan penuh (220V) dan dapat dikontrol secara mandiri dengan saklar. Jika satu ruangan mati, ruangan lain tidak terpengaruh — ini sangat praktis dan efisien.'
  },
  { id:'tka-ipa-24', topic:'Rangkaian Listrik', level:'sedang',
    q:'Dua lampu identik dipasang seri dengan baterai 9V. Tegangan yang diterima masing-masing lampu adalah…',
    opts:['9V','4,5V','18V','3V'],
    ans:1,
    explanation:'Pada rangkaian seri, tegangan sumber dibagi rata ke semua komponen. Dengan 2 lampu identik dan tegangan total 9V, masing-masing lampu mendapat 9V ÷ 2 = 4,5V. Inilah mengapa lampu seri lebih redup dibanding paralel.'
  },
  { id:'tka-ipa-25', topic:'Rangkaian Listrik', level:'susah',
    q:'Sebuah rumah memiliki 5 lampu 20W yang menyala 8 jam/hari, dan 1 AC 900W yang menyala 4 jam/hari. Energi listrik total yang digunakan dalam 1 hari adalah…',
    opts:['1.400 Wh','4.400 Wh','800 Wh','3.600 Wh'],
    ans:1,
    explanation:'Energi = Daya × Waktu\nLampu: 5 × 20W × 8 jam = 800 Wh\nAC: 1 × 900W × 4 jam = 3.600 Wh\nTotal = 800 + 3.600 = 4.400 Wh\nRumus: E = P × t, satuan watt-hour (Wh) atau kilowatt-hour (kWh) jika dibagi 1000.'
  },

  // ── TATA SURYA & GERHANA (4 soal) ──
  { id:'tka-ipa-26', topic:'Tata Surya & Gerhana', level:'mudah',
    q:'Planet yang paling dekat dengan Matahari dalam sistem tata surya adalah…',
    opts:['Venus','Merkurius','Mars','Bumi'],
    ans:1,
    explanation:'Urutan planet dari yang terdekat ke terjauh dari Matahari: Merkurius, Venus, Bumi, Mars, Jupiter, Saturnus, Uranus, Neptunus. Merkurius adalah planet terdekat dengan Matahari.'
  },
  { id:'tka-ipa-27', topic:'Tata Surya & Gerhana', level:'sedang',
    q:'Gerhana matahari total terjadi ketika…',
    opts:['Bumi berada di antara Matahari dan Bulan pada fase bulan purnama','Bulan berada di antara Bumi dan Matahari sehingga bayangannya menutupi Bumi pada fase bulan baru','Matahari tertutup awan tebal pada siang hari','Bumi memasuki bayangan Bulan saat orbit'],
    ans:1,
    explanation:'Gerhana matahari total terjadi saat fase bulan baru (konjungsi): Bulan berada tepat di antara Bumi dan Matahari, dan bayangan umbra Bulan jatuh ke permukaan Bumi. Di area bayangan umbra tersebut, Matahari tertutup seluruhnya oleh Bulan.'
  },
  { id:'tka-ipa-28', topic:'Tata Surya & Gerhana', level:'sedang',
    q:'Akibat revolusi Bumi mengelilingi Matahari selama satu tahun adalah…',
    opts:['Terjadinya pergantian siang dan malam','Terjadinya perubahan musim dan perbedaan lamanya siang-malam di berbagai tempat','Adanya perbedaan waktu di berbagai belahan dunia','Pergerakan bintang dari timur ke barat'],
    ans:1,
    explanation:'Revolusi Bumi (peredaran Bumi mengelilingi Matahari) menyebabkan: (1) pergantian musim (karena kemiringan sumbu Bumi 23,5°), (2) perbedaan lamanya siang dan malam sesuai musim, (3) gerak semu tahunan Matahari. Pergantian siang-malam disebabkan rotasi Bumi.'
  },
  { id:'tka-ipa-29', topic:'Tata Surya & Gerhana', level:'susah',
    q:'Pasang naik air laut terjadi di dua sisi Bumi secara bersamaan. Mengapa hal ini bisa terjadi?',
    opts:['Karena Bumi berputar lebih cepat saat pasang naik','Karena gaya gravitasi Bulan menarik air di sisi yang menghadap Bulan, dan gaya sentrifugal rotasi Bumi mendorong air di sisi yang berlawanan','Karena tekanan atmosfer meningkat di kedua sisi secara bersamaan','Karena Matahari dan Bulan bekerja secara bergantian'],
    ans:1,
    explanation:'Pasang naik terjadi di dua sisi bersamaan karena: (1) Sisi yang menghadap Bulan: tarikan gravitasi Bulan menarik air ke arahnya. (2) Sisi yang berlawanan: gaya sentrifugal akibat rotasi sistem Bumi-Bulan mendorong air menjauh. Kedua efek ini terjadi bersamaan, menciptakan dua gundukan pasang.'
  },

  // ── SIKLUS AIR & CUACA (4 soal) ──
  { id:'tka-ipa-30', topic:'Siklus Air & Cuaca', level:'mudah',
    q:'Proses berubahnya uap air menjadi titik-titik air di atmosfer yang membentuk awan disebut…',
    opts:['Evaporasi','Presipitasi','Kondensasi','Transpirasi'],
    ans:2,
    explanation:'Kondensasi adalah proses perubahan wujud uap air (gas) menjadi tetes air cair ketika uap air naik ke atmosfer yang lebih dingin. Tetes-tetes air inilah yang berkumpul membentuk awan.'
  },
  { id:'tka-ipa-31', topic:'Siklus Air & Cuaca', level:'sedang',
    q:'Penebangan hutan secara liar dapat mengganggu siklus air. Dampak yang paling langsung adalah…',
    opts:['Evaporasi berkurang, sehingga hujan lebih sering terjadi','Transpirasi berkurang dan kemampuan tanah menyerap air menurun, menyebabkan kekeringan dan banjir','Kondensasi meningkat karena suhu udara turun','Siklus air tidak terganggu karena air laut masih banyak'],
    ans:1,
    explanation:'Pohon berperan dalam siklus air melalui: (1) Transpirasi: melepaskan uap air ke atmosfer. (2) Akar menyimpan air dan mencegah erosi. Tanpa pohon, transpirasi berkurang, tanah tidak bisa menyerap air dengan baik, sehingga saat hujan terjadi banjir, dan saat kemarau terjadi kekeringan.'
  },
  { id:'tka-ipa-32', topic:'Siklus Air & Cuaca', level:'sedang',
    q:'Air yang meresap ke dalam tanah dan mengisi lapisan batuan berpori disebut…',
    opts:['Air permukaan','Air tanah','Air hujan','Air kapiler'],
    ans:1,
    explanation:'Air tanah adalah air yang tersimpan di dalam lapisan tanah atau batuan berpori di bawah permukaan tanah (disebut akuifer). Air tanah terbentuk dari proses infiltrasi (peresapan) air hujan ke dalam tanah dan dapat diambil melalui sumur atau mata air.'
  },
  { id:'tka-ipa-33', topic:'Siklus Air & Cuaca', level:'susah',
    q:'Di suatu kota, banyak area hijau diganti dengan gedung dan aspal. Fenomena "pulau panas perkotaan" (urban heat island) terjadi. Apa hubungannya dengan siklus air?',
    opts:['Suhu tinggi meningkatkan evaporasi, sehingga hujan lebih sering','Aspal dan beton menyerap panas dan air hujan langsung mengalir ke selokan tanpa infiltrasi, mengurangi cadangan air tanah','Gedung tinggi menghalangi angin sehingga presipitasi meningkat','Tidak ada hubungannya dengan siklus air'],
    ans:1,
    explanation:'Permukaan kedap air (aspal, beton) menyebabkan air hujan tidak bisa meresap (infiltrasi = 0) dan langsung mengalir ke selokan sebagai limpasan permukaan. Ini mengurangi pengisian air tanah, meningkatkan risiko banjir, dan karena tidak ada vegetasi, transpirasi berkurang sehingga suhu kota meningkat.'
  },

  // ── PERKEMBANGBIAKAN MAKHLUK HIDUP (4 soal) ──
  { id:'tka-ipa-34', topic:'Perkembangbiakan Makhluk Hidup', level:'mudah',
    q:'Hewan yang berkembang biak dengan cara melahirkan anak disebut…',
    opts:['Ovipar','Vivipar','Ovovivipar','Hermafrodit'],
    ans:1,
    explanation:'Vivipar adalah cara berkembang biak hewan dengan melahirkan anak. Embrio berkembang di dalam rahim induk dan mendapat nutrisi melalui plasenta. Contoh: kucing, sapi, paus, dan manusia.'
  },
  { id:'tka-ipa-35', topic:'Perkembangbiakan Makhluk Hidup', level:'sedang',
    q:'Tumbuhan berikut yang berkembang biak secara vegetatif alami dengan menggunakan stolon adalah…',
    opts:['Bawang merah (umbi lapis)','Stroberi (stolon/geragih)','Kentang (umbi batang)','Jahe (rimpang/rhizoma)'],
    ans:1,
    explanation:'Stolon (geragih) adalah batang yang menjalar di atas permukaan tanah. Ujung stolon akan membentuk tunas baru yang akan tumbuh menjadi tanaman mandiri. Stroberi adalah contoh klasik tumbuhan yang berkembang biak dengan stolon.'
  },
  { id:'tka-ipa-36', topic:'Perkembangbiakan Makhluk Hidup', level:'sedang',
    q:'Seorang petani ingin memperbanyak tanaman mangga dengan sifat yang persis sama dengan induknya dan dapat berbuah lebih cepat. Teknik vegetatif buatan yang paling tepat adalah…',
    opts:['Menanam biji mangga pilihan','Stek batang','Cangkok','Okulasi dengan batang bawah dari mangga berbeda'],
    ans:2,
    explanation:'Cangkok menghasilkan tanaman baru dengan sifat persis sama dengan induknya (karena menggunakan jaringan asli induk) dan dapat berbuah lebih cepat dibanding biji. Okulasi juga bisa, tetapi hasilnya berupa hibrida dengan batang bawah yang berbeda. Cangkok adalah pilihan paling tepat untuk mendapatkan sifat identik induk.'
  },
  { id:'tka-ipa-37', topic:'Perkembangbiakan Makhluk Hidup', level:'susah',
    q:'Lebah pekerja merupakan hewan betina yang berkembang dari telur yang tidak dibuahi, sedangkan lebah ratu berkembang dari telur yang dibuahi. Proses perkembangbiakan lebah pekerja ini disebut…',
    opts:['Fragmentasi','Partenogenesis','Tunas luar','Pembelahan biner'],
    ans:1,
    explanation:'Partenogenesis adalah perkembangan individu baru dari sel telur tanpa pembuahan oleh sel sperma. Pada lebah, telur yang tidak dibuahi berkembang menjadi lebah jantan (drone) atau dalam kondisi tertentu lebah pekerja. Ini merupakan bentuk reproduksi aseksual pada hewan.'
  },

  // ── BENDA & SIFATNYA (3 soal) ──
  { id:'tka-ipa-38', topic:'Benda & Sifatnya', level:'mudah',
    q:'Perubahan lilin dari padat menjadi cair saat dipanaskan merupakan contoh perubahan…',
    opts:['Perubahan kimia karena menghasilkan zat baru','Perubahan fisika karena hanya berubah wujud, sifat zat tetap sama','Perubahan biologi karena melibatkan reaksi enzim','Perubahan permanen yang tidak dapat dikembalikan'],
    ans:1,
    explanation:'Perubahan fisika adalah perubahan yang hanya mengubah wujud atau bentuk tanpa mengubah sifat kimia zat. Lilin yang mencair dapat dipadatkan kembali menjadi lilin dengan sifat yang sama — ini adalah ciri khas perubahan fisika. Perubahan kimia menghasilkan zat baru (misal pembakaran).'
  },
  { id:'tka-ipa-39', topic:'Benda & Sifatnya', level:'sedang',
    q:'Besi yang dibiarkan di udara terbuka lama-kelamaan akan berkarat. Peristiwa perkaratan besi ini merupakan contoh perubahan…',
    opts:['Fisika, karena hanya berubah warna','Kimia, karena besi bereaksi dengan oksigen dan air menghasilkan zat baru (karat/Fe₂O₃)','Fisika, karena besi masih terlihat padat','Kimia, tetapi dapat dikembalikan ke kondisi semula'],
    ans:1,
    explanation:'Perkaratan adalah reaksi kimia: 4Fe + 3O₂ + 6H₂O → 4Fe(OH)₃ → 2Fe₂O₃.3H₂O (karat). Karat adalah zat baru yang berbeda dari besi asli — ini ciri perubahan kimia. Perubahan kimia tidak dapat dikembalikan ke kondisi semula dengan cara sederhana.'
  },
  { id:'tka-ipa-40', topic:'Benda & Sifatnya', level:'susah',
    q:'Sebuah benda memiliki sifat: massa jenisnya lebih kecil dari air, tidak larut dalam air, dan dapat menghantarkan panas dengan baik. Benda tersebut kemungkinan adalah…',
    opts:['Batu granit (massa jenis 2,7 g/cm³)','Kayu balsa (massa jenis 0,12 g/cm³, konduktor panas buruk)','Aluminium (massa jenis 2,7 g/cm³)','Gabus plastik dengan inti tembaga (massa jenis < 1, konduktor tembaga baik)'],
    ans:3,
    explanation:'Syarat yang harus dipenuhi: (1) massa jenis < 1 g/cm³ (< air), (2) tidak larut dalam air, (3) konduktor panas baik. Gabus plastik dengan inti tembaga memenuhi semua syarat: massa jenis keseluruhan < 1 (mengapung), tidak larut, dan tembaga adalah konduktor panas yang sangat baik. Kayu balsa tidak menghantarkan panas dengan baik.'
  },
];
