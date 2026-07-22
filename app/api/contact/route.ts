import { NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  intent?: string;
  message: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: Partial<ContactPayload>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, company, intent, message } = body;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  const backendUrl = process.env.BACKEND_URL;
  if (!backendUrl) {
    console.error("BACKEND_URL is not set — cannot forward contact form submission.");
    return NextResponse.json(
      { error: "Server misconfiguration. Please try again later." },
      { status: 500 }
    );
  }

  try {
    const backendRes = await fetch(`${backendUrl}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, company, intent, message }),
      cache: "no-store",
    });

    const data = await backendRes.json().catch(() => ({}));

    if (!backendRes.ok) {
      return NextResponse.json(
        { error: data.error || data.message || "Something went wrong. Please try again." },
        { status: backendRes.status }
      );
    }

    return NextResponse.json({ ok: true, ...data });
  } catch (err) {
    console.error("Failed to reach backend contact service:", err);
    return NextResponse.json(
      { error: "We couldn't reach our server. Please try again shortly." },
      { status: 502 }
    );
  }
}