import { NextResponse } from "next/server";

// Deprecated: Use /resume.pdf instead. Provide permanent redirect (can be removed later).
export const dynamic = "force-static";

export async function GET() {
  return NextResponse.redirect(new URL("/resume.pdf", "http://localhost"), 308);
}
