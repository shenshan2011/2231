// ============================================================
//  quiz.js — BelajarCeria
//  Modul: Quiz Engine + Attempt Tracking System
//
//  Fitur baru:
//  - Unique Quiz ID per topik (tetap, di-generate sekali)
//  - Unique Attempt ID per sesi pengerjaan
//  - Attempt Number (percobaan ke-berapa untuk user ini)
//  - Logging: score, answers, timestamp (DD-MM-YYYY, HH:MM:SS)
//  - Multiple Attempts diizinkan
// ============================================================
import { STATE }     from './state.js';
import { AUTH }      from './auth.js';
import { $, $$, showToast, shuffleArray, playSound, generateId, formatTimestamp } from './utils.js';

// Unique Quiz ID per topik — dihasilkan dari hash topicId
// Format: QZ-[TOPICID_HASH]-[SUFFIX]
export function getQuizId(topicId) {
  // Simple deterministic hash dari topicId
  let hash = 0;
  for (let i = 0; i < topicId.length; i++) {
    hash = ((hash << 5) - hash) + topicId.charCodeAt(i);
    hash |= 0;
  }
  const hex = Math.abs(hash).toString(16).toUpperCase().padStart(6, '0');
  return `QZ-${hex}`;
}

// ── Runtime state ─────────────────────────────────────────────
let _topicId        = '';
let _quizId         = '';      // Unique Quiz ID untuk topik ini
let _attemptId      = '';      // Unique Attempt ID untuk sesi ini
let _attemptNumber  = 0;       // Percobaan ke-berapa
let _questions      = [];
let _quizIndex      = 0;
let _quizScore      = 0;
let _quizWrong      = 0;
let _questionAttempts = 0;
let _startTime      = null;

// Callback untuk navigasi page (dikirim dari app.js)
let _onFinish    = null;
let _onBack      = null;

export function initQuiz({ topicId, questions, onFinish, onBack }) {
  _topicId   = topicId;
  _quizId    = getQuizId(topicId);
  _questions = shuffleArray([...questions]);
  _onFinish  = onFinish;
  _onBack    = onBack;

  // Hitung attempt number
  const s = STATE.get();
  if (!s.quizAttempts)             s.quizAttempts = {};
  if (!s.quizAttempts[_topicId])   s.quizAttempts[_topicId] = [];
  _attemptNumber = s.quizAttempts[_topicId].length + 1;

  // Generate Attempt ID: ATM-[QuizID]-[TS]-[RAND]
  _attemptId = generateId(`ATM-${_quizId}`);
  _startTime = new Date();

  _quizIndex  = 0;
  _quizScore  = 0;
  _quizWrong  = 0;

  renderQuestion();
}

function renderQuestion() {
  _questionAttempts = 0;
  const q     = _questions[_quizIndex];
  const total = _questions.length;

  $('qNum').textContent      = `${_quizIndex + 1} / ${total}`;
  $('qProgress').style.width = `${(_quizIndex / total) * 100}%`;
  $('qScore').textContent    = `⭐ ${_quizScore}`;
  $('quizBtnRow').innerHTML  = '';

  // Tampilkan Quiz ID + Attempt info di header
  let quizMeta = document.getElementById('quizMeta');
  if (!quizMeta) {
    quizMeta = document.createElement('div');
    quizMeta.id = 'quizMeta';
    quizMeta.className = 'quiz-meta-bar';
    document.querySelector('.quiz-header')?.after(quizMeta);
  }
  quizMeta.innerHTML = `
    <span class="quiz-id-badge" title="Quiz ID">🔑 ${_quizId}</span>
    <span class="quiz-attempt-badge">Percobaan ke-${_attemptNumber}</span>
  `;

  const card = $('quizCard');
  if (q.type === 'fill') {
    card.innerHTML = `
      <div class="quiz-type-badge">✏️ Isi Jawaban</div>
      <div class="quiz-question">${_quizIndex + 1}. ${q.q}</div>
      <div class="attempt-dots" id="attemptDots">
        <div class="attempt-dot" id="dot0"></div>
        <div class="attempt-dot" id="dot1"></div>
      </div>
      <div class="quiz-fill-row">
        <input class="quiz-input" id="fillInput" placeholder="Ketik jawaban…"
               autocomplete="off" autocapitalize="off"
               onkeydown="if(event.key==='Enter') window._quizCheckFill()">
        <button class="btn" onclick="window._quizCheckFill()">Cek ✓</button>
      </div>
      <div class="hint-box"        id="hintBox">${q.hint || ''}</div>
      <div class="explanation-box" id="explanationBox">${q.explanation || ''}</div>
      <div class="feedback-box"    id="feedbackBox"></div>`;
    setTimeout(() => $('fillInput')?.focus(), 100);
  } else {
    // Shuffle options
    const idxArr = q.opts.map((_, i) => i);
    for (let i = idxArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); [idxArr[i], idxArr[j]] = [idxArr[j], idxArr[i]];
    }
    const sOpts = idxArr.map(i => q.opts[i]);
    const sAns  = idxArr.indexOf(q.ans);
    q._sOpts = sOpts; q._sAns = sAns;
    card.innerHTML = `
      <div class="quiz-type-badge">🎯 Pilihan Ganda</div>
      <div class="quiz-question">${_quizIndex + 1}. ${q.q}</div>
      <div class="attempt-dots" id="attemptDots">
        <div class="attempt-dot" id="dot0"></div>
        <div class="attempt-dot" id="dot1"></div>
      </div>
      <div class="quiz-options">
        ${sOpts.map((o, i) => `<button class="quiz-option" id="opt${i}" onclick="window._quizCheckMC(${i})">
          <div class="opt-letter">${'ABCD'[i]}</div>${o}
        </button>`).join('')}
      </div>
      <div class="hint-box"        id="hintBox">${q.hint || ''}</div>
      <div class="explanation-box" id="explanationBox">${q.explanation || ''}</div>
      <div class="feedback-box"    id="feedbackBox"></div>`;
  }
}

// Expose ke window untuk onclick HTML
window._quizCheckMC = checkMC;
window._quizCheckFill = checkFill;
window._quizNextQuestion = nextQuestion;

export function checkMC(idx) {
  const q      = _questions[_quizIndex];
  const ansIdx = q._sAns !== undefined ? q._sAns : q.ans;
  const correct = idx === ansIdx;
  _questionAttempts++;
  const sOpts = q._sOpts || q.opts || [];
  if (!q._userAns || correct) { q._userAns = sOpts[idx] || String(idx); q._benar = correct; }
  $$('.quiz-option').forEach(b => b.classList.add('disabled'));
  $(`opt${idx}`)?.classList.add(correct ? 'correct' : 'wrong');
  if (!correct && _questionAttempts >= 2) $(`opt${ansIdx}`)?.classList.add('correct');
  handleAnswerResult(correct);
}

export function checkFill() {
  const q   = _questions[_quizIndex];
  const inp = $('fillInput');
  if (!inp || inp.disabled) return;
  const userAns = inp.value.trim().toLowerCase();
  const correct = q.ans && (
    userAns === q.ans.toLowerCase() ||
    userAns.includes(q.ans.toLowerCase()) ||
    q.ans.toLowerCase().includes(userAns)
  );
  _questionAttempts++;
  if (!q._userAns || correct) { q._userAns = inp.value.trim(); q._benar = correct; }
  handleAnswerResult(correct, inp);
}

function handleAnswerResult(correct, fillInput = null) {
  const q        = _questions[_quizIndex];
  const hintBox  = $('hintBox');
  const explBox  = $('explanationBox');
  const feedback = $('feedbackBox');
  const dot      = $(`dot${_questionAttempts - 1}`);
  const ansIdx   = q._sAns  !== undefined ? q._sAns  : q.ans;
  const ansLabel = q._sOpts !== undefined ? q._sOpts[ansIdx] : (q.opts ? q.opts[q.ans] : q.ans);
  if (dot) dot.classList.add('used');

  if (correct) {
    const xpGain = _questionAttempts === 1 ? 5 : 2;
    _quizScore++; playSound('correct');
    feedback.className = 'feedback-box correct';
    feedback.innerHTML = `✅ Benar! ${_questionAttempts === 1 ? '+5 XP 🎉' : '+2 XP'}`;
    feedback.style.display = 'block';
    if (fillInput) fillInput.disabled = true;
    $$('.quiz-option').forEach(b => b.classList.add('disabled'));
    $('quizBtnRow').innerHTML = `<button class="btn" onclick="window._quizNextQuestion()">Lanjut →</button>`;
    return { xpGain };
  } else {
    _quizWrong++; playSound('wrong');
    if (_questionAttempts === 1) {
      feedback.className = 'feedback-box wrong'; feedback.style.display = 'block';
      if (hintBox) hintBox.style.display = 'flex';
      if (fillInput) {
        fillInput.value = ''; fillInput.disabled = false;
        setTimeout(() => fillInput.focus(), 50);
        feedback.innerHTML = '❌ Kurang tepat. Lihat petunjuk, coba sekali lagi!';
      } else {
        feedback.innerHTML = '❌ Salah. Coba lagi! Lihat petunjuk di bawah.';
        $$('.quiz-option').forEach(b => b.classList.remove('disabled', 'wrong'));
      }
    } else {
      if (hintBox) hintBox.style.display = 'flex';
      if (explBox) explBox.style.display = 'flex';
      feedback.className = 'feedback-box wrong'; feedback.style.display = 'block';
      if (q.type === 'fill') {
        feedback.innerHTML = `❌ Jawaban benar: <strong>${q.ans}</strong>`;
        if (fillInput) fillInput.disabled = true;
      } else {
        feedback.innerHTML = `❌ Jawaban benar: <strong>${ansLabel}</strong>`;
        $$('.quiz-option').forEach(b => b.classList.add('disabled'));
        $(`opt${ansIdx}`)?.classList.add('correct');
      }
      $('quizBtnRow').innerHTML = `<button class="btn" onclick="window._quizNextQuestion()">Lanjut →</button>`;
    }
    return null;
  }
}

function nextQuestion() {
  _quizIndex++;
  if (_quizIndex >= _questions.length) finishQuiz();
  else renderQuestion();
}

function finishQuiz() {
  const total      = _questions.length;
  const pct        = Math.round((_quizScore / total) * 100);
  const endTime    = new Date();
  const durasiMs   = endTime - _startTime;
  const durasiStr  = `${String(Math.floor(durasiMs / 60000)).padStart(2,'0')}:${String(Math.floor((durasiMs % 60000)/1000)).padStart(2,'0')}`;

  // ── Build attempt log entry ─────────────────────────────────
  const attemptEntry = {
    attemptId:     _attemptId,
    quizId:        _quizId,
    attemptNumber: _attemptNumber,
    topicId:       _topicId,
    score:         pct,
    benar:         _quizScore,
    salah:         _quizWrong,
    total,
    durasi:        durasiStr,
    timestamp:     formatTimestamp(endTime.toISOString()),  // DD-MM-YYYY, HH:MM:SS
    timestampISO:  endTime.toISOString(),
    answers:       _questions.map(q => ({
      soal:    q.q,
      type:    q.type,
      kunci:   q.type === 'mc'
        ? (q._sOpts ? q._sOpts[q._sAns] : (q.opts ? q.opts[q.ans] : q.ans))
        : q.ans,
      kunciRaw: q.ans,
      userAns: q._userAns || null,
      benar:   q._benar   || false,
    })),
  };

  // ── Save ke STATE ────────────────────────────────────────────
  const s = STATE.get();
  if (!s.quizAttempts)           s.quizAttempts = {};
  if (!s.quizAttempts[_topicId]) s.quizAttempts[_topicId] = [];
  s.quizAttempts[_topicId].unshift(attemptEntry);
  // Simpan max 50 attempt per topik
  if (s.quizAttempts[_topicId].length > 50) s.quizAttempts[_topicId] = s.quizAttempts[_topicId].slice(0, 50);

  // Best score
  if (s.quizScores[_topicId] === undefined || pct > s.quizScores[_topicId]) {
    s.quizScores[_topicId] = pct;
  }

  // Latest detail (untuk backward compat)
  if (!s.quizDetails) s.quizDetails = {};
  s.quizDetails[_topicId] = attemptEntry;

  STATE.save();

  // ── Call back ke app.js ──────────────────────────────────────
  _onFinish?.({
    pct, benar: _quizScore, salah: _quizWrong, total,
    quizId: _quizId, attemptId: _attemptId, attemptNumber: _attemptNumber,
    durasiStr,
  });
}

export function getLastAttemptInfo() {
  return {
    quizId:        _quizId,
    attemptId:     _attemptId,
    attemptNumber: _attemptNumber,
  };
}

export function getAttemptCount(topicId) {
  const s = STATE.get();
  return (s.quizAttempts?.[topicId] || []).length;
}
