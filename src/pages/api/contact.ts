import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, service, message } = await req.json();

    // 1. Create a transporter
    // For Gmail, use "App Passwords" (don't use your regular password)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "rachtechirrigation@gmail.com", 
        pass: process.env.EMAIL_APP_PASSWORD, 
      },
    });

    // 2. Setup email data
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: "kunakatadiwanashe99@gmail.com",
      subject: `New Inquiry: ${service || "General Inquiry"}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee;">
          <h2 style="color: #0077be;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>Service:</strong> ${service || "N/A"}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    };

    // 3. Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}