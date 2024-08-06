import { env } from "app/config/env"
import { revalidateTag } from "next/cache";

export async function POST(request) {
  const body = await request.json()

  const { tag, token } = body;

  if(!tag || !token) {
    return Response.json({ error: "Missing tag or token" }, { status: 400 });
  }

  if(token !== env.CACHE_TOKEN) {
    return Response.json({ error: "Missing tag or token" }, { status: 401 });
  }

  revalidateTag(tag)

  return Response.json({ success: true }, { status: 200 });
}