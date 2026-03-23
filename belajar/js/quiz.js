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

// ── Smart Fill Checker ────────────────────────────────────────
// Mendukung:
// 1. Exact match (case-insensitive)
// 2. Alias/sinonim — dari field q.aliases (array) ATAU
//    dari kurung dalam q.ans, misal "Panas (kalor)" → alias: kalor
// 3. Fuzzy match — typo 1-2 huruf (Levenshtein distance)
// 4. Substring match (jawaban mengandung kunci atau sebaliknya)

function levenshtein(a, b) {
  const m = a.length, n = b.length;
  const dp = Array.from({length: m+1}, (_, i) =>
    Array.from({length: n+1}, (_, j) => i === 0 ? j : j === 0 ? i : 0)
  );
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = a[i-1] === b[j-1]
        ? dp[i-1][j-1]
        : 1 + Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]);
    }
  }
  return dp[m][n];
}

function fuzzyThreshold(word) {
  // Makin panjang kata, makin banyak typo yang ditoleransi
  if (word.length <= 4)  return 0;  // kata pendek: exact only
  if (word.length <= 6)  return 1;  // 5-6 huruf: toleran 1 typo
  if (word.length <= 10) return 2;  // 7-10 huruf: toleran 2 typo
  return 2;                          // >10 huruf: max 2 typo
}

function extractAliases(ans) {
  // Parse alias dari kurung: "Panas (kalor)" → ["panas", "kalor"]
  // "kecebong (berudu)" → ["kecebong", "berudu"]
  // "3R (Reduce, Reuse, Recycle)" → ["3r", "reduce", "reuse", "recycle"]
  const aliases = [];
  const base = ans.replace(/\(.*?\)/g, m => {
    m.slice(1,-1).split(/[,;\/]/).forEach(a => {
      const t = a.trim().toLowerCase();
      if (t) aliases.push(t);
    });
    return '';
  }).trim().toLowerCase();
  if (base) aliases.unshift(base);
  return aliases;
}

function isCorrectFill(userRaw, q) {
  if (!userRaw || !q.ans) return false;
  const user = userRaw.trim().toLowerCase();
  if (!user) return false;

  // Kumpulkan semua jawaban yang valid
  const validAnswers = [];

  // 1. Dari q.aliases (array eksplisit di data soal)
  if (Array.isArray(q.aliases)) {
    q.aliases.forEach(a => validAnswers.push(a.toLowerCase().trim()));
  }

  // 2. Parse dari q.ans (bisa string atau array)
  const ansList = Array.isArray(q.ans) ? q.ans : [q.ans];
  ansList.forEach(a => {
    extractAliases(String(a)).forEach(alias => {
      if (!validAnswers.includes(alias)) validAnswers.push(alias);
    });
  });

  // Cek tiap valid answer
  for (const valid of validAnswers) {
    if (!valid) continue;

    // Exact match
    if (user === valid) return true;

    // Substring match — tapi user harus minimal 3 huruf ATAU lebih dari 60% panjang valid
    // Cegah jawaban "a" atau "ai" diterima untuk kata "air"
    const minLen = Math.max(3, Math.ceil(valid.length * 0.6));
    if (user.length >= minLen && (user.includes(valid) || valid.includes(user))) return true;

    // Fuzzy match — hanya untuk kata yang cukup panjang
    const words = valid.split(/\s+/);
    const threshold = fuzzyThreshold(valid);
    if (threshold > 0) {
      if (levenshtein(user, valid) <= threshold) return true;
      // Cek per kata jika jawaban multi-kata (ambil kata terpanjang)
      if (words.length > 1) {
        const longest = words.reduce((a, b) => a.length >= b.length ? a : b, '');
        const userWords = user.split(/\s+/);
        if (userWords.some(uw => levenshtein(uw, longest) <= fuzzyThreshold(longest))) return true;
      }
    }
  }
  return false;
}

export function checkFill() {
  const q   = _questions[_quizIndex];
  const inp = $('fillInput');
  if (!inp || inp.disabled) return;
  const correct = isCorrectFill(inp.value, q);
  _questionAttempts++;
  if (!q._userAns || correct) { q._userAns = inp.value.trim(); q._benar = correct; }
  handleAnswerResult(correct, inp);
}

// Export untuk testing
export { isCorrectFill };

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

  // BUGFIX: Gunakan _flush() langsung (bukan save() yang di-debounce 1500ms).
  // Ini mencegah data attempt hilang jika user navigasi < 1.5 detik setelah quiz selesai.
  // _onFinish dipanggil setelah flush selesai agar navigasi tidak memotong sync ke Supabase.
  STATE._flush().finally(() => {
    _onFinish?.({
      pct, benar: _quizScore, salah: _quizWrong, total,
      quizId: _quizId, attemptId: _attemptId, attemptNumber: _attemptNumber,
      durasiStr,
    });
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
