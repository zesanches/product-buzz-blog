import type { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from '@/components/templates/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { body: { userName, userEmail, contentMessage, subject } } = req;
    const { data, error } = await resend.emails.send({
      from: `${process.env.EMAIL_FROM_NAME} <${process.env.EMAIL_FROM_EMAIL}>`,
      to: ['yourowndomainemail@email.com'],
      replyTo: userEmail,
      subject: subject || 'New Contact Form Submission',
      react: EmailTemplate({ userEmail, userName, contentMessage }),
    });

    if (error) {
       res.status(400).json(error);
    }

    res.status(200).json(data);
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
};