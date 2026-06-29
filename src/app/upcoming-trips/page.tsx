import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import UpcomingTripsForm from "@/components/UpcomingTripsForm";
import UpcomingTripsNav from "@/components/UpcomingTripsNav";

export const metadata: Metadata = {
  title: "Upcoming Expeditions | Trails of Transformation",
  description:
    "Two upcoming men's backpacking expeditions — Guadalupe Mountains December 2026 and Big Bend January 2027. Every trail is a threshold.",
};

/* ─── Shared tier data ──────────────────────────────────────────── */

const TIERS = [
  {
    label: "Supporter",
    price: "$1,200",
    body: "You have financial stability and room to give. By choosing this tier you are directly subsidizing a spot for someone who needs accessibility.",
    note: null,
    highlight: false,
  },
  {
    label: "Standard",
    price: "$800",
    body: "You can meet your needs and afford this experience without significant strain. This is the right tier for most people.",
    note: null,
    highlight: true,
  },
  {
    label: "Community",
    price: "$400",
    body: "You are genuinely called to this journey but financial accessibility is a real consideration right now. Limited spots available.",
    note: "Limited spots available.",
    highlight: false,
  },
];

/* ─── Trip data ─────────────────────────────────────────────────── */

interface Trip {
  id: string;
  eyebrow: string;
  name: string;
  dates: string;
  duration: string;
  difficulty: string;
  image: string;
  imageAlt: string;
  description: string;
  highlights: string[];
  itinerary: string[];
  imagePosition?: string;
}

const GUADALUPE: Trip = {
  id: "guadalupe",
  eyebrow: "Texas High Country",
  name: "Guadalupe Mountains National Park",
  dates: "December 9–13, 2026",
  duration: "5 Days",
  difficulty: "Moderately Challenging",
  image: "https://static.showit.co/1200/bZMhPo2tSiGVn4lH213YXA/223164/img_0489.jpg",
  imageAlt: "Guadalupe Mountains canyon and high country landscape",
  imagePosition: "center 20%",
  description:
    "Guadalupe Mountains National Park is home to the world's most extensive Permian fossil reef, the four highest points in Texas, and various ecosystems waiting to be explored. From forested mountains and desert dunes, Guadalupe Mountains offer various ways to explore through hours of hiking and backpacking trails — and some of the most dramatic skies in the American Southwest.",
  highlights: [
    "McKittrick Canyon",
    "Sunrise and sunset at Guadalupe Mountain Peak",
    "Experience the highest point in Texas",
  ],
  itinerary: [
    "Travel day. Drive to Guadalupe Mountains National Park. Check in at Pine Springs. Possible short hike to Smith Spring. Freshly cooked meal camping in the front country.",
    "Fresh cooked breakfast. Begin backcountry trek from McKittrick Canyon Trailhead — about 7 miles. Lunch at the Grotto. Set up camp at McKittrick Ridge.",
    "After breakfast and coffee, continue along the McKittrick Canyon trail to the Tejas trail junction. Hike to Tejas campground — about 7 miles.",
    "Backcountry hiking along the Tejas Trail and Guadalupe Peak Trail. 7–8 mile day. Hike up to Guadalupe Peak for dinner and sunset. Night hike back to camp.",
    "Early morning sunrise at Guadalupe Peak with breakfast and coffee OR breakfast at camp then pack up. Hike out about 4–5 miles to Pine Springs Visitor Center. Travel day back home.",
  ],
};

const BIG_BEND: Trip = {
  id: "big-bend",
  eyebrow: "Chihuahuan Desert & Chisos Mountains",
  name: "Big Bend National Park",
  dates: "January 13–17, 2027",
  duration: "5 Days",
  difficulty: "Moderately Challenging",
  image: "https://static.showit.co/1200/_yWY7T1_QAWIR9J8aixPYg/223164/img_6556_2.jpg",
  imageAlt: "Big Bend National Park South Rim landscape",
  description:
    "Solitude is practically guaranteed at Big Bend National Park, as are dark nights bursting with desert-kissed stars. On the northern edge of the Chihuahuan Desert in southwest Texas, the Chisos Mountains provide a diverse oasis in a land of tremendous contrasts. Big Bend is larger than Yosemite or Great Smoky Mountains but sees a fraction of the visitors — raw, wild, and unforgettable.",
  highlights: [
    "Camping along the South Rim",
    "Sunrise and sunset along the South Rim",
    "Hot Springs and the Rio Grande River",
    "Emory Peak",
  ],
  itinerary: [
    "Travel day. Drive from Austin to Big Bend — about 8 hours. Check in at Chisos Mountain Visitor Center. Set up camp at Chisos Basin Campground. Freshly cooked meal in the front country.",
    "Fresh cooked breakfast. Begin backcountry trek from Chisos Mountain to South Rim. Lunch on trail. Set up camp at South Rim. Hike to sunset spot for dinner.",
    "Breakfast and coffee at the overlook. Hike to Emory Peak with day pack. Lunch at Emory Peak. Hike back to South Rim campsite. Sunset dinner and activities.",
    "Breakfast at the overlook. Pack up camp at South Rim. Hike out of backcountry. Set up camp at Chisos Basin Campground. Visit the Hot Springs for a relaxing afternoon. Dinner at front country campsite.",
    "Breakfast and coffee at Chisos Basin. Pack up camp. Head back to Austin. Lunch on the way home.",
  ],
};

/* ─── Sub-components ────────────────────────────────────────────── */

function MetaChip({ label }: { label: string }) {
  return (
    <span className="inline-block border border-border text-foreground/45 font-sans text-[0.65rem] tracking-[0.2em] uppercase px-3 py-1.5">
      {label}
    </span>
  );
}

function TripSection({ trip }: { trip: Trip }) {
  return (
    <section id={trip.id} className="border-t border-border">
      {/* Hero image */}
      <div className="relative w-full h-[380px] md:h-[500px] overflow-hidden">
        <Image
          src={trip.image}
          alt={trip.imageAlt}
          fill
          className="object-cover"
          style={{ objectPosition: trip.imagePosition ?? "center" }}
          sizes="100vw"
          priority={trip.id === "guadalupe"}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#0d0a07]/70" />
      </div>

      {/* Content */}
      <div className="py-20 md:py-32 px-8 md:px-16 lg:px-24">
        <div className="max-w-[90rem] mx-auto">

          {/* Trip header */}
          <div className="mb-14">
            <p className="text-[#c4813d] text-[0.65rem] tracking-[0.35em] uppercase font-sans mb-5">
              {trip.eyebrow}
            </p>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.05] text-foreground mb-8">
              {trip.name}
            </h2>
            <div className="flex flex-wrap gap-3 mb-8">
              <MetaChip label={trip.dates} />
              <MetaChip label={trip.duration} />
              <MetaChip label={trip.difficulty} />
            </div>
            <p className="text-foreground/55 font-sans text-base leading-relaxed max-w-2xl">
              {trip.description}
            </p>
          </div>

          {/* Highlights + Itinerary */}
          <div className="grid md:grid-cols-2 gap-px bg-border mb-16">

            {/* Highlights */}
            <div className="bg-background p-8 md:p-10">
              <p className="text-[#c4813d] text-[0.65rem] tracking-[0.35em] uppercase font-sans mb-7">
                Highlights
              </p>
              <ul className="flex flex-col gap-4">
                {trip.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-4">
                    <span className="shrink-0 mt-[5px] w-1.5 h-1.5 rounded-full bg-[#c4813d]/60" />
                    <span className="text-foreground/70 font-sans text-sm leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Itinerary */}
            <div className="bg-background p-8 md:p-10">
              <p className="text-[#c4813d] text-[0.65rem] tracking-[0.35em] uppercase font-sans mb-7">
                Daily Itinerary
              </p>
              <ol className="flex flex-col gap-6">
                {trip.itinerary.map((dayText, i) => (
                  <li key={i} className="flex gap-5">
                    <span className="shrink-0 font-display text-[#c4813d]/50 text-sm leading-tight pt-0.5 w-10">
                      Day {i + 1}
                    </span>
                    <p className="text-foreground/60 font-sans text-sm leading-relaxed">{dayText}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Investment */}
          <div className="max-w-[72rem]">
            <div className="mb-10">
              <p className="text-[#c4813d] text-[0.65rem] tracking-[0.35em] uppercase font-sans mb-5">
                Investment
              </p>
              <h3 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.05] text-foreground mb-6">
                Choose Your Tier.
              </h3>
              <p className="text-foreground/55 font-sans text-base leading-relaxed mb-5 max-w-xl">
                This trip is priced on a sliding scale. We believe transformational
                experiences in nature should be accessible — and we trust you to choose honestly.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-px bg-border mb-8">
              {TIERS.map((tier) => (
                <div
                  key={tier.label}
                  className={[
                    "flex flex-col gap-5 p-8 md:p-10",
                    tier.highlight ? "bg-[hsl(28,22%,7%)]" : "bg-[hsl(28,20%,5%)]",
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
                  <p className="text-foreground/50 font-sans text-sm leading-relaxed flex-1">{tier.body}</p>
                  {tier.note && (
                    <p className="text-[#c4813d]/55 font-sans text-xs tracking-wide">{tier.note}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-5 max-w-2xl">
              <p className="text-foreground/40 font-sans text-sm leading-relaxed">
                All tiers include the same full experience. No one will know which tier you chose,
                and it will never affect how you are welcomed or guided.
              </p>
              <p className="text-foreground/25 font-sans text-xs leading-relaxed border-t border-border pt-5">
                A non-refundable deposit of $200 is required to hold your spot.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ─── Page ──────────────────────────────────────────────────────── */

export default function UpcomingTripsPage() {
  return (
    <main className="min-h-screen bg-background">

      <UpcomingTripsNav />

      {/* Hero */}
      <section
        className="relative flex flex-col items-center justify-center min-h-[65vh] px-8 md:px-16 lg:px-24 pt-20 pb-20 md:pb-28"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(120, 55, 8, 0.18) 0%, transparent 70%), " +
            "hsl(28, 28%, 4%)",
        }}
      >
        {/* Centered heading */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <p className="text-[#c4813d] text-[0.65rem] tracking-[0.4em] uppercase font-sans mb-6">
            Trails of Transformation
          </p>
          <h1 className="font-display text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.95] text-foreground mb-8">
            Upcoming Expeditions
          </h1>
          <p className="font-display italic text-xl md:text-2xl text-foreground/50 leading-snug">
            Every trail is a threshold. Every trip is a transformation.
          </p>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <div className="h-10 w-px bg-gradient-to-b from-[#c4813d]/40 to-transparent" />
        </div>
      </section>

      {/* Trip sections */}
      <TripSection trip={GUADALUPE} />
      <TripSection trip={BIG_BEND} />

      {/* Apply form */}
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
          <div className="mb-14">
            <p className="text-[#c4813d] text-[0.65rem] tracking-[0.35em] uppercase font-sans mb-5">
              Apply
            </p>
            <h2 className="font-display text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.0] text-foreground mb-6">
              Ready to Say Yes?
            </h2>
            <p className="text-foreground/45 font-sans text-base leading-relaxed max-w-lg mb-4">
              Applications are reviewed personally. Select the trip you are applying for,
              fill this out honestly, and we will be in touch within five business days.
            </p>
            <p className="text-foreground/25 font-sans text-sm">
              Guadalupe Mountains — December 9–13, 2026 &nbsp;·&nbsp;
              Big Bend — January 13–17, 2027
            </p>
          </div>

          <UpcomingTripsForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-14 px-8 md:px-16">
        <div className="max-w-[90rem] mx-auto flex flex-col items-center gap-4">
          <Image
            src="/Trails logo.PNG"
            alt="Trails"
            width={160}
            height={44}
            className="h-10 w-auto object-contain opacity-70"
          />
          <span className="font-display text-base text-foreground/35 leading-none">
            Trails of Transformation
          </span>
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
            <Link href="/" className="text-foreground/25 hover:text-foreground/50 font-sans text-xs tracking-[0.2em] uppercase transition-colors duration-150">
              Coyote Gulch 2026
            </Link>
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
