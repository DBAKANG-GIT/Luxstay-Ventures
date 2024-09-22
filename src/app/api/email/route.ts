import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
  const { firstName, lastName, email, subject, message, agreePolicy } =
    await request.json();

  if (!agreePolicy) {
    return NextResponse.json(
      { error: 'You must agree to the privacy policy.' },
      { status: 400 }
    );
  }

  const transport = nodemailer.createTransport({
    host: 'smtp.zoho.eu',
    secure: true,
    port: 465,
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    subject: `Message from ${firstName} ${lastName} (${email}) - ${subject}`,
    text: message,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email sent');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: 'Email sent' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}

export async function OPTIONS() {
  return NextResponse.json(null, {
    headers: {
      Allow: 'POST',
    },
    status: 405,
  });
}
