import { cn } from "@/lib/utils";

export const pageGutterClass = "px-4 sm:px-6";
export const pageSectionYClass = "py-10 sm:py-14 lg:py-16";

type PageContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "article";
};

export function PageContainer({
  children,
  className,
  as: Component = "div",
}: PageContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto w-full max-w-6xl min-w-0",
        pageGutterClass,
        pageSectionYClass,
        className,
      )}
    >
      {children}
    </Component>
  );
}

type PageArticleProps = {
  children: React.ReactNode;
  className?: string;
};

export function PageArticle({ children, className }: PageArticleProps) {
  return (
    <article
      className={cn(
        "mx-auto w-full max-w-3xl min-w-0",
        pageGutterClass,
        pageSectionYClass,
        className,
      )}
    >
      {children}
    </article>
  );
}

type PageSectionProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "card";
  id?: string;
  "aria-labelledby"?: string;
};

export function PageSection({
  children,
  className,
  variant = "default",
  id,
  "aria-labelledby": ariaLabelledBy,
}: PageSectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={cn(
        variant === "card" && "border-t border-[var(--border)] bg-[var(--card)]",
        "w-full max-w-full min-w-0",
        className,
      )}
    >
      <PageContainer>{children}</PageContainer>
    </section>
  );
}
