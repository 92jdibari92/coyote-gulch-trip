import type { Metadata } from "next";
import Image from "next/image";
import HolyWalksNav from "@/components/HolyWalksNav";
import HolyWalksRSVPForm from "@/components/HolyWalksRSVPForm";

export const metadata: Metadata = {
  title: "Sunday Holy Walks | Trails of Transformation",
  description:
    "A free, weekly community nature walk in Austin and the Hill Country. Every Sunday evening, capped at six people. Hosted by John Thomas di Bari of Trails of Transformation.",
};

// ─── The Mosaic ──────────────────────────────────────────────────
// To edit: add, remove, or reorder photos here — that's it. Every
// photo is shown in full (object-contain, nothing cropped off), and
// the grid is sized to the list length so there's never empty space:
// 2 columns on mobile, 5 on desktop. Keep the count a multiple of 2
// (any even number works cleanly — 8, 10, 12…). Drop a new image in
// public/holy-walks/ and add a line below to use it.
const MOSAIC = [
  { src: "/holy-walks/holy-walks-trail.jpg", alt: "A dirt trail curving through green Hill Country brush in spring light" },
  { src: "/holy-walks/holy-walks-jt-daughter.jpg", alt: "John Thomas carrying his daughter on a trail, dog running ahead" },
  { src: "/holy-walks/holy-walks-owl.jpg", alt: "An owl perched in the crossing branches of a bare winter tree" },
  { src: "/holy-walks/holy-walks-hawks.jpg", alt: "Two hawks circling above a bare winter tree against a blue sky" },
  { src: "/holy-walks/holy-walks-herbs.jpg", alt: "A hand holding a freshly cut bundle of rosemary against the sky" },
  { src: "/holy-walks/holy-walks-feather.jpg", alt: "A hand holding a striped feather up against the forest" },
  { src: "/holy-walks/holy-walks-nest.jpg", alt: "An empty bird's nest resting in bare branches" },
  { src: "/holy-walks/holy-walks-wildonion.jpg", alt: "A hand holding wild onion pulled from the trailside" },
  { src: "/holy-walks/holy-walks-reach.jpg", alt: "A hand reaching up toward clouds breaking over a tree" },
  { src: "/holy-walks/holy-walks-clouds.jpg", alt: "Light breaking through clouds over Austin" },
];

const SHAPE = [
  { n: "01", title: "Every Sunday", body: "Early evening, rain or shine, warm or cold. The same hour, held open, week after week." },
  { n: "02", title: "Ninety Minutes", body: "Long enough to actually arrive. Short enough that it never becomes one more thing on the calendar." },
  { n: "03", title: "Austin & Around", body: "A different trail, creek, or greenbelt most weeks. The exact spot goes out to whoever has RSVP'd, by Friday." },
  { n: "04", title: "Capped at Six", body: "On purpose. Not a crowd — a circle that happens to be moving." },
];

export default function HolyWalksPage() {
  return (
    <main className="min-h-screen bg-background">
      <HolyWalksNav />

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative flex flex-col items-center justify-center min-h-[80vh] px-8 md:px-16 lg:px-24 pt-32 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 55% at 50% 0%, rgba(140, 70, 12, 0.16) 0%, transparent 65%)",
          }}
        />
        <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
          <p className="text-[#c4813d] text-[0.65rem] tracking-[0.4em] uppercase font-sans mb-8">
            Trails of Transformation &nbsp;·&nbsp; A Weekly Offering
          </p>
          <h1 className="font-display text-[clamp(3rem,8vw,6.5rem)] leading-[0.95] text-foreground mb-8">
            Sunday <em className="not-italic text-[#c4813d]">Holy</em> Walks
          </h1>
          <p className="font-sans text-[clamp(1rem,2vw,1.25rem)] text-foreground/60 max-w-2xl leading-relaxed mb-10">
            Every Sunday evening, a small group gathers in the hills and
            creeks around Austin — not to cover distance, but to walk slow
            enough to feel God in His creation, and tune into the frequency
            of our soul more clearly. No agenda. No phones out. Just the
            trail, the light going gold, and whoever is willing to be
            honest for ninety minutes.
          </p>
          <a
            href="#rsvp"
            className="inline-flex items-center gap-3 bg-[#c4813d] hover:bg-[#d4924e] text-[#0d0905] font-sans font-semibold text-sm tracking-[0.15em] uppercase px-8 py-4 transition-all duration-300 hover:gap-5"
          >
            RSVP for This Sunday
            <span className="text-base">→</span>
          </a>
          <p className="text-foreground/30 font-sans text-xs tracking-[0.15em] uppercase mt-6">
            Free &nbsp;·&nbsp; Capped at Six &nbsp;·&nbsp; Austin & the Hill Country
          </p>
        </div>
      </section>

      {/* ── Mosaic ───────────────────────────────────────────────── */}
      <section id="the-walk" className="border-t border-border">
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-1 bg-border">
          {MOSAIC.map((img) => (
            <div
              key={img.src}
              className="relative aspect-[3/4] overflow-hidden bg-[hsl(28,22%,6%)]"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 640px) 20vw, 50vw"
                className="object-contain object-center"
              />
            </div>
          ))}
        </div>
        <p className="bg-background text-center italic text-foreground/40 font-sans text-sm py-8 px-8 max-w-2xl mx-auto">
          A feather, let fall mid-flight. A nest, already emptied and left
          like a gift. The first wild onion breaking through last
          year&apos;s decay. The more-than-human world never stops
          speaking — these are only the words we were quiet enough to
          catch. Nothing here is staged. It&apos;s what the land offers,
          most weeks, to whoever slows down enough to receive it.
        </p>
      </section>

      {/* ── The Shape of It ─────────────────────────────────────── */}
      <section className="border-t border-border py-24 md:py-36 px-8 md:px-16 lg:px-24">
        <div className="max-w-[90rem] mx-auto">
          <div className="max-w-[40rem] mb-16">
            <p className="text-[#c4813d] text-[0.65rem] tracking-[0.35em] uppercase font-sans mb-6">
              The Shape of It
            </p>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] text-foreground">
              Simple, on purpose.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-px bg-border">
            {SHAPE.map((s) => (
              <div key={s.n} className="bg-background p-8 md:p-10 flex flex-col gap-3">
                <span className="font-mono text-[#c4813d]/40 text-xs">{s.n}</span>
                <h3 className="font-display text-xl text-foreground leading-snug">{s.title}</h3>
                <p className="text-foreground/50 font-sans text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Six ──────────────────────────────────────────────── */}
      <section
        id="why-six"
        className="relative border-t border-border py-24 md:py-40 px-8 md:px-16 lg:px-24 overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(140, 70, 12, 0.12) 0%, transparent 65%), hsl(28, 28%, 4%)",
        }}
      >
        <div className="relative z-10 max-w-[48rem] mx-auto">
          <p className="text-[#c4813d] text-[0.65rem] tracking-[0.35em] uppercase font-sans mb-6">
            Why Only Six
          </p>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] text-foreground mb-10">
            Small enough that nobody hides.
          </h2>
          <div className="flex flex-col gap-6 text-foreground/60 font-sans text-base md:text-lg leading-relaxed">
            <p>
              This isn&apos;t a hike and it isn&apos;t a class. It&apos;s a
              circle that happens to be moving. At six people, everyone gets
              seen. Everyone gets heard. Nobody has to perform to be noticed,
              and nobody gets to disappear into the back of a crowd either.
            </p>
            <p>
              That&apos;s the whole design. Not a growth metric — a
              container small enough to actually hold what happens inside
              it.
            </p>
            <p className="text-foreground/80">
              If that means we fill up before you RSVP, come back next
              Sunday. There&apos;s always another one.
            </p>
          </div>
        </div>
      </section>

      {/* ── A Door, Not a Program ───────────────────────────────── */}
      <section className="border-t border-border py-24 md:py-36 px-8 md:px-16 lg:px-24">
        <div className="max-w-[48rem] mx-auto text-center">
          <p className="text-[#c4813d] text-[0.65rem] tracking-[0.35em] uppercase font-sans mb-6">
            What This Leads To
          </p>
          <h2 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.1] text-foreground mb-8">
            The trail goes further still.
          </h2>
          <p className="text-foreground/55 font-sans text-base md:text-lg leading-relaxed mb-10">
            If what happens out there on a Sunday evening stirs something in
            you, Trails of Transformation runs deeper expeditions for
            people ready to go further into the wild, and further into
            themselves.
          </p>
          <a
            href="/upcoming-trips"
            className="inline-flex items-center gap-3 border border-[#c4813d]/40 hover:border-[#c4813d] hover:bg-[#c4813d]/10 text-foreground/80 hover:text-foreground font-sans text-sm tracking-[0.15em] uppercase px-8 py-4 transition-all duration-300"
          >
            See Upcoming Trips
          </a>
        </div>
      </section>

      {/* ── RSVP ─────────────────────────────────────────────────── */}
      <section
        id="rsvp"
        className="relative border-t border-border py-24 md:py-36 px-8 md:px-16 lg:px-24 overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(140, 70, 12, 0.12) 0%, transparent 65%), hsl(28, 28%, 4%)",
        }}
      >
        <div className="relative z-10 max-w-[40rem] mx-auto text-center">
          <p className="text-[#c4813d] text-[0.65rem] tracking-[0.35em] uppercase font-sans mb-5">
            RSVP
          </p>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.05] text-foreground mb-6">
            Join us this Sunday.
          </h2>
          <p className="text-foreground/50 font-sans text-base leading-relaxed max-w-md mx-auto mb-10">
            Free, always. Six spots, first come first served. We&apos;ll
            email the exact meeting point by Friday.
          </p>
          <HolyWalksRSVPForm />
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
              Sunday Holy Walks
            </span>
            <span className="hidden sm:block text-foreground/15 text-xs">·</span>
            <span className="text-foreground/20 font-sans text-xs">
              Austin, Texas & the Hill Country
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
