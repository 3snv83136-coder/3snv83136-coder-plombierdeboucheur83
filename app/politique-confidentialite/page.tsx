import type { Metadata } from 'next';
import { BorneHeader } from '@/components/borne/BorneHeader';
import { getParametre } from '@/lib/parametres';

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description: 'Politique de confidentialité et RGPD — Plombier Déboucheur 83.',
};

export default async function PolitiqueConfidentialite() {
  const email = await getParametre('EMAIL_CONTACT');
  return (
    <>
      <BorneHeader />
      <article className="container-borne py-10 sm:py-14 prose prose-slate max-w-3xl mx-auto">
        <h1>Politique de confidentialité</h1>

        <h2>Données collectées</h2>
        <ul>
          <li>
            Formulaire de devis : nom, téléphone, email, adresse, message.
          </li>
          <li>
            Tracking d'appel : ville, service, tarif affiché, agent de
            navigation, page d'origine. Aucune donnée nominative.
          </li>
        </ul>

        <h2>Finalité</h2>
        <p>
          Vous rappeler dans les 30 minutes pour vous proposer un rendez-vous,
          mesurer le bon fonctionnement de la borne, améliorer le service.
        </p>

        <h2>Base légale</h2>
        <p>
          Exécution d'un contrat (réponse à votre demande de devis) et intérêt
          légitime (mesure d'audience anonyme).
        </p>

        <h2>Durée de conservation</h2>
        <p>
          Leads devis : 3 ans à compter de la dernière interaction. Tracking
          appels : 13 mois.
        </p>

        <h2>Vos droits</h2>
        <p>
          Conformément au RGPD, vous disposez d'un droit d'accès, de
          rectification, d'effacement, de limitation et de portabilité.
          Exercez ces droits par email à <a href={`mailto:${email}`}>{email}</a>.
        </p>

        <h2>Cookies</h2>
        <p>
          Le site utilise uniquement des cookies techniques nécessaires au bon
          fonctionnement (préférences). Aucun cookie publicitaire.
        </p>
      </article>
    </>
  );
}
