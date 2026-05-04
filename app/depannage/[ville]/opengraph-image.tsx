// ============================================================
// OG IMAGE DYNAMIQUE — par ville
// ============================================================
// Lit la ville via getVilleBySlug puis rend une image 1200×630.
// Runtime nodejs (par défaut) car les helpers lib/ utilisent
// server-only + Prisma optionnel.
// ============================================================

import { ImageResponse } from 'next/og';
import { getVilleBySlug } from '@/lib/villes';
import { getParametre } from '@/lib/parametres';
import { formaterTelephone } from '@/lib/utils';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Plombier Déboucheur 69 — dépannage par ville dans le Rhône';

const SERVICES_PILLS: { nom: string; bg: string }[] = [
  { nom: 'Débouchage', bg: '#0e7490' },
  { nom: 'Caméra', bg: '#334155' },
  { nom: 'Fosse septique', bg: '#15803d' },
  { nom: 'Pompe relevage', bg: '#9a3412' },
];

export default async function VilleOpengraphImage({
  params,
}: {
  params: { ville: string };
}) {
  const ville = await getVilleBySlug(params.ville);
  const tel = await getParametre('TEL_PRINCIPAL');
  const nomVille = ville?.nom ?? 'Rhône (69)';
  const telFormate = tel ? formaterTelephone(tel) : '';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 72px',
          background: 'linear-gradient(135deg, #1e3a5f 0%, #0f2138 100%)',
          color: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 26,
              fontWeight: 600,
              opacity: 0.85,
              letterSpacing: 2,
              textTransform: 'uppercase',
            }}
          >
            Plombier Déboucheur 69 — 24h/7j
          </div>
          <div
            style={{
              fontSize: 96,
              fontWeight: 800,
              lineHeight: 1.05,
              marginTop: 28,
              letterSpacing: -2,
            }}
          >
            Dépannage à {nomVille}
          </div>
          {ville?.codePostal ? (
            <div
              style={{
                fontSize: 32,
                marginTop: 16,
                opacity: 0.85,
                fontWeight: 500,
              }}
            >
              {ville.codePostal} — Intervention sous 1h
            </div>
          ) : null}
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: 24,
          }}
        >
          <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap' }}>
            {SERVICES_PILLS.map((s) => (
              <div
                key={s.nom}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  background: s.bg,
                  padding: '14px 22px',
                  borderRadius: 12,
                  fontSize: 24,
                  fontWeight: 600,
                }}
              >
                {s.nom}
              </div>
            ))}
          </div>
          {telFormate ? (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                background: 'rgba(255,255,255,0.18)',
                padding: '16px 24px',
                borderRadius: 14,
              }}
            >
              <div style={{ fontSize: 18, opacity: 0.85, fontWeight: 500 }}>
                Appel direct
              </div>
              <div style={{ fontSize: 32, fontWeight: 800 }}>
                {telFormate}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    ),
    { ...size }
  );
}
