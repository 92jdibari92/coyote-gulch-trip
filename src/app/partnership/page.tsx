import type { Metadata } from "next";
import Image from "next/image";
import PartnershipNav from "@/components/PartnershipNav";
import PartnershipInquiryForm from "@/components/PartnershipInquiryForm";

export const metadata: Metadata = {
  title: "Partnership Proposal | Trails of Transformation",
  description:
    "A proposal for addiction treatment centers seeking to expand their continuum of care through nature-based, community-driven wilderness experiences for men.",
};

/* ─── Data ──────────────────────────────────────────────────────── */

const PILLARS = [
  {
    n: "01",
    title: "Nature Immersion",
    body: "Carrying only what you need. Moving through landscape that is indifferent to your history and honest about what you are made of. The wilderness has a way of stripping away performance and revealing what is true.",
  },
  {
    n: "02",
    title: "Vulnerable Brotherhood",
    body: "Small groups of 6 to 8 men, guided intentionally through shared challenge and shared presence. Being witnessed in your struggle — and witnessing others in theirs — builds a quality of trust and connection that transforms how men understand themselves and each other.",
  },
  {
    n: "03",
    title: "Inner Wilderness Exploration",
    body: "The external journey mirrors the internal one. As men navigate terrain, they navigate themselves. Facilitated reflection, honest conversation around the fire, and intentional silence create space for insight, grief, and breakthrough.",
  },
  {
    n: "04",
    title: "Embodied Healing",
    body: "Physical challenge, time in nature, and the absence of digital distraction recalibrate the nervous system in ways that extend long beyond the trip itself. Men return different — not because something was added, but because something was remembered.",
  },
];

const RESEARCH = [
  {
    headline: "59% more likely to report good health.",
    body: "A landmark 2019 study published in Scientific Reports drew on nearly 20,000 respondents across 18 countries and found that people who spent at least 120 minutes per week in nature were significantly more likely to report good health and high wellbeing — regardless of how that time was distributed. For men in recovery, whose nervous systems are often dysregulated and depleted, regular time in nature is not a luxury. It is medicine.",
    citation: "White et al. (2019), Scientific Reports",
    linkText: "Read the study",
    url: "https://www.nature.com/articles/s41598-019-44097-3",
  },
  {
    headline: "85% of studies show positive outcomes for nature-based addiction intervention.",
    body: "A 2023 systematic review published in a peer-reviewed journal screened over 8,000 articles published between 2013 and 2023, ultimately analyzing 21 studies on natural environment interventions and drug dependence. 85% of those studies showed positive outcomes — including direct improvement in drug dependence, reduced use, and improved treatment engagement across alcohol, tobacco, opioids, and other substances.",
    citation: "Iheanacho et al. (2023), International Journal of Innovative Environmental Studies Research",
    linkText: "Read the study",
    url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11570648/",
  },
  {
    headline: "Adventure-based programs reduced relapse rates by 27–53%.",
    body: "A 2023 meta-analysis found that adventure-based interventions reduced 12-month relapse rates by 27 to 53 percent compared to standard outpatient care alone. In a separate study, only 31 percent of adventure therapy participants had relapsed at 10 months post-program, compared to 58 percent in the comparison group receiving traditional treatment. These numbers represent real people — men who stayed sober because something reached them that talk therapy alone could not.",
    citation: "Journal of Substance Abuse Treatment (2023) meta-analysis; Black Bear Lodge clinical review",
    linkText: "Read more",
    url: "https://blackbearrehab.com/treatment/addiction-therapy-counseling/effectiveness-adventure-therapy/",
  },
  {
    headline: "Men-only groups dramatically improve treatment engagement.",
    body: "A 2020 study on men with depression found that men-only group settings were described by participants as a key factor in successful treatment engagement. Participants reported that gender-specific groups reduced the social risk of vulnerability and created conditions in which honest emotional engagement became possible. For many men, the presence of other men — not clinicians — is what makes it safe enough to tell the truth.",
    citation: "Momentum Recovery (2024), citing peer-reviewed research on gender-specific adventure therapy",
    linkText: "Read more",
    url: "https://www.momentumrecovery.com/blog/adventure-therapy-young-adult-men-recovery",
  },
  {
    headline: "Peer bonds built through shared challenge outlast treatment.",
    body: "Research on social bonding consistently shows that doing something difficult alongside someone creates trust faster and more durably than verbal interaction alone. In addiction recovery, peer bonds are one of the strongest predictors of long-term sobriety. Programs that generate those bonds through shared physical experience — not just group discussion — are building something that clinical treatment alone rarely produces.",
    citation: "Momentum Recovery (2026), The Research Case for Adventure Therapy in Addiction Treatment",
    linkText: "Read the research",
    url: "https://www.momentumrecovery.com/blog/does-adventure-therapy-work-research-evidence",
  },
];

const FORMATS = [
  {
    title: "Day Expeditions",
    body: "1-day nature immersion experiences for early-stage clients.",
  },
  {
    title: "Multi-Day Backpacking",
    body: "3 to 5 day backcountry experiences for those further in recovery.",
  },
  {
    title: "Full Expeditions",
    body: "7-day immersive wilderness journeys for men ready for deep transformation.",
  },
];

const RECEIVES = [
  "A differentiated research-backed experiential offering for your clients.",
  "Documented pre and post-trip wellbeing assessments.",
  "A deepened continuum of care that extends beyond your walls.",
  "Community visibility as an organization that invests in whole-person healing.",
  "An ongoing partnership — not a one-time program.",
];

/* ─── Page ──────────────────────────────────────────────────────── */

export default function PartnershipPage() {
  return (
    <main className="min-h-screen bg-background">
      <PartnershipNav />

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section
        className="relative flex flex-col items-center justify-center min-h-screen px-8 md:px-16 lg:px-24 pt-20 pb-20 overflow-hidden"
      >
        {/* Background photo */}
        <Image
          src="/fire.JPG"
          alt="Campfire in the canyon at night"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Dark overlay — keeps text readable while the fire and men stay visible */}
        <div className="absolute inset-0 bg-[#0d0a07]/35" />

        {/* Warm amber vignette to match site aesthetic */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(120, 55, 8, 0.18) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
          <p className="text-[#c4813d] text-[0.65rem] tracking-[0.4em] uppercase font-sans mb-8">
            A Partnership Proposal &nbsp;·&nbsp; Trails of Transformation
          </p>
          <h1 className="font-display text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.98] text-foreground mb-8">
            Where the Wild Meets<br />the Work of Healing.
          </h1>
          <p className="font-sans text-[clamp(1rem,2vw,1.25rem)] text-foreground/55 max-w-2xl leading-relaxed">
            A proposal for addiction treatment centers seeking to expand their
            continuum of care through nature-based, community-driven wilderness
            experiences for men.
          </p>
        </div>

        <div className="absolute z-10 bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <div className="h-10 w-px bg-gradient-to-b from-[#c4813d]/40 to-transparent" />
        </div>
      </section>

      {/* ── The Problem We Share ────────────────────────────────── */}
      <section id="the-problem" className="border-t border-border py-24 md:py-36 px-8 md:px-16 lg:px-24">
        <div className="max-w-[52rem] mx-auto">
          <p className="text-[#c4813d] text-[0.65rem] tracking-[0.35em] uppercase font-sans mb-6">
            The Problem We Share
          </p>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] text-foreground mb-10">
            Recovery does not happen in isolation.
          </h2>
          <div className="flex flex-col gap-6 text-foreground/60 font-sans text-base md:text-lg leading-relaxed">
            <p>
              And it does not happen in a conference room. Men struggling with
              addiction and mental illness are often fighting battles that go
              far deeper than substance use — battles with identity, belonging,
              self-worth, disconnection, and a profound sense of being unseen.
            </p>
            <p>
              Traditional treatment models address the clinical. But the soul
              needs something different. Research consistently shows that
              nature immersion reduces cortisol, lowers anxiety, improves mood
              regulation, and activates the parasympathetic nervous system —
              the very system that addiction suppresses.
            </p>
            <p className="text-foreground/75">
              Time in wild places does not replace clinical treatment. It
              deepens it. It reaches the parts that talk therapy alone cannot.
            </p>
          </div>
        </div>
      </section>

      {/* ── What We Offer ───────────────────────────────────────── */}
      <section id="what-we-offer" className="bg-[oklch(0.095_0.013_57)] border-t border-border py-24 md:py-36">
        <div className="px-8 md:px-16 lg:px-24 max-w-[90rem] mx-auto">
          <div className="max-w-[52rem] mb-16 md:mb-20">
            <p className="text-[#c4813d] text-[0.65rem] tracking-[0.35em] uppercase font-sans mb-6">
              What We Offer
            </p>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] text-foreground mb-8">
              Four Pillars of the Work.
            </h2>
            <p className="text-foreground/55 font-sans text-base md:text-lg leading-relaxed">
              Trails of Transformation leads small, intentional men&apos;s
              backpacking expeditions into some of the most remote and
              breathtaking wilderness in the American Southwest. These are not
              recreational trips. They are structured experiences built around
              four pillars.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-px bg-border">
            {PILLARS.map((p) => (
              <div
                key={p.n}
                className="bg-[oklch(0.095_0.013_57)] hover:bg-[oklch(0.12_0.016_57)] transition-colors duration-300 p-8 md:p-10 flex flex-col gap-4"
              >
                <span className="font-mono text-[#c4813d]/40 text-xs">{p.n}</span>
                <h3 className="font-display text-xl md:text-2xl text-foreground leading-snug">
                  {p.title}
                </h3>
                <p className="text-foreground/45 font-sans text-sm leading-relaxed">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Research ────────────────────────────────────────── */}
      <section id="research" className="border-t border-border py-24 md:py-36 px-8 md:px-16 lg:px-24">
        <div className="max-w-[64rem] mx-auto">
          <p className="text-[#c4813d] text-[0.65rem] tracking-[0.35em] uppercase font-sans mb-6">
            The Research
          </p>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] text-foreground mb-8">
            The Evidence Behind the Work.
          </h2>
          <p className="text-foreground/55 font-sans text-base md:text-lg leading-relaxed max-w-3xl mb-16 md:mb-20">
            This is not anecdotal. A growing body of peer-reviewed research
            supports what guides and clinicians have observed for decades —
            that nature heals, that shared challenge builds lasting bonds,
            and that wilderness-based programs meaningfully improve outcomes
            for men in recovery. Below are key findings from published
            studies.
          </p>

          <div className="flex flex-col gap-14 md:gap-16 mb-20">
            {RESEARCH.map((r) => (
              <div key={r.headline} className="border-t border-border pt-10 first:border-t-0 first:pt-0">
                <p className="font-display text-[clamp(1.6rem,3.2vw,2.5rem)] leading-[1.15] text-[#c4813d] mb-5">
                  {r.headline}
                </p>
                <p className="text-foreground/60 font-sans text-base md:text-lg leading-relaxed max-w-3xl mb-4">
                  {r.body}
                </p>
                <p className="text-foreground/30 font-sans text-xs tracking-wide">
                  {r.citation} &nbsp;—&nbsp;{" "}
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#c4813d]/60 hover:text-[#c4813d] underline underline-offset-2 transition-colors duration-150"
                  >
                    {r.linkText}
                  </a>
                </p>
              </div>
            ))}
          </div>

          <p className="font-display italic text-[clamp(1.5rem,3vw,2rem)] text-foreground/70 leading-snug text-center max-w-3xl mx-auto">
            Nature is not a supplement to recovery. For many men, it is the
            threshold through which recovery becomes possible.
          </p>
        </div>
      </section>

      {/* ── This Is Personal ────────────────────────────────────── */}
      <section id="this-is-personal" className="bg-[oklch(0.095_0.013_57)] border-t border-border py-24 md:py-36 px-8 md:px-16 lg:px-24">
        <div className="max-w-[52rem] mx-auto">
          <p className="text-[#c4813d] text-[0.65rem] tracking-[0.35em] uppercase font-sans mb-6">
            This Is Personal
          </p>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] text-foreground mb-10">
            This Is Personal.
          </h2>

          <div className="flex flex-col gap-6 text-foreground/60 font-sans text-base md:text-lg leading-relaxed mb-12">
            <p>
              I know what addiction costs. I have paid some of that price
              myself — and watched people I love pay the rest.
            </p>
            <p>
              In my early twenties, I was asked to leave UT for two
              semesters. I was kicked out of the dorms. I lost my job. I was
              arrested. I woke up in a hospital. What I could not see then —
              what addiction rarely lets you see — is that beneath the
              drinking was a young man who had no idea who he was, what he
              felt, or how to say any of it out loud.
            </p>
            <p>
              It was outpatient treatment at La Hacienda, and backpacking,
              that began to change that. Not because someone fixed me. But
              because for the first time, I was in an environment that asked
              something true of me — and gave me the space to respond
              honestly.
            </p>
            <p>
              My father drank throughout my childhood. I spent years holding
              my breath, waiting for our family to fall apart, watching my
              mother plead with him to stop. My uncle — the man I hunted and
              fished with, whose laugh I can still hear — became addicted to
              alcohol and pain medication. The damage he left behind still
              moves through our family like a current. He died in an HEB,
              alone, after falling and hitting his head.
            </p>
            <p>
              Addiction does not stay in one person. It travels. It
              inherits. It waits.
            </p>
            <p>
              For six years I worked with Explore Austin — taking young men
              from underserved communities in Austin into the wilderness,
              from sixth grade through senior year of high school. I watched
              boys who had never been seen as leaders become exactly that. I
              watched confidence grow in real time, out on a trail, at the
              edge of something hard and beautiful. I watched what happens
              when a young man is witnessed by a safe, caring, present man —
              and realizes for the first time that he is worth witnessing.
            </p>
            <p>
              That is why I built Trails of Transformation. Not as a
              program. As an answer to something I have lived.
            </p>
            <p>
              I believe in this work the way I believe in water — because I
              know what it is to be thirsty, and I know what it is to
              finally drink.
            </p>
          </div>

          <blockquote className="border-l-2 border-[#c4813d] pl-6 md:pl-8 py-2 mb-12">
            <p className="font-display italic text-xl md:text-2xl text-foreground/75 leading-snug mb-4">
              &ldquo;The wilderness does not fix you. It shows you that you
              were never broken — only lost. And it gives you the landscape
              to find your way back.&rdquo;
            </p>
            <cite className="not-italic text-foreground/35 font-sans text-xs tracking-[0.2em] uppercase">
              — John Thomas di Bari
            </cite>
          </blockquote>

          {/*
            Video placeholder — swap for a real embed later, e.g.:
            <div className="relative w-full aspect-video bg-[oklch(0.06_0.009_57)] border border-border overflow-hidden">
              <iframe src="https://www.youtube.com/embed/VIDEO_ID" title="John Thomas di Bari" className="absolute inset-0 w-full h-full" allowFullScreen />
            </div>
          */}
          <div className="relative w-full aspect-video bg-[oklch(0.06_0.009_57)] border border-border flex flex-col items-center justify-center gap-4 group">
            <div className="w-14 h-14 rounded-full border border-[#c4813d]/40 flex items-center justify-center group-hover:border-[#c4813d] group-hover:bg-[#c4813d]/10 transition-all duration-300">
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 fill-[#c4813d]/60 group-hover:fill-[#c4813d] transition-colors duration-300 translate-x-0.5"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 5.14v13.72a1 1 0 0 0 1.496.868l11-6.86a1 1 0 0 0 0-1.736l-11-6.86A1 1 0 0 0 8 5.14z" />
              </svg>
            </div>
            <span className="text-foreground/25 font-sans text-[0.65rem] tracking-[0.25em] uppercase text-center px-6">
              Video coming soon — John Thomas di Bari
            </span>
          </div>
        </div>
      </section>

      {/* ── Partnership Model ───────────────────────────────────── */}
      <section id="partnership-model" className="border-t border-border py-24 md:py-36 px-8 md:px-16 lg:px-24">
        <div className="max-w-[90rem] mx-auto">
          <div className="max-w-[52rem] mb-16">
            <p className="text-[#c4813d] text-[0.65rem] tracking-[0.35em] uppercase font-sans mb-6">
              Partnership Model
            </p>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] text-foreground mb-8">
              Built to Fit Your Continuum of Care.
            </h2>
            <p className="text-foreground/55 font-sans text-base md:text-lg leading-relaxed">
              We are seeking treatment centers willing to invest in their
              clients&apos; healing beyond the clinical setting.
            </p>
          </div>

          {/* Trip formats */}
          <div className="grid md:grid-cols-3 gap-px bg-border mb-20">
            {FORMATS.map((f) => (
              <div
                key={f.title}
                className="bg-[hsl(28,20%,5%)] flex flex-col gap-3 p-8 md:p-10"
              >
                <h3 className="font-display text-xl md:text-2xl text-foreground leading-tight">
                  {f.title}
                </h3>
                <p className="text-foreground/50 font-sans text-sm leading-relaxed">
                  {f.body}
                </p>
              </div>
            ))}
          </div>

          {/* What organizations receive */}
          <div className="max-w-[42rem]">
            <p className="text-[#c4813d] text-[0.65rem] tracking-[0.35em] uppercase font-sans mb-7">
              What Your Organization Receives
            </p>
            <ul className="flex flex-col gap-5">
              {RECEIVES.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="shrink-0 mt-1 text-[#c4813d]/70 font-sans text-sm leading-none">
                    ✓
                  </span>
                  <span className="text-foreground/65 font-sans text-base leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Who This Is For ─────────────────────────────────────── */}
      <section
        id="who-this-is-for"
        className="relative border-t border-border py-24 md:py-40 px-8 md:px-16 lg:px-24 overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(140, 70, 12, 0.14) 0%, transparent 65%), " +
            "hsl(28, 28%, 4%)",
        }}
      >
        <div className="max-w-[52rem] mx-auto flex flex-col gap-8 text-center">
          <p className="font-display italic text-[clamp(1.5rem,3.5vw,2.5rem)] text-foreground/80 leading-[1.3]">
            The men we take into the wilderness are not looking for a
            vacation. They are looking for a reason to believe in themselves
            again.
          </p>
          <p className="font-display italic text-[clamp(1.5rem,3.5vw,2.5rem)] text-foreground/80 leading-[1.3]">
            They are looking to be seen — not as their diagnosis, not as
            their history — but as men with gifts, with depth, with something
            worth fighting for.
          </p>
          <p className="font-display italic text-[clamp(1.5rem,3.5vw,2.5rem)] text-foreground/80 leading-[1.3]">
            This is for the man who has tried everything and still feels like
            something essential is missing. Whose healing has happened in
            rooms, and now needs to happen in the open air. Whose brotherhood
            has been broken, and who is ready — cautiously, honestly — to
            trust again.
          </p>
          <p className="font-display italic text-[clamp(1.5rem,3.5vw,2.5rem)] text-[#c4813d]/85 leading-[1.3]">
            We believe every man deserves that chance.
          </p>
        </div>
      </section>

      {/* ── Contact Form ────────────────────────────────────────── */}
      <section
        id="contact"
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
              Contact
            </p>
            <h2 className="font-display text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.0] text-foreground mb-6">
              Let&apos;s Build Something<br />Together.
            </h2>
            <p className="text-foreground/45 font-sans text-base leading-relaxed max-w-lg">
              We are actively seeking 2 to 3 founding partner organizations in
              the Austin area to help shape what this program becomes.
              Founding partners will have direct input into program design,
              scheduling, and assessment frameworks.
            </p>
          </div>

          <PartnershipInquiryForm />
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────── */}
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
