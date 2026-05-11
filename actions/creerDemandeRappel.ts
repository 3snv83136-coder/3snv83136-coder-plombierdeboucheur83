'use server';

import { z } from 'zod';
import { Resend } from 'resend';
import { SITE_NAME } from '@/lib/utils';

const Schema = z.object({
  nom: z.string().min(2, 'Nom trop court').max(80),
  telephone: z
    .string()
    .regex(/^(\+33|0)[1-9](\s?\d{2}){4}$/, 'Numéro français invalide'),
  contexte: z.string().max(200).optional().or(z.literal('')),
});

export type EtatRappel = {
  success: boolean;
  errors?: Record<string, string>;
  message?: string;
};

export async function creerDemandeRappel(
  _prev: EtatRappel | null,
  formData: FormData
): Promise<EtatRappel> {
  const data = {
    nom: String(formData.get('nom') ?? '').trim(),
    telephone: String(formData.get('telephone') ?? '').trim(),
    contexte: String(formData.get('contexte') ?? '').trim(),
  };

  const parsed = Schema.safeParse(data);
  if (!parsed.success) {
    const errors: Record<string, string> = {};
    parsed.error.issues.forEach((i) => {
      errors[i.path[0] as string] = i.message;
    });
    return { success: false, errors };
  }
  const v = parsed.data;

  const apiKey = process.env.RESEND_API_KEY;
  const dest = process.env.EMAIL_NOTIFICATION_LEAD;

  if (!apiKey || !dest) {
    console.warn('[creerDemandeRappel] Resend non configuré', v);
    return {
      success: true,
      message:
        'Demande enregistrée. Un technicien vous rappelle dans les 30 minutes.',
    };
  }

  try {
    const resend = new Resend(apiKey);
    const html = `
      <div style="font-family:system-ui,sans-serif;max-width:520px;margin:0 auto;padding:24px;background:#f8fafc;border-radius:16px">
        <h1 style="font-size:22px;color:#0f172a;margin:0 0 16px">📞 Demande de rappel — ${SITE_NAME}</h1>
        <table style="width:100%;border-collapse:collapse;background:white;border-radius:12px;overflow:hidden">
          <tr><td style="padding:12px 16px;font-weight:bold;background:#eff6ff;width:140px">Nom</td><td style="padding:12px 16px">${escapeHtml(v.nom)}</td></tr>
          <tr><td style="padding:12px 16px;font-weight:bold;background:#eff6ff">Téléphone</td><td style="padding:12px 16px"><a href="tel:${v.telephone.replace(/\s/g, '')}" style="font-size:18px;font-weight:bold;color:#0f172a">${escapeHtml(v.telephone)}</a></td></tr>
          ${v.contexte ? `<tr><td style="padding:12px 16px;font-weight:bold;background:#eff6ff;vertical-align:top">Contexte</td><td style="padding:12px 16px;white-space:pre-wrap">${escapeHtml(v.contexte)}</td></tr>` : ''}
          <tr><td style="padding:12px 16px;font-weight:bold;background:#eff6ff">Reçu le</td><td style="padding:12px 16px">${new Date().toLocaleString('fr-FR', { dateStyle: 'short', timeStyle: 'short' })}</td></tr>
        </table>
        <p style="margin-top:16px;font-size:14px;color:#475569">⏱️ Rappel sous 30 min recommandé.</p>
      </div>
    `;
    const from =
      process.env.RESEND_FROM ?? 'onboarding@resend.dev';
    await resend.emails.send({
      from: `${SITE_NAME} <${from}>`,
      to: dest,
      replyTo: dest,
      subject: `📞 Rappel demandé — ${v.nom} (${v.telephone})`,
      html,
    });
  } catch (e) {
    console.warn('[creerDemandeRappel] Resend erreur:', e);
    return {
      success: false,
      message:
        "Impossible d'envoyer la demande. Réessayez dans quelques instants.",
    };
  }

  return {
    success: true,
    message: 'Demande envoyée. Un technicien vous rappelle dans les 30 minutes.',
  };
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
