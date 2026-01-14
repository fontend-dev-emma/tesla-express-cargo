import { NextResponse } from "next/server";
import { getUser } from "./app/_lib/actions";

export async function middleware(req) {
  const url = req.nextUrl;
  const pathname = url.pathname;

  if (pathname.startsWith("/login") || pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  const user = await getUser();

  if (!user) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  const role = user.user_metadata?.role;

  if (role !== "admin") {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
