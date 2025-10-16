import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  // TODO: wire to Email/API of your choice
  console.log("[contact]", body);
  return NextResponse.json({ ok: true });
}
