"use client";

import { useState } from "react";
import { Download, FileText, Loader2 } from "lucide-react";

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

export function ResumeActions() {
  const [downloading, setDownloading] = useState(false);

  async function downloadPDF() {
    try {
      setDownloading(true);
      const res = await fetch("/resume.pdf");
      if (!res.ok) throw new Error("Failed to fetch PDF");
      const blob = await res.blob();
      saveAs(blob, "JoshuaFajobi-Resume.pdf");
    } catch (err) {
      console.error("Download failed:", err);
      alert("Failed to download PDF. Please try again.");
    } finally {
      setDownloading(false);
    }
  }

  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={downloadPDF}
        disabled={downloading}
        className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition hover:bg-primary/90 disabled:opacity-50"
      >
        {downloading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Generating...
          </>
        ) : (
          <>
            <Download className="h-4 w-4" />
            Download PDF
          </>
        )}
      </button>
      <a
        href="/api/resume.json"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:bg-border/40"
      >
        <FileText className="h-4 w-4" />
        View JSON
      </a>
    </div>
  );
}
