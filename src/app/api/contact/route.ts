import { NextResponse, type NextRequest } from "next/server";
import { Resend } from "resend";
import { rateLimit } from "@/lib/rate-limit";
import { verifyTurnstile } from "@/lib/turnstile";

type Payload = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  message: string;
  turnstileToken?: string;
  // honeypot — should be empty
  company?: string;
};

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-vercel-forwarded-for")?.split(",")[0].trim() ??
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";
  const gate = await rateLimit(`contact:${ip}`, 5, 60_000);
  if (!gate.ok) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please try again shortly." },
      { status: 429 },
    );
  }

  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  // Honeypot — silent drop before any external verification call
  if (body.company && body.company.trim().length > 0) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const tsOk = await verifyTurnstile(body.turnstileToken, ip);
  if (!tsOk) {
    return NextResponse.json(
      { ok: false, error: "Verification failed. Please try again." },
      { status: 400 },
    );
  }

  const { firstName, lastName, email, phone, message } = body;
  if (
    !firstName?.trim() ||
    !lastName?.trim() ||
    !isEmail(email ?? "") ||
    !message?.trim() ||
    message.length > 5000
  ) {
    return NextResponse.json(
      { ok: false, error: "Please complete all required fields." },
      { status: 400 },
    );
  }

  const to = process.env.CONTACT_TO_EMAIL ?? "enquiries@blackoakglobal.com";
  const from = process.env.CONTACT_FROM_EMAIL ?? "website@blackoakglobal.com";
  const cc = (process.env.CONTACT_CC_EMAIL ?? "it@blackoak-re.com")
    .split(",")
    .map((e) => e.trim())
    .filter(Boolean);
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.warn("[contact] RESEND_API_KEY not set — logging enquiry instead.");
    console.log("[contact-enquiry]", { firstName, lastName, email, phone, message });
    return NextResponse.json({ ok: true, dev: true });
  }

  const resend = new Resend(apiKey);
  const subject = `Website enquiry — ${firstName} ${lastName}`;
  const text = [
    `Name: ${firstName} ${lastName}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    "",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    await resend.emails.send({
      from,
      to,
      cc: cc.length > 0 ? cc : undefined,
      replyTo: email,
      subject,
      text,
    });
  } catch (err) {
    console.error("[contact] Resend error", err);
    return NextResponse.json(
      { ok: false, error: "Delivery failed. Please email enquiries@blackoakglobal.com directly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
