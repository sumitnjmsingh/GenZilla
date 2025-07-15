import { NextResponse } from "next/server";
import {db} from "@/lib/db";

export async function GET() {
  try {
    const blogs = await db.blog.findMany({
      orderBy: { createdAt: "desc" },
      take: 3,
    });

    return NextResponse.json(blogs);
  } catch (error) {
    console.error("Failed to fetch blogs:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
