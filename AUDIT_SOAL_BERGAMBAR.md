# Audit Soal Bergambar — BelajarCeria TKA
Generated: 2026-03-21

---

## ✅ Kesimpulan

**Tidak ada soal yang butuh foto asli** di semua 8 file TKA saat ini.

Semua soal yang menyebut "Perhatikan gambar..." sudah ditangani dengan **SVG inline**.
Tidak ada `needsImage: true`, tidak ada `<img>` tag, tidak ada `[GAMBAR: ...]` placeholder.

---

## Detail Per File

| File | Soal Bergambar | Status | Keterangan |
|------|---------------|--------|-----------|
| `TKA_DATA_MTK.js` | 4 soal | ✅ SVG | Diagram lingkaran, timbangan, jam, sudut |
| `tka_mtk_paket2_full.js` | 1 soal | ✅ SVG | Diagram lingkaran pecahan |
| `tka_bindo_paket1.js` | 0 soal | ✅ Aman | Tidak ada gambar |
| `tka_bindo_paket2.js` | 0 soal | ✅ Aman | Tidak ada gambar |
| `tka_bindo_diy_paket1.js` | 0 soal | ✅ Aman | Tidak ada gambar |
| `tka_ipas_paket1.js` | 0 soal | ✅ Aman | Tidak ada gambar |
| `tka_ipas_paket2.js` | 0 soal | ✅ Aman | Tidak ada gambar |
| `tka_ipas_diy_paket1.js` | 0 soal | ✅ Aman | Tidak ada gambar |

---

## Detail Soal SVG di TKA_DATA_MTK.js

### Soal 1 — Baris ~18
- **Topik:** Pecahan
- **Gambar:** Diagram lingkaran (pie chart)
- **Status:** ✅ Sudah SVG inline

### Soal 2 — Baris ~457
- **Topik:** Pengukuran Volume / Berat
- **Gambar:** Timbangan dengan jarum penunjuk
- **Status:** ✅ Sudah SVG inline

### Soal 3 — Baris ~517
- **Topik:** Waktu / Aritmetika
- **Gambar:** Jam analog
- **Status:** ✅ Sudah SVG inline

### Soal 4 — Baris ~661
- **Topik:** Volume Bangun Ruang
- **Gambar:** Sudut/bangun geometri
- **Status:** ✅ Sudah SVG inline

---

## Kapan `needsImage: true` Perlu Dipakai?

Fitur ini baru relevan kalau ke depannya ada penambahan soal seperti:

- 📸 Foto koperasi sekolah (daftar harga barang)
- 📸 Foto jadwal ekstrakurikuler dari buku
- 📸 Foto kondisi lingkungan (longsor, tambang, sampah hutan)
- 📸 Foto hewan/tumbuhan nyata yang tidak bisa digambar ulang sebagai SVG
- 📸 Infografik dari buku/koran

Untuk soal-soal jenis itu, gunakan format:

```js
{
  needsImage: true,   // ← soal tidak akan muncul sampai foto diupload
  q: `[GAMBAR: deskripsi foto yang dibutuhkan]
Teks soal di sini...`,
  opts: [...],
  ans: 0,
  topic: '...',
  level: 'Sulit',
  explanation: '...'
}
```

Setelah foto diupload ke Supabase Storage, ganti field `q` menjadi:

```js
{
  // needsImage: true,  ← hapus atau comment baris ini
  q: `<img
        src="https://[project-id].supabase.co/storage/v1/object/public/tka-images/mtk/mtk-p1-soal5-koperasi.webp"
        loading="lazy"
        class="tka-img"
        alt="Daftar harga barang di koperasi sekolah">
Teks soal di sini...`,
  ...
}
```

---

## Struktur Bucket Supabase (Siap Dipakai Kalau Diperlukan)

```
tka-images/          ← nama bucket (public)
├── mtk/
│   └── mtk-p1-soal[N]-[deskripsi].webp
├── bindo/
│   └── bindo-[paket]-soal[N]-[deskripsi].webp
└── ipa/
    └── ipa-[paket]-soal[N]-[deskripsi].webp
```

Target: **< 150 KB per gambar**, format `.webp` diutamakan.
Kompres di [squoosh.app](https://squoosh.app) sebelum upload.
