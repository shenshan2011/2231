// ============================================================
//  navbar.js — BelajarCeria
//  Modul: Navbar — Logo kiri, Settings Gear dropdown kanan
//         Beranda & Monitor sebagai icon pills di tengah
// ============================================================
import { AUTH } from './auth.js';
import { toggleTheme, toggleMute, $ } from './utils.js';

// ── Build & inject navbar HTML ────────────────────────────────
export function buildNavbar() {
  const nav = document.getElementById('app-nav');
  if (!nav) return;

  nav.innerHTML = `
    <!-- Logo -->
    <div class="nav-logo" id="navLogo">
      <span class="nav-logo-star">✦</span>
      <span class="nav-logo-text">BelajarCeria</span>
    </div>

    <!-- Center nav pills: Beranda & Monitor -->
    <nav class="nav-pills" role="navigation" aria-label="Navigasi utama">
      <button class="nav-pill active" id="pill-home" aria-label="Beranda">
        <span class="nav-pill-icon">🏠</span>
        <span class="nav-pill-label">Beranda</span>
      </button>
      <button class="nav-pill" id="pill-monitor" aria-label="Monitor">
        <span class="nav-pill-icon">📊</span>
        <span class="nav-pill-label">Monitor</span>
      </button>
    </nav>

    <!-- XP chip + Settings gear -->
    <div class="nav-right">
      <div class="nav-xp-chip" id="xpChip">
        <span class="nav-xp-bolt">⚡</span>
        <span id="xpNum">0</span>
        <span class="nav-xp-label">XP</span>
      </div>

      <!-- Settings button -->
      <div class="nav-settings-wrap" id="settingsWrap">
        <button class="nav-settings-btn" id="settingsBtn"
                aria-label="Pengaturan" aria-haspopup="true" aria-expanded="false"
                title="Pengaturan">
          <svg class="nav-gear-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
               stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="3"/>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
          </svg>
        </button>

        <!-- Dropdown menu -->
        <div class="nav-dropdown" id="settingsDropdown" role="menu" aria-label="Menu pengaturan" hidden>
          <div class="nav-dropdown-user" id="dropUser">
            <div class="nav-dropdown-avatar" id="dropAvatar">?</div>
            <div>
              <div class="nav-dropdown-username" id="dropUsername">—</div>
              <div class="nav-dropdown-role" id="dropRole">Pengguna</div>
            </div>
          </div>

          <div class="nav-dropdown-divider"></div>

          <button class="nav-dropdown-item" id="dropAbout" role="menuitem">
            <span class="nav-dropdown-item-icon">👤</span>
            <span>About</span>
          </button>

          <button class="nav-dropdown-item" id="dropModPanel" role="menuitem" style="display:none">
            <span class="nav-dropdown-item-icon">🛡️</span>
            <span>Panel Moderator</span>
          </button>

          <div class="nav-dropdown-divider"></div>

          <button class="nav-dropdown-item" id="dropTheme" role="menuitem">
            <span class="nav-dropdown-item-icon" id="dropThemeIcon">🌙</span>
            <span id="dropThemeLabel">Mode Gelap</span>
            <div class="nav-dropdown-toggle" id="dropThemeToggle"></div>
          </button>

          <button class="nav-dropdown-item" id="dropSound" role="menuitem">
            <span class="nav-dropdown-item-icon" id="dropSoundIcon">🔊</span>
            <span id="dropSoundLabel">Efek Suara</span>
            <div class="nav-dropdown-toggle on" id="dropSoundToggle"></div>
          </button>

          <div class="nav-dropdown-divider"></div>

          <button class="nav-dropdown-item danger" id="dropLogout" role="menuitem">
            <span class="nav-dropdown-item-icon">🚪</span>
            <span>Keluar</span>
          </button>
        </div>
      </div>
    </div>
  `;
}

// ── Bind navbar event listeners ───────────────────────────────
export function bindNavbar({ onHome, onMonitor, onAbout, onLogout }) {
  // Pills
  $('pill-home')?.addEventListener('click', () => { setActiveNavPill('home'); onHome?.(); });
  $('pill-monitor')?.addEventListener('click', () => { setActiveNavPill('monitor'); onMonitor?.(); });

  // Logo → home
  $('navLogo')?.addEventListener('click', () => { setActiveNavPill('home'); onHome?.(); });

  // Settings gear toggle
  const btn  = $('settingsBtn');
  const drop = $('settingsDropdown');
  btn?.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = !drop.hidden;
    drop.hidden = isOpen;
    btn.setAttribute('aria-expanded', String(!isOpen));
    if (!isOpen) updateDropdownState();
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!$('settingsWrap')?.contains(e.target)) {
      if (drop) drop.hidden = true;
      btn?.setAttribute('aria-expanded', 'false');
    }
  });

  // Close on Esc
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !drop?.hidden) {
      drop.hidden = true; btn?.focus();
    }
  });

  // Dropdown items
  $('dropAbout')?.addEventListener('click', () => { closeDropdown(); onAbout?.(); });
  $('dropModPanel')?.addEventListener('click', () => { window.location.href = 'moderator.html'; });
  $('dropTheme')?.addEventListener('click', () => { toggleTheme(); updateDropdownState(); });
  $('dropSound')?.addEventListener('click', () => { toggleMute(); updateDropdownState(); });
  $('dropLogout')?.addEventListener('click', () => { closeDropdown(); onLogout?.(); });
}

function closeDropdown() {
  const drop = $('settingsDropdown');
  if (drop) drop.hidden = true;
  $('settingsBtn')?.setAttribute('aria-expanded', 'false');
}

// ── Update navbar state ───────────────────────────────────────
export function updateNavbar(xp = 0) {
  const xpEl = $('xpNum');
  if (xpEl) xpEl.textContent = (xp || 0).toLocaleString('id-ID');
  updateDropdownState();
}

function updateDropdownState() {
  const username = AUTH.currentUser() || '—';
  const role     = AUTH.currentRole();
  const isDark   = document.documentElement.classList.contains('dark');
  const isMuted  = localStorage.getItem('bc-mute') === '1';

  const av = $('dropAvatar');
  if (av) av.textContent = username !== '—' ? username[0].toUpperCase() : '?';
  const un = $('dropUsername'); if (un) un.textContent = username;
  const rl = $('dropRole');    if (rl) rl.textContent  = role === 'moderator' ? '🛡️ Moderator' : '👤 Pengguna';

  const modBtn = $('dropModPanel');
  if (modBtn) modBtn.style.display = role === 'moderator' ? '' : 'none';

  const thIcon  = $('dropThemeIcon');  if (thIcon)  thIcon.textContent  = isDark ? '☀️' : '🌙';
  const thLabel = $('dropThemeLabel'); if (thLabel) thLabel.textContent = isDark ? 'Mode Terang' : 'Mode Gelap';
  const thToggle = $('dropThemeToggle');
  if (thToggle) thToggle.classList.toggle('on', isDark);

  const sndIcon  = $('dropSoundIcon');  if (sndIcon)  sndIcon.textContent  = isMuted ? '🔇' : '🔊';
  const sndLabel = $('dropSoundLabel'); if (sndLabel) sndLabel.textContent = isMuted ? 'Suara Off' : 'Efek Suara';
  const sndToggle = $('dropSoundToggle');
  if (sndToggle) sndToggle.classList.toggle('on', !isMuted);
}

// ── Set active pill ───────────────────────────────────────────
export function setActiveNavPill(page) {
  $$('.nav-pill').forEach(p => p.classList.remove('active'));
  const pill = $(`pill-${page}`);
  if (pill) pill.classList.add('active');
}

function $$(sel) { return document.querySelectorAll(sel); }
