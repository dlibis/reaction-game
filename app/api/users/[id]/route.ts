import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const body = await request.json();
    const { score } = body;

    if (!id || score === undefined) {
      return NextResponse.json(
        { error: "User ID and score are required" },
        { status: 400 }
      );
    }

    const user = await prisma.user.update({
      where: { id },
      data: { score },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json(
      { error: "Failed to update user" },
      { status: 500 }
    );
  }
}
