import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USERNAME, // Your email
      pass: process.env.EMAIL_PASSWORD, // Your email password
    },
  });

  try {
    await transporter.sendMail({
      from:` "${email}" <${process.env.EMAIL_USERNAME}> `, // Must be the same as `auth.user` or a verified alias
      to: 'kavyasreeus14@gmail.com', // Recipient email
      subject: `New Message from ${email}`, // Modify subject to include sender email
      text: message, // Plain text body
      html: `<p>${message}</p>`, // HTML body
    });

    return res.status(200).json({ status: 'Email sent successfully' });
  } catch (error) {
    console.error('Failed to send email:', error);
    return res.status(500).json({ status: 'Failed to send email', error: error.message });
  }
}
