// ============================================================
//  utils.js — BelajarCeria
//  Modul: Utility functions (DOM, toast, animasi, suara, tanggal)
// ============================================================

// ── DOM helpers ──────────────────────────────────────────────
export const $  = id  => document.getElementById(id);
export const $$ = sel => document.querySelectorAll(sel);

// ── Toast ────────────────────────────────────────────────────
export function showToast(msg, duration = 3200) {
  const t = $('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), duration);
}

// ── Animated counter ─────────────────────────────────────────
export function animateCounter(id, target) {
  const el = $(id); if (!el) return;
  const duration = 600;
  const start = parseInt(el.textContent) || 0;
  const step  = Math.ceil(Math.abs(target - start) / (duration / 16));
  let current = start;
  const timer = setInterval(() => {
    current += (target > current ? step : -step);
    if ((target > start && current >= target) || (target < start && current <= target)) {
      el.textContent = target; clearInterval(timer);
    } else { el.textContent = current; }
  }, 16);
}

// ── Shuffle array ────────────────────────────────────────────
export function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ── Unique ID generator ──────────────────────────────────────
export function generateId(prefix = 'ID') {
  const ts   = Date.now().toString(36).toUpperCase();
  const rand = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `${prefix}-${ts}-${rand}`;
}

// ── Timestamp formatter ──────────────────────────────────────
export function formatTimestamp(isoString) {
  const d = new Date(isoString);
  const dd  = String(d.getDate()).padStart(2, '0');
  const mm  = String(d.getMonth() + 1).padStart(2, '0');
  const yy  = d.getFullYear();
  const hh  = String(d.getHours()).padStart(2, '0');
  const min = String(d.getMinutes()).padStart(2, '0');
  const ss  = String(d.getSeconds()).padStart(2, '0');
  return `${dd}-${mm}-${yy}, ${hh}:${min}:${ss}`;
}

// ── Sound engine ─────────────────────────────────────────────
let _audioCtx = null;
let _isMuted  = false;

function _getCtx() {
  if (!_audioCtx) _audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (_audioCtx.state === 'suspended') _audioCtx.resume();
  return _audioCtx;
}

function _tone(freqStart, freqEnd, duration, gain = 0.18, startAt = 0) {
  const ctx = _getCtx();
  const t0  = ctx.currentTime + startAt;
  const osc = ctx.createOscillator();
  const env = ctx.createGain();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(freqStart, t0);
  if (freqEnd !== freqStart) osc.frequency.exponentialRampToValueAtTime(freqEnd, t0 + duration);
  env.gain.setValueAtTime(0, t0);
  env.gain.linearRampToValueAtTime(gain, t0 + 0.01);
  env.gain.setValueAtTime(gain, t0 + duration - 0.02);
  env.gain.linearRampToValueAtTime(0, t0 + duration);
  osc.connect(env); env.connect(ctx.destination);
  osc.start(t0); osc.stop(t0 + duration + 0.01);
}

export function playSound(type) {
  if (_isMuted) return;
  if (!window.AudioContext && !window.webkitAudioContext) return;
  try {
    switch (type) {
      case 'correct': _tone(220, 440, 0.15, 0.2); break;
      case 'wrong':   _tone(300, 150, 0.2,  0.18); break;
      case 'badge':   _tone(523, 523, 0.12, 0.18, 0.00); _tone(659, 659, 0.12, 0.18, 0.12); _tone(784, 784, 0.18, 0.22, 0.24); break;
      case 'xp':      _tone(880, 880, 0.08, 0.14); break;
    }
  } catch (err) { console.warn('[Sound]', err); }
}

export function applyMute(muted) {
  _isMuted = muted;
  const btn = $('muteBtn');
  if (btn) { btn.textContent = muted ? '🔇' : '🔊'; btn.title = muted ? 'Aktifkan suara' : 'Matikan suara'; }
}

export function toggleMute() {
  applyMute(!_isMuted);
  localStorage.setItem('bc-mute', _isMuted ? '1' : '0');
}

export function isMuted() { return _isMuted; }

// ── Theme ────────────────────────────────────────────────────
export function applyTheme(pref) {
  const html = document.documentElement;
  html.classList.remove('dark', 'light');
  if (pref === 'dark')  html.classList.add('dark');
  else if (pref === 'light') html.classList.add('light');
}

export function toggleTheme() {
  const html   = document.documentElement;
  const isDark = html.classList.contains('dark') ||
    (!html.classList.contains('light') && window.matchMedia('(prefers-color-scheme: dark)').matches);
  const next = isDark ? 'light' : 'dark';
  localStorage.setItem('bc-theme', next);
  applyTheme(next);
}
