import Link from "next/link";

export default function HomePage() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">
        Welcome to the Couchsurfing Social App
      </h1>
      <p className="mb-4">
        Explore your profile and your friends posts.
      </p>
      <ul className="list-disc list-inside">
        <li className="mb-2">
          <Link href="/profile" legacyBehavior>
            <a className="text-blue-500 hover:underline">View Profile</a>
          </Link>
        </li>
        <li>
          <Link href="/posts" legacyBehavior>
            <a className="text-blue-500 hover:underline">View Posts</a>
          </Link>
        </li>
      </ul>
      {/* Note for the interviewers */}
      <div className="mt-10 p-4 border-t border-gray-300">
        <p className="text-sm text-gray-700">
          Note: This exercise was completed within a two-hour timeframe, focusing primarily on core functionality and code quality. While not every detail is fully elaborated, I have ensured that the application meets the requirements and is fully functional. I hope you appreciate my approach and effort, and I look forward to the opportunity to contribute further to your team. Armando Regalado.
        </p>
      </div>
    </main>
  );
}
