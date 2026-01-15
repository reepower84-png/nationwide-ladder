import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://anhedtcbfslguhmodoeq.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_5YVdroU-v6clB_N31ouJBg_kf94RqLb';

export const supabase = createClient(supabaseUrl, supabaseKey);

export interface InquiryDB {
  id: string;
  name: string;
  phone: string;
  message: string;
  status: string;
  created_at: string;
}
