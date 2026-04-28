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
    <section className="container-borne py-8 sm:py-14">
      <div className="mb-6 sm:mb-10 text-center">
        <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-borne-bleu">
          {surtitreFinal}
        </p>
        <h1 className="mt-3 titre-borne max-w-3xl mx-auto">{titreFinal}</h1>
        <p className="sous-titre-borne mt-3 max-w-2xl mx-auto">
          Tapez sur l'image. Répondez à 3 questions. Appelez avec le tarif sous
          les yeux.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
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
    </section>
  );
}
