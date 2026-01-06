// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { EmailClient, EmailMessage } from '@azure/communication-email';

// Debug: Log environment variable presence
console.log('ACS_CONNECTION_STRING exists:', !!process.env.ACS_CONNECTION_STRING);

const connectionString = process.env.ACS_CONNECTION_STRING;
const senderAddress = 'DoNotReply@o2aicorp.com';

export async function POST(req: NextRequest) {
  try {
    // Check if connection string is available
    if (!connectionString) {
      console.error('Missing ACS_CONNECTION_STRING environment variable');
      return NextResponse.json({ 
        error: 'Email service not configured. Missing connection string.' 
      }, { status: 500 });
    }

    const {
      first_name,
      last_name,
      email,
      company_name = '',
      subject = '',
      message = '',
      formType,
    } = await req.json();

    // Validate required fields
    if (!first_name || !last_name || !email) {
      return NextResponse.json({ error: 'Required fields missing' }, { status: 400 });
    }

    // Initialize EmailClient
    const emailClient = new EmailClient(connectionString);
    
    const fullName = `${first_name.trim()} ${last_name.trim()}`;
    const isDemo = formType === 'demo';

    // 1. Notification to COMPANY
    const companyMessage: EmailMessage = {
      senderAddress,
      content: {
        subject: isDemo ? `Demo Request from ${fullName}` : `Contact: ${subject || 'General Inquiry'}`,
        html: `
          <h2>New ${isDemo ? 'Demo Request' : 'Contact Message'}</h2>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${isDemo ? `<p><strong>Company:</strong> ${company_name}</p>` : ''}
          ${!isDemo && subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ''}
          ${!isDemo && message ? `<p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>` : ''}
        `,
      },
      recipients: {
        to: [{ address: 'contactus@o2aicorp.com' }],
      },
    };

    // 2. Auto-reply to CUSTOMER
    const customerMessage: EmailMessage = {
      senderAddress,
      content: {
        subject: isDemo ? 'Thanks for requesting a demo!' : 'We received your message!',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
            <h1 style="color: #1e40af;">Hello ${first_name},</h1>
            <p>Thank you for your <strong>${isDemo ? 'demo request' : 'message'}</strong>!</p>
            ${isDemo 
              ? `<p>We're excited to show how our AI solutions can help <strong>${company_name}</strong>. We'll contact you soon!</p>`
              : `<p>We'll get back to you within 24–48 hours.</p>`
            }
            <hr style="margin: 30px 0;">
            <h2>About O2AI Corp</h2>
            <p>We specialize in innovative AI solutions for businesses.</p>
            <p>Visit us at <a href="https://o2aicorp.com">o2aicorp.com</a></p>
            <p style="margin-top: 40px; color:#666;">
              Best regards,<br><strong>The O2AI Team</strong>
            </p>
          </div>
        `,
      },
      recipients: {
        to: [{ address: email }],
      },
    };

    // Send both emails with proper error handling
    console.log('Sending company notification...');
    const companyPoller = await emailClient.beginSend(companyMessage);
    const companyResult = await companyPoller.pollUntilDone();
    console.log('Company email result:', companyResult);

    console.log('Sending customer auto-reply...');
    const customerPoller = await emailClient.beginSend(customerMessage);
    const customerResult = await customerPoller.pollUntilDone();
    console.log('Customer email result:', customerResult);

    return NextResponse.json({ 
      success: true,
      companyMessageId: companyResult.id,
      customerMessageId: customerResult.id
    });

  } catch (error: any) {
    console.error('ACS Email error:', error);
    console.error('Error details:', {
      message: error.message,
      code: error.code,
      statusCode: error.statusCode,
      details: error.details
    });
    
    return NextResponse.json({ 
      error: 'Failed to send emails',
      details: error.message 
    }, { status: 500 });
  }
}