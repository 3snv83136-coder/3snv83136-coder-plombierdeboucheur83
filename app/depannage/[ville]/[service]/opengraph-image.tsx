// ============================================================
// OG IMAGE DYNAMIQUE — par ville + service
// ============================================================
// Fond gradient = couleur du service (4 hex via switch).
// Affiche "{Service} à {Ville}" + "À partir de XX €".
// ============================================================

import { ImageResponse } from 'next/og';
import { getVilleBySlug } from '@/lib/villes';
import { getServiceBySlug } from '@/lib/services';
import { formatPrixEuros } from '@/lib/utils';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Plombier Déboucheur 83 — service par ville';

/**
 * Couleurs validées pour chaque service. Hardcodées (et non lues
 * dynamiquement) pour garder un mapping déterministe et éviter
 * les couleurs inattendues dans une image OG indexée.
 */
function gradientForService(slug: string, fallback: string): string {
  switch (slug) {
    case 'debouchage':
      // Bleu
      return 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)';
    case 'inspection-camera':
      // Violet
      return 'linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)';
    case 'fosse-septique':
      // Vert
      return 'linear-gradient(135deg, #16a34a 0%, #14532d 100%)';
    case 'pompe-relevage':
      // Orange
      return 'linear-gradient(135deg, #ea580c 0%, #9a3412 100%)';
    default: {
      const c = fallback || '#2563eb';
      return `linear-gradient(135deg, ${c} 0%, #111827 100%)`;
    }
  }
}

export default async function ServiceOpengraphImage({
  params,
}: {
  params: { ville: string; service: string };
}) {
  const [ville, service] = await Promise.all([
    getVilleBySlug(params.ville),
    getServiceBySlug(params.service),
  ]);

  const nomVille = ville?.nom ?? 'Var (83)';
  const nomService = service?.nom ?? 'Plomberie';
  const icone = service?.icone ?? '🔧';
  const aPartirDe = service ? formatPrixEuros(service.prixMin) : '';
  const gradient = gradientForService(
    service?.slug ?? '',
    service?.couleur ?? '#2563eb'
  );

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
          background: gradient,
          color: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              fontSize: 26,
              fontWeight: 600,
              opacity: 0.85,
              letterSpacing: 2,
              textTransform: 'uppercase',
            }}
          >
            Plombier Déboucheur 83 — 24h/7j
          </div>
          <div
            style={{
              fontSize: 22,
              fontWeight: 600,
              opacity: 0.85,
              padding: '10px 18px',
              borderRadius: 999,
              background: 'rgba(255,255,255,0.18)',
            }}
          >
            {ville?.codePostal ?? '83'}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 36,
          }}
        >
          <div
            style={{
              fontSize: 200,
              lineHeight: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 220,
              height: 220,
              background: 'rgba(255,255,255,0.18)',
              borderRadius: 32,
            }}
          >
            {icone}
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
            }}
          >
            <div
              style={{
                fontSize: 76,
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: -1.5,
              }}
            >
              {nomService}
            </div>
            <div
              style={{
                fontSize: 56,
                fontWeight: 700,
                lineHeight: 1.1,
                marginTop: 8,
                opacity: 0.95,
              }}
            >
              à {nomVille}
            </div>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {aPartirDe ? (
            <div
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: 16,
                background: 'rgba(255,255,255,0.18)',
                padding: '20px 32px',
                borderRadius: 16,
              }}
            >
              <div style={{ fontSize: 28, fontWeight: 600, opacity: 0.9 }}>
                À partir de
              </div>
              <div style={{ fontSize: 56, fontWeight: 800 }}>{aPartirDe}</div>
            </div>
          ) : (
            <div />
          )}
          <div
            style={{
              fontSize: 28,
              fontWeight: 700,
              opacity: 0.95,
            }}
          >
            Devis annoncé avant intervention
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
