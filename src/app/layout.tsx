import "./globals.css";
import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://joshua-fajobi.vercel.app";

export const metadata: Metadata = {
  title: {
    default: "Joshua Fajobi - Full-Stack Product Engineer",
    template: "%s | Joshua Fajobi",
  },
  description: "Full-Stack Product Engineer building fintech, healthcare, SaaS, and internal operations platforms.",
  metadataBase: new URL(siteUrl),
  manifest: "/manifest.json",
  openGraph: {
    title: "Joshua Fajobi - Full-Stack Product Engineer",
    description: "Fintech, healthcare, SaaS, payments, dashboards, and mobile product systems.",
    url: siteUrl,
    siteName: "Joshua Fajobi",
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: "Joshua Fajobi Portfolio" }],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joshua Fajobi - Full-Stack Product Engineer",
    description: "Fintech, healthcare, SaaS, payments, dashboards, and mobile product systems.",
    images: ["/og.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.svg", type: "image/svg+xml", sizes: "192x192" },
    ],
    apple: "/apple-touch-icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen antialiased font-sans">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
          >
            Skip to content
          </a>
          <Header />
          <main id="main-content" className="mx-auto w-full max-w-6xl px-4 py-10">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
