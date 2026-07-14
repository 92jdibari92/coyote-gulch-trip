import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const CONFIRMATION_EMAIL_HTML = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background-color:#0d0a07;font-family:Georgia,serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0d0a07;">
<tr>
<td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
<tr>
<td align="center" style="background-color:#0d0a07;padding:48px 24px 28px;">
<img src="https://coyote-gulch-trip.vercel.app/Trails%20logo.PNG" alt="Trails of Transformation" width="120" style="display:block;width:120px;height:auto;border:0;" />
</td>
</tr>
<tr>
<td style="padding:0 24px;">
<table width="100%" cellpadding="0" cellspacing="0">
<tr><td style="border-top:1px solid #2a2218;font-size:0;line-height:0;">&nbsp;</td></tr>
</table>
</td>
</tr>
<tr>
<td style="padding:48px 40px 40px;">
<p style="margin:0 0 28px;color:#f5f0e8;font-family:Georgia,serif;font-size:18px;line-height:1.8;">You&rsquo;re on the list.</p>
<p style="margin:0 0 28px;color:#f5f0e8;font-family:Georgia,serif;font-size:18px;line-height:1.8;">We run a handful of expeditions a year. Spots are limited, and every application is reviewed personally.</p>
<p style="margin:0;color:#f5f0e8;font-family:Georgia,serif;font-size:18px;line-height:1.8;">When the next one opens, you&rsquo;ll hear from us directly — before it goes public. If you&rsquo;re interested in a specific trip or bringing a private group, email us at <a href="mailto:explore@trailsoftransformation.co" style="color:#c4813d;">explore@trailsoftransformation.co</a>.</p>
</td>
</tr>
<tr>
<td style="padding:0 40px 56px;">
<table width="100%" cellpadding="0" cellspacing="0">
<tr><td style="border-top:1px solid #2a2218;font-size:0;line-height:0;padding-bottom:28px;">&nbsp;</td></tr>
</table>
<p style="margin:0 0 6px;color:#c4813d;font-family:Georgia,serif;font-size:14px;font-style:italic;">With respect,</p>
<p style="margin:0 0 8px;color:#f5f0e8;font-family:Georgia,serif;font-size:16px;font-weight:bold;letter-spacing:0.02em;">John Thomas di Bari</p>
<p style="margin:0;color:#8a7a65;font-family:Georgia,serif;font-size:11px;letter-spacing:0.25em;text-transform:uppercase;">Trails of Transformation</p>
</td>
</tr>
<tr>
<td style="background-color:#0f0c09;border-top:1px solid #1e1810;padding:20px 40px;" align="center">
<p style="margin:0;color:#4a3f32;font-family:Georgia,serif;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;">Trails of Transformation</p>
</td>
</tr>
</table>
</td>
</tr>
</table>
</body>
</html>`;

const NOTIFICATION_EMAIL_HTML = (email: string) => `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:32px;background-color:#0d0a07;font-family:Georgia,serif;">
<p style="color:#c4813d;font-size:11px;letter-spacing:0.3em;text-transform:uppercase;margin:0 0 24px;">New Trip Updates Signup</p>
<p style="color:#f5f0e8;font-size:16px;line-height:1.6;margin:0;"><strong style="color:#c4813d;">Email:</strong> ${email}</p>
</body>
</html>`;

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

  let payload: { email?: string };
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const email = String(payload.email ?? "").trim();
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
  }

  const supabase = createClient(supabaseUrl, supabaseKey);
  const { error } = await supabase
    .from("trip_updates_leads")
    .insert({ email, source: "coyote_gulch_site" });

  if (error) {
    // Duplicate email — treat as a success from the user's point of view.
    if (error.code === "23505") {
      return NextResponse.json({ success: true });
    }
    console.error("[/api/subscribe] Supabase error:", error);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  const resendKey = process.env.RESEND_API_KEY;
  if (resendKey) {
    const resend = new Resend(resendKey);
    await Promise.allSettled([
      resend.emails.send({
        from: "explore@trailsoftransformation.co",
        to: email,
        subject: "You're on the list — Trails of Transformation",
        html: CONFIRMATION_EMAIL_HTML,
      }),
      resend.emails.send({
        from: "explore@trailsoftransformation.co",
        to: "explore@trailsoftransformation.co",
        subject: "New Trip Updates Signup",
        html: NOTIFICATION_EMAIL_HTML(email),
      }),
    ]);
  } else {
    console.warn("[/api/subscribe] RESEND_API_KEY not set — skipping emails");
  }

  return NextResponse.json({ success: true });
}
