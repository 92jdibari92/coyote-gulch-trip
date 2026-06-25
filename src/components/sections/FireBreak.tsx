import Image from "next/image";

export default function FireBreak() {
  return (
    <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
      <Image
        src="/fire.JPG"
        alt="Campfire in the canyon at night"
        fill
        className="object-cover object-center"
      />
      {/* Dark vignette top and bottom */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, hsl(28,28%,4%) 0%, transparent 25%, transparent 75%, hsl(28,28%,4%) 100%)",
        }}
      />
      {/* Logo watermark — bottom right */}
      <div className="absolute bottom-6 right-8 md:bottom-8 md:right-10 z-10 pointer-events-none">
        <Image
          src="/Trails logo.PNG"
          alt="Trails of Transformation"
          width={120}
          height={40}
          className="w-[80px] md:w-[120px] h-auto object-contain opacity-70"
        />
      </div>

      {/* Centered text overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="font-display italic text-foreground/80 text-[clamp(1.25rem,3vw,2rem)] tracking-wide text-center px-8 drop-shadow-lg"
          style={{ textShadow: "0 2px 24px rgba(0,0,0,0.8)" }}
        >
          &ldquo;Cold nights. Warm fires.<br />The kind of clarity that only comes
          from days in the wild.&rdquo;
        </p>
      </div>
    </div>
  );
}
