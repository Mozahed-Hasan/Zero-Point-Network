// src/app/api/contact/route.ts  –  Backend API route for contact form

import { NextRequest, NextResponse } from "next/server";

export interface ContactFormData {
  fullName: string;
  phone: string;
  area: string;
  packageName: string;
  message: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactFormData = await req.json();
    const { fullName, phone, area } = body;

    // Validate required fields
    if (!fullName || !phone || !area) {
      return NextResponse.json(
        { success: false, message: "নাম, ফোন নম্বর ও এলাকা আবশ্যক।" },
        { status: 400 }
      );
    }

    if (!/^01[3-9]\d{8}$/.test(phone)) {
      return NextResponse.json(
        { success: false, message: "সঠিক বাংলাদেশি মোবাইল নম্বর দিন।" },
        { status: 400 }
      );
    }

    // Log submission (in production, save to DB or send email/WhatsApp)
    console.log("=== New ZPN Connection Request ===");
    console.log(JSON.stringify(body, null, 2));
    console.log("Timestamp:", new Date().toISOString());

    return NextResponse.json({
      success: true,
      message: "আপনার আবেদন সফলভাবে গৃহীত হয়েছে! আমরা শীঘ্রই যোগাযোগ করব।",
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "সার্ভার ত্রুটি। আবার চেষ্টা করুন।" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ status: "ZPN Contact API is running ✅" });
}
