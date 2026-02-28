import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, service, message } = request.body;

    // Create Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email to the site owner
    const ownerMailOptions = {
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL || "kunakatadiwanashe99@gmail.com",
      subject: `New Contact Form Submission - ${service || "General Inquiry"}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Service:</strong> ${service || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Confirmation email to the sender
    const confirmationMailOptions = {
      from: process.env.FROM_EMAIL,
      to: email,
      subject: "We received your message - RacTech Irrigation",
      html: `
        <h2>Thank you for contacting RacTech Irrigation!</h2>
        <p>Dear ${name},</p>
        <p>We have received your message and will get back to you shortly.</p>
        <p>Here's a copy of your message:</p>
        <p><strong>Service:</strong> ${service || "General Inquiry"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <br/>
        <p>Best regards,</p>
        <p>RacTech Irrigation Team</p>
      `,
    };

    // Send both emails
    await transporter.sendMail(ownerMailOptions);
    await transporter.sendMail(confirmationMailOptions);

    return response.status(200).json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return response.status(500).json({ success: false, error: "Email failed to send" });
  }
}
