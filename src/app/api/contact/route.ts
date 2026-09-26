import { NextResponse } from 'next/server'

interface ContactPayload {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}

export async function POST(request: Request) {
  try {
    const body: ContactPayload = await request.json()

    // Server-side validation
    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json(
        { error: 'Veuillez remplir tous les champs obligatoires.' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Adresse email invalide.' },
        { status: 400 }
      )
    }

    const resendApiKey = process.env.RESEND_API_KEY
    const targetEmail = process.env.CONTACT_EMAIL || 'creatrixdevteam@gmail.com'

    if (resendApiKey) {
      // Send real email via Resend API
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: 'CreatrixDev Contact <onboarding@resend.dev>',
          to: [targetEmail],
          reply_to: body.email,
          subject: `[Contact CreatrixDev] ${body.subject} — de ${body.name}`,
          html: `
            <h2>Nouveau message de contact — CreatrixDev</h2>
            <p><strong>Nom :</strong> ${body.name}</p>
            <p><strong>Email :</strong> <a href="mailto:${body.email}">${body.email}</a></p>
            <p><strong>Téléphone :</strong> ${body.phone || 'Non renseigné'}</p>
            <p><strong>Sujet :</strong> ${body.subject}</p>
            <hr />
            <p><strong>Message :</strong></p>
            <p style="white-space: pre-wrap;">${body.message}</p>
          `,
        }),
      })

      if (!res.ok) {
        const errorData = await res.json()
        console.error('Erreur API Resend:', errorData)
        return NextResponse.json(
          { error: errorData.message || "Échec de l'envoi de l'email via le service de messagerie." },
          { status: 502 }
        )
      }
    } else {
      // In dev or until RESEND_API_KEY is configured in .env.local
      console.log('--- NOUVEAU MESSAGE DE CONTACT REÇU ---')
      console.log(`De: ${body.name} <${body.email}>`)
      console.log(`Téléphone: ${body.phone || 'N/A'}`)
      console.log(`Sujet: ${body.subject}`)
      console.log(`Message:\n${body.message}`)
      console.log('---------------------------------------')
    }

    return NextResponse.json(
      { success: true, message: 'Message reçu avec succès.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Erreur serveur formulaire contact:', error)
    return NextResponse.json(
      { error: 'Une erreur interne est survenue.' },
      { status: 500 }
    )
  }
}
