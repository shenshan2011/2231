# BelajarCeria — Dokumentasi Refactoring & Schema Database

---

## 📁 Struktur Folder (Setelah Refactoring)

```
belajarceria/
├── index.html              ← Entry point utama (bersih, hanya HTML struktural)
├── moderator.html          ← Dashboard moderator (HTML saja)
├── app.js                  ← Orchestrator utama (import semua modul)
├── style.css               ← Styles utama (tidak diubah)
├── moderator.css           ← Styles panel moderator
├── manifest.json
├── pwa.js
├── sw.js
│
├── css/
│   └── navbar.css          ← [BARU] Styles navbar modular
│
├── js/
│   ├── supabase-client.js  ← Singleton Supabase client
│   ├── auth.js             ← Modul autentikasi
│   ├── state.js            ← State management + sync Supabase
│   ├── utils.js            ← DOM helpers, toast, sound, theme, ID generator
│   ├── navbar.js           ← [BARU] Navbar builder + event binding
│   ├── quiz.js             ← [BARU] Quiz engine + attempt tracking
│   └── moderator.js        ← [BARU] Dashboard moderator logic
│
└── data.js                 ← Data soal (tidak diubah)
```

---

## 🗄️ Skema Database Supabase

### Tabel: `profiles`
| Kolom | Tipe | Keterangan |
|-------|------|------------|
| id | uuid (PK) | Supabase Auth user ID |
| username | text | Username unik |
| role | text | 'user' atau 'moderator' |
| study_time | int | Total menit belajar |
| last_login | timestamptz | Waktu login terakhir |
| created_at | timestamptz | Waktu daftar |

### Tabel: `user_progress`
| Kolom | Tipe | Keterangan |
|-------|------|------------|
| user_id | uuid (PK, FK) | Referensi ke profiles.id |
| xp | int | Total XP |
| streak | int | Streak hari berturut |
| last_date | text | Tanggal terakhir aktif |
| read | jsonb | { topicId: isoTimestamp } |
| quiz_scores | jsonb | { topicId: bestScore% } |
| quiz_details | jsonb | { topicId: latestAttemptEntry } |
| **quiz_attempts** | **jsonb** | **[BARU] Semua attempt log per topik** |
| activity | jsonb | Array 40 aktivitas terakhir |
| tka_history | jsonb | Array 20 sesi TKA |
| updated_at | timestamptz | Waktu sync terakhir |

### Migrasi SQL untuk `quiz_attempts`:
```sql
-- Tambahkan kolom quiz_attempts ke tabel user_progress
ALTER TABLE user_progress
ADD COLUMN IF NOT EXISTS quiz_attempts jsonb DEFAULT '{}';
```

---

## 🔑 Sistem Attempt Tracking

### Format Quiz ID (Statis per Topik)
```
QZ-[HASH_HEX_6DIGIT]
Contoh: QZ-1A3F2E

- Deterministik: topicId yang sama → Quiz ID yang sama
- Permanen: tidak berubah meski quiz diulang
- Tujuan: Moderator tahu soal dari topik mana
```

### Format Attempt ID (Unik per Sesi)
```
ATM-QZ-[HASH]-[TIMESTAMP_B36]-[RANDOM]
Contoh: ATM-QZ-1A3F2E-M2X3K9-AB12

- Unique per sesi pengerjaan
- Mengandung Quiz ID untuk traceability
- Tidak bisa dipalsukan (random suffix)
```

### Struktur `quiz_attempts` di database:
```json
{
  "topik_sistem_tata_surya": [
    {
      "attemptId": "ATM-QZ-1A3F2E-M2X3K9-AB12",
      "quizId": "QZ-1A3F2E",
      "attemptNumber": 3,
      "topicId": "topik_sistem_tata_surya",
      "score": 85,
      "benar": 13,
      "salah": 2,
      "total": 15,
      "durasi": "04:32",
      "timestamp": "22-03-2025, 14:35:07",
      "timestampISO": "2025-03-22T07:35:07.000Z",
      "answers": [
        {
          "soal": "Planet manakah yang terbesar di tata surya?",
          "type": "mc",
          "kunci": "Jupiter",
          "kunciRaw": 1,
          "userAns": "Jupiter",
          "benar": true
        }
      ]
    }
  ]
}
```

---

## 🛡️ Fitur Moderator (Baru)

### Tab: "Audit Attempts" (Baru)
- Tabel semua attempt lintas semua user
- Kolom: Username, Quiz ID, Attempt ID, Percobaan ke-, Nilai, Timestamp
- Filter: by username, by Quiz ID
- Sort: terbaru, nilai tertinggi/terendah, percobaan terbanyak
- Klik "Detail" → lihat semua jawaban + kunci dari attempt tersebut

### Tab: "Daftar Pengguna" (Diupdate)
- Kolom baru: "Attempts" (total percobaan quiz)
- Detail user: tampilkan jumlah attempt per topik

### Tab: "Progres Quiz" (Diupdate)
- Per topik: tampilkan jumlah attempt
- Tombol "Attempt" → lihat riwayat attempt untuk topik tsb

---

## 🧭 Navbar Baru

### Desktop:
```
[✦ BelajarCeria] ← Logo kiri
    [🏠 Beranda] [📊 Monitor] ← Pills tengah
              [⚡ XP] [⚙️] ← XP + Settings kanan
```

### Mobile (< 480px):
```
[✦ BelajarCeria]  [🏠][📊]  [⚡XP][⚙️]
(label pill disembunyikan, hanya ikon)
```

### Dropdown (klik ⚙️):
```
┌─────────────────────────┐
│ [PW] Username           │
│      👤 Pengguna        │
├─────────────────────────┤
│ 👤  About               │
│ 🛡️  Panel Moderator     │ (jika role=moderator)
├─────────────────────────┤
│ 🌙  Mode Gelap    [━●] │ (toggle)
│ 🔊  Efek Suara    [●━] │ (toggle)
├─────────────────────────┤
│ 🚪  Keluar              │
└─────────────────────────┘
```
