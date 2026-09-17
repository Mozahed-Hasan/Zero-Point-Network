import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const { password } = await req.json();
    if (password !== "singletillnow") {
      return NextResponse.json({ success: false, message: "Invalid password" }, { status: 401 });
    }

    const { data: submissions, error } = await supabase
      .from('contact_submissions')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;

    return NextResponse.json({ success: true, submissions });
  } catch (error) {
    console.error("Admin API Error:", error);
    const errMsg = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ success: false, message: errMsg }, { status: 500 });
  }
}
