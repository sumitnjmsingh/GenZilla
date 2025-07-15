import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { clerkClient } from "@clerk/nextjs/server";

export async function GET() {
  try {
    const blogs = await db.blog.findMany({
      orderBy: { createdAt: "desc" },
      take: 3,
    });

    const clerk = await clerkClient();
    const blogsWithAuthor = await Promise.all(
      blogs.map(async (blog) => {
        try {
          const user = await clerk.users.getUser(blog.authorId);
          return {
            ...blog,
            authorImage: user.imageUrl,
            authorName: `${user.firstName || ""} ${user.lastName || ""}`.trim(),
          };
        } catch (err) {
          console.warn(`Failed to fetch Clerk user for ID ${blog.authorId}`, err);
          return {
            ...blog,
            authorImage: null,
            authorName: "Unknown",
          };
        }
      })
    );

    return NextResponse.json(blogsWithAuthor);
  } catch (error) {
    console.error("Failed to fetch blogs:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
