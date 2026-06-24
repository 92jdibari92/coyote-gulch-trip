import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      {/* Background photo */}
      <Image
        src="/hero.jpeg"
        alt="Coyote Gulch canyon landscape"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark cinematic overlay — preserves the earthy feel */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(8,6,4,0.97) 0%, rgba(8,6,4,0.72) 40%, rgba(8,6,4,0.30) 70%, rgba(8,6,4,0.18) 100%)",
        }}
      />

      {/* Warm amber vignette — top corners */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 70% 5%, rgba(140, 65, 10, 0.18) 0%, transparent 60%)",
        }}
      />

      {/* Grain texture */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
          backgroundSize: "200px 200px",
        }}
      />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c4813d]/30 to-transparent z-10" />

      {/* Nav strip */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-8 py-6 z-10">
        <span className="text-xs tracking-[0.3em] uppercase text-[#c4813d]/80 font-sans">
          Coyote Gulch Expedition
        </span>
        <a
          href="#apply"
          className="text-xs tracking-[0.25em] uppercase text-foreground/50 hover:text-[#c4813d] transition-colors duration-300 font-sans"
        >
          Apply Now
        </a>
      </div>

      {/* Main content — bottom-anchored */}
      <div className="relative z-10 px-8 md:px-16 lg:px-24 pb-20 md:pb-28 max-w-[90rem] w-full">
        <p className="text-[#c4813d] text-xs tracking-[0.35em] uppercase font-sans mb-8">
          November 1–8 &nbsp;·&nbsp; Grand Staircase–Escalante, Utah &nbsp;·&nbsp; Men&apos;s Expedition
        </p>

        <h1 className="font-display text-[clamp(3.5rem,10vw,9rem)] leading-[0.92] tracking-tight text-foreground mb-8">
          Into the<br />
          <em className="not-italic text-[#c4813d]">Deep</em>{" "}
          Canyon.
        </h1>

        <p className="font-sans text-[clamp(1rem,2vw,1.25rem)] text-foreground/60 max-w-2xl leading-relaxed mb-12">
          Forty miles through slot canyons, natural arches, and red rock wilderness.
          A week without signal, schedule, or pretense. Move together as a
          wild pack. See with your animal eyes and hear with your animal ears.
        </p>

        <a
          href="#apply"
          className="inline-flex items-center gap-3 bg-[#c4813d] hover:bg-[#d4924e] text-[#0d0905] font-sans font-semibold text-sm tracking-[0.15em] uppercase px-8 py-4 transition-all duration-300 hover:gap-5"
        >
          Apply Now
          <span className="text-base">→</span>
        </a>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 z-10">
        <div className="w-px h-12 bg-foreground/40 animate-pulse" />
      </div>
    </section>
  );
}
