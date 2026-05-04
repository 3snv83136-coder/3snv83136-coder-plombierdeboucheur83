import type { Metadata } from 'next';
import { BorneHeader } from '@/components/borne/BorneHeader';
import { getParametre } from '@/lib/parametres';
import { SITE_NAME } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Conditions générales de vente',
  description: 'Conditions générales de vente — Plombier Déboucheur 69 · plombier dépanneur déboucheur 24h/7j à Lyon et dans tout le Rhône (69).',
};

export default async function CGV() {
  const nomEntreprise = await getParametre('NOM_ENTREPRISE');
  return (
    <>
      <BorneHeader />
      <article className="container-borne py-10 sm:py-14 prose prose-slate max-w-3xl mx-auto">
        <h1>Conditions générales de vente</h1>
        <p>
          Les présentes CGV régissent les prestations de dépannage proposées par{' '}
          <strong>{nomEntreprise || SITE_NAME}</strong>.
        </p>

        <h2>1. Objet</h2>
        <p>
          Débouchage de canalisation, inspection caméra, pompage de fosse
          septique, intervention sur pompe de relevage, dans le département du
          Rhône (69) et la Métropole de Lyon.
        </p>

        <h2>2. Tarifs</h2>
        <p>
          Les tarifs affichés sur le site sont indicatifs et calculés à partir
          des informations transmises via la borne. Le tarif définitif est
          confirmé par le technicien sur place avant toute intervention. En
          cas d'écart, le client est libre de refuser l'intervention sans
          frais.
        </p>

        <h2>3. Paiement</h2>
        <p>
          Le règlement intervient à la fin de la prestation, par carte
          bancaire, virement ou espèces (selon montant). Une facture est
          systématiquement remise.
        </p>

        <h2>4. Délais d'intervention</h2>
        <p>
          Nous nous engageons à intervenir sous 1 heure en zone urbaine du
          Rhône et de la Métropole de Lyon, sous réserve de disponibilité
          technicien. Cet engagement est tenu sur plus de 95 % des
          interventions.
        </p>

        <h2>5. Garantie</h2>
        <p>
          Nos interventions sont garanties 6 mois (débouchage) à 1 an
          (remplacement pompe de relevage). Couverture par notre assurance RC
          Pro.
        </p>

        <h2>6. Droit de rétractation</h2>
        <p>
          Conformément à l'article L221-28 du Code de la consommation, le
          droit de rétractation ne s'applique pas en cas de prestation
          d'urgence sollicitée par le client à son domicile.
        </p>

        <h2>7. Litiges</h2>
        <p>
          En cas de litige, médiation gratuite via le Médiateur de la
          consommation compétent. À défaut, tribunaux de Lyon compétents.
        </p>
      </article>
    </>
  );
}
