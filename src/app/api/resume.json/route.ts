import { NextResponse } from "next/server";
import { resume } from "@/data/resume";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json(resume, {
    headers: {
      "Cache-Control": "no-store",
    }
  });
}
