const guides = [
  {
    name: "John Thomas di Bari",
    title: "Trip Leader",
    description:
      "Hear from John on what to expect, how the trip came together, and why Coyote Gulch in November.",
  },
  {
    name: "Grant Lindholm",
    title: "Wilderness Guide",
    description:
      "Grant on the route, what it demands, and what you need to know before you lace up your boots.",
  },
  {
    name: "The Trip",
    title: "Introduction Video",
    description:
      "A full overview of the expedition — the canyon, the itinerary, and what this week is really about.",
  },
];

function VideoPlaceholder({ label }: { label: string }) {
  return (
    <div className="relative w-full aspect-video bg-[oklch(0.06_0.009_57)] border border-border flex flex-col items-center justify-center gap-4 group">
      {/* Play button */}
      <div className="w-14 h-14 rounded-full border border-[#c4813d]/40 flex items-center justify-center group-hover:border-[#c4813d] group-hover:bg-[#c4813d]/10 transition-all duration-300">
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5 fill-[#c4813d]/60 group-hover:fill-[#c4813d] transition-colors duration-300 translate-x-0.5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 5.14v13.72a1 1 0 0 0 1.496.868l11-6.86a1 1 0 0 0 0-1.736l-11-6.86A1 1 0 0 0 8 5.14z" />
        </svg>
      </div>
      {/* Label */}
      <span className="text-foreground/25 font-sans text-[0.65rem] tracking-[0.25em] uppercase">
        {label}
      </span>
    </div>
  );
}

export default function Guides() {
  return (
    <section className="border-t border-border py-28 md:py-40 px-8 md:px-16 lg:px-24">
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
            Hear directly from the people who planned this trip, know the
            canyon, and will be with you every step of the way.
          </p>
        </div>

        {/* Video grid */}
        <div className="grid md:grid-cols-3 gap-px bg-border">
          {guides.map((guide) => (
            <div
              key={guide.name}
              className="bg-background flex flex-col"
            >
              <VideoPlaceholder label="Video coming soon" />
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
