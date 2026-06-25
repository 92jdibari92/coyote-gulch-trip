import dynamic from "next/dynamic";

const MapClient = dynamic(() => import("./MapClient"), {
  ssr: false,
  loading: () => (
    <div
      className="h-full w-full flex items-center justify-center"
      style={{ background: "hsl(28, 28%, 5%)" }}
    >
      <span className="text-muted-foreground font-sans text-[0.65rem] tracking-[0.3em] uppercase">
        Loading map…
      </span>
    </div>
  ),
});

export default function MapSection() {
  return (
    <section id="the-canyon" className="border-t border-border py-28 md:py-40">
      <div className="px-8 md:px-16 lg:px-24 max-w-[90rem] mx-auto">
        {/* Header */}
        <div className="mb-12 grid md:grid-cols-2 gap-8 items-end">
          <div>
            <p className="text-[#c4813d] text-[0.65rem] tracking-[0.35em] uppercase font-sans mb-5">
              The Route
            </p>
            <h2 className="font-display text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.0] text-foreground">
              Forty Miles<br />of Canyon.
            </h2>
          </div>
          <p className="text-foreground/45 font-sans text-base leading-relaxed max-w-sm md:ml-auto">
            Seven distinct trail segments through slot canyons, past natural
            arches, and down to the Escalante River. Click any marker to explore.
          </p>
        </div>

        {/* Map */}
        <div className="relative h-[520px] md:h-[640px] border border-border overflow-hidden">
          <MapClient />

          {/* Legend */}
          <div className="absolute bottom-4 left-4 z-[1000] bg-background/90 border border-border px-4 py-3 flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <div className="w-5 h-[2px] bg-[#8B3A0F] rounded-full flex-shrink-0" />
              <span className="text-foreground/50 font-sans text-[0.6rem] tracking-[0.25em] uppercase">
                Trail Route
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-[#8B3A0F] flex-shrink-0" />
              <span className="text-foreground/50 font-sans text-[0.6rem] tracking-[0.25em] uppercase">
                Landmark
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
