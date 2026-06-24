const included = [
  {
    icon: "◈",
    title: "Expert Wilderness Guide",
    body: "An experienced backcountry guide who knows the canyon's routes, water sources, and hidden campsites.",
  },
  {
    icon: "◈",
    title: "All Backcountry Permits",
    body: "Grand Staircase–Escalante NM permits are secured for the group — one less thing to chase.",
  },
  {
    icon: "◈",
    title: "Water Filtration",
    body: "Group water filtration support provided for the duration of the trip.",
  },
  {
    icon: "◈",
    title: "Trail Meals",
    body: "Each participant is responsible for their own trail food — MREs recommended.",
  },
  {
    icon: "◈",
    title: "Emergency Communication",
    body: "Garmin inReach satellite communicator for two-way messaging and SOS capability anywhere in the canyon.",
  },
  {
    icon: "◈",
    title: "Route Planning & Navigation",
    body: "Pre-trip route maps, topo files, water source intel, and a full gear list sent four weeks out.",
  },
  {
    icon: "◈",
    title: "Nightly Camp Debriefs",
    body: "Time intentionally set aside each evening for reflection, conversation, and connection around the fire.",
  },
  {
    icon: "◈",
    title: "Pre-Trip Coordination Call",
    body: "A group video call 2–3 weeks before departure to align on logistics, gear, and expectations.",
  },
];

export default function Included() {
  return (
    <section className="bg-[oklch(0.095_0.013_57)] border-t border-border py-28 md:py-40">
      <div className="px-8 md:px-16 lg:px-24 max-w-[90rem] mx-auto">
        {/* Header */}
        <div className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-[#c4813d] text-[0.65rem] tracking-[0.35em] uppercase font-sans mb-5">
              What&apos;s Included
            </p>
            <h2 className="font-display text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.0] text-foreground">
              Everything You Need<br />in the Field.
            </h2>
          </div>
          <p className="text-foreground/45 font-sans text-base max-w-sm leading-relaxed">
            You bring your personal gear, MREs, and your willingness to be
            fully present. We handle the rest.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {included.map((item) => (
            <div
              key={item.title}
              className="bg-[oklch(0.095_0.013_57)] hover:bg-[oklch(0.12_0.016_57)] transition-colors duration-300 p-8 flex flex-col gap-4"
            >
              <span className="text-[#c4813d]/70 text-lg leading-none">
                {item.icon}
              </span>
              <h3 className="font-display text-lg text-foreground leading-snug">
                {item.title}
              </h3>
              <p className="text-foreground/45 font-sans text-sm leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
