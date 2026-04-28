import { Clock, FileText, ShieldCheck, Star } from 'lucide-react';

const ITEMS = [
  {
    icone: Clock,
    titre: 'Intervention < 1h',
    sousTitre: '24h/7j sur tout le Var',
  },
  {
    icone: FileText,
    titre: 'Tarif transparent',
    sousTitre: 'Prix affiché avant l\'appel',
  },
  {
    icone: ShieldCheck,
    titre: 'Garantie satisfaction',
    sousTitre: 'Assurance RC Pro',
  },
  {
    icone: Star,
    titre: '4,9/5 sur les avis',
    sousTitre: '+ 30 chantiers documentés',
  },
];

export function BandeauConfiance() {
  return (
    <section
      aria-label="Engagements"
      className="border-y border-slate-200 bg-white"
    >
      <div className="container-borne grid grid-cols-2 gap-3 py-5 sm:grid-cols-4 sm:gap-4 sm:py-7">
        {ITEMS.map(({ icone: Icone, titre, sousTitre }) => (
          <div
            key={titre}
            className="flex items-center gap-3 rounded-xl bg-slate-50/60 px-3 py-3 sm:px-4 sm:py-4"
          >
            <span className="grid h-10 w-10 sm:h-11 sm:w-11 shrink-0 place-items-center rounded-full bg-borne-bleu/10 text-borne-bleu">
              <Icone className="h-5 w-5" strokeWidth={2.4} />
            </span>
            <div className="leading-tight">
              <p className="text-sm sm:text-base font-bold text-borne-encre">
                {titre}
              </p>
              <p className="text-xs sm:text-sm text-borne-gris">{sousTitre}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
