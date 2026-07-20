import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    console.log("LOOPS_API_KEY exists:", !!process.env.LOOPS_API_KEY);

    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { message: "Email is required." },
        { status: 400 }
      );
    }

    const response = await fetch("https://app.loops.so/api/v1/contacts/create", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.LOOPS_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });

    const data = await response.json();

    console.log("Loops status:", response.status);
    console.log("Loops response:", data);

    if (response.ok) {
      return NextResponse.json({
        success: true,
      });
    }

    return NextResponse.json(
      {
        success: false,
        message: data.message || "Failed to subscribe.",
      },
      {
        status: response.status,
      }
    );
  } catch (error) {
    console.error("Loops Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal server error.",
      },
      {
        status: 500,
      }
    );
  }
}
