import ApplicationForm from "@/components/ApplicationForm";

export default function ApplyForm() {
  return (
    <section
      id="apply"
      className="relative border-t border-border py-24 md:py-36 px-8 md:px-16 lg:px-24 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(140, 70, 12, 0.12) 0%, transparent 65%), " +
          "hsl(28, 28%, 4%)",
      }}
    >
      <div className="max-w-[52rem] mx-auto">
        {/* Header */}
        <div className="mb-14">
          <p className="text-[#c4813d] text-[0.65rem] tracking-[0.35em] uppercase font-sans mb-5">
            Apply
          </p>
          <h2 className="font-display text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.0] text-foreground mb-6">
            Eight Spots.<br />
            One Trip.
          </h2>
          <p className="text-foreground/45 font-sans text-base leading-relaxed max-w-lg mb-4">
            Applications are reviewed personally. We look for men who are ready
            to show up fully — not just fit, but present. Fill this out honestly
            and we will be in touch within five days.
          </p>
          <p className="text-foreground/25 font-sans text-sm">
            November 1–8, 2026 &nbsp;·&nbsp; Grand Staircase–Escalante, Utah
            &nbsp;·&nbsp; Applications close October 1st or when spots fill.
          </p>
        </div>

        <ApplicationForm />
      </div>
    </section>
  );
}
