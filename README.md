# Couchsurfing Social App

A basic social network interface built with Next.js using the App Router, Server Components, and dynamic API routes.

---

## Brief

For this exercise, I built a basic social network interface using Next.js with the App Router, Server Components, and dynamic API routes. The focus was on delivering a functional application within a two-hour timeframe. Below is a summary of my approach:

- **Architecture & Functionality:**  
  I structured the app with a global layout that includes a header (with an SVG logo and navigation), a main content area, and a footer. The application features a home page, a user profile page, and a posts list with dynamic post detail pages. API routes simulate backend data for user information and posts.

- **Dynamic Data & Routing:**  
  Dynamic routes were implemented for post details, and data fetching is done server-side using Next.js's built-in fetch API. I built the absolute URLs dynamically using request headers (via `headers()`) so the app works on any domain/port without hardcoding.

- **Styling & User Experience:**  
  Tailwind CSS was used for styling, allowing for a responsive and modern UI. I used flexbox utilities to align the post title and author correctly.

- **Assumptions & Decisions:**  
  The data is simulated (mock data), and I focused primarily on core functionality and code quality within the two-hour limit. I prioritized a clean, functional implementation over exhaustive detail.

- **Challenges:**  
  A key challenge was managing dynamic routes—especially using the `[id]` folder to capture URL parameters—and constructing absolute URLs dynamically without hardcoding values. This was addressed by using Next.js’s `headers()` function to determine the host and protocol at runtime.

*Note: I created this project a few days ago, but due to my current heavy workload, I haven't had the opportunity to further enhance it. I focused on meeting the main requirements and ensuring the core functionality works well. I hope you appreciate my approach and effort, and I look forward to the opportunity to discuss it further.*

---

### Technologies Used
Next.js with the App Router,
ReactJS,
TypeScript,
Tailwind CSS for styling,
Turbopack for development bundling.

---
