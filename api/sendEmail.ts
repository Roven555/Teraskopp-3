import { VercelRequest, VercelResponse } from '@vercel/node';
import sgMail from '@sendgrid/mail';

const apiKey = process.env.SENDGRID_API_KEY;
if (!apiKey) {
  throw new Error('SENDGRID_API_KEY environment variable is not set');
}
sgMail.setApiKey(apiKey);

interface ContactFormData {
  name: string;
  email: string;
  project: string;
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, project } = req.body as ContactFormData;

    // Validate required fields
    if (!name || !email || !project) {
      return res.status(400).json({ error: 'Kõik väljad on kohustuslikud' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Kehtetu e-posti aadress' });
    }

    // Validate message length
    if (project.length < 10) {
      return res.status(400).json({ error: 'Projekti kirjeldus peab olema vähemalt 10 tähemärgi pikkune' });
    }

    // Send email to admin
    await sgMail.send({
      to: 'teraskopp@gmail.com',
      from: 'noreply@teraskopp.ee',
      subject: `Uus pakkumise taotlus: ${name}`,
      replyTo: email,
      html: `
        <h2>Uus kontakti taotlus Teraskopp OÜ veebilehelt</h2>
        <p><strong>Nimi:</strong> ${escapeHtml(name)}</p>
        <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
        <p><strong>Projekti kirjeldus:</strong></p>
        <p>${escapeHtml(project).replace(/\n/g, '<br>')}</p>
      `,
    });

    return res.status(200).json({
      success: true,
      message: 'Sõnum saadetud edukalt!',
    });
  } catch (error) {
    console.error('Email sending error:', error);

    if (error instanceof Error) {
      return res.status(500).json({
        error: 'Sõnumi saatmine ebaõnnestus',
        details: error.message,
      });
    }

    return res.status(500).json({ error: 'Sõnumi saatmine ebaõnnestus' });
  }
}

// Helper function to escape HTML to prevent XSS
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}
