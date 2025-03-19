import { headers } from "next/headers";

export default async function ProfilePage() {
  // here we get the headers from the request
  const headersList = await headers();
  const host = headersList.get("host");
  const protocol = host?.includes("localhost") ? "http" : "https";
  const res = await fetch(`${protocol}://${host}/api/user`, { cache: "no-store" });

  if (!res.ok) {
    return (
      <main className="p-6">
        <h1 className="text-xl font-bold">Error loading profile</h1>
      </main>
    );
  }

  const user: {
    id: number;
    name: string;
    email: string;
    friends: string[];
  } = await res.json();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>
      <p>
        <span className="font-semibold">Name:</span> {user.name}
      </p>
      <p>
        <span className="font-semibold">Email:</span> {user.email}
      </p>
      <p>
        <span className="font-semibold">Friends:</span> {user.friends.join(", ")}
      </p>
    </main>
  );
}
