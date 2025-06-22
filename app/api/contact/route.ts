import { NextRequest, NextResponse } from 'next/server';
import transporter from '@/lib/mailer';  // adjust path accordingly

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
  }

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${process.env.sender_email}>`,
      to: process.env.admin_email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Message Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Email sending error: ", error);
    return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
  }
}
