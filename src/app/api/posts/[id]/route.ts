import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  // await with parameters to do it in the right way.
  const awaitedParams = await Promise.resolve(params);
  const { id } = awaitedParams;
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

  const post = posts.find((p) => p.id === id);

  if (!post) {
    return NextResponse.json({ message: "Post not found" }, { status: 404 });
  }

  return NextResponse.json(post);
}
