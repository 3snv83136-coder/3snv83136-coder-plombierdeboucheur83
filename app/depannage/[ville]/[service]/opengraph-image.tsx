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
export const alt = 'Plombier Déboucheur 69 — service par ville dans le Rhône';

/**
 * Couleurs validées pour chaque service. Hardcodées (et non lues
 * dynamiquement) pour garder un mapping déterministe et éviter
 * les couleurs inattendues dans une image OG indexée.
 */
function gradientForService(slug: string, fallback: string): string {
  switch (slug) {
    case 'debouchage':
      return 'linear-gradient(135deg, #0e7490 0%, #155e75 100%)';
    case 'inspection-camera':
      return 'linear-gradient(135deg, #334155 0%, #1e293b 100%)';
    case 'fosse-septique':
      return 'linear-gradient(135deg, #15803d 0%, #14532d 100%)';
    case 'pompe-relevage':
      return 'linear-gradient(135deg, #9a3412 0%, #7c2d12 100%)';
    default: {
      const c = fallback || '#1e3a5f';
      return `linear-gradient(135deg, ${c} 0%, #0f2138 100%)`;
    }
  }
}

function tagForService(slug: string): string {
  switch (slug) {
    case 'debouchage':
      return 'CANAL';
    case 'inspection-camera':
      return 'VIDÉO';
    case 'fosse-septique':
      return 'FOSSE';
    case 'pompe-relevage':
      return 'POMPE';
    default:
      return 'PRO';
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

  const nomVille = ville?.nom ?? 'Rhône (69)';
  const nomService = service?.nom ?? 'Plomberie';
  const aPartirDe = service ? formatPrixEuros(service.prixMin) : '';
  const tag = tagForService(service?.slug ?? '');
  const gradient = gradientForService(
    service?.slug ?? '',
    service?.couleur ?? '#1e3a5f'
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
            Plombier Déboucheur 69 — 24h/7j
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
            {ville?.codePostal ?? '69'}
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
              fontSize: 60,
              fontWeight: 800,
              letterSpacing: 4,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 220,
              height: 220,
              background: 'rgba(255,255,255,0.14)',
              borderRadius: 24,
              border: '4px solid rgba(255,255,255,0.25)',
            }}
          >
            {tag}
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
