const express = require('express');
const cors = require('cors');
const emailjs = require('@emailjs/nodejs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Contact email endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, service, message } = req.body;

    await emailjs.send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_TEMPLATE_ID,
      {
        from_name: name,
        from_email: email,
        phone: phone || "N/A",
        service: service || "N/A",
        message: message,
        to_email: "kunakatadiwanashe99@gmail.com",
      },
      {
        publicKey: process.env.EMAILJS_PUBLIC_KEY,
      }
    );

    res.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    res.status(500).json({ success: false, error: "Email failed to send" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
