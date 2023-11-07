import WelcomeTemplate from '@/emails/WelcomeTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  resend.emails.send({
    from: 'personalemail (must own domain) ',
    to: '',
    subject: 'Hello from Resend!',
    react: <WelcomeTemplate name="Mosh" />,
  });

  return NextResponse.json({});
}

// Example only. You would never really set up a send email
