import { auth } from '@clerk/nextjs/server';
import { createClient } from '@supabase/supabase-js';

export const createSupabaseClient = () => {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY!,{
      async accessToken(){
        return ((await auth()).getToken());
      }
    }
  )
  // const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  // const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY!;

  // if (!supabaseUrl) throw new Error('Missing SUPABASE_URL');
  // if (!supabaseKey) throw new Error('Missing SUPABASE_PUBLISHABLE_DEFAULT_KEY');

  // return createClient(supabaseUrl, supabaseKey);
};