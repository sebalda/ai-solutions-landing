import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, message } = await request.json();

    // Validar datos requeridos
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      );
    }

    // Configurar transporter de email
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // sebaceronu@gmail.com
        pass: process.env.EMAIL_PASS, // App password de Gmail
      },
    });

    // Contenido del email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'sebaceronu@gmail.com',
      subject: `🚀 NUEVA SOLICITUD DE DEMO - ${company || 'Sin empresa'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #dc2626; text-align: center;">🚀 NUEVA SOLICITUD DE DEMO</h2>
          
          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">📋 INFORMACIÓN DEL CLIENTE</h3>
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Empresa:</strong> ${company || 'No especificada'}</p>
          </div>

          <div style="background: #fef2f2; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #dc2626; margin-top: 0;">💬 MENSAJE</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>

          <div style="background: #dc2626; color: white; padding: 15px; border-radius: 8px; text-align: center; margin: 20px 0;">
            <p style="margin: 0; font-weight: bold;">🎯 ACCIÓN REQUERIDA: Contactar al cliente en 24hrs</p>
          </div>

          <div style="text-align: center; margin-top: 30px; color: #6b7280;">
            <p>Enviado desde AI Solutions Landing Page</p>
            <p>Fecha: ${new Date().toLocaleString('es-CL')}</p>
          </div>
        </div>
      `,
    };

    // Enviar email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Solicitud enviada exitosamente. Te contactaremos en 24hrs.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error enviando email:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
