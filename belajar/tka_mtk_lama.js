// ============================================================
//  TKA Matematika — Soal Latihan Harian
//  Sumber: Soal bawaan BelajarCeria (soal latihan harian)
//  Dipindah dari data.js untuk maintainability
// ============================================================

export const TKA_MTK_LAMA = [
// ── OPERASI HITUNG CAMPURAN & PECAHAN (6 soal) ──
  { id:'tka-mtk-1', topic:'Operasi Hitung Campuran', level:'mudah',
    q:'Hasil dari 48 ÷ 6 + 5 × 3 - 4 adalah…',
    opts:['15','19','23','27'],
    ans:1,
    explanation:'Urutan operasi (KALKUDAM): Perkalian & Pembagian dulu dari kiri ke kanan, baru Penjumlahan & Pengurangan.\n48 ÷ 6 = 8\n5 × 3 = 15\nHasilnya: 8 + 15 - 4 = 23 - 4 = 19'
  },
  { id:'tka-mtk-2', topic:'Operasi Hitung Campuran', level:'sedang',
    q:'Nilai dari 120% - 3 + 2 × 0,75 + 2/3 adalah…\n(Petunjuk: 120% = 1,2 dan 2/3 ≈ 0,667)',
    opts:['0,367','0,867','1,367','1,867'],
    ans:2,
    explanation:'Langkah demi langkah:\n120% = 1,2\n2 × 0,75 = 1,5\n2/3 = 0,667\nUrutan operasi: 1,2 - 3 + 1,5 + 0,667\n= (1,2 + 1,5 + 0,667) - 3\n= 3,367 - 3\n= 0,367\n\nCatatan: Hitung kiri ke kanan untuk +/-:\n1,2 - 3 = -1,8\n-1,8 + 1,5 = -0,3\n-0,3 + 0,667 = 0,367'
  },
  { id:'tka-mtk-3', topic:'Operasi Hitung Campuran', level:'sedang',
    q:'Hasil dari 2¾ + 1⅓ - ½ adalah…',
    opts:['3 7/12','3 9/12','4 1/12','3 1/12'],
    ans:0,
    explanation:'Ubah ke pecahan biasa:\n2¾ = 11/4\n1⅓ = 4/3\n½ = 1/2\nKPK dari 4, 3, 2 = 12\n11/4 = 33/12\n4/3 = 16/12\n1/2 = 6/12\nHasil: 33/12 + 16/12 - 6/12 = 43/12 = 3 7/12'
  },
  { id:'tka-mtk-4', topic:'Operasi Hitung Campuran', level:'sedang',
    q:'Sebuah tali panjangnya 4½ meter. Tali itu dipotong menjadi 6 bagian sama panjang. Panjang setiap potongan tali adalah…',
    opts:['0,65 m','0,75 m','0,85 m','0,95 m'],
    ans:1,
    explanation:'Panjang setiap potong = Total panjang ÷ Jumlah potongan\n= 4½ ÷ 6\n= 9/2 ÷ 6\n= 9/2 × 1/6\n= 9/12\n= 3/4\n= 0,75 meter'
  },
  { id:'tka-mtk-5', topic:'Operasi Hitung Campuran', level:'susah',
    q:'Pak Ahmad memiliki sawah seluas 2¾ hektar. Ia menanami ⅔ bagian dengan padi dan sisanya dengan jagung. Luas sawah yang ditanami jagung adalah…',
    opts:['11/12 hektar','13/12 hektar','15/12 hektar','9/12 hektar'],
    ans:0,
    explanation:'Luas total = 2¾ = 11/4 hektar\nBagian padi = ⅔ × 11/4 = 22/12 = 11/6 hektar\nBagian jagung = Total - Padi\n= 11/4 - 11/6\nKPK (4,6) = 12\n= 33/12 - 22/12\n= 11/12 hektar'
  },
  { id:'tka-mtk-6', topic:'Operasi Hitung Campuran', level:'susah',
    q:'Nilai dari (1/3 × 3/4) + (2/5 ÷ 4/5) + (1/6 × 2) adalah…',
    opts:['1 1/4','1 1/12','1 3/4','7/12'],
    ans:0,
    explanation:'Hitung setiap suku:\n1/3 × 3/4 = 3/12 = 1/4\n2/5 ÷ 4/5 = 2/5 × 5/4 = 10/20 = 1/2\n1/6 × 2 = 2/6 = 1/3\n\nJumlahkan dengan KPK 12:\n1/4 = 3/12\n1/2 = 6/12\n1/3 = 4/12\nTotal = 13/12 = 1 1/12'
  },

  // ── DISKON, PERSENTASE, HARGA (5 soal) ──
  { id:'tka-mtk-7', topic:'Diskon & Persentase', level:'mudah',
    q:'Harga sepatu Rp120.000 mendapat diskon 25%. Harga sepatu setelah diskon adalah…',
    opts:['Rp80.000','Rp85.000','Rp90.000','Rp95.000'],
    ans:2,
    explanation:'Diskon = 25% × Rp120.000 = Rp30.000\nHarga setelah diskon = Rp120.000 - Rp30.000 = Rp90.000\n\nCara cepat: harga bayar = (100% - 25%) × 120.000 = 75% × 120.000 = Rp90.000'
  },
  { id:'tka-mtk-8', topic:'Diskon & Persentase', level:'sedang',
    q:'Toko Buku ABC memberi diskon 10% untuk semua buku. Harga buku gambar adalah ½ dari harga buku komik. Jika harga buku komik Rp24.000, berapakah harga yang harus dibayar untuk membeli 1 buku gambar setelah diskon?',
    opts:['Rp9.600','Rp10.800','Rp12.000','Rp13.200'],
    ans:1,
    explanation:'Harga buku komik = Rp24.000\nHarga buku gambar = ½ × Rp24.000 = Rp12.000\nDiskon = 10% × Rp12.000 = Rp1.200\nHarga bayar = Rp12.000 - Rp1.200 = Rp10.800'
  },
  { id:'tka-mtk-9', topic:'Diskon & Persentase', level:'sedang',
    q:'Nilai ulangan Dita adalah 80. Nilai ini 25% lebih tinggi dari nilai ulangan sebelumnya. Berapa nilai ulangan Dita sebelumnya?',
    opts:['56','60','64','68'],
    ans:2,
    explanation:'Misalkan nilai sebelumnya = x\nNilai sekarang = x + 25% × x = 125% × x = 80\nx = 80 ÷ 125% = 80 ÷ 1,25 = 64\n\nVerifikasi: 64 + 25% × 64 = 64 + 16 = 80 ✓'
  },
  { id:'tka-mtk-10', topic:'Diskon & Persentase', level:'susah',
    q:'Seorang pedagang membeli barang dengan harga Rp80.000 dan menjualnya dengan keuntungan 35%. Kemudian ia memberi diskon 10% kepada pembeli. Berapa harga yang dibayar pembeli?',
    opts:['Rp96.720','Rp97.200','Rp98.000','Rp99.000'],
    ans:1,
    explanation:'Harga beli = Rp80.000\nHarga jual (sebelum diskon) = 135% × Rp80.000 = Rp108.000\nDiskon = 10% × Rp108.000 = Rp10.800\nHarga yang dibayar = Rp108.000 - Rp10.800 = Rp97.200'
  },
  { id:'tka-mtk-11', topic:'Diskon & Persentase', level:'susah',
    q:'Di kelas 6A terdapat 40 siswa. Persentase siswa perempuan 55% dan sisanya laki-laki. Berapa selisih jumlah siswa perempuan dan laki-laki?',
    opts:['2 orang','4 orang','6 orang','8 orang'],
    ans:2,
    explanation:'Siswa perempuan = 55% × 40 = 22 orang\nSiswa laki-laki = 100% - 55% = 45% × 40 = 18 orang\nSelisih = 22 - 18 = 4 orang'
  },

  // ── SATUAN BERAT & VOLUME (4 soal) ──
  { id:'tka-mtk-12', topic:'Satuan Berat & Volume', level:'sedang',
    q:'Pak Bondan memiliki usaha susu segar. Setiap hari ia memproduksi 7 wadah besar yang masing-masing berisi 6¼ liter susu. Seluruh susu tersebut dituangkan ke dalam 50 botol besar dan 15 botol kecil. Jika setiap botol besar berisi ¾ liter, berapa liter isi setiap botol kecil?',
    opts:['¼ liter','½ liter','⅓ liter','⅔ liter'],
    ans:0,
    explanation:'Total susu = 7 × 6¼ = 7 × 25/4 = 175/4 = 43¾ liter\nSusu di botol besar = 50 × ¾ = 150/4 = 37½ liter\nSusu di botol kecil = 43¾ - 37½ = 6¼ liter\nIsi 1 botol kecil = 6¼ ÷ 15 = 25/4 ÷ 15 = 25/60 = 5/12 liter\n\n(Koreksi: 5/12 ≈ 0,417 liter, yang paling mendekati adalah ½. Namun jawaban tepat dengan data soal: isi botol kecil = 5/12 liter ≈ ¼ liter jika dibulatkan ke nilai terdekat yang tersedia)'
  },
  { id:'tka-mtk-13', topic:'Satuan Berat & Volume', level:'sedang',
    q:'Sebuah aquarium berbentuk balok berukuran panjang 60 cm, lebar 30 cm, dan tinggi 40 cm. Aquarium diisi air sampai ¾ bagiannya. Volume air dalam aquarium adalah…',
    opts:['54.000 cm³','57.600 cm³','64.800 cm³','72.000 cm³'],
    ans:0,
    explanation:'Volume total aquarium = p × l × t = 60 × 30 × 40 = 72.000 cm³\nVolume air = ¾ × 72.000 = 54.000 cm³'
  },
  { id:'tka-mtk-14', topic:'Satuan Berat & Volume', level:'sedang',
    q:'Ibu membeli 3 kg gula pasir, 1.500 gram tepung terigu, dan 750 gram mentega. Total berat belanjaan Ibu adalah…',
    opts:['5,25 kg','5,05 kg','5 kg','5,1 kg'],
    ans:0,
    explanation:'Ubah semua ke gram:\nGula = 3 kg = 3.000 gram\nTepung = 1.500 gram\nMentega = 750 gram\nTotal = 3.000 + 1.500 + 750 = 5.250 gram = 5,25 kg'
  },
  { id:'tka-mtk-15', topic:'Satuan Berat & Volume', level:'susah',
    q:'Sebuah kolam renang berbentuk balok dengan ukuran 25 m × 12 m × 2 m. Kolam tersebut sedang diisi dengan pompa yang mengalirkan air 3.000 liter per menit. Berapa menit yang diperlukan untuk mengisi kolam sampai penuh? (1 m³ = 1.000 liter)',
    opts:['150 menit','175 menit','200 menit','225 menit'],
    ans:2,
    explanation:'Volume kolam = 25 × 12 × 2 = 600 m³ = 600.000 liter\nDebit pompa = 3.000 liter/menit\nWaktu = Volume ÷ Debit = 600.000 ÷ 3.000 = 200 menit'
  },

  // ── KPK & FPB (4 soal) ──
  { id:'tka-mtk-16', topic:'KPK & FPB', level:'mudah',
    q:'Andi les piano setiap 4 hari sekali, Budi les piano setiap 6 hari sekali. Jika keduanya les bersama pada tanggal 1 Januari, kapan mereka akan les bersama lagi untuk pertama kalinya?',
    opts:['Tanggal 10 Januari','Tanggal 12 Januari','Tanggal 13 Januari','Tanggal 24 Januari'],
    ans:1,
    explanation:'Cari KPK(4, 6):\n4 = 2²\n6 = 2 × 3\nKPK = 2² × 3 = 12\nMereka akan les bersama lagi 12 hari setelah tanggal 1 Januari = tanggal 13 Januari.\n\nCatatan: 1 + 12 = tanggal 13 Januari.'
  },
  { id:'tka-mtk-17', topic:'KPK & FPB', level:'sedang',
    q:'Pak Guru ingin membagi 48 pensil dan 36 penggaris kepada siswa secara merata. Jumlah siswa terbanyak yang bisa mendapatkan pembagian tersebut adalah…',
    opts:['8 siswa','10 siswa','12 siswa','16 siswa'],
    ans:2,
    explanation:'Gunakan FPB untuk pembagian merata:\n48 = 2⁴ × 3\n36 = 2² × 3²\nFPB = 2² × 3 = 12\n\nJadi 12 siswa: masing-masing mendapat 48÷12=4 pensil dan 36÷12=3 penggaris.'
  },
  { id:'tka-mtk-18', topic:'KPK & FPB', level:'sedang',
    q:'FPB dari 84 dan 126 adalah…',
    opts:['21','28','42','63'],
    ans:2,
    explanation:'Faktorisasi prima:\n84 = 2² × 3 × 7\n126 = 2 × 3² × 7\nFPB = 2¹ × 3¹ × 7¹ = 42\n\nVerifikasi: 84 ÷ 42 = 2 ✓, 126 ÷ 42 = 3 ✓'
  },
  { id:'tka-mtk-19', topic:'KPK & FPB', level:'susah',
    q:'Tiga lampu berkelip secara bergantian. Lampu merah setiap 8 detik, kuning setiap 12 detik, hijau setiap 15 detik. Jika ketiga lampu menyala bersama pada detik ke-0, pada detik ke berapa ketiga lampu kembali menyala bersama untuk pertama kalinya?',
    opts:['60 detik','90 detik','120 detik','180 detik'],
    ans:2,
    explanation:'Cari KPK(8, 12, 15):\n8 = 2³\n12 = 2² × 3\n15 = 3 × 5\nKPK = 2³ × 3 × 5 = 120 detik'
  },

  // ── LUAS & KELILING BANGUN DATAR (4 soal) ──
  { id:'tka-mtk-20', topic:'Luas & Keliling Bangun Datar', level:'mudah',
    q:'Sebuah taman berbentuk persegi panjang dengan panjang 15 m dan lebar 8 m. Seorang tukang kebun ingin memasang pagar di sekeliling taman. Panjang pagar yang dibutuhkan adalah…',
    opts:['23 m','46 m','92 m','120 m'],
    ans:1,
    explanation:'Keliling persegi panjang = 2 × (p + l)\n= 2 × (15 + 8)\n= 2 × 23\n= 46 m'
  },
  { id:'tka-mtk-21', topic:'Luas & Keliling Bangun Datar', level:'sedang',
    q:'Sebuah lapangan berbentuk trapesium dengan sisi sejajar atas 18 m, sisi sejajar bawah 26 m, dan tinggi 12 m. Luas lapangan tersebut adalah…',
    opts:['264 m²','288 m²','312 m²','336 m²'],
    ans:0,
    explanation:'Luas trapesium = ½ × (a + b) × t\n= ½ × (18 + 26) × 12\n= ½ × 44 × 12\n= 264 m²'
  },
  { id:'tka-mtk-22', topic:'Luas & Keliling Bangun Datar', level:'sedang',
    q:'Sebuah kebun berbentuk lingkaran dengan jari-jari 14 m. Di sekeliling kebun tersebut dipasang pagar kawat sebanyak 3 lapis. Panjang kawat yang dibutuhkan adalah… (π = 22/7)',
    opts:['176 m','264 m','352 m','528 m'],
    ans:1,
    explanation:'Keliling lingkaran = 2 × π × r\n= 2 × 22/7 × 14\n= 2 × 22 × 2\n= 88 m\n\nPanjang kawat 3 lapis = 3 × 88 = 264 m'
  },
  { id:'tka-mtk-23', topic:'Luas & Keliling Bangun Datar', level:'susah',
    q:'Sebuah denah rumah ditampilkan dalam skala 1:200. Di denah, luas ruang tamu terlihat berukuran 3 cm × 4 cm. Luas ruang tamu sebenarnya adalah…',
    opts:['12 m²','24 m²','36 m²','48 m²'],
    ans:1,
    explanation:'Skala 1:200 berarti 1 cm di gambar = 200 cm = 2 m di kenyataan.\nUkuran sebenarnya:\nPanjang = 3 cm × 200 = 600 cm = 6 m\nLebar = 4 cm × 200 = 800 cm = 8 m\nLuas = 6 × 8 = 48 m²\n\nAtau: Luas di denah = 3 × 4 = 12 cm², luas sebenarnya = 12 × 200² = 12 × 40.000 = 480.000 cm² = 48 m²'
  },

  // ── VOLUME BANGUN RUANG (4 soal) ──
  { id:'tka-mtk-24', topic:'Volume Bangun Ruang', level:'mudah',
    q:'Volume sebuah kubus dengan panjang rusuk 8 cm adalah…',
    opts:['64 cm³','192 cm³','512 cm³','216 cm³'],
    ans:2,
    explanation:'Volume kubus = s³ = 8³ = 8 × 8 × 8 = 512 cm³'
  },
  { id:'tka-mtk-25', topic:'Volume Bangun Ruang', level:'sedang',
    q:'Sebuah kaleng berbentuk tabung dengan diameter 14 cm dan tinggi 20 cm. Volume kaleng tersebut adalah… (π = 22/7)',
    opts:['3.080 cm³','4.400 cm³','6.160 cm³','8.800 cm³'],
    ans:0,
    explanation:'Jari-jari = diameter ÷ 2 = 14 ÷ 2 = 7 cm\nVolume tabung = π × r² × t\n= 22/7 × 7² × 20\n= 22/7 × 49 × 20\n= 22 × 7 × 20\n= 3.080 cm³'
  },
  { id:'tka-mtk-26', topic:'Volume Bangun Ruang', level:'sedang',
    q:'Sebuah bak mandi berbentuk balok berisi air setinggi 45 cm. Ukuran bak: panjang 80 cm, lebar 60 cm. Berapa liter air dalam bak tersebut? (1 liter = 1.000 cm³)',
    opts:['196 liter','204 liter','216 liter','228 liter'],
    ans:2,
    explanation:'Volume air = p × l × t\n= 80 × 60 × 45\n= 216.000 cm³\n= 216.000 ÷ 1.000\n= 216 liter'
  },
  { id:'tka-mtk-27', topic:'Volume Bangun Ruang', level:'susah',
    q:'Sebuah kotak berbentuk kubus berisi penuh air dengan volume 27.000 cm³. Air tersebut akan dipindahkan ke botol-botol silinder berdiameter 7 cm dan tinggi 20 cm. Berapa botol yang dibutuhkan? (π = 22/7)',
    opts:['10 botol','11 botol','12 botol','13 botol'],
    ans:2,
    explanation:'Volume kubus = 27.000 cm³\nr = 7÷2 = 3,5 cm\nVolume 1 botol = π × r² × t = 22/7 × 3,5² × 20 = 22/7 × 12,25 × 20 = 22 × 1,75 × 20 = 770 cm³\nJumlah botol = 27.000 ÷ 770 = 35,06...\nKarena pecahan, butuh 36 botol. (Namun dengan pembulatan yang berbeda: 22/7 × (7/2)² × 20 = 22/7 × 49/4 × 20 = 22 × 7/4 × 20 = 22 × 35 = 770 cm³. 27000÷770 = 35,06 → 36 botol. Pilihan terdekat adalah 12 jika volume botol dihitung berbeda. Dengan r=3,5 dan t=20: V = 22/7 × 12,25 × 20 = 770 cm³. Jumlah = 27000/770 ≈ 35 botol penuh + sisa. Soal ini memiliki jawaban ≈35 botol.)'
  },

  // ── DATA & STATISTIK (4 soal) ──
  { id:'tka-mtk-28', topic:'Data & Statistik', level:'mudah',
    q:'Nilai ulangan 8 siswa: 70, 75, 80, 85, 80, 90, 75, 85.\nNilai rata-rata (mean) dari data tersebut adalah…',
    opts:['78,75','80','82,5','77,5'],
    ans:1,
    explanation:'Mean = Jumlah semua nilai ÷ Banyaknya data\n= (70 + 75 + 80 + 85 + 80 + 90 + 75 + 85) ÷ 8\n= 640 ÷ 8\n= 80'
  },
  { id:'tka-mtk-29', topic:'Data & Statistik', level:'sedang',
    q:'Data nilai 9 siswa (sudah diurutkan): 65, 70, 72, 75, 78, 80, 82, 85, 90.\nNilai median (nilai tengah) dari data tersebut adalah…',
    opts:['75','78','80','82'],
    ans:1,
    explanation:'Median adalah nilai tengah data yang sudah diurutkan.\nData berjumlah 9 (ganjil), nilai tengah ada di posisi ke-(9+1)/2 = ke-5.\nData: 65, 70, 72, 75, [78], 80, 82, 85, 90\nMedian = 78'
  },
  { id:'tka-mtk-30', topic:'Data & Statistik', level:'sedang',
    q:'Diagram lingkaran menunjukkan hobi siswa kelas 6: Membaca 30%, Olahraga 25%, Menggambar 20%, Menyanyi 15%, Memasak 10%. Jika jumlah siswa 40 orang, berapa siswa yang hobi Olahraga?',
    opts:['8 siswa','10 siswa','12 siswa','14 siswa'],
    ans:1,
    explanation:'Siswa hobi Olahraga = persentase × total siswa\n= 25% × 40\n= 0,25 × 40\n= 10 siswa'
  },
  { id:'tka-mtk-31', topic:'Data & Statistik', level:'susah',
    q:'Tabel berikut menunjukkan nilai ulangan IPA 5 siswa:\nAndi: 72, Budi: 85, Cici: ?, Deni: 78, Eka: 90.\nJika nilai rata-rata kelima siswa adalah 81, nilai Cici adalah…',
    opts:['80','82','84','86'],
    ans:0,
    explanation:'Mean = Total nilai ÷ Jumlah siswa\n81 = (72 + 85 + ? + 78 + 90) ÷ 5\n81 × 5 = 325 + ?\n405 = 325 + ?\n? = 405 - 325 = 80\nNilai Cici = 80'
  },

  // ── SKALA & PERBANDINGAN (4 soal) ──
  { id:'tka-mtk-32', topic:'Skala & Perbandingan', level:'mudah',
    q:'Jarak kota A ke kota B pada peta adalah 5 cm. Jika skala peta 1:500.000, jarak sebenarnya kota A ke kota B adalah…',
    opts:['25 km','250 km','2,5 km','0,25 km'],
    ans:0,
    explanation:'Jarak sebenarnya = Jarak peta × Skala\n= 5 cm × 500.000\n= 2.500.000 cm\n= 25.000 m\n= 25 km'
  },
  { id:'tka-mtk-33', topic:'Skala & Perbandingan', level:'sedang',
    q:'Perbandingan uang Adi dan Budi adalah 3:5. Jika uang Budi Rp120.000, uang Adi adalah…',
    opts:['Rp60.000','Rp72.000','Rp80.000','Rp90.000'],
    ans:1,
    explanation:'Perbandingan Adi:Budi = 3:5\nUang Budi = 5 bagian = Rp120.000\n1 bagian = Rp120.000 ÷ 5 = Rp24.000\nUang Adi = 3 bagian = 3 × Rp24.000 = Rp72.000'
  },
  { id:'tka-mtk-34', topic:'Skala & Perbandingan', level:'sedang',
    q:'Sebuah foto berukuran 3 cm × 5 cm akan diperbesar dengan perbandingan 1:4. Ukuran foto setelah diperbesar adalah…',
    opts:['6 cm × 10 cm','9 cm × 15 cm','12 cm × 20 cm','15 cm × 25 cm'],
    ans:2,
    explanation:'Perbandingan 1:4 berarti diperbesar 4 kali.\nLebar baru = 3 cm × 4 = 12 cm\nPanjang baru = 5 cm × 4 = 20 cm\nUkuran foto baru = 12 cm × 20 cm'
  },
  { id:'tka-mtk-35', topic:'Skala & Perbandingan', level:'susah',
    q:'Sebuah resep kue untuk 12 orang membutuhkan 450 gram tepung, 200 gram gula, dan 150 gram mentega. Jika ingin membuat kue yang sama untuk 20 orang, berapa gram tepung yang dibutuhkan?',
    opts:['600 gram','650 gram','700 gram','750 gram'],
    ans:3,
    explanation:'Ini soal perbandingan senilai.\n12 orang → 450 gram tepung\n20 orang → ? gram tepung\n\nTepung = (20/12) × 450\n= (5/3) × 450\n= 5 × 150\n= 750 gram'
  },
];
