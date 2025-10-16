"use client";
import React from "react";
import { resume } from "@/data/resume";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean;
  variant?: "primary" | "secondary";
};

function Button({ isLoading = false, variant = "primary", className = "", children, ...rest }: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-colors disabled:opacity-50 disabled:pointer-events-none";
  const variants: Record<string, string> = {
    primary: "bg-blue-600 text-white hover:bg-blue-600/90",
    secondary: "border border-border bg-card hover:bg-border/40 text-foreground",
  };
  return (
    <button {...rest} disabled={isLoading || rest.disabled} className={`${base} ${variants[variant]} ${className}`}>{isLoading ? "Loading..." : children}</button>
  );
}

function saveAs(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

export function ClientResume() {
  const [downloading, setDownloading] = React.useState(false);

  async function downloadPDF() {
    try {
      setDownloading(true);
      const res = await fetch("/api/resume.pdf");
      const blob = await res.blob();
      saveAs(blob, "JoshuaFajobi-Resume.pdf");
    } finally {
      setDownloading(false);
    }
  }

  return (
    <div className="flex flex-wrap gap-2">
      <Button onClick={downloadPDF} isLoading={downloading}>Download PDF</Button>
      <a
        href="/api/resume"
        className="inline-flex items-center justify-center rounded-lg border border-border bg-card px-4 py-2 text-sm hover:bg-border/40"
        target="_blank"
        rel="noreferrer"
      >View JSON</a>
      <Button
        variant="secondary"
        onClick={() => navigator.clipboard.writeText(`${window.location.origin}/api/resume`)}
      >Copy JSON Link</Button>
    </div>
  );
}
