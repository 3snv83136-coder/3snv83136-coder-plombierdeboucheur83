import { getServices } from '@/lib/services';
import { BorneButton } from './BorneButton';

type Props = {
  ville?: { slug: string; nom: string };
  titre?: string;
  surtitre?: string;
};

export async function Borne({ ville, titre, surtitre }: Props) {
  const services = await getServices();

  const titreFinal =
    titre ??
    (ville
      ? `Quel est votre problème à ${ville.nom} ?`
      : 'Quel est votre problème ?');
  const surtitreFinal =
    surtitre ??
    (ville
      ? `Tarif transparent affiché en 4 clics — Intervention sous 1h`
      : 'Borne dépannage — choisissez un service, voyez le prix, appelez');

  return (
    <section className="container-borne pt-4 pb-6 sm:pt-10 sm:pb-14">
      <div className="mb-4 sm:mb-8 text-center">
        <p className="text-[10px] sm:text-sm font-bold uppercase tracking-[0.2em] text-borne-bleu">
          {surtitreFinal}
        </p>
        <h1 className="mt-1.5 sm:mt-3 text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-borne-encre max-w-3xl mx-auto leading-[1.05]">
          {titreFinal}
        </h1>
        <p className="hidden sm:block sous-titre-borne mt-3 max-w-2xl mx-auto">
          Tapez sur l'image. Répondez à 3 questions. Appelez avec le tarif sous
          les yeux.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
        {services.map((service) => (
          <BorneButton
            key={service.slug}
            service={{
              slug: service.slug,
              nom: service.nom,
              icone: service.icone,
              couleur: service.couleur,
              description: service.description,
              prixMin: service.prixMin,
            }}
            villeSlug={ville?.slug}
          />
        ))}
      </div>

      <p className="sm:hidden mt-3 text-center text-xs text-borne-gris">
        Tapez · 3 questions · Tarif · Appel.
      </p>
    </section>
  );
}
