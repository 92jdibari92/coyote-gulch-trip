const stats = [
  { label: "Location", value: "Coyote Gulch, Utah", sub: "Grand Staircase–Escalante NM" },
  { label: "Dates", value: "Nov 1–8, 2026", sub: "7 nights in the backcountry" },
  { label: "Distance", value: "~42 Miles", sub: "Roundtrip through the canyon" },
  { label: "Group Size", value: "8 Men", sub: "Limited spots available." },
];

export default function TripStats() {
  return (
    <section id="the-trip" className="border-t border-b border-border bg-[oklch(0.095_0.013_57)]">
      <div className="max-w-[90rem] mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-border">
        {stats.map((stat) => (
          <div key={stat.label} className="px-8 py-10 md:py-12">
            <p className="text-[#c4813d] text-[0.65rem] tracking-[0.3em] uppercase font-sans mb-3">
              {stat.label}
            </p>
            <p className="font-display text-2xl md:text-3xl text-foreground mb-1">
              {stat.value}
            </p>
            <p className="text-xs text-foreground/40 font-sans tracking-wide">
              {stat.sub}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
