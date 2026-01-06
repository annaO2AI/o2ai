// src/app/api/subscribe/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { EmailClient, EmailMessage } from '@azure/communication-email';

// ADD THIS LINE — THIS FIXES THE BUILD ERROR
export const dynamic = 'force-dynamic';

const connectionString = process.env.ACS_CONNECTION_STRING!;
const senderAddress = 'DoNotReply@o2aicorp.com';

const emailClient = new EmailClient(connectionString);

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { message: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Team notification
    const teamMessage: EmailMessage = {
      senderAddress,
      content: {
        subject: `New Newsletter Subscriber: ${email}`,
        html: `
          <h2>New Newsletter Subscription!</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p>Subscribed via footer form on ${new Date().toLocaleString()}</p>
        `,
      },
      recipients: {
        to: [{ address: 'contactus@o2aicorp.com' }],
      },
    };

    // Welcome email to subscriber
    const welcomeMessage: EmailMessage = {
      senderAddress,
      content: {
        subject: 'Welcome to O2.AI Newsletter!',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background: #f9f9f9;">
            <h1 style="color: #1e40af; text-align: center;">Welcome to O2.AI!</h1>
            <p>Thank you for subscribing! 🎉</p>
            <p>You'll receive the latest AI insights, product updates, and news from O2.AI.</p>
            <p>We only send valuable content — no spam.</p>
            <br>
            <p>Best regards,<br><strong>The O2.AI Team</strong></p>
          </div>
        `,
      },
      recipients: {
        to: [{ address: email }],
      },
    };

    const [teamPoller, welcomePoller] = await Promise.all([
      emailClient.beginSend(teamMessage),
      emailClient.beginSend(welcomeMessage),
    ]);

    const [teamResult, welcomeResult] = await Promise.all([
      teamPoller.pollUntilDone(),
      welcomePoller.pollUntilDone(),
    ]);

    if (teamResult.status !== 'Succeeded' || welcomeResult.status !== 'Succeeded') {
      throw new Error('Email send failed');
    }

    return NextResponse.json({
      message: 'Thank you for subscribing! Check your inbox for a welcome email.',
    });
  } catch (error: any) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { message: 'Subscription failed. Please try again later.' },
      { status: 500 }
    );
  }
}