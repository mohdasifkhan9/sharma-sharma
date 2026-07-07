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

    await db.insert(consultations).values({
      name,
      email,
      phone: phone || null,
      company: company || null,
      service,
      message,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("consultation error", error);
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
