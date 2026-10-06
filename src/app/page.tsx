import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import MainNav from "@/components/MainNav";
import MeetTheGuides from "@/components/sections/MeetTheGuides";
import MissionBreak from "@/components/sections/MissionBreak";
import Podcast from "@/components/sections/Podcast";

export const metadata: Metadata = {
  title: "Trails of Transformation",
  description:
    "An outer wilderness for the inner one. Nature-based expeditions, a weekly community walk, and work with addiction and mental health care — led by John Thomas di Bari.",
};

/* ─── Data ────────────────────────────────────────── */

const PATHS = [
  {
    title: "Expeditions",
    body: "Multi-day wilderness trips — into places like Coyote Gulch, the Guadalupe Mountains, and Big Bend. Built around brotherhood, solitude, and the kind of challenge that strips away performance.",
    linkText: "See Upcoming Trips",
    href: "/upcoming-trips",
  },
  {
    title: "Sunday Holy Walks",
    body: "A free, weekly gathering in the hills and creeks around Austin. No pack required, no application — just ninety minutes to remember what you are.",
    linkText: "Join This Sunday",
    href: "/holy-walks",
  },
  {
    title: "Partnership Work",
    body: "For addiction treatment centers and mental health providers ready to extend their continuum of care into the wild.",
    linkText: "Learn About Partnership",
    href: "/partnership",
  },
];

/* ─── Page ────────────────────────────────────────── */

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <MainNav />

      {/* ── Hero ───────────────────────────────── */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-8 md:px-16 lg:px-24 pt-32 pb-20 overflow-hidden">
        {/* Background photo */}
        <Image
          src="/Canyon_Overlook.jpg"
          alt="A lone figure stands at the edge of a vast canyon overlook at golden hour"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Dark overlay — keeps text readable while the canyon stays visible */}
        <div className="absolute inset-0 bg-[#0d0a07]/50" />

        {/* Warm amber vignette to match site aesthetic */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(140, 70, 12, 0.22) 0%, transparent 65%)",
          }}
        />
        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
          <p className="text-[#c4813d] text-[0.65rem] tracking-[0.4em] uppercase font-sans mb-8">
            Trails of Transformation
          </p>
          <h1 className="font-display text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.98] text-foreground mb-8">
            An Outer Wilderness<br />for the Inner One.
          </h1>
          <p className="font-sans text-[clamp(1rem,2vw,1.25rem)] text-foreground/60 max-w-2xl leading-relaxed mb-10">
            Every leaf, every breeze, every ray of light is God, communicating
            through His creation. We lead people deep into the wild to find
            the stillness it takes to finally hear Him — and to remember a
            frequency within themselves they never actually lost.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/upcoming-trips"
              className="inline-flex items-center gap-3 bg-[#c4813d] hover:bg-[#d4924e] text-[#0d0905] font-sans font-semibold text-sm tracking-[0.15em] uppercase px-8 py-4 transition-all duration-300 hover:gap-5"
            >
              See Upcoming Trips
              <span className="text-base">→</span>
            </Link>
            <Link
              href="/holy-walks"
              className="inline-flex items-center gap-3 border border-[#c4813d]/40 hover:border-[#c4813d] text-foreground/70 hover:text-foreground font-sans font-semibold text-sm tracking-[0.15em] uppercase px-8 py-4 transition-all duration-300"
            >
              Join a Sunday Walk
            </Link>
          </div>
        </div>

        <div className="absolute z-10 bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <div className="h-10 w-px bg-gradient-to-b from-[#c4813d]/40 to-transparent" />
        </div>
      </section>

      {/* ── What We Believe ─────────────────────── */}
      <section id="mission" className="border-t border-border py-24 md:py-36 px-8 md:px-16 lg:px-24">
        <div className="max-w-[60rem] mx-auto">
          <p className="text-[#c4813d] text-[0.65rem] tracking-[0.35em] uppercase font-sans mb-6">
            What We Believe
          </p>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] text-foreground mb-12">
            A Threshold, Not a Hike.
          </h2>

          <div className="flex flex-col gap-8 text-foreground/60 font-sans text-base md:text-lg leading-relaxed">
            <p>
              We believe the wild is not scenery — it&apos;s communication.
              Every leaf, every breeze, every ray of light is God, speaking
              through what He made. Most of us move too fast and too loud to
              catch it. So we build in stillness: real silence, real
              solitude, real distance from a phone. That stillness is what
              makes room for a two-way conversation — the kind that
              reconnects a person to their North Star, their purpose, their
              Heavenly Father.
            </p>
            <p>
              We believe men need a place to feel everything, not just the
              acceptable parts. Anger, grief, tenderness, joy — the full
              range, without suppressing it, numbing it, or performing
              around it. Most men never had a model for that. So the
              wilderness becomes the model: a mirror that draws what&apos;s
              hidden up to the surface, held by a circle of men doing the
              same work, so a healthier way of being a husband, a father, a
              son, and a leader has somewhere to start.
            </p>
            <p>
              And we believe this calling doesn&apos;t stop at men&apos;s
              work. The same wilderness that reveals what&apos;s hidden in a
              man can meet addiction and mental illness just as directly —
              not by adding something new, but by helping a person root back
              into the regulated, natural frequency they were born with. It
              was never lost. Only forgotten.
            </p>
          </div>
        </div>
      </section>

      <MissionBreak />

      {/* ── This Is Personal ───────────────────── */}
      <section id="story" className="bg-[oklch(0.095_0.013_57)] border-t border-border py-24 md:py-36 px-8 md:px-16 lg:px-24">
        <div className="max-w-[70rem] mx-auto">
          <p className="text-[#c4813d] text-[0.65rem] tracking-[0.35em] uppercase font-sans mb-6">
            This Is Personal
          </p>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] text-foreground mb-12">
            This Is Personal.
          </h2>

          <div className="grid md:grid-cols-[400px,1fr] gap-10 md:gap-14 items-start">
            <div className="relative w-full max-w-[400px] h-[500px] rounded-lg overflow-hidden border border-[#c4813d]/20 mx-auto md:mx-0 shrink-0">
              <Image
                src="/Explore_Austin.jpg"
                alt="John Thomas di Bari leading young men in the wilderness through Explore Austin"
                fill
                sizes="(min-width: 768px) 400px, 100vw"
                className="object-cover object-top"
              />
            </div>

            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-6 text-foreground/60 font-sans text-base md:text-lg leading-relaxed">
                <p>
                  I know what it is to lose yourself before you ever get the
                  chance to find out who you were supposed to be.
                </p>
                <p>
                  In my early twenties, I was asked to leave UT for two
                  semesters. I lost my job. I was arrested. I woke up in a
                  hospital. What I couldn&apos;t see then was that beneath
                  the drinking was a young man who had no idea who he was,
                  what he felt, or how to say any of it out loud.
                </p>
                <p>
                  What began to change that wasn&apos;t someone fixing me.
                  It was backpacking — being in an environment that asked
                  something true of me, and gave me the space to finally
                  answer honestly.
                </p>
                <p>
                  For six years I took young men from underserved Austin
                  communities into the wilderness through Explore Austin,
                  from sixth grade through senior year. I watched boys who
                  had never been seen as leaders become exactly that — not
                  because anyone told them to, but because the wild held up
                  a mirror long enough for them to see it themselves.
                </p>
                <p>
                  That&apos;s what Trails of Transformation is built on. Not
                  a program. An answer to something I&apos;ve lived.
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

      <MeetTheGuides />

      <Podcast />

      {/* ── Three Ways In ───────────────────── */}
      <section id="paths" className="border-t border-border py-24 md:py-36 px-8 md:px-16 lg:px-24">
        <div className="max-w-[90rem] mx-auto">
          <div className="max-w-[52rem] mb-16">
            <p className="text-[#c4813d] text-[0.65rem] tracking-[0.35em] uppercase font-sans mb-6">
              Find Your Way
            </p>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] text-foreground mb-8">
              Not Every Threshold Looks the Same.
            </h2>
            <p className="text-foreground/55 font-sans text-base md:text-lg leading-relaxed">
              However you&apos;re meant to begin, there&apos;s a door open.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-border">
            {PATHS.map((p) => (
              <div
                key={p.title}
                className="bg-[hsl(28,20%,5%)] flex flex-col gap-5 p-8 md:p-10"
              >
                <h3 className="font-display text-xl md:text-2xl text-foreground leading-tight">
                  {p.title}
                </h3>
                <p className="text-foreground/50 font-sans text-sm leading-relaxed flex-1">
                  {p.body}
                </p>
                <Link
                  href={p.href}
                  className="inline-flex items-center gap-2 text-[#c4813d] hover:text-[#d4924e] font-sans text-xs tracking-[0.2em] uppercase transition-colors duration-150"
                >
                  {p.linkText}
                  <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────── */}
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
            <Link
              href="/upcoming-trips"
              className="text-foreground/25 hover:text-foreground/50 font-sans text-xs tracking-[0.2em] uppercase transition-colors duration-150"
            >
              Expeditions
            </Link>
            <span className="hidden sm:block text-foreground/15 text-xs">·</span>
            <Link
              href="/holy-walks"
              className="text-foreground/25 hover:text-foreground/50 font-sans text-xs tracking-[0.2em] uppercase transition-colors duration-150"
            >
              Sunday Holy Walks
            </Link>
            <span className="hidden sm:block text-foreground/15 text-xs">·</span>
            <Link
              href="/partnership"
              className="text-foreground/25 hover:text-foreground/50 font-sans text-xs tracking-[0.2em] uppercase transition-colors duration-150"
            >
              Partnership
            </Link>
          </div>
          <span className="text-foreground/15 font-sans text-xs mt-2">
            Austin, Texas
          </span>
        </div>
      </footer>
    </main>
  );
}
