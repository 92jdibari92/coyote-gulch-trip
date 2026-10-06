const GUIDES = [
  {
    name: "John Thomas di Bari",
    title: "Founder & Guide",
    description:
      "John on who he is, what led him into this work, and why he feels called to bring people into the wild.",
    youtube: "https://www.youtube.com/embed/fFEzQOM2YMo",
  },
  {
    name: "Grant Lindholm",
    title: "Guide",
    description:
      "Grant on what leading in the wild means to him, and why he keeps coming back to do this work.",
    youtube: "https://www.youtube.com/embed/unqcUi9L-ao",
  },
  {
    name: "A Trip With Us",
    title: "Preview",
    description:
      "A look at what time in the wild with us actually feels like — a placeholder until we have dedicated footage for this page.",
    youtube: "https://www.youtube.com/embed/XEY4nwOa7ws",
  },
];

function YouTubeEmbed({ src, title }: { src: string; title: string }) {
  return (
    <div className="relative w-full aspect-video bg-[oklch(0.06_0.009_57)] border border-border overflow-hidden">
      <iframe
        src={src}
        title={title}
        className="absolute inset-0 w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}

export default function MeetTheGuides() {
  return (
    <section id="guides" className="border-t border-border py-24 md:py-36 px-8 md:px-16 lg:px-24">
      <div className="max-w-[90rem] mx-auto">
        {/* Header */}
        <div className="mb-16 md:mb-20 grid md:grid-cols-2 gap-8 items-end">
          <div>
            <p className="text-[#c4813d] text-[0.65rem] tracking-[0.35em] uppercase font-sans mb-5">
              Meet Your Guides
            </p>
            <h2 className="font-display text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.0] text-foreground">
              The Men<br />
              Leading the Way.
            </h2>
          </div>
          <p className="text-foreground/45 font-sans text-base leading-relaxed max-w-sm md:ml-auto">
            Hear directly from the people leading these expeditions — who
            they are, and why they feel called to bring people into the
            wild.
          </p>
        </div>

        {/* Video grid */}
        <div className="grid md:grid-cols-3 gap-px bg-border">
          {GUIDES.map((guide) => (
            <div key={guide.name} className="bg-background flex flex-col">
              <YouTubeEmbed src={guide.youtube} title={guide.name} />
              <div className="p-7 flex flex-col gap-2 border-t border-border">
                <h3 className="font-display text-xl text-foreground leading-snug">
                  {guide.name}
                </h3>
                <p className="text-[#c4813d] text-[0.65rem] tracking-[0.25em] uppercase font-sans">
                  {guide.title}
                </p>
                <p className="text-foreground/45 font-sans text-sm leading-relaxed mt-1">
                  {guide.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
