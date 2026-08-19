import { NextResponse, type NextRequest } from "next/server";

const COOKIE_NAME = "boa_ir_session";
const SESSION_VALUE = "authenticated";

export async function POST(req: NextRequest) {
  const form = await req.formData();
  const password = String(form.get("password") ?? "");
  const from = String(form.get("from") ?? "/investors");

  const expected = process.env.INVESTOR_PORTAL_PASSWORD;
  if (!expected) {
    return NextResponse.json(
      { ok: false, error: "Portal not configured" },
      { status: 500 },
    );
  }

  if (password !== expected) {
    const url = new URL("/investors/login", req.url);
    url.searchParams.set("error", "1");
    if (from) url.searchParams.set("from", from);
    return NextResponse.redirect(url, { status: 303 });
  }

  const res = NextResponse.redirect(new URL(from || "/investors", req.url), {
    status: 303,
  });
  res.cookies.set(COOKIE_NAME, SESSION_VALUE, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 8, // 8 hours
  });
  return res;
}
