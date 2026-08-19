import { NextResponse, type NextRequest } from "next/server";

const PROTECTED = "/investors";
const LOGIN_PATH = "/investors/login";
const COOKIE_NAME = "boa_ir_session";
const SESSION_VALUE = "authenticated"; // opaque marker; validated in route handler

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Only guard /investors and its children — but allow the login page + API
  if (!pathname.startsWith(PROTECTED)) return NextResponse.next();
  if (pathname.startsWith(LOGIN_PATH)) return NextResponse.next();

  const cookie = req.cookies.get(COOKIE_NAME)?.value;
  if (cookie === SESSION_VALUE) return NextResponse.next();

  const url = req.nextUrl.clone();
  url.pathname = LOGIN_PATH;
  url.searchParams.set("from", pathname);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/investors/:path*"],
};
