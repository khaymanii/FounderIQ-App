import { createClient } from "@supabase/supabase-js";
import { VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY } from "@env";

const supabaseUrl = VITE_SUPABASE_URL;
const supabaseKey = VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase environment variables");
}

export const supabase = createClient(supabaseUrl, supabaseKey);
