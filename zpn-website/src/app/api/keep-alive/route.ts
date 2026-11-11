import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

/**
 * Lightweight health-check endpoint that queries Supabase to prevent
 * free-tier auto-pausing after 7 days of inactivity.
 */
export async function GET() {
  try {
    const { error } = await supabase
      .from("contact_submissions")
      .select("id")
      .limit(1);

    if (error) {
      throw error;
    }

    return NextResponse.json(
      {
        success: true,
        status: "alive",
        timestamp: new Date().toISOString(),
      },
      {
        status: 200,
        headers: {
          "Cache-Control": "no-store, no-cache, must-revalidate",
        },
      }
    );
  } catch (error) {
    console.error("Keep-alive Error:", error);
    const errMsg = error instanceof Error ? error.message : String(error);
    return NextResponse.json(
      {
        success: false,
        message: errMsg,
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}

