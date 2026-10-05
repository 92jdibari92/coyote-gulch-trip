"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "full" | "duplicate" | "error";

export default function HolyWalksRSVPForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [walkDate, setWalkDate] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!fullName.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setError(null);

    try {
      const res = await fetch("/api/holy-walks-rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ full_name: fullName, email, phone, notes }),
      });

      const json = await res.json();
      setWalkDate(json.walk_date ?? null);

      if (!res.ok) {
        if (json.error === "full") {
          setStatus("full");
          return;
        }
        if (json.error === "duplicate") {
          setStatus("duplicate");
          return;
        }
        setStatus("error");
        setError(json.error ?? "Something went wrong — please try again.");
        return;
      }
    } catch {
      setStatus("error");
      setError("Network error — please check your connection and try again.");
      return;
    }

    setStatus("success");
  }

  function formatWalkDate(d: string | null) {
    if (!d) return "this Sunday";
    const [y, m, day] = d.split("-").map(Number);
    const date = new Date(y, m - 1, day);
    return date.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
  }

  if (status === "success") {
    return (
      <div className="border-l-2 border-[#c4813d] pl-6 py-2 max-w-md mx-auto text-left">
        <p className="font-display text-2xl text-foreground">You&apos;re in.</p>
        <p className="text-foreground/55 font-sans text-sm mt-3 leading-relaxed">
          {formatWalkDate(walkDate)}, early evening. We&apos;ll email you the exact
          meeting spot by Friday — somewhere in or around Austin, chosen fresh
          each week.
        </p>
      </div>
    );
  }

  if (status === "full") {
    return (
      <div className="border-l-2 border-[#c4813d] pl-6 py-2 max-w-md mx-auto text-left">
        <p className="font-display text-2xl text-foreground">This Sunday is full.</p>
        <p className="text-foreground/55 font-sans text-sm mt-3 leading-relaxed">
          Six is six — that&apos;s the whole point. There&apos;s always another
          Sunday. Come back and RSVP for the next one, or reach out directly at{" "}
          <a href="mailto:explore@trailsoftransformation.co" className="text-[#c4813d] hover:text-[#d4924e] underline underline-offset-2">
            explore@trailsoftransformation.co
          </a>{" "}
          and we&apos;ll keep you in mind if a spot opens.
        </p>
      </div>
    );
  }

  if (status === "duplicate") {
    return (
      <div className="border-l-2 border-[#c4813d] pl-6 py-2 max-w-md mx-auto text-left">
        <p className="font-display text-2xl text-foreground">You&apos;re already on the list.</p>
        <p className="text-foreground/55 font-sans text-sm mt-3 leading-relaxed">
          We&apos;ve got you down for {formatWalkDate(walkDate)}. See you on the trail.
        </p>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto">
        <input
          type="text"
          required
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Your name"
          className="w-full bg-[hsl(28,20%,8%)] border border-border text-foreground placeholder:text-foreground/20 rounded-none px-4 h-12 text-sm font-sans outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary/25"
        />
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          className="w-full bg-[hsl(28,20%,8%)] border border-border text-foreground placeholder:text-foreground/20 rounded-none px-4 h-12 text-sm font-sans outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary/25"
        />
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone (optional)"
          className="w-full bg-[hsl(28,20%,8%)] border border-border text-foreground placeholder:text-foreground/20 rounded-none px-4 h-12 text-sm font-sans outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary/25"
        />
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Anything we should know? (optional)"
          rows={3}
          className="w-full bg-[hsl(28,20%,8%)] border border-border text-foreground placeholder:text-foreground/20 rounded-none px-4 py-3 text-sm font-sans outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary/25 resize-none"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="shrink-0 bg-[#c4813d] hover:bg-[#d4924e] disabled:opacity-50 disabled:cursor-not-allowed text-[#0d0905] font-sans font-semibold text-sm tracking-[0.15em] uppercase px-6 h-12 transition-all duration-300"
        >
          {status === "loading" ? "…" : "RSVP for This Sunday"}
        </button>
      </form>
      {error && (
        <p className="text-red-400/65 text-xs font-sans mt-3 text-center leading-snug max-w-md mx-auto">
          {error}
        </p>
      )}
      <p className="text-foreground/20 font-sans text-xs mt-5 text-center leading-relaxed">
        Free, always. Capped at six. First six to RSVP each week are in.
      </p>
    </div>
  );
}
