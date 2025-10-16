// Duplicate legacy file; actual implementation lives in route.tsx.
// Keeping this stub to avoid build errors from stale references.
import { NextResponse } from "next/server";
export const dynamic = "force-static";
export async function GET() {
  return NextResponse.redirect(new URL("/resume.pdf", "http://localhost:3000"));
}
