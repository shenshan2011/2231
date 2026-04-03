// ============================================================
//  sw.js — BelajarCeria Service Worker
//  FIX v3: CACHE_NAME diupdate + semua file quiz di-precache
// ============================================================

// ⚠️ PENTING: Naikkan versi ini setiap kali deploy baru
// agar SW lama langsung diganti dan cache lama dihapus.
const CACHE_NAME = 'belajarceria-v3';
const FONT_CACHE = 'belajarceria-fonts-v1';

// Semua file statis yang harus di-precache.
// FIX: path tanpa /belajar/ prefix karena SW di-serve
// dari root (vercel outputDirectory = belajar)
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/style.css',
  '/css/navbar.css',
  '/app.js',
  '/data.js',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png',
  // ── JS modules (diimport oleh data.js) ──
  '/js/auth.js',
  '/js/navbar.js',
  '/js/quiz.js',
  '/js/moderator.js',
  '/js/utils.js',
  '/js/supabase-client.js',
  '/js/state.js',
  // ── Quiz data baru (FIX: sebelumnya tidak di-cache!) ──
  '/quiz_data_new_ipa.js',
  '/quiz_data_mtk_new.js',
  '/quiz_data_bindo_new.js',
  // ── TKA data files ──
  '/tka_ipa_lama.js',
  '/tka_bindo_lama.js',
  '/tka_mtk_lama.js',
  '/tka_mtk_paket2_full.js',
  '/tka_bindo_paket1.js',
  '/tka_bindo_paket2.js',
  '/tka_bindo_diy_paket1.js',
  '/tka_ipas_paket1.js',
  '/tka_ipas_paket2.js',
  '/tka_ipas_diy_paket1.js',
  '/TKA_DATA_MTK.js',
  // ── External ──
  'https://cdn.jsdelivr.net/npm/chart.js',
];

const FONT_ORIGINS = [
  'https://fonts.googleapis.com',
  'https://fonts.gstatic.com',
];

function isFontRequest(url) {
  return FONT_ORIGINS.some(origin => url.startsWith(origin));
}

function isStaticAsset(url) {
  const appOrigins = [
    self.location.origin,
    'https://cdn.jsdelivr.net',
  ];
  return appOrigins.some(o => url.startsWith(o));
}

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[SW] Pre-caching assets…');
        return Promise.allSettled(
          STATIC_ASSETS.map(url =>
            cache.add(url).catch(err =>
              console.warn(`[SW] Failed to cache ${url}:`, err)
            )
          )
        );
      })
      .then(() => {
        console.log('[SW] Install selesai');
        return self.skipWaiting();
      })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME && key !== FONT_CACHE)
          .map(key => {
            console.log('[SW] Hapus cache lama:', key);
            return caches.delete(key);
          })
      )
    ).then(() => {
      console.log('[SW] Aktif');
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', event => {
  const { request } = event;
  const url = request.url;

  if (request.method !== 'GET') return;
  if (url.startsWith('chrome-extension://')) return;

  if (isFontRequest(url)) {
    event.respondWith(networkFirstFont(request));
    return;
  }

  if (isStaticAsset(url)) {
    event.respondWith(cacheFirst(request));
    return;
  }
});

async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;

  try {
    const response = await fetch(request);
    if (response && response.status === 200 && response.type !== 'error') {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    const fallback = await caches.match('/index.html');
    return fallback || new Response('Offline', {
      status: 503,
      headers: { 'Content-Type': 'text/plain' },
    });
  }
}

async function networkFirstFont(request) {
  const fontCache = await caches.open(FONT_CACHE);
  try {
    const response = await fetch(request);
    if (response && response.status === 200) {
      fontCache.put(request, response.clone());
    }
    return response;
  } catch {
    const cached = await fontCache.match(request);
    if (cached) return cached;
    return new Response('', { status: 408 });
  }
}

self.addEventListener('message', event => {
  if (event.data?.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
