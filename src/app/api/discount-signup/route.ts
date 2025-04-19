import { NextResponse } from 'next/server';

const N8N_WEBHOOK_URL = process.env.N8N_WEBHOOK_URL;

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Forward to n8n webhook if URL is configured
    if (N8N_WEBHOOK_URL) {
      const response = await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error('Failed to process webhook');
      }
    }

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error('Webhook error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
} 