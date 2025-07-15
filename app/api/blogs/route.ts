import { auth } from "@clerk/nextjs/server";
import {db} from "@/lib/db";

export async function POST(req: Request) {
  const { userId } = await auth();
  if (!userId) return new Response("Unauthorized", { status: 401 });

  const formData = await req.formData();

  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const coverImage = formData.get("coverImage") as string;
  const published = formData.get("published") === "true";

  if (!title || !content) {
    return new Response("Missing fields", { status: 400 });
  }

  const blog = await db.blog.create({
    data: {
      title,
      content,
      coverImage,
      authorId: userId,
      published,
    },
  });

  return Response.json(blog);
}
