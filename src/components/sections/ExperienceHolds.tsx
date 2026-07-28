const elements = [
  {
    n: "01",
    title: "Opening Circle",
    body: "We begin by naming what we are leaving behind and what we are hoping to find. The trail starts here.",
  },
  {
    n: "02",
    title: "Daily Check-In",
    body: "Each morning a simple question. How are you — really? The wilderness has a way of making the answer honest.",
  },
  {
    n: "03",
    title: "Evening Fire Conversations",
    body: "One question around the fire each night. No fixing. No advice. Just men listening to men.",
  },
  {
    n: "04",
    title: "Man of the Day",
    body: "Each man takes a turn leading — a skill, a story, something he loves. A moment to be witnessed in his gifts rather than his wounds.",
  },
  {
    n: "05",
    title: "Solo Time",
    body: "A few hours alone in the canyon with nothing but your thoughts and a journal prompt. The quietest and often the most powerful part of the trip.",
  },
  {
    n: "06",
    title: "Closing Ceremony",
    body: "We end by speaking aloud what we are carrying home. Witnessed and sealed by the men who walked with us.",
  },
];

export default function ExperienceHolds() {
  return (
    <section className="border-t border-border py-28 md:py-40 px-8 md:px-16 lg:px-24">
      <div className="max-w-[90rem] mx-auto">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <p className="text-[#c4813d] text-[0.65rem] tracking-[0.35em] uppercase font-sans mb-5">
            The Program
          </p>
          <h2 className="font-display text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.0] text-foreground mb-5">
            What the Experience Holds.
          </h2>
          <p className="font-sans italic text-foreground/40 text-sm md:text-base leading-relaxed">
            Not a schedule — a set of intentions. The trail does the rest.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-px bg-border">
          {elements.map((item) => (
            <div
              key={item.n}
              className="bg-[oklch(0.095_0.013_57)] hover:bg-[oklch(0.12_0.016_57)] transition-colors duration-300 p-8 md:p-10 flex flex-col gap-4"
            >
              <span className="font-mono text-[#c4813d]/40 text-xs">{item.n}</span>
              <h3 className="font-display text-xl md:text-2xl text-foreground leading-snug">
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
