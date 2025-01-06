import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

const ADMIN_EMAIL = process.env.QUERY_EMAIL_ID;

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOSTNAME,
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: ADMIN_EMAIL,
      subject: `New Distributor Inquiry from ${data.companyName}`,
      html: `
        <h2>New Distributor Inquiry</h2>
        <p><strong>Full Name:</strong> ${data.fullName}</p>
        <p><strong>Company:</strong> ${data.companyName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Distribution Area:</strong> ${data.distributionArea}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `,
    };

    console.log("about to send mail");

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Email error:', error);
    return new Response(JSON.stringify({ success: false }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
