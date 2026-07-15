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
<p style="margin:0 0 28px;color:#f5f0e8;font-family:Georgia,serif;font-size:18px;line-height:1.8;">Thank you for reaching out.</p>
<p style="margin:0 0 28px;color:#f5f0e8;font-family:Georgia,serif;font-size:18px;line-height:1.8;">We received your inquiry and are honored by your interest in partnering with <span style="color:#c4813d;">Trails of Transformation</span>. What you are doing for the men in your care matters deeply — and we believe what we are building together could extend that impact in a meaningful way.</p>
<p style="margin:0 0 28px;color:#f5f0e8;font-family:Georgia,serif;font-size:18px;line-height:1.8;">We will review your message personally and be in touch within 3 business days to schedule a conversation.</p>
<p style="margin:0;color:#f5f0e8;font-family:Georgia,serif;font-size:18px;line-height:1.8;">In the meantime feel free to reach us directly at <a href="mailto:explore@trailsoftransformation.co" style="color:#c4813d;">explore@trailsoftransformation.co</a></p>
</td>
</tr>
<tr>
<td style="padding:0 40px 56px;">
<table width="100%" cellpadding="0" cellspacing="0">
<tr><td style="border-top:1px solid #2a2218;font-size:0;line-height:0;padding-bottom:28px;">&nbsp;</td></tr>
</table>
<p style="margin:0 0 6px;color:#c4813d;font-family:Georgia,serif;font-size:14px;font-style:italic;">With gratitude,</p>
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

const NOTIFICATION_EMAIL_HTML = (fields: {
  name: string;
  organization: string;
  title: string;
  email: string;
  phone: string;
  message: string;
}) => `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:32px;background-color:#0d0a07;font-family:Georgia,serif;">
<p style="color:#c4813d;font-size:11px;letter-spacing:0.3em;text-transform:uppercase;margin:0 0 24px;">New Partnership Inquiry</p>
<p style="color:#f5f0e8;font-size:16px;line-height:1.6;margin:0 0 12px;"><strong style="color:#c4813d;">Name:</strong> ${fields.name}</p>
<p style="color:#f5f0e8;font-size:16px;line-height:1.6;margin:0 0 12px;"><strong style="color:#c4813d;">Organization:</strong> ${fields.organization}</p>
<p style="color:#f5f0e8;font-size:16px;line-height:1.6;margin:0 0 12px;"><strong style="color:#c4813d;">Title:</strong> ${fields.title}</p>
<p style="color:#f5f0e8;font-size:16px;line-height:1.6;margin:0 0 12px;"><strong style="color:#c4813d;">Email:</strong> ${fields.email}</p>
<p style="color:#f5f0e8;font-size:16px;line-height:1.6;margin:0 0 12px;"><strong style="color:#c4813d;">Phone:</strong> ${fields.phone}</p>
<p style="color:#f5f0e8;font-size:16px;line-height:1.6;margin:0;"><strong style="color:#c4813d;">Message:</strong><br />${fields.message}</p>
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
  const title = String(payload.title ?? "").trim();
  const phone = String(payload.phone ?? "").trim();

  if (!name || !organization || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please fill out all required fields." }, { status: 400 });
  }

  const supabase = createClient(supabaseUrl, supabaseKey);
  const { error } = await supabase.from("partnership_inquiries").insert({
    name,
    organization,
    title: title || null,
    email,
    phone: phone || null,
    message,
  });

  if (error) {
    console.error("[/api/partnership-inquiry] Supabase error:", error);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  const resendKey = process.env.RESEND_API_KEY;
  if (resendKey) {
    const resend = new Resend(resendKey);
    await Promise.allSettled([
      resend.emails.send({
        from: "explore@trailsoftransformation.co",
        to: email,
        subject: "Your Inquiry Has Been Received — Trails of Transformation",
        html: CONFIRMATION_EMAIL_HTML,
      }),
      resend.emails.send({
        from: "explore@trailsoftransformation.co",
        to: "explore@trailsoftransformation.co",
        subject: "New Partnership Inquiry — Trails of Transformation",
        html: NOTIFICATION_EMAIL_HTML({
          name,
          organization,
          title: title || "—",
          email,
          phone: phone || "—",
          message,
        }),
      }),
    ]);
  } else {
    console.warn("[/api/partnership-inquiry] RESEND_API_KEY not set — skipping emails");
  }

  return NextResponse.json({ success: true });
}
