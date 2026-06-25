const TIERS = [
  {
    label: "Supporter",
    price: "$1,800",
    body: "You have financial stability and room to give. By choosing this tier you are directly subsidizing a spot for someone who needs accessibility. We are grateful for your generosity.",
    note: null,
    highlight: false,
  },
  {
    label: "Standard",
    price: "$1,200",
    body: "You can meet your needs and afford this experience without significant strain. This is the right tier for most people.",
    note: null,
    highlight: true,
  },
  {
    label: "Community",
    price: "$600",
    body: "You are genuinely called to this journey but financial accessibility is a real consideration right now. We honor that and want you here.",
    note: "Limited spots available at this rate.",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section className="border-t border-border py-28 md:py-40 px-8 md:px-16 lg:px-24">
      <div className="max-w-[72rem] mx-auto">

        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <p className="text-[#c4813d] text-[0.65rem] tracking-[0.35em] uppercase font-sans mb-5">
            Investment
          </p>
          <h2 className="font-display text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.0] text-foreground mb-8">
            Choose Your Tier.
          </h2>
          <p className="text-foreground/55 font-sans text-base leading-relaxed mb-6">
            This trip is priced on a sliding scale. We believe transformational
            experiences in nature should be accessible — and we trust you to
            choose honestly.
          </p>
          <p className="text-foreground/38 font-sans text-sm leading-relaxed italic border-l border-[#c4813d]/30 pl-5">
            Ask yourself: What is my actual financial situation right now? Not
            my aspirational one, not my worst-case one — my real one. Choose the
            tier that reflects that truth.
          </p>
        </div>

        {/* Tier cards */}
        <div className="grid md:grid-cols-3 gap-px bg-border mb-10">
          {TIERS.map((tier) => (
            <div
              key={tier.label}
              className={[
                "flex flex-col gap-5 p-8 md:p-10",
                tier.highlight
                  ? "bg-[hsl(28,22%,7%)]"
                  : "bg-[hsl(28,20%,5%)]",
              ].join(" ")}
            >
              <div className="flex flex-col gap-2">
                <span className="text-foreground/35 font-sans text-[0.6rem] tracking-[0.3em] uppercase">
                  {tier.label}
                </span>
                <span
                  className={[
                    "font-display text-[clamp(2rem,4vw,3rem)] leading-none",
                    tier.highlight ? "text-[#c4813d]" : "text-foreground",
                  ].join(" ")}
                >
                  {tier.price}
                </span>
              </div>

              <div className="h-px bg-border" />

              <p className="text-foreground/50 font-sans text-sm leading-relaxed flex-1">
                {tier.body}
              </p>

              {tier.note && (
                <p className="text-[#c4813d]/55 font-sans text-xs tracking-wide">
                  {tier.note}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Footer notes */}
        <div className="flex flex-col gap-5 max-w-2xl">
          <p className="text-foreground/40 font-sans text-sm leading-relaxed">
            All tiers include the same full experience — the same trails, the
            same fire, the same brotherhood. No one will know which tier you
            chose, and it will never affect how you are welcomed or guided.
          </p>
          <p className="text-foreground/25 font-sans text-xs leading-relaxed border-t border-border pt-5">
            A non-refundable deposit of $200 is required to hold your spot,
            applied toward your total.
          </p>
        </div>

      </div>
    </section>
  );
}
