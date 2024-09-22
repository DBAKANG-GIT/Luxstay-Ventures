import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email) {
    return NextResponse.json(
      { error: 'Email is required', status: 400 },
      { status: 400 }
    );
  }

  try {
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const DATACENTER = process.env.MAILCHIMP_API_SERVER;
    const data = {
      email_address: email,
      status: 'subscribed',
      tags: ['newsletter'],
    };

    const response = await fetch(
      `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,
      {
        method: 'POST',
        headers: {
          Authorization: `apikey ${API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        {
          error:
            errorData.detail ||
            'There was an error subscribing to the newsletter. Please try again later.',
          status: response.status,
        },
        { status: response.status }
      );
    }

    return NextResponse.json(
      { message: 'Successfully subscribed!', status: 201 },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          error: error.message || 'Internal Server Error',
          status: 500,
        },
        { status: 500 }
      );
    } else {
      return NextResponse.json(
        {
          error: 'An unknown error occurred',
          status: 500,
        },
        { status: 500 }
      );
    }
  }
}

export async function OPTIONS() {
  return NextResponse.json(null, {
    headers: {
      Allow: 'POST',
    },
    status: 405,
  });
}
