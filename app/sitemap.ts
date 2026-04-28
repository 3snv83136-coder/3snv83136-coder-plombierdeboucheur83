// ============================================================
// SITEMAP DYNAMIQUE
// ============================================================
// Lit les villes, services et réalisations via les helpers de
// lib/* (qui font eux-mêmes le fallback DB → mock).
// ============================================================

import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/utils';
import { getVilles } from '@/lib/villes';
import { getServices } from '@/lib/services';
import { getRealisations } from '@/lib/realisations';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [villes, services, realisations] = await Promise.all([
    getVilles(),
    getServices(),
    getRealisations(),
  ]);

  const now = new Date();
  const base = SITE_URL.replace(/\/+$/, '');
  const url = (path: string) => `${base}${path.startsWith('/') ? path : `/${path}`}`;

  const entries: MetadataRoute.Sitemap = [];

  // Home
  entries.push({
    url: url('/'),
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 1,
  });

  // Sélecteur ville
  entries.push({
    url: url('/depannage'),
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.9,
  });

  // /depannage/[ville]
  for (const v of villes) {
    entries.push({
      url: url(`/depannage/${v.slug}`),
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    });
  }

  // /depannage/[ville]/[service]
  for (const v of villes) {
    for (const s of services) {
      entries.push({
        url: url(`/depannage/${v.slug}/${s.slug}`),
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 0.8,
      });
    }
  }

  // /depannage/[ville]/devis
  for (const v of villes) {
    entries.push({
      url: url(`/depannage/${v.slug}/devis`),
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.5,
    });
  }

  // /depannage/[ville]/realisations
  for (const v of villes) {
    entries.push({
      url: url(`/depannage/${v.slug}/realisations`),
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    });
  }

  // /depannage/[ville]/realisations/[slug]
  for (const r of realisations) {
    entries.push({
      url: url(`/depannage/${r.ville.slug}/realisations/${r.slug}`),
      lastModified: r.dateRealisation,
      changeFrequency: 'monthly',
      priority: 0.6,
    });
  }

  // Pages légales
  for (const path of ['/mentions-legales', '/cgv', '/politique-confidentialite']) {
    entries.push({
      url: url(path),
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    });
  }

  return entries;
}
