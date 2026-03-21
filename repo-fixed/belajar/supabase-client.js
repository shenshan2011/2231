// ============================================================
//  supabase-client.js — Inisialisasi koneksi Supabase
// ============================================================

import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const SUPABASE_URL  = 'https://rfigimimnlngsitghtnb.supabase.co';
const SUPABASE_ANON = 'GANTI_DENGAN_ANON_KEY_KAMU';

export const sb = createClient(SUPABASE_URL, SUPABASE_ANON, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  }
});
