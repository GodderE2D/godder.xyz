import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const ownerEmail = process.env.NEXT_PUBLIC_SITE_OWNER_EMAIL_ADDRESS;

if (!supabaseUrl || !supabaseAnonKey || !ownerEmail || !ownerEmail)
  throw new Error(
    "Missing one or more of the following environment variables:\n- NEXT_PUBLIC_SUPABASE_URL\n- NEXT_PUBLIC_SUPABASE_ANON_KEY\n- NEXT_PUBLIC_SITE_OWNER_EMAIL_ADDRESS"
  );

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
