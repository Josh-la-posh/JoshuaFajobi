import { NextResponse } from "next/server";
import { renderToStream } from "@react-pdf/renderer";
import { resume } from "@/data/resume";
import { ResumePDF } from "@/components/resume/ResumePDF";

export const dynamic = "force-dynamic";

export async function GET() {
  const stream = await renderToStream(<ResumePDF data={resume} />);
  return new NextResponse(stream as unknown as ReadableStream, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="JoshuaFajobi-Resume.pdf"`,
      "Cache-Control": "no-store",
    },
  });
}
