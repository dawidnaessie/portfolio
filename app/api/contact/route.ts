import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 })
    }

    // 👇 Send email using Resend
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // replace this later with your own domain email if verified
      to: "jestemchujem112es@gmail.com", // 👈 put your email here
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending contact form email:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
