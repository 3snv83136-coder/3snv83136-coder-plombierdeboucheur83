import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Phone, Clock, MapPin } from 'lucide-react';
import { getParametre } from '@/lib/parametres';
import { formaterTelephone, telephoneVersHref } from '@/lib/utils';

export async function SectionPhotoPlombier() {
  const tel = await getParametre('TEL_PRINCIPAL');
  const href = telephoneVersHref(tel);
  const telLabel = formaterTelephone(tel);

  return (
    <section className="container-borne py-10 sm:py-16">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-slate-100 shadow-borne">
          <Image
            src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=1200&q=80"
            alt="Plombier professionnel intervenant sur une canalisation à Toulon"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-borne-bleu/10 text-borne-bleu">
              <Clock className="h-5 w-5" />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-bold text-borne-encre">
                Intervention sous 1 heure
              </p>
              <p className="text-xs text-borne-gris">
                Var (83) — 24h/7j, week-ends inclus
              </p>
            </div>
          </div>
        </div>

        <div>
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-borne-bleu">
            Plombier Var · 24h/7j
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-borne-encre leading-tight">
            Une équipe de proximité,<br />des techniciens diplômés
          </h2>
          <p className="mt-4 text-base sm:text-lg text-borne-gris leading-relaxed">
            Nous intervenons sur tout le Var depuis plus de 10 ans :
            débouchage, inspection caméra HD, vidange de fosses et
            installation de pompes de relevage. Camions hydrocureurs et
            matériel professionnel, devis annoncé avant intervention.
          </p>

          <ul className="mt-6 grid gap-3">
            {[
              {
                titre: 'Tarif annoncé = tarif facturé',
                desc: 'Le prix calculé par la borne est garanti à l\'euro près.',
              },
              {
                titre: 'Techniciens diplômés CAP/BTS',
                desc: 'Formés en hygiène et sécurité sanitaire.',
              },
              {
                titre: 'Matériel professionnel',
                desc: 'Camions hydrocureurs, caméras HD, équipements certifiés.',
              },
            ].map((item) => (
              <li key={item.titre} className="flex gap-3">
                <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-borne-vert text-white">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <div>
                  <p className="font-bold text-borne-encre">{item.titre}</p>
                  <p className="text-sm text-borne-gris">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={href}
              className="inline-flex items-center gap-2 rounded-2xl bg-borne-appel px-5 py-3.5 font-bold text-white shadow-cta hover:bg-borne-appel-fonce transition-colors"
            >
              <Phone className="h-5 w-5" />
              {telLabel}
            </a>
            <Link
              href="/depannage"
              className="inline-flex items-center gap-1 rounded-2xl border-2 border-borne-bleu bg-white px-5 py-3.5 font-bold text-borne-bleu hover:bg-borne-bleu hover:text-white transition-colors"
            >
              Voir nos villes
              <MapPin className="h-4 w-4" />
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
