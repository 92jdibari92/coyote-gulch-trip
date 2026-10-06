import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const WALK_CAPACITY = 6;

function buildSupabaseUrl(raw: string | undefined): string {
  let url = (raw ?? "").replace(/\s/g, "");
  url = url.replace(/\/rest\/v1\/?.*$/, "").replace(/\/+$/, "");
  if (url && !url.startsWith("https://")) {
    url = "https://" + url.replace(/^https?:\/\//, "");
  }
  return url;
}

// Returns the date (YYYY-MM-DD) of the upcoming Sunday, in America/Chicago.
// If today is Sunday, returns today.
function nextSundayInChicago(): string {
  const chicagoNow = new Date(
    new Date().toLocaleString("en-US", { timeZone: "America/Chicago" })
  );
  const day = chicagoNow.getDay(); // 0 = Sunday
  const daysUntilSunday = day === 0 ? 0 : 7 - day;
  chicagoNow.setDate(chicagoNow.getDate() + daysUntilSunday);
  const y = chicagoNow.getFullYear();
  const m = String(chicagoNow.getMonth() + 1).padStart(2, "0");
  const d = String(chicagoNow.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function formatWalkDateLong(d: string): string {
  const [y, m, day] = d.split("-").map(Number);
  const date = new Date(y, m - 1, day);
  return date.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
}

const CONFIRMATION_EMAIL_HTML = (walkDateLong: string) => `<!DOCTYPE html>
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
<p style="margin:0 0 28px;color:#f5f0e8;font-family:Georgia,serif;font-size:18px;line-height:1.8;">You&rsquo;re in.</p>
<p style="margin:0 0 28px;color:#f5f0e8;font-family:Georgia,serif;font-size:18px;line-height:1.8;"><span style="color:#c4813d;">${walkDateLong}, early evening</span> — six of us, walking slow, somewhere in or around Austin.</p>
<p style="margin:0 0 28px;color:#f5f0e8;font-family:Georgia,serif;font-size:18px;line-height:1.8;">The meeting spot moves each week. We&rsquo;ll send it to you by Friday, along with anything you need to know before you come.</p>
<p style="margin:0;color:#f5f0e8;font-family:Georgia,serif;font-size:18px;line-height:1.8;">Leave your phone in the car if you can. Come as you are.</p>
</td>
</tr>
<tr>
<td style="padding:0 40px 56px;">
<table width="100%" cellpadding="0" cellspacing="0">
<tr><td style="border-top:1px solid #2a2218;font-size:0;line-height:0;padding-bottom:28px;">&nbsp;</td></tr>
</table>
<p style="margin:0 0 6px;color:#c4813d;font-family:Georgia,serif;font-size:14px;font-style:italic;">See you on the trail,</p>
<p style="margin:0 0 8px;color:#f5f0e8;font-family:Georgia,serif;font-size:16px;font-weight:bold;letter-spacing:0.02em;">John Thomas di Bari</p>
<p style="margin:0;color:#8a7a65;font-family:Georgia,serif;font-size:11px;letter-spacing:0.25em;text-transform:uppercase;">Trails of Transformation</p>
</td>
</tr>
<tr>
<td style="background-color:#0f0c09;border-top:1px solid #1e1810;padding:20px 40px;" align="center">
<p style="margin:0;color:#4a3f32;font-family:Georgia,serif;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;">Sunday Holy Walks &nbsp;·&nbsp; Trails of Transformation</p>
</td>
</tr>
</table>
</td>
</tr>
</table>
</body>
</html>`;

const NOTIFICATION_EMAIL_HTML = (name: string, email: string, phone: string, notes: string, walkDateLong: string) => `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:32px;background-color:#0d0a07;font-family:Georgia,serif;">
<p style="color:#c4813d;font-size:11px;letter-spacing:0.3em;text-transform:uppercase;margin:0 0 24px;">New Holy Walks RSVP — ${walkDateLong}</p>
<p style="color:#f5f0e8;font-size:16px;line-height:1.6;margin:0 0 12px;"><strong style="color:#c4813d;">Name:</strong> ${name}</p>
<p style="color:#f5f0e8;font-size:16px;line-height:1.6;margin:0 0 12px;"><strong style="color:#c4813d;">Email:</strong> ${email}</p>
<p style="color:#f5f0e8;font-size:16px;line-height:1.6;margin:0 0 12px;"><strong style="color:#c4813d;">Phone:</strong> ${phone || "—"}</p>
<p style="color:#f5f0e8;font-size:16px;line-height:1.6;margin:0;"><strong style="color:#c4813d;">Notes:</strong> ${notes || "—"}</p>
</body>
</html>`;

export async function POST(req: NextRequest) {
  const supabaseUrl = buildSupabaseUrl(process.env.NEXT_PUBLIC_SUPABASE_URL);
  const supabaseKey = (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "").trim();

  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.json(
      { error: "Supabase environment variables are not configured on the server." },
      { status: 500 }
    );
  }

  let payload: { full_name?: string; email?: string; phone?: string; notes?: string };
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const fullName = String(payload.full_name ?? "").trim();
  const email = String(payload.email ?? "").trim();
  const phone = String(payload.phone ?? "").trim();
  const notes = String(payload.notes ?? "").trim();

  if (!fullName) {
    return NextResponse.json({ error: "Your name is required." }, { status: 400 });
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
  }

  const supabase = createClient(supabaseUrl, supabaseKey);
  const walkDate = nextSundayInChicago();
  const walkDateLong = formatWalkDateLong(walkDate);

  // Capacity check — six per Sunday, first come first served.
  const { count, error: countError } = await supabase
    .from("holy_walks_rsvps")
    .select("*", { count: "exact", head: true })
    .eq("walk_date", walkDate);

  if (countError) {
    console.error("[/api/holy-walks-rsvp] count error:", countError);
    return NextResponse.json({ error: countError.message }, { status: 400 });
  }

  if ((count ?? 0) >= WALK_CAPACITY) {
    return NextResponse.json({ error: "full", walk_date: walkDate }, { status: 409 });
  }

  const { error } = await supabase.from("holy_walks_rsvps").insert({
    full_name: fullName,
    email,
    phone: phone || null,
    notes: notes || null,
    walk_date: walkDate,
    source: "holy_walks_site",
  });

  if (error) {
    if (error.code === "23505") {
      return NextResponse.json({ error: "duplicate", walk_date: walkDate }, { status: 409 });
    }
    console.error("[/api/holy-walks-rsvp] insert error:", error);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  const resendKey = process.env.RESEND_API_KEY;
  if (resendKey) {
    const resend = new Resend(resendKey);
    await Promise.allSettled([
      resend.emails.send({
        from: "explore@trailsoftransformation.co",
        to: email,
        subject: "You're in — Sunday Holy Walks",
        html: CONFIRMATION_EMAIL_HTML(walkDateLong),
      }),
      resend.emails.send({
        from: "explore@trailsoftransformation.co",
        to: "92jdibari92@gmail.com",
        subject: `New Holy Walks RSVP: ${fullName} — ${walkDateLong}`,
        html: NOTIFICATION_EMAIL_HTML(fullName, email, phone, notes, walkDateLong),
      }),
    ]);
  } else {
    console.warn("[/api/holy-walks-rsvp] RESEND_API_KEY not set — skipping emails");
  }

  return NextResponse.json({ success: true, walk_date: walkDate });
}
