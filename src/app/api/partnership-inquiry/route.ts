import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

function buildSupabaseUrl(raw: string | undefined): string {
  let url = (raw ?? "").replace(/[\s]/g, "");
  url = url.replace(/\/rest\/v1\/?.*$/, "").replace(/\/+$/, "");
  if (url && !url.startsWith("https://")) {
    url = "https://" + url.replace(/^https?:\/\//, "");
  }
  return url;
}

export async function POST(req: NextRequest) {
  const supabaseUrl = buildSupabaseUrl(process.env.NEXT_PUBLIC_SUPABASE_URL);
  const supabaseKey = (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "").trim();

  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.json(
      { error: "Supabase environment variables are not configured on the server." },
      { status: 500 }
    );
  }

  let payload: Record<string, unknown>;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = String(payload.name ?? "").trim();
  const organization = String(payload.organization ?? "").trim();
  const email = String(payload.email ?? "").trim();
  const message = String(payload.message ?? "").trim();

  if (!name || !organization || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please fill out all required fields." }, { status: 400 });
  }

  const supabase = createClient(supabaseUrl, supabaseKey);
  const { error } = await supabase.from("partnership_inquiries").insert({
    name,
    organization,
    title: payload.title ?? null,
    email,
    phone: payload.phone ?? null,
    message,
  });

  if (error) {
    console.error("[/api/partnership-inquiry] Supabase error:", error);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  return NextResponse.json({ success: true });
}
