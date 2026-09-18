import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const { id, action, password } = await req.json();
    
    if (password !== "singletillnow") {
      return NextResponse.json({ success: false, message: "Invalid password" }, { status: 401 });
    }

    if (!id || !action) {
      return NextResponse.json({ success: false, message: "Missing id or action" }, { status: 400 });
    }

    let result;
    if (action === "delete" || action === "permanentDelete") {
      const { data, error } = await supabase
        .from('contact_submissions')
        .delete()
        .eq('id', id)
        .select();
      if (error) throw error;
      result = data;
    } else if (action === "restore") {
      const { data, error } = await supabase
        .from('contact_submissions')
        .update({ is_deleted: false })
        .eq('id', id)
        .select();
      if (error) throw error;
      result = data;
    } else {
      return NextResponse.json({ success: false, message: "Invalid action" }, { status: 400 });
    }

    return NextResponse.json({ success: true, submission: result });
  } catch (error) {
    console.error("Admin Action API Error:", error);
    const errMsg = error instanceof Error ? error.message : (error as any).message || JSON.stringify(error);
    return NextResponse.json({ success: false, message: errMsg }, { status: 500 });
  }
}
