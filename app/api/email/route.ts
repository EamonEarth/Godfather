import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
  const { email, name, subject, message } = await request.json();

  const transport = nodemailer.createTransport({
    service: 'gmail',
    
    auth: {
      user: process.env.MAIL_ADDRESS,
      pass: process.env.MAIL_PW,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.MAIL_ADDRESS,
    to: process.env.MAIL_ADDRESS,
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `${email} - ${subject}`,
    text: `${message}, 
    
    message sent by ${name}`
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Thanks for getting in touch!');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: 'Thanks for getting in touch!' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}