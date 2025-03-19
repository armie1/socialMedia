import { NextResponse } from "next/server";

export async function GET() {
  // Define an array  for the posts.
  const posts = [
    {
      id: "1",
      title: "A Day at the Beach",
      summary: "Sharing an amazing experience at the beach",
      content:
        "I enjoyed a sunny day at the beach with my friends. It was unforgettable.",
      author: "Elizabeth"
    },
    {
      id: "2",
      title: "Mountain Hike",
      summary: "Exploring nature",
      content:
        "I went on a mountain hike, and the view was spectacular.",
      author: "Josh"
    },
    {
      id: "3",
      title: "Dinner with Friends",
      summary: "A night full of laughter and good food",
      content:
        "We had an amazing dinner, full of stories and great moments.",
      author: "Javier"
    }
  ];

  return NextResponse.json(posts);
}
