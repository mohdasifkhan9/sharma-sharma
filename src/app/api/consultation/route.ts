import { NextResponse } from "next/server";
import { db } from "@/db";
import { consultations } from "@/db/schema";
import { consultationSchema } from "@/lib/schemas";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = consultationSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, errors: parsed.error.flatten().fieldErrors },
        { status: 400 },
      );
    }

    const { name, email, phone, company, service, message } = parsed.data;

    // Insert into local database
    await db.insert(consultations).values({
      name,
      email,
      phone: phone || null,
      company: company || null,
      service,
      message,
    });

    // Forward payload to Google Apps Script Webhook
    const userAgent = request.headers.get("user-agent") || "Unknown";
    const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "Unknown";
    const webhookUrl = "https://script.google.com/macros/s/AKfycby-dk4Q95MOD_u653N-kwX2kd4_32Ha7Pzz5kgGWHeD4kdkt9j_rDlOA8H9oJL14f3ElQ/exec";

    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: name,
          email,
          phone: phone || "",
          company: company || "",
          service,
          message,
          submittedAt: new Date().toISOString(),
          userAgent,
          ip,
        }),
      });
    } catch (webhookError) {
      console.error("Google Apps Script webhook forward error:", webhookError);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("consultation error", error);
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
