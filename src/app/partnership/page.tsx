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
    image: "https://static.showit.co/1200/s1tsl7HcSXqlOHMvJZsrIQ/223164/tezza-0668.jpg",
  },
  {
    n: "02",
    title: "Vulnerable Brotherhood",
    body: "Small groups of 6 to 8 men, guided intentionally through shared challenge and shared presence. Being witnessed in your struggle — and witnessing others in theirs — builds a quality of trust and connection that transforms how men understand themselves and each other.",
    image: "/hero.jpeg",
  },
  {
    n: "03",
    title: "Inner Wilderness Exploration",
    body: "The external journey mirrors the internal one. As men navigate terrain, they navigate themselves. Facilitated reflection, honest conversation around the fire, and intentional silence create space for insight, grief, and breakthrough.",
    image: "/Cooking.jpg",
  },
  {
    n: "04",
    title: "Embodied Healing",
    body: "Physical challenge, time in nature, and the absence of digital distraction recalibrate the nervous system in ways that extend long beyond the trip itself. Men return different — not because something was added, but because something was remembered.",
    image: "https://static.showit.co/1200/bZMhPo2tSiGVn4lH213YXA/223164/img_0489.jpg",
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

const EXPERIENCE = [
  {
    n: "01",
    title: "The Opening Circle",
    body: "On the first evening, before the trail begins, the group gathers around the fire. Each man shares two things: what he is leaving behind on this trip, and what he is hoping to find. This single practice does more in twenty minutes than most programs accomplish in a week. It creates immediate permission for honesty, establishes that this is a different kind of experience, and reminds every man in the circle that he is not alone in what he carries.",
  },
  {
    n: "02",
    title: "Daily Morning Check-In",
    body: "Each morning begins with a simple question before boots hit the trail. How did you sleep? What is alive in you today? These are not therapy prompts — they are presence practices. They train men to track their inner state rather than suppress it. Over the course of a week in the wilderness, this daily ritual becomes one of the most anticipated moments of the day.",
  },
  {
    n: "03",
    title: "Evening Fire Conversations",
    body: "Every evening, the group gathers around the fire for one structured conversation. A question is offered. Men respond when they are ready. There is no cross-talk, no fixing, no advice. Just honest men speaking and being heard — often for the first time in their lives. Questions include: Tell us about the first man you ever looked up to — and what happened to that. What do you want the men in your life to know about you that they do not? What are you most afraid of returning to when this trip ends? These conversations do not replace therapy. They make therapy more possible.",
  },
  {
    n: "04",
    title: "Man of the Day",
    body: "Each day, one man leads. He chooses an activity, a teaching, a practice, or a skill he cares about — and he brings it to the group. One man might lead a breathwork session. Another might teach the group to identify edible plants. Another might share a poem that saved his life, or lead the group in a song, or teach everyone how to read a topographic map. The activity itself matters less than what it represents: a man being seen in his competence, his passion, and his knowledge. For men who have largely been witnessed in their brokenness, being witnessed in their power is one of the most quietly transformative moments of the entire expedition. We call it Man of the Day — and it becomes, for most men, the thing they talk about long after the trip ends.",
  },
  {
    n: "05",
    title: "Solo Time",
    body: "On one afternoon mid-expedition, each man is given two to three hours of intentional solitude in the wilderness. He goes alone, with a journal prompt, into the landscape. The prompt is simple: Write a letter to the version of yourself who was at his lowest. Tell him what you know now. Silence and solitude in wild places do things that cannot be manufactured in any clinical setting. Men return from solo time changed — quieter, clearer, and more their own.",
  },
  {
    n: "06",
    title: "The Closing Ceremony",
    body: "On the final evening, the group gathers one last time. Each man offers one word for what he is carrying home, and one commitment he is making to himself — spoken aloud, witnessed by every man in the circle. The expedition is then closed with prayer and gratitude. This ceremony marks the trip as a threshold. There is a before. There is an after. And the men who stand in that circle know the difference.",
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

      {/* ── Expedition Photo ─────────────────────────────────────── */}
      <div className="relative w-full h-[500px] border-t border-border">
        <Image
          src="/email-photo.JPG"
          alt="Coyote Gulch canyon landscape from a previous Trails of Transformation expedition"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#0d0a07]/20" />
      </div>
      <p className="bg-background text-center italic text-foreground/40 font-sans text-sm py-6 px-8">
        Glacier National Park, Montana — a previous Trails of Transformation expedition.
      </p>

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
                className="bg-[oklch(0.095_0.013_57)] hover:bg-[oklch(0.12_0.016_57)] transition-colors duration-300 flex flex-col"
              >
                <div className="relative w-full h-[320px] rounded-t-sm overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover object-center"
                  />
                </div>
                <div className="p-8 md:p-10 flex flex-col gap-4">
                  <span className="font-mono text-[#c4813d]/40 text-xs">{p.n}</span>
                  <h3 className="font-display text-xl md:text-2xl text-foreground leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-foreground/45 font-sans text-sm leading-relaxed">
                    {p.body}
                  </p>
                </div>
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
        <div className="max-w-[70rem] mx-auto">
          <p className="text-[#c4813d] text-[0.65rem] tracking-[0.35em] uppercase font-sans mb-6">
            This Is Personal
          </p>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] text-foreground mb-12">
            This Is Personal.
          </h2>

          <div className="grid md:grid-cols-[400px,1fr] gap-10 md:gap-14 items-start">
            <div className="relative w-full max-w-[400px] h-[500px] rounded-lg overflow-hidden border border-[#c4813d]/20 mx-auto md:mx-0 shrink-0">
              <Image
                src="/Explore_Austin.jpg"
                alt="John Thomas di Bari leading young men in the wilderness through Explore Austin"
                fill
                sizes="(min-width: 768px) 400px, 100vw"
                className="object-cover object-top"
              />
            </div>

            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-6 text-foreground/60 font-sans text-base md:text-lg leading-relaxed">
                <p>
                  I know what addiction costs. I have paid some of that price
                  myself — and watched people I love pay the rest.
                </p>
                <p>
                  In my early twenties, I was asked to leave UT for two
                  semesters. I was kicked out of the dorms. I lost my job. I
                  was arrested. I woke up in a hospital. What I could not see
                  then — what addiction rarely lets you see — is that
                  beneath the drinking was a young man who had no idea who
                  he was, what he felt, or how to say any of it out loud.
                </p>
                <p>
                  It was outpatient treatment at La Hacienda, and
                  backpacking, that began to change that. Not because
                  someone fixed me. But because for the first time, I was in
                  an environment that asked something true of me — and gave
                  me the space to respond honestly.
                </p>
                <p>
                  My father drank throughout my childhood. I spent years
                  holding my breath, waiting for our family to fall apart,
                  watching my mother plead with him to stop. My uncle — the
                  man I hunted and fished with, whose laugh I can still hear
                  — became addicted to alcohol and pain medication. The
                  damage he left behind still moves through our family like
                  a current. He died in an HEB, alone, after falling and
                  hitting his head.
                </p>
                <p>
                  Addiction does not stay in one person. It travels. It
                  inherits. It waits.
                </p>
                <p>
                  For six years I worked with Explore Austin — taking young
                  men from underserved communities in Austin into the
                  wilderness, from sixth grade through senior year of high
                  school. I watched boys who had never been seen as leaders
                  become exactly that. I watched confidence grow in real
                  time, out on a trail, at the edge of something hard and
                  beautiful. I watched what happens when a young man is
                  witnessed by a safe, caring, present man — and realizes
                  for the first time that he is worth witnessing.
                </p>
                <p>
                  That is why I built Trails of Transformation. Not as a
                  program. As an answer to something I have lived.
                </p>
                <p>
                  I believe in this work the way I believe in water —
                  because I know what it is to be thirsty, and I know what
                  it is to finally drink.
                </p>
              </div>

              <blockquote className="border-l-2 border-[#c4813d] pl-6 md:pl-8 py-2">
                <p className="font-display italic text-xl md:text-2xl text-foreground/75 leading-snug mb-4">
                  &ldquo;The wilderness does not fix you. It shows you that
                  you were never broken — only lost. And it gives you the
                  landscape to find your way back.&rdquo;
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
          </div>
        </div>
      </section>

      {/* ── What the Experience Looks Like ──────────────────────── */}
      <section
        id="the-experience"
        className="relative border-t border-border py-24 md:py-40 px-8 md:px-16 lg:px-24 overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(140, 70, 12, 0.12) 0%, transparent 65%), " +
            "hsl(28, 28%, 4%)",
        }}
      >
        <div className="relative z-10 max-w-[64rem] mx-auto">
          <p className="text-[#c4813d] text-[0.65rem] tracking-[0.35em] uppercase font-sans mb-6">
            The Container
          </p>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] text-foreground mb-8">
            What the Experience Looks Like.
          </h2>
          <p className="text-foreground/55 font-sans text-base md:text-lg leading-relaxed max-w-3xl mb-16 md:mb-20">
            Every Trails of Transformation expedition is built on a simple
            conviction — that the wilderness does the deepest work when it is
            held inside an intentional container. These are not casual
            camping trips. They are structured threshold experiences,
            designed to move men from isolation into connection, from shame
            into honesty, and from survival into something that feels worth
            surviving for. Here is how we hold that container.
          </p>

          <div className="w-full max-w-[900px] mx-auto mb-16 md:mb-20">
            <div className="relative w-full aspect-video rounded-lg border border-[#c4813d]/40 overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/XEY4nwOa7ws"
                title="Trails of Transformation — 2024 Coyote Gulch Expedition"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <p className="text-center italic text-foreground/40 font-sans text-sm mt-5">
              A window into what awaits — footage from a mens trip to Coyote
              Gulch in 2024.
            </p>
          </div>

          <div className="flex flex-col gap-14 md:gap-16 mb-16">
            {EXPERIENCE.map((e) => (
              <div key={e.n} className="border-t border-border/60 pt-10 first:border-t-0 first:pt-0">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="font-mono text-[#c4813d]/40 text-xs shrink-0">{e.n}</span>
                  <h3 className="font-display text-2xl md:text-3xl text-[#c4813d] leading-snug">
                    {e.title}
                  </h3>
                </div>
                <p className="text-foreground/65 font-sans text-base md:text-lg leading-relaxed max-w-3xl">
                  {e.body}
                </p>
              </div>
            ))}
          </div>

          <p className="text-foreground/55 font-sans text-base md:text-lg leading-relaxed max-w-3xl border-t border-border/60 pt-10">
            Before departure, we coordinate directly with each client&apos;s
            treatment team — establishing clinical context and any relevant
            considerations for their time in the field. When the expedition
            ends, we provide a written summary of each participant&apos;s
            engagement and breakthroughs to support continuity of care. This
            is not an add-on to your program. It is an extension of it.
          </p>
        </div>
      </section>

      {/* ── A Gap Worth Filling ──────────────────────────────────── */}
      <section
        id="gap-worth-filling"
        className="relative border-y border-[#c4813d]/25 py-24 md:py-40 px-8 md:px-16 lg:px-24 overflow-hidden"
      >
        {/* Background photo */}
        <Image
          src="/Wide_Canyon.jpg"
          alt="Wide canyon landscape in the American Southwest"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Dark overlay — keeps text clearly readable over the canyon photo */}
        <div className="absolute inset-0 bg-[#0d0a07]/55" />

        {/* Grain texture — sets this section apart from its neighbors */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
            backgroundSize: "200px 200px",
          }}
        />

        {/* Top and bottom accent lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c4813d]/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c4813d]/50 to-transparent" />

        <div className="relative z-10 max-w-[52rem] mx-auto">
          <p className="text-[#c4813d] text-[0.65rem] tracking-[0.35em] uppercase font-sans mb-6">
            A Gap Worth Filling
          </p>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] text-[#c4813d] mb-10">
            A Gap Worth Filling.
          </h2>

          <div className="flex flex-col gap-6 text-foreground/65 font-sans text-base md:text-lg leading-relaxed">
            <p>
              Austin has exceptional addiction treatment. The Last Resort
              Recovery. Heartwood Recovery. The Arbor. Driftwood Courageous
              Recovery. These are serious programs doing serious work, and
              the men who pass through their doors are fortunate to have
              them.
            </p>
            <p>
              What none of them offer — what no treatment center in Austin
              currently offers — is this: a structured, multi-day
              backcountry wilderness expedition as part of a man&apos;s
              continuum of care.
            </p>
            <p>
              Equine therapy. Music therapy. Ropes courses. On-site hiking
              trails. These are powerful tools, and they belong in
              treatment. But they all share one limitation: they happen on
              campus. The wilderness they offer is managed, contained, and
              within walking distance of a clinical building.
            </p>
            <p>
              What happens when you take a man forty miles into canyon
              country with nothing but what he can carry? When there is no
              campus to retreat to, no phone to reach for, no performance to
              maintain? When the only thing between him and the stars is a
              tent he put up himself?
            </p>
            <p>
              Something shifts. Something that cannot be replicated on a
              ropes course or in a therapy room or on a ranch in South
              Austin. The research confirms it. The men who have done it
              confirm it. And we confirm it — because we have lived it.
            </p>
            <p>
              Trails of Transformation is not a treatment center. We are not
              trying to be. We are the thing that happens after the clinical
              work has begun — the experience that reaches the parts that
              treatment alone cannot touch. We are the missing piece in
              Austin&apos;s continuum of care.
            </p>
            <p className="text-foreground/80">
              We are actively seeking 2 to 3 founding partner organizations
              who want to be the first in this city to offer their clients
              something no one else can. The organizations that say yes to
              this will be doing something genuinely new — and genuinely
              powerful — for the men in their care.
            </p>
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
