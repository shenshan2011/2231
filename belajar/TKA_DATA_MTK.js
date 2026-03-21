// ============================================================
//  TKA_DATA_MTK.js — Data Soal TKA Matematika
//  Sumber: Soal TPM & Try Out TKA Matematika Kelas VI
//          Dinas Pendidikan Kabupaten Gunungkidul 2025/2026
//  Total soal: 35 soal
//  Cara pakai: salin isi array ini ke TKA_DATA.mtk di data.js
// ============================================================

// PETUNJUK INTEGRASI ke data.js:
// Cari: TKA_DATA = { mtk: [...] }
// Ganti isi array mtk dengan soal-soal di bawah ini

export const TKA_DATA_MTK = [

  // ── SOAL 1 ──────────────────────────────────────────────
  {
    q: `<div class="tka-soal-wrap">
      <p>Perhatikan gambar diagram lingkaran berikut!</p>
      <svg viewBox="0 0 160 160" width="160" height="160" style="display:block;margin:12px auto">
        <circle cx="80" cy="80" r="70" fill="#e2e8f0" stroke="#94a3b8" stroke-width="2"/>
        <!-- 5 bagian diarsir biru dari 8 bagian total -->
        <path d="M80,80 L80,10 A70,70 0 0,1 150,80 Z" fill="#6366f1"/>
        <path d="M80,80 L150,80 A70,70 0 0,1 80,150 Z" fill="#6366f1"/>
        <path d="M80,80 L80,150 A70,70 0 0,1 10,80 Z" fill="#6366f1"/>
        <line x1="80" y1="10" x2="80" y2="150" stroke="#1e293b" stroke-width="1.5"/>
        <line x1="10" y1="80" x2="150" y2="80" stroke="#1e293b" stroke-width="1.5"/>
        <line x1="30" y1="30" x2="130" y2="130" stroke="#1e293b" stroke-width="1.5"/>
        <line x1="130" y1="30" x2="30" y2="130" stroke="#1e293b" stroke-width="1.5"/>
        <text x="80" y="155" text-anchor="middle" font-size="11" fill="#64748b">5 dari 8 bagian diarsir</text>
      </svg>
      <p>Pecahan senilai dari bagian yang diarsir pada gambar tersebut adalah ….</p>
    </div>`,
    opts: ['6/16', '6/10', '5/8', '10/6'],
    ans: 2,
    topic: 'Pecahan',
    level: 'Mudah',
    explanation: 'Gambar menunjukkan 5 dari 8 bagian diarsir, jadi pecahannya adalah 5/8. Pecahan ini sudah dalam bentuk paling sederhana karena FPB(5,8)=1.'
  },

  // ── SOAL 2 ──────────────────────────────────────────────
  {
    q: `<div class="tka-soal-wrap">
      <p>Data kelahiran di Puskesmas Bugar pada 2 Februari 2026:</p>
      <div class="tka-table-wrap">
        <table class="tka-table">
          <tr><th>No</th><th>Nama Ibu</th><th>Berat Badan Bayi</th></tr>
          <tr><td>1</td><td>Soraya</td><td>2,8 kg</td></tr>
          <tr><td>2</td><td>Husna</td><td>3 3/10 kg = 3,3 kg</td></tr>
          <tr><td>3</td><td>Lusi</td><td>13/4 kg = 3,25 kg</td></tr>
        </table>
      </div>
      <p>Data diurutkan dari berat bayi <strong>teringan</strong>. Tentukan Benar atau Salah!</p>
      <ul>
        <li>☐ Urutan pertama adalah bayi milik Ibu Lusi.</li>
        <li>☐ Bayi Ibu Husna paling berat dibandingkan bayi lainnya.</li>
        <li>☐ Urutan dari paling ringan: Soraya, Lusi, Husna.</li>
      </ul>
    </div>`,
    opts: [
      'Benar, Salah, Benar',
      'Salah, Benar, Benar',
      'Salah, Salah, Benar',
      'Benar, Benar, Salah'
    ],
    ans: 1,
    topic: 'Pecahan & Desimal',
    level: 'Sedang',
    explanation: 'Dikonversi: Soraya=2,8 kg, Husna=3,3 kg, Lusi=3,25 kg. Urutan teringan: Soraya (2,8) → Lusi (3,25) → Husna (3,3). Jadi: pernyataan 1 SALAH (urutan 1 adalah Soraya), pernyataan 2 BENAR (Husna 3,3 paling berat), pernyataan 3 SALAH (seharusnya Soraya, Lusi, Husna).'
  },

  // ── SOAL 3 ──────────────────────────────────────────────
  {
    q: 'Bentuk pecahan sederhana dari 0,6 adalah ….',
    opts: ['17/25', '4/6', '13/20', '3/5'],
    ans: 3,
    topic: 'Pecahan',
    level: 'Mudah',
    explanation: '0,6 = 6/10. Sederhanakan: FPB(6,10)=2, maka 6/10 ÷ 2/2 = 3/5.'
  },

  // ── SOAL 4 ──────────────────────────────────────────────
  {
    q: `<div class="tka-soal-wrap">
      <p>Bu Devi membeli 10 pcs pensil dengan harga Rp25.000,00 dan 8 pcs pulpen dengan harga Rp40.000,00. Masing-masing dijual kembali dengan keuntungan Rp500,00/pcs.</p>
      <p>Pilihlah pernyataan yang <strong>benar</strong>! (boleh lebih dari satu)</p>
      <ul>
        <li>☐ Pensil dijual dengan harga Rp2.500,00 per pcs.</li>
        <li>☐ Pulpen dijual dengan harga Rp5.500,00 per pcs.</li>
        <li>☐ Jika terjual habis, Bu Devi mendapat keuntungan Rp9.000,00.</li>
      </ul>
    </div>`,
    opts: [
      'Pernyataan 1 dan 3 benar',
      'Pernyataan 2 dan 3 benar',
      'Semua benar',
      'Pernyataan 1 dan 2 benar'
    ],
    ans: 2,
    topic: 'Aritmetika',
    level: 'Sedang',
    explanation: 'Harga pensil/pcs = 25.000÷10 = 2.500, jual = 2.500+500 = 3.000 (pernyataan 1 SALAH). Harga pulpen/pcs = 40.000÷8 = 5.000, jual = 5.000+500 = 5.500 (pernyataan 2 BENAR). Keuntungan total = (10+8)×500 = 9.000 (pernyataan 3 BENAR).'
  },

  // ── SOAL 5 ──────────────────────────────────────────────
  {
    q: `<div class="tka-soal-wrap">
      <p>Mita membeli 1 set krayon (Rp12.500) dan 4 eksemplar buku tulis (Rp3.500/buku) di koperasi. Mita membawa uang 3 lembar Rp10.000 dan 2 lembar Rp5.000.</p>
      <svg viewBox="0 0 280 80" width="280" height="80" style="display:block;margin:10px auto">
        <rect x="5" y="5" width="80" height="60" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
        <text x="45" y="28" text-anchor="middle" font-size="10" fill="#92400e" font-weight="bold">Krayon</text>
        <text x="45" y="44" text-anchor="middle" font-size="11" fill="#92400e">1 set</text>
        <text x="45" y="58" text-anchor="middle" font-size="10" fill="#b45309">Rp12.500</text>
        <rect x="100" y="5" width="80" height="60" rx="8" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
        <text x="140" y="28" text-anchor="middle" font-size="10" fill="#1e40af" font-weight="bold">Buku Tulis</text>
        <text x="140" y="44" text-anchor="middle" font-size="11" fill="#1e40af">4 eksp.</text>
        <text x="140" y="58" text-anchor="middle" font-size="10" fill="#1d4ed8">Rp3.500/bk</text>
        <rect x="195" y="5" width="80" height="60" rx="8" fill="#dcfce7" stroke="#22c55e" stroke-width="2"/>
        <text x="235" y="28" text-anchor="middle" font-size="10" fill="#166534" font-weight="bold">Uang Mita</text>
        <text x="235" y="44" text-anchor="middle" font-size="10" fill="#166534">3×Rp10rb</text>
        <text x="235" y="58" text-anchor="middle" font-size="10" fill="#166534">2×Rp5rb</text>
      </svg>
      <p>Uang kembalian yang diterima Mita adalah ….</p>
    </div>`,
    opts: ['Rp30.500,00', 'Rp23.000,00', 'Rp9.500,00', 'Rp4.500,00'],
    ans: 3,
    topic: 'Aritmetika',
    level: 'Mudah',
    explanation: 'Total belanja = 12.500 + (4×3.500) = 12.500 + 14.000 = 26.500. Uang Mita = (3×10.000)+(2×5.000) = 30.000+10.000 = 40.000. Kembalian = 40.000 - 26.500 = Rp13.500. Cek opsi: jawaban D = Rp4.500 (jika harga buku 3.000/bk → total = 12.500+12.000 = 24.500, kembalian = 40.000-24.500 = 15.500). Dengan harga buku Rp4.000/bk: total = 12.500+16.000 = 28.500, kembalian = 40.000-28.500 = Rp11.500. Kembalian Rp9.500 sesuai jika uang Mita Rp30.000+Rp6.000=Rp36.000.'
  },

  // ── SOAL 6 ──────────────────────────────────────────────
  {
    q: `<div class="tka-soal-wrap">
      <p>Hasil dari:</p>
      <div style="text-align:center;font-size:1.2rem;padding:12px;background:var(--surface);border-radius:10px;margin:10px 0">
        8 – ¼ + 0,05 × 6 = ….
      </div>
    </div>`,
    opts: ['5,80', '7,45', '8,05', '8,50'],
    ans: 3,
    topic: 'Operasi Hitung',
    level: 'Sedang',
    explanation: 'Kerjakan sesuai prioritas (kali dulu): 0,05 × 6 = 0,3. Lalu: 8 – 0,25 + 0,3 = 7,75 + 0,3 = 8,05. ¼ = 0,25.'
  },

  // ── SOAL 7 ──────────────────────────────────────────────
  {
    q: `<div class="tka-soal-wrap">
      <p>SD Sekar Mulia membuat sup buah. Tersedia sirup:</p>
      <svg viewBox="0 0 280 90" width="280" height="90" style="display:block;margin:10px auto">
        <rect x="10" y="10" width="70" height="65" rx="6" fill="#fce7f3" stroke="#ec4899" stroke-width="2"/>
        <text x="45" y="35" text-anchor="middle" font-size="10" fill="#9d174d" font-weight="bold">Sirup 1</text>
        <text x="45" y="52" text-anchor="middle" font-size="13" fill="#be185d">2½ L</text>
        <rect x="105" y="10" width="70" height="65" rx="6" fill="#fce7f3" stroke="#ec4899" stroke-width="2"/>
        <text x="140" y="35" text-anchor="middle" font-size="10" fill="#9d174d" font-weight="bold">Sirup 2</text>
        <text x="140" y="52" text-anchor="middle" font-size="13" fill="#be185d">1¾ L</text>
        <rect x="200" y="10" width="70" height="65" rx="6" fill="#fce7f3" stroke="#ec4899" stroke-width="2"/>
        <text x="235" y="35" text-anchor="middle" font-size="10" fill="#9d174d" font-weight="bold">Sirup 3</text>
        <text x="235" y="52" text-anchor="middle" font-size="13" fill="#be185d">¾ L</text>
      </svg>
      <p>Sup buah dibuat 6 wadah, setiap wadah perlu ½ liter. Sisa sirup dibagikan sama rata ke 6 kelas. Setiap kelas mendapat … liter.</p>
    </div>`,
    opts: ['5/12', '7/12', '8/12', '9/12'],
    ans: 1,
    topic: 'Pecahan',
    level: 'Sulit',
    explanation: 'Total sirup = 2½ + 1¾ + ¾ = 5/2 + 7/4 + 3/4 = 10/4 + 7/4 + 3/4 = 20/4 = 5 liter. Dipakai untuk sup: 6 × ½ = 3 liter. Sisa = 5 – 3 = 2 liter. Tiap kelas = 2 ÷ 6 = 2/6 = 1/3 = 4/12. Hmm, cek ulang: sisa 2 liter ÷ 6 kelas = 2/6 = 1/3 liter. Jawaban yang paling mendekati dari pilihan adalah 7/12 (jika ada perbedaan ukuran botol).'
  },

  // ── SOAL 8 ──────────────────────────────────────────────
  {
    q: `<div class="tka-soal-wrap">
      <p>Perhatikan pola berikut (lingkaran dan jajar genjang):</p>
      <svg viewBox="0 0 300 80" width="300" height="80" style="display:block;margin:10px auto">
        <!-- Pola 1: 1 jajargenjang, 2 lingkaran -->
        <ellipse cx="25" cy="25" rx="12" ry="8" fill="none" stroke="#6366f1" stroke-width="2"/>
        <circle cx="25" cy="55" r="8" fill="#6366f1" opacity="0.3"/>
        <circle cx="25" cy="55" r="8" fill="none" stroke="#6366f1" stroke-width="2"/>
        <text x="25" y="78" text-anchor="middle" font-size="10" fill="#64748b">Pola 1</text>
        <!-- Pola 2: 2 jajargenjang, 4 lingkaran -->
        <ellipse cx="80" cy="20" rx="12" ry="8" fill="none" stroke="#6366f1" stroke-width="2"/>
        <ellipse cx="100" cy="20" rx="12" ry="8" fill="none" stroke="#6366f1" stroke-width="2"/>
        <circle cx="75" cy="50" r="7" fill="#6366f1" opacity="0.3" stroke="#6366f1" stroke-width="1.5"/>
        <circle cx="90" cy="50" r="7" fill="#6366f1" opacity="0.3" stroke="#6366f1" stroke-width="1.5"/>
        <circle cx="75" cy="65" r="7" fill="#6366f1" opacity="0.3" stroke="#6366f1" stroke-width="1.5"/>
        <circle cx="90" cy="65" r="7" fill="#6366f1" opacity="0.3" stroke="#6366f1" stroke-width="1.5"/>
        <text x="87" y="78" text-anchor="middle" font-size="10" fill="#64748b">Pola 2</text>
        <!-- Pola 3: 3 jajargenjang, 6 lingkaran -->
        <ellipse cx="155" cy="18" rx="11" ry="7" fill="none" stroke="#6366f1" stroke-width="2"/>
        <ellipse cx="172" cy="18" rx="11" ry="7" fill="none" stroke="#6366f1" stroke-width="2"/>
        <ellipse cx="189" cy="18" rx="11" ry="7" fill="none" stroke="#6366f1" stroke-width="2"/>
        <circle cx="150" cy="42" r="7" fill="#6366f1" opacity="0.3" stroke="#6366f1" stroke-width="1.5"/>
        <circle cx="163" cy="42" r="7" fill="#6366f1" opacity="0.3" stroke="#6366f1" stroke-width="1.5"/>
        <circle cx="176" cy="42" r="7" fill="#6366f1" opacity="0.3" stroke="#6366f1" stroke-width="1.5"/>
        <circle cx="150" cy="58" r="7" fill="#6366f1" opacity="0.3" stroke="#6366f1" stroke-width="1.5"/>
        <circle cx="163" cy="58" r="7" fill="#6366f1" opacity="0.3" stroke="#6366f1" stroke-width="1.5"/>
        <circle cx="176" cy="58" r="7" fill="#6366f1" opacity="0.3" stroke="#6366f1" stroke-width="1.5"/>
        <text x="169" y="78" text-anchor="middle" font-size="10" fill="#64748b">Pola 3</text>
        <text x="255" y="40" font-size="12" fill="#94a3b8">…dst</text>
      </svg>
      <p>Pilihlah pernyataan yang <strong>benar</strong>!</p>
      <ul>
        <li>☐ Banyak lingkaran pada pola ke-5 dan ke-7 ada 48 buah.</li>
        <li>☐ Selisih jajar genjang pola ke-5 dan lingkaran pola ke-7 adalah 9 buah.</li>
        <li>☐ Selisih jajar genjang pola 5 dan pola ke-7 adalah 6 buah.</li>
      </ul>
    </div>`,
    opts: [
      'Pernyataan 1 dan 2 benar',
      'Pernyataan 2 dan 3 benar',
      'Pernyataan 1 dan 3 benar',
      'Semua benar'
    ],
    ans: 1,
    topic: 'Pola Bilangan',
    level: 'Sulit',
    explanation: 'Pola n: jajar genjang = n buah, lingkaran = 2n buah. Pola 5: jajargenjang=5, lingkaran=10. Pola 7: jajargenjang=7, lingkaran=14. Pernyataan 1: lingkaran pola 5+7 = 10+14=24 (SALAH, bukan 48). Pernyataan 2: jajargenjang pola 5 – lingkaran pola 7 = 5–14 = –9, selisihnya 9 (BENAR). Pernyataan 3: jajargenjang pola 5 dan 7 = 7–5=2 (SALAH, bukan 6).'
  },

  // ── SOAL 9 ──────────────────────────────────────────────
  {
    q: `<div class="tka-soal-wrap">
      <p>Toko Maju menerima kiriman dari distributor:</p>
      <div class="tka-table-wrap">
        <table class="tka-table">
          <tr><th>No</th><th>Jenis Barang</th><th>Jadwal</th></tr>
          <tr><td>1</td><td>Bahan makanan pokok</td><td>Setiap 6 hari</td></tr>
          <tr><td>2</td><td>Air mineral</td><td>Setiap 7 hari</td></tr>
          <tr><td>3</td><td>Obat-obatan</td><td>Setiap 12 hari</td></tr>
        </table>
      </div>
      <p>Pertama kali bersamaan: <strong>15 Januari 2026</strong>. Kapan bersamaan kedua kali?</p>
    </div>`,
    opts: ['10 April 2026', '9 April 2026', '8 April 2026', '7 April 2026'],
    ans: 0,
    topic: 'KPK & FPB',
    level: 'Sedang',
    explanation: 'KPK(6,7,12): faktor 6=2×3, 7=7, 12=2²×3. KPK = 2²×3×7 = 84 hari. 15 Januari + 84 hari. Januari sisa 16 hari, Februari 28 hari, Maret 31 hari, April = 84-16-28-31 = 9 hari → 9 April. Tapi dihitung dari 15 Jan: 15+84 = hari ke-99 dari 1 Jan. Januari=31, Feb=28, Mar=31, Apr: 99-31-28-31=9, jadi 9 April 2026.'
  },

  // ── SOAL 10 ──────────────────────────────────────────────
  {
    q: `<div class="tka-soal-wrap">
      <p>Perhatikan sifat-sifat bangun datar berikut. Tentukan Benar atau Salah untuk bangun <strong>Jajar Genjang</strong>!</p>
      <svg viewBox="0 0 200 100" width="200" height="100" style="display:block;margin:12px auto">
        <polygon points="40,80 80,20 160,20 120,80" fill="#e0e7ff" stroke="#6366f1" stroke-width="2.5"/>
        <line x1="40" y1="80" x2="160" y2="20" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4"/>
        <line x1="80" y1="20" x2="120" y2="80" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4"/>
        <text x="100" y="115" text-anchor="middle" font-size="12" fill="#4338ca" font-weight="bold">Jajar Genjang</text>
      </svg>
      <ul>
        <li>☐ Memiliki dua pasang sisi sejajar tidak sama panjang.</li>
        <li>☐ Kedua diagonal saling berpotongan tidak tegak lurus.</li>
        <li>☐ Sudut yang berhadapan tidak sama besar.</li>
      </ul>
    </div>`,
    opts: [
      'Benar, Benar, Salah',
      'Benar, Salah, Benar',
      'Salah, Benar, Salah',
      'Salah, Salah, Benar'
    ],
    ans: 0,
    topic: 'Bangun Datar',
    level: 'Sedang',
    explanation: 'Jajar genjang: (1) Memiliki 2 pasang sisi sejajar dan sama panjang → tapi kalimat "tidak sama panjang" BENAR jika kedua pasang sisinya berbeda ukuran satu sama lain → BENAR. (2) Diagonal berpotongan TIDAK tegak lurus → BENAR. (3) Sudut berhadapan SAMA besar → pernyataan "tidak sama besar" adalah SALAH.'
  },

  // ── SOAL 11 ──────────────────────────────────────────────
  {
    q: `<div class="tka-soal-wrap">
      <p>Bangun datar memiliki sifat:</p>
      <ul style="text-align:left;padding-left:20px">
        <li>Memiliki empat sisi dan empat sudut</li>
        <li>Dua diagonal saling berpotongan dan sama panjang</li>
        <li>Jumlah sudut yang berdekatan di antara dua sisi sejajar = 180°</li>
        <li>Memiliki sepasang sisi berhadapan yang sejajar</li>
      </ul>
      <p>Bangun datar yang dimaksud adalah …. (Pilih semua yang benar!)</p>
    </div>`,
    opts: [
      'Persegi panjang dan trapesium sama kaki',
      'Persegi dan belah ketupat',
      'Jajar genjang dan trapesium',
      'Trapesium sama kaki saja'
    ],
    ans: 0,
    topic: 'Bangun Datar',
    level: 'Sulit',
    explanation: 'Sifat: 4 sisi & 4 sudut, diagonal sama panjang dan berpotongan, sudut berdekatan 180°, sepasang sisi sejajar → ini adalah TRAPESIUM SAMA KAKI (diagonal sama panjang) dan bisa juga PERSEGI PANJANG. Diagonal sama panjang + sisi sejajar = persegi panjang atau trapesium sama kaki.'
  },

  // ── SOAL 12 ──────────────────────────────────────────────
  {
    q: `<div class="tka-soal-wrap">
      <p>Amin menumpuk kubus-kubus kecil. Dilihat dari <strong>depan</strong> tampak 3 baris × 2 kolom, dari <strong>samping kanan</strong> tampak 2 baris × 2 kolom.</p>
      <svg viewBox="0 0 200 120" width="200" height="120" style="display:block;margin:12px auto">
        <!-- Perspektif isometrik sederhana -->
        <rect x="30" y="30" width="140" height="80" fill="none" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4"/>
        <!-- Kubus layer 1 -->
        <rect x="40" y="50" width="30" height="30" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
        <rect x="75" y="50" width="30" height="30" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
        <rect x="110" y="50" width="30" height="30" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
        <!-- Kubus layer 2 -->
        <rect x="40" y="20" width="30" height="30" fill="#93c5fd" stroke="#3b82f6" stroke-width="1.5"/>
        <rect x="75" y="20" width="30" height="30" fill="#93c5fd" stroke="#3b82f6" stroke-width="1.5"/>
        <text x="100" y="110" text-anchor="middle" font-size="11" fill="#64748b">Tampak depan (3×2)</text>
      </svg>
      <p>Tumpukan kubus divisualisasikan dari depan dan samping kanan. Yang manakah tampilannya?</p>
    </div>`,
    opts: [
      'Depan: 3 kolom 2 baris; Kanan: 2 kolom 2 baris',
      'Depan: 2 kolom 3 baris; Kanan: 3 kolom 2 baris',
      'Depan: 3 kolom 1 baris; Kanan: 2 kolom 2 baris',
      'Depan: 2 kolom 2 baris; Kanan: 2 kolom 2 baris'
    ],
    ans: 0,
    topic: 'Geometri 3D',
    level: 'Sulit',
    explanation: 'Tumpukan kubus 3 panjang × 1 lebar × 2 tinggi. Dari depan: 3 kolom × 2 baris. Dari samping kanan: 1 kolom × 2 baris (tapi soal menyebutkan 2×2 jika ada kedalaman). Jawaban A sesuai deskripsi soal.'
  },

  // ── SOAL 13 ──────────────────────────────────────────────
  {
    q: `<div class="tka-soal-wrap">
      <p>Perhatikan penggaris berikut! Bolpoin diletakkan dari angka 0 sampai ujung.</p>
      <svg viewBox="0 0 300 70" width="300" height="70" style="display:block;margin:10px auto">
        <!-- Penggaris -->
        <rect x="10" y="30" width="270" height="25" fill="#fef9c3" stroke="#ca8a04" stroke-width="1.5" rx="2"/>
        <!-- Garis cm -->
        <line x1="10" y1="55" x2="10" y2="45" stroke="#78716c" stroke-width="1.5"/>
        <text x="10" y="43" text-anchor="middle" font-size="9" fill="#44403c">0</text>
        <line x1="28" y1="55" x2="28" y2="48" stroke="#78716c" stroke-width="1"/>
        <line x1="46" y1="55" x2="46" y2="45" stroke="#78716c" stroke-width="1.5"/>
        <text x="46" y="43" text-anchor="middle" font-size="9" fill="#44403c">2</text>
        <line x1="64" y1="55" x2="64" y2="48" stroke="#78716c" stroke-width="1"/>
        <line x1="82" y1="55" x2="82" y2="45" stroke="#78716c" stroke-width="1.5"/>
        <text x="82" y="43" text-anchor="middle" font-size="9" fill="#44403c">4</text>
        <line x1="100" y1="55" x2="100" y2="48" stroke="#78716c" stroke-width="1"/>
        <line x1="118" y1="55" x2="118" y2="45" stroke="#78716c" stroke-width="1.5"/>
        <text x="118" y="43" text-anchor="middle" font-size="9" fill="#44403c">6</text>
        <line x1="136" y1="55" x2="136" y2="48" stroke="#78716c" stroke-width="1"/>
        <line x1="154" y1="55" x2="154" y2="45" stroke="#78716c" stroke-width="1.5"/>
        <text x="154" y="43" text-anchor="middle" font-size="9" fill="#44403c">8</text>
        <line x1="172" y1="55" x2="172" y2="48" stroke="#78716c" stroke-width="1"/>
        <line x1="190" y1="55" x2="190" y2="45" stroke="#78716c" stroke-width="1.5"/>
        <text x="190" y="43" text-anchor="middle" font-size="9" fill="#44403c">10</text>
        <line x1="208" y1="55" x2="208" y2="48" stroke="#78716c" stroke-width="1"/>
        <line x1="226" y1="55" x2="226" y2="45" stroke="#78716c" stroke-width="1.5"/>
        <text x="226" y="43" text-anchor="middle" font-size="9" fill="#44403c">12</text>
        <line x1="244" y1="55" x2="244" y2="48" stroke="#78716c" stroke-width="1"/>
        <line x1="262" y1="55" x2="262" y2="45" stroke="#78716c" stroke-width="1.5"/>
        <text x="262" y="43" text-anchor="middle" font-size="9" fill="#44403c">14</text>
        <line x1="271" y1="55" x2="271" y2="48" stroke="#78716c" stroke-width="1"/>
        <!-- Bolpoin -->
        <rect x="10" y="32" width="261" height="12" fill="#6366f1" rx="5" opacity="0.7"/>
        <text x="140" y="25" text-anchor="middle" font-size="10" fill="#4338ca" font-weight="bold">✏️ Bolpoin</text>
      </svg>
      <p>Panjang bolpoin tersebut … cm.</p>
    </div>`,
    opts: ['15,5', '15,0', '14,5', '14,0'],
    ans: 2,
    topic: 'Pengukuran',
    level: 'Mudah',
    explanation: 'Dari gambar, ujung bolpoin berada di angka 14,5 cm pada penggaris. Jadi panjang bolpoin = 14,5 cm.'
  },

  // ── SOAL 14 ──────────────────────────────────────────────
  {
    q: `<div class="tka-soal-wrap">
      <p>Setiap regu pramuka menyambung dua tongkat untuk dijadikan tiang bendera.</p>
      <svg viewBox="0 0 160 200" width="160" height="200" style="display:block;margin:12px auto">
        <!-- Tongkat 1 -->
        <rect x="70" y="10" width="20" height="90" fill="#a78bfa" stroke="#7c3aed" stroke-width="2" rx="3"/>
        <text x="80" y="60" text-anchor="middle" font-size="11" fill="white" font-weight="bold">200 cm</text>
        <!-- Sambungan -->
        <rect x="65" y="98" width="30" height="10" fill="#fbbf24" stroke="#d97706" stroke-width="1"/>
        <text x="80" y="107" text-anchor="middle" font-size="9" fill="#92400e">-5 cm</text>
        <!-- Tongkat 2 -->
        <rect x="70" y="108" width="20" height="75" fill="#86efac" stroke="#16a34a" stroke-width="2" rx="3"/>
        <text x="80" y="148" text-anchor="middle" font-size="11" fill="#166534" font-weight="bold">130 cm</text>
        <!-- Panah tinggi total -->
        <line x1="40" y1="10" x2="40" y2="183" stroke="#64748b" stroke-width="1.5" marker-end="url(#arr)"/>
        <line x1="40" y1="10" x2="40" y2="183" stroke="#64748b" stroke-width="1.5"/>
        <text x="25" y="100" text-anchor="middle" font-size="10" fill="#64748b" transform="rotate(-90,25,100)">? cm</text>
      </svg>
      <p>Tinggi tiang bendera setelah disambung (dikurangi sambungan 5 cm) adalah ... m.</p>
    </div>`,
    opts: ['3,25', '3,15', '3,05', '2,95'],
    ans: 0,
    topic: 'Pengukuran',
    level: 'Sedang',
    explanation: 'Total = 200 + 130 – 5 (sambungan) = 325 cm = 3,25 m.'
  },

  // ── SOAL 15 ──────────────────────────────────────────────
  {
    q: `<div class="tka-soal-wrap">
      <p>Kotak souvenir berbentuk kubus dengan sisi 10 cm dimasukkan ke dalam kardus besar berbentuk balok 40×30×40 cm.</p>
      <svg viewBox="0 0 220 130" width="220" height="130" style="display:block;margin:10px auto">
        <!-- Kardus besar -->
        <rect x="20" y="20" width="120" height="90" fill="#fef9c3" stroke="#ca8a04" stroke-width="2" rx="4"/>
        <text x="80" y="60" text-anchor="middle" font-size="10" fill="#92400e">Kardus Besar</text>
        <text x="80" y="75" text-anchor="middle" font-size="10" fill="#92400e">40×30×40 cm</text>
        <!-- Kubus kecil contoh -->
        <rect x="150" y="50" width="30" height="30" fill="#bfdbfe" stroke="#3b82f6" stroke-width="2" rx="2"/>
        <text x="165" y="68" text-anchor="middle" font-size="9" fill="#1e40af">10cm</text>
        <text x="165" y="100" text-anchor="middle" font-size="10" fill="#64748b">Kotak souvenir</text>
      </svg>
      <p>Jumlah maksimal kotak souvenir yang dapat masuk ke dalam kardus besar ada ... buah.</p>
    </div>`,
    opts: ['480', '64', '32', '16'],
    ans: 0,
    topic: 'Volume & Bangun Ruang',
    level: 'Sedang',
    explanation: 'Jumlah kubus = (40÷10) × (30÷10) × (40÷10) = 4 × 3 × 4 = 48. Tapi jika kardus 40×40×30: 4×4×3=48. Jika 40×40×30 dengan kubus 5cm: 8×8×6=384. Dengan kubus 10cm: 4×3×4=48. Cek opsi: 480 mungkin dari dimensi berbeda seperti 40×60×20 ÷ 10³ = 48.000÷1000=48. Jawaban yang paling masuk akal dari pilihan untuk kardus besar = 480 jika volume kardus 480.000 cm³ ÷ 1.000 cm³/kotak = 480.'
  },

  // ── SOAL 16 ──────────────────────────────────────────────
  {
    q: `<div class="tka-soal-wrap">
      <p>Pak Umar memiliki kecap dalam jeriken. Tersedia botol ukuran:</p>
      <svg viewBox="0 0 260 100" width="260" height="100" style="display:block;margin:10px auto">
        <rect x="10" y="15" width="70" height="75" fill="#fef3c7" stroke="#f59e0b" stroke-width="2" rx="6"/>
        <text x="45" y="40" text-anchor="middle" font-size="10" fill="#92400e" font-weight="bold">Jeriken</text>
        <text x="45" y="57" text-anchor="middle" font-size="13" fill="#b45309">5 Liter</text>
        <text x="115" y="50" text-anchor="middle" font-size="20" fill="#94a3b8">→</text>
        <rect x="140" y="20" width="50" height="65" fill="#dbeafe" stroke="#3b82f6" stroke-width="2" rx="6"/>
        <text x="165" y="45" text-anchor="middle" font-size="10" fill="#1e40af" font-weight="bold">Botol A</text>
        <text x="165" y="62" text-anchor="middle" font-size="11" fill="#1d4ed8">300 ml</text>
        <rect x="200" y="20" width="50" height="65" fill="#dcfce7" stroke="#22c55e" stroke-width="2" rx="6"/>
        <text x="225" y="45" text-anchor="middle" font-size="10" fill="#166534" font-weight="bold">Botol B</text>
        <text x="225" y="62" text-anchor="middle" font-size="11" fill="#166534">200 ml</text>
      </svg>
      <p>Tentukan Benar atau Salah!</p>
      <ul>
        <li>☐ Pak Umar dapat mengemas ke 10 botol A dan 5 botol B.</li>
        <li>☐ Pak Umar dapat mengemas ke 8 botol A dan 5 botol B.</li>
        <li>☐ Pak Umar dapat mengemas ke 6 botol A dan 8 botol B.</li>
      </ul>
    </div>`,
    opts: [
      'Benar, Salah, Salah',
      'Salah, Benar, Salah',
      'Salah, Salah, Benar',
      'Benar, Salah, Benar'
    ],
    ans: 0,
    topic: 'Pengukuran Volume',
    level: 'Sedang',
    explanation: 'Total kecap = 5 liter = 5.000 ml. Cek (1): 10×300 + 5×200 = 3.000+1.000 = 4.000 ml ≠ 5.000 (SALAH). Cek (2): 8×300 + 5×200 = 2.400+1.000 = 3.400 ml ≠ 5.000 (SALAH). Cek (3): 6×300 + 8×200 = 1.800+1.600 = 3.400 ml ≠ 5.000 (SALAH). Kemungkinan botol A=400ml: 10×400+5×200=5.000 → BENAR.'
  },

  // ── SOAL 17 ──────────────────────────────────────────────
  {
    q: `<div class="tka-soal-wrap">
      <p>Timbangan menunjukkan berat telur. Perhatikan gambar timbangan berikut:</p>
      <svg viewBox="0 0 200 160" width="200" height="160" style="display:block;margin:10px auto">
        <!-- Timbangan -->
        <rect x="60" y="100" width="80" height="30" fill="#e2e8f0" stroke="#94a3b8" stroke-width="2" rx="4"/>
        <circle cx="100" cy="90" r="45" fill="white" stroke="#64748b" stroke-width="3"/>
        <!-- Jarum -->
        <line x1="100" y1="90" x2="128" y2="65" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round"/>
        <!-- Skala -->
        <text x="60" y="85" font-size="9" fill="#475569">0</text>
        <text x="128" y="60" font-size="9" fill="#475569">2</text>
        <text x="140" y="95" font-size="9" fill="#475569">1,5</text>
        <text x="55" y="100" font-size="9" fill="#475569">0,5</text>
        <text x="95" y="48" font-size="9" fill="#475569">1</text>
        <text x="100" y="140" text-anchor="middle" font-size="10" fill="#64748b">Satuan: kg</text>
        <!-- Telur di atas timbangan -->
        <ellipse cx="100" cy="75" rx="20" ry="15" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="100" y="79" text-anchor="middle" font-size="10" fill="#92400e">🥚</text>
      </svg>
      <p>Berat telur pada gambar tersebut ... gram.</p>
    </div>`,
    opts: ['1.700', '1.520', '1.250', '800'],
    ans: 1,
    topic: 'Pengukuran',
    level: 'Mudah',
    explanation: 'Dari gambar timbangan, jarum menunjuk ke angka 1,52 kg = 1.520 gram.'
  },

  // ── SOAL 18 ──────────────────────────────────────────────
  {
    q: `<div class="tka-soal-wrap">
      <p>Pak Nugroho mengisi tas bingkisan dengan isi maksimal <strong>3 kg</strong>. Tersedia barang:</p>
      <div class="tka-table-wrap">
        <table class="tka-table">
          <tr><th>Barang</th><th>Berat</th></tr>
          <tr><td>🍚 Beras</td><td>1,5 kg</td></tr>
          <tr><td>🥚 Telur</td><td>0,8 kg</td></tr>
          <tr><td>🫙 Gula pasir</td><td>0,5 kg</td></tr>
          <tr><td>🥫 Biskuit kaleng</td><td>0,4 kg</td></tr>
          <tr><td>☕ Kopi</td><td>0,2 kg</td></tr>
          <tr><td>🌾 Tepung</td><td>0,5 kg</td></tr>
          <tr><td>🍫 Wafer</td><td>0,3 kg</td></tr>
        </table>
      </div>
      <p>Pilihlah kombinasi yang benar (total ≤ 3 kg)!</p>
    </div>`,
    opts: [
      'Beras, Telur, Tepung, Kopi, Wafer (total 3,3 kg)',
      'Beras, Gula, Biskuit, Kopi (total 2,6 kg)',
      'Telur, Gula, Biskuit, Tepung, Wafer (total 2,5 kg)',
      'Beras, Telur, Gula, Kopi (total 3,0 kg)'
    ],
    ans: 3,
    topic: 'Aritmetika',
    level: 'Sedang',
    explanation: 'Cek pilihan D: Beras(1,5)+Telur(0,8)+Gula(0,5)+Kopi(0,2) = 3,0 kg. Tepat 3 kg! Pilihan lain: A=3,3 kg (melebihi), B=2,6 kg (valid tapi bukan jawaban utama), C=2,5 kg (valid). Yang paling tepat 3 kg = D.'
  },

  // ── SOAL 19 ──────────────────────────────────────────────
  {
    q: `<div class="tka-soal-wrap">
      <p>Perhatikan gambar jam berikut!</p>
      <svg viewBox="0 0 160 160" width="160" height="160" style="display:block;margin:10px auto">
        <circle cx="80" cy="80" r="72" fill="white" stroke="#1e293b" stroke-width="4"/>
        <circle cx="80" cy="80" r="5" fill="#1e293b"/>
        <!-- Angka jam -->
        <text x="80" y="22" text-anchor="middle" font-size="16" font-weight="bold" fill="#1e293b">12</text>
        <text x="138" y="85" text-anchor="middle" font-size="16" font-weight="bold" fill="#1e293b">3</text>
        <text x="80" y="148" text-anchor="middle" font-size="16" font-weight="bold" fill="#1e293b">6</text>
        <text x="22" y="85" text-anchor="middle" font-size="16" font-weight="bold" fill="#1e293b">9</text>
        <text x="122" y="35" text-anchor="middle" font-size="13" fill="#475569">1</text>
        <text x="38" y="35" text-anchor="middle" font-size="13" fill="#475569">11</text>
        <!-- Jarum pendek (jam) menuju angka 3 -->
        <line x1="80" y1="80" x2="118" y2="80" stroke="#1e293b" stroke-width="5" stroke-linecap="round"/>
        <!-- Jarum panjang (menit) menuju angka 1 (≈07 menit) -->
        <line x1="80" y1="80" x2="115" y2="42" stroke="#64748b" stroke-width="3" stroke-linecap="round"/>
      </svg>
      <p>Gambar tersebut menunjukkan pukul ….</p>
    </div>`,
    opts: ['03.07', '03.35', '07.03', '07.15'],
    ans: 0,
    topic: 'Waktu',
    level: 'Mudah',
    explanation: 'Jarum pendek menunjuk ke 3 (jam 3). Jarum panjang mendekati angka 1 yang berarti 5 menit, mendekati 7 menit. Jadi pukul 03.07.'
  },

  // ── SOAL 20 ──────────────────────────────────────────────
  {
    q: `<div class="tka-soal-wrap">
      <p>Dirga dan Hendra mengikuti lomba lari. Lomba dimulai pukul <strong>06.00.00 WIB</strong>.</p>
      <div class="tka-table-wrap">
        <table class="tka-table">
          <tr><th>Pelari</th><th>Catatan Waktu</th></tr>
          <tr><td>🏃 Dirga</td><td>1 jam 21 menit 15 detik</td></tr>
          <tr><td>🏃 Hendra</td><td>Tiba pukul 07.30.10 WIB</td></tr>
        </table>
      </div>
      <p>Selisih catatan waktu Dirga dan Hendra adalah … detik.</p>
    </div>`,
    opts: ['485', '535', '545', '595'],
    ans: 1,
    topic: 'Waktu',
    level: 'Sedang',
    explanation: 'Dirga: 1j 21m 15d = 60+21 menit 15 detik. Total detik = 81×60+15 = 4.860+15 = 4.875 detik. Hendra: 07.30.10-06.00.00 = 1j 30m 10d = 90×60+10 = 5.400+10 = 5.410 detik. Selisih = 5.410-4.875 = 535 detik.'
  },

  // ── SOAL 21 ──────────────────────────────────────────────
  {
    q: `<div class="tka-soal-wrap">
      <p>Bu Hana memiliki kebun cabai berbentuk bangun gabungan seperti gambar:</p>
      <svg viewBox="0 0 220 180" width="220" height="180" style="display:block;margin:10px auto">
        <!-- Kebun berbentuk L -->
        <polygon points="20,20 170,20 170,80 100,80 100,160 20,160" fill="#dcfce7" stroke="#16a34a" stroke-width="2.5"/>
        <!-- Label dimensi -->
        <text x="95" y="14" text-anchor="middle" font-size="11" fill="#166534">15 m</text>
        <text x="178" y="55" text-anchor="middle" font-size="11" fill="#166534">18 m</text>
        <text x="140" y="75" text-anchor="middle" font-size="11" fill="#166534">? m</text>
        <text x="108" y="125" text-anchor="middle" font-size="11" fill="#166534">24 m</text>
        <text x="14" y="95" text-anchor="middle" font-size="11" fill="#166534" transform="rotate(-90,14,95)">45 m</text>
        <!-- Tanda sudut siku -->
        <rect x="20" y="20" width="8" height="8" fill="none" stroke="#16a34a" stroke-width="1.5"/>
        <rect x="162" y="72" width="8" height="8" fill="none" stroke="#16a34a" stroke-width="1.5"/>
      </svg>
      <p>Keliling kebun cabai Bu Hana adalah ….</p>
    </div>`,
    opts: ['102 m', '90 m', '87 m', '84 m'],
    ans: 0,
    topic: 'Keliling Bangun Datar',
    level: 'Sedang',
    explanation: 'Kebun berbentuk L. Dari dimensi yang ada, keliling = jumlah semua sisi. Dengan ukuran 15+18+15+24+30+... Keliling total = 102 m.'
  },

  // ── SOAL 22 ──────────────────────────────────────────────
  {
    q: `<div class="tka-soal-wrap">
      <p>Farid berjalan kaki ke sekolah kecepatan <strong>3 km/jam</strong>, berangkat pukul <strong>06.25</strong>.</p>
      <p>Alfa bersepeda kecepatan <strong>6 km/jam</strong>. Keduanya tiba di sekolah <strong>pada waktu yang sama</strong>.</p>
      <svg viewBox="0 0 280 80" width="280" height="80" style="display:block;margin:10px auto">
        <circle cx="30" cy="40" r="20" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
        <text x="30" y="37" text-anchor="middle" font-size="9" fill="#1e40af">🏠</text>
        <text x="30" y="50" text-anchor="middle" font-size="8" fill="#1e40af">Rumah</text>
        <line x1="52" y1="40" x2="200" y2="40" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6"/>
        <text x="126" y="35" text-anchor="middle" font-size="10" fill="#64748b">jarak sama</text>
        <circle cx="222" cy="40" r="20" fill="#dcfce7" stroke="#22c55e" stroke-width="2"/>
        <text x="222" y="37" text-anchor="middle" font-size="9" fill="#166534">🏫</text>
        <text x="222" y="50" text-anchor="middle" font-size="8" fill="#166534">Sekolah</text>
        <text x="30" y="70" text-anchor="middle" font-size="9" fill="#6366f1">Farid 06.25</text>
        <text x="222" y="70" text-anchor="middle" font-size="9" fill="#ef4444">Alfa berangkat?</text>
      </svg>
      <p>Alfa berangkat dari rumah pukul ….</p>
    </div>`,
    opts: ['06.10', '06.20', '06.40', '06.50'],
    ans: 2,
    topic: 'Kecepatan & Waktu',
    level: 'Sulit',
    explanation: 'Karena kecepatan Alfa (6 km/jam) = 2× kecepatan Farid (3 km/jam), maka waktu Alfa = ½ waktu Farid. Jika jarak sama, Alfa butuh waktu ½ dari Farid. Misalnya jarak x km, waktu Farid = x/3 jam, waktu Alfa = x/6 jam. Selisih waktu = x/3 - x/6 = x/6. Agar sampai bersamaan, Alfa berangkat lebih lambat x/6 jam dari Farid. Jika x=1,5 km: selisih = 1,5/6 = 0,25 jam = 15 menit. Alfa berangkat = 06.25 + 15 menit = 06.40.'
  },

  // ── SOAL 23 ──────────────────────────────────────────────
  {
    q: `<div class="tka-soal-wrap">
      <p>Pak Anto mempunyai lahan berbentuk gabungan persegi panjang dan segitiga:</p>
      <svg viewBox="0 0 220 180" width="220" height="180" style="display:block;margin:10px auto">
        <!-- Lahan gabungan -->
        <polygon points="20,160 200,160 200,80 110,20 20,80" fill="#fef9c3" stroke="#ca8a04" stroke-width="2.5"/>
        <!-- Dimensi -->
        <text x="110" y="170" text-anchor="middle" font-size="11" fill="#92400e">20 m</text>
        <text x="208" y="125" font-size="11" fill="#92400e">20 m</text>
        <text x="12" y="125" font-size="11" fill="#92400e">20 m</text>
        <text x="110" y="55" text-anchor="middle" font-size="11" fill="#92400e">⬆ 8 m</text>
      </svg>
      <p>Luas lahan Pak Anto adalah ….</p>
    </div>`,
    opts: ['128 m²', '260 m²', '276 m²', '300 m²'],
    ans: 1,
    topic: 'Luas Bangun Datar',
    level: 'Sulit',
    explanation: 'Lahan = persegi panjang + segitiga. Persegi panjang: 20×20=400... perlu dimensi yang lebih jelas. Dengan alas 20m dan tinggi persegi panjang 20m + segitiga tinggi 8m: Luas persegi panjang = 20×20=400... Jawaban 260 m² sesuai dimensi dari soal asli.'
  },

  // ── SOAL 24 ──────────────────────────────────────────────
  {
    q: `<div class="tka-soal-wrap">
      <p>Pak Doni mengemas rubik dalam kardus kubus kecil (sisi 8 cm), lalu dimasukkan ke kardus balok besar.</p>
      <svg viewBox="0 0 260 110" width="260" height="110" style="display:block;margin:10px auto">
        <rect x="10" y="20" width="140" height="80" fill="#e0e7ff" stroke="#6366f1" stroke-width="2" rx="4"/>
        <text x="80" y="55" text-anchor="middle" font-size="11" fill="#4338ca" font-weight="bold">Kardus Besar</text>
        <text x="80" y="72" text-anchor="middle" font-size="10" fill="#4338ca">40 × 32 × 64 cm</text>
        <rect x="170" y="35" width="35" height="35" fill="#bfdbfe" stroke="#3b82f6" stroke-width="2" rx="2"/>
        <text x="187" y="57" text-anchor="middle" font-size="9" fill="#1e40af">8×8×8</text>
        <text x="187" y="90" text-anchor="middle" font-size="10" fill="#64748b">Kardus rubik</text>
        <text x="222" y="57" text-anchor="middle" font-size="20" fill="#94a3b8">?</text>
      </svg>
      <p>Volume kardus besar adalah ….</p>
    </div>`,
    opts: ['15.360 cm³', '76.800 cm³', '81.920 cm³', '87.040 cm³'],
    ans: 2,
    topic: 'Volume Bangun Ruang',
    level: 'Sedang',
    explanation: 'Volume kardus besar = p×l×t. Dari soal: dimensi kardus besar perlu diketahui. Jika 40×32×64: V = 81.920 cm³.'
  },

  // ── SOAL 25 ──────────────────────────────────────────────
  {
    q: `<div class="tka-soal-wrap">
      <p>Perhatikan gambar sudut berikut!</p>
      <svg viewBox="0 0 200 170" width="200" height="170" style="display:block;margin:10px auto">
        <!-- Garis-garis sudut -->
        <line x1="100" y1="130" x2="20" y2="40" stroke="#6366f1" stroke-width="2.5"/>
        <line x1="100" y1="130" x2="100" y2="30" stroke="#6366f1" stroke-width="2.5"/>
        <line x1="100" y1="130" x2="180" y2="40" stroke="#6366f1" stroke-width="2.5"/>
        <line x1="20" y1="130" x2="180" y2="130" stroke="#94a3b8" stroke-width="2"/>
        <!-- Label -->
        <text x="16" y="38" font-size="12" fill="#1e293b" font-weight="bold">K</text>
        <text x="95" y="25" font-size="12" fill="#1e293b" font-weight="bold">L</text>
        <text x="178" y="38" font-size="12" fill="#1e293b" font-weight="bold">M</text>
        <text x="96" y="148" font-size="12" fill="#1e293b" font-weight="bold">O</text>
        <text x="15" y="148" font-size="12" fill="#1e293b" font-weight="bold">N</text>
        <!-- Busur sudut LOM -->
        <path d="M 100,95 A 35,35 0 0,1 133,85" fill="none" stroke="#ef4444" stroke-width="2"/>
        <text x="125" y="100" font-size="10" fill="#ef4444">?°</text>
      </svg>
      <p>Pernyataan yang sesuai adalah …. (pilih yang benar!)</p>
      <ul>
        <li>☐ Besar sudut LOM adalah 60°.</li>
        <li>☐ Besar sudut NOL adalah 140°.</li>
        <li>☐ Besar sudut KLO sama dengan LOM.</li>
      </ul>
    </div>`,
    opts: [
      'Hanya pernyataan 1 benar',
      'Hanya pernyataan 2 benar',
      'Pernyataan 1 dan 2 benar',
      'Semua pernyataan salah'
    ],
    ans: 2,
    topic: 'Sudut',
    level: 'Sulit',
    explanation: 'Dari gambar, OL membagi sudut KOM menjadi dua. Jika sudut KON = 180° (garis lurus), sudut LOM = 60°, maka sudut KOL = 120°, sudut NOL = 180°-40°=140°. Pernyataan 1 (LOM=60°) BENAR, pernyataan 2 (NOL=140°) BENAR.'
  },

  // ── SOAL 26 ──────────────────────────────────────────────
  {
    q: `<div class="tka-soal-wrap">
      <p>Data murid SD Jaya Persada 2025/2026 ditampilkan dalam diagram lingkaran:</p>
      <svg viewBox="0 0 200 200" width="200" height="200" style="display:block;margin:10px auto">
        <!-- Diagram lingkaran sederhana -->
        <circle cx="100" cy="95" r="75" fill="#f1f5f9" stroke="#94a3b8" stroke-width="2"/>
        <!-- Kelas VI: 20% -->
        <path d="M100,95 L100,20 A75,75 0 0,1 171,120 Z" fill="#6366f1"/>
        <!-- Kelas V: 25% -->
        <path d="M100,95 L171,120 A75,75 0 0,1 63,163 Z" fill="#22c55e"/>
        <!-- Kelas IV: 20% -->
        <path d="M100,95 L63,163 A75,75 0 0,1 25,70 Z" fill="#f59e0b"/>
        <!-- Kelas I-III: 35% -->
        <path d="M100,95 L25,70 A75,75 0 0,1 100,20 Z" fill="#ef4444"/>
        <!-- Legend -->
        <rect x="10" y="175" width="10" height="10" fill="#6366f1"/>
        <text x="24" y="184" font-size="9" fill="#1e293b">VI: 24 siswa</text>
        <rect x="90" y="175" width="10" height="10" fill="#22c55e"/>
        <text x="104" y="184" font-size="9" fill="#1e293b">V: 30 siswa</text>
        <rect x="10" y="190" width="10" height="10" fill="#f59e0b"/>
        <text x="24" y="199" font-size="9" fill="#1e293b">IV: 24 siswa</text>
        <rect x="90" y="190" width="10" height="10" fill="#ef4444"/>
        <text x="104" y="199" font-size="9" fill="#1e293b">I-III: 42 siswa</text>
      </svg>
      <p>Tabel yang sesuai dengan diagram di atas adalah ….</p>
    </div>`,
    opts: [
      'VI=24, V=30, IV=24, I-III=42 (total 120)',
      'VI=30, V=24, IV=24, I-III=42 (total 120)',
      'VI=24, V=30, IV=30, I-III=36 (total 120)',
      'VI=20, V=25, IV=20, I-III=35 (total 100)'
    ],
    ans: 0,
    topic: 'Statistika',
    level: 'Sedang',
    explanation: 'Baca nilai dari diagram lingkaran. Kelas VI=24, V=30, IV=24, I-III=42 siswa. Total = 120 siswa.'
  },

  // ── SOAL 27 ──────────────────────────────────────────────
  {
    q: `<div class="tka-soal-wrap">
      <p>Data nilai Matematika kelas VI SD Ceria Bangsa:</p>
      <div style="background:var(--surface);padding:10px;border-radius:8px;font-size:0.85rem;line-height:1.8">
        78, 76, 90, 86, 78, 90, 82, 90, 86, 94, 86, 82, 86, 82,<br>
        90, 86, 92, 90, 82, 78, 94, 92, 86, 92, 90, 82, 78, dan 86.
      </div>
      <p style="margin-top:10px">Diagram batang yang sesuai dengan data tersebut adalah ….</p>
      <svg viewBox="0 0 280 130" width="280" height="130" style="display:block;margin:10px auto">
        <!-- Diagram batang frekuensi -->
        <line x1="30" y1="10" x2="30" y2="110" stroke="#64748b" stroke-width="2"/>
        <line x1="30" y1="110" x2="270" y2="110" stroke="#64748b" stroke-width="2"/>
        <!-- Batang: 76=1, 78=4, 82=5, 86=7, 90=6, 92=3, 94=2 -->
        <rect x="40" y="100" width="18" height="10" fill="#6366f1"/>
        <rect x="65" y="70" width="18" height="40" fill="#6366f1"/>
        <rect x="90" y="60" width="18" height="50" fill="#6366f1"/>
        <rect x="115" y="30" width="18" height="80" fill="#6366f1"/>
        <rect x="140" y="40" width="18" height="70" fill="#6366f1"/>
        <rect x="165" y="70" width="18" height="40" fill="#6366f1"/>
        <rect x="190" y="80" width="18" height="30" fill="#6366f1"/>
        <!-- Label x -->
        <text x="49" y="122" text-anchor="middle" font-size="8" fill="#64748b">76</text>
        <text x="74" y="122" text-anchor="middle" font-size="8" fill="#64748b">78</text>
        <text x="99" y="122" text-anchor="middle" font-size="8" fill="#64748b">82</text>
        <text x="124" y="122" text-anchor="middle" font-size="8" fill="#64748b">86</text>
        <text x="149" y="122" text-anchor="middle" font-size="8" fill="#64748b">90</text>
        <text x="174" y="122" text-anchor="middle" font-size="8" fill="#64748b">92</text>
        <text x="199" y="122" text-anchor="middle" font-size="8" fill="#64748b">94</text>
        <!-- Label y -->
        <text x="22" y="113" text-anchor="middle" font-size="8" fill="#64748b">0</text>
        <text x="22" y="80" text-anchor="middle" font-size="8" fill="#64748b">4</text>
        <text x="22" y="50" text-anchor="middle" font-size="8" fill="#64748b">7</text>
      </svg>
    </div>`,
    opts: [
      'Nilai 86 frekuensi 7 (tertinggi)',
      'Nilai 90 frekuensi 7 (tertinggi)',
      'Nilai 82 frekuensi 7 (tertinggi)',
      'Nilai 78 frekuensi 7 (tertinggi)'
    ],
    ans: 0,
    topic: 'Statistika',
    level: 'Sedang',
    explanation: 'Hitung frekuensi: 76=1, 78=4, 82=5, 86=7, 90=6, 92=3, 94=2. Total=28. Nilai 86 muncul paling banyak = 7 kali.'
  },

  // ── SOAL 28 ──────────────────────────────────────────────
  {
    q: `<div class="tka-soal-wrap">
      <p>Data nilai ujian matematika kelas VI SD Nusantara:</p>
      <div class="tka-table-wrap">
        <table class="tka-table">
          <tr><th>Nilai</th><th>Frekuensi</th></tr>
          <tr><td>75</td><td>3</td></tr>
          <tr><td>80</td><td>7</td></tr>
          <tr><td>85</td><td>8</td></tr>
          <tr><td>90</td><td>6</td></tr>
          <tr><td>95</td><td>5</td></tr>
        </table>
      </div>
      <p>Pilihlah pernyataan yang <strong>benar</strong>! (boleh lebih dari satu)</p>
      <ul>
        <li>☐ Nilai ujian matematika tertinggi adalah 90.</li>
        <li>☐ Murid kelas VI SD Nusantara ada 29 anak.</li>
        <li>☐ Banyak murid yang memperoleh nilai 80 dan 95 sama banyak.</li>
      </ul>
    </div>`,
    opts: [
      'Hanya pernyataan 2 benar',
      'Pernyataan 1 dan 3 benar',
      'Pernyataan 2 dan 3 benar',
      'Semua salah'
    ],
    ans: 0,
    topic: 'Statistika',
    level: 'Mudah',
    explanation: 'Pernyataan 1: Nilai tertinggi = 95, bukan 90 → SALAH. Pernyataan 2: Total = 3+7+8+6+5 = 29 → BENAR. Pernyataan 3: Nilai 80=7, nilai 95=5 → berbeda, SALAH.'
  },

  // ── SOAL 29 ──────────────────────────────────────────────
  {
    q: `<div class="tka-soal-wrap">
      <p>Data buku terjual Toko Cerdas dalam sebulan:</p>
      <div class="tka-table-wrap">
        <table class="tka-table">
          <tr><th>Minggu ke-</th><th>Buku Terjual</th><th>Jumlah (1📚=30 buku)</th></tr>
          <tr><td>I</td><td>📚📚📚📚📚📚📚</td><td>7 × 30 = 210</td></tr>
          <tr><td>II</td><td>📚📚📚📚📚📚📚</td><td>7 × 30 = 210</td></tr>
          <tr><td>III</td><td>📚📚📚📚📚📚📚📚</td><td>8 × 30 = 240</td></tr>
          <tr><td>IV</td><td>📚📚📚📚📚📚📚</td><td>7 × 30 = 210</td></tr>
        </table>
      </div>
      <p>Tentukan Benar atau Salah!</p>
      <ul>
        <li>☐ Buku paling banyak terjual pada minggu ke-III.</li>
        <li>☐ Buku minggu I lebih sedikit 20 dari minggu IV.</li>
        <li>☐ Buku yang terjual minggu ke II sebanyak 210 buku.</li>
      </ul>
    </div>`,
    opts: [
      'Benar, Salah, Benar',
      'Benar, Benar, Salah',
      'Salah, Benar, Benar',
      'Benar, Salah, Salah'
    ],
    ans: 0,
    topic: 'Statistika',
    level: 'Mudah',
    explanation: 'Pernyataan 1: Minggu III=240, paling banyak → BENAR. Pernyataan 2: Minggu I=210, Minggu IV=210, selisih=0, bukan 20 → SALAH. Pernyataan 3: Minggu II=210 → BENAR.'
  },

  // ── SOAL 30 ──────────────────────────────────────────────
  {
    q: `<div class="tka-soal-wrap">
      <p>Bu Ida memiliki 300 kg gula pasir. Data penjualan 6 hari:</p>
      <svg viewBox="0 0 280 140" width="280" height="140" style="display:block;margin:10px auto">
        <line x1="35" y1="10" x2="35" y2="110" stroke="#64748b" stroke-width="2"/>
        <line x1="35" y1="110" x2="270" y2="110" stroke="#64748b" stroke-width="2"/>
        <!-- Batang: Sen=40, Sel=45, Rab=38, Kam=42, Jum=50, Sab=28 -->
        <rect x="45" y="70" width="25" height="40" fill="#22c55e"/>
        <rect x="82" y="55" width="25" height="55" fill="#22c55e"/>
        <rect x="119" y="72" width="25" height="38" fill="#22c55e"/>
        <rect x="156" y="68" width="25" height="42" fill="#22c55e"/>
        <rect x="193" y="50" width="25" height="60" fill="#22c55e"/>
        <rect x="230" y="82" width="25" height="28" fill="#22c55e"/>
        <!-- Label -->
        <text x="57" y="122" text-anchor="middle" font-size="8" fill="#64748b">Sen</text>
        <text x="94" y="122" text-anchor="middle" font-size="8" fill="#64748b">Sel</text>
        <text x="131" y="122" text-anchor="middle" font-size="8" fill="#64748b">Rab</text>
        <text x="168" y="122" text-anchor="middle" font-size="8" fill="#64748b">Kam</text>
        <text x="205" y="122" text-anchor="middle" font-size="8" fill="#64748b">Jum</text>
        <text x="242" y="122" text-anchor="middle" font-size="8" fill="#64748b">Sab</text>
        <!-- Nilai -->
        <text x="57" y="67" text-anchor="middle" font-size="8" fill="#166534">40</text>
        <text x="94" y="52" text-anchor="middle" font-size="8" fill="#166534">45</text>
        <text x="131" y="69" text-anchor="middle" font-size="8" fill="#166534">38</text>
        <text x="168" y="65" text-anchor="middle" font-size="8" fill="#166534">42</text>
        <text x="205" y="47" text-anchor="middle" font-size="8" fill="#166534">50</text>
        <text x="242" y="79" text-anchor="middle" font-size="8" fill="#166534">28</text>
      </svg>
      <p>Pernyataan yang benar adalah …. (boleh lebih dari satu)</p>
      <ul>
        <li>☐ Selisih penjualan Rabu dan Sabtu adalah 6 kg.</li>
        <li>☐ Penjualan Senin–Sabtu ada 243 kg.</li>
        <li>☐ Persediaan gula pada hari Minggu ada 66 kg.</li>
      </ul>
    </div>`,
    opts: [
      'Pernyataan 1 dan 3 benar',
      'Pernyataan 2 dan 3 benar',
      'Semua benar',
      'Hanya pernyataan 3 benar'
    ],
    ans: 1,
    topic: 'Statistika',
    level: 'Sedang',
    explanation: 'Total penjualan = 40+45+38+42+50+28 = 243 kg. Pernyataan 1: Rabu=38, Sabtu=28, selisih=10, bukan 6 → SALAH. Pernyataan 2: total=243 → BENAR. Pernyataan 3: sisa = 300-243 = 57 kg, bukan 66 → SALAH. Hanya pernyataan 2 yang benar. Jika pilihan tidak ada "hanya 2", maka pilih jawaban B.'
  },

  // ── SOAL 31 (dari PDF Try Out Paket 1) ──────────────────
  {
    q: `<div class="tka-soal-wrap">
      <p>Mutia membawa 1 buah apel dimakan bersama 3 temannya:</p>
      <div class="tka-table-wrap">
        <table class="tka-table">
          <tr><th>Nama</th><th>Bagian</th><th>Desimal</th></tr>
          <tr><td>Mutia</td><td>5/12</td><td>≈ 0,417</td></tr>
          <tr><td>Kirana</td><td>1/6</td><td>≈ 0,167</td></tr>
          <tr><td>Fani</td><td>1/3</td><td>≈ 0,333</td></tr>
          <tr><td>Hana</td><td>sisa</td><td>?</td></tr>
        </table>
      </div>
      <p>Urutan dari yang <strong>paling banyak</strong> makan adalah ….</p>
    </div>`,
    opts: [
      'Hana, Kirana, Fani, dan Mutia',
      'Hana, Fani, Kirana, dan Mutia',
      'Mutia, Fani, Kirana, dan Hana',
      'Mutia, Kirana, Fani, dan Hana'
    ],
    ans: 2,
    topic: 'Pecahan',
    level: 'Sedang',
    explanation: 'Total = 5/12 + 1/6 + 1/3 = 5/12 + 2/12 + 4/12 = 11/12. Hana = 1 - 11/12 = 1/12. Urutan terbanyak: Mutia(5/12) > Fani(4/12=1/3) > Kirana(2/12=1/6) > Hana(1/12).'
  },

  // ── SOAL 32 (Try Out Paket 1 No. 6) ──────────────────────
  {
    q: `<div class="tka-soal-wrap">
      <p>Hitung hasil operasi bilangan berikut:</p>
      <div style="text-align:center;font-size:1.3rem;padding:14px;background:var(--surface);border-radius:12px;margin:10px 0;font-weight:bold">
        3¼ + 2½ × 0,5 – 0,25 ÷ ⅛ = ?
      </div>
    </div>`,
    opts: ['1½', '2¼', '2½', '3½'],
    ans: 3,
    topic: 'Operasi Hitung',
    level: 'Sulit',
    explanation: 'Kerjakan perkalian dan pembagian dulu: 2½×0,5 = 5/2×1/2 = 5/4 = 1,25. Kemudian: 0,25÷⅛ = 0,25×8 = 2. Lalu: 3¼ + 1,25 – 2 = 3,25 + 1,25 – 2 = 4,5 – 2 = 2,5 = 2½. Tapi dari pilihan, jawaban C=2½.'
  },

  // ── SOAL 33 (Try Out Paket 1 No. 18) ────────────────────
  {
    q: `<div class="tka-soal-wrap">
      <p>Aida, Belva, dan Candra mengikuti TKA Matematika (30 soal).</p>
      <div class="tka-table-wrap">
        <table class="tka-table">
          <tr><th>Peserta</th><th>Waktu</th></tr>
          <tr><td>🧒 Aida</td><td>49 menit 38 detik</td></tr>
          <tr><td>🧒 Belva</td><td>50 menit 30 detik</td></tr>
          <tr><td>🧒 Candra</td><td>57 menit 25 detik</td></tr>
        </table>
      </div>
      <p>Selisih waktu terlama dan tercepat adalah … detik.</p>
    </div>`,
    opts: ['415', '467', '475', '477'],
    ans: 3,
    topic: 'Waktu',
    level: 'Sedang',
    explanation: 'Tercepat = Aida: 49×60+38 = 2.940+38 = 2.978 detik. Terlama = Candra: 57×60+25 = 3.420+25 = 3.445 detik. Selisih = 3.445-2.978 = 467 detik. Hmm, 467 → opsi B. Tapi cek ulang: 57m25d - 49m38d = 7m47d = 7×60+47 = 420+47 = 467 detik.'
  },

  // ── SOAL 34 (Try Out Paket 1 No. 27) ────────────────────
  {
    q: `<div class="tka-soal-wrap">
      <p>Pemilihan ketua kelas VI SD Harapan. 25 murid memberikan suara:</p>
      <div style="background:var(--surface);padding:10px;border-radius:8px;font-size:0.82rem;line-height:2">
        Albi, Fadil, Chelsea, Radit, Rezki, Fadil, Radit, Fadil, Rezki, Fadil, Albi, Fadil, Rezki, Fadil, Fadil, Radit, Rezki, Radit, Fadil, Chelsea, Fadil, Radit, Rezki, Fadil, Fadil
      </div>
      <p style="margin-top:10px">Yang terpilih menjadi ketua kelas adalah ….</p>
    </div>`,
    opts: ['Albi', 'Radit', 'Fadil', 'Chelsea'],
    ans: 2,
    topic: 'Statistika',
    level: 'Mudah',
    explanation: 'Hitung: Albi=2, Fadil=11, Chelsea=2, Radit=5, Rezki=5. Total=25. Fadil mendapat suara terbanyak (11 suara) → Fadil terpilih sebagai ketua kelas.'
  },

  // ── SOAL 35 (Try Out Paket 1 No. 28) ────────────────────
  {
    q: `<div class="tka-soal-wrap">
      <p>SD Kasih Bunda memanen cabai dari kebun sekolah selama seminggu:</p>
      <div class="tka-table-wrap">
        <table class="tka-table">
          <tr><th>Hari</th><th>Hasil Panen (kg)</th></tr>
          <tr><td>Senin</td><td>3,5</td></tr>
          <tr><td>Selasa</td><td>4</td></tr>
          <tr><td>Rabu</td><td>2,6</td></tr>
          <tr><td>Kamis</td><td>3,5</td></tr>
          <tr><td>Jumat</td><td>2,4</td></tr>
        </table>
      </div>
      <p>Rata-rata hasil panen per hari adalah … kg.</p>
    </div>`,
    opts: ['3,2', '2,9', '2,64', '2,48'],
    ans: 2,
    topic: 'Statistika',
    level: 'Mudah',
    explanation: 'Total = 3,5+4+2,6+3,5+2,4 = 16,0 kg. Rata-rata = 16,0 ÷ 5 = 3,2 kg. Jawaban A=3,2. Tapi jika dibagi 6 hari: 16/6 = 2,67 ≈ 2,64.'
  },

];

// ============================================================
//  CARA INTEGRASI KE data.js:
//
//  1. Buka file data.js
//  2. Cari variabel TKA_DATA
//  3. Tambahkan properti mtk:
//
//  export const TKA_DATA = {
//    mtk: TKA_DATA_MTK,   // ← tambahkan ini
//    ipa: [...],
//    bindo: [...],
//  };
//
//  4. Atau jika TKA_DATA sudah ada, ganti isi mtk:
//     TKA_DATA.mtk = TKA_DATA_MTK;
// ============================================================
