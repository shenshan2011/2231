// ============================================================
//  auth.js — BelajarCeria
//  Modul: Authentication (Register, Login, Logout, Session)
// ============================================================
import { sb } from './supabase-client.js';

let _profile = null; // cache: { id, username, role, study_time }

export const AUTH = {
  async getSession() {
    const { data } = await sb.auth.getSession();
    return data.session;
  },

  currentUser()   { return _profile?.username || null; },
  currentRole()   { return _profile?.role || null; },
  currentId()     { return _profile?.id || null; },
  getProfile()    { return _profile; },

  async loadProfile() {
    const { data: { user } } = await sb.auth.getUser();
    if (!user) { _profile = null; return null; }

    const { data, error } = await sb.from('profiles')
      .select('*').eq('id', user.id).single();

    if (error || !data) { _profile = null; return null; }
    _profile = data;
    return data;
  },

  async register(username, password) {
    const u = username.trim().toLowerCase();
    if (!u)                       return { ok: false, error: 'Username tidak boleh kosong.' };
    if (u.length < 3)             return { ok: false, error: 'Username minimal 3 karakter.' };
    if (!/^[a-z0-9_]+$/.test(u)) return { ok: false, error: 'Username hanya huruf, angka, dan _.' };
    if (password.length < 6)      return { ok: false, error: 'Password minimal 6 karakter.' };

    const { data: existing } = await sb.from('profiles')
      .select('username').eq('username', u).maybeSingle();
    if (existing) return { ok: false, error: 'Username sudah dipakai.' };

    const email = `${u}@example.com`;
    const { data, error } = await sb.auth.signUp({ email, password });
    if (error) return { ok: false, error: error.message };

    const { error: profErr } = await sb.from('profiles').insert({
      id: data.user.id, username: u, role: 'user', study_time: 0,
    });
    if (profErr) return { ok: false, error: 'Gagal buat profil: ' + profErr.message };

    await sb.from('user_progress').insert({ user_id: data.user.id });
    await this.loadProfile();
    return { ok: true };
  },

  async login(username, password) {
    const u     = username.trim().toLowerCase();
    const email = `${u}@example.com`;
    const { data, error } = await sb.auth.signInWithPassword({ email, password });
    if (error) {
      if (error.message.includes('Invalid login')) return { ok: false, error: 'Username atau password salah.' };
      return { ok: false, error: error.message };
    }
    await this.loadProfile();
    await sb.from('profiles').update({ last_login: new Date().toISOString() }).eq('id', data.user.id);
    return { ok: true, role: _profile?.role || 'user' };
  },

  async logout() {
    _profile = null;
    await sb.auth.signOut();
  },

  async addStudyTime(minutes) {
    if (!_profile) return;
    _profile.study_time = (_profile.study_time || 0) + minutes;
    await sb.from('profiles')
      .update({ study_time: _profile.study_time })
      .eq('id', _profile.id);
  },
};
