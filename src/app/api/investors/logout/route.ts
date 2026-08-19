import { NextResponse, type NextRequest } from "next/server";

const COOKIE_NAME = "boa_ir_session";

export async function POST(req: NextRequest) {
  const res = NextResponse.redirect(new URL("/investors/login", req.url), {
    status: 303,
  });
  res.cookies.set(COOKIE_NAME, "", {
    httpOnly: true,
    path: "/",
    maxAge: 0,
  });
  return res;
}
