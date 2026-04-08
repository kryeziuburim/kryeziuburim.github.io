import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import type { ReactNode } from "react"

const sectionClassName = "space-y-4"
const sectionTitleClassName = "text-2xl font-bold text-gray-900"
const subTitleClassName = "text-xl font-semibold text-gray-900"
const paragraphClassName = "text-gray-700 leading-relaxed"
const listClassName = "list-disc space-y-2 pl-6 text-gray-700"

function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="break-words text-teal-600 hover:underline"
    >
      {children}
    </a>
  )
}

function MailLink({ email }: { email: string }) {
  return (
    <a href={`mailto:${email}`} className="break-words text-teal-600 hover:underline">
      {email}
    </a>
  )
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className={sectionClassName}>
      <h2 className={sectionTitleClassName}>{title}</h2>
      {children}
    </section>
  )
}

export default function PrivacyPageFR() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 pt-6 pb-16 md:pt-16">
          <h1 className="mb-8 text-4xl font-bold text-gray-900 text-balance break-words hyphens-auto md:text-5xl">
            Politique de confidentialite
          </h1>

          <div className="space-y-8 rounded-2xl bg-white p-8 shadow-sm md:p-12">
            <Section title="Preambule">
              <p className={paragraphClassName}>
                Par la presente politique de confidentialite, nous souhaitons vous informer des types de vos donnees
                personnelles (ci-apres egalement designees brievement comme &quot;donnees&quot;) que nous traitons, a quelles
                fins et dans quelle mesure dans le cadre de la mise a disposition de notre application.
              </p>
              <p className={paragraphClassName}>Les termes utilises ne sont pas specifiques a un genre.</p>
              <p className={paragraphClassName}>
                <strong>Derniere mise a jour : 8 avril 2026</strong>
              </p>
            </Section>

            <Section title="Table des matieres">
              <ul className={listClassName}>
                <li>Preambule</li>
                <li>Responsable</li>
                <li>Contact du conseiller en protection des donnees</li>
                <li>Vue d&apos;ensemble des traitements</li>
                <li>Bases juridiques pertinentes</li>
                <li>Mesures de securite</li>
                <li>Transmission de donnees personnelles</li>
                <li>Transferts internationaux de donnees</li>
                <li>Informations generales sur la conservation et la suppression des donnees</li>
                <li>Prestations commerciales</li>
                <li>Processus et procedures d&apos;entreprise</li>
                <li>Prestataires et services utilises dans le cadre de l&apos;activite commerciale</li>
                <li>Mise a disposition de l&apos;offre en ligne et hebergement web</li>
                <li>Traitement des donnees dans le cadre de l&apos;application (app)</li>
                <li>Inscription, connexion et compte utilisateur</li>
                <li>Gestion des contacts et des demandes</li>
                <li>Visioconferences, reunions en ligne, webinaires et partage d&apos;ecran</li>
                <li>Services cloud</li>
                <li>Communication promotionnelle par e-mail, courrier, fax ou telephone</li>
                <li>Presences sur les reseaux sociaux (social media)</li>
                <li>Gestion, organisation et outils d&apos;assistance</li>
                <li>Traitement des donnees dans le cadre des relations de travail</li>
                <li>Procedures de candidature</li>
              </ul>
            </Section>

            <Section title="Responsable">
              <div className="space-y-1 text-gray-700">
                <p className="font-semibold">Claimity SA</p>
                <p>Wisentalstrasse 7a</p>
                <p>8185 Winkel</p>
                <p>Suisse</p>
                <p>
                  E-mail : <MailLink email="info@claimity.ch" />
                </p>
                <p>Personne autorisee a representer la societe : Burim Kryeziu</p>
                <p>
                  Adresse e-mail : <MailLink email="info@claimity.ch" />
                </p>
              </div>
            </Section>

            <Section title="Contact du conseiller en protection des donnees">
              <p className={paragraphClassName}>
                Pour toute question relative a la protection des donnees, veuillez contacter notre conseiller en
                protection des donnees :
              </p>
              <div className="space-y-1 text-gray-700">
                <p className="font-semibold">PlanSec AG</p>
                <p>Dieter Huber</p>
                <p>Sinserstrasse 67</p>
                <p>6330 Cham</p>
                <p>
                  <MailLink email="mail@plansec.ch" />
                </p>
                <p>
                  <ExternalLink href="https://www.plansec.ch">https://www.plansec.ch</ExternalLink>
                </p>
              </div>
            </Section>

            <Section title="Vue d&apos;ensemble des traitements">
              <p className={paragraphClassName}>
                L&apos;aperçu suivant resume les types de donnees traitees et les finalites de leur traitement, et indique
                les personnes concernees.
              </p>

              <div className="space-y-3">
                <h3 className={subTitleClassName}>Types de donnees traitees</h3>
                <ul className={listClassName}>
                  <li>Donnees de base.</li>
                  <li>Donnees relatives aux employes.</li>
                  <li>Donnees de paiement.</li>
                  <li>Donnees de localisation.</li>
                  <li>Donnees de contact.</li>
                  <li>Donnees de contenu.</li>
                  <li>Donnees contractuelles.</li>
                  <li>Donnees d&apos;utilisation.</li>
                  <li>Metadonnees, donnees de communication et donnees de procedure.</li>
                  <li>Donnees de candidature.</li>
                  <li>Images et/ou enregistrements video.</li>
                  <li>Enregistrements audio.</li>
                  <li>Donnees de journalisation.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className={subTitleClassName}>Categories de personnes concernees</h3>
                <ul className={listClassName}>
                  <li>Beneficiaires de prestations et mandants.</li>
                  <li>Employes.</li>
                  <li>Personnes interessees.</li>
                  <li>Partenaires de communication.</li>
                  <li>Utilisateurs.</li>
                  <li>Candidats.</li>
                  <li>Partenaires commerciaux et contractuels.</li>
                  <li>Clients mandants.</li>
                  <li>Personnes representees.</li>
                  <li>Tiers.</li>
                  <li>Clients.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className={subTitleClassName}>Finalites du traitement</h3>
                <ul className={listClassName}>
                  <li>Fourniture de prestations contractuelles et execution d&apos;obligations contractuelles.</li>
                  <li>Communication.</li>
                  <li>Mesures de securite.</li>
                  <li>Marketing direct.</li>
                  <li>Procedures de bureau et d&apos;organisation.</li>
                  <li>Procedures organisationnelles et administratives.</li>
                  <li>Procedures de candidature.</li>
                  <li>Feedback.</li>
                  <li>Marketing.</li>
                  <li>Mise a disposition de notre offre en ligne et convivialite.</li>
                  <li>Etablissement et execution des relations de travail.</li>
                  <li>Infrastructure informatique.</li>
                  <li>Gestion financiere et des paiements.</li>
                  <li>Relations publiques.</li>
                  <li>Promotion des ventes.</li>
                  <li>Processus d&apos;entreprise et procedures de gestion economique.</li>
                </ul>
              </div>
            </Section>

            <Section title="Bases juridiques pertinentes">
              <p className={paragraphClassName}>
                <strong>Bases juridiques pertinentes selon le droit suisse de la protection des donnees :</strong> Si
                vous vous trouvez en Suisse, nous traitons vos donnees sur la base de la loi federale suisse sur la
                protection des donnees (&quot;LPD suisse&quot;). Contrairement, par exemple, au RGPD, la LPD suisse n&apos;exige en
                principe pas qu&apos;une base juridique soit nommee pour le traitement des donnees personnelles, et les
                donnees personnelles sont traitees de bonne foi, de maniere licite et proportionnee (art. 6, al. 1 et
                2 LPD suisse). En outre, nous collectons des donnees personnelles uniquement a des fins determinees,
                reconnaissables pour la personne concernee, et ne les traitons que d&apos;une maniere compatible avec ces
                finalites (art. 6, al. 3 LPD suisse).
              </p>
            </Section>

            <Section title="Mesures de securite">
              <p className={paragraphClassName}>
                Conformement aux exigences legales, en tenant compte de l&apos;etat de la technique, des couts de mise en
                oeuvre ainsi que de la nature, de l&apos;etendue, des circonstances et des finalites du traitement, ainsi que
                des probabilites et de la gravite variables des risques pour les droits et libertes des personnes
                physiques, nous mettons en oeuvre des mesures techniques et organisationnelles appropriees afin de
                garantir un niveau de protection adapte au risque.
              </p>
              <p className={paragraphClassName}>
                Ces mesures comprennent notamment la garantie de la confidentialite, de l&apos;integrite et de la
                disponibilite des donnees par le controle de l&apos;acces physique et electronique aux donnees, ainsi que de
                l&apos;acces, de la saisie, de la communication, de la sauvegarde de la disponibilite et de la separation des
                donnees. En outre, nous avons mis en place des procedures garantissant l&apos;exercice des droits des
                personnes concernees, la suppression des donnees et les reactions face aux risques pesant sur les
                donnees. Nous prenons egalement en compte la protection des donnees personnelles des la phase de
                developpement ou de selection du materiel, des logiciels et des procedures, conformement aux principes
                de la protection des donnees des la conception et par defaut.
              </p>
              <p className={paragraphClassName}>
                Securisation des connexions en ligne au moyen de la technologie de chiffrement TLS/SSL (HTTPS) : Afin
                de proteger les donnees des utilisateurs transmises via nos services en ligne contre tout acces non
                autorise, nous utilisons la technologie de chiffrement TLS/SSL. Secure Sockets Layer (SSL) et Transport
                Layer Security (TLS) sont les fondements de la transmission securisee des donnees sur internet. Ces
                technologies chiffrent les informations transmises entre le site web ou l&apos;application et le navigateur
                de l&apos;utilisateur (ou entre deux serveurs), protegeant ainsi les donnees contre tout acces non autorise.
                TLS, en tant que version plus evoluee et plus sure de SSL, garantit que toutes les transmissions de
                donnees repondent aux normes de securite les plus elevees. Lorsqu&apos;un site web est securise par un
                certificat SSL/TLS, cela est indique par l&apos;affichage de HTTPS dans l&apos;URL. Cela sert d&apos;indicateur aux
                utilisateurs que leurs donnees sont transmises de maniere securisee et chiffree.
              </p>
            </Section>

            <Section title="Transmission de donnees personnelles">
              <p className={paragraphClassName}>
                Dans le cadre de notre traitement de donnees personnelles, il peut arriver que ces donnees soient
                transmises a d&apos;autres entites, entreprises, unites organisationnelles juridiquement independantes ou
                personnes, ou qu&apos;elles leur soient divulguees. Les destinataires de ces donnees peuvent etre, par
                exemple, des prestataires charges de taches informatiques ou des fournisseurs de services et de contenus
                integres dans un site web. Dans de tels cas, nous respectons les exigences legales et concluons en
                particulier des contrats ou accords appropries avec les destinataires de vos donnees afin d&apos;en assurer
                la protection.
              </p>
            </Section>

            <Section title="Transferts internationaux de donnees">
              <p className={paragraphClassName}>
                Communication de donnees personnelles a l&apos;etranger : En vertu de la LPD suisse, nous communiquons des
                donnees personnelles a l&apos;etranger uniquement si un niveau de protection adequat des personnes concernees
                est garanti (art. 16 LPD suisse). Si le Conseil federal n&apos;a pas constate un niveau de protection
                adequat (liste :{" "}
                <ExternalLink href="https://www.bj.admin.ch/bj/de/home/staat/datenschutz/internationales/anerkennung-staaten.html">
                  https://www.bj.admin.ch/bj/de/home/staat/datenschutz/internationales/anerkennung-staaten.html
                </ExternalLink>
                ), nous mettons en oeuvre des garanties alternatives.
              </p>
              <p className={paragraphClassName}>
                Pour les transferts de donnees vers les Etats-Unis, nous nous appuyons en priorite sur le Data Privacy
                Framework (DPF), qui a ete reconnu comme cadre juridique sur au moyen d&apos;une decision d&apos;adequation de
                la Suisse du 15 septembre 2024. En outre, nous avons conclu avec les prestataires concernes des clauses
                contractuelles types en matiere de protection des donnees, approuvees par le Prepose federal a la
                protection des donnees et a la transparence (PFPDT), qui etablissent des obligations contractuelles de
                protection de vos donnees.
              </p>
              <p className={paragraphClassName}>
                Cette double protection garantit une protection complete de vos donnees : le DPF constitue le niveau de
                protection primaire, tandis que les clauses contractuelles types servent de securite supplementaire. Si
                des changements intervenaient dans le cadre du DPF, les clauses contractuelles types joueraient le role
                d&apos;option de repli fiable. Nous garantissons ainsi que vos donnees restent en permanence adequatement
                protegees, meme en cas de changements politiques ou juridiques.
              </p>
              <p className={paragraphClassName}>
                Pour chaque prestataire de services, nous vous informons s&apos;il est certifie au titre du DPF et si des
                clauses contractuelles types sont en place. La liste des entreprises certifiees ainsi que d&apos;autres
                informations sur le DPF sont disponibles sur le site du Department of Commerce des Etats-Unis a
                l&apos;adresse{" "}
                <ExternalLink href="https://www.dataprivacyframework.gov/">https://www.dataprivacyframework.gov/</ExternalLink>{" "}
                (en anglais).
              </p>
              <p className={paragraphClassName}>
                Pour les transferts de donnees vers d&apos;autres pays tiers, des garanties appropriees s&apos;appliquent,
                notamment des traites internationaux, des garanties specifiques, des clauses contractuelles types
                approuvees par le PFPDT ou des regles internes de protection des donnees reconnues a l&apos;avance par le
                PFPDT ou par une autorite competente en matiere de protection des donnees d&apos;un autre pays.
              </p>
            </Section>

            <Section title="Informations generales sur la conservation et la suppression des donnees">
              <p className={paragraphClassName}>
                Nous supprimons les donnees personnelles que nous traitons conformement aux dispositions legales des que
                les consentements sous-jacents sont retires ou qu&apos;il n&apos;existe plus d&apos;autres bases juridiques pour le
                traitement. Cela concerne les cas dans lesquels la finalite initiale du traitement cesse d&apos;exister ou
                dans lesquels les donnees ne sont plus necessaires. Des exceptions a cette regle existent lorsque des
                obligations legales ou des interets particuliers imposent une conservation ou un archivage plus longs des
                donnees.
              </p>
              <p className={paragraphClassName}>
                En particulier, les donnees qui doivent etre conservees pour des raisons relevant du droit commercial ou
                fiscal, ou dont le stockage est necessaire a la poursuite judiciaire ou a la protection des droits
                d&apos;autres personnes physiques ou morales, doivent etre archivees en consequence.
              </p>
              <p className={paragraphClassName}>
                Nos avis de confidentialite contiennent des informations supplementaires sur la conservation et la
                suppression des donnees applicables specifiquement a certains processus de traitement.
              </p>
              <p className={paragraphClassName}>
                En cas de pluralite d&apos;indications relatives a la duree de conservation ou aux delais de suppression pour
                une meme donnee, c&apos;est toujours la periode la plus longue qui s&apos;applique. Les donnees qui ne sont plus
                conservees pour la finalite initialement prevue, mais en raison d&apos;exigences legales ou d&apos;autres
                raisons, sont traitees exclusivement aux fins justifiant leur conservation.
              </p>
              <div className="space-y-3">
                <h3 className={subTitleClassName}>Conservation et suppression des donnees</h3>
                <p className={paragraphClassName}>
                  Les delais generaux suivants s&apos;appliquent a la conservation et a l&apos;archivage selon le droit suisse :
                </p>
                <ul className={listClassName}>
                  <li>
                    10 ans - delai de conservation des livres et enregistrements, comptes annuels, inventaires,
                    rapports de situation, bilans d&apos;ouverture, pieces comptables et factures ainsi que toutes les
                    instructions de travail necessaires et autres documents d&apos;organisation (art. 958f du Code suisse des
                    obligations (CO)).
                  </li>
                  <li>
                    10 ans - les donnees necessaires a la prise en compte de pretentions potentielles en dommages et
                    interets ou de pretentions et droits contractuels similaires, ainsi qu&apos;au traitement de demandes qui
                    y sont liees, sur la base d&apos;experiences commerciales anterieures et des pratiques usuelles du
                    secteur, sont conservees pendant le delai de prescription legal de dix ans, a moins qu&apos;un delai
                    plus court de cinq ans ne s&apos;applique dans certains cas (art. 127, 130 CO). Apres cinq ans, les
                    creances relatives aux loyers, fermages et interets du capital, ainsi qu&apos;aux autres prestations
                    periodiques, a la livraison de denrees alimentaires, a la pension et aux dettes d&apos;auberge, ainsi
                    qu&apos;aux travaux artisanaux, a la vente au detail de marchandises, aux soins medicaux, aux activites
                    professionnelles des avocats, agents de droit, procureurs et notaires, et aux relations de travail
                    des employes, sont prescrites (art. 128 CO).
                  </li>
                </ul>
              </div>
            </Section>

            <Section title="Prestations commerciales">
              <p className={paragraphClassName}>
                Nous traitons les donnees personnelles de nos partenaires contractuels et commerciaux, tels que clients,
                mandants, personnes interessees, fournisseurs et autres partenaires de cooperation (collectivement
                denomes &quot;partenaires contractuels&quot;), aux fins de l&apos;initiation, de l&apos;execution et du traitement des
                relations contractuelles ainsi que de relations juridiques comparables. Cela comprend egalement les
                mesures precontractuelles prises sur demande, ainsi que la communication en lien avec la relation
                contractuelle concernee.
              </p>
              <p className={paragraphClassName}>
                Le traitement sert en particulier a l&apos;execution de nos obligations contractuelles principales et
                accessoires. Cela comprend la fourniture des prestations convenues, les obligations eventuelles de mise a
                jour et d&apos;information, le traitement des garanties et autres perturbations de prestation, la gestion des
                revocations, des resiliations de relations d&apos;obligation durables, des annulations, des remboursements
                ainsi que le traitement d&apos;autres declarations et demandes liees au contrat. Sont vises tant les
                contrats ponctuels que les relations contractuelles continues.
              </p>
              <p className={paragraphClassName}>
                Sont notamment traitees les donnees de base telles que le nom, l&apos;adresse et, le cas echeant, la raison
                sociale, les donnees de contact telles que l&apos;adresse e-mail et le numero de telephone, les donnees
                contractuelles et de prestation telles que l&apos;objet du contrat, la duree contractuelle, le numero de
                commande ou de dossier, les donnees d&apos;utilisation et de prestation, les donnees de paiement et de
                facturation ainsi que les contenus et historiques de communication. Dans la mesure necessaire, nous
                traitons egalement les donnees qui nous sont communiquees ou transmises dans le cadre de l&apos;execution
                d&apos;un mandat.
              </p>
              <p className={paragraphClassName}>
                En outre, nous traitons les donnees afin de sauvegarder nos droits et de satisfaire a nos obligations
                legales. Cela comprend notamment les obligations de conservation en matiere commerciale et fiscale, les
                obligations de documentation ainsi que, le cas echeant, les obligations de preuve et de reddition de
                comptes. Le traitement est egalement effectue sur la base de nos interets legitimes a une bonne gestion
                de l&apos;entreprise, a une administration interne, a la gestion des risques et a la securite informatique,
                ainsi qu&apos;a la protection de notre activite et de nos partenaires contractuels contre les abus, les
                risques pesant sur les donnees, les secrets et autres biens juridiques. Cela peut egalement inclure le
                recours a des prestataires externes tels que des fournisseurs de services informatiques et de
                telecommunications, des entreprises de transport et de logistique, des prestataires de services de
                paiement, des banques, des conseillers fiscaux et juridiques ou d&apos;autres auxiliaires, dans la mesure ou
                cela est necessaire a l&apos;execution du contrat ou au respect d&apos;obligations legales.
              </p>
              <p className={paragraphClassName}>
                Les donnees personnelles ne sont transmises a des tiers que dans la mesure ou cela est necessaire a
                l&apos;execution du contrat, a la mise en oeuvre de mesures precontractuelles, a la sauvegarde d&apos;interets
                legitimes ou au respect d&apos;obligations legales. Nous vous informons separement de tout traitement allant
                au-dela de cela, en particulier a des fins de marketing, dans le cadre de la presente politique de
                confidentialite.
              </p>
              <p className={paragraphClassName}>
                Nous indiquons aux partenaires contractuels quelles donnees sont necessaires dans le cas concret au
                moment de la collecte, par exemple dans les formulaires en ligne au moyen d&apos;indications appropriees ou
                dans les contacts personnels.
              </p>
              <p className={paragraphClassName}>
                Les donnees sont supprimees des qu&apos;elles ne sont plus necessaires aux finalites susmentionnees et qu&apos;aucune
                obligation legale de conservation ne s&apos;oppose a leur suppression. Les delais legaux de conservation, en
                particulier en matiere commerciale et fiscale, peuvent imposer un stockage plus long. Les donnees
                transmises dans le cadre d&apos;un mandat concret sont supprimees par nos soins a l&apos;issue du mandat et a
                l&apos;expiration d&apos;eventuels delais de conservation, sauf si d&apos;autres obligations legales ou contractuelles
                de conservation existent.
              </p>
              <p className={paragraphClassName}>
                La base juridique du traitement est l&apos;art. 6, par. 1, let. b RGPD pour la mise en oeuvre de mesures
                precontractuelles et l&apos;execution de la relation contractuelle concernee, ainsi que l&apos;art. 6, par. 1,
                let. c RGPD pour le respect d&apos;obligations legales. Dans la mesure ou le traitement repose sur des
                interets legitimes, il est effectue sur la base de l&apos;art. 6, par. 1, let. f RGPD. Lorsqu&apos;un traitement
                est fonde sur l&apos;art. 6, par. 1, let. f RGPD, il sert a proteger nos interets legitimes lies a une
                organisation commerciale correcte et efficace, a l&apos;administration interne et a la documentation des
                operations commerciales, a l&apos;assertion et a la defense de droits en justice, a la garantie de la
                securite informatique et des donnees, a la prevention des abus et de la fraude, ainsi qu&apos;a la gestion
                economique et au developpement de notre activite. Ces interets resident en particulier dans la garantie
                d&apos;une activite commerciale sure et conforme au droit et dans la preservation de notre capacite d&apos;agir en
                tant qu&apos;entreprise.
              </p>
              <ul className={listClassName}>
                <li>
                  <strong>Types de donnees traitees :</strong> donnees de base (par ex. nom complet, adresse de
                  domicile, coordonnees, numero de client, etc.) ; donnees de paiement (par ex. coordonnees bancaires,
                  factures, historique des paiements) ; donnees de contact (par ex. adresses postales et e-mail ou
                  numeros de telephone). Donnees contractuelles (par ex. objet du contrat, duree, categorie de client).
                </li>
                <li>
                  <strong>Personnes concernees :</strong> beneficiaires de prestations et mandants ; personnes
                  interessees. Partenaires commerciaux et contractuels.
                </li>
                <li>
                  <strong>Finalites du traitement et interets legitimes :</strong> fourniture de prestations
                  contractuelles et execution d&apos;obligations contractuelles ; communication ; procedures de bureau et
                  d&apos;organisation ; procedures organisationnelles et administratives. Processus d&apos;entreprise et
                  procedures de gestion economique.
                </li>
                <li>
                  <strong>Conservation et suppression :</strong> suppression conformement aux indications figurant dans
                  la section &quot;Informations generales sur la conservation et la suppression des donnees&quot;.
                </li>
              </ul>

              <div className="space-y-3">
                <h3 className={subTitleClassName}>Informations complementaires sur les processus, procedures et services</h3>
                <ul className={listClassName}>
                  <li>
                    <strong>Prestations de courtage et d&apos;intermediation :</strong> Nous traitons les donnees de nos
                    mandants et des personnes concernees conformement au mandat sous-jacent. Nous pouvons egalement
                    traiter des informations relatives aux caracteristiques et circonstances de personnes ou de biens leur
                    appartenant lorsque cela fait partie de l&apos;objet de notre mandat. Cela peut inclure, par exemple,
                    des informations sur les conditions de vie personnelles, les biens mobiliers ou immobiliers et la
                    situation financiere.
                    <br />
                    Dans la mesure ou cela est necessaire a l&apos;execution du contrat, requis par la loi, autorise par les
                    mandants ou fonde sur nos interets legitimes, nous divulguons ou transmettons les donnees des clients
                    dans le cadre de demandes de couverture, de conclusions de contrats et du traitement des contrats a
                    des fournisseurs des prestations intermediees, tels que des experts et des evaluateurs.
                    <strong> Bases juridiques :</strong> execution du contrat et demandes precontractuelles (art. 6,
                    par. 1, phrase 1, let. b RGPD).
                  </li>
                </ul>
              </div>
            </Section>

            <Section title="Processus et procedures d&apos;entreprise">
              <p className={paragraphClassName}>
                Les donnees personnelles des beneficiaires de prestations et des mandants - y compris les clients, les
                clients mandants, ou dans certains cas les mandants juridiques, les patients ou les partenaires
                commerciaux, ainsi que d&apos;autres tiers - sont traitees dans le cadre de relations contractuelles ou
                juridiques comparables et de mesures precontractuelles telles que l&apos;initiation de relations d&apos;affaires.
                Ce traitement de donnees soutient et facilite les operations economiques dans des domaines tels que la
                gestion de la clientele, la vente, les paiements, la comptabilite et la gestion de projets.
              </p>
              <p className={paragraphClassName}>
                Les donnees collectees servent a remplir les obligations contractuelles et a organiser efficacement les
                processus operationnels. Cela inclut le traitement des transactions commerciales, la gestion des
                relations clients, l&apos;optimisation des strategies de vente ainsi que la garantie des processus internes
                de facturation et de finance. En outre, les donnees soutiennent la sauvegarde des droits du responsable
                et favorisent les taches administratives ainsi que l&apos;organisation de l&apos;entreprise.
              </p>
              <p className={paragraphClassName}>
                Les donnees personnelles peuvent etre transmises a des tiers si cela est necessaire a la realisation des
                finalites indiquees ou au respect d&apos;obligations legales. A l&apos;expiration des delais legaux de
                conservation ou lorsque la finalite du traitement cesse d&apos;exister, les donnees sont supprimees. Cela
                inclut egalement les donnees qui doivent etre conservees plus longtemps en raison d&apos;obligations de
                preuve de nature fiscale ou d&apos;autres obligations legales.
              </p>
              <ul className={listClassName}>
                <li>
                  <strong>Types de donnees traitees :</strong> donnees de base (par ex. nom complet, adresse de
                  domicile, coordonnees, numero de client, etc.) ; donnees de paiement (par ex. coordonnees bancaires,
                  factures, historique des paiements) ; donnees de contact (par ex. adresses postales et e-mail ou
                  numeros de telephone) ; donnees de contenu (par ex. messages et contributions textuels ou visuels et
                  informations qui s&apos;y rapportent, telles que l&apos;auteur ou la date de creation) ; donnees contractuelles
                  (par ex. objet du contrat, duree, categorie de client) ; donnees d&apos;utilisation (par ex. pages vues et
                  duree de consultation, parcours de clics, intensite et frequence d&apos;utilisation, types d&apos;appareils et
                  systemes d&apos;exploitation utilises, interactions avec les contenus et fonctions) ; metadonnees, donnees
                  de communication et donnees de procedure (par ex. adresses IP, indications temporelles, numeros
                  d&apos;identification, personnes impliquees) ; donnees de journalisation (par ex. journaux relatifs aux
                  connexions, a la consultation de donnees ou aux heures d&apos;acces). Donnees relatives aux employes
                  (informations sur les collaborateurs et autres personnes dans une relation de travail).
                </li>
                <li>
                  <strong>Personnes concernees :</strong> beneficiaires de prestations et mandants ; personnes
                  interessees ; partenaires de communication ; partenaires commerciaux et contractuels ; clients ; tiers ;
                  clients mandants. Employes (par ex. collaborateurs, candidats, auxiliaires et autres employes).
                </li>
                <li>
                  <strong>Finalites du traitement et interets legitimes :</strong> fourniture de prestations
                  contractuelles et execution d&apos;obligations contractuelles ; procedures de bureau et d&apos;organisation ;
                  processus d&apos;entreprise et procedures de gestion economique ; mesures de securite ; mise a disposition
                  de notre offre en ligne et convivialite ; communication ; gestion financiere et des paiements ;
                  infrastructure informatique (exploitation et mise a disposition de systemes d&apos;information et
                  d&apos;equipements techniques tels qu&apos;ordinateurs et serveurs) ; marketing. Promotion des ventes.
                </li>
                <li>
                  <strong>Conservation et suppression :</strong> suppression conformement aux indications figurant dans la
                  section &quot;Informations generales sur la conservation et la suppression des donnees&quot;.
                </li>
              </ul>

              <div className="space-y-3">
                <h3 className={subTitleClassName}>Informations complementaires sur les processus, procedures et services</h3>
                <ul className={listClassName}>
                  <li>
                    <strong>Gestion des mandats :</strong> Les procedures necessaires dans le cadre de la gestion des
                    mandats comprennent, par exemple, l&apos;acquisition et l&apos;integration de nouveaux mandants, le
                    developpement de strategies visant a renforcer leur fidelisation ainsi que la garantie d&apos;une
                    communication efficace avec les mandants et de la planification des rendez-vous. Un service complet
                    est fourni aux mandants. Ces procedures comprennent egalement la gestion et l&apos;administration des
                    dossiers de mandants, la documentation securisee des operations juridiques ainsi que la garantie de
                    la confidentialite et de l&apos;integrite des donnees des mandants. En outre, des processus sont definis
                    pour la communication d&apos;informations concernant les mandants a des tiers, tels que des tribunaux ou
                    d&apos;autres prestataires juridiques. Des procedures sont mises en oeuvre pour la suppression securisee
                    et conforme a la protection des donnees des donnees des mandants des qu&apos;elles ne sont plus
                    necessaires ou que les delais legaux de conservation ont expire ; <strong>Bases juridiques :</strong>
                    execution du contrat et demandes precontractuelles (art. 6, par. 1, phrase 1, let. b RGPD),
                    obligation legale (art. 6, par. 1, phrase 1, let. c RGPD), interets legitimes (art. 6, par. 1,
                    phrase 1, let. f RGPD).
                  </li>
                  <li>
                    <strong>Gestion et entretien des contacts :</strong> Procedures necessaires dans le cadre de
                    l&apos;organisation, de l&apos;entretien et de la securisation des informations de contact (par ex. mise en
                    place et maintenance d&apos;une base de donnees centrale de contacts, mises a jour regulieres des
                    informations de contact, surveillance de l&apos;integrite des donnees, mise en oeuvre de mesures de
                    protection des donnees, garantie des controles d&apos;acces, execution de sauvegardes et restaurations des
                    donnees de contact, formation des collaborateurs a l&apos;utilisation efficace de logiciels de gestion des
                    contacts, revue reguliere de l&apos;historique de communication et adaptation des strategies de contact)
                    ; <strong>Bases juridiques :</strong> execution du contrat et demandes precontractuelles (art. 6,
                    par. 1, phrase 1, let. b RGPD), interets legitimes (art. 6, par. 1, phrase 1, let. f RGPD).
                  </li>
                  <li>
                    <strong>Compte client :</strong> Les clients peuvent creer un compte au sein de notre offre en ligne
                    (par ex. compte client ou compte utilisateur, ci-apres &quot;compte client&quot;). Si l&apos;inscription a un
                    compte client est necessaire, les clients en sont informes, de meme que des donnees requises pour
                    l&apos;inscription. Les comptes clients ne sont pas publics et ne peuvent pas etre indexes par les
                    moteurs de recherche. Dans le cadre de l&apos;inscription ainsi que des connexions et utilisations
                    ulterieures du compte client, nous stockons les adresses IP des clients ainsi que les heures d&apos;acces
                    afin de pouvoir prouver l&apos;inscription et prevenir tout usage abusif du compte client. Si le compte
                    client est resilie, les donnees du compte client sont supprimees apres la date de resiliation, a
                    moins qu&apos;elles ne doivent etre conservees a d&apos;autres fins que la mise a disposition au sein du
                    compte client ou pour des raisons legales (par ex. stockage interne de donnees clients, transactions
                    de commande ou factures). Il appartient aux clients de sauvegarder leurs donnees lors de la
                    resiliation du compte client ; <strong>Bases juridiques :</strong> execution du contrat et demandes
                    precontractuelles (art. 6, par. 1, phrase 1, let. b RGPD), interets legitimes (art. 6, par. 1,
                    phrase 1, let. f RGPD).
                  </li>
                  <li>
                    <strong>Flux de paiements generaux :</strong> Procedures necessaires a l&apos;execution des operations de
                    paiement, a la surveillance des comptes bancaires et au controle des flux de paiement (par ex.
                    preparation et verification des virements, gestion des prelevements, controle des releves de compte,
                    surveillance des encaissements et decaissements, gestion des rejets, rapprochement de comptes,
                    gestion de tresorerie) ; <strong>Bases juridiques :</strong> execution du contrat et demandes
                    precontractuelles (art. 6, par. 1, phrase 1, let. b RGPD), interets legitimes (art. 6, par. 1,
                    phrase 1, let. f RGPD).
                  </li>
                  <li>
                    <strong>Comptabilite, comptabilite fournisseurs, comptabilite clients :</strong> Procedures
                    necessaires a l&apos;enregistrement, au traitement et au controle des operations commerciales dans le
                    domaine de la comptabilite fournisseurs et clients (par ex. etablissement et verification des
                    factures entrantes et sortantes, surveillance et gestion des postes ouverts, execution des paiements,
                    gestion des relances, rapprochement de comptes pour les creances et engagements, comptabilite
                    fournisseurs et comptabilite clients) ; <strong>Bases juridiques :</strong> execution du contrat et
                    demandes precontractuelles (art. 6, par. 1, phrase 1, let. b RGPD), obligation legale (art. 6,
                    par. 1, phrase 1, let. c RGPD), interets legitimes (art. 6, par. 1, phrase 1, let. f RGPD).
                  </li>
                  <li>
                    <strong>Comptabilite financiere et fiscalite :</strong> Procedures necessaires a l&apos;enregistrement, a
                    la gestion et au controle des operations financieres ainsi qu&apos;au calcul, a la declaration et au
                    paiement des impots (par ex. imputation et comptabilisation des operations commerciales,
                    etablissement des comptes trimestriels et annuels, execution des paiements, gestion des relances,
                    rapprochement de comptes, conseil fiscal, preparation et depot des declarations fiscales, gestion des
                    affaires fiscales) ; <strong>Bases juridiques :</strong> execution du contrat et demandes
                    precontractuelles (art. 6, par. 1, phrase 1, let. b RGPD), obligation legale (art. 6, par. 1,
                    phrase 1, let. c RGPD), interets legitimes (art. 6, par. 1, phrase 1, let. f RGPD).
                  </li>
                  <li>
                    <strong>Ventes :</strong> Procedures necessaires a la planification, a l&apos;execution et au controle de
                    mesures de commercialisation et de vente de produits ou de services (par ex. acquisition de clients,
                    elaboration et suivi d&apos;offres, traitement des commandes, conseil et suivi des clients, promotion des
                    ventes, formations produit, controle et analyse des ventes, gestion des canaux de distribution) ;
                    <strong> Bases juridiques :</strong> execution du contrat et demandes precontractuelles (art. 6,
                    par. 1, phrase 1, let. b RGPD), interets legitimes (art. 6, par. 1, phrase 1, let. f RGPD).
                  </li>
                </ul>
              </div>
            </Section>

            <Section title="Prestataires et services utilises dans le cadre de l&apos;activite commerciale">
              <p className={paragraphClassName}>
                Dans le cadre de notre activite commerciale, nous utilisons, dans le respect des exigences legales, des
                services, plateformes, interfaces ou plug-ins supplementaires de prestataires tiers (ci-apres denommes
                &quot;services&quot;). Leur utilisation repose sur nos interets a assurer une gestion correcte, licite et
                economique de notre activite commerciale et de notre organisation interne.
              </p>
              <ul className={listClassName}>
                <li>
                  <strong>Types de donnees traitees :</strong> donnees de base (par ex. nom complet, adresse de
                  domicile, coordonnees, numero de client, etc.) ; donnees de paiement (par ex. coordonnees bancaires,
                  factures, historique des paiements) ; donnees de contact (par ex. adresses postales et e-mail ou
                  numeros de telephone) ; donnees de contenu (par ex. messages et contributions textuels ou visuels et
                  informations qui s&apos;y rapportent, telles que l&apos;auteur ou la date de creation) ; donnees contractuelles
                  (par ex. objet du contrat, duree, categorie de client) ; donnees d&apos;utilisation (par ex. pages vues et
                  duree de consultation, parcours de clics, intensite et frequence d&apos;utilisation, types d&apos;appareils et
                  systemes d&apos;exploitation utilises, interactions avec les contenus et fonctions). Metadonnees, donnees
                  de communication et donnees de procedure (par ex. adresses IP, indications temporelles, numeros
                  d&apos;identification, personnes impliquees).
                </li>
                <li>
                  <strong>Personnes concernees :</strong> beneficiaires de prestations et mandants ; personnes
                  interessees. Partenaires commerciaux et contractuels.
                </li>
                <li>
                  <strong>Finalites du traitement et interets legitimes :</strong> fourniture de prestations
                  contractuelles et execution d&apos;obligations contractuelles ; procedures de bureau et d&apos;organisation.
                  Processus d&apos;entreprise et procedures de gestion economique.
                </li>
                <li>
                  <strong>Conservation et suppression :</strong> suppression conformement aux indications figurant dans la
                  section &quot;Informations generales sur la conservation et la suppression des donnees&quot;.
                </li>
              </ul>
              <div className="space-y-3">
                <h3 className={subTitleClassName}>Informations complementaires sur les processus, procedures et services</h3>
                <ul className={listClassName}>
                  <li>
                    <strong>Bexio :</strong> gestion des donnees clients et fournisseurs, elaboration d&apos;offres,
                    facturation, comptabilite (enregistrement et gestion des operations commerciales), comptabilite des
                    salaires (decompte des salaires), traitement des paiements (surveillance des encaissements et
                    decaissements), gestion des stocks (gestion des marchandises), gestion des taches et des projets ;
                    <strong> Prestataire :</strong> bexio AG, Alte Jonastrasse 24, 8640 rapperswil, Suisse ;
                    <strong> Bases juridiques :</strong> interets legitimes (art. 6, par. 1, phrase 1, let. f RGPD) ;
                    <strong> Site web :</strong>{" "}
                    <ExternalLink href="https://www.bexio.com/">https://www.bexio.com/</ExternalLink>;
                    <strong> Politique de confidentialite :</strong>{" "}
                    <ExternalLink href="https://www.bexio.com/de-CH/richtlinien/datenschutz">
                      https://www.bexio.com/de-CH/richtlinien/datenschutz
                    </ExternalLink>
                    . <strong>Accord de traitement des donnees :</strong>{" "}
                    <ExternalLink href="https://cdn.www.bexio.com/assets/content/documents/legal/auftragsverarbeitung_DE.pdf">
                      https://cdn.www.bexio.com/assets/content/documents/legal/auftragsverarbeitung_DE.pdf
                    </ExternalLink>
                    .
                  </li>
                </ul>
              </div>
            </Section>

            <Section title="Mise a disposition de l&apos;offre en ligne et hebergement web">
              <p className={paragraphClassName}>
                Nous traitons les donnees des utilisateurs afin de pouvoir leur fournir nos services en ligne. A cette
                fin, nous traitons l&apos;adresse IP de l&apos;utilisateur, qui est necessaire pour transmettre le contenu et les
                fonctionnalites de nos services en ligne au navigateur ou a l&apos;appareil terminal des utilisateurs.
              </p>
              <ul className={listClassName}>
                <li>
                  <strong>Types de donnees traitees :</strong> donnees d&apos;utilisation (par ex. pages vues et duree de
                  consultation, parcours de clics, intensite et frequence d&apos;utilisation, types d&apos;appareils et systemes
                  d&apos;exploitation utilises, interactions avec les contenus et fonctions) ; metadonnees, donnees de
                  communication et donnees de procedure (par ex. adresses IP, indications temporelles, numeros
                  d&apos;identification, personnes impliquees). Donnees de journalisation (par ex. fichiers journaux relatifs
                  aux connexions, a la consultation de donnees ou aux heures d&apos;acces).
                </li>
                <li>
                  <strong>Personnes concernees :</strong> utilisateurs (par ex. visiteurs du site web, utilisateurs de
                  services en ligne).
                </li>
                <li>
                  <strong>Finalites du traitement et interets legitimes :</strong> mise a disposition de notre offre en
                  ligne et convivialite. Infrastructure informatique (exploitation et mise a disposition de systemes
                  d&apos;information et d&apos;equipements techniques tels qu&apos;ordinateurs et serveurs).
                </li>
                <li>
                  <strong>Conservation et suppression :</strong> suppression conformement aux indications figurant dans la
                  section &quot;Informations generales sur la conservation et la suppression des donnees&quot;.
                </li>
              </ul>
              <div className="space-y-3">
                <h3 className={subTitleClassName}>Informations complementaires sur les processus, procedures et services</h3>
                <ul className={listClassName}>
                  <li>
                    <strong>Mise a disposition de l&apos;offre en ligne sur un espace de stockage loue :</strong> Pour la
                    mise a disposition de notre offre en ligne, nous utilisons un espace de stockage, des capacites de
                    calcul et des logiciels que nous louons ou obtenons d&apos;un fournisseur de serveurs approprie
                    (egalement appele &quot;hebergeur web&quot;) ; <strong>Bases juridiques :</strong> interets legitimes
                    (art. 6, par. 1, phrase 1, let. f RGPD).
                  </li>
                </ul>
              </div>
            </Section>

            <Section title="Traitement des donnees dans le cadre de l&apos;application (app)">
              <p className={paragraphClassName}>
                Nous traitons les donnees des utilisateurs de notre application dans la mesure ou cela est necessaire
                afin de mettre l&apos;application et ses fonctionnalites a leur disposition, d&apos;en surveiller la securite et
                de la faire evoluer. Nous pouvons egalement contacter les utilisateurs dans le respect des exigences
                legales si cette communication est necessaire a des fins d&apos;administration ou d&apos;utilisation de
                l&apos;application. Pour le surplus, en ce qui concerne le traitement des donnees des utilisateurs, nous
                renvoyons aux informations de confidentialite figurant dans la presente politique de confidentialite.
              </p>
              <p className={paragraphClassName}>
                <strong>Bases juridiques :</strong> Le traitement des donnees necessaires a la mise a disposition des
                fonctionnalites de l&apos;application sert a l&apos;execution d&apos;obligations contractuelles. Cela vaut egalement
                lorsque la mise a disposition des fonctions suppose une autorisation des utilisateurs (par ex.
                autorisations pour des fonctions de l&apos;appareil). Si le traitement de donnees n&apos;est pas necessaire a la
                mise a disposition des fonctionnalites de l&apos;application mais sert a la securite de l&apos;application ou a
                nos interets economiques (par ex. collecte de donnees a des fins d&apos;optimisation de l&apos;application ou a
                des fins de securite), il est effectue sur la base de nos interets legitimes. Si les utilisateurs sont
                expressement invites a consentir au traitement de leurs donnees, les donnees couvertes par ce
                consentement sont traitees sur la base de celui-ci.
              </p>
              <ul className={listClassName}>
                <li>
                  <strong>Types de donnees traitees :</strong> donnees de base (par ex. nom complet, adresse de
                  domicile, coordonnees, numero de client, etc.) ; donnees d&apos;utilisation (par ex. pages vues et duree
                  de consultation, parcours de clics, intensite et frequence d&apos;utilisation, types d&apos;appareils et
                  systemes d&apos;exploitation utilises, interactions avec les contenus et fonctions) ; metadonnees,
                  donnees de communication et donnees de procedure (par ex. adresses IP, indications temporelles,
                  numeros d&apos;identification, personnes impliquees) ; donnees de paiement (par ex. coordonnees bancaires,
                  factures, historique des paiements) ; donnees contractuelles (par ex. objet du contrat, duree,
                  categorie de client). Donnees de localisation (indications sur la position geographique d&apos;un appareil
                  ou d&apos;une personne).
                </li>
                <li>
                  <strong>Personnes concernees :</strong> utilisateurs (par ex. visiteurs du site web, utilisateurs de
                  services en ligne).
                </li>
                <li>
                  <strong>Finalites du traitement et interets legitimes :</strong> fourniture de prestations
                  contractuelles et execution d&apos;obligations contractuelles ; mesures de securite. Mise a disposition de
                  notre offre en ligne et convivialite.
                </li>
                <li>
                  <strong>Conservation et suppression :</strong> suppression conformement aux indications figurant dans la
                  section &quot;Informations generales sur la conservation et la suppression des donnees&quot;.
                </li>
              </ul>
              <div className="space-y-3">
                <h3 className={subTitleClassName}>Informations complementaires sur les processus, procedures et services</h3>
                <ul className={listClassName}>
                  <li>
                    <strong>Utilisation commerciale :</strong> Nous traitons les donnees des utilisateurs de notre
                    application, des utilisateurs inscrits et des eventuels utilisateurs de test (ci-apres designes
                    collectivement comme &quot;utilisateurs&quot;), afin de pouvoir leur fournir nos prestations contractuelles et,
                    sur la base d&apos;interets legitimes, afin d&apos;assurer la securite de notre application et de la faire
                    evoluer. Les informations requises sont identifiees comme telles dans le cadre de la conclusion d&apos;un
                    contrat d&apos;utilisation, de commande, de prestation ou d&apos;un contrat comparable et peuvent inclure les
                    informations necessaires a la fourniture de la prestation et, le cas echeant, a la facturation,
                    ainsi que les coordonnees permettant d&apos;eventuels echanges ; <strong>Bases juridiques :</strong>
                    execution du contrat et demandes precontractuelles (art. 6, par. 1, phrase 1, let. b RGPD).
                  </li>
                  <li>
                    <strong>Stockage d&apos;un identifiant universel et unique (UUID) :</strong> L&apos;application enregistre un
                    identifiant universel et unique (UUID) a des fins d&apos;analyse de l&apos;utilisation et du fonctionnement de
                    l&apos;application ainsi que pour la memorisation des parametres des utilisateurs. Cet identifiant est
                    genere lors de l&apos;installation de l&apos;application (sans etre lie a l&apos;appareil, c&apos;est-a-dire sans etre
                    un identifiant d&apos;appareil au sens strict), reste enregistre entre les demarrages et mises a jour de
                    l&apos;application et est supprime lorsque l&apos;utilisateur supprime l&apos;application de son appareil.
                  </li>
                  <li>
                    <strong>Traitement des contacts enregistres :</strong> Dans le cadre de l&apos;utilisation de notre
                    application, les informations de contact de personnes enregistrees dans le repertoire de contacts de
                    l&apos;appareil (nom, adresse e-mail, numero de telephone) sont traitees. L&apos;utilisation de ces
                    informations requiert une autorisation des utilisateurs, qui peut etre revoquee a tout moment.
                    L&apos;utilisation de ces informations sert uniquement a fournir la fonctionnalite correspondante de notre
                    application, conformement a sa description faite aux utilisateurs ou a son fonctionnement typique et
                    attendu. Les utilisateurs sont informes que l&apos;autorisation de traiter les informations de contact doit
                    etre permise et, en particulier s&apos;agissant de personnes physiques, requiert leur consentement ou une
                    autorisation legale.
                  </li>
                  <li>
                    <strong>Utilisation des donnees de contact aux fins de rapprochement de contacts :</strong> Les
                    donnees des contacts enregistres dans le repertoire de contacts de l&apos;appareil peuvent etre utilisees
                    pour verifier si ces contacts utilisent egalement notre application. A cette fin, les donnees de
                    contact des contacts concernes (y compris le numero de telephone, l&apos;adresse e-mail et les noms) sont
                    telechargees sur notre serveur et utilisees exclusivement a des fins de rapprochement.
                  </li>
                  <li>
                    <strong>Traitement des donnees de localisation :</strong> Dans le cadre de l&apos;utilisation de notre
                    application, les donnees de localisation relevees par l&apos;appareil utilise ou saisies par les
                    utilisateurs sont traitees. L&apos;utilisation des donnees de localisation requiert une autorisation des
                    utilisateurs, qui peut etre revoquee a tout moment. L&apos;utilisation de ces donnees sert uniquement a
                    fournir la fonctionnalite correspondante de notre application, conformement a sa description faite
                    aux utilisateurs ou a son fonctionnement typique et attendu.
                  </li>
                </ul>
              </div>
            </Section>

            <Section title="Inscription, connexion et compte utilisateur">
              <p className={paragraphClassName}>
                Les utilisateurs peuvent creer un compte utilisateur. Dans le cadre de l&apos;inscription, les utilisateurs
                sont informes des donnees obligatoires requises, qui sont traitees aux fins de mise a disposition du
                compte utilisateur sur la base de l&apos;execution du contrat. Les donnees traitees comprennent notamment les
                informations de connexion (nom d&apos;utilisateur, mot de passe ainsi qu&apos;une adresse e-mail).
              </p>
              <p className={paragraphClassName}>
                Dans le cadre de l&apos;utilisation de nos fonctions d&apos;inscription et de connexion ainsi que du compte
                utilisateur, nous enregistrons l&apos;adresse IP et l&apos;heure de l&apos;action effectuee par l&apos;utilisateur. Cet
                enregistrement repose sur nos interets legitimes ainsi que sur ceux des utilisateurs a se proteger contre
                les abus et toute utilisation non autorisee. Ces donnees ne sont en principe pas transmises a des tiers,
                sauf si cela est necessaire a la poursuite de nos droits ou s&apos;il existe une obligation legale en ce
                sens.
              </p>
              <p className={paragraphClassName}>
                Les utilisateurs peuvent etre informes par e-mail de processus importants concernant leur compte
                utilisateur, tels que des modifications techniques.
              </p>
              <ul className={listClassName}>
                <li>
                  <strong>Types de donnees traitees :</strong> donnees de base (par ex. nom complet, adresse de
                  domicile, coordonnees, numero de client, etc.) ; donnees de contact (par ex. adresses postales et
                  e-mail ou numeros de telephone) ; donnees de contenu (par ex. messages et contributions textuels ou
                  visuels et informations qui s&apos;y rapportent, telles que l&apos;auteur ou la date de creation) ; donnees
                  d&apos;utilisation (par ex. pages vues et duree de consultation, parcours de clics, intensite et frequence
                  d&apos;utilisation, types d&apos;appareils et systemes d&apos;exploitation utilises, interactions avec les contenus
                  et fonctions). Donnees de journalisation (par ex. fichiers journaux relatifs aux connexions, a la
                  consultation de donnees ou aux heures d&apos;acces).
                </li>
                <li>
                  <strong>Personnes concernees :</strong> utilisateurs (par ex. visiteurs du site web, utilisateurs de
                  services en ligne).
                </li>
                <li>
                  <strong>Finalites du traitement et interets legitimes :</strong> fourniture de prestations
                  contractuelles et execution d&apos;obligations contractuelles ; mesures de securite ; procedures
                  organisationnelles et administratives. Mise a disposition de notre offre en ligne et convivialite.
                </li>
                <li>
                  <strong>Conservation et suppression :</strong> suppression conformement aux indications figurant dans la
                  section &quot;Informations generales sur la conservation et la suppression des donnees&quot;. Suppression apres
                  resiliation.
                </li>
              </ul>
              <div className="space-y-3">
                <h3 className={subTitleClassName}>Informations complementaires sur les processus, procedures et services</h3>
                <ul className={listClassName}>
                  <li>
                    <strong>Inscription sous le vrai nom :</strong> En raison de la nature de notre communaute, nous
                    demandons aux utilisateurs d&apos;utiliser notre offre uniquement sous leur vrai nom. L&apos;utilisation de
                    pseudonymes n&apos;est donc pas autorisee ; <strong>Bases juridiques :</strong> execution du contrat et
                    demandes precontractuelles (art. 6, par. 1, phrase 1, let. b RGPD).
                  </li>
                  <li>
                    <strong>Les profils utilisateurs ne sont pas publics :</strong> Les profils des utilisateurs ne sont
                    pas visibles ni accessibles publiquement.
                  </li>
                  <li>
                    <strong>Authentification a deux facteurs :</strong> L&apos;authentification a deux facteurs offre une
                    couche de securite supplementaire pour votre compte utilisateur et garantit que vous seul pouvez y
                    acceder, meme si une autre personne connait votre mot de passe. A cette fin, vous devez, en plus de
                    votre mot de passe, effectuer une autre mesure d&apos;authentification (par ex. saisir un code envoye a
                    un appareil mobile). Nous vous informerons de la procedure utilisee ; <strong>Bases juridiques :</strong>
                    execution du contrat et demandes precontractuelles (art. 6, par. 1, phrase 1, let. b RGPD).
                  </li>
                </ul>
              </div>
            </Section>

            <Section title="Gestion des contacts et des demandes">
              <p className={paragraphClassName}>
                Lorsque vous nous contactez (par ex. par courrier, formulaire de contact, e-mail, telephone ou via les
                reseaux sociaux), ainsi que dans le cadre de relations existantes avec des utilisateurs et des
                partenaires commerciaux, les informations des personnes qui formulent une demande sont traitees dans la
                mesure necessaire pour repondre aux demandes de contact et a d&apos;eventuelles mesures sollicitees.
              </p>
              <ul className={listClassName}>
                <li>
                  <strong>Types de donnees traitees :</strong> donnees de contact (par ex. adresses postales et e-mail
                  ou numeros de telephone) ; donnees de contenu (par ex. messages et contributions textuels ou visuels
                  et informations qui s&apos;y rapportent, telles que l&apos;auteur ou la date de creation). Metadonnees,
                  donnees de communication et donnees de procedure (par ex. adresses IP, indications temporelles,
                  numeros d&apos;identification, personnes impliquees).
                </li>
                <li>
                  <strong>Personnes concernees :</strong> partenaires de communication.
                </li>
                <li>
                  <strong>Finalites du traitement et interets legitimes :</strong> communication ; procedures
                  organisationnelles et administratives ; feedback (par ex. collecte de retours via un formulaire en
                  ligne). Mise a disposition de notre offre en ligne et convivialite.
                </li>
                <li>
                  <strong>Conservation et suppression :</strong> suppression conformement aux indications figurant dans la
                  section &quot;Informations generales sur la conservation et la suppression des donnees&quot;.
                </li>
              </ul>
              <div className="space-y-3">
                <h3 className={subTitleClassName}>Informations complementaires sur les processus, procedures et services</h3>
                <ul className={listClassName}>
                  <li>
                    <strong>Formulaire de contact :</strong> Lorsque vous nous contactez via notre formulaire de contact,
                    par e-mail ou par d&apos;autres moyens de communication, nous traitons les donnees personnelles qui nous
                    sont transmises afin de repondre a la demande concernee et de la traiter. Cela comprend en regle
                    generale des donnees telles que le nom, les coordonnees et, le cas echeant, d&apos;autres informations
                    qui nous sont communiquees et qui sont necessaires a un traitement adequat. Nous utilisons ces
                    donnees exclusivement aux fins indiquees de prise de contact et de communication ; <strong>Bases
                    juridiques :</strong> execution du contrat et demandes precontractuelles (art. 6, par. 1, phrase 1,
                    let. b RGPD), interets legitimes (art. 6, par. 1, phrase 1, let. f RGPD).
                  </li>
                </ul>
              </div>
            </Section>

            <Section title="Visioconferences, reunions en ligne, webinaires et partage d&apos;ecran">
              <p className={paragraphClassName}>
                Nous utilisons des plateformes et applications d&apos;autres fournisseurs (ci-apres denommees
                &quot;plateformes de conference&quot;) afin d&apos;organiser des conferences video et audio, des webinaires et
                d&apos;autres types de reunions video et audio (ci-apres collectivement denommees &quot;conference&quot;). Lors du
                choix des plateformes de conference et de leurs services, nous respectons les exigences legales.
              </p>
              <p className={paragraphClassName}>
                <strong>Donnees traitees par les plateformes de conference :</strong> Dans le cadre de la participation
                a une conference, les plateformes de conference traitent les donnees personnelles des participants
                mentionnees ci-dessous. L&apos;etendue du traitement depend, d&apos;une part, des donnees exigees dans le cadre
                d&apos;une conference concrete (par ex. fourniture de donnees d&apos;acces ou utilisation du vrai nom) et,
                d&apos;autre part, des informations facultatives fournies par les participants. Outre le traitement aux fins
                d&apos;organisation de la conference, les donnees des participants peuvent egalement etre traitees par les
                plateformes de conference a des fins de securite ou d&apos;optimisation du service. Les donnees traitees
                comprennent les donnees relatives a la personne (prenom, nom), les coordonnees (adresse e-mail, numero
                de telephone), les donnees d&apos;acces (codes d&apos;acces ou mots de passe), les photos de profil, les
                informations relatives a la fonction/position professionnelle, l&apos;adresse IP de l&apos;acces internet, les
                informations relatives aux terminaux des participants, a leur systeme d&apos;exploitation, au navigateur et a
                ses parametres techniques et linguistiques, les informations relatives aux processus de communication,
                c&apos;est-a-dire les saisies dans les chats ainsi que les donnees audio et video, ainsi que l&apos;utilisation
                d&apos;autres fonctions disponibles (par ex. sondages). Le contenu des communications est chiffre dans la
                mesure prevue techniquement par les fournisseurs de conference. Si les participants sont enregistres en
                tant qu&apos;utilisateurs aupres des plateformes de conference, d&apos;autres donnees peuvent etre traitees selon
                l&apos;accord conclu avec le fournisseur concerne.
              </p>
              <p className={paragraphClassName}>
                <strong>Journalisation et enregistrements :</strong> Si des saisies de texte, des resultats de
                participation (par ex. a des sondages) ainsi que des enregistrements video ou audio sont journalises,
                les participants en sont informes de maniere transparente a l&apos;avance et, lorsque cela est requis, leur
                consentement est demande.
              </p>
              <p className={paragraphClassName}>
                <strong>Mesures de protection des donnees pour les participants :</strong> Veuillez prendre connaissance
                des details du traitement de vos donnees par les plateformes de conference dans leurs politiques de
                confidentialite et choisir, dans les parametres de ces plateformes, les reglages de securite et de
                protection des donnees qui vous conviennent le mieux. En outre, pendant toute la duree d&apos;une
                visioconference, veuillez veiller a la protection des donnees et de la personnalite en arriere-plan de
                votre enregistrement (par ex. en informant les cohabitants, en fermant les portes et en utilisant, si
                cela est techniquement possible, la fonction de floutage de l&apos;arriere-plan). Les liens vers les salles
                de conference ainsi que les donnees d&apos;acces ne doivent pas etre transmis a des tiers non autorises.
              </p>
              <p className={paragraphClassName}>
                <strong>Remarques sur les bases juridiques :</strong> Si, en plus des plateformes de conference, nous
                traitons egalement les donnees des utilisateurs et leur demandons leur consentement a l&apos;utilisation des
                plateformes de conference ou de certaines fonctions (par ex. consentement a l&apos;enregistrement de
                conferences), la base juridique du traitement est ce consentement. En outre, notre traitement peut etre
                necessaire a l&apos;execution de nos obligations contractuelles (par ex. dans des listes de participants, dans
                le cadre de l&apos;exploitation des resultats de reunion, etc.). Pour le reste, les donnees des utilisateurs
                sont traitees sur la base de nos interets legitimes a une communication efficace et securisee avec nos
                partenaires de communication.
              </p>
              <ul className={listClassName}>
                <li>
                  <strong>Types de donnees traitees :</strong> donnees de base (par ex. nom complet, adresse de
                  domicile, coordonnees, numero de client, etc.) ; donnees de contact (par ex. adresses postales et
                  e-mail ou numeros de telephone) ; donnees de contenu (par ex. messages et contributions textuels ou
                  visuels et informations qui s&apos;y rapportent, telles que l&apos;auteur ou la date de creation) ; donnees
                  d&apos;utilisation (par ex. pages vues et duree de consultation, parcours de clics, intensite et frequence
                  d&apos;utilisation, types d&apos;appareils et systemes d&apos;exploitation utilises, interactions avec les contenus
                  et fonctions) ; images et/ou enregistrements video (par ex. photographies ou enregistrements video
                  d&apos;une personne) ; enregistrements audio. Donnees de journalisation (par ex. fichiers journaux relatifs
                  aux connexions, a la consultation de donnees ou aux heures d&apos;acces).
                </li>
                <li>
                  <strong>Personnes concernees :</strong> partenaires de communication ; utilisateurs (par ex. visiteurs
                  du site web, utilisateurs de services en ligne). Personnes representees.
                </li>
                <li>
                  <strong>Finalites du traitement et interets legitimes :</strong> fourniture de prestations
                  contractuelles et execution d&apos;obligations contractuelles ; communication. Procedures de bureau et
                  d&apos;organisation.
                </li>
                <li>
                  <strong>Conservation et suppression :</strong> suppression conformement aux indications figurant dans la
                  section &quot;Informations generales sur la conservation et la suppression des donnees&quot;.
                </li>
              </ul>
              <div className="space-y-3">
                <h3 className={subTitleClassName}>Informations complementaires sur les processus, procedures et services</h3>
                <ul className={listClassName}>
                  <li>
                    <strong>Microsoft Teams :</strong> utilise pour la tenue d&apos;evenements et de conferences en ligne et
                    pour la communication avec des participants internes et externes. Sont utilises la transmission
                    vocale, les messages directs, la communication de groupe et les fonctions de collaboration ; sont
                    traites le nom, les coordonnees professionnelles, le profil professionnel, la participation ainsi que
                    les contenus (audio/video, parole, chat, fichiers, transcription vocale) a des fins et en raison
                    d&apos;interets lies a l&apos;augmentation de l&apos;efficacite et de la productivite, a la rentabilite, a la
                    flexibilite, a la mobilite, a l&apos;amelioration de la communication, a la securite informatique, a
                    l&apos;utilisation d&apos;une plateforme centrale et a la gestion commerciale de Microsoft. Les signaux audio
                    ne sont en principe pas conserves, sauf si l&apos;enregistrement est active. Les enregistrements de
                    reunions et de conferences sont conserves par defaut pendant 90 jours, sauf si une autre duree est
                    definie. Les contenus des chats et fichiers sont conserves selon les regles definies par
                    l&apos;administrateur ou l&apos;utilisateur ; par defaut, aucune suppression automatique n&apos;est prevue. Les
                    canaux doivent etre renouveles tous les 180 jours, faute de quoi les contenus sont supprimes. En
                    outre, des donnees de journalisation, de diagnostic et des metadonnees generees par le systeme sont
                    traitees, et des donnees de diagnostic sont collectees aux fins de stabilite du produit, de securite
                    et d&apos;amelioration ; <strong>Prestataire :</strong> Microsoft Ireland Operations Limited, One
                    Microsoft Place, South County Business Park, Leopardstown, Dublin 18, D18 P521, Irlande ; Microsoft
                    Corporation, One Microsoft Way, Redmond, WA 98052-6399, USA ; <strong>Bases juridiques :</strong>
                    interets legitimes (art. 6, par. 1, phrase 1, let. f RGPD) ; <strong>Site web :</strong>{" "}
                    <ExternalLink href="https://www.microsoft.com/de-de/microsoft-teams/">
                      https://www.microsoft.com/de-de/microsoft-teams/
                    </ExternalLink>
                    ; <strong>Politique de confidentialite :</strong>{" "}
                    <ExternalLink href="https://privacy.microsoft.com/de-de/privacystatement">
                      https://privacy.microsoft.com/de-de/privacystatement
                    </ExternalLink>
                    , <strong>Informations de securite :</strong>{" "}
                    <ExternalLink href="https://www.microsoft.com/de-de/trustcenter">
                      https://www.microsoft.com/de-de/trustcenter
                    </ExternalLink>
                    . <strong>Base des transferts vers des pays tiers :</strong> Data Privacy Framework (DPF), clauses
                    contractuelles types.
                  </li>
                </ul>
              </div>
            </Section>

            <Section title="Services cloud">
              <p className={paragraphClassName}>
                Nous utilisons des services logiciels accessibles via internet et executes sur les serveurs de leurs
                fournisseurs (dits &quot;services cloud&quot;, egalement designes comme &quot;Software as a Service&quot;) pour le stockage
                et la gestion de contenus (par ex. stockage et gestion de documents, echange de documents, de contenus
                et d&apos;informations avec des destinataires determines ou publication de contenus et d&apos;informations).
              </p>
              <p className={paragraphClassName}>
                Dans ce cadre, des donnees personnelles peuvent etre traitees et stockees sur les serveurs des
                fournisseurs dans la mesure ou elles font partie de communications avec nous ou sont autrement traitees
                par nous comme indique dans la presente politique de confidentialite. Ces donnees peuvent notamment
                comprendre les donnees de base et les donnees de contact des utilisateurs, des donnees relatives a des
                operations, contrats, autres processus et a leur contenu. Les fournisseurs de services cloud traitent
                egalement des donnees d&apos;utilisation et des metadonnees qu&apos;ils utilisent a des fins de securite et
                d&apos;optimisation du service.
              </p>
              <p className={paragraphClassName}>
                Si, a l&apos;aide des services cloud, nous mettons a disposition de formulaires ou autres documents et
                contenus pour d&apos;autres utilisateurs ou pour des sites web accessibles au public, les fournisseurs peuvent
                stocker des cookies sur les appareils des utilisateurs a des fins d&apos;analyse web ou afin de memoriser des
                parametres utilisateurs (par ex. dans le cas du controle des medias).
              </p>
              <ul className={listClassName}>
                <li>
                  <strong>Types de donnees traitees :</strong> donnees de base (par ex. nom complet, adresse de
                  domicile, coordonnees, numero de client, etc.) ; donnees de contact (par ex. adresses postales et
                  e-mail ou numeros de telephone) ; donnees de contenu (par ex. messages et contributions textuels ou
                  visuels et informations qui s&apos;y rapportent, telles que l&apos;auteur ou la date de creation) ; donnees
                  d&apos;utilisation (par ex. pages vues et duree de consultation, parcours de clics, intensite et frequence
                  d&apos;utilisation, types d&apos;appareils et systemes d&apos;exploitation utilises, interactions avec les contenus
                  et fonctions). Metadonnees, donnees de communication et donnees de procedure (par ex. adresses IP,
                  indications temporelles, numeros d&apos;identification, personnes impliquees).
                </li>
                <li>
                  <strong>Personnes concernees :</strong> personnes interessees ; partenaires de communication ;
                  partenaires commerciaux et contractuels. Utilisateurs (par ex. visiteurs du site web, utilisateurs de
                  services en ligne).
                </li>
                <li>
                  <strong>Finalites du traitement et interets legitimes :</strong> procedures de bureau et
                  d&apos;organisation ; infrastructure informatique (exploitation et mise a disposition de systemes
                  d&apos;information et d&apos;equipements techniques tels qu&apos;ordinateurs et serveurs). Mise a disposition de
                  notre offre en ligne et convivialite.
                </li>
                <li>
                  <strong>Conservation et suppression :</strong> suppression conformement aux indications figurant dans la
                  section &quot;Informations generales sur la conservation et la suppression des donnees&quot;.
                </li>
              </ul>
              <div className="space-y-3">
                <h3 className={subTitleClassName}>Informations complementaires sur les processus, procedures et services</h3>
                <ul className={listClassName}>
                  <li>
                    <strong>Microsoft 365 et services cloud Microsoft :</strong> mise a disposition d&apos;applications,
                    protection des donnees et des systemes informatiques ainsi qu&apos;utilisation de journaux, donnees de
                    diagnostic et metadonnees generees par le systeme aux fins de l&apos;execution contractuelle par
                    Microsoft. Sont traitees les donnees de contact (nom, adresse e-mail), les donnees de contenu
                    (fichiers, commentaires, profils), les donnees de configuration logicielle et d&apos;inventaire, les
                    donnees de connectivite et de configuration des appareils, les interactions de travail (badge swipe)
                    ainsi que les journaux et metadonnees. Le traitement est effectue aux fins d&apos;augmentation de
                    l&apos;efficacite et de la productivite, de rentabilite, de flexibilite, de mobilite, d&apos;amelioration de
                    la communication, d&apos;integration des services Microsoft, de securite informatique et de gestion
                    commerciale de Microsoft. La conservation des donnees depend des documents et directives de
                    l&apos;entreprise, jusqu&apos;a 12 mois pour Defender (protection des donnees et systemes informatiques) et 10
                    jours pour la gestion de l&apos;impression. En outre, des donnees de diagnostic sont collectees aux fins
                    de stabilite et d&apos;amelioration du produit ; <strong>Prestataire :</strong> Microsoft Ireland
                    Operations Limited, One Microsoft Place, South County Business Park, Leopardstown, Dublin 18, D18
                    P521, Irlande ; Microsoft Corporation, One Microsoft Way, Redmond, WA 98052-6399, USA ;
                    <strong> Bases juridiques :</strong> interets legitimes (art. 6, par. 1, phrase 1, let. f RGPD) ;
                    <strong> Site web :</strong>{" "}
                    <ExternalLink href="https://microsoft.com/de-de">https://microsoft.com/de-de</ExternalLink>;
                    <strong> Politique de confidentialite :</strong>{" "}
                    <ExternalLink href="https://privacy.microsoft.com/de-de/privacystatement">
                      https://privacy.microsoft.com/de-de/privacystatement
                    </ExternalLink>
                    , <strong>Informations de securite :</strong>{" "}
                    <ExternalLink href="https://www.microsoft.com/de-de/trustcenter">
                      https://www.microsoft.com/de-de/trustcenter
                    </ExternalLink>
                    ; <strong>Accord de traitement des donnees :</strong>{" "}
                    <ExternalLink href="https://www.microsoft.com/licensing/docs/view/Microsoft-Products-and-Services-Data-Protection-Addendum-DPA">
                      https://www.microsoft.com/licensing/docs/view/Microsoft-Products-and-Services-Data-Protection-Addendum-DPA
                    </ExternalLink>
                    . <strong>Base des transferts vers des pays tiers :</strong> Data Privacy Framework (DPF), clauses
                    contractuelles types.
                  </li>
                  <li>
                    <strong>Microsoft Azure :</strong> prestations dans le domaine de la mise a disposition
                    d&apos;infrastructures informatiques et de services associes (par ex. espace de stockage et/ou capacites
                    de calcul) ; <strong>Prestataire :</strong> Microsoft Ireland Operations Limited, One Microsoft Place,
                    South County Business Park, Leopardstown, Dublin 18, D18 P521, Irlande ; <strong>Bases
                    juridiques :</strong> interets legitimes (art. 6, par. 1, phrase 1, let. f RGPD) ; <strong>Site web :</strong>{" "}
                    <ExternalLink href="https://azure.microsoft.com">https://azure.microsoft.com</ExternalLink>;
                    <strong> Politique de confidentialite :</strong>{" "}
                    <ExternalLink href="https://privacy.microsoft.com/de-de/privacystatement">
                      https://privacy.microsoft.com/de-de/privacystatement
                    </ExternalLink>
                    ; <strong>Accord de traitement des donnees :</strong>{" "}
                    <ExternalLink href="https://azure.microsoft.com/de-de/support/legal/">
                      https://azure.microsoft.com/de-de/support/legal/
                    </ExternalLink>
                    . <strong>Base des transferts vers des pays tiers :</strong> Data Privacy Framework (DPF), clauses
                    contractuelles types ({" "}
                    <ExternalLink href="https://azure.microsoft.com/en-us/support/legal/">
                      https://azure.microsoft.com/en-us/support/legal/
                    </ExternalLink>
                    ).
                  </li>
                </ul>
              </div>
            </Section>

            <Section title="Communication promotionnelle par e-mail, courrier, fax ou telephone">
              <p className={paragraphClassName}>
                Nous traitons les donnees personnelles a des fins de communication promotionnelle, laquelle peut avoir
                lieu via differents canaux, tels que l&apos;e-mail, le telephone, le courrier ou le fax, conformement aux
                exigences legales.
              </p>
              <p className={paragraphClassName}>
                Les destinataires ont le droit de retirer a tout moment les consentements donnes ou de s&apos;opposer a tout
                moment et gratuitement a la communication promotionnelle en utilisant les possibilites de contact
                mentionnees ci-dessus.
              </p>
              <p className={paragraphClassName}>
                Apres retrait ou opposition, nous conservons les donnees necessaires a la preuve de l&apos;autorisation
                anterieure de contact ou d&apos;envoi pendant une duree pouvant aller jusqu&apos;a trois ans apres la fin de
                l&apos;annee du retrait ou de l&apos;opposition, sur la base de nos interets legitimes. Le traitement de ces
                donnees est limite a la finalite de defense contre d&apos;eventuelles pretentions. Sur la base de l&apos;interet
                legitime consistant a respecter durablement le retrait ou l&apos;opposition des utilisateurs, nous conservons
                egalement les donnees necessaires afin d&apos;eviter tout nouveau contact (par ex. selon le canal de
                communication : adresse e-mail, numero de telephone ou nom).
              </p>
              <ul className={listClassName}>
                <li>
                  <strong>Types de donnees traitees :</strong> donnees de base (par ex. nom complet, adresse de
                  domicile, coordonnees, numero de client, etc.) ; donnees de contact (par ex. adresses postales et
                  e-mail ou numeros de telephone). Donnees de contenu (par ex. messages et contributions textuels ou
                  visuels et informations qui s&apos;y rapportent, telles que l&apos;auteur ou la date de creation).
                </li>
                <li>
                  <strong>Personnes concernees :</strong> partenaires de communication.
                </li>
                <li>
                  <strong>Finalites du traitement et interets legitimes :</strong> marketing direct (par ex. par e-mail
                  ou voie postale) ; marketing. Promotion des ventes.
                </li>
                <li>
                  <strong>Conservation et suppression :</strong> suppression conformement aux indications figurant dans la
                  section &quot;Informations generales sur la conservation et la suppression des donnees&quot;.
                </li>
              </ul>
            </Section>

            <Section title="Presences sur les reseaux sociaux (social media)">
              <p className={paragraphClassName}>
                Nous maintenons des presences en ligne sur des reseaux sociaux et, dans ce cadre, nous traitons les
                donnees des utilisateurs afin de communiquer avec les utilisateurs qui y sont actifs ou de proposer des
                informations nous concernant.
              </p>
              <p className={paragraphClassName}>
                Nous attirons votre attention sur le fait que les donnees des utilisateurs peuvent etre traitees en
                dehors de l&apos;Union europeenne. Cela peut entrainer des risques pour les utilisateurs, par exemple parce
                que l&apos;exercice de leurs droits pourrait etre rendu plus difficile.
              </p>
              <p className={paragraphClassName}>
                En outre, les donnees des utilisateurs sont generalement traitees au sein des reseaux sociaux a des fins
                d&apos;etudes de marche et de publicite. Ainsi, des profils d&apos;utilisation peuvent etre etablis sur la base du
                comportement d&apos;utilisation et des interets des utilisateurs qui en resultent. Ces profils peuvent a leur
                tour etre utilises, par exemple, pour diffuser des publicites a l&apos;interieur et a l&apos;exterieur des
                reseaux, presumees correspondre aux interets des utilisateurs. A cette fin, des cookies sont en regle
                generale enregistres sur les ordinateurs des utilisateurs afin d&apos;y memoriser leur comportement
                d&apos;utilisation et leurs interets. En outre, des donnees peuvent egalement etre conservees dans les profils
                d&apos;utilisation independamment des appareils utilises par les utilisateurs (en particulier s&apos;ils sont
                membres des plateformes concernees et y sont connectes).
              </p>
              <p className={paragraphClassName}>
                Pour une presentation detaillee des formes de traitement respectives ainsi que des possibilites
                d&apos;opposition (opt-out), nous renvoyons aux politiques de confidentialite et informations des exploitants
                des reseaux concernes.
              </p>
              <p className={paragraphClassName}>
                Egalement en cas de demandes d&apos;information et d&apos;exercice des droits des personnes concernees, nous
                attirons votre attention sur le fait que ceux-ci peuvent etre exerces de la maniere la plus efficace
                directement aupres des fournisseurs. Seuls ces derniers ont acces aux donnees des utilisateurs et peuvent
                prendre directement les mesures appropriees et fournir des renseignements. Si vous avez toutefois besoin
                d&apos;aide, vous pouvez nous contacter.
              </p>
              <ul className={listClassName}>
                <li>
                  <strong>Types de donnees traitees :</strong> donnees de contact (par ex. adresses postales et e-mail
                  ou numeros de telephone) ; donnees de contenu (par ex. messages et contributions textuels ou visuels
                  et informations qui s&apos;y rapportent, telles que l&apos;auteur ou la date de creation). Donnees
                  d&apos;utilisation (par ex. pages vues et duree de consultation, parcours de clics, intensite et frequence
                  d&apos;utilisation, types d&apos;appareils et systemes d&apos;exploitation utilises, interactions avec les contenus
                  et fonctions).
                </li>
                <li>
                  <strong>Personnes concernees :</strong> utilisateurs (par ex. visiteurs du site web, utilisateurs de
                  services en ligne).
                </li>
                <li>
                  <strong>Finalites du traitement et interets legitimes :</strong> communication ; feedback (par ex.
                  collecte de retours via un formulaire en ligne). Relations publiques.
                </li>
                <li>
                  <strong>Conservation et suppression :</strong> suppression conformement aux indications figurant dans la
                  section &quot;Informations generales sur la conservation et la suppression des donnees&quot;.
                </li>
              </ul>
              <div className="space-y-3">
                <h3 className={subTitleClassName}>Informations complementaires sur les processus, procedures et services</h3>
                <ul className={listClassName}>
                  <li>
                    <strong>LinkedIn :</strong> Reseau social - Nous sommes conjointement responsables avec LinkedIn
                    Ireland Unlimited Company de la collecte (mais non du traitement ulterieur) des donnees des visiteurs
                    utilisees pour la creation des &quot;Page Insights&quot; (statistiques) de nos profils LinkedIn. Ces donnees
                    comprennent des informations sur les types de contenus que les utilisateurs consultent ou avec
                    lesquels ils interagissent, ainsi que sur les actions qu&apos;ils entreprennent. En outre, des details
                    concernant les appareils utilises sont collectes, tels que les adresses IP, le systeme
                    d&apos;exploitation, le type de navigateur, les parametres de langue et les donnees de cookies, ainsi que
                    des informations provenant des profils utilisateurs, telles que la fonction professionnelle, le pays,
                    le secteur, le niveau hierarchique, la taille de l&apos;entreprise et le statut d&apos;emploi. Les
                    informations sur la protection des donnees concernant le traitement des donnees utilisateurs par
                    LinkedIn peuvent etre consultees dans la politique de confidentialite de LinkedIn :{" "}
                    <ExternalLink href="https://www.linkedin.com/legal/privacy-policy">
                      https://www.linkedin.com/legal/privacy-policy
                    </ExternalLink>
                    .
                    <br />
                    Nous avons conclu avec LinkedIn Ireland un accord special (&quot;Page Insights Joint Controller
                    Addendum&quot;,{" "}
                    <ExternalLink href="https://legal.linkedin.com/pages-joint-controller-addendum">
                      https://legal.linkedin.com/pages-joint-controller-addendum
                    </ExternalLink>
                    ) qui regle en particulier les mesures de securite que LinkedIn doit respecter et dans lequel
                    LinkedIn s&apos;est engage a satisfaire aux droits des personnes concernees (c&apos;est-a-dire que les
                    utilisateurs peuvent, par exemple, adresser directement a LinkedIn des demandes d&apos;acces ou de
                    suppression). Les droits des utilisateurs (notamment le droit d&apos;acces, de suppression,
                    d&apos;opposition et de reclamation aupres de l&apos;autorite de controle competente) ne sont pas limites par
                    les accords conclus avec LinkedIn. La responsabilite conjointe est limitee a la collecte et a la
                    transmission des donnees a LinkedIn Ireland Unlimited Company, une entreprise etablie dans l&apos;UE. Le
                    traitement ulterieur des donnees releve exclusivement de LinkedIn Ireland Unlimited Company, en
                    particulier en ce qui concerne le transfert des donnees a la societe mere LinkedIn Corporation aux
                    Etats-Unis ; <strong>Prestataire :</strong> LinkedIn Ireland Unlimited Company, Wilton Plaza, Dublin
                    2, Irlande ; <strong>Bases juridiques :</strong> interets legitimes (art. 6, par. 1, phrase 1,
                    let. f RGPD) ; <strong>Site web :</strong>{" "}
                    <ExternalLink href="https://www.linkedin.com">https://www.linkedin.com</ExternalLink>;
                    <strong> Politique de confidentialite :</strong>{" "}
                    <ExternalLink href="https://www.linkedin.com/legal/privacy-policy">
                      https://www.linkedin.com/legal/privacy-policy
                    </ExternalLink>
                    ; <strong>Base des transferts vers des pays tiers :</strong> Data Privacy Framework (DPF), clauses
                    contractuelles types ({" "}
                    <ExternalLink href="https://legal.linkedin.com/dpa">https://legal.linkedin.com/dpa</ExternalLink>
                    ). <strong>Possibilite d&apos;opposition (Opt-Out) :</strong>{" "}
                    <ExternalLink href="https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out">
                      https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out
                    </ExternalLink>
                    .
                  </li>
                </ul>
              </div>
            </Section>

            <Section title="Gestion, organisation et outils d&apos;assistance">
              <p className={paragraphClassName}>
                Nous utilisons des services, plateformes et logiciels d&apos;autres fournisseurs (ci-apres denommees
                &quot;fournisseurs tiers&quot;) a des fins d&apos;organisation, d&apos;administration, de planification et de fourniture de
                nos prestations. Lors du choix des fournisseurs tiers et de leurs services, nous respectons les
                exigences legales.
              </p>
              <p className={paragraphClassName}>
                Dans ce cadre, des donnees personnelles peuvent etre traitees et stockees sur les serveurs des
                fournisseurs tiers. Cela peut concerner differents types de donnees que nous traitons conformement a la
                presente politique de confidentialite. Il peut notamment s&apos;agir de donnees de base et de donnees de
                contact des utilisateurs, de donnees relatives a des operations, contrats, autres processus et a leur
                contenu.
              </p>
              <p className={paragraphClassName}>
                Si les utilisateurs sont rediriges vers les fournisseurs tiers ou vers leurs logiciels ou plateformes
                dans le cadre de communications, de relations commerciales ou d&apos;autres relations avec nous, les
                fournisseurs tiers peuvent traiter des donnees d&apos;utilisation et des metadonnees a des fins de securite,
                d&apos;optimisation du service ou de marketing. Nous vous invitons donc a consulter les politiques de
                confidentialite des fournisseurs tiers concernes.
              </p>
              <ul className={listClassName}>
                <li>
                  <strong>Types de donnees traitees :</strong> donnees de contenu (par ex. messages et contributions
                  textuels ou visuels et informations qui s&apos;y rapportent, telles que l&apos;auteur ou la date de creation) ;
                  donnees d&apos;utilisation (par ex. pages vues et duree de consultation, parcours de clics, intensite et
                  frequence d&apos;utilisation, types d&apos;appareils et systemes d&apos;exploitation utilises, interactions avec les
                  contenus et fonctions). Metadonnees, donnees de communication et donnees de procedure (par ex.
                  adresses IP, indications temporelles, numeros d&apos;identification, personnes impliquees).
                </li>
                <li>
                  <strong>Personnes concernees :</strong> partenaires de communication. Utilisateurs (par ex. visiteurs
                  du site web, utilisateurs de services en ligne).
                </li>
                <li>
                  <strong>Finalites du traitement et interets legitimes :</strong> fourniture de prestations
                  contractuelles et execution d&apos;obligations contractuelles. Procedures de bureau et d&apos;organisation.
                </li>
                <li>
                  <strong>Conservation et suppression :</strong> suppression conformement aux indications figurant dans la
                  section &quot;Informations generales sur la conservation et la suppression des donnees&quot;.
                </li>
              </ul>
            </Section>

            <Section title="Traitement des donnees dans le cadre des relations de travail">
              <p className={paragraphClassName}>
                Dans le cadre des relations de travail, des donnees personnelles sont traitees dans le but d&apos;organiser
                efficacement l&apos;etablissement, l&apos;execution et la cessation de telles relations. Ce traitement de donnees
                soutient diverses fonctions operationnelles et administratives necessaires a la gestion des relations avec
                les employes.
              </p>
              <p className={paragraphClassName}>
                Le traitement couvre differents aspects, depuis la conclusion du contrat jusqu&apos;a sa resiliation. Cela
                inclut l&apos;organisation et la gestion des horaires de travail quotidiens, la gestion des droits d&apos;acces et
                des autorisations ainsi que la mise en oeuvre de mesures de developpement du personnel et d&apos;entretiens
                avec les collaborateurs. Le traitement sert egalement au decompte et a l&apos;administration des salaires,
                qui constituent des aspects critiques de l&apos;execution du contrat.
              </p>
              <p className={paragraphClassName}>
                En outre, le traitement prend en compte les interets legitimes de l&apos;employeur responsable, tels que la
                garantie de la securite sur le lieu de travail ou la collecte de donnees de performance pour evaluer et
                optimiser les processus operationnels. Le traitement comprend egalement la communication de donnees
                relatives aux employes dans le cadre de processus de communication et de publication externes lorsque
                cela est necessaire a des fins operationnelles ou juridiques.
              </p>
              <p className={paragraphClassName}>
                Ce traitement de donnees s&apos;effectue toujours dans le respect du cadre juridique applicable, avec pour
                objectif la creation et le maintien d&apos;un environnement de travail equitable et efficace. Cela inclut
                egalement la prise en compte de la protection des donnees des employes concernes, l&apos;anonymisation ou la
                suppression des donnees apres realisation de la finalite du traitement ou conformement aux delais legaux
                de conservation.
              </p>
              <ul className={listClassName}>
                <li>
                  <strong>Types de donnees traitees :</strong> donnees relatives aux employes (informations sur les
                  collaborateurs et autres personnes dans une relation de travail).
                </li>
                <li>
                  <strong>Personnes concernees :</strong> employes (par ex. collaborateurs, candidats, auxiliaires et
                  autres employes).
                </li>
                <li>
                  <strong>Finalites du traitement et interets legitimes :</strong> etablissement et execution des
                  relations de travail (traitement des donnees des travailleurs dans le cadre de l&apos;etablissement et de
                  l&apos;execution des relations de travail). Processus d&apos;entreprise et procedures de gestion economique.
                </li>
              </ul>
            </Section>

            <Section title="Procedures de candidature">
              <p className={paragraphClassName}>
                La procedure de candidature suppose que les candidats nous communiquent les donnees necessaires a leur
                evaluation et a leur selection. Les informations requises ressortent de la description de poste ou, dans
                le cas de formulaires en ligne, des indications qui y figurent.
              </p>
              <p className={paragraphClassName}>
                En regle generale, les informations necessaires comprennent des informations sur la personne, telles que
                le nom, l&apos;adresse, un moyen de contact ainsi que les justificatifs des qualifications necessaires pour le
                poste. Sur demande, nous indiquons egalement volontiers quelles informations sont requises.
              </p>
              <p className={paragraphClassName}>
                Lorsque cela est possible, les candidats peuvent volontiers soumettre leur candidature via notre
                formulaire en ligne, qui est chiffre conformement a l&apos;etat le plus recent de la technique. Il est
                egalement possible de nous envoyer des candidatures par e-mail. Nous attirons toutefois votre attention
                sur le fait que les e-mails sur internet ne sont en principe pas envoyes sous forme chiffree. Bien que
                les e-mails soient generalement chiffres pendant leur transmission, ce n&apos;est pas le cas sur les serveurs
                a partir desquels ils sont envoyes et recus. Nous ne pouvons donc assumer aucune responsabilite quant a
                la securite de la candidature sur son trajet entre l&apos;expediteur et notre serveur.
              </p>
              <p className={paragraphClassName}>
                Aux fins de recherche de candidats, de depot de candidatures et de selection des candidats, nous pouvons,
                dans le respect des exigences legales, recourir a des logiciels de gestion des candidatures ou de
                recrutement, ainsi qu&apos;a des plateformes et services de fournisseurs tiers.
              </p>
              <p className={paragraphClassName}>
                Les candidats peuvent volontiers nous contacter concernant le mode de soumission de leur candidature ou
                nous l&apos;envoyer par courrier postal.
              </p>
              <p className={paragraphClassName}>
                <strong>Traitement de categories particulieres de donnees :</strong> Dans la mesure ou, dans le cadre de
                la procedure de candidature, des categories particulieres de donnees personnelles (art. 9, par. 1 RGPD,
                par ex. donnees de sante, telles qu&apos;un statut de handicap lourd ou l&apos;origine ethnique) sont demandees
                aux candidats ou communiquees par eux, leur traitement a lieu afin que le responsable du traitement ou la
                personne concernee puisse exercer les droits decoulant du droit du travail et du droit de la securite
                sociale et de la protection sociale et remplir les obligations correspondantes, en cas de protection des
                interets vitaux des candidats ou d&apos;autres personnes, ou a des fins de prevention sanitaire ou de medecine
                du travail, d&apos;evaluation de la capacite de travail du salarie, de diagnostic medical, de prise en charge
                ou de traitement dans le domaine sanitaire ou social, ou encore de gestion de systemes et services dans
                le domaine sanitaire ou social.
              </p>
              <p className={paragraphClassName}>
                <strong>Suppression des donnees :</strong> Les donnees fournies par les candidats peuvent etre
                reutilisees par nos soins a des fins de relation de travail en cas de candidature retenue. A defaut, si
                la candidature a un poste n&apos;est pas retenue, les donnees des candidats sont supprimees. Les donnees des
                candidats sont egalement supprimees lorsqu&apos;une candidature est retiree, ce que les candidats peuvent
                faire a tout moment. Sous reserve d&apos;une revocation justifiee du candidat, la suppression intervient au
                plus tard a l&apos;expiration d&apos;un delai de six mois afin de nous permettre de repondre a d&apos;eventuelles
                questions ulterieures relatives a la candidature et de satisfaire a nos obligations de preuve au regard
                des regles relatives a l&apos;egalite de traitement des candidats. Les factures relatives a un eventuel
                remboursement des frais de deplacement sont archivees conformement aux exigences du droit fiscal.
              </p>
              <p className={paragraphClassName}>
                <strong>Inclusion dans un pool de candidats :</strong> L&apos;inclusion dans un vivier de candidats, si elle
                est proposee, repose sur le consentement. Les candidats sont informes que leur consentement a cette
                inclusion est volontaire, n&apos;a aucune influence sur la procedure de candidature en cours et qu&apos;ils
                peuvent retirer leur consentement pour l&apos;avenir a tout moment.
              </p>
              <ul className={listClassName}>
                <li>
                  <strong>Types de donnees traitees :</strong> donnees de base (par ex. nom complet, adresse de
                  domicile, coordonnees, numero de client, etc.) ; donnees de contact (par ex. adresses postales et
                  e-mail ou numeros de telephone) ; donnees de contenu (par ex. messages et contributions textuels ou
                  visuels et informations qui s&apos;y rapportent, telles que l&apos;auteur ou la date de creation). Donnees de
                  candidature (par ex. informations sur la personne, adresses postales et coordonnees, documents de
                  candidature et informations qu&apos;ils contiennent, telles que lettre de motivation, CV, certificats,
                  ainsi que d&apos;autres informations fournies volontairement par les candidats concernant leur personne ou
                  leurs qualifications en lien avec un poste concret).
                </li>
                <li>
                  <strong>Personnes concernees :</strong> candidats.
                </li>
                <li>
                  <strong>Finalites du traitement et interets legitimes :</strong> procedures de candidature
                  (etablissement et eventuelle execution ulterieure, ainsi qu&apos;eventuelle cessation ulterieure de la
                  relation de travail).
                </li>
                <li>
                  <strong>Conservation et suppression :</strong> suppression conformement aux indications figurant dans la
                  section &quot;Informations generales sur la conservation et la suppression des donnees&quot;.
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
