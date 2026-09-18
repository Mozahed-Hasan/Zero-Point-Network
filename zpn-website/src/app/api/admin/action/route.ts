import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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
    if (action === "delete") {
      result = await prisma.contactSubmission.update({
        where: { id },
        data: { isDeleted: true },
      });
    } else if (action === "restore") {
      result = await prisma.contactSubmission.update({
        where: { id },
        data: { isDeleted: false },
      });
    } else if (action === "permanentDelete") {
      result = await prisma.contactSubmission.delete({
        where: { id },
      });
    } else {
      return NextResponse.json({ success: false, message: "Invalid action" }, { status: 400 });
    }

    return NextResponse.json({ success: true, submission: result });
  } catch (error) {
    console.error("Admin Action API Error:", error);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
