import Link from 'next/link';
import { Wrench, MapPin, Mail, Phone } from 'lucide-react';
import { getParametre } from '@/lib/parametres';
import { getVilles } from '@/lib/villes';
import { getServices } from '@/lib/services';
import { Icone } from '@/components/shared/Icone';
import { BoutonAppel } from '@/components/shared/BoutonAppel';
import { SITE_NAME, formaterTelephone, telephoneVersHref } from '@/lib/utils';

export async function Footer() {
  const [tel, email, adresse, siret, services, villes] = await Promise.all([
    getParametre('TEL_PRINCIPAL'),
    getParametre('EMAIL_CONTACT'),
    getParametre('ADRESSE_SIEGE'),
    getParametre('SIRET'),
    getServices(),
    getVilles(),
  ]);

  const telAffiche = formaterTelephone(tel);

  return (
    <footer className="mt-16 border-t border-slate-200 bg-borne-encre text-slate-300 mb-cta-sticky">
      <div className="container-borne grid grid-cols-2 gap-6 py-10 sm:py-14 md:grid-cols-4">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-lg gradient-bleu text-white">
              <Wrench className="h-4 w-4" strokeWidth={2.5} />
            </span>
            <span className="text-base font-black text-white">{SITE_NAME}</span>
          </div>
          <p className="mt-3 text-sm">
            Borne dépannage Rhône (69) — plombier déboucheur dépanneur :
            débouchage canalisation, hydrocureur, inspection caméra HD,
            vidange fosse septique, pompe de relevage, urgence plomberie
            24h/7j. Tarif transparent, intervention sous 1h à Lyon et dans
            toute la Métropole.
          </p>
          <div className="mt-4">
            <BoutonAppel variante="header" className="bg-borne-vert hover:bg-borne-vert-fonce" />
          </div>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white">
            Services
          </h3>
          <ul className="mt-3 space-y-1.5 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/depannage?service=${s.slug}`}
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Icone name={s.icone} className="h-3.5 w-3.5" strokeWidth={2.2} />
                  {s.nom}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white">
            Villes
          </h3>
          <ul className="mt-3 grid grid-cols-2 gap-x-3 gap-y-1.5 text-sm">
            {villes.map((v) => (
              <li key={v.slug}>
                <Link
                  href={`/depannage/${v.slug}`}
                  className="hover:text-white transition-colors"
                >
                  {v.nom}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white">
            Légal & contact
          </h3>
          <ul className="mt-3 space-y-1.5 text-sm">
            <li>
              <Link href="/mentions-legales" className="hover:text-white">
                Mentions légales
              </Link>
            </li>
            <li>
              <Link href="/cgv" className="hover:text-white">
                CGV
              </Link>
            </li>
            <li>
              <Link
                href="/politique-confidentialite"
                className="hover:text-white"
              >
                Politique de confidentialité
              </Link>
            </li>
            <li className="pt-2">
              <a
                href={telephoneVersHref(tel)}
                className="inline-flex items-center gap-2 font-bold text-white hover:text-borne-vert transition-colors"
              >
                <Phone className="h-3.5 w-3.5" />
                {telAffiche}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="h-3.5 w-3.5" />
                {email}
              </a>
            </li>
            <li>
              <span className="inline-flex items-start gap-2">
                <MapPin className="h-3.5 w-3.5 mt-0.5 shrink-0" />
                {adresse}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <div className="container-borne flex flex-col items-center justify-between gap-2 text-xs text-slate-400 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {SITE_NAME} — SIRET {siret}
          </p>
          <p>Site conçu mobile-first — Borne McDonald's pour le dépannage.</p>
        </div>
      </div>
    </footer>
  );
}
