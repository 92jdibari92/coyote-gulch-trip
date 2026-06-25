"use client";

import { useEffect, useState } from "react";
import { supabase, supabaseConfigured } from "@/lib/supabase";

/* ─── Types ─────────────────────────────────────────────────────── */

interface FormData {
  // Basics
  full_name: string;
  age: string;
  city_state: string;
  email: string;
  phone: string;
  heard_about_us: string;
  // Physical
  fitness_level: string;
  backpacking_experience: string;
  mileage_comfortable: string;
  physical_limitations: string;
  // Why
  what_drew_you: string;
  hoping_to_gain: string;
  life_connection: string;
  // Who
  how_others_describe: string;
  brotherhood_meaning: string;
  rite_of_passage: string;
  what_you_bring: string;
  // Logistics
  has_gear: string;
  transportation: string;
  dietary_restrictions: string;
  investment_tier: string;
  // Final
  anything_else: string;
}

type Errors = Partial<Record<keyof FormData, string>>;

const EMPTY: FormData = {
  full_name: "", age: "", city_state: "", email: "", phone: "",
  heard_about_us: "", fitness_level: "", backpacking_experience: "",
  mileage_comfortable: "", physical_limitations: "", what_drew_you: "",
  hoping_to_gain: "", life_connection: "", how_others_describe: "",
  brotherhood_meaning: "", rite_of_passage: "", what_you_bring: "",
  has_gear: "", transportation: "", dietary_restrictions: "",
  investment_tier: "", anything_else: "",
};

const REQUIRED: (keyof FormData)[] = [
  "full_name", "age", "city_state", "email", "phone", "heard_about_us",
  "fitness_level", "backpacking_experience", "mileage_comfortable",
  "what_drew_you", "hoping_to_gain", "life_connection",
  "how_others_describe", "brotherhood_meaning", "rite_of_passage", "what_you_bring",
  "has_gear", "transportation", "investment_tier",
];

/* ─── Shared styles ─────────────────────────────────────────────── */

const inputCls = [
  "w-full bg-[hsl(28,20%,8%)] border border-border text-foreground",
  "placeholder:text-foreground/20 rounded-none px-4 h-12 text-sm font-sans",
  "outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary/25",
].join(" ");

const textareaCls = [
  "w-full bg-[hsl(28,20%,8%)] border border-border text-foreground",
  "placeholder:text-foreground/20 rounded-none px-4 py-3 text-sm font-sans",
  "outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary/25 resize-none",
].join(" ");

const labelCls =
  "block text-foreground/45 text-[0.65rem] tracking-[0.22em] uppercase font-sans mb-2";
const errCls = "text-red-400/65 text-xs font-sans mt-2 leading-snug";
const optionalNote = (
  <span className="normal-case tracking-normal opacity-35"> — optional</span>
);

/* ─── Section divider ───────────────────────────────────────────── */

function SectionHeader({ n, title }: { n: string; title: string }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <span className="text-[#c4813d]/40 font-mono text-[0.6rem] shrink-0">{n}</span>
      <div className="h-px flex-1 bg-border" />
      <span className="text-[#c4813d] text-[0.65rem] tracking-[0.32em] uppercase font-sans shrink-0">
        {title}
      </span>
      <div className="h-px flex-1 bg-border" />
    </div>
  );
}

/* ─── Toggle button group (Yes/No etc.) ─────────────────────────── */

function ToggleGroup({
  value,
  options,
  onChange,
  error,
}: {
  value: string;
  options: { value: string; label: string }[];
  onChange: (v: string) => void;
  error?: string;
}) {
  return (
    <div>
      <div className="flex flex-wrap gap-3">
        {options.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            className={[
              "px-6 py-2.5 text-sm font-sans border transition-all duration-150",
              value === opt.value
                ? "border-[#c4813d] bg-[#c4813d]/10 text-foreground"
                : "border-border bg-[hsl(28,20%,8%)] text-foreground/38 hover:text-foreground/65 hover:border-foreground/25",
            ].join(" ")}
          >
            {opt.label}
          </button>
        ))}
      </div>
      {error && <p className={errCls}>{error}</p>}
    </div>
  );
}

/* ─── Investment tier cards ─────────────────────────────────────── */

const TIERS = [
  {
    id: "supporter",
    label: "Supporter",
    price: "$1,800",
    note: "Helps subsidize a community spot",
  },
  {
    id: "standard",
    label: "Standard",
    price: "$1,200",
    note: "Full trip experience",
  },
  {
    id: "community",
    label: "Community",
    price: "$600",
    note: "Limited — need-based",
  },
];

function TierCards({
  value,
  onChange,
  error,
}: {
  value: string;
  onChange: (v: string) => void;
  error?: string;
}) {
  return (
    <div>
      <div className="grid sm:grid-cols-3 gap-px bg-border">
        {TIERS.map((tier) => {
          const active = value === tier.id;
          return (
            <button
              key={tier.id}
              type="button"
              onClick={() => onChange(tier.id)}
              className={[
                "flex flex-col gap-2 p-6 text-left transition-all duration-150",
                active
                  ? "bg-[#c4813d]/10 outline outline-1 outline-[#c4813d]/50"
                  : "bg-[hsl(28,20%,8%)] hover:bg-[hsl(28,20%,11%)]",
              ].join(" ")}
            >
              <span className="font-display text-xl text-foreground leading-tight">
                {tier.label}
              </span>
              <span
                className={`text-2xl font-sans font-semibold ${
                  active ? "text-[#c4813d]" : "text-foreground/55"
                }`}
              >
                {tier.price}
              </span>
              <span className="text-foreground/30 font-sans text-xs leading-relaxed">
                {tier.note}
              </span>
            </button>
          );
        })}
      </div>
      {error && <p className={errCls}>{error}</p>}
    </div>
  );
}

/* ─── Main component ────────────────────────────────────────────── */

export default function ApplicationForm() {
  const [form, setForm] = useState<FormData>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  // Connection test — runs once on mount, visible in DevTools console
  useEffect(() => {
    if (!supabaseConfigured) {
      console.error("[Supabase] Skipping connection test — env vars not configured.");
      return;
    }
    console.log("[Supabase] Running connection test against 'applications' table…");
    supabase
      .from("applications")
      .select("id")
      .limit(0)
      .then(({ error }) => {
        if (error) {
          console.error("[Supabase] Connection test FAILED:", {
            code: error.code,
            message: error.message,
            details: error.details,
            hint: error.hint,
          });
        } else {
          console.log("[Supabase] Connection test PASSED — table is reachable.");
        }
      });
  }, []);

  function set(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  function onChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    set(e.target.name as keyof FormData, e.target.value);
  }

  function validate(): Errors {
    const e: Errors = {};
    for (const field of REQUIRED) {
      if (!form[field].trim()) e[field] = "This field is required.";
    }
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Please enter a valid email address.";
    }
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      setTimeout(() => {
        document
          .querySelector("[data-has-error='true']")
          ?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 50);
      return;
    }

    if (!supabaseConfigured) {
      setServerError(
        "Supabase is not configured. NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY " +
        "is missing — restart the dev server after adding them to .env.local."
      );
      return;
    }

    setLoading(true);
    setServerError(null);

    const payload = {
      ...form,
      physical_limitations: form.physical_limitations || null,
      dietary_restrictions: form.dietary_restrictions || null,
      anything_else: form.anything_else || null,
    };

    console.log("[Submit] Sending payload:", payload);
    console.log("[Submit] Payload keys:", Object.keys(payload));

    const { data: insertedRows, error: sbErr } = await supabase
      .from("applications")
      .insert(payload)
      .select();

    console.log("[Submit] Response data:", insertedRows);
    console.log("[Submit] Response error:", sbErr);

    if (sbErr) {
      console.error("[Submit] Error code:", sbErr.code);
      console.error("[Submit] Error message:", sbErr.message);
      console.error("[Submit] Error details:", sbErr.details);
      console.error("[Submit] Error hint:", sbErr.hint);
      setServerError(
        `Submission failed: ${sbErr.message}${sbErr.hint ? ` — ${sbErr.hint}` : ""}`
      );
      setLoading(false);
      return;
    }

    setSubmitted(true);
    setLoading(false);
  }

  /* ── Success state ─────────────────────────────────────────────── */

  if (submitted) {
    return (
      <div className="border-l-2 border-[#c4813d] pl-8 py-4 max-w-xl">
        <h3 className="font-display text-3xl text-foreground mb-5">
          Your application has been received.
        </h3>
        <p className="text-foreground/55 font-sans text-base leading-relaxed">
          We will review it personally and be in touch within 5 business days.
        </p>
      </div>
    );
  }

  /* ── Form ──────────────────────────────────────────────────────── */

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-12">

      {/* 01 — The Basics */}
      <fieldset className="border-0 p-0 m-0">
        <SectionHeader n="01" title="The Basics" />
        <div className="flex flex-col gap-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div data-has-error={errors.full_name ? "true" : undefined}>
              <label className={labelCls}>Full Name *</label>
              <input name="full_name" value={form.full_name} onChange={onChange}
                className={inputCls} placeholder="John Muir" />
              {errors.full_name && <p className={errCls}>{errors.full_name}</p>}
            </div>
            <div data-has-error={errors.age ? "true" : undefined}>
              <label className={labelCls}>Age *</label>
              <input name="age" value={form.age} onChange={onChange}
                className={inputCls} placeholder="34" />
              {errors.age && <p className={errCls}>{errors.age}</p>}
            </div>
          </div>

          <div data-has-error={errors.city_state ? "true" : undefined}>
            <label className={labelCls}>City & State *</label>
            <input name="city_state" value={form.city_state} onChange={onChange}
              className={inputCls} placeholder="Denver, CO" />
            {errors.city_state && <p className={errCls}>{errors.city_state}</p>}
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div data-has-error={errors.email ? "true" : undefined}>
              <label className={labelCls}>Email *</label>
              <input name="email" type="email" value={form.email} onChange={onChange}
                className={inputCls} placeholder="john@example.com" />
              {errors.email && <p className={errCls}>{errors.email}</p>}
            </div>
            <div data-has-error={errors.phone ? "true" : undefined}>
              <label className={labelCls}>Phone *</label>
              <input name="phone" type="tel" value={form.phone} onChange={onChange}
                className={inputCls} placeholder="+1 (555) 000-0000" />
              {errors.phone && <p className={errCls}>{errors.phone}</p>}
            </div>
          </div>

          <div data-has-error={errors.heard_about_us ? "true" : undefined}>
            <label className={labelCls}>How did you hear about this trip? *</label>
            <input name="heard_about_us" value={form.heard_about_us} onChange={onChange}
              className={inputCls} placeholder="A friend, Instagram, podcast…" />
            {errors.heard_about_us && <p className={errCls}>{errors.heard_about_us}</p>}
          </div>
        </div>
      </fieldset>

      {/* 02 — Physical Readiness */}
      <fieldset className="border-0 p-0 m-0">
        <SectionHeader n="02" title="Physical Readiness" />
        <div className="flex flex-col gap-6">
          <div data-has-error={errors.fitness_level ? "true" : undefined}>
            <label className={labelCls}>Current fitness level and activity habits *</label>
            <textarea name="fitness_level" value={form.fitness_level} onChange={onChange}
              rows={3} className={textareaCls}
              placeholder="How often you train, what activities, your current shape…" />
            {errors.fitness_level && <p className={errCls}>{errors.fitness_level}</p>}
          </div>

          <div data-has-error={errors.backpacking_experience ? "true" : undefined}>
            <label className={labelCls}>Backpacking experience *</label>
            <textarea name="backpacking_experience" value={form.backpacking_experience} onChange={onChange}
              rows={3} className={textareaCls}
              placeholder="Trips completed, terrain types, longest multi-day you've done…" />
            {errors.backpacking_experience && <p className={errCls}>{errors.backpacking_experience}</p>}
          </div>

          <div data-has-error={errors.mileage_comfortable ? "true" : undefined}>
            <label className={labelCls}>
              Are you comfortable covering 8–12 miles per day on canyon terrain? *
            </label>
            <ToggleGroup
              value={form.mileage_comfortable}
              options={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
              ]}
              onChange={(v) => set("mileage_comfortable", v)}
              error={errors.mileage_comfortable}
            />
          </div>

          <div>
            <label className={labelCls}>Physical limitations or health conditions {optionalNote}</label>
            <textarea name="physical_limitations" value={form.physical_limitations} onChange={onChange}
              rows={2} className={textareaCls}
              placeholder="Injuries, conditions, medications — anything we should be aware of…" />
          </div>
        </div>
      </fieldset>

      {/* 03 — Why You're Here */}
      <fieldset className="border-0 p-0 m-0">
        <SectionHeader n="03" title="Why You're Here" />
        <div className="flex flex-col gap-6">
          <div data-has-error={errors.what_drew_you ? "true" : undefined}>
            <label className={labelCls}>What drew you to this trip? *</label>
            <textarea name="what_drew_you" value={form.what_drew_you} onChange={onChange}
              rows={4} className={textareaCls}
              placeholder="What called you here…" />
            {errors.what_drew_you && <p className={errCls}>{errors.what_drew_you}</p>}
          </div>

          <div data-has-error={errors.hoping_to_gain ? "true" : undefined}>
            <label className={labelCls}>What are you hoping to walk away with? *</label>
            <textarea name="hoping_to_gain" value={form.hoping_to_gain} onChange={onChange}
              rows={4} className={textareaCls}
              placeholder="What would make this week meaningful for you…" />
            {errors.hoping_to_gain && <p className={errCls}>{errors.hoping_to_gain}</p>}
          </div>

          <div data-has-error={errors.life_connection ? "true" : undefined}>
            <label className={labelCls}>
              Is there something in your life right now connected to why you said yes? *
            </label>
            <textarea name="life_connection" value={form.life_connection} onChange={onChange}
              rows={4} className={textareaCls}
              placeholder="A season, a transition, something you're working through or toward…" />
            {errors.life_connection && <p className={errCls}>{errors.life_connection}</p>}
          </div>
        </div>
      </fieldset>

      {/* 04 — Who You Are */}
      <fieldset className="border-0 p-0 m-0">
        <SectionHeader n="04" title="Who You Are" />
        <div className="flex flex-col gap-6">
          <div data-has-error={errors.how_others_describe ? "true" : undefined}>
            <label className={labelCls}>How would the people closest to you describe you? *</label>
            <textarea name="how_others_describe" value={form.how_others_describe} onChange={onChange}
              rows={3} className={textareaCls}
              placeholder="Be honest — the good and the complicated…" />
            {errors.how_others_describe && <p className={errCls}>{errors.how_others_describe}</p>}
          </div>

          <div data-has-error={errors.brotherhood_meaning ? "true" : undefined}>
            <label className={labelCls}>
              What does brotherhood mean to you — and do you have it in your life? *
            </label>
            <textarea name="brotherhood_meaning" value={form.brotherhood_meaning} onChange={onChange}
              rows={4} className={textareaCls}
              placeholder="What it looks like, where you find it, where it falls short…" />
            {errors.brotherhood_meaning && <p className={errCls}>{errors.brotherhood_meaning}</p>}
          </div>

          <div data-has-error={errors.rite_of_passage ? "true" : undefined}>
            <label className={labelCls}>Have you had a rite of passage that changed you? *</label>
            <textarea name="rite_of_passage" value={form.rite_of_passage} onChange={onChange}
              rows={4} className={textareaCls}
              placeholder="A moment, an experience, a threshold you crossed…" />
            {errors.rite_of_passage && <p className={errCls}>{errors.rite_of_passage}</p>}
          </div>

          <div data-has-error={errors.what_you_bring ? "true" : undefined}>
            <label className={labelCls}>
              What do you bring to a group — and what do you struggle with? *
            </label>
            <textarea name="what_you_bring" value={form.what_you_bring} onChange={onChange}
              rows={4} className={textareaCls}
              placeholder="Your gifts and your edges…" />
            {errors.what_you_bring && <p className={errCls}>{errors.what_you_bring}</p>}
          </div>
        </div>
      </fieldset>

      {/* 05 — Logistics */}
      <fieldset className="border-0 p-0 m-0">
        <SectionHeader n="05" title="Logistics" />
        <div className="flex flex-col gap-6">
          <div data-has-error={errors.has_gear ? "true" : undefined}>
            <label className={labelCls}>Do you have your own backpacking gear? *</label>
            <ToggleGroup
              value={form.has_gear}
              options={[
                { value: "yes", label: "Yes — fully equipped" },
                { value: "partial", label: "Partial" },
                { value: "no", label: "No" },
              ]}
              onChange={(v) => set("has_gear", v)}
              error={errors.has_gear}
            />
          </div>

          <div data-has-error={errors.transportation ? "true" : undefined}>
            <label className={labelCls}>Transportation situation *</label>
            <textarea name="transportation" value={form.transportation} onChange={onChange}
              rows={2} className={textareaCls}
              placeholder="Flying in, driving from home, need to coordinate from a hub city…" />
            {errors.transportation && <p className={errCls}>{errors.transportation}</p>}
          </div>

          <div>
            <label className={labelCls}>Dietary restrictions {optionalNote}</label>
            <input name="dietary_restrictions" value={form.dietary_restrictions} onChange={onChange}
              className={inputCls} placeholder="Allergies, preferences, anything to note…" />
          </div>

          <div data-has-error={errors.investment_tier ? "true" : undefined}>
            <label className={labelCls}>Investment tier *</label>
            <p className="text-foreground/28 font-sans text-xs mb-4 leading-relaxed">
              Choose the tier that fits your situation. Community spots are limited
              and reviewed on a case-by-case basis.
            </p>
            <TierCards
              value={form.investment_tier}
              onChange={(v) => set("investment_tier", v)}
              error={errors.investment_tier}
            />
          </div>
        </div>
      </fieldset>

      {/* 06 — Anything Else */}
      <fieldset className="border-0 p-0 m-0">
        <SectionHeader n="06" title="Anything Else" />
        <div>
          <label className={labelCls}>Anything else you want us to know {optionalNote}</label>
          <textarea name="anything_else" value={form.anything_else} onChange={onChange}
            rows={4} className={textareaCls}
            placeholder="Open floor — say whatever feels important…" />
        </div>
      </fieldset>

      {/* Submit */}
      {serverError && (
        <p className="border border-red-400/20 text-red-400/65 font-sans text-sm px-4 py-3 leading-relaxed">
          {serverError}
        </p>
      )}

      <div className="flex flex-col gap-3 pt-2">
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#c4813d] hover:bg-[#d4924e] disabled:opacity-50 disabled:cursor-not-allowed text-[#0d0905] font-sans font-semibold text-sm tracking-[0.15em] uppercase px-8 py-5 transition-all duration-300 flex items-center justify-center gap-3"
        >
          {loading ? "Submitting…" : "Submit Application"}
          {!loading && <span className="text-base">→</span>}
        </button>
        <p className="text-foreground/20 font-sans text-xs text-center leading-relaxed">
          No deposit required to apply. We review every submission personally.
        </p>
      </div>
    </form>
  );
}
