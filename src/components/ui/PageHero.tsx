import Image from "next/image";

import { pageGutterClass } from "@/components/ui/PageContainer";
import { cn } from "@/lib/utils";

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
    <section className="relative w-full overflow-hidden border-b border-[var(--border)]">
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
          className="absolute inset-0 bg-gradient-to-b from-[var(--background)]/96 via-[var(--background)]/88 to-[var(--background)]/78 sm:bg-gradient-to-r sm:from-[var(--background)]/95 sm:via-[var(--background)]/85 sm:to-[var(--background)]/55"
          aria-hidden
        />
      </div>
      <div
        className={cn(
          "relative mx-auto w-full max-w-6xl py-12 sm:py-20 lg:py-24",
          pageGutterClass,
        )}
      >
        {children}
      </div>
    </section>
  );
}
