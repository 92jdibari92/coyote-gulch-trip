import StayInTouchForm from "@/components/StayInTouchForm";

export default function StayInTouch() {
  return (
    <section
      id="stay-in-touch"
      className="border-t border-border py-28 md:py-40 px-8 md:px-16 lg:px-24"
    >
      <div className="max-w-[40rem] mx-auto text-center">
        <p className="text-[#c4813d] text-[0.65rem] tracking-[0.35em] uppercase font-sans mb-5">
          Not This Trip?
        </p>
        <h2 className="font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.05] text-foreground mb-6">
          There&apos;s another one coming.
        </h2>
        <p className="text-foreground/50 font-sans text-base leading-relaxed max-w-md mx-auto mb-10">
          We run a handful of expeditions a year, and spots go fast. Get on
          the list and we&apos;ll tell you first.
        </p>
        <StayInTouchForm />
      </div>
    </section>
  );
}
