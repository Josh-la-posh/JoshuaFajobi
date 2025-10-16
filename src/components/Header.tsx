"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";

const nav = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-card/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-semibold">Joshua Fajobi</Link>
        <nav className="hidden gap-6 md:flex">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={cn(
                "text-sm transition hover:text-primary",
                pathname === n.href ? "text-primary font-medium" : "text-muted"
              )}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="/resume"
            className="rounded-lg border border-border px-3 py-1.5 text-sm hover:bg-border/40"
          >
            Resume
          </a>
          <button
            aria-label="Toggle theme"
            className="rounded-lg border border-border p-2 hover:bg-border/40"
            onClick={() => setTheme((resolvedTheme === "dark" ? "light" : "dark"))}
          >
            {mounted && resolvedTheme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </div>
    </header>
  );
}
