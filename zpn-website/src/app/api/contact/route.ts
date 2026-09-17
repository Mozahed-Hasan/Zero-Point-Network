// src/app/api/contact/route.ts  –  Backend API route for contact form

import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

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
    const { fullName, phone, area, type } = body as any;

    const isComplaint = type === "complaint";

    // Validate required fields based on type
    if (isComplaint) {
      if (!area) {
        return NextResponse.json(
          { success: false, message: "এলাকা নির্বাচন আবশ্যক।" },
          { status: 400 }
        );
      }
    } else {
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
    }

    // Save to Supabase
    const { error } = await supabase
      .from('contact_submissions')
      .insert({
        type: isComplaint ? "complaint" : "connection",
        full_name: fullName || null,
        phone: phone || null,
        area,
        package: body.packageName || null,
        message: body.message || null,
      });

    if (error) throw error;

    return NextResponse.json({
      success: true,
      message: isComplaint 
        ? "আপনার অভিযোগ সফলভাবে গৃহীত হয়েছে! আমরা শীঘ্রই যোগাযোগ করব।"
        : "আপনার আবেদন সফলভাবে গৃহীত হয়েছে! আমরা শীঘ্রই যোগাযোগ করব।",
    });
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { success: false, message: "সার্ভার ত্রুটি। আবার চেষ্টা করুন।" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ status: "ZPN Contact API is running ✅" });
}
