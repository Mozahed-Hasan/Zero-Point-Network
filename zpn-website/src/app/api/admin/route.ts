import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { password } = await req.json();
    if (password !== "singletillnow") {
      return NextResponse.json({ success: false, message: "Invalid password" }, { status: 401 });
    }

    const submissions = await prisma.contactSubmission.findMany({
      orderBy: { createdAt: "desc" }
    });

    return NextResponse.json({ success: true, submissions });
  } catch (error) {
    console.error("Admin API Error:", error);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
