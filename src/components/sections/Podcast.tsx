const INTRO_VIDEO = "https://www.youtube.com/embed/Y17n9cbWn7s";
const EPISODE_1   = "https://www.youtube.com/embed/8FXBrcMNfbU";
const EPISODE_2   = "https://www.youtube.com/embed/sMj7h7CIdaY";

function VideoEmbed({ src, title }: { src: string; title: string }) {
  return (
    <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
      <iframe
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full border-0"
      />
    </div>
  );
}

export default function Podcast() {
  return (
    <section
      id="podcast"
      className="border-t border-border py-28 md:py-40 px-8 md:px-16 lg:px-24"
    >
      <div className="max-w-[90rem] mx-auto">

        {/* Header */}
        <div className="mb-16 md:mb-20 max-w-3xl">
          <p className="text-[#c4813d] text-[0.65rem] tracking-[0.35em] uppercase font-sans mb-5">
            The Podcast
          </p>
          <h2 className="font-display text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.0] text-foreground mb-6">
            Trails of Transformation
          </h2>
          <p className="font-display italic text-xl text-foreground/60 mb-8 leading-snug">
            Stories from the edge of the inner wilderness.
          </p>
          <p className="text-foreground/50 font-sans text-base leading-relaxed max-w-2xl">
            Conversations with individuals who have dedicated themselves courageously to their craft and way of being — the tools they have deployed, the perspectives they have gained, and the visions they carry forward. This is not an interview show. It is a devotion.
          </p>
        </div>

        {/* Intro video */}
        <div className="mb-20 md:mb-28">
          <p className="text-[#c4813d] text-[0.65rem] tracking-[0.35em] uppercase font-sans mb-5">
            Watch the Introduction
          </p>
          <div className="w-full mx-auto" style={{ maxWidth: "800px" }}>
            <VideoEmbed src={INTRO_VIDEO} title="Trails of Transformation — Introduction" />
          </div>
        </div>

        {/* Episodes */}
        <div>
          <h3 className="font-display text-2xl md:text-3xl text-[#c4813d] mb-10">
            Latest Episodes
          </h3>
          <div className="grid md:grid-cols-2 gap-px bg-border">
            <div className="bg-background">
              <VideoEmbed src={EPISODE_1} title="Trails of Transformation — Episode 1" />
            </div>
            <div className="bg-background">
              <VideoEmbed src={EPISODE_2} title="Trails of Transformation — Episode 2" />
            </div>
          </div>
          <p className="text-foreground/25 font-sans text-xs tracking-[0.15em] mt-8 text-center">
            More episodes coming soon — available on YouTube. Spotify coming soon.
          </p>
        </div>

      </div>
    </section>
  );
}
