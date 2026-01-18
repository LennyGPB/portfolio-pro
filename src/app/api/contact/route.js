import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Créer un transporteur avec un service de messagerie
    // Vous devrez configurer vos propres identifiants SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // votre email
        pass: process.env.EMAIL_PASSWORD, // votre mot de passe d'application Gmail
      },
    });

    // Configuration de l'email
    const mailOptions = {
      from: email,
      to: "lennygomes.hp@gmail.com",
      subject: `Portfolio - ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
          <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 20px; border-radius: 10px;">
            <h2 style="color: #7E5EA5;">Nouveau message depuis votre portfolio</h2>
            <p><strong>Nom:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Sujet:</strong> ${subject}</p>
            <hr style="border: 1px solid #7E5EA5; margin: 20px 0;">
            <h3 style="color: #333;">Message:</h3>
            <p style="color: #555; line-height: 1.6;">${message}</p>
          </div>
        </div>
      `,
      replyTo: email,
    };

    // Envoyer l'email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email envoyé avec succès" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    return NextResponse.json(
      { message: "Erreur lors de l'envoi de l'email" },
      { status: 500 }
    );
  }
}
