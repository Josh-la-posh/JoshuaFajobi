import { NextResponse } from "next/server";

// Minimal security headers proxy. Extend CSP as needed.
export function proxy() {
  const response = NextResponse.next();
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  // Basic CSP allowing self assets and inline style for Tailwind injection (adjust later)
  response.headers.set(
    "Content-Security-Policy",
    [
      "default-src 'self'",
      "img-src 'self' data: https:" ,
      "script-src 'self' 'unsafe-inline'" ,
      "style-src 'self' 'unsafe-inline'" ,
      "font-src 'self' data:" ,
      "object-src 'none'",
      "frame-ancestors 'none'",
    ].join("; ")
  );
  return response;
}

export const config = {
  matcher: ["/:path*"],
};