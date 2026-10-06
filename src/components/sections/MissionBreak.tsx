import Image from "next/image";

export default function MissionBreak() {
  return (
    <div className="relative w-full aspect-[3/2] overflow-hidden bg-[hsl(28,28%,4%)]">
      {/* Photo fills edge-to-edge at its native 3:2 ratio — the section is
          sized to match, so nothing is cropped and nothing is letterboxed. */}
      <Image
        src="/On_The_Trail.jpg"
        alt="A man walking barefoot through a creek crossing on a backcountry trail, golden fall trees rising behind him"
        fill
        className="object-cover object-center"
      />

      {/* Dark vignette top and bottom */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, hsl(28,28%,4%) 0%, transparent 18%, transparent 82%, hsl(28,28%,4%) 100%)",
        }}
      />

      {/* Logo watermark — bottom right. A true transparent PNG, so it sits
          directly on the photo with no background box. */}
      <div className="absolute bottom-6 right-8 md:bottom-8 md:right-10 z-10 pointer-events-none">
        <Image
          src="/Trails_Logo_Transparent.png"
          alt="Trails of Transformation"
          width={120}
          height={120}
          className="w-[64px] md:w-[96px] h-auto object-contain opacity-80"
        />
      </div>

      {/* Centered text overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <p
          className="font-display italic text-foreground/80 text-[clamp(1.25rem,3vw,2rem)] tracking-wide text-center px-8 drop-shadow-lg"
          style={{ textShadow: "0 2px 24px rgba(0,0,0,0.8)" }}
        >
          &ldquo;This isn&apos;t about the miles.<br />It&apos;s about what the miles uncover.&rdquo;
        </p>
      </div>
    </div>
  );
}
