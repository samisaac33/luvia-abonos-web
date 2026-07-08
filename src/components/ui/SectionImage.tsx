import Image from "next/image";

type SectionImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export function SectionImage({ src, alt, className = "" }: SectionImageProps) {
  return (
    <div
      className={`relative aspect-[16/9] overflow-hidden rounded-2xl border border-[var(--border)] ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 768px"
      />
    </div>
  );
}
