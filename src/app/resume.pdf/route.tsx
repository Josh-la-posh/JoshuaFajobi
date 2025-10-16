import React from "react";
import { NextResponse } from "next/server";
import { renderToBuffer } from "@react-pdf/renderer";
import { resume } from "@/data/resume";
import { ResumePDF } from "@/components/resume/ResumePDF";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET(request: Request) {
  try {
    const buffer = await renderToBuffer(<ResumePDF data={resume} />);
    // Simple ETag (weak) based on byte length + a stable hash component
    const text = Buffer.from(buffer).toString("base64");
    const etag = `W/\"resume-${buffer.byteLength}-${text.slice(0,16)}\"`;
    const ifNoneMatch = request.headers.get("if-none-match");
    if (ifNoneMatch === etag) {
      return new Response(null, { status: 304, headers: { ETag: etag } });
    }
    const uint8 = new Uint8Array(buffer);
    return new Response(uint8, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=\"JoshuaFajobi-Resume.pdf\"",
        "Content-Length": String(buffer.byteLength),
        "Cache-Control": "public, max-age=3600, must-revalidate", // cache for 1h; adjust if resume changes frequently
        "ETag": etag,
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch (e) {
    console.error("Resume PDF error", e);
    return NextResponse.json({ error: "Failed to render PDF" }, { status: 500 });
  }
}
