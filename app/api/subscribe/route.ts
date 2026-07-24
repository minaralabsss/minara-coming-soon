import { NextRequest, NextResponse } from "next/server";

interface SubscribeRequest {
  email: string;
}

interface LoopsResponse {
  success: boolean;
  message: string;
  email?: string;
}

interface LoopsErrorResponse {
  success: false;
  message: string;
}

/**
 * POST /api/subscribe
 * Subscribe user email to Loops
 */
export async function POST(
  request: NextRequest
): Promise<NextResponse<LoopsResponse | LoopsErrorResponse>> {
  try {
    // Validate request method
    if (request.method !== "POST") {
      return NextResponse.json(
        {
          success: false,
          message: "Method not allowed",
        },
        { status: 405 }
      );
    }

    // Parse request body
    let body: SubscribeRequest;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid request body",
        },
        { status: 400 }
      );
    }

    const { email } = body;

    // Validate email
    if (!email || typeof email !== "string") {
      return NextResponse.json(
        {
          success: false,
          message: "Email is required",
        },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid email format",
        },
        { status: 400 }
      );
    }

    // Get Loops API key from environment variables
    const loopsApiKey = process.env.LOOPS_API_KEY;
    if (!loopsApiKey) {
      console.error("LOOPS_API_KEY environment variable is not set");
      return NextResponse.json(
        {
          success: false,
          message: "Server configuration error",
        },
        { status: 500 }
      );
    }

    // Call Loops API
    const loopsResponse = await fetch(
      "https://api.loops.so/v1/contacts/create",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${loopsApiKey}`,
        },
        body: JSON.stringify({
          email: email.toLowerCase().trim(),
          subscribed: true,
        }),
      }
    );

    // Handle Loops API errors
    if (!loopsResponse.ok) {
      const errorData = await loopsResponse.json().catch(() => ({}));

      // Handle duplicate email (already subscribed)
      if (loopsResponse.status === 409) {
        return NextResponse.json(
          {
            success: true,
            message: "Email already subscribed",
            email: email,
          },
          { status: 200 }
        );
      }

      console.error("Loops API error:", {
        status: loopsResponse.status,
        data: errorData,
      });

      return NextResponse.json(
        {
          success: false,
          message: errorData.message || "Failed to subscribe",
        },
        { status: loopsResponse.status || 500 }
      );
    }

    // Success response
    return NextResponse.json(
      {
        success: true,
        message: "Successfully subscribed to waitlist",
        email: email,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Subscribe API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred",
      },
      { status: 500 }
    );
  }
}
