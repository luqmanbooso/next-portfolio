import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate the data
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Log the submission for development
    console.log('=== NEW CONTACT FORM SUBMISSION ===');
    console.log('Timestamp:', new Date().toISOString());
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Subject:', subject);
    console.log('Message:', message);
    console.log('=====================================');

    // Try to send email if environment variables are configured
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      try {
        const nodemailer = require('nodemailer');

        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: 'luqmanbooso@gmail.com',
          subject: `Portfolio Contact: ${subject}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
              <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
                New Contact Form Submission
              </h2>
              
              <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #007bff; margin-top: 0;">Contact Details</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Sent:</strong> ${new Date().toLocaleString()}</p>
              </div>
              
              <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px;">
                <h3 style="color: #333; margin-top: 0;">Message</h3>
                <p style="line-height: 1.6; color: #555; white-space: pre-wrap;">${message}</p>
              </div>
              
              <div style="margin-top: 20px; padding: 15px; background-color: #e8f4f8; border-radius: 8px;">
                <p style="margin: 0; color: #666; font-size: 14px;">
                  Reply to this email to respond directly to ${name}.
                </p>
              </div>
            </div>
          `,
          replyTo: email, // This allows you to reply directly to the sender
        };

        await transporter.sendMail(mailOptions);
        console.log('✅ Email sent successfully to luqmanbooso@gmail.com');
        
      } catch (emailError) {
        console.error('❌ Failed to send email:', emailError);
        // Don't fail the request if email fails, just log it
      }
    } else {
      console.log('⚠️ Email credentials not configured. Message logged only.');
    }

    return NextResponse.json(
      { message: 'Message received successfully!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('❌ Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to process your message. Please try again.' },
      { status: 500 }
    );
  }
}
