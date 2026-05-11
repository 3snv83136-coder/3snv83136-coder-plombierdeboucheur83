import Image from 'next/image';
import { ShieldCheck, FileCheck2, Award, Lock, Clock4 } from 'lucide-react';
import { getParametre } from '@/lib/parametres';
import { PHOTO_ASSURANCE } from '@/lib/data/photos';

export async function SectionAssurance() {
  const [siret, assurance] = await Promise.all([
    getParametre('SIRET'),
    getParametre('ASSURANCE_RC_PRO'),
  ]);

  return (
    <section className="container-borne py-12 sm:py-16">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] items-center">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-slate-100 shadow-borne">
          <Image
            src={PHOTO_ASSURANCE.src}
            alt={PHOTO_ASSURANCE.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-borne-bleu/40 via-transparent to-transparent" />
          <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-black uppercase tracking-wider text-borne-encre shadow-md">
            <ShieldCheck className="h-3.5 w-3.5 text-borne-vert" />
            Assurance RC Pro
          </div>
        </div>

        <div>
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-borne-bleu">
            Garanties & assurance
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-borne-encre leading-tight">
            Vous êtes couvert,<br />nous sommes assurés
          </h2>
          <p className="mt-4 text-base sm:text-lg text-borne-gris leading-relaxed">
            Toute notre activité est couverte par une assurance
            Responsabilité Civile Professionnelle. Nos interventions sont
            garanties contractuellement.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3">
            {[
              {
                icone: ShieldCheck,
                titre: 'RC Pro',
                desc: 'Responsabilité civile professionnelle souscrite',
              },
              {
                icone: FileCheck2,
                titre: 'Décennale',
                desc: 'Sur les installations neuves de pompes',
              },
              {
                icone: Award,
                titre: 'Garantie 6 mois',
                desc: 'Sur tout débouchage, 1 an sur installation',
              },
              {
                icone: Lock,
                titre: 'Devis ferme',
                desc: 'Tarif annoncé contractuellement respecté',
              },
              {
                icone: Clock4,
                titre: '24h/7j',
                desc: 'Astreinte téléphonique nuits et week-ends',
              },
              {
                icone: FileCheck2,
                titre: 'Bordereau déchets',
                desc: 'Suivi réglementaire des boues de fosse',
              },
            ].map((item) => (
              <div
                key={item.titre}
                className="flex gap-3 rounded-xl border border-slate-200 bg-white p-3 sm:p-4"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-borne-bleu/10 text-borne-bleu">
                  <item.icone className="h-4 w-4" strokeWidth={2.4} />
                </span>
                <div className="leading-tight">
                  <p className="text-sm font-bold text-borne-encre">
                    {item.titre}
                  </p>
                  <p className="text-xs text-borne-gris">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <dl className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-borne-gris border-t border-slate-200 pt-4">
            <div>
              <dt className="font-bold uppercase tracking-wider text-borne-encre">
                SIRET
              </dt>
              <dd>{siret}</dd>
            </div>
            <div>
              <dt className="font-bold uppercase tracking-wider text-borne-encre">
                Assurance
              </dt>
              <dd>{assurance}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
