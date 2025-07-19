import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";
import { getGender } from "@/app/utils/getGender";
import { getUserProfile } from "@/app/utils/getUserProfile";

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      orderBy: {
        score: "desc",
      },
    });

    return NextResponse.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name } = body;

    const gender = await getGender(name);
    const userProfile = await getUserProfile(gender);

    const user = await prisma.user.create({
      data: {
        name,
        gender,
        score: 0,
        image: userProfile.picture.large,
        location: userProfile.location.country,
      },
    });

    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
}
