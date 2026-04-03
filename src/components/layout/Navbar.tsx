"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { SITE_NAME } from "@/lib/site";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/productos", label: "Productos" },
  { href: "/contacto", label: "Contacto" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="flex min-h-14 min-w-0 max-w-[min(100%,18rem)] items-center gap-2 py-2 text-sm font-semibold tracking-tight text-[var(--foreground)] sm:max-w-none sm:text-base md:text-lg"
        >
          <Image
            src="/logo.png"
            alt={SITE_NAME}
            width={40}
            height={40}
            className="size-9 shrink-0 object-contain"
            priority
          />
          <span className="min-w-0 leading-snug sm:leading-tight">
            {SITE_NAME}
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Principal"
        >
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                pathname === href
                  ? "bg-[var(--accent)] text-[var(--foreground)]"
                  : "text-[var(--muted)] hover:bg-[var(--accent)]/60 hover:text-[var(--foreground)]",
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-[var(--foreground)] md:hidden"
              aria-label="Abrir menú"
            >
              <Menu className="size-6" />
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-50 bg-black/40" />
            <Dialog.Content className="fixed inset-y-0 right-0 z-50 flex w-[min(100%,20rem)] flex-col border-l border-[var(--border)] bg-[var(--background)] p-6 shadow-lg outline-none">
              <Dialog.Description className="sr-only">
                Enlaces principales del sitio
              </Dialog.Description>
              <div className="mb-6 flex items-center justify-between">
                <Dialog.Title className="text-lg font-semibold">
                  Menú
                </Dialog.Title>
                <Dialog.Close asChild>
                  <button
                    type="button"
                    className="rounded-md p-2 text-[var(--muted)] hover:bg-[var(--accent)] hover:text-[var(--foreground)]"
                    aria-label="Cerrar menú"
                  >
                    <X className="size-5" />
                  </button>
                </Dialog.Close>
              </div>
              <nav className="flex flex-col gap-1" aria-label="Móvil">
                {links.map(({ href, label }) => (
                  <Dialog.Close asChild key={href}>
                    <Link
                      href={href}
                      className={cn(
                        "rounded-md px-3 py-3 text-base font-medium",
                        pathname === href
                          ? "bg-[var(--accent)] text-[var(--foreground)]"
                          : "text-[var(--muted)] hover:bg-[var(--accent)]/60",
                      )}
                    >
                      {label}
                    </Link>
                  </Dialog.Close>
                ))}
              </nav>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  );
}
