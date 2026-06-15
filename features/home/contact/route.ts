import { Resend } from "resend";
import { NextResponse } from "next/server";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const schema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  idea: z.string().min(10),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, idea } = schema.parse(body);

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "abdulrahman.saad2303@gmail.com",
      subject: `New message from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #111;">New Contact from Portfolio</h2>
          <hr style="border: 0.5px solid #eee;" />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Idea:</strong></p>
          <p style="background: #f8f8f8; padding: 16px; border-radius: 8px;">${idea}</p>
          <hr style="border: 0.5px solid #eee;" />
          <p style="color: #888; font-size: 12px;">Sent from mnmlst.dev</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to send." }, { status: 500 });
  }
}
