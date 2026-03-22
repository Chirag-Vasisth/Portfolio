const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please provide all required fields' });
  }

  try {
    // Determine if we have real credentials, otherwise mock it
    let transporter;
    
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      transporter = nodemailer.createTransport({
        service: 'gmail', // or configured service
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });
    } else {
      // Create a testing account for mock emails if no credentials provided
      const account = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: account.user,
          pass: account.pass,
        },
      });
    }

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER || 'test@example.com',
      subject: `Portfolio Contact: ${subject || 'No Subject'} - from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);

    // If using ethereal email for testing
    if (nodemailer.getTestMessageUrl(info)) {
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    }

    res.status(200).json({ success: 'Message sent successfully!' });
  } catch (error) {
    console.error('Email Error:', error);
    res.status(500).json({ error: 'Server error, could not send email' });
  }
});

module.exports = router;
