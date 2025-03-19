import "./globals.css";
import Link from "next/link";
import { ReactNode } from "react";

export const metadata = {
  title: "Couchsurfing Social App",
  description: "Social network interface for Couchsurfing",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-gray-100 to-gray-200 text-gray-900">
        {/* Header */}
        <header className="bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <img src="/globe.svg" alt="Logo" className="h-10 w-10" />
              <span className="text-2xl font-bold text-white">
                Couchsurfing Social
              </span>
            </div>
            <nav>
              <ul className="flex space-x-8">
                <li>
                  <Link href="/" legacyBehavior>
                    <a className="text-white hover:text-gray-200 transition-colors">
                      Home
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/profile" legacyBehavior>
                    <a className="text-white hover:text-gray-200 transition-colors">
                      Profile
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/posts" legacyBehavior>
                    <a className="text-white hover:text-gray-200 transition-colors">
                      Posts
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-6 py-10">
          <div className="bg-indigo-100 rounded-lg shadow-lg p-8 text-gray-900">
            {children}
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800">
          <div className="container mx-auto px-6 py-4 text-center text-sm text-gray-300">
            © {new Date().getFullYear()} Couchsurfing Social. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
