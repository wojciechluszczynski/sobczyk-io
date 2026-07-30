import Image from "next/image";

type IllustrationProps = {
  src: string;
  alt: string;
  /** Wrapper classes — control width/centering/margins per section. */
  className?: string;
  /** Responsive size hint so mobile never fetches the full-width asset. */
  sizes?: string;
  priority?: boolean;
};

// Section illustration: a white-background line drawing dressed in the site's
// "sticker" language — 2px ink border, hard offset shadow, and the signature
// yellow glow behind it — so it reads as a native card, not a pasted-in image.
//
// The source art is 16:9 (1456×816); passing the intrinsic width/height lets
// the browser reserve aspect-ratio space up front (no layout shift), while
// `w-full h-auto` makes it scale fluidly down to the smallest phone.
export default function Illustration({
  src,
  alt,
  className = "",
  sizes = "(max-width: 768px) 100vw, 672px",
  priority = false,
}: IllustrationProps) {
  return (
    <div className={`relative ${className}`}>
      <div
        className="absolute -inset-3 bg-yellow/15 rounded-3xl blur-2xl pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative overflow-hidden rounded-2xl border-2 border-ink bg-white shadow-[4px_4px_0_0_#241c15]">
        <Image
          src={src}
          alt={alt}
          width={1456}
          height={816}
          sizes={sizes}
          priority={priority}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}
