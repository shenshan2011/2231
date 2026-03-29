// ============================================================
//  state.js — BelajarCeria
//  Modul: State Management (Progress belajar, sync ke Supabase)
// ============================================================
import { sb } from './supabase-client.js';

const makeDefaults = () => ({
  xp: 0, streak: 0, lastDate: '',
  read: {}, quizScores: {}, quizDetails: {},
  quizAttempts: {}, // NEW: { topicId: [ { attemptId, num, score, answers, timestamp } ] }
  activity: [], tkaHistory: [],
});

let data = makeDefaults();
let _saveTimeout = null;

export const STATE = {
  async load() {
    const { data: { user } } = await sb.auth.getUser();
    if (!user) { data = makeDefaults(); return; }

    const { data: row } = await sb.from('user_progress')
      .select('*').eq('user_id', user.id).maybeSingle();

    data = row ? {
      xp:           row.xp           || 0,
      streak:       row.streak        || 0,
      lastDate:     row.last_date     || '',
      read:         row.read          || {},
      quizScores:   row.quiz_scores   || {},
      quizDetails:  row.quiz_details  || {},
      quizAttempts: row.quiz_attempts || {},
      activity:     row.activity      || [],
      tkaHistory:   row.tka_history   || [],
    } : makeDefaults();
  },

  get: () => data,

  save() {
    if (_saveTimeout) clearTimeout(_saveTimeout);
    _saveTimeout = setTimeout(() => this._flush(), 1500);
  },

  async _flush() {
    const { data: { user } } = await sb.auth.getUser();
    if (!user) return;
    await sb.from('user_progress').upsert({
      user_id:       user.id,
      xp:            data.xp,
      streak:        data.streak,
      last_date:     data.lastDate,
      read:          data.read,
      quiz_scores:   data.quizScores,
      quiz_details:  data.quizDetails,
      quiz_attempts: data.quizAttempts,
      activity:      data.activity,
      tka_history:   data.tkaHistory,
      updated_at:    new Date().toISOString(),
    }, { onConflict: 'user_id' });
  },

  reset() {
    data = makeDefaults();
  },
};
