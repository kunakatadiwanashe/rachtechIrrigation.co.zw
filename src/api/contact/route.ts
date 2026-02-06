import emailjs from "@emailjs/nodejs";

// Assuming this is run in a Node.js environment with proper setup
export async function POST(req: Request) {
  try {
    const { name, email, phone, service, message } = await req.json();

    await emailjs.send(
      process.env.EMAILJS_SERVICE_ID!,
      process.env.EMAILJS_TEMPLATE_ID!,
      {
        from_name: name,
        from_email: email,
        phone: phone || "N/A",
        service: service || "N/A",
        message: message,
        to_email: "kunakatadiwanashe99@gmail.com",
      },
      {
        publicKey: process.env.EMAILJS_PUBLIC_KEY!,
      }
    );

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Email send error:", error);
    return new Response(JSON.stringify({ success: false, error: "Email failed to send" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
