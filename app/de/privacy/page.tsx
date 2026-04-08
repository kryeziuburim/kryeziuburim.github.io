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

export default function PrivacyPageDE() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 pt-6 pb-16 md:pt-16">
          <h1 className="mb-8 text-4xl font-bold text-gray-900 text-balance break-words hyphens-auto md:text-5xl">
            Datenschutzerklärung
          </h1>

          <div className="space-y-8 rounded-2xl bg-white p-8 shadow-sm md:p-12">
            <Section title="Präambel">
              <p className={paragraphClassName}>
                Mit der folgenden Datenschutzerklärung möchten wir Sie darüber aufklären, welche Arten Ihrer
                personenbezogenen Daten (nachfolgend auch kurz als &quot;Daten&quot; bezeichnet) wir zu welchen Zwecken und
                in welchem Umfang im Rahmen der Bereitstellung unserer Applikation verarbeiten.
              </p>
              <p className={paragraphClassName}>Die verwendeten Begriffe sind nicht geschlechtsspezifisch.</p>
              <p className={paragraphClassName}>
                <strong>Stand: 8. April 2026</strong>
              </p>
            </Section>

            <Section title="Inhaltsübersicht">
              <ul className={listClassName}>
                <li>Präambel</li>
                <li>Verantwortlicher</li>
                <li>Kontakt Datenschutzbeauftragter</li>
                <li>Übersicht der Verarbeitungen</li>
                <li>Maßgebliche Rechtsgrundlagen</li>
                <li>Sicherheitsmassnahmen</li>
                <li>Übermittlung von personenbezogenen Daten</li>
                <li>Internationale Datentransfers</li>
                <li>Allgemeine Informationen zur Datenspeicherung und Löschung</li>
                <li>Geschäftliche Leistungen</li>
                <li>Geschäftsprozesse und -verfahren</li>
                <li>Im Rahmen der Geschäftstätigkeit eingesetzte Anbieter und Services</li>
                <li>Bereitstellung des Onlineangebots und Webhosting</li>
                <li>Verarbeitung von Daten im Rahmen der Applikation (App)</li>
                <li>Registrierung, Anmeldung und Nutzerkonto</li>
                <li>Kontakt- und Anfrageverwaltung</li>
                <li>Videokonferenzen, Onlinemeetings, Webinare und Bildschirm-Sharing</li>
                <li>Cloud-Dienste</li>
                <li>Werbliche Kommunikation via E-Mail, Post, Fax oder Telefon</li>
                <li>Präsenzen in sozialen Netzwerken (Social Media)</li>
                <li>Management, Organisation und Hilfswerkzeuge</li>
                <li>Verarbeitung von Daten im Rahmen von Beschäftigungsverhältnissen</li>
                <li>Bewerbungsverfahren</li>
              </ul>
            </Section>

            <Section title="Verantwortlicher">
              <div className="space-y-1 text-gray-700">
                <p className="font-semibold">Claimity AG</p>
                <p>Wisentalstrasse 7a</p>
                <p>8185 Winkel</p>
                <p>Schweiz</p>
                <p>
                  E-Mail: <MailLink email="info@claimity.ch" />
                </p>
                <p>Vertretungsberechtigte Personen: Burim Kryeziu</p>
                <p>
                  E-Mail-Adresse: <MailLink email="info@claimity.ch" />
                </p>
              </div>
            </Section>

            <Section title="Kontakt Datenschutzbeauftragter">
              <p className={paragraphClassName}>Für Fragen zum Datenschutz wenden wir uns an unseren Datenschutzberater:</p>
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

            <Section title="Übersicht der Verarbeitungen">
              <p className={paragraphClassName}>
                Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und die Zwecke ihrer Verarbeitung
                zusammen und verweist auf die betroffenen Personen.
              </p>

              <div className="space-y-3">
                <h3 className={subTitleClassName}>Arten der verarbeiteten Daten</h3>
                <ul className={listClassName}>
                  <li>Bestandsdaten.</li>
                  <li>Beschäftigtendaten.</li>
                  <li>Zahlungsdaten.</li>
                  <li>Standortdaten.</li>
                  <li>Kontaktdaten.</li>
                  <li>Inhaltsdaten.</li>
                  <li>Vertragsdaten.</li>
                  <li>Nutzungsdaten.</li>
                  <li>Meta-, Kommunikations- und Verfahrensdaten.</li>
                  <li>Bewerberdaten.</li>
                  <li>Bild- und/ oder Videoaufnahmen.</li>
                  <li>Tonaufnahmen.</li>
                  <li>Protokolldaten.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className={subTitleClassName}>Kategorien betroffener Personen</h3>
                <ul className={listClassName}>
                  <li>Leistungsempfänger und Auftraggeber.</li>
                  <li>Beschäftigte.</li>
                  <li>Interessenten.</li>
                  <li>Kommunikationspartner.</li>
                  <li>Nutzer.</li>
                  <li>Bewerber.</li>
                  <li>Geschäfts- und Vertragspartner.</li>
                  <li>Mandanten.</li>
                  <li>Abgebildete Personen.</li>
                  <li>Dritte Personen.</li>
                  <li>Kunden.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className={subTitleClassName}>Zwecke der Verarbeitung</h3>
                <ul className={listClassName}>
                  <li>Erbringung vertraglicher Leistungen und Erfüllung vertraglicher Pflichten.</li>
                  <li>Kommunikation.</li>
                  <li>Sicherheitsmassnahmen.</li>
                  <li>Direktmarketing.</li>
                  <li>Büro- und Organisationsverfahren.</li>
                  <li>Organisations- und Verwaltungsverfahren.</li>
                  <li>Bewerbungsverfahren.</li>
                  <li>Feedback.</li>
                  <li>Marketing.</li>
                  <li>Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.</li>
                  <li>Begründung und Durchführung von Beschäftigungsverhältnissen.</li>
                  <li>Informationstechnische Infrastruktur.</li>
                  <li>Finanz- und Zahlungsmanagement.</li>
                  <li>Öffentlichkeitsarbeit.</li>
                  <li>Absatzförderung.</li>
                  <li>Geschäftsprozesse und betriebswirtschaftliche Verfahren.</li>
                </ul>
              </div>
            </Section>

            <Section title="Maßgebliche Rechtsgrundlagen">
              <p className={paragraphClassName}>
                <strong>Maßgebliche Rechtsgrundlagen nach dem Schweizer Datenschutzgesetz:</strong> Wenn Sie sich in der
                Schweiz befinden, bearbeiten wir Ihre Daten auf Grundlage des Bundesgesetzes über den Datenschutz
                (kurz „Schweizer DSG"). Anders als beispielsweise die DSGVO sieht das Schweizer DSG grundsätzlich nicht
                vor, dass eine Rechtsgrundlage für die Bearbeitung der Personendaten genannt werden muss und die
                Bearbeitung von Personendaten nach Treu und Glauben durchgeführt wird, rechtmäßig und
                verhältnismäßig ist (Art. 6 Abs. 1 und 2 des Schweizer DSG). Zudem werden Personendaten von uns nur
                zu einem bestimmten, für die betroffene Person erkennbaren Zweck beschafft und nur so bearbeitet, wie
                es mit diesem Zweck vereinbar ist (Art. 6 Abs. 3 des Schweizer DSG).
              </p>
            </Section>

            <Section title="Sicherheitsmassnahmen">
              <p className={paragraphClassName}>
                Wir treffen nach Massgabe der gesetzlichen Vorgaben unter Berücksichtigung des Stands der Technik, der
                Implementierungskosten und der Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung sowie
                der unterschiedlichen Eintrittswahrscheinlichkeiten und des Ausmasses der Bedrohung der Rechte und
                Freiheiten natürlicher Personen geeignete technische und organisatorische Massnahmen, um ein dem Risiko
                angemessenes Schutzniveau zu gewährleisten.
              </p>
              <p className={paragraphClassName}>
                Zu den Massnahmen gehören insbesondere die Sicherung der Vertraulichkeit, Integrität und
                Verfügbarkeit von Daten durch Kontrolle des physischen und elektronischen Zugangs zu den Daten als
                auch des sie betreffenden Zugriffs, der Eingabe, der Weitergabe, der Sicherung der Verfügbarkeit und
                ihrer Trennung. Des Weiteren haben wir Verfahren eingerichtet, die eine Wahrnehmung von
                Betroffenenrechten, die Löschung von Daten und Reaktionen auf die Gefährdung der Daten gewährleisten.
                Ferner berücksichtigen wir den Schutz personenbezogener Daten bereits bei der Entwicklung bzw.
                Auswahl von Hardware, Software sowie Verfahren entsprechend dem Prinzip des Datenschutzes, durch
                Technikgestaltung und durch datenschutzfreundliche Voreinstellungen.
              </p>
              <p className={paragraphClassName}>
                Sicherung von Online-Verbindungen durch TLS-/SSL-Verschlüsselungstechnologie (HTTPS): Um die Daten der
                Nutzer, die über unsere Online-Dienste übertragen werden, vor unerlaubten Zugriffen zu schützen,
                setzen wir auf die TLS-/SSL-Verschlüsselungstechnologie. Secure Sockets Layer (SSL) und Transport
                Layer Security (TLS) sind die Eckpfeiler der sicheren Datenübertragung im Internet. Diese Technologien
                verschlüsseln die Informationen, die zwischen der Website oder App und dem Browser des Nutzers (oder
                zwischen zwei Servern) übertragen werden, wodurch die Daten vor unbefugtem Zugriff geschützt sind.
                TLS, als die weiterentwickelte und sicherere Version von SSL, gewährleistet, dass alle
                Datenübertragungen den höchsten Sicherheitsstandards entsprechen. Wenn eine Website durch ein
                SSL-/TLS-Zertifikat gesichert ist, wird dies durch die Anzeige von HTTPS in der URL signalisiert. Dies
                dient als ein Indikator für die Nutzer, dass ihre Daten sicher und verschlüsselt übertragen werden.
              </p>
            </Section>

            <Section title="Übermittlung von personenbezogenen Daten">
              <p className={paragraphClassName}>
                Im Rahmen unserer Verarbeitung von personenbezogenen Daten kommt es vor, dass diese an andere Stellen,
                Unternehmen, rechtlich selbstständige Organisationseinheiten oder Personen übermittelt beziehungsweise
                ihnen gegenüber offengelegt werden. Zu den Empfängern dieser Daten können z. B. mit IT-Aufgaben
                beauftragte Dienstleister gehören oder Anbieter von Diensten und Inhalten, die in eine Website
                eingebunden sind. In solchen Fällen beachten wir die gesetzlichen Vorgaben und schliessen insbesondere
                entsprechende Verträge bzw. Vereinbarungen, die dem Schutz Ihrer Daten dienen, mit den Empfängern
                Ihrer Daten ab.
              </p>
            </Section>

            <Section title="Internationale Datentransfers">
              <p className={paragraphClassName}>
                Bekanntgabe von Personendaten ins Ausland: Gemäss dem Schweizer DSG geben wir personenbezogene Daten
                nur dann ins Ausland bekannt, wenn ein angemessener Schutz der betroffenen Personen gewährleistet ist
                (Art. 16 Schweizer DSG). Sofern der Bundesrat keinen angemessenen Schutz festgestellt hat (Liste: <ExternalLink href="https://www.bj.admin.ch/bj/de/home/staat/datenschutz/internationales/anerkennung-staaten.html">https://www.bj.admin.ch/bj/de/home/staat/datenschutz/internationales/anerkennung-staaten.html</ExternalLink>), ergreifen wir alternative Sicherheitsmassnahmen.
              </p>
              <p className={paragraphClassName}>
                Für Datenübermittlungen in die USA stützen wir uns vorrangig auf das Data Privacy Framework (DPF),
                welches durch einen Angemessenheitsbeschluss der Schweiz vom 15. September 2024 als sicherer
                Rechtsrahmen anerkannt wurde. Zusätzlich haben wir mit den jeweiligen Anbietern
                Standarddatenschutzklauseln abgeschlossen, die von der Eidgenössischen Datenschutz- und
                Öffentlichkeitsbeauftragten (EDÖB) genehmigt wurden und vertragliche Verpflichtungen zum Schutz Ihrer
                Daten festlegen.
              </p>
              <p className={paragraphClassName}>
                Diese zweifache Absicherung gewährleistet einen umfassenden Schutz Ihrer Daten: Das DPF bildet die
                primäre Schutzebene, während die Standarddatenschutzklauseln als zusätzliche Sicherheit dienen.
                Sollten sich Änderungen im Rahmen des DPF ergeben, greifen die Standarddatenschutzklauseln als
                zuverläßige Rückfalloption ein. So stellen wir sicher, dass Ihre Daten auch bei etwaigen politischen
                oder rechtlichen Veränderungen stets angemessen geschützt bleiben.
              </p>
              <p className={paragraphClassName}>
                Bei den einzelnen Diensteanbietern informieren wir Sie darüber, ob sie nach dem DPF zertifiziert sind
                und ob Standarddatenschutzklauseln vorliegen. Die Liste der zertifizierten Unternehmen sowie weitere
                Informationen zum DPF finden Sie auf der Website des US-Handelsministeriums unter{" "}
                <ExternalLink href="https://www.dataprivacyframework.gov/">https://www.dataprivacyframework.gov/</ExternalLink>{" "}
                (in englischer Sprache).
              </p>
              <p className={paragraphClassName}>
                Für Datenübermittlungen in andere Drittländer gelten entsprechende Sicherheitsmassnahmen,
                einschliesslich internationaler Verträge, spezifischer Garantien, von der EDÖB genehmigter
                Standarddatenschutzklauseln oder von der EDÖB oder einer zuständigen Datenschutzbehörde eines
                anderen Landes vorab anerkannter unternehmensinterner Datenschutzvorschriften.
              </p>
            </Section>

            <Section title="Allgemeine Informationen zur Datenspeicherung und Löschung">
              <p className={paragraphClassName}>
                Wir löschen personenbezogene Daten, die wir verarbeiten, gemäss den gesetzlichen Bestimmungen, sobald
                die zugrundeliegenden Einwilligungen widerrufen werden oder keine weiteren rechtlichen Grundlagen für
                die Verarbeitung bestehen. Dies betrifft Fälle, in denen der ursprüngliche Verarbeitungszweck
                entfällt oder die Daten nicht mehr benötigt werden. Ausnahmen von dieser Regelung bestehen, wenn
                gesetzliche Pflichten oder besondere Interessen eine längere Aufbewahrung oder Archivierung der Daten
                erfordern.
              </p>
              <p className={paragraphClassName}>
                Insbesondere müssen Daten, die aus handels- oder steürrechtlichen Gründen aufbewahrt werden müssen
                oder deren Speicherung notwendig ist zur Rechtsverfolgung oder zum Schutz der Rechte anderer natürlicher
                oder juristischer Personen, entsprechend archiviert werden.
              </p>
              <p className={paragraphClassName}>
                Unsere Datenschutzhinweise enthalten zusätzliche Informationen zur Aufbewahrung und Löschung von
                Daten, die speziell für bestimmte Verarbeitungsprozesse gelten.
              </p>
              <p className={paragraphClassName}>
                Bei mehreren Angaben zur Aufbewahrungsdaür oder Löschungsfristen eines Datums, ist stets die längste
                Frist massgeblich. Daten, die nicht mehr für den ursprünglich vorgesehenen Zweck, sondern aufgrund
                gesetzlicher Vorgaben oder anderer Gründe aufbewahrt werden, verarbeiten wir ausschliesslich zu den
                Gründen, die ihre Aufbewahrung rechtfertigen.
              </p>
              <div className="space-y-3">
                <h3 className={subTitleClassName}>Aufbewahrung und Löschung von Daten</h3>
                <p className={paragraphClassName}>
                  Die folgenden allgemeinen Fristen gelten für die Aufbewahrung und Archivierung nach dem Schweizer
                  Recht:
                </p>
                <ul className={listClassName}>
                  <li>
                    10 Jahre - Aufbewahrungsfrist für Bücher und Aufzeichnungen, Jahresabschlüsse, Inventare,
                    Lageberichte, Eröffnungsbilanzen, Buchungsbelege und Rechnungen sowie alle erforderlichen
                    Arbeitsanweisungen und sonstigen Organisationsunterlagen (Art. 958f des Schweizerischen
                    Obligationenrechts (OR)).
                  </li>
                  <li>
                    10 Jahre - Daten, die zur Berücksichtigung potenzieller Schadenersatzansprüche oder ähnlicher
                    vertraglicher Ansprüche und Rechte notwendig sind, sowie für die Bearbeitung damit verbundener
                    Anfragen, basierend auf früheren Geschäftserfahrungen und den üblichen Branchenpraktiken,
                    werden für den Zeitraum der gesetzlichen Verjährungsfrist von zehn Jahren gespeichert, es sei
                    denn, eine kürzere Frist von fünf Jahren ist massgeblich, die in bestimmten Fällen einschlägig
                    ist (Art. 127, 130 OR). Mit Ablauf von fünf Jahren verjähren die Forderungen für Miet-, Pacht-
                    und Kapitalzinse sowie andere periodische Leistungen, aus Lieferung von Lebensmitteln, für
                    Beköstigung und für Wirtsschulden, sowie aus Handwerksarbeit, Kleinverkauf von Waren, ärztlicher
                    Besorgung, Berufsarbeiten von Anwälten, Rechtsagenten, Prokuratoren und Notaren und aus dem
                    Arbeitsverhältnis von Arbeitnehmern (Art. 128 OR).
                  </li>
                </ul>
              </div>
            </Section>

            <Section title="Geschäftliche Leistungen">
              <p className={paragraphClassName}>
                Wir verarbeiten personenbezogene Daten unserer Vertrags- und Geschäftspartner, etwa Kunden,
                Auftraggeber, Interessenten, Lieferanten und sonstige Kooperationspartner (zusammenfassend
                „Vertragspartner"), zur Anbahnung, Durchführung und Abwicklung von Vertragsverhältnissen sowie
                vergleichbaren Rechtsverhältnissen. Dies umfasst auch vorvertragliche Massnahmen, die auf Anfrage
                erfolgen, sowie die Kommunikation im Zusammenhang mit dem jeweiligen Vertragsverhältnis.
              </p>
              <p className={paragraphClassName}>
                Die Verarbeitung dient insbesondere der Erfüllung unserer vertraglichen Haupt- und Nebenpflichten.
                Hierzu zählen die Erbringung der vereinbarten Leistungen, etwaige Aktualisierungs- und
                Informationspflichten, die Bearbeitung von Gewährleistungs- und sonstigen Leistungsstörungen, die
                Abwicklung von Widerrufen, Kündigungen von Daürschuldverhältnissen, Rückabwicklungen,
                Erstattungen sowie die Bearbeitung sonstiger vertragsbezogener Erklärungen und Anfragen. Erfasst sind
                sowohl einmalige Verträge als auch fortlaufende Vertragsbeziehungen.
              </p>
              <p className={paragraphClassName}>
                Verarbeitet werden insbesondere Stammdaten wie Name, Anschrift und ggf. Firma, Kontaktdaten wie
                E-Mail-Adresse und Telefonnummer, Vertrags- und Leistungsdaten wie Vertragsgegenstand,
                Vertragslaufzeit, Bestell- oder Vorgangsnummer, Nutzungs- und Leistungsdaten, Zahlungs- und
                Abrechnungsdaten sowie Kommunikationsinhalte und -historien. Soweit erforderlich, verarbeiten wir auch
                Daten, die uns im Rahmen der Durchführung eines Auftrags offengelegt oder übermittelt werden.
              </p>
              <p className={paragraphClassName}>
                Darüber hinaus verarbeiten wir die Daten zur Wahrung unserer Rechte sowie zur Erfüllung gesetzlicher
                Verpflichtungen. Dies umfasst insbesondere handels- und steürrechtliche Aufbewahrungspflichten,
                Dokumentationspflichten sowie gegebenenfalls Nachweis- und Rechenschaftspflichten. Zudem erfolgt eine
                Verarbeitung auf Grundlage unserer berechtigten Interessen an einer ordnungsgemässen Geschäftsführung,
                internen Verwaltung, Risikosteürung und IT-Sicherheit sowie am Schutz unseres Geschäftsbetriebs und
                unserer Vertragspartner vor Missbrauch, Gefährdung von Daten, Geheimnissen und sonstigen
                Rechtsgütern. Hierzu kann auch die Einbindung externer Dienstleister wie IT- und
                Telekommunikationsanbieter, Transport- und Logistikunternehmen, Zahlungsdienstleister, Banken, Steür-
                und Rechtsberater oder sonstige Erfüllungsgehilfen gehören, soweit dies für die Vertragsdurchführung
                oder zur Erfüllung gesetzlicher Pflichten erforderlich ist.
              </p>
              <p className={paragraphClassName}>
                Eine Weitergabe personenbezogener Daten an Dritte erfolgt ausschliesslich, soweit dies zur
                Vertragserfüllung, zur Durchführung vorvertraglicher Massnahmen, zur Wahrung berechtigter Interessen
                oder zur Erfüllung gesetzlicher Verpflichtungen erforderlich ist. Über darüberhinausgehende
                Verarbeitungen, insbesondere zu Marketingzwecken, informieren wir gesondert im Rahmen dieser
                Datenschutzerklärung.
              </p>
              <p className={paragraphClassName}>
                Welche Daten im Einzelfall erforderlich sind, teilen wir den Vertragspartnern im Rahmen der
                Datenerhebung mit, etwa in Onlineformularen durch entsprechende Kennzeichnung oder im persönlichen
                Kontakt.
              </p>
              <p className={paragraphClassName}>
                Die Löschung der Daten erfolgt, sobald sie für die vorgenannten Zwecke nicht mehr erforderlich sind und
                keine gesetzlichen Aufbewahrungspflichten entgegenstehen. Gesetzliche Aufbewahrungsfristen,
                insbesondere nach Handels- und Steürrecht, können eine längere Speicherung erfordern. Daten, die im
                Rahmen eines konkreten Auftrags übermittelt wurden, löschen wir nach Abschluss des Auftrags und Ablauf
                etwaiger Aufbewahrungsfristen, sofern keine weiteren gesetzlichen oder vertraglichen Verpflichtungen zur
                Speicherung bestehen.
              </p>
              <p className={paragraphClassName}>
                Rechtsgrundlage der Verarbeitung ist Art. 6 Abs. 1 lit. b DSGVO zur Durchführung vorvertraglicher
                Massnahmen und zur Erfüllung des jeweiligen Vertragsverhältnisses sowie Art. 6 Abs. 1 lit. c DSGVO zur
                Erfüllung gesetzlicher Verpflichtungen. Soweit die Verarbeitung auf berechtigten Interessen beruht,
                erfolgt sie auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Soweit die Verarbeitung auf Art. 6 Abs. 1 lit.
                f DSGVO gestützt wird, erfolgt sie zur Wahrung unserer berechtigten Interessen an einer ordnungsgemässen
                und effizienten Geschäftsorganisation, der internen Verwaltung und Dokumentation von Geschäftsvorgängen,
                der Durchsetzung und Verteidigung von Rechtsansprüchen, der Sicherstellung der IT- und Datensicherheit,
                der Verhinderung von Missbrauch und Betrug sowie der wirtschaftlichen Steürung und Weiterentwicklung
                unseres Geschäftsbetriebs. Diese Interessen bestehen insbesondere in der Gewährleistung eines sicheren
                und rechtssicheren Geschäftsbetriebs sowie in der Wahrung unserer unternehmerischen Handlungsfähigkeit.
              </p>
              <ul className={listClassName}>
                <li>
                  <strong>Verarbeitete Datenarten:</strong> Bestandsdaten (z. B. der vollständige Name, Wohnadresse,
                  Kontaktinformationen, Kundennummer, etc.); Zahlungsdaten (z. B. Bankverbindungen, Rechnungen,
                  Zahlungshistorie); Kontaktdaten (z. B. Post- und E-Mail-Adressen oder Telefonnummern). Vertragsdaten
                  (z. B. Vertragsgegenstand, Laufzeit, Kundenkategorie).
                </li>
                <li>
                  <strong>Betroffene Personen:</strong> Leistungsempfänger und Auftraggeber; Interessenten.
                  Geschäfts- und Vertragspartner.
                </li>
                <li>
                  <strong>Zwecke der Verarbeitung und berechtigte Interessen:</strong> Erbringung vertraglicher
                  Leistungen und Erfüllung vertraglicher Pflichten; Kommunikation; Büro- und Organisationsverfahren;
                  Organisations- und Verwaltungsverfahren. Geschäftsprozesse und betriebswirtschaftliche Verfahren.
                </li>
                <li>
                  <strong>Aufbewahrung und Löschung:</strong> Löschung entsprechend Angaben im Abschnitt
                  &quot;Allgemeine Informationen zur Datenspeicherung und Löschung&quot;.
                </li>
              </ul>

              <div className="space-y-3">
                <h3 className={subTitleClassName}>Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten</h3>
                <ul className={listClassName}>
                  <li>
                    <strong>Makler- und Vermittlungsleistungen:</strong> Wir verarbeiten die Daten unserer Auftraggeber
                    und betroffenen Personen entsprechend dem zugrundeliegenden Auftrag. Wir können ferner die Angaben
                    zu den Eigenschaften und Umständen von Personen oder ihnen gehörenden Sachen verarbeiten, wenn dies
                    zum Gegenstand unseres Auftrags gehört. Dies können z. B. Angaben zu persönlichen
                    Lebensumständen, mobilen oder immobilen Sachgütern und der finanziellen Situation sein.
                    <br />
                    Sofern für die Vertragserfüllung oder gesetzlich erforderlich bzw. durch die Auftraggeber bewilligt
                    oder auf Grundlage auf unserer berechtigten Interessen basierend, offenbaren oder übermitteln wir
                    die Daten der Kunden im Rahmen von Deckungsanfragen, Abschlüssen und der Abwicklung von Verträgen
                    an Anbieter der vermittelten Leistungen, wie z. B. Gutachter und Experten. <strong>Rechtsgrundlagen:</strong>{" "}
                    Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO).
                  </li>
                </ul>
              </div>
            </Section>

            <Section title="Geschäftsprozesse und -verfahren">
              <p className={paragraphClassName}>
                Personenbezogene Daten von Leistungsempfängern und Auftraggebern - darunter Kunden, Klienten oder in
                speziellen Fällen Mandanten, Patienten oder Geschäftspartner sowie weitere Dritte - werden im Rahmen
                vertraglicher sowie vergleichbarer Rechtsverhältnisse und vorvertraglicher Massnahmen wie der Anbahnung
                von Geschäftsbeziehungen verarbeitet. Diese Datenverarbeitung unterstützt und erleichtert
                betriebswirtschaftliche Abläufe in Bereichen wie Kundenmanagement, Vertrieb, Zahlungsverkehr,
                Buchhaltung und Projektmanagement.
              </p>
              <p className={paragraphClassName}>
                Die erfassten Daten dienen dazu, vertragliche Verpflichtungen zu erfüllen und betriebliche Prozesse
                effizient zu gestalten. Hierzu gehört die Abwicklung von Geschäftstransaktionen, das Management von
                Kundenbeziehungen, die Optimierung von Vertriebsstrategien sowie die Gewährleistung interner Rechnungs-
                und Finanzprozesse. Zusätzlich unterstützen die Daten die Wahrung der Rechte des Verantwortlichen und
                fördern Verwaltungsaufgaben sowie die Organisation des Unternehmens.
              </p>
              <p className={paragraphClassName}>
                Personenbezogene Daten können an Dritte weitergegeben werden, sofern dies zur Erfüllung der genannten
                Zwecke oder gesetzlicher Verpflichtungen notwendig ist. Nach Ablauf gesetzlicher Aufbewahrungsfristen
                oder wenn der Zweck der Verarbeitung entfällt, werden die Daten gelöscht. Dies umfasst auch Daten,
                die aufgrund von steürrechtlichen und gesetzlichen Nachweispflichten länger gespeichert werden müssen.
              </p>
              <ul className={listClassName}>
                <li>
                  <strong>Verarbeitete Datenarten:</strong> Bestandsdaten (z. B. der vollständige Name, Wohnadresse,
                  Kontaktinformationen, Kundennummer, etc.); Zahlungsdaten (z. B. Bankverbindungen, Rechnungen,
                  Zahlungshistorie); Kontaktdaten (z. B. Post- und E-Mail-Adressen oder Telefonnummern); Inhaltsdaten
                  (z. B. textliche oder bildliche Nachrichten und Beiträge sowie die sie betreffenden Informationen,
                  wie z. B. Angaben zur Autorenschaft oder Zeitpunkt der Erstellung); Vertragsdaten (z. B.
                  Vertragsgegenstand, Laufzeit, Kundenkategorie); Nutzungsdaten (z. B. Seitenaufrufe und Verweildaür,
                  Klickpfade, Nutzungsintensität und -freqünz, verwendete Gerätetypen und Betriebssysteme,
                  Interaktionen mit Inhalten und Funktionen); Meta-, Kommunikations- und Verfahrensdaten (z. B.
                  IP-Adressen, Zeitangaben, Identifikationsnummern, beteiligte Personen); Protokolldaten (z. B.
                  Logfiles betreffend Logins oder den Abruf von Daten oder Zugriffszeiten.). Beschäftigtendaten
                  (Informationen zu Mitarbeitern und anderen Personen in einem Beschäftigungsverhältnis).
                </li>
                <li>
                  <strong>Betroffene Personen:</strong> Leistungsempfänger und Auftraggeber; Interessenten;
                  Kommunikationspartner; Geschäfts- und Vertragspartner; Kunden; Dritte Personen; Mandanten.
                  Beschäftigte (z. B. Angestellte, Bewerber, Aushilfskräfte und sonstige Mitarbeiter).
                </li>
                <li>
                  <strong>Zwecke der Verarbeitung und berechtigte Interessen:</strong> Erbringung vertraglicher
                  Leistungen und Erfüllung vertraglicher Pflichten; Büro- und Organisationsverfahren;
                  Geschäftsprozesse und betriebswirtschaftliche Verfahren; Sicherheitsmassnahmen; Bereitstellung unseres
                  Onlineangebotes und Nutzerfreundlichkeit; Kommunikation; Finanz- und Zahlungsmanagement;
                  Informationstechnische Infrastruktur (Betrieb und Bereitstellung von Informationssystemen und
                  technischen Geräten (Computer, Server etc.)); Marketing. Absatzförderung.
                </li>
                <li>
                  <strong>Aufbewahrung und Löschung:</strong> Löschung entsprechend Angaben im Abschnitt
                  &quot;Allgemeine Informationen zur Datenspeicherung und Löschung&quot;.
                </li>
              </ul>

              <div className="space-y-3">
                <h3 className={subTitleClassName}>Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten</h3>
                <ul className={listClassName}>
                  <li>
                    <strong>Mandantenverwaltung:</strong> Verfahren, die im Rahmen der Mandantenverwaltung erforderlich
                    sind, umfassen z. B. die Akquise und Aufnahme neür Mandanten, die Entwicklung von Strategien zur
                    Förderung der Mandantenbindung sowie die Sicherstellung effektiver Mandantenkommunikation und
                    Terminvereinbarung. Es wird ein umfassender Mandantenservice bereitgestellt. Diese Verfahren
                    beinhalten auch die Führung und Verwaltung von Mandantenakten, die sichere Dokumentation rechtlicher
                    Vorgänge und die Gewährleistung der Vertraulichkeit und Integrität von Mandantendaten. Zudem
                    werden Prozesse definiert für die Weitergabe von Mandanteninformationen an Dritte, wie beispielsweise
                    Gerichte oder andere Rechtsdienstleister. Es sind Verfahren implementiert zur sicheren und
                    datenschutzkonformen Löschung von Mandantendaten, sobald diese nicht mehr benötigt werden oder
                    gesetzliche Aufbewahrungsfristen abgelaufen sind; <strong>Rechtsgrundlagen:</strong>
                    Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO), Rechtliche
                    Verpflichtung (Art. 6 Abs. 1 S. 1 lit. c) DSGVO), Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f)
                    DSGVO).
                  </li>
                  <li>
                    <strong>Kontaktverwaltung und Kontaktpflege:</strong> Verfahren, die im Rahmen der Organisation,
                    Pflege und Sicherung von Kontaktinformationen erforderlich sind (z. B. die Einrichtung und Wartung
                    einer zentralen Kontaktdatenbank, regelmäßige Aktualisierungen der Kontaktinformationen,
                    Überwachung der Datenintegrität, Implementierung von Datenschutzmassnahmen, Sicherstellung der
                    Zugriffskontrollen, Durchführung von Backups und Wiederherstellungen der Kontaktdaten, Schulung von
                    Mitarbeitern im effektiven Umgang mit Kontaktmanagement-Software, regelmäßige Überprüfung der
                    Kommunikationshistorie und Anpassung der Kontaktstrategien); <strong>Rechtsgrundlagen:</strong>
                    Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO), Berechtigte
                    Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).
                  </li>
                  <li>
                    <strong>Kundenkonto:</strong> Kunden können innerhalb unseres Onlineangebotes ein Konto anlegen
                    (z. B. Kunden- bzw. Nutzerkonto, kurz &quot;Kundenkonto"). Falls die Registrierung eines Kundenkontos
                    erforderlich ist, werden Kunden hierauf ebenso hingewiesen wie auf die für die Registrierung
                    erforderlichen Angaben. Die Kundenkonten sind nicht öffentlich und können von Suchmaschinen nicht
                    indexiert werden. Im Rahmen der Registrierung sowie anschliessender Anmeldungen und Nutzungen des
                    Kundenkontos speichern wir die IP-Adressen der Kunden nebst den Zugriffszeitpunkten, um die
                    Registrierung nachweisen und etwaigem Missbrauch des Kundenkontos vorbeugen zu können. Wurde das
                    Kundenkonto gekündigt, werden die Daten des Kundenkontos nach dem Kündigungszeitpunkt gelöscht,
                    sofern sie nicht für andere Zwecke als die Bereitstellung im Kundenkonto aufbewahrt werden oder aus
                    rechtlichen Gründen aufbewahrt werden müssen (z. B. interne Speicherung von Kundendaten,
                    Bestellvorgängen oder Rechnungen). Es liegt in der Verantwortung der Kunden, ihre Daten bei
                    Kündigung des Kundenkontos zu sichern; <strong>Rechtsgrundlagen:</strong> Vertragserfüllung und
                    vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO), Berechtigte Interessen (Art. 6 Abs. 1
                    S. 1 lit. f) DSGVO).
                  </li>
                  <li>
                    <strong>Allgemeiner Zahlungsverkehr:</strong> Verfahren, die bei der Durchführung von
                    Zahlungsvorgängen, der Überwachung von Bankkonten und der Kontrolle von Zahlungsströmen
                    erforderlich sind (z. B. Erstellung und Prüfung von Überweisungen, Abwicklung des
                    Lastschriftverkehrs, Kontrolle von Kontoauszügen, Überwachung von Zahlungseingängen und
                    -ausgängen, Rücklastschriftmanagement, Kontenabstimmung, Cash-Management); <strong>Rechtsgrundlagen:</strong>
                    Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO), Berechtigte
                    Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).
                  </li>
                  <li>
                    <strong>Buchhaltung, Kreditorenbuchhaltung, Debitorenbuchhaltung:</strong> Verfahren, die bei der
                    Erfassung, Bearbeitung und Kontrolle von Geschäftsvorgängen im Bereich der Kreditoren- und
                    Debitorenbuchhaltung erforderlich sind (z. B. Erstellung und Prüfung von eingehenden und
                    ausgehenden Rechnungen, Überwachung und Verwaltung von offenen Posten, Durchführung des
                    Zahlungsverkehrs, Abwicklung des Mahnwesens, Kontenabstimmung im Rahmen von Forderungen und
                    Verbindlichkeiten, Kreditorenbuchhaltung und Debitorenbuchhaltung); <strong>Rechtsgrundlagen:</strong>
                    Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO), Rechtliche
                    Verpflichtung (Art. 6 Abs. 1 S. 1 lit. c) DSGVO), Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f)
                    DSGVO).
                  </li>
                  <li>
                    <strong>Finanzbuchhaltung und Steürn:</strong> Verfahren, die bei der Erfassung, Verwaltung und
                    Kontrolle von finanzrelevanten Geschäftsvorfällen sowie bei der Berechnung, Meldung und Zahlung
                    von Steürn erforderlich sind (z. B. Kontierung und Verbuchung von Geschäftsvorfällen, Erstellung
                    von Quartals- und Jahresabschlüssen, Durchführung des Zahlungsverkehrs, Abwicklung des Mahnwesens,
                    Kontenabstimmung, steürliche Beratung, Erstellung und Einreichung von Steürerklärungen,
                    Abwicklung des Steürwesens); <strong>Rechtsgrundlagen:</strong> Vertragserfüllung und
                    vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO), Rechtliche Verpflichtung (Art. 6 Abs. 1
                    S. 1 lit. c) DSGVO), Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).
                  </li>
                  <li>
                    <strong>Vertrieb:</strong> Verfahren, die bei der Planung, Durchführung und Kontrolle von Massnahmen
                    zur Vermarktung und zum Verkauf von Produkten oder Dienstleistungen erforderlich sind (z. B.
                    Kundenakquise, Angebotserstellung und -verfolgung, Auftragsabwicklung, Kundenberatung und
                    -betreuung, Verkaufsförderung, Produktschulungen, Vertriebscontrolling und -analyse, Management von
                    Vertriebskanälen); <strong>Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche
                    Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO), Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f)
                    DSGVO).
                  </li>
                </ul>
              </div>
            </Section>

            <Section title="Im Rahmen der Geschäftstätigkeit eingesetzte Anbieter und Services">
              <p className={paragraphClassName}>
                Im Rahmen unserer Geschäftstätigkeit nutzen wir unter Beachtung der gesetzlichen Vorgaben zusätzliche
                Dienste, Plattformen, Schnittstellen oder Plug-ins von Drittanbietern (kurz &quot;Dienste"). Deren Nutzung
                beruht auf unseren Interessen an einer ordnungsgemässen, rechtmäßigen und wirtschaftlichen Führung
                unseres Geschäftsbetriebs und unserer internen Organisation.
              </p>
              <ul className={listClassName}>
                <li>
                  <strong>Verarbeitete Datenarten:</strong> Bestandsdaten (z. B. der vollständige Name, Wohnadresse,
                  Kontaktinformationen, Kundennummer, etc.); Zahlungsdaten (z. B. Bankverbindungen, Rechnungen,
                  Zahlungshistorie); Kontaktdaten (z. B. Post- und E-Mail-Adressen oder Telefonnummern); Inhaltsdaten
                  (z. B. textliche oder bildliche Nachrichten und Beiträge sowie die sie betreffenden Informationen,
                  wie z. B. Angaben zur Autorenschaft oder Zeitpunkt der Erstellung); Vertragsdaten (z. B.
                  Vertragsgegenstand, Laufzeit, Kundenkategorie); Nutzungsdaten (z. B. Seitenaufrufe und Verweildaür,
                  Klickpfade, Nutzungsintensität und -freqünz, verwendete Gerätetypen und Betriebssysteme,
                  Interaktionen mit Inhalten und Funktionen). Meta-, Kommunikations- und Verfahrensdaten (z. B.
                  IP-Adressen, Zeitangaben, Identifikationsnummern, beteiligte Personen).
                </li>
                <li>
                  <strong>Betroffene Personen:</strong> Leistungsempfänger und Auftraggeber; Interessenten.
                  Geschäfts- und Vertragspartner.
                </li>
                <li>
                  <strong>Zwecke der Verarbeitung und berechtigte Interessen:</strong> Erbringung vertraglicher
                  Leistungen und Erfüllung vertraglicher Pflichten; Büro- und Organisationsverfahren.
                  Geschäftsprozesse und betriebswirtschaftliche Verfahren.
                </li>
                <li>
                  <strong>Aufbewahrung und Löschung:</strong> Löschung entsprechend Angaben im Abschnitt
                  &quot;Allgemeine Informationen zur Datenspeicherung und Löschung&quot;.
                </li>
              </ul>
              <div className="space-y-3">
                <h3 className={subTitleClassName}>Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten</h3>
                <ul className={listClassName}>
                  <li>
                    <strong>Bexio:</strong> Verwaltung von Kunden- und Lieferantendaten, Angebotserstellung,
                    Rechnungsstellung, Buchhaltung (Erfassung und Verwaltung von Geschäftsvorfällen),
                    Lohnbuchhaltung (Abrechnung von Gehältern), Zahlungsabwicklung (Überwachung von Zahlungsein- und
                    -ausgängen), Lagerverwaltung (Bestandsführung von Waren), Aufgaben- und Projektmanagement;
                    <strong> Dienstanbieter:</strong> bexio AG, Alte Jonastrasse 24, 8640 rapperswil, Schweiz;
                    <strong> Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO);
                    <strong> Website:</strong> <ExternalLink href="https://www.bexio.com/">https://www.bexio.com/</ExternalLink>;
                    <strong> Datenschutzerklärung:</strong>{" "}
                    <ExternalLink href="https://www.bexio.com/de-CH/richtlinien/datenschutz">
                      https://www.bexio.com/de-CH/richtlinien/datenschutz
                    </ExternalLink>
                    . <strong>Auftragsverarbeitungsvertrag:</strong>{" "}
                    <ExternalLink href="https://cdn.www.bexio.com/assets/content/documents/legal/auftragsverarbeitung_DE.pdf">
                      https://cdn.www.bexio.com/assets/content/documents/legal/auftragsverarbeitung_DE.pdf
                    </ExternalLink>
                    .
                  </li>
                </ul>
              </div>
            </Section>

            <Section title="Bereitstellung des Onlineangebots und Webhosting">
              <p className={paragraphClassName}>
                Wir verarbeiten die Daten der Nutzer, um ihnen unsere Online-Dienste zur Verfügung stellen zu können.
                Zu diesem Zweck verarbeiten wir die IP-Adresse des Nutzers, die notwendig ist, um die Inhalte und
                Funktionen unserer Online-Dienste an den Browser oder das Endgerät der Nutzer zu übermitteln.
              </p>
              <ul className={listClassName}>
                <li>
                  <strong>Verarbeitete Datenarten:</strong> Nutzungsdaten (z. B. Seitenaufrufe und Verweildaür,
                  Klickpfade, Nutzungsintensität und -freqünz, verwendete Gerätetypen und Betriebssysteme,
                  Interaktionen mit Inhalten und Funktionen); Meta-, Kommunikations- und Verfahrensdaten (z. B.
                  IP-Adressen, Zeitangaben, Identifikationsnummern, beteiligte Personen). Protokolldaten (z. B.
                  Logfiles betreffend Logins oder den Abruf von Daten oder Zugriffszeiten.).
                </li>
                <li>
                  <strong>Betroffene Personen:</strong> Nutzer (z. B. Webseitenbesucher, Nutzer von Onlinediensten).
                </li>
                <li>
                  <strong>Zwecke der Verarbeitung und berechtigte Interessen:</strong> Bereitstellung unseres
                  Onlineangebotes und Nutzerfreundlichkeit. Informationstechnische Infrastruktur (Betrieb und
                  Bereitstellung von Informationssystemen und technischen Geräten (Computer, Server etc.)).
                </li>
                <li>
                  <strong>Aufbewahrung und Löschung:</strong> Löschung entsprechend Angaben im Abschnitt
                  &quot;Allgemeine Informationen zur Datenspeicherung und Löschung&quot;.
                </li>
              </ul>
              <div className="space-y-3">
                <h3 className={subTitleClassName}>Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten</h3>
                <ul className={listClassName}>
                  <li>
                    <strong>Bereitstellung Onlineangebot auf gemietetem Speicherplatz:</strong> Für die Bereitstellung
                    unseres Onlineangebotes nutzen wir Speicherplatz, Rechenkapazität und Software, die wir von einem
                    entsprechenden Serveranbieter (auch &quot;Webhoster&quot; genannt) mieten oder anderweitig beziehen;
                    <strong> Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).
                  </li>
                </ul>
              </div>
            </Section>

            <Section title="Verarbeitung von Daten im Rahmen der Applikation (App)">
              <p className={paragraphClassName}>
                Wir verarbeiten die Daten der Nutzer unserer Applikation, soweit diese erforderlich sind, um den Nutzern
                die Applikation sowie deren Funktionalitäten bereitstellen, deren Sicherheit überwachen und sie
                weiterentwickeln zu können. Wir können ferner Nutzer unter Beachtung der gesetzlichen Vorgaben
                kontaktieren, sofern die Kommunikation zu Zwecken der Administration oder Nutzung der Applikation
                erforderlich ist. Im Übrigen verweisen wir im Hinblick auf die Verarbeitung der Daten der Nutzer auf die
                Datenschutzhinweise in dieser Datenschutzerklärung.
              </p>
              <p className={paragraphClassName}>
                <strong>Rechtsgrundlagen:</strong> Die Verarbeitung von Daten, die für die Bereitstellung der
                Funktionalitäten der Applikation erforderlich ist, dient der Erfüllung von vertraglichen Pflichten.
                Dies gilt auch, wenn die Bereitstellung der Funktionen eine Berechtigung der Nutzer (z. B. Freigaben von
                Gerätefunktionen) voraussetzt. Sofern die Verarbeitung von Daten für die Bereitstellung der
                Funktionalitäten der Applikation nicht erforderlich ist, aber der Sicherheit der Applikation oder
                unseren betriebswirtschaftlichen Interessen dient (z. B. Erhebung von Daten zu Zwecken der Optimierung
                der Applikation oder Sicherheitszwecken), erfolgt sie auf Grundlage unserer berechtigten Interessen.
                Sofern Nutzer ausdrücklich deren Einwilligung in die Verarbeitung ihrer Daten gebeten werden, erfolgt
                die Verarbeitung der von der Einwilligung umfassten Daten auf Grundlage der Einwilligung.
              </p>
              <ul className={listClassName}>
                <li>
                  <strong>Verarbeitete Datenarten:</strong> Bestandsdaten (z. B. der vollständige Name, Wohnadresse,
                  Kontaktinformationen, Kundennummer, etc.); Nutzungsdaten (z. B. Seitenaufrufe und Verweildaür,
                  Klickpfade, Nutzungsintensität und -freqünz, verwendete Gerätetypen und Betriebssysteme,
                  Interaktionen mit Inhalten und Funktionen); Meta-, Kommunikations- und Verfahrensdaten (z. B.
                  IP-Adressen, Zeitangaben, Identifikationsnummern, beteiligte Personen); Zahlungsdaten (z. B.
                  Bankverbindungen, Rechnungen, Zahlungshistorie); Vertragsdaten (z. B. Vertragsgegenstand, Laufzeit,
                  Kundenkategorie). Standortdaten (Angaben zur geografischen Position eines Gerätes oder einer Person).
                </li>
                <li>
                  <strong>Betroffene Personen:</strong> Nutzer (z. B. Webseitenbesucher, Nutzer von Onlinediensten).
                </li>
                <li>
                  <strong>Zwecke der Verarbeitung und berechtigte Interessen:</strong> Erbringung vertraglicher
                  Leistungen und Erfüllung vertraglicher Pflichten; Sicherheitsmassnahmen. Bereitstellung unseres
                  Onlineangebotes und Nutzerfreundlichkeit.
                </li>
                <li>
                  <strong>Aufbewahrung und Löschung:</strong> Löschung entsprechend Angaben im Abschnitt
                  &quot;Allgemeine Informationen zur Datenspeicherung und Löschung&quot;.
                </li>
              </ul>
              <div className="space-y-3">
                <h3 className={subTitleClassName}>Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten</h3>
                <ul className={listClassName}>
                  <li>
                    <strong>Kommerzielle Nutzung:</strong> Wir verarbeiten die Daten der Nutzer unserer Applikation,
                    angemeldeter und etwaiger Testnutzer (nachfolgend einheitlich als &quot;Nutzer&quot; bezeichnet), um ihnen
                    gegenüber unsere vertraglichen Leistungen erbringen zu können sowie auf Grundlage berechtigter
                    Interessen, um die Sicherheit unserer Applikation gewährleisten und sie weiterzüntwickeln zu
                    können. Die erforderlichen Angaben sind als solche im Rahmen des Nutzungs-, Auftrags-, Bestell-
                    bzw. vergleichbaren Vertragsschlusses gekennzeichnet und können die zur Leistungserbringung und zur
                    etwaigen Abrechnung benötigten Angaben sowie Kontaktinformationen, um etwaige Rücksprachen halten
                    zu können, umfassen; <strong>Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche
                    Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO).
                  </li>
                  <li>
                    <strong>Speicherung eines universellen und eindeutigen Identifikators (UUID):</strong> Die
                    Applikation speichert für Zwecke der Analyse der Nutzung und Funktionsfähigkeit der Applikation
                    sowie der Speicherung der Einstellungen der Nutzer einen so genannten universellen und eindeutigen
                    Identifikator (englisch &quot;Universally Uniqü Identifier&quot;, UUID). Dieser Identifikator wird bei der
                    Installation dieser Anwendung generiert (ist jedoch nicht mit dem Gerät verbunden, also keine
                    Gerätekennung in diesem Sinne), bleibt zwischen dem Start der Applikation sowie ihrer
                    Aktualisierungen gespeichert und wird gelöscht wenn Nutzer die Applikation von ihrem Gerät
                    entfernen.
                  </li>
                  <li>
                    <strong>Verarbeitung von gespeicherten Kontakten:</strong> Im Rahmen der Nutzung unserer Applikation
                    werden die in dem Kontaktverzeichnis des Gerätes gespeicherten Kontaktinformationen von Personen
                    (Name, E-Mail-Adresse, Telefonnummer) verarbeitet. Die Nutzung der Kontaktinformationen setzt eine
                    Berechtigung der Nutzer, die jederzeit widerrufen werden kann, voraus. Die Nutzung der
                    Kontaktinformationen dient jeweils nur der Bereitstellung der jeweiligen Funktionalität unserer
                    Applikation, entsprechend ihrer Beschreibung gegenüber den Nutzern, bzw. ihrer typischen und
                    erwartbaren Funktionsweise. Die Nutzer werden darauf hingewiesen, dass die Erlaubnis der Verarbeitung
                    der Kontaktinformationen erlaubt sein muss und insbesondere bei natürlichen Personen deren
                    Einverständnisses oder einer gesetzlichen Erlaubnis bedarf.
                  </li>
                  <li>
                    <strong>Nutzung von Kontaktdaten zu Zwecken des Kontaktabgleichs:</strong> Die im Kontaktverzeichnis
                    des Gerätes gespeicherten Daten von Kontakten können genutzt werden, um zu prüfen, ob diese
                    Kontakte auch unsere Applikation nutzen. Zu diesem Zweck werden die Kontaktdaten der jeweiligen
                    Kontakte (zu denen die Telefonnummer und E-Mailadresse sowie die Namen gehören) auf unseren Server
                    hochgeladen und nur für den Zweck des Abgleichs verwendet.
                  </li>
                  <li>
                    <strong>Verarbeitung von Standortdaten:</strong> Im Rahmen der Nutzung unserer Applikation werden die
                    von dem verwendeten Gerät erhobenen oder sonst durch die Nutzer eingegebenen Standortdaten
                    verarbeitet. Die Nutzung der Standortdaten setzt eine Berechtigung der Nutzer, die jederzeit
                    widerrufen werden kann, voraus. Die Nutzung der Standortdaten dient jeweils nur der Bereitstellung der
                    jeweiligen Funktionalität unserer Applikation, entsprechend ihrer Beschreibung gegenüber den
                    Nutzern, bzw. ihrer typischen und erwartbaren Funktionsweise.
                  </li>
                </ul>
              </div>
            </Section>

            <Section title="Registrierung, Anmeldung und Nutzerkonto">
              <p className={paragraphClassName}>
                Nutzer können ein Nutzerkonto anlegen. Im Rahmen der Registrierung werden den Nutzern die erforderlichen
                Pflichtangaben mitgeteilt und zu Zwecken der Bereitstellung des Nutzerkontos auf Grundlage vertraglicher
                Pflichterfüllung verarbeitet. Zu den verarbeiteten Daten gehören insbesondere die Login-Informationen
                (Nutzername, Passwort sowie eine E-Mail-Adresse).
              </p>
              <p className={paragraphClassName}>
                Im Rahmen der Inanspruchnahme unserer Registrierungs- und Anmeldefunktionen sowie der Nutzung des
                Nutzerkontos speichern wir die IP-Adresse und den Zeitpunkt der jeweiligen Nutzerhandlung. Die
                Speicherung erfolgt auf Grundlage unserer berechtigten Interessen als auch jener der Nutzer an einem
                Schutz vor Missbrauch und sonstiger unbefugter Nutzung. Eine Weitergabe dieser Daten an Dritte erfolgt
                grundsätzlich nicht, es sei denn, sie ist zur Verfolgung unserer Ansprüche erforderlich oder es besteht
                eine gesetzliche Verpflichtung hierzu.
              </p>
              <p className={paragraphClassName}>
                Die Nutzer können über Vorgänge, die für deren Nutzerkonto relevant sind, wie z. B. technische
                Änderungen, per E-Mail informiert werden.
              </p>
              <ul className={listClassName}>
                <li>
                  <strong>Verarbeitete Datenarten:</strong> Bestandsdaten (z. B. der vollständige Name, Wohnadresse,
                  Kontaktinformationen, Kundennummer, etc.); Kontaktdaten (z. B. Post- und E-Mail-Adressen oder
                  Telefonnummern); Inhaltsdaten (z. B. textliche oder bildliche Nachrichten und Beiträge sowie die sie
                  betreffenden Informationen, wie z. B. Angaben zur Autorenschaft oder Zeitpunkt der Erstellung);
                  Nutzungsdaten (z. B. Seitenaufrufe und Verweildaür, Klickpfade, Nutzungsintensität und -freqünz,
                  verwendete Gerätetypen und Betriebssysteme, Interaktionen mit Inhalten und Funktionen).
                  Protokolldaten (z. B. Logfiles betreffend Logins oder den Abruf von Daten oder Zugriffszeiten.).
                </li>
                <li>
                  <strong>Betroffene Personen:</strong> Nutzer (z. B. Webseitenbesucher, Nutzer von Onlinediensten).
                </li>
                <li>
                  <strong>Zwecke der Verarbeitung und berechtigte Interessen:</strong> Erbringung vertraglicher
                  Leistungen und Erfüllung vertraglicher Pflichten; Sicherheitsmassnahmen; Organisations- und
                  Verwaltungsverfahren. Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.
                </li>
                <li>
                  <strong>Aufbewahrung und Löschung:</strong> Löschung entsprechend Angaben im Abschnitt
                  &quot;Allgemeine Informationen zur Datenspeicherung und Löschung&quot;. Löschung nach Kündigung.
                </li>
              </ul>
              <div className="space-y-3">
                <h3 className={subTitleClassName}>Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten</h3>
                <ul className={listClassName}>
                  <li>
                    <strong>Registrierung mit Klarnamen:</strong> Aufgrund der Natur unserer Community bitten wir die
                    Nutzer unser Angebot nur unter Verwendung von Klarnamen zu nutzen. D. h. die Nutzung von
                    Pseudonymen ist nicht zuläßig; <strong>Rechtsgrundlagen:</strong> Vertragserfüllung und
                    vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO).
                  </li>
                  <li>
                    <strong>Profile der Nutzer sind nicht öffentlich:</strong> Die Profile der Nutzer sind öffentlich
                    nicht sichtbar und nicht zugänglich.
                  </li>
                  <li>
                    <strong>Zwei-Faktor-Authentifizierung:</strong> Die Zwei-Faktor-Authentifizierung bietet eine
                    zusätzliche Sicherheitsebene für Ihr Benutzerkonto und stellt sicher, dass nur Sie auf Ihr Konto
                    zugreifen können, auch, wenn jemand anderes Ihr Passwort kennt. Zu diesem Zweck müssen Sie
                    zusätzlich zu Ihrem Passwort eine weitere Authentifizierungsmassnahme durchführen (z. B. einen an
                    ein mobiles Gerät gesandten Code eingeben). Wir werden Sie über das von uns eingesetzte Verfahren
                    informieren; <strong>Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche Anfragen
                    (Art. 6 Abs. 1 S. 1 lit. b) DSGVO).
                  </li>
                </ul>
              </div>
            </Section>

            <Section title="Kontakt- und Anfrageverwaltung">
              <p className={paragraphClassName}>
                Bei der Kontaktaufnahme mit uns (z. B. per Post, Kontaktformular, E-Mail, Telefon oder via soziale
                Medien) sowie im Rahmen bestehender Nutzer- und Geschäftsbeziehungen werden die Angaben der anfragenden
                Personen verarbeitet, soweit dies zur Beantwortung der Kontaktanfragen und etwaiger angefragter
                Massnahmen erforderlich ist.
              </p>
              <ul className={listClassName}>
                <li>
                  <strong>Verarbeitete Datenarten:</strong> Kontaktdaten (z. B. Post- und E-Mail-Adressen oder
                  Telefonnummern); Inhaltsdaten (z. B. textliche oder bildliche Nachrichten und Beiträge sowie die sie
                  betreffenden Informationen, wie z. B. Angaben zur Autorenschaft oder Zeitpunkt der Erstellung).
                  Meta-, Kommunikations- und Verfahrensdaten (z. B. IP-Adressen, Zeitangaben, Identifikationsnummern,
                  beteiligte Personen).
                </li>
                <li>
                  <strong>Betroffene Personen:</strong> Kommunikationspartner.
                </li>
                <li>
                  <strong>Zwecke der Verarbeitung und berechtigte Interessen:</strong> Kommunikation; Organisations- und
                  Verwaltungsverfahren; Feedback (z. B. Sammeln von Feedback via Online-Formular). Bereitstellung
                  unseres Onlineangebotes und Nutzerfreundlichkeit.
                </li>
                <li>
                  <strong>Aufbewahrung und Löschung:</strong> Löschung entsprechend Angaben im Abschnitt
                  &quot;Allgemeine Informationen zur Datenspeicherung und Löschung&quot;.
                </li>
              </ul>
              <div className="space-y-3">
                <h3 className={subTitleClassName}>Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten</h3>
                <ul className={listClassName}>
                  <li>
                    <strong>Kontaktformular:</strong> Bei Kontaktaufnahme über unser Kontaktformular, per E-Mail oder
                    anderen Kommunikationswegen, verarbeiten wir die uns übermittelten personenbezogenen Daten zur
                    Beantwortung und Bearbeitung des jeweiligen Anliegens. Dies umfasst in der Regel Angaben wie Name,
                    Kontaktinformationen und gegebenenfalls weitere Informationen, die uns mitgeteilt werden und zur
                    angemessenen Bearbeitung erforderlich sind. Wir nutzen diese Daten ausschliesslich für den
                    angegebenen Zweck der Kontaktaufnahme und Kommunikation; <strong>Rechtsgrundlagen:</strong>
                    Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO), Berechtigte
                    Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).
                  </li>
                </ul>
              </div>
            </Section>

            <Section title="Videokonferenzen, Onlinemeetings, Webinare und Bildschirm-Sharing">
              <p className={paragraphClassName}>
                Wir setzen Plattformen und Anwendungen anderer Anbieter (nachfolgend bezeichnet als
                &quot;Konferenzplattformen&quot;) zu Zwecken der Durchführung von Video- und Audio-Konferenzen, Webinaren und
                sonstigen Arten von Video und Audio-Meetings (nachfolgend zusammenfassend bezeichnet als &quot;Konferenz&quot;)
                ein. Bei der Auswahl der Konferenzplattformen und ihrer Leistungen beachten wir die gesetzlichen
                Vorgaben.
              </p>
              <p className={paragraphClassName}>
                <strong>Durch Konferenzplattformen verarbeitete Daten:</strong> Im Rahmen der Teilnahme an einer
                Konferenz verarbeiten die Konferenzplattformen die im Folgenden genannten personenbezogene Daten der
                Teilnehmer. Der Umfang der Verarbeitung hängt zum einen davon ab, welche Daten im Rahmen einer
                konkreten Konferenz gefordert werden (z. B. Angabe von Zugangsdaten oder Klarnamen) und welche
                optionalen Angaben durch die Teilnehmer getätigt werden. Neben der Verarbeitung zur Durchführung der
                Konferenz, können die Daten der Teilnehmer durch die Konferenzplattformen ebenfalls zu
                Sicherheitszwecken oder Serviceoptimierung verarbeitet werden. Zu den verarbeiteten Daten gehören Daten
                zur Person (Vorname, Nachname), Kontaktinformationen (E-Mail-Adresse, Telefonnummer), Zugangsdaten
                (Zugangscodes oder Passwörter), Profilbilder, Angaben zur beruflichen Stellung/Funktion, die IP-Adresse
                des Internetzugangs, Angaben zu den Endgeräten der Teilnehmer, deren Betriebssystem, dem Browser und
                dessen technischen und sprachlichen Einstellungen, Informationen zu den inhaltlichen
                Kommunikationsvorgängen, d. h. Eingaben in Chats sowie Audio- und Videodaten, als auch die Nutzung
                anderer zur Verfügung stehender Funktionen (z. B. Umfragen). Inhalte der Kommunikationen werden in dem
                durch die Konferenzanbieter technisch bereitgestellten Umfang verschlüsselt. Wenn die Teilnehmer bei
                den Konferenzplattformen als Benutzer registriert sind, dann können weitere Daten entsprechend der
                Vereinbarung mit dem jeweiligen Konferenzanbieter verarbeitet werden.
              </p>
              <p className={paragraphClassName}>
                <strong>Protokollierung und Aufnahmen:</strong> Falls Texteingaben, Teilnahmeergebnisse (z. B. von
                Umfragen) sowie Video- oder Audioaufnahmen protokolliert werden, wird dies den Teilnehmern im Vorwege
                transparent mitgeteilt und sie werden - soweit erforderlich - um eine Zustimmung gebeten.
              </p>
              <p className={paragraphClassName}>
                <strong>Datenschutzmassnahmen der Teilnehmer:</strong> Bitte beachten Sie zu den Details der Verarbeitung
                Ihrer Daten durch die Konferenzplattformen deren Datenschutzhinweise und wählen im Rahmen der
                Einstellungen der Konferenzplattformen, die für Sie optimalen Sicherheits- und Datenschutzeinstellungen.
                Bitte sorgen Sie ferner für die Daür einer Videokonferenz für den Daten- und Persönlichkeitsschutz im
                Hintergrund Ihrer Aufnahme (z. B. durch Hinweise an Mitbewohner, Abschliessen von Türen und Nutzung,
                soweit technisch möglich, der Funktion zur Unkenntlichmachung des Hintergrunds). Links zu den
                Konferenzräumen sowie Zugangsdaten, dürfen nicht an unberechtigte Dritte weitergegeben werden.
              </p>
              <p className={paragraphClassName}>
                <strong>Hinweise zu Rechtsgrundlagen:</strong> Sofern neben den Konferenzplattformen auch wir die Daten
                der Nutzer verarbeiten und die Nutzer um deren Einwilligung in den Einsatz der Konferenzplattformen
                oder bestimmter Funktionen bitten (z. B. Einverständnis mit einer Aufzeichnung von Konferenzen), ist
                die Rechtsgrundlage der Verarbeitung diese Einwilligung. Ferner kann unsere Verarbeitung zur Erfüllung
                unserer vertraglichen Pflichten erforderlich sein (z. B. in Teilnehmerlisten, im Fall von Aufarbeitung
                von Gesprächsergebnissen, etc.). Im Übrigen werden die Daten der Nutzer auf Grundlage unserer
                berechtigten Interessen an einer effizienten und sicheren Kommunikation mit unseren
                Kommunikationspartnern verarbeitet.
              </p>
              <ul className={listClassName}>
                <li>
                  <strong>Verarbeitete Datenarten:</strong> Bestandsdaten (z. B. der vollständige Name, Wohnadresse,
                  Kontaktinformationen, Kundennummer, etc.); Kontaktdaten (z. B. Post- und E-Mail-Adressen oder
                  Telefonnummern); Inhaltsdaten (z. B. textliche oder bildliche Nachrichten und Beiträge sowie die sie
                  betreffenden Informationen, wie z. B. Angaben zur Autorenschaft oder Zeitpunkt der Erstellung);
                  Nutzungsdaten (z. B. Seitenaufrufe und Verweildaür, Klickpfade, Nutzungsintensität und -freqünz,
                  verwendete Gerätetypen und Betriebssysteme, Interaktionen mit Inhalten und Funktionen); Bild- und/
                  oder Videoaufnahmen (z. B. Fotografien oder Videoaufnahmen einer Person); Tonaufnahmen.
                  Protokolldaten (z. B. Logfiles betreffend Logins oder den Abruf von Daten oder Zugriffszeiten.).
                </li>
                <li>
                  <strong>Betroffene Personen:</strong> Kommunikationspartner; Nutzer (z. B. Webseitenbesucher, Nutzer
                  von Onlinediensten). Abgebildete Personen.
                </li>
                <li>
                  <strong>Zwecke der Verarbeitung und berechtigte Interessen:</strong> Erbringung vertraglicher
                  Leistungen und Erfüllung vertraglicher Pflichten; Kommunikation. Büro- und Organisationsverfahren.
                </li>
                <li>
                  <strong>Aufbewahrung und Löschung:</strong> Löschung entsprechend Angaben im Abschnitt
                  &quot;Allgemeine Informationen zur Datenspeicherung und Löschung&quot;.
                </li>
              </ul>
              <div className="space-y-3">
                <h3 className={subTitleClassName}>Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten</h3>
                <ul className={listClassName}>
                  <li>
                    <strong>Microsoft Teams:</strong> Nutzung zur Durchführung von Online-Veranstaltungen,
                    -Konferenzen sowie Kommunikation mit internen und externen Teilnehmern. Eingesetzt werden
                    Sprachübertragung, Direktnachrichten, Gruppenkommunikation und Kollaborationsfunktionen;
                    verarbeitet werden Name, geschäftliche Kontaktdaten, Arbeitsprofil, Teilnahme sowie Inhalte
                    (Audio/Video, Sprache, Chat, Dateien, Sprachtranskription) zu Zwecken und aus Interesse an
                    Effizienz- und Produktivitätssteigerungen, Kosteneffizienz, Flexibilität, Mobilität,
                    verbesserter Kommunikation, IT-Sicherheit, Nutzung einer zentralen Plattform sowie
                    Geschäftsabwicklung von Microsoft. Audiosignale werden grundsätzlich nicht gespeichert, ausser bei
                    aktivierter Aufzeichnung. Meeting- und Konferenzaufzeichnungen werden standardmäßig 90 Tage
                    gespeichert, es sei denn, eine andere Daür wird festgelegt. Chat- und Dateiinhalte werden nach den
                    vom Administrator oder Nutzer bestimmten Richtlinien gespeichert; voreingestellt ist keine
                    automatische Löschung. Kanäle müssen alle 180 Tage erneürt werden, ansonsten werden Inhalte
                    gelöscht. Zusätzlich werden systemgenerierte Protokoll-, Diagnose- und Metadaten verarbeitet sowie
                    Diagnosedaten zur Produktstabilität, Sicherheit und Verbesserung erhoben; <strong>Dienstanbieter:</strong>
                    Microsoft Ireland Operations Limited, One Microsoft Place, South County Business Park, Leopardstown,
                    Dublin 18, D18 P521, Irland; Microsoft Corporation, One Microsoft Way, Redmond, WA 98052-6399, USA;
                    <strong> Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO);
                    <strong> Website:</strong>{" "}
                    <ExternalLink href="https://www.microsoft.com/de-de/microsoft-teams/">
                      https://www.microsoft.com/de-de/microsoft-teams/
                    </ExternalLink>
                    ; <strong>Datenschutzerklärung:</strong>{" "}
                    <ExternalLink href="https://privacy.microsoft.com/de-de/privacystatement">
                      https://privacy.microsoft.com/de-de/privacystatement
                    </ExternalLink>
                    , <strong>Sicherheitshinweise:</strong>{" "}
                    <ExternalLink href="https://www.microsoft.com/de-de/trustcenter">
                      https://www.microsoft.com/de-de/trustcenter
                    </ExternalLink>
                    . <strong>Grundlage Drittlandtransfers:</strong> Data Privacy Framework (DPF), Standardvertragsklauseln.
                  </li>
                </ul>
              </div>
            </Section>

            <Section title="Cloud-Dienste">
              <p className={paragraphClassName}>
                Wir nutzen über das Internet zugängliche und auf den Servern ihrer Anbieter ausgeführte
                Softwaredienste (sogenannte &quot;Cloud-Dienste&quot;, auch bezeichnet als &quot;Software as a Service&quot;) für die
                Speicherung und Verwaltung von Inhalten (z. B. Dokumentenspeicherung und -verwaltung, Austausch von
                Dokumenten, Inhalten und Informationen mit bestimmten Empfängern oder Veröffentlichung von Inhalten
                und Informationen).
              </p>
              <p className={paragraphClassName}>
                In diesem Rahmen können personenbezogenen Daten verarbeitet und auf den Servern der Anbieter gespeichert
                werden, soweit diese Bestandteil von Kommunikationsvorgängen mit uns sind oder von uns sonst, wie im
                Rahmen dieser Datenschutzerklärung dargelegt, verarbeitet werden. Zu diesen Daten können insbesondere
                Stammdaten und Kontaktdaten der Nutzer, Daten zu Vorgängen, Verträgen, sonstigen Prozessen und deren
                Inhalte gehören. Die Anbieter der Cloud-Dienste verarbeiten ferner Nutzungsdaten und Metadaten, die von
                ihnen zu Sicherheitszwecken und zur Serviceoptimierung verwendet werden.
              </p>
              <p className={paragraphClassName}>
                Sofern wir mit Hilfe der Cloud-Dienste für andere Nutzer oder öffentlich zugängliche Webseiten
                Formulare o.a. Dokumente und Inhalte bereitstellen, können die Anbieter Cookies auf den Geräten der
                Nutzer für Zwecke der Webanalyse oder, um sich Einstellungen der Nutzer (z. B. im Fall der
                Mediensteürung) zu merken, speichern.
              </p>
              <ul className={listClassName}>
                <li>
                  <strong>Verarbeitete Datenarten:</strong> Bestandsdaten (z. B. der vollständige Name, Wohnadresse,
                  Kontaktinformationen, Kundennummer, etc.); Kontaktdaten (z. B. Post- und E-Mail-Adressen oder
                  Telefonnummern); Inhaltsdaten (z. B. textliche oder bildliche Nachrichten und Beiträge sowie die sie
                  betreffenden Informationen, wie z. B. Angaben zur Autorenschaft oder Zeitpunkt der Erstellung);
                  Nutzungsdaten (z. B. Seitenaufrufe und Verweildaür, Klickpfade, Nutzungsintensität und -freqünz,
                  verwendete Gerätetypen und Betriebssysteme, Interaktionen mit Inhalten und Funktionen). Meta-,
                  Kommunikations- und Verfahrensdaten (z. B. IP-Adressen, Zeitangaben, Identifikationsnummern,
                  beteiligte Personen).
                </li>
                <li>
                  <strong>Betroffene Personen:</strong> Interessenten; Kommunikationspartner; Geschäfts- und
                  Vertragspartner. Nutzer (z. B. Webseitenbesucher, Nutzer von Onlinediensten).
                </li>
                <li>
                  <strong>Zwecke der Verarbeitung und berechtigte Interessen:</strong> Büro- und Organisationsverfahren;
                  Informationstechnische Infrastruktur (Betrieb und Bereitstellung von Informationssystemen und
                  technischen Geräten (Computer, Server etc.)). Bereitstellung unseres Onlineangebotes und
                  Nutzerfreundlichkeit.
                </li>
                <li>
                  <strong>Aufbewahrung und Löschung:</strong> Löschung entsprechend Angaben im Abschnitt
                  &quot;Allgemeine Informationen zur Datenspeicherung und Löschung&quot;.
                </li>
              </ul>
              <div className="space-y-3">
                <h3 className={subTitleClassName}>Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten</h3>
                <ul className={listClassName}>
                  <li>
                    <strong>Microsoft 365 und Microsoft Clouddienste:</strong> Bereitstellung von Anwendungen, Schutz
                    von Daten und IT-Systemen sowie Nutzung systemgenerierter Protokoll-, Diagnose- und Metadaten zur
                    Vertragsdurchführung durch Microsoft. Verarbeitet werden Kontaktdaten (Name, E-Mail-Adresse),
                    Inhaltsdaten (Dateien, Kommentare, Profile), Software-Setup- und Inventardaten,
                    Gerätekonnektivitäts- und Konfigurationsdaten, Arbeitsinteraktionen (Badge Swipe) sowie Protokoll-
                    und Metadaten. Die Verarbeitung erfolgt zu Zwecken der Effizienz- und Produktivitätssteigerungen,
                    Kosteneffizienz, Flexibilität, Mobilität, verbesserter Kommunikation, Integration von
                    Microsoft-Diensten, IT-Sicherheit und Geschäftsabwicklung von Microsoft. Die Aufbewahrung von Daten
                    richtet sich nach den jeweiligen Dokumenten und Unternehmensrichtlinien, beim Defender (Schutz von
                    Daten und IT-Systemen) bis zu 12 Monate, beim Druckmanagement 10 Tage. Zusätzlich werden
                    Diagnosedaten zur Produktstabilität und Verbesserung erhoben; <strong>Dienstanbieter:</strong>
                    Microsoft Ireland Operations Limited, One Microsoft Place, South County Business Park, Leopardstown,
                    Dublin 18, D18 P521, Irland; Microsoft Corporation, One Microsoft Way, Redmond, WA 98052-6399, USA;
                    <strong> Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO);
                    <strong> Website:</strong>{" "}
                    <ExternalLink href="https://microsoft.com/de-de">https://microsoft.com/de-de</ExternalLink>;
                    <strong> Datenschutzerklärung:</strong>{" "}
                    <ExternalLink href="https://privacy.microsoft.com/de-de/privacystatement">
                      https://privacy.microsoft.com/de-de/privacystatement
                    </ExternalLink>
                    , <strong>Sicherheitshinweise:</strong>{" "}
                    <ExternalLink href="https://www.microsoft.com/de-de/trustcenter">
                      https://www.microsoft.com/de-de/trustcenter
                    </ExternalLink>
                    ; <strong>Auftragsverarbeitungsvertrag:</strong>{" "}
                    <ExternalLink href="https://www.microsoft.com/licensing/docs/view/Microsoft-Products-and-Services-Data-Protection-Addendum-DPA">
                      https://www.microsoft.com/licensing/docs/view/Microsoft-Products-and-Services-Data-Protection-Addendum-DPA
                    </ExternalLink>
                    . <strong>Grundlage Drittlandtransfers:</strong> Data Privacy Framework (DPF), Standardvertragsklauseln.
                  </li>
                  <li>
                    <strong>Microsoft Azure:</strong> Leistungen auf dem Gebiet der Bereitstellung von
                    informationstechnischer Infrastruktur und verbundenen Dienstleistungen (z. B. Speicherplatz und/oder
                    Rechenkapazitäten); <strong>Dienstanbieter:</strong> Microsoft Irland Operations Limited, One
                    Microsoft Place, South County Business Park, Leopardstown, Dublin 18, D18 P521, Irland;
                    <strong> Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO);
                    <strong> Website:</strong>{" "}
                    <ExternalLink href="https://azure.microsoft.com">https://azure.microsoft.com</ExternalLink>;
                    <strong> Datenschutzerklärung:</strong>{" "}
                    <ExternalLink href="https://privacy.microsoft.com/de-de/privacystatement">
                      https://privacy.microsoft.com/de-de/privacystatement
                    </ExternalLink>
                    ; <strong>Auftragsverarbeitungsvertrag:</strong>{" "}
                    <ExternalLink href="https://azure.microsoft.com/de-de/support/legal/">
                      https://azure.microsoft.com/de-de/support/legal/
                    </ExternalLink>
                    . <strong>Grundlage Drittlandtransfers:</strong> Data Privacy Framework (DPF), Standardvertragsklauseln
                    (<ExternalLink href="https://azure.microsoft.com/en-us/support/legal/">https://azure.microsoft.com/en-us/support/legal/</ExternalLink>).
                  </li>
                </ul>
              </div>
            </Section>

            <Section title="Werbliche Kommunikation via E-Mail, Post, Fax oder Telefon">
              <p className={paragraphClassName}>
                Wir verarbeiten personenbezogene Daten zu Zwecken der werblichen Kommunikation, die über diverse
                Kanäle, wie z. B. E-Mail, Telefon, Post oder Fax, entsprechend den gesetzlichen Vorgaben erfolgen kann.
              </p>
              <p className={paragraphClassName}>
                Die Empfänger haben das Recht, erteilte Einwilligungen jederzeit zu widerrufen oder der werblichen
                Kommunikation jederzeit kostenlos über die oben genannten Kontaktmöglichkeit zu widersprechen.
              </p>
              <p className={paragraphClassName}>
                Nach Widerruf oder Widerspruch speichern wir die zum Nachweis der bisherigen Berechtigung erforderlichen
                Daten zur Kontaktaufnahme oder Zusendung bis zu drei Jahre nach Ablauf des Jahres des Widerrufs oder
                Widerspruchs auf der Grundlage unserer berechtigten Interessen. Die Verarbeitung dieser Daten ist auf den
                Zweck einer möglichen Abwehr von Ansprüchen beschränkt. Auf der Grundlage des berechtigten Interesses,
                den Widerruf bzw. Widerspruch der Nutzer daürhaft zu beachten, speichern wir ferner die zur Vermeidung
                einer erneuten Kontaktaufnahme erforderlichen Daten (z. B. je nach Kommunikationskanal die
                E-Mail-Adresse, Telefonnummer, Name).
              </p>
              <ul className={listClassName}>
                <li>
                  <strong>Verarbeitete Datenarten:</strong> Bestandsdaten (z. B. der vollständige Name, Wohnadresse,
                  Kontaktinformationen, Kundennummer, etc.); Kontaktdaten (z. B. Post- und E-Mail-Adressen oder
                  Telefonnummern). Inhaltsdaten (z. B. textliche oder bildliche Nachrichten und Beiträge sowie die sie
                  betreffenden Informationen, wie z. B. Angaben zur Autorenschaft oder Zeitpunkt der Erstellung).
                </li>
                <li>
                  <strong>Betroffene Personen:</strong> Kommunikationspartner.
                </li>
                <li>
                  <strong>Zwecke der Verarbeitung und berechtigte Interessen:</strong> Direktmarketing (z. B. per E-Mail
                  oder postalisch); Marketing. Absatzförderung.
                </li>
                <li>
                  <strong>Aufbewahrung und Löschung:</strong> Löschung entsprechend Angaben im Abschnitt
                  &quot;Allgemeine Informationen zur Datenspeicherung und Löschung&quot;.
                </li>
              </ul>
            </Section>

            <Section title="Präsenzen in sozialen Netzwerken (Social Media)">
              <p className={paragraphClassName}>
                Wir unterhalten Onlinepräsenzen innerhalb sozialer Netzwerke und verarbeiten in diesem Rahmen
                Nutzerdaten, um mit den dort aktiven Nutzern zu kommunizieren oder Informationen über uns anzubieten.
              </p>
              <p className={paragraphClassName}>
                Wir weisen darauf hin, dass dabei Nutzerdaten ausserhalb des Raumes der Europäischen Union verarbeitet
                werden können. Hierdurch können sich für die Nutzer Risiken ergeben, weil so zum Beispiel die
                Durchsetzung der Nutzerrechte erschwert werden könnte.
              </p>
              <p className={paragraphClassName}>
                Ferner werden die Daten der Nutzer innerhalb sozialer Netzwerke im Regelfall für Marktforschungs- und
                Werbezwecke verarbeitet. So können beispielsweise anhand des Nutzungsverhaltens und sich daraus
                ergebender Interessen der Nutzer Nutzungsprofile erstellt werden. Letztere finden möglicherweise
                wiederum Verwendung, um etwa Werbeanzeigen innerhalb und ausserhalb der Netzwerke zu schalten, die
                mutmasslich den Interessen der Nutzer entsprechen. Daher werden im Regelfall Cookies auf den Rechnern
                der Nutzer gespeichert, in denen das Nutzungsverhalten und die Interessen der Nutzer gespeichert werden.
                Zudem können in den Nutzungsprofilen auch Daten unabhängig der von den Nutzern verwendeten Geräten
                gespeichert werden (insbesondere, wenn sie Mitglieder der jeweiligen Plattformen und dort eingeloggt
                sind).
              </p>
              <p className={paragraphClassName}>
                Für eine detaillierte Darstellung der jeweiligen Verarbeitungsformen und der Widerspruchsmöglichkeiten
                (Opt-out) verweisen wir auf die Datenschutzerklärungen und Angaben der Betreiber der jeweiligen
                Netzwerke.
              </p>
              <p className={paragraphClassName}>
                Auch im Fall von Auskunftsanfragen und der Geltendmachung von Betroffenenrechten weisen wir darauf hin,
                dass diese am effektivsten bei den Anbietern geltend gemacht werden können. Nur Letztere haben jeweils
                Zugriff auf die Nutzerdaten und können direkt entsprechende Massnahmen ergreifen und Auskünfte geben.
                Sollten Sie dennoch Hilfe benötigen, dann können Sie sich an uns wenden.
              </p>
              <ul className={listClassName}>
                <li>
                  <strong>Verarbeitete Datenarten:</strong> Kontaktdaten (z. B. Post- und E-Mail-Adressen oder
                  Telefonnummern); Inhaltsdaten (z. B. textliche oder bildliche Nachrichten und Beiträge sowie die sie
                  betreffenden Informationen, wie z. B. Angaben zur Autorenschaft oder Zeitpunkt der Erstellung).
                  Nutzungsdaten (z. B. Seitenaufrufe und Verweildaür, Klickpfade, Nutzungsintensität und -freqünz,
                  verwendete Gerätetypen und Betriebssysteme, Interaktionen mit Inhalten und Funktionen).
                </li>
                <li>
                  <strong>Betroffene Personen:</strong> Nutzer (z. B. Webseitenbesucher, Nutzer von Onlinediensten).
                </li>
                <li>
                  <strong>Zwecke der Verarbeitung und berechtigte Interessen:</strong> Kommunikation; Feedback (z. B.
                  Sammeln von Feedback via Online-Formular). Öffentlichkeitsarbeit.
                </li>
                <li>
                  <strong>Aufbewahrung und Löschung:</strong> Löschung entsprechend Angaben im Abschnitt
                  &quot;Allgemeine Informationen zur Datenspeicherung und Löschung&quot;.
                </li>
              </ul>
              <div className="space-y-3">
                <h3 className={subTitleClassName}>Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten</h3>
                <ul className={listClassName}>
                  <li>
                    <strong>LinkedIn:</strong> Soziales Netzwerk - Wir sind gemeinsam mit LinkedIn Irland Unlimited
                    Company für die Erhebung (jedoch nicht die weitere Verarbeitung) von Daten der Besucher
                    verantwortlich, die zur Erstellung der „Page-Insights&quot; (Statistiken) unserer LinkedIn-Profile
                    genutzt werden. Zu diesen Daten gehören Informationen über die Arten von Inhalten, die Nutzer sich
                    ansehen oder mit denen sie interagieren, sowie die von ihnen vorgenommenen Handlungen. Ausserdem
                    werden Details über die genutzten Geräte erfasst, wie z. B. IP-Adressen, Betriebssystem,
                    Browsertyp, Spracheinstellungen und Cookie-Daten, sowie Angaben aus den Nutzerprofilen, wie
                    Berufsfunktion, Land, Branche, Hierarchieebene, Unternehmensgrösse und Beschäftigungsstatus.
                    Datenschutzinformationen zur Verarbeitung von Nutzerdaten durch LinkedIn können den
                    Datenschutzhinweisen von LinkedIn entnommen werden:{" "}
                    <ExternalLink href="https://www.linkedin.com/legal/privacy-policy">
                      https://www.linkedin.com/legal/privacy-policy
                    </ExternalLink>
                    .
                    <br />
                    Wir haben mit LinkedIn Irland eine spezielle Vereinbarung geschlossen (&quot;Page Insights Joint
                    Controller Addendum&quot;,{" "}
                    <ExternalLink href="https://legal.linkedin.com/pages-joint-controller-addendum">
                      https://legal.linkedin.com/pages-joint-controller-addendum
                    </ExternalLink>
                    ), in der insbesondere geregelt wird, welche Sicherheitsmassnahmen LinkedIn beachten muss und in der
                    LinkedIn sich bereit erklärt hat, die Rechte der Betroffenen zu erfüllen (d. h. Nutzer können z.
                    B. Auskunfts- oder Löschungsanfragen direkt an LinkedIn richten). Die Rechte der Nutzer
                    (insbesondere das Recht auf Auskunft, Löschung, Widerspruch und Beschwerde bei der zuständigen
                    Aufsichtsbehörde) werden durch die Vereinbarungen mit LinkedIn nicht eingeschränkt. Die gemeinsame
                    Verantwortlichkeit beschränkt sich auf die Erhebung und Übermittlung der Daten an LinkedIn Irland
                    Unlimited Company, ein Unternehmen mit Sitz in der EU. Die weitere Verarbeitung der Daten obliegt
                    ausschliesslich LinkedIn Irland Unlimited Company, insbesondere was die Übermittlung der Daten an
                    die Muttergesellschaft LinkedIn Corporation in den USA betrifft; <strong>Dienstanbieter:</strong>
                    LinkedIn Ireland Unlimited Company, Wilton Plaza, Dublin 2, Irland; <strong>Rechtsgrundlagen:</strong>
                    Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO); <strong>Website:</strong>{" "}
                    <ExternalLink href="https://www.linkedin.com">https://www.linkedin.com</ExternalLink>;
                    <strong> Datenschutzerklärung:</strong>{" "}
                    <ExternalLink href="https://www.linkedin.com/legal/privacy-policy">
                      https://www.linkedin.com/legal/privacy-policy
                    </ExternalLink>
                    ; <strong>Grundlage Drittlandtransfers:</strong> Data Privacy Framework (DPF),
                    Standardvertragsklauseln ({" "}
                    <ExternalLink href="https://legal.linkedin.com/dpa">https://legal.linkedin.com/dpa</ExternalLink>
                    ). <strong>Widerspruchsmöglichkeit (Opt-Out):</strong>{" "}
                    <ExternalLink href="https://www.linkedin.com/psettings/güst-controls/retargeting-opt-out">
                      https://www.linkedin.com/psettings/güst-controls/retargeting-opt-out
                    </ExternalLink>
                    .
                  </li>
                </ul>
              </div>
            </Section>

            <Section title="Management, Organisation und Hilfswerkzeuge">
              <p className={paragraphClassName}>
                Wir setzen Dienstleistungen, Plattformen und Software anderer Anbieter (nachfolgend bezeichnet als
                &quot;Drittanbieter&quot;) zu Zwecken der Organisation, Verwaltung, Planung sowie Erbringung unserer Leistungen
                ein. Bei der Auswahl der Drittanbieter und ihrer Leistungen beachten wir die gesetzlichen Vorgaben.
              </p>
              <p className={paragraphClassName}>
                In diesem Rahmen können personenbezogenen Daten verarbeitet und auf den Servern der Drittanbieter
                gespeichert werden. Hiervon können diverse Daten betroffen sein, die wir entsprechend dieser
                Datenschutzerklärung verarbeiten. Zu diesen Daten können insbesondere Stammdaten und Kontaktdaten der
                Nutzer, Daten zu Vorgängen, Verträgen, sonstigen Prozessen und deren Inhalte gehören.
              </p>
              <p className={paragraphClassName}>
                Sofern Nutzer im Rahmen der Kommunikation, von Geschäfts- oder anderen Beziehungen mit uns auf die
                Drittanbieter bzw. deren Software oder Plattformen verwiesen werden, können die Drittanbieter
                Nutzungsdaten und Metadaten zu Sicherheitszwecken, zur Serviceoptimierung oder zu Marketingzwecken
                verarbeiten. Wir bitten daher darum, die Datenschutzhinweise der jeweiligen Drittanbieter zu beachten.
              </p>
              <ul className={listClassName}>
                <li>
                  <strong>Verarbeitete Datenarten:</strong> Inhaltsdaten (z. B. textliche oder bildliche Nachrichten
                  und Beiträge sowie die sie betreffenden Informationen, wie z. B. Angaben zur Autorenschaft oder
                  Zeitpunkt der Erstellung); Nutzungsdaten (z. B. Seitenaufrufe und Verweildaür, Klickpfade,
                  Nutzungsintensität und -freqünz, verwendete Gerätetypen und Betriebssysteme, Interaktionen mit
                  Inhalten und Funktionen). Meta-, Kommunikations- und Verfahrensdaten (z. B. IP-Adressen,
                  Zeitangaben, Identifikationsnummern, beteiligte Personen).
                </li>
                <li>
                  <strong>Betroffene Personen:</strong> Kommunikationspartner. Nutzer (z. B. Webseitenbesucher, Nutzer
                  von Onlinediensten).
                </li>
                <li>
                  <strong>Zwecke der Verarbeitung und berechtigte Interessen:</strong> Erbringung vertraglicher
                  Leistungen und Erfüllung vertraglicher Pflichten. Büro- und Organisationsverfahren.
                </li>
                <li>
                  <strong>Aufbewahrung und Löschung:</strong> Löschung entsprechend Angaben im Abschnitt
                  &quot;Allgemeine Informationen zur Datenspeicherung und Löschung&quot;.
                </li>
              </ul>
            </Section>

            <Section title="Verarbeitung von Daten im Rahmen von Beschäftigungsverhältnissen">
              <p className={paragraphClassName}>
                Im Rahmen von Beschäftigungsverhältnissen erfolgt die Verarbeitung personenbezogener Daten mit dem
                Ziel, die Begründung, Durchführung und Beendigung solcher Verhältnisse effektiv zu gestalten. Diese
                Datenverarbeitung unterstützt diverse betriebliche und administrative Funktionen, die für das
                Management der Mitarbeiterbeziehungen erforderlich sind.
              </p>
              <p className={paragraphClassName}>
                Dabei umfasst die Datenverarbeitung verschiedene Aspekte, die von der Vertragsanbahnung bis zur
                Vertragsauflösung reichen. Eingeschlossen sind die Organisation und Verwaltung der täglichen
                Arbeitszeiten, die Verwaltung von Zugriffsrechten und Berechtigungen sowie die Handhabung von
                Personalentwicklungsmassnahmen und Mitarbeitergesprächen. Die Verarbeitung dient auch der Abrechnung
                und der Verwaltung von Lohn- und Gehaltszahlungen, die kritische Aspekte der Vertragsdurchführung
                darstellen.
              </p>
              <p className={paragraphClassName}>
                Zusätzlich berücksichtigt die Datenverarbeitung berechtigte Interessen des verantwortlichen
                Arbeitgebers, wie die Sicherstellung der Sicherheit am Arbeitsplatz oder das Erfassen von Leistungsdaten
                zur Bewertung und Optimierung betrieblicher Prozesse. Ferner beinhaltet die Datenverarbeitung die
                Bekanntgabe von Beschäftigtendaten im Rahmen von externen Kommunikations- und Publikationsprozessen, wo
                dies für betriebliche oder rechtliche Zwecke erforderlich ist.
              </p>
              <p className={paragraphClassName}>
                Die Verarbeitung dieser Daten erfolgt stets unter Beachtung der geltenden rechtlichen
                Rahmenbedingungen, wobei das Ziel stets die Schaffung und Aufrechterhaltung eines fairen und effizienten
                Arbeitsumfelds ist. Dies umfasst auch die Berücksichtigung des Datenschutzes der betroffenen
                Beschäftigten, die Anonymisierung oder Löschung von Daten nach Erfüllung des Verarbeitungszwecks oder
                gemäss gesetzlicher Aufbewahrungsfristen.
              </p>
              <ul className={listClassName}>
                <li>
                  <strong>Verarbeitete Datenarten:</strong> Beschäftigtendaten (Informationen zu Mitarbeitern und
                  anderen Personen in einem Beschäftigungsverhältnis).
                </li>
                <li>
                  <strong>Betroffene Personen:</strong> Beschäftigte (z. B. Angestellte, Bewerber, Aushilfskräfte und
                  sonstige Mitarbeiter).
                </li>
                <li>
                  <strong>Zwecke der Verarbeitung und berechtigte Interessen:</strong> Begründung und Durchführung von
                  Beschäftigungsverhältnissen (Verarbeitung von Arbeitnehmerdaten im Rahmen der Begründung und
                  Durchführung von Beschäftigungsverhältnissen). Geschäftsprozesse und betriebswirtschaftliche
                  Verfahren.
                </li>
              </ul>
            </Section>

            <Section title="Bewerbungsverfahren">
              <p className={paragraphClassName}>
                Das Bewerbungsverfahren setzt voraus, dass Bewerber uns die für deren Beurteilung und Auswahl
                erforderlichen Daten mitteilen. Welche Informationen erforderlich sind, ergibt sich aus der
                Stellenbeschreibung oder im Fall von Onlineformularen aus den dortigen Angaben.
              </p>
              <p className={paragraphClassName}>
                Grundsätzlich gehören zu den erforderlichen Angaben, die Informationen zur Person, wie der Name, die
                Adresse, eine Kontaktmöglichkeit sowie die Nachweise über die für eine Stelle notwendigen
                Qualifikationen. Auf Anfragen teilen wir zusätzlich gerne mit, welche Angaben benötigt werden.
              </p>
              <p className={paragraphClassName}>
                Sofern verfügbar, können Bewerber ihre Bewerbungen gerne über unser Onlineformular einreichen,
                welches nach dem neüsten Stand der Technik verschlüsselt ist. Alternativ ist es auch möglich,
                Bewerbungen per E-Mail an uns zu senden. Wir möchten Sie jedoch darauf hinweisen, dass E-Mails im
                Internet grundsätzlich nicht verschlüsselt versendet werden. Obwohl E-Mails auf dem Transportweg in
                der Regel verschlüsselt werden, erfolgt dies nicht auf den Servern, von denen sie gesendet und
                empfangen werden. Daher können wir keine Verantwortung für die Sicherheit der Bewerbung auf ihrem
                Übertragungsweg zwischen dem Absender und unserem Server übernehmen.
              </p>
              <p className={paragraphClassName}>
                Für Zwecke der Bewerbersuche, Einreichung von Bewerbungen und Auswahl von Bewerbern können wir unter
                Beachtung der gesetzlichen Vorgaben, Bewerbermanagement-, bzw. Recruitment-Software und Plattformen und
                Leistungen von Drittanbietern in Anspruch nehmen.
              </p>
              <p className={paragraphClassName}>
                Bewerber können uns gerne zur Art der Einreichung der Bewerbung kontaktieren oder uns die Bewerbung auf
                dem Postweg zuzusenden.
              </p>
              <p className={paragraphClassName}>
                <strong>Verarbeitung besonderer Kategorien von Daten:</strong> Soweit im Rahmen des Bewerbungsverfahrens
                besondere Kategorien von personenbezogenen Daten (Art. 9 Abs. 1 DSGVO, z. B. Gesundheitsdaten, wie z.
                B. Schwerbehinderteneigenschaft oder ethnische Herkunft) bei Bewerbern angefragt oder von diesen
                mitgeteilt werden, erfolgt deren Verarbeitung damit der Verantwortliche oder die betroffene Person die
                ihm bzw. ihr aus dem Arbeitsrecht und dem Recht der sozialen Sicherheit und des Sozialschutzes
                erwachsenden Rechte ausüben und seinen bzw. ihren diesbezüglichen Pflichten nachkommen kann, im Fall
                des Schutzes lebenswichtiger Interessen der Bewerber oder anderer Personen oder für Zwecke der
                Gesundheitsvorsorge oder der Arbeitsmedizin, für die Beurteilung der Arbeitsfähigkeit des
                Beschäftigten, für die medizinische Diagnostik, für die Versorgung oder Behandlung im Gesundheits-
                oder Sozialbereich oder für die Verwaltung von Systemen und Diensten im Gesundheits- oder Sozialbereich.
              </p>
              <p className={paragraphClassName}>
                <strong>Löschung von Daten:</strong> Die von den Bewerbern zur Verfügung gestellten Daten können im
                Fall einer erfolgreichen Bewerbung für die Zwecke des Beschäftigungsverhältnisses von uns
                weiterverarbeitet werden. Andernfalls, sofern die Bewerbung auf ein Stellenangebot nicht erfolgreich ist,
                werden die Daten der Bewerber gelöscht. Die Daten der Bewerber werden ebenfalls gelöscht, wenn eine
                Bewerbung zurückgezogen wird, wozu die Bewerber jederzeit berechtigt sind. Die Löschung erfolgt,
                vorbehaltlich eines berechtigten Widerrufs der Bewerber, spätestens nach dem Ablauf eines Zeitraums von
                sechs Monaten, damit wir etwaige Anschlussfragen zu der Bewerbung beantworten und unseren
                Nachweispflichten aus den Vorschriften zur Gleichbehandlung von Bewerbern nachkommen können. Rechnungen
                über etwaige Reisekostenerstattung werden entsprechend den steürrechtlichen Vorgaben archiviert.
              </p>
              <p className={paragraphClassName}>
                <strong>Aufnahme in einen Bewerberpool:</strong> Die Aufnahme in einen Bewerber-Pool, sofern angeboten,
                erfolgt auf Grundlage einer Einwilligung. Die Bewerber werden darüber belehrt, dass ihre Zustimmung zur
                Aufnahme in den Talentpool freiwillig ist, keinen Einfluss auf das laufende Bewerbungsverfahren hat und
                sie ihre Einwilligung jederzeit für die Zukunft widerrufen können.
              </p>
              <ul className={listClassName}>
                <li>
                  <strong>Verarbeitete Datenarten:</strong> Bestandsdaten (z. B. der vollständige Name, Wohnadresse,
                  Kontaktinformationen, Kundennummer, etc.); Kontaktdaten (z. B. Post- und E-Mail-Adressen oder
                  Telefonnummern); Inhaltsdaten (z. B. textliche oder bildliche Nachrichten und Beiträge sowie die sie
                  betreffenden Informationen, wie z. B. Angaben zur Autorenschaft oder Zeitpunkt der Erstellung).
                  Bewerberdaten (z. B. Angaben zur Person, Post- und Kontaktadressen, die zur Bewerbung gehörenden
                  Unterlagen und die darin enthaltenen Informationen, wie z. B. Anschreiben, Lebenslauf, Zeugnisse sowie
                  weitere im Hinblick auf eine konkrete Stelle oder freiwillig von Bewerbern mitgeteilte Informationen
                  zu deren Person oder Qualifikation).
                </li>
                <li>
                  <strong>Betroffene Personen:</strong> Bewerber.
                </li>
                <li>
                  <strong>Zwecke der Verarbeitung und berechtigte Interessen:</strong> Bewerbungsverfahren (Begründung
                  und etwaige spätere Durchführung sowie mögliche spätere Beendigung des
                  Beschäftigungsverhältnisses).
                </li>
                <li>
                  <strong>Aufbewahrung und Löschung:</strong> Löschung entsprechend Angaben im Abschnitt
                  &quot;Allgemeine Informationen zur Datenspeicherung und Löschung&quot;.
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
