import { createClient } from "@supabase/supabase-js";

const supabaseUrl = (process.env.NEXT_PUBLIC_SUPABASE_URL ?? "").trim().replace(/\/+$/, "");
const supabaseKey = (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "").trim();

// Browser console diagnostics — visible the moment the module loads
if (typeof window !== "undefined") {
  console.log("[Supabase] URL:", supabaseUrl || "⚠️  MISSING");
  console.log(
    "[Supabase] Key:",
    supabaseKey
      ? `${supabaseKey.slice(0, 20)}… (${supabaseKey.length} chars)`
      : "⚠️  MISSING"
  );
  if (!supabaseUrl || !supabaseKey) {
    console.error(
      "[Supabase] Missing env vars. Confirm .env.local has " +
        "NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY, " +
        "then RESTART the dev server."
    );
  }
}

/** True only when both env vars were present at startup */
export const supabaseConfigured = Boolean(supabaseUrl && supabaseKey);

export const supabase = createClient(
  supabaseUrl || "https://placeholder.supabase.co",
  supabaseKey || "placeholder"
);
