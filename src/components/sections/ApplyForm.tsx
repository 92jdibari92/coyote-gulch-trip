"use client";

import { useState } from "react";

const fieldClass =
  "w-full bg-card border border-border text-foreground placeholder:text-muted-foreground " +
  "rounded-none px-4 h-12 text-sm font-sans outline-none transition-colors " +
  "focus:border-primary focus:ring-1 focus:ring-primary/50";

export default function ApplyForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    why: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="apply"
      className="relative py-32 md:py-48 px-8 md:px-16 lg:px-24 border-t border-border overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(140, 70, 12, 0.14) 0%, transparent 65%), " +
          "hsl(28, 28%, 4%)",
      }}
    >
      <div className="max-w-[90rem] mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-start">
        {/* Left — copy */}
        <div className="md:sticky md:top-16">
          <p className="text-[#c4813d] text-[0.65rem] tracking-[0.35em] uppercase font-sans mb-6">
            Apply
          </p>
          <h2 className="font-display text-[clamp(2.5rem,5.5vw,5rem)] leading-[0.95] text-foreground mb-8">
            Eight Spots.<br />
            One Trip.<br />
            <em className="italic text-foreground/40">No Waitlist.</em>
          </h2>
          <p className="text-muted-foreground font-sans text-lg leading-relaxed mb-6 max-w-md">
            Tell us a little about yourself and why you want to go. We review
            every application personally and follow up within five days.
          </p>
          <p className="text-foreground/30 font-sans text-sm leading-relaxed max-w-sm">
            November 1–8, 2026 &nbsp;·&nbsp; Grand Staircase–Escalante, Utah
            <br />
            Applications close October 1st or when spots fill.
          </p>
        </div>

        {/* Right — form */}
        {submitted ? (
          <div className="flex flex-col justify-center py-16">
            <div className="border-l-2 border-[#c4813d] pl-8">
              <h3 className="font-display text-3xl text-foreground mb-4">
                We&apos;ve got your application.
              </h3>
              <p className="text-muted-foreground font-sans text-base leading-relaxed">
                Thanks, {form.name.split(" ")[0]}. We&apos;ll review it and
                reach out to{" "}
                <span className="text-foreground/80">{form.email}</span> within
                five days.
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-muted-foreground text-xs tracking-[0.2em] uppercase font-sans">
                  Full Name *
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="John Muir"
                  className={fieldClass}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-muted-foreground text-xs tracking-[0.2em] uppercase font-sans">
                  Email *
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className={fieldClass}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-muted-foreground text-xs tracking-[0.2em] uppercase font-sans">
                Phone{" "}
                <span className="normal-case tracking-normal opacity-40">
                  — optional
                </span>
              </label>
              <input
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
                className={fieldClass}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-muted-foreground text-xs tracking-[0.2em] uppercase font-sans">
                Why do you want to go? *
              </label>
              <textarea
                name="why"
                value={form.why}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell us about your backcountry experience, what draws you to this trip, and anything else we should know."
                className={
                  fieldClass.replace("h-12", "py-3 h-auto") + " resize-none"
                }
              />
            </div>

            <button
              type="submit"
              className="mt-2 w-full bg-[#c4813d] hover:bg-[#d4924e] text-[#0d0905] font-sans font-semibold text-sm tracking-[0.15em] uppercase px-8 py-4 transition-all duration-300 flex items-center justify-center gap-3"
            >
              Submit Application
              <span className="text-base">→</span>
            </button>

            <p className="text-foreground/25 font-sans text-xs text-center leading-relaxed">
              No deposit required to apply. We&apos;ll be in touch within 5
              business days.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
