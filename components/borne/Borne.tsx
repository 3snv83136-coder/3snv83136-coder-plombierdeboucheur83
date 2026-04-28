import { getServices } from '@/lib/services';
import { BorneButton } from './BorneButton';

type Props = {
  ville?: { slug: string; nom: string };
  titre?: string;
  surtitre?: string;
  /** Si true : n'affiche que la grille des 4 boutons, sans aucun titre/intro. */
  sansEntete?: boolean;
};

export async function Borne({ ville, titre, surtitre, sansEntete }: Props) {
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
    <section className="container-borne pt-3 pb-4 sm:pt-8 sm:pb-10">
      {!sansEntete && (
        <div className="mb-4 sm:mb-8 text-center">
          <p className="text-[10px] sm:text-sm font-bold uppercase tracking-[0.2em] text-borne-bleu">
            {surtitreFinal}
          </p>
          <h2 className="mt-1.5 sm:mt-3 text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-borne-encre max-w-3xl mx-auto leading-[1.05]">
            {titreFinal}
          </h2>
        </div>
      )}

      <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
        {services.map((service) => (
          <BorneButton
            key={service.slug}
            service={{
              slug: service.slug,
              nom: service.nom,
              slogan: service.slogan,
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
