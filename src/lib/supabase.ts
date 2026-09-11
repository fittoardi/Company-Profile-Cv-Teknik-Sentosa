import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Lead = {
  name: string;
  company: string;
  need_type: 'baru' | 'servis' | 'upgrade';
  capacity?: string;
  location?: string;
  message?: string;
  phone?: string;
  email?: string;
};
