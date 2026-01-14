"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => setMounted(true), []);
  useEffect(() => setMobileOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-card/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-semibold">Joshua Fajobi</Link>

        {/* Desktop Nav */}
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
            className="hidden sm:inline-flex rounded-lg border border-border px-3 py-1.5 text-sm hover:bg-border/40"
          >
            Resume
          </a>
          <button
            aria-label="Toggle theme"
            className="rounded-lg border border-border p-2 hover:bg-border/40"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          >
            {mounted && resolvedTheme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          {/* Mobile Menu Button */}
          <button
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="rounded-lg border border-border p-2 hover:bg-border/40 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileOpen && (
        <nav className="border-t border-border bg-card px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm transition hover:bg-border/40",
                  pathname === n.href ? "bg-primary/10 text-primary font-medium" : "text-muted"
                )}
              >
                {n.label}
              </Link>
            ))}
            <a
              href="/resume"
              className="rounded-lg border border-border px-3 py-2 text-sm text-center hover:bg-border/40"
            >
              Resume
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
