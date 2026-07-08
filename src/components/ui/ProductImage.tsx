import Image from "next/image";

type ProductImageProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

export function ProductImage({
  src,
  alt,
  className = "",
  priority = false,
}: ProductImageProps) {
  return (
    <div
      className={`relative aspect-[4/3] overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--accent)] ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}
