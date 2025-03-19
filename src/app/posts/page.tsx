import Link from "next/link";
import { headers } from "next/headers"; // To get the request headers

interface Post {
  id: string;
  title: string;
  summary: string;
  content: string;
  author: string;
}

export default async function PostsPage() {
  const headersList = await headers();
  const host = headersList.get("host");
  // Determine protocol: use "http" if on localhost, otherwise "https"
  const protocol = host?.includes("localhost") ? "http" : "https";
  // Fetch posts data from the API using a dynamic URL
  const res = await fetch(`${protocol}://${host}/api/posts`, { cache: "no-store" });

  if (!res.ok) {
    // If the API call fails, display an error message
    return (
      <main className="p-6">
        <h1 className="text-xl font-bold">Error loading posts</h1>
      </main>
    );
  }

  const posts: Post[] = await res.json();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Friends Posts</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li
            key={post.id}
            className="p-4 bg-white rounded shadow hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-center">
              <Link href={`/posts/${post.id}`} legacyBehavior>
                <a className="text-xl font-semibold text-blue-500 hover:underline">
                  {post.title}
                </a>
              </Link>
              <p className="text-sm text-gray-600">by {post.author}</p>
            </div>
            <p className="mt-2">{post.summary}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
