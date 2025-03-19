import Link from "next/link";
import { headers } from "next/headers";

interface Post {
  id: string;
  title: string;
  summary: string;
  content: string;
  author: string;
}

export default async function PostDetailPage({
  params,
}: {
  params: { id: string };
}) {
  // await with parameters to do it in the right way.
  const awaitedParams = await Promise.resolve(params);
  const { id } = awaitedParams;
  
  const headersList = await headers();
  const host = headersList.get("host");
  const protocol = host?.includes("localhost") ? "http" : "https";
  const res = await fetch(`${protocol}://${host}/api/posts/${id}`, { cache: "no-store" });

  if (!res.ok) {
    return (
      <main className="p-6">
        <h1 className="text-xl font-bold">Post not found</h1>
        <Link href="/posts" legacyBehavior>
          <a className="text-blue-500 hover:underline">Back to Posts</a>
        </Link>
      </main>
    );
  }

  const post: Post = await res.json();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <p className="text-sm text-gray-600 mb-2">by {post.author}</p>
      <p className="mb-4">{post.content}</p>
      <Link href="/posts" legacyBehavior>
        <a className="text-blue-500 hover:underline">Back to Posts</a>
      </Link>
    </main>
  );
}
