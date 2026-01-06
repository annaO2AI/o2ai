// src/app/api/subscribe/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { EmailClient, EmailMessage } from '@azure/communication-email';

const connectionString = process.env.ACS_CONNECTION_STRING!;
const senderAddress = 'DoNotReply@o2aicorp.com'; // Your working managed domain

const emailClient = new EmailClient(connectionString);

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    // Basic validation
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { message: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // 1. Email to YOUR TEAM (notification)
    const teamMessage: EmailMessage = {
      senderAddress,
      content: {
        subject: `New Newsletter Subscriber: ${email}`,
        html: `
          <h2>New Newsletter Subscription!</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p>This user subscribed via the website footer newsletter form.</p>
          <p><em>Time:</em> ${new Date().toLocaleString()}</p>
          <hr>
          <p>Manage subscribers or send campaigns from your email tool.</p>
        `,
      },
      recipients: {
        to: [{ address: 'contactus@o2aicorp.com' }], // Change if needed
      },
    };

    // 2. Welcome email to THE SUBSCRIBER
    const welcomeMessage: EmailMessage = {
      senderAddress,
      content: {
        subject: 'Welcome to O2.AI Newsletter!',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background: #f9f9f9;">
            <h1 style="color: #1e40af; text-align: center;">Welcome to O2.AI!</h1>
            <p style="font-size: 16px;">Hello,</p>
            <p style="font-size: 16px;">
              Thank you for subscribing to our newsletter! 🎉
            </p>
            <p style="font-size: 16px;">
              You'll now receive the latest updates, AI insights, product news, and exclusive content from <strong>O2.AI</strong>.
            </p>
            <p style="font-size: 16px;">
              We promise to keep it valuable — no spam, only quality updates.
            </p>
            <hr style="margin: 30px 0;">
            <p style="font-size: 14px; color: #666;">
              Best regards,<br>
              <strong>The O2.AI Team</strong><br>
              <a href="https://o2aicorp.com" style="color: #1e40af;">o2aicorp.com</a>
            </p>
          </div>
        `,
      },
      recipients: {
        to: [{ address: email }],
      },
    };

    // Send BOTH emails and wait for completion
    const [teamPoller, welcomePoller] = await Promise.all([
      emailClient.beginSend(teamMessage),
      emailClient.beginSend(welcomeMessage),
    ]);

    const [teamResult, welcomeResult] = await Promise.all([
      teamPoller.pollUntilDone(),
      welcomePoller.pollUntilDone(),
    ]);

    // Optional: Log or check status
    console.log('Team notification:', teamResult.status);
    console.log('Welcome email:', welcomeResult.status);

    if (teamResult.status !== 'Succeeded' || welcomeResult.status !== 'Succeeded') {
      throw new Error('One or more emails failed to send');
    }

    return NextResponse.json({ 
      message: 'Thank you for subscribing! Check your inbox for a welcome email.' 
    });

  } catch (error: any) {
    console.error('Subscription email error:', error);
    console.error('Details:', error.message);

    return NextResponse.json(
      { 
        message: 'Subscription failed. Please try again later.' 
      },
      { status: 500 }
    );
  }
}