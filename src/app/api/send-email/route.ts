// src/app/api/send-email/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { projectTitle, dateFrom, dateTo, quantity, price } = body;

    // Environment variables validation check
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASS) {
      console.error("Missing email configuration environment variables inside .env file");
      return NextResponse.json({ success: false, error: 'Server configuration missing.' }, { status: 500 });
    }

    // 1. Nodemailer Transporter Configure karein (Using System Environment State)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASS,
      },
    });

    // 2. Email Content Setup
    const mailOptions = {
      from: `"Atlas Power" <${process.env.GMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVER || process.env.GMAIL_USER, // Fallback to sender if receiver not provided
      subject: `${projectTitle}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #111; color: #fff; border-radius: 8px; border: 1px solid #222;">
          <h2 style="color: #ff6b00; border-bottom: 1px solid #333; padding-bottom: 10px; margin-top: 0;">Project Details Submission</h2>
          <p style="margin: 10px 0;"><strong style="color: #ccc;">Project Name:</strong> ${projectTitle}</p>
          <p style="margin: 10px 0;font-weight:600;"><strong style="color: #ccc;">Duration Range:</strong> ${dateFrom} to ${dateTo}</p>
          <p style="margin: 10px 0;"><strong style="color: #ccc;">Quantity:</strong> ${quantity}</p>
          <hr style="border: 0; border-top: 1px solid #333; margin: 20px 0;" />
          <p style="font-size: 12px; color: #666; margin: 0;">Submitted via Atlas Power</p>
        </div>
      `,
    };

    // 3. Email Send Trigger
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Mail sent successfully!' }, { status: 200 });
  } catch (error: any) {
    console.error('Nodemailer Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}