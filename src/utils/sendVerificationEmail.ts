import SMTPTransport from 'nodemailer/lib/smtp-transport';
import { createTransport, Transporter } from 'nodemailer';
import { User } from '../../prisma/client';

export const sendVerificationEmail = async ({ id, email, username }: User) => {
  const token = signToken(id, 'email');
  const mailer = createTransport({ url: process.env['SMTP'] });
  await mailer.sendMail({
    to: email,
    subject: 'Email Verification',
    html: `Hello ${username},
    <br /><br />
    Thank you for registering. Please confirm your account by clicking the link below.
    <a clicktracking="off" href='${process.env['BASE_URL']}/auth/complete-registration/${token}'>
      Confirm my email
    </a>
    <br /><br />
    Thank you,
    <br />
    Stonks App`,
  });
};
