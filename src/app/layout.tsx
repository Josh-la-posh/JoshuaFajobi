import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Joshua Fajobi — Frontend Engineer",
  description: "Frontend Engineer (React/Next.js/Flutter) with product thinking.",
  metadataBase: new URL("https://your-domain.com"),
  openGraph: {
    title: "Joshua Fajobi — Frontend Engineer",
    description: "React, Next.js, Flutter | Product-minded, performance-focused.",
    url: "https://your-domain.com",
    siteName: "Joshua Fajobi",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Portfolio" }],
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen antialiased font-sans">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="mx-auto w-full max-w-6xl px-4 py-10">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
