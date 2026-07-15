import type { Metadata } from "next";
import Image from "next/image";
import PartnershipNav from "@/components/PartnershipNav";
import PartnershipInquiryForm from "@/components/PartnershipInquiryForm";

export const metadata: Metadata = {
  title: "Partnership Proposal | Trails of Transformation",
  description:
    "A proposal for addiction treatment centers seeking to expand their continuum of care through nature-based, community-driven wilderness experiences for men.",
};

/* ─── Data ──────────────────────────────────────────────────────── */

const PILLARS = [
  {
    n: "01",
    title: "Nature Immersion",
    body: "Carrying only what you need. Moving through landscape that is indifferent to your history and honest about what you are made of. The wilderness has a way of stripping away performance and revealing what is true.",
  },
  {
    n: "02",
    title: "Vulnerable Brotherhood",
    body: "Small groups of 6 to 8 men, guided intentionally through shared challenge and shared presence. Being witnessed in your struggle — and witnessing others in theirs — builds a quality of trust and connection that transforms how men understand themselves and each other.",
  },
  {
    n: "03",
    title: "Inner Wilderness Exploration",
    body: "The external journey mirrors the internal one. As men navigate terrain, they navigate themselves. Facilitated reflection, honest conversation around the fire, and intentional silence create space for insight, grief, and breakthrough.",
  },
  {
    n: "04",
    title: "Embodied Healing",
    body: "Physical challenge, time in nature, and the absence of digital distraction recalibrate the nervous system in ways that extend long beyond the trip itself. Men return different — not because something was added, but because something was remembered.",
  },
];

const RESEARCH = [
  "Studies published in Proceedings of the National Academy of Sciences show that time in nature significantly reduces rumination — the repetitive negative thought patterns strongly linked to depression and addiction.",
  "A 2019 study found that spending at least 120 minutes per week in nature is associated with significantly better health and wellbeing outcomes.",
  "Adventure therapy has demonstrated meaningful reductions in substance use, improved self-efficacy, and stronger social connection in men in recovery.",
  "The Journal of Substance Abuse Treatment has documented that peer connection and shared challenge are among the strongest predictors of sustained sobriety.",
];

const FORMATS = [
  {
    title: "Day Expeditions",
    body: "1-day nature immersion experiences for early-stage clients.",
  },
  {
    title: "Multi-Day Backpacking",
    body: "3 to 5 day backcountry experiences for those further in recovery.",
  },
  {
    title: "Full Expeditions",
    body: "7-day immersive wilderness journeys for men ready for deep transformation.",
  },
];

const RECEIVES = [
  "A differentiated research-backed experiential offering for your clients.",
  "Documented pre and post-trip wellbeing assessments.",
  "A deepened continuum of care that extends beyond your walls.",
  "Community visibility as an organization that invests in whole-person healing.",
  "An ongoing partnership — not a one-time program.",
];

/* ─── Page ──────────────────────────────────────────────────────── */

export default function PartnershipPage() {
  return (
    <main className="min-h-screen bg-background">
      <PartnershipNav />

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section
        className="relative flex flex-col items-center justify-center min-h-screen px-8 md:px-16 lg:px-24 pt-20 pb-20 overflow-hidden"
      >
        {/* Background photo */}
        <Image
          src="/fire.JPG"
          alt="Campfire in the canyon at night"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Dark overlay — keeps text readable while the fire and men stay visible */}
        <div className="absolute inset-0 bg-[#0d0a07]/65" />

        {/* Warm amber vignette to match site aesthetic */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(120, 55, 8, 0.18) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
          <p className="text-[#c4813d] text-[0.65rem] tracking-[0.4em] uppercase font-sans mb-8">
            A Partnership Proposal &nbsp;·&nbsp; Trails of Transformation
          </p>
          <h1 className="font-display text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.98] text-foreground mb-8">
            Where the Wild Meets<br />the Work of Healing.
          </h1>
          <p className="font-sans text-[clamp(1rem,2vw,1.25rem)] text-foreground/55 max-w-2xl leading-relaxed">
            A proposal for addiction treatment centers seeking to expand their
            continuum of care through nature-based, community-driven wilderness
            experiences for men.
          </p>
        </div>

        <div className="absolute z-10 bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <div className="h-10 w-px bg-gradient-to-b from-[#c4813d]/40 to-transparent" />
        </div>
      </section>

      {/* ── The Problem We Share ────────────────────────────────── */}
      <section id="the-problem" className="border-t border-border py-24 md:py-36 px-8 md:px-16 lg:px-24">
        <div className="max-w-[52rem] mx-auto">
          <p className="text-[#c4813d] text-[0.65rem] tracking-[0.35em] uppercase font-sans mb-6">
            The Problem We Share
          </p>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] text-foreground mb-10">
            Recovery does not happen in isolation.
          </h2>
          <div className="flex flex-col gap-6 text-foreground/60 font-sans text-base md:text-lg leading-relaxed">
            <p>
              And it does not happen in a conference room. Men struggling with
              addiction and mental illness are often fighting battles that go
              far deeper than substance use — battles with identity, belonging,
              self-worth, disconnection, and a profound sense of being unseen.
            </p>
            <p>
              Traditional treatment models address the clinical. But the soul
              needs something different. Research consistently shows that
              nature immersion reduces cortisol, lowers anxiety, improves mood
              regulation, and activates the parasympathetic nervous system —
              the very system that addiction suppresses.
            </p>
            <p className="text-foreground/75">
              Time in wild places does not replace clinical treatment. It
              deepens it. It reaches the parts that talk therapy alone cannot.
            </p>
          </div>
        </div>
      </section>

      {/* ── What We Offer ───────────────────────────────────────── */}
      <section id="what-we-offer" className="bg-[oklch(0.095_0.013_57)] border-t border-border py-24 md:py-36">
        <div className="px-8 md:px-16 lg:px-24 max-w-[90rem] mx-auto">
          <div className="max-w-[52rem] mb-16 md:mb-20">
            <p className="text-[#c4813d] text-[0.65rem] tracking-[0.35em] uppercase font-sans mb-6">
              What We Offer
            </p>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] text-foreground mb-8">
              Four Pillars of the Work.
            </h2>
            <p className="text-foreground/55 font-sans text-base md:text-lg leading-relaxed">
              Trails of Transformation leads small, intentional men&apos;s
              backpacking expeditions into some of the most remote and
              breathtaking wilderness in the American Southwest. These are not
              recreational trips. They are structured experiences built around
              four pillars.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-px bg-border">
            {PILLARS.map((p) => (
              <div
                key={p.n}
                className="bg-[oklch(0.095_0.013_57)] hover:bg-[oklch(0.12_0.016_57)] transition-colors duration-300 p-8 md:p-10 flex flex-col gap-4"
              >
                <span className="font-mono text-[#c4813d]/40 text-xs">{p.n}</span>
                <h3 className="font-display text-xl md:text-2xl text-foreground leading-snug">
                  {p.title}
                </h3>
                <p className="text-foreground/45 font-sans text-sm leading-relaxed">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Research ────────────────────────────────────────── */}
      <section id="research" className="border-t border-border py-24 md:py-36 px-8 md:px-16 lg:px-24">
        <div className="max-w-[64rem] mx-auto">
          <p className="text-[#c4813d] text-[0.65rem] tracking-[0.35em] uppercase font-sans mb-6">
            The Research
          </p>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] text-foreground mb-16">
            The Evidence Behind the Trail.
          </h2>

          <div className="grid md:grid-cols-2 gap-x-10 gap-y-10 mb-16">
            {RESEARCH.map((r) => (
              <blockquote key={r} className="border-l-2 border-[#c4813d]/50 pl-6 md:pl-8 py-1">
                <p className="text-foreground/65 font-sans text-base leading-relaxed">{r}</p>
              </blockquote>
            ))}
          </div>

          <p className="font-display italic text-xl md:text-2xl text-foreground/55 leading-snug max-w-3xl">
            Nature is not a supplement to recovery. For many men, it is the
            threshold through which recovery becomes possible.
          </p>
        </div>
      </section>

      {/* ── Who We Are ──────────────────────────────────────────── */}
      <section id="who-we-are" className="bg-[oklch(0.095_0.013_57)] border-t border-border py-24 md:py-36 px-8 md:px-16 lg:px-24">
        <div className="max-w-[64rem] mx-auto">
          <p className="text-[#c4813d] text-[0.65rem] tracking-[0.35em] uppercase font-sans mb-6">
            Who We Are
          </p>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] text-foreground mb-16">
            Founded on a Personal Threshold.
          </h2>

          <div className="grid md:grid-cols-[auto,1fr] gap-10 md:gap-14 items-start">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border border-[#c4813d]/30 bg-[oklch(0.12_0.016_57)] shrink-0 mx-auto md:mx-0 flex items-center justify-center">
              <span className="font-display text-5xl text-[#c4813d]/40">JTD</span>
            </div>

            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-6 text-foreground/60 font-sans text-base md:text-lg leading-relaxed">
                <p>
                  Trails of Transformation was founded by John Thomas di
                  Bari — an Austin native who grew up swimming in Barton
                  Springs and running barefoot through the Greenbelt. His
                  relationship with wild places began early and deepened
                  through solo backpacking through Eastern Europe, motorbike
                  travel across Southeast Asia, and years of returning to
                  America&apos;s National Parks with the men closest to him.
                </p>
                <p>
                  What he found in those wild places was not just adventure —
                  it was a way back to himself. To clarity. To the voice of
                  his own soul. And to a God whose presence he experienced
                  most profoundly not in buildings, but in creation. That
                  personal transformation became a calling: to create the
                  conditions where other men could find what he found.
                </p>
              </div>

              <blockquote className="border-l-2 border-[#c4813d] pl-6 md:pl-8 py-2">
                <p className="font-display italic text-xl md:text-2xl text-foreground/75 leading-snug mb-4">
                  &ldquo;The wilderness does not fix you. It shows you that
                  you were never broken — only lost. And it gives you the
                  landscape to find your way back.&rdquo;
                </p>
                <cite className="not-italic text-foreground/35 font-sans text-xs tracking-[0.2em] uppercase">
                  — John Thomas di Bari
                </cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ── Partnership Model ───────────────────────────────────── */}
      <section id="partnership-model" className="border-t border-border py-24 md:py-36 px-8 md:px-16 lg:px-24">
        <div className="max-w-[90rem] mx-auto">
          <div className="max-w-[52rem] mb-16">
            <p className="text-[#c4813d] text-[0.65rem] tracking-[0.35em] uppercase font-sans mb-6">
              Partnership Model
            </p>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] text-foreground mb-8">
              Built to Fit Your Continuum of Care.
            </h2>
            <p className="text-foreground/55 font-sans text-base md:text-lg leading-relaxed">
              We are seeking treatment centers willing to invest in their
              clients&apos; healing beyond the clinical setting.
            </p>
          </div>

          {/* Trip formats */}
          <div className="grid md:grid-cols-3 gap-px bg-border mb-20">
            {FORMATS.map((f) => (
              <div
                key={f.title}
                className="bg-[hsl(28,20%,5%)] flex flex-col gap-3 p-8 md:p-10"
              >
                <h3 className="font-display text-xl md:text-2xl text-foreground leading-tight">
                  {f.title}
                </h3>
                <p className="text-foreground/50 font-sans text-sm leading-relaxed">
                  {f.body}
                </p>
              </div>
            ))}
          </div>

          {/* What organizations receive */}
          <div className="max-w-[42rem]">
            <p className="text-[#c4813d] text-[0.65rem] tracking-[0.35em] uppercase font-sans mb-7">
              What Your Organization Receives
            </p>
            <ul className="flex flex-col gap-5">
              {RECEIVES.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="shrink-0 mt-1 text-[#c4813d]/70 font-sans text-sm leading-none">
                    ✓
                  </span>
                  <span className="text-foreground/65 font-sans text-base leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Who This Is For ─────────────────────────────────────── */}
      <section
        id="who-this-is-for"
        className="relative border-t border-border py-24 md:py-40 px-8 md:px-16 lg:px-24 overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(140, 70, 12, 0.14) 0%, transparent 65%), " +
            "hsl(28, 28%, 4%)",
        }}
      >
        <div className="max-w-[52rem] mx-auto flex flex-col gap-8 text-center">
          <p className="font-display italic text-[clamp(1.5rem,3.5vw,2.5rem)] text-foreground/80 leading-[1.3]">
            The men we take into the wilderness are not looking for a
            vacation. They are looking for a reason to believe in themselves
            again.
          </p>
          <p className="font-display italic text-[clamp(1.5rem,3.5vw,2.5rem)] text-foreground/80 leading-[1.3]">
            They are looking to be seen — not as their diagnosis, not as
            their history — but as men with gifts, with depth, with something
            worth fighting for.
          </p>
          <p className="font-display italic text-[clamp(1.5rem,3.5vw,2.5rem)] text-foreground/80 leading-[1.3]">
            This is for the man who has tried everything and still feels like
            something essential is missing. Whose healing has happened in
            rooms, and now needs to happen in the open air. Whose brotherhood
            has been broken, and who is ready — cautiously, honestly — to
            trust again.
          </p>
          <p className="font-display italic text-[clamp(1.5rem,3.5vw,2.5rem)] text-[#c4813d]/85 leading-[1.3]">
            We believe every man deserves that chance.
          </p>
        </div>
      </section>

      {/* ── Contact Form ────────────────────────────────────────── */}
      <section
        id="contact"
        className="relative border-t border-border py-24 md:py-36 px-8 md:px-16 lg:px-24 overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(140, 70, 12, 0.12) 0%, transparent 65%), " +
            "hsl(28, 28%, 4%)",
        }}
      >
        <div className="max-w-[52rem] mx-auto">
          <div className="mb-14">
            <p className="text-[#c4813d] text-[0.65rem] tracking-[0.35em] uppercase font-sans mb-5">
              Contact
            </p>
            <h2 className="font-display text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.0] text-foreground mb-6">
              Let&apos;s Build Something<br />Together.
            </h2>
            <p className="text-foreground/45 font-sans text-base leading-relaxed max-w-lg">
              We are actively seeking 2 to 3 founding partner organizations in
              the Austin area to help shape what this program becomes.
              Founding partners will have direct input into program design,
              scheduling, and assessment frameworks.
            </p>
          </div>

          <PartnershipInquiryForm />
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────── */}
      <footer className="border-t border-border py-14 px-8 md:px-16">
        <div className="max-w-[90rem] mx-auto flex flex-col items-center gap-4">
          <Image
            src="/Trails logo.PNG"
            alt="Trails"
            width={160}
            height={44}
            className="h-10 w-auto object-contain opacity-70"
          />
          <span className="font-display text-base text-foreground/35 leading-none">
            Trails of Transformation
          </span>
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
            <span className="text-foreground/25 font-sans text-xs tracking-[0.2em] uppercase">
              Coyote Gulch Expedition &nbsp;·&nbsp; 2026
            </span>
            <span className="hidden sm:block text-foreground/15 text-xs">·</span>
            <span className="text-foreground/20 font-sans text-xs">
              Grand Staircase–Escalante National Monument, Utah
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
