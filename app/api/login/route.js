import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

export async function POST(req) {
  try {
    const { validEmail, validPassword } = await req.json();

    const { data: validUser, error: getUserError } = await supabase.from("admins").select("password, role").eq("email", validEmail).single();

    if (getUserError || !validUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const match = await bcrypt.compare(validPassword + (process.env.PEPPER || ""), validUser.password);

    if (!match) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
      email: validEmail,
      password: validPassword,
    });

    if (authError || !authData?.session) {
      return NextResponse.json({ error: "Authentication failed" }, { status: 401 });
    }

    const { session, user: authUser } = authData;

    const res = NextResponse.json({ user: authUser, role: authUser?.user_metadata?.role || "user" }, { status: 200 });

    res.cookies.set({
      name: "sb-access-token",
      value: session.access_token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60,
    });

    res.cookies.set({
      name: "sb-refresh-token",
      value: session.refresh_token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
    });

    return res;
  } catch (err) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
