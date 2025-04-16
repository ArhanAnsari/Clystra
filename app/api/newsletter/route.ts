// app/api/newsletter/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Here I would typically:
    // 1. Validate the email
    // 2. Store it in your database
    // 3. Send a confirmation email
    // 4. Add to your email marketing service

    return NextResponse.json(
      { message: 'Successfully subscribed!' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to subscribe' },
      { status: 500 }
    );
  }
}