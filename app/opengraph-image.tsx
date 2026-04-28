// ============================================================
// OG IMAGE GÉNÉRIQUE — 1200×630
// ============================================================
// Rendue à l'edge via next/og. Pas de Tailwind, pas d'image
// externe : uniquement texte et formes.
// ============================================================

import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Plombier Déboucheur 83 — Borne dépannage Var (83), 24h/7j';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px',
          background:
            'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
          color: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 28,
              fontWeight: 600,
              opacity: 0.85,
              letterSpacing: 2,
              textTransform: 'uppercase',
            }}
          >
            Borne dépannage Var (83)
          </div>
          <div
            style={{
              fontSize: 92,
              fontWeight: 800,
              lineHeight: 1.05,
              marginTop: 24,
              letterSpacing: -2,
            }}
          >
            Plombier Déboucheur 83
          </div>
          <div
            style={{
              fontSize: 36,
              fontWeight: 500,
              marginTop: 28,
              opacity: 0.9,
            }}
          >
            Intervention 24h/7j — Tarif annoncé avant
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            gap: 28,
            fontSize: 28,
            fontWeight: 600,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              background: 'rgba(255,255,255,0.15)',
              padding: '18px 28px',
              borderRadius: 16,
            }}
          >
            <span style={{ fontSize: 40 }}>🚿</span>
            <span>Débouchage</span>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              background: 'rgba(255,255,255,0.15)',
              padding: '18px 28px',
              borderRadius: 16,
            }}
          >
            <span style={{ fontSize: 40 }}>📹</span>
            <span>Caméra</span>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              background: 'rgba(255,255,255,0.15)',
              padding: '18px 28px',
              borderRadius: 16,
            }}
          >
            <span style={{ fontSize: 40 }}>🚛</span>
            <span>Fosse</span>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              background: 'rgba(255,255,255,0.15)',
              padding: '18px 28px',
              borderRadius: 16,
            }}
          >
            <span style={{ fontSize: 40 }}>⚙️</span>
            <span>Relevage</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
