"use client";

import { useState } from "react";

interface FormData {
  name: string;
  organization: string;
  title: string;
  email: string;
  phone: string;
  message: string;
}

const EMPTY: FormData = {
  name: "",
  organization: "",
  title: "",
  email: "",
  phone: "",
  message: "",
};

type Errors = Partial<Record<keyof FormData, string>>;

const REQUIRED: (keyof FormData)[] = ["name", "organization", "email", "message"];

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

export default function PartnershipInquiryForm() {
  const [form, setForm] = useState<FormData>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const field = e.target.name as keyof FormData;
    const value = e.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
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

    setLoading(true);
    setServerError(null);

    const payload = {
      name: form.name,
      organization: form.organization,
      title: form.title || null,
      email: form.email,
      phone: form.phone || null,
      message: form.message,
    };

    try {
      const res = await fetch("/api/partnership-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = await res.json();

      if (!res.ok) {
        setServerError(json.error ?? "Something went wrong — please try again.");
        setLoading(false);
        return;
      }
    } catch {
      setServerError("Network error — please check your connection and try again.");
      setLoading(false);
      return;
    }

    setSubmitted(true);
    setLoading(false);
  }

  if (submitted) {
    return (
      <div className="border-l-2 border-[#c4813d] pl-8 py-4 max-w-xl">
        <h3 className="font-display text-3xl text-foreground mb-5">Thank you.</h3>
        <p className="text-foreground/55 font-sans text-base leading-relaxed">
          We will be in touch within 3 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div data-has-error={errors.name ? "true" : undefined}>
          <label className={labelCls}>Name *</label>
          <input name="name" value={form.name} onChange={onChange}
            className={inputCls} placeholder="Jane Smith" />
          {errors.name && <p className={errCls}>{errors.name}</p>}
        </div>
        <div data-has-error={errors.organization ? "true" : undefined}>
          <label className={labelCls}>Organization *</label>
          <input name="organization" value={form.organization} onChange={onChange}
            className={inputCls} placeholder="Your treatment center" />
          {errors.organization && <p className={errCls}>{errors.organization}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className={labelCls}>Title {optionalNote}</label>
          <input name="title" value={form.title} onChange={onChange}
            className={inputCls} placeholder="Clinical Director" />
        </div>
        <div data-has-error={errors.email ? "true" : undefined}>
          <label className={labelCls}>Email *</label>
          <input name="email" type="email" value={form.email} onChange={onChange}
            className={inputCls} placeholder="jane@example.com" />
          {errors.email && <p className={errCls}>{errors.email}</p>}
        </div>
      </div>

      <div>
        <label className={labelCls}>Phone {optionalNote}</label>
        <input name="phone" type="tel" value={form.phone} onChange={onChange}
          className={inputCls} placeholder="+1 (555) 000-0000" />
      </div>

      <div data-has-error={errors.message ? "true" : undefined}>
        <label className={labelCls}>Tell us about your organization and the men you serve *</label>
        <textarea name="message" value={form.message} onChange={onChange}
          rows={5} className={textareaCls}
          placeholder="Who you serve, your current continuum of care, what you're hoping to explore…" />
        {errors.message && <p className={errCls}>{errors.message}</p>}
      </div>

      {serverError && (
        <p className="border border-red-400/20 text-red-400/65 font-sans text-sm px-4 py-3 leading-relaxed">
          {serverError}
        </p>
      )}

      <div className="flex flex-col gap-3 pt-2">
        <button
          type="submit"
          disabled={loading}
          className="w-full sm:w-auto self-start bg-[#c4813d] hover:bg-[#d4924e] disabled:opacity-50 disabled:cursor-not-allowed text-[#0d0905] font-sans font-semibold text-sm tracking-[0.15em] uppercase px-8 py-4 transition-all duration-300 flex items-center justify-center gap-3"
        >
          {loading ? "Sending…" : "Request a Conversation"}
          {!loading && <span className="text-base">→</span>}
        </button>
      </div>
    </form>
  );
}
