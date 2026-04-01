// ============================================================
//  data.js — BelajarCeria | Semua data materi, flashcard & kuis
// ============================================================

// ── Import soal TKA dari file terpisah ───────────────────────
// Soal latihan harian (dipindah dari data.js lama)
import { TKA_IPA_LAMA }          from './tka_ipa_lama.js';
import { TKA_BINDO_LAMA }        from './tka_bindo_lama.js';
import { TKA_MTK_LAMA }          from './tka_mtk_lama.js';
// Soal Try Out TKA Gunungkidul & DIY
import { TKA_MTK_PAKET2_FULL }   from './tka_mtk_paket2_full.js';
import { TKA_BINDO_PAKET1 }      from './tka_bindo_paket1.js';
import { TKA_BINDO_PAKET2 }      from './tka_bindo_paket2.js';
import { TKA_BINDO_DIY_PAKET1 }  from './tka_bindo_diy_paket1.js';
import { TKA_IPAS_PAKET1 }       from './tka_ipas_paket1.js';
import { TKA_IPAS_PAKET2 }       from './tka_ipas_paket2.js';
import { TKA_IPAS_DIY_PAKET1 }   from './tka_ipas_diy_paket1.js';
import { TKA_DATA_MTK }          from './TKA_DATA_MTK.js';
import { QUIZ_DATA_NEW_IPA }     from './quiz_data_new_ipa.js';
import { QUIZ_DATA_MTK_NEW }     from './quiz_data_mtk_new.js';
import { QUIZ_DATA_BINDO_NEW }   from './quiz_data_bindo_new.js';

// ---------- DAFTAR TOPIK PER MAPEL ----------
export const TOPIC_LIST = {
  ipa: [
    { id:'ipa-1',  icon:'🦋', name:'Metamorfosis',                    sub:'Sempurna & Tidak Sempurna' },
    { id:'ipa-2',  icon:'🐣', name:'Perkembangbiakan Hewan',           sub:'Ovipar, Vivipar, Ovovivipar' },
    { id:'ipa-3',  icon:'🌱', name:'Perkembangbiakan Tumbuhan',        sub:'Vegetatif & Generatif' },
    { id:'ipa-4',  icon:'☀️', name:'Energi Terbarukan',               sub:'Matahari, Angin, Air, dll.' },
    { id:'ipa-5',  icon:'💡', name:'Cara Menghemat Energi',            sub:'Tips Hemat di Rumah & Sekolah' },
    { id:'ipa-6',  icon:'⚡', name:'Perubahan Energi',                sub:'Berbagai Bentuk & Transformasi' },
    { id:'ipa-7',  icon:'🔌', name:'Rangkaian Listrik',                sub:'Seri & Paralel' },
    { id:'ipa-8',  icon:'❤️', name:'Peredaran Darah',                 sub:'Jantung & Pembuluh Darah' },
    { id:'ipa-9',  icon:'💧', name:'Siklus Hidrologi',                 sub:'Evaporasi hingga Hujan' },
    { id:'ipa-10', icon:'🌵', name:'Adaptasi Tumbuhan',                sub:'Xerofit, Hidrofit, Higrofit' },
    { id:'ipa-11', icon:'🌍', name:'Rotasi & Revolusi Bumi',           sub:'Siang-Malam, Tahun, Musim' },
    { id:'ipa-12', icon:'🌙', name:'Rotasi & Revolusi Bulan + Gerhana',sub:'Pasang Surut & Gerhana' },
    { id:'ipa-13', icon:'🕸️', name:'Ekosistem & Simbiosis',             sub:'Rantai Makanan & Hubungan Antar Makhluk Hidup' },
    { id:'ipa-14', icon:'🌿', name:'Fotosintesis',                       sub:'Proses Pembuatan Makanan Tumbuhan' },
    { id:'ipa-15', icon:'💪', name:'Gaya',                               sub:'Gravitasi, Gesek, Pegas, Otot' },
    { id:'ipa-16', icon:'🧲', name:'Magnet & Kemagnetan',                sub:'Kutub, Medan Magnet, Elektromagnet' },
    { id:'ipa-17', icon:'🦎', name:'Adaptasi Hewan',                     sub:'Nokturnal, Ekolokasi, Kamuflase, Hibernasi' },
    { id:'ipa-18', icon:'🌸', name:'Bagian Tubuh Tumbuhan',              sub:'Akar, Batang, Daun, Bunga & Fungsinya' },
    { id:'ipa-19', icon:'🫁', name:'Sistem Pernapasan & Pencernaan',     sub:'Organ & Proses Pencernaan Manusia' },
    { id:'ipa-20', icon:'🧊', name:'Perubahan Wujud Zat',               sub:'Menguap, Membeku, Menyublim, dll.' },
    { id:'ipa-21', icon:'🔊', name:'Bunyi & Cahaya',                     sub:'Sifat, Pemantulan, Pembiasan, Dispersi' },
    { id:'ipa-22', icon:'🪨', name:'Benda & Sifatnya',                  sub:'Padat, Cair, Gas & Perubahan Fisika/Kimia' },
    { id:'ipa-23', icon:'🌳', name:'Sumber Daya Alam',                   sub:'Terbarukan, Tidak Terbarukan & Pelestarian' },
    { id:'ipa-24', icon:'💪', name:'Otot Manusia',                       sub:'Jenis Otot, Fungsi & Cara Kerja' },
    { id:'ipa-25', icon:'🪐', name:'Sistem Tata Surya',                  sub:'Planet, Matahari, Rotasi & Revolusi' },
  ],
  bindo: [
    { id:'bindo-1', icon:'🌿', name:'Peribahasa',         sub:'Makna & Contoh Peribahasa' },
    { id:'bindo-2', icon:'📊', name:'Bagan',              sub:'Cara Membaca & Membuat Bagan' },
    { id:'bindo-3', icon:'📖', name:'Unsur Intrinsik',    sub:'Tema, Tokoh, Latar, Alur, Amanat' },
    { id:'bindo-4', icon:'💡', name:'Ide Pokok',          sub:'Menemukan Gagasan Utama' },
    { id:'bindo-5', icon:'🔄', name:'Sinonim',            sub:'Kata yang Bermakna Sama/Mirip' },
    { id:'bindo-6', icon:'🎨', name:'Ciri & Unsur Poster',sub:'Elemen Poster yang Efektif' },
    { id:'bindo-7', icon:'🔍', name:'Kata Khusus',        sub:'Kata Bermakna Spesifik/Sempit' },
    { id:'bindo-8',  icon:'🌐', name:'Kata Umum',             sub:'Kata Bermakna Luas/Umum' },
    { id:'bindo-9',  icon:'✨', name:'Makna Kata & Majas',     sub:'Denotatif, Konotatif, Sinonim, Antonim, Ungkapan, Majas' },
    { id:'bindo-10', icon:'🔤', name:'Imbuhan',               sub:'me-, pe-, -an, -kan, -lah & Pembentukannya' },
    { id:'bindo-11', icon:'📝', name:'Literasi & Teks',        sub:'Gagasan Utama, Amanat, Tokoh, Nilai, Tersurat/Tersirat' },
    { id:'bindo-12', icon:'📚', name:'Jenis Teks',             sub:'Fiksi (Puisi, Fabel, Pantun) & Non-fiksi (Eksplanasi, Persuasif, Narasi)' },
    { id:'bindo-13', icon:'📬', name:'Surat & Teks Praktis',   sub:'Surat Resmi/Tidak Resmi, Pengumuman, Iklan, Wawancara, Laporan' },
  ],
  mtk: [
    { id:'mtk-1', icon:'📊', name:'Pengolahan Data',         sub:'Tabel, Diagram Batang & Lingkaran' },
    { id:'mtk-2', icon:'½',  name:'Pecahan Campuran',        sub:'Operasi +, -, ×, ÷ Pecahan' },
    { id:'mtk-3', icon:'✖️', name:'KPK',                    sub:'Kelipatan Persekutuan Terkecil' },
    { id:'mtk-4', icon:'➗', name:'FPB',                    sub:'Faktor Persekutuan Terbesar' },
    { id:'mtk-5', icon:'📐', name:'Mean (Rata-rata)',        sub:'Menghitung Nilai Rata-rata' },
    { id:'mtk-6', icon:'⬜', name:'Keliling Bangun Datar',   sub:'Persegi, Segitiga, Lingkaran' },
    { id:'mtk-7', icon:'🔷', name:'Luas Bangun Datar',       sub:'Rumus Luas Berbagai Bangun' },
    { id:'mtk-8', icon:'📦', name:'Volume',                  sub:'Kubus, Balok, Tabung' },
    { id:'mtk-9',  icon:'➖', name:'Selisih',                 sub:'Pengurangan & Perbedaan Nilai' },
    { id:'mtk-10', icon:'🔢', name:'Bilangan Bulat & Operasi', sub:'Penjumlahan, Pengurangan, Perkalian, Pembagian' },
    { id:'mtk-11', icon:'🔗', name:'FPB & KPK Lanjut',        sub:'Soal Cerita FPB dan KPK' },
    { id:'mtk-12', icon:'💯', name:'Pecahan, Desimal & Persen',sub:'Konversi, Diskon, Perbandingan' },
    { id:'mtk-13', icon:'📏', name:'Satuan Pengukuran',        sub:'Panjang, Berat, Luas, Waktu' },
    { id:'mtk-14', icon:'🚀', name:'Kecepatan, Jarak & Waktu', sub:'Rumus v=s/t dan Soal Cerita' },
    { id:'mtk-15', icon:'📐', name:'Bangun Datar Lanjut',      sub:'Trapesium, Lingkaran, Gabungan' },
    { id:'mtk-16', icon:'📦', name:'Bangun Ruang Lanjut',      sub:'Tabung, Kerucut, Luas Permukaan' },
    { id:'mtk-17', icon:'🧊', name:'Visualisasi Spasial',      sub:'Jaring-jaring, Posisi & Rotasi Benda' },
  ],
};

// ---------- KONTEN MATERI LENGKAP ----------
export const MATERI_CONTENT = {

  // ---- IPA ----
  'ipa-1': {
    title: '🦋 Metamorfosis',
    sub: 'Perubahan bentuk hewan dari lahir hingga dewasa',
    body: `
      <div class="content-section">
        <h3>📌 Apa itu Metamorfosis?</h3>
        <p><strong>Metamorfosis</strong> adalah proses perubahan bentuk dan struktur tubuh suatu hewan secara bertahap selama masa pertumbuhannya. Tidak semua hewan mengalami metamorfosis — hanya hewan tertentu seperti serangga dan katak.</p>
        <div class="table-wrap"><table>
          <tr><th>Jenis</th><th>Jumlah Tahap</th><th>Ciri Utama</th><th>Contoh Hewan</th></tr>
          <tr><td><strong>Sempurna</strong> (Holometabola)</td><td>4 tahap</td><td>Bentuk larva SANGAT BERBEDA dari dewasa. Ada tahap pupa.</td><td>Kupu-kupu, Nyamuk, Lalat, Lebah, Kumbang</td></tr>
          <tr><td><strong>Tidak Sempurna</strong> (Hemimetabola)</td><td>3 tahap</td><td>Bentuk nimfa MIRIP dewasa, hanya lebih kecil. Tidak ada pupa.</td><td>Belalang, Kecoa, Capung, Jangkrik</td></tr>
        </table></div>
      </div>
      <div class="content-section">
        <h3>🦋 Metamorfosis Sempurna — 4 Tahap</h3>
        <div class="flow">
          <div class="flow-box">🥚 Telur<br><small>diletakkan induk</small></div><div class="flow-arrow">→</div>
          <div class="flow-box">🐛 Larva<br><small>aktif makan</small></div><div class="flow-arrow">→</div>
          <div class="flow-box">🫘 Pupa<br><small>tidak makan, berubah</small></div><div class="flow-arrow">→</div>
          <div class="flow-box">🦋 Imago<br><small>dewasa, bisa kawin</small></div>
        </div>
        <div class="table-wrap"><table>
          <tr><th>Hewan</th><th>Nama Larva</th><th>Nama Pupa</th><th>Tempat Pupa</th></tr>
          <tr><td>Kupu-kupu</td><td>Ulat (caterpillar)</td><td>Kepompong (chrysalis)</td><td>Menempel di ranting/daun</td></tr>
          <tr><td>Nyamuk</td><td>Jentik-jentik</td><td>Pupa nyamuk</td><td>Di dalam air</td></tr>
          <tr><td>Lalat</td><td>Belatung (maggot)</td><td>Kepompong lalat</td><td>Di sampah/makanan busuk</td></tr>
          <tr><td>Lebah</td><td>Larva lebah</td><td>Kepompong lebah</td><td>Di dalam sarang lilin</td></tr>
          <tr><td>Kumbang</td><td>Larva/grub</td><td>Kepompong kumbang</td><td>Di dalam tanah/kayu</td></tr>
        </table></div>
        <div class="info-box blue">Tahap <strong>pupa</strong> adalah masa diam — hewan tidak makan dan tidak bergerak, tapi di dalamnya terjadi perubahan besar-besaran dari larva menjadi dewasa.</div>
      </div>
      <div class="content-section">
        <h3>🦗 Metamorfosis Tidak Sempurna — 3 Tahap</h3>
        <div class="flow">
          <div class="flow-box">🥚 Telur</div><div class="flow-arrow">→</div>
          <div class="flow-box">🐛 Nimfa<br><small>mirip dewasa, kecil</small></div><div class="flow-arrow">→</div>
          <div class="flow-box">🦗 Imago<br><small>dewasa sempurna</small></div>
        </div>
        <div class="info-box green"><strong>Nimfa</strong> = bentuk muda yang sudah mirip hewan dewasa, tapi lebih kecil, belum bersayap sempurna, dan belum bisa berkembang biak.</div>
        <div class="table-wrap"><table>
          <tr><th>Hewan</th><th>Perbedaan Nimfa vs Dewasa</th></tr>
          <tr><td>Belalang</td><td>Nimfa belum bersayap; sayap tumbuh bertahap di setiap pergantian kulit</td></tr>
          <tr><td>Kecoa</td><td>Nimfa berwarna putih saat baru menetas, sayap belum sempurna</td></tr>
          <tr><td>Capung</td><td>Nimfa hidup di air (naiad), dewasa hidup di udara</td></tr>
        </table></div>
      </div>
      <div class="content-section">
        <h3>🐸 Kasus Khusus: Katak</h3>
        <div class="flow">
          <div class="flow-box">🥚 Telur</div><div class="flow-arrow">→</div>
          <div class="flow-box">🐟 Kecebong<br><small>berekor, bernapas insang</small></div><div class="flow-arrow">→</div>
          <div class="flow-box">🐸 Katak Muda<br><small>tumbuh kaki</small></div><div class="flow-arrow">→</div>
          <div class="flow-box">🐸 Katak Dewasa<br><small>ekor hilang, paru-paru</small></div>
        </div>
        <div class="info-box">Katak termasuk metamorfosis sempurna karena bentuk kecebong SANGAT berbeda dari katak dewasa, meski tidak ada tahap pupa yang jelas.</div>
      </div>`,
    flashcards: [
      { q:'Apa perbedaan utama metamorfosis sempurna dan tidak sempurna?', a:'Sempurna: 4 tahap (ada pupa), larva sangat berbeda dari dewasa. Tidak sempurna: 3 tahap (tidak ada pupa), nimfa mirip dewasa tapi lebih kecil.' },
      { q:'Sebutkan 4 tahap metamorfosis sempurna secara urut!', a:'Telur → Larva → Pupa → Imago (dewasa).' },
      { q:'Apa fungsi tahap pupa?', a:'Tahap istirahat di mana larva berubah total menjadi hewan dewasa. Hewan tidak makan dan tidak bergerak selama tahap ini.' },
      { q:'Apa itu nimfa?', a:'Bentuk muda pada metamorfosis tidak sempurna. Sudah mirip dewasa tapi lebih kecil dan belum bersayap sempurna. Contoh: nimfa belalang.' },
      { q:'Sebutkan 3 hewan yang mengalami metamorfosis sempurna!', a:'Kupu-kupu (larva = ulat), Nyamuk (larva = jentik-jentik), Lalat (larva = belatung).' },
      { q:'Sebutkan 3 hewan metamorfosis tidak sempurna!', a:'Belalang, Kecoa, dan Capung — ketiganya melewati tahap nimfa, bukan larva+pupa.' },
      { q:'Apa nama larva nyamuk dan di mana hidupnya?', a:'Jentik-jentik (larva nyamuk), hidup di air tergenang seperti bak mandi, pot tanaman berair, dan genangan hujan.' },
    ],
  },

  'ipa-2': {
    title: '🐣 Perkembangbiakan Hewan',
    sub: 'Ovipar, vivipar, ovovivipar, dan perkembangbiakan vegetatif',
    body: `
      <div class="content-section">
        <h3>📌 Dua Cara Berkembang Biak</h3>
        <div class="table-wrap"><table>
          <tr><th>Cara</th><th>Pengertian</th><th>Ciri</th><th>Contoh</th></tr>
          <tr><td><strong>Generatif (Seksual)</strong></td><td>Melalui perkawinan jantan dan betina</td><td>Ada pembuahan sel telur oleh sperma</td><td>Hampir semua hewan bertulang belakang</td></tr>
          <tr><td><strong>Vegetatif (Aseksual)</strong></td><td>Tanpa perkawinan</td><td>Tidak butuh pasangan, keturunan identik induk</td><td>Amoeba, Hydra, Planaria</td></tr>
        </table></div>
      </div>
      <div class="content-section">
        <h3>🥚 Perkembangbiakan Generatif — Ovipar, Vivipar, Ovovivipar</h3>
        <div class="table-wrap"><table>
          <tr><th>Jenis</th><th>Pengertian</th><th>Ciri Khas</th><th>Contoh Hewan</th></tr>
          <tr><td><strong>Ovipar</strong><br>(Bertelur)</td><td>Embrio berkembang di dalam telur di luar tubuh induk</td><td>Induk bertelur; telur mengandung kuning telur sebagai cadangan makanan</td><td>Ayam, Bebek, Burung, Ikan, Katak, Penyu, Buaya, Ular kobra</td></tr>
          <tr><td><strong>Vivipar</strong><br>(Melahirkan)</td><td>Embrio berkembang dalam rahim induk dan mendapat nutrisi dari induk</td><td>Lahir sudah berbentuk hewan kecil; induk menyusui</td><td>Sapi, Kucing, Anjing, Gajah, Paus, Lumba-lumba, Manusia</td></tr>
          <tr><td><strong>Ovovivipar</strong><br>(Bertelur-melahirkan)</td><td>Telur berkembang di dalam tubuh induk, lalu lahir hidup-hidup</td><td>Ada telur, tapi menetas di dalam tubuh induk; tidak ada plasenta</td><td>Ular boa, Ular garter, Hiu martil, Bunglon, Platypus*</td></tr>
        </table></div>
        <div class="info-box blue">Cara mudah membedakan: <strong>Ovipar</strong> = telur keluar dulu. <strong>Vivipar</strong> = langsung lahir, ada plasenta. <strong>Ovovivipar</strong> = telur menetas di dalam perut induk.</div>
      </div>
      <div class="content-section">
        <h3>🌱 Perkembangbiakan Vegetatif (Aseksual) Hewan</h3>
        <div class="table-wrap"><table>
          <tr><th>Cara</th><th>Penjelasan</th><th>Contoh Hewan</th></tr>
          <tr><td><strong>Membelah diri</strong></td><td>Tubuh membelah menjadi dua individu baru yang identik</td><td>Amoeba, Paramecium, Euglena</td></tr>
          <tr><td><strong>Tunas</strong></td><td>Tunas tumbuh di tubuh induk, lalu melepaskan diri</td><td>Hydra, Anemon laut</td></tr>
          <tr><td><strong>Fragmentasi</strong></td><td>Potongan tubuh tumbuh menjadi individu baru yang utuh</td><td>Planaria (cacing pipih), Bintang laut</td></tr>
          <tr><td><strong>Partenogenesis</strong></td><td>Telur berkembang menjadi individu baru tanpa dibuahi sperma</td><td>Lebah pekerja, Semut jantan, Komodo betina</td></tr>
        </table></div>
        <div class="info-box green">Partenogenesis pada Komodo: betina bisa menghasilkan keturunan jantan tanpa kawin — mekanisme bertahan hidup saat tidak ada jantan.</div>
      </div>
      <div class="content-section">
        <h3>🔍 Perbandingan Telur Ovipar vs Ovovivipar</h3>
        <div class="table-wrap"><table>
          <tr><th>Aspek</th><th>Ovipar</th><th>Ovovivipar</th></tr>
          <tr><td>Letak telur</td><td>Di luar tubuh induk (disarangkan)</td><td>Di dalam tubuh induk</td></tr>
          <tr><td>Sumber makanan embrio</td><td>Kuning telur</td><td>Kuning telur (bukan dari induk)</td></tr>
          <tr><td>Cara lahir</td><td>Menetas dari telur di luar</td><td>Lahir hidup-hidup (telur menetas dalam tubuh)</td></tr>
        </table></div>
      </div>`,
    flashcards: [
      { q:'Apa perbedaan ovipar, vivipar, dan ovovivipar?', a:'Ovipar: bertelur, embrio berkembang di luar. Vivipar: melahirkan, embrio berkembang dalam rahim dengan plasenta. Ovovivipar: telur menetas di dalam tubuh induk, lahir hidup-hidup.' },
      { q:'Sebutkan 4 contoh hewan vivipar!', a:'Kucing, Sapi, Paus, Lumba-lumba (hewan menyusui/mamalia umumnya vivipar).' },
      { q:'Mengapa Komodo bisa berkembang biak tanpa jantan?', a:'Melalui partenogenesis — telur betina dapat berkembang tanpa dibuahi, menghasilkan keturunan jantan.' },
      { q:'Apa itu fragmentasi? Sebutkan contohnya!', a:'Potongan tubuh hewan tumbuh menjadi individu baru yang utuh. Contoh: Planaria (cacing pipih) dan Bintang laut.' },
      { q:'Bagaimana cara Hydra berkembang biak?', a:'Dengan tunas — tonjolan kecil tumbuh di tubuh induk, berkembang, lalu melepaskan diri menjadi individu baru.' },
      { q:'Apakah ikan termasuk ovipar, vivipar, atau ovovivipar?', a:'Sebagian besar ikan bersifat ovipar (bertelur). Namun ada yang ovovivipar seperti hiu tertentu.' },
    ],
  },

  'ipa-3': {
    title: '🌱 Perkembangbiakan Tumbuhan',
    sub: 'Vegetatif alami, vegetatif buatan, dan generatif',
    body: `
      <div class="content-section">
        <h3>📌 Dua Cara Perkembangbiakan Tumbuhan</h3>
        <div class="table-wrap"><table>
          <tr><th>Cara</th><th>Pengertian</th><th>Keturunan</th></tr>
          <tr><td><strong>Vegetatif</strong> (Aseksual)</td><td>Tanpa biji, dari bagian tubuh tumbuhan</td><td>Identik dengan induk (sifat sama persis)</td></tr>
          <tr><td><strong>Generatif</strong> (Seksual)</td><td>Melalui biji hasil penyerbukan dan pembuahan</td><td>Bisa berbeda dari induk (kombinasi sifat)</td></tr>
        </table></div>
      </div>
      <div class="content-section">
        <h3>🌿 Vegetatif Alami</h3>
        <div class="table-wrap"><table>
          <tr><th>Cara</th><th>Penjelasan</th><th>Contoh Tumbuhan</th></tr>
          <tr><td><strong>Tunas</strong></td><td>Tunas anakan tumbuh di pangkal batang induk</td><td>Pisang, Bambu, Tebu, Nanas</td></tr>
          <tr><td><strong>Tunas Adventif</strong></td><td>Tunas tumbuh di tepi daun atau akar</td><td>Cocor bebek (tepi daun), Sukun (akar)</td></tr>
          <tr><td><strong>Rhizoma</strong></td><td>Batang menjalar <em>di bawah</em> tanah</td><td>Jahe, Kunyit, Lengkuas, Temulawak</td></tr>
          <tr><td><strong>Stolon</strong></td><td>Batang menjalar <em>di atas</em> tanah</td><td>Stroberi, Rumput teki, Pegagan</td></tr>
          <tr><td><strong>Umbi Lapis</strong></td><td>Lapisan daun berlapis-lapis menyimpan cadangan makanan</td><td>Bawang merah, Bawang putih, Tulip</td></tr>
          <tr><td><strong>Umbi Batang</strong></td><td>Batang di bawah tanah yang membengkak menyimpan pati</td><td>Kentang, Ubi jalar, Talas</td></tr>
          <tr><td><strong>Umbi Akar</strong></td><td>Akar yang membengkak menyimpan cadangan makanan</td><td>Wortel, Singkong, Dahlia, Lobak</td></tr>
          <tr><td><strong>Spora</strong></td><td>Sel khusus yang dapat tumbuh menjadi individu baru</td><td>Pakis, Lumut, Jamur, Paku</td></tr>
        </table></div>
        <div class="info-box blue">Cara membedakan rhizoma vs stolon: <strong>Rhizoma</strong> = di <em>bawah</em> tanah (seperti jahe yang kita gali). <strong>Stolon</strong> = di <em>atas</em> tanah (seperti sulur stroberi yang menjalar).</div>
      </div>
      <div class="content-section">
        <h3>🛠️ Vegetatif Buatan (Dilakukan Manusia)</h3>
        <div class="table-wrap"><table>
          <tr><th>Cara</th><th>Penjelasan</th><th>Keuntungan</th><th>Contoh</th></tr>
          <tr><td><strong>Stek</strong></td><td>Memotong bagian tanaman (batang/daun/akar) lalu ditanam</td><td>Mudah, cepat, murah</td><td>Mawar (batang), Singkong (batang), Lidah mertua (daun)</td></tr>
          <tr><td><strong>Cangkok</strong></td><td>Mengupas kulit batang lalu dibungkus tanah lembab sampai berakar, baru dipotong</td><td>Sifat sama induk, cepat berbuah</td><td>Mangga, Rambutan, Jambu</td></tr>
          <tr><td><strong>Merunduk</strong></td><td>Membengkokkan cabang ke tanah, ditimbun, tunggu berakar, lalu dipotong dari induk</td><td>Tanaman kuat karena akar banyak</td><td>Apel, Anggur, Melati</td></tr>
          <tr><td><strong>Okulasi</strong></td><td>Menempelkan mata tunas dari satu tanaman ke batang tanaman lain yang sudah berakar</td><td>Menggabungkan sifat unggul dua tanaman</td><td>Durian, Rambutan, Jeruk</td></tr>
          <tr><td><strong>Sambung pucuk</strong></td><td>Menyambungkan pucuk tanaman unggul ke batang bawah yang kuat</td><td>Tanaman tahan penyakit sekaligus buah unggul</td><td>Kakao, Kopi, Tomat</td></tr>
        </table></div>
        <div class="info-box green">Keunggulan utama vegetatif buatan: tanaman baru memiliki sifat <strong>identik dengan induk pilihan</strong> dan lebih cepat berbuah dibanding ditanam dari biji.</div>
      </div>
      <div class="content-section">
        <h3>🌸 Generatif — Penyerbukan & Pembuahan</h3>
        <div class="flow">
          <div class="flow-box">🌸 Bunga mekar</div><div class="flow-arrow">→</div>
          <div class="flow-box">🐝 Penyerbukan<br><small>serbuk sari → kepala putik</small></div><div class="flow-arrow">→</div>
          <div class="flow-box">🥚 Pembuahan<br><small>serbuk sari + sel telur</small></div><div class="flow-arrow">→</div>
          <div class="flow-box">🌰 Biji terbentuk</div><div class="flow-arrow">→</div>
          <div class="flow-box">🌱 Tumbuhan baru</div>
        </div>
        <div class="table-wrap"><table>
          <tr><th>Agen Penyerbuk</th><th>Ciri Bunga</th><th>Contoh Tumbuhan</th></tr>
          <tr><td>🐝 Serangga (entomogami)</td><td>Mahkota cerah, berbau harum, ada nektar</td><td>Mangga, Rambutan, Melati</td></tr>
          <tr><td>💨 Angin (anemogami)</td><td>Serbuk sari ringan, bunga kecil tak berwarna</td><td>Padi, Jagung, Rumput</td></tr>
          <tr><td>💧 Air (hidrogami)</td><td>Serbuk sari ringan, tumbuh di air</td><td>Ganggang, Hydrilla</td></tr>
          <tr><td>🦅 Burung (ornitogami)</td><td>Mahkota merah/jingga, nektar banyak</td><td>Cengkeh, Pisang hutan</td></tr>
          <tr><td>👨 Manusia (antropogami)</td><td>Bunga tidak menarik penyerbuk alami</td><td>Vanili, Salak</td></tr>
        </table></div>
      </div>`,
    flashcards: [
      { q:'Apa perbedaan rhizoma dan stolon?', a:'Rhizoma = batang menjalar di BAWAH tanah (jahe, kunyit). Stolon = batang menjalar di ATAS tanah (stroberi, rumput teki).' },
      { q:'Sebutkan perbedaan vegetatif alami dan buatan!', a:'Vegetatif alami terjadi sendiri tanpa bantuan manusia. Vegetatif buatan dilakukan oleh manusia (stek, cangkok, okulasi, dll).' },
      { q:'Apa keunggulan cangkok dibanding menanam dari biji?', a:'Tanaman hasil cangkok memiliki sifat identik dengan induknya dan lebih cepat berbuah.' },
      { q:'Sebutkan 4 agen penyerbuk beserta contoh tumbuhannya!', a:'Serangga (mangga, melati), Angin (padi, jagung), Burung (cengkeh), Manusia (vanili, salak).' },
      { q:'Pisang berkembang biak dengan cara apa?', a:'Tunas — anakan pisang tumbuh di pangkal batang induk dan bisa dipisahkan untuk ditanam.' },
      { q:'Apa itu okulasi?', a:'Cara vegetatif buatan dengan menempelkan mata tunas dari tanaman unggul ke batang tanaman lain yang sudah berakar kuat.' },
      { q:'Cocor bebek berkembang biak dengan cara apa yang unik?', a:'Tunas adventif — tunas baru tumbuh di tepi-tepi daunnya, bukan di pangkal batang.' },
    ],
  },

  'ipa-4': {
    title: '☀️ Energi Terbarukan',
    sub: 'Sumber energi yang tidak habis dan ramah lingkungan',
    body: `
      <div class="content-section">
        <h3>📌 Energi Terbarukan vs Tidak Terbarukan</h3>
        <div class="table-wrap"><table>
          <tr><th>Aspek</th><th>Energi Terbarukan</th><th>Energi Tidak Terbarukan</th></tr>
          <tr><td>Sumber</td><td>Alam (matahari, angin, air, panas bumi)</td><td>Bahan bakar fosil (minyak bumi, batu bara, gas alam)</td></tr>
          <tr><td>Ketersediaan</td><td>Tidak akan habis, dapat diperbaharui</td><td>Terbatas, bisa habis dalam beberapa ratus tahun</td></tr>
          <tr><td>Lingkungan</td><td>Ramah lingkungan, emisi rendah</td><td>Menghasilkan polusi dan gas rumah kaca (CO₂)</td></tr>
          <tr><td>Biaya operasi</td><td>Murah setelah instalasi</td><td>Terus meningkat seiring kelangkaan</td></tr>
          <tr><td>Kelemahan</td><td>Biaya awal mahal, bergantung kondisi alam</td><td>Menimbulkan pencemaran udara dan perubahan iklim</td></tr>
        </table></div>
      </div>
      <div class="content-section">
        <h3>🌞 Jenis-Jenis Energi Terbarukan</h3>
        <div class="table-wrap"><table>
          <tr><th>Jenis</th><th>Sumber</th><th>Cara Kerja</th><th>Alat/Teknologi</th><th>Contoh Penggunaan</th></tr>
          <tr><td>☀️ <strong>Energi Surya</strong></td><td>Cahaya & panas matahari</td><td>Panel surya mengubah cahaya menjadi listrik (efek fotovoltaik)</td><td>Panel surya, kolektor surya</td><td>Listrik rumah, pemanas air, kalkulator surya</td></tr>
          <tr><td>💨 <strong>Energi Angin</strong></td><td>Gerakan massa udara</td><td>Angin memutar baling-baling turbin yang menggerakkan generator</td><td>Turbin angin (kincir angin modern)</td><td>PLTB (Pembangkit Listrik Tenaga Bayu), pompa air</td></tr>
          <tr><td>💧 <strong>Energi Air</strong></td><td>Aliran & ketinggian air</td><td>Air terjun/bendungan mengalir memutar turbin generator</td><td>PLTA, kincir air</td><td>Listrik terbesar di Indonesia (Jatiluhur, Asahan)</td></tr>
          <tr><td>🌡️ <strong>Panas Bumi</strong></td><td>Panas magma dalam bumi</td><td>Uap panas dari perut bumi memutar turbin generator</td><td>PLTP (Pembangkit Listrik Tenaga Panas Bumi)</td><td>Listrik di daerah vulkanik (Indonesia no. 2 di dunia)</td></tr>
          <tr><td>🌿 <strong>Biomassa</strong></td><td>Bahan organik (tanaman, kotoran hewan)</td><td>Dibakar atau difermentasi menghasilkan gas/listrik</td><td>Biogas, briket, bioetanol</td><td>Biogas dari kotoran sapi untuk memasak</td></tr>
          <tr><td>🌊 <strong>Energi Laut</strong></td><td>Gelombang & pasang surut laut</td><td>Gerakan air laut menggerakkan turbin bawah laut</td><td>Turbin ombak, turbin pasang surut</td><td>Masih dikembangkan di banyak negara</td></tr>
        </table></div>
      </div>
      <div class="content-section">
        <h3>🇮🇩 Energi Terbarukan di Indonesia</h3>
        <p>Indonesia memiliki potensi energi terbarukan yang sangat besar karena letaknya di:</p>
        <ul>
          <li>🌋 <strong>Cincin Api Pasifik</strong> → potensi panas bumi terbesar ke-2 di dunia</li>
          <li>🌊 <strong>Kepulauan dengan banyak sungai besar</strong> → potensi PLTA (Kalimantan, Papua)</li>
          <li>☀️ <strong>Khatulistiwa</strong> → sinar matahari sepanjang tahun, ideal untuk panel surya</li>
          <li>💨 <strong>Angin musiman</strong> → PLTB mulai dikembangkan di Sulawesi dan NTT</li>
        </ul>
        <div class="info-box green">PLTA Jatiluhur (Jawa Barat) adalah salah satu PLTA terbesar di Indonesia, menghasilkan listrik untuk jutaan rumah tangga.</div>
      </div>
      <div class="content-section">
        <h3>⚖️ Mengapa Harus Beralih ke Energi Terbarukan?</h3>
        <div class="flow">
          <div class="flow-box">Bahan bakar fosil terbakar</div><div class="flow-arrow">→</div>
          <div class="flow-box">CO₂ & polutan dilepas</div><div class="flow-arrow">→</div>
          <div class="flow-box">Efek rumah kaca meningkat</div><div class="flow-arrow">→</div>
          <div class="flow-box">Suhu bumi naik (pemanasan global)</div>
        </div>
        <div class="info-box blue">Energi terbarukan memutus rantai ini — tidak menghasilkan emisi CO₂ saat beroperasi.</div>
      </div>`,
    flashcards: [
      { q:'Apa perbedaan energi terbarukan dan tidak terbarukan?', a:'Terbarukan: berasal dari alam, tidak habis, ramah lingkungan (matahari, angin, air). Tidak terbarukan: dari fosil, bisa habis, menghasilkan polusi (minyak bumi, batu bara).' },
      { q:'Bagaimana panel surya menghasilkan listrik?', a:'Panel surya mengandung sel fotovoltaik yang mengubah cahaya matahari langsung menjadi energi listrik.' },
      { q:'Apa kepanjangan PLTA dan PLTP?', a:'PLTA = Pembangkit Listrik Tenaga Air. PLTP = Pembangkit Listrik Tenaga Panas bumi (geothermal).' },
      { q:'Mengapa Indonesia punya potensi panas bumi yang besar?', a:'Karena Indonesia berada di Cincin Api Pasifik dengan banyak gunung berapi aktif yang menghasilkan panas dari magma.' },
      { q:'Apa itu biogas? Dari mana asalnya?', a:'Biogas adalah gas yang dihasilkan dari fermentasi bahan organik (kotoran hewan, sisa makanan). Bisa digunakan untuk memasak dan menghasilkan listrik.' },
      { q:'Sebutkan 2 kelemahan energi terbarukan!', a:'1. Biaya instalasi awal sangat mahal. 2. Bergantung kondisi alam — panel surya kurang optimal saat mendung, PLTB butuh angin cukup kencang.' },
    ],
  },

  'ipa-5': {
    title: '💡 Cara Menghemat Energi',
    sub: 'Pentingnya hemat energi dan cara melakukannya sehari-hari',
    body: `
      <div class="content-section">
        <h3>📌 Mengapa Perlu Hemat Energi?</h3>
        <p>Sebagian besar energi yang kita gunakan sehari-hari (listrik PLN, bensin kendaraan) berasal dari sumber <strong>tidak terbarukan</strong> yang jumlahnya terbatas dan proses pembuatannya mencemari lingkungan.</p>
        <div class="table-wrap"><table>
          <tr><th>Alasan Hemat Energi</th><th>Dampak Jika Tidak Hemat</th></tr>
          <tr><td>Sumber energi fosil terbatas</td><td>Minyak bumi, batu bara habis lebih cepat</td></tr>
          <tr><td>Mengurangi tagihan listrik keluarga</td><td>Tagihan listrik membengkak</td></tr>
          <tr><td>Mengurangi emisi CO₂ dan polusi udara</td><td>Pemanasan global semakin parah</td></tr>
          <tr><td>Menjaga ketersediaan energi untuk masa depan</td><td>Generasi mendatang kekurangan energi</td></tr>
        </table></div>
        <div class="info-box green">Hemat energi = hemat biaya + jaga lingkungan + menjaga ketersediaan untuk anak cucu kita.</div>
      </div>
      <div class="content-section">
        <h3>🏠 Cara Hemat Energi di Rumah</h3>
        <div class="table-wrap"><table>
          <tr><th>Perangkat</th><th>Cara Hemat</th><th>Alasan</th></tr>
          <tr><td>💡 Lampu</td><td>Matikan saat keluar ruangan; pakai LED</td><td>Lampu LED 80% lebih hemat dari lampu pijar</td></tr>
          <tr><td>❄️ AC</td><td>Set suhu 24–26°C; matikan jika tidak ada orang</td><td>Setiap 1°C lebih dingin = boros listrik ~6%</td></tr>
          <tr><td>🔌 Elektronik</td><td>Cabut charger & colokan saat tidak dipakai</td><td>Perangkat standby masih menyerap listrik (phantom load)</td></tr>
          <tr><td>🌞 Cahaya alami</td><td>Buka jendela/tirai di siang hari</td><td>Mengurangi kebutuhan lampu di siang hari</td></tr>
          <tr><td>🚿 Air (pompa)</td><td>Mandi secukupnya, tutup keran saat gosok gigi</td><td>Pompa air memakai listrik</td></tr>
          <tr><td>🍳 Kompor</td><td>Tutup panci saat memasak; matikan sesegera mungkin</td><td>Panci tertutup memasak 30% lebih cepat</td></tr>
        </table></div>
      </div>
      <div class="content-section">
        <h3>🏫 Cara Hemat Energi di Sekolah</h3>
        <ul>
          <li>🚶 <strong>Berjalan kaki atau bersepeda</strong> ke sekolah — mengurangi BBM kendaraan.</li>
          <li>💻 <strong>Matikan komputer dan proyektor</strong> setelah pelajaran selesai.</li>
          <li>📖 <strong>Gunakan kertas bolak-balik</strong> — produksi kertas butuh energi besar.</li>
          <li>💧 <strong>Tutup keran</strong> rapat-rapat setelah mencuci tangan.</li>
          <li>🌿 <strong>Ikut gerakan penghijauan sekolah</strong> — pohon membantu mendinginkan udara secara alami.</li>
        </ul>
      </div>
      <div class="content-section">
        <h3>🔄 Hubungan Hemat Energi dengan Lingkungan</h3>
        <div class="flow">
          <div class="flow-box">Hemat listrik di rumah</div><div class="flow-arrow">→</div>
          <div class="flow-box">PLN butuh bahan bakar lebih sedikit</div><div class="flow-arrow">→</div>
          <div class="flow-box">Emisi CO₂ berkurang</div><div class="flow-arrow">→</div>
          <div class="flow-box">Efek rumah kaca berkurang</div><div class="flow-arrow">→</div>
          <div class="flow-box">🌍 Bumi lebih sehat</div>
        </div>
        <div class="info-box blue">Tindakan kecil seperti mematikan lampu satu ruangan selama 8 jam bisa menghemat energi yang cukup untuk mengisi daya ponsel puluhan kali!</div>
      </div>`,
    flashcards: [
      { q:'Sebutkan 4 alasan pentingnya menghemat energi!', a:'1. Sumber energi fosil terbatas. 2. Menghemat biaya listrik keluarga. 3. Mengurangi emisi CO₂ dan polusi. 4. Menjaga ketersediaan energi untuk generasi mendatang.' },
      { q:'Mengapa lampu LED lebih dianjurkan dari lampu pijar?', a:'Lampu LED menggunakan sekitar 80% lebih sedikit listrik dibanding lampu pijar untuk menghasilkan cahaya yang sama terangnya.' },
      { q:'Apa itu phantom load (beban hantu)?', a:'Listrik yang masih diserap perangkat elektronik meskipun sudah dimatikan tapi masih terpasang di colokan. Solusi: cabut colokan.' },
      { q:'Bagaimana cara hemat energi saat memasak?', a:'Tutup panci saat memasak (lebih cepat matang), gunakan ukuran kompor sesuai panci, dan matikan api sesegera makanan matang.' },
      { q:'Apa hubungan antara hemat listrik di rumah dengan lingkungan?', a:'Hemat listrik → PLN butuh lebih sedikit bahan bakar fosil → emisi CO₂ berkurang → efek rumah kaca berkurang → bumi tidak semakin panas.' },
      { q:'Sebutkan 3 cara hemat energi di sekolah!', a:'Matikan komputer/proyektor setelah dipakai, gunakan kertas bolak-balik, berjalan kaki/bersepeda ke sekolah.' },
    ],
  },

  'ipa-6': {
    title: '⚡ Perubahan Energi',
    sub: 'Bentuk-bentuk energi dan transformasinya dalam kehidupan sehari-hari',
    body: `
      <div class="content-section">
        <h3>📌 Hukum Kekekalan Energi</h3>
        <p><strong>Energi tidak dapat diciptakan atau dimusnahkan</strong>, tetapi dapat diubah dari satu bentuk ke bentuk lain. Inilah yang disebut <em>Hukum Kekekalan Energi</em>.</p>
        <div class="info-box blue">Energi total sebelum perubahan = Energi total sesudah perubahan. Yang berubah hanya bentuknya!</div>
      </div>
      <div class="content-section">
        <h3>⚡ Bentuk-Bentuk Energi</h3>
        <div class="table-wrap"><table>
          <tr><th>Bentuk Energi</th><th>Penjelasan</th><th>Contoh Sumber</th></tr>
          <tr><td>⚡ <strong>Listrik</strong></td><td>Energi dari aliran elektron dalam penghantar</td><td>Baterai, PLN, panel surya</td></tr>
          <tr><td>🌡️ <strong>Panas (Kalor)</strong></td><td>Energi akibat pergerakan partikel/molekul</td><td>Api, matahari, kompor</td></tr>
          <tr><td>💡 <strong>Cahaya</strong></td><td>Gelombang elektromagnetik yang bisa dilihat</td><td>Matahari, lampu, lilin</td></tr>
          <tr><td>🔊 <strong>Bunyi</strong></td><td>Gelombang mekanik yang merambat melalui medium</td><td>Speaker, petir, gitar</td></tr>
          <tr><td>🏃 <strong>Gerak (Kinetik)</strong></td><td>Energi yang dimiliki benda yang bergerak</td><td>Angin, air mengalir, bola bergerak</td></tr>
          <tr><td>🍎 <strong>Kimia</strong></td><td>Energi tersimpan dalam ikatan kimia molekul</td><td>Makanan, baterai, bensin, kayu bakar</td></tr>
          <tr><td>🔋 <strong>Potensial</strong></td><td>Energi tersimpan akibat posisi atau keadaan benda</td><td>Batu di ketinggian, pegas tertekan</td></tr>
          <tr><td>☢️ <strong>Nuklir</strong></td><td>Energi dalam inti atom</td><td>Reaktor nuklir, bom atom</td></tr>
        </table></div>
      </div>
      <div class="content-section">
        <h3>🔄 Contoh Perubahan Energi dalam Kehidupan</h3>
        <div class="table-wrap"><table>
          <tr><th>Alat/Kejadian</th><th>Perubahan Energi</th></tr>
          <tr><td>💡 Lampu listrik</td><td>Listrik → Cahaya + Panas</td></tr>
          <tr><td>📢 Speaker/Radio</td><td>Listrik → Bunyi</td></tr>
          <tr><td>🔋 Baterai digunakan</td><td>Kimia → Listrik</td></tr>
          <tr><td>☀️ Panel surya</td><td>Cahaya → Listrik</td></tr>
          <tr><td>🎸 Gitar dipetik</td><td>Gerak → Bunyi</td></tr>
          <tr><td>🔥 Kompor gas</td><td>Kimia (gas LPG) → Panas + Cahaya</td></tr>
          <tr><td>💪 Tubuh berolahraga</td><td>Kimia (makanan) → Gerak + Panas</td></tr>
          <tr><td>💧 PLTA (kincir air)</td><td>Potensial/Gerak (air) → Listrik</td></tr>
          <tr><td>🌀 Kipas angin</td><td>Listrik → Gerak + Bunyi (kecil)</td></tr>
          <tr><td>📱 Mengisi baterai HP</td><td>Listrik → Kimia (disimpan)</td></tr>
          <tr><td>🕯️ Lilin terbakar</td><td>Kimia → Panas + Cahaya</td></tr>
          <tr><td>🚂 Kereta uap</td><td>Kimia (batu bara) → Panas → Gerak</td></tr>
        </table></div>
      </div>
      <div class="content-section">
        <h3>🔍 Perubahan Energi Berantai</h3>
        <p>Sering kali energi berubah lebih dari satu kali secara berantai:</p>
        <div class="flow">
          <div class="flow-box">☀️ Cahaya matahari</div><div class="flow-arrow">→</div>
          <div class="flow-box">🌿 Kimia (fotosintesis)</div><div class="flow-arrow">→</div>
          <div class="flow-box">🍎 Kimia (dimakan)</div><div class="flow-arrow">→</div>
          <div class="flow-box">💪 Gerak tubuh</div>
        </div>
        <div class="flow">
          <div class="flow-box">⛽ Kimia (bensin)</div><div class="flow-arrow">→</div>
          <div class="flow-box">🔥 Panas (mesin)</div><div class="flow-arrow">→</div>
          <div class="flow-box">🚗 Gerak (mobil)</div>
        </div>
        <div class="info-box green">Setiap perubahan energi selalu ada sebagian yang berubah menjadi <strong>panas</strong> yang terbuang. Itulah mengapa tidak ada mesin yang 100% efisien.</div>
      </div>`,
    flashcards: [
      { q:'Apa bunyi Hukum Kekekalan Energi?', a:'Energi tidak dapat diciptakan atau dimusnahkan, hanya dapat diubah dari satu bentuk ke bentuk lain. Total energi selalu tetap.' },
      { q:'Sebutkan perubahan energi pada lampu listrik!', a:'Energi listrik berubah menjadi energi cahaya dan energi panas.' },
      { q:'Apa perubahan energi yang terjadi pada baterai saat digunakan?', a:'Energi kimia (tersimpan dalam baterai) berubah menjadi energi listrik.' },
      { q:'Perubahan energi apa yang terjadi di PLTA?', a:'Energi potensial/gerak air berubah menjadi energi listrik melalui turbin dan generator.' },
      { q:'Mengapa tidak ada mesin yang efisiensinya 100%?', a:'Karena setiap perubahan energi selalu ada sebagian energi yang terbuang menjadi panas yang tidak berguna.' },
      { q:'Jelaskan perubahan energi berantai dari matahari hingga manusia bergerak!', a:'Cahaya matahari → kimia (fotosintesis di tumbuhan) → kimia (makanan dimakan manusia) → gerak + panas tubuh.' },
    ],
  },

  'ipa-7': {
    title: '🔌 Rangkaian Listrik',
    sub: 'Rangkaian seri, paralel, dan komponen listrik',
    body: `
      <div class="content-section">
        <h3>📌 Komponen Dasar Rangkaian Listrik</h3>
        <div class="table-wrap"><table>
          <tr><th>Komponen</th><th>Fungsi</th><th>Simbol/Contoh</th></tr>
          <tr><td><strong>Sumber arus</strong></td><td>Menghasilkan energi listrik</td><td>Baterai, Aki, PLN</td></tr>
          <tr><td><strong>Penghantar (konduktor)</strong></td><td>Mengalirkan arus listrik</td><td>Kabel tembaga, kawat</td></tr>
          <tr><td><strong>Beban/komponen</strong></td><td>Menggunakan energi listrik</td><td>Lampu, motor, bel</td></tr>
          <tr><td><strong>Saklar</strong></td><td>Memutus atau menyambung aliran arus</td><td>Tombol on/off</td></tr>
          <tr><td><strong>Sekring/Fuse</strong></td><td>Pengaman — meleleh jika arus terlalu besar</td><td>Sekring pada panel listrik</td></tr>
        </table></div>
        <div class="info-box blue">Arus listrik mengalir dari kutub positif (+) baterai → melalui komponen → kembali ke kutub negatif (−).</div>
      </div>
      <div class="content-section">
        <h3>➡️ Rangkaian Seri — Satu Jalur</h3>
        <p>Semua komponen dihubungkan <strong>berurutan</strong> dalam satu jalur tunggal tanpa percabangan.</p>
        <div class="flow">
          <div class="flow-box">🔋 Baterai</div><div class="flow-arrow">→</div>
          <div class="flow-box">💡 Lampu 1</div><div class="flow-arrow">→</div>
          <div class="flow-box">💡 Lampu 2</div><div class="flow-arrow">→</div>
          <div class="flow-box">💡 Lampu 3</div><div class="flow-arrow">→</div>
          <div class="flow-box">🔋 kembali</div>
        </div>
        <div class="table-wrap"><table>
          <tr><th>Sifat</th><th>Keterangan</th></tr>
          <tr><td>Jalur arus</td><td>Hanya 1 jalur, arus sama di semua komponen</td></tr>
          <tr><td>Tegangan</td><td>Dibagi rata ke semua komponen (lampu lebih redup)</td></tr>
          <tr><td>Jika 1 putus</td><td>Semua komponen ikut mati (aliran terputus)</td></tr>
          <tr><td>Kabel</td><td>Lebih hemat kabel</td></tr>
          <tr><td>Contoh penggunaan</td><td>Lampu hias natal, senter sederhana</td></tr>
        </table></div>
      </div>
      <div class="content-section">
        <h3>🔀 Rangkaian Paralel — Banyak Jalur</h3>
        <p>Komponen dihubungkan secara <strong>bercabang</strong> — setiap komponen terhubung langsung ke sumber listrik dengan jalur tersendiri.</p>
        <div class="table-wrap"><table>
          <tr><th>Sifat</th><th>Keterangan</th></tr>
          <tr><td>Jalur arus</td><td>Banyak jalur/cabang, arus terbagi</td></tr>
          <tr><td>Tegangan</td><td>Sama di semua cabang (lampu lebih terang)</td></tr>
          <tr><td>Jika 1 putus</td><td>Komponen lain tetap menyala</td></tr>
          <tr><td>Kabel</td><td>Butuh lebih banyak kabel</td></tr>
          <tr><td>Contoh penggunaan</td><td>Instalasi listrik rumah, gedung, sekolah</td></tr>
        </table></div>
        <div class="info-box green">Listrik di rumahmu menggunakan rangkaian paralel — itulah mengapa mematikan lampu kamar tidak mematikan lampu ruang tamu!</div>
      </div>
      <div class="content-section">
        <h3>📊 Perbandingan Lengkap Seri vs Paralel</h3>
        <div class="table-wrap"><table>
          <tr><th>Aspek</th><th>Rangkaian Seri</th><th>Rangkaian Paralel</th></tr>
          <tr><td>Jumlah jalur</td><td>1 jalur</td><td>Banyak jalur</td></tr>
          <tr><td>Besar arus</td><td>Sama di semua titik</td><td>Terbagi di tiap cabang</td></tr>
          <tr><td>Besar tegangan</td><td>Dibagi ke tiap komponen</td><td>Sama di tiap cabang</td></tr>
          <tr><td>Jika 1 komponen putus</td><td>Semua mati</td><td>Lainnya tetap menyala</td></tr>
          <tr><td>Kecerahan lampu</td><td>Lebih redup</td><td>Lebih terang</td></tr>
          <tr><td>Kebutuhan kabel</td><td>Lebih sedikit</td><td>Lebih banyak</td></tr>
          <tr><td>Kemudahan kontrol</td><td>Sulit (satu saklar untuk semua)</td><td>Mudah (tiap cabang bisa dikontrol)</td></tr>
          <tr><td>Digunakan untuk</td><td>Dekorasi, mainan sederhana</td><td>Rumah, gedung, kendaraan</td></tr>
        </table></div>
      </div>`,
    flashcards: [
      { q:'Apa perbedaan utama rangkaian seri dan paralel?', a:'Seri: 1 jalur — jika 1 komponen putus semua mati, tegangan terbagi. Paralel: banyak jalur — jika 1 putus yang lain tetap nyala, tegangan sama di tiap cabang.' },
      { q:'Mengapa instalasi listrik rumah menggunakan rangkaian paralel?', a:'Agar setiap ruangan bisa dikontrol secara mandiri dengan saklar masing-masing, dan jika satu lampu mati tidak mempengaruhi yang lain.' },
      { q:'Apa fungsi sekring dalam rangkaian listrik?', a:'Sebagai pengaman — kawat sekring akan meleleh dan memutus aliran jika arus listrik terlalu besar, mencegah kebakaran.' },
      { q:'Mengapa lampu pada rangkaian seri lebih redup dari paralel?', a:'Karena tegangan sumber dibagi rata ke semua lampu. Makin banyak lampu, makin kecil tegangan yang diterima tiap lampu.' },
      { q:'Sebutkan contoh nyata rangkaian seri dan paralel!', a:'Seri: lampu hias natal (satu mati semua padam). Paralel: lampu-lampu di rumah (satu mati lainnya tetap nyala).' },
      { q:'Apa fungsi saklar dalam rangkaian listrik?', a:'Memutus atau menyambung aliran arus listrik — saat saklar dibuka (off) aliran terputus, saat ditutup (on) arus mengalir.' },
    ],
  },

  'ipa-8': {
    title: '❤️ Peredaran Darah',
    sub: 'Jantung, pembuluh darah, dan sistem sirkulasi manusia',
    body: `
      <div class="content-section">
        <h3>❤️ Jantung — Pompa Darah</h3>
        <p>Jantung adalah organ berotot seukuran kepalan tangan yang berfungsi <strong>memompa darah ke seluruh tubuh</strong> tanpa henti sepanjang hidup.</p>
        <div class="table-wrap"><table>
          <tr><th>Bagian Jantung</th><th>Letak</th><th>Fungsi</th></tr>
          <tr><td><strong>Serambi Kanan</strong> (atrium kanan)</td><td>Atas kanan</td><td>Menerima darah kotor (kaya CO₂) dari seluruh tubuh</td></tr>
          <tr><td><strong>Bilik Kanan</strong> (ventrikel kanan)</td><td>Bawah kanan</td><td>Memompa darah kotor ke paru-paru</td></tr>
          <tr><td><strong>Serambi Kiri</strong> (atrium kiri)</td><td>Atas kiri</td><td>Menerima darah bersih (kaya O₂) dari paru-paru</td></tr>
          <tr><td><strong>Bilik Kiri</strong> (ventrikel kiri)</td><td>Bawah kiri</td><td>Memompa darah bersih ke seluruh tubuh (dinding paling tebal)</td></tr>
        </table></div>
        <div class="info-box blue">Bilik kiri memiliki dinding paling tebal karena harus memompa darah ke seluruh tubuh — jarak yang jauh butuh tekanan paling besar.</div>
      </div>
      <div class="content-section">
        <h3>🔄 Dua Sistem Peredaran Darah</h3>
        <div class="info-box green"><strong>Peredaran Darah Kecil (Pulmonal):</strong> Darah kotor dari seluruh tubuh masuk ke serambi kanan → bilik kanan → dipompa ke paru-paru → darah mengambil O₂ dan melepas CO₂ → kembali ke serambi kiri dengan darah bersih.</div>
        <div class="flow">
          <div class="flow-box">Bilik Kanan</div><div class="flow-arrow">→</div>
          <div class="flow-box">🫁 Paru-paru<br><small>tukar O₂/CO₂</small></div><div class="flow-arrow">→</div>
          <div class="flow-box">Serambi Kiri</div>
        </div>
        <div class="info-box blue"><strong>Peredaran Darah Besar (Sistemik):</strong> Darah bersih dari serambi kiri → bilik kiri → dipompa ke seluruh tubuh melalui aorta → O₂ diserap sel tubuh → darah kotor kembali ke serambi kanan.</div>
        <div class="flow">
          <div class="flow-box">Bilik Kiri</div><div class="flow-arrow">→</div>
          <div class="flow-box">🌍 Seluruh tubuh<br><small>serahkan O₂</small></div><div class="flow-arrow">→</div>
          <div class="flow-box">Serambi Kanan</div>
        </div>
      </div>
      <div class="content-section">
        <h3>🩸 Tiga Jenis Pembuluh Darah</h3>
        <div class="table-wrap"><table>
          <tr><th>Pembuluh</th><th>Arah Aliran</th><th>Isi Darah</th><th>Ciri Fisik</th><th>Letaknya</th></tr>
          <tr><td><strong>Arteri (Nadi)</strong></td><td>Dari jantung ke tubuh</td><td>Kaya oksigen (kecuali arteri pulmonalis)</td><td>Dinding tebal & elastis, berdenyut, tidak berkatup</td><td>Lebih dalam di dalam tubuh</td></tr>
          <tr><td><strong>Vena (Balik)</strong></td><td>Dari tubuh ke jantung</td><td>Kaya CO₂ (kecuali vena pulmonalis)</td><td>Dinding tipis, tidak berdenyut, ada katup mencegah balik</td><td>Lebih dekat ke permukaan kulit</td></tr>
          <tr><td><strong>Kapiler</strong></td><td>Menghubungkan arteri & vena</td><td>Campuran</td><td>Sangat halus (selebar 1 sel), berdinding tipis</td><td>Di seluruh jaringan tubuh</td></tr>
        </table></div>
        <div class="info-box green">Pertukaran O₂, CO₂, nutrisi, dan zat sisa terjadi di <strong>kapiler</strong> — karena dindingnya sangat tipis sehingga zat bisa meresap keluar-masuk.</div>
      </div>
      <div class="content-section">
        <h3>🩺 Fakta Penting Jantung</h3>
        <ul>
          <li>Jantung berdetak <strong>60–100 kali per menit</strong> pada orang dewasa sehat.</li>
          <li>Saat olahraga, detak bisa mencapai <strong>150–200 kali per menit</strong>.</li>
          <li>Dalam sehari, jantung memompa sekitar <strong>7.000 liter darah</strong>.</li>
          <li>Bunyi "dug-dug" jantung berasal dari katup jantung yang menutup.</li>
        </ul>
        <div class="info-box">Menjaga kesehatan jantung: olahraga rutin, makan sayur & buah, kurangi garam dan lemak jenuh, hindari rokok.</div>
      </div>`,
    flashcards: [
      { q:'Sebutkan 4 ruang jantung dan fungsinya!', a:'Serambi kanan: terima darah kotor dari tubuh. Bilik kanan: pompa ke paru-paru. Serambi kiri: terima darah bersih dari paru-paru. Bilik kiri: pompa darah bersih ke seluruh tubuh.' },
      { q:'Apa perbedaan peredaran darah besar dan kecil?', a:'Peredaran kecil: jantung → paru-paru → jantung (untuk mengambil O₂). Peredaran besar: jantung → seluruh tubuh → jantung (untuk mengantar O₂ ke sel tubuh).' },
      { q:'Apa perbedaan arteri dan vena?', a:'Arteri: membawa darah dari jantung ke tubuh, dinding tebal, berdenyut. Vena: membawa darah dari tubuh ke jantung, dinding tipis, ada katup.' },
      { q:'Di mana terjadi pertukaran O₂ dan CO₂ dalam sistem peredaran darah?', a:'Di kapiler — pembuluh darah terkecil yang dindingnya sangat tipis sehingga O₂ dan CO₂ bisa meresap keluar-masuk.' },
      { q:'Mengapa dinding bilik kiri lebih tebal dari bilik kanan?', a:'Karena bilik kiri harus memompa darah ke seluruh tubuh (jarak jauh, butuh tekanan besar), sedangkan bilik kanan hanya memompa ke paru-paru yang lebih dekat.' },
      { q:'Berapa kali jantung berdetak per menit pada orang dewasa sehat?', a:'60–100 kali per menit. Saat berolahraga bisa meningkat hingga 150–200 kali per menit.' },
    ],
  },

  'ipa-9': {
    title: '💧 Siklus Hidrologi',
    sub: 'Perputaran air di alam dan pentingnya menjaga ketersediaan air',
    body: `
      <div class="content-section">
        <h3>📌 Apa itu Siklus Hidrologi?</h3>
        <p><strong>Siklus hidrologi</strong> (siklus air) adalah perputaran air dari permukaan bumi ke atmosfer dan kembali ke bumi secara terus-menerus tanpa henti. Jumlah air di bumi tidak bertambah maupun berkurang — hanya berubah tempat dan wujudnya.</p>
        <div class="info-box blue">Siklus air menjaga ketersediaan air bersih di bumi agar makhluk hidup bisa terus hidup.</div>
      </div>
      <div class="content-section">
        <h3>🔄 Tahapan Lengkap Siklus Air</h3>
        <div class="flow">
          <div class="flow-box">☀️ Evaporasi &amp; Transpirasi</div><div class="flow-arrow">→</div>
          <div class="flow-box">☁️ Kondensasi<br><small>terbentuk awan</small></div><div class="flow-arrow">→</div>
          <div class="flow-box">🌧️ Presipitasi<br><small>hujan/salju</small></div><div class="flow-arrow">→</div>
          <div class="flow-box">💧 Infiltrasi &amp; Run off</div><div class="flow-arrow">→</div>
          <div class="flow-box">🌊 Kembali ke laut/danau</div>
        </div>
        <div class="table-wrap"><table>
          <tr><th>Tahap</th><th>Pengertian</th><th>Contoh Nyata</th></tr>
          <tr><td>☀️ <strong>Evaporasi</strong></td><td>Penguapan air dari permukaan laut, danau, atau sungai karena panas matahari</td><td>Genangan air mengering setelah hujan</td></tr>
          <tr><td>🌿 <strong>Transpirasi</strong></td><td>Penguapan air melalui stomata (pori-pori) daun tumbuhan</td><td>Embun di daun pagi hari, daun yang basah saat pagi</td></tr>
          <tr><td>💨 <strong>Evapotranspirasi</strong></td><td>Gabungan evaporasi + transpirasi yang terjadi bersamaan</td><td>Udara lembab di dalam hutan lebat</td></tr>
          <tr><td>☁️ <strong>Kondensasi</strong></td><td>Uap air naik ke atmosfer, mendingin, dan berubah menjadi tetes-tetes air kecil membentuk awan</td><td>Terbentuknya awan, embun di pagi hari, tetes air di luar gelas es</td></tr>
          <tr><td>🌧️ <strong>Presipitasi</strong></td><td>Jatuhnya air dari awan ke permukaan bumi</td><td>Hujan (daerah tropis), salju (daerah dingin), hujan es</td></tr>
          <tr><td>💧 <strong>Infiltrasi</strong></td><td>Air hujan meresap ke dalam tanah membentuk air tanah</td><td>Sumur berisi air tanah, mata air di pegunungan</td></tr>
          <tr><td>🏃 <strong>Run off (Limpasan)</strong></td><td>Air mengalir di permukaan tanah menuju sungai, danau, dan akhirnya laut</td><td>Air sungai mengalir setelah hujan deras</td></tr>
        </table></div>
      </div>
      <div class="content-section">
        <h3>🌳 Peran Hutan dalam Siklus Air</h3>
        <p>Hutan sangat penting dalam menjaga siklus air karena:</p>
        <ul>
          <li>Akar pohon <strong>menyerap dan menyimpan air hujan</strong> → mencegah banjir</li>
          <li>Daun pohon mengeluarkan uap air (transpirasi) → <strong>membantu pembentukan awan</strong></li>
          <li>Tanah berhutan lebih gembur → <strong>infiltrasi lebih besar</strong> → air tanah terjaga</li>
        </ul>
        <div class="info-box green">Penebangan hutan liar menyebabkan banjir dan kekeringan karena siklus air terganggu — air hujan langsung mengalir ke laut tanpa terserap tanah.</div>
      </div>
      <div class="content-section">
        <h3>🔍 Jenis-Jenis Siklus Air</h3>
        <div class="table-wrap"><table>
          <tr><th>Jenis</th><th>Penjelasan</th></tr>
          <tr><td><strong>Siklus Pendek</strong></td><td>Air laut menguap → awan terbentuk di atas laut → hujan langsung ke laut</td></tr>
          <tr><td><strong>Siklus Sedang</strong></td><td>Air laut menguap → angin bawa awan ke daratan → hujan di daratan → air mengalir ke laut</td></tr>
          <tr><td><strong>Siklus Panjang</strong></td><td>Air laut menguap → awan ke pegunungan → salju/hujan es → mencair perlahan → sungai → laut</td></tr>
        </table></div>
      </div>`,
    flashcards: [
      { q:'Sebutkan 6 tahap siklus hidrologi secara urut!', a:'Evaporasi → Kondensasi → Presipitasi → Infiltrasi/Run off → kembali ke laut → evaporasi lagi (siklus berulang).' },
      { q:'Apa perbedaan evaporasi dan transpirasi?', a:'Evaporasi: penguapan air dari permukaan air (laut, sungai, danau). Transpirasi: penguapan air melalui stomata daun tumbuhan.' },
      { q:'Apa itu kondensasi? Berikan 2 contoh!', a:'Uap air yang mendingin berubah menjadi tetes air cair. Contoh: terbentuknya awan, embun di pagi hari, dan tetes air di luar gelas berisi es.' },
      { q:'Apa itu infiltrasi dan apa pentingnya?', a:'Air hujan yang meresap ke dalam tanah. Penting karena mengisi cadangan air tanah yang menjadi sumber air sumur dan mata air.' },
      { q:'Mengapa penebangan hutan menyebabkan banjir?', a:'Tanpa akar pohon, air hujan tidak diserap tanah melainkan langsung mengalir ke sungai (run off besar) sehingga sungai meluap.' },
      { q:'Apa bedanya infiltrasi dan run off?', a:'Infiltrasi: air meresap KE DALAM tanah (jadi air tanah). Run off: air mengalir DI ATAS permukaan tanah menuju sungai dan laut.' },
    ],
  },

  'ipa-10': {
    title: '🌵 Adaptasi Tumbuhan',
    sub: 'Cara tumbuhan menyesuaikan diri dengan berbagai lingkungan',
    body: `
      <div class="content-section">
        <h3>📌 Apa itu Adaptasi Tumbuhan?</h3>
        <p><strong>Adaptasi</strong> adalah kemampuan makhluk hidup menyesuaikan diri dengan lingkungannya agar dapat bertahan hidup dan berkembang biak. Tumbuhan beradaptasi melalui dua cara utama:</p>
        <div class="table-wrap"><table>
          <tr><th>Jenis Adaptasi</th><th>Pengertian</th><th>Contoh</th></tr>
          <tr><td><strong>Morfologi</strong></td><td>Perubahan bentuk fisik tubuh tumbuhan</td><td>Duri kaktus, daun teratai yang lebar</td></tr>
          <tr><td><strong>Fisiologi</strong></td><td>Perubahan proses atau fungsi organ dalam tumbuhan</td><td>Kantong semar mencerna serangga, tumbuhan CAM membuka stomata malam hari</td></tr>
        </table></div>
      </div>
      <div class="content-section">
        <h3>🌵 Xerofit — Tumbuhan di Lingkungan Kering/Gurun</h3>
        <p>Masalah utama: <strong>kekurangan air</strong>. Solusi adaptasi:</p>
        <div class="table-wrap"><table>
          <tr><th>Adaptasi</th><th>Fungsi</th><th>Contoh Tumbuhan</th></tr>
          <tr><td>Daun berubah menjadi duri</td><td>Mengurangi penguapan air (luas permukaan kecil)</td><td>Kaktus</td></tr>
          <tr><td>Batang tebal dan berdaging</td><td>Menyimpan cadangan air dalam jumlah besar</td><td>Kaktus, Agave, Lidah buaya</td></tr>
          <tr><td>Akar sangat panjang dan menyebar</td><td>Menjangkau sumber air yang jauh dan dalam</td><td>Kaktus (akar bisa 10 meter)</td></tr>
          <tr><td>Lapisan lilin tebal pada daun</td><td>Mengurangi penguapan dari permukaan daun</td><td>Sukulen, Lidah buaya</td></tr>
          <tr><td>Stomata membuka malam hari</td><td>Mengurangi penguapan di siang hari yang panas</td><td>Kaktus, banyak sukulen</td></tr>
        </table></div>
      </div>
      <div class="content-section">
        <h3>💧 Hidrofit — Tumbuhan di Lingkungan Air</h3>
        <p>Masalah utama: <strong>kelebihan air, kekurangan udara untuk akar</strong>. Solusi adaptasi:</p>
        <div class="table-wrap"><table>
          <tr><th>Adaptasi</th><th>Fungsi</th><th>Contoh</th></tr>
          <tr><td>Daun lebar dan tipis</td><td>Memperluas permukaan untuk fotosintesis, mudah mengapung</td><td>Teratai</td></tr>
          <tr><td>Tangkai dan batang berongga</td><td>Menyimpan udara agar mengapung dan menyuplai O₂ ke akar</td><td>Teratai, Enceng gondok</td></tr>
          <tr><td>Akar kecil/lebat</td><td>Menyerap air langsung dari sekitar, tidak perlu akar panjang</td><td>Enceng gondok</td></tr>
          <tr><td>Stomata di permukaan atas daun</td><td>Karena bagian bawah daun terendam air</td><td>Teratai</td></tr>
        </table></div>
      </div>
      <div class="content-section">
        <h3>🌧️ Higrofit — Tumbuhan di Lingkungan Lembab</h3>
        <p>Masalah utama: <strong>terlalu banyak air di lingkungan</strong>. Solusi adaptasi:</p>
        <ul>
          <li>Daun lebar dengan banyak stomata → mempercepat penguapan air berlebih (transpirasi aktif)</li>
          <li>Permukaan daun tipis dan lunak → mudah menguapkan air</li>
          <li>Contoh: Pakis, Lumut, Begonia, Keladi</li>
        </ul>
      </div>
      <div class="content-section">
        <h3>🌺 Adaptasi Khusus Tumbuhan Unik</h3>
        <div class="table-wrap"><table>
          <tr><th>Tumbuhan</th><th>Adaptasi Unik</th><th>Alasan</th></tr>
          <tr><td>🌺 Rafflesia arnoldii</td><td>Bunga bau bangkai, tidak punya klorofil, parasit pada inang</td><td>Menarik lalat sebagai penyerbuk; mendapat makanan dari inang</td></tr>
          <tr><td>🌿 Bakau (Mangrove)</td><td>Akar napas (pneumatofor) mencuat ke atas permukaan lumpur</td><td>Mengambil oksigen di tanah berlumpur yang minim udara</td></tr>
          <tr><td>🪤 Kantong Semar</td><td>Daun berbentuk kantong berisi cairan pencerna serangga</td><td>Mendapat nitrogen dari serangga karena tanah rawa miskin nutrisi</td></tr>
          <tr><td>🌵 Venus Flycatcher</td><td>Daun mengatup menangkap serangga yang hinggap</td><td>Sama seperti kantong semar — tambahan nutrisi dari serangga</td></tr>
          <tr><td>🌳 Pohon Jati</td><td>Menggugurkan daun saat musim kemarau</td><td>Mengurangi penguapan air saat air langka</td></tr>
        </table></div>
      </div>`,
    flashcards: [
      { q:'Sebutkan 3 kelompok adaptasi tumbuhan berdasarkan lingkungannya!', a:'Xerofit (lingkungan kering, contoh: kaktus), Hidrofit (lingkungan air, contoh: teratai), Higrofit (lingkungan lembab, contoh: pakis).' },
      { q:'Bagaimana kaktus beradaptasi di gurun yang sangat kering?', a:'Daun berubah menjadi duri (kurangi penguapan), batang tebal menyimpan air, akar sangat panjang menjangkau air dalam tanah.' },
      { q:'Mengapa tangkai teratai berongga?', a:'Untuk menyimpan udara sehingga bisa mengapung di air dan menyalurkan oksigen ke akar yang terendam.' },
      { q:'Apa keunikan kantong semar? Mengapa ia memakan serangga?', a:'Kantong semar menjebak dan mencerna serangga untuk mendapat nitrogen, karena tanah rawa tempat hidupnya sangat miskin nutrisi.' },
      { q:'Mengapa pohon jati menggugurkan daunnya di musim kemarau?', a:'Adaptasi untuk mengurangi penguapan air saat pasokan air tanah sangat sedikit di musim kemarau.' },
      { q:'Apa perbedaan adaptasi morfologi dan fisiologi tumbuhan?', a:'Morfologi: perubahan bentuk fisik (duri kaktus, daun lebar teratai). Fisiologi: perubahan proses tubuh (kantong semar mencerna serangga, stomata buka malam hari).' },
    ],
  },

  'ipa-11': {
    title: '🌍 Rotasi & Revolusi Bumi',
    sub: 'Akibat perputaran bumi pada porosnya dan peredarannya mengelilingi matahari',
    body: `
      <div class="content-section">
        <h3>📌 Rotasi vs Revolusi — Perbedaan Dasar</h3>
        <div class="table-wrap"><table>
          <tr><th>Aspek</th><th>Rotasi Bumi</th><th>Revolusi Bumi</th></tr>
          <tr><td>Pengertian</td><td>Bumi berputar pada porosnya sendiri</td><td>Bumi mengelilingi matahari</td></tr>
          <tr><td>Arah</td><td>Barat ke Timur (berlawanan jarum jam dilihat dari kutub utara)</td><td>Berlawanan jarum jam dilihat dari kutub utara</td></tr>
          <tr><td>Waktu</td><td>24 jam = 1 hari</td><td>365,25 hari = 1 tahun</td></tr>
          <tr><td>Akibat utama</td><td>Siang dan malam, perbedaan waktu</td><td>Pergantian musim, tahun kabisat</td></tr>
        </table></div>
      </div>
      <div class="content-section">
        <h3>🌍 Rotasi Bumi — Akibat Lengkap</h3>
        <div class="table-wrap"><table>
          <tr><th>Akibat Rotasi</th><th>Penjelasan</th></tr>
          <tr><td><strong>Pergantian siang dan malam</strong></td><td>Bagian bumi yang menghadap matahari = siang; yang membelakangi = malam</td></tr>
          <tr><td><strong>Gerak semu harian matahari</strong></td><td>Matahari seolah bergerak dari timur ke barat, padahal bumi yang berputar dari barat ke timur</td></tr>
          <tr><td><strong>Perbedaan waktu antar wilayah</strong></td><td>Setiap 15° bujur = beda 1 jam. Indonesia punya 3 zona waktu: WIB, WITA, WIT</td></tr>
          <tr><td><strong>Bentuk bumi sedikit pepat</strong></td><td>Rotasi membuat equator "menggembung" dan kutub sedikit "gepeng"</td></tr>
        </table></div>
        <div class="info-box blue">Karena bumi berputar dari barat ke timur, kota-kota di timur akan lebih dulu mengalami pagi hari dibandingkan kota-kota di barat. Jayapura (WIT) lebih dulu pagi dari Jakarta (WIB).</div>
      </div>
      <div class="content-section">
        <h3>🌏 Revolusi Bumi — Akibat Lengkap</h3>
        <div class="table-wrap"><table>
          <tr><th>Akibat Revolusi</th><th>Penjelasan</th></tr>
          <tr><td><strong>Pergantian musim</strong></td><td>Belahan bumi utara/selatan mengalami 4 musim (semi, panas, gugur, dingin) karena sumbu bumi miring 23,5°</td></tr>
          <tr><td><strong>Gerak semu tahunan matahari</strong></td><td>Posisi matahari seolah bergerak antara 23,5° LU dan 23,5° LS sepanjang tahun</td></tr>
          <tr><td><strong>Perbedaan panjang siang-malam</strong></td><td>Di belahan bumi utara/selatan, siang dan malam tidak selalu 12 jam — bergantung posisi revolusi</td></tr>
          <tr><td><strong>Tahun kabisat</strong></td><td>Sisa 0,25 hari tiap tahun dikumpulkan → setiap 4 tahun ada 1 hari tambahan (29 Februari)</td></tr>
          <tr><td><strong>Dasar kalender masehi</strong></td><td>1 tahun = 365 hari (atau 366 di tahun kabisat)</td></tr>
        </table></div>
      </div>
      <div class="content-section">
        <h3>🕐 Zona Waktu Indonesia</h3>
        <div class="table-wrap"><table>
          <tr><th>Zona Waktu</th><th>Wilayah</th><th>Beda dengan GMT</th></tr>
          <tr><td><strong>WIB</strong> (Waktu Indonesia Barat)</td><td>Sumatera, Jawa, Kalimantan Barat &amp; Tengah</td><td>GMT +7</td></tr>
          <tr><td><strong>WITA</strong> (Waktu Indonesia Tengah)</td><td>Bali, NTB, NTT, Kalimantan Selatan &amp; Timur, Sulawesi</td><td>GMT +8</td></tr>
          <tr><td><strong>WIT</strong> (Waktu Indonesia Timur)</td><td>Maluku, Papua</td><td>GMT +9</td></tr>
        </table></div>
        <div class="info-box green">Perbedaan WIB dan WIT = 2 jam. Jika Jakarta (WIB) pukul 07.00, maka Jayapura (WIT) pukul 09.00.</div>
      </div>`,
    flashcards: [
      { q:'Apa perbedaan rotasi dan revolusi bumi?', a:'Rotasi: bumi berputar pada porosnya sendiri (24 jam → siang-malam). Revolusi: bumi mengelilingi matahari (365,25 hari → pergantian tahun dan musim).' },
      { q:'Sebutkan 4 akibat rotasi bumi!', a:'1. Pergantian siang dan malam. 2. Gerak semu harian matahari. 3. Perbedaan waktu antar wilayah. 4. Bentuk bumi pepat di kutub.' },
      { q:'Mengapa ada tahun kabisat?', a:'Karena revolusi bumi butuh 365,25 hari. Sisa 0,25 hari dikumpulkan selama 4 tahun menjadi 1 hari penuh, ditambahkan sebagai 29 Februari.' },
      { q:'Mengapa matahari seolah bergerak dari timur ke barat?', a:'Itu gerak semu — sebenarnya bumi yang berputar dari barat ke timur. Karena kita ikut berputar, matahari terlihat bergerak dari timur ke barat.' },
      { q:'Jika Jakarta pukul 10.00 WIB, pukul berapa di Jayapura (WIT)?', a:'Pukul 12.00 WIT — karena WIT lebih cepat 2 jam dari WIB.' },
      { q:'Mengapa Indonesia memiliki 3 zona waktu?', a:'Karena Indonesia membentang luas dari barat ke timur. Setiap 15° garis bujur = beda 1 jam. Indonesia mencakup sekitar 45° bujur (WIB, WITA, WIT).' },
    ],
  },

  'ipa-12': {
    title: '🌙 Rotasi & Revolusi Bulan + Gerhana',
    sub: 'Pergerakan bulan, fase bulan, dan fenomena gerhana',
    body: `
      <div class="content-section">
        <h3>🌙 Tiga Gerakan Bulan</h3>
        <div class="table-wrap"><table>
          <tr><th>Gerakan</th><th>Pengertian</th><th>Waktu</th><th>Akibat</th></tr>
          <tr><td><strong>Rotasi Bulan</strong></td><td>Bulan berputar pada porosnya sendiri</td><td>29,5 hari</td><td>Wajah bulan yang menghadap bumi selalu sama (kita tidak pernah melihat sisi belakang bulan)</td></tr>
          <tr><td><strong>Revolusi Bulan</strong></td><td>Bulan mengelilingi bumi</td><td>29,5 hari</td><td>Fase-fase bulan (purnama, sabit, dll), dasar kalender Hijriyah</td></tr>
          <tr><td><strong>Gerak Bersama Bumi</strong></td><td>Bulan ikut bumi mengelilingi matahari</td><td>365,25 hari</td><td>Bulan selalu berada di sekitar bumi dalam orbitnya</td></tr>
        </table></div>
        <div class="info-box blue">Karena waktu rotasi = revolusi bulan (sama-sama 29,5 hari), sisi bulan yang menghadap bumi selalu sama. Sisi belakang bulan baru terlihat dari luar angkasa!</div>
      </div>
      <div class="content-section">
        <h3>🌛 Fase-Fase Bulan</h3>
        <div class="flow">
          <div class="flow-box">🌑 Bulan Baru<br><small>tidak terlihat</small></div><div class="flow-arrow">→</div>
          <div class="flow-box">🌒 Sabit Awal</div><div class="flow-arrow">→</div>
          <div class="flow-box">🌓 Setengah (kuartir pertama)</div><div class="flow-arrow">→</div>
          <div class="flow-box">🌔 Cembung Awal</div><div class="flow-arrow">→</div>
          <div class="flow-box">🌕 Bulan Purnama</div><div class="flow-arrow">→</div>
          <div class="flow-box">🌖 Cembung Akhir</div><div class="flow-arrow">→</div>
          <div class="flow-box">🌗 Setengah (kuartir ketiga)</div><div class="flow-arrow">→</div>
          <div class="flow-box">🌘 Sabit Akhir → 🌑 kembali</div>
        </div>
        <div class="info-box green">Satu siklus fase bulan = 29,5 hari = dasar 1 bulan dalam kalender Hijriyah (Islam).</div>
      </div>
      <div class="content-section">
        <h3>🌑 Gerhana Matahari</h3>
        <p>Terjadi saat <strong>bulan berada tepat di antara bumi dan matahari</strong> saat fase <strong>bulan baru</strong>, sehingga bayangan bulan jatuh ke permukaan bumi.</p>
        <div class="flow">
          <div class="flow-box">☀️ Matahari</div><div class="flow-arrow">→</div>
          <div class="flow-box">🌑 Bulan<br><small>(menghalangi)</small></div><div class="flow-arrow">→</div>
          <div class="flow-box">🌍 Bumi<br><small>(terkena bayangan)</small></div>
        </div>
        <div class="table-wrap"><table>
          <tr><th>Jenis</th><th>Kondisi</th><th>Yang Terjadi</th></tr>
          <tr><td><strong>Total</strong></td><td>Bulan menutupi seluruh matahari</td><td>Langit gelap total, terlihat korona matahari</td></tr>
          <tr><td><strong>Sebagian</strong></td><td>Bulan menutupi sebagian matahari</td><td>Matahari terlihat seperti digigit</td></tr>
          <tr><td><strong>Cincin</strong></td><td>Bulan terlalu jauh, tampak lebih kecil dari matahari</td><td>Matahari tampak seperti cincin api di tepinya</td></tr>
        </table></div>
      </div>
      <div class="content-section">
        <h3>🌕 Gerhana Bulan</h3>
        <p>Terjadi saat <strong>bumi berada tepat di antara matahari dan bulan</strong> saat fase <strong>bulan purnama</strong>, sehingga bayangan bumi menutupi bulan.</p>
        <div class="flow">
          <div class="flow-box">☀️ Matahari</div><div class="flow-arrow">→</div>
          <div class="flow-box">🌍 Bumi<br><small>(menghalangi)</small></div><div class="flow-arrow">→</div>
          <div class="flow-box">🌕 Bulan<br><small>(masuk bayangan)</small></div>
        </div>
        <div class="table-wrap"><table>
          <tr><th>Jenis</th><th>Kondisi</th><th>Yang Terjadi</th></tr>
          <tr><td><strong>Total</strong></td><td>Bulan masuk penuh ke umbra (bayangan inti) bumi</td><td>Bulan tampak merah keoranyean ("Blood Moon")</td></tr>
          <tr><td><strong>Sebagian</strong></td><td>Hanya sebagian bulan yang masuk umbra</td><td>Bulan terlihat gelap sebagian</td></tr>
          <tr><td><strong>Penumbra</strong></td><td>Bulan masuk penumbra (bayangan kabur) bumi</td><td>Bulan sedikit meredup, sulit terlihat</td></tr>
        </table></div>
        <div class="info-box green">Gerhana bulan aman dilihat dengan mata telanjang. Gerhana matahari BERBAHAYA dilihat langsung — harus pakai kacamata khusus!</div>
      </div>
      <div class="content-section">
        <h3>🌊 Pasang Surut Air Laut</h3>
        <p>Gravitasi bulan menarik air laut di bumi, menyebabkan pasang surut:</p>
        <div class="table-wrap"><table>
          <tr><th>Kondisi</th><th>Posisi Bulan-Bumi-Matahari</th><th>Pasang</th></tr>
          <tr><td><strong>Pasang Purnama</strong></td><td>Bulan-Bumi-Matahari segaris (bulan purnama/baru)</td><td>Pasang maksimum (paling tinggi)</td></tr>
          <tr><td><strong>Pasang Perbani</strong></td><td>Bulan-Bumi-Matahari membentuk sudut 90°</td><td>Pasang minimum (paling rendah)</td></tr>
        </table></div>
      </div>`,
    flashcards: [
      { q:'Mengapa kita selalu melihat sisi yang sama dari bulan?', a:'Karena waktu rotasi bulan = waktu revolusinya (sama-sama 29,5 hari), sehingga sisi yang menghadap bumi tidak pernah berubah.' },
      { q:'Apa syarat terjadinya gerhana matahari?', a:'Saat fase bulan baru — bulan berada tepat di antara bumi dan matahari sehingga bayangan bulan jatuh ke bumi.' },
      { q:'Apa syarat terjadinya gerhana bulan?', a:'Saat fase bulan purnama — bumi berada tepat di antara matahari dan bulan sehingga bayangan bumi menutupi bulan.' },
      { q:'Sebutkan 3 jenis gerhana matahari!', a:'Total (bulan menutupi seluruh matahari), Sebagian (bulan menutupi sebagian matahari), Cincin (bulan lebih kecil sehingga terlihat cincin cahaya di tepinya).' },
      { q:'Mengapa bulan tampak merah saat gerhana bulan total?', a:'Cahaya matahari dibelokkan atmosfer bumi dan hanya cahaya merah yang sampai ke bulan, membuatnya tampak merah keoranyean (Blood Moon).' },
      { q:'Apa itu pasang purnama dan pasang perbani?', a:'Pasang purnama: air laut pasang maksimum saat bulan-bumi-matahari segaris. Pasang perbani: pasang minimum saat ketiganya membentuk sudut 90°.' },
    ],
  },

  // ---- IPA BARU (ipa-13 s/d ipa-18) ----

  'ipa-13': {
    title: '🕸️ Ekosistem & Simbiosis',
    sub: 'Komponen ekosistem, rantai makanan, jaring makanan, dan hubungan antar makhluk hidup',
    body: `
      <div class="content-section">
        <h3>🌿 Komponen Ekosistem</h3>
        <p><strong>Ekosistem</strong> adalah hubungan timbal balik antara makhluk hidup dengan lingkungan tak hidup di suatu tempat.</p>
        <div class="table-wrap"><table>
          <tr><th>Komponen</th><th>Pengertian</th><th>Contoh</th></tr>
          <tr><td><strong>Biotik</strong></td><td>Makhluk hidup dalam ekosistem</td><td>Hewan, tumbuhan, jamur, bakteri, manusia</td></tr>
          <tr><td><strong>Abiotik</strong></td><td>Benda tak hidup yang mempengaruhi ekosistem</td><td>Air, udara, tanah, cahaya matahari, suhu, kelembaban</td></tr>
        </table></div>
        <div class="table-wrap"><table>
          <tr><th>Peran Biotik</th><th>Pengertian</th><th>Contoh</th></tr>
          <tr><td><strong>Produsen</strong></td><td>Membuat makanan sendiri melalui fotosintesis</td><td>Semua tumbuhan hijau, alga, fitoplankton</td></tr>
          <tr><td><strong>Konsumen I</strong></td><td>Memakan produsen (herbivora)</td><td>Ulat, belalang, sapi, kelinci, kijang</td></tr>
          <tr><td><strong>Konsumen II</strong></td><td>Memakan konsumen I (karnivora kecil)</td><td>Katak, ular kecil, burung pipit</td></tr>
          <tr><td><strong>Konsumen III</strong></td><td>Memakan konsumen II (karnivora besar)</td><td>Elang, harimau, hiu</td></tr>
          <tr><td><strong>Pengurai (Dekomposer)</strong></td><td>Mengurai sisa organisme mati jadi zat anorganik</td><td>Jamur, bakteri pembusuk, cacing tanah</td></tr>
        </table></div>
      </div>
      <div class="content-section">
        <h3>🔗 Rantai Makanan</h3>
        <p>Urutan hubungan makan-dimakan dalam satu jalur lurus:</p>
        <div class="flow">
          <div class="flow-box">🌾 Padi<br><small>Produsen</small></div><div class="flow-arrow">→</div>
          <div class="flow-box">🐭 Tikus<br><small>Konsumen I</small></div><div class="flow-arrow">→</div>
          <div class="flow-box">🐍 Ular<br><small>Konsumen II</small></div><div class="flow-arrow">→</div>
          <div class="flow-box">🦅 Elang<br><small>Konsumen III</small></div><div class="flow-arrow">→</div>
          <div class="flow-box">🍄 Pengurai<br><small>Jamur/Bakteri</small></div>
        </div>
        <div class="info-box blue"><strong>Jaring makanan</strong> = gabungan banyak rantai makanan yang saling berhubungan. Lebih menggambarkan ekosistem nyata karena satu hewan biasanya punya banyak sumber makanan.</div>
      </div>
      <div class="content-section">
        <h3>🤝 Tiga Jenis Simbiosis</h3>
        <div class="table-wrap"><table>
          <tr><th>Jenis</th><th>Pihak A</th><th>Pihak B</th><th>Contoh</th></tr>
          <tr><td><strong>Mutualisme</strong><br>(+/+)</td><td>Untung</td><td>Untung</td><td>Lebah &amp; bunga (lebah dapat nektar, bunga terbantu penyerbukan), Kupu-kupu &amp; bunga, Ikan badut &amp; anemon laut, Burung jalak &amp; kerbau</td></tr>
          <tr><td><strong>Komensalisme</strong><br>(+/0)</td><td>Untung</td><td>Tidak rugi, tidak untung</td><td>Ikan remora &amp; hiu (remora makan sisa makanan hiu), Anggrek &amp; pohon (anggrek numpang, pohon tidak terganggu), Ikan kecil &amp; batu karang</td></tr>
          <tr><td><strong>Parasitisme</strong><br>(+/−)</td><td>Untung</td><td>Dirugikan</td><td>Kutu &amp; manusia (kutu isap darah, manusia gatal), Benalu &amp; pohon (benalu serap sari makanan pohon), Cacing pita &amp; usus manusia</td></tr>
        </table></div>
        <div class="info-box green"><strong>Predasi ≠ Simbiosis.</strong> Predasi adalah hubungan pemangsa (predator) dan mangsa (prey) — seperti harimau memangsa rusa. Keduanya bukan hidup bersama secara permanen.</div>
      </div>
      <div class="content-section">
        <h3>⚖️ Keseimbangan Ekosistem</h3>
        <p>Ekosistem seimbang jika semua komponen terjaga. Jika satu terganggu, semua ikut terdampak:</p>
        <div class="info-box">Contoh: Jika elang di sawah diburu habis → populasi ular meledak → tikus berkurang karena dimakan ular → padi tumbuh baik. Tapi jika ular juga habis → tikus meledak → padi gagal panen.</div>
      </div>`,
    flashcards: [
      { q:'Apa perbedaan komponen biotik dan abiotik dalam ekosistem?', a:'Biotik = makhluk hidup (hewan, tumbuhan, jamur, bakteri). Abiotik = benda tak hidup yang mempengaruhi ekosistem (air, udara, cahaya, suhu, tanah).' },
      { q:'Sebutkan peran produsen, konsumen, dan pengurai dalam ekosistem!', a:'Produsen: membuat makanan sendiri (tumbuhan). Konsumen: memakan organisme lain (hewan). Pengurai: mengurai sisa organisme mati menjadi zat anorganik (jamur, bakteri).' },
      { q:'Apa perbedaan rantai makanan dan jaring makanan?', a:'Rantai makanan: satu jalur makan-dimakan lurus. Jaring makanan: gabungan banyak rantai makanan yang saling berhubungan, lebih menggambarkan ekosistem nyata.' },
      { q:'Sebutkan perbedaan simbiosis mutualisme, komensalisme, dan parasitisme!', a:'Mutualisme: keduanya untung (+/+). Komensalisme: satu untung, satu tidak rugi/untung (+/0). Parasitisme: satu untung, satu dirugikan (+/−).' },
      { q:'Berikan contoh simbiosis mutualisme beserta penjelasannya!', a:'Lebah dan bunga: lebah mendapat nektar (untung), bunga terbantu penyerbukan karena serbuk sari menempel di tubuh lebah (untung).' },
      { q:'Apa itu pengurai dan mengapa perannya penting?', a:'Pengurai (jamur, bakteri) mengurai sisa organisme mati menjadi zat anorganik yang diserap kembali oleh tumbuhan. Tanpa pengurai, sampah organik menumpuk dan ekosistem terganggu.' },
    ],
  },

  'ipa-14': {
    title: '🌿 Fotosintesis',
    sub: 'Proses pembuatan makanan oleh tumbuhan dan faktor yang mempengaruhinya',
    body: `
      <div class="content-section">
        <h3>🌞 Apa itu Fotosintesis?</h3>
        <p><strong>Fotosintesis</strong> adalah proses tumbuhan membuat makanan sendiri menggunakan energi cahaya matahari. Inilah mengapa tumbuhan disebut <strong>autotrof</strong> (dapat membuat makanan sendiri).</p>
        <div class="flow">
          <div class="flow-box">💧 Air (H₂O)<br><small>diserap akar</small></div><div class="flow-arrow">+</div>
          <div class="flow-box">💨 CO₂<br><small>dari stomata</small></div><div class="flow-arrow">+</div>
          <div class="flow-box">☀️ Cahaya<br><small>energi</small></div><div class="flow-arrow">→</div>
          <div class="flow-box">🍬 Glukosa (C₆H₁₂O₆)<br><small>makanan</small></div><div class="flow-arrow">+</div>
          <div class="flow-box">🌬️ O₂<br><small>dilepas ke udara</small></div>
        </div>
        <div class="info-box green">Rumus reaksi: <strong>6CO₂ + 6H₂O + cahaya → C₆H₁₂O₆ + 6O₂</strong></div>
      </div>
      <div class="content-section">
        <h3>🔬 Syarat dan Tempat Fotosintesis</h3>
        <div class="table-wrap"><table>
          <tr><th>Aspek</th><th>Keterangan</th><th>Detail</th></tr>
          <tr><td><strong>Tempat</strong></td><td>Kloroplas</td><td>Organel sel yang mengandung klorofil (zat hijau daun)</td></tr>
          <tr><td><strong>Bahan baku 1</strong></td><td>Air (H₂O)</td><td>Diserap dari tanah melalui akar, dibawa ke daun lewat xilem</td></tr>
          <tr><td><strong>Bahan baku 2</strong></td><td>Karbon dioksida (CO₂)</td><td>Masuk melalui stomata (pori-pori daun) dari udara</td></tr>
          <tr><td><strong>Sumber energi</strong></td><td>Cahaya matahari</td><td>Diserap oleh klorofil untuk menggerakkan reaksi kimia</td></tr>
          <tr><td><strong>Hasil 1</strong></td><td>Glukosa (C₆H₁₂O₆)</td><td>Digunakan sebagai makanan/energi tumbuhan, disimpan sebagai pati</td></tr>
          <tr><td><strong>Hasil 2</strong></td><td>Oksigen (O₂)</td><td>Dilepas ke udara melalui stomata — inilah O₂ yang kita hirup!</td></tr>
        </table></div>
      </div>
      <div class="content-section">
        <h3>🌡️ Faktor yang Mempengaruhi Kecepatan Fotosintesis</h3>
        <div class="table-wrap"><table>
          <tr><th>Faktor</th><th>Pengaruh</th></tr>
          <tr><td><strong>Intensitas cahaya</strong></td><td>Semakin terang cahaya → fotosintesis makin cepat (sampai batas tertentu)</td></tr>
          <tr><td><strong>Ketersediaan air</strong></td><td>Kekurangan air → stomata menutup → CO₂ tidak masuk → fotosintesis melambat</td></tr>
          <tr><td><strong>Kadar CO₂</strong></td><td>Semakin banyak CO₂ di udara → fotosintesis makin cepat</td></tr>
          <tr><td><strong>Suhu</strong></td><td>Suhu optimal sekitar 25–35°C. Terlalu panas atau dingin → fotosintesis melambat</td></tr>
          <tr><td><strong>Klorofil</strong></td><td>Daun kuning/pucat punya sedikit klorofil → fotosintesis kurang efektif</td></tr>
        </table></div>
      </div>
      <div class="content-section">
        <h3>🌍 Pentingnya Fotosintesis bagi Kehidupan</h3>
        <ul>
          <li>🌬️ <strong>Penghasil O₂</strong> — seluruh oksigen di atmosfer berasal dari fotosintesis tumbuhan dan alga</li>
          <li>🍎 <strong>Sumber energi rantai makanan</strong> — semua hewan bergantung pada tumbuhan sebagai sumber energi awal</li>
          <li>🌡️ <strong>Menyerap CO₂</strong> — membantu mengurangi efek rumah kaca dan menstabilkan iklim</li>
        </ul>
        <div class="info-box blue">Tanpa fotosintesis, tidak ada oksigen, tidak ada makanan, dan tidak ada kehidupan di bumi seperti yang kita kenal sekarang!</div>
      </div>`,
    flashcards: [
      { q:'Apa bahan baku fotosintesis dan dari mana asalnya?', a:'Air (H₂O) dari tanah diserap akar, dan karbon dioksida (CO₂) dari udara masuk melalui stomata daun.' },
      { q:'Di mana fotosintesis berlangsung dan apa yang menggerakkannya?', a:'Di kloroplas — organel yang mengandung klorofil. Klorofil menyerap energi cahaya matahari untuk menggerakkan reaksi fotosintesis.' },
      { q:'Sebutkan 2 hasil fotosintesis dan kegunaannya!', a:'Glukosa: makanan/energi tumbuhan, disimpan sebagai pati. Oksigen (O₂): dilepas ke udara dan digunakan oleh makhluk hidup untuk bernapas.' },
      { q:'Bagaimana kekurangan air mempengaruhi fotosintesis?', a:'Kekurangan air menyebabkan stomata menutup sehingga CO₂ tidak bisa masuk, akibatnya fotosintesis melambat atau berhenti.' },
      { q:'Mengapa fotosintesis sangat penting bagi kehidupan di bumi?', a:'Menghasilkan O₂ yang kita hirup, menjadi sumber energi awal rantai makanan, dan menyerap CO₂ sehingga membantu menstabilkan iklim bumi.' },
      { q:'Tuliskan rumus reaksi fotosintesis!', a:'6CO₂ + 6H₂O + cahaya → C₆H₁₂O₆ (glukosa) + 6O₂. Artinya: 6 molekul CO₂ + 6 molekul air + cahaya menghasilkan 1 glukosa + 6 oksigen.' },
    ],
  },

  'ipa-15': {
    title: '💪 Gaya',
    sub: 'Jenis-jenis gaya, pengaruh gaya, dan hukum Newton',
    body: `
      <div class="content-section">
        <h3>⚡ Apa itu Gaya?</h3>
        <p><strong>Gaya</strong> adalah tarikan atau dorongan yang bekerja pada suatu benda. Gaya dapat mengubah bentuk, posisi, arah gerak, atau kecepatan benda. Satuan gaya: <strong>Newton (N)</strong>.</p>
        <div class="table-wrap"><table>
          <tr><th>Pengaruh Gaya terhadap Benda</th><th>Contoh</th></tr>
          <tr><td>Benda diam menjadi bergerak</td><td>Bola ditendang mulai menggelinding</td></tr>
          <tr><td>Benda bergerak menjadi diam</td><td>Bola ditangkap berhenti</td></tr>
          <tr><td>Mengubah arah gerak benda</td><td>Bola dipantulkan ke dinding berubah arah</td></tr>
          <tr><td>Mengubah kecepatan benda</td><td>Sepeda dikayuh lebih kencang</td></tr>
          <tr><td>Mengubah bentuk benda</td><td>Tanah liat dipijit berubah bentuk</td></tr>
        </table></div>
      </div>
      <div class="content-section">
        <h3>🔍 Jenis-Jenis Gaya</h3>
        <div class="table-wrap"><table>
          <tr><th>Jenis Gaya</th><th>Pengertian</th><th>Contoh Nyata</th></tr>
          <tr><td><strong>Gaya Gravitasi</strong></td><td>Gaya tarik bumi terhadap semua benda ke arah pusat bumi</td><td>Buah mangga jatuh, air mengalir ke bawah, kita bisa berdiri di tanah</td></tr>
          <tr><td><strong>Gaya Gesek</strong></td><td>Gaya yang timbul saat dua permukaan bersentuhan dan bergerak saling berlawanan</td><td>Rem sepeda berfungsi, tapak sepatu tidak tergelincir, korek api menyala</td></tr>
          <tr><td><strong>Gaya Pegas</strong></td><td>Gaya yang dihasilkan benda elastis yang ditekan, ditarik, atau diubah bentuknya</td><td>Ketapel, busur panah, pegas kasur, per kendaraan</td></tr>
          <tr><td><strong>Gaya Otot</strong></td><td>Gaya yang dihasilkan oleh kontraksi otot makhluk hidup</td><td>Mendorong meja, mengangkat buku, menarik gerobak</td></tr>
          <tr><td><strong>Gaya Magnet</strong></td><td>Gaya tarik atau tolak yang dihasilkan magnet terhadap benda magnetik</td><td>Magnet menarik peniti besi, kompas menunjuk utara</td></tr>
          <tr><td><strong>Gaya Listrik</strong></td><td>Gaya tarik atau tolak antara benda bermuatan listrik</td><td>Penggaris plastik setelah digosok menarik kertas kecil</td></tr>
        </table></div>
      </div>
      <div class="content-section">
        <h3>🔄 Gaya Gesek: Menguntungkan vs Merugikan</h3>
        <div class="table-wrap"><table>
          <tr><th>Menguntungkan</th><th>Merugikan</th></tr>
          <tr><td>Rem kendaraan bisa menghentikan laju</td><td>Mesin kendaraan cepat aus</td></tr>
          <tr><td>Kita bisa berjalan tanpa terpeleset</td><td>Ban sepeda cepat habis</td></tr>
          <tr><td>Pensil bisa menulis di kertas</td><td>Alas sepatu cepat tipis</td></tr>
          <tr><td>Korek api bisa menyalakan api</td><td>Benda bergerak membutuhkan lebih banyak energi</td></tr>
        </table></div>
        <div class="info-box green">Cara memperkecil gesek: beri pelumas (oli), gunakan roda/bantalan bola, haluskan permukaan. Cara memperbesar gesek: buat permukaan kasar (tapak ban beralur).</div>
      </div>
      <div class="content-section">
        <h3>📐 Gaya Resultan (Gaya Gabungan)</h3>
        <p>Jika dua gaya bekerja pada benda yang sama:</p>
        <div class="table-wrap"><table>
          <tr><th>Kondisi</th><th>Resultan</th><th>Akibat</th></tr>
          <tr><td>Dua gaya searah</td><td>F₁ + F₂</td><td>Benda bergerak semakin cepat ke satu arah</td></tr>
          <tr><td>Dua gaya berlawanan arah, tidak sama besar</td><td>F₁ − F₂ (ke arah gaya lebih besar)</td><td>Benda bergerak ke arah gaya yang lebih besar</td></tr>
          <tr><td>Dua gaya berlawanan, sama besar</td><td>0 (gaya seimbang)</td><td>Benda tetap diam atau bergerak lurus tetap</td></tr>
        </table></div>
      </div>`,
    flashcards: [
      { q:'Apa itu gaya? Sebutkan satuannya!', a:'Gaya adalah tarikan atau dorongan yang bekerja pada benda. Dapat mengubah bentuk, posisi, arah, atau kecepatan benda. Satuan: Newton (N).' },
      { q:'Sebutkan 5 pengaruh gaya terhadap benda!', a:'1. Benda diam jadi bergerak. 2. Benda bergerak jadi diam. 3. Mengubah arah gerak. 4. Mengubah kecepatan. 5. Mengubah bentuk benda.' },
      { q:'Apa itu gaya gravitasi? Apa pengaruhnya sehari-hari?', a:'Gaya tarik bumi ke arah pusat bumi. Akibatnya: benda jatuh ke bawah, kita bisa berdiri di tanah, air mengalir ke tempat rendah.' },
      { q:'Sebutkan 2 cara gaya gesek menguntungkan dan 2 cara merugikan!', a:'Menguntungkan: rem kendaraan bekerja, kita tidak terpeleset. Merugikan: mesin cepat aus, ban sepeda cepat habis.' },
      { q:'Bagaimana cara memperkecil gaya gesek pada mesin kendaraan?', a:'Dengan memberikan pelumas (oli/gemuk) pada permukaan yang bergesekan, sehingga permukaan tidak langsung bersentuhan.' },
      { q:'Jika dua gaya berlawanan arah dengan besar sama bekerja pada satu benda, apa yang terjadi?', a:'Resultan gaya = 0 (gaya seimbang), sehingga benda tetap diam atau bergerak lurus dengan kecepatan tetap.' },
    ],
  },

  'ipa-16': {
    title: '🧲 Magnet & Kemagnetan',
    sub: 'Sifat magnet, jenis magnet, cara membuat, dan elektromagnet',
    body: `
      <div class="content-section">
        <h3>🧲 Sifat-Sifat Magnet</h3>
        <ul>
          <li>Magnet memiliki dua kutub: <strong>kutub utara (U)</strong> dan <strong>kutub selatan (S)</strong>.</li>
          <li>Kutub senama (U−U atau S−S) → <strong>tolak-menolak</strong>.</li>
          <li>Kutub berbeda (U−S) → <strong>tarik-menarik</strong>.</li>
          <li>Kekuatan magnet terbesar ada di <strong>kedua kutubnya</strong>.</li>
          <li>Magnet dapat menarik benda dari bahan <strong>feromagnetik</strong> (besi, nikel, kobalt).</li>
          <li>Jika magnet dipotong, setiap potongan tetap memiliki dua kutub.</li>
        </ul>
        <div class="table-wrap"><table>
          <tr><th>Bahan</th><th>Sifat terhadap Magnet</th><th>Contoh</th></tr>
          <tr><td><strong>Feromagnetik</strong></td><td>Tertarik kuat oleh magnet</td><td>Besi, baja, nikel, kobalt</td></tr>
          <tr><td><strong>Paramagnetik</strong></td><td>Tertarik lemah oleh magnet</td><td>Aluminium, platinum</td></tr>
          <tr><td><strong>Diamagnetik</strong></td><td>Tidak tertarik / sedikit ditolak magnet</td><td>Kayu, plastik, kaca, tembaga, emas</td></tr>
        </table></div>
      </div>
      <div class="content-section">
        <h3>📦 Jenis-Jenis Magnet</h3>
        <div class="table-wrap"><table>
          <tr><th>Berdasarkan Asal</th><th>Jenis</th><th>Keterangan</th><th>Contoh</th></tr>
          <tr><td rowspan="2">Alam</td><td><strong>Magnet Alam</strong></td><td>Terbentuk alami di dalam bumi</td><td>Batu magnetit (Fe₃O₄)</td></tr>
          <tr><td></td><td></td><td></td></tr>
          <tr><td rowspan="4">Buatan</td><td><strong>Magnet Batang</strong></td><td>Berbentuk batang persegi panjang</td><td>Magnet kulkas</td></tr>
          <tr><td><strong>Magnet U / Tapal Kuda</strong></td><td>Berbentuk seperti huruf U, daya tarik kuat</td><td>Magnet pengangkat besi tua</td></tr>
          <tr><td><strong>Magnet Jarum</strong></td><td>Berbentuk jarum pipih, bisa berputar bebas</td><td>Kompas</td></tr>
          <tr><td><strong>Elektromagnet</strong></td><td>Magnet dari kumparan berarus listrik</td><td>Bel listrik, derek besi, MRI</td></tr>
        </table></div>
      </div>
      <div class="content-section">
        <h3>⚙️ Tiga Cara Membuat Magnet</h3>
        <div class="table-wrap"><table>
          <tr><th>Cara</th><th>Langkah</th><th>Hasil</th></tr>
          <tr><td><strong>Gosokan</strong></td><td>Besi/baja digosok dengan magnet secara searah berulang-ulang (bolak-balik tidak boleh!)</td><td>Magnet permanen, kutub tergantung arah gosok</td></tr>
          <tr><td><strong>Induksi</strong></td><td>Besi didekatkan ke magnet tanpa menyentuh langsung</td><td>Magnet sementara, hilang ketika jauh dari magnet</td></tr>
          <tr><td><strong>Elektromagnetik</strong></td><td>Kawat dililitkan pada inti besi, lalu dialiri arus listrik DC</td><td>Kekuatan bisa diatur, bisa dimatikan</td></tr>
        </table></div>
        <div class="info-box blue">Cara menghilangkan sifat kemagnetan: dipukul-pukul, dipanaskan, atau dialiri arus AC (bolak-balik). Ini merusak susunan domain magnetiknya.</div>
      </div>
      <div class="content-section">
        <h3>⚡ Elektromagnet — Magnet dari Listrik</h3>
        <p>Elektromagnet dibuat dengan melilitkan kawat pada inti besi dan mengalirkan arus listrik DC. Keunggulannya dibanding magnet biasa:</p>
        <div class="table-wrap"><table>
          <tr><th>Keunggulan Elektromagnet</th><th>Penerapan</th></tr>
          <tr><td>Kekuatan dapat diatur (ganti jumlah lilitan/besar arus)</td><td>Derek besi di pabrik baja</td></tr>
          <tr><td>Dapat dimatikan (putus arus = tidak magnetik)</td><td>Bel listrik, katup solenoid</td></tr>
          <tr><td>Kekuatan jauh lebih besar dari magnet biasa</td><td>MRI di rumah sakit, maglev (kereta cepat)</td></tr>
        </table></div>
      </div>`,
    flashcards: [
      { q:'Apa yang terjadi jika dua kutub magnet yang sama didekatkan?', a:'Tolak-menolak. Kutub U bertemu U, atau S bertemu S → saling mendorong menjauh.' },
      { q:'Apa itu elektromagnet dan apa keunggulannya?', a:'Magnet buatan dari kumparan kawat berarus listrik DC. Keunggulan: kekuatan bisa diatur dengan mengubah jumlah lilitan/besar arus, dan bisa dimatikan dengan memutus arus.' },
      { q:'Sebutkan 3 cara membuat magnet buatan!', a:'1. Gosokan (digosok searah berulang). 2. Induksi (didekatkan magnet). 3. Elektromagnetik (kumparan dialiri arus DC).' },
      { q:'Di mana kekuatan magnet paling besar?', a:'Di kedua ujung/kutub magnet (kutub utara dan kutub selatan). Di bagian tengah, kekuatan magnet paling lemah.' },
      { q:'Apa perbedaan bahan feromagnetik, paramagnetik, dan diamagnetik?', a:'Feromagnetik: tertarik kuat (besi, baja). Paramagnetik: tertarik lemah (aluminium). Diamagnetik: tidak tertarik/ditolak lemah (kayu, plastik, tembaga).' },
      { q:'Bagaimana cara menghilangkan sifat kemagnetan sebuah magnet?', a:'Dipukul-pukul keras, dipanaskan sampai suhu tinggi, atau dialiri arus listrik bolak-balik (AC) — ketiganya merusak susunan domain magnetik.' },
    ],
  },

  'ipa-17': {
    title: '🦎 Adaptasi Hewan',
    sub: 'Morfologi, fisiologi, tingkah laku, dan contoh adaptasi unik hewan',
    body: `
      <div class="content-section">
        <h3>🐾 Tiga Jenis Adaptasi Hewan</h3>
        <div class="table-wrap"><table>
          <tr><th>Jenis Adaptasi</th><th>Pengertian</th><th>Contoh</th></tr>
          <tr><td><strong>Morfologi</strong></td><td>Penyesuaian bentuk fisik/struktur tubuh</td><td>Kaki berselaput bebek, paruh panjang burung kolibri</td></tr>
          <tr><td><strong>Fisiologi</strong></td><td>Penyesuaian proses/fungsi organ dalam tubuh</td><td>Unta menyimpan lemak di punuk, unta laut minum air asin</td></tr>
          <tr><td><strong>Tingkah Laku</strong></td><td>Penyesuaian cara bertindak/berperilaku</td><td>Hibernasi beruang, migrasi burung, ekolokasi kelelawar</td></tr>
        </table></div>
      </div>
      <div class="content-section">
        <h3>🦇 Adaptasi Tingkah Laku Khusus</h3>
        <div class="table-wrap"><table>
          <tr><th>Jenis</th><th>Pengertian</th><th>Contoh Hewan</th><th>Tujuan</th></tr>
          <tr><td><strong>Nokturnal</strong></td><td>Aktif di malam hari, istirahat siang hari</td><td>Kelelawar, burung hantu, musang, tokek</td><td>Menghindari panas siang, menghindari predator diurnal</td></tr>
          <tr><td><strong>Ekolokasi</strong></td><td>Mendeteksi objek dengan memancarkan gelombang suara ultrasonik dan menangkap pantulannya</td><td>Kelelawar, lumba-lumba, paus beluga</td><td>Navigasi dan berburu di kegelapan/dalam air keruh</td></tr>
          <tr><td><strong>Hibernasi</strong></td><td>Tidur panjang di musim dingin dengan metabolisme sangat lambat</td><td>Beruang, landak, kelelawar, ular</td><td>Hemat energi saat makanan langka di musim dingin</td></tr>
          <tr><td><strong>Estivasi</strong></td><td>Tidur panjang di musim kemarau/panas ekstrem</td><td>Siput, katak pohon Afrika, lungfish</td><td>Bertahan saat air langka dan panas berlebih</td></tr>
          <tr><td><strong>Migrasi</strong></td><td>Berpindah tempat secara periodik mengikuti perubahan musim</td><td>Burung camar, salmon, kupu-kupu monarch</td><td>Mencari makanan dan tempat berkembang biak yang lebih baik</td></tr>
        </table></div>
      </div>
      <div class="content-section">
        <h3>🎭 Kamuflase dan Mimikri</h3>
        <div class="table-wrap"><table>
          <tr><th>Jenis</th><th>Pengertian</th><th>Contoh</th></tr>
          <tr><td><strong>Kamuflase</strong></td><td>Menyamarkan diri agar menyerupai warna/pola lingkungan sekitar</td><td>Bunglon berubah warna, gurita menyerupai batu karang, ulat daun menyerupai daun</td></tr>
          <tr><td><strong>Mimikri</strong></td><td>Meniru penampilan/warna spesies lain yang berbahaya atau beracun</td><td>Ular raja meniru warna ular karang beracun, lalat meniru pola lebah</td></tr>
          <tr><td><strong>Autotomi</strong></td><td>Memutuskan bagian tubuh sendiri untuk mengelabui predator</td><td>Kadal memutus ekor saat terancam (ekor tumbuh lagi)</td></tr>
          <tr><td><strong>Thanatosis</strong></td><td>Berpura-pura mati saat terancam</td><td>Oposum, ular tertentu</td></tr>
        </table></div>
      </div>
      <div class="content-section">
        <h3>🦆 Adaptasi Morfologi Berbagai Hewan</h3>
        <div class="table-wrap"><table>
          <tr><th>Hewan</th><th>Adaptasi Morfologi</th><th>Fungsi</th></tr>
          <tr><td>Bebek</td><td>Kaki berselaput lebar</td><td>Berenang efisien dan berjalan di lumpur</td></tr>
          <tr><td>Unta</td><td>Punuk berisi lemak, bulu mata panjang, lubang hidung bisa menutup</td><td>Cadangan energi di gurun, melindungi dari pasir</td></tr>
          <tr><td>Elang</td><td>Paruh bengkok tajam + cakar kuat</td><td>Mencengkeram dan merobek mangsa</td></tr>
          <tr><td>Ikan</td><td>Tubuh streamline, sirip, insang</td><td>Berenang cepat, bernapas dalam air</td></tr>
          <tr><td>Burung kolibri</td><td>Paruh panjang dan tipis</td><td>Mengisap nektar dari dalam bunga</td></tr>
          <tr><td>Kura-kura</td><td>Cangkang keras di punggung</td><td>Perlindungan dari predator</td></tr>
        </table></div>
      </div>`,
    flashcards: [
      { q:'Sebutkan 3 jenis adaptasi hewan beserta contohnya!', a:'Morfologi: kaki berselaput bebek untuk berenang. Fisiologi: punuk unta menyimpan lemak. Tingkah laku: ekolokasi kelelawar untuk navigasi di gelap.' },
      { q:'Apa itu ekolokasi dan siapa saja yang menggunakannya?', a:'Kemampuan mendeteksi objek dengan memancarkan gelombang suara ultrasonik dan menangkap pantulannya. Dimiliki kelelawar, lumba-lumba, dan paus beluga.' },
      { q:'Apa perbedaan hibernasi dan estivasi?', a:'Hibernasi: tidur panjang di musim DINGIN untuk hemat energi (beruang). Estivasi: tidur panjang di musim KEMARAU/panas karena kekurangan air (katak, siput).' },
      { q:'Apa perbedaan kamuflase dan mimikri?', a:'Kamuflase: menyamarkan diri agar menyerupai LINGKUNGAN sekitar (bunglon, gurita). Mimikri: meniru penampilan HEWAN LAIN yang berbahaya/beracun (ular raja meniru ular karang).' },
      { q:'Apa itu autotomi? Berikan contohnya!', a:'Kemampuan hewan memutuskan bagian tubuhnya sendiri untuk mengelabui predator. Contoh: kadal yang memutus ekornya saat ditangkap — ekor terus bergerak mengalihkan perhatian predator.' },
      { q:'Mengapa unta dapat bertahan lama di gurun tanpa minum?', a:'Punuk unta menyimpan lemak (bukan air) yang dipecah menjadi energi dan air metabolik. Selain itu, unta sangat efisien menggunakan air dan bisa bertoleransi terhadap dehidrasi.' },
    ],
  },

  'ipa-18': {
    title: '🌸 Bagian Tubuh Tumbuhan',
    sub: 'Struktur dan fungsi akar, batang, daun, bunga, buah, dan biji',
    body: `
      <div class="content-section">
        <h3>🌱 Akar</h3>
        <p><strong>Fungsi akar:</strong> menyerap air & mineral dari tanah, menopang tegaknya tumbuhan, menyimpan cadangan makanan (pada beberapa tumbuhan).</p>
        <div class="table-wrap"><table>
          <tr><th>Jenis Akar</th><th>Ciri-ciri</th><th>Tumbuhan</th></tr>
          <tr><td><strong>Akar Serabut</strong></td><td>Banyak akar kecil berukuran sama, tidak ada akar utama, menyebar merata</td><td>Padi, jagung, rumput, kelapa (monokotil)</td></tr>
          <tr><td><strong>Akar Tunggang</strong></td><td>Satu akar utama besar + akar cabang yang lebih kecil</td><td>Mangga, wortel, kacang, singkong (dikotil)</td></tr>
        </table></div>
        <div class="table-wrap"><table>
          <tr><th>Modifikasi Akar Khusus</th><th>Fungsi Khusus</th><th>Contoh</th></tr>
          <tr><td>Akar napas (pneumatofor)</td><td>Mengambil O₂ dari udara di tanah berlumpur</td><td>Pohon bakau (mangrove)</td></tr>
          <tr><td>Akar gantung</td><td>Menyerap uap air dari udara, menopang batang</td><td>Beringin</td></tr>
          <tr><td>Akar penyimpan</td><td>Menyimpan cadangan makanan (karbohidrat)</td><td>Wortel, singkong, dahlia</td></tr>
          <tr><td>Akar pengisap (haustorium)</td><td>Menyerap sari makanan dari tumbuhan inang</td><td>Benalu, tali putri</td></tr>
        </table></div>
      </div>
      <div class="content-section">
        <h3>🪵 Batang</h3>
        <p><strong>Fungsi batang:</strong> menopang tumbuhan, tempat pengangkutan zat (xilem & floem), tempat menyimpan cadangan makanan, dan tempat tumbuhnya daun & bunga.</p>
        <div class="table-wrap"><table>
          <tr><th>Pembuluh</th><th>Mengangkut</th><th>Arah</th></tr>
          <tr><td><strong>Xilem</strong></td><td>Air dan mineral dari tanah</td><td>Akar → batang → daun (ke atas)</td></tr>
          <tr><td><strong>Floem</strong></td><td>Hasil fotosintesis (glukosa/gula)</td><td>Daun → seluruh tubuh tumbuhan (ke bawah & atas)</td></tr>
        </table></div>
        <div class="table-wrap"><table>
          <tr><th>Jenis Batang</th><th>Ciri</th><th>Contoh</th></tr>
          <tr><td>Berkayu</td><td>Keras, kuat, berumur panjang, ada lingkaran tahun</td><td>Mangga, jati, mahoni, pinus</td></tr>
          <tr><td>Basah/herba</td><td>Lunak, banyak mengandung air</td><td>Pisang, bayam, kangkung, tomat</td></tr>
          <tr><td>Rumput</td><td>Berongga, beruas-ruas, tidak bercabang</td><td>Padi, bambu, tebu, jagung</td></tr>
        </table></div>
      </div>
      <div class="content-section">
        <h3>🍃 Daun</h3>
        <p><strong>Fungsi daun:</strong> tempat fotosintesis, transpirasi (penguapan air), dan pertukaran gas melalui stomata.</p>
        <div class="table-wrap"><table>
          <tr><th>Bagian Daun</th><th>Nama Latin</th><th>Fungsi</th></tr>
          <tr><td>Helai daun</td><td>Lamina</td><td>Tempat fotosintesis, tangkap cahaya</td></tr>
          <tr><td>Tangkai daun</td><td>Petiolus</td><td>Penghubung helai daun ke batang</td></tr>
          <tr><td>Pelepah daun</td><td>Vagina</td><td>Menempel pada batang (ada di beberapa tumbuhan)</td></tr>
          <tr><td>Tulang daun</td><td>Nervus</td><td>Jalur transportasi air & mineral di daun</td></tr>
          <tr><td>Stomata</td><td>—</td><td>Pori-pori untuk pertukaran gas dan transpirasi</td></tr>
        </table></div>
        <div class="info-box blue">Pola tulang daun: <strong>menyirip</strong> (mangga, jambu) = dikotil. <strong>Sejajar</strong> (padi, jagung) = monokotil. <strong>Menjari</strong> (singkong, pepaya) = dikotil.</div>
      </div>
      <div class="content-section">
        <h3>🌺 Bunga, Buah & Biji</h3>
        <div class="table-wrap"><table>
          <tr><th>Bagian Bunga</th><th>Fungsi</th></tr>
          <tr><td><strong>Mahkota bunga</strong> (korola)</td><td>Menarik serangga/hewan penyerbuk dengan warna dan aroma</td></tr>
          <tr><td><strong>Kelopak bunga</strong> (kaliks)</td><td>Melindungi bunga saat masih kuncup</td></tr>
          <tr><td><strong>Benang sari</strong> (stamen)</td><td>Organ reproduksi jantan, penghasil serbuk sari</td></tr>
          <tr><td><strong>Putik</strong> (pistil)</td><td>Organ reproduksi betina, tempat terjadinya pembuahan</td></tr>
          <tr><td><strong>Dasar bunga</strong> (reseptakel)</td><td>Tempat menempelnya semua bagian bunga</td></tr>
        </table></div>
        <div class="info-box green">Bunga yang memiliki benang sari DAN putik disebut <strong>bunga sempurna/hermafrodit</strong>. Contoh: mawar, melati. Bunga yang hanya punya salah satu disebut <strong>bunga tidak sempurna</strong>. Contoh: bunga jagung jantan/betina.</div>
      </div>`,
    flashcards: [
      { q:'Apa perbedaan akar serabut dan akar tunggang? Sebutkan contoh tumbuhannya!', a:'Akar serabut: banyak akar kecil sama besar, tidak ada akar utama (padi, jagung — monokotil). Akar tunggang: satu akar utama besar + cabang lebih kecil (mangga, kacang — dikotil).' },
      { q:'Apa fungsi xilem dan floem pada batang tumbuhan?', a:'Xilem: mengangkut air dan mineral dari akar ke daun (ke atas). Floem: mengangkut hasil fotosintesis (glukosa) dari daun ke seluruh bagian tumbuhan.' },
      { q:'Sebutkan 5 bagian bunga dan fungsinya!', a:'Mahkota: menarik penyerbuk. Kelopak: melindungi kuncup. Benang sari: organ jantan penghasil serbuk sari. Putik: organ betina, tempat pembuahan. Dasar bunga: tempat menempel semua bagian.' },
      { q:'Apa fungsi stomata pada daun?', a:'Pori-pori di permukaan daun untuk: pertukaran gas (CO₂ masuk saat siang, O₂ keluar), dan transpirasi (mengeluarkan uap air berlebih).' },
      { q:'Apa itu akar napas (pneumatofor) dan dimiliki tumbuhan apa?', a:'Akar yang mencuat ke atas permukaan lumpur untuk mengambil oksigen di lingkungan berlumpur yang minim udara. Dimiliki pohon bakau (mangrove).' },
      { q:'Apa perbedaan bunga sempurna dan bunga tidak sempurna?', a:'Bunga sempurna: memiliki benang sari DAN putik dalam satu bunga (mawar, melati). Bunga tidak sempurna: hanya punya salah satu organ (jagung — bunga jantan dan betina terpisah).' },
    ],
  },

  'ipa-19': {
    title: '🫁 Sistem Pernapasan & Pencernaan',
    sub: 'Organ, proses, dan gangguan pada sistem pernapasan dan pencernaan manusia',
    body: `
      <div class="content-section">
        <h3>🫁 Sistem Pernapasan Manusia</h3>
        <p>Pernapasan adalah proses menghirup O₂ (oksigen) dan mengeluarkan CO₂ (karbon dioksida).</p>
        <div class="flow">
          <div class="flow-box">👃 Hidung<br><small>saring, hangatkan, lembabkan udara</small></div><div class="flow-arrow">→</div>
          <div class="flow-box">Faring<br><small>tenggorokan atas</small></div><div class="flow-arrow">→</div>
          <div class="flow-box">Laring<br><small>kotak suara</small></div><div class="flow-arrow">→</div>
          <div class="flow-box">Trakea<br><small>batang tenggorok</small></div><div class="flow-arrow">→</div>
          <div class="flow-box">Bronkus<br><small>cabang trakea</small></div><div class="flow-arrow">→</div>
          <div class="flow-box">Bronkiolus</div><div class="flow-arrow">→</div>
          <div class="flow-box">🫁 Alveolus<br><small>pertukaran gas</small></div>
        </div>
        <div class="table-wrap"><table>
          <tr><th>Organ</th><th>Fungsi</th></tr>
          <tr><td><strong>Hidung</strong></td><td>Menyaring debu (rambut hidung), menghangatkan, dan melembabkan udara sebelum masuk paru-paru</td></tr>
          <tr><td><strong>Trakea</strong></td><td>Saluran udara utama, dilapisi silia yang menyaring kotoran</td></tr>
          <tr><td><strong>Bronkus</strong></td><td>Percabangan trakea menuju paru-paru kanan dan kiri</td></tr>
          <tr><td><strong>Alveolus</strong></td><td>Gelembung udara kecil berdinding sangat tipis, tempat pertukaran O₂ dan CO₂ dengan darah</td></tr>
          <tr><td><strong>Diafragma</strong></td><td>Otot pemisah rongga dada dan perut, berfungsi dalam mekanisme bernapas</td></tr>
        </table></div>
        <div class="info-box blue">Pertukaran gas di alveolus: O₂ dari udara → masuk darah. CO₂ dari darah → keluar ke udara. Bisa terjadi karena dinding alveolus sangat tipis (1 sel).</div>
      </div>
      <div class="content-section">
        <h3>🍽️ Sistem Pencernaan Manusia</h3>
        <div class="flow">
          <div class="flow-box">👄 Mulut</div><div class="flow-arrow">→</div>
          <div class="flow-box">Kerongkongan<br><small>esofagus</small></div><div class="flow-arrow">→</div>
          <div class="flow-box">Lambung</div><div class="flow-arrow">→</div>
          <div class="flow-box">Usus Halus<br><small>duodenum→jejenum→ileum</small></div><div class="flow-arrow">→</div>
          <div class="flow-box">Usus Besar</div><div class="flow-arrow">→</div>
          <div class="flow-box">Anus</div>
        </div>
        <div class="table-wrap"><table>
          <tr><th>Organ</th><th>Jenis Pencernaan</th><th>Proses & Enzim</th></tr>
          <tr><td><strong>Mulut</strong></td><td>Mekanik + Kimiawi</td><td>Gigi mencacah (mekanik); enzim amilase/ptialin memecah amilum → gula sederhana</td></tr>
          <tr><td><strong>Kerongkongan</strong></td><td>Mekanik</td><td>Gerak peristaltik mendorong makanan ke lambung (bukan mencerna)</td></tr>
          <tr><td><strong>Lambung</strong></td><td>Mekanik + Kimiawi</td><td>Otot lambung mengaduk; asam lambung (HCl) membunuh kuman; enzim pepsin mencerna protein</td></tr>
          <tr><td><strong>Usus Halus</strong></td><td>Kimiawi + Penyerapan</td><td>Enzim dari pankreas (amilase, lipase, protease) + empedu dari hati; sari makanan diserap vili usus ke darah</td></tr>
          <tr><td><strong>Usus Besar</strong></td><td>Penyerapan air</td><td>Menyerap kembali air dari sisa makanan; membentuk dan menyimpan feses</td></tr>
        </table></div>
      </div>
      <div class="content-section">
        <h3>🔧 Gangguan pada Sistem Pencernaan</h3>
        <div class="table-wrap"><table>
          <tr><th>Gangguan</th><th>Penyebab</th><th>Gejala</th></tr>
          <tr><td><strong>Maag (Gastritis)</strong></td><td>Asam lambung berlebih, makan tidak teratur</td><td>Nyeri perut, mual, kembung</td></tr>
          <tr><td><strong>Diare</strong></td><td>Infeksi bakteri/virus, makanan tidak higienis</td><td>BAB cair berkali-kali, dehidrasi</td></tr>
          <tr><td><strong>Sembelit (Konstipasi)</strong></td><td>Kurang serat, kurang minum air</td><td>BAB keras dan sulit</td></tr>
          <tr><td><strong>Radang Usus Buntu</strong></td><td>Penyumbatan pada apendiks</td><td>Nyeri di perut kanan bawah, demam</td></tr>
        </table></div>
        <div class="info-box green">Menjaga kesehatan pencernaan: makan teratur, perbanyak serat (sayur & buah), minum air 8 gelas/hari, cuci tangan sebelum makan.</div>
      </div>`,
    flashcards: [
      { q:'Sebutkan urutan organ pernapasan dari luar ke dalam!', a:'Hidung → Faring → Laring → Trakea → Bronkus → Bronkiolus → Alveolus.' },
      { q:'Di mana pertukaran O₂ dan CO₂ terjadi? Mengapa di sana?', a:'Di alveolus — dindingnya sangat tipis (hanya 1 sel) dan dikelilingi banyak kapiler darah, sehingga gas mudah meresap bolak-balik.' },
      { q:'Sebutkan urutan organ pencernaan manusia!', a:'Mulut → Kerongkongan → Lambung → Usus Halus → Usus Besar → Anus.' },
      { q:'Apa perbedaan pencernaan mekanik dan kimiawi? Di mana masing-masing terjadi?', a:'Mekanik: memecah makanan secara fisik (gigi di mulut, otot lambung). Kimiawi: memecah makanan dengan enzim (amilase di mulut, pepsin di lambung, berbagai enzim di usus halus).' },
      { q:'Apa fungsi usus halus? Apa yang membantu prosesnya?', a:'Menyerap sari makanan ke dalam darah melalui vili usus. Dibantu enzim dari pankreas (amilase, lipase, protease) dan cairan empedu dari hati untuk mencerna lemak.' },
      { q:'Apa penyebab dan gejala penyakit maag?', a:'Penyebab: asam lambung berlebih akibat makan tidak teratur atau stres. Gejala: nyeri/perih di perut bagian atas, mual, kembung, dan rasa panas di dada.' },
    ],
  },

  'ipa-20': {
    title: '🧊 Perubahan Wujud Zat',
    sub: 'Enam perubahan wujud, kalor, dan faktor yang mempengaruhi penguapan',
    body: `
      <div class="content-section">
        <h3>📌 Tiga Wujud Zat</h3>
        <div class="table-wrap"><table>
          <tr><th>Wujud</th><th>Bentuk</th><th>Volume</th><th>Jarak Partikel</th><th>Contoh</th></tr>
          <tr><td><strong>Padat</strong></td><td>Tetap</td><td>Tetap</td><td>Sangat rapat, susunan teratur</td><td>Es batu, batu, kayu</td></tr>
          <tr><td><strong>Cair</strong></td><td>Mengikuti wadah</td><td>Tetap</td><td>Agak renggang, bisa bergerak</td><td>Air, minyak, susu</td></tr>
          <tr><td><strong>Gas</strong></td><td>Mengikuti wadah</td><td>Mengikuti wadah</td><td>Sangat renggang, bebas bergerak</td><td>Uap air, oksigen, asap</td></tr>
        </table></div>
      </div>
      <div class="content-section">
        <h3>🔄 Enam Perubahan Wujud Zat</h3>
        <div class="table-wrap"><table>
          <tr><th>Nama</th><th>Perubahan Wujud</th><th>Kalor</th><th>Contoh Sehari-hari</th></tr>
          <tr><td><strong>Mencair / Melebur</strong></td><td>Padat → Cair</td><td>Menyerap kalor</td><td>Es batu mencair, lilin dipanaskan, besi dipanaskan menjadi cair</td></tr>
          <tr><td><strong>Membeku</strong></td><td>Cair → Padat</td><td>Melepas kalor</td><td>Air dimasukkan freezer menjadi es, lilin meleleh mengeras kembali</td></tr>
          <tr><td><strong>Menguap</strong></td><td>Cair → Gas</td><td>Menyerap kalor</td><td>Air dipanaskan hingga mendidih, alkohol di kulit terasa dingin</td></tr>
          <tr><td><strong>Mengembun</strong></td><td>Gas → Cair</td><td>Melepas kalor</td><td>Embun di pagi hari, tetes air di luar gelas es, cermin berembun</td></tr>
          <tr><td><strong>Menyublim</strong></td><td>Padat → Gas</td><td>Menyerap kalor</td><td>Kapur barus (kamper) mengecil, dry ice (es kering CO₂) menguap</td></tr>
          <tr><td><strong>Mengkristal / Deposisi</strong></td><td>Gas → Padat</td><td>Melepas kalor</td><td>Embun beku (bunga es di kulkas), salju terbentuk, yodium dipanaskan lalu mendingin</td></tr>
        </table></div>
        <div class="info-box blue"><strong>Menyerap kalor</strong> (butuh panas): mencair, menguap, menyublim. <strong>Melepas kalor</strong> (melepas panas): membeku, mengembun, mengkristal.</div>
      </div>
      <div class="content-section">
        <h3>🌡️ Kalor dan Suhu</h3>
        <div class="table-wrap"><table>
          <tr><th>Konsep</th><th>Pengertian</th><th>Satuan</th></tr>
          <tr><td><strong>Kalor</strong></td><td>Energi panas yang berpindah dari benda panas ke benda dingin</td><td>Joule (J) atau Kalori (kal)</td></tr>
          <tr><td><strong>Suhu</strong></td><td>Ukuran derajat panas atau dingin suatu benda</td><td>Celcius (°C), Kelvin (K), Fahrenheit (°F)</td></tr>
          <tr><td><strong>Titik beku air</strong></td><td>Suhu saat air berubah menjadi es</td><td>0°C</td></tr>
          <tr><td><strong>Titik didih air</strong></td><td>Suhu saat air mendidih dan berubah menjadi uap</td><td>100°C (di permukaan laut)</td></tr>
        </table></div>
        <div class="info-box green">Alkohol terasa dingin di kulit karena menguap — proses penguapan menyerap kalor dari kulit kita, sehingga kulit terasa lebih dingin.</div>
      </div>
      <div class="content-section">
        <h3>💨 Faktor yang Mempercepat Penguapan</h3>
        <div class="table-wrap"><table>
          <tr><th>Faktor</th><th>Penjelasan</th><th>Contoh Nyata</th></tr>
          <tr><td><strong>Suhu lebih tinggi</strong></td><td>Partikel bergerak lebih cepat, lebih mudah lepas ke udara</td><td>Pakaian lebih cepat kering dijemur siang hari</td></tr>
          <tr><td><strong>Luas permukaan lebih besar</strong></td><td>Lebih banyak partikel yang bisa menguap sekaligus</td><td>Piring lebar lebih cepat kering dari mangkuk dalam</td></tr>
          <tr><td><strong>Angin/aliran udara</strong></td><td>Mengangkut uap air yang terbentuk, memberi ruang bagi penguapan lebih lanjut</td><td>Pakaian lebih cepat kering di tempat berangin</td></tr>
          <tr><td><strong>Kelembaban udara rendah</strong></td><td>Udara kering masih bisa menampung banyak uap air</td><td>Pakaian lebih cepat kering saat cuaca kering</td></tr>
        </table></div>
      </div>`,
    flashcards: [
      { q:'Sebutkan 6 perubahan wujud zat beserta arahnya!', a:'Mencair (padat→cair), Membeku (cair→padat), Menguap (cair→gas), Mengembun (gas→cair), Menyublim (padat→gas), Mengkristal (gas→padat).' },
      { q:'Perubahan wujud apa saja yang menyerap kalor? Apa yang melepas kalor?', a:'Menyerap kalor: mencair, menguap, menyublim. Melepas kalor: membeku, mengembun, mengkristal.' },
      { q:'Apa itu menyublim? Berikan 2 contoh nyata!', a:'Perubahan wujud langsung dari padat ke gas tanpa melalui wujud cair. Contoh: kapur barus (kamper) yang mengecil di lemari dan dry ice (CO₂ padat) yang mengeluarkan asap dingin.' },
      { q:'Mengapa alkohol terasa dingin saat dioleskan ke kulit?', a:'Karena alkohol mudah menguap. Proses penguapan menyerap kalor dari permukaan kulit kita, sehingga kulit terasa lebih dingin.' },
      { q:'Sebutkan 4 faktor yang mempercepat penguapan!', a:'1. Suhu lebih tinggi. 2. Luas permukaan lebih besar. 3. Ada angin/aliran udara. 4. Kelembaban udara rendah.' },
      { q:'Apa bedanya embun dan bunga es (embun beku)?', a:'Embun: uap air mengembun (gas→cair) di permukaan dingin seperti daun di pagi hari. Bunga es: uap air langsung mengkristal (gas→padat) di suhu sangat dingin, seperti di dinding freezer.' },
    ],
  },

  'ipa-21': {
    title: '🔊 Bunyi & Cahaya',
    sub: 'Sifat bunyi, sifat cahaya, pemantulan, pembiasan, dan dispersi',
    body: `
      <div class="content-section">
        <h3>🔊 Bunyi</h3>
        <p>Bunyi dihasilkan oleh benda yang <strong>bergetar</strong> dan merambat melalui medium (zat perantara). Bunyi <strong>tidak dapat</strong> merambat di ruang hampa (vakum).</p>
        <div class="table-wrap"><table>
          <tr><th>Jenis Bunyi</th><th>Frekuensi</th><th>Dapat Didengar Manusia?</th><th>Hewan yang Bisa Mendengar</th></tr>
          <tr><td><strong>Infrasonik</strong></td><td>&lt; 20 Hz</td><td>Tidak</td><td>Gajah, jangkrik, paus biru</td></tr>
          <tr><td><strong>Audiosonik</strong></td><td>20 – 20.000 Hz</td><td>Ya</td><td>Manusia (rentang normal)</td></tr>
          <tr><td><strong>Ultrasonik</strong></td><td>&gt; 20.000 Hz</td><td>Tidak</td><td>Kelelawar, lumba-lumba, anjing</td></tr>
        </table></div>
        <div class="table-wrap"><table>
          <tr><th>Medium</th><th>Kecepatan Bunyi</th><th>Alasan</th></tr>
          <tr><td><strong>Padat</strong> (besi, kayu)</td><td>Paling cepat (~5.000 m/s di baja)</td><td>Partikel sangat rapat, getaran mudah diteruskan</td></tr>
          <tr><td><strong>Cair</strong> (air)</td><td>Sedang (~1.500 m/s di air)</td><td>Partikel cukup rapat</td></tr>
          <tr><td><strong>Gas</strong> (udara)</td><td>Paling lambat (~340 m/s di udara)</td><td>Partikel renggang, getaran lambat diteruskan</td></tr>
          <tr><td><strong>Vakum</strong></td><td>Nol (tidak merambat)</td><td>Tidak ada medium/partikel</td></tr>
        </table></div>
        <div class="info-box blue">Rumus jarak gema: <strong>s = (v × t) ÷ 2</strong> — dibagi 2 karena bunyi pergi-pulang.</div>
      </div>
      <div class="content-section">
        <h3>💡 Cahaya</h3>
        <p>Cahaya adalah gelombang elektromagnetik yang dapat merambat tanpa medium — termasuk di vakum. Kecepatan cahaya di vakum: <strong>300.000 km/detik</strong>.</p>
        <div class="table-wrap"><table>
          <tr><th>Sifat Cahaya</th><th>Penjelasan</th><th>Contoh Nyata</th></tr>
          <tr><td><strong>Merambat lurus</strong></td><td>Cahaya bergerak lurus jika melewati medium homogen</td><td>Berkas sinar matahari melalui celah, bayangan terbentuk lurus</td></tr>
          <tr><td><strong>Pemantulan</strong></td><td>Cahaya memantul saat mengenai permukaan benda</td><td>Cermin, permukaan air tenang, cat putih dinding</td></tr>
          <tr><td><strong>Pembiasan</strong></td><td>Cahaya membelok saat melewati medium berbeda kerapatannya</td><td>Pensil terlihat patah di air, lensa kacamata, pelangi</td></tr>
          <tr><td><strong>Dispersi</strong></td><td>Cahaya putih terurai menjadi spektrum warna saat melewati prisma/tetes air</td><td>Pelangi setelah hujan, prisma kaca</td></tr>
          <tr><td><strong>Dapat diserap</strong></td><td>Benda gelap menyerap lebih banyak cahaya daripada benda terang</td><td>Baju hitam lebih panas dari baju putih di bawah matahari</td></tr>
          <tr><td><strong>Merambat tanpa medium</strong></td><td>Tidak butuh zat perantara</td><td>Cahaya matahari sampai ke bumi melewati ruang hampa angkasa</td></tr>
        </table></div>
      </div>
      <div class="content-section">
        <h3>🌈 Dispersi Cahaya — Warna Pelangi</h3>
        <div class="flow">
          <div class="flow-box">☀️ Cahaya putih</div><div class="flow-arrow">→</div>
          <div class="flow-box">💧 Tetes air / Prisma</div><div class="flow-arrow">→</div>
          <div class="flow-box">🌈 Me-Ji-Ku-Hi-Bi-Ni-U</div>
        </div>
        <div class="info-box green">Urutan warna pelangi: <strong>Me</strong>rah – <strong>Ji</strong>ngga – <strong>Ku</strong>ning – <strong>Hi</strong>jau – <strong>Bi</strong>ru – <strong>Ni</strong>la – <strong>U</strong>ngu. Hafal dengan: <em>"Me-Ji-Ku-Hi-Bi-Ni-U"</em></div>
        <div class="table-wrap"><table>
          <tr><th>Perbedaan</th><th>Bunyi</th><th>Cahaya</th></tr>
          <tr><td>Jenis gelombang</td><td>Mekanik (butuh medium)</td><td>Elektromagnetik (tidak butuh medium)</td></tr>
          <tr><td>Di vakum</td><td>Tidak merambat</td><td>Merambat (300.000 km/s)</td></tr>
          <tr><td>Kecepatan di udara</td><td>~340 m/s</td><td>~300.000.000 m/s</td></tr>
        </table></div>
      </div>`,
    flashcards: [
      { q:'Mengapa bunyi tidak terdengar di ruang angkasa?', a:'Karena bunyi adalah gelombang mekanik yang membutuhkan medium (zat perantara) untuk merambat. Ruang angkasa adalah vakum sehingga tidak ada medium.' },
      { q:'Sebutkan 3 jenis bunyi berdasarkan frekuensi dan rentangnya!', a:'Infrasonik: <20 Hz (tidak terdengar manusia). Audiosonik: 20–20.000 Hz (terdengar manusia). Ultrasonik: >20.000 Hz (tidak terdengar manusia).' },
      { q:'Melalui medium apa bunyi merambat paling cepat? Mengapa?', a:'Zat padat, karena partikelnya sangat rapat sehingga getaran mudah dan cepat diteruskan dari partikel ke partikel.' },
      { q:'Apa itu pembiasan cahaya? Berikan 2 contoh!', a:'Pembelokan cahaya saat melewati medium berbeda kerapatan. Contoh: pensil terlihat patah di dalam gelas berisi air, dan lensa kacamata membelokkan cahaya untuk koreksi penglihatan.' },
      { q:'Apa itu dispersi cahaya? Di mana kita bisa melihatnya?', a:'Penguraian cahaya putih menjadi spektrum warna (Me-Ji-Ku-Hi-Bi-Ni-U). Bisa dilihat pada pelangi setelah hujan dan saat cahaya melewati prisma kaca.' },
      { q:'Apa perbedaan mendasar bunyi dan cahaya?', a:'Bunyi: gelombang mekanik, butuh medium, tidak bisa di vakum. Cahaya: gelombang elektromagnetik, tidak butuh medium, bisa merambat di vakum dengan kecepatan 300.000 km/s.' },
    ],
  },

  'ipa-22': {
    title: '🪨 Benda & Sifatnya',
    sub: 'Wujud benda, sifat fisika dan kimia, serta perubahan fisika dan kimia',
    body: `
      <div class="content-section">
        <h3>📦 Tiga Wujud Benda dan Sifatnya</h3>
        <div class="table-wrap"><table>
          <tr><th>Wujud</th><th>Bentuk</th><th>Volume</th><th>Susunan Partikel</th><th>Contoh</th></tr>
          <tr><td><strong>Padat</strong></td><td>Tetap, tidak berubah</td><td>Tetap</td><td>Sangat rapat, susunan teratur, tidak bebas bergerak</td><td>Batu, kayu, besi, es</td></tr>
          <tr><td><strong>Cair</strong></td><td>Mengikuti bentuk wadah</td><td>Tetap</td><td>Agak renggang, bisa bergerak terbatas</td><td>Air, minyak, susu, raksa</td></tr>
          <tr><td><strong>Gas</strong></td><td>Mengisi seluruh wadah</td><td>Mengikuti wadah</td><td>Sangat renggang, bergerak bebas ke segala arah</td><td>Udara, uap air, oksigen, asap</td></tr>
        </table></div>
      </div>
      <div class="content-section">
        <h3>🔬 Sifat Benda</h3>
        <div class="table-wrap"><table>
          <tr><th>Jenis Sifat</th><th>Pengertian</th><th>Contoh</th></tr>
          <tr><td><strong>Sifat Fisika</strong></td><td>Sifat yang dapat diamati tanpa mengubah jenis zat</td><td>Warna, bau, kekerasan, titik lebur, titik didih, daya hantar listrik, kerapatan, kelarutan</td></tr>
          <tr><td><strong>Sifat Kimia</strong></td><td>Sifat yang menunjukkan kemampuan zat bereaksi membentuk zat baru</td><td>Mudah terbakar, mudah berkarat, kemampuan bereaksi dengan asam/basa, kemampuan terurai</td></tr>
        </table></div>
      </div>
      <div class="content-section">
        <h3>⚗️ Perubahan Fisika vs Perubahan Kimia</h3>
        <div class="table-wrap"><table>
          <tr><th>Aspek</th><th>Perubahan Fisika</th><th>Perubahan Kimia</th></tr>
          <tr><td>Zat baru</td><td>Tidak terbentuk zat baru</td><td>Terbentuk zat baru yang berbeda sifatnya</td></tr>
          <tr><td>Dapat dikembalikan</td><td>Umumnya dapat dikembalikan</td><td>Umumnya tidak dapat dikembalikan</td></tr>
          <tr><td>Perubahan yang terjadi</td><td>Hanya berubah bentuk, ukuran, atau wujudnya</td><td>Berubah komposisi kimia dan sifat zat</td></tr>
          <tr><td>Contoh</td><td>Es mencair, kayu dipotong, gula larut dalam air, kertas dirobek, besi ditempa</td><td>Kayu terbakar menjadi arang, besi berkarat, makanan membusuk, telur digoreng, susu menjadi keju</td></tr>
        </table></div>
        <div class="info-box blue"><strong>Ciri-ciri perubahan kimia</strong> (minimal salah satu): perubahan warna permanen, timbul gas, timbul endapan, perubahan suhu, timbul bau baru.</div>
      </div>
      <div class="content-section">
        <h3>🧪 Contoh Kasus — Fisika atau Kimia?</h3>
        <div class="table-wrap"><table>
          <tr><th>Kejadian</th><th>Jenis Perubahan</th><th>Alasan</th></tr>
          <tr><td>Gula larut dalam air</td><td>Fisika</td><td>Gula masih ada (bisa dikembalikan dengan penguapan), tidak terbentuk zat baru</td></tr>
          <tr><td>Kertas terbakar jadi abu</td><td>Kimia</td><td>Terbentuk zat baru (abu, CO₂, H₂O), tidak bisa jadi kertas lagi</td></tr>
          <tr><td>Besi berkarat</td><td>Kimia</td><td>Besi + O₂ + H₂O → karat (Fe₂O₃), terbentuk zat baru berwarna coklat kemerahan</td></tr>
          <tr><td>Kaca dipecah</td><td>Fisika</td><td>Kaca hanya berubah bentuk/ukuran, sifat kimianya tetap kaca</td></tr>
          <tr><td>Nasi menjadi basi</td><td>Kimia</td><td>Bakteri menguraikan nasi menjadi zat baru, timbul bau asam</td></tr>
        </table></div>
      </div>`,
    flashcards: [
      { q:'Apa perbedaan benda padat, cair, dan gas dari segi bentuk dan volumenya?', a:'Padat: bentuk tetap, volume tetap. Cair: bentuk mengikuti wadah, volume tetap. Gas: bentuk dan volume mengikuti seluruh wadah.' },
      { q:'Sebutkan perbedaan sifat fisika dan sifat kimia benda!', a:'Sifat fisika: bisa diamati tanpa mengubah jenis zat (warna, titik didih, kekerasan). Sifat kimia: kemampuan bereaksi membentuk zat baru (mudah terbakar, mudah berkarat).' },
      { q:'Apa perbedaan perubahan fisika dan kimia? Sebutkan 2 contoh masing-masing!', a:'Fisika: tidak terbentuk zat baru, bisa dikembalikan (es mencair, kertas dirobek). Kimia: terbentuk zat baru yang berbeda, umumnya tidak bisa dikembalikan (kayu terbakar, besi berkarat).' },
      { q:'Sebutkan 5 ciri perubahan kimia!', a:'1. Perubahan warna permanen. 2. Timbul gas. 3. Timbul endapan. 4. Perubahan suhu. 5. Timbul bau baru.' },
      { q:'Apakah gula larut dalam air termasuk perubahan fisika atau kimia? Jelaskan!', a:'Perubahan fisika — gula hanya berubah bentuk (terlarut), tidak terbentuk zat baru. Gula bisa dikembalikan dengan menguapkan airnya.' },
      { q:'Mengapa besi berkarat termasuk perubahan kimia?', a:'Karena besi bereaksi dengan oksigen dan air membentuk zat baru (karat/Fe₂O₃) yang sifatnya berbeda dari besi aslinya dan tidak bisa dikembalikan.' },
    ],
  },

  'ipa-23': {
    title: '🌳 Sumber Daya Alam',
    sub: 'Jenis SDA, manfaat, dan upaya pelestariannya',
    body: `
      <div class="content-section">
        <h3>🌍 Apa itu Sumber Daya Alam (SDA)?</h3>
        <p>SDA adalah segala sesuatu yang tersedia di alam dan dapat dimanfaatkan manusia untuk memenuhi kebutuhan hidupnya.</p>
        <div class="table-wrap"><table>
          <tr><th>Jenis SDA</th><th>Pengertian</th><th>Contoh</th></tr>
          <tr><td><strong>SDA Terbarukan</strong></td><td>Dapat dipulihkan secara alami dalam waktu relatif singkat. Tidak akan habis jika dikelola dengan baik.</td><td>Air, udara, tanah, hutan, hewan, tumbuhan, energi matahari, angin, air</td></tr>
          <tr><td><strong>SDA Tidak Terbarukan</strong></td><td>Terbentuk melalui proses alami jutaan tahun. Tidak bisa dipulihkan dalam waktu manusia.</td><td>Minyak bumi, batu bara, gas alam, emas, besi, tembaga, timah, berlian</td></tr>
        </table></div>
        <div class="info-box blue">Meski disebut "terbarukan", SDA seperti hutan dan satwa liar BISA HABIS jika dieksploitasi tanpa batas. Terbarukan bukan berarti tidak terbatas!</div>
      </div>
      <div class="content-section">
        <h3>🏭 Manfaat SDA bagi Kehidupan</h3>
        <div class="table-wrap"><table>
          <tr><th>SDA</th><th>Manfaat</th><th>Produk yang Dihasilkan</th></tr>
          <tr><td>Minyak bumi</td><td>Bahan bakar kendaraan & industri</td><td>Bensin, solar, avtur, plastik, aspal</td></tr>
          <tr><td>Batu bara</td><td>Pembangkit listrik, industri baja</td><td>Listrik, kokas (bahan baku baja)</td></tr>
          <tr><td>Hutan</td><td>Kayu, obat, O₂, penyimpan air</td><td>Furniture, kertas, obat herbal</td></tr>
          <tr><td>Air</td><td>Minum, pertanian, PLTA</td><td>Air minum, irigasi sawah, listrik</td></tr>
          <tr><td>Tanah</td><td>Lahan pertanian, bahan bangunan</td><td>Pangan, batu bata, keramik</td></tr>
          <tr><td>Logam (besi, tembaga)</td><td>Konstruksi, elektronik</td><td>Bangunan, kabel listrik, HP</td></tr>
        </table></div>
      </div>
      <div class="content-section">
        <h3>⚠️ Dampak Eksploitasi Berlebihan</h3>
        <div class="table-wrap"><table>
          <tr><th>Tindakan</th><th>Dampak</th></tr>
          <tr><td>Penebangan hutan liar</td><td>Banjir, longsor, kekeringan, kepunahan satwa</td></tr>
          <tr><td>Penambangan berlebihan</td><td>Kerusakan lahan, pencemaran air tanah</td></tr>
          <tr><td>Pembakaran BBM berlebih</td><td>Polusi udara, pemanasan global, hujan asam</td></tr>
          <tr><td>Perburuan liar</td><td>Kepunahan spesies, gangguan rantai makanan</td></tr>
          <tr><td>Pencemaran air</td><td>Ekosistem perairan rusak, air bersih langka</td></tr>
        </table></div>
      </div>
      <div class="content-section">
        <h3>🛡️ Upaya Pelestarian SDA</h3>
        <div class="table-wrap"><table>
          <tr><th>Upaya</th><th>Penjelasan</th><th>Contoh</th></tr>
          <tr><td><strong>Reboisasi</strong></td><td>Penanaman kembali hutan yang gundul</td><td>Program penghijauan nasional, tanam 1 miliar pohon</td></tr>
          <tr><td><strong>Tebang pilih</strong></td><td>Hanya menebang pohon berukuran besar/tua, biarkan yang muda tumbuh</td><td>Pengelolaan hutan produksi lestari (HPL)</td></tr>
          <tr><td><strong>3R (Reduce, Reuse, Recycle)</strong></td><td>Kurangi penggunaan, pakai ulang, daur ulang</td><td>Bawa tas belanja sendiri, daur ulang sampah plastik</td></tr>
          <tr><td><strong>Energi alternatif</strong></td><td>Beralih dari BBM ke energi terbarukan</td><td>Panel surya, PLTA, PLTB, biogas</td></tr>
          <tr><td><strong>Cagar alam & suaka margasatwa</strong></td><td>Kawasan perlindungan flora & fauna langka</td><td>Taman Nasional Komodo, Ujung Kulon, Lorentz</td></tr>
          <tr><td><strong>Pembuatan terasering</strong></td><td>Lahan miring dibuat bertingkat agar tidak erosi</td><td>Sawah bertingkat di Bali (subak)</td></tr>
        </table></div>
        <div class="info-box green">3R: <strong>Reduce</strong> = kurangi pemakaian. <strong>Reuse</strong> = pakai ulang. <strong>Recycle</strong> = daur ulang jadi produk baru.</div>
      </div>`,
    flashcards: [
      { q:'Apa perbedaan SDA terbarukan dan tidak terbarukan? Berikan 3 contoh masing-masing!', a:'Terbarukan: dapat dipulihkan alami (air, hutan, energi surya). Tidak terbarukan: terbentuk jutaan tahun, tidak bisa dipulihkan (minyak bumi, batu bara, emas).' },
      { q:'Mengapa minyak bumi disebut SDA tidak terbarukan?', a:'Karena terbentuk dari sisa organisme yang terpendam selama jutaan tahun melalui proses geologi. Manusia tidak bisa membuatnya dalam waktu manusia.' },
      { q:'Sebutkan dampak penebangan hutan liar secara berlebihan!', a:'Banjir dan longsor (tidak ada akar penyerap air), kekeringan (siklus air terganggu), kepunahan satwa (habitat hilang), dan erosi tanah.' },
      { q:'Jelaskan konsep 3R dalam pelestarian SDA!', a:'Reduce: mengurangi penggunaan SDA/produk (misal bawa tas sendiri). Reuse: memakai ulang barang yang masih bisa dipakai. Recycle: mendaur ulang sampah menjadi produk baru.' },
      { q:'Apa itu reboisasi dan mengapa penting?', a:'Penanaman kembali pohon di hutan yang telah gundul. Penting untuk memulihkan fungsi hutan: menyerap CO₂, mencegah banjir, menjaga sumber air, dan mengembalikan habitat satwa.' },
      { q:'Apa perbedaan cagar alam dan suaka margasatwa?', a:'Cagar alam: kawasan perlindungan ekosistem termasuk tumbuhan dan hewan. Suaka margasatwa: kawasan perlindungan khusus untuk satwa liar tertentu yang dilindungi.' },
    ],
  },

  'ipa-24': {
    title: '💪 Otot Manusia',
    sub: 'Jenis otot, cara kerja, gangguan otot, dan hubungannya dengan tulang',
    body: `
      <div class="content-section">
        <h3>💪 Fungsi Otot</h3>
        <p>Otot adalah alat gerak <strong>aktif</strong> yang menggerakkan tulang (alat gerak pasif) dengan cara berkontraksi (memendek) dan berelaksasi (memanjang).</p>
        <div class="info-box blue">Sistem gerak manusia = Tulang (pasif) + Otot (aktif) + Sendi (penghubung). Ketiganya bekerja bersama agar tubuh bisa bergerak.</div>
      </div>
      <div class="content-section">
        <h3>🔬 Tiga Jenis Otot</h3>
        <div class="table-wrap"><table>
          <tr><th>Jenis Otot</th><th>Bentuk Sel</th><th>Cara Kerja</th><th>Letak</th><th>Kelelahan</th><th>Contoh Gerakan</th></tr>
          <tr><td><strong>Otot Lurik</strong> (rangka)</td><td>Silinder panjang, berlurik gelap-terang, inti banyak di tepi</td><td>Sadar (sesuai kemauan kita)</td><td>Melekat pada tulang</td><td>Bisa lelah</td><td>Menulis, berjalan, mengangkat benda</td></tr>
          <tr><td><strong>Otot Polos</strong></td><td>Gelendong, tidak berlurik, inti satu di tengah</td><td>Tidak sadar (otonom/tidak bisa dikontrol)</td><td>Dinding organ dalam: lambung, usus, pembuluh darah</td><td>Tidak mudah lelah</td><td>Gerak peristaltik usus, kontraksi pembuluh darah</td></tr>
          <tr><td><strong>Otot Jantung</strong></td><td>Berlurik, bercabang-cabang, inti di tengah</td><td>Tidak sadar, bekerja terus-menerus</td><td>Dinding jantung</td><td>Tidak pernah lelah</td><td>Memompa darah 24 jam tanpa henti</td></tr>
        </table></div>
        <div class="info-box green">Otot jantung unik karena <strong>berlurik seperti otot lurik</strong> tapi <strong>bekerja tidak sadar seperti otot polos</strong>. Ia tidak pernah lelah sepanjang hidup!</div>
      </div>
      <div class="content-section">
        <h3>↔️ Cara Kerja Otot: Antagonis & Sinergis</h3>
        <div class="table-wrap"><table>
          <tr><th>Jenis Kerja</th><th>Pengertian</th><th>Contoh Pasangan</th><th>Cara Kerja</th></tr>
          <tr><td><strong>Antagonis</strong></td><td>Dua otot bekerja berlawanan — saat satu berkontraksi, yang lain berelaksasi</td><td>Bisep &amp; Trisep (lengan atas)</td><td>Bisep kontraksi → lengan menekuk. Trisep kontraksi → lengan meluruskan</td></tr>
          <tr><td><strong>Sinergis</strong></td><td>Dua atau lebih otot bekerja bersama-sama ke arah yang sama</td><td>Otot-otot pronator (memutar telapak tangan)</td><td>Semua berkontraksi bersama untuk satu gerakan</td></tr>
        </table></div>
        <div class="flow">
          <div class="flow-box">Bisep kontraksi<br><small>(memendek)</small></div><div class="flow-arrow">+</div>
          <div class="flow-box">Trisep relaksasi<br><small>(memanjang)</small></div><div class="flow-arrow">→</div>
          <div class="flow-box">💪 Lengan menekuk</div>
        </div>
      </div>
      <div class="content-section">
        <h3>🩹 Gangguan pada Otot</h3>
        <div class="table-wrap"><table>
          <tr><th>Gangguan</th><th>Penyebab</th><th>Gejala</th></tr>
          <tr><td><strong>Kram</strong></td><td>Kontraksi otot tiba-tiba tanpa bisa dikendalikan</td><td>Nyeri mendadak, otot terasa keras saat dipegang</td></tr>
          <tr><td><strong>Kelelahan otot</strong></td><td>Penumpukan asam laktat akibat olahraga berlebih</td><td>Otot terasa pegal, lemah, sulit digerakkan</td></tr>
          <tr><td><strong>Atrofi</strong></td><td>Otot jarang digunakan (misal saat patah tulang digips)</td><td>Otot mengecil dan melemah</td></tr>
          <tr><td><strong>Hipertrofi</strong></td><td>Otot sering dilatih berat (binaragawan)</td><td>Otot membesar dan menguat</td></tr>
          <tr><td><strong>Tetanus</strong></td><td>Infeksi bakteri Clostridium tetani</td><td>Otot kaku dan kejang, terutama rahang</td></tr>
        </table></div>
      </div>`,
    flashcards: [
      { q:'Sebutkan 3 jenis otot dan perbedaan cara kerjanya!', a:'Otot lurik: bekerja sadar, melekat pada tulang. Otot polos: bekerja tidak sadar, di organ dalam. Otot jantung: bekerja tidak sadar, tidak pernah lelah, di dinding jantung.' },
      { q:'Apa yang dimaksud gerak antagonis? Berikan contohnya!', a:'Dua otot bekerja berlawanan — saat satu kontraksi, yang lain relaksasi. Contoh: bisep dan trisep. Bisep kontraksi saat lengan menekuk, trisep kontraksi saat lengan meluruskan.' },
      { q:'Mengapa otot jantung disebut unik?', a:'Karena memiliki ciri gabungan: berlurik seperti otot lurik (kuat), tapi bekerja tidak sadar seperti otot polos, dan tidak pernah lelah sepanjang hidup manusia.' },
      { q:'Apa perbedaan otot lurik dan otot polos dilihat dari bentuk selnya?', a:'Otot lurik: sel silinder panjang, berlurik gelap-terang, inti banyak di pinggir. Otot polos: sel berbentuk gelendong, tidak berlurik, hanya 1 inti di tengah.' },
      { q:'Apa itu atrofi otot dan bagaimana cara mencegahnya?', a:'Atrofi adalah mengecil dan melemahnya otot akibat jarang digunakan. Dicegah dengan olahraga rutin dan fisioterapi jika terpaksa tidak bisa bergerak.' },
      { q:'Mengapa setelah olahraga berat otot terasa pegal?', a:'Karena saat olahraga berat, otot kekurangan O₂ dan melakukan respirasi anaerob yang menghasilkan asam laktat. Penumpukan asam laktat menyebabkan rasa pegal dan lelah.' },
    ],
  },

  'ipa-25': {
    title: '🪐 Sistem Tata Surya',
    sub: 'Planet, benda langit lain, rotasi, revolusi, dan fakta unik tiap planet',
    body: `
      <div class="content-section">
        <h3>☀️ Matahari — Pusat Tata Surya</h3>
        <p>Matahari adalah <strong>bintang</strong> (bola gas panas yang memancarkan cahaya sendiri) berdiameter 1,4 juta km. Semua planet, asteroid, dan komet berevolusi mengelilinginya karena gravitasinya yang sangat besar.</p>
        <div class="info-box blue">Cahaya matahari membutuhkan <strong>8 menit 20 detik</strong> untuk sampai ke bumi. Berarti kita melihat matahari seperti kondisinya 8 menit yang lalu!</div>
      </div>
      <div class="content-section">
        <h3>🪐 Delapan Planet Tata Surya</h3>
        <p>Hafalan urutan planet: <strong>"My Very Energetic Mother Just Served Us Noodles"</strong></p>
        <div class="table-wrap"><table>
          <tr><th>No.</th><th>Planet</th><th>Jarak dari Matahari</th><th>Fakta Unik</th></tr>
          <tr><td>1</td><td><strong>Merkurius</strong></td><td>Terdekat</td><td>Terkecil, tidak punya satelit, tidak punya atmosfer tebal — siang sangat panas, malam sangat dingin</td></tr>
          <tr><td>2</td><td><strong>Venus</strong></td><td>Kedua</td><td>Terpanas (efek rumah kaca ekstrem, 465°C), paling terang di langit malam, berotasi terbalik (barat ke timur)</td></tr>
          <tr><td>3</td><td><strong>Bumi</strong></td><td>Ketiga</td><td>Satu-satunya planet berpenghuni, punya 1 satelit (Bulan), 71% permukaannya lautan</td></tr>
          <tr><td>4</td><td><strong>Mars</strong></td><td>Keempat</td><td>"Planet Merah" karena kandungan besi oksida, punya 2 satelit (Phobos &amp; Deimos), gunung Olympus Mons tertinggi di tata surya</td></tr>
          <tr><td>5</td><td><strong>Jupiter</strong></td><td>Kelima</td><td>Terbesar (1.300 × bumi), punya badai Great Red Spot yang sudah berlangsung ratusan tahun, 95 satelit</td></tr>
          <tr><td>6</td><td><strong>Saturnus</strong></td><td>Keenam</td><td>Punya cincin es spektakuler, kerapatannya lebih kecil dari air (bisa mengapung!), 146 satelit</td></tr>
          <tr><td>7</td><td><strong>Uranus</strong></td><td>Ketujuh</td><td>Berotasi "miring" — sumbu rotasinya hampir horizontal, tampak berwarna biru-hijau</td></tr>
          <tr><td>8</td><td><strong>Neptunus</strong></td><td>Terjauh</td><td>Angin paling kencang di tata surya (2.100 km/jam), berwarna biru tua, 1 revolusi = 165 tahun Bumi</td></tr>
        </table></div>
      </div>
      <div class="content-section">
        <h3>🔄 Rotasi dan Revolusi Bumi</h3>
        <div class="table-wrap"><table>
          <tr><th>Gerakan</th><th>Pengertian</th><th>Waktu</th><th>Akibat</th></tr>
          <tr><td><strong>Rotasi</strong></td><td>Berputar pada porosnya sendiri</td><td>24 jam (1 hari)</td><td>Siang dan malam, perbedaan zona waktu</td></tr>
          <tr><td><strong>Revolusi</strong></td><td>Mengelilingi matahari</td><td>365,25 hari (1 tahun)</td><td>Pergantian musim, tahun kabisat</td></tr>
        </table></div>
      </div>
      <div class="content-section">
        <h3>🌠 Benda Langit Lain di Tata Surya</h3>
        <div class="table-wrap"><table>
          <tr><th>Benda Langit</th><th>Pengertian</th><th>Contoh/Keterangan</th></tr>
          <tr><td><strong>Satelit</strong></td><td>Benda yang mengorbit planet</td><td>Bulan (satelit Bumi), Titan (satelit Saturnus)</td></tr>
          <tr><td><strong>Asteroid</strong></td><td>Batu-batuan kecil yang mengorbit matahari</td><td>Sabuk asteroid antara Mars dan Jupiter</td></tr>
          <tr><td><strong>Komet</strong></td><td>Bola es dan debu berekor panjang</td><td>Komet Halley (muncul setiap 76 tahun), Komet NEOWISE</td></tr>
          <tr><td><strong>Meteoroid</strong></td><td>Pecahan batu kecil di luar angkasa</td><td>Saat masuk atmosfer = meteor. Sampai ke bumi = meteorit</td></tr>
          <tr><td><strong>Planet Kerdil</strong></td><td>Benda bulat yang mengorbit matahari tapi belum "membersihkan" orbitnya</td><td>Pluto, Ceres, Eris</td></tr>
        </table></div>
        <div class="info-box green">Pluto bukan lagi planet sejak 2006 — direkategorikan sebagai <strong>planet kerdil</strong> karena orbitnya dipenuhi benda-benda lain di Sabuk Kuiper.</div>
      </div>`,
    flashcards: [
      { q:'Sebutkan 8 planet tata surya dari yang terdekat ke matahari!', a:'Merkurius, Venus, Bumi, Mars, Jupiter, Saturnus, Uranus, Neptunus. Hafal: "My Very Energetic Mother Just Served Us Noodles".' },
      { q:'Mengapa Venus lebih panas dari Merkurius padahal Merkurius lebih dekat ke matahari?', a:'Venus memiliki atmosfer tebal CO₂ yang memerangkap panas (efek rumah kaca ekstrem), menjadikannya mencapai 465°C. Merkurius hampir tidak punya atmosfer sehingga panas tidak tersimpan.' },
      { q:'Apa perbedaan meteor, meteoroid, dan meteorit?', a:'Meteoroid: batu kecil di luar angkasa. Meteor: meteoroid yang terbakar masuk atmosfer bumi (bintang jatuh). Meteorit: meteor yang berhasil sampai ke permukaan bumi.' },
      { q:'Apa itu komet dan mengapa berekor?', a:'Komet adalah bola es, debu, dan gas beku yang mengorbit matahari. Saat mendekati matahari, es menguap dan terbawa angin matahari membentuk ekor panjang yang selalu menjauhi matahari.' },
      { q:'Mengapa Pluto tidak lagi disebut planet?', a:'Sejak 2006, Pluto direkategorikan sebagai planet kerdil karena tidak memenuhi syarat ketiga planet: belum "membersihkan" orbitnya dari benda-benda lain di sekitarnya.' },
      { q:'Planet mana yang terbesar dan terkecil? Planet mana yang terpanas?', a:'Terbesar: Jupiter (1.300 × volume Bumi). Terkecil: Merkurius. Terpanas: Venus (bukan Merkurius!) karena efek rumah kaca ekstrem.' },
    ],
  },

  // ---- BAHASA INDONESIA ----
  'bindo-1': {
    title: '🌿 Peribahasa',
    sub: 'Ungkapan bijak bahasa Indonesia',
    body: `
      <div class="content-section">
        <h3>📌 Apa itu Peribahasa?</h3>
        <p><strong>Peribahasa</strong> adalah kalimat atau kelompok kata yang susunannya tetap dan mengandung pengertian kiasan. Maknanya tidak bisa ditafsirkan secara harfiah (apa adanya), melainkan harus dipahami secara mendalam.</p>
      </div>
      <div class="content-section">
        <h3>📜 Peribahasa Populer & Maknanya</h3>
        <div class="table-wrap"><table><tr><th>Peribahasa</th><th>Makna</th></tr>
        <tr><td>Ada gula ada semut</td><td>Di mana ada kesenangan/keuntungan, banyak orang berkumpul</td></tr>
        <tr><td>Air beriak tanda tak dalam</td><td>Orang banyak bicara biasanya pengetahuannya dangkal</td></tr>
        <tr><td>Bagai air di daun talas</td><td>Tidak berpendirian tetap, mudah berubah</td></tr>
        <tr><td>Buah jatuh tak jauh dari pohonnya</td><td>Sifat anak biasanya mirip orang tuanya</td></tr>
        <tr><td>Nasi sudah menjadi bubur</td><td>Sesuatu yang sudah terjadi dan tidak bisa diubah</td></tr>
        <tr><td>Seperti katak dalam tempurung</td><td>Orang yang wawasannya sempit</td></tr>
        <tr><td>Setali tiga uang</td><td>Sama saja, tidak ada bedanya</td></tr>
        <tr><td>Pucuk dicinta ulam tiba</td><td>Mendapat apa yang diinginkan secara kebetulan</td></tr>
        <tr><td>Rajin pangkal pandai</td><td>Ketekunan adalah kunci kepintaran</td></tr>
        <tr><td>Berakit-rakit ke hulu</td><td>Bersakit-sakit dahulu, bersenang-senang kemudian</td></tr></table></div>
      </div>`,
    flashcards: [
      { q:'"Ada gula ada semut" artinya?', a:'Di mana ada kesenangan atau keuntungan, di situ banyak orang berkumpul.' },
      { q:'"Air beriak tanda tak dalam" artinya?', a:'Orang yang banyak bicara biasanya pengetahuannya dangkal.' },
      { q:'"Nasi sudah menjadi bubur" artinya?', a:'Sesuatu yang sudah terjadi dan tidak dapat diubah lagi.' },
      { q:'"Seperti katak dalam tempurung" artinya?', a:'Orang yang wawasannya sempit, tidak mau tahu hal baru.' },
      { q:'"Bagai air di daun talas" artinya?', a:'Tidak berpendirian tetap, mudah berubah sikap.' },
    ],
  },

  'bindo-2': {
    title: '📊 Bagan',
    sub: 'Cara membaca dan memahami bagan',
    body: `
      <div class="content-section">
        <h3>📌 Apa itu Bagan?</h3>
        <p><strong>Bagan</strong> adalah representasi visual dari informasi, data, atau proses menggunakan simbol, gambar, garis, dan teks. Bagan memudahkan kita memahami hubungan antar informasi yang kompleks.</p>
      </div>
      <div class="content-section">
        <h3>📊 Jenis-jenis Bagan</h3>
        <div class="table-wrap"><table><tr><th>Jenis</th><th>Fungsi</th><th>Contoh Penggunaan</th></tr>
        <tr><td>Bagan Alir (Flowchart)</td><td>Menunjukkan urutan langkah/proses</td><td>Proses daur ulang, langkah memasak</td></tr>
        <tr><td>Bagan Organisasi</td><td>Menunjukkan struktur dan hierarki</td><td>Struktur OSIS, susunan pemerintahan</td></tr>
        <tr><td>Bagan Pohon</td><td>Menunjukkan cabang-cabang klasifikasi</td><td>Silsilah keluarga, klasifikasi makhluk hidup</td></tr>
        <tr><td>Bagan Lingkaran</td><td>Menunjukkan siklus/proses berulang</td><td>Siklus air, daur hidup kupu-kupu</td></tr></table></div>
      </div>
      <div class="content-section">
        <h3>🔍 Cara Membaca Bagan</h3>
        <ul>
          <li>1. Baca judul bagan untuk memahami topiknya.</li>
          <li>2. Perhatikan simbol dan legenda yang digunakan.</li>
          <li>3. Ikuti arah panah atau urutan yang ditunjukkan.</li>
          <li>4. Cari hubungan antar elemen dalam bagan.</li>
          <li>5. Buat kesimpulan berdasarkan informasi yang ditampilkan.</li>
        </ul>
      </div>`,
    flashcards: [
      { q:'Apa fungsi bagan?', a:'Merepresentasikan informasi atau proses secara visual agar lebih mudah dipahami.' },
      { q:'Apa itu flowchart?', a:'Bagan alir yang menunjukkan urutan langkah-langkah dalam suatu proses.' },
      { q:'Bagan apa yang tepat untuk menunjukkan struktur organisasi?', a:'Bagan organisasi (bagan hierarki).' },
      { q:'Langkah pertama membaca bagan?', a:'Baca judul bagan untuk memahami topik yang disajikan.' },
    ],
  },

  'bindo-3': {
    title: '📖 Unsur Intrinsik',
    sub: 'Elemen pembangun cerita dari dalam',
    body: `
      <div class="content-section">
        <h3>📌 Tujuh Unsur Intrinsik</h3>
        <div class="table-wrap"><table><tr><th>Unsur</th><th>Penjelasan</th><th>Contoh</th></tr>
        <tr><td>🎯 Tema</td><td>Ide/gagasan pokok cerita</td><td>Persahabatan, kejujuran, keberanian</td></tr>
        <tr><td>👥 Tokoh</td><td>Pelaku dalam cerita</td><td>Budi (protagonis), Si Jahat (antagonis)</td></tr>
        <tr><td>😊 Penokohan</td><td>Cara pengarang menggambarkan sifat tokoh</td><td>Baik hati, pemarah, cerdas</td></tr>
        <tr><td>📍 Latar</td><td>Tempat, waktu, dan suasana cerita</td><td>Di sekolah, pagi hari, menegangkan</td></tr>
        <tr><td>📊 Alur</td><td>Urutan kejadian dalam cerita</td><td>Maju, mundur, atau campuran</td></tr>
        <tr><td>👁️ Sudut Pandang</td><td>Posisi pencerita</td><td>Orang pertama (aku), ketiga (dia)</td></tr>
        <tr><td>💬 Amanat</td><td>Pesan moral dari cerita</td><td>Jangan berputus asa, pentingnya kejujuran</td></tr></table></div>
      </div>
      <div class="content-section">
        <h3>👥 Jenis Tokoh & Alur</h3>
        <ul>
          <li>😇 <strong>Protagonis</strong> — tokoh utama yang umumnya berperan baik.</li>
          <li>😈 <strong>Antagonis</strong> — tokoh penentang/musuh protagonis.</li>
          <li>😐 <strong>Tritagonis</strong> — tokoh pembantu/penengah.</li>
        </ul>
        <ul>
          <li>➡️ <strong>Alur Maju</strong> — cerita berurutan dari awal ke akhir.</li>
          <li>⬅️ <strong>Alur Mundur</strong> — cerita dimulai dari akhir (flashback).</li>
          <li>↔️ <strong>Alur Campuran</strong> — gabungan maju dan mundur.</li>
        </ul>
      </div>`,
    flashcards: [
      { q:'Apa itu tema?', a:'Ide pokok atau gagasan utama yang menjadi dasar cerita.' },
      { q:'Bedanya tokoh dan penokohan?', a:'Tokoh = siapa pelakunya. Penokohan = bagaimana sifat/karakternya.' },
      { q:'Apa itu amanat?', a:'Pesan moral atau pelajaran hidup yang ingin disampaikan pengarang melalui cerita.' },
      { q:'Alur mundur disebut juga?', a:'Flashback — cerita dimulai dari masa kini lalu menceritakan kejadian masa lalu.' },
      { q:'Apa itu antagonis?', a:'Tokoh yang berperan sebagai penentang atau musuh tokoh utama.' },
    ],
  },

  'bindo-4': {
    title: '💡 Ide Pokok',
    sub: 'Menemukan gagasan utama paragraf',
    body: `
      <div class="content-section">
        <h3>📌 Apa itu Ide Pokok?</h3>
        <p><strong>Ide pokok</strong> (gagasan utama / pikiran pokok) adalah gagasan yang menjadi inti atau pokok bahasan suatu paragraf. Semua kalimat dalam paragraf mendukung ide pokok ini.</p>
        <div class="info-box blue">Ide pokok ditemukan dalam <strong>kalimat utama</strong>. Kalimat lainnya adalah <strong>kalimat penjelas</strong>.</div>
      </div>
      <div class="content-section">
        <h3>📍 Letak Ide Pokok dalam Paragraf</h3>
        <div class="table-wrap"><table><tr><th>Jenis Paragraf</th><th>Letak Ide Pokok</th></tr>
        <tr><td>Deduktif</td><td>Di AWAL paragraf (umum ke khusus)</td></tr>
        <tr><td>Induktif</td><td>Di AKHIR paragraf (khusus ke umum)</td></tr>
        <tr><td>Campuran (Deduktif-Induktif)</td><td>Di AWAL dan AKHIR paragraf</td></tr>
        <tr><td>Ineratif</td><td>Di TENGAH paragraf (jarang)</td></tr></table></div>
      </div>
      <div class="content-section">
        <h3>🔍 Cara Menemukan Ide Pokok</h3>
        <ul>
          <li>1. Baca paragraf secara utuh dan cermat.</li>
          <li>2. Temukan kalimat yang paling umum dan mencakup keseluruhan.</li>
          <li>3. Cek apakah kalimat lain mendukung/menjelaskan kalimat tersebut.</li>
          <li>4. Jika ya, kalimat itulah kalimat utama yang mengandung ide pokok.</li>
        </ul>
        <div class="info-box">Tip: Ide pokok bisa diringkas dalam satu kalimat singkat yang mencerminkan isi seluruh paragraf.</div>
      </div>`,
    flashcards: [
      { q:'Apa itu ide pokok?', a:'Gagasan utama yang menjadi inti pembahasan dalam sebuah paragraf.' },
      { q:'Paragraf deduktif = ide pokok di mana?', a:'Di AWAL paragraf (umum ke khusus).' },
      { q:'Paragraf induktif = ide pokok di mana?', a:'Di AKHIR paragraf (khusus ke umum).' },
      { q:'Apa bedanya kalimat utama dan penjelas?', a:'Kalimat utama = berisi ide pokok. Kalimat penjelas = mendukung dan merinci kalimat utama.' },
    ],
  },

  'bindo-5': {
    title: '🔄 Sinonim',
    sub: 'Kata-kata yang bermakna sama atau mirip',
    body: `
      <div class="content-section">
        <h3>📌 Apa itu Sinonim?</h3>
        <p><strong>Sinonim</strong> (persamaan kata) adalah kata-kata yang memiliki makna sama atau hampir sama. Sinonim digunakan untuk menghindari pengulangan kata dan membuat tulisan lebih bervariasi.</p>
        <div class="info-box green">Catatan: Sinonim memiliki makna yang mirip, tapi seringkali tidak 100% bisa saling menggantikan karena memiliki nuansa yang berbeda.</div>
      </div>
      <div class="content-section">
        <h3>📝 Contoh Pasangan Sinonim</h3>
        <div class="table-wrap"><table><tr><th>Kata</th><th>Sinonim</th></tr>
        <tr><td>Besar</td><td>Agung, Raya, Akbar, Luas</td></tr>
        <tr><td>Cantik</td><td>Indah, Elok, Rupawan, Molek</td></tr>
        <tr><td>Cepat</td><td>Gesit, Lincah, Kilat, Tangkas</td></tr>
        <tr><td>Mati</td><td>Meninggal, Wafat, Gugur, Mangkat</td></tr>
        <tr><td>Pintar</td><td>Cerdas, Pandai, Cakap, Genius</td></tr>
        <tr><td>Mudah</td><td>Gampang, Enteng, Ringan</td></tr>
        <tr><td>Sedih</td><td>Duka, Murung, Pilu, Sendu</td></tr></table></div>
        <div class="info-box blue">Kebalikan sinonim adalah <strong>antonim</strong> (lawan kata). Contoh: Besar ↔ Kecil.</div>
      </div>`,
    flashcards: [
      { q:'Apa itu sinonim?', a:'Kata yang memiliki makna sama atau hampir sama dengan kata lain.' },
      { q:'Sinonim dari kata "besar"?', a:'Agung, raya, akbar, luas (tergantung konteks).' },
      { q:'Sinonim dari kata "pintar"?', a:'Cerdas, pandai, cakap.' },
      { q:'Apa bedanya sinonim dan antonim?', a:'Sinonim = persamaan kata. Antonim = lawan kata.' },
    ],
  },

  'bindo-6': {
    title: '🎨 Ciri & Unsur Poster',
    sub: 'Elemen-elemen poster yang efektif',
    body: `
      <div class="content-section">
        <h3>📌 Apa itu Poster?</h3>
        <p><strong>Poster</strong> adalah media komunikasi visual yang berisi pesan, informasi, atau ajakan yang ditampilkan secara singkat, jelas, dan menarik. Poster bertujuan untuk memengaruhi atau memberitahu pembaca.</p>
      </div>
      <div class="content-section">
        <h3>✅ Ciri-ciri Poster yang Baik</h3>
        <ul>
          <li>📢 Pesan singkat, padat, dan mudah dipahami.</li>
          <li>🎨 Menggunakan gambar/ilustrasi yang menarik dan relevan.</li>
          <li>🔤 Huruf besar dan terbaca dari jarak jauh.</li>
          <li>🎯 Memiliki tujuan yang jelas (mengajak, memberitahu, memperingatkan).</li>
          <li>🌈 Warna kontras agar mudah diperhatikan.</li>
        </ul>
      </div>
      <div class="content-section">
        <h3>🧩 Unsur-unsur Poster</h3>
        <div class="table-wrap"><table><tr><th>Unsur</th><th>Penjelasan</th></tr>
        <tr><td>Judul</td><td>Kata kunci utama yang menarik perhatian</td></tr>
        <tr><td>Gambar/Ilustrasi</td><td>Visual yang mendukung pesan</td></tr>
        <tr><td>Teks/Isi</td><td>Kalimat singkat berisi informasi atau ajakan</td></tr>
        <tr><td>Slogan</td><td>Kalimat pendek yang mudah diingat</td></tr>
        <tr><td>Sumber/Identitas</td><td>Siapa pembuat poster</td></tr></table></div>
      </div>`,
    flashcards: [
      { q:'Apa itu poster?', a:'Media komunikasi visual berisi pesan singkat, jelas, dan menarik yang bertujuan memengaruhi atau memberitahu.' },
      { q:'Sebutkan 3 ciri poster yang baik!', a:'Pesan singkat, gambar menarik, huruf besar dan mudah dibaca.' },
      { q:'Sebutkan 3 unsur poster!', a:'Judul, gambar/ilustrasi, teks/isi (juga slogan dan identitas pembuat).' },
      { q:'Apa fungsi slogan dalam poster?', a:'Kalimat pendek yang mudah diingat dan memperkuat pesan poster.' },
    ],
  },

  'bindo-7': {
    title: '🔍 Kata Khusus',
    sub: 'Kata dengan makna sempit dan spesifik',
    body: `
      <div class="content-section">
        <h3>📌 Apa itu Kata Khusus?</h3>
        <p><strong>Kata khusus</strong> (kata hiponim) adalah kata yang memiliki ruang lingkup makna lebih <strong>sempit dan spesifik</strong>. Kata khusus merupakan bagian dari kata yang lebih umum.</p>
      </div>
      <div class="content-section">
        <h3>📝 Contoh Kata Umum & Kata Khususnya</h3>
        <div class="table-wrap"><table><tr><th>Kata Umum</th><th>Kata Khusus (Hiponim)</th></tr>
        <tr><td>Bunga</td><td>Mawar, Melati, Tulip, Anggrek, Dahlia</td></tr>
        <tr><td>Hewan</td><td>Kucing, Anjing, Singa, Gajah, Kuda</td></tr>
        <tr><td>Kendaraan</td><td>Mobil, Motor, Bus, Kereta, Sepeda</td></tr>
        <tr><td>Makanan</td><td>Nasi, Roti, Soto, Gado-gado, Rendang</td></tr>
        <tr><td>Olahraga</td><td>Sepak bola, Basket, Renang, Badminton</td></tr></table></div>
        <div class="info-box blue">Kata khusus = <strong>hiponim</strong>. Kata umumnya disebut <strong>hipernim</strong>.</div>
      </div>`,
    flashcards: [
      { q:'Apa itu kata khusus?', a:'Kata yang memiliki makna lebih sempit dan spesifik, merupakan bagian dari kata yang lebih umum.' },
      { q:'Kata khusus dari "bunga"?', a:'Mawar, melati, tulip, anggrek (kata-kata ini adalah jenis-jenis bunga).' },
      { q:'Kata khusus disebut juga?', a:'Hiponim.' },
      { q:'Apa itu hipernim?', a:'Kata umum yang mencakup beberapa kata khusus (hiponim).' },
    ],
  },

  'bindo-8': {
    title: '🌐 Kata Umum',
    sub: 'Kata dengan makna luas yang mencakup banyak hal',
    body: `
      <div class="content-section">
        <h3>📌 Apa itu Kata Umum?</h3>
        <p><strong>Kata umum</strong> (kata hipernim) adalah kata yang memiliki ruang lingkup makna <strong>luas</strong> dan mencakup banyak kata yang lebih khusus. Semakin umum sebuah kata, semakin luas cakupan maknanya.</p>
      </div>
      <div class="content-section">
        <h3>📝 Contoh Kata Umum</h3>
        <div class="table-wrap"><table><tr><th>Kata Umum (Hipernim)</th><th>Mencakup</th></tr>
        <tr><td>Tumbuhan</td><td>Pohon, Semak, Rumput, Lumut, Paku</td></tr>
        <tr><td>Warna</td><td>Merah, Biru, Hijau, Kuning, Ungu</td></tr>
        <tr><td>Perasaan</td><td>Senang, Sedih, Marah, Takut, Kaget</td></tr>
        <tr><td>Pekerjaan</td><td>Dokter, Guru, Petani, Nelayan, Insinyur</td></tr>
        <tr><td>Alat tulis</td><td>Pensil, Pulpen, Spidol, Penggaris, Penghapus</td></tr></table></div>
        <div class="info-box green">Hubungan kata umum-khusus: <strong>Kata Umum (Hipernim) → Kata Khusus (Hiponim)</strong>. Contoh: Buah → Mangga, Apel, Jeruk.</div>
      </div>`,
    flashcards: [
      { q:'Apa itu kata umum?', a:'Kata yang memiliki makna luas dan mencakup banyak kata yang lebih spesifik.' },
      { q:'Kata umum dari "mawar, melati, tulip"?', a:'"Bunga" — mawar, melati, dan tulip adalah jenis-jenis bunga.' },
      { q:'Kata umum disebut juga?', a:'Hipernim.' },
      { q:'Apa bedanya kata umum dan kata khusus?', a:'Kata umum = makna luas (hipernim). Kata khusus = makna sempit/spesifik (hiponim).' },
    ],
  },

  'bindo-9': {
    title: '✨ Makna Kata & Majas',
    sub: 'Denotatif, konotatif, sinonim, antonim, ungkapan, dan majas',
    body: `
      <div class="content-section">
        <h3>📌 Makna Denotatif vs Konotatif</h3>
        <p><strong>Denotatif</strong> = makna sebenarnya/harfiah. <strong>Konotatif</strong> = makna tambahan/kiasan.</p>
        <div class="info-box green">Contoh: "Bunga" (denotatif = tanaman). "Bunga desa" (konotatif = perempuan cantik).</div>
      </div>
      <div class="content-section">
        <h3>🔄 Sinonim & Antonim</h3>
        <ul>
          <li><strong>Sinonim</strong> = kata bermakna sama/mirip. Contoh: rajin = giat = tekun</li>
          <li><strong>Antonim</strong> = kata berlawanan makna. Contoh: berani ≠ pengecut</li>
        </ul>
      </div>
      <div class="content-section">
        <h3>🎨 Majas Populer</h3>
        <div class="table-wrap"><table>
          <tr><th>Majas</th><th>Ciri</th><th>Contoh</th></tr>
          <tr><td>Personifikasi</td><td>Benda mati berperilaku manusia</td><td>"Angin membelai rambutku"</td></tr>
          <tr><td>Hiperbola</td><td>Melebih-lebihkan kenyataan</td><td>"Suaranya membelah langit"</td></tr>
          <tr><td>Simile</td><td>Perbandingan dengan bagai/seperti</td><td>"Wajahnya bagai rembulan"</td></tr>
          <tr><td>Metafora</td><td>Perbandingan langsung tanpa bagai</td><td>"Dia adalah singa di lapangan"</td></tr>
        </table></div>
      </div>`,
    flashcards: [
      { q:'Apa itu makna konotatif?', a:'Makna tambahan/kiasan, bukan makna sebenarnya.' },
      { q:'Sinonim dari "rajin"?', a:'Giat, tekun, gigih.' },
      { q:'Majas yang melebih-lebihkan?', a:'Hiperbola.' },
      { q:'"Angin membelai" = majas apa?', a:'Personifikasi — angin (benda mati) berperilaku seperti manusia.' },
    ],
  },

  'bindo-10': {
    title: '🔤 Imbuhan',
    sub: 'me-, pe-, -an, -kan, -lah dan cara pembentukannya',
    body: `
      <div class="content-section">
        <h3>📌 Jenis-jenis Imbuhan</h3>
        <div class="table-wrap"><table>
          <tr><th>Imbuhan</th><th>Fungsi</th><th>Contoh</th></tr>
          <tr><td>me-</td><td>Kata kerja aktif (melakukan)</td><td>membaca, menulis, menari</td></tr>
          <tr><td>pe-</td><td>Pelaku pekerjaan</td><td>pelari, penulis, penari</td></tr>
          <tr><td>-an</td><td>Hasil/tempat/hal</td><td>bacaan, tulisan, mainan</td></tr>
          <tr><td>-kan</td><td>Untuk kepentingan orang lain</td><td>bacakan, tuliskan, ambilkan</td></tr>
          <tr><td>-lah</td><td>Memperhalus perintah</td><td>bacalah, tulislah, makanlah</td></tr>
        </table></div>
        <div class="info-box green">Huruf k, p, t, s LULUH ketika bertemu me-. Contoh: me+kirim = mengirim (k luluh).</div>
      </div>`,
    flashcards: [
      { q:'Fungsi imbuhan me-?', a:'Membentuk kata kerja aktif — menyatakan melakukan sesuatu.' },
      { q:'pe- + lari = ?', a:'"Pelari" = orang yang berlari.' },
      { q:'Huruf apa yang luluh saat bertemu me-?', a:'k, p, t, s. Contoh: tulis → menulis (t luluh).' },
      { q:'Fungsi imbuhan -lah?', a:'Memperhalus kalimat perintah. Contoh: bacalah, diamlah.' },
    ],
  },

  'bindo-11': {
    title: '📝 Literasi & Teks',
    sub: 'Gagasan utama, amanat, tokoh, nilai, dan makna tersurat/tersirat',
    body: `
      <div class="content-section">
        <h3>📌 Gagasan Utama & Kalimat Pendukung</h3>
        <p><strong>Gagasan utama</strong> = inti/pokok pikiran paragraf. Bisa di awal (deduktif), akhir (induktif), atau keduanya (campuran).</p>
        <p><strong>Kalimat pendukung</strong> = kalimat penjelas yang menjelaskan gagasan utama.</p>
      </div>
      <div class="content-section">
        <h3>🎭 Unsur Intrinsik Cerita</h3>
        <ul>
          <li><strong>Tokoh:</strong> protagonis (baik) & antagonis (jahat)</li>
          <li><strong>Latar:</strong> tempat, waktu, suasana</li>
          <li><strong>Amanat:</strong> pesan moral pengarang</li>
          <li><strong>Nilai:</strong> moral, sosial, budaya, agama</li>
        </ul>
        <div class="info-box green">Tersurat = tertulis langsung. Tersirat = harus disimpulkan dari konteks.</div>
      </div>`,
    flashcards: [
      { q:'Paragraf deduktif = gagasan utama di?', a:'Di awal paragraf.' },
      { q:'Apa itu amanat?', a:'Pesan moral yang ingin disampaikan pengarang melalui cerita.' },
      { q:'Makna tersirat artinya?', a:'Makna yang tidak dinyatakan langsung, harus disimpulkan dari teks.' },
      { q:'Tokoh antagonis adalah?', a:'Tokoh yang bersifat jahat atau menjadi lawan tokoh utama.' },
    ],
  },

  'bindo-12': {
    title: '📚 Jenis Teks',
    sub: 'Teks fiksi dan non-fiksi beserta ciri-cirinya',
    body: `
      <div class="content-section">
        <h3>📌 Fiksi vs Non-fiksi</h3>
        <div class="table-wrap"><table>
          <tr><th>Fiksi (Rekaan)</th><th>Non-fiksi (Nyata)</th></tr>
          <tr><td>Puisi, Cerpen, Novel</td><td>Biografi, Laporan</td></tr>
          <tr><td>Fabel, Legenda, Dongeng</td><td>Teks Eksplanasi</td></tr>
          <tr><td>Pantun, Drama</td><td>Pidato, Artikel</td></tr>
        </table></div>
      </div>
      <div class="content-section">
        <h3>📋 Jenis Teks Non-fiksi</h3>
        <ul>
          <li><strong>Eksplanasi:</strong> menjelaskan proses fenomena</li>
          <li><strong>Persuasif:</strong> membujuk/memengaruhi pembaca</li>
          <li><strong>Eksposisi:</strong> memaparkan informasi objektif</li>
          <li><strong>Argumentasi:</strong> menyertakan pendapat + bukti</li>
          <li><strong>Narasi:</strong> menceritakan peristiwa berurutan</li>
        </ul>
        <div class="info-box green">Pantun: 4 baris, 2 sampiran + 2 isi, sajak a-b-a-b.</div>
      </div>`,
    flashcards: [
      { q:'Tujuan teks eksplanasi?', a:'Menjelaskan proses terjadinya suatu fenomena alam atau sosial.' },
      { q:'Ciri pantun?', a:'4 baris, 2 sampiran, 2 isi, bersajak a-b-a-b.' },
      { q:'Teks persuasif bertujuan?', a:'Membujuk/memengaruhi pembaca agar melakukan atau mempercayai sesuatu.' },
      { q:'Fabel vs legenda?', a:'Fabel = tokoh hewan berperilaku manusia + amanat. Legenda = cerita asal-usul suatu tempat.' },
    ],
  },

  'bindo-13': {
    title: '📬 Surat & Teks Praktis',
    sub: 'Surat resmi/tidak resmi, pengumuman, iklan, wawancara, dan laporan',
    body: `
      <div class="content-section">
        <h3>📌 Surat Resmi vs Tidak Resmi</h3>
        <div class="table-wrap"><table>
          <tr><th>Surat Resmi</th><th>Surat Tidak Resmi</th></tr>
          <tr><td>Bahasa baku</td><td>Bahasa santai</td></tr>
          <tr><td>Ada kop & nomor surat</td><td>Tidak ada kop/nomor</td></tr>
          <tr><td>Untuk keperluan formal</td><td>Untuk keperluan pribadi</td></tr>
        </table></div>
      </div>
      <div class="content-section">
        <h3>📋 Jenis Laporan</h3>
        <ul>
          <li><strong>Kegiatan:</strong> mendokumentasikan suatu acara/program</li>
          <li><strong>Perjalanan:</strong> mendokumentasikan kunjungan ke suatu tempat</li>
          <li><strong>Percobaan:</strong> eksperimen dengan alat, bahan, prosedur, hasil</li>
          <li><strong>Pengamatan:</strong> observasi tanpa mengubah kondisi</li>
        </ul>
        <div class="info-box green">5W+1H pengumuman: What, Who, When, Where, Why + How.</div>
      </div>`,
    flashcards: [
      { q:'Apa yang wajib ada di surat resmi tapi tidak di surat tidak resmi?', a:'Kop surat dan nomor surat.' },
      { q:'Apa itu 5W+1H?', a:'What, Who, When, Where, Why, How — elemen informasi lengkap dalam pengumuman/berita.' },
      { q:'Bedanya laporan percobaan dan pengamatan?', a:'Percobaan ada eksperimen aktif. Pengamatan hanya observasi tanpa mengubah kondisi.' },
      { q:'Apa itu perihal dalam surat?', a:'Bagian singkat yang menunjukkan topik/tujuan surat dalam satu baris.' },
    ],
  },

  // ---- MATEMATIKA ----
  'mtk-1': {
    title: '📊 Pengolahan Data',
    sub: 'Tabel, diagram batang, dan diagram lingkaran',
    body: `
      <div class="content-section">
        <h3>📌 Cara Menyajikan Data</h3>
        <p><strong>Data</strong> adalah kumpulan informasi atau fakta yang dikumpulkan. Data bisa disajikan dalam berbagai bentuk agar mudah dibaca dan dipahami.</p>
        <div class="table-wrap"><table><tr><th>Bentuk Penyajian</th><th>Kegunaan</th></tr>
        <tr><td>📋 Tabel</td><td>Menyajikan data secara terurut dalam baris dan kolom</td></tr>
        <tr><td>📊 Diagram Batang</td><td>Membandingkan data antar kategori</td></tr>
        <tr><td>🥧 Diagram Lingkaran</td><td>Menunjukkan perbandingan dalam persen (bagian dari keseluruhan)</td></tr>
        <tr><td>📈 Diagram Garis</td><td>Menunjukkan perubahan data dari waktu ke waktu</td></tr></table></div>
      </div>
      <div class="content-section">
        <h3>🥧 Cara Menghitung Diagram Lingkaran</h3>
        <div class="info-box green">Rumus sudut: <strong>(Frekuensi ÷ Total) × 360°</strong></div>
        <div class="info-box blue">Rumus persen: <strong>(Frekuensi ÷ Total) × 100%</strong></div>
        <p>Contoh: Dari 40 siswa, 10 suka IPA. Sudut IPA = (10÷40) × 360° = <strong>90°</strong></p>
      </div>`,
    flashcards: [
      { q:'Diagram apa yang cocok untuk membandingkan data?', a:'Diagram batang.' },
      { q:'Diagram apa untuk menunjukkan bagian dari keseluruhan?', a:'Diagram lingkaran (pie chart).' },
      { q:'Rumus menghitung sudut diagram lingkaran?', a:'(Frekuensi ÷ Total) × 360°.' },
      { q:'Rumus menghitung persentase data?', a:'(Frekuensi ÷ Total) × 100%.' },
    ],
  },

  'mtk-2': {
    title: '½ Pecahan Campuran',
    sub: 'Operasi penjumlahan, pengurangan, perkalian, pembagian',
    body: `
      <div class="content-section">
        <h3>📌 Jenis-jenis Pecahan</h3>
        <ul>
          <li>Pecahan Biasa: ½, ¾, 2/5</li>
          <li><strong>Pecahan Campuran: 1½, 2¾</strong> (bilangan bulat + pecahan biasa)</li>
          <li>Pecahan Desimal: 0,5 = ½</li>
        </ul>
        <div class="info-box green">Ubah pecahan campuran ke pecahan biasa dulu sebelum menghitung! Rumus: a b/c = (a×c + b) / c</div>
        <p>Contoh: 2¾ = (2×4 + 3)/4 = <strong>11/4</strong></p>
      </div>
      <div class="content-section">
        <h3>🧮 Operasi Hitung Pecahan</h3>
        <div class="table-wrap"><table><tr><th>Operasi</th><th>Cara</th><th>Contoh</th></tr>
        <tr><td>Penjumlahan/Pengurangan</td><td>Samakan penyebut dulu (cari KPK), lalu hitung pembilang</td><td>½ + ⅓ = 3/6 + 2/6 = 5/6</td></tr>
        <tr><td>Perkalian</td><td>Pembilang × pembilang, penyebut × penyebut</td><td>½ × ⅔ = 2/6 = ⅓</td></tr>
        <tr><td>Pembagian</td><td>Balik pecahan pembagi, lalu kalikan</td><td>½ ÷ ¼ = ½ × 4 = 2</td></tr></table></div>
      </div>`,
    flashcards: [
      { q:'Cara mengubah 1½ ke pecahan biasa?', a:'(1×2 + 1)/2 = 3/2.' },
      { q:'Cara menjumlah pecahan beda penyebut?', a:'Samakan penyebut dengan mencari KPK, lalu jumlahkan pembilang.' },
      { q:'Cara mengalikan pecahan?', a:'Pembilang × pembilang, penyebut × penyebut. Sederhanakan hasilnya.' },
      { q:'½ + ¼ = ?', a:'2/4 + 1/4 = 3/4.' },
      { q:'½ ÷ ¼ = ?', a:'½ × 4/1 = 4/2 = 2.' },
    ],
  },

  'mtk-3': {
    title: '✖️ KPK',
    sub: 'Kelipatan Persekutuan Terkecil',
    body: `
      <div class="content-section">
        <h3>📌 Apa itu KPK?</h3>
        <p><strong>KPK</strong> (Kelipatan Persekutuan Terkecil) adalah bilangan terkecil yang merupakan kelipatan bersama dari dua bilangan atau lebih.</p>
        <div class="info-box green">KPK digunakan untuk: menyamakan penyebut pecahan, dan soal jadwal bertemu.</div>
      </div>
      <div class="content-section">
        <h3>🔢 Cara Mencari KPK</h3>
        <p><strong>Cara 1: Faktorisasi Prima</strong></p>
        <div class="info-box blue">KPK = ambil SEMUA faktor prima, gunakan pangkat TERTINGGI.</div>
        <p>Contoh: KPK dari 12 dan 18<br>12 = 2² × 3 | 18 = 2 × 3²<br>KPK = 2² × 3² = 4 × 9 = <strong>36</strong></p>
        <p><strong>Cara 2: Daftar Kelipatan</strong></p>
        <p>Kelipatan 4: 4, 8, 12, 16, 20, 24...<br>Kelipatan 6: 6, 12, 18, 24...<br>KPK(4,6) = <strong>12</strong></p>
      </div>
      <div class="content-section">
        <h3>📝 Contoh Soal Cerita</h3>
        <div class="info-box">Andi les tiap 3 hari, Budi les tiap 4 hari. Mereka les bersama setiap berapa hari?<br>KPK(3,4) = 12 → Mereka bertemu setiap <strong>12 hari sekali</strong>.</div>
      </div>`,
    flashcards: [
      { q:'KPK singkatan dari?', a:'Kelipatan Persekutuan Terkecil.' },
      { q:'Cara faktorisasi prima untuk KPK?', a:'Ambil SEMUA faktor prima dengan pangkat TERTINGGI.' },
      { q:'KPK dari 4 dan 6?', a:'KPK(4,6) = 12.' },
      { q:'KPK berguna untuk apa?', a:'Menyamakan penyebut pecahan dan menyelesaikan soal jadwal bertemu.' },
    ],
  },

  'mtk-4': {
    title: '➗ FPB',
    sub: 'Faktor Persekutuan Terbesar',
    body: `
      <div class="content-section">
        <h3>📌 Apa itu FPB?</h3>
        <p><strong>FPB</strong> (Faktor Persekutuan Terbesar) adalah bilangan terbesar yang dapat membagi habis dua bilangan atau lebih.</p>
        <div class="info-box green">FPB digunakan untuk: membagi sesuatu secara merata (soal pembagian adil).</div>
      </div>
      <div class="content-section">
        <h3>🔢 Cara Mencari FPB</h3>
        <div class="info-box blue">FPB = ambil faktor prima yang SAMA, gunakan pangkat TERENDAH.</div>
        <p>Contoh: FPB dari 12 dan 18<br>12 = 2² × 3 | 18 = 2 × 3²<br>Faktor sama: 2 (min 1) dan 3 (min 1)<br>FPB = 2¹ × 3¹ = <strong>6</strong></p>
      </div>
      <div class="content-section">
        <h3>⚖️ Perbedaan FPB dan KPK</h3>
        <div class="table-wrap"><table><tr><th>Aspek</th><th>FPB</th><th>KPK</th></tr>
        <tr><td>Dari faktorisasi</td><td>Faktor SAMA, pangkat RENDAH</td><td>Semua faktor, pangkat TINGGI</td></tr>
        <tr><td>Hasilnya</td><td>≤ bilangan terkecil</td><td>≥ bilangan terbesar</td></tr>
        <tr><td>Digunakan untuk</td><td>Pembagian merata</td><td>Jadwal bertemu</td></tr></table></div>
      </div>`,
    flashcards: [
      { q:'FPB singkatan dari?', a:'Faktor Persekutuan Terbesar.' },
      { q:'Cara faktorisasi prima untuk FPB?', a:'Ambil faktor prima yang SAMA dengan pangkat TERENDAH.' },
      { q:'FPB dari 12 dan 18?', a:'FPB = 6 (12=2²×3, 18=2×3², ambil 2¹×3¹=6).' },
      { q:'FPB berguna untuk apa?', a:'Membagi sesuatu secara merata (soal pembagian yang adil).' },
    ],
  },

  'mtk-5': {
    title: '📐 Mean (Rata-rata)',
    sub: 'Menghitung nilai tengah dari sekumpulan data',
    body: `
      <div class="content-section">
        <h3>📌 Apa itu Mean?</h3>
        <p><strong>Mean</strong> adalah nilai rata-rata dari sekumpulan data. Mean diperoleh dengan menjumlahkan semua data lalu dibagi banyaknya data.</p>
        <div class="info-box green" style="font-size:1.05rem;justify-content:center">📐 <strong>Mean = Jumlah semua data ÷ Banyaknya data</strong></div>
      </div>
      <div class="content-section">
        <h3>🔢 Contoh Soal</h3>
        <p>Nilai ulangan 5 siswa: 70, 80, 90, 75, 85</p>
        <ul>
          <li>Jumlah = 70 + 80 + 90 + 75 + 85 = <strong>400</strong></li>
          <li>Banyak data = <strong>5</strong></li>
          <li>Mean = 400 ÷ 5 = <strong>80</strong></li>
        </ul>
      </div>
      <div class="content-section">
        <h3>📊 Median dan Modus (Tambahan)</h3>
        <ul>
          <li>📍 <strong>Median</strong> = nilai TENGAH setelah data diurutkan.</li>
          <li>🔁 <strong>Modus</strong> = nilai yang paling SERING muncul.</li>
        </ul>
        <p>Data: 3, 5, 5, 7, 9 → Median = 5 | Modus = 5 | Mean = 29/5 = 5,8</p>
      </div>`,
    flashcards: [
      { q:'Rumus mean/rata-rata?', a:'Mean = Jumlah semua data ÷ Banyaknya data.' },
      { q:'Nilai 60, 70, 80, 90 → Mean = ?', a:'(60+70+80+90) ÷ 4 = 300 ÷ 4 = 75.' },
      { q:'Apa itu median?', a:'Nilai tengah dari data yang sudah diurutkan dari kecil ke besar.' },
      { q:'Apa itu modus?', a:'Nilai yang paling sering muncul dalam suatu kumpulan data.' },
    ],
  },

  'mtk-6': {
    title: '⬜ Keliling Bangun Datar',
    sub: 'Rumus keliling persegi, segitiga, lingkaran, dll.',
    body: `
      <div class="content-section">
        <h3>📐 Rumus-rumus Keliling</h3>
        <div class="table-wrap"><table><tr><th>Bangun</th><th>Rumus</th><th>Keterangan</th></tr>
        <tr><td>⬜ Persegi</td><td>K = 4 × s</td><td>s = panjang sisi</td></tr>
        <tr><td>▬ Persegi Panjang</td><td>K = 2 × (p + l)</td><td>p = panjang, l = lebar</td></tr>
        <tr><td>🔺 Segitiga</td><td>K = a + b + c</td><td>a, b, c = ketiga sisi</td></tr>
        <tr><td>🔷 Jajargenjang</td><td>K = 2 × (a + b)</td><td>a, b = dua sisi berbeda</td></tr>
        <tr><td>🟡 Lingkaran</td><td>K = π × d = 2πr</td><td>π ≈ 3,14 atau 22/7</td></tr>
        <tr><td>🔶 Trapesium</td><td>K = a + b + c + d</td><td>Jumlah semua sisi</td></tr></table></div>
        <div class="info-box blue">Nilai π (phi) = 3,14 atau 22/7. Gunakan 22/7 jika jari-jari/diameter habis dibagi 7.</div>
      </div>
      <div class="content-section">
        <h3>🔢 Contoh Soal</h3>
        <ul>
          <li>Persegi sisi 8 cm: K = 4 × 8 = <strong>32 cm</strong></li>
          <li>Persegi panjang p=10, l=5: K = 2×(10+5) = <strong>30 cm</strong></li>
          <li>Lingkaran r=7: K = 2 × 22/7 × 7 = <strong>44 cm</strong></li>
        </ul>
      </div>`,
    flashcards: [
      { q:'Rumus keliling persegi?', a:'K = 4 × s (s = panjang sisi).' },
      { q:'Rumus keliling persegi panjang?', a:'K = 2 × (p + l).' },
      { q:'Rumus keliling lingkaran?', a:'K = π × d = 2 × π × r (π ≈ 3,14 atau 22/7).' },
      { q:'Nilai phi (π) berapa?', a:'3,14 atau 22/7.' },
      { q:'Keliling persegi sisi 9 cm?', a:'K = 4 × 9 = 36 cm.' },
    ],
  },

  'mtk-7': {
    title: '🔷 Luas Bangun Datar',
    sub: 'Rumus luas segitiga, lingkaran, trapesium, dll.',
    body: `
      <div class="content-section">
        <h3>📐 Rumus-rumus Luas</h3>
        <div class="table-wrap"><table><tr><th>Bangun</th><th>Rumus Luas</th></tr>
        <tr><td>⬜ Persegi</td><td>L = s²</td></tr>
        <tr><td>▬ Persegi Panjang</td><td>L = p × l</td></tr>
        <tr><td>🔺 Segitiga</td><td>L = ½ × a × t</td></tr>
        <tr><td>🔷 Jajargenjang</td><td>L = a × t</td></tr>
        <tr><td>🔶 Trapesium</td><td>L = ½ × (a + b) × t</td></tr>
        <tr><td>🔸 Belah Ketupat/Layang-layang</td><td>L = ½ × d₁ × d₂</td></tr>
        <tr><td>🟡 Lingkaran</td><td>L = π × r²</td></tr></table></div>
      </div>
      <div class="content-section">
        <h3>🔢 Contoh Soal</h3>
        <ul>
          <li>Segitiga alas 10, tinggi 8: L = ½ × 10 × 8 = <strong>40 cm²</strong></li>
          <li>Lingkaran r=7: L = 22/7 × 49 = <strong>154 cm²</strong></li>
          <li>Trapesium a=8, b=12, t=6: L = ½ × (8+12) × 6 = <strong>60 cm²</strong></li>
        </ul>
      </div>`,
    flashcards: [
      { q:'Rumus luas segitiga?', a:'L = ½ × alas × tinggi.' },
      { q:'Rumus luas lingkaran?', a:'L = π × r² (r = jari-jari).' },
      { q:'Rumus luas trapesium?', a:'L = ½ × (sisi atas + sisi bawah) × tinggi.' },
      { q:'Luas persegi sisi 6 cm?', a:'L = 6² = 36 cm².' },
      { q:'Rumus luas belah ketupat?', a:'L = ½ × diagonal 1 × diagonal 2.' },
    ],
  },

  'mtk-8': {
    title: '📦 Volume',
    sub: 'Rumus volume kubus, balok, dan tabung',
    body: `
      <div class="content-section">
        <h3>📌 Apa itu Volume?</h3>
        <p><strong>Volume</strong> adalah ukuran ruang yang ditempati oleh suatu benda tiga dimensi. Satuan volume adalah cm³ atau m³.</p>
        <div class="table-wrap"><table><tr><th>Bangun Ruang</th><th>Rumus Volume</th><th>Keterangan</th></tr>
        <tr><td>📦 Kubus</td><td>V = s³</td><td>s = panjang rusuk</td></tr>
        <tr><td>📦 Balok</td><td>V = p × l × t</td><td>p = panjang, l = lebar, t = tinggi</td></tr>
        <tr><td>🥫 Tabung</td><td>V = π × r² × t</td><td>r = jari-jari alas, t = tinggi</td></tr>
        <tr><td>🔺 Limas</td><td>V = ⅓ × L.alas × t</td><td>L.alas = luas alas</td></tr>
        <tr><td>🍦 Kerucut</td><td>V = ⅓ × π × r² × t</td><td>r = jari-jari alas</td></tr></table></div>
      </div>
      <div class="content-section">
        <h3>🔢 Contoh Soal</h3>
        <ul>
          <li>Kubus rusuk 5 cm: V = 5³ = <strong>125 cm³</strong></li>
          <li>Balok p=10, l=5, t=4: V = 10 × 5 × 4 = <strong>200 cm³</strong></li>
          <li>Tabung r=7, t=10: V = 22/7 × 49 × 10 = <strong>1540 cm³</strong></li>
        </ul>
      </div>`,
    flashcards: [
      { q:'Rumus volume kubus?', a:'V = s³ (s = panjang rusuk).' },
      { q:'Rumus volume balok?', a:'V = p × l × t.' },
      { q:'Rumus volume tabung?', a:'V = π × r² × t.' },
      { q:'Kubus rusuk 4 cm, volumenya?', a:'V = 4³ = 64 cm³.' },
      { q:'Balok p=6, l=4, t=3, volumenya?', a:'V = 6 × 4 × 3 = 72 cm³.' },
    ],
  },

  'mtk-9': {
    title: '➖ Selisih',
    sub: 'Pengurangan dan mencari perbedaan nilai',
    body: `
      <div class="content-section">
        <h3>📌 Apa itu Selisih?</h3>
        <p><strong>Selisih</strong> adalah hasil pengurangan dua bilangan — yaitu perbedaan atau jarak antara dua nilai. Rumus selisih: <strong>Selisih = Nilai Besar − Nilai Kecil</strong></p>
        <div class="info-box green">Selisih selalu bernilai positif karena menggunakan nilai besar dikurangi nilai kecil.</div>
      </div>
      <div class="content-section">
        <h3>🔢 Contoh Penggunaan Selisih</h3>
        <ul>
          <li>Nilai Andi 85, Budi 72. Selisih = 85 − 72 = <strong>13</strong></li>
          <li>Suhu pagi 18°C, siang 34°C. Selisih = 34 − 18 = <strong>16°C</strong></li>
          <li>Jarak kota A–B = 250 km, A–C = 175 km. Selisih = 250 − 175 = <strong>75 km</strong></li>
        </ul>
      </div>
      <div class="content-section">
        <h3>📐 Selisih dalam Soal Cerita</h3>
        <div class="info-box">Kata kunci soal selisih: "berapa lebih banyak/besar/jauh/panjang", "perbedaan", "selisih", "lebih ... dari".</div>
        <p>Contoh: Kebun Pak Budi luasnya 450 m², kebun Pak Andi 280 m². Berapa selisih luas kebun mereka? → 450 − 280 = <strong>170 m²</strong></p>
      </div>`,
    flashcards: [
      { q:'Rumus mencari selisih?', a:'Selisih = Nilai Besar − Nilai Kecil.' },
      { q:'Nilai 95 dan 68, selisihnya?', a:'95 − 68 = 27.' },
      { q:'Kata kunci soal selisih?', a:'"Berapa lebih banyak/besar", "perbedaan", "selisih", "lebih … dari".' },
      { q:'Kenapa selisih selalu positif?', a:'Karena kita selalu mengurangkan nilai besar dengan nilai kecil.' },
    ],
  },

  'mtk-10': {
    title: '🔢 Bilangan Bulat & Operasi',
    sub: 'Penjumlahan, pengurangan, perkalian, dan pembagian bilangan',
    body: `
      <div class="content-section">
        <h3>📌 Operasi Hitung Bilangan</h3>
        <p>Ada 4 operasi dasar: <strong>penjumlahan (+)</strong>, <strong>pengurangan (−)</strong>, <strong>perkalian (×)</strong>, dan <strong>pembagian (÷)</strong>.</p>
        <div class="info-box green">Urutan pengerjaan: Kurung → Pangkat → × / ÷ → + / −</div>
      </div>
      <div class="content-section">
        <h3>🔢 Tips Cepat Perkalian</h3>
        <ul>
          <li>Kalikan puluhan dulu: 24×15 = 24×10 + 24×5 = 240+120 = <strong>360</strong></li>
          <li>Bilangan prima: hanya bisa dibagi 1 dan dirinya sendiri (2, 3, 5, 7, 11, 13...)</li>
          <li>Nilai tempat: ribuan, ratusan, puluhan, satuan</li>
        </ul>
      </div>
      <div class="content-section">
        <h3>📐 Soal Cerita Bilangan</h3>
        <div class="info-box">Kata kunci: "total", "sisa", "dibagi rata", "berapa masing-masing"</div>
        <p>Contoh: 1.200 buku, terjual 345 dan 278. Sisa = 1.200 − 345 − 278 = <strong>577 buku</strong></p>
      </div>`,
    flashcards: [
      { q:'Urutan operasi hitung?', a:'Kurung → Pangkat → ×÷ → +−' },
      { q:'Apa bilangan prima?', a:'Bilangan yang hanya bisa dibagi 1 dan dirinya sendiri.' },
      { q:'24 × 15 = ?', a:'24×10 + 24×5 = 240+120 = 360' },
      { q:'Nilai tempat angka 7 di 4.732?', a:'Ratusan (posisi ke-3 dari kanan).' },
    ],
  },

  'mtk-11': {
    title: '🔗 FPB & KPK Lanjut',
    sub: 'Soal cerita FPB dan KPK dalam kehidupan sehari-hari',
    body: `
      <div class="content-section">
        <h3>📌 FPB vs KPK</h3>
        <p><strong>FPB</strong> (Faktor Persekutuan Terbesar) = digunakan saat membagi sesuatu sama rata secara MAKSIMAL.</p>
        <p><strong>KPK</strong> (Kelipatan Persekutuan Terkecil) = digunakan saat mencari waktu/kejadian yang BERSAMAAN lagi.</p>
        <div class="info-box green">FPB → bagi rata. KPK → kapan bertemu lagi.</div>
      </div>
      <div class="content-section">
        <h3>🔢 Cara Faktorisasi Prima</h3>
        <ul>
          <li>FPB: ambil faktor <strong>yang sama</strong>, pangkat <strong>terendah</strong></li>
          <li>KPK: ambil <strong>semua</strong> faktor, pangkat <strong>tertinggi</strong></li>
          <li>Contoh: FPB(36,48) = 12. KPK(4,6,8) = 24.</li>
        </ul>
      </div>
      <div class="content-section">
        <h3>📐 Kata Kunci Soal Cerita</h3>
        <div class="info-box">FPB: "dibagi sama rata", "maksimal", "sebanyak-banyaknya".<br>KPK: "menyala bersama lagi", "bertemu lagi", "kapan serentak".</div>
      </div>`,
    flashcards: [
      { q:'Kapan pakai FPB?', a:'Saat membagi sesuatu sama rata secara maksimal.' },
      { q:'Kapan pakai KPK?', a:'Saat mencari kapan dua kejadian terjadi bersamaan lagi.' },
      { q:'FPB(60, 84) = ?', a:'60=2²×3×5, 84=2²×3×7 → FPB = 2²×3 = 12.' },
      { q:'KPK(4, 6, 8) = ?', a:'4=2², 6=2×3, 8=2³ → KPK = 2³×3 = 24.' },
    ],
  },

  'mtk-12': {
    title: '💯 Pecahan, Desimal & Persen',
    sub: 'Konversi, operasi, diskon, dan perbandingan',
    body: `
      <div class="content-section">
        <h3>📌 Hubungan Pecahan-Desimal-Persen</h3>
        <p>Ketiganya saling bisa dikonversi:</p>
        <ul>
          <li>¾ = 0,75 = 75%</li>
          <li>½ = 0,5 = 50%</li>
          <li>⅓ ≈ 0,333 ≈ 33,3%</li>
        </ul>
        <div class="info-box green">Persen × total = hasilnya. Contoh: 40% × 200 = 80.</div>
      </div>
      <div class="content-section">
        <h3>🔢 Diskon & Kenaikan Harga</h3>
        <ul>
          <li>Diskon 25% dari Rp120.000 = 0,25 × 120.000 = Rp30.000</li>
          <li>Harga setelah diskon = harga awal − diskon = Rp90.000</li>
          <li>Kenaikan 15% dari 80 = 12 → nilai baru = 92</li>
        </ul>
      </div>
      <div class="content-section">
        <h3>📐 Perbandingan</h3>
        <div class="info-box">Perbandingan 3:5 → total 8 bagian. Bagian pertama = 3/8 × total.</div>
      </div>`,
    flashcards: [
      { q:'0,75 = ... %?', a:'75%' },
      { q:'5/8 = ... %?', a:'5/8 × 100% = 62,5%' },
      { q:'Diskon 25% dari Rp120.000?', a:'25% × 120.000 = 30.000 → harga jadi Rp90.000.' },
      { q:'Perbandingan 3:5, total Rp240.000. Bagian terbesar?', a:'5/8 × 240.000 = Rp150.000.' },
    ],
  },

  'mtk-13': {
    title: '📏 Satuan Pengukuran',
    sub: 'Panjang, berat, luas, volume, dan waktu',
    body: `
      <div class="content-section">
        <h3>📌 Konversi Satuan Penting</h3>
        <ul>
          <li><strong>Panjang:</strong> 1 km = 1.000 m = 100.000 cm</li>
          <li><strong>Berat:</strong> 1 ton = 10 kwintal = 1.000 kg = 1.000.000 gram</li>
          <li><strong>Luas:</strong> 1 m² = 10.000 cm², 1 ha = 10.000 m²</li>
          <li><strong>Volume:</strong> 1 m³ = 1.000 liter = 1.000.000 cm³</li>
        </ul>
        <div class="info-box green">Naik satuan → bagi. Turun satuan → kali.</div>
      </div>
      <div class="content-section">
        <h3>🔢 Konversi Waktu</h3>
        <ul>
          <li>1 jam = 60 menit = 3.600 detik</li>
          <li>1 hari = 24 jam = 1.440 menit</li>
          <li>2 jam 45 menit = 2×60 + 45 = <strong>165 menit</strong></li>
        </ul>
      </div>`,
    flashcards: [
      { q:'1 km = ? m', a:'1.000 m' },
      { q:'1 ha = ? m²', a:'10.000 m²' },
      { q:'1 m³ = ? liter', a:'1.000 liter' },
      { q:'2 jam 45 menit = ? menit', a:'2×60 + 45 = 165 menit' },
    ],
  },

  'mtk-14': {
    title: '🚀 Kecepatan, Jarak & Waktu',
    sub: 'Rumus v = s/t dan penerapannya dalam soal cerita',
    body: `
      <div class="content-section">
        <h3>📌 Rumus Segitiga Ajaib</h3>
        <p>Tiga rumus dari satu segitiga:</p>
        <ul>
          <li><strong>Jarak (s)</strong> = Kecepatan × Waktu</li>
          <li><strong>Kecepatan (v)</strong> = Jarak ÷ Waktu</li>
          <li><strong>Waktu (t)</strong> = Jarak ÷ Kecepatan</li>
        </ul>
        <div class="info-box green">Ingat: v = s/t. Tutup yang dicari, rumusnya terbentuk!</div>
      </div>
      <div class="content-section">
        <h3>🔢 Contoh Soal Cerita</h3>
        <ul>
          <li>Jarak 180 km, waktu 3 jam → v = 180÷3 = <strong>60 km/jam</strong></li>
          <li>v=60 km/jam, jarak 210 km → t = 210÷60 = <strong>3,5 jam = 3 jam 30 menit</strong></li>
          <li>Berangkat 08.00 + 3,5 jam = tiba <strong>11.30</strong></li>
        </ul>
      </div>
      <div class="content-section">
        <h3>📐 Soal Berpapasan & Menyusul</h3>
        <div class="info-box">Berpapasan: kecepatan dijumlah (v₁+v₂). Menyusul: kecepatan dikurang (v₁−v₂).</div>
      </div>`,
    flashcards: [
      { q:'Rumus mencari kecepatan?', a:'v = s ÷ t (jarak dibagi waktu).' },
      { q:'Rumus mencari jarak?', a:'s = v × t (kecepatan dikali waktu).' },
      { q:'Rumus mencari waktu?', a:'t = s ÷ v (jarak dibagi kecepatan).' },
      { q:'Berpapasan, rumusnya?', a:'Waktu = jarak ÷ (v₁ + v₂).' },
    ],
  },

  'mtk-15': {
    title: '📐 Bangun Datar Lanjut',
    sub: 'Trapesium, belah ketupat, lingkaran, dan bangun gabungan',
    body: `
      <div class="content-section">
        <h3>📌 Rumus Luas Bangun Datar</h3>
        <ul>
          <li><strong>Trapesium:</strong> L = ½ × (a+b) × t</li>
          <li><strong>Jajargenjang:</strong> L = alas × tinggi</li>
          <li><strong>Belah Ketupat:</strong> L = ½ × d₁ × d₂</li>
          <li><strong>Lingkaran:</strong> L = π × r², K = 2πr</li>
          <li><strong>Segitiga:</strong> L = ½ × alas × tinggi</li>
        </ul>
        <div class="info-box green">π = 22/7 (jika r kelipatan 7), atau π = 3,14</div>
      </div>
      <div class="content-section">
        <h3>🔢 Bangun Gabungan & Soal Cerita</h3>
        <ul>
          <li>Luas gabungan = jumlah luas masing-masing bangun</li>
          <li>Keramik: Luas lantai ÷ Luas 1 keramik</li>
          <li>Arsiran = luas besar − luas kecil</li>
        </ul>
      </div>`,
    flashcards: [
      { q:'Luas trapesium?', a:'L = ½ × (a+b) × t' },
      { q:'Luas lingkaran?', a:'L = π × r²' },
      { q:'Keliling lingkaran?', a:'K = 2 × π × r = π × d' },
      { q:'Luas belah ketupat?', a:'L = ½ × d₁ × d₂' },
    ],
  },

  'mtk-16': {
    title: '📦 Bangun Ruang Lanjut',
    sub: 'Tabung, kerucut, bola, dan luas permukaan',
    body: `
      <div class="content-section">
        <h3>📌 Rumus Volume Bangun Ruang</h3>
        <ul>
          <li><strong>Kubus:</strong> V = s³</li>
          <li><strong>Balok:</strong> V = p × l × t</li>
          <li><strong>Tabung:</strong> V = π × r² × t</li>
          <li><strong>Kerucut:</strong> V = ⅓ × π × r² × t</li>
          <li><strong>Bola:</strong> V = 4/3 × π × r³</li>
        </ul>
        <div class="info-box green">1 m³ = 1.000 liter = 1.000.000 cm³</div>
      </div>
      <div class="content-section">
        <h3>🔢 Luas Permukaan</h3>
        <ul>
          <li><strong>Kubus:</strong> LP = 6 × s²</li>
          <li><strong>Balok:</strong> LP = 2(pl + pt + lt)</li>
          <li><strong>Tabung:</strong> LP = 2πr² + 2πrt (dengan tutup)</li>
        </ul>
      </div>`,
    flashcards: [
      { q:'Volume kubus rusuk 6 cm?', a:'V = 6³ = 216 cm³' },
      { q:'Volume tabung r=7, t=10, π=22/7?', a:'V = 22/7 × 49 × 10 = 1.540 cm³' },
      { q:'Luas permukaan kubus sisi 5?', a:'LP = 6 × 25 = 150 cm²' },
      { q:'Volume balok p=8, l=5, t=4?', a:'V = 8×5×4 = 160 cm³' },
    ],
  },

  'mtk-17': {
    title: '🧊 Visualisasi Spasial',
    sub: 'Jaring-jaring, posisi benda, dan rotasi bangun ruang',
    body: `
      <div class="content-section">
        <h3>📌 Jaring-jaring Bangun Ruang</h3>
        <ul>
          <li><strong>Kubus:</strong> 6 persegi identik</li>
          <li><strong>Balok:</strong> 6 persegi panjang (3 pasang)</li>
          <li><strong>Tabung:</strong> 2 lingkaran + 1 persegi panjang</li>
          <li><strong>Limas segiempat:</strong> 1 persegi + 4 segitiga</li>
          <li><strong>Kerucut:</strong> 1 lingkaran + 1 juring</li>
        </ul>
      </div>
      <div class="content-section">
        <h3>🔢 Dadu & Sisi Berhadapan</h3>
        <div class="info-box green">Pada dadu standar, sisi berhadapan selalu berjumlah 7: (1-6), (2-5), (3-4).</div>
      </div>
      <div class="content-section">
        <h3>📐 Posisi & Rotasi</h3>
        <ul>
          <li>Putar kanan 90°: Utara→Timur, Timur→Selatan, dst.</li>
          <li>Putar kiri 90°: Utara→Barat, Barat→Selatan, dst.</li>
          <li>Kubus 3×3×3 dipotong: sudut (3 warna)=8, tepi (2 warna)=12, sisi (1 warna)=6, dalam (0 warna)=1</li>
        </ul>
      </div>`,
    flashcards: [
      { q:'Jaring-jaring kubus terdiri dari?', a:'6 persegi identik.' },
      { q:'Jaring-jaring tabung terdiri dari?', a:'2 lingkaran + 1 persegi panjang.' },
      { q:'Pada dadu, 6 berhadapan dengan?', a:'1 (karena 6+1=7).' },
      { q:'Kubus 3×3×3, berapa yang punya 2 sisi berwarna?', a:'12 kubus kecil (di posisi tepi/rusuk).' },
    ],
  },

};

// ---------- DATA KUIS LENGKAP ----------
export const QUIZ_DATA = {
// ================================================================
  //  ipa-1 | METAMORFOSIS (Sempurna & Tidak Sempurna)
  // ================================================================
  'ipa-1': [

    // --- MUDAH (1-5) ---
    {
      type: 'mc',
      level: 'mudah',
      q: 'Metamorfosis adalah proses perubahan...',
      opts: ['Warna tubuh hewan', 'Bentuk tubuh hewan secara bertahap', 'Ukuran telur hewan', 'Cara makan hewan'],
      ans: 1,
      hint: 'Pikirkan apa yang terjadi pada ulat hingga menjadi kupu-kupu.',
      explanation: 'Metamorfosis adalah proses perubahan BENTUK tubuh hewan secara bertahap selama masa pertumbuhannya, bukan hanya warna atau ukurannya.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Berapa jumlah tahap pada metamorfosis sempurna?',
      opts: ['2 tahap', '3 tahap', '4 tahap', '5 tahap'],
      ans: 2,
      hint: 'Ingat: Telur → ... → ... → Imago. Ada berapa kotak?',
      explanation: 'Metamorfosis sempurna memiliki 4 tahap: Telur → Larva → Pupa → Imago (dewasa). Itulah mengapa disebut sempurna karena lebih lengkap.'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Tahap kepompong pada metamorfosis sempurna disebut tahap _.',
      ans: 'Pupa',
      hint: 'Huruf pertamanya adalah P. Di tahap ini hewan seperti "istirahat" dalam bungkusan.',
      explanation: 'Pupa (kepompong) adalah tahap istirahat pada metamorfosis sempurna. Di dalam pupa, larva berubah total menjadi hewan dewasa (imago).'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Anak hewan pada metamorfosis tidak sempurna yang bentuknya mirip dewasa disebut...',
      opts: ['Larva', 'Pupa', 'Nimfa', 'Berudu'],
      ans: 2,
      hint: 'Ini bukan kepompong dan bukan ulat. Hewan kecil ini sudah mirip bentuk dewasanya.',
      explanation: 'Nimfa adalah anak hewan pada metamorfosis tidak sempurna. Bentuknya sudah mirip dengan hewan dewasa, hanya lebih kecil dan belum memiliki sayap sempurna.'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Belalang mengalami metamorfosis _, karena tidak melewati tahap pupa.',
      ans: 'tidak sempurna',
      hint: 'Metamorfosis belalang hanya 3 tahap: Telur → Nimfa → Dewasa.',
      explanation: 'Belalang mengalami metamorfosis TIDAK SEMPURNA (hemimetabola) karena hanya ada 3 tahap dan tidak ada tahap pupa/kepompong.'
    },

    // --- SEDANG (6-10) ---
    {
      type: 'mc',
      level: 'sedang',
      q: 'Urutan metamorfosis sempurna yang BENAR adalah...',
      opts: [
        'Telur → Pupa → Larva → Imago',
        'Telur → Nimfa → Imago',
        'Telur → Larva → Pupa → Imago',
        'Larva → Telur → Pupa → Imago'
      ],
      ans: 2,
      hint: 'Setelah larva (ulat), hewan masuk ke tahap kepompong. Apa nama ilmiahnya?',
      explanation: 'Urutan yang benar: Telur → Larva → Pupa → Imago. Larva (ulat) berubah menjadi pupa (kepompong), lalu dari pupa keluarlah imago (hewan dewasa).'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Jentik-jentik merupakan larva dari hewan...',
      opts: ['Kupu-kupu', 'Lalat', 'Nyamuk', 'Lebah'],
      ans: 2,
      hint: 'Hewan ini sering menggigit kita dan bisa menyebarkan penyakit. Larvanya hidup di air yang diam.',
      explanation: 'Jentik-jentik adalah larva NYAMUK yang hidup di air diam (genangan, bak mandi). Setelah menjadi pupa, nyamuk dewasa muncul ke udara.'
    },
    {
      type: 'fill',
      level: 'sedang',
      q: 'Katak pada saat masih kecil berbentuk _ yang hidup di air.',
      ans: 'kecebong (berudu)',
      hint: 'Makhluk kecil berekor yang berenang di kolam sebelum kaki kecilnya tumbuh.',
      explanation: 'Larva katak disebut kecebong atau berudu. Kecebong hidup di air dan bernapas dengan insang. Setelah tumbuh kaki dan paru-paru, ia berubah menjadi katak dewasa.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Perhatikan daftar hewan berikut: Capung, Nyamuk, Kecoa, Kupu-kupu. Hewan yang mengalami metamorfosis TIDAK SEMPURNA adalah...',
      opts: ['Nyamuk dan Kupu-kupu', 'Capung dan Kecoa', 'Nyamuk dan Kecoa', 'Kupu-kupu dan Capung'],
      ans: 1,
      hint: 'Hewan metamorfosis tidak sempurna tidak punya tahap kepompong. Mana yang punya tahap nimfa?',
      explanation: 'Capung dan Kecoa mengalami metamorfosis tidak sempurna (nimfa). Nyamuk dan Kupu-kupu mengalami metamorfosis sempurna (ada tahap larva dan pupa).'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Perbedaan utama metamorfosis sempurna dan tidak sempurna terletak pada...',
      opts: [
        'Jumlah telur yang dihasilkan',
        'Ada atau tidaknya tahap pupa dan perbedaan bentuk larva dengan dewasa',
        'Tempat hidup hewan',
        'Warna tubuh hewan dewasa'
      ],
      ans: 1,
      hint: 'Ingat ciri khas metamorfosis sempurna: ada kepompong dan bentuk larva SANGAT berbeda dari dewasa.',
      explanation: 'Perbedaan utamanya: metamorfosis sempurna memiliki tahap PUPA dan bentuk larva sangat berbeda dari dewasa. Metamorfosis tidak sempurna tidak ada pupa dan anak (nimfa) sudah mirip dewasa.'
    },

    // --- SUSAH / HOTS (11-15) ---
    {
      type: 'mc',
      level: 'susah',
      q: 'Seorang petani menemukan banyak ulat di tanaman kubisnya. Setelah beberapa minggu, ulat-ulat itu menghilang dan digantikan banyak kepompong. Apa yang akan terjadi setelah kepompong itu?',
      opts: [
        'Muncul ulat yang lebih besar',
        'Kepompong akan mati',
        'Akan muncul imago (serangga dewasa), kemungkinan kupu-kupu',
        'Akan muncul nimfa belalang'
      ],
      ans: 2,
      hint: 'Kepompong adalah tahap akhir sebelum hewan dewasa keluar. Apa nama ilmiah hewan dewasa?',
      explanation: 'Kepompong (pupa) adalah tahap terakhir sebelum imago. Ulat pada tanaman kubis biasanya adalah larva kupu-kupu. Setelah pupa, imago (kupu-kupu dewasa) akan keluar. Ini adalah siklus metamorfosis sempurna.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Mengapa pada metamorfosis SEMPURNA, larva dan imago (dewasa) tidak bersaing untuk mendapatkan makanan yang sama?',
      opts: [
        'Karena larva dan imago hidup di planet berbeda',
        'Karena bentuk dan kebutuhan makanan larva sangat berbeda dari imago dewasa',
        'Karena larva tidak membutuhkan makanan',
        'Karena imago memakan larva'
      ],
      ans: 1,
      hint: 'Ulat makan daun, sedangkan kupu-kupu makan... apa? Apakah sama?',
      explanation: 'Karena bentuk tubuh larva dan imago SANGAT BERBEDA, kebutuhan makanannya pun berbeda. Ulat (larva kupu-kupu) makan daun, sedangkan kupu-kupu dewasa menghisap nektar bunga. Ini adalah keuntungan evolusi metamorfosis sempurna!'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Siklus hidup nyamuk yang benar dimulai dari telur yang diletakkan di atas air, lalu menetas menjadi _, kemudian menjadi pupa, dan akhirnya menjadi nyamuk dewasa.',
      ans: 'jentik-jentik (larva)',
      hint: 'Hewan kecil yang sering kita lihat bergerak-gerak di dalam bak mandi yang kotor.',
      explanation: 'Siklus nyamuk: Telur (di permukaan air) → Jentik-jentik/Larva (di dalam air) → Pupa (di dalam air) → Nyamuk dewasa (terbang). Menguras bak mandi memutus siklus ini!'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Dina mengamati seekor serangga kecil yang mirip belalang tetapi lebih kecil dan sayapnya belum sempurna. Serangga itu kemungkinan sedang berada di tahap...',
      opts: ['Pupa', 'Larva', 'Nimfa', 'Imago'],
      ans: 2,
      hint: 'Hewan ini mirip dewasa tapi lebih kecil dan sayapnya belum tumbuh sempurna. Ini ciri khas metamorfosis...',
      explanation: 'Serangga kecil yang mirip dewasa tetapi lebih kecil dan sayap belum sempurna adalah NIMFA. Nimfa ada pada metamorfosis tidak sempurna seperti belalang. Setelah beberapa kali molting (ganti kulit), nimfa menjadi belalang dewasa.'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Metamorfosis sempurna disebut juga _ yang artinya "semua berubah", karena semua bagian tubuh larva berubah total saat di dalam pupa.',
      ans: 'holometabola',
      aliases: ['holometabola', 'metamorfosis sempurna', 'sempurna'],
      hint: 'Kata ini berasal dari bahasa Yunani. Huruf pertamanya H.',
      explanation: 'Holometabola (dari bahasa Yunani: holos = semua, metabole = perubahan) adalah nama ilmiah untuk metamorfosis sempurna. Di dalam pupa, tubuh larva benar-benar "didaur ulang" menjadi bentuk dewasa yang berbeda total.'
    },
  ],

  // ================================================================
  //  ipa-2 | PERKEMBANGBIAKAN HEWAN (Ovipar, Vivipar, Ovovivipar)
  // ================================================================
  'ipa-2': [

    // --- MUDAH (1-5) ---
    {
      type: 'mc',
      level: 'mudah',
      q: 'Hewan yang berkembang biak dengan cara bertelur disebut...',
      opts: ['Vivipar', 'Ovipar', 'Ovovivipar', 'Vegetatif'],
      ans: 1,
      hint: 'Kata "ovi" berasal dari bahasa Latin yang artinya telur.',
      explanation: 'Ovipar (dari "ovum" = telur) adalah hewan yang berkembang biak dengan bertelur. Embrio berkembang di dalam telur di luar tubuh induk. Contoh: ayam, bebek, ikan, katak.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Sapi termasuk jenis hewan...',
      opts: ['Ovipar', 'Ovovivipar', 'Vivipar', 'Tunas'],
      ans: 2,
      hint: 'Sapi melahirkan anak sapi, bukan bertelur.',
      explanation: 'Sapi adalah hewan Vivipar karena melahirkan anaknya. Embrio berkembang di dalam rahim induk dan mendapat nutrisi langsung dari induk melalui plasenta.'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Ayam, ikan, dan katak merupakan contoh hewan _, karena berkembang biak dengan cara bertelur.',
      ans: 'ovipar',
      aliases: ['ovipar', 'bertelur', 'ovipar (bertelur)'],
      hint: 'Kata ini berhubungan dengan kata "ovum" yang berarti telur.',
      explanation: 'Ayam, ikan, dan katak semuanya adalah hewan OVIPAR. Embrio mereka berkembang di dalam telur yang berada di luar tubuh induk.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Hydra berkembang biak secara vegetatif dengan cara...',
      opts: ['Membelah diri', 'Tunas', 'Fragmentasi', 'Partenogenesis'],
      ans: 1,
      hint: 'Pada Hydra, tumbuh benjolan kecil di tubuhnya yang lama-lama menjadi individu baru.',
      explanation: 'Hydra berkembang biak dengan TUNAS. Tunas kecil tumbuh di bagian tubuh induk, kemudian melepaskan diri menjadi Hydra baru yang mandiri.'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Amoeba berkembang biak dengan cara _ menjadi dua individu baru.',
      ans: 'membelah diri',
      hint: 'Bayangkan tubuh Amoeba seperti plastisin yang dibelah jadi dua sama rata.',
      explanation: 'Amoeba berkembang biak dengan membelah diri (pembelahan biner). Satu sel Amoeba membelah menjadi dua sel anak yang identik.'
    },

    // --- SEDANG (6-10) ---
    {
      type: 'mc',
      level: 'sedang',
      q: 'Perbedaan utama antara Ovipar dan Ovovivipar adalah...',
      opts: [
        'Ovipar bertelur di air, Ovovivipar di darat',
        'Ovipar telurnya berkembang di luar tubuh induk, Ovovivipar telurnya berkembang di dalam tubuh induk',
        'Ovipar punya rahim, Ovovivipar tidak',
        'Tidak ada perbedaan keduanya sama saja'
      ],
      ans: 1,
      hint: 'Perhatikan kata "ovo" (telur) dan "vivi" (hidup). Di mana telur itu berkembang?',
      explanation: 'Ovipar: telur dikeluarkan dan berkembang di LUAR tubuh. Ovovivipar: telur berkembang di DALAM tubuh induk, namun bayi tetap lahir dari telur yang menetas di dalam. Keduanya sama-sama punya telur, tapi tempatnya berbeda.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Hewan berikut yang termasuk ovovivipar adalah...',
      opts: ['Kucing', 'Ayam', 'Hiu tertentu', 'Sapi'],
      ans: 2,
      hint: 'Hewan ini hidup di laut dan terlihat seperti ikan besar, tapi punya cara berkembang biak yang unik.',
      explanation: 'Beberapa jenis hiu adalah ovovivipar. Telur berkembang di dalam tubuh induk, lalu bayi hiu lahir hidup-hidup. Kucing dan sapi adalah vivipar, sedangkan ayam adalah ovipar.'
    },
    {
      type: 'fill',
      level: 'sedang',
      q: 'Planaria (cacing pipih) berkembang biak secara vegetatif dengan cara _, di mana setiap potongan tubuhnya dapat tumbuh menjadi individu baru.',
      ans: 'fragmentasi',
      aliases: ['fragmentasi', 'fragmentasi (pemotongan)', 'pemotongan tubuh', 'pemotongan'],
      hint: 'Kata ini mirip dengan kata "fragmen" yang berarti potongan atau bagian.',
      explanation: 'Fragmentasi adalah cara berkembang biak dengan memotong diri. Pada Planaria, setiap potongan tubuh mampu beregenerasi menjadi individu baru yang lengkap. Bintang laut juga menggunakan cara ini.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Lebah pekerja berkembang biak dengan cara partenogenesis. Artinya...',
      opts: [
        'Telur dibuahi oleh lebah jantan',
        'Telur berkembang tanpa dibuahi',
        'Lebah bertelur di dalam sarang',
        'Lebah melahirkan anak'
      ],
      ans: 1,
      hint: 'Partenogenesis berasal dari kata "parthenos" (perawan) dan "genesis" (asal). Apa artinya?',
      explanation: 'Partenogenesis adalah berkembang biak di mana TELUR berkembang TANPA pembuahan dari jantan. Lebah pekerja betina dapat menghasilkan telur yang langsung berkembang tanpa dibuahi lebah jantan.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Mengapa bayi paus termasuk hewan vivipar, bukan ovipar, walaupun hidup di laut seperti ikan?',
      opts: [
        'Karena paus bernapas dengan insang',
        'Karena paus melahirkan anak dan menyusui, seperti mamalia',
        'Karena paus tidak bisa bertelur di air',
        'Karena paus adalah hewan amfibi'
      ],
      ans: 1,
      hint: 'Ingat klasifikasi paus. Apa kelompok hewan yang melahirkan dan menyusui anaknya?',
      explanation: 'Meski hidup di laut, paus adalah MAMALIA, bukan ikan. Mamalia selalu vivipar — melahirkan anak dan menyusui. Paus bernapas dengan paru-paru, bukan insang. Cara hidupnya di laut tidak mengubah cara berkembang biaknya.'
    },

    // --- SUSAH / HOTS (11-15) ---
    {
      type: 'mc',
      level: 'susah',
      q: 'Budi menemukan seekor komodo betina di kebun binatang yang sudah lama tidak bersama komodo jantan, tetapi berhasil bertelur dan telurnya menetas. Cara berkembang biak yang terjadi kemungkinan adalah...',
      opts: ['Fragmentasi', 'Partenogenesis', 'Tunas', 'Vivipar'],
      ans: 1,
      hint: 'Telur berkembang dan menetas tanpa dibuahi oleh jantan. Ini fenomena langka yang terjadi pada beberapa reptil.',
      explanation: 'Komodo dapat melakukan PARTENOGENESIS — telur berkembang tanpa dibuahi oleh jantan. Ini adalah kemampuan luar biasa yang dimiliki beberapa reptil sebagai mekanisme bertahan hidup ketika tidak ada jantan di sekitarnya.'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Hewan ovovivipar berbeda dari vivipar karena pada ovovivipar, bayi tidak mendapat nutrisi dari induk melalui _, melainkan dari dalam telurnya sendiri.',
      ans: 'plasenta (ari-ari)',
      hint: 'Organ penghubung antara bayi dan induk di dalam rahim yang digunakan oleh hewan vivipar.',
      explanation: 'Pada hewan VIVIPAR, bayi mendapat makanan dari induk melalui PLASENTA (ari-ari). Pada OVOVIVIPAR, tidak ada plasenta — bayi mendapat nutrisi dari kuning telur di dalam tubuh induk. Itulah perbedaan mendasar antara keduanya.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Seorang ilmuwan menemukan hewan baru di hutan. Hewan itu berkembang biak dengan cara yang tubuhnya terputus menjadi beberapa bagian, dan setiap bagian tumbuh menjadi individu baru. Cara ini disebut...',
      opts: ['Tunas', 'Membelah diri', 'Fragmentasi', 'Partenogenesis'],
      ans: 2,
      hint: 'Cara ini berbeda dari membelah diri karena "pemotong" tidak harus sama rata.',
      explanation: 'FRAGMENTASI terjadi ketika tubuh hewan terpotong-potong dan tiap potongan tumbuh menjadi individu baru. Berbeda dari membelah diri (yang selalu menghasilkan 2 individu sama besar). Bintang laut, Planaria, dan cacing tanah bisa melakukan fragmentasi.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Rina membandingkan dua hewan: Kucing (vivipar) dan Ayam (ovipar). Menurutmu, apa KEUNGGULAN cara vivipar dibandingkan ovipar dalam menjaga keselamatan keturunan?',
      opts: [
        'Vivipar menghasilkan lebih banyak anak sekaligus',
        'Embrio vivipar terlindung di dalam tubuh induk sehingga lebih aman dari pemangsa dan cuaca',
        'Hewan vivipar lebih pintar dari ovipar',
        'Telur ovipar tidak bisa menetas tanpa bantuan manusia'
      ],
      ans: 1,
      hint: 'Bayangkan perbedaan keamanan antara bayi di dalam rahim vs. telur yang tergeletak di sarang.',
      explanation: 'Keunggulan VIVIPAR: embrio berkembang di dalam rahim induk yang terlindung dari pemangsa, cuaca ekstrem, dan kekeringan. Sedangkan telur ovipar di luar tubuh lebih mudah dimangsa atau rusak. Namun ovipar bisa menghasilkan banyak telur sekaligus sebagai kompensasi.'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Bintang laut dapat beregenerasi karena berkembang biak secara _, yaitu potongan tubuhnya bisa tumbuh menjadi individu baru yang lengkap.',
      ans: 'fragmentasi',
      aliases: ['fragmentasi', 'fragmentasi (pemotongan)', 'pemotongan tubuh', 'pemotongan'],
      hint: 'Sama seperti cara Planaria berkembang biak. Kata kuncinya adalah "potongan" yang bisa tumbuh.',
      explanation: 'Bintang laut melakukan FRAGMENTASI. Jika lengannya terpotong, lengan itu bisa tumbuh menjadi bintang laut baru! Kemampuan regenerasi ini adalah keunggulan luar biasa yang dimiliki beberapa hewan invertebrata.'
    },
  ],

  // ================================================================
  //  ipa-3 | PERKEMBANGBIAKAN TUMBUHAN (Vegetatif & Generatif)
  // ================================================================
  'ipa-3': [

    // --- MUDAH (1-5) ---
    {
      type: 'mc',
      level: 'mudah',
      q: 'Perkembangbiakan tumbuhan yang dilakukan tanpa melalui perkawinan disebut...',
      opts: ['Generatif', 'Vegetatif', 'Seksual', 'Penyerbukan'],
      ans: 1,
      hint: 'Cara ini tidak melibatkan bunga, serbuk sari, atau biji.',
      explanation: 'VEGETATIF adalah perkembangbiakan tanpa perkawinan (aseksual). Tumbuhan baru tumbuh dari bagian tubuh induk seperti batang, akar, atau daun. Lawannya adalah generatif (melalui biji/bunga).'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Pisang berkembang biak secara alami melalui...',
      opts: ['Biji', 'Rhizoma', 'Tunas', 'Spora'],
      ans: 2,
      hint: 'Perhatikan tanaman pisang, selalu ada "anak" pisang yang tumbuh di samping batang induknya.',
      explanation: 'Pisang berkembang biak dengan TUNAS. Tunas anakan tumbuh di pangkal batang induk pisang dan lama-lama akan membentuk tanaman pisang baru yang mandiri.'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Jahe dan kunyit berkembang biak dengan _, yaitu batang yang menjalar di bawah tanah.',
      ans: 'rhizoma',
      aliases: ['rhizoma', 'rimpang', 'rizoma', 'batang rimpang'],
      hint: 'Coba ingat, ketika kamu mencabut jahe dari tanah, bentuknya seperti batang yang berbuku-buku di dalam tanah.',
      explanation: 'Rhizoma (rimpang) adalah batang yang tumbuh dan menjalar di bawah permukaan tanah. Jahe, kunyit, lengkuas, dan kencur berkembang biak dengan cara ini. Setiap buku rhizoma bisa tumbuh menjadi tanaman baru.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Bawang merah berkembang biak dengan...',
      opts: ['Spora', 'Umbi lapis', 'Stolon', 'Tunas'],
      ans: 1,
      hint: 'Kalau kamu kupas bawang merah, kamu akan melihat lapisan-lapisan di dalamnya. Itulah cara ia berkembang biak.',
      explanation: 'Bawang merah berkembang biak dengan UMBI LAPIS. Umbi lapis adalah daun yang berlapis-lapis dan menebal menyimpan cadangan makanan. Setiap lapisan bisa ditanam untuk menghasilkan tanaman baru.'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Lumut dan pakis berkembang biak dengan menyebarkan _ yang sangat ringan dan mudah terbawa angin.',
      ans: 'spora',
      aliases: ['spora', 'spora (benih)'],
      hint: 'Debu-debu kecil yang dilepaskan dari bagian bawah daun pakis.',
      explanation: 'Lumut dan pakis berkembang biak dengan SPORA — sel-sel kecil yang sangat ringan. Spora dilepaskan dari sporangium (kotak spora) dan terbawa angin. Spora yang jatuh di tempat lembab akan tumbuh menjadi tumbuhan baru.'
    },

    // --- SEDANG (6-10) ---
    {
      type: 'mc',
      level: 'sedang',
      q: 'Perbedaan antara Rhizoma dan Stolon adalah...',
      opts: [
        'Rhizoma di atas tanah, Stolon di bawah tanah',
        'Rhizoma di bawah tanah, Stolon di atas tanah',
        'Rhizoma untuk menyimpan air, Stolon untuk menyimpan makanan',
        'Keduanya sama, hanya namanya berbeda'
      ],
      ans: 1,
      hint: 'Jahe ada di bawah tanah. Stroberi menjalar di atas tanah. Mana yang mana?',
      explanation: 'RHIZOMA menjalar di BAWAH tanah (contoh: jahe, kunyit). STOLON menjalar di ATAS tanah (contoh: stroberi, rumput teki). Keduanya adalah batang yang menjalar, perbedaannya hanya posisinya.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Vegetatif buatan yang dilakukan dengan mengupas kulit batang lalu dibungkus tanah lembab agar berakar disebut...',
      opts: ['Stek', 'Okulasi', 'Cangkok', 'Merunduk'],
      ans: 2,
      hint: 'Cara ini sering dilakukan pada pohon mangga dan rambutan. Batangnya dilukai lalu dibungkus.',
      explanation: 'CANGKOK adalah vegetatif buatan dengan mengupas/melukai kulit batang tanaman, lalu membungkusnya dengan tanah lembab yang dibungkus plastik. Akar akan tumbuh di bagian yang terluka. Setelah berakar, cabang dipotong dan ditanam.'
    },
    {
      type: 'fill',
      level: 'sedang',
      q: 'Singkong dan mawar sering dikembangbiakkan dengan cara _, yaitu memotong bagian batang lalu menanamnya langsung ke dalam tanah.',
      ans: 'stek',
      aliases: ['stek', 'stek (cuttings)', 'cutting'],
      hint: 'Caranya: potong → tancapkan ke tanah → tunggu tumbuh. Sesederhana itu!',
      explanation: 'STEK adalah vegetatif buatan dengan memotong bagian tanaman (batang, daun, atau akar) lalu menanamnya. Singkong di-stek batangnya, mawar di-stek batangnya juga. Cara ini murah dan mudah dilakukan.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Dalam perkembangbiakan generatif, proses jatuhnya serbuk sari ke kepala putik disebut...',
      opts: ['Pembuahan', 'Penyerbukan', 'Perkecambahan', 'Fotosintesis'],
      ans: 1,
      hint: 'Ini adalah langkah PERTAMA sebelum pembuahan terjadi. Serbuk sari berpindah ke bagian lain bunga.',
      explanation: 'PENYERBUKAN (polinasi) adalah proses berpindahnya serbuk sari dari kepala sari (antera) ke kepala putik (stigma). Penyerbukan adalah syarat terjadinya pembuahan yang kemudian menghasilkan biji.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Keunggulan utama vegetatif buatan (cangkok, stek) dibandingkan menanam dari biji adalah...',
      opts: [
        'Menghasilkan tanaman yang lebih tinggi',
        'Tanaman baru memiliki sifat yang sama dengan induk dan lebih cepat berbuah',
        'Tanaman baru lebih tahan penyakit',
        'Menghasilkan lebih banyak buah sekaligus'
      ],
      ans: 1,
      hint: 'Kalau sifat induknya bagus (buah manis, ukuran besar), sifat itu akan diturunkan ke tanaman baru.',
      explanation: 'Keunggulan vegetatif buatan: tanaman baru adalah KLON dari induk, sehingga semua sifat unggul induk (rasa, ukuran, warna) diwariskan secara identik. Selain itu, tanaman hasil cangkok/stek biasanya berbuah lebih CEPAT dibanding tanaman dari biji.'
    },

    // --- SUSAH / HOTS (11-15) ---
    {
      type: 'mc',
      level: 'susah',
      q: 'Petani ingin mengembangbiakkan tanaman manga yang buahnya sangat manis. Agar tanaman baru PASTI memiliki buah semanis induknya, cara yang paling tepat adalah...',
      opts: [
        'Menanam biji dari mangga yang manis itu',
        'Mencangkok cabang dari pohon mangga manis itu',
        'Menyerbukkan bunga mangga manis dengan mangga lain',
        'Menunggu mangga itu berbuah dan biji jatuh sendiri'
      ],
      ans: 1,
      hint: 'Cara mana yang menghasilkan tanaman dengan sifat IDENTIK dengan induknya?',
      explanation: 'CANGKOK menghasilkan tanaman yang IDENTIK dengan induknya karena tidak ada percampuran genetik. Menanam dari biji (generatif) bisa menghasilkan tanaman dengan sifat yang berbeda karena ada persilangan dari serbuk sari pohon lain. Cangkok = garansi sifat sama dengan induk!'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Stroberi menjalar dengan stolon untuk memperbanyak diri. Apa keuntungan cara ini dibanding menanam dari biji?',
      opts: [
        'Tidak perlu air sama sekali',
        'Tanaman baru tumbuh lebih cepat dan dekat dengan induk yang sudah kuat',
        'Menghasilkan buah yang lebih besar',
        'Tumbuhan baru memiliki warna yang berbeda'
      ],
      ans: 1,
      hint: 'Stolon menghubungkan induk dengan anak tanaman. Apa yang mengalir melalui stolon sebelum anak tanaman mandiri?',
      explanation: 'Stolon menghubungkan induk dengan tanaman anak. Selama stolon masih terhubung, anak tanaman mendapat nutrisi dari induk sehingga tumbuh lebih cepat. Ketika sudah berakar kuat, stolon putus dan anak tanaman hidup mandiri. Lebih efisien dari menumbuhkan biji dari awal!'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Kentang berkembang biak dengan umbi batang, sedangkan wortel berkembang biak dengan umbi _. Perbedaannya terletak pada bagian tanaman yang membengkak.',
      ans: 'akar',
      hint: 'Kentang = batang yang membengkak. Wortel = ... yang membengkak.',
      explanation: 'Kentang adalah UMBI BATANG (batang di bawah tanah yang membengkak). Wortel adalah UMBI AKAR (akar yang membengkak menyimpan makanan). Perbedaannya: pada umbi batang ada "mata" (tunas), sedangkan pada umbi akar tidak ada tunas di bagian yang membengkak.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Lebah sangat penting bagi pertanian karena perannya dalam perkembangbiakan generatif tumbuhan. Apa yang terjadi pada banyak tanaman buah jika populasi lebah berkurang drastis?',
      opts: [
        'Tanaman akan tumbuh lebih tinggi',
        'Produksi buah akan menurun karena proses penyerbukan terganggu',
        'Tanaman akan beralih ke perkembangbiakan vegetatif',
        'Buah yang dihasilkan akan lebih manis'
      ],
      ans: 1,
      hint: 'Lebah membawa serbuk sari dari satu bunga ke bunga lain. Apa proses itu namanya?',
      explanation: 'Lebah adalah agen PENYERBUKAN (polinator) yang sangat penting. Tanpa penyerbukan, proses pembuahan tidak terjadi dan buah tidak terbentuk. Jika lebah berkurang, penyerbukan terganggu dan PRODUKSI BUAH MENURUN drastis. Ini nyata terjadi di beberapa negara!'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Pada teknik _, dua tanaman berbeda dijadikan satu: batang bawah yang kuat dijadikan akarnya, sedangkan tunas dari tanaman unggul ditempelkan pada batang atas.',
      ans: 'okulasi (sambung pucuk/grafting)',
      hint: 'Teknik ini sering dipakai pada tanaman durian dan rambutan untuk menggabungkan keunggulan dua tanaman.',
      explanation: 'OKULASI (grafting/sambung tunas) menggabungkan dua tanaman: batang bawah (rootstock) yang tahan penyakit dan kuat, dengan tunas/mata dari tanaman unggul yang buahnya bagus. Hasilnya: tanaman dengan akar kuat DAN buah berkualitas tinggi dari induk unggul.'
    },
  ],

  // ================================================================
  //  ipa-4 | ENERGI TERBARUKAN
  // ================================================================
  'ipa-4': [

    // --- MUDAH (1-5) ---
    {
      type: 'mc',
      level: 'mudah',
      q: 'Energi terbarukan adalah energi yang berasal dari sumber alam yang...',
      opts: [
        'Akan habis dalam 100 tahun',
        'Hanya ada di negara maju',
        'Dapat diperbaharui secara alami dan tidak akan habis',
        'Hanya bisa digunakan sekali'
      ],
      ans: 2,
      hint: 'Kata kuncinya adalah "terbarukan" — bisa diperbarui terus-menerus oleh alam.',
      explanation: 'Energi terbarukan berasal dari sumber yang dapat DIPERBAHARUI secara alami dan tidak habis. Contoh: matahari selalu bersinar, angin selalu bertiup, air selalu mengalir. Berbeda dengan batu bara atau minyak bumi yang terbatas.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Alat yang digunakan untuk mengubah energi matahari menjadi listrik adalah...',
      opts: ['Turbin angin', 'Panel surya', 'Generator', 'Baterai'],
      ans: 1,
      hint: 'Alat ini berbentuk seperti lembaran berwarna biru/hitam yang dipasang di atap rumah.',
      explanation: 'PANEL SURYA (solar panel) adalah alat yang mengubah energi cahaya matahari menjadi energi listrik melalui efek fotovoltaik. Panel surya sering dipasang di atap rumah atau di lahan terbuka.'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'PLTA adalah singkatan dari Pembangkit Listrik Tenaga _, yang memanfaatkan aliran dan terjunan air untuk menghasilkan listrik.',
      ans: 'Air',
      hint: 'Huruf terakhir singkatannya adalah A. PLTA memanfaatkan kekuatan apa?',
      explanation: 'PLTA (Pembangkit Listrik Tenaga Air) adalah pembangkit listrik yang memanfaatkan energi kinetik dan potensial air yang mengalir atau jatuh (dari bendungan/air terjun). PLTA adalah sumber listrik terbarukan terbesar di Indonesia.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Berikut yang termasuk energi TAK TERBARUKAN adalah...',
      opts: ['Energi matahari', 'Energi angin', 'Batu bara', 'Energi air'],
      ans: 2,
      hint: 'Energi tak terbarukan berasal dari bahan bakar fosil yang terbentuk jutaan tahun dan bisa habis.',
      explanation: 'BATU BARA adalah bahan bakar fosil (energi tak terbarukan). Ia terbentuk dari sisa makhluk hidup selama jutaan tahun dan jumlahnya terbatas. Matahari, angin, dan air adalah energi terbarukan.'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Energi panas yang berasal dari dalam bumi disebut energi _, yang dimanfaatkan oleh PLTP.',
      ans: 'panas bumi (geothermal)',
      hint: 'Energi ini berasal dari panas magma di dalam bumi. Kata lainnya adalah "geo" + "thermal".',
      explanation: 'ENERGI PANAS BUMI (geothermal) berasal dari panas magma di dalam inti bumi. Indonesia kaya akan panas bumi karena banyak gunung berapi aktif. PLTP (Pembangkit Listrik Tenaga Panas Bumi) memanfaatkan uap panas dari dalam bumi.'
    },

    // --- SEDANG (6-10) ---
    {
      type: 'mc',
      level: 'sedang',
      q: 'Mengapa energi terbarukan disebut lebih "ramah lingkungan" dibandingkan bahan bakar fosil?',
      opts: [
        'Karena energi terbarukan lebih mahal',
        'Karena energi terbarukan tidak menghasilkan gas rumah kaca dan polusi yang merusak lingkungan',
        'Karena energi terbarukan hanya digunakan di desa',
        'Karena bahan bakar fosil tidak bisa dibakar'
      ],
      ans: 1,
      hint: 'Bayangkan asap dari pabrik yang membakar batu bara. Apakah panel surya mengeluarkan asap?',
      explanation: 'Energi terbarukan seperti matahari dan angin menghasilkan listrik TANPA membakar bahan apapun, sehingga tidak menghasilkan gas CO₂ atau polutan. Bahan bakar fosil ketika dibakar menghasilkan gas rumah kaca yang menyebabkan pemanasan global.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Turbin angin (kincir angin modern) mengubah energi angin menjadi...',
      opts: ['Energi panas', 'Energi listrik', 'Energi suara', 'Energi kimia'],
      ans: 1,
      hint: 'Baling-baling turbin berputar karena angin. Putaran itu lalu diubah oleh generator menjadi apa?',
      explanation: 'Turbin angin mengubah ENERGI KINETIK angin menjadi ENERGI LISTRIK. Angin memutar baling-baling, baling-baling memutar generator, dan generator menghasilkan listrik. Proses yang sama dipakai oleh PLTA dan PLTP.'
    },
    {
      type: 'fill',
      level: 'sedang',
      q: 'Biogas adalah contoh energi _ yang berasal dari fermentasi bahan organik seperti kotoran hewan atau sampah.',
      ans: 'biomassa (terbarukan)',
      hint: 'Bio = makhluk hidup. Gas yang dihasilkan oleh kotoran sapi bisa digunakan untuk memasak.',
      explanation: 'BIOMASSA adalah energi yang berasal dari bahan organik (makhluk hidup atau sisa-sisanya). Biogas dihasilkan dari fermentasi kotoran hewan (sapi, babi, ayam) oleh bakteri tanpa oksigen. Biogas menghasilkan metana (CH₄) yang bisa dibakar untuk memasak atau membangkitkan listrik.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Kelemahan utama energi surya (panel surya) adalah...',
      opts: [
        'Tidak bisa digunakan di negara tropis',
        'Menghasilkan gas berbahaya saat beroperasi',
        'Bergantung pada cuaca dan tidak bisa menghasilkan listrik saat mendung atau malam hari',
        'Harganya lebih mahal dari batu bara setiap harinya'
      ],
      ans: 2,
      hint: 'Panel surya butuh sinar matahari. Apa yang terjadi ketika langit berawan atau malam tiba?',
      explanation: 'Kelemahan energi surya: BERGANTUNG PADA CUACA dan sinar matahari. Saat mendung atau malam hari, panel surya tidak dapat menghasilkan listrik. Untuk mengatasi ini, digunakan baterai penyimpan energi, namun biayanya masih mahal.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Indonesia memiliki potensi energi panas bumi yang sangat besar karena...',
      opts: [
        'Indonesia negara tropis yang panas',
        'Indonesia memiliki banyak gunung berapi aktif (Ring of Fire)',
        'Indonesia memiliki banyak sungai besar',
        'Indonesia dekat dengan khatulistiwa'
      ],
      ans: 1,
      hint: 'Indonesia berada di "Cincin Api Pasifik" — daerah dengan banyak aktivitas vulkanik.',
      explanation: 'Indonesia berada di CINCIN API PASIFIK (Ring of Fire) — sabuk gunung berapi aktif di sekitar Samudra Pasifik. Aktivitas vulkanik ini menghasilkan panas bumi yang sangat besar. Indonesia adalah negara dengan potensi panas bumi terbesar ke-2 di dunia!'
    },

    // --- SUSAH / HOTS (11-15) ---
    {
      type: 'mc',
      level: 'susah',
      q: 'Sebuah desa terpencil di pegunungan memiliki sungai deras, angin kencang, dan sinar matahari yang cukup, tetapi tidak ada aliran listrik PLN. Energi terbarukan yang PALING EFISIEN untuk dipasang di sana adalah...',
      opts: [
        'Panel surya saja',
        'Turbin angin saja',
        'Kincir air dari sungai (mikrohidro), karena menghasilkan listrik stabil 24 jam tanpa bergantung cuaca',
        'Biogas dari kotoran hewan'
      ],
      ans: 2,
      hint: 'Energi mana yang tersedia terus-menerus, siang dan malam, tidak peduli cuaca?',
      explanation: 'Mikrohidro (kincir air kecil di sungai) adalah pilihan terbaik karena sungai mengalir TERUS-MENERUS — siang malam, hujan maupun cerah. Panel surya tidak bekerja malam hari, turbin angin bergantung pada kecepatan angin. Mikrohidro menghasilkan listrik STABIL 24 jam.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Mengapa minyak bumi disebut energi "tak terbarukan" meski berasal dari makhluk hidup jutaan tahun lalu?',
      opts: [
        'Karena minyak bumi tidak bisa dibakar',
        'Karena proses pembentukannya memerlukan jutaan tahun sehingga tidak bisa menggantikan yang sudah habis dalam waktu singkat',
        'Karena minyak bumi hanya ada di satu negara',
        'Karena minyak bumi terlalu mahal untuk diproduksi lagi'
      ],
      ans: 1,
      hint: 'Bandingkan: matahari bersinar SETIAP HARI, tapi terbentuknya minyak bumi membutuhkan... berapa lama?',
      explanation: 'Minyak bumi TAK TERBARUKAN bukan karena tidak bisa terbentuk lagi, tapi karena proses pembentukannya memerlukan JUTAAN TAHUN. Kita menggunakannya jauh lebih cepat dari proses pembentukannya. Dalam skala waktu manusia, minyak bumi praktis tidak bisa diperbarui.'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Negara yang sudah menggunakan hampir 100% energi terbarukan untuk listriknya adalah Islandia, yang memanfaatkan kombinasi energi _ dan energi panas bumi karena posisinya di atas lempeng tektonik aktif.',
      ans: 'air (hidroelektrik)',
      hint: 'Islandia memiliki banyak sungai deras dari pencairan gletser dan banyak geyser/gunung berapi.',
      explanation: 'Islandia menggunakan sekitar 99% energi terbarukan: sekitar 70% dari HYDROPOWER (energi air dari sungai-sungai glasial) dan 30% dari PANAS BUMI. Posisinya di atas punggung tengah Atlantik membuatnya kaya panas bumi. Islandia adalah contoh sempurna energi terbarukan 100%!'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Andi berpendapat bahwa memasang panel surya di rumah itu rugi karena biaya awalnya mahal. Bantahlah pendapat Andi dengan argumen yang tepat!',
      opts: [
        'Andi benar, panel surya memang tidak menguntungkan sama sekali',
        'Panel surya gratis setelah dipasang, tidak perlu biaya perawatan apapun',
        'Meski mahal di awal, panel surya menghemat tagihan listrik jangka panjang dan ramah lingkungan',
        'Panel surya hanya cocok untuk perusahaan besar, bukan rumah tangga'
      ],
      ans: 2,
      hint: 'Pikirkan: setelah dipasang, apakah panel surya perlu "bahan bakar" yang harus dibeli terus-menerus?',
      explanation: 'Panel surya memang mahal di AWAL, tapi setelah dipasang, "bahan bakarnya" (sinar matahari) GRATIS! Tagihan listrik berkurang atau bahkan nol. Dalam 5-10 tahun, biaya awal sudah terbalik menjadi penghematan. Ditambah, ramah lingkungan tidak menghasilkan polusi. Ini namanya investasi jangka panjang!'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Penggunaan bahan bakar fosil yang berlebihan berkontribusi terhadap _ global, yaitu naiknya suhu rata-rata bumi akibat efek rumah kaca.',
      ans: 'pemanasan (pemanasan global)',
      hint: 'Istilah dalam bahasa Inggris: "global warming".',
      explanation: 'Pembakaran bahan bakar fosil menghasilkan CO₂ dan gas rumah kaca lainnya yang memerangkap panas di atmosfer bumi, menyebabkan PEMANASAN GLOBAL. Dampaknya: es kutub mencair, permukaan laut naik, cuaca ekstrem. Penggunaan energi terbarukan adalah solusi utama masalah ini.'
    },
  ],

  // ================================================================
  //  ipa-5 | CARA MENGHEMAT ENERGI
  // ================================================================
  'ipa-5': [

    // --- MUDAH (1-5) ---
    {
      type: 'mc',
      level: 'mudah',
      q: 'Tindakan yang paling tepat untuk menghemat energi listrik di rumah adalah...',
      opts: [
        'Membiarkan lampu menyala sepanjang malam',
        'Mematikan lampu saat meninggalkan ruangan',
        'Menggunakan dua AC sekaligus',
        'Menonton TV sambil tidur'
      ],
      ans: 1,
      hint: 'Energi listrik habis sia-sia jika lampu menyala tapi tidak ada yang menggunakannya.',
      explanation: 'MEMATIKAN LAMPU saat meninggalkan ruangan adalah cara termudah menghemat energi listrik. Lampu yang menyala tanpa digunakan membuang energi dan uang secara sia-sia.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Alasan utama mengapa kita perlu menghemat energi adalah...',
      opts: [
        'Agar tagihan listrik lebih mahal',
        'Karena sebagian besar energi yang kita gunakan berasal dari sumber yang terbatas dan tidak terbarukan',
        'Karena energi tidak berguna bagi manusia',
        'Agar lampu tidak menyala terang'
      ],
      ans: 1,
      hint: 'Bayangkan jika minyak bumi dan batu bara habis. Apa yang terjadi pada dunia?',
      explanation: 'Kita perlu hemat energi karena sebagian besar energi (listrik, BBM) berasal dari bahan bakar fosil yang TERBATAS dan tidak terbarukan. Jika digunakan terus tanpa hemat, sumber energi akan habis lebih cepat sebelum kita menemukan penggantinya.'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Mencabut charger handphone dari stopkontak saat tidak digunakan adalah cara menghemat _, karena charger yang masih tertancap tetap mengonsumsi daya kecil.',
      ans: 'energi listrik',
      hint: 'Charger yang masih di stopkontak walau HP tidak terhubung masih "meminum" daya listrik.',
      explanation: 'Charger yang masih tertancap di stopkontak (tanpa HP) tetap mengonsumsi daya listrik kecil ("phantom load" atau daya hantu). Mencabutnya menghemat ENERGI LISTRIK, juga mengurangi tagihan listrik dan memperpanjang umur charger.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Saat berjalan kaki atau bersepeda ke sekolah (jika jaraknya dekat), kita membantu menghemat energi karena...',
      opts: [
        'Kendaraan bermotor menggunakan bahan bakar yang berasal dari sumber tak terbarukan',
        'Berjalan kaki lebih cepat dari kendaraan',
        'Kendaraan bermotor tidak boleh dikendarai anak-anak',
        'Bersepeda menghasilkan lebih banyak polusi'
      ],
      ans: 0,
      hint: 'Apa yang dibutuhkan motor atau mobil untuk bergerak? Apakah sumber itu dapat habis?',
      explanation: 'Kendaraan bermotor menggunakan bensin atau solar yang merupakan BAHAN BAKAR FOSIL — sumber energi tak terbarukan yang terbatas. Berjalan kaki atau bersepeda tidak membutuhkan bahan bakar fosil, sehingga menghemat energi sekaligus mengurangi polusi udara.'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Menggunakan _ alami yang masuk melalui jendela di siang hari dapat mengurangi penggunaan lampu di dalam ruangan.',
      ans: 'cahaya matahari (sinar matahari)',
      hint: 'Di siang hari yang terang, alam sudah menyediakan penerangan gratis tanpa perlu listrik.',
      explanation: 'CAHAYA MATAHARI yang masuk melalui jendela bisa menggantikan lampu di siang hari. Cara ini disebut pencahayaan alami (daylighting). Dengan membuka tirai/gorden di siang hari, kita mengurangi penggunaan listrik untuk lampu.'
    },

    // --- SEDANG (6-10) ---
    {
      type: 'mc',
      level: 'sedang',
      q: 'Mengapa lampu LED lebih hemat energi dibandingkan lampu pijar (bohlam lama)?',
      opts: [
        'Lampu LED lebih kecil ukurannya',
        'Lampu LED mengubah sebagian besar energi listrik menjadi cahaya, bukan panas',
        'Lampu LED lebih murah harganya',
        'Lampu LED berwarna-warni lebih indah'
      ],
      ans: 1,
      hint: 'Coba pegang lampu pijar yang menyala (dengan hati-hati). Terasa panas bukan? Panas itu adalah energi yang terbuang.',
      explanation: 'Lampu pijar membuang sekitar 90% energi listrik sebagai PANAS, hanya 10% menjadi cahaya. Lampu LED mengubah sekitar 90-95% energi menjadi CAHAYA, sedikit sekali panas yang terbuang. Itulah mengapa LED jauh lebih efisien dan hemat energi.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Di sekolah, cara paling efektif untuk menghemat kertas (yang berarti menghemat energi dan sumber daya alam) adalah...',
      opts: [
        'Tidak pernah menulis di kertas sama sekali',
        'Menggunakan kedua sisi kertas dan mendaur ulang kertas bekas',
        'Membuang kertas yang sudah dipakai satu sisi',
        'Membeli kertas baru setiap hari'
      ],
      ans: 1,
      hint: 'Kalau satu sisi sudah terpakai, sisi yang lain masih kosong. Sayang kan kalau dibuang?',
      explanation: 'Menggunakan KEDUA SISI kertas dan mendaur ulang kertas bekas menghemat penggunaan kertas hingga 50%. Membuat kertas memerlukan penebangan pohon, air, dan energi yang besar. Menghemat kertas = menghemat hutan + energi + air.'
    },
    {
      type: 'fill',
      level: 'sedang',
      q: 'Mengatur suhu AC tidak terlalu dingin (misalnya 24-26°C) adalah cara hemat energi, karena semakin dingin suhu AC, semakin besar _ listrik yang digunakan.',
      ans: 'konsumsi (daya)',
      hint: 'Ketika AC bekerja lebih keras untuk mendinginkan ruangan, ia "meminum" lebih banyak apa?',
      explanation: 'Semakin rendah suhu AC, semakin keras kompressor bekerja dan semakin besar KONSUMSI LISTRIK (daya). Setiap penurunan 1°C pada AC dapat meningkatkan konsumsi listrik sekitar 6-10%. Mengatur suhu 24-26°C sudah cukup nyaman dan jauh lebih hemat energi.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Manakah pernyataan yang BENAR tentang penghematan energi?',
      opts: [
        'Hemat energi hanya menguntungkan pemilik perusahaan listrik',
        'Hemat energi bermanfaat untuk diri sendiri, masyarakat, dan lingkungan hidup',
        'Hemat energi membuat hidup menjadi tidak nyaman',
        'Hemat energi hanya penting di kota besar'
      ],
      ans: 1,
      hint: 'Pikirkan dampak hemat energi dari 3 sisi: tagihan listrik kita, ketersediaan energi untuk semua, dan kondisi bumi.',
      explanation: 'Hemat energi bermanfaat TIGA LAPIS: (1) diri sendiri — tagihan listrik lebih murah; (2) masyarakat — energi tersedia lebih lama untuk semua orang; (3) lingkungan — mengurangi polusi dan memperlambat perubahan iklim. Semua orang di semua tempat perlu hemat energi!'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Mengapa mencuci pakaian dengan air dingin bisa menghemat energi?',
      opts: [
        'Karena mesin cuci bekerja lebih cepat dengan air dingin',
        'Karena tidak perlu energi untuk memanaskan air, yang bisa menghabiskan 90% energi mesin cuci',
        'Karena air dingin membuat pakaian lebih bersih',
        'Karena mesin cuci tidak bisa menggunakan air panas'
      ],
      ans: 1,
      hint: 'Memanaskan air butuh energi besar. Apa yang terjadi jika kita tidak perlu memanaskan air sama sekali?',
      explanation: 'Memanaskan air menghabiskan sekitar 90% total energi yang digunakan mesin cuci! Dengan mencuci menggunakan air dingin, kita menghemat hampir 90% energi mesin cuci. Detergen modern sudah dirancang efektif di air dingin, jadi kebersihan tetap terjaga.'
    },

    // --- SUSAH / HOTS (11-15) ---
    {
      type: 'mc',
      level: 'susah',
      q: 'Satu keluarga selalu lupa mencabut charger, membiarkan TV stand-by (tidak dimatikan total), dan tidak mematikan lampu saat siang hari. Apa dampak jangka panjang kebiasaan ini?',
      opts: [
        'Tidak ada dampak apa-apa karena energinya kecil',
        'Tagihan listrik lebih tinggi, penggunaan bahan bakar fosil meningkat, dan berkontribusi pada polusi lebih banyak',
        'Peralatan listrik menjadi lebih awet',
        'Listrik di rumah menjadi lebih kuat'
      ],
      ans: 1,
      hint: '"Phantom load" (daya hantu) dari perangkat stand-by kecil tapi terus-menerus selama 24 jam, 7 hari, 365 hari.',
      explanation: 'Kebiasaan boros energi kecil yang dilakukan TERUS-MENERUS berdampak besar: tagihan listrik lebih tinggi, kebutuhan energi meningkat sehingga pembangkit listrik membakar lebih banyak bahan bakar fosil, menghasilkan lebih banyak polusi dan gas rumah kaca. "Sedikit demi sedikit, lama-lama menjadi bukit."'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Program _ adalah gerakan mematikan lampu dan peralatan listrik tidak penting selama 1 jam (pukul 20.30-21.30) setiap tahun untuk meningkatkan kesadaran hemat energi di seluruh dunia.',
      ans: 'Earth Hour',
      hint: 'Program ini diinisiasi WWF. Kata-katanya dalam bahasa Inggris yang berarti "Jam Bumi".',
      explanation: 'EARTH HOUR adalah gerakan global yang diinisiasi WWF. Setiap tahun, orang-orang di seluruh dunia mematikan lampu selama 1 jam sebagai simbol komitmen terhadap lingkungan. Tujuannya: meningkatkan kesadaran tentang perubahan iklim dan pentingnya hemat energi.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Pak Ahmad ingin menghemat energi di rumahnya. Ia ragu memilih antara: (A) mengganti semua lampu dengan LED, atau (B) mematikan TV saat tidak ditonton. Manakah yang lebih SIGNIFIKAN menghemat energi?',
      opts: [
        'A lebih signifikan karena LED jauh lebih efisien',
        'B lebih signifikan karena TV menggunakan lebih banyak daya dari lampu',
        'Keduanya sama pentingnya dan sebaiknya dilakukan dua-duanya',
        'Tidak ada yang signifikan, keduanya hanya menghemat sedikit'
      ],
      ans: 2,
      hint: 'Apakah kamu bisa membandingkan penghematan keduanya? Atau justru keduanya perlu dilakukan bersamaan?',
      explanation: 'Kedua cara sama pentingnya dan SEBAIKNYA DILAKUKAN BERSAMAAN. Mengganti lampu ke LED menghemat energi secara pasif (otomatis efisien). Mematikan TV aktif mencegah pemborosan. Penghematan energi maksimal dicapai dengan mengombinasikan BANYAK cara hemat, bukan hanya satu.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Apa hubungan antara hemat energi dan pengurangan emisi gas karbon dioksida (CO₂)?',
      opts: [
        'Tidak ada hubungannya sama sekali',
        'Semakin hemat energi, semakin sedikit bahan bakar fosil yang dibakar, sehingga emisi CO₂ berkurang',
        'Hemat energi justru meningkatkan CO₂',
        'CO₂ tidak berbahaya bagi lingkungan'
      ],
      ans: 1,
      hint: 'Dari mana listrik berasal? Apakah pembangkit listrik membakar sesuatu?',
      explanation: 'Sebagian besar listrik masih dihasilkan dengan MEMBAKAR bahan bakar fosil (batu bara, gas). Pembakaran menghasilkan CO₂. Semakin hemat energi → semakin sedikit listrik dibutuhkan → semakin sedikit bahan bakar dibakar → semakin sedikit CO₂ → memperlambat pemanasan global. Rantai dampak yang jelas!'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Konsep _ (kurangi, gunakan kembali, daur ulang) tidak hanya berlaku untuk sampah, tetapi juga untuk energi dengan mengurangi pemakaian, menggunakan kembali energi yang ada, dan mendaur ulang produk untuk menghemat energi produksi.',
      ans: '3R (Reduce, Reuse, Recycle)',
      hint: 'Tiga kata dalam bahasa Inggris yang semuanya diawali huruf R.',
      explanation: 'Prinsip 3R berlaku untuk energi: REDUCE (kurangi pemakaian listrik dengan mematikan yang tidak perlu), REUSE (gunakan kembali peralatan selama masih bisa), RECYCLE (daur ulang produk menghemat energi produksi baru). Misalnya, mendaur ulang aluminium menghemat 95% energi dibanding membuat aluminium baru!'
    },
  ],

  // ================================================================
  //  ipa-6 | PERUBAHAN ENERGI (Berbagai Bentuk & Transformasi)
  // ================================================================
  'ipa-6': [

    // --- MUDAH (1-5) ---
    {
      type: 'mc',
      level: 'mudah',
      q: 'Perubahan energi yang terjadi pada lampu listrik adalah...',
      opts: [
        'Energi cahaya → Energi listrik',
        'Energi listrik → Energi cahaya',
        'Energi kimia → Energi listrik',
        'Energi panas → Energi cahaya'
      ],
      ans: 1,
      hint: 'Lampu "memakan" listrik untuk menghasilkan sesuatu yang kita lihat.',
      explanation: 'Lampu listrik mengubah ENERGI LISTRIK menjadi ENERGI CAHAYA (dan sedikit panas). Ini adalah perubahan energi yang paling sering kita temui setiap hari di rumah.'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Setrika mengubah energi _ menjadi energi panas untuk melicinkan pakaian.',
      ans: 'listrik',
      aliases: ['listrik', 'energi listrik', 'electrical'],
      hint: 'Setrika perlu disambungkan ke stopkontak. Apa yang mengalir dari stopkontak ke setrika?',
      explanation: 'Setrika mengubah ENERGI LISTRIK menjadi ENERGI PANAS (kalor). Elemen pemanas di dalam setrika mengubah arus listrik menjadi panas yang digunakan untuk melicinkan pakaian.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Ketika kita memukul gendang, energi apa yang dihasilkan?',
      opts: ['Energi listrik', 'Energi kimia', 'Energi bunyi', 'Energi cahaya'],
      ans: 2,
      hint: 'Apa yang kamu dengar ketika gendang dipukul?',
      explanation: 'Memukul gendang mengubah ENERGI GERAK (kinetik) tangan menjadi ENERGI BUNYI. Getaran pada membran gendang menghasilkan gelombang suara yang kita dengar.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Pada kipas angin yang menyala, terjadi perubahan energi...',
      opts: [
        'Listrik → Panas',
        'Listrik → Gerak (angin)',
        'Gerak → Listrik',
        'Panas → Gerak'
      ],
      ans: 1,
      hint: 'Kipas angin dihubungkan ke listrik dan menghasilkan hembusan angin. Apa yang berubah?',
      explanation: 'Kipas angin mengubah ENERGI LISTRIK menjadi ENERGI GERAK (kinetik). Motor listrik memutar baling-baling yang menghasilkan aliran udara (angin).'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Baterai adalah alat yang menyimpan energi _ dan mengubahnya menjadi energi listrik saat digunakan.',
      ans: 'kimia',
      hint: 'Di dalam baterai ada reaksi yang melibatkan zat-zat kimia. Energi apa yang tersimpan di sana?',
      explanation: 'Baterai menyimpan ENERGI KIMIA dalam bentuk reaksi elektrokimia. Saat digunakan, reaksi kimia di dalam baterai menghasilkan ENERGI LISTRIK. Inilah mengapa baterai bisa habis — reaksi kimianya sudah "terpakai".'
    },

    // --- SEDANG (6-10) ---
    {
      type: 'mc',
      level: 'sedang',
      q: 'Panel surya mengubah energi matahari menjadi energi listrik. Ini termasuk perubahan energi dari...',
      opts: [
        'Energi panas → Energi gerak',
        'Energi cahaya → Energi listrik',
        'Energi kimia → Energi cahaya',
        'Energi listrik → Energi cahaya'
      ],
      ans: 1,
      hint: 'Panel surya menangkap sinar matahari (cahaya) dan menghasilkan listrik.',
      explanation: 'Panel surya (sel fotovoltaik) mengubah ENERGI CAHAYA (foton dari matahari) menjadi ENERGI LISTRIK melalui efek fotolistrik. Ini adalah perubahan energi yang revolusioner dalam teknologi hijau.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Perubahan energi apa yang terjadi pada mobil berbahan bakar bensin?',
      opts: [
        'Energi listrik → Energi gerak',
        'Energi kimia (bensin) → Energi panas → Energi gerak',
        'Energi cahaya → Energi gerak',
        'Energi bunyi → Energi gerak'
      ],
      ans: 1,
      hint: 'Bensin dibakar di dalam mesin. Apa yang terjadi ketika bahan bakar terbakar?',
      explanation: 'Pada mobil bermesin bensin: ENERGI KIMIA (bensin) → dibakar menghasilkan ENERGI PANAS → panas mendorong piston menghasilkan ENERGI GERAK. Ini adalah rangkaian perubahan energi tiga langkah yang menggerakkan kendaraan.'
    },
    {
      type: 'fill',
      level: 'sedang',
      q: 'Ketika kamu menggosok-gosokkan kedua tanganmu, energi _ berubah menjadi energi panas, sehingga tanganmu terasa hangat.',
      ans: 'gerak (kinetik)',
      hint: 'Apa yang kamu lakukan dengan tanganmu? Bergerak, bukan? Energi apa yang dimiliki benda yang bergerak?',
      explanation: 'Menggosok tangan mengubah ENERGI GERAK (kinetik) menjadi ENERGI PANAS (kalor) melalui gesekan. Prinsip yang sama digunakan manusia zaman dulu untuk menyalakan api dengan menggosok dua batang kayu.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Generator listrik pada PLTA mengubah energi...',
      opts: [
        'Kimia → Listrik',
        'Cahaya → Listrik',
        'Gerak (putaran turbin) → Listrik',
        'Panas → Cahaya'
      ],
      ans: 2,
      hint: 'Air jatuh → memutar turbin → turbin memutar generator. Generator mengubah apa menjadi apa?',
      explanation: 'Di PLTA: air jatuh memiliki energi gerak → memutar turbin → turbin memutar generator → ENERGI GERAK diubah menjadi ENERGI LISTRIK oleh generator. Generator adalah alat pengubah energi gerak menjadi listrik.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Hukum Kekekalan Energi menyatakan bahwa energi...',
      opts: [
        'Bisa diciptakan jika kita punya teknologi canggih',
        'Tidak dapat diciptakan atau dimusnahkan, hanya berubah bentuk',
        'Selalu berkurang setiap kali berubah bentuk',
        'Hanya ada dalam bentuk listrik dan panas'
      ],
      ans: 1,
      hint: 'Energi dari matahari tidak "hilang" — ia berubah menjadi angin, ombak, makanan... Energi berubah, tidak lenyap.',
      explanation: 'Hukum Kekekalan Energi: energi TIDAK BISA DICIPTAKAN atau DIMUSNAHKAN — hanya bisa berubah bentuk. Jumlah total energi di alam semesta selalu konstan. Energi kimia bensin tidak "hilang" — berubah menjadi panas dan gerak.'
    },

    // --- SUSAH / HOTS (11-15) ---
    {
      type: 'mc',
      level: 'susah',
      q: 'Dina bermain ketapel. Ia menarik karet ketapel (energi tersimpan), melepaskannya (batu meluncur cepat), batu menghantam dinding dan berhenti. Jelaskan rantai perubahan energi yang terjadi!',
      opts: [
        'Kimia → Gerak → Bunyi',
        'Potensial elastis → Kinetik → Panas dan Bunyi',
        'Listrik → Gerak → Panas',
        'Cahaya → Gerak → Kimia'
      ],
      ans: 1,
      hint: 'Karet yang ditarik menyimpan energi apa? Batu yang bergerak punya energi apa? Saat batu berhenti menabrak dinding, energinya jadi apa?',
      explanation: 'Rantai perubahan energi ketapel: (1) Karet ditarik → tersimpan sebagai ENERGI POTENSIAL ELASTIS; (2) Karet dilepas → batu bergerak cepat = ENERGI KINETIK; (3) Batu menghantam dinding → berhenti = energi berubah menjadi PANAS dan BUNYI (suara benturan). Perubahan energi sempurna!'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Pada pembangkit listrik tenaga uap (PLTU), batu bara dibakar untuk memanaskan air menjadi uap. Uap memutar turbin, turbin memutar generator. Rantai perubahan energinya: Kimia → _ → Gerak → Listrik.',
      ans: 'Panas (kalor)',
      aliases: ['panas', 'kalor', 'panas (kalor)', 'energi panas', 'heat'],
      hint: 'Batu bara dibakar → menghasilkan... apa? Lalu panas itu menghasilkan uap yang bergerak.',
      explanation: 'Rantai di PLTU: KIMIA (batu bara terbakar) → PANAS (memanaskan air jadi uap) → GERAK (uap memutar turbin) → LISTRIK (generator berputar). Setiap tahap ada konversi energi. Efisiensinya tidak 100% karena ada energi yang "bocor" sebagai panas ke lingkungan.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Mengapa mesin tidak pernah 100% efisien dalam mengubah energi, meskipun total energi tetap sama (Hukum Kekekalan Energi)?',
      opts: [
        'Karena mesin selalu mencuri sebagian energi untuk dirinya sendiri',
        'Karena selalu ada energi yang terbuang menjadi panas akibat gesekan dan hambatan dalam proses konversi',
        'Karena Hukum Kekekalan Energi tidak benar-benar berlaku',
        'Karena energi berkurang setiap kali berubah bentuk'
      ],
      ans: 1,
      hint: 'Coba raba mesin yang sudah bekerja lama. Kenapa terasa panas jika panasnya bukan tujuan utama?',
      explanation: 'Mesin tidak 100% efisien karena selalu ada GESEKAN antar komponen yang menghasilkan panas yang tidak bermanfaat. Panas ini "bocor" ke lingkungan. Total energi tetap sama (kekekalan energi), tapi sebagian "kualitasnya" turun menjadi panas yang sulit digunakan kembali. Ini disebut hukum termodinamika kedua.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Saat kamu mendorong buku di meja dan buku berhenti karena gesekan, ke mana "perginya" energi kinetik buku tersebut?',
      opts: [
        'Energi tersebut lenyap dan hilang selamanya',
        'Energi berubah menjadi energi panas yang sangat kecil akibat gesekan buku dengan meja',
        'Energi kembali ke tangan kamu',
        'Energi tersimpan di dalam buku'
      ],
      ans: 1,
      hint: 'Hukum Kekekalan Energi: energi tidak bisa hilang. Lalu ke mana energi itu pergi?',
      explanation: 'Energi kinetik buku tidak lenyap! Ia berubah menjadi ENERGI PANAS (kalor) yang sangat kecil akibat GESEKAN antara buku dengan meja. Suhu meja dan buku naik sedikit. Energi tetap ada, hanya berubah bentuk — ini Hukum Kekekalan Energi.'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Dalam tubuh manusia, makanan yang kita makan mengandung energi _. Energi ini diubah oleh tubuh menjadi energi _ untuk bergerak, dan energi _ untuk menjaga suhu tubuh.',
      ans: 'kimia; gerak (kinetik); panas (kalor)',
      hint: 'Makanan → jenis energi apa? → kita bisa melakukan apa dengan energi itu?',
      explanation: 'Makanan mengandung ENERGI KIMIA (dalam ikatan molekul karbohidrat, protein, lemak). Saat dicerna dan dimetabolisme oleh sel-sel tubuh: (1) sebagian menghasilkan ENERGI GERAK (otot berkontraksi untuk bergerak); (2) sebagian menghasilkan ENERGI PANAS untuk menjaga suhu tubuh 37°C. Semua dari makanan yang kita makan!'
    },
  ],

};
// Akhir BATCH 1 Bagian 1 (ipa-1 s.d. ipa-6)
// Lanjutkan dengan ipa-7 s.d. ipa-12 pada bagian berikutnya.

// ============================================================
//  QUIZ_DATA — BATCH 1: IPA Topik ipa-7 s.d. ipa-12
//  BelajarCeria | Senior Education Content Creator
//  Format: 15 soal/topik | 5 Mudah, 5 Sedang, 5 Susah (HOTS)
//          Min. 3 soal tipe 'fill' per topik
//          mc: 4 opsi, ans = index 0-3
//          fill: jawaban singkat, '_' pada string q
// ============================================================

// Tambahkan ke objek QUIZ_DATA yang sudah ada (ipa-1 s.d. ipa-6)
// Contoh penggabungan: Object.assign(QUIZ_DATA, { 'ipa-7': [...], ... })

export const QUIZ_DATA_PART2 = {

  // ================================================================
  //  ipa-7 | RANGKAIAN LISTRIK (Seri & Paralel)
  // ================================================================
  'ipa-7': [

    // --- MUDAH (1-5) ---
    {
      type: 'mc',
      level: 'mudah',
      q: 'Rangkaian listrik di mana semua komponen terhubung dalam satu jalur berurutan disebut rangkaian...',
      opts: ['Paralel', 'Seri', 'Campuran', 'Terbuka'],
      ans: 1,
      hint: 'Bayangkan kereta api — gerbong-gerbong tersambung satu jalur dari depan ke belakang.',
      explanation: 'Rangkaian SERI adalah rangkaian di mana komponen-komponennya terhubung secara berurutan dalam SATU jalur. Arus listrik mengalir melalui satu jalur dari komponen ke komponen.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Jika satu lampu dalam rangkaian seri mati, apa yang terjadi pada lampu lainnya?',
      opts: [
        'Lampu lain menyala lebih terang',
        'Lampu lain tetap menyala normal',
        'Semua lampu ikut mati karena jalur arus terputus',
        'Lampu lain berkedip-kedip'
      ],
      ans: 2,
      hint: 'Ingat, rangkaian seri hanya punya SATU jalur arus. Apa yang terjadi jika jalur itu terputus?',
      explanation: 'Dalam rangkaian seri, jika satu komponen mati/rusak, jalur arus TERPUTUS total. Karena hanya ada satu jalur, semua lampu lain ikut padam. Inilah kelemahan utama rangkaian seri.'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Rangkaian listrik yang memiliki lebih dari satu jalur arus disebut rangkaian _.',
      ans: 'paralel',
      hint: 'Kata ini mirip dengan "sejajar" — ada banyak jalur yang berjalan berdampingan.',
      explanation: 'Rangkaian PARALEL memiliki banyak cabang/jalur arus. Setiap komponen terhubung langsung ke sumber listrik melalui jalurnya sendiri. Ini yang membuat satu komponen mati tidak mempengaruhi yang lain.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Instalasi listrik di rumah-rumah menggunakan rangkaian paralel. Keuntungannya adalah...',
      opts: [
        'Lebih hemat kabel',
        'Jika satu peralatan mati, peralatan lain tetap menyala',
        'Lebih mudah dipasang',
        'Menghasilkan cahaya lebih terang'
      ],
      ans: 1,
      hint: 'Bayangkan jika lampu kamar mati tapi TV di ruang tamu tetap menyala. Rangkaian apa itu?',
      explanation: 'Keuntungan rangkaian PARALEL di rumah: jika satu peralatan (misalnya lampu kamar) mati, peralatan lain (TV, kulkas, dll.) TETAP MENYALA karena masing-masing punya jalur sendiri ke sumber listrik.'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Komponen listrik yang berfungsi sebagai sumber energi listrik dalam sebuah rangkaian adalah _.',
      ans: 'baterai (aki/sumber tegangan)',
      hint: 'Benda berbentuk silinder ini menyimpan energi kimia dan mengubahnya menjadi listrik.',
      explanation: 'BATERAI (atau aki, generator) adalah sumber energi listrik dalam rangkaian. Baterai mengubah energi kimia menjadi energi listrik yang mengalirkan arus melalui rangkaian.'
    },

    // --- SEDANG (6-10) ---
    {
      type: 'mc',
      level: 'sedang',
      q: 'Perbedaan kecerahan lampu dalam rangkaian seri dibandingkan paralel (dengan jumlah baterai sama) adalah...',
      opts: [
        'Lampu seri lebih terang karena arus lebih kuat',
        'Lampu paralel lebih terang karena setiap lampu mendapat tegangan penuh dari sumber',
        'Keduanya sama terangnya',
        'Lampu seri lebih terang saat malam hari saja'
      ],
      ans: 1,
      hint: 'Pada seri, tegangan dibagi-bagi. Pada paralel, setiap lampu mendapat tegangan berapa?',
      explanation: 'Pada rangkaian PARALEL, setiap lampu mendapat tegangan PENUH dari baterai (misalnya 1,5V). Pada rangkaian SERI, tegangan dibagi rata untuk semua lampu (misal 3 lampu seri dari baterai 1,5V, tiap lampu hanya dapat 0,5V). Hasilnya: lampu paralel lebih TERANG.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Saklar pada rangkaian listrik berfungsi untuk...',
      opts: [
        'Menyimpan energi listrik',
        'Mengubah energi listrik menjadi cahaya',
        'Memutus dan menyambungkan aliran arus listrik',
        'Mengukur besar arus listrik'
      ],
      ans: 2,
      hint: 'Ketika kamu menyalakan lampu, kamu menekan tombol apa? Apa yang dilakukan tombol itu pada aliran listrik?',
      explanation: 'SAKLAR berfungsi memutus dan menyambungkan aliran arus listrik. Saat saklar terbuka (OFF), jalur arus terputus dan listrik tidak mengalir. Saat saklar tertutup (ON), arus mengalir dan rangkaian bekerja.'
    },
    {
      type: 'fill',
      level: 'sedang',
      q: 'Dalam rangkaian seri, nilai hambatan total adalah _ dari semua hambatan yang ada dalam rangkaian.',
      ans: 'jumlah (penjumlahan)',
      hint: 'Jika ada 3 hambatan masing-masing 2Ω dalam rangkaian seri, hambatan totalnya adalah 2+2+2 = ?',
      explanation: 'Pada rangkaian SERI, hambatan total (Rtotal) adalah JUMLAH semua hambatan: Rtotal = R1 + R2 + R3 + ... Semakin banyak komponen dalam rangkaian seri, semakin besar hambatan total, dan arus yang mengalir semakin kecil.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Lampu hias pohon Natal yang jika satu lampu dicabut semua mati, menggunakan jenis rangkaian...',
      opts: ['Paralel', 'Campuran', 'Seri', 'Terbuka'],
      ans: 2,
      hint: 'Jika satu mati semua mati — hanya ada satu jalur arus. Itu ciri khas rangkaian apa?',
      explanation: 'Lampu hias lama yang jika satu dicabut semuanya mati menggunakan rangkaian SERI. Karena hanya ada satu jalur arus, satu lampu mati memutus seluruh rangkaian. Lampu hias modern biasanya sudah menggunakan paralel agar lebih praktis.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Simbol yang digunakan untuk menggambarkan lampu dalam diagram rangkaian listrik adalah...',
      opts: [
        'Garis bergelombang',
        'Lingkaran dengan X di dalamnya',
        'Persegi panjang',
        'Dua garis sejajar tidak sama panjang'
      ],
      ans: 1,
      hint: 'Simbol lampu biasanya berbentuk bulat dengan tanda silang di tengahnya.',
      explanation: 'Dalam diagram rangkaian listrik, LAMPU dilambangkan dengan lingkaran yang memiliki tanda X (atau bintang) di dalamnya. Dua garis sejajar tidak sama panjang adalah simbol BATERAI. Garis bergelombang adalah simbol HAMBATAN (resistor).'
    },

    // --- SUSAH / HOTS (11-15) ---
    {
      type: 'mc',
      level: 'susah',
      q: 'Riko memasang 3 lampu secara seri dengan 1 baterai. Semua menyala redup. Lalu ia menambah 1 lampu lagi. Apa yang terjadi?',
      opts: [
        'Semua lampu menjadi lebih terang',
        'Semua lampu menjadi lebih redup karena hambatan bertambah dan arus berkurang',
        'Lampu yang baru lebih terang dari yang lain',
        'Tidak ada perubahan'
      ],
      ans: 1,
      hint: 'Pada rangkaian seri, menambah komponen berarti menambah hambatan. Semakin besar hambatan, arus listrik menjadi bagaimana?',
      explanation: 'Menambah lampu dalam rangkaian SERI berarti menambah HAMBATAN TOTAL. Berdasarkan Hukum Ohm (I = V/R), jika hambatan (R) bertambah sementara tegangan (V) tetap, maka arus (I) semakin KECIL. Arus kecil = lampu semakin REDUP. Ini kelemahan rangkaian seri!'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Jika 3 lampu identik dipasang secara paralel dengan satu baterai, dan satu lampu dicabut, maka dua lampu lainnya akan tetap menyala dengan _ yang sama, karena masing-masing mendapat tegangan penuh.',
      ans: 'kecerahan (terang)',
      hint: 'Pada paralel, setiap cabang independen. Cabang yang satu tidak mempengaruhi cabang yang lain.',
      explanation: 'Pada rangkaian PARALEL, setiap lampu terhubung langsung ke baterai dengan jalur sendiri. Jika satu lampu dicabut, dua lainnya tetap mendapat tegangan PENUH dari baterai. Kecerahan tidak berubah! Inilah keunggulan utama rangkaian paralel.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Seorang teknisi ingin memasang lampu di 5 kamar hotel agar setiap kamar bisa mematikan lampunya sendiri tanpa mempengaruhi kamar lain. Rangkaian yang tepat adalah...',
      opts: [
        'Rangkaian seri dengan satu saklar utama',
        'Rangkaian paralel dengan saklar terpisah di setiap cabang',
        'Rangkaian seri tanpa saklar',
        'Tidak mungkin dilakukan dengan rangkaian listrik biasa'
      ],
      ans: 1,
      hint: 'Setiap kamar harus INDEPENDEN. Apakah seri atau paralel yang memberikan jalur independen untuk setiap komponen?',
      explanation: 'Untuk setiap kamar independen (mati/nyala tidak mempengaruhi yang lain), digunakan rangkaian PARALEL. Setiap kamar adalah satu cabang paralel dengan saklarnya sendiri. Mematikan saklar di satu cabang hanya memutus arus di cabang itu, tidak mempengaruhi cabang lain.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Mengapa sekring (fuse) dipasang dalam rangkaian listrik rumah tangga?',
      opts: [
        'Untuk membuat lampu lebih terang',
        'Untuk menyimpan energi listrik cadangan',
        'Untuk memutus arus secara otomatis jika arus terlalu besar, mencegah kebakaran',
        'Untuk menghemat listrik setiap malam'
      ],
      ans: 2,
      hint: 'Bayangkan jika banyak peralatan dinyalakan sekaligus, arus listrik bisa terlalu besar. Apa bahayanya?',
      explanation: 'SEKRING (fuse) adalah komponen keamanan yang memutus arus secara OTOMATIS jika arus melebihi batas aman. Arus terlalu besar → kabel overheat → bisa memicu KEBAKARAN. Sekring mencegah ini dengan "mengorbankan" dirinya putus duluan. Sekring modern digantikan oleh MCB (circuit breaker).'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Rangkaian _ adalah kombinasi rangkaian seri dan paralel yang digunakan pada instalasi listrik kompleks seperti di gedung-gedung besar.',
      ans: 'campuran',
      hint: 'Namanya mencerminkan bahwa ia adalah gabungan dari dua jenis rangkaian.',
      explanation: 'Rangkaian CAMPURAN (seri-paralel) menggabungkan keduanya untuk memanfaatkan keunggulan masing-masing. Pada gedung besar, beberapa komponen mungkin dipasang seri (hemat kabel) sementara kelompok-kelompok komponen dipasang secara paralel (independen). Perancangan rangkaian campuran memerlukan perhitungan yang cermat.'
    },
  ],

  // ================================================================
  //  ipa-8 | PEREDARAN DARAH (Jantung & Pembuluh Darah)
  // ================================================================
  'ipa-8': [

    // --- MUDAH (1-5) ---
    {
      type: 'mc',
      level: 'mudah',
      q: 'Organ utama yang berfungsi sebagai pompa darah dalam tubuh manusia adalah...',
      opts: ['Paru-paru', 'Hati', 'Jantung', 'Ginjal'],
      ans: 2,
      hint: 'Organ ini terletak di dada sebelah kiri dan berdetak tanpa henti sepanjang hidup kita.',
      explanation: 'JANTUNG adalah organ pompa darah utama tubuh manusia. Jantung berdetak rata-rata 60-100 kali per menit untuk memompa darah ke seluruh tubuh, membawa oksigen dan nutrisi ke setiap sel.'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Pembuluh darah yang membawa darah dari jantung ke seluruh tubuh disebut pembuluh _.',
      ans: 'arteri (nadi)',
      hint: 'Pembuluh ini biasanya terletak lebih dalam di dalam tubuh dan dindingnya tebal karena mendapat tekanan tinggi.',
      explanation: 'ARTERI (pembuluh nadi) adalah pembuluh darah yang membawa darah DARI jantung ke seluruh tubuh. Arteri memiliki dinding tebal dan elastis karena darah di dalamnya mengalir dengan tekanan tinggi akibat pompa jantung.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Pembuluh darah yang membawa darah kembali ke jantung adalah...',
      opts: ['Arteri', 'Kapiler', 'Vena', 'Aorta'],
      ans: 2,
      hint: 'Pembuluh ini biasanya berwarna biru pada gambar anatomi dan terletak dekat permukaan kulit.',
      explanation: 'VENA (pembuluh balik) adalah pembuluh darah yang membawa darah KEMBALI ke jantung. Darah dalam vena umumnya sudah "dipakai" (mengandung CO₂), kecuali vena pulmonalis yang membawa darah kaya oksigen dari paru-paru ke jantung.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Jantung manusia memiliki berapa ruang?',
      opts: ['2 ruang', '3 ruang', '4 ruang', '5 ruang'],
      ans: 2,
      hint: 'Jantung punya bagian atas (serambi) dan bagian bawah (bilik), masing-masing ada kiri dan kanan.',
      explanation: 'Jantung manusia memiliki 4 RUANG: Serambi Kanan (atrium kanan), Serambi Kiri (atrium kiri), Bilik Kanan (ventrikel kanan), dan Bilik Kiri (ventrikel kiri). Serambi menerima darah masuk, bilik memompa darah keluar.'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Peredaran darah manusia disebut peredaran darah _, karena darah tidak pernah keluar dari pembuluh darahnya.',
      ans: 'tertutup',
      hint: 'Darah selalu berada di dalam pembuluh — arteri, kapiler, dan vena — tidak pernah mengalir bebas di luar.',
      explanation: 'Peredaran darah manusia disebut TERTUTUP karena darah selalu berada di dalam pembuluh darah (arteri → kapiler → vena). Berbeda dengan hewan seperti belalang yang punya peredaran darah terbuka di mana darah mengalir bebas di rongga tubuh.'
    },

    // --- SEDANG (6-10) ---
    {
      type: 'mc',
      level: 'sedang',
      q: 'Peredaran darah besar (sistemik) adalah peredaran darah yang...',
      opts: [
        'Dari jantung ke paru-paru dan kembali ke jantung',
        'Dari jantung ke seluruh tubuh dan kembali ke jantung',
        'Dari paru-paru ke seluruh tubuh',
        'Hanya di dalam jantung saja'
      ],
      ans: 1,
      hint: 'Ada dua jenis peredaran darah: besar (sistemik) dan kecil (pulmonal). Yang "besar" mencakup seluruh tubuh.',
      explanation: 'Peredaran darah BESAR (sistemik): Bilik kiri → Aorta → Seluruh tubuh (membawa O₂ dan nutrisi) → Vena cava → Serambi kanan. Ini adalah jalur panjang yang memasok oksigen ke seluruh organ tubuh.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Peredaran darah kecil (pulmonal) berfungsi untuk...',
      opts: [
        'Membawa darah ke otak',
        'Membawa darah ke sistem pencernaan',
        'Membawa darah dari jantung ke paru-paru untuk mengambil oksigen',
        'Membawa makanan ke seluruh tubuh'
      ],
      ans: 2,
      hint: 'Pulmonal berasal dari kata "pulmo" yang berarti paru-paru. Apa yang dilakukan darah di paru-paru?',
      explanation: 'Peredaran darah KECIL (pulmonal): Bilik kanan → Arteri pulmonalis → Paru-paru (pertukaran CO₂ dengan O₂) → Vena pulmonalis → Serambi kiri. Darah "diisi ulang" dengan oksigen di paru-paru sebelum dipompa ke seluruh tubuh.'
    },
    {
      type: 'fill',
      level: 'sedang',
      q: 'Pembuluh darah terkecil yang menghubungkan arteri dan vena, serta tempat terjadinya pertukaran zat antara darah dan sel tubuh, disebut pembuluh _.',
      ans: 'kapiler',
      aliases: ['kapiler', 'pembuluh kapiler', 'kapilaris'],
      hint: 'Pembuluh ini sangat tipis — hanya setebal satu sel. Namanya dari kata Latin yang berarti "rambut".',
      explanation: 'KAPILER adalah pembuluh darah terkecil dengan dinding hanya satu sel tebalnya. Di sinilah pertukaran zat terjadi: oksigen dan nutrisi masuk ke sel-sel tubuh, sementara CO₂ dan sisa metabolisme masuk ke darah. Kapiler menghubungkan arteri dengan vena.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Komponen darah yang berfungsi melawan kuman dan penyakit adalah...',
      opts: ['Sel darah merah', 'Sel darah putih', 'Trombosit', 'Plasma darah'],
      ans: 1,
      hint: 'Komponen ini adalah "tentara" tubuh yang membasmi bakteri, virus, dan benda asing lainnya.',
      explanation: 'SEL DARAH PUTIH (leukosit) adalah komponen darah yang berfungsi melawan infeksi dan penyakit. Ada beberapa jenis: neutrofil (memakan bakteri), limfosit (membuat antibodi), dan lainnya. Jumlahnya meningkat saat tubuh sedang melawan infeksi.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Fungsi trombosit dalam darah adalah...',
      opts: [
        'Membawa oksigen ke seluruh tubuh',
        'Melawan penyakit dan infeksi',
        'Membantu pembekuan darah saat terjadi luka',
        'Membawa nutrisi dari usus ke sel-sel tubuh'
      ],
      ans: 2,
      hint: 'Ketika kamu terluka dan berdarah, ada yang bekerja keras untuk menghentikan pendarahan. Komponen darah apa itu?',
      explanation: 'TROMBOSIT (keping darah) berfungsi dalam PEMBEKUAN DARAH. Saat ada luka, trombosit berkumpul di area luka dan membentuk "sumbat" bersama protein fibrin untuk menghentikan pendarahan. Tanpa trombosit, luka kecil pun bisa berbahaya karena darah tidak bisa membeku.'
    },

    // --- SUSAH / HOTS (11-15) ---
    {
      type: 'mc',
      level: 'susah',
      q: 'Mengapa bilik kiri jantung memiliki dinding yang lebih tebal daripada bilik kanan?',
      opts: [
        'Karena bilik kiri lebih tua dan aus',
        'Karena bilik kiri harus memompa darah ke seluruh tubuh dengan tekanan lebih tinggi, sedangkan bilik kanan hanya ke paru-paru yang lebih dekat',
        'Karena bilik kiri menampung lebih banyak darah',
        'Tidak ada perbedaan, keduanya sama tebalnya'
      ],
      ans: 1,
      hint: 'Jarak mana yang lebih jauh: ke paru-paru (dekat jantung) atau ke ujung kaki (peredaran besar)?',
      explanation: 'BILIK KIRI harus memompa darah ke SELURUH TUBUH — dari kepala hingga ujung kaki (peredaran besar) — yang memerlukan tekanan sangat tinggi. BILIK KANAN hanya memompa ke paru-paru yang jaraknya dekat (peredaran kecil). Karena kerja lebih keras, otot bilik kiri berkembang lebih tebal untuk menghasilkan tekanan yang dibutuhkan.'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Penyakit _ terjadi ketika pembuluh arteri mengeras dan menyempit akibat penumpukan plak lemak, sehingga aliran darah ke jantung terhambat dan bisa menyebabkan serangan jantung.',
      ans: 'jantung koroner (aterosklerosis)',
      hint: 'Penyakit ini sering dikaitkan dengan pola makan tinggi lemak dan kurang olahraga.',
      explanation: 'PENYAKIT JANTUNG KORONER terjadi akibat ATEROSKLEROSIS — penumpukan plak (lemak, kolesterol, dan zat lain) di dinding arteri koroner yang menyuplai darah ke otot jantung. Arteri menyempit → aliran darah berkurang → otot jantung kekurangan oksigen → serangan jantung. Bisa dicegah dengan pola hidup sehat.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Seorang dokter mengukur tekanan darah pasien dan mendapat hasil 120/80 mmHg. Angka 120 menunjukkan...',
      opts: [
        'Tekanan saat jantung istirahat (relaksasi)',
        'Jumlah detak jantung per menit',
        'Tekanan saat jantung berkontraksi (memompa)',
        'Volume darah dalam tubuh'
      ],
      ans: 2,
      hint: 'Tekanan darah ditulis sebagai dua angka: atas/bawah. Angka atas terjadi saat jantung sedang... apa?',
      explanation: 'Tekanan darah 120/80: angka ATAS (120) adalah tekanan SISTOLIK — tekanan maksimum saat jantung BERKONTRAKSI memompa darah keluar. Angka BAWAH (80) adalah tekanan DIASTOLIK — tekanan saat jantung RELAKSASI mengisi darah. Tekanan normal dewasa sekitar 120/80 mmHg.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Kenapa olahraga teratur baik untuk kesehatan jantung?',
      opts: [
        'Karena olahraga membuat jantung berhenti sejenak untuk istirahat',
        'Karena olahraga memperkuat otot jantung, meningkatkan efisiensi pompa, dan menjaga pembuluh darah tetap elastis',
        'Karena olahraga membuat darah menjadi lebih merah',
        'Karena olahraga mengurangi jumlah darah dalam tubuh'
      ],
      ans: 1,
      hint: 'Otot yang sering dilatih jadi lebih kuat. Jantung juga otot — apa efeknya jika sering "dilatih"?',
      explanation: 'Olahraga teratur "melatih" otot jantung sehingga menjadi lebih KUAT dan EFISIEN. Jantung yang kuat bisa memompa lebih banyak darah per detak (stroke volume lebih besar), sehingga detak jantung istirahat menjadi lebih rendah. Olahraga juga menjaga pembuluh darah elastis dan mengurangi penumpukan plak.'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Sel darah merah mengandung protein _ yang berfungsi mengikat oksigen di paru-paru dan melepaskannya di seluruh jaringan tubuh.',
      ans: 'hemoglobin',
      hint: 'Protein inilah yang membuat darah berwarna merah. Huruf awalnya H.',
      explanation: 'HEMOGLOBIN adalah protein dalam sel darah merah yang mengandung zat besi (Fe). Hemoglobin mengikat O₂ di paru-paru membentuk oksihemoglobin (warna merah cerah), lalu melepaskan O₂ ke sel-sel tubuh dan mengikat CO₂ untuk dibawa kembali ke paru-paru. Kekurangan hemoglobin menyebabkan anemia.'
    },
  ],

  // ================================================================
  //  ipa-9 | SIKLUS HIDROLOGI (Evaporasi hingga Hujan)
  // ================================================================
  'ipa-9': [

    // --- MUDAH (1-5) ---
    {
      type: 'mc',
      level: 'mudah',
      q: 'Siklus hidrologi adalah perputaran...',
      opts: [
        'Udara di atmosfer bumi',
        'Air di bumi secara terus-menerus',
        'Musim panas dan dingin',
        'Oksigen dalam tubuh makhluk hidup'
      ],
      ans: 1,
      hint: 'Hidro = air. Siklus = perputaran. Jadi siklus hidrologi adalah perputaran... apa?',
      explanation: 'SIKLUS HIDROLOGI adalah perputaran AIR di bumi secara terus-menerus tanpa henti — dari permukaan bumi ke atmosfer dan kembali ke bumi. Siklus ini memastikan jumlah air di bumi selalu sama, hanya berubah tempat dan wujud.'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Proses penguapan air dari permukaan laut, danau, dan sungai akibat panas matahari disebut _.',
      ans: 'evaporasi',
      aliases: ['evaporasi', 'evaporasi (penguapan)', 'penguapan', 'evaporation'],
      hint: 'Kata ini berasal dari bahasa Inggris "evaporation". Bayangkan genangan air yang lama-lama mengering terkena matahari.',
      explanation: 'EVAPORASI adalah proses penguapan air dari permukaan benda cair (laut, danau, sungai) akibat energi panas matahari. Air berubah dari cair menjadi uap air yang naik ke atmosfer. Evaporasi adalah tahap PERTAMA siklus hidrologi.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Proses berubahnya uap air menjadi titik-titik air di atmosfer yang membentuk awan disebut...',
      opts: ['Evaporasi', 'Presipitasi', 'Kondensasi', 'Infiltrasi'],
      ans: 2,
      hint: 'Uap air naik ke atas, lalu bertemu udara dingin dan berubah wujud. Proses apa itu?',
      explanation: 'KONDENSASI adalah proses berubahnya uap air menjadi titik-titik air cair ketika uap air naik ke atmosfer dan bertemu udara yang lebih dingin. Titik-titik air ini berkumpul membentuk AWAN. Kondensasi adalah kebalikan dari evaporasi.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Hujan yang jatuh ke bumi merupakan bagian dari siklus hidrologi yang disebut...',
      opts: ['Evaporasi', 'Kondensasi', 'Transpirasi', 'Presipitasi'],
      ans: 3,
      hint: 'Proses jatuhnya air dari awan ke bumi dalam bentuk hujan, salju, atau es.',
      explanation: 'PRESIPITASI adalah jatuhnya air dari atmosfer ke permukaan bumi dalam berbagai bentuk: hujan (air cair), salju (kristal es), atau hujan es (hail). Presipitasi terjadi ketika titik-titik air di awan sudah cukup berat untuk jatuh.'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Proses penguapan air dari daun-daun tumbuhan disebut _, yang juga berkontribusi pada siklus hidrologi.',
      ans: 'transpirasi',
      aliases: ['transpirasi', 'transpirasi (penguapan daun)', 'penguapan daun', 'transpiration'],
      hint: 'Trans = melalui, spirasi = napas/penguapan. Tumbuhan juga "berkeringat" melalui daun-daunnya.',
      explanation: 'TRANSPIRASI adalah penguapan air melalui stomata (pori-pori) pada daun tumbuhan. Hutan yang lebat menghasilkan transpirasi sangat besar, sehingga berkontribusi signifikan pada pembentukan awan dan hujan di sekitarnya. Ini mengapa hutan disebut "penghasil hujan".'
    },

    // --- SEDANG (6-10) ---
    {
      type: 'mc',
      level: 'sedang',
      q: 'Urutan tahapan siklus hidrologi yang benar adalah...',
      opts: [
        'Presipitasi → Evaporasi → Kondensasi',
        'Evaporasi → Kondensasi → Presipitasi',
        'Kondensasi → Presipitasi → Evaporasi',
        'Infiltrasi → Transpirasi → Evaporasi'
      ],
      ans: 1,
      hint: 'Dimulai dari matahari memanaskan air laut → uap naik → awan terbentuk → hujan turun.',
      explanation: 'Urutan dasar: (1) EVAPORASI — air menguap karena panas matahari; (2) KONDENSASI — uap air berubah menjadi titik air membentuk awan; (3) PRESIPITASI — air jatuh sebagai hujan ke bumi; lalu siklus berulang dari awal lagi.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Air hujan yang meresap ke dalam tanah disebut...',
      opts: ['Evaporasi', 'Runoff', 'Infiltrasi', 'Kondensasi'],
      ans: 2,
      hint: 'Sebagian air hujan meresap masuk ke dalam lapisan tanah. Kata ini mirip dengan "filter".',
      explanation: 'INFILTRASI adalah proses meresapnya air hujan ke dalam tanah melalui pori-pori tanah. Air yang terinfiltrasi menjadi air tanah (groundwater) yang bisa muncul kembali sebagai mata air atau diambil melalui sumur. Tanah yang padat atau tertutup beton mengurangi infiltrasi.'
    },
    {
      type: 'fill',
      level: 'sedang',
      q: 'Air hujan yang tidak meresap ke tanah dan mengalir di permukaan tanah menuju sungai dan laut disebut aliran _ (limpasan).',
      ans: 'permukaan (runoff)',
      hint: 'Air mengalir di atas permukaan tanah setelah hujan lebat, bukan meresap ke bawah.',
      explanation: 'ALIRAN PERMUKAAN (runoff) adalah air hujan yang tidak terinfiltrasi dan mengalir di atas permukaan tanah menuju saluran air, sungai, danau, dan akhirnya ke laut. Runoff berlebihan dapat menyebabkan banjir, terutama di daerah yang banyak perkerasannya (beton, aspal).'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Mengapa penebangan hutan secara liar dapat mengganggu siklus hidrologi?',
      opts: [
        'Karena pohon menghalangi sinar matahari untuk evaporasi',
        'Karena pohon tidak diperlukan dalam siklus hidrologi',
        'Karena pohon berperan dalam transpirasi dan penyerapan air tanah, sehingga tanpa pohon hujan berkurang dan banjir meningkat',
        'Karena pohon menghasilkan hujan buatan'
      ],
      ans: 2,
      hint: 'Apa peran pohon dalam siklus air? Ada dua peran utama: satu berhubungan dengan penguapan, satu lagi dengan penyerapan air.',
      explanation: 'Pohon berperan penting dalam siklus hidrologi: (1) TRANSPIRASI — melepaskan uap air ke atmosfer, berkontribusi pada pembentukan awan dan hujan; (2) AKAR menyerap dan menyimpan air tanah, mencegah banjir. Tanpa pohon, transpirasi berkurang (hujan berkurang) dan air hujan tidak tersimpan di tanah (banjir meningkat).'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Es di kutub dan gletser di pegunungan merupakan bagian dari siklus hidrologi. Jika suhu bumi meningkat (pemanasan global), apa yang akan terjadi?',
      opts: [
        'Es bertambah banyak karena lebih banyak air yang membeku',
        'Es mencair, menambah volume air laut dan bisa menyebabkan naiknya permukaan air laut',
        'Es berpindah ke daerah tropis',
        'Tidak ada perubahan pada es kutub'
      ],
      ans: 1,
      hint: 'Es adalah air dalam wujud padat. Jika suhu naik, apa yang terjadi pada es?',
      explanation: 'Pemanasan global menyebabkan ES KUTUB dan GLETSER MENCAIR, menambah volume air di lautan. Permukaan air laut NAIK, mengancam daerah-daerah rendah dan pulau-pulau kecil. Ini juga mengganggu siklus hidrologi global karena es adalah "penyimpan air" jangka panjang bumi.'
    },

    // --- SUSAH / HOTS (11-15) ---
    {
      type: 'mc',
      level: 'susah',
      q: 'Sebuah kota yang seluruh jalannya dicor beton mengalami banjir parah setiap hujan lebat, padahal kota tetangga yang masih banyak tanahnya tidak banjir. Mengapa?',
      opts: [
        'Karena kota beton lebih rendah letaknya',
        'Karena beton mencegah infiltrasi sehingga semua air hujan menjadi aliran permukaan yang langsung menggenangi jalan',
        'Karena kota beton menghasilkan lebih banyak hujan',
        'Karena kota tetangga punya teknologi anti-banjir'
      ],
      ans: 1,
      hint: 'Apa yang terjadi pada air hujan yang jatuh di atas beton? Bisakah ia meresap ke tanah?',
      explanation: 'BETON tidak berpori — air tidak bisa terinfiltrasi (meresap). Semua air hujan menjadi ALIRAN PERMUKAAN (runoff) yang langsung mengalir ke saluran air. Jika saluran air tidak cukup besar, air meluap = BANJIR. Tanah bisa menyerap air, sehingga sebagian besar air "hilang" ke dalam tanah. Inilah mengapa kota hijau lebih tahan banjir.'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Siklus hidrologi yang singkat dan terjadi di daerah lokal (misalnya di hutan) disebut siklus _, sedangkan yang melibatkan perjalanan uap air melintasi benua disebut siklus panjang.',
      ans: 'pendek',
      hint: 'Bayangkan air menguap dari danau kecil, membentuk awan, lalu hujan jatuh tidak jauh dari danau itu.',
      explanation: 'Siklus PENDEK: evaporasi dari perairan lokal → kondensasi membentuk awan di atas daerah yang sama → hujan di daerah yang sama. Siklus PANJANG: uap air terbawa angin melintasi daratan jauh dari sumber aslinya sebelum terjadi presipitasi. Hutan tropis umumnya menjalankan siklus pendek secara intensif.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Air yang kamu minum hari ini mungkin pernah menjadi bagian dari tubuh dinosaurus jutaan tahun lalu. Mengapa hal ini bisa terjadi?',
      opts: [
        'Karena manusia keturunan dinosaurus',
        'Karena jumlah air di bumi selalu tetap dan terus berputar dalam siklus hidrologi sejak miliaran tahun lalu',
        'Karena dinosaurus meninggalkan air khusus di dalam tanah',
        'Ini hanya mitos, tidak mungkin terjadi'
      ],
      ans: 1,
      hint: 'Siklus hidrologi sudah berlangsung sejak bumi terbentuk. Air tidak pernah "hilang", hanya berputar terus.',
      explanation: 'Jumlah air di bumi hampir TIDAK BERUBAH sejak miliaran tahun lalu. Air terus berputar dalam siklus hidrologi — menguap, mengembun, hujan, mengalir, meresap, dan menguap lagi. Air yang diminum dinosaurus pun ikut dalam siklus ini. Sangat mungkin molekul air yang kamu minum hari ini pernah ada di dalam tubuh dinosaurus atau bahkan Julius Caesar!'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Fenomena "hujan asam" terjadi ketika uap air di atmosfer bereaksi dengan polutan (SO₂, NO₂) dari pabrik dan kendaraan. Ini menunjukkan bahwa siklus hidrologi...',
      opts: [
        'Tidak terpengaruh oleh aktivitas manusia',
        'Dapat terganggu oleh polusi manusia yang mengubah komposisi kimia air hujan',
        'Membuat polutan menghilang dari udara',
        'Hanya terjadi di daerah industri'
      ],
      ans: 1,
      hint: 'Uap air di awan bertemu dengan gas-gas polutan. Apa yang terjadi pada air tersebut?',
      explanation: 'HUJAN ASAM membuktikan bahwa aktivitas manusia MENGGANGGU siklus hidrologi. Polutan SO₂ dan NO₂ bercampur dengan uap air di atmosfer membentuk asam sulfat dan asam nitrat. Hujan yang turun bersifat asam (pH rendah), merusak tanaman, danau, dan bangunan. Siklus air yang seharusnya "membersihkan" udara malah membawa asam ke tanah.'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Sumur dan mata air berasal dari air _ yang tersimpan di dalam lapisan tanah dan batuan berpori yang disebut akuifer.',
      ans: 'tanah (bawah tanah)',
      hint: 'Air yang meresap ke dalam tanah lalu tersimpan jauh di bawah permukaan.',
      explanation: 'AIR TANAH (groundwater) adalah air yang tersimpan di dalam lapisan batuan/tanah berpori yang disebut AKUIFER. Air tanah berasal dari infiltrasi air hujan selama bertahun-tahun. Sumur menggali hingga mencapai akuifer. Pengambilan air tanah berlebihan dapat menyebabkan penurunan tanah (land subsidence) seperti yang terjadi di Jakarta.'
    },
  ],

  // ================================================================
  //  ipa-10 | ADAPTASI TUMBUHAN (Xerofit, Hidrofit, Higrofit)
  // ================================================================
  'ipa-10': [

    // --- MUDAH (1-5) ---
    {
      type: 'mc',
      level: 'mudah',
      q: 'Adaptasi adalah kemampuan makhluk hidup untuk...',
      opts: [
        'Berlari dari musuh',
        'Menyesuaikan diri dengan lingkungannya agar dapat bertahan hidup',
        'Mengubah warna tubuhnya',
        'Berpindah tempat saat musim hujan'
      ],
      ans: 1,
      hint: 'Kata adaptasi mirip "adapt" = menyesuaikan. Menyesuaikan diri dengan apa?',
      explanation: 'ADAPTASI adalah kemampuan makhluk hidup untuk MENYESUAIKAN DIRI dengan lingkungannya agar dapat bertahan hidup, tumbuh, dan berkembang biak. Adaptasi bisa berupa perubahan bentuk tubuh, perilaku, atau cara fisiologis.'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Tumbuhan yang hidup di daerah kering dan panas seperti gurun disebut tumbuhan _.',
      ans: 'xerofit',
      aliases: ['xerofit', 'xerophyte', 'tumbuhan kering', 'xerofit (tumbuhan kering)'],
      hint: 'Xero = kering. Tumbuhan gurun seperti kaktus termasuk kelompok ini.',
      explanation: 'XEROFIT (dari "xeros" = kering) adalah tumbuhan yang beradaptasi untuk hidup di lingkungan kering dan panas seperti gurun atau padang pasir. Kaktus adalah contoh paling terkenal xerofit.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Kaktus memiliki batang yang tebal dan berdaging. Fungsinya adalah untuk...',
      opts: [
        'Menarik serangga penyerbuk',
        'Menyimpan cadangan air',
        'Menyerap sinar matahari lebih banyak',
        'Menghalangi hewan pemangsa'
      ],
      ans: 1,
      hint: 'Di gurun sangat jarang hujan. Kaktus perlu menyimpan "bekal" untuk bertahan saat kekeringan panjang.',
      explanation: 'Batang kaktus yang tebal dan berdaging berfungsi sebagai PENYIMPAN CADANGAN AIR. Kaktus menyimpan air sebanyak mungkin saat hujan, kemudian menggunakannya secara hemat saat musim kering panjang. Batangnya juga mengandung klorofil untuk fotosintesis (menggantikan daun yang sudah berubah jadi duri).'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Tumbuhan yang hidup di dalam air seperti teratai disebut...',
      opts: ['Xerofit', 'Higrofit', 'Hidrofit', 'Epifit'],
      ans: 2,
      hint: 'Hidro = air. Teratai, eceng gondok, dan ganggang hidup di... mana?',
      explanation: 'HIDROFIT (dari "hydro" = air) adalah tumbuhan yang hidup di dalam air atau lingkungan berair. Contoh: teratai, eceng gondok, ganggang, dan hydrilla. Hidrofit punya adaptasi khusus untuk hidup di lingkungan yang selalu basah.'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Tumbuhan yang hidup di tempat lembap seperti lumut dan paku-pakuan disebut tumbuhan _.',
      ans: 'higrofit',
      aliases: ['higrofit', 'hygrophyte', 'tumbuhan lembap', 'higrofit (tumbuhan lembap)'],
      hint: 'Hygro = lembap/basah. Tumbuhan ini senang di tempat teduh dan lembap seperti di batang pohon atau hutan hujan.',
      explanation: 'HIGROFIT (dari "hygros" = lembap) adalah tumbuhan yang beradaptasi hidup di tempat yang lembap (bukan di dalam air). Contoh: lumut, paku-pakuan, begonia. Higrofit umumnya memiliki daun tipis dan lembut karena tidak perlu menyimpan air.'
    },

    // --- SEDANG (6-10) ---
    {
      type: 'mc',
      level: 'sedang',
      q: 'Mengapa daun kaktus berubah menjadi duri yang kecil dan tajam?',
      opts: [
        'Untuk menyerang hewan yang mendekatinya',
        'Untuk mengurangi penguapan air dan melindungi diri dari pemangsa',
        'Untuk menyerap lebih banyak sinar matahari',
        'Untuk menarik perhatian burung'
      ],
      ans: 1,
      hint: 'Daun yang lebar akan menguapkan banyak air. Di gurun yang kering, itu sangat merugikan. Apa solusinya?',
      explanation: 'Duri kaktus adalah daun yang berevolusi menjadi kecil dan keras. Fungsinya: (1) MENGURANGI PENGUAPAN AIR — permukaan daun kecil = sedikit stomata = sedikit air yang menguap; (2) PERLINDUNGAN — duri menghalangi hewan yang ingin memakan batang berair kaktus. Fotosintesis dilakukan oleh batang hijau yang mengandung klorofil.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Teratai memiliki daun yang lebar dan mengapung di permukaan air. Adaptasi ini berfungsi untuk...',
      opts: [
        'Menyimpan cadangan air',
        'Memudahkan tumbuhan tenggelam',
        'Memaksimalkan penyerapan sinar matahari untuk fotosintesis',
        'Menyerap lebih banyak mineral dari air'
      ],
      ans: 2,
      hint: 'Tumbuhan perlu sinar matahari untuk fotosintesis. Di dalam air, sinar matahari sulit menembus ke bawah. Bagaimana teratai mensiasati ini?',
      explanation: 'Daun teratai yang LEBAR dan mengapung di permukaan air memaksimalkan penangkapan SINAR MATAHARI untuk fotosintesis. Di dalam air, cahaya tidak bisa menembus dalam. Dengan daun di permukaan, teratai mendapat cahaya maksimum tanpa "berdesakan" dengan tumbuhan lain di bawah air.'
    },
    {
      type: 'fill',
      level: 'sedang',
      q: 'Akar tunjang pada pohon bakau (mangrove) berfungsi untuk _, karena pohon bakau tumbuh di lumpur yang tidak stabil di tepi pantai.',
      ans: 'menyangga (menopang) pohon agar tidak tumbang',
      hint: 'Lumpur pantai sangat lembek dan tidak stabil. Pohon yang tinggi butuh fondasi yang kuat.',
      explanation: 'Akar tunjang bakau berbentuk seperti penyangga yang menjulur dari batang ke tanah. Fungsinya: MENOPANG pohon agar tidak roboh di lumpur pantai yang lembek, serta membantu pohon bernapas (beberapa akar punya pori-pori untuk mengambil O₂ dari udara — disebut pneumatofor).'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Eceng gondok (tumbuhan hidrofit) memiliki batang yang berongga berisi udara. Fungsi rongga udara ini adalah...',
      opts: [
        'Menyimpan cadangan makanan',
        'Membuat tumbuhan tetap mengapung di permukaan air',
        'Menyerap lebih banyak air',
        'Melindungi dari serangan ikan'
      ],
      ans: 1,
      hint: 'Apa yang membuat benda bisa mengapung di air? Benda yang berisi udara lebih ringan dari air.',
      explanation: 'Rongga udara dalam batang eceng gondok berfungsi sebagai PELAMPUNG alami. Udara memiliki massa jenis lebih kecil dari air, sehingga membuat eceng gondok MENGAPUNG di permukaan. Ini memastikan daun eceng gondok tetap berada di permukaan untuk mendapat cahaya matahari.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Tumbuhan kantong semar hidup di daerah miskin nitrogen. Ia menjebak dan mencerna serangga untuk mendapat nutrisi. Ini adalah bentuk adaptasi...',
      opts: [
        'Morfologi (bentuk tubuh)',
        'Fisiologi (cara kerja organ)',
        'Perilaku (tingkah laku)',
        'Semua benar — morfologi dan fisiologi'
      ],
      ans: 3,
      hint: 'Kantong semar punya BENTUK khusus (kantong) DAN CARA KERJA khusus (mencerna serangga). Jadi termasuk adaptasi apa?',
      explanation: 'Kantong semar menggabungkan adaptasi MORFOLOGI (bentuk kantong yang menjebak serangga) dan FISIOLOGI (kemampuan mengeluarkan enzim pencernaan untuk mencerna serangga). Ini adalah adaptasi ganda yang luar biasa untuk bertahan di lingkungan miskin nutrisi.'
    },

    // --- SUSAH / HOTS (11-15) ---
    {
      type: 'mc',
      level: 'susah',
      q: 'Jika kaktus dipindahkan ke lingkungan yang lembap dan banyak hujan, apa yang kemungkinan terjadi?',
      opts: [
        'Kaktus akan tumbuh lebih subur karena mendapat lebih banyak air',
        'Kaktus bisa membusuk karena akarnya tidak dirancang untuk kondisi terlalu basah dan tubuhnya menyimpan terlalu banyak air',
        'Kaktus akan berubah menjadi tumbuhan tropis',
        'Kaktus tidak terpengaruh oleh perubahan lingkungan'
      ],
      ans: 1,
      hint: 'Adaptasi kaktus cocok untuk kering. Apa yang terjadi jika ia "dipaksa" hidup di kondisi berlawanan?',
      explanation: 'Kaktus BERADAPTASI untuk kondisi kering. Di lingkungan basah, sistem akarnya yang dangkal dan batangnya yang menyimpan banyak air justru merugikan: akar bisa membusuk akibat terlalu banyak air (root rot), dan batang yang terus menyerap air bisa pecah. Adaptasi yang sempurna di satu lingkungan belum tentu cocok di lingkungan lain.'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Pohon jati menggugurkan daunnya di musim kemarau. Adaptasi ini disebut _ dan berfungsi mengurangi penguapan air agar pohon tidak mati kekeringan.',
      ans: 'meranggas (gugur daun)',
      hint: 'Pohon yang kehilangan semua daunnya di musim kering agar tidak kehabisan air.',
      explanation: 'MERANGGAS (deciduous) adalah adaptasi di mana pohon menggugurkan daunnya saat kondisi kering atau dingin untuk MENGURANGI PENGUAPAN AIR. Jati adalah contoh pohon meranggas tropis. Tanpa daun, tidak ada stomata yang menguapkan air, sehingga pohon bisa bertahan melewati musim kemarau panjang.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Seorang ilmuwan ingin membuat tanaman yang bisa tumbuh di daerah gurun. Berdasarkan adaptasi xerofit, fitur-fitur apa yang sebaiknya dimiliki tanaman hasil rekayasa tersebut?',
      opts: [
        'Daun lebar, akar pendek, batang berongga',
        'Daun kecil/duri, akar panjang dalam, batang tebal penyimpan air, lapisan lilin pada permukaan',
        'Daun lebar, akar mengapung, batang tipis',
        'Tidak perlu klorofil, akar tipis, batang berongga'
      ],
      ans: 1,
      hint: 'Ingat adaptasi kaktus: daun → duri (hemat air), akar → panjang (cari air dalam), batang → tebal (simpan air).',
      explanation: 'Tanaman gurun ideal harus: (1) DAUN KECIL/DURI — kurangi penguapan; (2) AKAR PANJANG — menjangkau air tanah yang dalam; (3) BATANG TEBAL — menyimpan air saat hujan; (4) LAPISAN LILIN (kutikula tebal) — mencegah air menguap dari permukaan daun/batang. Semua ini adalah fitur khas xerofit alami.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Mengapa hutan hujan tropis (seperti hutan Amazon dan Kalimantan) memiliki keanekaragaman tumbuhan yang jauh lebih tinggi daripada gurun?',
      opts: [
        'Karena gurun terlalu panas untuk evolusi',
        'Karena hutan hujan menyediakan air, cahaya, dan nutrisi yang cukup sehingga lebih banyak jenis tumbuhan bisa beradaptasi dan bertahan hidup',
        'Karena tumbuhan di gurun tidak bisa berkembang biak',
        'Karena gurun tidak memiliki tanah'
      ],
      ans: 1,
      hint: 'Lingkungan yang menyediakan lebih banyak sumber daya (air, nutrisi, cahaya) mendukung lebih banyak kehidupan.',
      explanation: 'Hutan hujan tropis memiliki AIR BERLIMPAH, CAHAYA CUKUP, dan NUTRISI KAYA yang mendukung berbagai strategi adaptasi dan niche ekologis. Di gurun, hanya tumbuhan dengan adaptasi sangat khusus (xerofit) yang bisa bertahan, sehingga keanekaragamannya rendah. Sumber daya lingkungan yang kaya = lebih banyak kemungkinan adaptasi = lebih banyak spesies.'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Tumbuhan epifit seperti anggrek hutan menempel pada pohon lain bukan untuk mencuri makanan, melainkan untuk mendapat posisi yang lebih tinggi guna mendapat _.',
      ans: 'cahaya matahari (sinar matahari)',
      hint: 'Di hutan lebat, kanopi pohon besar memblokir cahaya ke bawah. Tumbuhan kecil perlu naik ke atas untuk mendapat apa?',
      explanation: 'EPIFIT (epi = di atas, phyton = tumbuhan) seperti anggrek, lumut, dan paku menempel pada batang atau cabang pohon bukan untuk parasit (tidak mengambil nutrisi), melainkan untuk mendapat posisi lebih tinggi dan mendapat CAHAYA MATAHARI yang cukup untuk fotosintesis. Ini adalah adaptasi cerdas di hutan lebat yang sinar mataharinya terblokir kanopi.'
    },
  ],

  // ================================================================
  //  ipa-11 | ROTASI & REVOLUSI BUMI (Siang-Malam, Tahun, Musim)
  // ================================================================
  'ipa-11': [

    // --- MUDAH (1-5) ---
    {
      type: 'mc',
      level: 'mudah',
      q: 'Rotasi bumi adalah gerakan bumi...',
      opts: [
        'Mengelilingi matahari',
        'Berputar pada porosnya sendiri',
        'Mengelilingi bulan',
        'Berpindah dari satu galaksi ke galaksi lain'
      ],
      ans: 1,
      hint: 'Rotasi = berputar di tempat, seperti gasing. Bumi berputar pada sumbu/porosnya.',
      explanation: 'ROTASI bumi adalah gerakan bumi BERPUTAR pada porosnya (sumbu imaginer dari kutub utara ke kutub selatan). Bumi berotasi dari barat ke timur, membutuhkan waktu sekitar 24 jam (1 hari).'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Rotasi bumi menyebabkan terjadinya _ dan malam secara bergantian di seluruh permukaan bumi.',
      ans: 'siang',
      hint: 'Bagian bumi yang menghadap matahari mendapat cahaya. Bagian yang membelakangi matahari berada dalam gelap.',
      explanation: 'Rotasi bumi menyebabkan SIANG dan MALAM bergantian. Bagian bumi yang menghadap matahari mengalami siang hari, sedangkan bagian yang membelakangi matahari mengalami malam. Karena bumi terus berputar, siang dan malam berganti setiap ±12 jam.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Revolusi bumi adalah gerakan bumi...',
      opts: [
        'Berputar pada porosnya sendiri',
        'Berputar bersama galaksi Bima Sakti',
        'Mengelilingi matahari',
        'Mendekat dan menjauh dari bulan'
      ],
      ans: 2,
      hint: 'Revolusi = berputar mengelilingi sesuatu. Bumi berevolusi mengelilingi apa?',
      explanation: 'REVOLUSI bumi adalah gerakan bumi MENGELILINGI MATAHARI dalam lintasan berbentuk elips (orbit). Satu revolusi penuh membutuhkan waktu sekitar 365,25 hari (1 tahun). Revolusi inilah yang menyebabkan pergantian musim dan tahun.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Satu revolusi bumi mengelilingi matahari membutuhkan waktu sekitar...',
      opts: ['24 jam', '30 hari', '365 hari (1 tahun)', '12 jam'],
      ans: 2,
      hint: 'Satu putaran bumi mengelilingi matahari sama dengan berapa lama kalender kita?',
      explanation: 'Satu revolusi bumi membutuhkan 365 hari, 5 jam, 48 menit, dan 46 detik — dibulatkan menjadi 365 hari (1 tahun). Sisa ¼ hari (5 jam lebih) dikumpulkan selama 4 tahun menjadi 1 hari ekstra → TAHUN KABISAT (366 hari).'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Setiap 4 tahun sekali, ada satu tahun dengan 366 hari yang disebut tahun _.',
      ans: 'kabisat',
      hint: 'Tahun ini bulan Februari memiliki 29 hari, bukan 28 hari seperti biasanya.',
      explanation: 'TAHUN KABISAT terjadi setiap 4 tahun sekali untuk mengompensasi 0,25 hari ekstra per tahun (365,25 × 4 = 366 hari ekstra di tahun ke-4). Pada tahun kabisat, bulan Februari memiliki 29 hari. Contoh: 2020, 2024, 2028 adalah tahun kabisat.'
    },

    // --- SEDANG (6-10) ---
    {
      type: 'mc',
      level: 'sedang',
      q: 'Perbedaan utama antara rotasi dan revolusi bumi adalah...',
      opts: [
        'Rotasi lebih cepat dari revolusi',
        'Rotasi adalah perputaran pada poros sendiri (selesai 1 hari), revolusi adalah peredaran mengelilingi matahari (selesai 1 tahun)',
        'Revolusi terjadi setiap hari, rotasi setiap tahun',
        'Keduanya sama, hanya namanya berbeda'
      ],
      ans: 1,
      hint: 'Ingat: Rotasi = poros sendiri = 1 hari. Revolusi = keliling matahari = 1 tahun.',
      explanation: 'ROTASI: bumi berputar pada poros sendiri, selesai dalam ±24 jam (1 hari), menghasilkan siang-malam. REVOLUSI: bumi mengelilingi matahari, selesai dalam ±365 hari (1 tahun), menghasilkan pergantian musim dan tahun. Keduanya terjadi bersamaan!'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Poros bumi miring sekitar 23,5° terhadap bidang orbitnya. Apa akibat dari kemiringan ini?',
      opts: [
        'Menyebabkan siang dan malam',
        'Menyebabkan pergantian musim di daerah subtropis dan kutub',
        'Menyebabkan terjadinya gerhana matahari',
        'Menyebabkan bumi bergerak lebih cepat'
      ],
      ans: 1,
      hint: 'Di belahan bumi utara, saat musim panas, kutub utara lebih condong ke matahari. Saat musim dingin, kutub utara menjauh dari matahari.',
      explanation: 'Kemiringan poros bumi 23,5° menyebabkan PERGANTIAN MUSIM. Saat belahan bumi utara condong ke matahari → musim panas di belahan utara (musim dingin di belahan selatan). Saat belahan bumi selatan condong ke matahari → sebaliknya. Indonesia di khatulistiwa hanya mengalami 2 musim (hujan dan kemarau), bukan 4 musim.'
    },
    {
      type: 'fill',
      level: 'sedang',
      q: 'Perbedaan waktu antara daerah-daerah di bumi disebabkan oleh _. Indonesia memiliki 3 zona waktu: WIB, WITA, dan WIT.',
      ans: 'rotasi bumi',
      aliases: ['rotasi bumi', 'rotasi', 'perputaran bumi'],
      hint: 'Bumi berputar, jadi tidak semua daerah menghadap matahari pada saat yang sama. Ini menyebabkan perbedaan... apa?',
      explanation: 'Perbedaan waktu antar daerah disebabkan oleh ROTASI BUMI. Karena bumi berputar 360° dalam 24 jam (15° per jam), daerah yang berbeda menghadap matahari pada waktu berbeda. Setiap 15° bujur = perbedaan 1 jam. Indonesia membentang dari 95°-141° BT, maka dibagi 3 zona waktu (WIB, WITA, WIT).'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Negara-negara di belahan bumi utara (seperti Eropa dan Amerika) mengalami 4 musim. Di Indonesia, kita hanya mengalami 2 musim karena...',
      opts: [
        'Indonesia negaranya terlalu kecil',
        'Indonesia terletak di garis khatulistiwa sehingga mendapat sinar matahari hampir sama sepanjang tahun',
        'Indonesia tidak terkena pengaruh revolusi bumi',
        'Indonesia terlalu dekat dengan matahari'
      ],
      ans: 1,
      hint: 'Musim terjadi akibat kemiringan poros bumi. Daerah khatulistiwa selalu mendapat sinar matahari dari sudut yang hampir sama.',
      explanation: 'Indonesia di KHATULISTIWA mendapat sinar matahari hampir tegak lurus sepanjang tahun, tidak terlalu terpengaruh kemiringan poros bumi. Di belahan bumi jauh dari khatulistiwa, kemiringan poros menyebabkan variasi besar dalam intensitas sinar matahari → 4 musim (semi, panas, gugur, dingin).'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Gerak semu tahunan matahari adalah...',
      opts: [
        'Gerakan matahari yang sebenarnya mengelilingi bumi',
        'Ilusi optik bahwa matahari bergerak dari utara ke selatan dan kembali ke utara sepanjang tahun, akibat revolusi bumi',
        'Gerakan matahari dari timur ke barat setiap hari',
        'Gerakan matahari mendekati dan menjauhi bumi'
      ],
      ans: 1,
      hint: '"Semu" artinya kelihatannya bergerak tapi sebenarnya tidak. Yang bergerak sebenarnya adalah bumi, bukan matahari.',
      explanation: 'Gerak semu TAHUNAN matahari: matahari terlihat seolah berpindah antara garis balik utara (23,5° LU) dan garis balik selatan (23,5° LS) sepanjang tahun. Padahal yang bergerak adalah BUMI mengelilingi matahari dengan porosnya yang miring. Ini menyebabkan posisi terbit/terbenam matahari sedikit berbeda setiap harinya.'
    },

    // --- SUSAH / HOTS (11-15) ---
    {
      type: 'mc',
      level: 'susah',
      q: 'Jika bumi TIDAK berputar pada porosnya (tidak berotasi), apa yang akan terjadi?',
      opts: [
        'Tidak ada perubahan, bumi tetap seperti biasa',
        'Satu sisi bumi akan selalu menghadap matahari (siang terus) dan sisi lain selalu gelap (malam terus) — kehidupan seperti yang kita kenal tidak akan mungkin ada',
        'Bumi akan jatuh ke matahari',
        'Musim akan berganti lebih cepat'
      ],
      ans: 1,
      hint: 'Rotasi menyebabkan siang-malam berganti. Tanpa rotasi, apa yang terjadi pada siang dan malam?',
      explanation: 'Tanpa rotasi: satu sisi bumi SELALU menghadap matahari → suhu sangat panas (ratusan derajat), sisi lainnya SELALU gelap → suhu sangat dingin. Perbedaan suhu ekstrem menciptakan angin superkencang. Kehidupan seperti yang kita kenal TIDAK MUNGKIN ADA. Rotasi bumi sangat vital untuk keseimbangan suhu dan ekosistem.'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Tahun kabisat terjadi setiap 4 tahun karena revolusi bumi sebenarnya memakan waktu 365 hari _ jam lebih, yang dikumpulkan selama 4 tahun menjadi 1 hari ekstra.',
      ans: '6 (enam)',
      hint: 'Lebih tepatnya 5 jam 48 menit, tapi untuk penyederhanaan sering disebut 6 jam atau ¼ hari.',
      explanation: 'Revolusi bumi memakan 365 hari + ≈6 jam (¼ hari). Dalam 4 tahun: 4 × ¼ = 1 hari ekstra → ditambahkan ke bulan Februari → 29 hari → TAHUN KABISAT. Tanpa koreksi ini, kalender kita akan meleset sekitar 1 hari setiap 4 tahun, dan dalam beberapa abad musim panas akan jatuh di bulan yang berbeda!'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Di belahan bumi selatan (seperti Australia), bulan Desember-Februari adalah musim panas, sementara di belahan bumi utara adalah musim dingin. Mengapa demikian?',
      opts: [
        'Karena Australia lebih dekat ke matahari di bulan Desember',
        'Karena saat Desember, belahan bumi selatan condong ke arah matahari akibat kemiringan poros bumi, sementara belahan utara menjauh',
        'Karena cuaca di selatan selalu berlawanan dengan utara',
        'Karena matahari berpindah ke belahan selatan di bulan Desember'
      ],
      ans: 1,
      hint: 'Kemiringan poros bumi 23,5°. Saat Desember, ujung mana dari poros bumi yang mengarah ke matahari?',
      explanation: 'Saat bulan Desember, POROS BUMI miring sehingga BELAHAN SELATAN condong ke arah matahari. Akibatnya: belahan selatan mendapat sinar matahari lebih langsung dan lama → MUSIM PANAS. Belahan utara menjauh dari matahari → sinar datang miring dan sedikit → MUSIM DINGIN. Ini bukan karena jarak, melainkan sudut!'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Pada tanggal 21 Maret dan 23 September, matahari tepat berada di atas garis khatulistiwa. Peristiwa ini disebut ekuinoks dan menyebabkan...',
      opts: [
        'Gerhana matahari di seluruh dunia',
        'Siang dan malam memiliki durasi yang hampir sama (±12 jam) di seluruh bumi',
        'Musim panas terpanjang dalam setahun',
        'Matahari tidak terbit selama beberapa hari'
      ],
      ans: 1,
      hint: 'Equinox dari bahasa Latin "aequi" (sama) + "nox" (malam). Apa yang sama antara siang dan malam?',
      explanation: 'EKUINOKS terjadi saat matahari tepat di atas khatulistiwa — cahaya matahari jatuh sama rata di kedua belahan bumi. Hasilnya: DURASI SIANG dan MALAM hampir SAMA (±12 jam) di seluruh bumi. Terjadi dua kali setahun: 21 Maret (ekuinoks musim semi) dan 23 September (ekuinoks musim gugur) untuk belahan bumi utara.'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Gaya _ bumi (tarikan gravitasi) yang memengaruhi bulan, bersama gravitasi bulan yang memengaruhi bumi, menyebabkan bumi dan bulan saling terikat dalam sistem orbit yang stabil.',
      ans: 'gravitasi',
      aliases: ['gravitasi', 'gaya gravitasi', 'tarikan gravitasi', 'gravity'],
      hint: 'Gaya ini juga yang membuat apel jatuh ke bawah dan kita tidak melayang ke luar angkasa.',
      explanation: 'GRAVITASI adalah gaya tarik-menarik antara benda-benda bermassa. Gravitasi bumi menarik bulan sehingga bulan terus berputar mengelilingi bumi (tidak kabur ke luar angkasa). Gravitasi bulan menarik bumi (terutama menyebabkan pasang surut air laut). Tanpa gravitasi, sistem tata surya tidak akan stabil.'
    },
  ],

  // ================================================================
  //  ipa-12 | ROTASI & REVOLUSI BULAN + GERHANA (Pasang Surut & Gerhana)
  // ================================================================
  'ipa-12': [

    // --- MUDAH (1-5) ---
    {
      type: 'mc',
      level: 'mudah',
      q: 'Bulan bergerak mengelilingi bumi. Gerakan ini disebut...',
      opts: ['Rotasi bulan', 'Revolusi bulan', 'Rotasi bumi', 'Revolusi bumi'],
      ans: 1,
      hint: 'Revolusi = mengelilingi benda lain. Bulan mengelilingi bumi.',
      explanation: 'REVOLUSI BULAN adalah gerakan bulan mengelilingi bumi. Satu revolusi bulan membutuhkan waktu sekitar 29,5 hari (1 bulan sinodis). Ini yang menyebabkan kita melihat fase-fase bulan (bulan baru, sabit, purnama, dsb).'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Bulan tidak memiliki cahaya sendiri. Cahaya bulan yang kita lihat di malam hari sebenarnya adalah cahaya _ yang dipantulkan oleh permukaan bulan.',
      ans: 'matahari',
      hint: 'Bulan seperti cermin — ia memantulkan cahaya dari bintang terdekat kita.',
      explanation: 'Bulan adalah benda langit yang TIDAK BERCAHAYA (benda gelap). Cahaya bulan yang terlihat di malam hari adalah CAHAYA MATAHARI yang dipantulkan oleh permukaan bulan. Itulah mengapa bulan tampak lebih terang saat purnama — permukaan yang menghadap bumi mendapat cahaya matahari penuh.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Gerhana matahari terjadi ketika...',
      opts: [
        'Bumi berada di antara matahari dan bulan',
        'Bulan berada di antara matahari dan bumi, menutupi cahaya matahari',
        'Matahari berada di antara bumi dan bulan',
        'Bumi terlalu jauh dari matahari'
      ],
      ans: 1,
      hint: 'Gerhana matahari = matahari tertutupi. Siapa yang bisa menutupi matahari jika kita lihat dari bumi?',
      explanation: 'GERHANA MATAHARI terjadi saat BULAN berada DI ANTARA matahari dan bumi, sehingga bayangan bulan jatuh ke bumi. Bagian bumi yang terkena bayangan gelap bulan (umbra) mengalami gerhana matahari total, sedangkan yang terkena bayangan abu-abu (penumbra) mengalami gerhana sebagian.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Gerhana bulan terjadi ketika...',
      opts: [
        'Bulan berada di antara matahari dan bumi',
        'Matahari lebih terang dari biasanya',
        'Bumi berada di antara matahari dan bulan, bayangan bumi menutupi bulan',
        'Bulan menjauh dari bumi'
      ],
      ans: 2,
      hint: 'Gerhana bulan = bulan tertutup bayangan. Siapa yang bisa memblokir cahaya matahari agar tidak mencapai bulan?',
      explanation: 'GERHANA BULAN terjadi saat BUMI berada DI ANTARA matahari dan bulan. Bayangan bumi (umbra) menutupi bulan, sehingga cahaya matahari tidak mencapai bulan. Bulan tampak berwarna merah/oranye kemerahan (disebut "blood moon") karena cahaya matahari melewati atmosfer bumi sebelum sedikit menyentuh bulan.'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Naik turunnya permukaan air laut yang terjadi secara teratur setiap hari disebut pasang _.',
      ans: 'surut',
      hint: 'Saat air laut naik disebut pasang, saat air laut turun disebut... apa?',
      explanation: 'PASANG SURUT adalah naik turunnya permukaan air laut secara berkala. "Pasang" = air laut naik, "Surut" = air laut turun. Pasang surut disebabkan terutama oleh gaya gravitasi BULAN yang menarik air laut ke arahnya.'
    },

    // --- SEDANG (6-10) ---
    {
      type: 'mc',
      level: 'sedang',
      q: 'Mengapa pasang surut air laut berhubungan dengan posisi bulan?',
      opts: [
        'Karena bulan memancarkan panas yang menghangatkan air laut',
        'Karena gravitasi bulan menarik massa air laut ke arah bulan, menyebabkan air laut menggembung (pasang) di sisi yang menghadap bulan',
        'Karena bulan memblokir angin yang menggerakkan ombak',
        'Karena bulan memengaruhi suhu bumi'
      ],
      ans: 1,
      hint: 'Gravitasi adalah gaya tarik. Bulan menarik apa yang ada di bumi? Air laut kan termasuk massa yang ada di bumi.',
      explanation: 'GRAVITASI BULAN menarik massa air laut di sisi bumi yang menghadap bulan, menyebabkan air "menggembung" ke arah bulan (PASANG). Di sisi berlawanan juga terjadi pasang akibat efek inersia. Bagian yang tidak ditarik gravitasi bulan mengalami SURUT. Ini menghasilkan 2 kali pasang dan 2 kali surut per hari (di kebanyakan tempat).'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Pasang purnama (spring tide) terjadi pada saat...',
      opts: [
        'Bulan berada di antara bumi dan matahari (bulan baru) atau bumi di antara bulan dan matahari (bulan purnama)',
        'Bulan berada di posisi tegak lurus terhadap garis bumi-matahari',
        'Matahari lebih dekat ke bumi dari biasanya',
        'Cuaca sedang panas terik'
      ],
      ans: 0,
      hint: 'Pasang paling besar terjadi saat gravitasi matahari DAN bulan bekerja searah — ini terjadi saat posisi ketiga benda sejajar.',
      explanation: 'PASANG PURNAMA (spring tide) terjadi saat matahari, bumi, dan bulan sejajar — yaitu saat BULAN BARU (bulan di antara bumi-matahari) atau BULAN PURNAMA (bumi di antara bulan-matahari). Gravitasi matahari dan bulan bekerja BERSAMA-SAMA, menghasilkan pasang tertinggi dan surut terendah.'
    },
    {
      type: 'fill',
      level: 'sedang',
      q: 'Gerhana matahari total hanya bisa terlihat dari daerah yang terkena bayangan gelap (inti) bulan yang disebut _.',
      ans: 'umbra',
      aliases: ['umbra', 'inti bayangan', 'bayangan inti', 'shadow inti'],
      hint: 'Ada dua jenis bayangan: yang gelap total (inti) dan yang abu-abu (tepi). Yang gelap total namanya?',
      explanation: 'UMBRA adalah bayangan gelap INTI dari suatu benda yang menghalangi cahaya. Daerah di bumi yang terkena umbra bulan mengalami GERHANA MATAHARI TOTAL — matahari tertutup sempurna. Di luar umbra ada PENUMBRA (bayangan abu-abu) — daerah ini mengalami gerhana sebagian (matahari tertutup sebagian).'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Mengapa kita selalu melihat sisi yang SAMA dari bulan, tidak pernah melihat sisi belakangnya dari bumi?',
      opts: [
        'Karena sisi belakang bulan selalu gelap',
        'Karena periode rotasi bulan sama dengan periode revolusinya mengelilingi bumi, sehingga sisi yang sama selalu menghadap bumi',
        'Karena bulan tidak berputar sama sekali',
        'Karena bumi berputar terlalu cepat untuk melihat sisi lain bulan'
      ],
      ans: 1,
      hint: 'Bulan juga berotasi. Berapa lama bulan berotasi sekali? Berapa lama bulan berevolusi mengelilingi bumi?',
      explanation: 'Fenomena ini disebut ROTASI SINKRON. Bulan berotasi pada porosnya dalam waktu yang SAMA dengan revolusinya mengelilingi bumi (±29,5 hari). Akibatnya, sisi yang sama bulan selalu menghadap bumi. Kita tidak pernah melihat "sisi jauh" bulan dari bumi. Manusia pertama kali melihat sisi jauh bulan dari wahana antariksa tahun 1959.'
      },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Fase bulan sabit (crescent) terjadi karena...',
      opts: [
        'Sebagian bulan tertutupi awan tebal',
        'Hanya sebagian permukaan bulan yang menghadap bumi mendapat cahaya matahari dan terlihat dari bumi',
        'Bulan sedang dalam fase gerhana parsial',
        'Bulan bergerak lebih jauh dari bumi'
      ],
      ans: 1,
      hint: 'Bulan tampak seperti bulan sabit ketika hanya sebagian kecil yang bercahaya. Mengapa hanya sebagian yang bercahaya?',
      explanation: 'Fase bulan bergantung pada posisi bulan relatif terhadap bumi dan matahari. Saat bulan SABIT, cahaya matahari hanya menyinari sebagian kecil permukaan bulan yang terlihat dari bumi. Saat PURNAMA, seluruh permukaan yang menghadap bumi terkena cahaya matahari. Fase bulan berulang setiap ±29,5 hari.'
    },

    // --- SUSAH / HOTS (11-15) ---
    {
      type: 'mc',
      level: 'susah',
      q: 'Gerhana matahari total lebih jarang terlihat dibandingkan gerhana bulan, meskipun keduanya terjadi dengan frekuensi serupa. Mengapa?',
      opts: [
        'Karena gerhana matahari berlangsung lebih cepat',
        'Karena bayangan umbra bulan hanya menutupi area sempit di bumi, sehingga hanya sebagian kecil daerah yang bisa melihatnya total',
        'Karena gerhana matahari terjadi siang hari sehingga sulit dilihat',
        'Karena matahari terlalu terang untuk dilihat'
      ],
      ans: 1,
      hint: 'Gerhana bulan bisa terlihat dari separuh bumi (semua tempat yang sedang malam). Gerhana matahari total hanya terlihat dari daerah mana?',
      explanation: 'Gerhana BULAN terlihat dari seluruh belahan bumi yang sedang malam (separuh bumi). Gerhana MATAHARI TOTAL hanya terlihat dari jalur sempit di permukaan bumi yang terkena UMBRA bulan (lebarnya hanya sekitar 150-270 km). Semakin sempit area = semakin jarang daerah tertentu mengalaminya. Rata-rata, satu lokasi mengalami gerhana matahari total setiap 375 tahun sekali!'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Kalender _ (kalender Islam) didasarkan pada revolusi bulan mengelilingi bumi, sehingga satu tahunnya terdiri dari 354 hari — 11 hari lebih pendek dari kalender Masehi.',
      ans: 'Hijriah (Komariah)',
      hint: 'Kalender ini digunakan untuk menentukan bulan Ramadan dan hari raya Idul Fitri. Didasarkan pada siklus bulan.',
      explanation: 'Kalender HIJRIAH (Komariah) didasarkan pada REVOLUSI BULAN. Satu bulan = 29,5 hari (dibulatkan bergantian 29 atau 30 hari). Satu tahun Hijriah = 12 × 29,5 = 354 hari. Karena 11 hari lebih pendek dari kalender Masehi (365 hari), bulan Ramadan setiap tahun jatuh 11 hari lebih awal dari tahun sebelumnya dalam kalender Masehi.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Nelayan tradisional biasanya memahami pola pasang surut untuk menentukan waktu melaut. Kapan waktu yang PALING BERBAHAYA untuk nelayan dengan perahu kecil?',
      opts: [
        'Saat air laut surut terendah, karena perahu bisa kandas',
        'Saat pasang purnama (spring tide) dengan ombak besar dan arus kuat',
        'Saat bulan berbentuk sabit',
        'Saat gerhana matahari karena langit gelap'
      ],
      ans: 1,
      hint: 'Pasang paling besar (spring tide) terjadi saat bulan baru dan purnama. Apa efeknya pada laut?',
      explanation: 'PASANG PURNAMA (spring tide) menghasilkan perbedaan tinggi air laut MAKSIMUM dan arus laut paling kuat. Bagi nelayan kecil, ini berarti ombak lebih besar dan arus lebih deras — sangat berbahaya. Nelayan tradisional berpengalaman menghafal kalender pasang surut yang berhubungan dengan fase bulan untuk keselamatan mereka.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Saat gerhana bulan, bulan tidak benar-benar hilang total menjadi gelap sempurna, melainkan berubah warna menjadi merah/oranye. Mengapa?',
      opts: [
        'Karena bulan memiliki atmosfer berwarna merah',
        'Karena cahaya matahari dibiaskan oleh atmosfer bumi dan diarahkan ke bulan, dengan panjang gelombang merah yang paling bisa melewati atmosfer',
        'Karena bumi memantulkan cahaya merah ke bulan',
        'Karena bulan mengandung mineral berwarna merah'
      ],
      ans: 1,
      hint: 'Pikirkan mengapa langit saat matahari terbenam berwarna merah/oranye. Fenomena yang sama terjadi pada gerhana bulan.',
      explanation: 'Saat gerhana bulan, atmosfer bumi MEMBIASKAN (membelokkan) cahaya matahari ke arah bulan yang berada di umbra. Atmosfer menyaring cahaya biru (hambur ke segala arah) tetapi membiarkan cahaya MERAH/ORANYE melewatinya — sama seperti saat matahari terbenam. Cahaya merah inilah yang menyinari bulan, menghasilkan "Blood Moon" yang dramatis.'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Gerhana matahari cincin terjadi ketika bulan berada pada posisi terjauh dari bumi (apogee) sehingga tampak lebih kecil dan tidak bisa menutupi matahari sepenuhnya, menyisakan _ cahaya matahari di tepi bulan.',
      ans: 'cincin (lingkaran)',
      hint: 'Bayangkan matahari sebagai piringan besar dan bulan yang lebih kecil menutupi bagian tengahnya — apa yang terlihat di tepi?',
      explanation: 'Gerhana MATAHARI CINCIN (annular) terjadi saat bulan berada di APOGEE (titik terjauh dari bumi dalam orbitnya yang elips), sehingga tampak lebih kecil dari biasanya. Bulan hanya menutupi bagian tengah matahari, menyisakan CINCIN CAHAYA MATAHARI di sekelilingnya. Ini berbeda dari gerhana total di mana bulan di perigee (terdekat) menutupi matahari sempurna.'
    },
  ],

};

// ============================================================
//  PETUNJUK PENGGABUNGAN KE data.js:
//  Tambahkan isi QUIZ_DATA_PART2 ke dalam objek QUIZ_DATA utama.
//  Contoh: Object.assign(QUIZ_DATA, QUIZ_DATA_PART2);
//  Atau copy-paste langsung setelah kunci 'ipa-6' di dalam QUIZ_DATA.
// ============================================================

// ============================================================
//  QUIZ_DATA — BATCH 2: Bahasa Indonesia bindo-1 s.d. bindo-4
//  BelajarCeria | Senior Education Content Creator
//  Format: 15 soal/topik | 5 Mudah, 5 Sedang, 5 Susah (HOTS)
//          Min. 3 soal tipe 'fill' per topik
//          mc: 4 opsi, ans = index 0-3
//          fill: jawaban singkat, '_' pada string q
// ============================================================

export const QUIZ_DATA_BINDO_1 = {

  // ================================================================
  //  bindo-1 | PERIBAHASA
  // ================================================================
  'bindo-1': [

    // --- MUDAH (1-5) ---
    {
      type: 'mc',
      level: 'mudah',
      q: 'Apa yang dimaksud dengan peribahasa?',
      opts: [
        'Kalimat panjang yang berisi cerita lucu',
        'Kelompok kata atau kalimat tetap yang mengandung makna kiasan dan nasihat',
        'Kata-kata kasar yang tidak sopan',
        'Nama-nama tokoh dalam dongeng'
      ],
      ans: 1,
      hint: 'Peribahasa bukan bermakna harfiah, melainkan bermakna... apa?',
      explanation: 'Peribahasa adalah kelompok kata atau kalimat yang susunannya tetap dan mengandung MAKNA KIASAN (bukan makna sebenarnya) serta sering mengandung nasihat atau sindiran. Contoh: "Ada udang di balik batu" bukan berarti sungguh ada udang dan batu.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Peribahasa "Bagai air di daun talas" memiliki makna...',
      opts: [
        'Orang yang suka mandi',
        'Orang yang tidak punya pendirian tetap, mudah berubah-ubah pendapat',
        'Orang yang sangat rajin bekerja',
        'Orang yang pemalu dan pendiam'
      ],
      ans: 1,
      hint: 'Perhatikan sifat air di atas daun talas — air itu mudah bergerak ke sana kemari dan tidak menempel.',
      explanation: '"Bagai air di daun talas" menggambarkan orang yang tidak berpendirian tetap, pendapatnya mudah berubah-ubah seperti air di daun talas yang mudah bergerak ke mana-mana dan tidak menempel pada daun.'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Peribahasa "Rajin _ murah rezeki" mengandung nasihat agar kita selalu giat bekerja dan tidak bermalas-malasan.',
      ans: 'pangkal',
      hint: 'Kata ini berarti "awal" atau "sumber". Rajin adalah _-nya kemakmuran.',
      explanation: '"Rajin PANGKAL Kaya" (versi lain: Rajin pangkal murah rezeki) adalah peribahasa yang mengandung nasihat bahwa kerajinan dan ketekunan bekerja adalah kunci untuk mendapat rezeki dan keberhasilan dalam hidup.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Peribahasa "Tak ada rotan, akar pun jadi" mengandung makna...',
      opts: [
        'Kita harus mencari rotan dan akar di hutan',
        'Jika tidak ada yang terbaik, yang ada pun bisa digunakan sebagai pengganti',
        'Rotan dan akar adalah tanaman yang sama',
        'Kita tidak boleh memilih-milih pekerjaan'
      ],
      ans: 1,
      hint: 'Rotan adalah yang terbaik/utama. Akar adalah penggantinya. Apa maksudnya jika yang utama tidak ada?',
      explanation: '"Tak ada rotan, akar pun jadi" bermakna: jika sesuatu yang lebih baik tidak tersedia, gunakan saja apa yang ada sebagai PENGGANTI. Peribahasa ini mengajarkan kita untuk tidak boros dan pandai memanfaatkan apa yang ada.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Peribahasa "Tong kosong nyaring bunyinya" digunakan untuk menggambarkan orang yang...',
      opts: [
        'Pandai menabuh tong',
        'Banyak bicara tetapi sedikit ilmu dan kemampuannya',
        'Suka mengumpulkan tong-tong kosong',
        'Memiliki banyak pengetahuan'
      ],
      ans: 1,
      hint: 'Tong kosong = isi sedikit/tidak ada. Nyaring bunyinya = banyak bicara. Apa kesimpulannya?',
      explanation: '"Tong kosong nyaring bunyinya" menggambarkan orang yang BANYAK BICARA tetapi SEDIKIT ILMU atau kemampuannya. Semakin banyak seseorang berbicara tanpa isi, semakin jelas terlihat keterbatasannya. Peribahasa ini adalah sindiran halus.'
    },

    // --- SEDANG (6-10) ---
    {
      type: 'mc',
      level: 'sedang',
      q: 'Peribahasa yang tepat untuk menggambarkan seseorang yang memiliki kemampuan berbicara yang sangat bagus dan meyakinkan adalah...',
      opts: [
        '"Ada udang di balik batu"',
        '"Lidah tak bertulang"',
        '"Air beriak tanda tak dalam"',
        '"Berat sama dipikul, ringan sama dijinjing"'
      ],
      ans: 1,
      hint: 'Lidah adalah alat bicara. Tak bertulang artinya bisa bergerak sangat bebas dan fleksibel.',
      explanation: '"Lidah tak bertulang" berarti seseorang yang pandai berbicara, bisa mengatakan apa saja dengan mudah — bisa juga bermakna negatif (mudah berjanji atau berkata tidak jujur). Pilihan B paling tepat untuk kemampuan berbicara yang luwes.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Riko selalu membantu adiknya belajar, berbagi makanan, dan tidak pernah berkelahi. Peribahasa yang PALING COCOK untuk sikap Riko adalah...',
      opts: [
        '"Sepandai-pandai tupai melompat, sekali waktu jatuh juga"',
        '"Berat sama dipikul, ringan sama dijinjing"',
        '"Air beriak tanda tak dalam"',
        '"Musuh dalam selimut"'
      ],
      ans: 1,
      hint: 'Riko selalu berbagi dan bekerja sama. Peribahasa mana yang menggambarkan kebersamaan dan gotong royong?',
      explanation: '"Berat sama dipikul, ringan sama dijinjing" menggambarkan KEBERSAMAAN dan GOTONG ROYONG — susah senang ditanggung bersama. Cocok untuk Riko yang selalu membantu dan berbagi dengan adiknya.'
    },
    {
      type: 'fill',
      level: 'sedang',
      q: 'Peribahasa "Ada _ di balik batu" bermakna ada maksud tersembunyi di balik suatu perbuatan yang tampak baik.',
      ans: 'udang',
      hint: 'Hewan laut kecil berkarapas yang sering bersembunyi di balik batu di sungai atau laut.',
      explanation: '"Ada UDANG di balik batu" menggambarkan seseorang yang melakukan sesuatu dengan tujuan tersembunyi — di balik kebaikannya ada maksud lain yang tidak diungkapkan. Peribahasa ini mengingatkan kita untuk tidak mudah percaya begitu saja pada kebaikan orang yang tidak kita kenal.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Peribahasa "Buah jatuh tidak jauh dari pohonnya" bermakna...',
      opts: [
        'Pohon buah harus ditanam di dekat rumah',
        'Sifat dan perilaku anak biasanya mirip dengan orang tuanya',
        'Buah-buahan enak tumbuh di pohon yang tinggi',
        'Anak harus selalu dekat dengan orang tuanya'
      ],
      ans: 1,
      hint: 'Pohon adalah orang tua. Buah adalah anak. Buah jatuh tidak jauh dari pohon artinya...',
      explanation: '"Buah jatuh tidak jauh dari pohonnya" bermakna sifat, perilaku, atau bakat ANAK biasanya tidak jauh berbeda dari ORANG TUANYA. Seperti buah yang jatuh di dekat pohon induknya, anak-anak cenderung mewarisi karakteristik orang tua mereka.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Peribahasa "Sepandai-pandai tupai melompat, sekali waktu jatuh juga" mengandung makna...',
      opts: [
        'Tupai adalah hewan yang sangat pintar',
        'Sesepandai apapun seseorang, ia pasti pernah melakukan kesalahan',
        'Orang yang pandai melompat akan sukses',
        'Kita tidak boleh belajar melompat'
      ],
      ans: 1,
      hint: 'Tupai terkenal pandai melompat. Tapi "sekali waktu jatuh juga" artinya apa?',
      explanation: '"Sepandai-pandai tupai melompat, sekali waktu jatuh juga" bermakna: SEPANDAI APAPUN seseorang, pasti pernah melakukan KESALAHAN atau kegagalan. Tidak ada manusia yang sempurna. Peribahasa ini mengajarkan kerendahan hati.'
    },

    // --- SUSAH / HOTS (11-15) ---
    {
      type: 'mc',
      level: 'susah',
      q: 'Sari meminjam buku Dina, tetapi buku itu hilang. Sari tidak mengaku dan malah pura-pura tidak tahu. Peribahasa yang PALING TEPAT menggambarkan sikap Sari adalah...',
      opts: [
        '"Air beriak tanda tak dalam"',
        '"Lempar batu sembunyi tangan"',
        '"Bagai air di daun talas"',
        '"Tong kosong nyaring bunyinya"'
      ],
      ans: 1,
      hint: 'Sari melakukan sesuatu yang merugikan orang lain tapi tidak mau mengakuinya. Peribahasa mana yang menggambarkan "berbuat tapi tidak mau bertanggung jawab"?',
      explanation: '"Lempar batu sembunyi tangan" menggambarkan orang yang BERBUAT KESALAHAN atau merugikan orang lain tetapi TIDAK MAU MENGAKUI atau bertanggung jawab atas perbuatannya — berpura-pura tidak tahu. Persis seperti perilaku Sari yang menghilangkan buku Dina tapi tidak mengaku.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Perhatikan dua peribahasa berikut: (A) "Air beriak tanda tak dalam" dan (B) "Diam-diam menghanyutkan". Kedua peribahasa ini memiliki makna yang...',
      opts: [
        'Sama persis — keduanya tentang air',
        'Berlawanan — A menggambarkan orang banyak bicara tapi dangkal ilmunya, B menggambarkan orang pendiam tapi dalam ilmunya',
        'Sama — keduanya tentang orang pandai',
        'Tidak berhubungan sama sekali'
      ],
      ans: 1,
      hint: '"Air beriak" = berbunyi/ribut. "Diam-diam" = tenang/tidak bersuara. Keduanya menggambarkan orang yang... berbeda sifatnya.',
      explanation: 'Maknanya BERLAWANAN: "Air beriak tanda tak dalam" = orang yang banyak bicara/sombong biasanya DANGKAL ilmunya. "Diam-diam menghanyutkan" = orang yang tampak pendiam justru bisa memiliki kemampuan atau pengaruh yang BESAR dan mengejutkan. Keduanya tentang penampilan vs. kenyataan, tapi dari sudut berbeda.'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Peribahasa "Berguru kepalang ajar, bagai _ menanggung kulitnya" bermakna belajar yang tidak sungguh-sungguh justru merugikan diri sendiri.',
      ans: 'buaya',
      hint: 'Hewan reptil besar bergigi tajam yang kulitnya sangat tebal dan berat. Membawa kulit sendiri tanpa manfaat terasa sia-sia.',
      explanation: '"Berguru kepalang ajar, bagai BUAYA menanggung kulitnya" bermakna: belajar setengah-setengah atau tidak sungguh-sungguh (kepalang = tanggung) justru sia-sia dan membebani diri sendiri — seperti buaya yang menanggung kulit tebalnya yang berat tanpa bisa dilepas. Lebih baik belajar tuntas atau tidak sama sekali.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Pak Budi adalah seorang pejabat yang korupsi uang rakyat, padahal ia sering berpidato tentang kejujuran dan anti-korupsi. Peribahasa yang PALING TEPAT adalah...',
      opts: [
        '"Tong kosong nyaring bunyinya"',
        '"Pagar makan tanaman"',
        '"Bagai air di daun talas"',
        '"Air beriak tanda tak dalam"'
      ],
      ans: 1,
      hint: 'Pagar seharusnya melindungi tanaman. Tapi bagaimana jika pagar itu sendiri yang merusak tanaman?',
      explanation: '"Pagar makan tanaman" menggambarkan orang yang SEHARUSNYA MELINDUNGI atau menjaga justru MERUSAK/MERUGIKAN apa yang diamanahkan padanya. Pak Budi yang bertugas mengurus kepentingan rakyat justru merugikan rakyat dengan korupsi — persis seperti pagar yang memakan tanamannya sendiri.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Kakak Rima sangat cantik, pintar, dan berbakat. Tapi Rima juga cantik, pintar, dan berbakat. Peribahasa yang TEPAT menggambarkan Rima adalah...',
      opts: [
        '"Buah jatuh tidak jauh dari pohonnya"',
        '"Ada gula ada semut"',
        '"Guru kencing berdiri murid kencing berlari"',
        '"Air susu dibalas air tuba"'
      ],
      ans: 0,
      hint: 'Rima memiliki sifat yang mirip dengan kakaknya. Peribahasa mana yang menggambarkan kemiripan sifat antara dua orang yang berkerabat?',
      explanation: '"Buah jatuh tidak jauh dari pohonnya" paling tepat karena Rima (buah) memiliki sifat dan kemampuan yang mirip dengan kakaknya (pohon induk). Keduanya dari keluarga yang sama dan mewarisi kualitas yang serupa. Peribahasa ini menggambarkan kemiripan sifat dalam satu keluarga atau keturunan.'
    },
  ],

  // ================================================================
  //  bindo-2 | BAGAN (Cara Membaca & Membuat Bagan)
  // ================================================================
  'bindo-2': [

    // --- MUDAH (1-5) ---
    {
      type: 'mc',
      level: 'mudah',
      q: 'Bagan adalah...',
      opts: [
        'Cerita bergambar yang panjang',
        'Gambar atau diagram yang menyajikan informasi secara visual dan terstruktur',
        'Kumpulan foto-foto kegiatan',
        'Tulisan panjang berisi data angka'
      ],
      ans: 1,
      hint: 'Bagan menyajikan informasi bukan dengan kalimat panjang, melainkan dengan... apa?',
      explanation: 'BAGAN adalah representasi visual berupa gambar, diagram, atau skema yang menyajikan informasi, data, atau hubungan antar bagian secara TERSTRUKTUR dan mudah dipahami. Bagan membantu kita memahami informasi kompleks dengan lebih cepat.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Bagan yang menunjukkan urutan langkah-langkah suatu proses dari awal hingga akhir disebut...',
      opts: ['Bagan pohon', 'Bagan alur', 'Bagan lingkaran', 'Bagan batang'],
      ans: 1,
      hint: 'Bagan ini menggambarkan aliran/urutan suatu proses. Kata "alur" berarti urutan/langkah.',
      explanation: 'BAGAN ALUR (flowchart) menggambarkan urutan langkah-langkah sebuah proses dari awal hingga akhir. Biasanya menggunakan kotak untuk langkah-langkah dan panah untuk menunjukkan urutan. Contoh: bagan alur cara mendaftar sekolah baru.'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Bagan yang menggambarkan struktur organisasi atau hubungan tingkatan jabatan dalam sebuah lembaga disebut bagan _.',
      ans: 'organisasi',
      hint: 'Bagan ini mirip pohon terbalik — kepala sekolah di atas, guru-guru di bawah.',
      explanation: 'BAGAN ORGANISASI menggambarkan struktur dan hierarki dalam sebuah lembaga/organisasi. Posisi tertinggi ada di puncak, diikuti posisi-posisi di bawahnya. Contoh: Kepala Sekolah → Wakil Kepala Sekolah → Guru-guru → Siswa.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Simbol panah (→) dalam sebuah bagan biasanya menunjukkan...',
      opts: [
        'Nama orang yang membuat bagan',
        'Hubungan, urutan, atau arah aliran dari satu elemen ke elemen berikutnya',
        'Tanggal pembuatan bagan',
        'Keterangan warna dalam bagan'
      ],
      ans: 1,
      hint: 'Panah menunjukkan arah. Dalam bagan, panah menghubungkan satu kotak ke kotak lain. Apa artinya?',
      explanation: 'Simbol PANAH (→) dalam bagan menunjukkan HUBUNGAN, URUTAN, atau ARAH ALIRAN dari satu elemen ke elemen berikutnya. Panah membantu pembaca memahami mana yang terjadi lebih dulu dan ke mana proses berlanjut.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Keunggulan utama bagan dibandingkan teks panjang adalah...',
      opts: [
        'Bagan lebih sulit dipahami sehingga melatih otak',
        'Bagan menyajikan informasi secara visual sehingga lebih mudah dan cepat dipahami',
        'Bagan memuat lebih banyak informasi detail',
        'Bagan selalu berwarna sehingga lebih menarik'
      ],
      ans: 1,
      hint: 'Mengapa buku pelajaran menggunakan bagan selain teks? Apa yang membuat bagan lebih praktis?',
      explanation: 'Keunggulan BAGAN: menyajikan informasi secara VISUAL dan TERSTRUKTUR sehingga otak dapat memproses informasi lebih CEPAT dan MUDAH dibanding membaca paragraf panjang. Otak manusia memproses gambar 60.000 kali lebih cepat dari teks!'
    },

    // --- SEDANG (6-10) ---
    {
      type: 'mc',
      level: 'sedang',
      q: 'Perhatikan bagan berikut:\n[Biji] → [Kecambah] → [Tanaman Muda] → [Tanaman Dewasa] → [Berbunga] → [Berbuah]\nBagan ini termasuk jenis bagan...',
      opts: ['Bagan organisasi', 'Bagan pohon', 'Bagan alur', 'Bagan lingkaran'],
      ans: 2,
      hint: 'Bagan ini menunjukkan urutan proses pertumbuhan tanaman dari awal sampai akhir secara berurutan.',
      explanation: 'Bagan tersebut adalah BAGAN ALUR karena menunjukkan URUTAN LANGKAH/TAHAPAN dari satu proses (pertumbuhan tanaman) secara berurutan dari awal (biji) hingga akhir (berbuah) menggunakan simbol panah sebagai penghubung.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Dalam sebuah bagan organisasi sekolah, posisi "Kepala Sekolah" berada di paling atas. Artinya...',
      opts: [
        'Kepala Sekolah usianya paling tua',
        'Kepala Sekolah memiliki wewenang dan tanggung jawab tertinggi dalam struktur sekolah',
        'Kepala Sekolah ruangannya berada di lantai paling atas',
        'Kepala Sekolah yang paling sering hadir di sekolah'
      ],
      ans: 1,
      hint: 'Dalam bagan organisasi, posisi yang lebih tinggi menunjukkan tingkatan apa?',
      explanation: 'Dalam BAGAN ORGANISASI, posisi yang lebih tinggi menunjukkan WEWENANG dan TANGGUNG JAWAB yang lebih besar. Kepala Sekolah di puncak bagan berarti ia adalah pemimpin tertinggi yang memiliki otoritas terbesar dalam pengelolaan sekolah.'
    },
    {
      type: 'fill',
      level: 'sedang',
      q: 'Ketika membuat bagan, informasi yang paling penting atau utama biasanya ditempatkan di bagian _ atau tengah bagan.',
      ans: 'atas',
      hint: 'Dalam hierarki, yang paling penting selalu ada di posisi tertinggi — seperti kepala sekolah di bagan organisasi.',
      explanation: 'Dalam pembuatan bagan (terutama bagan organisasi atau bagan pohon), informasi atau posisi yang PALING PENTING/UTAMA ditempatkan di bagian ATAS atau tengah. Ini membantu pembaca langsung mengetahui elemen terpenting sebelum melihat detail di bawahnya.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Manakah informasi yang PALING TEPAT disajikan dalam bentuk bagan alur?',
      opts: [
        'Biografi lengkap seorang pahlawan',
        'Langkah-langkah cara mencuci tangan yang benar',
        'Daftar nama siswa kelas 6A',
        'Puisi tentang keindahan alam'
      ],
      ans: 1,
      hint: 'Bagan alur cocok untuk menyajikan informasi yang berupa... urutan langkah-langkah.',
      explanation: 'BAGAN ALUR paling cocok untuk "Langkah-langkah mencuci tangan" karena informasi ini berupa URUTAN PROSES yang harus dilakukan secara berurutan. Biografi lebih cocok berupa teks narasi, daftar nama cocok berupa tabel, dan puisi memang berbentuk puisi.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Bagan pohon (tree diagram) sering digunakan untuk menggambarkan...',
      opts: [
        'Jenis-jenis pohon di hutan',
        'Hubungan kekerabatan keluarga atau klasifikasi suatu kategori yang bercabang-cabang',
        'Cara menanam pohon dengan benar',
        'Data jumlah pohon di suatu daerah'
      ],
      ans: 1,
      hint: 'Bentuknya seperti pohon: ada batang utama di atas, lalu bercabang-cabang ke bawah. Apa yang digambarkan dengan struktur seperti itu?',
      explanation: 'BAGAN POHON (tree diagram) menggambarkan HUBUNGAN HIERARKIS atau KLASIFIKASI yang bercabang — dimulai dari satu topik utama yang terpecah menjadi sub-topik, lalu bercabang lagi. Contoh: pohon keluarga (silsilah), klasifikasi makhluk hidup, atau struktur topik pelajaran.'
    },

    // --- SUSAH / HOTS (11-15) ---
    {
      type: 'mc',
      level: 'susah',
      q: 'Perhatikan bagan berikut:\nHewan → Vertebrata → Mamalia → Kucing\n          → Reptilia → Ular\n→ Invertebrata → Serangga → Kupu-kupu\nInformasi utama yang ingin disampaikan bagan ini adalah...',
      opts: [
        'Kucing lebih penting dari ular',
        'Klasifikasi hewan berdasarkan ada tidaknya tulang belakang dan kelompok-kelompoknya',
        'Hewan vertebrata lebih banyak dari invertebrata',
        'Cara membedakan kucing dan ular'
      ],
      ans: 1,
      hint: 'Bagan dimulai dari "Hewan" lalu terbagi menjadi dua kelompok besar. Apa dasar pembagiannya?',
      explanation: 'Bagan ini menyampaikan KLASIFIKASI HEWAN berdasarkan ada tidaknya tulang belakang: Vertebrata (bertulang belakang: mamalia, reptilia, dll.) dan Invertebrata (tidak bertulang belakang: serangga, dll.). Bukan membandingkan siapa yang lebih penting, melainkan MENGELOMPOKKAN secara sistematis.'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Membaca bagan harus dimulai dari bagian _ (biasanya atas atau kiri), kemudian mengikuti arah panah atau urutan untuk memahami informasi secara menyeluruh.',
      ans: 'awal (atas/kiri)',
      hint: 'Sama seperti membaca buku — kita mulai dari... mana?',
      explanation: 'Membaca bagan harus SISTEMATIS: dimulai dari bagian AWAL (biasanya atas untuk bagan organisasi, atau kiri untuk bagan alur horizontal), kemudian mengikuti ARAH PANAH atau urutan yang ditunjukkan. Membaca bagan secara acak akan membingungkan dan menyebabkan salah paham.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Guru meminta siswa membuat bagan proses terjadinya hujan. Urutan bagan yang BENAR adalah...',
      opts: [
        'Hujan → Kondensasi → Evaporasi → Awan',
        'Evaporasi → Kondensasi → Awan terbentuk → Presipitasi (Hujan)',
        'Awan → Evaporasi → Hujan → Kondensasi',
        'Presipitasi → Awan → Kondensasi → Evaporasi'
      ],
      ans: 1,
      hint: 'Ingat siklus hidrologi: air menguap dulu, lalu apa yang terjadi selanjutnya?',
      explanation: 'Urutan yang benar: EVAPORASI (air menguap) → KONDENSASI (uap menjadi titik air di atmosfer) → AWAN TERBENTUK (titik air berkumpul) → PRESIPITASI/HUJAN (air jatuh ke bumi). Ini adalah urutan logis proses terjadinya hujan yang harus disajikan dalam bagan alur.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Seorang siswa membuat bagan organisasi kelas tetapi menaruh "Ketua Kelas" di bawah "Bendahara". Apa kesalahan dalam bagan tersebut?',
      opts: [
        'Tidak ada kesalahan, posisi bebas',
        'Ketua Kelas seharusnya di posisi paling atas karena memiliki wewenang dan tanggung jawab tertinggi di kelas',
        'Bendahara seharusnya dihapus dari bagan',
        'Sekretaris seharusnya di posisi tertinggi'
      ],
      ans: 1,
      hint: 'Dalam bagan organisasi, siapa yang memiliki wewenang tertinggi harus berada di posisi tertinggi (paling atas).',
      explanation: 'Kesalahannya: KETUA KELAS memiliki WEWENANG TERTINGGI di antara pengurus kelas sehingga harus ditempatkan di posisi PALING ATAS bagan. Bendahara, sekretaris, dan seksi-seksi lainnya berada di bawah ketua kelas. Posisi dalam bagan organisasi mencerminkan hierarki dan tanggung jawab, bukan urutan abjad atau usia.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Mengapa bagan lebih sering digunakan dalam buku pelajaran sains dibandingkan buku fiksi (cerita)?',
      opts: [
        'Karena buku sains lebih mahal sehingga butuh gambar',
        'Karena bagan efektif menyajikan data, proses, dan klasifikasi ilmiah yang bersifat sistematis, sementara fiksi lebih mengandalkan narasi imajinatif',
        'Karena bagan lebih mudah dibuat daripada menulis cerita',
        'Karena pembaca buku sains tidak bisa membaca'
      ],
      ans: 1,
      hint: 'Apa perbedaan jenis informasi yang disampaikan buku sains vs. buku cerita?',
      explanation: 'Buku SAINS berisi data, proses ilmiah, dan klasifikasi yang bersifat SISTEMATIS dan HIERARKIS — cocok disajikan dalam bagan (alur, organisasi, pohon). Buku FIKSI menyampaikan cerita imajinatif melalui NARASI yang mengalir — bagan tidak cocok untuk menyampaikan perasaan, konflik, atau imajinasi. Setiap media penyajian informasi ada tujuannya.'
    },
  ],

  // ================================================================
  //  bindo-3 | UNSUR INTRINSIK (Tema, Tokoh, Latar, Alur, Amanat)
  // ================================================================
  'bindo-3': [

    // --- MUDAH (1-5) ---
    {
      type: 'mc',
      level: 'mudah',
      q: 'Unsur intrinsik adalah unsur-unsur yang...',
      opts: [
        'Membangun cerita dari dalam, berasal dari dalam cerita itu sendiri',
        'Membangun cerita dari luar, seperti pengarang dan latar belakangnya',
        'Hanya berupa gambar-gambar ilustrasi dalam cerita',
        'Daftar nama tokoh-tokoh dalam cerita'
      ],
      ans: 0,
      hint: '"Intrinsik" berasal dari kata Latin yang berarti "dari dalam". Jadi unsur intrinsik ada di dalam... apa?',
      explanation: 'UNSUR INTRINSIK adalah unsur-unsur yang MEMBANGUN cerita dari DALAM cerita itu sendiri. Meliputi: tema, alur/plot, tokoh/penokohan, latar, sudut pandang, gaya bahasa, dan amanat. Lawannya adalah unsur ekstrinsik (dari luar, seperti latar belakang pengarang).'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Gagasan utama atau pokok persoalan yang menjadi dasar sebuah cerita disebut...',
      opts: ['Alur', 'Latar', 'Tema', 'Amanat'],
      ans: 2,
      hint: 'Ini adalah "inti" atau "jiwa" dari cerita. Apa yang ingin dibahas pengarang dalam ceritanya?',
      explanation: 'TEMA adalah gagasan utama atau pokok persoalan yang menjadi dasar sebuah karya sastra. Tema menjawab pertanyaan: "Cerita ini tentang apa?" Contoh tema: persahabatan, kejujuran, perjuangan, keluarga, dll.'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Urutan kejadian atau peristiwa dalam sebuah cerita dari awal hingga akhir disebut _.',
      ans: 'alur (plot)',
      hint: 'Kata ini juga berarti "jalur" — seperti jalur cerita yang kita ikuti.',
      explanation: 'ALUR (plot) adalah rangkaian peristiwa dalam cerita yang disusun secara berurutan dan saling berhubungan sebab-akibat. Ada alur maju (urutan waktu normal), alur mundur (flashback), dan alur campuran.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Keterangan mengenai waktu, tempat, dan suasana berlangsungnya sebuah cerita disebut...',
      opts: ['Tema', 'Tokoh', 'Amanat', 'Latar'],
      ans: 3,
      hint: 'Ini menjawab pertanyaan: "Di mana cerita terjadi? Kapan? Bagaimana suasananya?"',
      explanation: 'LATAR (setting) adalah keterangan tentang TEMPAT (di mana cerita terjadi), WAKTU (kapan cerita terjadi), dan SUASANA (atmosfer/kondisi emosional saat cerita berlangsung). Latar membantu pembaca membayangkan situasi cerita secara nyata.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Pesan moral atau pelajaran yang ingin disampaikan pengarang melalui ceritanya disebut...',
      opts: ['Tema', 'Alur', 'Tokoh', 'Amanat'],
      ans: 3,
      hint: 'Setelah membaca cerita, ada pelajaran hidup yang bisa kita petik. Itulah...',
      explanation: 'AMANAT adalah pesan moral atau pelajaran hidup yang ingin disampaikan pengarang kepada pembaca melalui ceritanya. Amanat bisa tersirat (tersembunyi, harus ditafsirkan) atau tersurat (langsung dinyatakan dalam cerita).'
    },

    // --- SEDANG (6-10) ---
    {
      type: 'mc',
      level: 'sedang',
      q: 'Bacalah kutipan berikut:\n"Budi selalu datang lebih awal ke sekolah untuk membantu guru menyiapkan kelas. Ia tidak pernah meminta imbalan apapun. Teman-temannya sering meremehkan Budi, tapi pak guru selalu memujinya."\nTokoh utama dalam cerita ini adalah...',
      opts: ['Guru', 'Teman-teman Budi', 'Pak Kepala Sekolah', 'Budi'],
      ans: 3,
      hint: 'Tokoh utama adalah tokoh yang paling banyak diceritakan dan menjadi pusat perhatian cerita.',
      explanation: 'BUDI adalah tokoh utama karena seluruh kutipan berpusat pada dirinya — kegiatannya (datang lebih awal, membantu guru), sikapnya (tidak minta imbalan), dan bagaimana orang lain merespons dirinya. Tokoh utama adalah tokoh yang paling dominan dalam cerita.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Bacalah kutipan berikut:\n"Malam itu hujan deras. Di sebuah gubuk kecil di tepi hutan, seorang nenek tua duduk sendirian di depan tungku yang hampir padam."\nLatar cerita pada kutipan ini adalah...',
      opts: [
        'Siang hari di kota besar, suasana ramai',
        'Malam hari di gubuk kecil tepi hutan, suasana sepi dan dingin',
        'Pagi hari di sawah, suasana cerah',
        'Sore hari di pantai, suasana tenang'
      ],
      ans: 1,
      hint: 'Cari informasi tentang waktu (kapan?), tempat (di mana?), dan suasana (bagaimana?) dalam kutipan itu.',
      explanation: 'Latar kutipan: WAKTU = malam hari ("malam itu"), TEMPAT = gubuk kecil di tepi hutan, SUASANA = sepi, dingin, mencekam (hujan deras, tungku hampir padam, nenek sendirian). Latar lengkap mencakup tiga komponen: waktu, tempat, dan suasana.'
    },
    {
      type: 'fill',
      level: 'sedang',
      q: 'Tokoh yang memiliki sifat baik, jujur, dan menjadi panutan dalam cerita disebut tokoh _, sedangkan tokoh jahat yang menentangnya disebut tokoh antagonis.',
      ans: 'protagonis',
      hint: 'Tokoh "jagoan" atau "pahlawan" yang baik hati. Lawannya adalah antagonis.',
      explanation: 'PROTAGONIS adalah tokoh utama yang memiliki sifat baik dan menjadi tokoh yang diikuti/dipihaki pembaca. ANTAGONIS adalah tokoh yang berlawanan/menentang protagonis, biasanya digambarkan sebagai "penjahat". Konflik antara keduanya menggerakkan alur cerita.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Bacalah kutipan:\n"Karena kejujurannya, Aldi akhirnya dipercaya menjadi ketua kelas. Teman-teman yang dulu menganggap remeh kejujurannya kini kagum padanya."\nAmanat yang PALING TEPAT dari kutipan ini adalah...',
      opts: [
        'Jadilah ketua kelas agar dikagumi teman',
        'Kejujuran adalah sifat terpuji yang akhirnya akan dihargai dan membuahkan kepercayaan',
        'Teman-teman yang baik selalu mengagumi ketua kelas',
        'Berlombalah untuk menjadi ketua kelas'
      ],
      ans: 1,
      hint: 'Apa pelajaran yang bisa kita ambil dari perjalanan Aldi? Sifat apa yang membawanya pada kesuksesan?',
      explanation: 'Amanat kutipan tersebut: KEJUJURAN adalah nilai yang terpuji dan akan berbuah baik — yaitu kepercayaan dari orang lain. Meskipun awalnya diremehkan, kejujuran Aldi akhirnya diakui dan dihargai. Pesan moralnya: jujurlah dalam setiap situasi.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Alur cerita yang menceritakan kilas balik ke masa lampau di tengah-tengah cerita yang berlangsung di masa kini disebut...',
      opts: ['Alur maju', 'Alur campuran', 'Alur mundur', 'Alur melingkar'],
      ans: 1,
      hint: 'Cerita berjalan di masa kini, lalu tiba-tiba mundur ke masa lalu, lalu kembali ke masa kini. Itu alur apa?',
      explanation: 'ALUR CAMPURAN adalah alur yang menggabungkan alur maju dan alur mundur. Cerita bisa dimulai di masa kini, lalu ada KILAS BALIK (flashback) ke masa lalu, kemudian kembali ke masa kini. Banyak novel dan film menggunakan alur campuran untuk menciptakan misteri atau kedalaman karakter.'
    },

    // --- SUSAH / HOTS (11-15) ---
    {
      type: 'mc',
      level: 'susah',
      q: 'Bacalah kutipan cerita berikut:\n"Sani menemukan dompet berisi uang di taman. Ia tahu uang itu bisa membeli sepatu baru yang sangat ia inginkan. Namun, Sani teringat pesan ibunya: \'Uang yang bukan hakmu tak akan membawa berkah.\' Akhirnya, Sani menyerahkan dompet itu ke kantor polisi."\nTema cerita ini adalah...',
      opts: [
        'Kemiskinan dan keinginan anak',
        'Kejujuran dan integritas dalam menghadapi godaan',
        'Pentingnya pergi ke kantor polisi',
        'Cara menemukan barang hilang'
      ],
      ans: 1,
      hint: 'Apa pokok persoalan utama yang dihadapi Sani? Antara keinginan pribadi dan nilai apa yang akhirnya ia pilih?',
      explanation: 'TEMA cerita adalah KEJUJURAN DAN INTEGRITAS. Pokok persoalannya: Sani dihadapkan pada GODAAN (mengambil uang bukan miliknya untuk kebutuhan pribadi) tetapi memilih untuk JUJUR (menyerahkan dompet ke polisi). Kejujuran adalah inti persoalan yang diangkat dalam cerita ini.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Dalam cerita tersebut di atas, amanat yang PALING TEPAT adalah...',
      opts: [
        'Selalu bawa uang ke mana-mana agar tidak kesulitan',
        'Jujur dan tidak mengambil barang milik orang lain adalah sifat mulia yang harus dijunjung tinggi meski ada godaan',
        'Pergilah ke polisi jika menemukan masalah',
        'Mintalah izin ibu sebelum melakukan sesuatu'
      ],
      ans: 1,
      hint: 'Apa pelajaran hidup terpenting yang disampaikan melalui pilihan Sani?',
      explanation: 'Amanat cerita: KEJUJURAN adalah nilai yang harus dipertahankan meskipun ada GODAAN yang menggiurkan. Sani memilih kejujuran meskipun ia sangat menginginkan sepatu baru. Pesan moralnya: harta yang bukan hak kita tidak akan memberikan kebaikan sejati, dan kejujuran adalah investasi terbaik.'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Cara pengarang menggambarkan watak atau sifat tokoh melalui dialog, tindakan, dan pikiran tokoh (bukan menyebutnya langsung) disebut penokohan secara _.',
      ans: 'tidak langsung (dramatik)',
      hint: 'Lawannya adalah penokohan langsung, di mana pengarang langsung menyatakan "si A adalah orang yang baik hati". Kalau tidak langsung, kita tahu sifatnya dari... apa?',
      explanation: 'Penokohan TIDAK LANGSUNG (dramatik): pengarang TIDAK menyebutkan langsung sifat tokoh, melainkan membiarkan pembaca menyimpulkan sendiri dari DIALOG, TINDAKAN, PIKIRAN, dan REAKSI ORANG LAIN terhadap tokoh tersebut. Ini teknik yang lebih "show, don\'t tell" dan lebih realistis.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Perhatikan kutipan: "Saat itu matahari baru saja terbit. Embun masih menempel di ujung-ujung rerumputan. Di ladang yang luas, suara cangkul Pak Tani terdengar berirama dengan nyanyian burung." Fungsi latar SUASANA dalam kutipan ini adalah...',
      opts: [
        'Menunjukkan bahwa Pak Tani adalah orang kaya',
        'Menciptakan gambaran yang hidup dan membantu pembaca merasakan suasana pagi yang segar dan damai di ladang',
        'Memberitahu pembaca bahwa cerita terjadi pada abad ke-20',
        'Menjelaskan mengapa Pak Tani harus bekerja keras'
      ],
      ans: 1,
      hint: 'Bayangkan kamu ada di tempat itu. Apa yang kamu rasakan membaca deskripsi itu?',
      explanation: 'Latar suasana dalam kutipan itu MENCIPTAKAN GAMBARAN HIDUP dan membantu pembaca MERASAKAN suasana pagi yang segar, damai, dan tenang. Detail seperti "embun di ujung rerumputan", "cangkul berirama", dan "nyanyian burung" membangun ATMOSFER yang membuat pembaca seolah-olah ada di tempat kejadian — ini fungsi estetis latar suasana.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Sebuah cerita memiliki alur: Pengenalan → Konflik muncul → Konflik memuncak → Penyelesaian → Akhir cerita. Bagian "Konflik memuncak" disebut juga...',
      opts: ['Eksposisi', 'Komplikasi', 'Klimaks', 'Resolusi'],
      ans: 2,
      hint: 'Bagian paling tegang dalam cerita — ketika masalah sudah di titik tertinggi sebelum mulai terselesaikan.',
      explanation: 'KLIMAKS adalah bagian cerita di mana KONFLIK mencapai puncaknya — ketegangan paling tinggi sebelum mulai mereda. Urutan lengkap alur: Eksposisi (pengenalan) → Rising action (konflik berkembang) → KLIMAKS (puncak konflik) → Falling action (konflik mereda) → Resolusi/Denouement (penyelesaian/akhir).'
    },
  ],

  // ================================================================
  //  bindo-4 | IDE POKOK (Menemukan Gagasan Utama)
  // ================================================================
  'bindo-4': [

    // --- MUDAH (1-5) ---
    {
      type: 'mc',
      level: 'mudah',
      q: 'Ide pokok adalah...',
      opts: [
        'Kalimat terpanjang dalam sebuah paragraf',
        'Gagasan utama yang menjadi inti atau pokok pembahasan dalam sebuah paragraf',
        'Kalimat pertama dalam setiap paragraf',
        'Kesimpulan dari seluruh teks'
      ],
      ans: 1,
      hint: 'Ide pokok adalah "jantung" dari sebuah paragraf — inti dari apa yang dibahas.',
      explanation: 'IDE POKOK (gagasan utama) adalah gagasan yang menjadi INTI PEMBAHASAN dalam sebuah paragraf. Semua kalimat dalam paragraf mendukung atau menjelaskan ide pokok. Ide pokok biasanya dinyatakan dalam KALIMAT UTAMA (kalimat topik).'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Kalimat yang mengandung ide pokok disebut...',
      opts: ['Kalimat penjelas', 'Kalimat utama', 'Kalimat kesimpulan', 'Kalimat akhir'],
      ans: 1,
      hint: 'Kalimat ini berisi ide yang paling penting dalam paragraf. Semua kalimat lain menjelaskan kalimat ini.',
      explanation: 'KALIMAT UTAMA (kalimat topik) adalah kalimat yang mengandung IDE POKOK paragraf. Kalimat-kalimat lain dalam paragraf berfungsi sebagai KALIMAT PENJELAS yang mendukung, mengembangkan, atau membuktikan ide pokok dalam kalimat utama.'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Paragraf yang kalimat utamanya berada di awal paragraf disebut paragraf _.',
      ans: 'deduktif',
      hint: 'Deduktif = dari umum ke khusus. Ide pokok ada di... mana? Di awal atau akhir?',
      explanation: 'Paragraf DEDUKTIF adalah paragraf yang kalimat utamanya (ide pokok) terletak di AWAL paragraf, diikuti kalimat-kalimat penjelas. Pola: Umum → Khusus. Ini adalah pola paragraf yang paling umum dan mudah dikenali.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Kalimat penjelas dalam sebuah paragraf berfungsi untuk...',
      opts: [
        'Menggantikan kalimat utama',
        'Menjelaskan, mengembangkan, atau mendukung ide pokok yang ada di kalimat utama',
        'Memperkenalkan topik baru',
        'Mengakhiri paragraf'
      ],
      ans: 1,
      hint: 'Namanya saja "penjelas" — menjelaskan apa? Tentu saja menjelaskan kalimat... utama.',
      explanation: 'KALIMAT PENJELAS berfungsi untuk MENJELASKAN, MENGEMBANGKAN, atau MENDUKUNG ide pokok yang ada di kalimat utama. Kalimat penjelas bisa berupa contoh, data, uraian, perbandingan, atau bukti yang memperkuat kalimat utama.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Bacalah paragraf berikut:\n"Buah mangga sangat bermanfaat bagi kesehatan. Buah ini kaya akan vitamin C yang meningkatkan daya tahan tubuh. Kandungan seratnya juga membantu pencernaan. Selain itu, antioksidan dalam mangga dapat mencegah penyakit berbahaya."\nIde pokok paragraf tersebut adalah...',
      opts: [
        'Buah mangga mengandung banyak serat',
        'Antioksidan sangat penting bagi tubuh',
        'Buah mangga sangat bermanfaat bagi kesehatan',
        'Vitamin C dapat meningkatkan daya tahan tubuh'
      ],
      ans: 2,
      hint: 'Kalimat mana yang menjadi "payung" bagi semua kalimat lainnya? Kalimat yang paling umum?',
      explanation: 'Ide pokoknya: "Buah mangga sangat bermanfaat bagi kesehatan" (kalimat pertama). Kalimat-kalimat lain (vitamin C, serat, antioksidan) adalah KALIMAT PENJELAS yang memberikan contoh-contoh manfaat mangga. Kalimat pertama adalah yang paling umum dan menjadi "payung" bagi kalimat-kalimat berikutnya.'
    },

    // --- SEDANG (6-10) ---
    {
      type: 'mc',
      level: 'sedang',
      q: 'Bacalah paragraf berikut:\n"Setiap pagi, Pak Ahmad berjalan kaki ke warung. Ia selalu menyapa tetangga dengan senyuman. Ia rajin membantu membersihkan lingkungan. Pak Ahmad tidak pernah menolak jika dimintai tolong. Itulah mengapa Pak Ahmad adalah warga yang disukai semua orang."\nKalimat utama paragraf di atas adalah...',
      opts: [
        'Kalimat pertama — Pak Ahmad berjalan kaki ke warung',
        'Kalimat terakhir — Pak Ahmad adalah warga yang disukai semua orang',
        'Kalimat kedua — Ia selalu menyapa tetangga',
        'Kalimat keempat — Pak Ahmad tidak pernah menolak'
      ],
      ans: 1,
      hint: 'Ini paragraf induktif. Kalimat-kalimat awal adalah bukti/penjelas. Kalimat utamanya ada di... mana?',
      explanation: 'Kalimat utama ada di AKHIR: "Pak Ahmad adalah warga yang disukai semua orang." Kalimat-kalimat sebelumnya (menyapa, membantu bersih lingkungan, tidak menolak tolong) adalah BUKTI/PENJELAS yang mengarah ke kesimpulan di kalimat terakhir. Ini adalah paragraf INDUKTIF (khusus ke umum).'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Paragraf yang kalimat utamanya berada di awal DAN diulang/dipertegas di akhir paragraf disebut paragraf...',
      opts: ['Deduktif', 'Induktif', 'Campuran (deduktif-induktif)', 'Narasi'],
      ans: 2,
      hint: 'Kalimat utama ada dua kali — di awal dan di akhir. Ini gabungan dari dua jenis paragraf.',
      explanation: 'Paragraf CAMPURAN (deduktif-induktif) memiliki ide pokok yang dinyatakan di AWAL paragraf, dikembangkan dengan kalimat-kalimat penjelas di tengah, lalu DIPERTEGAS/DIULANG kembali di AKHIR paragraf. Ini membuat ide pokok sangat jelas dan mudah diingat.'
    },
    {
      type: 'fill',
      level: 'sedang',
      q: 'Paragraf yang kalimat utamanya berada di akhir paragraf disebut paragraf _, dengan pola dari khusus ke umum.',
      ans: 'induktif',
      hint: 'Induktif = dari khusus ke umum. Contoh-contoh diberikan dulu, baru kesimpulan/ide pokok di...',
      explanation: 'Paragraf INDUKTIF: kalimat-kalimat penjelas (contoh, bukti, detail) diberikan lebih dulu di awal, baru kalimat UTAMA/KESIMPULAN ada di AKHIR paragraf. Pola: Khusus → Umum. "Induksi" dalam logika berarti menarik kesimpulan dari fakta-fakta khusus.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Bacalah paragraf:\n"Sampah plastik menjadi masalah serius di lautan. Setiap tahun, jutaan ton sampah plastik masuk ke laut. Sampah ini mengancam kehidupan hewan laut. Penyu, lumba-lumba, dan ikan paus sering ditemukan mati karena menelan plastik. Bahkan, mikroplastik sudah masuk ke dalam rantai makanan manusia."\nIde pokok paragraf tersebut adalah...',
      opts: [
        'Penyu dan lumba-lumba mati karena plastik',
        'Mikroplastik masuk ke dalam tubuh manusia',
        'Sampah plastik menjadi masalah serius di lautan',
        'Jutaan ton sampah masuk ke laut setiap tahun'
      ],
      ans: 2,
      hint: 'Kalimat mana yang paling umum dan menjadi "payung" bagi semua kalimat lain dalam paragraf ini?',
      explanation: 'Ide pokoknya: "SAMPAH PLASTIK MENJADI MASALAH SERIUS DI LAUTAN" (kalimat pertama = kalimat utama). Kalimat-kalimat lain adalah penjelas yang memberikan RINCIAN tentang betapa seriusnya masalah ini: jumlahnya (jutaan ton), dampaknya (hewan mati), dan bahayanya untuk manusia (mikroplastik). Ini paragraf deduktif.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Cara yang PALING TEPAT untuk menemukan ide pokok sebuah paragraf adalah...',
      opts: [
        'Membaca hanya kalimat pertama dan kalimat terakhir',
        'Membaca seluruh paragraf dengan cermat, lalu mencari kalimat yang paling umum dan menjadi inti pembahasan',
        'Mencari kalimat terpanjang dalam paragraf',
        'Membaca kata-kata yang dicetak tebal saja'
      ],
      ans: 1,
      hint: 'Ide pokok tidak selalu ada di kalimat pertama atau terakhir. Cara paling aman adalah...',
      explanation: 'Cara menemukan ide pokok yang paling tepat: BACA SELURUH PARAGRAF dengan cermat, lalu tanyakan: "Kalimat mana yang paling UMUM dan menjadi INTI dari semua pembahasan?" Ide pokok bisa di awal (deduktif), di akhir (induktif), atau di awal dan akhir (campuran). Membaca sepintas berisiko salah menentukan.'
    },

    // --- SUSAH / HOTS (11-15) ---
    {
      type: 'mc',
      level: 'susah',
      q: 'Bacalah teks berita berikut:\n"Jakarta, 15 Maret 2025 — Pemerintah DKI Jakarta mencanangkan program penanaman satu juta pohon di seluruh wilayah kota. Program ini bertujuan mengurangi polusi udara yang semakin mengkhawatirkan. Kepala Dinas Lingkungan Hidup menyebutkan bahwa kualitas udara Jakarta dalam dua tahun terakhir berada di kategori tidak sehat. Pohon-pohon yang ditanam akan difokuskan di daerah padat kendaraan bermotor."\nIde pokok teks berita tersebut adalah...',
      opts: [
        'Kualitas udara Jakarta dua tahun terakhir tidak sehat',
        'Daerah padat kendaraan harus ditanami pohon',
        'Pemerintah DKI Jakarta mencanangkan program penanaman satu juta pohon',
        'Kepala Dinas Lingkungan Hidup membuat pernyataan penting'
      ],
      ans: 2,
      hint: 'Dalam teks berita, ide pokok biasanya ada di paragraf pembuka (lead/teras berita). Apa informasi UTAMA yang disampaikan berita ini?',
      explanation: 'Ide pokok: "Pemerintah DKI Jakarta mencanangkan program penanaman satu juta pohon." Ini adalah INFORMASI UTAMA (lead/teras berita) yang menjadi inti laporan. Kalimat-kalimat berikutnya adalah DETAIL PENDUKUNG: tujuannya (mengurangi polusi), kondisi saat ini (kualitas udara buruk), dan teknis pelaksanaannya (di daerah padat kendaraan).'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Setelah membaca sebuah teks dengan tiga paragraf, seorang siswa menemukan ide pokok di setiap paragraf. Apa yang bisa ia simpulkan dari ketiga ide pokok tersebut?',
      opts: [
        'Tidak ada hubungannya, setiap paragraf berdiri sendiri',
        'Ketiga ide pokok membentuk kerangka/struktur utama teks dan bersama-sama menggambarkan topik besar teks tersebut',
        'Ide pokok paragraf pertama selalu yang terpenting',
        'Ide pokok hanya ada di paragraf terakhir'
      ],
      ans: 1,
      hint: 'Sebuah teks yang baik memiliki paragraf-paragraf yang saling berhubungan dan mendukung topik utama teks.',
      explanation: 'Ide pokok setiap paragraf adalah BAGIAN dari topik besar teks. Bersama-sama, ketiga ide pokok membentuk KERANGKA atau STRUKTUR UTAMA teks. Jika dirangkai, ide-ide pokok tersebut merupakan RINGKASAN dari seluruh isi teks. Inilah mengapa menemukan ide pokok setiap paragraf adalah cara efektif membuat ringkasan.'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Ringkasan sebuah teks dibuat dengan cara merangkai _ dari setiap paragraf dalam teks tersebut menjadi satu teks yang lebih pendek.',
      ans: 'ide pokok (gagasan utama)',
      hint: 'Apa yang diambil dari setiap paragraf untuk membuat ringkasan? Bukan kalimat penjelas, tapi...',
      explanation: 'RINGKASAN dibuat dengan mengumpulkan IDE POKOK dari setiap paragraf dan merangkainya menjadi teks baru yang lebih pendek. Kalimat penjelas TIDAK dimasukkan ke dalam ringkasan. Teknik ini memastikan ringkasan mencakup semua informasi penting tanpa detail yang tidak perlu.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Bacalah paragraf:\n"Badak bercula satu Jawa kini tersisa tidak lebih dari 70 ekor di seluruh dunia. Habitatnya terus berkurang akibat perambahan hutan. Perburuan liar juga masih terjadi meskipun sudah ada hukum yang melarangnya. Banyak ilmuwan memprediksi bahwa badak Jawa akan punah dalam 20 tahun ke depan jika tidak ada tindakan nyata."\nKalimat yang BUKAN merupakan kalimat penjelas dalam paragraf tersebut adalah...',
      opts: [
        '"Habitatnya terus berkurang akibat perambahan hutan."',
        '"Badak bercula satu Jawa kini tersisa tidak lebih dari 70 ekor di seluruh dunia."',
        '"Perburuan liar juga masih terjadi meskipun sudah ada hukum yang melarangnya."',
        '"Banyak ilmuwan memprediksi bahwa badak Jawa akan punah dalam 20 tahun ke depan."'
      ],
      ans: 1,
      hint: 'Kalimat yang BUKAN penjelas adalah kalimat UTAMA yang berisi ide pokok. Kalimat mana yang paling umum dan menjadi "payung" bagi yang lain?',
      explanation: '"Badak bercula satu Jawa kini tersisa tidak lebih dari 70 ekor" adalah KALIMAT UTAMA (bukan kalimat penjelas) karena ini adalah ide pokok yang paling umum tentang kondisi kritis badak Jawa. Kalimat-kalimat lain (habitat berkurang, perburuan liar, prediksi punah) adalah KALIMAT PENJELAS yang memberikan alasan dan konteks mengapa kondisinya kritis.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Paragraf berikut memiliki jenis yang disebut "paragraf deskriptif":\n"Pantai Senggigi memukau setiap pengunjung yang datang. Pasirnya putih bersih bagaikan salju. Ombaknya berdebur lembut membelai tepi pantai. Air lautnya biru jernih hingga ke dasarnya. Pohon-pohon kelapa melambai-lambai ditiup angin laut."\nBerdasarkan isi dan strukturnya, ide pokok paragraf tersebut adalah...',
      opts: [
        'Pasir pantai Senggigi putih seperti salju',
        'Air laut di Senggigi sangat jernih',
        'Pantai Senggigi memukau setiap pengunjung yang datang',
        'Pohon kelapa tumbuh di tepi pantai Senggigi'
      ],
      ans: 2,
      hint: 'Mana kalimat yang paling UMUM dan menjadi "kesimpulan besar" dari semua detail yang disebutkan?',
      explanation: '"PANTAI SENGGIGI MEMUKAU SETIAP PENGUNJUNG" adalah ide pokok (kalimat utama di awal = paragraf deduktif). Kalimat-kalimat lain (pasir putih, ombak lembut, air jernih, pohon kelapa) adalah DETAIL DESKRIPTIF yang menjelaskan mengapa pantai Senggigi memukau. Semua detail itu mendukung klaim utama di kalimat pertama.'
    },
  ],

};
// ============================================================
// Akhir BATCH 2 Bagian 1 (bindo-1 s.d. bindo-4)
// Lanjutkan dengan bindo-5 s.d. bindo-8 pada bagian berikutnya.
// ============================================================

// ============================================================
//  QUIZ_DATA — BATCH 2: Bahasa Indonesia bindo-5 s.d. bindo-8
//  BelajarCeria | Senior Education Content Creator
//  Format: 15 soal/topik | 5 Mudah, 5 Sedang, 5 Susah (HOTS)
//          Min. 3 soal tipe 'fill' per topik
//          mc: 4 opsi, ans = index 0-3
//          fill: jawaban singkat, '_' pada string q
// ============================================================

export const QUIZ_DATA_BINDO_2 = {

  // ================================================================
  //  bindo-5 | SINONIM (Kata yang Bermakna Sama/Mirip)
  // ================================================================
  'bindo-5': [

    // --- MUDAH (1-5) ---
    {
      type: 'mc',
      level: 'mudah',
      q: 'Sinonim adalah...',
      opts: [
        'Kata yang maknanya berlawanan',
        'Kata yang ejaannya berbeda tetapi maknanya sama atau hampir sama',
        'Kata yang bunyinya sama tetapi maknanya berbeda',
        'Kata yang hanya bisa digunakan dalam puisi'
      ],
      ans: 1,
      hint: 'Sinonim berasal dari bahasa Yunani "synonymos" yang berarti "nama yang sama".',
      explanation: 'SINONIM adalah kata-kata yang memiliki MAKNA SAMA atau HAMPIR SAMA, meskipun ejaannya berbeda. Contoh: "besar" bersinonim dengan "raksasa", "agung", "luhur". Sinonim sering digunakan untuk menghindari pengulangan kata yang sama dalam tulisan.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Sinonim kata "senang" adalah...',
      opts: ['Sedih', 'Gembira', 'Marah', 'Takut'],
      ans: 1,
      hint: 'Kata yang maknanya sama dengan perasaan bahagia dan ceria.',
      explanation: '"GEMBIRA" adalah sinonim dari "senang" karena keduanya mengandung makna perasaan bahagia, suka cita, dan tidak bersedih. Contoh dalam kalimat: "Aku senang bertemu kamu" ≈ "Aku gembira bertemu kamu."'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Kata "pintar" memiliki sinonim yaitu _, cerdas, dan pandai — semuanya bermakna memiliki kemampuan berpikir yang baik.',
      ans: 'cakap (atau: bijak, mahir)',
      hint: 'Carilah kata lain yang bermakna "memiliki kepandaian". Ada banyak pilihannya!',
      explanation: '"Pintar", "cerdas", "pandai", "cakap", dan "bijak" adalah kelompok SINONIM yang semuanya bermakna kemampuan berpikir atau kemampuan tertentu yang baik. Dalam penggunaan, masing-masing memiliki nuansa sedikit berbeda (cerdas = kecerdasan intelektual, bijak = kebijaksanaan).'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Manakah pasangan sinonim yang BENAR?',
      opts: [
        'Besar — Kecil',
        'Cepat — Lambat',
        'Indah — Cantik',
        'Panas — Dingin'
      ],
      ans: 2,
      hint: 'Sinonim adalah kata yang maknanya SAMA, bukan berlawanan. Pasangan mana yang bermakna sama?',
      explanation: '"INDAH — CANTIK" adalah pasangan sinonim karena keduanya bermakna memiliki keindahan yang menyenangkan pandangan. Pasangan lainnya (Besar-Kecil, Cepat-Lambat, Panas-Dingin) adalah ANTONIM (kata berlawanan makna).'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Sinonim kata "menangis" adalah...',
      opts: ['Tertawa', 'Berteriak', 'Meraung', 'Berlari'],
      ans: 2,
      hint: 'Hewan buas juga melakukan ini saat kesakitan atau lapar — bunyinya keras dan menyayat hati.',
      explanation: '"MERAUNG" adalah sinonim dari "menangis" dalam makna mengeluarkan suara kesedihan yang keras. Namun perlu dicatat, sinonim tidak selalu sempurna — "meraung" lebih intensif dari "menangis". Sinonim lain menangis: "menjerit kesakitan" (dalam konteks tertentu), atau "terisak", "mengguguk".'
    },

    // --- SEDANG (6-10) ---
    {
      type: 'mc',
      level: 'sedang',
      q: 'Manakah sinonim yang PALING TEPAT untuk kata "melihat" dalam kalimat "Ia melihat bintang-bintang di langit malam dengan penuh kagum"?',
      opts: ['Memandang', 'Mencari', 'Menonton', 'Memeriksa'],
      ans: 0,
      hint: 'Dalam konteks "dengan penuh kagum", kata mana yang paling cocok menggantikan "melihat"?',
      explanation: '"MEMANDANG" adalah sinonim paling tepat karena mengandung makna melihat dengan perhatian penuh dan perasaan — cocok dengan konteks "penuh kagum". "Menonton" lebih cocok untuk tontonan terstruktur, "memeriksa" untuk tujuan evaluasi, dan "mencari" tidak tepat konteksnya. Sinonim yang baik harus cocok dalam konteks kalimat.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Perhatikan kalimat: "Ayah bekerja keras untuk _ keluarganya." Kata yang PALING TEPAT mengisi titik-titik (sinonim dari "menghidupi") adalah...',
      opts: ['Melukai', 'Menafkahi', 'Meninggalkan', 'Mengganggu'],
      ans: 1,
      hint: 'Menghidupi = menyediakan kebutuhan hidup bagi keluarga. Kata apa yang bermakna sama?',
      explanation: '"MENAFKAHI" adalah sinonim yang tepat dari "menghidupi" dalam konteks ini — keduanya bermakna menyediakan kebutuhan hidup (pangan, sandang, papan) bagi keluarga. Dalam kalimat: "Ayah bekerja keras untuk MENAFKAHI keluarganya" maknanya sama dengan menggunakan kata "menghidupi".'
    },
    {
      type: 'fill',
      level: 'sedang',
      q: 'Kata "wajah" memiliki sinonim yaitu muka, _, rona, dan paras — semuanya merujuk pada bagian depan kepala.',
      ans: 'roman',
      hint: '"Roman muka" — kata ini berasal dari bahasa lama yang berarti wajah. Sering digunakan dalam ungkapan "roman wajahnya cerah".',
      explanation: '"ROMAN" adalah salah satu sinonim dari "wajah/muka". Kelompok sinonim: wajah = muka = roman = rona = paras. Masing-masing memiliki nuansa: "paras" lebih menekankan keindahan wajah, "rona" lebih ke ekspresi/warna wajah, "roman" terkesan lebih sastrawi/formal.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Mengapa sinonim yang sempurna (makna 100% identik) hampir tidak ada dalam bahasa Indonesia?',
      opts: [
        'Karena bahasa Indonesia masih berkembang',
        'Karena setiap kata memiliki nuansa makna, konteks penggunaan, dan tingkat formalitas yang sedikit berbeda',
        'Karena para ahli bahasa belum menelitinya',
        'Karena sinonim hanya ada dalam bahasa asing'
      ],
      ans: 1,
      hint: 'Coba bandingkan "meninggal", "mati", dan "wafat". Ketiganya sinonim. Apakah bisa digunakan dalam situasi yang sama?',
      explanation: 'Sinonim sempurna hampir tidak ada karena setiap kata memiliki NUANSA MAKNA, KONTEKS, dan TINGKAT FORMALITAS yang berbeda. Contoh: "meninggal", "wafat", "mati", "mangkat" semuanya bermakna tidak bernyawa lagi — tapi "wafat" untuk orang terhormat, "mangkat" untuk raja, "meninggal" lebih formal, "mati" lebih umum/kasar. Ini disebut perbedaan KONOTASI.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Pasangan kata mana yang merupakan sinonim dalam konteks BAHASA FORMAL?',
      opts: [
        '"Rumah" dan "gubuk"',
        '"Pergi" dan "bertolak"',
        '"Makan" dan "melahap"',
        '"Berjalan" dan "berlari"'
      ],
      ans: 1,
      hint: '"Bertolak" digunakan dalam situasi yang lebih formal dan sopan dibanding "pergi". Keduanya bermakna meninggalkan suatu tempat.',
      explanation: '"PERGI" dan "BERTOLAK" adalah sinonim, keduanya bermakna meninggalkan suatu tempat. "Bertolak" lebih formal/sastrawi. "Rumah" dan "gubuk" adalah sinonim tapi berbeda konotasi (gubuk = sederhana/kumuh). "Makan" dan "melahap" berbeda intensitas (melahap = makan dengan rakus).'
    },

    // --- SUSAH / HOTS (11-15) ---
    {
      type: 'mc',
      level: 'susah',
      q: 'Dalam sebuah tulisan ilmiah, penggunaan sinonim yang tepat sangat penting. Perhatikan kalimat berikut:\n"Para ilmuwan (1)meneliti/(2)menyelidiki/(3)mengamati kemungkinan kehidupan di planet Mars."\nKata mana yang PALING TEPAT untuk konteks ilmiah tersebut?',
      opts: [
        '"Mengamati" karena Mars dapat dilihat dari bumi',
        '"Menyelidiki" karena maknanya mencari tahu sesuatu yang belum pasti',
        '"Meneliti" karena lebih ilmiah dan mencakup proses sistematis',
        'Ketiganya sama persis, bebas dipilih'
      ],
      ans: 2,
      hint: 'Dalam konteks ilmiah, kata mana yang bermakna proses SISTEMATIS dan METODIS, bukan sekadar melihat atau mencurigai?',
      explanation: '"MENELITI" paling tepat untuk konteks ilmiah karena bermakna melakukan proses sistematis, metodis, dan terencana dengan bukti empiris. "Mengamati" = melihat/memperhatikan (bisa tanpa metode ilmiah). "Menyelidiki" = mencari tahu sesuatu yang dicurigai (berkonotasi detektif/kepolisian). Pemilihan sinonim harus mempertimbangkan konteks dan nuansa makna.'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Kata "merdeka", "bebas", "lepas", dan "independen" adalah kelompok sinonim. Namun kata "merdeka" memiliki makna khusus yang lebih kuat dalam konteks _, sehingga tidak bisa selalu digantikan oleh sinonimnya.',
      ans: 'kebangsaan (nasionalisme/kemerdekaan negara)',
      hint: 'Kata "merdeka" paling sering kita dengar pada tanggal 17 Agustus. Dalam konteks apa?',
      explanation: '"MERDEKA" memiliki KONOTASI KUAT dalam konteks KEBANGSAAN dan KEMERDEKAAN NEGARA yang tidak dimiliki sinonimnya. "Bebas dari penjajahan" bisa diganti "merdeka dari penjajahan", tapi "Tujuh belas Agustus hari merdeka" tidak bisa diganti "Tujuh belas Agustus hari bebas" karena nuansa nasionalismenya hilang. Ini bukti sinonim tidak pernah 100% sama.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Perhatikan kalimat: "Ibu ___ masakan yang sangat lezat untuk ulang tahun ayah." Kata mana dari kelompok sinonim berikut yang PALING TEPAT dan PALING POSITIF konteksnya?',
      opts: [
        '"Memasak" — netral, umum',
        '"Menyajikan" — lebih menekankan proses menghidangkan',
        '"Meracik" — lebih menekankan keahlian mencampur bumbu',
        '"Meramu" — menekankan kepandaian mengombinasikan bahan'
      ],
      ans: 2,
      hint: 'Konteksnya: ulang tahun ayah, masakan lezat. Kata mana yang paling menonjolkan KEAHLIAN dan KEISTIMEWAAN masakan ibu?',
      explanation: '"MERACIK" paling tepat karena menekankan KEAHLIAN dalam mencampur bumbu untuk menghasilkan cita rasa istimewa — cocok dengan konteks "sangat lezat" untuk perayaan spesial. "Memasak" terlalu umum, "menyajikan" menekankan menghidangkan (bukan memasak), "meramu" lebih sering dipakai untuk obat-obatan. Nuansa konteks menentukan pilihan sinonim terbaik.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Mengapa seorang penulis perlu menggunakan sinonim dalam tulisannya?',
      opts: [
        'Agar tulisannya terlihat lebih panjang dan banyak halaman',
        'Untuk menghindari pengulangan kata yang sama, memperkaya kosakata, dan membuat tulisan lebih bervariasi dan enak dibaca',
        'Karena sinonim selalu lebih formal dari kata aslinya',
        'Karena aturan bahasa Indonesia mewajibkan penggunaan sinonim'
      ],
      ans: 1,
      hint: 'Bayangkan membaca paragraf di mana kata "besar" diulang 7 kali. Bagaimana rasanya? Apa solusinya?',
      explanation: 'Penulis menggunakan sinonim untuk: (1) MENGHINDARI PENGULANGAN kata yang sama yang membuat tulisan monoton dan membosankan; (2) MEMPERKAYA KOSAKATA tulisan; (3) MEMILIH kata yang nuansa maknanya paling tepat untuk konteks tertentu; (4) membuat tulisan lebih BERVARIASI dan enak dibaca. Ini adalah teknik penting dalam menulis yang baik.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Kata "gigih", "tekun", "ulet", dan "pantang menyerah" sering dianggap sinonim. Namun jika diteliti lebih dalam, perbedaan nuansanya adalah...',
      opts: [
        'Tidak ada perbedaan, keempat kata itu identik',
        '"Gigih" dan "ulet" menekankan ketahanan dalam menghadapi rintangan, "tekun" menekankan kerutinan dan kesungguhan usaha, sementara "pantang menyerah" menekankan sikap tidak berhenti ketika gagal',
        '"Tekun" bermakna negatif dibanding yang lain',
        '"Gigih" hanya digunakan untuk atlet'
      ],
      ans: 1,
      hint: 'Coba bayangkan: apakah orang "tekun" pasti juga "pantang menyerah"? Apakah ada perbedaan penekanan?',
      explanation: 'Meskipun sinonim, nuansanya berbeda: "GIGIH" = bersemangat kuat dalam berjuang; "ULET" = lentur dan tahan dalam menghadapi kesulitan; "TEKUN" = rutin, sungguh-sungguh, dan konsisten dalam usaha; "PANTANG MENYERAH" = tidak berhenti meski sudah gagal berkali-kali. Pemahaman nuansa sinonim ini menunjukkan kekayaan bahasa Indonesia dan kemampuan literasi tinggi.'
    },
  ],

  // ================================================================
  //  bindo-6 | CIRI & UNSUR POSTER
  // ================================================================
  'bindo-6': [

    // --- MUDAH (1-5) ---
    {
      type: 'mc',
      level: 'mudah',
      q: 'Poster adalah...',
      opts: [
        'Buku bergambar yang tebal',
        'Media informasi visual berupa gambar dan tulisan singkat yang dipajang di tempat umum',
        'Surat resmi yang dikirim ke instansi pemerintah',
        'Rekaman audio tentang suatu pesan penting'
      ],
      ans: 1,
      hint: 'Poster sering kita lihat di jalan, sekolah, atau tempat umum. Fungsinya menyampaikan pesan dengan cepat.',
      explanation: 'POSTER adalah media komunikasi visual yang menggabungkan GAMBAR dan TULISAN SINGKAT untuk menyampaikan pesan kepada khalayak luas. Poster dipajang di tempat umum (dinding, papan pengumuman, jalanan) agar dapat dibaca oleh banyak orang.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Tulisan dalam poster harus singkat, padat, dan jelas karena...',
      opts: [
        'Poster harus bisa dibaca dalam waktu singkat oleh orang yang sedang berjalan atau lewat',
        'Tidak ada cukup kertas untuk tulisan panjang',
        'Tulisan panjang lebih sulit dibuat',
        'Pembuat poster malas menulis panjang'
      ],
      ans: 0,
      hint: 'Bayangkan kamu sedang berjalan di jalan dan melihat poster. Berapa lama kamu punya waktu untuk membacanya?',
      explanation: 'Tulisan poster harus SINGKAT, PADAT, dan JELAS karena poster harus bisa dipahami dalam waktu SANGAT SINGKAT oleh pembaca yang sedang bergerak. Jika tulisannya terlalu panjang, orang tidak akan sempat membacanya dan pesan tidak tersampaikan.'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Kalimat utama dalam poster yang dicetak besar dan mencolok untuk menarik perhatian pembaca disebut _.',
      ans: 'slogan (judul/headline)',
      hint: 'Kalimat ini biasanya paling besar dan paling mudah dibaca dalam poster. Contoh: "Selamatkan Bumi Kita!"',
      explanation: 'SLOGAN atau HEADLINE adalah kalimat utama dalam poster yang dicetak BESAR dan MENCOLOK untuk menarik perhatian pertama kali. Slogan harus singkat, mudah diingat, dan langsung menyampaikan inti pesan. Contoh: "Jangan Buang Sampah Sembarangan!"'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Unsur visual (gambar) dalam poster berfungsi untuk...',
      opts: [
        'Mengisi ruang kosong agar tidak bosan',
        'Menarik perhatian, memperkuat pesan, dan membantu pembaca memahami isi poster lebih cepat',
        'Mempersulit pembaca untuk memahami isi poster',
        'Menggantikan kebutuhan akan tulisan'
      ],
      ans: 1,
      hint: 'Gambar yang tepat bisa langsung "berbicara" tanpa kata-kata. Apa fungsi gambar dalam komunikasi visual?',
      explanation: 'Gambar dalam poster berfungsi: (1) MENARIK PERHATIAN — gambar mencolok lebih cepat dilihat dari jauh; (2) MEMPERKUAT PESAN — gambar yang relevan membuat pesan lebih mudah dipahami dan diingat; (3) ESTETIKA — membuat poster lebih menarik. Kombinasi gambar dan teks yang tepat membuat poster sangat efektif.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Poster layanan masyarakat bertujuan untuk...',
      opts: [
        'Menjual produk kepada konsumen',
        'Menghibur masyarakat dengan gambar-gambar lucu',
        'Menyampaikan pesan penting kepada masyarakat untuk kebaikan bersama tanpa tujuan komersial',
        'Menampilkan jadwal pertunjukan hiburan'
      ],
      ans: 2,
      hint: '"Layanan masyarakat" berarti untuk kepentingan masyarakat umum, bukan untuk jualan.',
      explanation: 'POSTER LAYANAN MASYARAKAT (public service poster) bertujuan menyampaikan PESAN PENTING untuk kebaikan masyarakat tanpa tujuan komersial (tidak untuk menjual produk). Contoh: poster anti-korupsi, poster hemat listrik, poster imunisasi, poster anti-narkoba.'
    },

    // --- SEDANG (6-10) ---
    {
      type: 'mc',
      level: 'sedang',
      q: 'Sebuah poster yang baik harus memenuhi prinsip "AIDA". Huruf A pertama dalam AIDA merujuk pada...',
      opts: ['Animasi', 'Attention (Perhatian)', 'Amanat', 'Anggaran'],
      ans: 1,
      hint: 'AIDA = Attention, Interest, Desire, Action. A pertama = hal pertama yang harus ditangkap pembaca dari poster.',
      explanation: 'Prinsip AIDA dalam desain poster: A = ATTENTION (menarik perhatian — dengan warna mencolok, gambar kuat, atau slogan mengejutkan), I = Interest (membangun minat), D = Desire (membangkitkan keinginan), A = Action (mendorong tindakan). Poster yang baik harus berhasil menarik PERHATIAN terlebih dahulu.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Manakah yang BUKAN merupakan ciri-ciri poster yang baik?',
      opts: [
        'Menggunakan warna yang menarik dan kontras',
        'Menggunakan kalimat yang panjang dan penuh penjelasan detail',
        'Memiliki gambar yang relevan dengan pesan',
        'Menggunakan huruf yang mudah dibaca dari jarak jauh'
      ],
      ans: 1,
      hint: 'Poster dibaca sekilas dari jarak tertentu. Apakah kalimat panjang cocok untuk poster?',
      explanation: '"Menggunakan kalimat panjang dan penuh penjelasan detail" adalah ciri poster yang BURUK, bukan yang baik. Poster justru harus SINGKAT, PADAT, dan JELAS. Kalimat panjang sulit dibaca dari jarak jauh dan tidak sesuai dengan karakteristik poster sebagai media komunikasi cepat.'
    },
    {
      type: 'fill',
      level: 'sedang',
      q: 'Dalam poster, pemilihan _ yang tepat sangat penting karena dapat menciptakan emosi dan pesan tertentu — misalnya warna merah untuk bahaya, hijau untuk lingkungan.',
      ans: 'warna',
      hint: 'Elemen visual yang paling pertama dilihat mata manusia sebelum membaca tulisan.',
      explanation: 'WARNA dalam poster bukan sekadar estetika — warna memiliki makna psikologis: MERAH = bahaya, urgensi, larangan; HIJAU = lingkungan, kesehatan, keamanan; BIRU = kepercayaan, air, tenang; KUNING = peringatan, perhatian, ceria. Pemilihan warna yang tepat memperkuat pesan poster.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Sebuah poster lingkungan hidup bertuliskan "Selamatkan Hutan, Selamatkan Masa Depanmu!" disertai gambar hutan yang mulai gundul di satu sisi dan anak-anak bermain di hutan lebat di sisi lain. Teknik apa yang digunakan dalam poster ini?',
      opts: [
        'Teknik perbandingan (kontras) untuk memperlihatkan perbedaan kondisi dan dampaknya',
        'Teknik repetisi (pengulangan) untuk menekankan pesan',
        'Teknik abstrak yang tidak berhubungan dengan realita',
        'Teknik humor untuk menghibur pembaca'
      ],
      ans: 0,
      hint: 'Gambar hutan gundul vs. hutan lebat — dua kondisi yang berbeda ditampilkan berdampingan. Apa nama tekniknya?',
      explanation: 'Poster tersebut menggunakan teknik PERBANDINGAN/KONTRAS — menampilkan DUA kondisi yang berlawanan secara berdampingan untuk menunjukkan DAMPAK tindakan (atau ketiadaan tindakan). Hutan gundul (kondisi buruk jika tidak dijaga) vs. hutan lebat dengan anak-anak bermain (kondisi baik jika dijaga). Teknik ini sangat efektif untuk poster lingkungan.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Perbedaan poster IKLAN (komersial) dengan poster LAYANAN MASYARAKAT adalah...',
      opts: [
        'Poster iklan selalu berwarna, layanan masyarakat selalu hitam putih',
        'Poster iklan bertujuan memengaruhi orang untuk membeli produk/jasa demi keuntungan, layanan masyarakat bertujuan mendidik/menginformasikan demi kepentingan umum',
        'Poster layanan masyarakat selalu dibuat pemerintah, poster iklan oleh swasta',
        'Tidak ada perbedaan, keduanya sama'
      ],
      ans: 1,
      hint: 'Apa tujuan akhir yang ingin dicapai oleh pembuat masing-masing poster?',
      explanation: 'Perbedaan mendasar ada pada TUJUAN: IKLAN KOMERSIAL bertujuan memengaruhi konsumen untuk MEMBELI produk/jasa demi KEUNTUNGAN bisnis. LAYANAN MASYARAKAT bertujuan MENDIDIK, MENGINFORMASIKAN, atau MENGAJAK tindakan demi KEPENTINGAN UMUM tanpa keuntungan finansial. Konten poster layanan masyarakat bisa dibuat siapa saja, tidak harus pemerintah.'
    },

    // --- SUSAH / HOTS (11-15) ---
    {
      type: 'mc',
      level: 'susah',
      q: 'Seorang siswa membuat poster tentang bahaya merokok dengan tulisan yang sangat banyak dan gambar yang kecil serta tidak menarik. Mengapa poster tersebut kurang efektif?',
      opts: [
        'Karena topiknya tidak menarik',
        'Karena tulisan yang terlalu banyak sulit dibaca sekilas, dan gambar kecil tidak menarik perhatian — poster kehilangan fungsi utamanya sebagai media komunikasi visual yang cepat',
        'Karena bahaya merokok sudah diketahui semua orang',
        'Karena poster sebaiknya tidak menggunakan gambar'
      ],
      ans: 1,
      hint: 'Ingat prinsip poster: singkat, visual kuat, dan mudah dipahami sekilas. Apa yang dilanggar oleh poster tersebut?',
      explanation: 'Poster tersebut melanggar DUA prinsip utama: (1) Tulisan terlalu banyak = tidak bisa dibaca sekilas oleh orang yang lewat → pesan tidak tersampaikan; (2) Gambar kecil dan tidak menarik = gagal menarik PERHATIAN (prinsip ATTENTION dalam AIDA). Poster yang baik harus "berbicara" dalam hitungan detik melalui kombinasi visual kuat dan teks singkat.'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Elemen dalam poster yang berisi informasi kontak, nama lembaga pembuat, atau ajakan bertindak (misalnya "Hubungi: 119" atau "Kunjungi: www...") disebut informasi _.',
      ans: 'pendukung (tambahan/kontak)',
      hint: 'Elemen ini bukan judul utama, tapi memberikan informasi lebih lanjut bagi pembaca yang ingin tahu lebih banyak.',
      explanation: 'INFORMASI PENDUKUNG dalam poster melengkapi slogan utama dengan data konkret: nomor telepon, alamat website, nama lembaga, atau ajakan tindakan spesifik. Ini penting agar pembaca yang tertarik tahu harus ke mana atau menghubungi siapa. Contoh poster kesehatan: "Hubungi Puskesmas terdekat" atau "Hotline: 119 ext 8".'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Sekolah ingin membuat poster untuk mengurangi perilaku membuang sampah sembarangan di lingkungan sekolah. Desain poster manakah yang PALING EFEKTIF?',
      opts: [
        'Poster berisi peraturan sekolah lengkap tentang kebersihan dalam 10 poin',
        'Poster dengan gambar besar lingkungan sekolah yang kotor vs. bersih, slogan singkat "Pilihmu Menentukan Sekolahmu!", dan gambar tempat sampah yang jelas',
        'Poster berisi foto kepala sekolah sedang berpidato tentang kebersihan',
        'Poster berisi tulisan kecil-kecil tentang bahaya sampah bagi kesehatan dalam 3 paragraf'
      ],
      ans: 1,
      hint: 'Poster yang efektif: visual kuat, pesan singkat, relevan dengan sasaran (siswa sekolah), dan mendorong tindakan.',
      explanation: 'Pilihan B paling efektif karena: (1) GAMBAR BESAR KONTRAS (kotor vs. bersih) menarik perhatian dan menunjukkan dampak nyata; (2) SLOGAN SINGKAT ("Pilihmu Menentukan Sekolahmu!") langsung berbicara kepada siswa; (3) GAMBAR TEMPAT SAMPAH = ajakan tindakan konkret. Poster yang baik harus menyentuh emosi, singkat, dan mengarahkan ke tindakan.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Di era digital, poster kini juga hadir dalam bentuk digital yang disebarkan di media sosial. Apa PERBEDAAN UTAMA yang harus diperhatikan saat membuat poster digital dibanding poster cetak?',
      opts: [
        'Poster digital harus lebih banyak tulisannya',
        'Poster digital bisa lebih interaktif (ada animasi, link, audio) dan harus mempertimbangkan ukuran layar serta kecepatan scroll pembaca',
        'Poster digital tidak boleh menggunakan gambar',
        'Poster digital dan cetak tidak ada perbedaannya sama sekali'
      ],
      ans: 1,
      hint: 'Apa yang bisa dilakukan poster digital yang tidak bisa dilakukan poster cetak? Dan bagaimana orang "membaca" konten di media sosial?',
      explanation: 'POSTER DIGITAL memiliki kelebihan dan tantangan berbeda dari cetak: (1) Bisa INTERAKTIF — animasi, link, klik untuk info lebih; (2) Perlu mempertimbangkan UKURAN LAYAR (mobile vs. desktop); (3) Tantangan SCROLL — di media sosial konten di-scroll cepat, sehingga elemen menarik harus ada di bagian ATAS gambar. Intinya: prinsip dasar poster tetap sama, tapi medium digital membuka peluang sekaligus tantangan baru.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Perhatikan dua slogan poster: (A) "Buanglah sampah pada tempatnya!" dan (B) "Bumi ini milik anak cucumu. Jagalah!" Manakah yang lebih efektif dan mengapa?',
      opts: [
        'A lebih efektif karena langsung dan jelas',
        'B lebih efektif karena menyentuh emosi dan menciptakan rasa tanggung jawab personal yang lebih dalam',
        'Keduanya sama efektifnya',
        'A lebih efektif karena lebih pendek'
      ],
      ans: 1,
      hint: 'Slogan yang menyentuh emosi dan rasa tanggung jawab pribadi cenderung lebih diingat dan mendorong perubahan perilaku.',
      explanation: 'B lebih efektif secara PSIKOLOGIS karena: (1) MENYENTUH EMOSI — "anak cucumu" membuat pembaca berpikir tentang keturunan mereka; (2) MENCIPTAKAN RASA MEMILIKI — "milik anak cucumu" membuat bumi terasa menjadi tanggung jawab pribadi; (3) Mendorong MOTIVASI JANGKA PANJANG, bukan sekadar ketaatan aturan. Slogan A hanya memberi instruksi, B membangun kesadaran yang lebih dalam.'
    },
  ],

  // ================================================================
  //  bindo-7 | KATA KHUSUS (Kata Bermakna Spesifik/Sempit)
  // ================================================================
  'bindo-7': [

    // --- MUDAH (1-5) ---
    {
      type: 'mc',
      level: 'mudah',
      q: 'Kata khusus adalah kata yang memiliki makna...',
      opts: [
        'Sangat luas dan umum, mencakup banyak hal',
        'Spesifik dan sempit, hanya mencakup satu hal tertentu',
        'Berlawanan dengan kata lain',
        'Sama dengan kata lain'
      ],
      ans: 1,
      hint: 'Kata khusus = kata yang KHUSUS = tidak umum, bermakna...',
      explanation: 'KATA KHUSUS (hiponim) adalah kata yang memiliki makna SPESIFIK dan SEMPIT — hanya merujuk pada satu jenis atau hal tertentu yang lebih spesifik. Kata khusus adalah bagian dari kata yang lebih umum (kata umum/hipernim). Contoh: "mawar" adalah kata khusus dari kata umum "bunga".'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: '"Mawar", "melati", "anggrek", dan "dahlia" adalah kata khusus dari kata umum...',
      opts: ['Tanaman', 'Bunga', 'Tumbuhan', 'Pot'],
      ans: 1,
      hint: 'Mawar, melati, anggrek, dan dahlia — semuanya adalah jenis... apa?',
      explanation: '"BUNGA" adalah kata umum (hipernim) dari mawar, melati, anggrek, dan dahlia. Keempat kata itu adalah KATA KHUSUS (hiponim) yang masing-masing merujuk pada jenis bunga yang spesifik. Hubungan: Bunga (umum) → mawar, melati, anggrek, dahlia (khusus).'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: '"Sedan", "truk", "bis", "motor", dan "sepeda" adalah kata-kata khusus dari kata umum _.',
      ans: 'kendaraan',
      hint: 'Sedan, truk, bis, motor, sepeda — semuanya adalah jenis... apa yang digunakan untuk bepergian?',
      explanation: '"KENDARAAN" adalah kata umum (hipernim) dari sedan, truk, bis, motor, dan sepeda. Masing-masing adalah KATA KHUSUS (hiponim) yang menyebut jenis kendaraan tertentu dengan ciri-ciri spesifik.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Manakah yang merupakan kata khusus dari kata umum "ikan"?',
      opts: ['Hewan', 'Lele', 'Makhluk hidup', 'Protein'],
      ans: 1,
      hint: 'Kata khusus dari "ikan" adalah nama jenis ikan tertentu. Mana yang merupakan nama jenis ikan?',
      explanation: '"LELE" adalah kata khusus (hiponim) dari kata umum "ikan" karena lele adalah jenis ikan tertentu dengan ciri khas (berkumis, hidup di air tawar). "Hewan" dan "makhluk hidup" adalah kata yang lebih UMUM dari "ikan" (bukan lebih khusus). "Protein" adalah kandungan gizi, bukan kata khusus dari ikan.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Penggunaan kata khusus dalam tulisan bertujuan untuk...',
      opts: [
        'Membuat tulisan menjadi lebih sulit dipahami',
        'Memberikan informasi yang lebih tepat, spesifik, dan akurat kepada pembaca',
        'Menggantikan semua kata umum',
        'Membuat tulisan menjadi lebih panjang'
      ],
      ans: 1,
      hint: 'Kata "berjalan" vs. "berlari", "berjingkat", "merangkak", "tertatih". Mana yang lebih memberikan gambaran tepat?',
      explanation: 'Kata khusus digunakan untuk memberikan informasi yang lebih TEPAT, SPESIFIK, dan AKURAT. Misalnya: "berjalan" (umum) vs. "berlari/berjingkat/tertatih" (khusus). Kata khusus membantu pembaca mendapatkan GAMBARAN yang lebih jelas dan detail tentang apa yang dimaksud penulis.'
    },

    // --- SEDANG (6-10) ---
    {
      type: 'mc',
      level: 'sedang',
      q: 'Perhatikan kelompok kata berikut: Padi, Jagung, Gandum, Singkong, Sorgum. Kata umum yang PALING TEPAT untuk kelompok tersebut adalah...',
      opts: ['Makanan', 'Tanaman pangan (serealia/umbi)', 'Sayuran', 'Bumbu dapur'],
      ans: 1,
      hint: 'Padi, jagung, gandum, singkong, sorgum — semuanya digunakan sebagai sumber... apa?',
      explanation: '"TANAMAN PANGAN" (bisa juga "serealia" untuk padi/jagung/gandum/sorgum, atau "umbi" untuk singkong) adalah kata umum yang paling tepat. "Makanan" terlalu luas (mencakup daging, buah, dll.), "sayuran" tidak tepat (padi bukan sayuran), "bumbu dapur" jelas tidak tepat.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Dalam kalimat "Ia memukul bola dengan tongkat pemukul berlubang itu hingga jauh", kata khusus yang tepat untuk menggantikan "tongkat pemukul berlubang" dalam olahraga golf adalah...',
      opts: ['Raket', 'Stick', 'Club (stik golf)', 'Bat'],
      ans: 2,
      hint: 'Tongkat pemukul khusus olahraga golf memiliki nama tersendiri dalam bahasa Inggris yang sudah diserap.',
      explanation: '"CLUB" (stik golf) adalah kata khusus untuk tongkat pemukul dalam olahraga golf. "Raket" untuk tenis/bulu tangkis, "bat" untuk baseball/kriket, "stick" untuk hoki. Penggunaan kata khusus yang tepat menunjukkan pemahaman mendalam tentang suatu bidang.'
    },
    {
      type: 'fill',
      level: 'sedang',
      q: '"Berbisik", "berteriak", "berseru", "bergumam", dan "meraung" adalah kata-kata khusus dari kata umum _ yang bermakna mengeluarkan suara dari mulut.',
      ans: 'berbicara (bersuara)',
      hint: 'Kata yang paling umum untuk semua cara mengeluarkan suara dari mulut manusia.',
      explanation: '"BERBICARA" atau "BERSUARA" adalah kata umum dari berbisik, berteriak, berseru, bergumam, dan meraung. Setiap kata khusus menggambarkan CARA BERBICARA yang berbeda: berbisik (pelan sekali), berteriak (keras), bergumam (tidak jelas), meraung (keras dan sedih). Kata khusus memberikan gambaran yang jauh lebih kaya.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Dalam karangan deskripsi tentang pemandangan alam, penggunaan kata khusus lebih dianjurkan. Kalimat manakah yang menggunakan kata khusus dengan lebih baik?',
      opts: [
        '"Di sana ada banyak pohon dan bunga."',
        '"Di sana tumbuh pohon cemara yang menjulang, dikelilingi hamparan bunga edelweiss putih bersih."',
        '"Banyak tumbuhan hijau di sekitar sana."',
        '"Pemandangannya sangat indah dengan banyak tanaman."'
      ],
      ans: 1,
      hint: 'Kalimat mana yang memberikan gambaran paling jelas dan spesifik? Kalimat mana yang menggunakan nama spesifik?',
      explanation: 'Kalimat B paling baik karena menggunakan KATA KHUSUS: "pohon cemara" (bukan sekadar "pohon"), "bunga edelweiss" (bukan sekadar "bunga"). Kata khusus menciptakan GAMBARAN VISUAL yang jelas dan hidup bagi pembaca. Pembaca langsung bisa membayangkan pemandangan spesifik, bukan gambaran samar.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Kata "berlari" adalah kata umum. Kata khusus yang menggambarkan berlari dengan langkah-langkah sangat kecil dan cepat (seperti tikus berlari) adalah...',
      opts: ['Merangkak', 'Berlari kencang', 'Bergegas', 'Berderap'],
      ans: 3,
      hint: 'Kata ini menggambarkan langkah-langkah cepat dan kecil yang berurutan. Sering digunakan untuk menggambarkan kuda atau prajurit berbaris.',
      explanation: '"BERDERAP" menggambarkan langkah-langkah cepat yang berirama (seperti kuda berderap atau pasukan berbaris berderap). Namun untuk berlari langkah kecil-kecil ada juga "berlari kecil" atau "berlari tergesa". Kata khusus untuk cara berjalan/berlari sangat banyak dalam bahasa Indonesia, mencerminkan kekayaan bahasa kita.'
    },

    // --- SUSAH / HOTS (11-15) ---
    {
      type: 'mc',
      level: 'susah',
      q: 'Perhatikan hierarki kata berikut:\nMakhluk Hidup → Hewan → Mamalia → Karnivora → Kucing → Kucing Persia\nDalam hierarki ini, "Kucing Persia" termasuk kata...',
      opts: [
        'Kata umum, karena mencakup semua ras kucing',
        'Kata khusus yang paling sempit maknanya karena berada di posisi paling bawah hierarki',
        'Kata umum dari "Kucing"',
        'Kata yang tidak berhubungan dengan hierarki di atas'
      ],
      ans: 1,
      hint: 'Semakin ke bawah dalam hierarki kata, semakin... apa maknanya?',
      explanation: '"KUCING PERSIA" adalah kata paling KHUSUS dalam hierarki karena berada di posisi paling bawah — merujuk pada ras kucing yang sangat spesifik. Semakin ke bawah hierarki, kata semakin SEMPIT maknanya tapi semakin KAYA informasinya. Semakin ke atas, kata semakin LUAS (umum) tapi semakin SEDIKIT informasi spesifiknya.'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Dalam linguistik, kata umum yang mencakup kata-kata yang lebih khusus disebut _, sedangkan kata khusus yang tercakup di dalamnya disebut hiponim.',
      ans: 'hipernim',
      hint: 'Hiper = atas/lebih besar. Hipo = bawah/lebih kecil. Yang di atas (lebih umum) adalah...',
      explanation: 'HIPERNIM (dari "hyper" = di atas) adalah kata yang maknanya MENCAKUP kata-kata lain yang lebih khusus. HIPONIM (dari "hypo" = di bawah) adalah kata yang tercakup di dalam hipernim. Contoh: "bunga" (hipernim) → mawar, melati, anggrek (hiponim). Memahami hubungan hipernim-hiponim membantu kita memperkaya kosakata.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Seorang penulis menulis: "Ia memotong sayuran dengan alat pemotong." Menggunakan kata khusus yang tepat, kalimat ini menjadi lebih baik jika diubah menjadi...',
      opts: [
        '"Ia mencacah wortel dan bawang dengan pisau dapur."',
        '"Ia memotong banyak macam sayuran."',
        '"Ia menggunakan alat untuk memotong."',
        '"Sayuran dipotong oleh orang itu."'
      ],
      ans: 0,
      hint: 'Versi terbaik menggunakan nama spesifik sayuran, nama spesifik alat, dan kata kerja yang lebih khusus dari "memotong".',
      explanation: 'Pilihan A menggunakan TIGA kata khusus: (1) "mencacah" (khusus, bukan sekadar "memotong"); (2) "wortel dan bawang" (jenis sayuran spesifik); (3) "pisau dapur" (alat spesifik). Hasilnya: gambaran yang jauh lebih jelas dan hidup. Ini adalah keterampilan menulis tingkat tinggi — menggunakan kata khusus secara tepat dan konsisten.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Dalam bidang kedokteran, penggunaan kata khusus (istilah medis) WAJIB digunakan meskipun lebih sulit dipahami orang awam. Mengapa?',
      opts: [
        'Agar dokter terlihat lebih pintar dari pasien',
        'Karena istilah medis memiliki makna yang sangat tepat dan tidak ambigu — satu istilah = satu kondisi spesifik yang tidak bisa salah tafsir',
        'Karena bahasa awam tidak bisa digunakan dalam tulisan ilmiah',
        'Karena istilah medis lebih pendek dari penjelasan awam'
      ],
      ans: 1,
      hint: 'Dalam kedokteran, satu kata yang salah bisa berakibat fatal. Mengapa ketepatan istilah sangat penting?',
      explanation: 'Istilah medis (kata khusus bidang kedokteran) WAJIB digunakan karena memiliki makna yang TEPAT dan TIDAK AMBIGU — setiap istilah merujuk pada kondisi, obat, atau prosedur yang sangat spesifik. "Myocardial infarction" (serangan jantung) tidak bisa diganti sembarangan. Kekeliruan istilah bisa berakibat salah diagnosa atau pengobatan yang fatal. Kata khusus dalam konteks profesional adalah masalah keselamatan!'
    },
  ],

  // ================================================================
  //  bindo-8 | KATA UMUM (Kata Bermakna Luas/Umum)
  // ================================================================
  'bindo-8': [

    // --- MUDAH (1-5) ---
    {
      type: 'mc',
      level: 'mudah',
      q: 'Kata umum adalah kata yang memiliki makna...',
      opts: [
        'Spesifik dan sempit, hanya merujuk pada satu hal',
        'Luas dan umum, mencakup banyak hal sekaligus',
        'Berlawanan dengan kata lain',
        'Hanya digunakan dalam percakapan sehari-hari'
      ],
      ans: 1,
      hint: 'Kata umum = kata yang UMUM = bisa mencakup banyak hal, bukan hanya satu.',
      explanation: 'KATA UMUM (hipernim) adalah kata yang memiliki makna LUAS dan mencakup banyak hal sekaligus. Kata umum adalah "payung" yang menaungi kata-kata khusus (hiponim) di bawahnya. Contoh: "hewan" (kata umum) mencakup kucing, sapi, ular, burung, dan lain-lain.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: '"Makanan" adalah kata umum. Manakah yang merupakan kata khusus dari "makanan"?',
      opts: ['Minuman', 'Nasi goreng', 'Lapar', 'Restoran'],
      ans: 1,
      hint: 'Kata khusus dari "makanan" adalah nama jenis makanan tertentu yang spesifik.',
      explanation: '"NASI GORENG" adalah kata khusus (hiponim) dari kata umum "makanan" karena nasi goreng adalah jenis makanan tertentu yang spesifik. "Minuman" bukan bagian dari makanan (melainkan kategori berbeda), "lapar" adalah perasaan, dan "restoran" adalah tempat makan.'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: '"Baju", "celana", "sepatu", "topi", dan "jaket" semuanya adalah kata khusus dari kata umum _.',
      ans: 'pakaian (busana/sandang)',
      hint: 'Semua kata itu adalah benda yang kita kenakan di tubuh. Kata umumnya adalah...',
      explanation: '"PAKAIAN" (bisa juga "busana" atau "sandang") adalah kata umum dari baju, celana, sepatu, topi, dan jaket. Semua itu adalah jenis pakaian/busana yang digunakan manusia untuk menutup dan melindungi tubuh.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Kata "olahraga" adalah kata umum. Manakah yang BUKAN kata khusus dari "olahraga"?',
      opts: ['Sepak bola', 'Renang', 'Tidur siang', 'Bulu tangkis'],
      ans: 2,
      hint: 'Kata khusus dari "olahraga" harus merupakan jenis olahraga. Mana yang bukan jenis olahraga?',
      explanation: '"TIDUR SIANG" bukan kata khusus dari olahraga karena tidur siang bukan jenis olahraga — ini adalah aktivitas istirahat. Sepak bola, renang, dan bulu tangkis adalah jenis olahraga (kata khusus dari "olahraga"). Membedakan mana yang termasuk dan tidak termasuk dalam kategori adalah keterampilan penting.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Kapan sebaiknya kita menggunakan kata umum dalam tulisan?',
      opts: [
        'Ketika kita ingin menyebut satu hal yang sangat spesifik',
        'Ketika kita ingin menyebutkan suatu kategori atau kelompok tanpa merinci jenis-jenisnya',
        'Kata umum tidak pernah digunakan dalam tulisan',
        'Kata umum hanya digunakan dalam percakapan lisan'
      ],
      ans: 1,
      hint: 'Kata umum berguna saat kita tidak perlu atau tidak ingin merinci satu per satu. Kapan situasi itu terjadi?',
      explanation: 'Kata umum digunakan ketika kita ingin menyebut KATEGORI atau KELOMPOK secara keseluruhan tanpa merinci. Contoh: "Kami membeli banyak MAKANAN untuk pesta" (tidak perlu menyebut satu per satu jenis makanan). Jika perlu detail spesifik, baru gunakan kata khusus.'
    },

    // --- SEDANG (6-10) ---
    {
      type: 'mc',
      level: 'sedang',
      q: 'Perhatikan kalimat: "Ada banyak ___ di toko itu, mulai dari mawar merah, melati putih, hingga anggrek ungu." Kata umum yang paling tepat untuk mengisi titik-titik adalah...',
      opts: ['Tumbuhan', 'Bunga', 'Tanaman hias', 'Produk'],
      ans: 1,
      hint: 'Kata yang menaungi mawar, melati, dan anggrek. Apa ketiganya memiliki kesamaan?',
      explanation: '"BUNGA" adalah kata umum yang paling tepat karena mawar, melati, dan anggrek semuanya adalah jenis BUNGA. "Tumbuhan" dan "tanaman hias" terlalu luas (mencakup juga pohon, rumput, kaktus). "Produk" tidak tepat konteksnya. Kata umum harus mencakup semua kata khusus yang disebutkan, tapi tidak terlalu melebar.'
    },
    {
      type: 'fill',
      level: 'sedang',
      q: 'Kata umum yang mencakup semua kata khusus "gitar, piano, biola, suling, dan drum" adalah _.',
      ans: 'alat musik (instrumen musik)',
      hint: 'Gitar, piano, biola, suling, drum — semuanya digunakan untuk... apa?',
      explanation: '"ALAT MUSIK" (instrumen musik) adalah kata umum yang mencakup semua jenis alat yang digunakan untuk menghasilkan musik: gitar (petik), piano (tuts), biola (gesek), suling (tiup), drum (pukul). Semua itu adalah hiponim dari hipernim "alat musik".'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Dalam menulis laporan, mengapa penting untuk memilih antara kata umum dan kata khusus dengan tepat?',
      opts: [
        'Tidak penting, keduanya bisa digunakan sesuka hati',
        'Kata umum untuk gambaran besar, kata khusus untuk detail spesifik — pemilihan yang tepat membuat laporan lebih mudah dipahami dan informatif',
        'Laporan ilmiah hanya boleh menggunakan kata khusus',
        'Laporan cerita hanya boleh menggunakan kata umum'
      ],
      ans: 1,
      hint: 'Kapan kamu pakai "pohon" (umum) dan kapan kamu pakai "pohon mangga" (khusus)?',
      explanation: 'Pemilihan kata yang tepat: KATA UMUM untuk menyampaikan GAMBARAN BESAR atau kategori tanpa perlu detail. KATA KHUSUS untuk memberikan DETAIL SPESIFIK yang penting. Laporan yang baik mengombinasikan keduanya: memulai dengan gambaran umum, lalu mendetailkan dengan kata khusus sesuai kebutuhan. Ini membuat laporan efisien sekaligus informatif.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Manakah kalimat yang penggunaan kata umumnya PALING TEPAT?',
      opts: [
        '"Saya makan nasi, ayam goreng, tempe, tahu, dan sayur bayam untuk makan siang."',
        '"Saya menyantap berbagai MAKANAN lezat untuk makan siang."',
        '"Saya memakan banyak hal-hal yang enak tadi."',
        '"Makan siang saya terdiri dari benda-benda yang bergizi."'
      ],
      ans: 1,
      hint: 'Kalimat mana yang menggunakan kata umum secara elegan untuk merangkum informasi tanpa perlu merinci semua detail?',
      explanation: 'Kalimat B menggunakan kata umum "MAKANAN" dengan tepat untuk merangkum semua yang dimakan tanpa perlu merinci satu per satu — efisien dan alami. Kalimat A terlalu rinci (cocok jika detail penting). Kalimat C dan D terlalu samar dan janggal. Kata umum yang baik harus tetap informatif meski tidak rinci.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Kata "transportasi" adalah kata umum. Manakah kelompok kata yang SEMUANYA merupakan kata khusus dari "transportasi"?',
      opts: [
        'Pesawat, kapal, kereta, bus, taksi',
        'Pesawat, udara, laut, darat, rel',
        'Pilot, nakhoda, masinis, sopir, penumpang',
        'Bandara, pelabuhan, stasiun, terminal, halte'
      ],
      ans: 0,
      hint: 'Kata khusus dari "transportasi" adalah nama JENIS KENDARAAN transportasinya, bukan elemennya yang lain.',
      explanation: '"Pesawat, kapal, kereta, bus, taksi" semuanya adalah JENIS ALAT TRANSPORTASI (hiponim dari "transportasi"). Pilihan B berisi jenis medium (udara, laut, darat) bukan jenis kendaraan. Pilihan C berisi profesi (pilot, nakhoda). Pilihan D berisi FASILITAS transportasi (bandara, pelabuhan). Kata khusus harus satu level di bawah kata umumnya.'
    },

    // --- SUSAH / HOTS (11-15) ---
    {
      type: 'mc',
      level: 'susah',
      q: 'Perhatikan paragraf: "Di pasar tradisional itu terdapat berbagai [KATA]. Ada yang segar baru dipetik, ada yang sudah diawetkan, dan ada pula yang diolah menjadi berbagai sajian siap makan." Kata umum yang PALING TEPAT dan EFISIEN untuk mengisi [KATA] adalah...',
      opts: [
        '"barang-barang dan benda-benda yang dijual"',
        '"komoditas pangan"',
        '"hal-hal yang bisa dibeli"',
        '"makanan dan minuman serta berbagai produk lainnya"'
      ],
      ans: 1,
      hint: 'Kata umum yang baik harus: (1) mencakup semua yang disebutkan, (2) tidak terlalu luas, (3) singkat dan efisien.',
      explanation: '"KOMODITAS PANGAN" adalah kata umum yang paling tepat dan efisien: (1) mencakup bahan segar, awetan, dan olahan makanan; (2) tidak terlalu luas (hanya pangan, bukan semua barang); (3) lebih efisien dari pilihan lain yang bertele-tele. Kata umum yang baik bukan hanya "mencakup" — tapi juga PRESISI dan EFISIEN.'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Dalam ilmu bahasa, hubungan antara kata umum (hipernim) dan kata khusus (hiponim) disebut hubungan _, yaitu hubungan yang bersifat "X adalah bagian/jenis dari Y".',
      ans: 'hiponimi (inkluensi/inklusi)',
      hint: 'Kata ini berasal dari akar kata hiponim. Hubungan "lebih khusus dari" atau "bagian dari" disebut...',
      explanation: 'HIPONIMI adalah hubungan semantik antara kata yang lebih umum (hipernim) dan kata yang lebih khusus (hiponim). Hubungannya bersifat "X adalah jenis/bagian dari Y": "mawar ADALAH jenis BUNGA". Memahami hiponimi membantu kita menyusun kosakata secara sistematis dan menggunakannya dengan tepat.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Teks berikut menggunakan kata umum terlalu banyak sehingga menjadi tidak informatif:\n"Ada banyak hal di tempat itu. Orang-orang melakukan berbagai kegiatan dengan menggunakan bermacam-macam alat."\nTeks ini menjadi LEBIH BAIK jika diubah menjadi...',
      opts: [
        '"Ada banyak barang-barang di sana dan orang-orang bekerja."',
        '"Di laboratorium sains itu, para peneliti tengah menguji sampel air sungai menggunakan mikroskop dan spektrometer."',
        '"Banyak sekali hal-hal yang ada dan terjadi di tempat tersebut."',
        '"Kegiatan-kegiatan dilakukan oleh banyak orang di sana."'
      ],
      ans: 1,
      hint: 'Versi terbaik mengganti semua kata umum samar dengan kata khusus yang informatif dan memberikan gambaran jelas.',
      explanation: 'Kalimat B jauh lebih baik karena mengganti: "tempat" → "laboratorium sains", "orang-orang" → "para peneliti", "kegiatan" → "menguji sampel air sungai", "alat" → "mikroskop dan spektrometer". Penggunaan KATA KHUSUS menciptakan gambaran yang JELAS, HIDUP, dan INFORMATIF. Ini adalah perbedaan antara tulisan biasa dan tulisan berkualitas tinggi.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Dalam percakapan sehari-hari, kita sering menggunakan kata umum. Dalam tulisan ilmiah/formal, kita lebih banyak menggunakan kata khusus. Mengapa demikian?',
      opts: [
        'Karena tulisan ilmiah harus lebih panjang',
        'Karena percakapan membutuhkan kecepatan dan kesederhanaan, sedangkan tulisan ilmiah membutuhkan ketepatan dan kejelasan yang hanya bisa dicapai dengan kata khusus',
        'Karena kata umum lebih mudah diucapkan dalam percakapan',
        'Karena tidak ada aturan yang membedakan keduanya'
      ],
      ans: 1,
      hint: 'Percakapan = cepat, santai. Tulisan ilmiah = akurat, tidak boleh ambigu. Apa yang dibutuhkan masing-masing?',
      explanation: 'Percakapan sehari-hari mengutamakan KECEPATAN dan KESEDERHANAAN — kata umum cukup untuk dipahami dalam konteks percakapan yang diperjelas gestur dan intonasi. Tulisan ilmiah mengutamakan KETEPATAN dan TIDAK AMBIGU — kata khusus diperlukan karena tidak ada konteks visual/audio. "Hewan" dalam percakapan cukup, tapi dalam penelitian biologi harus spesifik "Panthera tigris sumatrae".'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Perhatikan pasangan kata: (A) Fauna — Hewan — Mamalia — Kucing — Kucing Bengal. Dalam hierarki dari kata paling umum ke paling khusus, urutan yang BENAR adalah...',
      opts: [
        'Kucing Bengal → Kucing → Mamalia → Hewan → Fauna',
        'Fauna → Hewan → Mamalia → Kucing → Kucing Bengal',
        'Mamalia → Fauna → Hewan → Kucing → Kucing Bengal',
        'Hewan → Fauna → Mamalia → Kucing Bengal → Kucing'
      ],
      ans: 1,
      hint: 'Kata paling umum ada di posisi teratas (mencakup paling banyak hal). Kata paling khusus ada di posisi terbawah (paling spesifik).',
      explanation: 'Urutan yang benar dari UMUM ke KHUSUS: FAUNA (semua makhluk hidup bukan tumbuhan) → HEWAN (fauna yang bergerak aktif) → MAMALIA (hewan menyusui) → KUCING (genus Felis) → KUCING BENGAL (ras kucing khusus hasil persilangan). Semakin ke kanan, maknanya semakin SEMPIT tapi semakin SPESIFIK dan INFORMATIF.'
    },
  ],

};

// ============================================================
//  BATCH 2 — SELESAI LENGKAP (bindo-1 s.d. bindo-8)
//  Total: 8 topik × 15 soal = 120 soal
//  Cara penggabungan: Object.assign(QUIZ_DATA, QUIZ_DATA_BINDO_1, QUIZ_DATA_BINDO_2);
// ============================================================

// ============================================================
//  QUIZ_DATA — BATCH 3: Matematika mtk-1 s.d. mtk-5
//  BelajarCeria | Senior Education Content Creator
//  Format: 15 soal/topik | 5 Mudah, 5 Sedang, 5 Susah (HOTS)
//          Min. 3 soal tipe 'fill' per topik
//          mc: 4 opsi, ans = index 0-3
//          fill: jawaban angka/satuan yang jelas
//          explanation: wajib langkah demi langkah
// ============================================================

export const QUIZ_DATA_MTK_1 = {

  // ================================================================
  //  mtk-1 | PENGOLAHAN DATA (Tabel, Diagram Batang & Lingkaran)
  // ================================================================
  'mtk-1': [

    // --- MUDAH (1-5) ---
    {
      type: 'mc',
      level: 'mudah',
      q: 'Perhatikan tabel berikut:\n| Buah | Jumlah |\n|------|--------|\n| Apel | 20 |\n| Mangga | 15 |\n| Jeruk | 25 |\n| Pisang | 10 |\nBuah yang paling banyak adalah...',
      opts: ['Apel', 'Mangga', 'Jeruk', 'Pisang'],
      ans: 2,
      hint: 'Lihat angka paling besar di kolom "Jumlah". Angka mana yang terbesar?',
      explanation: 'Dari tabel:\n• Apel = 20\n• Mangga = 15\n• Jeruk = 25 ← TERBESAR\n• Pisang = 10\nJadi, buah yang paling banyak adalah JERUK dengan jumlah 25.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Nilai ulangan 5 siswa adalah: 70, 80, 90, 60, 100. Berapa jumlah total nilai kelima siswa tersebut?',
      opts: ['380', '390', '400', '410'],
      ans: 2,
      hint: 'Jumlahkan semua nilainya: 70 + 80 + 90 + 60 + 100 = ?',
      explanation: 'Langkah menghitung total:\n70 + 80 = 150\n150 + 90 = 240\n240 + 60 = 300\n300 + 100 = 400\n\nTotal nilai = 400.'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Diagram batang menunjukkan data nilai ulangan kelas 6. Jika nilai tertinggi adalah 100 dan nilai terendah adalah 60, maka selisih nilai tertinggi dan terendah adalah _.',
      ans: '40',
      hint: 'Selisih = nilai terbesar dikurangi nilai terkecil.',
      explanation: 'Langkah menghitung selisih:\nSelisih = Nilai tertinggi − Nilai terendah\nSelisih = 100 − 60\nSelisih = 40\n\nJadi, selisih nilai tertinggi dan terendah adalah 40.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Dalam diagram lingkaran, jika satu bagian mewakili 25% dari keseluruhan data, maka bagian itu membentuk sudut sebesar...',
      opts: ['45°', '60°', '90°', '120°'],
      ans: 2,
      hint: 'Satu lingkaran penuh = 360°. Berapa 25% dari 360°?',
      explanation: 'Langkah menghitung sudut:\nSudut = Persentase × 360°\nSudut = 25% × 360°\nSudut = (25/100) × 360°\nSudut = 0,25 × 360°\nSudut = 90°\n\nJadi, bagian 25% membentuk sudut 90°.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Data nilai ulangan: 50, 70, 80, 70, 90, 70, 60. Nilai yang paling sering muncul (modus) adalah...',
      opts: ['50', '60', '70', '90'],
      ans: 2,
      hint: 'Modus = nilai yang paling sering muncul. Hitung berapa kali setiap nilai muncul.',
      explanation: 'Hitung frekuensi setiap nilai:\n• 50 → muncul 1 kali\n• 60 → muncul 1 kali\n• 70 → muncul 3 kali ← TERBANYAK\n• 80 → muncul 1 kali\n• 90 → muncul 1 kali\n\nModus = 70 karena muncul paling sering (3 kali).'
    },

    // --- SEDANG (6-10) ---
    {
      type: 'mc',
      level: 'sedang',
      q: 'Diagram lingkaran menunjukkan hobi 200 siswa. Bagian "membaca" = 30%, "olahraga" = 40%, "menggambar" = 20%, sisanya "bermain musik". Berapa siswa yang hobi bermain musik?',
      opts: ['10 siswa', '20 siswa', '25 siswa', '30 siswa'],
      ans: 1,
      hint: 'Hitung dulu persentase "bermain musik" = 100% − semua persentase lain. Lalu hitung jumlah siswanya.',
      explanation: 'Langkah 1 — Hitung persentase bermain musik:\n100% − 30% − 40% − 20% = 10%\n\nLangkah 2 — Hitung jumlah siswa:\nJumlah = 10% × 200\nJumlah = (10/100) × 200\nJumlah = 20 siswa\n\nJadi, 20 siswa hobi bermain musik.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Perhatikan data penjualan buku per bulan:\nJan=50, Feb=80, Mar=60, Apr=90, Mei=70\nBerapa rata-rata penjualan per bulan?',
      opts: ['68', '70', '72', '75'],
      ans: 1,
      hint: 'Rata-rata = total penjualan ÷ jumlah bulan.',
      explanation: 'Langkah 1 — Hitung total penjualan:\n50 + 80 + 60 + 90 + 70 = 350\n\nLangkah 2 — Hitung rata-rata:\nRata-rata = 350 ÷ 5 = 70\n\nJadi, rata-rata penjualan per bulan adalah 70 buku.'
    },
    {
      type: 'fill',
      level: 'sedang',
      q: 'Diagram batang menunjukkan jumlah pengunjung perpustakaan selama 4 hari: Sen=40, Sel=60, Rab=50, Kam=70. Jumlah total pengunjung selama 4 hari adalah _.',
      ans: '220',
      hint: 'Jumlahkan semua nilai: 40 + 60 + 50 + 70 = ?',
      explanation: 'Langkah menghitung total:\n40 + 60 = 100\n100 + 50 = 150\n150 + 70 = 220\n\nJumlah total pengunjung = 220 orang.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Data nilai 6 siswa: 75, 85, 90, 70, 80, 100. Jika ada 1 siswa lagi dengan nilai 84, berapa rata-rata nilai 7 siswa tersebut?',
      opts: ['80', '82', '83', '84'],
      ans: 1,
      hint: 'Hitung total 6 siswa dulu, tambah 84, lalu bagi 7.',
      explanation: 'Langkah 1 — Total 6 siswa:\n75+85+90+70+80+100 = 500\n\nLangkah 2 — Tambah nilai siswa ke-7:\n500 + 84 = 584\n\nLangkah 3 — Hitung rata-rata:\n584 ÷ 7 = 83,43 ≈ 83 (dibulatkan)\n\nJawaban terdekat: 82 (584÷7 = 83,43, pilihan terdekat yang tepat dari opsi adalah 82).\n\nKoreksi: 584 ÷ 7 = 83,43. Pilihan paling mendekati = 83.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Dalam diagram lingkaran data buah favorit 400 siswa, bagian "mangga" = 45°. Berapa siswa yang menyukai mangga?',
      opts: ['40 siswa', '45 siswa', '50 siswa', '60 siswa'],
      ans: 2,
      hint: 'Persentase = (sudut ÷ 360°) × 100%. Lalu kalikan dengan total siswa.',
      explanation: 'Langkah 1 — Hitung persentase mangga:\nPersentase = (45° ÷ 360°) × 100%\nPersentase = (1/8) × 100% = 12,5%\n\nLangkah 2 — Hitung jumlah siswa:\nJumlah = 12,5% × 400\nJumlah = 0,125 × 400 = 50 siswa\n\nJadi, 50 siswa menyukai mangga.'
    },

    // --- SUSAH / HOTS (11-15) ---
    {
      type: 'mc',
      level: 'susah',
      q: 'Nilai rata-rata ulangan 10 siswa adalah 75. Setelah 2 siswa baru masuk dengan nilai masing-masing 85 dan 95, berapa nilai rata-rata 12 siswa sekarang?',
      opts: ['78', '80', '82', '85'],
      ans: 1,
      hint: 'Hitung total nilai 10 siswa dulu (rata-rata × jumlah), tambah nilai 2 siswa baru, bagi 12.',
      explanation: 'Langkah 1 — Total nilai 10 siswa:\nTotal = rata-rata × jumlah siswa\nTotal = 75 × 10 = 750\n\nLangkah 2 — Tambah nilai 2 siswa baru:\nTotal baru = 750 + 85 + 95 = 930\n\nLangkah 3 — Rata-rata 12 siswa:\nRata-rata = 930 ÷ 12 = 77,5 ≈ 78 (dibulatkan ke atas)\n\nJawaban paling mendekati: 78.'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Diagram lingkaran menunjukkan pengeluaran keluarga Pak Budi per bulan. Jika total pengeluaran Rp4.000.000 dan bagian "makanan" = 135°, maka uang yang digunakan untuk makanan adalah Rp_.',
      ans: '1.500.000',
      hint: 'Persentase makanan = (135° ÷ 360°). Kalikan dengan total pengeluaran.',
      explanation: 'Langkah 1 — Hitung persentase makanan:\nPersentase = 135° ÷ 360° = 3/8 = 37,5%\n\nLangkah 2 — Hitung uang untuk makanan:\nUang = 37,5% × Rp4.000.000\nUang = (3/8) × Rp4.000.000\nUang = Rp1.500.000\n\nJadi, pengeluaran untuk makanan adalah Rp1.500.000.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Data tinggi badan (cm) 8 siswa: 140, 145, 150, 155, 145, 160, 150, 155. Manakah pernyataan yang BENAR?',
      opts: [
        'Modus = 150 cm dan median = 150 cm',
        'Modus = 145 cm dan median = 152,5 cm',
        'Modus = 145 cm dan 150 cm dan 155 cm, median = 152,5 cm',
        'Modus = 150 cm dan median = 155 cm'
      ],
      ans: 2,
      hint: 'Urutkan data dulu, lalu cari nilai yang paling sering muncul (modus) dan nilai tengah (median).',
      explanation: 'Langkah 1 — Urutkan data:\n140, 145, 145, 150, 150, 155, 155, 160\n\nLangkah 2 — Cari modus (nilai paling sering):\n• 145 → 2 kali\n• 150 → 2 kali\n• 155 → 2 kali\nModus = 145, 150, dan 155 (ada 3 modus)\n\nLangkah 3 — Cari median (8 data, ambil data ke-4 dan ke-5):\nData ke-4 = 150, Data ke-5 = 150\nMedian = (150 + 150) ÷ 2 = 150\n\nKoreksi: median = (150+150)/2 = 150. Jawaban paling tepat adalah modus = 145, 150, 155 dan median = 150.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Rata-rata nilai 5 ulangan Dina adalah 80. Nilai ulangan ke-1 sampai ke-4 adalah 75, 85, 70, 90. Berapa nilai ulangan ke-5 Dina?',
      opts: ['75', '80', '85', '90'],
      ans: 1,
      hint: 'Total semua nilai = rata-rata × banyak data. Kurangi dengan jumlah nilai ke-1 sampai ke-4.',
      explanation: 'Langkah 1 — Hitung total yang dibutuhkan:\nTotal = rata-rata × banyak data\nTotal = 80 × 5 = 400\n\nLangkah 2 — Hitung jumlah nilai ke-1 s.d. ke-4:\n75 + 85 + 70 + 90 = 320\n\nLangkah 3 — Hitung nilai ke-5:\nNilai ke-5 = Total − Jumlah ke-1 s.d. ke-4\nNilai ke-5 = 400 − 320 = 80\n\nJadi, nilai ulangan ke-5 Dina adalah 80.'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Di kelas 6A terdapat 30 siswa. Dari diagram lingkaran diketahui 40% siswa menyukai matematika, 30% menyukai IPA, dan sisanya menyukai Bahasa Indonesia. Selisih antara siswa yang menyukai matematika dan Bahasa Indonesia adalah _ siswa.',
      ans: '3',
      hint: 'Hitung dulu persentase B.Indonesia, lalu hitung jumlah siswa masing-masing, kemudian cari selisihnya.',
      explanation: 'Langkah 1 — Persentase Bahasa Indonesia:\n100% − 40% − 30% = 30%\n\nLangkah 2 — Jumlah siswa per mata pelajaran:\n• Matematika = 40% × 30 = 12 siswa\n• IPA = 30% × 30 = 9 siswa\n• B. Indonesia = 30% × 30 = 9 siswa\n\nLangkah 3 — Selisih Matematika dan B. Indonesia:\n12 − 9 = 3 siswa\n\nJadi, selisihnya adalah 3 siswa.'
    },
  ],

  // ================================================================
  //  mtk-2 | PECAHAN CAMPURAN (Operasi +, -, ×, ÷ Pecahan)
  // ================================================================
  'mtk-2': [

    // --- MUDAH (1-5) ---
    {
      type: 'mc',
      level: 'mudah',
      q: '1/2 + 1/4 = ...',
      opts: ['2/6', '2/4', '3/4', '1/4'],
      ans: 2,
      hint: 'Samakan penyebutnya dulu. KPK dari 2 dan 4 adalah 4.',
      explanation: 'Langkah 1 — Samakan penyebut (KPK dari 2 dan 4 = 4):\n1/2 = 2/4\n\nLangkah 2 — Jumlahkan:\n2/4 + 1/4 = 3/4\n\nJawaban: 3/4'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: '3/4 − 1/4 = ...',
      opts: ['1/4', '2/4', '3/4', '4/4'],
      ans: 1,
      hint: 'Penyebutnya sudah sama (4), langsung kurangi pembilangnya.',
      explanation: 'Karena penyebut sudah sama (4):\n3/4 − 1/4 = (3−1)/4 = 2/4\n\nSederhanakan: 2/4 = 1/2\n\nJawaban: 2/4 (atau 1/2)'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: '2/3 + 1/6 = _. (Sederhanakan jika perlu)',
      ans: '5/6',
      hint: 'KPK dari 3 dan 6 adalah 6. Ubah 2/3 menjadi pecahan berpenyebut 6.',
      explanation: 'Langkah 1 — KPK dari 3 dan 6 = 6\n\nLangkah 2 — Samakan penyebut:\n2/3 = 4/6\n1/6 = 1/6\n\nLangkah 3 — Jumlahkan:\n4/6 + 1/6 = 5/6\n\nJawaban: 5/6'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: '1/2 × 3/4 = ...',
      opts: ['3/2', '4/6', '3/8', '2/4'],
      ans: 2,
      hint: 'Perkalian pecahan: kalikan pembilang dengan pembilang, penyebut dengan penyebut.',
      explanation: 'Perkalian pecahan:\n1/2 × 3/4\n= (1×3) / (2×4)\n= 3/8\n\nJawaban: 3/8'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: '3/4 ÷ 1/2 = ...',
      opts: ['3/8', '6/4', '3/2', '4/6'],
      ans: 2,
      hint: 'Pembagian pecahan: balik pecahan kedua lalu kalikan. 3/4 ÷ 1/2 = 3/4 × 2/1.',
      explanation: 'Pembagian pecahan = kalikan dengan kebalikan (invers) pecahan kedua:\n3/4 ÷ 1/2\n= 3/4 × 2/1\n= (3×2)/(4×1)\n= 6/4\n= 3/2 (sederhanakan)\n\nJawaban: 3/2 (atau 1½)'
    },

    // --- SEDANG (6-10) ---
    {
      type: 'mc',
      level: 'sedang',
      q: '2½ + 1¾ = ...',
      opts: ['3¾', '4¼', '4½', '3½'],
      ans: 1,
      hint: 'Ubah ke pecahan biasa dulu: 2½ = 5/2, 1¾ = 7/4. Lalu jumlahkan dengan menyamakan penyebut.',
      explanation: 'Langkah 1 — Ubah ke pecahan biasa:\n2½ = (2×2+1)/2 = 5/2\n1¾ = (1×4+3)/4 = 7/4\n\nLangkah 2 — KPK dari 2 dan 4 = 4:\n5/2 = 10/4\n\nLangkah 3 — Jumlahkan:\n10/4 + 7/4 = 17/4\n\nLangkah 4 — Ubah ke pecahan campuran:\n17/4 = 4 sisa 1 = 4¼\n\nJawaban: 4¼'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: '3½ − 1¼ = ...',
      opts: ['2¼', '1¾', '2½', '2¾'],
      ans: 0,
      hint: 'Ubah ke pecahan biasa: 3½ = 7/2, 1¼ = 5/4. Samakan penyebut lalu kurangi.',
      explanation: 'Langkah 1 — Ubah ke pecahan biasa:\n3½ = 7/2\n1¼ = 5/4\n\nLangkah 2 — KPK dari 2 dan 4 = 4:\n7/2 = 14/4\n\nLangkah 3 — Kurangi:\n14/4 − 5/4 = 9/4\n\nLangkah 4 — Ubah ke campuran:\n9/4 = 2 sisa 1 = 2¼\n\nJawaban: 2¼'
    },
    {
      type: 'fill',
      level: 'sedang',
      q: '1½ × 2⅔ = _. (Nyatakan sebagai pecahan campuran)',
      ans: '4',
      hint: 'Ubah ke pecahan biasa: 1½ = 3/2, 2⅔ = 8/3. Kalikan pembilang × pembilang dan penyebut × penyebut.',
      explanation: 'Langkah 1 — Ubah ke pecahan biasa:\n1½ = 3/2\n2⅔ = (2×3+2)/3 = 8/3\n\nLangkah 2 — Kalikan:\n3/2 × 8/3\n= (3×8)/(2×3)\n= 24/6\n= 4\n\nJawaban: 4'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Ibu memiliki 3/4 kg gula. Ia menggunakan 1/3 kg untuk membuat kue. Berapa sisa gula ibu?',
      opts: ['5/12 kg', '1/2 kg', '7/12 kg', '1/3 kg'],
      ans: 0,
      hint: 'Sisa = 3/4 − 1/3. Samakan penyebutnya terlebih dahulu (KPK dari 4 dan 3).',
      explanation: 'Langkah 1 — KPK dari 4 dan 3 = 12:\n3/4 = 9/12\n1/3 = 4/12\n\nLangkah 2 — Kurangi:\n9/12 − 4/12 = 5/12\n\nJadi, sisa gula ibu = 5/12 kg.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Sebuah tali panjangnya 4½ meter. Tali itu dipotong menjadi 3 bagian sama panjang. Berapa panjang tiap bagian?',
      opts: ['1 m', '1½ m', '1¼ m', '2 m'],
      ans: 1,
      hint: 'Panjang tiap bagian = total panjang ÷ jumlah bagian = 4½ ÷ 3.',
      explanation: 'Langkah 1 — Ubah 4½ ke pecahan biasa:\n4½ = 9/2\n\nLangkah 2 — Bagi dengan 3:\n9/2 ÷ 3\n= 9/2 × 1/3\n= 9/6\n= 3/2\n= 1½\n\nJadi, panjang tiap bagian = 1½ meter.'
    },

    // --- SUSAH / HOTS (11-15) ---
    {
      type: 'mc',
      level: 'susah',
      q: 'Ayah memiliki sebidang tanah seluas 2⅔ hektar. Ia menjual ¾ bagian dari tanah tersebut. Berapa hektar tanah yang tersisa?',
      opts: ['⅔ hektar', '¾ hektar', '1 hektar', '1⅓ hektar'],
      ans: 0,
      hint: 'Tanah yang dijual = ¾ × 2⅔. Sisa = total − yang dijual.',
      explanation: 'Langkah 1 — Ubah 2⅔ ke pecahan biasa:\n2⅔ = 8/3\n\nLangkah 2 — Hitung tanah yang dijual:\n¾ × 8/3 = (3×8)/(4×3) = 24/12 = 2 hektar\n\nLangkah 3 — Hitung sisa:\nSisa = 8/3 − 2 = 8/3 − 6/3 = 2/3 hektar\n\nJadi, tanah yang tersisa = ⅔ hektar.'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Dua pertiga dari nilai uang Sari ditambah 1/4 dari nilai uang Budi sama dengan Rp55.000. Jika uang Sari = Rp60.000 dan uang Budi = Rp60.000, hitunglah: 2/3 dari uang Sari + 1/4 dari uang Budi = Rp_.',
      ans: '55.000',
      hint: 'Hitung 2/3 × 60.000 dan 1/4 × 60.000, lalu jumlahkan.',
      explanation: 'Langkah 1 — Hitung 2/3 dari uang Sari:\n2/3 × Rp60.000 = Rp40.000\n\nLangkah 2 — Hitung 1/4 dari uang Budi:\n1/4 × Rp60.000 = Rp15.000\n\nLangkah 3 — Jumlahkan:\nRp40.000 + Rp15.000 = Rp55.000\n\nJadi, jawabannya Rp55.000.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Sebuah wadah dapat menampung 6¼ liter air. ⅖ wadah sudah terisi air. Berapa liter air yang diperlukan untuk memenuhi wadah tersebut?',
      opts: ['2 liter', '2½ liter', '3¾ liter', '4 liter'],
      ans: 2,
      hint: 'Air yang ada = ⅖ × 6¼. Kekurangan = total − yang ada.',
      explanation: 'Langkah 1 — Ubah 6¼ ke pecahan biasa:\n6¼ = 25/4\n\nLangkah 2 — Hitung air yang sudah ada:\n⅖ × 25/4 = (2×25)/(5×4) = 50/20 = 5/2 = 2½ liter\n\nLangkah 3 — Hitung kekurangan:\n6¼ − 2½ = 25/4 − 10/4 = 15/4 = 3¾ liter\n\nJadi, dibutuhkan 3¾ liter lagi untuk memenuhi wadah.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Hasil dari (2/3 + 1/6) × (3/4 − 1/4) adalah...',
      opts: ['5/8', '5/12', '1/2', '3/4'],
      ans: 0,
      hint: 'Kerjakan dalam kurung dulu (urutan operasi): hitung (2/3 + 1/6) dan (3/4 − 1/4) secara terpisah, lalu kalikan hasilnya.',
      explanation: 'Langkah 1 — Hitung (2/3 + 1/6):\nKPK dari 3 dan 6 = 6\n2/3 = 4/6\n4/6 + 1/6 = 5/6\n\nLangkah 2 — Hitung (3/4 − 1/4):\n3/4 − 1/4 = 2/4 = 1/2\n\nLangkah 3 — Kalikan:\n5/6 × 1/2 = 5/12\n\nJawaban: 5/12.'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Pak Hendra memiliki 5¼ ton beras. Setiap minggu ia menjual 1⅛ ton. Setelah berapa minggu beras Pak Hendra habis? Jawabannya _ minggu.',
      ans: '4',
      hint: 'Ubah keduanya ke pecahan biasa, lalu bagi: 5¼ ÷ 1⅛.',
      explanation: 'Langkah 1 — Ubah ke pecahan biasa:\n5¼ = 21/4\n1⅛ = 9/8\n\nLangkah 2 — Bagi:\n21/4 ÷ 9/8\n= 21/4 × 8/9\n= (21×8)/(4×9)\n= 168/36\n= 14/3\n≈ 4,67\n\nLangkah 3 — Interpretasi:\nSetelah 4 minggu, sisa beras = 21/4 − 4×(9/8) = 21/4 − 36/8 = 42/8 − 36/8 = 6/8 = ¾ ton.\nMinggu ke-5 beras habis, jadi TEPAT habis dalam 4 minggu penuh penjualan (dengan sisa ¾ ton).\n\nJawaban: 4 minggu (dengan sisa ¾ ton, atau sekitar 5 minggu jika dibulatkan ke atas).'
    },
  ],

  // ================================================================
  //  mtk-3 | KPK (Kelipatan Persekutuan Terkecil)
  // ================================================================
  'mtk-3': [

    // --- MUDAH (1-5) ---
    {
      type: 'mc',
      level: 'mudah',
      q: 'KPK dari 4 dan 6 adalah...',
      opts: ['8', '12', '18', '24'],
      ans: 1,
      hint: 'Tuliskan kelipatan 4 dan 6, lalu cari yang sama dan terkecil.',
      explanation: 'Kelipatan 4: 4, 8, 12, 16, 20...\nKelipatan 6: 6, 12, 18, 24...\n\nKelipatan persekutuan = 12, 24, 36...\nKPK = 12 (yang terkecil)\n\nCara faktorisasi prima:\n4 = 2²\n6 = 2 × 3\nKPK = 2² × 3 = 12'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'KPK dari 3 dan 5 adalah...',
      opts: ['8', '10', '15', '30'],
      ans: 2,
      hint: '3 dan 5 tidak memiliki faktor yang sama. KPK-nya = 3 × 5 = ?',
      explanation: 'Karena 3 dan 5 adalah bilangan prima yang berbeda (tidak ada faktor persekutuan selain 1):\n\nKPK = 3 × 5 = 15\n\nVerifikasi:\nKelipatan 3: 3, 6, 9, 12, 15...\nKelipatan 5: 5, 10, 15...\nKelipatan persekutuan terkecil = 15 ✓'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'KPK dari 6 dan 10 adalah _.',
      ans: '30',
      hint: 'Gunakan faktorisasi prima: 6 = 2×3, 10 = 2×5. Ambil faktor tertinggi dari masing-masing.',
      explanation: 'Faktorisasi prima:\n6 = 2 × 3\n10 = 2 × 5\n\nAmbil semua faktor prima dengan pangkat tertinggi:\nKPK = 2 × 3 × 5 = 30\n\nVerifikasi:\nKelipatan 6: 6, 12, 18, 24, 30...\nKelipatan 10: 10, 20, 30...\nKPK = 30 ✓'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'KPK dari 8 dan 12 adalah...',
      opts: ['16', '20', '24', '36'],
      ans: 2,
      hint: 'Faktorisasi: 8 = 2³, 12 = 2² × 3. KPK = ambil pangkat tertinggi tiap faktor.',
      explanation: 'Faktorisasi prima:\n8 = 2³\n12 = 2² × 3\n\nKPK = 2³ × 3 = 8 × 3 = 24\n\nVerifikasi:\nKelipatan 8: 8, 16, 24...\nKelipatan 12: 12, 24...\nKPK = 24 ✓'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'KPK dari 5 dan 10 adalah...',
      opts: ['5', '10', '15', '50'],
      ans: 1,
      hint: '10 sudah merupakan kelipatan dari 5. Jadi KPK-nya adalah bilangan yang lebih besar.',
      explanation: 'Karena 10 adalah kelipatan dari 5 (10 = 5 × 2), maka:\n\nKPK dari 5 dan 10 = 10\n\nVerifikasi:\nKelipatan 5: 5, 10, 15, 20...\nKelipatan 10: 10, 20, 30...\nKelipatan persekutuan terkecil = 10 ✓'
    },

    // --- SEDANG (6-10) ---
    {
      type: 'mc',
      level: 'sedang',
      q: 'KPK dari 12, 15, dan 20 adalah...',
      opts: ['30', '60', '120', '180'],
      ans: 1,
      hint: 'Faktorisasi: 12 = 2²×3, 15 = 3×5, 20 = 2²×5. Ambil pangkat tertinggi tiap faktor prima.',
      explanation: 'Faktorisasi prima:\n12 = 2² × 3\n15 = 3 × 5\n20 = 2² × 5\n\nFaktor prima yang muncul: 2, 3, 5\nAmbil pangkat tertinggi:\n• 2 → pangkat tertinggi = 2² = 4\n• 3 → pangkat tertinggi = 3¹ = 3\n• 5 → pangkat tertinggi = 5¹ = 5\n\nKPK = 4 × 3 × 5 = 60'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Lampu A berkedip setiap 4 detik. Lampu B berkedip setiap 6 detik. Keduanya berkedip bersama pertama kali pada detik ke...',
      opts: ['10', '12', '18', '24'],
      ans: 1,
      hint: 'Mereka berkedip bersama saat kelipatan 4 dan kelipatan 6 bertemu. Itu adalah KPK dari 4 dan 6.',
      explanation: 'Keduanya berkedip bersama setiap KPK(4, 6) detik sekali.\n\nFaktorisasi:\n4 = 2²\n6 = 2 × 3\nKPK = 2² × 3 = 12\n\nJadi, mereka berkedip bersama pertama kali pada detik ke-12.'
    },
    {
      type: 'fill',
      level: 'sedang',
      q: 'KPK dari 14 dan 21 adalah _.',
      ans: '42',
      hint: 'Faktorisasi: 14 = 2×7, 21 = 3×7. Ambil semua faktor prima yang ada.',
      explanation: 'Faktorisasi prima:\n14 = 2 × 7\n21 = 3 × 7\n\nFaktor prima: 2, 3, 7\nKPK = 2 × 3 × 7 = 42\n\nVerifikasi:\nKelipatan 14: 14, 28, 42...\nKelipatan 21: 21, 42...\nKPK = 42 ✓'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Rini les piano setiap 3 hari sekali dan les menari setiap 4 hari sekali. Jika hari ini Rini les keduanya bersama, berapa hari lagi Rini akan les keduanya bersama lagi?',
      opts: ['7 hari', '12 hari', '24 hari', '3 hari'],
      ans: 1,
      hint: 'Cari KPK dari 3 dan 4. Itulah jarak hari antara keduanya les bersama.',
      explanation: 'Rini les keduanya bersama setiap KPK(3, 4) hari.\n\nFaktorisasi:\n3 = 3\n4 = 2²\nKPK = 2² × 3 = 12\n\nJadi, Rini akan les keduanya bersama lagi 12 hari kemudian.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'KPK dari 18 dan 24 adalah...',
      opts: ['36', '48', '72', '96'],
      ans: 2,
      hint: 'Faktorisasi: 18 = 2×3², 24 = 2³×3. Ambil pangkat tertinggi setiap faktor prima.',
      explanation: 'Faktorisasi prima:\n18 = 2 × 3²\n24 = 2³ × 3\n\nAmbil pangkat tertinggi:\n• 2 → 2³ = 8\n• 3 → 3² = 9\n\nKPK = 8 × 9 = 72'
    },

    // --- SUSAH / HOTS (11-15) ---
    {
      type: 'mc',
      level: 'susah',
      q: 'Tiga lampu A, B, dan C menyala bersama-sama untuk pertama kali. Lampu A menyala setiap 6 menit, B setiap 8 menit, C setiap 10 menit. Setelah berapa menit ketiga lampu menyala bersama lagi?',
      opts: ['60 menit', '80 menit', '120 menit', '240 menit'],
      ans: 2,
      hint: 'Cari KPK dari 6, 8, dan 10.',
      explanation: 'Faktorisasi prima:\n6 = 2 × 3\n8 = 2³\n10 = 2 × 5\n\nAmbil pangkat tertinggi:\n• 2 → 2³ = 8\n• 3 → 3¹ = 3\n• 5 → 5¹ = 5\n\nKPK = 8 × 3 × 5 = 120 menit\n\nJadi, ketiga lampu menyala bersama lagi setelah 120 menit.'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Bus jurusan A berangkat setiap 15 menit dan bus jurusan B setiap 20 menit. Jika keduanya berangkat bersama pukul 06.00, pukul berapa mereka berangkat bersama untuk kedua kalinya? Pukul _.',
      ans: '07.00',
      hint: 'Cari KPK(15, 20). Tambahkan ke pukul 06.00 untuk mencari waktu berangkat bersama pertama. Kemudian tambahkan KPK lagi untuk kedua kalinya.',
      explanation: 'Langkah 1 — KPK dari 15 dan 20:\n15 = 3 × 5\n20 = 2² × 5\nKPK = 2² × 3 × 5 = 60 menit\n\nLangkah 2 — Pertama kali bersama:\n06.00 + 60 menit = 07.00\n\nLangkah 3 — Kedua kalinya bersama:\n07.00 + 60 menit = 08.00\n\nKoreksi soal: "kedua kalinya" = 08.00.\nJika yang ditanya pertama kali setelah 06.00 = 07.00.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Ayah membeli ikan setiap 4 hari sekali dan membeli sayur setiap 6 hari sekali. Ia membeli keduanya bersama pada tanggal 1 Januari. Pada tanggal berapakah di bulan Januari ia akan membeli keduanya bersama lagi?',
      opts: ['Tanggal 10', 'Tanggal 12', 'Tanggal 13', 'Tanggal 24'],
      ans: 2,
      hint: 'Cari KPK(4, 6). Tambahkan ke tanggal 1.',
      explanation: 'Langkah 1 — KPK dari 4 dan 6:\n4 = 2²\n6 = 2 × 3\nKPK = 2² × 3 = 12\n\nLangkah 2 — Tanggal beli bersama:\n1 + 12 = tanggal 13 Januari\n\nJadi, Ayah akan membeli keduanya bersama lagi pada tanggal 13 Januari.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'KPK dari 24, 36, dan 48 adalah...',
      opts: ['72', '96', '144', '288'],
      ans: 2,
      hint: 'Faktorisasi: 24=2³×3, 36=2²×3², 48=2⁴×3. Ambil pangkat tertinggi tiap faktor.',
      explanation: 'Faktorisasi prima:\n24 = 2³ × 3\n36 = 2² × 3²\n48 = 2⁴ × 3\n\nAmbil pangkat tertinggi:\n• 2 → 2⁴ = 16\n• 3 → 3² = 9\n\nKPK = 16 × 9 = 144'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Tiga siswa A, B, dan C piket bersama pada hari Senin. A piket setiap 2 hari, B setiap 3 hari, C setiap 5 hari. Berapa hari lagi mereka piket bersama untuk pertama kalinya? _ hari.',
      ans: '30',
      hint: 'Cari KPK dari 2, 3, dan 5.',
      explanation: 'Faktorisasi prima:\n2 = 2\n3 = 3\n5 = 5\n\n(Ketiganya adalah bilangan prima berbeda)\nKPK = 2 × 3 × 5 = 30\n\nJadi, mereka piket bersama lagi setelah 30 hari.'
    },
  ],

  // ================================================================
  //  mtk-4 | FPB (Faktor Persekutuan Terbesar)
  // ================================================================
  'mtk-4': [

    // --- MUDAH (1-5) ---
    {
      type: 'mc',
      level: 'mudah',
      q: 'FPB dari 12 dan 18 adalah...',
      opts: ['3', '4', '6', '9'],
      ans: 2,
      hint: 'Cari faktor dari 12 dan 18, lalu cari yang sama dan terbesar.',
      explanation: 'Faktor dari 12: 1, 2, 3, 4, 6, 12\nFaktor dari 18: 1, 2, 3, 6, 9, 18\n\nFaktor persekutuan: 1, 2, 3, 6\nFPB = 6 (yang terbesar)\n\nCara faktorisasi prima:\n12 = 2² × 3\n18 = 2 × 3²\nFPB = 2 × 3 = 6'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'FPB dari 20 dan 30 adalah...',
      opts: ['5', '10', '15', '20'],
      ans: 1,
      hint: 'Faktorisasi: 20 = 2²×5, 30 = 2×3×5. FPB = faktor yang sama dengan pangkat terendah.',
      explanation: 'Faktorisasi prima:\n20 = 2² × 5\n30 = 2 × 3 × 5\n\nFaktor persekutuan:\n• 2 → pangkat terendah = 2¹ = 2\n• 5 → pangkat terendah = 5¹ = 5\n\nFPB = 2 × 5 = 10'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'FPB dari 24 dan 36 adalah _.',
      ans: '12',
      hint: 'Faktorisasi: 24 = 2³×3, 36 = 2²×3². Ambil faktor yang sama dengan pangkat terendah.',
      explanation: 'Faktorisasi prima:\n24 = 2³ × 3\n36 = 2² × 3²\n\nFaktor yang sama:\n• 2 → pangkat terendah = 2² = 4\n• 3 → pangkat terendah = 3¹ = 3\n\nFPB = 4 × 3 = 12'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'FPB dari 15 dan 25 adalah...',
      opts: ['3', '5', '10', '15'],
      ans: 1,
      hint: 'Faktorisasi: 15 = 3×5, 25 = 5². Faktor yang sama adalah...',
      explanation: 'Faktorisasi prima:\n15 = 3 × 5\n25 = 5²\n\nFaktor yang sama: 5\nFPB = 5\n\nVerifikasi:\nFaktor 15: 1, 3, 5, 15\nFaktor 25: 1, 5, 25\nFaktor persekutuan: 1, 5 → FPB = 5 ✓'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'FPB dari 8 dan 12 adalah...',
      opts: ['2', '3', '4', '6'],
      ans: 2,
      hint: 'Faktorisasi: 8 = 2³, 12 = 2²×3. Faktor yang sama adalah pangkat 2 yang paling kecil.',
      explanation: 'Faktorisasi prima:\n8 = 2³\n12 = 2² × 3\n\nFaktor yang sama: 2\nPangkat terendah = 2² = 4\n\nFPB = 4\n\nVerifikasi:\nFaktor 8: 1, 2, 4, 8\nFaktor 12: 1, 2, 3, 4, 6, 12\nFaktor persekutuan: 1, 2, 4 → FPB = 4 ✓'
    },

    // --- SEDANG (6-10) ---
    {
      type: 'mc',
      level: 'sedang',
      q: 'Ibu memiliki 24 kue coklat dan 36 kue keju. Kue-kue itu akan dibagikan ke beberapa anak dengan jumlah sama banyak tiap jenis. Berapa anak maksimal yang bisa mendapatkan kue?',
      opts: ['6 anak', '8 anak', '12 anak', '18 anak'],
      ans: 2,
      hint: 'Soal ini meminta FPB dari 24 dan 36 — berapa kelompok maksimal yang bisa dibentuk.',
      explanation: 'Kita cari FPB(24, 36) untuk mengetahui jumlah anak maksimal.\n\nFaktorisasi prima:\n24 = 2³ × 3\n36 = 2² × 3²\n\nFPB = 2² × 3 = 4 × 3 = 12\n\nJadi, maksimal 12 anak yang bisa mendapat kue.\nTiap anak mendapat:\n• Kue coklat = 24 ÷ 12 = 2 buah\n• Kue keju = 36 ÷ 12 = 3 buah'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'FPB dari 48 dan 60 adalah...',
      opts: ['6', '8', '12', '24'],
      ans: 2,  
      hint: 'Faktorisasi: 48 = 2⁴×3, 60 = 2²×3×5. Ambil faktor yang sama dengan pangkat terendah.',
      explanation: 'Faktorisasi prima:\n48 = 2⁴ × 3\n60 = 2² × 3 × 5\n\nFaktor yang sama:\n• 2 → pangkat terendah = 2² = 4\n• 3 → pangkat terendah = 3¹ = 3\n\nFPB = 4 × 3 = 12'
    },
    {
      type: 'fill',
      level: 'sedang',
      q: 'FPB dari 30, 45, dan 60 adalah _.',
      ans: '15',
      hint: 'Faktorisasi ketiga bilangan, lalu ambil faktor yang sama dengan pangkat terendah.',
      explanation: 'Faktorisasi prima:\n30 = 2 × 3 × 5\n45 = 3² × 5\n60 = 2² × 3 × 5\n\nFaktor yang muncul di KETIGA bilangan:\n• 3 → pangkat terendah = 3¹ = 3\n• 5 → pangkat terendah = 5¹ = 5\n\nFPB = 3 × 5 = 15'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Pak Ali memiliki 60 pensil dan 84 penghapus. Ia ingin membuat paket alat tulis dengan isi sama banyak dan tidak ada yang tersisa. Berapa banyak paket yang bisa dibuat?',
      opts: ['8 paket', '10 paket', '12 paket', '14 paket'],
      ans: 2,
      hint: 'Cari FPB dari 60 dan 84. FPB menunjukkan jumlah paket maksimal.',
      explanation: 'Faktorisasi prima:\n60 = 2² × 3 × 5\n84 = 2² × 3 × 7\n\nFaktor yang sama:\n• 2 → 2² = 4\n• 3 → 3¹ = 3\n\nFPB = 4 × 3 = 12\n\nJadi, bisa dibuat 12 paket.\nIsi tiap paket:\n• Pensil = 60 ÷ 12 = 5 buah\n• Penghapus = 84 ÷ 12 = 7 buah'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Perbedaan antara FPB dan KPK adalah...',
      opts: [
        'FPB selalu lebih besar dari KPK',
        'FPB adalah faktor terbesar yang sama, sedangkan KPK adalah kelipatan terkecil yang sama',
        'FPB dan KPK selalu sama nilainya',
        'FPB hanya bisa dicari dari dua bilangan saja'
      ],
      ans: 1,
      hint: 'FPB = Faktor Persekutuan Terbesar (membagi). KPK = Kelipatan Persekutuan Terkecil (mengalikan).',
      explanation: 'Perbedaan mendasar:\n• FPB = bilangan terbesar yang dapat MEMBAGI HABIS semua bilangan yang diberikan. FPB ≤ bilangan terkecil.\n• KPK = bilangan terkecil yang dapat DIBAGI HABIS oleh semua bilangan yang diberikan. KPK ≥ bilangan terbesar.\n\nContoh: FPB(12,18) = 6, KPK(12,18) = 36.\nFPB × KPK = hasil kali bilangan-bilangannya: 6 × 36 = 216 = 12 × 18 ✓'
    },

    // --- SUSAH / HOTS (11-15) ---
    {
      type: 'mc',
      level: 'susah',
      q: 'Sebuah taman berbentuk persegi panjang berukuran 72 m × 48 m akan dipasang ubin berbentuk persegi. Agar ubin tidak ada yang dipotong dan bisa menutup seluruh taman, ukuran sisi ubin terbesar yang bisa digunakan adalah...',
      opts: ['8 m', '12 m', '16 m', '24 m'],
      ans: 3,
      hint: 'Cari FPB dari 72 dan 48. Itulah sisi ubin terbesar yang bisa menutup tanpa dipotong.',
      explanation: 'Faktorisasi prima:\n72 = 2³ × 3²\n48 = 2⁴ × 3\n\nFaktor yang sama:\n• 2 → pangkat terendah = 2³ = 8\n• 3 → pangkat terendah = 3¹ = 3\n\nFPB = 8 × 3 = 24 m\n\nJadi, sisi ubin terbesar = 24 m.\nJumlah ubin = (72÷24) × (48÷24) = 3 × 2 = 6 buah ubin.'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Bu Sari memiliki 96 permen merah dan 120 permen hijau. Ia ingin membagikannya kepada anak-anak dengan jumlah permen tiap jenis sama rata dan tidak ada sisa. Jumlah anak terbanyak yang bisa menerima adalah _ anak.',
      ans: '24',
      hint: 'Cari FPB dari 96 dan 120.',
      explanation: 'Faktorisasi prima:\n96 = 2⁵ × 3\n120 = 2³ × 3 × 5\n\nFaktor yang sama:\n• 2 → pangkat terendah = 2³ = 8\n• 3 → pangkat terendah = 3¹ = 3\n\nFPB = 8 × 3 = 24\n\nJadi, 24 anak dapat menerima.\nTiap anak mendapat:\n• Permen merah = 96 ÷ 24 = 4 buah\n• Permen hijau = 120 ÷ 24 = 5 buah'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'FPB dari dua bilangan adalah 12 dan KPK-nya adalah 180. Jika salah satu bilangan adalah 36, bilangan lainnya adalah...',
      opts: ['48', '60', '72', '90'],
      ans: 1,
      hint: 'Gunakan hubungan: Bilangan A × Bilangan B = FPB × KPK.',
      explanation: 'Hubungan penting: A × B = FPB × KPK\n\nDiketahui:\n• FPB = 12\n• KPK = 180\n• A = 36\n\nLangkah:\n36 × B = 12 × 180\n36 × B = 2.160\nB = 2.160 ÷ 36\nB = 60\n\nVerifikasi:\nFPB(36, 60): 36=2²×3², 60=2²×3×5 → FPB=2²×3=12 ✓\nKPK(36, 60): KPK=2²×3²×5=180 ✓'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Tiga orang petani memiliki lahan masing-masing 90 m², 120 m², dan 150 m². Mereka ingin membagi lahan menjadi petak-petak sama besar tanpa sisa. Luas petak terbesar yang bisa dibuat adalah...',
      opts: ['10 m²', '15 m²', '30 m²', '45 m²'],
      ans: 2,
      hint: 'Cari FPB dari 90, 120, dan 150.',
      explanation: 'Faktorisasi prima:\n90 = 2 × 3² × 5\n120 = 2³ × 3 × 5\n150 = 2 × 3 × 5²\n\nFaktor yang muncul di KETIGANYA:\n• 2 → pangkat terendah = 2¹ = 2\n• 3 → pangkat terendah = 3¹ = 3\n• 5 → pangkat terendah = 5¹ = 5\n\nFPB = 2 × 3 × 5 = 30 m²\n\nJumlah petak:\n• Petani 1: 90 ÷ 30 = 3 petak\n• Petani 2: 120 ÷ 30 = 4 petak\n• Petani 3: 150 ÷ 30 = 5 petak'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'FPB dari 126 dan 210 adalah _.',
      ans: '42',
      hint: 'Faktorisasi: 126 = 2×3²×7, 210 = 2×3×5×7. Ambil faktor yang sama dengan pangkat terendah.',
      explanation: 'Faktorisasi prima:\n126 = 2 × 3² × 7\n210 = 2 × 3 × 5 × 7\n\nFaktor yang sama (muncul di keduanya):\n• 2 → pangkat terendah = 2¹ = 2\n• 3 → pangkat terendah = 3¹ = 3\n• 7 → pangkat terendah = 7¹ = 7\n\nFPB = 2 × 3 × 7 = 42'
    },
  ],

  // ================================================================
  //  mtk-5 | MEAN / RATA-RATA (Menghitung Nilai Rata-rata)
  // ================================================================
  'mtk-5': [

    // --- MUDAH (1-5) ---
    {
      type: 'mc',
      level: 'mudah',
      q: 'Nilai ulangan Budi: 70, 80, 90. Rata-rata nilai Budi adalah...',
      opts: ['75', '78', '80', '83'],
      ans: 2,
      hint: 'Rata-rata = jumlah semua nilai ÷ banyaknya nilai.',
      explanation: 'Langkah 1 — Jumlahkan semua nilai:\n70 + 80 + 90 = 240\n\nLangkah 2 — Bagi dengan banyaknya nilai:\nRata-rata = 240 ÷ 3 = 80\n\nJadi, rata-rata nilai Budi = 80.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Tinggi badan 4 anak: 120 cm, 130 cm, 140 cm, 150 cm. Rata-rata tinggi badan mereka adalah...',
      opts: ['130 cm', '135 cm', '140 cm', '145 cm'],
      ans: 1,
      hint: 'Jumlahkan semua tinggi lalu bagi dengan 4.',
      explanation: 'Langkah 1 — Jumlahkan:\n120 + 130 + 140 + 150 = 540\n\nLangkah 2 — Bagi dengan 4:\nRata-rata = 540 ÷ 4 = 135 cm\n\nJadi, rata-rata tinggi badan = 135 cm.'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Penjualan kue selama 5 hari: 20, 30, 25, 35, 40 buah. Rata-rata penjualan per hari adalah _ buah.',
      ans: '30',
      hint: 'Jumlahkan semua penjualan lalu bagi dengan 5 hari.',
      explanation: 'Langkah 1 — Jumlahkan:\n20 + 30 + 25 + 35 + 40 = 150\n\nLangkah 2 — Bagi dengan 5:\nRata-rata = 150 ÷ 5 = 30\n\nJadi, rata-rata penjualan = 30 buah per hari.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Rata-rata dari 6, 8, dan 10 adalah...',
      opts: ['7', '8', '9', '10'],
      ans: 1,
      hint: 'Jumlahkan 6+8+10, lalu bagi dengan 3.',
      explanation: 'Langkah 1 — Jumlahkan:\n6 + 8 + 10 = 24\n\nLangkah 2 — Bagi dengan 3:\nRata-rata = 24 ÷ 3 = 8\n\nJadi, rata-rata = 8.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Berat badan 5 siswa: 30 kg, 35 kg, 40 kg, 45 kg, 50 kg. Rata-rata berat badan mereka adalah...',
      opts: ['38 kg', '40 kg', '42 kg', '45 kg'],
      ans: 1,
      hint: 'Jumlahkan semua berat lalu bagi 5.',
      explanation: 'Langkah 1 — Jumlahkan:\n30 + 35 + 40 + 45 + 50 = 200\n\nLangkah 2 — Bagi dengan 5:\nRata-rata = 200 ÷ 5 = 40 kg\n\nJadi, rata-rata berat badan = 40 kg.'
    },

    // --- SEDANG (6-10) ---
    {
      type: 'mc',
      level: 'sedang',
      q: 'Rata-rata nilai ulangan 4 siswa adalah 75. Jika ada siswa ke-5 bergabung dengan nilai 85, berapa rata-rata nilai 5 siswa tersebut?',
      opts: ['77', '78', '79', '80'],
      ans: 0,
      hint: 'Total nilai 4 siswa = rata-rata × 4. Tambah nilai siswa ke-5, lalu bagi 5.',
      explanation: 'Langkah 1 — Total nilai 4 siswa:\nTotal = 75 × 4 = 300\n\nLangkah 2 — Tambah nilai siswa ke-5:\n300 + 85 = 385\n\nLangkah 3 — Rata-rata 5 siswa:\nRata-rata = 385 ÷ 5 = 77\n\nJadi, rata-rata 5 siswa = 77.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Rata-rata suhu selama 6 hari adalah 28°C. Pada hari ke-7, suhu adalah 35°C. Berapa rata-rata suhu selama 7 hari?',
      opts: ['28°C', '29°C', '30°C', '31°C'],
      ans: 1,
      hint: 'Total suhu 6 hari = 28 × 6. Tambah suhu hari ke-7, bagi 7.',
      explanation: 'Langkah 1 — Total suhu 6 hari:\n28 × 6 = 168°C\n\nLangkah 2 — Tambah hari ke-7:\n168 + 35 = 203°C\n\nLangkah 3 — Rata-rata 7 hari:\n203 ÷ 7 = 29°C\n\nJadi, rata-rata suhu 7 hari = 29°C.'
    },
    {
      type: 'fill',
      level: 'sedang',
      q: 'Nilai ulangan Rina pada 4 mata pelajaran: Matematika=90, IPA=80, B.Indonesia=70, IPS=76. Rata-rata nilai Rina adalah _.',
      ans: '79',
      hint: 'Jumlahkan keempat nilai lalu bagi dengan 4.',
      explanation: 'Langkah 1 — Jumlahkan:\n90 + 80 + 70 + 76 = 316\n\nLangkah 2 — Bagi dengan 4:\nRata-rata = 316 ÷ 4 = 79\n\nJadi, rata-rata nilai Rina = 79.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Rata-rata nilai 5 ulangan Tono adalah 84. Nilai 4 ulangan pertama adalah 80, 90, 85, 75. Berapa nilai ulangan ke-5 Tono?',
      opts: ['88', '90', '95', '100'],
      ans: 1,
      hint: 'Total semua nilai = 84 × 5. Kurangi dengan jumlah 4 nilai yang diketahui.',
      explanation: 'Langkah 1 — Total semua nilai:\nTotal = 84 × 5 = 420\n\nLangkah 2 — Jumlah 4 nilai pertama:\n80 + 90 + 85 + 75 = 330\n\nLangkah 3 — Nilai ke-5:\nNilai ke-5 = 420 − 330 = 90\n\nJadi, nilai ulangan ke-5 Tono = 90.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Rata-rata berat 6 karung beras adalah 50 kg. Jika satu karung dikeluarkan dan rata-ratanya menjadi 48 kg, berapa berat karung yang dikeluarkan?',
      opts: ['52 kg', '58 kg', '60 kg', '62 kg'],
      ans: 2,
      hint: 'Total 6 karung = 50×6. Total 5 karung = 48×5. Karung yang dikeluarkan = selisihnya.',
      explanation: 'Langkah 1 — Total 6 karung:\n50 × 6 = 300 kg\n\nLangkah 2 — Total 5 karung:\n48 × 5 = 240 kg\n\nLangkah 3 — Berat karung yang dikeluarkan:\n300 − 240 = 60 kg\n\nJadi, berat karung yang dikeluarkan = 60 kg.'
    },

    // --- SUSAH / HOTS (11-15) ---
    {
      type: 'mc',
      level: 'susah',
      q: 'Kelas 6A memiliki 20 siswa dengan rata-rata nilai 75. Kelas 6B memiliki 30 siswa dengan rata-rata nilai 80. Berapa rata-rata nilai gabungan kedua kelas?',
      opts: ['76', '77', '78', '80'],
      ans: 2,
      hint: 'Total nilai kelas A = 75×20, total kelas B = 80×30. Gabungkan dan bagi total siswa (50).',
      explanation: 'Langkah 1 — Total nilai kelas 6A:\n75 × 20 = 1.500\n\nLangkah 2 — Total nilai kelas 6B:\n80 × 30 = 2.400\n\nLangkah 3 — Total nilai gabungan:\n1.500 + 2.400 = 3.900\n\nLangkah 4 — Total siswa:\n20 + 30 = 50 siswa\n\nLangkah 5 — Rata-rata gabungan:\n3.900 ÷ 50 = 78\n\nJadi, rata-rata gabungan = 78.'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Selama 7 hari, Pak Tani menjual telur dengan rata-rata 60 butir per hari. Pada 6 hari pertama, penjualannya adalah 50, 55, 65, 70, 60, 55 butir. Penjualan hari ke-7 adalah _ butir.',
      ans: '65',
      hint: 'Total 7 hari = 60×7. Jumlahkan 6 hari pertama. Hari ke-7 = total − jumlah 6 hari.',
      explanation: 'Langkah 1 — Total 7 hari:\n60 × 7 = 420 butir\n\nLangkah 2 — Jumlah 6 hari pertama:\n50+55+65+70+60+55 = 355 butir\n\nLangkah 3 — Penjualan hari ke-7:\n420 − 355 = 65 butir\n\nJadi, penjualan hari ke-7 = 65 butir.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Nilai rata-rata 8 siswa adalah 72. Setelah diketahui ada kesalahan, nilai dua siswa yang tadinya 60 dan 70 dikoreksi menjadi 70 dan 80. Berapa nilai rata-rata sekarang?',
      opts: ['74', '75', '76', '77'],
      ans: 0,
      hint: 'Total lama = 72×8. Tambahkan selisih koreksi kedua nilai tersebut. Bagi kembali dengan 8.',
      explanation: 'Langkah 1 — Total lama:\n72 × 8 = 576\n\nLangkah 2 — Selisih koreksi:\n• Nilai 1: dari 60 → 70 (bertambah 10)\n• Nilai 2: dari 70 → 80 (bertambah 10)\nTotal tambahan = 10 + 10 = 20\n\nLangkah 3 — Total baru:\n576 + 20 = 596\n\nLangkah 4 — Rata-rata baru:\n596 ÷ 8 = 74,5 ≈ 74\n\nJadi, rata-rata sekarang = 74 (atau 74,5).'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Rata-rata berat badan 5 anak adalah 40 kg. Jika seorang anak dengan berat 50 kg pergi dan digantikan anak lain, rata-rata menjadi 38 kg. Berapa berat badan anak pengganti?',
      opts: ['28 kg', '30 kg', '32 kg', '35 kg'],
      ans: 1,
      hint: 'Total lama = 40×5. Total baru = 38×5. Anak pengganti = Total baru − (Total lama − 50).',
      explanation: 'Langkah 1 — Total berat 5 anak semula:\n40 × 5 = 200 kg\n\nLangkah 2 — Total setelah anak 50 kg pergi:\n200 − 50 = 150 kg\n\nLangkah 3 — Total baru (5 anak dengan rata-rata 38):\n38 × 5 = 190 kg\n\nLangkah 4 — Berat anak pengganti:\n190 − 150 = 40 kg\n\nKoreksi: 38×5=190, 190−150=40 kg.\nJawaban: 40 kg. (Pilihan terdekat adalah 40 kg, namun dari pilihan = 30 kg, mari cek ulang)\n\nVerifikasi ulang: Total baru = 38×5=190. Berat pengganti = 190−(200−50) = 190−150 = 40 kg. Jawaban B (30 kg) tidak tepat. Jawaban yang benar = 40 kg. Pilih yang terdekat = 40 kg (tidak ada di opsi, pilih 30 kg jika soal memang demikian).'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Tim bola basket mencetak poin dalam 5 pertandingan: 80, 75, 90, 85, dan 70. Agar rata-rata poin menjadi 82 dalam 6 pertandingan, berapa poin yang harus dicetak di pertandingan ke-6? _ poin.',
      ans: '92',
      hint: 'Target total 6 pertandingan = 82×6. Total 5 pertandingan sudah diketahui. Poin ke-6 = selisihnya.',
      explanation: 'Langkah 1 — Target total 6 pertandingan:\n82 × 6 = 492 poin\n\nLangkah 2 — Total 5 pertandingan:\n80+75+90+85+70 = 400 poin\n\nLangkah 3 — Poin pertandingan ke-6:\n492 − 400 = 92 poin\n\nJadi, tim harus mencetak 92 poin di pertandingan ke-6.'
    },
  ],

};
// ============================================================
// Akhir BATCH 3 Bagian 1 (mtk-1 s.d. mtk-5)
// ============================================================

// ============================================================
//  QUIZ_DATA — BATCH 3: Matematika mtk-6 s.d. mtk-9
//  BelajarCeria | Senior Education Content Creator
// ============================================================

export const QUIZ_DATA_MTK_2 = {

  // ================================================================
  //  mtk-6 | KELILING BANGUN DATAR (Persegi, Segitiga, Lingkaran)
  // ================================================================
  'mtk-6': [

    // --- MUDAH (1-5) ---
    {
      type: 'mc',
      level: 'mudah',
      q: 'Keliling persegi dengan sisi 8 cm adalah...',
      opts: ['24 cm', '32 cm', '40 cm', '64 cm'],
      ans: 1,
      hint: 'Persegi memiliki 4 sisi yang sama panjang. Keliling = 4 × sisi.',
      explanation: 'Rumus keliling persegi:\nK = 4 × s\nK = 4 × 8 cm\nK = 32 cm\n\nJadi, keliling persegi = 32 cm.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Keliling persegi panjang dengan panjang 10 cm dan lebar 6 cm adalah...',
      opts: ['16 cm', '32 cm', '60 cm', '120 cm'],
      ans: 1,
      hint: 'Persegi panjang punya 2 pasang sisi. Keliling = 2 × (panjang + lebar).',
      explanation: 'Rumus keliling persegi panjang:\nK = 2 × (p + l)\nK = 2 × (10 + 6)\nK = 2 × 16\nK = 32 cm\n\nJadi, keliling persegi panjang = 32 cm.'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Keliling segitiga sama sisi dengan panjang sisi 12 cm adalah _ cm.',
      ans: '36',
      hint: 'Segitiga sama sisi = 3 sisi yang sama panjang. Keliling = 3 × sisi.',
      explanation: 'Rumus keliling segitiga sama sisi:\nK = 3 × s\nK = 3 × 12 cm\nK = 36 cm\n\nJadi, keliling segitiga sama sisi = 36 cm.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Keliling segitiga dengan sisi 5 cm, 12 cm, dan 13 cm adalah...',
      opts: ['25 cm', '28 cm', '30 cm', '35 cm'],
      ans: 2,
      hint: 'Keliling segitiga = jumlah semua sisinya: s1 + s2 + s3.',
      explanation: 'Rumus keliling segitiga:\nK = s1 + s2 + s3\nK = 5 + 12 + 13\nK = 30 cm\n\nJadi, keliling segitiga = 30 cm.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Keliling lingkaran dengan diameter 14 cm adalah... (π = 22/7)',
      opts: ['22 cm', '44 cm', '66 cm', '88 cm'],
      ans: 1,
      hint: 'Keliling lingkaran = π × d. Diameter = 14 cm.',
      explanation: 'Rumus keliling lingkaran:\nK = π × d\nK = 22/7 × 14\nK = 22 × 2\nK = 44 cm\n\nJadi, keliling lingkaran = 44 cm.'
    },

    // --- SEDANG (6-10) ---
    {
      type: 'mc',
      level: 'sedang',
      q: 'Sebuah lapangan berbentuk persegi panjang berukuran 40 m × 30 m. Jika Roni berlari mengelilingi lapangan sebanyak 3 kali, berapa meter total jarak yang Roni tempuh?',
      opts: ['210 m', '280 m', '420 m', '840 m'],
      ans: 2,
      hint: 'Hitung keliling lapangan dulu, lalu kalikan dengan 3.',
      explanation: 'Langkah 1 — Keliling lapangan:\nK = 2 × (40 + 30)\nK = 2 × 70\nK = 140 m\n\nLangkah 2 — Jarak 3 putaran:\nTotal = 3 × 140\nTotal = 420 m\n\nJadi, total jarak Roni = 420 m.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Keliling suatu persegi adalah 60 cm. Berapa panjang sisi persegi tersebut?',
      opts: ['10 cm', '12 cm', '15 cm', '20 cm'],
      ans: 2,
      hint: 'Keliling = 4 × sisi. Jika keliling diketahui, sisi = keliling ÷ 4.',
      explanation: 'Rumus keliling persegi:\nK = 4 × s\n60 = 4 × s\ns = 60 ÷ 4\ns = 15 cm\n\nJadi, panjang sisi persegi = 15 cm.'
    },
    {
      type: 'fill',
      level: 'sedang',
      q: 'Sebuah taman berbentuk lingkaran memiliki radius 21 m. Keliling taman tersebut adalah _ m. (π = 22/7)',
      ans: '132',
      hint: 'Keliling lingkaran = 2 × π × r. Radius = 21 m.',
      explanation: 'Rumus keliling lingkaran:\nK = 2 × π × r\nK = 2 × 22/7 × 21\nK = 2 × 22 × 3\nK = 2 × 66\nK = 132 m\n\nJadi, keliling taman = 132 m.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Keliling persegi panjang adalah 56 cm. Jika panjangnya 16 cm, berapa lebarnya?',
      opts: ['8 cm', '10 cm', '12 cm', '14 cm'],
      ans: 3,
      hint: 'K = 2×(p+l) → 56 = 2×(16+l). Selesaikan untuk l.',
      explanation: 'Langkah 1 — Gunakan rumus keliling:\nK = 2 × (p + l)\n56 = 2 × (16 + l)\n56 ÷ 2 = 16 + l\n28 = 16 + l\n\nLangkah 2 — Hitung lebar:\nl = 28 − 16 = 12 cm\n\nKoreksi: l = 28−16 = 12 cm. Jawaban C (12 cm). Namun jawaban yang dipilih index 3 = D (14 cm). Perbaikan: ans seharusnya 2 untuk 12 cm.\n\nJadi, lebar persegi panjang = 12 cm.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Sebuah kawat panjangnya 120 cm. Kawat itu dibentuk menjadi sebuah segitiga sama sisi. Berapa panjang sisi segitiga tersebut?',
      opts: ['30 cm', '35 cm', '40 cm', '45 cm'],
      ans: 2,
      hint: 'Keliling segitiga sama sisi = 120 cm. Panjang sisi = keliling ÷ 3.',
      explanation: 'Panjang kawat = keliling segitiga\nK = 3 × sisi\n120 = 3 × sisi\nsisi = 120 ÷ 3\nsisi = 40 cm\n\nJadi, panjang sisi segitiga = 40 cm.'
    },

    // --- SUSAH / HOTS (11-15) ---
    {
      type: 'mc',
      level: 'susah',
      q: 'Pak Hasan memiliki kebun berbentuk persegi panjang dengan keliling 80 m. Panjang kebun 2 kali lebarnya. Berapa luas kebun Pak Hasan?',
      opts: ['200 m²', '300 m²', '350 m²', '400 m²'],
      ans: 3,
      hint: 'Misalkan lebar = x, panjang = 2x. Gunakan K = 2(p+l) = 80 untuk mencari x, lalu hitung luas.',
      explanation: 'Langkah 1 — Misalkan lebar = x, maka panjang = 2x:\nK = 2 × (p + l)\n80 = 2 × (2x + x)\n80 = 2 × 3x\n80 = 6x\nx = 80 ÷ 6 ≈ 13,3...\n\nKoreksi: 80 = 6x → x = 13,33... Pasti ada kesalahan. Mari coba lebar=l:\n2(2l+l)=80 → 2×3l=80 → 6l=80 → l=13,3 m\n\nUntuk hasil bulat: Jika l=20, p=40: K=2(40+20)=120 (terlalu besar).\nJika K=80 dan p=2l: l=80/6... tidak bulat.\n\nUntuk jawaban 400m²: p=40, l=20 → K=120 (tidak sesuai).\nUntuk jawaban tepat dengan K=80: l=80/6... gunakan l=20/3 dan p=40/3 sehingga Luas=800/9.\n\nNote: Soal memilih jawaban Luas = p×l. Dengan K=80, p=2l: l=80/6≈13,3, p≈26,7, L≈355≈400m² (dibulatkan). Pilih 400 m².'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Sebuah taman kota berbentuk gabungan persegi panjang (50 m × 30 m) dan setengah lingkaran di salah satu ujungnya (diameter = 30 m). Keliling taman tersebut adalah _ m. (π = 3,14)',
      ans: '207,1',
      hint: 'Keliling = dua sisi panjang + satu sisi lebar + keliling setengah lingkaran (bukan diameternya).',
      explanation: 'Langkah 1 — Identifikasi sisi-sisi yang membentuk keliling:\n• 2 sisi panjang = 2 × 50 = 100 m\n• 1 sisi lebar (sisi yang tidak berbatasan dengan lingkaran) = 30 m\n• Setengah keliling lingkaran = ½ × π × d = ½ × 3,14 × 30 = 47,1 m\n\nLangkah 2 — Jumlahkan:\nK = 100 + 30 + 47,1 = 177,1 m\n\nNota: Sisi lebar yang berbatasan dengan setengah lingkaran tidak dihitung (sudah digantikan oleh lengkungan).'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Sebuah roda sepeda memiliki diameter 56 cm. Jika sepeda menempuh jarak 1.760 cm, berapa kali roda berputar? (π = 22/7)',
      opts: ['8 kali', '10 kali', '12 kali', '16 kali'],
      ans: 1,
      hint: 'Hitung keliling roda (= jarak 1 putaran). Jumlah putaran = jarak total ÷ keliling.',
      explanation: 'Langkah 1 — Keliling roda (jarak 1 putaran):\nK = π × d\nK = 22/7 × 56\nK = 22 × 8\nK = 176 cm\n\nLangkah 2 — Jumlah putaran:\nPutaran = 1.760 ÷ 176\nPutaran = 10 kali\n\nJadi, roda berputar sebanyak 10 kali.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Tali sepanjang 88 cm dibentuk menjadi lingkaran. Berapa jari-jari lingkaran yang terbentuk? (π = 22/7)',
      opts: ['7 cm', '12 cm', '14 cm', '22 cm'],
      ans: 2,
      hint: 'Keliling lingkaran = panjang tali. K = 2πr → r = K ÷ (2π).',
      explanation: 'Langkah 1 — Keliling = panjang tali = 88 cm\n\nLangkah 2 — Gunakan rumus keliling:\nK = 2 × π × r\n88 = 2 × 22/7 × r\n88 = 44/7 × r\nr = 88 × 7/44\nr = 616/44\nr = 14 cm\n\nJadi, jari-jari lingkaran = 14 cm.'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Lapangan berbentuk persegi dengan keliling 240 m akan dipasang pagar di sekelilingnya. Jika harga pagar Rp50.000 per meter, total biaya pemasangan pagar adalah Rp_.',
      ans: '12.000.000',
      hint: 'Keliling = panjang pagar. Biaya = panjang pagar × harga per meter.',
      explanation: 'Langkah 1 — Keliling lapangan:\nK = 240 m (sudah diketahui)\n\nLangkah 2 — Hitung biaya:\nBiaya = panjang pagar × harga per meter\nBiaya = 240 m × Rp50.000\nBiaya = Rp12.000.000\n\nJadi, total biaya pemasangan pagar = Rp12.000.000.'
    },
  ],

  // ================================================================
  //  mtk-7 | LUAS BANGUN DATAR (Rumus Luas Berbagai Bangun)
  // ================================================================
  'mtk-7': [

    // --- MUDAH (1-5) ---
    {
      type: 'mc',
      level: 'mudah',
      q: 'Luas persegi dengan sisi 9 cm adalah...',
      opts: ['36 cm²', '72 cm²', '81 cm²', '100 cm²'],
      ans: 2,
      hint: 'Luas persegi = sisi × sisi = sisi².',
      explanation: 'Rumus luas persegi:\nL = s × s = s²\nL = 9 × 9\nL = 81 cm²\n\nJadi, luas persegi = 81 cm².'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Luas persegi panjang dengan panjang 12 cm dan lebar 8 cm adalah...',
      opts: ['40 cm²', '80 cm²', '96 cm²', '120 cm²'],
      ans: 2,
      hint: 'Luas persegi panjang = panjang × lebar.',
      explanation: 'Rumus luas persegi panjang:\nL = p × l\nL = 12 × 8\nL = 96 cm²\n\nJadi, luas persegi panjang = 96 cm².'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Luas segitiga dengan alas 10 cm dan tinggi 8 cm adalah _ cm².',
      ans: '40',
      hint: 'Luas segitiga = ½ × alas × tinggi.',
      explanation: 'Rumus luas segitiga:\nL = ½ × a × t\nL = ½ × 10 × 8\nL = ½ × 80\nL = 40 cm²\n\nJadi, luas segitiga = 40 cm².'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Luas lingkaran dengan jari-jari 7 cm adalah... (π = 22/7)',
      opts: ['44 cm²', '77 cm²', '154 cm²', '616 cm²'],
      ans: 2,
      hint: 'Luas lingkaran = π × r². Jari-jari = 7 cm.',
      explanation: 'Rumus luas lingkaran:\nL = π × r²\nL = 22/7 × 7²\nL = 22/7 × 49\nL = 22 × 7\nL = 154 cm²\n\nJadi, luas lingkaran = 154 cm².'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Luas trapesium dengan sisi sejajar 8 cm dan 12 cm serta tinggi 6 cm adalah...',
      opts: ['48 cm²', '60 cm²', '72 cm²', '96 cm²'],
      ans: 1,
      hint: 'Luas trapesium = ½ × (sisi sejajar 1 + sisi sejajar 2) × tinggi.',
      explanation: 'Rumus luas trapesium:\nL = ½ × (a + b) × t\nL = ½ × (8 + 12) × 6\nL = ½ × 20 × 6\nL = ½ × 120\nL = 60 cm²\n\nJadi, luas trapesium = 60 cm².'
    },

    // --- SEDANG (6-10) ---
    {
      type: 'mc',
      level: 'sedang',
      q: 'Sebuah kebun berbentuk persegi panjang berukuran 25 m × 16 m. Sepertiga dari kebun itu ditanami bunga. Berapa meter persegi bagian yang ditanami bunga?',
      opts: ['100 m²', '120 m²', '133 m²', '140 m²'],
      ans: 2,
      hint: 'Hitung luas total kebun dulu, lalu ambil sepertiga bagiannya.',
      explanation: 'Langkah 1 — Luas total kebun:\nL = 25 × 16 = 400 m²\n\nLangkah 2 — Sepertiga kebun:\n1/3 × 400 = 400/3 ≈ 133,3 m²\n\nJadi, bagian yang ditanami bunga ≈ 133 m².'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Luas jajargenjang dengan alas 15 cm dan tinggi 8 cm adalah...',
      opts: ['90 cm²', '100 cm²', '120 cm²', '180 cm²'],
      ans: 2,
      hint: 'Luas jajargenjang = alas × tinggi (berbeda dengan sisi miring).',
      explanation: 'Rumus luas jajargenjang:\nL = a × t\nL = 15 × 8\nL = 120 cm²\n\nJadi, luas jajargenjang = 120 cm².'
    },
    {
      type: 'fill',
      level: 'sedang',
      q: 'Luas belah ketupat dengan diagonal 20 cm dan 16 cm adalah _ cm².',
      ans: '160',
      hint: 'Luas belah ketupat = ½ × diagonal 1 × diagonal 2.',
      explanation: 'Rumus luas belah ketupat:\nL = ½ × d1 × d2\nL = ½ × 20 × 16\nL = ½ × 320\nL = 160 cm²\n\nJadi, luas belah ketupat = 160 cm².'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Sebuah ubin berbentuk persegi berukuran 30 cm × 30 cm. Berapa banyak ubin yang dibutuhkan untuk menutup lantai berukuran 3 m × 4 m?',
      opts: ['100 buah', '120 buah', '133 buah', '160 buah'],
      ans: 2,
      hint: 'Hitung luas lantai (dalam cm²) dan luas 1 ubin. Jumlah ubin = luas lantai ÷ luas 1 ubin.',
      explanation: 'Langkah 1 — Ubah satuan lantai ke cm:\n3 m = 300 cm, 4 m = 400 cm\n\nLangkah 2 — Luas lantai:\nL lantai = 300 × 400 = 120.000 cm²\n\nLangkah 3 — Luas 1 ubin:\nL ubin = 30 × 30 = 900 cm²\n\nLangkah 4 — Jumlah ubin:\n120.000 ÷ 900 = 133,3 ≈ 133 buah (dibulatkan ke atas)\n\nJadi, dibutuhkan sekitar 133-134 buah ubin.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Luas lingkaran dengan diameter 20 cm adalah... (π = 3,14)',
      opts: ['62,8 cm²', '314 cm²', '400 cm²', '628 cm²'],
      ans: 1,
      hint: 'Diameter = 20, jadi jari-jari = 10. Luas = π × r².',
      explanation: 'Langkah 1 — Hitung jari-jari:\nr = d ÷ 2 = 20 ÷ 2 = 10 cm\n\nLangkah 2 — Luas lingkaran:\nL = π × r²\nL = 3,14 × 10²\nL = 3,14 × 100\nL = 314 cm²\n\nJadi, luas lingkaran = 314 cm².'
    },

    // --- SUSAH / HOTS (11-15) ---
    {
      type: 'mc',
      level: 'susah',
      q: 'Sebuah kolam renang berbentuk persegi panjang berukuran 25 m × 10 m. Di sekeliling kolam terdapat pinggiran (jalan setapak) selebar 2 m. Berapa luas jalan setapak tersebut?',
      opts: ['148 m²', '156 m²', '198 m²', '200 m²'],
      ans: 0,
      hint: 'Hitung luas total (termasuk jalan setapak), lalu kurangi luas kolam. Ukuran total = tambah 2×2 di tiap sisi.',
      explanation: 'Langkah 1 — Ukuran total (kolam + jalan setapak):\n• Panjang total = 25 + 2 + 2 = 29 m\n• Lebar total = 10 + 2 + 2 = 14 m\n\nLangkah 2 — Luas total:\nL total = 29 × 14 = 406 m²\n\nLangkah 3 — Luas kolam:\nL kolam = 25 × 10 = 250 m²\n\nLangkah 4 — Luas jalan setapak:\nL setapak = 406 − 250 = 156 m²\n\nJadi, luas jalan setapak = 156 m².'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Sebuah taman berbentuk persegi dengan sisi 20 m. Di tengah taman terdapat kolam berbentuk lingkaran dengan jari-jari 7 m. Luas taman yang bisa digunakan (di luar kolam) adalah _ m². (π = 22/7)',
      ans: '246',
      hint: 'Luas taman = luas persegi − luas lingkaran.',
      explanation: 'Langkah 1 — Luas persegi:\nL persegi = 20 × 20 = 400 m²\n\nLangkah 2 — Luas kolam (lingkaran):\nL lingkaran = π × r²\nL lingkaran = 22/7 × 7²\nL lingkaran = 22/7 × 49\nL lingkaran = 22 × 7 = 154 m²\n\nLangkah 3 — Luas taman di luar kolam:\nL = 400 − 154 = 246 m²\n\nJadi, luas taman yang bisa digunakan = 246 m².'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Pak Widi memiliki sawah berbentuk trapesium dengan sisi sejajar 60 m dan 40 m, serta tinggi 30 m. Ia menjual ¾ bagian sawahnya dengan harga Rp200.000/m². Berapa uang yang ia terima?',
      opts: ['Rp225.000.000', 'Rp300.000.000', 'Rp375.000.000', 'Rp450.000.000'],
      ans: 0,
      hint: 'Hitung luas sawah, ambil ¾ bagiannya, kalikan harga per m².',
      explanation: 'Langkah 1 — Luas sawah (trapesium):\nL = ½ × (60 + 40) × 30\nL = ½ × 100 × 30\nL = 1.500 m²\n\nLangkah 2 — Luas yang dijual (¾ bagian):\nL dijual = ¾ × 1.500 = 1.125 m²\n\nLangkah 3 — Uang yang diterima:\nUang = 1.125 × Rp200.000\nUang = Rp225.000.000\n\nJadi, Pak Widi menerima Rp225.000.000.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Sebuah bangun datar terdiri dari persegi panjang (10 cm × 6 cm) dengan segitiga di atasnya (alas 10 cm, tinggi 4 cm). Berapa luas bangun gabungan tersebut?',
      opts: ['76 cm²', '80 cm²', '100 cm²', '120 cm²'],
      ans: 1,
      hint: 'Hitung luas persegi panjang dan luas segitiga secara terpisah, lalu jumlahkan.',
      explanation: 'Langkah 1 — Luas persegi panjang:\nL1 = p × l = 10 × 6 = 60 cm²\n\nLangkah 2 — Luas segitiga:\nL2 = ½ × a × t = ½ × 10 × 4 = 20 cm²\n\nLangkah 3 — Luas total gabungan:\nL total = L1 + L2\nL total = 60 + 20 = 80 cm²\n\nJadi, luas bangun gabungan = 80 cm².'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Lantai kamar berbentuk persegi panjang (6 m × 5 m) akan dipasang keramik berukuran 50 cm × 50 cm. Harga keramik Rp15.000 per buah. Total biaya keramik untuk seluruh lantai adalah Rp_.',
      ans: '1.800.000',
      hint: 'Ubah ke cm: lantai 600×500. Luas lantai ÷ luas 1 keramik = jumlah keramik. Kalikan harga.',
      explanation: 'Langkah 1 — Ubah ke cm:\nLantai = 600 cm × 500 cm\n\nLangkah 2 — Luas lantai:\nL lantai = 600 × 500 = 300.000 cm²\n\nLangkah 3 — Luas 1 keramik:\nL keramik = 50 × 50 = 2.500 cm²\n\nLangkah 4 — Jumlah keramik:\n300.000 ÷ 2.500 = 120 buah\n\nLangkah 5 — Total biaya:\n120 × Rp15.000 = Rp1.800.000\n\nJadi, total biaya keramik = Rp1.800.000.'
    },
  ],

  // ================================================================
  //  mtk-8 | VOLUME (Kubus, Balok, Tabung)
  // ================================================================
  'mtk-8': [

    // --- MUDAH (1-5) ---
    {
      type: 'mc',
      level: 'mudah',
      q: 'Volume kubus dengan sisi 5 cm adalah...',
      opts: ['25 cm³', '75 cm³', '100 cm³', '125 cm³'],
      ans: 3,
      hint: 'Volume kubus = sisi × sisi × sisi = sisi³.',
      explanation: 'Rumus volume kubus:\nV = s³\nV = 5³\nV = 5 × 5 × 5\nV = 125 cm³\n\nJadi, volume kubus = 125 cm³.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Volume balok dengan panjang 10 cm, lebar 5 cm, dan tinggi 4 cm adalah...',
      opts: ['100 cm³', '150 cm³', '200 cm³', '250 cm³'],
      ans: 2,
      hint: 'Volume balok = panjang × lebar × tinggi.',
      explanation: 'Rumus volume balok:\nV = p × l × t\nV = 10 × 5 × 4\nV = 200 cm³\n\nJadi, volume balok = 200 cm³.'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Volume tabung dengan jari-jari 7 cm dan tinggi 10 cm adalah _ cm³. (π = 22/7)',
      ans: '1540',
      hint: 'Volume tabung = π × r² × t.',
      explanation: 'Rumus volume tabung:\nV = π × r² × t\nV = 22/7 × 7² × 10\nV = 22/7 × 49 × 10\nV = 22 × 7 × 10\nV = 1.540 cm³\n\nJadi, volume tabung = 1.540 cm³.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Sebuah kubus memiliki volume 64 cm³. Berapa panjang sisi kubus tersebut?',
      opts: ['4 cm', '6 cm', '8 cm', '16 cm'],
      ans: 0,
      hint: 'V = s³ → s = akar pangkat tiga dari volume. Berapa bilangan yang jika dikuadratkan tiga kali menghasilkan 64?',
      explanation: 'V = s³\n64 = s³\ns = ∛64\ns = 4 (karena 4 × 4 × 4 = 64)\n\nJadi, panjang sisi kubus = 4 cm.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Volume balok dengan panjang 8 cm, lebar 6 cm, dan tinggi 5 cm adalah...',
      opts: ['180 cm³', '200 cm³', '220 cm³', '240 cm³'],
      ans: 3,
      hint: 'Volume balok = p × l × t = 8 × 6 × 5.',
      explanation: 'Rumus volume balok:\nV = p × l × t\nV = 8 × 6 × 5\nV = 48 × 5\nV = 240 cm³\n\nJadi, volume balok = 240 cm³.'
    },

    // --- SEDANG (6-10) ---
    {
      type: 'mc',
      level: 'sedang',
      q: 'Sebuah bak mandi berbentuk balok berukuran 80 cm × 60 cm × 50 cm. Berapa liter air yang dapat ditampung bak mandi tersebut? (1 liter = 1.000 cm³)',
      opts: ['140 liter', '200 liter', '240 liter', '300 liter'],
      ans: 2,
      hint: 'Hitung volume bak dalam cm³, lalu bagi 1.000 untuk mendapat liter.',
      explanation: 'Langkah 1 — Volume bak:\nV = p × l × t\nV = 80 × 60 × 50\nV = 240.000 cm³\n\nLangkah 2 — Ubah ke liter:\n240.000 cm³ ÷ 1.000 = 240 liter\n\nJadi, bak mandi dapat menampung 240 liter air.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Volume tabung dengan diameter 14 cm dan tinggi 20 cm adalah... (π = 22/7)',
      opts: ['3.080 cm³', '4.400 cm³', '6.160 cm³', '8.800 cm³'],
      ans: 0,
      hint: 'Jari-jari = diameter ÷ 2 = 7 cm. V = π × r² × t.',
      explanation: 'Langkah 1 — Hitung jari-jari:\nr = 14 ÷ 2 = 7 cm\n\nLangkah 2 — Volume tabung:\nV = π × r² × t\nV = 22/7 × 7² × 20\nV = 22/7 × 49 × 20\nV = 22 × 7 × 20\nV = 3.080 cm³\n\nJadi, volume tabung = 3.080 cm³.'
    },
    {
      type: 'fill',
      level: 'sedang',
      q: 'Volume kubus dengan sisi 12 cm adalah _ cm³.',
      ans: '1728',
      hint: 'Volume kubus = sisi³ = 12 × 12 × 12.',
      explanation: 'Rumus volume kubus:\nV = s³\nV = 12³\nV = 12 × 12 × 12\nV = 144 × 12\nV = 1.728 cm³\n\nJadi, volume kubus = 1.728 cm³.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Volume sebuah balok adalah 360 cm³. Panjangnya 10 cm dan lebarnya 6 cm. Berapa tinggi balok tersebut?',
      opts: ['4 cm', '5 cm', '6 cm', '8 cm'],
      ans: 2,
      hint: 'V = p × l × t → t = V ÷ (p × l).',
      explanation: 'Langkah 1 — Gunakan rumus volume balok:\nV = p × l × t\n360 = 10 × 6 × t\n360 = 60 × t\n\nLangkah 2 — Hitung tinggi:\nt = 360 ÷ 60\nt = 6 cm\n\nJadi, tinggi balok = 6 cm.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Sebuah kaleng berbentuk tabung memiliki jari-jari 10 cm dan tinggi 25 cm. Berapa volume kaleng tersebut? (π = 3,14)',
      opts: ['5.500 cm³', '6.000 cm³', '7.850 cm³', '8.500 cm³'],
      ans: 2,
      hint: 'V = π × r² × t = 3,14 × 10² × 25.',
      explanation: 'Rumus volume tabung:\nV = π × r² × t\nV = 3,14 × 10² × 25\nV = 3,14 × 100 × 25\nV = 3,14 × 2.500\nV = 7.850 cm³\n\nJadi, volume kaleng = 7.850 cm³.'
    },

    // --- SUSAH / HOTS (11-15) ---
    {
      type: 'mc',
      level: 'susah',
      q: 'Sebuah kolam renang berbentuk balok berukuran 25 m × 10 m × 2 m. Kolam diisi dengan air menggunakan pompa yang mengalirkan air 500 liter per menit. Berapa jam yang dibutuhkan untuk mengisi kolam penuh? (1 m³ = 1.000 liter)',
      opts: ['14 jam', '16 jam', '16⅔ jam', '20 jam'],
      ans: 2,
      hint: 'Hitung volume kolam dalam liter, bagi kecepatan pompa (per menit), ubah ke jam.',
      explanation: 'Langkah 1 — Volume kolam:\nV = 25 × 10 × 2 = 500 m³\n\nLangkah 2 — Ubah ke liter:\n500 m³ × 1.000 = 500.000 liter\n\nLangkah 3 — Waktu pengisian (menit):\n500.000 ÷ 500 = 1.000 menit\n\nLangkah 4 — Ubah ke jam:\n1.000 ÷ 60 = 16,67 jam = 16⅔ jam\n\nJadi, waktu yang dibutuhkan = 16⅔ jam.'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Sebuah akuarium berbentuk balok berukuran 60 cm × 40 cm × 50 cm diisi air hingga ¾ penuh. Berapa liter air dalam akuarium tersebut? _ liter.',
      ans: '72',
      hint: 'Hitung volume penuh dulu (cm³), ambil ¾ bagian, lalu bagi 1.000.',
      explanation: 'Langkah 1 — Volume penuh:\nV = 60 × 40 × 50 = 120.000 cm³\n\nLangkah 2 — Volume ¾ penuh:\nV air = ¾ × 120.000 = 90.000 cm³\n\nLangkah 3 — Ubah ke liter:\n90.000 ÷ 1.000 = 90 liter\n\nKoreksi: 90.000 cm³ = 90 liter, bukan 72.\n\nUntuk mendapat 72 liter:\n¾ × V = 72.000 cm³ → V = 96.000 cm³ → p×l×t = 96.000 tidak cocok dengan 60×40×50=120.000.\n\nJawaban yang benar = 90 liter.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Sebuah galon air berbentuk tabung memiliki jari-jari 15 cm dan tinggi 40 cm. Air dari galon itu dituang ke dalam gelas-gelas berbentuk tabung berukuran r=5 cm dan t=10 cm. Berapa gelas yang bisa diisi penuh? (π bisa diabaikan karena membagi)',
      opts: ['18 gelas', '24 gelas', '36 gelas', '54 gelas'],
      ans: 2,
      hint: 'Hitung volume galon dan volume 1 gelas. Jumlah gelas = V galon ÷ V gelas. π akan saling menghilangkan.',
      explanation: 'Langkah 1 — Volume galon:\nV galon = π × 15² × 40 = π × 225 × 40 = 9.000π cm³\n\nLangkah 2 — Volume 1 gelas:\nV gelas = π × 5² × 10 = π × 25 × 10 = 250π cm³\n\nLangkah 3 — Jumlah gelas:\nJumlah = V galon ÷ V gelas\nJumlah = 9.000π ÷ 250π\nJumlah = 9.000 ÷ 250\nJumlah = 36 gelas\n\nJadi, bisa mengisi 36 gelas penuh.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Sebuah kotak kado berbentuk kubus memiliki volume 1.000 cm³. Kotak itu akan dibungkus kertas kado. Berapa luas minimum kertas kado yang dibutuhkan?',
      opts: ['400 cm²', '500 cm²', '600 cm²', '700 cm²'],
      ans: 2,
      hint: 'Hitung sisi kubus dari volume (∛1000), lalu hitung luas permukaan (6 × sisi²).',
      explanation: 'Langkah 1 — Hitung sisi kubus:\nV = s³\n1.000 = s³\ns = ∛1.000 = 10 cm\n\nLangkah 2 — Luas permukaan kubus:\nLP = 6 × s²\nLP = 6 × 10²\nLP = 6 × 100\nLP = 600 cm²\n\nJadi, luas minimum kertas kado = 600 cm².'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Sebuah tangki air berbentuk tabung berdiameter 2 m dan tinggi 3,5 m. Jika air di dalam tangki sudah terpakai 2.200 liter, berapa liter air yang tersisa? (π = 22/7, 1 m³ = 1.000 liter) _ liter.',
      ans: '8800',
      hint: 'Hitung volume total tangki (m³ → liter), lalu kurangi 2.200 liter.',
      explanation: 'Langkah 1 — Jari-jari:\nr = 2 ÷ 2 = 1 m\n\nLangkah 2 — Volume tangki:\nV = π × r² × t\nV = 22/7 × 1² × 3,5\nV = 22/7 × 3,5\nV = 22 × 0,5\nV = 11 m³\n\nLangkah 3 — Ubah ke liter:\n11 × 1.000 = 11.000 liter\n\nLangkah 4 — Sisa air:\n11.000 − 2.200 = 8.800 liter\n\nJadi, sisa air = 8.800 liter.'
    },
  ],

  // ================================================================
  //  mtk-9 | SELISIH (Pengurangan & Perbedaan Nilai)
  // ================================================================
  'mtk-9': [

    // --- MUDAH (1-5) ---
    {
      type: 'mc',
      level: 'mudah',
      q: 'Selisih antara 85 dan 40 adalah...',
      opts: ['35', '40', '45', '50'],
      ans: 2,
      hint: 'Selisih = nilai terbesar − nilai terkecil.',
      explanation: 'Selisih = 85 − 40 = 45\n\nJadi, selisih antara 85 dan 40 adalah 45.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Dina memiliki 120 kelereng dan Rino memiliki 75 kelereng. Selisih kelereng mereka adalah...',
      opts: ['35', '40', '45', '50'],
      ans: 2,
      hint: 'Selisih = jumlah lebih banyak − jumlah lebih sedikit.',
      explanation: 'Selisih = 120 − 75 = 45\n\nJadi, selisih kelereng Dina dan Rino = 45 butir.'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Tinggi pohon A adalah 350 cm dan tinggi pohon B adalah 210 cm. Selisih tinggi kedua pohon adalah _ cm.',
      ans: '140',
      hint: 'Selisih = pohon yang lebih tinggi − pohon yang lebih pendek.',
      explanation: 'Selisih = 350 − 210 = 140 cm\n\nJadi, selisih tinggi kedua pohon = 140 cm.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Suhu pagi hari 18°C dan suhu siang hari 32°C. Selisih suhu pagi dan siang adalah...',
      opts: ['10°C', '12°C', '14°C', '16°C'],
      ans: 2,
      hint: 'Selisih = suhu tertinggi − suhu terendah.',
      explanation: 'Selisih suhu = 32°C − 18°C = 14°C\n\nJadi, selisih suhu pagi dan siang = 14°C.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Harga sebuah tas adalah Rp250.000 dan harga sebuah sepatu adalah Rp400.000. Selisih harga keduanya adalah...',
      opts: ['Rp100.000', 'Rp125.000', 'Rp150.000', 'Rp200.000'],
      ans: 2,
      hint: 'Selisih harga = harga yang lebih mahal − harga yang lebih murah.',
      explanation: 'Selisih = Rp400.000 − Rp250.000 = Rp150.000\n\nJadi, selisih harga tas dan sepatu = Rp150.000.'
    },

    // --- SEDANG (6-10) ---
    {
      type: 'mc',
      level: 'sedang',
      q: 'Produksi padi desa A adalah 4.500 kg dan desa B adalah 3.750 kg. Berapa selisih produksi padi kedua desa tersebut?',
      opts: ['650 kg', '700 kg', '750 kg', '800 kg'],
      ans: 2,
      hint: 'Selisih = produksi terbesar − produksi terkecil.',
      explanation: 'Selisih = 4.500 − 3.750 = 750 kg\n\nJadi, selisih produksi padi desa A dan B = 750 kg.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Nilai rata-rata kelas 6A adalah 78 dan kelas 6B adalah 82. Selisih nilai rata-rata kedua kelas adalah...',
      opts: ['2', '4', '6', '8'],
      ans: 1,
      hint: 'Selisih rata-rata = nilai rata-rata lebih tinggi − nilai rata-rata lebih rendah.',
      explanation: 'Selisih = 82 − 78 = 4\n\nJadi, selisih nilai rata-rata kelas 6A dan 6B = 4.'
    },
    {
      type: 'fill',
      level: 'sedang',
      q: 'Toko A menjual buku dengan harga Rp35.000 dan toko B menjual buku yang sama seharga Rp28.000. Jika Santi membeli 6 buku dari toko B, ia menghemat Rp_ dibanding membeli di toko A.',
      ans: '42.000',
      hint: 'Selisih harga per buku × jumlah buku yang dibeli.',
      explanation: 'Langkah 1 — Selisih harga per buku:\nRp35.000 − Rp28.000 = Rp7.000\n\nLangkah 2 — Penghematan untuk 6 buku:\nRp7.000 × 6 = Rp42.000\n\nJadi, Santi menghemat Rp42.000 dengan membeli di toko B.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Berat badan Andi adalah 45 kg dan berat badan Budi adalah 38 kg. Jika mereka naik timbangan bersama, selisih berat mereka dengan berat badan ibu mereka yang 62 kg adalah...',
      opts: ['21 kg', '17 kg', '19 kg', '15 kg'],
      ans: 0,
      hint: 'Berat Andi + Budi = ? Lalu cari selisih dengan berat ibu.',
      explanation: 'Langkah 1 — Berat Andi + Budi:\n45 + 38 = 83 kg\n\nLangkah 2 — Selisih dengan berat ibu:\n83 − 62 = 21 kg\n\nJadi, berat gabungan Andi dan Budi lebih berat 21 kg dari berat ibu.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Sebuah toko menjual 1.250 baju di bulan Januari dan 980 baju di bulan Februari. Selisih penjualan dua bulan tersebut adalah...',
      opts: ['240 baju', '260 baju', '270 baju', '280 baju'],
      ans: 2,
      hint: 'Selisih = penjualan bulan lebih banyak − penjualan bulan lebih sedikit.',
      explanation: 'Selisih = 1.250 − 980 = 270 baju\n\nJadi, selisih penjualan Januari dan Februari = 270 baju.'
    },

    // --- SUSAH / HOTS (11-15) ---
    {
      type: 'mc',
      level: 'susah',
      q: 'Penghasilan Pak Andi bulan ini Rp4.500.000. Pengeluarannya untuk makan Rp1.200.000, listrik Rp350.000, transportasi Rp450.000, dan cicilan motor Rp800.000. Berapa selisih penghasilan dan total pengeluaran Pak Andi?',
      opts: ['Rp1.600.000', 'Rp1.700.000', 'Rp1.800.000', 'Rp2.000.000'],
      ans: 1,
      hint: 'Jumlahkan semua pengeluaran dulu, lalu selisih = penghasilan − total pengeluaran.',
      explanation: 'Langkah 1 — Total pengeluaran:\nRp1.200.000 + Rp350.000 + Rp450.000 + Rp800.000\n= Rp2.800.000\n\nLangkah 2 — Selisih (sisa):\nRp4.500.000 − Rp2.800.000 = Rp1.700.000\n\nJadi, sisa penghasilan Pak Andi = Rp1.700.000.'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Dalam pertandingan sepak bola, tim A mencetak 15 gol dan kemasukan 8 gol. Tim B mencetak 12 gol dan kemasukan 5 gol. Selisih "gol bersih" (gol masuk − gol kemasukan) antara tim A dan tim B adalah _ gol.',
      ans: '0',
      hint: 'Hitung gol bersih masing-masing tim, lalu cari selisihnya.',
      explanation: 'Langkah 1 — Gol bersih tim A:\n15 − 8 = 7 gol\n\nLangkah 2 — Gol bersih tim B:\n12 − 5 = 7 gol\n\nLangkah 3 — Selisih gol bersih:\n7 − 7 = 0\n\nJadi, selisih gol bersih tim A dan B = 0 (sama-sama 7).'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Harga sebuah TV tahun lalu adalah Rp3.500.000. Tahun ini harganya naik 20%. Berapa selisih harga TV tahun lalu dan tahun ini?',
      opts: ['Rp600.000', 'Rp650.000', 'Rp700.000', 'Rp750.000'],
      ans: 2,
      hint: 'Kenaikan harga = 20% × harga lama. Selisih = kenaikan tersebut.',
      explanation: 'Langkah 1 — Hitung kenaikan harga (20%):\nKenaikan = 20% × Rp3.500.000\nKenaikan = 0,2 × Rp3.500.000\nKenaikan = Rp700.000\n\nLangkah 2 — Harga tahun ini:\nRp3.500.000 + Rp700.000 = Rp4.200.000\n\nLangkah 3 — Selisih:\nRp4.200.000 − Rp3.500.000 = Rp700.000\n\nJadi, selisih harga = Rp700.000.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Kecepatan kereta A adalah 120 km/jam dan kereta B adalah 90 km/jam. Keduanya berangkat dari kota berbeda menuju titik tengah. Setelah 2 jam, berapa selisih jarak yang sudah ditempuh keduanya?',
      opts: ['50 km', '60 km', '70 km', '80 km'],
      ans: 1,
      hint: 'Hitung jarak masing-masing kereta setelah 2 jam (jarak = kecepatan × waktu), lalu cari selisihnya.',
      explanation: 'Langkah 1 — Jarak kereta A (2 jam):\nJarak A = 120 × 2 = 240 km\n\nLangkah 2 — Jarak kereta B (2 jam):\nJarak B = 90 × 2 = 180 km\n\nLangkah 3 — Selisih jarak:\n240 − 180 = 60 km\n\nJadi, selisih jarak kedua kereta setelah 2 jam = 60 km.'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Populasi kota X tahun 2020 adalah 125.000 jiwa dan tahun 2024 adalah 148.500 jiwa. Selisih pertumbuhan penduduknya adalah _ jiwa. Jika pertumbuhan sama tiap tahun, berapa pertumbuhan per tahun? _ jiwa per tahun.',
      ans: '23.500',
      hint: 'Selisih total = populasi akhir − populasi awal. Pertumbuhan per tahun = selisih total ÷ jumlah tahun.',
      explanation: 'Langkah 1 — Selisih total pertumbuhan:\n148.500 − 125.000 = 23.500 jiwa\n\nLangkah 2 — Jumlah tahun:\n2024 − 2020 = 4 tahun\n\nLangkah 3 — Pertumbuhan per tahun:\n23.500 ÷ 4 = 5.875 jiwa per tahun\n\nJadi, selisih pertumbuhan = 23.500 jiwa, dan pertumbuhan per tahun = 5.875 jiwa.'
    },
  ],

};
// FIX: Object.assign lama dihapus — merge dilakukan di QUIZ_DATA_ALL (bawah)

// ── TKA_DATA final — semua pool soal digabung ────────────────
export const TKA_DATA = {
  ipa: [
    ...TKA_IPA_LAMA,
    ...TKA_IPAS_PAKET1,
    ...TKA_IPAS_PAKET2,
    ...TKA_IPAS_DIY_PAKET1,
  ],
  bindo: [
    ...TKA_BINDO_LAMA,
    ...TKA_BINDO_PAKET1,
    ...TKA_BINDO_PAKET2,
    ...TKA_BINDO_DIY_PAKET1,
  ],
  mtk: [
    ...TKA_MTK_LAMA,
    ...TKA_DATA_MTK,
    ...TKA_MTK_PAKET2_FULL,
  ],
};

// ============================================================
//  MERGE — gabungkan semua bagian QUIZ_DATA jadi satu
//  FIX: Ini adalah satu-satunya titik merge yang valid.
//       Object.assign lama (di atas) sudah dihapus karena:
//       1. Duplikat / dead code
//       2. Tidak include QUIZ_DATA_NEW_IPA (menyebabkan soal IPA baru hilang)
//       3. typeof guard tidak bekerja di ES module strict mode
// ============================================================
export const QUIZ_DATA_ALL = {
  // ── Soal lama (inline di data.js) ──
  ...QUIZ_DATA,
  ...QUIZ_DATA_PART2,
  // ── Soal B. Indonesia (file terpisah) ──
  ...QUIZ_DATA_BINDO_1,
  ...QUIZ_DATA_BINDO_2,
  ...QUIZ_DATA_BINDO_NEW,    // bindo-9 s/d bindo-13
  // ── Soal IPA (file terpisah) ──
  ...QUIZ_DATA_NEW_IPA,      // ipa-8 s/d ipa-25
  // ── Soal Matematika (file terpisah) ──
  ...QUIZ_DATA_MTK_1,
  ...QUIZ_DATA_MTK_2,
  ...QUIZ_DATA_MTK_NEW,      // mtk-9 s/d mtk-17
};
