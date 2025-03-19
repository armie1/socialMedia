import { NextResponse } from "next/server";

// GET endpoint.
export async function GET() {
  // Define a user object to use in profile.
  const user = {
    id: 1,
    name: "Armando Regalado",
    email: "armando@example.com",
    friends: ["Elizabeth", "Josh", "Javier"]
  };

  return NextResponse.json(user);
}
