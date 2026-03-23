// ============================================================
//  moderator.js — BelajarCeria
//  Dashboard Moderator — Audit Quiz Attempts
//  Fitur: Unique Quiz ID, Attempt ID, Attempt Number, Timestamp
// ============================================================
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const SUPABASE_URL  = 'https://rfigimimnlngsitghtnb.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJmaWdpbWltbmxuZ3NpdGdodG5iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQwNjY5MTksImV4cCI6MjA4OTY0MjkxOX0._SbR_eccjRCHOdz3ZeWdnqdIqShuIZ396jvgSom9wTk';
const sb = createClient(SUPABASE_URL, SUPABASE_ANON);

// ── AUTH GUARD ────────────────────────────────────────────────
(async function authGuard() {
  const { data: { session } } = await sb.auth.getSession();
  if (!session) { window.location.href = 'index.html'; return; }

  const { data: profile } = await sb.from('profiles')
    .select('username, role').eq('id', session.user.id).single();

  if (!profile || profile.role !== 'moderator') {
    alert('⛔ Akses ditolak. Halaman ini hanya untuk moderator.');
    window.location.href = 'index.html';
    return;
  }

  document.getElementById('navUsername').textContent = '👤 ' + profile.username;
  await loadAllData();
  renderOverview();
  renderSysInfo();
  setInterval(renderSysInfo, 10000);
})();

// ── DATA LOADING ──────────────────────────────────────────────
let _allProfiles = [];
let _allProgress = {};

async function loadAllData() {
  const { data: profiles } = await sb.from('profiles').select('*');
  _allProfiles = profiles || [];

  const { data: progress } = await sb.from('user_progress').select('*');
  _allProgress = {};
  (progress || []).forEach(row => { _allProgress[row.user_id] = row; });
}

function getUserProgress(userId) {
  const row = _allProgress[userId] || {};
  return {
    xp:           row.xp           || 0,
    streak:       row.streak        || 0,
    read:         row.read          || {},
    quizScores:   row.quiz_scores   || {},
    quizDetails:  row.quiz_details  || {},
    quizAttempts: row.quiz_attempts || {},   // NEW: full attempt log
    activity:     row.activity      || [],
    tkaHistory:   row.tka_history   || [],
  };
}

// ── FORMATTERS ────────────────────────────────────────────────
function formatDate(ts) {
  if (!ts) return '—';
  return new Date(ts).toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
}
function formatStudyTime(minutes, short = false) {
  if (!minutes) return '0 mnt';
  if (minutes < 60) return `${minutes} mnt`;
  const h = Math.floor(minutes / 60), m = minutes % 60, d = Math.floor(h / 24), hh = h % 24;
  if (h < 24) return m > 0 ? `${h}j ${m}mnt` : `${h} jam`;
  if (short) return hh > 0 ? `${d}h ${hh}j` : `${d} hari`;
  return `${d} hari${hh>0?' '+hh+' jam':''}${m>0?' '+m+' mnt':''}`;
}
function formatXP(xp) {
  if (!xp) return '0 XP';
  if (xp >= 1e9) return (xp/1e9).toFixed(1)+' M XP';
  if (xp >= 1e6) return (xp/1e6).toFixed(1)+' jt XP';
  if (xp >= 1e4) return (xp/1e3).toFixed(1)+' rb XP';
  return xp.toLocaleString('id-ID') + ' XP';
}
function scoreColor(pct) {
  if (pct >= 80) return 'var(--mod-success)';
  if (pct >= 60) return 'var(--mod-warning)';
  return 'var(--mod-danger)';
}

// ── NAVIGATION ────────────────────────────────────────────────
window.showSection = function(id) {
  document.querySelectorAll('.mod-section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.mod-nav-item').forEach(b => b.classList.remove('active'));
  document.getElementById('section-' + id).classList.add('active');
  document.getElementById('nav-' + id).classList.add('active');
  if (id === 'overview') renderOverview();
  if (id === 'users')    renderUserTable();
  if (id === 'quiz')     renderQuizSection();
  if (id === 'attempts') renderAttemptsSection();
  if (id === 'tka')      renderTKASection();
};

window.modLogout = async function() {
  await sb.auth.signOut();
  window.location.href = 'index.html';
};

// ── OVERVIEW ─────────────────────────────────────────────────
function renderOverview() {
  const users = _allProfiles.filter(p => p.role !== 'moderator');
  let totalXP = 0, totalStudy = 0, totalQuiz = 0, totalAttempts = 0, totalTKA = 0, allActivities = [];

  users.forEach(u => {
    const d = getUserProgress(u.id);
    totalXP       += d.xp || 0;
    totalStudy    += u.study_time || 0;
    totalQuiz     += Object.keys(d.quizScores).length;
    totalTKA      += (d.tkaHistory || []).length;
    // Count total attempts across all topics
    Object.values(d.quizAttempts || {}).forEach(arr => { totalAttempts += arr.length; });
    (d.activity || []).slice(0, 5).forEach(a => allActivities.push({ ...a, username: u.username }));
  });

  allActivities.sort((a, b) => new Date(b.date + ' ' + b.time) - new Date(a.date + ' ' + a.time));

  document.getElementById('overviewStats').innerHTML = `
    <div class="mod-stat-card"><div class="mod-stat-icon">👥</div><div class="mod-stat-val">${users.length}</div><div class="mod-stat-label">Total Pengguna</div></div>
    <div class="mod-stat-card"><div class="mod-stat-icon">⚡</div><div class="mod-stat-val" title="${totalXP.toLocaleString()} XP">${formatXP(totalXP)}</div><div class="mod-stat-label">Total XP</div></div>
    <div class="mod-stat-card"><div class="mod-stat-icon">⏱️</div><div class="mod-stat-val">${formatStudyTime(totalStudy, true)}</div><div class="mod-stat-label">Total Belajar</div></div>
    <div class="mod-stat-card"><div class="mod-stat-icon">🎯</div><div class="mod-stat-val">${totalQuiz}</div><div class="mod-stat-label">Quiz Selesai</div></div>
    <div class="mod-stat-card"><div class="mod-stat-icon">📋</div><div class="mod-stat-val">${totalAttempts}</div><div class="mod-stat-label">Total Percobaan</div></div>
    <div class="mod-stat-card"><div class="mod-stat-icon">🏆</div><div class="mod-stat-val">${totalTKA}</div><div class="mod-stat-label">TKA Dikerjakan</div></div>`;

  const actEl = document.getElementById('recentActivity');
  actEl.innerHTML = allActivities.length === 0
    ? '<div class="mod-empty">Belum ada aktivitas</div>'
    : `<ul class="mod-activity-list">${allActivities.slice(0, 30).map(a => `
        <li class="mod-activity-item">
          <span class="mod-activity-dot" style="background:${a.color||'#6366F1'}"></span>
          <div class="mod-activity-body"><span class="mod-activity-user">@${a.username}</span><span class="mod-activity-text">${a.text}</span></div>
          <span class="mod-activity-time">${a.date||''} ${a.time||''}</span>
        </li>`).join('')}</ul>`;
}

// ── DAFTAR PENGGUNA ───────────────────────────────────────────
function renderUserTable() {
  const search = (document.getElementById('userSearch')?.value || '').toLowerCase();
  const sort   = document.getElementById('userSort')?.value || 'join-desc';

  let list = _allProfiles
    .filter(p => p.role !== 'moderator' && p.username.includes(search))
    .map(p => ({ profile: p, data: getUserProgress(p.id) }));

  list.sort((a, b) => {
    switch (sort) {
      case 'join-asc':   return new Date(a.profile.created_at) - new Date(b.profile.created_at);
      case 'study-desc': return (b.profile.study_time||0) - (a.profile.study_time||0);
      case 'study-asc':  return (a.profile.study_time||0) - (b.profile.study_time||0);
      case 'xp-desc':    return (b.data.xp||0) - (a.data.xp||0);
      case 'xp-asc':     return (a.data.xp||0) - (b.data.xp||0);
      default:           return new Date(b.profile.created_at) - new Date(a.profile.created_at);
    }
  });

  const tbody = document.getElementById('userTableBody');
  if (list.length === 0) {
    tbody.innerHTML = `<tr><td colspan="9"><div class="mod-empty">Tidak ada pengguna ditemukan</div></td></tr>`;
    return;
  }

  tbody.innerHTML = list.map(({ profile: p, data: d }, i) => {
    const totalAttempts = Object.values(d.quizAttempts||{}).reduce((sum, arr) => sum + arr.length, 0);
    return `<tr>
      <td class="mod-td-num">${i + 1}</td>
      <td><div class="mod-user-cell"><div class="mod-avatar">${p.username[0].toUpperCase()}</div><div><div class="mod-username">@${p.username}</div><div class="mod-user-role">${p.role||'user'}</div></div></div></td>
      <td class="mod-td-date">${formatDate(p.created_at)}</td>
      <td class="mod-td-date">${formatDate(p.last_login)}</td>
      <td><span class="mod-badge mod-badge-blue">⏱️ ${formatStudyTime(p.study_time, true)}</span></td>
      <td><span class="mod-badge mod-badge-purple">⚡ ${formatXP(d.xp)}</span></td>
      <td><span class="mod-badge mod-badge-yellow">🔥 ${d.streak||0}</span></td>
      <td><span class="mod-badge mod-badge-green">📋 ${totalAttempts}×</span></td>
      <td><button class="mod-btn mod-btn-sm mod-btn-outline" onclick="showUserDetail('${p.id}')">🔍 Detail</button></td>
    </tr>`;
  }).join('');
}

// ── ATTEMPTS SECTION (BARU) ───────────────────────────────────
// Tampilkan semua quiz attempts lintas semua user untuk audit
function renderAttemptsSection() {
  const search  = (document.getElementById('attemptSearch')?.value || '').toLowerCase();
  const sort    = document.getElementById('attemptSort')?.value || 'date-desc';
  const quizFilter = (document.getElementById('attemptQuizFilter')?.value || '').toUpperCase();

  let allRows = [];
  _allProfiles.filter(p => p.role !== 'moderator').forEach(p => {
    const d = getUserProgress(p.id);
    Object.values(d.quizAttempts || {}).forEach(attempts => {
      attempts.forEach(att => {
        allRows.push({ username: p.username, userId: p.id, ...att });
      });
    });
  });

  // Filter
  if (search)     allRows = allRows.filter(r => r.username.includes(search));
  if (quizFilter) allRows = allRows.filter(r => (r.quizId||'').includes(quizFilter));

  // Sort
  allRows.sort((a, b) => {
    if (sort === 'score-desc') return b.score - a.score;
    if (sort === 'score-asc')  return a.score - b.score;
    if (sort === 'date-asc')   return new Date(a.timestampISO) - new Date(b.timestampISO);
    if (sort === 'attempt-desc') return b.attemptNumber - a.attemptNumber;
    // default: date-desc
    return new Date(b.timestampISO||0) - new Date(a.timestampISO||0);
  });

  const el = document.getElementById('attemptsContent');
  if (allRows.length === 0) {
    el.innerHTML = '<div class="mod-empty">Belum ada data attempt quiz</div>';
    return;
  }

  el.innerHTML = `
    <div class="mod-card">
      <div class="mod-table-wrap">
        <table class="mod-table" id="attemptsTable">
          <thead>
            <tr>
              <th>#</th>
              <th>Username</th>
              <th>Quiz ID</th>
              <th>Attempt ID</th>
              <th>Percobaan ke-</th>
              <th>Nilai</th>
              <th>Benar / Total</th>
              <th>Durasi</th>
              <th>Timestamp</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            ${allRows.map((r, i) => `
              <tr>
                <td class="mod-td-num">${i + 1}</td>
                <td><div class="mod-user-cell">
                  <div class="mod-avatar mod-avatar-sm">${r.username[0].toUpperCase()}</div>
                  <span class="mod-username">@${r.username}</span>
                </div></td>
                <td><span class="mod-session-id" title="${r.quizId||'—'}">${r.quizId||'—'}</span></td>
                <td><span class="mod-session-id mod-session-id-sm" title="${r.attemptId||'—'}">${r.attemptId ? r.attemptId.substring(0,20)+'…' : '—'}</span></td>
                <td style="text-align:center">
                  <span class="mod-attempt-num-badge">${r.attemptNumber || '—'}</span>
                </td>
                <td>
                  <span style="font-weight:800;color:${scoreColor(r.score)}">${r.score}%</span>
                  <div class="mod-quiz-bar" style="margin-top:4px;width:80px">
                    <div class="mod-quiz-fill" style="width:${r.score}%;background:${scoreColor(r.score)}"></div>
                  </div>
                </td>
                <td>${r.benar} / ${r.total}</td>
                <td>⏱ ${r.durasi||'—'}</td>
                <td class="mod-td-date"><span class="mod-timestamp">${r.timestamp||formatDate(r.timestampISO)}</span></td>
                <td><button class="mod-btn mod-btn-sm mod-btn-outline" onclick="showAttemptDetail(${JSON.stringify(r).replace(/'/g, "&#39;").replace(/"/g, '&quot;')})">🔍 Detail</button></td>
              </tr>`).join('')}
          </tbody>
        </table>
      </div>
    </div>`;
}

// ── DETAIL ATTEMPT MODAL ──────────────────────────────────────
window.showAttemptDetail = function(row) {
  if (typeof row === 'string') {
    try { row = JSON.parse(row); } catch { return; }
  }

  document.getElementById('answerModalContent').innerHTML = `
    <div class="mod-answer-header">
      <h2>📋 Detail Attempt Quiz</h2>
      <div class="mod-muted">@${row.username}</div>
      <div class="mod-attempt-meta">
        <div class="mod-meta-row">
          <span class="mod-meta-label">🔑 Quiz ID</span>
          <span class="mod-meta-val mod-session-id">${row.quizId||'—'}</span>
        </div>
        <div class="mod-meta-row">
          <span class="mod-meta-label">🎫 Attempt ID</span>
          <span class="mod-meta-val mod-session-id mod-session-id-sm">${row.attemptId||'—'}</span>
        </div>
        <div class="mod-meta-row">
          <span class="mod-meta-label">📋 Percobaan ke-</span>
          <span class="mod-meta-val"><strong>${row.attemptNumber||'—'}</strong></span>
        </div>
        <div class="mod-meta-row">
          <span class="mod-meta-label">📅 Timestamp</span>
          <span class="mod-meta-val"><strong>${row.timestamp||formatDate(row.timestampISO)}</strong></span>
        </div>
      </div>
      <div class="mod-answer-summary">
        <span style="color:${scoreColor(row.score)}">Nilai: <strong>${row.score}%</strong></span>
        &nbsp;|&nbsp; ✅ ${row.benar} Benar &nbsp; ❌ ${row.salah||row.total-row.benar} Salah
        &nbsp;|&nbsp; ⏱ ${row.durasi||'—'}
      </div>
    </div>
    <div class="mod-answer-list">
      ${(row.answers||[]).map((a, i) => `
        <div class="mod-answer-item ${a.benar ? 'correct' : 'wrong'}">
          <div class="mod-answer-num">${i + 1}</div>
          <div class="mod-answer-body">
            <div class="mod-answer-soal">${a.soal}</div>
            <div class="mod-answer-row">
              <span class="mod-answer-tag user">Jawaban: <strong>${a.userAns || '(Tidak dijawab)'}</strong></span>
              <span class="mod-answer-tag key">Kunci: <strong>${a.kunci}</strong></span>
              <span class="mod-answer-status">${a.benar ? '✅ Benar' : '❌ Salah'}</span>
            </div>
          </div>
        </div>`).join('')}
    </div>`;

  document.getElementById('detailModal').classList.remove('open');
  document.getElementById('answerModal').classList.add('open');
};

// ── USER DETAIL MODAL ─────────────────────────────────────────
window.showUserDetail = function(userId) {
  const profile     = _allProfiles.find(p => p.id === userId) || {};
  const d           = getUserProgress(userId);
  const quizEntries = Object.entries(d.quizScores);
  const readEntries = Object.entries(d.read);
  const tkaList     = (d.tkaHistory || []).slice(0, 5);
  const avgQuiz     = quizEntries.length > 0 ? Math.round(quizEntries.reduce((s,[,v])=>s+v,0)/quizEntries.length) : null;

  // Count total attempts per topik
  const attemptsPerTopic = {};
  Object.entries(d.quizAttempts || {}).forEach(([topicId, arr]) => {
    attemptsPerTopic[topicId] = arr.length;
  });

  document.getElementById('detailModalContent').innerHTML = `
    <div class="mod-detail-header">
      <div class="mod-detail-avatar">${profile.username?.[0]?.toUpperCase()||'?'}</div>
      <div>
        <h2 class="mod-detail-name">@${profile.username}</h2>
        <div class="mod-detail-meta">Bergabung: ${formatDate(profile.created_at)} &nbsp;|&nbsp; Login terakhir: ${formatDate(profile.last_login)}</div>
      </div>
    </div>
    <div class="mod-detail-stats">
      <div class="mod-detail-stat"><span>⚡ XP</span><strong>${formatXP(d.xp)}</strong></div>
      <div class="mod-detail-stat"><span>🔥 Streak</span><strong>${d.streak||0} hari</strong></div>
      <div class="mod-detail-stat"><span>⏱️ Belajar</span><strong>${formatStudyTime(profile.study_time, true)}</strong></div>
      <div class="mod-detail-stat"><span>📖 Materi</span><strong>${readEntries.length}</strong></div>
      <div class="mod-detail-stat"><span>🎯 Quiz</span><strong>${quizEntries.length} topik</strong></div>
      <div class="mod-detail-stat"><span>📋 Attempt</span><strong>${Object.values(d.quizAttempts||{}).reduce((s,a)=>s+a.length,0)}×</strong></div>
    </div>
    <h3 class="mod-detail-sec">🎯 Nilai Quiz per Topik ${avgQuiz!==null?`<span class="mod-sec-avg" style="color:${scoreColor(avgQuiz)}">Rata-rata: ${avgQuiz}%</span>`:''}</h3>
    ${quizEntries.length===0?'<div class="mod-empty">Belum ada quiz dikerjakan</div>':`
      <div class="mod-quiz-grid">
        ${quizEntries.map(([id,pct])=>`
          <div class="mod-quiz-item">
            <div class="mod-quiz-id">${id}</div>
            <div class="mod-quiz-score" style="color:${scoreColor(pct)}">${pct}%</div>
            <div style="font-size:0.72rem;color:var(--mod-muted);margin-bottom:4px">${attemptsPerTopic[id]||0} percobaan</div>
            <div class="mod-quiz-bar"><div class="mod-quiz-fill" style="width:${pct}%;background:${scoreColor(pct)}"></div></div>
            ${(d.quizAttempts[id]||[]).length>0 ?
              `<button class="mod-btn mod-btn-xs mod-btn-outline" onclick="showTopicAttempts('${userId}','${id}')">📋 ${d.quizAttempts[id].length} Attempt</button>` : ''}
          </div>`).join('')}
      </div>`}
    <h3 class="mod-detail-sec">📖 Materi Dibaca</h3>
    ${readEntries.length===0?'<div class="mod-empty">Belum ada materi dibaca</div>':`
      <div class="mod-chip-row">${readEntries.map(([id,date])=>`<span class="mod-chip">📘 ${id} <span class="mod-chip-date">${new Date(date).toLocaleDateString('id-ID')}</span></span>`).join('')}</div>`}
    <h3 class="mod-detail-sec">🏆 Riwayat TKA</h3>
    ${tkaList.length===0?'<div class="mod-empty">Belum ada TKA dikerjakan</div>':tkaList.map((h,idx)=>`
      <div class="mod-tka-row">
        <div class="mod-tka-info">
          <span class="mod-tka-subj">${h.subject?.toUpperCase()}</span>
          <span class="mod-tka-date">${formatDate(h.date)}</span>
          ${h.sessionId?`<span class="mod-session-id mod-session-id-sm">${h.sessionId}</span>`:''}
        </div>
        <div class="mod-tka-nums">
          <span style="color:${scoreColor(h.nilai)};font-weight:800;font-size:1.1rem">${h.nilai}%</span>
          <span class="mod-muted">${h.benar}/${h.total} &nbsp;⏱️ ${h.durasi}</span>
        </div>
        ${h.answers?`<button class="mod-btn mod-btn-xs mod-btn-outline" onclick="showTKAAnswers('${userId}',${idx})">🔍 Jawaban</button>`:''}
      </div>`).join('')}`;

  document.getElementById('detailModal').classList.add('open');
};

// ── TOPIC ATTEMPTS LIST ───────────────────────────────────────
window.showTopicAttempts = function(userId, topicId) {
  const d       = getUserProgress(userId);
  const profile = _allProfiles.find(p => p.id === userId) || {};
  const attempts = (d.quizAttempts[topicId] || []);

  document.getElementById('answerModalContent').innerHTML = `
    <div class="mod-answer-header">
      <h2>📋 Riwayat Attempt</h2>
      <div class="mod-muted">@${profile.username} — Topik: <strong>${topicId}</strong></div>
      <div class="mod-muted" style="margin-top:4px">Total: <strong>${attempts.length} percobaan</strong></div>
    </div>
    <div class="mod-attempts-table-wrap">
      <table class="mod-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Attempt ID</th>
            <th>Percobaan ke-</th>
            <th>Nilai</th>
            <th>Benar/Total</th>
            <th>Durasi</th>
            <th>Timestamp</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          ${attempts.map((att, i) => `
            <tr>
              <td>${i + 1}</td>
              <td><span class="mod-session-id mod-session-id-sm" title="${att.attemptId||'—'}">${att.attemptId?att.attemptId.substring(0,16)+'…':'—'}</span></td>
              <td style="text-align:center"><span class="mod-attempt-num-badge">${att.attemptNumber||'—'}</span></td>
              <td><span style="font-weight:800;color:${scoreColor(att.score)}">${att.score}%</span></td>
              <td>${att.benar}/${att.total}</td>
              <td>⏱ ${att.durasi||'—'}</td>
              <td class="mod-td-date"><span class="mod-timestamp">${att.timestamp||formatDate(att.timestampISO)}</span></td>
              <td><button class="mod-btn mod-btn-xs mod-btn-outline" onclick="showAttemptAnswers('${userId}','${topicId}',${i})">🔍 Jawaban</button></td>
            </tr>`).join('')}
        </tbody>
      </table>
    </div>`;

  document.getElementById('detailModal').classList.remove('open');
  document.getElementById('answerModal').classList.add('open');
};

window.showAttemptAnswers = function(userId, topicId, idx) {
  const d    = getUserProgress(userId);
  const att  = (d.quizAttempts[topicId]||[])[idx];
  if (!att) return;
  showAttemptDetail({ ...att, username: _allProfiles.find(p=>p.id===userId)?.username||'?' });
};

// ── QUIZ ANSWERS MODAL ────────────────────────────────────────
window.showQuizAnswers = function(userId, topicId) {
  const d      = getUserProgress(userId);
  const detail = (d.quizDetails || {})[topicId];
  if (!detail) return;
  document.getElementById('answerModalContent').innerHTML = `
    <div class="mod-answer-header">
      <h2>🎯 Detail Jawaban Quiz (Terbaru)</h2>
      <div class="mod-muted">@${_allProfiles.find(p=>p.id===userId)?.username} — ${topicId}</div>
      <div class="mod-answer-summary">
        <span style="color:${scoreColor(detail.score||detail.pct)}">Nilai: <strong>${detail.score||detail.pct}%</strong></span>
        &nbsp;|&nbsp; ✅ ${detail.benar} Benar &nbsp; ❌ ${detail.salah||detail.total-detail.benar} Salah
        &nbsp;|&nbsp; 📅 ${detail.timestamp||formatDate(detail.timestampISO||detail.date)}
      </div>
    </div>
    <div class="mod-answer-list">
      ${(detail.answers||[]).map((a,i)=>`
        <div class="mod-answer-item ${a.benar?'correct':'wrong'}">
          <div class="mod-answer-num">${i+1}</div>
          <div class="mod-answer-body">
            <div class="mod-answer-soal">${a.soal}</div>
            <div class="mod-answer-row">
              <span class="mod-answer-tag user">Jawaban: <strong>${a.userAns||'(Tidak dijawab)'}</strong></span>
              <span class="mod-answer-tag key">Kunci: <strong>${a.kunci}</strong></span>
              <span class="mod-answer-status">${a.benar?'✅ Benar':'❌ Salah'}</span>
            </div>
          </div>
        </div>`).join('')}
    </div>`;
  document.getElementById('detailModal').classList.remove('open');
  document.getElementById('answerModal').classList.add('open');
};

// ── TKA ANSWERS ───────────────────────────────────────────────
window.showTKAAnswers = function(userId, histIdx) {
  const d = getUserProgress(userId);
  const h = (d.tkaHistory||[])[histIdx];
  if (!h?.answers) return;
  const topicGroups = {};
  h.answers.forEach(a => { if (!topicGroups[a.topic]) topicGroups[a.topic]=[]; topicGroups[a.topic].push(a); });
  document.getElementById('answerModalContent').innerHTML = `
    <div class="mod-answer-header">
      <h2>🏆 Detail Jawaban TKA ${h.subject?.toUpperCase()}</h2>
      <div class="mod-muted">@${_allProfiles.find(p=>p.id===userId)?.username}</div>
      ${h.sessionId?`<div class="mod-session-badge">🔑 ${h.sessionId}</div>`:''}
      <div class="mod-answer-summary">
        <span style="color:${scoreColor(h.nilai)}">Nilai: <strong>${h.nilai}%</strong></span>
        &nbsp;|&nbsp; ✅ ${h.benar}/${h.total} &nbsp;|&nbsp; ⏱️ ${h.durasi} &nbsp;|&nbsp; 📅 ${formatDate(h.date)}
      </div>
    </div>
    ${Object.entries(topicGroups).map(([topic,answers])=>{
      const bt = answers.filter(a=>a.benar).length;
      return `<div class="mod-tka-topic-header">📌 <strong>${topic}</strong> <span class="mod-muted">(${bt}/${answers.length} benar)</span></div>
        <div class="mod-answer-list">
          ${answers.map((a,i)=>`
            <div class="mod-answer-item ${a.benar?'correct':'wrong'}">
              <div class="mod-answer-num">${i+1}</div>
              <div class="mod-answer-body">
                <div class="mod-answer-soal">${a.soal}</div>
                ${a.opts?.length?`<div class="mod-answer-opts">${a.opts.map((o,oi)=>`<span class="mod-opt ${oi===a.kunci?'opt-key':''} ${oi===a.userAns&&!a.benar?'opt-wrong':''}">${['A','B','C','D'][oi]}. ${o}${oi===a.kunci?' ✓':''}${oi===a.userAns&&!a.benar?' ✗':''}</span>`).join('')}</div>`:''}
                <div class="mod-answer-row">
                  <span class="mod-answer-tag user">Jawaban: <strong>${a.userAnsTxt||'(Tidak dijawab)'}</strong></span>
                  <span class="mod-answer-tag key">Kunci: <strong>${a.kunciTxt}</strong></span>
                  <span class="mod-answer-status">${a.benar?'✅ Benar':'❌ Salah'}</span>
                </div>
              </div>
            </div>`).join('')}
        </div>`;
    }).join('')}`;
  document.getElementById('detailModal').classList.remove('open');
  document.getElementById('answerModal').classList.add('open');
};

// ── QUIZ SECTION ──────────────────────────────────────────────
function renderQuizSection() {
  const search = (document.getElementById('quizSearch')?.value||'').toLowerCase();
  const sort   = document.getElementById('quizSort')?.value||'score-desc';

  let rows = _allProfiles
    .filter(p => p.role!=='moderator' && p.username.includes(search))
    .map(p => {
      const d = getUserProgress(p.id);
      const scores = Object.entries(d.quizScores);
      const avg = scores.length ? Math.round(scores.reduce((s,[,v])=>s+v,0)/scores.length) : 0;
      return { username: p.username, userId: p.id, scores, avg, quizDetails: d.quizDetails||{}, quizAttempts: d.quizAttempts||{} };
    })
    .filter(r => r.scores.length > 0);

  rows.sort((a,b) => sort==='score-asc' ? a.avg-b.avg : sort==='count-desc' ? b.scores.length-a.scores.length : b.avg-a.avg);

  const el = document.getElementById('quizContent');
  if (rows.length===0) { el.innerHTML='<div class="mod-empty">Belum ada quiz dikerjakan</div>'; return; }

  el.innerHTML = rows.map(({ username, userId, scores, avg, quizDetails, quizAttempts }) => `
    <div class="mod-card" style="margin-bottom:16px">
      <div class="mod-card-header">
        <div class="mod-user-cell"><div class="mod-avatar">${username[0].toUpperCase()}</div>
          <div><div class="mod-username">@${username}</div>
          <div class="mod-muted">${scores.length} topik selesai</div></div>
        </div>
        <span class="mod-avg-badge" style="background:${scoreColor(avg)}20;color:${scoreColor(avg)}">Rata-rata: ${avg}%</span>
      </div>
      <div class="mod-quiz-grid" style="padding:16px">
        ${scores.map(([id,pct])=>`
          <div class="mod-quiz-item">
            <div class="mod-quiz-id">${id}</div>
            <div class="mod-quiz-score" style="color:${scoreColor(pct)}">${pct}%</div>
            <div style="font-size:0.72rem;color:var(--mod-muted);margin-bottom:4px">${(quizAttempts[id]||[]).length} percobaan</div>
            <div class="mod-quiz-bar"><div class="mod-quiz-fill" style="width:${pct}%;background:${scoreColor(pct)}"></div></div>
            ${(quizAttempts[id]||[]).length>0?`<button class="mod-btn mod-btn-xs mod-btn-outline" onclick="showTopicAttempts('${userId}','${id}')">📋 Attempt</button>`:quizDetails[id]?`<button class="mod-btn mod-btn-xs mod-btn-outline" onclick="showQuizAnswers('${userId}','${id}')">🔍 Jawaban</button>`:'<span class="mod-muted" style="font-size:0.72rem">—</span>'}
          </div>`).join('')}
      </div>
    </div>`).join('');
}

// ── TKA SECTION ───────────────────────────────────────────────
function renderTKASection() {
  const search = (document.getElementById('tkaSearch')?.value||'').toLowerCase();
  const sort   = document.getElementById('tkaSort')?.value||'score-desc';

  let allRows = [];
  _allProfiles.filter(p => p.role!=='moderator' && p.username.includes(search)).forEach(p => {
    const d = getUserProgress(p.id);
    (d.tkaHistory||[]).forEach((h,idx) => allRows.push({ username: p.username, userId: p.id, h, idx }));
  });
  allRows.sort((a,b) => sort==='score-asc' ? a.h.nilai-b.h.nilai : sort==='date-desc' ? new Date(b.h.date)-new Date(a.h.date) : b.h.nilai-a.h.nilai);

  const el = document.getElementById('tkaContent');
  if (allRows.length===0) { el.innerHTML='<div class="mod-empty">Belum ada TKA dikerjakan</div>'; return; }

  el.innerHTML = `<div class="mod-card"><div class="mod-table-wrap"><table class="mod-table">
    <thead><tr><th>#</th><th>Username</th><th>Session ID</th><th>Mapel</th><th>Nilai</th><th>Benar/Total</th><th>Durasi</th><th>Tanggal</th><th>Aksi</th></tr></thead>
    <tbody>${allRows.map(({ username, userId, h, idx }, i) => `
      <tr>
        <td class="mod-td-num">${i+1}</td>
        <td><div class="mod-user-cell"><div class="mod-avatar mod-avatar-sm">${username[0].toUpperCase()}</div><span class="mod-username">@${username}</span></div></td>
        <td><span class="mod-session-id" title="${h.sessionId||'—'}">${h.sessionId||'—'}</span></td>
        <td><span class="mod-badge mod-badge-mapel">${h.subject?.toUpperCase()}</span></td>
        <td><span style="font-weight:800;color:${scoreColor(h.nilai)}">${h.nilai}%</span><div class="mod-quiz-bar" style="margin-top:4px;width:80px"><div class="mod-quiz-fill" style="width:${h.nilai}%;background:${scoreColor(h.nilai)}"></div></div></td>
        <td>${h.benar}/${h.total}</td>
        <td>⏱️ ${h.durasi}</td>
        <td class="mod-td-date">${formatDate(h.date)}</td>
        <td>${h.answers?`<button class="mod-btn mod-btn-sm mod-btn-outline" onclick="showTKAAnswers('${userId}',${idx})">🔍 Jawaban</button>`:'—'}</td>
      </tr>`).join('')}
    </tbody></table></div></div>`;
}

// ── SYS INFO ──────────────────────────────────────────────────
function renderSysInfo() {
  const userCnt = _allProfiles.filter(p => p.role !== 'moderator').length;
  document.getElementById('sysInfo').innerHTML = `
    <div class="mod-sys-row">👥 <span>${userCnt} pengguna</span></div>
    <div class="mod-sys-row">☁️ <span>Supabase</span></div>
    <div class="mod-sys-row">🕐 <span>${new Date().toLocaleTimeString('id-ID')}</span></div>`;
}

// ── MODAL CONTROLS ────────────────────────────────────────────
window.closeDetailModal = function(e) {
  if (!e || e.target === document.getElementById('detailModal'))
    document.getElementById('detailModal').classList.remove('open');
};
window.closeAnswerModal = function(e) {
  if (!e || e.target === document.getElementById('answerModal'))
    document.getElementById('answerModal').classList.remove('open');
};
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { window.closeDetailModal(); window.closeAnswerModal(); }
});

// Expose render functions untuk onchange/oninput HTML
window.renderUserTable    = renderUserTable;
window.renderQuizSection  = renderQuizSection;
window.renderTKASection   = renderTKASection;
window.renderAttemptsSection = renderAttemptsSection;
