import { NextResponse } from "next/server";
import { biz } from "@/lib/business";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body) return new NextResponse("Bad request", { status: 400 });

  // Honeypot: a bot filled a field no human can see.
  // Return 200 so it doesn't learn anything.
  if (body.company_website) return NextResponse.json({ ok: true });

  const { name, phone, email, address, kind, details } = body;
  if (!name || !phone || !details) {
    return new NextResponse("Missing required fields", { status: 400 });
  }

  const key = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM; // e.g. "site@theirdomain.com"
  if (!key || !from) {
    console.error("Contact form: RESEND_API_KEY or CONTACT_FROM not set");
    return new NextResponse("Email is not configured yet", { status: 500 });
  }

  const lines = [
    `Name:     ${name}`,
    `Phone:    ${phone}`,
    `Email:    ${email || "—"}`,
    `Address:  ${address || "—"}`,
    `Type:     ${kind || "—"}`,
    "",
    details,
  ].join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: `${biz.name} website <${from}>`,
      to: [biz.email],
      reply_to: email || undefined,
      subject: `Website request — ${name} (${phone})`,
      text: lines,
    }),
  });

  if (!res.ok) {
    console.error("Resend error", res.status, await res.text());
    return new NextResponse("Could not send", { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
