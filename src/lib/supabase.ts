import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

console.log("[Supabase] URL:", url ?? "MISSING");
console.log("[Supabase] Key:", key ? `${key.slice(0, 20)}…` : "MISSING");

export const supabase = createClient(url!, key!);
