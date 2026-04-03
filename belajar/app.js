// ============================================================
//  app.js — BelajarCeria | Orchestrator Utama
//  Versi: Refactored + Modular
//  Import: auth, state, navbar, quiz, utils
// ============================================================

import { AUTH }           from './js/auth.js';
import { STATE }          from './js/state.js';
import { buildNavbar, bindNavbar, updateNavbar, setActiveNavPill } from './js/navbar.js';
import { initQuiz, getQuizId, getAttemptCount } from './js/quiz.js';
import { $, $$, showToast, animateCounter, playSound, applyMute, applyTheme, toggleTheme, toggleMute } from './js/utils.js';
import {
  TOPIC_LIST,
  MATERI_CONTENT,
  QUIZ_DATA_ALL as QUIZ_DATA,
  TKA_DATA,
} from './data.js';


// ── HELPER: safe newline → <br> ────────────────────────────────
// Ganti \n dengan <br> HANYA di luar tag HTML/SVG.
// Mencegah <br> masuk ke dalam atribut SVG yang merusak rendering gambar.
function safeNlToBr(str) {
  if (!str) return '';
  return str.replace(/(<[^>]+>)|([^<]+)/g, (match, tag, text) => {
    if (tag) return tag;
    if (text) return text.replace(/\n/g, '<br>');
    return match;
  });
}

// ── Runtime vars ──────────────────────────────────────────────
let currentSubject    = '';
let currentTopicId    = '';
let currentQuizzes    = [];
let currentFlashcards = [];
let fcIndex           = 0;
let readTimerHandle   = null;

// ── INIT ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', async () => {
  // 1. Build navbar
  buildNavbar();
  bindNavbar({
    onHome:    () => showPage('home'),
    onMonitor: () => showPage('monitor'),
    onAbout:   () => showPage('about'),
    onLogout:  logout,
  });

  // 2. Apply theme & mute
  applyTheme(localStorage.getItem('bc-theme'));
  applyMute(localStorage.getItem('bc-mute') === '1');

  // 3. Check session
  const session = await AUTH.getSession();
  if (!session) { showAuthModal(); return; }

  const profile = await AUTH.loadProfile();
  if (!profile) { showAuthModal(); return; }

  // Moderator → redirect ke panel
  if (profile.role === 'moderator') {
    window.location.href = 'moderator.html';
    return;
  }

  await STATE.load();
  startStudyTimer();
  updateHome();
  checkBadges();
  showPage('home', false);

  // BUGFIX: Flush data ke Supabase jika ada perubahan pending saat halaman ditutup/pindah.
  // Mencegah hilangnya attempt quiz atau hasil TKA akibat debounce yang belum tereksekusi.
  window.addEventListener('beforeunload', () => { STATE._flush(); });
});

// ── NAVIGATION ────────────────────────────────────────────────
function showPage(pageId, pushHistory = true) {
  $$('.page').forEach(p => p.classList.remove('active'));
  const page = $('page-' + pageId);
  if (page) page.classList.add('active');

  if (pageId !== 'materi' && readTimerHandle) {
    clearTimeout(readTimerHandle); readTimerHandle = null;
    $('readingTracker').style.display = 'none';
  }

  if (pageId === 'home')    { setActiveNavPill('home');    updateHome(); }
  if (pageId === 'monitor') { setActiveNavPill('monitor'); updateMonitor(); }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showSubject(subject) {
  currentSubject = subject;
  const labels = { ipa: '🔬 IPA', bindo: '📚 B. Indonesia', mtk: '🔢 Matematika' };
  $('topicsTitle').textContent = labels[subject] || 'Pilih Materi';
  const list = $('topicList'); list.innerHTML = '';
  const s = STATE.get();

  (TOPIC_LIST[subject] || []).forEach(topic => {
    const done      = !!s.read[topic.id];
    const score     = s.quizScores[topic.id];
    const attempts  = getAttemptCount(topic.id);
    const status    = done ? 'done' : score !== undefined ? 'inprogress' : '';
    const badgeTxt  = done
      ? `✅ Selesai`
      : score !== undefined
        ? `📝 ${score}% (${attempts}×)`
        : '📖 Mulai';
    const badgeCls  = done ? 'done' : score !== undefined ? 'inprogress' : '';
    const div = document.createElement('div');
    div.className = `topic-item ${status}`;
    div.innerHTML = `
      <div class="topic-left">
        <div class="topic-icon">${topic.icon}</div>
        <div>
          <div class="topic-name">${topic.name}</div>
          <div class="topic-sub">${topic.sub}</div>
        </div>
      </div>
      <span class="topic-badge ${badgeCls}">${badgeTxt}</span>`;
    div.addEventListener('click', () => showMateri(topic.id));
    list.appendChild(div);
  });
  showPage('topics');
}

function showMateri(topicId) {
  currentTopicId    = topicId;
  const materi      = MATERI_CONTENT[topicId];
  if (!materi) return;
  currentQuizzes    = QUIZ_DATA[topicId]   || [];
  currentFlashcards = materi.flashcards    || [];

  $('materiTitle').textContent    = materi.title || 'Materi';
  $('materiContent').innerHTML    = materi.body  || '';
  $('quizBtn').style.display      = currentQuizzes.length    > 0 ? '' : 'none';
  $('flashcardBtn').style.display = currentFlashcards.length > 0 ? '' : 'none';

  // Tampilkan Quiz ID + attempt count di materi page
  let qidBar = document.getElementById('quizIdBar');
  if (!qidBar && currentQuizzes.length > 0) {
    qidBar = document.createElement('div');
    qidBar.id = 'quizIdBar';
    qidBar.className = 'quiz-id-bar';
    $('materiBtnRow')?.before(qidBar);
  }
  if (qidBar && currentQuizzes.length > 0) {
    const qid      = getQuizId(topicId);
    const attempts = getAttemptCount(topicId);
    qidBar.innerHTML = `
      <span title="Quiz ID unik untuk topik ini">🔑 Quiz ID: <strong>${qid}</strong></span>
      <span>📋 Percobaan: <strong>${attempts}</strong>×</span>
    `;
  }

  $('materiBackBtn').onclick = () => showSubject(currentSubject);
  $('quizBackBtn').onclick   = () => showMateri(currentTopicId);
  $('fcBackBtn').onclick     = () => showMateri(currentTopicId);
  $('scoreBackBtn').onclick  = () => showSubject(currentSubject);

  clearTimeout(readTimerHandle); readTimerHandle = null;
  const s = STATE.get();
  if (!s.read[topicId]) {
    const tracker = $('readingTracker'); tracker.style.display = 'flex';
    readTimerHandle = setTimeout(() => {
      readTimerHandle = null;
      s.read[topicId] = new Date().toISOString();
      addActivity(`📖 Membaca: ${materi.title}`, 'var(--success)');
      addXP(10); updateStreak();
      showToast('📖 +10 XP! Materi selesai dibaca!');
      tracker.style.display = 'none';
      STATE.save(); updateHome(); checkBadges();
    }, 8000);
  } else {
    $('readingTracker').style.display = 'none';
  }
  showPage('materi');
}

// ── FLASHCARD ─────────────────────────────────────────────────
function startFlashcard() { fcIndex = 0; renderFlashcard(); showPage('flashcard'); }

function renderFlashcard() {
  const fc = currentFlashcards[fcIndex]; if (!fc) return;
  $('fcFront').textContent = fc.q; $('fcBack').textContent = fc.a;
  $('fcCount').textContent = `${fcIndex + 1} / ${currentFlashcards.length}`;
  $('flashcard').classList.remove('flipped');
}

function flipCard()  { $('flashcard').classList.toggle('flipped'); }
function fcNav(dir)  {
  fcIndex = (fcIndex + dir + currentFlashcards.length) % currentFlashcards.length;
  renderFlashcard();
}

// ── QUIZ ──────────────────────────────────────────────────────
function startQuiz() {
  // Delegasi ke quiz.js module
  initQuiz({
    topicId:   currentTopicId,
    questions: currentQuizzes,
    onFinish:  handleQuizFinish,
    onBack:    () => showMateri(currentTopicId),
  });
  showPage('quiz');
}

function retryQuiz() { startQuiz(); }

function handleQuizFinish({ pct, benar, salah, total, quizId, attemptId, attemptNumber, durasiStr }) {
  addActivity(
    `🎯 Quiz: ${MATERI_CONTENT[currentTopicId]?.title || currentTopicId} — ${pct}%`,
    pct >= 80 ? 'var(--success)' : pct >= 60 ? 'var(--warning)' : 'var(--danger)'
  );
  addXP(pct);
  checkBadges();

  $('finalScore').textContent = pct;

  let title, msg;
  if (pct >= 90)      { title = 'Luar Biasa! 🎉';       msg = `Sempurna! +${pct} XP!`; }
  else if (pct >= 75) { title = 'Bagus Sekali! 👏';     msg = `Nilai bagus! +${pct} XP!`; }
  else if (pct >= 60) { title = 'Lumayan! 💪';           msg = `Terus semangat! +${pct} XP.`; }
  else                { title = 'Yuk Belajar Lagi! 📚'; msg = 'Pelajari materinya lagi ya!'; }

  $('scoreTitle').textContent = title;
  $('scoreMsg').textContent   = msg;
  $('scoreDetail').innerHTML  = `
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
      <div>
        <div style="font-size:1.5rem;font-family:'Fredoka',cursive;color:var(--success)">${benar}/${total}</div>
        <div style="font-size:0.72rem;color:var(--muted);font-weight:700;text-transform:uppercase">Benar</div>
      </div>
      <div>
        <div style="font-size:1.5rem;font-family:'Fredoka',cursive;color:var(--danger)">${salah}</div>
        <div style="font-size:0.72rem;color:var(--muted);font-weight:700;text-transform:uppercase">Salah</div>
      </div>
    </div>
    <div class="attempt-log-summary">
      <span title="Quiz ID">🔑 ${quizId}</span>
      <span title="Attempt ID" style="font-size:0.7rem;opacity:0.7">${attemptId}</span>
      <span>Percobaan ke-<strong>${attemptNumber}</strong> · ⏱ ${durasiStr}</span>
    </div>`;
  showPage('score');
}

// ── XP & PROGRESS ────────────────────────────────────────────
function addXP(amount) {
  const s  = STATE.get();
  s.xp     = (s.xp || 0) + amount;
  STATE.save();
  const el = $('xpNum'); if (el) el.textContent = s.xp.toLocaleString('id-ID');
  updateNavbar(s.xp);
  const floater = document.createElement('div');
  floater.className   = 'xp-floater';
  floater.textContent = `+${amount} XP`;
  const nav = $('app-nav');
  if (nav) {
    nav.style.position = 'relative';
    nav.appendChild(floater);
    floater.addEventListener('animationend', () => floater.remove(), { once: true });
  }
  playSound('xp');
}

function addActivity(text, color = 'var(--primary)') {
  const s = STATE.get();
  const now = new Date();
  s.activity.unshift({
    text, color,
    time: now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
    date: now.toLocaleDateString('id-ID'),
  });
  if (s.activity.length > 40) s.activity.pop();
  STATE.save();
}

function updateStreak() {
  const s = STATE.get();
  const today = new Date().toDateString();
  if (s.lastDate === today) return;
  const yesterday = new Date(); yesterday.setDate(yesterday.getDate() - 1);
  s.streak  = s.lastDate === yesterday.toDateString() ? (s.streak || 0) + 1 : 1;
  s.lastDate = today;
  STATE.save();
}

// ── HOME ──────────────────────────────────────────────────────
function updateHome() {
  const s    = STATE.get();
  const xp   = s.xp || 0;
  updateNavbar(xp);

  animateCounter('statTopics',  Object.keys(s.read).length);
  animateCounter('statQuizzes', Object.keys(s.quizScores).length);
  animateCounter('statStreak',  s.streak || 0);

  const name = AUTH.currentUser() || 'Pelajar';
  const hour = new Date().getHours();
  let greeting, heroEmoji;
  if (hour >= 5 && hour < 12)       { greeting = `Selamat Pagi, ${name}! ☀️`;   heroEmoji = '🌅'; }
  else if (hour >= 12 && hour < 18) { greeting = `Selamat Siang, ${name}! 🌤️`; heroEmoji = '🎓'; }
  else                               { greeting = `Selamat Malam, ${name}! 🌙`;  heroEmoji = '🌙'; }

  const heroEl = document.querySelector('.hero');
  if (heroEl) {
    heroEl.querySelector('.hero-emoji').textContent = heroEmoji;
    heroEl.querySelector('h1').textContent          = greeting;
    heroEl.querySelector('p').textContent           = xp === 0 ? 'Yuk mulai belajar hari ini!' : xp < 100 ? 'Semangat terus ya!' : 'Kamu luar biasa! 🏆';
  }

  ['ipa', 'bindo', 'mtk'].forEach(sub => {
    const total = (TOPIC_LIST[sub] || []).length;
    const done  = (TOPIC_LIST[sub] || []).filter(t => s.read[t.id]).length;
    const pct   = total > 0 ? Math.round((done / total) * 100) : 0;
    const bar   = $(`prog-${sub}`); if (bar) bar.style.width = pct + '%';
    const cnt   = $(`count-${sub}`); if (cnt) cnt.textContent = `${done}/${total}`;
  });
  checkBadges();
}

// ── BADGES ────────────────────────────────────────────────────
const BADGE_CONDITIONS = [
  { id: 'reader',    check: s => Object.keys(s.read).length >= 1 },
  { id: 'scientist', check: s => TOPIC_LIST.ipa.filter(t => s.read[t.id]).length >= 3 },
  { id: 'writer',    check: s => TOPIC_LIST.bindo.filter(t => s.read[t.id]).length >= 3 },
  { id: 'mathlete',  check: s => TOPIC_LIST.mtk.filter(t => s.read[t.id]).length >= 3 },
  { id: 'streak',    check: s => (s.streak || 0) >= 3 },
  { id: 'master',    check: s => Object.keys(s.read).length >= 10 },
];

function checkBadges() {
  const s = STATE.get();
  BADGE_CONDITIONS.forEach(({ id, check }) => {
    const el = $('badge-' + id); if (!el) return;
    if (check(s) && el.classList.contains('locked')) {
      el.classList.remove('locked'); el.classList.add('earned');
      showToast(`🏆 Lencana baru: ${el.querySelector('.badge-name')?.textContent}!`);
      playSound('badge');
    }
  });
}

// ── MONITOR ───────────────────────────────────────────────────
let _chartRadar = null, _chartBar = null;

// Dipanggil oleh toggleTheme() saat user ganti tema di halaman Monitor
window._redrawMonitorCharts = () => updateMonitor();

function updateMonitor() {
  const s = STATE.get();
  const subjectData = ['ipa', 'bindo', 'mtk'].map(sub => {
    const total = (TOPIC_LIST[sub] || []).length;
    const done  = (TOPIC_LIST[sub] || []).filter(t => s.read[t.id]).length;
    return total > 0 ? Math.round((done / total) * 100) : 0;
  });

  ['m-ipa-pct', 'm-bindo-pct', 'm-mtk-pct'].forEach((id, i) => {
    const el = $(id); if (el) el.textContent = subjectData[i] + '%';
  });

  // Deteksi dark mode secara dinamis — biar chart ikut tema
  const isDark       = document.documentElement.classList.contains('dark') ||
    (!document.documentElement.classList.contains('light') && window.matchMedia('(prefers-color-scheme: dark)').matches);
  const clrLabel     = isDark ? '#CBD5E1' : '#1E293B';   // label axis
  const clrMuted     = isDark ? '#64748B' : '#94A3B8';   // tick values
  const clrGrid      = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(226,232,240,0.8)';
  const clrGridLight = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(226,232,240,0.6)';

  if (_chartRadar) { _chartRadar.destroy(); _chartRadar = null; }
  const radarCtx = $('radarChart');
  if (radarCtx) {
    _chartRadar = new Chart(radarCtx, {
      type: 'radar',
      data: {
        labels: ['IPA 🔬', 'B. Indonesia 📚', 'Matematika 🔢'],
        datasets: [{ label: 'Progress (%)', data: subjectData,
          backgroundColor: 'rgba(99,102,241,0.12)', borderColor: '#6366F1', borderWidth: 2.5,
          pointBackgroundColor: ['#10B981', '#3B82F6', '#EF4444'],
          pointBorderColor: isDark ? '#1E293B' : '#fff', pointBorderWidth: 2, pointRadius: 6, pointHoverRadius: 8 }]
      },
      options: {
        responsive: true, maintainAspectRatio: true,
        animation: { duration: 700, easing: 'easeOutQuart' },
        plugins: { legend: { display: false }, tooltip: { callbacks: { label: ctx => ` ${ctx.raw}% selesai` } } },
        scales: { r: { min: 0, max: 100,
          ticks: { stepSize: 25, font: { family: 'Nunito', size: 10, weight: '700' }, color: clrMuted, backdropColor: 'transparent', callback: v => v + '%' },
          pointLabels: { font: { family: 'Nunito', size: 12, weight: '800' }, color: clrLabel },
          grid: { color: clrGrid },
          angleLines: { color: clrGridLight }
        }},
      },
    });
  }

  // Bar chart
  const qh = $('quizHistory');
  const entries = Object.entries(s.quizScores);
  if (_chartBar) { _chartBar.destroy(); _chartBar = null; }
  if (qh) {
    if (entries.length === 0) {
      qh.innerHTML = `<div class="empty-state"><span class="empty-state-icon">🎯</span>Belum ada quiz dikerjakan</div>`;
    } else {
      const labels = [], values = [], bgColors = [], borderColors = [];
      entries.forEach(([id, pct]) => {
        const topic = findTopic(id);
        labels.push(topic ? `${topic.icon} ${topic.name}` : id); values.push(pct);
        if (pct >= 80) { bgColors.push('rgba(34,197,94,0.18)'); borderColors.push('#22C55E'); }
        else if (pct >= 60) { bgColors.push('rgba(245,158,11,0.18)'); borderColors.push('#F59E0B'); }
        else { bgColors.push('rgba(239,68,68,0.18)'); borderColors.push('#EF4444'); }
      });
      const canvasHeight = Math.max(200, entries.length * 38 + 40);
      qh.innerHTML = `<div class="chart-card"><div class="chart-canvas-wrap" style="height:${canvasHeight}px"><canvas id="barChart"></canvas></div></div>`;
      const barCtx = $('barChart');
      if (barCtx) {
        _chartBar = new Chart(barCtx, {
          type: 'bar',
          data: { labels, datasets: [{ label: 'Nilai (%)', data: values, backgroundColor: bgColors, borderColor: borderColors, borderWidth: 2, borderRadius: 8, borderSkipped: false }] },
          options: { indexAxis: 'y', responsive: true, maintainAspectRatio: false,
            animation: { duration: 600, easing: 'easeOutQuart' },
            plugins: { legend: { display: false }, tooltip: { callbacks: { label: ctx => ` Nilai: ${ctx.raw}%` } } },
            scales: {
              x: { min: 0, max: 100, grid: { color: clrGrid }, ticks: { font: { family: 'Nunito', size: 11, weight: '700' }, color: clrMuted, callback: v => v + '%' } },
              y: { grid: { display: false }, ticks: { font: { family: 'Nunito', size: 11, weight: '700' }, color: clrLabel } }
            }
          },
        });
      }
    }
  }

  // Activity log
  const al = $('activityLog');
  if (al) {
    al.innerHTML = !s.activity || s.activity.length === 0
      ? `<li><div class="empty-state" style="padding:20px 0">Belum ada aktivitas</div></li>`
      : s.activity.slice(0, 20).map(a => `<li><div class="activity-dot" style="background:${a.color}"></div><div><div style="font-weight:700;font-size:0.87rem">${a.text}</div><div style="font-size:0.74rem;color:var(--muted)">${a.date} ${a.time}</div></div></li>`).join('');
  }

  // Read list
  const rl = $('readList');
  if (rl) {
    const readEntries = Object.entries(s.read);
    rl.innerHTML = readEntries.length === 0
      ? `<div class="empty-state"><span class="empty-state-icon">📖</span>Belum ada materi dibaca</div>`
      : readEntries.map(([id, date]) => {
          const topic = findTopic(id);
          return `<div class="monitor-card" style="display:flex;justify-content:space-between;align-items:center">
            <span style="font-weight:800;font-size:0.9rem">${topic?.icon || '📖'} ${topic?.name || id}</span>
            <span style="font-size:0.76rem;color:var(--muted);font-weight:700">✅ ${new Date(date).toLocaleDateString('id-ID')}</span>
          </div>`;
        }).join('');
  }

  // TKA history
  const tkaHistEl = $('tkaHistoryList');
  if (tkaHistEl) {
    const hist = (s.tkaHistory || []).slice(0, 5);
    tkaHistEl.innerHTML = hist.length === 0
      ? '<div class="empty-state"><span class="empty-state-icon">🏆</span>Belum ada riwayat TKA</div>'
      : hist.map(h => {
          const cfg = TKA_CONFIG[h.subject] || { label: h.subject };
          const color = h.nilai >= 75 ? 'var(--success)' : h.nilai >= 60 ? 'var(--warning)' : 'var(--danger)';
          const dateStr = new Date(h.date).toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' });
          return `<div class="monitor-card">
            <div class="monitor-row"><span class="monitor-topic">${cfg.label}</span><span style="font-weight:800;color:${color}">${h.nilai}</span></div>
            <div style="font-size:0.76rem;color:var(--muted);display:flex;gap:12px;margin-top:2px">
              <span>✅ ${h.benar}/${h.total}</span><span>⏱ ${h.durasi}</span><span>📅 ${dateStr}</span>
            </div>
            <div class="mini-bar" style="margin-top:8px"><div class="mini-fill" style="background:${color};width:${h.nilai}%"></div></div>
          </div>`;
        }).join('');
  }
}

function findTopic(id) {
  for (const sub of ['ipa', 'bindo', 'mtk']) {
    const found = TOPIC_LIST[sub]?.find(t => t.id === id); if (found) return found;
  }
  return null;
}

// ── TKA ──────────────────────────────────────────────────────
let tkaSubject = '', tkaQuestions = [], tkaAnswers = {}, tkaMarked = new Set();
let tkaCurrentIndex = 0, tkaTimerHandle = null, tkaSecondsLeft = 0, tkaStartTime = null;

const TKA_CONFIG = {
  ipa:   { label: '🔬 IPA',          total: 40, duration: 90 * 60 },
  bindo: { label: '📚 B. Indonesia',  total: 40, duration: 90 * 60 },
  mtk:   { label: '🔢 Matematika',    total: 35, duration: 90 * 60 },
};

function startTKA(subject) {
  if (!TKA_DATA?.[subject]?.length) { showToast('⚠️ Data soal TKA belum tersedia.'); return; }
  tkaSubject = subject; tkaAnswers = {}; tkaMarked = new Set(); tkaCurrentIndex = 0; tkaStartTime = Date.now();
  const cfg = TKA_CONFIG[subject]; const pool = [...TKA_DATA[subject]];
  for (let i = pool.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [pool[i], pool[j]] = [pool[j], pool[i]]; }
  tkaQuestions = pool.slice(0, cfg.total); tkaSecondsLeft = cfg.duration;
  const hdrEl = $('tkaSubjectLabel'); if (hdrEl) hdrEl.textContent = cfg.label;
  showPage('tka'); renderTKAQuestion(0); startTKATimer();
}

function renderTKAQuestion(index) {
  if (index < 0 || index >= tkaQuestions.length) return;
  tkaCurrentIndex = index;
  const q = tkaQuestions[index]; const total = tkaQuestions.length;
  const numEl = $('tkaQNum'); if (numEl) numEl.textContent = `Soal ${index + 1} / ${total}`;
  const qEl = $('tkaQuestionText'); if (qEl) qEl.innerHTML = safeNlToBr(q.q);
  const badgeEl = $('tkaTopicBadge'); if (badgeEl) {
    const lvlMap = { mudah: 'Mudah', sedang: 'Sedang', susah: 'Sulit', sulit: 'Sulit' };
    badgeEl.textContent = `${q.topic} • ${lvlMap[(q.level||'').toLowerCase()] || q.level || ''}`;
  }
  const optContainer = $('tkaOptions');
  if (optContainer) optContainer.innerHTML = q.opts.map((opt, i) =>
    `<button class="tka-option${tkaAnswers[index] === i ? ' selected' : ''}" onclick="selectTKAAnswer(${index}, ${i})"><span class="tka-opt-letter">${'ABCD'[i]}</span><span>${opt}</span></button>`
  ).join('');
  const markBtn = $('tkaMarkBtn');
  if (markBtn) { const m = tkaMarked.has(index); markBtn.textContent = m ? '⭐ Ditandai' : '☆ Tandai'; markBtn.classList.toggle('marked', m); }
  $('tkaPrevBtn').disabled = index === 0;
  $('tkaNextBtn').textContent = index === total - 1 ? 'Selesai 🏁' : 'Lanjut →';
  renderTKANavGrid();
}

function renderTKANavGrid() {
  const grid = $('tkaNavGrid'); if (!grid) return;
  grid.innerHTML = tkaQuestions.map((_, i) => {
    let cls = 'tka-nav-btn';
    if (tkaAnswers[i] !== undefined) cls += ' answered';
    if (tkaMarked.has(i))            cls += ' marked';
    if (i === tkaCurrentIndex)       cls += ' active';
    return `<button class="${cls}" onclick="renderTKAQuestion(${i})">${i + 1}</button>`;
  }).join('');
  setTimeout(() => { const a = grid.querySelector('.tka-nav-btn.active'); if (a) a.scrollIntoView({ inline: 'center', behavior: 'smooth' }); }, 50);
}

function selectTKAAnswer(index, optIdx) {
  tkaAnswers[index] = optIdx;
  document.querySelectorAll('.tka-option').forEach((btn, i) => btn.classList.toggle('selected', i === optIdx));
  renderTKANavGrid();
}

function toggleTKAMark(index) {
  if (tkaMarked.has(index)) tkaMarked.delete(index); else tkaMarked.add(index);
  renderTKAQuestion(index);
}

function tkaPrev() { if (tkaCurrentIndex > 0) renderTKAQuestion(tkaCurrentIndex - 1); }
function tkaNext() { if (tkaCurrentIndex < tkaQuestions.length - 1) renderTKAQuestion(tkaCurrentIndex + 1); else confirmSubmitTKA(); }

function startTKATimer() { if (tkaTimerHandle) clearInterval(tkaTimerHandle); tkaTimerHandle = setInterval(tickTKATimer, 1000); updateTKATimerDisplay(); }
function stopTKATimer()  { if (tkaTimerHandle) { clearInterval(tkaTimerHandle); tkaTimerHandle = null; } }
function tickTKATimer()  { tkaSecondsLeft--; updateTKATimerDisplay(); if (tkaSecondsLeft <= 0) { stopTKATimer(); submitTKA(true); } }
function updateTKATimerDisplay() {
  const el = $('tkaTimer'); if (!el) return;
  const m = String(Math.floor(tkaSecondsLeft / 60)).padStart(2, '0');
  const s = String(tkaSecondsLeft % 60).padStart(2, '0');
  el.textContent = `⏱ ${m}:${s}`;
  el.classList.remove('warn', 'danger');
  if (tkaSecondsLeft <= 3*60) el.classList.add('danger');
  else if (tkaSecondsLeft <= 10*60) el.classList.add('warn');
}

function confirmSubmitTKA() {
  const unanswered = tkaQuestions.length - Object.keys(tkaAnswers).length;
  if (unanswered > 0) {
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.innerHTML = `<div class="modal-box" role="dialog" aria-modal="true"><div class="modal-icon">⚠️</div><h2 class="modal-title">Yakin Selesai?</h2><p class="modal-msg">Masih ada <strong>${unanswered} soal</strong> belum dijawab.<br>Soal tidak dijawab dihitung <strong>salah</strong>.</p><div class="modal-actions"><button class="btn modal-btn-cancel" id="tkaModalCancel">Lanjut Kerjakan</button><button class="btn modal-btn-confirm" id="tkaModalConfirm">Kumpulkan</button></div></div>`;
    document.body.appendChild(overlay);
    requestAnimationFrame(() => overlay.classList.add('modal-visible'));
    function closeModal() { overlay.classList.remove('modal-visible'); setTimeout(() => overlay.remove(), 250); }
    $('tkaModalCancel').addEventListener('click', closeModal);
    overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
    $('tkaModalConfirm').addEventListener('click', () => { closeModal(); submitTKA(false); });
  } else { submitTKA(false); }
}

function submitTKA(forced = false) {
  stopTKATimer();
  const total = tkaQuestions.length; let benar = 0;
  const breakdown = {};
  const answerDetails = tkaQuestions.map((q, i) => {
    if (!breakdown[q.topic]) breakdown[q.topic] = { benar: 0, total: 0 };
    breakdown[q.topic].total++;
    const isBenar = tkaAnswers[i] === q.ans;
    if (isBenar) { benar++; breakdown[q.topic].benar++; }
    return { soal: q.q, opts: q.opts||[], kunci: q.ans, kunciTxt: q.opts?(q.opts[q.ans]||q.ans):q.ans, userAns: tkaAnswers[i]??null, userAnsTxt: tkaAnswers[i]!==undefined&&q.opts?(q.opts[tkaAnswers[i]]||'-'):'-', benar: isBenar, topic: q.topic };
  });
  const nilai = Math.round((benar / total) * 100);
  const durasi = Date.now() - tkaStartTime;
  const durasiStr = `${String(Math.floor(durasi/60000)).padStart(2,'0')}:${String(Math.floor((durasi%60000)/1000)).padStart(2,'0')}`;
  const s = STATE.get();
  if (!s.tkaHistory) s.tkaHistory = [];
  const sessionId = `TKA-${tkaSubject.toUpperCase()}-${Date.now()}`;
  s.tkaHistory.unshift({ sessionId, subject: tkaSubject, nilai, benar, total, durasi: durasiStr, date: new Date().toISOString(), breakdown, answers: answerDetails });
  if (s.tkaHistory.length > 20) s.tkaHistory.pop();
  STATE.save();
  addActivity(`🏆 TKA ${TKA_CONFIG[tkaSubject]?.label||tkaSubject}: ${nilai}`, nilai>=75?'var(--success)':nilai>=60?'var(--warning)':'var(--danger)');
  addXP(Math.floor(nilai / 2));
  showTKAResult({ nilai, benar, total, durasiStr, breakdown });
}

function showTKAResult({ nilai, benar, total, durasiStr, breakdown }) {
  showPage('tka-result');
  const circleEl = $('tkaResultScore'); if (circleEl) circleEl.textContent = nilai;
  let kategori, katColor;
  if (nilai >= 85) { kategori = '🏆 Luar Biasa!'; katColor = 'var(--success)'; }
  else if (nilai >= 70) { kategori = '👏 Bagus Sekali!'; katColor = 'var(--primary)'; }
  else if (nilai >= 60) { kategori = '💪 Cukup Baik'; katColor = 'var(--warning)'; }
  else { kategori = '📚 Perlu Belajar Lagi'; katColor = 'var(--danger)'; }
  const katEl = $('tkaResultKategori'); if (katEl) { katEl.textContent = kategori; katEl.style.color = katColor; }
  const statsEl = $('tkaResultStats');
  if (statsEl) statsEl.innerHTML = `<div class="tka-result-stat"><div class="tka-stat-num" style="color:var(--success)">${benar}</div><div class="tka-stat-lbl">Benar</div></div><div class="tka-result-stat"><div class="tka-stat-num" style="color:var(--danger)">${total-benar}</div><div class="tka-stat-lbl">Salah</div></div><div class="tka-result-stat"><div class="tka-stat-num" style="color:var(--primary)">${durasiStr}</div><div class="tka-stat-lbl">Durasi</div></div>`;
  const bkEl = $('tkaBreakdown');
  if (bkEl) bkEl.innerHTML = Object.entries(breakdown).map(([topic, data]) => { const pct = Math.round((data.benar/data.total)*100); const color = pct>=75?'var(--success)':pct>=50?'var(--warning)':'var(--danger)'; return `<div class="tka-breakdown"><div class="monitor-row"><span style="font-weight:800;font-size:0.9rem">${topic}</span><span style="font-weight:800;color:${color}">${data.benar}/${data.total} (${pct}%)</span></div><div class="mini-bar"><div class="mini-fill" style="background:${color};width:${pct}%"></div></div></div>`; }).join('');
  const reviewEl = $('tkaReview');
  if (reviewEl) {
    const wrong = tkaQuestions.map((q,i)=>({q,i,userAns:tkaAnswers[i]})).filter(({q,userAns})=>userAns!==q.ans);
    reviewEl.innerHTML = wrong.length===0?'<div class="empty-state"><span class="empty-state-icon">🎉</span>Semua soal benar!</div>':wrong.map(({q,i,userAns})=>`<div class="tka-review-item"><div class="tka-review-num">Soal ${i+1} — ${q.topic}</div><div class="tka-review-q">${safeNlToBr(q.q)}</div><div class="tka-review-ans"><span class="tka-ans-wrong">✗ Jawabanmu: ${userAns!==undefined?q.opts[userAns]:'(Tidak dijawab)'}</span><span class="tka-ans-correct">✓ Jawaban benar: ${q.opts[q.ans]}</span></div><details class="tka-review-explain"><summary>📘 Lihat Pembahasan</summary><p>${q.explanation}</p></details></div>`).join('');
  }
}

function confirmExitTKA() {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.innerHTML = `<div class="modal-box" role="dialog" aria-modal="true"><div class="modal-icon">⚠️</div><h2 class="modal-title">Keluar dari TKA?</h2><p class="modal-msg">Semua jawaban akan <strong>hilang</strong>. Yakin mau keluar?</p><div class="modal-actions"><button class="btn modal-btn-cancel" id="exitTKACancel">Lanjut Kerjakan</button><button class="btn modal-btn-confirm" id="exitTKAConfirm">Keluar</button></div></div>`;
  document.body.appendChild(overlay);
  requestAnimationFrame(() => overlay.classList.add('modal-visible'));
  function closeModal() { overlay.classList.remove('modal-visible'); setTimeout(() => overlay.remove(), 250); }
  document.getElementById('exitTKACancel').addEventListener('click', closeModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.getElementById('exitTKAConfirm').addEventListener('click', () => { closeModal(); stopTKATimer(); showPage('home'); });
}

function retryTKA() { startTKA(tkaSubject); }

// ── AUTH MODAL ────────────────────────────────────────────────
function showAuthModal() {
  const old = document.getElementById('authModal'); if (old) old.remove();
  const overlay = document.createElement('div');
  overlay.id = 'authModal'; overlay.className = 'modal-overlay';
  overlay.innerHTML = `
    <div class="modal-box onboarding-box auth-box" role="dialog" aria-modal="true">
      <div class="modal-icon" id="authIcon">🎓</div>
      <h2 class="modal-title" id="authTitle">Masuk ke BelajarCeria</h2>
      <p class="modal-msg" id="authSubtitle">Masuk dengan akunmu untuk melanjutkan belajar.</p>
      <div class="auth-tabs">
        <button class="auth-tab active" id="tabLogin" onclick="switchAuthTab('login')">Masuk</button>
        <button class="auth-tab" id="tabRegister" onclick="switchAuthTab('register')">Daftar</button>
      </div>
      <div class="auth-fields">
        <input id="authUsername" class="onboarding-input" type="text" maxlength="30" placeholder="Username" autocomplete="username" autocapitalize="none" spellcheck="false">
        <div class="auth-pass-wrap">
          <input id="authPassword" class="onboarding-input" type="password" maxlength="30" placeholder="Password (min. 6 karakter)" autocomplete="current-password">
          <button class="auth-eye" id="authEyeBtn" type="button" onclick="toggleAuthPass()">👁️</button>
        </div>
      </div>
      <div id="authError" class="onboarding-error"></div>
      <button class="btn onboarding-submit" id="authSubmit" onclick="submitAuth()">Masuk 🚀</button>
    </div>`;
  document.body.appendChild(overlay);
  requestAnimationFrame(() => { overlay.classList.add('modal-visible'); document.getElementById('authUsername').focus(); });
  overlay.addEventListener('keydown', e => { if (e.key === 'Enter') submitAuth(); });
}

let _authMode = 'login';
function switchAuthTab(mode) {
  _authMode = mode;
  document.getElementById('tabLogin').classList.toggle('active', mode === 'login');
  document.getElementById('tabRegister').classList.toggle('active', mode === 'register');
  document.getElementById('authError').textContent = '';
  if (mode === 'login') {
    document.getElementById('authIcon').textContent     = '🎓';
    document.getElementById('authTitle').textContent    = 'Masuk ke BelajarCeria';
    document.getElementById('authSubtitle').textContent = 'Masuk dengan akunmu.';
    document.getElementById('authSubmit').textContent   = 'Masuk 🚀';
    document.getElementById('authPassword').placeholder = 'Password';
  } else {
    document.getElementById('authIcon').textContent     = '👋';
    document.getElementById('authTitle').textContent    = 'Buat Akun Baru';
    document.getElementById('authSubtitle').textContent = 'Daftar gratis dan mulai belajar!';
    document.getElementById('authSubmit').textContent   = 'Daftar & Mulai 🚀';
    document.getElementById('authPassword').placeholder = 'Password (min. 6 karakter)';
  }
  document.getElementById('authUsername').focus();
}

function toggleAuthPass() {
  const inp = document.getElementById('authPassword');
  const btn = document.getElementById('authEyeBtn');
  if (inp.type === 'password') { inp.type = 'text'; btn.textContent = '🙈'; }
  else { inp.type = 'password'; btn.textContent = '👁️'; }
}

async function submitAuth() {
  const username  = document.getElementById('authUsername').value.trim();
  const password  = document.getElementById('authPassword').value;
  const errEl     = document.getElementById('authError');
  const submitBtn = document.getElementById('authSubmit');
  errEl.textContent = ''; submitBtn.disabled = true; submitBtn.textContent = '⏳ Mohon tunggu...';

  const result = _authMode === 'login'
    ? await AUTH.login(username, password)
    : await AUTH.register(username, password);

  submitBtn.disabled = false;
  submitBtn.textContent = _authMode === 'login' ? 'Masuk 🚀' : 'Daftar & Mulai 🚀';

  if (!result.ok) {
    errEl.textContent = '⚠️ ' + result.error;
    const inp = document.getElementById('authUsername');
    inp.classList.remove('shake'); void inp.offsetWidth; inp.classList.add('shake');
    inp.addEventListener('animationend', () => inp.classList.remove('shake'), { once: true });
    return;
  }

  if (AUTH.currentRole() === 'moderator') { window.location.href = 'moderator.html'; return; }

  await STATE.load();
  startStudyTimer();
  const overlay = document.getElementById('authModal');
  overlay.classList.remove('modal-visible');
  setTimeout(() => {
    overlay.remove(); updateHome(); checkBadges(); showPage('home', false);
    showToast(_authMode === 'register' ? `Halo, ${AUTH.currentUser()}! Selamat datang 🎉` : `Selamat belajar lagi, ${AUTH.currentUser()}! 💪`);
  }, 280);
}

async function logout() {
  stopStudyTimer(); await AUTH.logout();
  currentSubject = ''; currentTopicId = ''; currentQuizzes = []; currentFlashcards = [];
  fcIndex = 0; STATE.reset();
  showAuthModal();
}

// ── STUDY TIMER ───────────────────────────────────────────────
let _studyTimerHandle = null;
function startStudyTimer() {
  if (_studyTimerHandle) return;
  _studyTimerHandle = setInterval(() => AUTH.addStudyTime(1), 60000);
}
function stopStudyTimer() {
  if (_studyTimerHandle) { clearInterval(_studyTimerHandle); _studyTimerHandle = null; }
}

// ── EXPOSE GLOBALS (onclick di HTML) ─────────────────────────
Object.assign(window, {
  showPage, showSubject, logout, toggleTheme, toggleMute,
  switchAuthTab, toggleAuthPass, submitAuth,
  startQuiz, retryQuiz,
  flipCard, fcNav, startFlashcard,
  startTKA, tkaPrev, tkaNext, toggleTKAMark,
  selectTKAAnswer, confirmSubmitTKA, confirmExitTKA,
  retryTKA, renderTKAQuestion,
});

// Expose mutable vars yang dipakai langsung di onclick HTML
// Mis: onclick="showSubject(currentSubject)" dan toggleTKAMark(tkaCurrentIndex)
Object.defineProperty(window, 'currentSubject', {
  get: () => currentSubject,
  set: (v) => { currentSubject = v; },
});
Object.defineProperty(window, 'tkaCurrentIndex', {
  get: () => tkaCurrentIndex,
  set: (v) => { tkaCurrentIndex = v; },
});
