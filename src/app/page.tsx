import Image from "next/image";
import StickyNav from "@/components/StickyNav";
import Hero from "@/components/sections/Hero";
import TripStats from "@/components/sections/TripStats";
import Experience from "@/components/sections/Experience";
import MapSection from "@/components/sections/MapSection";
import FireBreak from "@/components/sections/FireBreak";
import Included from "@/components/sections/Included";
import Guides from "@/components/sections/Guides";
import Pricing from "@/components/sections/Pricing";
import ApplyForm from "@/components/sections/ApplyForm";

export default function Home() {
  return (
    <main>
      <StickyNav />
      <Hero />
      <TripStats />
      <Experience />
      <MapSection />
      <FireBreak />
      <Included />
      <Guides />
      <Pricing />
      <ApplyForm />

      <footer className="border-t border-border py-14 px-8 md:px-16">
        <div className="max-w-[90rem] mx-auto flex flex-col items-center gap-6">
          <Image
            src="/Trails logo.PNG"
            alt="Trails"
            width={160}
            height={44}
            className="h-10 w-auto object-contain opacity-70"
          />
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
            <span className="text-foreground/25 font-sans text-xs tracking-[0.2em] uppercase">
              Coyote Gulch Expedition &nbsp;·&nbsp; 2026
            </span>
            <span className="hidden sm:block text-foreground/15 text-xs">·</span>
            <span className="text-foreground/20 font-sans text-xs">
              Grand Staircase–Escalante National Monument, Utah
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
