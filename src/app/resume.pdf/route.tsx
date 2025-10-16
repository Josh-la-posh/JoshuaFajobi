import React from "react";
import { NextResponse } from "next/server";
import { renderToStream } from "@react-pdf/renderer";
import { resume } from "@/data/resume";
import { ResumePDF } from "@/components/resume/ResumePDF";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET() {
  try {
    const stream = await renderToStream(<ResumePDF data={resume} />);
    return new NextResponse(stream as unknown as ReadableStream, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=\"JoshuaFajobi-Resume.pdf\"",
        "Cache-Control": "no-store",
      },
    });
  } catch (e) {
    console.error("Resume PDF error", e);
    return NextResponse.json({ error: "Failed to render PDF" }, { status: 500 });
  }
}
