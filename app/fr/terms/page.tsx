import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import type { ReactNode } from "react"

const sectionClassName = "space-y-4"
const sectionTitleClassName = "text-2xl font-bold text-gray-900"
const paragraphClassName = "text-gray-700 leading-relaxed"
const listClassName = "list-disc space-y-2 pl-6 text-gray-700"
const nestedListClassName = "mt-2 list-[circle] space-y-2 pl-6 text-gray-700"

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className={sectionClassName}>
      <h2 className={sectionTitleClassName}>{title}</h2>
      {children}
    </section>
  )
}

export default function TermsPageFR() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 pt-6 pb-16 md:pt-16">
          <h1 className="mb-8 text-4xl font-bold text-gray-900 text-balance break-words hyphens-auto md:text-5xl">
            Conditions générales d’utilisation
          </h1>

          <div className="space-y-8 rounded-2xl bg-white p-8 shadow-sm md:p-12">
            <section className={sectionClassName}>
              <p className={paragraphClassName}>
                <strong>Date&nbsp;:</strong> 1er mai 2026
                <br />
                <strong>Prestataire&nbsp;:</strong> Claimity SA, Wisentalstrasse 7a, 8185 Winkel, Suisse
                <br />
                (ci-après «&nbsp;Claimity&nbsp;»)
              </p>
              <p className={paragraphClassName}>
                Les présentes Conditions générales d’utilisation («&nbsp;CGU&nbsp;») régissent l’utilisation de la
                plateforme numérique mise à disposition par Claimity, destinée au traitement structuré, à la
                coordination et à la documentation des sinistres et cas d’assurance, en particulier la saisie des
                cas, leur attribution à des experts externes, la communication, la gestion documentaire, le suivi de
                l’état d’avancement et la facturation.
              </p>
              <p className={paragraphClassName}>
                La plateforme s’adresse exclusivement aux entreprises et aux utilisateurs professionnels, notamment
                aux compagnies d’assurance, aux organisations de gestion de sinistres, aux experts, aux experts
                techniques et aux autres prestataires de services professionnels. Une utilisation par des
                consommateurs n’est pas prévue.
              </p>
            </section>

            <Section title="1. Champ d’application et bases contractuelles">
              <ul className={listClassName}>
                <li>
                  Les présentes CGU s’appliquent à tout accès à la plateforme Claimity ainsi qu’à toutes les
                  prestations fournies par Claimity en lien avec la plateforme à l’égard d’assureurs, d’experts ou
                  d’autres clients professionnels, sauf accord écrit dérogatoire conclu au cas par cas.
                </li>
                <li>
                  À titre complémentaire, peuvent notamment s’appliquer les éléments contractuels suivants&nbsp;:
                  <ul className={nestedListClassName}>
                    <li>offres individuelles, contrats-cadres ou descriptifs de prestations,</li>
                    <li>listes de prix ou modèles de rémunération liés aux cas,</li>
                    <li>conventions de sous-traitance ou accords de protection des données,</li>
                    <li>documentation technique, concepts de sécurité ou descriptifs de service.</li>
                  </ul>
                </li>
                <li>
                  En cas de contradictions, les accords écrits individuels prévalent sur les présentes CGU.
                  S’appliquent ensuite les conventions particulières de protection des données ou de sécurité, puis
                  les présentes CGU.
                </li>
                <li>
                  Les conditions générales du client ou d’un expert ne s’appliquent que si Claimity y a expressément
                  consenti par écrit.
                </li>
              </ul>
            </Section>

            <Section title="2. Définitions">
              <ul className={listClassName}>
                <li>
                  <strong>Plateforme</strong> désigne la solution logicielle mise à disposition par Claimity, y
                  compris l’interface web, les interfaces, les fonctions de communication, l’espace de stockage
                  documentaire, la gestion des cas, le système de rôles et de droits, les notifications, les
                  fonctions de reporting et de facturation.
                </li>
                <li>
                  <strong>Assureur</strong> désigne une compagnie d’assurance ou toute autre organisation qui fait
                  saisir, traiter, coordonner ou attribuer des cas d’assurance à des experts via la plateforme.
                </li>
                <li>
                  <strong>Experts</strong> désigne les experts externes, experts techniques, experts en sinistres
                  ou autres prestataires professionnels qui prennent en charge, traitent ou documentent des cas via
                  la plateforme.
                </li>
                <li>
                  <strong>Utilisateurs</strong> désigne les personnes physiques qui obtiennent l’accès à la
                  plateforme au nom d’un assureur, d’un expert ou d’un autre client.
                </li>
                <li>
                  <strong>Cas</strong> désigne un dossier individuel de sinistre, d’assurance, de contrôle ou
                  d’expertise qui est créé, traité, attribué ou documenté via la plateforme.
                </li>
                <li>
                  <strong>Documents du cas</strong> désigne l’ensemble des données, documents, photos, rapports,
                  communications, métadonnées et autres contenus téléchargés ou transmis par les utilisateurs en
                  lien avec un cas.
                </li>
                <li>
                  <strong>Résultats de travail</strong> désigne en particulier les expertises, rapports,
                  appréciations, bases de décision, procès-verbaux, documentations ou autres résultats
                  professionnels produits ou fournis par les experts ou par Claimity dans le cadre d’un cas.
                </li>
              </ul>
            </Section>

            <Section title="3. Étendue des prestations et rôle de Claimity">
              <ul className={listClassName}>
                <li>
                  Claimity met à disposition une plateforme numérique permettant aux assureurs de saisir, structurer
                  les cas, attribuer des experts, échanger des documents, communiquer, suivre l’état d’avancement et
                  coordonner les facturations.
                </li>
                <li>
                  Selon la configuration contractuelle, Claimity peut notamment fournir les prestations
                  suivantes&nbsp;:
                  <ul className={nestedListClassName}>
                    <li>mise à disposition technique et exploitation de la plateforme,</li>
                    <li>création et coordination des cas,</li>
                    <li>placement, mandat ou coordination des experts,</li>
                    <li>mise à disposition de fonctions de communication et de documentation,</li>
                    <li>facturation des cas aux assureurs,</li>
                    <li>traitement ou transmission des rémunérations aux experts,</li>
                    <li>reporting, vues d’état et assurance qualité.</li>
                  </ul>
                </li>
                <li>
                  En principe, Claimity ne doit aucune décision d’assurance, décision de couverture, conseil
                  juridique ni évaluation professionnelle définitive d’un sinistre, sauf accord écrit exprès. Les
                  appréciations professionnelles des experts relèvent de leur propre responsabilité.
                </li>
                <li>
                  Lorsque Claimity place ou coordonne des experts, Claimity les sélectionne selon des critères
                  objectifs. Une personne ou un expert déterminé n’est dû que si cela a été expressément convenu.
                </li>
                <li>
                  Claimity est en droit de faire évoluer la plateforme en continu, de modifier, compléter ou
                  supprimer des fonctions, dans la mesure où les possibilités essentielles d’utilisation
                  contractuelle ne sont pas restreintes de manière déraisonnable.
                </li>
              </ul>
            </Section>

            <Section title="4. Inscription, comptes utilisateur et droits d’accès">
              <ul className={listClassName}>
                <li>
                  L’utilisation de la plateforme requiert un compte utilisateur activé. Aucun droit à l’inscription
                  ou à l’activation n’est garanti.
                </li>
                <li>
                  Le client concerné est responsable de veiller à ce que seules des personnes autorisées aient accès
                  à la plateforme et que les rôles, autorisations et accès soient attribués de manière appropriée
                  et tenus à jour.
                </li>
                <li>
                  Les utilisateurs sont tenus de traiter leurs identifiants de manière confidentielle, de ne pas
                  les transmettre à des tiers et d’informer Claimity sans délai en cas de soupçon d’abus ou
                  d’accès non autorisé.
                </li>
                <li>
                  Les actions effectuées via un compte utilisateur sont imputées au client concerné, dans la mesure
                  où celui-ci a initié, permis ou n’a pas suffisamment empêché l’accès.
                </li>
                <li>
                  Claimity peut suspendre temporairement l’accès s’il existe des indices concrets d’abus, de
                  risques de sécurité, de violations légales, de retards de paiement ou d’autres manquements
                  contractuels significatifs.
                </li>
              </ul>
            </Section>

            <Section title="5. Licence d’utilisation, droits sur la plateforme et documents du cas">
              <ul className={listClassName}>
                <li>
                  Claimity accorde au client et aux utilisateurs activés, pour la durée du contrat, un droit
                  simple, non exclusif, non transférable et révocable d’utiliser la plateforme dans le cadre
                  convenu pour leurs propres finalités professionnelles.
                </li>
                <li>
                  La plateforme, y compris le logiciel, les interfaces utilisateur, les workflows, la structure de
                  base de données, la documentation, les marques, les logos, les designs, les textes, les modèles,
                  la logique du système et les autres contenus appartenant à Claimity, demeure la propriété de
                  Claimity ou des titulaires de droits respectifs.
                </li>
                <li>
                  Sans le consentement écrit préalable de Claimity, il est notamment interdit de&nbsp;:
                  <ul className={nestedListClassName}>
                    <li>
                      copier, reproduire, louer, vendre, sous-licencier la plateforme ou des parties de celle-ci ou
                      la rendre accessible à des tiers en dehors du cercle d’utilisation convenu,
                    </li>
                    <li>
                      examiner, décompiler, faire de l’ingénierie inverse ou contourner le code source,
                      l’architecture du système ou les mécanismes de sécurité,
                    </li>
                    <li>
                      effectuer sans autorisation des accès massifs automatisés, du scraping, du crawling ou des
                      tests de charge,
                    </li>
                    <li>
                      réutiliser commercialement en dehors de la plateforme les modèles, interfaces, workflows ou
                      documentations propres à Claimity.
                    </li>
                  </ul>
                </li>
                <li>
                  Les restrictions ci-dessus ne s’appliquent pas aux documents du cas que le client, un assureur,
                  un expert ou d’autres utilisateurs autorisés introduisent eux-mêmes dans la plateforme ou
                  produisent dans le cadre d’un cas. Ces documents du cas peuvent être affichés, téléchargés,
                  copiés, complétés, traités, commentés, exportés, transmis et archivés dans le cadre du
                  traitement légitime du cas, dans la mesure où cela est contractuellement autorisé,
                  professionnellement nécessaire et juridiquement admissible.
                </li>
                <li>
                  Les droits sur les documents du cas introduits par le client ou ses utilisateurs demeurent chez
                  le client, l’assureur concerné, l’expert ou tout autre titulaire de droits autorisé. Claimity ne
                  reçoit que les droits nécessaires à la mise à disposition de la plateforme, au traitement des
                  cas, à la conservation, à la transmission, à l’affichage, à la sauvegarde, à l’exportation et à
                  l’analyse technique des documents, ainsi qu’à la fourniture des prestations contractuellement
                  convenues.
                </li>
                <li>
                  Le client garantit qu’il est autorisé à transmettre, conserver, traiter et communiquer les
                  documents du cas via la plateforme et que cela ne porte pas atteinte aux droits de tiers ni à
                  des prescriptions légales.
                </li>
              </ul>
            </Section>

            <Section title="6. Création de cas, mandat et collaboration avec les experts">
              <ul className={listClassName}>
                <li>
                  Les assureurs peuvent créer des cas via la plateforme et, selon le processus convenu, mandater
                  Claimity ou un expert pour le traitement ultérieur.
                </li>
                <li>
                  Le mandat concret confié à un expert, l’étendue des prestations, les délais de traitement, les
                  exigences de qualité et la rémunération sont régis par le contrat-cadre applicable, la commande
                  de cas, l’indication sur la plateforme ou un accord distinct.
                </li>
                <li>
                  Claimity peut faire intervenir des experts en son propre nom, au nom de l’assureur ou en qualité
                  d’entité de placement ou de coordination. La répartition respective des rôles résulte de
                  l’accord individuel et du processus concret applicable au cas.
                </li>
                <li>
                  Les experts sont tenus de traiter les cas de manière professionnelle, soigneuse et indépendante,
                  dans le respect des exigences professionnelles, légales et contractuelles applicables.
                </li>
                <li>
                  Les assureurs et les experts sont tenus de fournir, de manière complète, exacte et en temps
                  utile, toutes les informations nécessaires au traitement du cas. Les retards ou erreurs résultant
                  d’indications incomplètes ou inexactes ne sont pas à la charge de Claimity.
                </li>
                <li>
                  Claimity peut consigner la communication, les changements d’état, les téléversements de
                  documents et autres étapes de traitement liés aux cas afin de garantir la traçabilité, l’assurance
                  qualité, la facturation et la conformité.
                </li>
              </ul>
            </Section>

            <Section title="7. Rémunération, conditions de paiement et facturation">
              <ul className={listClassName}>
                <li>
                  La rémunération de l’utilisation et des prestations de Claimity est principalement liée aux cas.
                  Sont déterminants le nombre et la nature des cas traités via la plateforme, les forfaits par cas,
                  les honoraires d’experts, les frais de service, suppléments ou autres éléments de prix convenus.
                </li>
                <li>
                  Des abonnements, frais minimums, frais de plateforme, frais de mise en place, coûts
                  d’intégration, forfaits de support ou redevances mensuelles peuvent être convenus à titre
                  complémentaire. En l’absence d’un tel accord, la simple utilisation de la plateforme ne fonde pas
                  un modèle d’abonnement forfaitaire.
                </li>
                <li>
                  Claimity est en droit de facturer à l’assureur les cas individuels immédiatement à la clôture,
                  après des jalons définis ou de manière groupée dans des factures collectives périodiques,
                  notamment mensuelles.
                </li>
                <li>
                  Lorsque Claimity rémunère des experts, Claimity peut refacturer les honoraires d’experts à
                  l’assureur et facturer en outre une marge ou des frais propres de plateforme, de coordination ou
                  de service. La logique de prix concrète résulte de l’offre, du contrat-cadre ou de la liste de
                  prix convenue.
                </li>
                <li>
                  Sauf indication contraire, tous les prix s’entendent hors taxe sur la valeur ajoutée légale,
                  redevances, taxes et débours.
                </li>
                <li>
                  Les factures sont payables sans déduction dans les 30 jours suivant la date de facturation, sauf
                  accord écrit contraire.
                </li>
                <li>
                  En cas de retard de paiement, Claimity est en droit de réclamer des intérêts moratoires, des
                  frais de rappel et des frais de recouvrement dans la mesure légalement admise et, après mise en
                  demeure préalable, de retenir d’autres prestations ou de restreindre l’accès à la plateforme.
                </li>
                <li>
                  Les contestations de factures doivent être communiquées par écrit et de manière motivée dans les
                  14 jours suivant la réception de la facture. Les éléments de facture non contestés restent
                  payables dans les délais.
                </li>
                <li>
                  Une compensation avec des contre-prétentions n’est admise que si celles-ci sont incontestées ou
                  ont été constatées par décision exécutoire.
                </li>
                <li>
                  Les prestations déjà fournies, les cas déjà traités ou les frais d’experts engagés restent dus
                  même si un cas est ultérieurement annulé, n’est plus poursuivi en interne ou est tranché
                  autrement par l’assureur, sauf si Claimity ou l’expert est responsable de l’inexécution.
                </li>
              </ul>
            </Section>

            <Section title="8. Obligations des clients et des utilisateurs">
              <ul className={listClassName}>
                <li>
                  Les clients et les utilisateurs ne peuvent utiliser la plateforme que de manière licite et
                  conforme au contrat, dans le respect de l’ensemble des lois applicables, des exigences
                  réglementaires, des règles de protection des données et des concepts internes d’autorisation.
                </li>
                <li>
                  Il est en particulier interdit&nbsp;:
                  <ul className={nestedListClassName}>
                    <li>
                      de saisir des informations inexactes, trompeuses, illicites ou obtenues sans autorisation,
                    </li>
                    <li>
                      de téléverser des logiciels malveillants, des fichiers manipulés ou des contenus présentant
                      un risque pour la sécurité,
                    </li>
                    <li>
                      de tenter des accès non autorisés aux données, comptes, systèmes ou interfaces,
                    </li>
                    <li>de contourner les restrictions de sécurité, de rôles ou d’accès,</li>
                    <li>
                      d’utiliser la plateforme à des fins illicites, discriminatoires, frauduleuses ou autrement
                      abusives.
                    </li>
                  </ul>
                </li>
                <li>
                  Les clients sont responsables de la vérification professionnelle, de la validation et de
                  l’utilisation des informations et résultats de travail mis à disposition via la plateforme dans
                  le cadre de leurs propres processus métiers.
                </li>
                <li>
                  Les assureurs demeurent en particulier responsables de leurs décisions contractuelles
                  d’assurance, des examens de couverture, des décisions de prestations, de la communication avec
                  les preneurs d’assurance et de leurs obligations réglementaires, sauf accord exprès contraire.
                </li>
                <li>
                  Les experts demeurent responsables de l’exactitude professionnelle, de l’exhaustivité et de la
                  traçabilité de leurs expertises, rapports et appréciations.
                </li>
              </ul>
            </Section>

            <Section title="9. Disponibilité, maintenance et support">
              <ul className={listClassName}>
                <li>
                  Claimity s’efforce d’assurer une haute disponibilité de la plateforme. Une disponibilité précise
                  n’est due que si elle a été expressément convenue dans un Service Level Agreement.
                </li>
                <li>
                  Des restrictions temporaires peuvent notamment résulter de travaux de maintenance, mises à jour,
                  mesures de sécurité, perturbations chez des prestataires d’infrastructure ou de communication,
                  cas de force majeure ou autres circonstances échappant à la sphère d’influence de Claimity.
                </li>
                <li>
                  Claimity est en droit d’effectuer des travaux de maintenance planifiés et de restreindre
                  temporairement la plateforme pour les mesures de sécurité ou de stabilité nécessaires.
                </li>
                <li>
                  Les prestations de support, les délais de réaction, les heures de disponibilité et les chemins
                  d’escalade sont régis par le descriptif de prestation convenu ou par le forfait de support
                  applicable.
                </li>
              </ul>
            </Section>

            <Section title="10. Confidentialité">
              <ul className={listClassName}>
                <li>
                  Les parties s’engagent à traiter de manière confidentielle toutes les informations commerciales,
                  techniques, financières, personnelles, liées aux assurances ou autres informations
                  confidentielles non publiques de l’autre partie.
                </li>
                <li>
                  Les informations confidentielles ne peuvent être utilisées que pour l’exécution du contrat et ne
                  peuvent être divulguées qu’aux personnes qui en ont besoin pour l’exécution du contrat et qui
                  sont elles-mêmes tenues à la confidentialité.
                </li>
                <li>
                  L’obligation de confidentialité ne s’applique pas aux informations qui sont notoirement
                  publiques, qui le deviennent sans violation du contrat, qui ont été légitimement obtenues de
                  tiers ou qui doivent être divulguées en raison d’obligations légales, réglementaires ou
                  judiciaires.
                </li>
                <li>L’obligation de confidentialité subsiste après la fin du contrat.</li>
              </ul>
            </Section>

            <Section title="11. Protection des données et sécurité de l’information">
              <ul className={listClassName}>
                <li>
                  Les parties respectent les lois sur la protection des données applicables, en particulier la
                  Loi fédérale suisse sur la protection des données ainsi que, dans la mesure applicable, le
                  Règlement général sur la protection des données de l’Union européenne.
                </li>
                <li>
                  Le rôle de Claimity en matière de protection des données dépend de la prestation concrète et de
                  l’opération de traitement concernée. Lorsque Claimity traite des données personnelles pour le
                  compte d’un assureur ou d’un client, cela se fait sur la base d’une convention distincte de
                  sous-traitance.
                </li>
                <li>
                  Lorsque Claimity poursuit ses propres finalités, notamment pour la gestion contractuelle, la
                  facturation, la sécurité, la prévention des abus, l’administration des systèmes ou la tenue de
                  preuves prévues par la loi, Claimity agit en qualité de responsable indépendant conformément à
                  la déclaration de protection des données.
                </li>
                <li>
                  Les clients et utilisateurs sont responsables de veiller à ce que la transmission de données
                  personnelles et de données personnelles particulièrement sensibles à Claimity ou via la
                  plateforme s’effectue de manière licite et que les informations, bases légales, consentements ou
                  autres conditions requises soient en place.
                </li>
                <li>
                  Claimity prend des mesures techniques et organisationnelles appropriées pour protéger la
                  plateforme et les données traitées. Les détails peuvent être réglés dans une documentation de
                  sécurité distincte, dans une convention de sous-traitance ou dans un descriptif de prestation.
                </li>
                <li>
                  Claimity peut recourir à des sous-traitants et prestataires techniques dans la mesure nécessaire
                  à l’exécution du contrat et dans le respect des exigences en matière de protection des données.
                </li>
                <li>
                  Les clients sont responsables de la configuration licite des rôles, droits d’accès, durées
                  d’effacement, exportations et transmissions au sein de leur sphère de responsabilité.
                </li>
              </ul>
            </Section>

            <Section title="12. Interfaces, intégrations et prestataires tiers">
              <ul className={listClassName}>
                <li>
                  La plateforme peut mettre à disposition des interfaces avec des systèmes d’assureurs, d’experts
                  ou de prestataires tiers, notamment des systèmes ERP, de gestion des sinistres, de gestion
                  documentaire, de communication ou d’authentification.
                </li>
                <li>
                  Le client est responsable de la licéité, de la sécurité et du fonctionnement des systèmes,
                  identifiants et transmissions de données qu’il connecte.
                </li>
                <li>
                  Claimity n’est pas responsable des perturbations, erreurs de données, pannes ou incidents de
                  sécurité causés par des systèmes, services ou interfaces situés en dehors de la sphère de
                  responsabilité de Claimity.
                </li>
                <li>
                  Pour les services de tiers, des conditions, dispositions de licence ou informations relatives à
                  la protection des données supplémentaires peuvent s’appliquer.
                </li>
              </ul>
            </Section>

            <Section title="13. Résultats de travail et responsabilité professionnelle">
              <ul className={listClassName}>
                <li>
                  Les résultats de travail établis dans le cadre d’un cas peuvent être utilisés par l’assureur
                  autorisé et les utilisateurs autorisés pour le traitement, l’examen, la documentation et la
                  décision du cas concerné.
                </li>
                <li>
                  Sauf accord contraire, aucun droit de propriété intellectuelle exclusif n’est transféré sur les
                  résultats de travail. L’assureur reçoit toutefois les droits d’utilisation nécessaires au
                  traitement du cas.
                </li>
                <li>
                  Claimity peut utiliser des informations anonymisées ou agrégées issues de la plateforme afin
                  d’améliorer la plateforme, d’assurer la qualité, d’établir des statistiques ou de développer des
                  fonctions de benchmarking, dans la mesure où aucune conclusion ne peut en être tirée sur des
                  personnes, assureurs, experts identifiés ou identifiables ou sur des cas concrets, sauf accord
                  exprès contraire.
                </li>
                <li>
                  Une utilisation de données personnelles ou de données identifiables propres au client à des fins
                  de benchmarking, de développement de produits ou d’analyses n’a lieu que s’il existe une base
                  contractuelle et de protection des données suffisante.
                </li>
              </ul>
            </Section>

            <Section title="14. Garantie">
              <ul className={listClassName}>
                <li>
                  Claimity fournit les prestations de plateforme avec la diligence requise et conformément à
                  l’état actuel de ses propres possibilités techniques et organisationnelles.
                </li>
                <li>
                  Claimity ne garantit pas que la plateforme soit, à tout moment, exempte d’interruption, sans
                  erreur ou adaptée à toute finalité souhaitée par le client, sauf assurance expresse en ce sens.
                </li>
                <li>
                  Le client doit signaler sans délai et de manière compréhensible les perturbations, erreurs ou
                  défauts identifiables. Claimity examinera et corrigera les perturbations fondées dans un délai
                  raisonnable ou fournira une solution de contournement raisonnable.
                </li>
                <li>
                  Claimity n’est responsable des prestations professionnelles fournies par des experts que dans la
                  mesure où Claimity doit elle-même expressément cette prestation ou doit répondre de l’expert
                  concerné en vertu d’une disposition impérative.
                </li>
              </ul>
            </Section>

            <Section title="15. Responsabilité">
              <ul className={listClassName}>
                <li>
                  Claimity répond sans limitation des dommages causés par un comportement intentionnel ou par
                  négligence grave de Claimity, ainsi que dans les cas de responsabilité légale impérative.
                </li>
                <li>
                  En cas de négligence légère, Claimity ne répond que de la violation d’obligations contractuelles
                  essentielles et uniquement pour le dommage direct typiquement prévisible.
                </li>
                <li>
                  Dans la mesure où la loi le permet, la responsabilité globale de Claimity est limitée aux
                  rémunérations versées à Claimity par le client concerné au cours des douze mois précédant
                  l’événement dommageable, et au maximum à CHF 5000. Pour les prétentions liées à un cas, une
                  limitation supplémentaire à la rémunération versée pour le cas concerné peut être convenue.
                </li>
                <li>
                  Claimity n’est pas responsable des dommages indirects, dommages consécutifs, gains manqués,
                  atteintes à la réputation, pertes de données, pertes de production, interruptions d’activité ou
                  prétentions de tiers, dans la mesure où une telle responsabilité peut être exclue par la loi.
                </li>
                <li>
                  Claimity n’est pas responsable des dommages résultant&nbsp;:
                  <ul className={nestedListClassName}>
                    <li>
                      d’indications inexactes ou incomplètes du client, de l’assureur, de l’expert ou de
                      l’utilisateur,
                    </li>
                    <li>d’une utilisation inappropriée de la plateforme,</li>
                    <li>d’un examen interne manquant ou défectueux des résultats de travail,</li>
                    <li>de systèmes, services ou interfaces de tiers,</li>
                    <li>de la transmission non autorisée d’identifiants d’accès,</li>
                    <li>d’événements de force majeure.</li>
                  </ul>
                </li>
                <li>
                  Les limitations de responsabilité s’appliquent par analogie en faveur des organes, des
                  collaborateurs, des mandataires, des sous-traitants et des auxiliaires d’exécution de Claimity.
                </li>
              </ul>
            </Section>

            <Section title="16. Durée du contrat, résiliation et fin">
              <ul className={listClassName}>
                <li>
                  La durée du contrat et les délais de résiliation sont régis par l’accord individuel applicable.
                  Les prestations liées aux cas prennent en principe fin avec la clôture, la facturation ou
                  l’annulation du cas concerné. À défaut d’accord individuel, aucune date de résiliation définie
                  n’est prévue. Les parties peuvent résilier le contrat de manière indépendante.
                </li>
                <li>
                  Les accès à la plateforme peuvent être désactivés après la fin du contrat ou en cas de
                  disparition de l’autorisation.
                </li>
                <li>
                  Le droit à la résiliation extraordinaire pour juste motif demeure réservé. Un juste motif existe
                  notamment en cas de violations contractuelles importantes, d’abus de la plateforme, de risques
                  de sécurité graves, de retard de paiement persistant ou de violation d’obligations essentielles
                  de protection des données ou de confidentialité.
                </li>
                <li>
                  À la fin du contrat, Claimity met à disposition du client les documents du cas existants au
                  format contractuellement convenu ou techniquement habituel, dans la mesure où aucune obligation
                  légale, réglementaire ou contractuelle de conservation ne s’y oppose.
                </li>
                <li>
                  À l’expiration des durées de conservation convenues, Claimity est en droit de supprimer ou
                  d’anonymiser les données, dans la mesure où aucune obligation légale ou contractuelle de
                  conservation ultérieure n’existe.
                </li>
              </ul>
            </Section>

            <Section title="17. Modifications des CGU">
              <ul className={listClassName}>
                <li>
                  Claimity peut modifier les présentes CGU lorsque cela s’avère nécessaire ou approprié en raison
                  d’évolutions juridiques, techniques, économiques ou organisationnelles et que les clients n’en
                  sont pas indûment désavantagés.
                </li>
                <li>
                  Claimity informe les clients sous une forme appropriée des modifications substantielles. Si un
                  client ne s’oppose pas aux modifications dans un délai de 30 jours à compter de la
                  notification, les modifications sont réputées acceptées, à condition que Claimity ait
                  expressément attiré l’attention sur cette conséquence.
                </li>
                <li>
                  Si le client s’y oppose dans le délai imparti, les CGU précédentes continuent de s’appliquer.
                  Dans ce cas, Claimity est en droit de résilier le contrat moyennant un préavis raisonnable si la
                  poursuite aux conditions antérieures n’est pas raisonnablement exigible pour Claimity.
                </li>
              </ul>
            </Section>

            <Section title="18. Dispositions finales">
              <ul className={listClassName}>
                <li>
                  Le client ne peut transférer des droits et obligations résultant de la relation contractuelle à
                  des tiers qu’avec le consentement écrit préalable de Claimity. Claimity peut transférer des
                  droits et obligations à des sociétés affiliées ou à des successeurs en droit, dans la mesure où
                  les intérêts légitimes du client n’en sont pas indûment affectés.
                </li>
                <li>
                  Les modifications et compléments aux contrats individuels requièrent la forme textuelle ou
                  écrite, sauf si le droit impératif exige une forme plus stricte.
                </li>
                <li>
                  Si certaines dispositions des présentes CGU sont ou deviennent invalides ou inapplicables, la
                  validité des autres dispositions demeure inchangée. Les parties remplaceront la disposition
                  invalide ou inapplicable par une règle valable se rapprochant le plus possible du but
                  économique poursuivi.
                </li>
                <li>
                  Le droit suisse matériel est applicable, à l’exclusion des règles de conflit de lois et de la
                  Convention de Vienne sur les contrats de vente internationale de marchandises.
                </li>
                <li>
                  Le for exclusif pour tous les litiges découlant des présentes CGU ou en relation avec celles-ci
                  est, dans la mesure où la loi le permet, le siège de Claimity. Claimity est également en droit
                  de faire valoir ses prétentions au siège du client.
                </li>
              </ul>
            </Section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
