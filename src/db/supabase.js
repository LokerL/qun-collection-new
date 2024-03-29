import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_VERCEL_NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_VERCEL_NEXT_PUBLIC_SUPABASE_ANON_KEY;
export default createClient(supabaseUrl, supabaseKey);
