'use server';

import { z } from 'zod';
import { Resend } from 'resend';
import { prisma } from '@/lib/prisma';
import { SITE_NAME } from '@/lib/utils';

const Schema = z.object({
  nom: z.string().min(2, 'Nom trop court').max(80),
  telephone: z
    .string()
    .regex(/^(\+33|0)[1-9](\s?\d{2}){4}$/, 'Numéro français invalide'),
  email: z.string().email('Email invalide').optional().or(z.literal('')),
  adresse: z.string().max(180).optional().or(z.literal('')),
  message: z.string().min(10, 'Message trop court').max(800),
  villeSlug: z.string().min(1),
  service: z.string().min(1),
});

export type EtatFormulaire = {
  success: boolean;
  errors?: Record<string, string>;
  message?: string;
};

export async function creerLeadDevis(
  _prev: EtatFormulaire | null,
  formData: FormData
): Promise<EtatFormulaire> {
  const data = {
    nom: String(formData.get('nom') ?? '').trim(),
    telephone: String(formData.get('telephone') ?? '').trim(),
    email: String(formData.get('email') ?? '').trim(),
    adresse: String(formData.get('adresse') ?? '').trim(),
    message: String(formData.get('message') ?? '').trim(),
    villeSlug: String(formData.get('villeSlug') ?? ''),
    service: String(formData.get('service') ?? ''),
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

  // 1. Persistance
  if (prisma) {
    try {
      await prisma.leadDevis.create({
        data: {
          villeSlug: v.villeSlug,
          service: v.service,
          reponses: {},
          nom: v.nom,
          telephone: v.telephone,
          email: v.email || null,
          adresse: v.adresse || null,
          message: v.message,
        },
      });
    } catch (e) {
      console.warn('[creerLeadDevis] DB indispo:', e);
    }
  } else {
    console.log('[creerLeadDevis] (sans DB)', v);
  }

  // 2. Notification email (si Resend configuré)
  const apiKey = process.env.RESEND_API_KEY;
  const dest = process.env.EMAIL_NOTIFICATION_LEAD;
  if (apiKey && dest) {
    try {
      const resend = new Resend(apiKey);
      const html = `
        <div style="font-family:system-ui,sans-serif;max-width:560px;margin:0 auto;padding:24px;background:#f8fafc;border-radius:16px">
          <h1 style="font-size:22px;color:#0f172a;margin:0 0 16px">🔔 Nouveau devis ${SITE_NAME}</h1>
          <table style="width:100%;border-collapse:collapse;background:white;border-radius:12px;overflow:hidden">
            <tr><td style="padding:10px 14px;font-weight:bold;background:#eff6ff">Nom</td><td style="padding:10px 14px">${escapeHtml(v.nom)}</td></tr>
            <tr><td style="padding:10px 14px;font-weight:bold;background:#eff6ff">Téléphone</td><td style="padding:10px 14px"><a href="tel:${v.telephone.replace(/\s/g,'')}">${escapeHtml(v.telephone)}</a></td></tr>
            <tr><td style="padding:10px 14px;font-weight:bold;background:#eff6ff">Email</td><td style="padding:10px 14px">${v.email ? `<a href="mailto:${v.email}">${escapeHtml(v.email)}</a>` : '—'}</td></tr>
            <tr><td style="padding:10px 14px;font-weight:bold;background:#eff6ff">Adresse</td><td style="padding:10px 14px">${escapeHtml(v.adresse || '—')}</td></tr>
            <tr><td style="padding:10px 14px;font-weight:bold;background:#eff6ff">Ville</td><td style="padding:10px 14px">${escapeHtml(v.villeSlug)}</td></tr>
            <tr><td style="padding:10px 14px;font-weight:bold;background:#eff6ff">Service</td><td style="padding:10px 14px">${escapeHtml(v.service)}</td></tr>
            <tr><td style="padding:10px 14px;font-weight:bold;background:#eff6ff;vertical-align:top">Message</td><td style="padding:10px 14px;white-space:pre-wrap">${escapeHtml(v.message)}</td></tr>
            <tr><td style="padding:10px 14px;font-weight:bold;background:#eff6ff">Reçu le</td><td style="padding:10px 14px">${new Date().toLocaleString('fr-FR')}</td></tr>
          </table>
          <p style="margin-top:16px;font-size:13px;color:#475569">Rappel sous 30 min recommandé.</p>
        </div>
      `;
      await resend.emails.send({
        from: `${SITE_NAME} <noreply@plombierdeboucheur83.fr>`,
        to: dest,
        subject: `🔔 Devis — ${v.service} — ${v.villeSlug}`,
        html,
      });
    } catch (e) {
      console.warn('[creerLeadDevis] Resend indispo:', e);
    }
  }

  return {
    success: true,
    message:
      'Demande envoyée. Un technicien vous rappelle dans les 30 minutes.',
  };
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
