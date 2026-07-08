import Image from "next/image";

type PageHeroProps = {
  src: string;
  alt: string;
  children: React.ReactNode;
  priority?: boolean;
};

export function PageHero({
  src,
  alt,
  children,
  priority = false,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-[var(--border)]">
      <div className="absolute inset-0">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[var(--background)]/95 via-[var(--background)]/85 to-[var(--background)]/60"
          aria-hidden
        />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        {children}
      </div>
    </section>
  );
}
