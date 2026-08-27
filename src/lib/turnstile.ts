const SITEVERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

let warnedMissingSecret = false;

type SiteverifyResponse = {
  success: boolean;
  "error-codes"?: string[];
};

export async function verifyTurnstile(
  token: string | undefined,
  ip: string,
): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  const isProd = process.env.NODE_ENV === "production";

  if (!secret) {
    if (isProd) {
      console.error(
        "[contact] TURNSTILE_SECRET_KEY missing in production — failing closed.",
      );
      return false;
    }
    if (!warnedMissingSecret) {
      console.warn(
        "[contact] TURNSTILE_SECRET_KEY not set — skipping verification (dev only).",
      );
      warnedMissingSecret = true;
    }
    return true;
  }

  if (!token || token.trim().length === 0) {
    return false;
  }

  const body = new URLSearchParams();
  body.set("secret", secret);
  body.set("response", token);
  if (ip && ip !== "unknown") body.set("remoteip", ip);

  try {
    const res = await fetch(SITEVERIFY_URL, {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body,
    });
    if (!res.ok) {
      console.error("[contact] Turnstile siteverify HTTP error", res.status);
      return false;
    }
    const data = (await res.json()) as SiteverifyResponse;
    if (!data.success) {
      console.warn("[contact] Turnstile rejected", data["error-codes"]);
    }
    return data.success === true;
  } catch (err) {
    console.error("[contact] Turnstile siteverify network error", err);
    return false;
  }
}
