import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL ?? 'puniths0810@gmail.com',
      replyTo: email,
      subject: `New message from ${name} — Portfolio`,
      html: `
        <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;background:#04060c;color:#e2eeff;padding:32px;border-radius:16px;border:1px solid rgba(34,211,238,0.15);">
          <h2 style="color:#22d3ee;margin:0 0 24px;">New Portfolio Message</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:8px 0;color:#94a3b8;font-size:13px;width:80px;">Name</td>
              <td style="padding:8px 0;color:#fff;font-size:14px;">${name}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#94a3b8;font-size:13px;">Email</td>
              <td style="padding:8px 0;color:#22d3ee;font-size:14px;">${email}</td>
            </tr>
          </table>
          <hr style="border:none;border-top:1px solid rgba(255,255,255,0.08);margin:20px 0;" />
          <p style="color:#94a3b8;font-size:13px;margin:0 0 8px;">Message</p>
          <p style="color:#e2eeff;font-size:15px;line-height:1.7;margin:0;white-space:pre-wrap;">${message}</p>
          <hr style="border:none;border-top:1px solid rgba(255,255,255,0.08);margin:24px 0;" />
          <p style="color:#475569;font-size:12px;margin:0;">Sent from your portfolio contact form</p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', JSON.stringify(error));
      return NextResponse.json({ error: error.message ?? 'Failed to send message.' }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Unknown error';
    console.error('Contact error:', msg);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
