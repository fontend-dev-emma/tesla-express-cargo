import { NextResponse } from "next/server";

export async function POST() {
  try {
    const res = NextResponse.json({ success: true });

    const cookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 0,
    };

    res.cookies.set({ name: "sb-access-token", value: "", ...cookieOptions });
    res.cookies.set({ name: "sb-refresh-token", value: "", ...cookieOptions });
    res.cookies.set({ name: "impersonating", value: "", ...cookieOptions });

    return res;
  } catch (err) {
    return NextResponse.json({ error: "Failed to logout" }, { status: 500 });
  }
}
