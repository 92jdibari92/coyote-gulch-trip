const moments = [
  "Wade through narrows carved by ten million years of water and wind",
  "Stand beneath Jacob Hamblin Arch — one of the largest natural arches on earth",
  "Sleep under skies with zero light pollution, 2,000 miles from the nearest city glare",
  "Cross the Escalante River at the canyon's heart",
  "Navigate route-finding challenges that demand full presence",
  "Sit around a fire with men who chose to be there",
];

export default function Experience() {
  return (
    <section className="py-28 md:py-40 px-8 md:px-16 lg:px-24 max-w-[90rem] mx-auto">
      {/* Section header */}
      <div className="mb-20 md:mb-28">
        <p className="text-[#c4813d] text-[0.65rem] tracking-[0.35em] uppercase font-sans mb-6">
          The Experience
        </p>
        <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-end">
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1.0] text-foreground">
            Forty Miles<br />
            of Ancient<br />
            Stone.
          </h2>
          <div>
            <p className="text-foreground/60 text-lg leading-relaxed font-sans mb-6">
              Coyote Gulch isn&apos;t a hike. It&apos;s a five-day immersion in one of
              the most dramatic landscapes on the continent — sandstone walls
              rising 200 feet on either side, slot canyon passages barely wide
              enough for a pack, and a silence so complete you&apos;ll hear your
              own heartbeat.
            </p>
            <p className="text-foreground/60 text-lg leading-relaxed font-sans">
              We go in November: after the crowds, before the winter closes the
              canyon. Cold mornings, warm afternoons, and nights that belong
              entirely to the stars.
            </p>
          </div>
        </div>
      </div>

      {/* Pull quote */}
      <div className="border-l-2 border-[#c4813d] pl-8 mb-20 md:mb-28 max-w-3xl">
        <p className="font-display italic text-[clamp(1.4rem,3vw,2.25rem)] text-foreground/90 leading-snug">
          &ldquo;The canyon has no interest in who you are outside of it.
          It only cares what you do when the trail disappears and the walls
          close in.&rdquo;
        </p>
      </div>

      {/* What you'll do grid */}
      <div>
        <p className="text-foreground/30 text-[0.65rem] tracking-[0.35em] uppercase font-sans mb-8">
          What awaits
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {moments.map((moment, i) => (
            <div key={i} className="bg-background p-8 hover:bg-[oklch(0.11_0.015_57)] transition-colors duration-300">
              <span className="block text-[#c4813d]/60 font-mono text-xs mb-4">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-foreground/75 font-sans text-base leading-relaxed">
                {moment}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
