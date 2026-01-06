// src/app/api/subscribe/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { EmailClient } from '@azure/communication-email';
import type { EmailMessage } from '@azure/communication-email';

export const dynamic = 'force-dynamic'; // Critical for Next.js 15

export async function POST(req: NextRequest) {
  const { EmailClient } = await import('@azure/communication-email');

  try {
    const { email } = await req.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { message: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Safe access — will be set in Azure
    const connectionString = process.env.ACS_CONNECTION_STRING;
    if (!connectionString) {
      console.error('ACS_CONNECTION_STRING is missing in environment');
      return NextResponse.json(
        { message: 'Email service not configured' },
        { status: 500 }
      );
    }

    const senderAddress = 'DoNotReply@o2aicorp.com';

    const emailClient = new EmailClient(connectionString);

    // Team Notification
    const teamMessage: EmailMessage = {
      senderAddress,
      content: {
        subject: `New Subscriber: ${email}`,
        html: `<h2>New Newsletter Sign-Up</h2><p><strong>Email:</strong> ${email}</p><p>Time: ${new Date().toLocaleString()}</p>`,
      },
      recipients: { to: [{ address: 'contactus@o2aicorp.com' }] },
    };

    // Welcome Email to User
    const welcomeMessage: EmailMessage = {
      senderAddress,
      content: {
        subject: 'Welcome to O2.AI Newsletter!',
        html: `
          <div style="font-family: Arial; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
            <h1 style="color: #1e40af;">Welcome to O2.AI!</h1>
            <p>Thank you for subscribing! You'll get the latest AI insights and updates.</p>
            <p><strong>We respect your inbox</strong> — only valuable content.</p>
            <br>
            <p>Best,<br><strong>O2.AI Team</strong></p>
          </div>
        `,
      },
      recipients: { to: [{ address: email }] },
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
      message: 'Thank you! Check your inbox for a welcome email.',
    });
  } catch (error: any) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { message: 'Failed to subscribe. Try again later.' },
      { status: 500 }
    );
  }
}