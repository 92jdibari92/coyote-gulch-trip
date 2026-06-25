import { NextResponse } from "next/server";

export async function GET() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

  return NextResponse.json({
    url_prefix: url ? url.slice(0, 20) : "(not set)",
    url_length: url.length,
    key_present: key.length > 0,
    key_length: key.length,
  });
}
