// ============================================================
// OG IMAGE GÉNÉRIQUE — 1200×630
// ============================================================
// Rendue à l'edge via next/og. Texte et formes uniquement.
// Palette sobre : marine + sarcelle.
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
          background: 'linear-gradient(135deg, #1e3a5f 0%, #0f2138 100%)',
          color: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 28,
              fontWeight: 600,
              opacity: 0.7,
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
              opacity: 0.85,
            }}
          >
            Intervention 24h/7j — Tarif annoncé avant
          </div>
        </div>

        <div style={{ display: 'flex', gap: 16, fontSize: 26, fontWeight: 600 }}>
          {[
            { label: 'Débouchage', bg: '#0e7490' },
            { label: 'Caméra', bg: '#334155' },
            { label: 'Fosse septique', bg: '#15803d' },
            { label: 'Pompe relevage', bg: '#9a3412' },
          ].map((s) => (
            <div
              key={s.label}
              style={{
                display: 'flex',
                alignItems: 'center',
                background: s.bg,
                padding: '18px 24px',
                borderRadius: 14,
              }}
            >
              {s.label}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
