"use client";

import { useState } from "react";

export default function StayInTouchForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const json = await res.json();

      if (!res.ok) {
        setError(json.error ?? "Something went wrong — please try again.");
        setLoading(false);
        return;
      }
    } catch {
      setError("Network error — please check your connection and try again.");
      setLoading(false);
      return;
    }

    setSubmitted(true);
    setLoading(false);
  }

  if (submitted) {
    return (
      <div className="border-l-2 border-[#c4813d] pl-6 py-2 max-w-sm mx-auto text-left">
        <p className="font-display text-xl text-foreground">You&apos;re on the list.</p>
        <p className="text-foreground/55 font-sans text-sm mt-2 leading-relaxed">
          We&apos;ll reach out personally when the next trip opens.
        </p>
      </div>
    );
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          className="w-full bg-[hsl(28,20%,8%)] border border-border text-foreground placeholder:text-foreground/20 rounded-none px-4 h-12 text-sm font-sans outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary/25"
        />
        <button
          type="submit"
          disabled={loading}
          className="shrink-0 bg-[#c4813d] hover:bg-[#d4924e] disabled:opacity-50 disabled:cursor-not-allowed text-[#0d0905] font-sans font-semibold text-sm tracking-[0.15em] uppercase px-6 h-12 transition-all duration-300 whitespace-nowrap"
        >
          {loading ? "…" : "Get on the List"}
        </button>
      </form>
      {error && (
        <p className="text-red-400/65 text-xs font-sans mt-3 leading-snug">
          {error}
        </p>
      )}
      <p className="text-foreground/20 font-sans text-xs mt-5 text-center leading-relaxed">
        No spam — just trail dates, a few times a year.
      </p>
    </div>
  );
}
