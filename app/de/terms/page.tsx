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

export default function TermsPageDE() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 pt-6 pb-16 md:pt-16">
          <h1 className="mb-8 text-4xl font-bold text-gray-900 text-balance break-words hyphens-auto md:text-5xl">
            Allgemeine Nutzungsbedingungen
          </h1>

          <div className="space-y-8 rounded-2xl bg-white p-8 shadow-sm md:p-12">
            <section className={sectionClassName}>
              <p className={paragraphClassName}>
                <strong>Stand:</strong> 01.05.2026
                <br />
                <strong>Anbieter:</strong> Claimity AG, Wisentalstrasse 7a, 8185 Winkel, Schweiz
                <br />
                (nachfolgend „Claimity")
              </p>
              <p className={paragraphClassName}>
                Diese Allgemeinen Nutzungsbedingungen („ANB") regeln die Nutzung der von Claimity bereitgestellten
                digitalen Plattform zur strukturierten Abwicklung, Koordination und Dokumentation von
                Versicherungsfällen, insbesondere zur Erfassung von Fällen, zur Zuweisung an externe Expertinnen und
                Experten, zur Kommunikation, Dokumentenverwaltung, Statusverfolgung und Abrechnung.
              </p>
              <p className={paragraphClassName}>
                Die Plattform richtet sich ausschliesslich an Unternehmen und berufliche Nutzer, insbesondere
                Versicherungsunternehmen, Schadenorganisationen, Gutachter, Sachverständige und weitere professionelle
                Dienstleister. Eine Nutzung durch Verbraucher ist nicht vorgesehen.
              </p>
            </section>

            <Section title="1. Geltungsbereich und Vertragsgrundlagen">
              <ul className={listClassName}>
                <li>
                  Diese ANB gelten für alle Zugriffe auf die Claimity-Plattform sowie für alle Leistungen, die
                  Claimity im Zusammenhang mit der Plattform gegenüber Versicherern, Experten oder sonstigen
                  Geschäftskunden erbringt, soweit nicht im Einzelfall schriftlich abweichende Vereinbarungen
                  getroffen wurden.
                </li>
                <li>
                  Ergänzend können insbesondere folgende Vertragsbestandteile gelten:
                  <ul className={nestedListClassName}>
                    <li>individuelle Angebote, Rahmenverträge oder Leistungsbeschreibungen,</li>
                    <li>Preislisten oder fallbezogene Vergütungsmodelle,</li>
                    <li>Vereinbarungen zur Auftragsbearbeitung bzw. Datenschutzvereinbarungen,</li>
                    <li>technische Dokumentationen, Sicherheitskonzepte oder Servicebeschreibungen.</li>
                  </ul>
                </li>
                <li>
                  Im Falle von Widersprüchen gehen individuelle schriftliche Vereinbarungen diesen ANB vor. Danach
                  gelten besondere Datenschutz- oder Sicherheitsvereinbarungen, danach diese ANB.
                </li>
                <li>
                  Allgemeine Geschäftsbedingungen des Kunden oder eines Experten gelten nur, wenn Claimity diesen
                  ausdrücklich schriftlich zugestimmt hat.
                </li>
              </ul>
            </Section>

            <Section title="2. Begriffe">
              <ul className={listClassName}>
                <li>
                  <strong>Plattform</strong> bezeichnet die von Claimity bereitgestellte Softwarelösung einschliesslich
                  Weboberfläche, Schnittstellen, Kommunikationsfunktionen, Dokumentenablage, Fallverwaltung, Rollen-
                  und Rechtesystem, Benachrichtigungen, Reporting- und Abrechnungsfunktionen.
                </li>
                <li>
                  <strong>Versicherer</strong> bezeichnet ein Versicherungsunternehmen oder eine sonstige
                  Organisation, die Versicherungsfälle über die Plattform erfassen, bearbeiten, koordinieren oder an
                  Experten zuweisen lässt.
                </li>
                <li>
                  <strong>Experten</strong> bezeichnet externe Gutachter, Sachverständige, Schadenexperten oder
                  sonstige professionelle Dienstleister, die über die Plattform Fälle übernehmen, bearbeiten oder
                  dokumentieren.
                </li>
                <li>
                  <strong>Nutzer</strong> bezeichnet natürliche Personen, die im Namen eines Versicherers, Experten
                  oder sonstigen Kunden Zugriff auf die Plattform erhalten.
                </li>
                <li>
                  <strong>Fall</strong> bezeichnet einen einzelnen Schaden-, Versicherungs-, Prüf- oder
                  Gutachtenvorgang, der über die Plattform angelegt, bearbeitet, zugewiesen oder dokumentiert wird.
                </li>
                <li>
                  <strong>Fallunterlagen</strong> bezeichnet sämtliche von Nutzern hochgeladenen oder übermittelte
                  Daten, Dokumente, Fotos, Berichte, Kommunikation, Metadaten und sonstige Inhalte im Zusammenhang
                  mit einem Fall.
                </li>
                <li>
                  <strong>Arbeitsergebnisse</strong> bezeichnet insbesondere Gutachten, Berichte, Einschätzungen,
                  Entscheidungsgrundlagen, Protokolle, Dokumentationen oder sonstige fachliche Ergebnisse, die im
                  Rahmen eines Falls durch Experten oder Claimity erstellt oder bereitgestellt werden.
                </li>
              </ul>
            </Section>

            <Section title="3. Leistungsumfang und Rolle von Claimity">
              <ul className={listClassName}>
                <li>
                  Claimity stellt eine digitale Plattform zur Verfügung, über die Versicherer Fälle erfassen,
                  strukturieren, Experten zuweisen, Unterlagen austauschen, Kommunikation führen, Bearbeitungsstände
                  verfolgen und Abrechnungen koordinieren können.
                </li>
                <li>
                  Claimity kann je nach vertraglicher Ausgestaltung insbesondere folgende Leistungen erbringen:
                  <ul className={nestedListClassName}>
                    <li>technische Bereitstellung und Betrieb der Plattform,</li>
                    <li>Fallanlage und Fallkoordination,</li>
                    <li>Vermittlung, Beauftragung oder Koordination von Experten,</li>
                    <li>Bereitstellung von Kommunikations- und Dokumentationsfunktionen,</li>
                    <li>Abrechnung von Fällen gegenüber Versicherern,</li>
                    <li>Abwicklung oder Weiterleitung von Vergütungen an Experten,</li>
                    <li>Reporting, Statusübersichten und Qualitätssicherung.</li>
                  </ul>
                </li>
                <li>
                  Claimity schuldet grundsätzlich keine Versicherungsentscheidung, Deckungsentscheidung,
                  Rechtsberatung oder abschliessende fachliche Bewertung eines Schadenfalls, sofern dies nicht
                  ausdrücklich schriftlich vereinbart wurde. Fachliche Einschätzungen von Experten liegen in deren
                  Verantwortungsbereich.
                </li>
                <li>
                  Soweit Claimity Experten vermittelt oder koordiniert, wählt Claimity diese nach sachgerechten
                  Kriterien aus. Eine bestimmte Person oder ein bestimmter Experte ist nur geschuldet, wenn dies
                  ausdrücklich vereinbart wurde.
                </li>
                <li>
                  Claimity ist berechtigt, die Plattform fortlaufend weiterzuentwickeln, Funktionen zu ändern, zu
                  ergänzen oder zu entfernen, sofern dadurch die wesentlichen vertraglichen Nutzungsmöglichkeiten
                  nicht unangemessen eingeschränkt werden.
                </li>
              </ul>
            </Section>

            <Section title="4. Registrierung, Benutzerkonten und Zugriffsrechte">
              <ul className={listClassName}>
                <li>
                  Die Nutzung der Plattform setzt ein freigeschaltetes Benutzerkonto voraus. Ein Anspruch auf
                  Registrierung oder Freischaltung besteht nicht.
                </li>
                <li>
                  Der jeweilige Kunde ist dafür verantwortlich, dass nur berechtigte Personen Zugriff auf die
                  Plattform erhalten und dass Rollen, Berechtigungen und Zugriffe sachgerecht vergeben und aktuell
                  gehalten werden.
                </li>
                <li>
                  Nutzer sind verpflichtet, Zugangsdaten vertraulich zu behandeln, nicht an Dritte weiterzugeben und
                  Claimity unverzüglich zu informieren, wenn ein Missbrauch oder ein unbefugter Zugriff vermutet
                  wird.
                </li>
                <li>
                  Handlungen, die über ein Benutzerkonto vorgenommen werden, werden dem jeweiligen Kunden
                  zugerechnet, sofern der Kunde den Zugriff veranlasst, ermöglicht oder nicht angemessen verhindert
                  hat.
                </li>
                <li>
                  Claimity kann Zugriffe vorübergehend sperren, wenn konkrete Anhaltspunkte für Missbrauch,
                  Sicherheitsrisiken, Rechtsverstösse, Zahlungsverzug oder sonstige erhebliche Vertragsverletzungen
                  bestehen.
                </li>
              </ul>
            </Section>

            <Section title="5. Nutzungslizenz, Plattformrechte und Fallunterlagen">
              <ul className={listClassName}>
                <li>
                  Claimity räumt dem Kunden und den freigeschalteten Nutzern für die Dauer des Vertrags ein
                  einfaches, nicht ausschliessliches, nicht übertragbares und widerrufliches Recht ein, die Plattform
                  im vereinbarten Umfang für eigene geschäftliche Zwecke zu nutzen.
                </li>
                <li>
                  Die Plattform einschliesslich Software, Benutzeroberflächen, Workflows, Datenbankstruktur,
                  Dokumentation, Marken, Logos, Designs, Texte, Templates, Systemlogik und sonstiger Claimity-eigener
                  Inhalte bleibt im Eigentum von Claimity oder den jeweiligen Rechteinhabern.
                </li>
                <li>
                  Ohne vorherige schriftliche Zustimmung von Claimity ist es insbesondere untersagt,
                  <ul className={nestedListClassName}>
                    <li>
                      die Plattform oder Teile davon zu kopieren, zu vervielfältigen, zu vermieten, zu verkaufen,
                      unterzulizenzieren oder Dritten ausserhalb des vereinbarten Nutzungskreises zugänglich zu
                      machen,
                    </li>
                    <li>
                      den Quellcode, die Systemarchitektur oder Sicherheitsmechanismen zu untersuchen, zu
                      dekompilieren, zurückzuentwickeln oder zu umgehen,
                    </li>
                    <li>
                      automatisierte Massenzugriffe, Scraping, Crawling oder Belastungstests ohne Zustimmung
                      durchzuführen,
                    </li>
                    <li>
                      Claimity-eigene Vorlagen, Oberflächen, Workflows oder Dokumentationen ausserhalb der Plattform
                      gewerblich weiterzuverwenden.
                    </li>
                  </ul>
                </li>
                <li>
                  Die vorstehenden Einschränkungen beziehen sich nicht auf Fallunterlagen, die der Kunde, ein
                  Versicherer, ein Experte oder sonstige berechtigte Nutzer selbst in die Plattform einbringen oder im
                  Rahmen eines Falls erstellen. Solche Fallunterlagen dürfen im Rahmen der berechtigten
                  Fallbearbeitung angezeigt, heruntergeladen, kopiert, ergänzt, bearbeitet, kommentiert, exportiert,
                  weitergegeben und archiviert werden, soweit dies vertraglich erlaubt, fachlich erforderlich und
                  rechtlich zulässig ist.
                </li>
                <li>
                  An den vom Kunden oder seinen Nutzern eingebrachten Fallunterlagen verbleiben die jeweiligen Rechte
                  beim Kunden, beim betroffenen Versicherer, beim Experten oder beim sonstigen berechtigten
                  Rechteinhaber. Claimity erhält daran lediglich die Rechte, die erforderlich sind, um die Plattform
                  bereitzustellen, Fälle zu bearbeiten, Unterlagen zu speichern, zu übertragen, darzustellen, zu
                  sichern, zu exportieren, technisch zu analysieren und die vertraglich vereinbarten Leistungen zu
                  erbringen.
                </li>
                <li>
                  Der Kunde stellt sicher, dass er zur Übermittlung, Speicherung, Bearbeitung und Weitergabe der
                  Fallunterlagen über die Plattform berechtigt ist und dass dadurch keine Rechte Dritter oder
                  gesetzlichen Vorgaben verletzt werden.
                </li>
              </ul>
            </Section>

            <Section title="6. Fallanlage, Beauftragung und Zusammenarbeit mit Experten">
              <ul className={listClassName}>
                <li>
                  Versicherer können über die Plattform Fälle anlegen und, je nach vereinbartem Prozess, Claimity
                  oder einen Experten mit der weiteren Bearbeitung beauftragen.
                </li>
                <li>
                  Die konkrete Beauftragung eines Experten, der Leistungsumfang, Bearbeitungsfristen,
                  Qualitätsanforderungen und Vergütung richten sich nach dem jeweiligen Rahmenvertrag, der
                  Fallbestellung, der Plattformangabe oder einer gesonderten Vereinbarung.
                </li>
                <li>
                  Claimity kann Experten im eigenen Namen, im Namen des Versicherers oder als vermittelnde bzw.
                  koordinierende Stelle einbinden. Die jeweilige Rollenverteilung ergibt sich aus der individuellen
                  Vereinbarung und dem konkreten Fallprozess.
                </li>
                <li>
                  Experten sind verpflichtet, Fälle fachgerecht, sorgfältig, unabhängig und unter Beachtung der
                  einschlägigen beruflichen, gesetzlichen und vertraglichen Anforderungen zu bearbeiten.
                </li>
                <li>
                  Versicherer und Experten sind verpflichtet, alle für die Fallbearbeitung erforderlichen
                  Informationen vollständig, richtig und rechtzeitig bereitzustellen. Verzögerungen oder Fehler
                  aufgrund unvollständiger oder unrichtiger Angaben gehen nicht zulasten von Claimity.
                </li>
                <li>
                  Claimity kann fallbezogene Kommunikation, Statusänderungen, Dokumentenuploads und sonstige
                  Bearbeitungsschritte protokollieren, um Nachvollziehbarkeit, Qualitätssicherung, Abrechnung und
                  Compliance zu unterstützen.
                </li>
              </ul>
            </Section>

            <Section title="7. Vergütung, Zahlungsbedingungen und Abrechnung">
              <ul className={listClassName}>
                <li>
                  Die Vergütung für die Nutzung und Leistungen von Claimity erfolgt primär fallbezogen. Massgeblich
                  sind die Anzahl und Art der über die Plattform abgewickelten Fälle, die jeweils vereinbarten
                  Fallpauschalen, Expertenhonorare, Servicegebühren, Zuschläge oder sonstigen Preisbestandteile.
                </li>
                <li>
                  Abonnements, Mindestgebühren, Plattformgebühren, Setup-Gebühren, Integrationskosten,
                  Support-Pakete oder monatliche Grundgebühren können ergänzend vereinbart werden. Soweit keine
                  solche Vereinbarung besteht, begründet die Nutzung der Plattform allein kein pauschales
                  Abonnementmodell.
                </li>
                <li>
                  Claimity ist berechtigt, gegenüber dem Versicherer einzelne Fälle unmittelbar nach Abschluss, nach
                  definierten Meilensteinen oder gesammelt in periodischen Sammelrechnungen, insbesondere monatlich,
                  abzurechnen.
                </li>
                <li>
                  Soweit Claimity Experten vergütet, kann Claimity die Expertenhonorare gegenüber dem Versicherer
                  weiterbelasten und zusätzlich eine eigene Plattform-, Koordinations-, Service- oder Marge
                  berechnen. Die konkrete Preislogik ergibt sich aus dem jeweiligen Angebot, Rahmenvertrag oder der
                  vereinbarten Preisliste.
                </li>
                <li>
                  Alle Preise verstehen sich, soweit nicht anders angegeben, exklusive gesetzlicher Mehrwertsteuer,
                  Abgaben, Gebühren und Auslagen.
                </li>
                <li>
                  Rechnungen sind innerhalb von 30 Tagen ab Rechnungsdatum ohne Abzug zahlbar, sofern nicht
                  schriftlich etwas anderes vereinbart wurde.
                </li>
                <li>
                  Bei Zahlungsverzug ist Claimity berechtigt, Verzugszinsen, Mahngebühren und Inkassokosten im
                  gesetzlich zulässigen Umfang geltend zu machen sowie nach vorheriger Mahnung weitere Leistungen
                  zurückzuhalten oder den Zugriff auf die Plattform einzuschränken.
                </li>
                <li>
                  Einwendungen gegen Rechnungen sind innerhalb von 14 Tagen nach Erhalt der Rechnung schriftlich und
                  begründet mitzuteilen. Unbestrittene Rechnungsbestandteile bleiben fristgerecht zahlbar.
                </li>
                <li>
                  Eine Verrechnung mit Gegenforderungen ist nur zulässig, wenn diese unbestritten oder rechtskräftig
                  festgestellt sind.
                </li>
                <li>
                  Bereits erbrachte Leistungen, bearbeitete Fälle oder angefallene Expertenkosten sind auch dann
                  vergütungspflichtig, wenn ein Fall später storniert, intern nicht weiterverfolgt oder durch den
                  Versicherer anderweitig entschieden wird, sofern Claimity oder der Experte die Leistung nicht zu
                  vertreten hat.
                </li>
              </ul>
            </Section>

            <Section title="8. Pflichten der Kunden und Nutzer">
              <ul className={listClassName}>
                <li>
                  Kunden und Nutzer dürfen die Plattform nur rechtmässig, vertragsgemäss und unter Beachtung aller
                  anwendbaren Gesetze, regulatorischen Anforderungen, Datenschutzvorgaben und internen
                  Berechtigungskonzepte verwenden.
                </li>
                <li>
                  Insbesondere ist es untersagt,
                  <ul className={nestedListClassName}>
                    <li>unrichtige, irreführende, rechtswidrige oder unbefugt erlangte Informationen einzustellen,</li>
                    <li>Schadsoftware, manipulierte Dateien oder sicherheitsgefährdende Inhalte hochzuladen,</li>
                    <li>unbefugte Zugriffe auf Daten, Konten, Systeme oder Schnittstellen zu versuchen,</li>
                    <li>Sicherheits-, Rollen- oder Zugriffsbeschränkungen zu umgehen,</li>
                    <li>
                      die Plattform für rechtswidrige, diskriminierende, betrügerische oder sonst missbräuchliche
                      Zwecke zu verwenden.
                    </li>
                  </ul>
                </li>
                <li>
                  Kunden sind für die fachliche Prüfung, Freigabe und Verwendung der über die Plattform
                  bereitgestellten Informationen und Arbeitsergebnisse in ihren eigenen Geschäftsprozessen
                  verantwortlich.
                </li>
                <li>
                  Versicherer bleiben insbesondere für ihre versicherungsvertraglichen Entscheidungen,
                  Deckungsprüfungen, Leistungsentscheide, Kommunikation mit Versicherungsnehmern und regulatorischen
                  Pflichten verantwortlich, sofern nicht ausdrücklich etwas anderes vereinbart wurde.
                </li>
                <li>
                  Experten bleiben für die fachliche Richtigkeit, Vollständigkeit und Nachvollziehbarkeit ihrer
                  Gutachten, Berichte und Einschätzungen verantwortlich.
                </li>
              </ul>
            </Section>

            <Section title="9. Verfügbarkeit, Wartung und Support">
              <ul className={listClassName}>
                <li>
                  Claimity bemüht sich um eine hohe Verfügbarkeit der Plattform. Eine bestimmte Verfügbarkeit ist nur
                  geschuldet, wenn diese ausdrücklich in einem Service Level Agreement vereinbart wurde.
                </li>
                <li>
                  Vorübergehende Einschränkungen können insbesondere durch Wartung, Updates, Sicherheitsmassnahmen,
                  Störungen bei Infrastruktur- oder Kommunikationsdienstleistern, höhere Gewalt oder sonstige
                  Umstände ausserhalb des Einflussbereichs von Claimity entstehen.
                </li>
                <li>
                  Claimity ist berechtigt, geplante Wartungsarbeiten durchzuführen und die Plattform für
                  erforderliche Sicherheits- oder Stabilitätsmassnahmen vorübergehend einzuschränken.
                </li>
                <li>
                  Supportleistungen, Reaktionszeiten, Bereitschaftszeiten und Eskalationswege richten sich nach der
                  jeweils vereinbarten Leistungsbeschreibung oder dem jeweiligen Support-Paket.
                </li>
              </ul>
            </Section>

            <Section title="10. Vertraulichkeit">
              <ul className={listClassName}>
                <li>
                  Die Parteien verpflichten sich, alle nicht öffentlich bekannten geschäftlichen, technischen,
                  finanziellen, personenbezogenen, versicherungsbezogenen oder sonstigen vertraulichen Informationen
                  der jeweils anderen Partei vertraulich zu behandeln.
                </li>
                <li>
                  Vertrauliche Informationen dürfen nur für die Durchführung des Vertrags und nur gegenüber Personen
                  offengelegt werden, die diese Informationen für die Vertragserfüllung benötigen und zur
                  Vertraulichkeit verpflichtet sind.
                </li>
                <li>
                  Die Vertraulichkeitspflicht gilt nicht für Informationen, die nachweislich öffentlich bekannt sind,
                  ohne Vertragsverletzung bekannt werden, rechtmässig von Dritten erhalten wurden oder aufgrund
                  gesetzlicher, regulatorischer oder gerichtlicher Verpflichtungen offengelegt werden müssen.
                </li>
                <li>Die Vertraulichkeitspflicht gilt auch nach Beendigung des Vertrags fort.</li>
              </ul>
            </Section>

            <Section title="11. Datenschutz und Informationssicherheit">
              <ul className={listClassName}>
                <li>
                  Die Parteien beachten die jeweils anwendbaren Datenschutzgesetze, insbesondere das Schweizer
                  Datenschutzgesetz sowie, soweit anwendbar, die Datenschutz-Grundverordnung der Europäischen Union.
                </li>
                <li>
                  Die datenschutzrechtliche Rolle von Claimity richtet sich nach der konkreten Leistung und dem
                  jeweiligen Verarbeitungsvorgang. Soweit Claimity Personendaten im Auftrag eines Versicherers oder
                  Kunden verarbeitet, erfolgt dies auf Grundlage einer gesonderten Vereinbarung zur
                  Auftragsbearbeitung bzw. Auftragsverarbeitung.
                </li>
                <li>
                  Soweit Claimity eigene Zwecke verfolgt, insbesondere zur Vertragsverwaltung, Abrechnung,
                  Sicherheit, Missbrauchsprävention, Systemadministration oder gesetzlichen Nachweisführung, handelt
                  Claimity als eigenständig Verantwortliche nach Massgabe der Datenschutzerklärung.
                </li>
                <li>
                  Kunden und Nutzer sind dafür verantwortlich, dass die Übermittlung von Personendaten und besonders
                  schützenswerten Personendaten an Claimity oder über die Plattform rechtmässig erfolgt und
                  erforderliche Informationen, Rechtsgrundlagen, Einwilligungen oder sonstige Voraussetzungen
                  vorliegen.
                </li>
                <li>
                  Claimity trifft angemessene technische und organisatorische Massnahmen zum Schutz der Plattform und
                  der verarbeiteten Daten. Einzelheiten können in einer gesonderten Sicherheitsdokumentation,
                  Vereinbarung zur Auftragsbearbeitung oder Leistungsbeschreibung geregelt werden.
                </li>
                <li>
                  Claimity kann Unterauftragnehmer und technische Dienstleister einsetzen, soweit dies zur
                  Vertragserfüllung erforderlich ist und die datenschutzrechtlichen Anforderungen eingehalten werden.
                </li>
                <li>
                  Kunden sind für die rechtmässige Konfiguration von Rollen, Zugriffsrechten, Löschfristen, Exporten
                  und Weitergaben innerhalb ihres Verantwortungsbereichs verantwortlich.
                </li>
              </ul>
            </Section>

            <Section title="12. Schnittstellen, Integrationen und Drittanbieter">
              <ul className={listClassName}>
                <li>
                  Die Plattform kann Schnittstellen zu Systemen von Versicherern, Experten oder Drittanbietern
                  bereitstellen, insbesondere zu ERP-, Schaden-, Dokumentenmanagement-, Kommunikations- oder
                  Authentifizierungssystemen.
                </li>
                <li>
                  Der Kunde ist verantwortlich für die Rechtmässigkeit, Sicherheit und Funktionsfähigkeit der von ihm
                  angebundenen Systeme, Zugangsdaten und Datenübermittlungen.
                </li>
                <li>
                  Claimity haftet nicht für Störungen, Datenfehler, Ausfälle oder Sicherheitsvorfälle, die durch
                  Systeme, Dienste oder Schnittstellen ausserhalb des Verantwortungsbereichs von Claimity verursacht
                  werden.
                </li>
                <li>
                  Für Dienste Dritter können zusätzliche Bedingungen, Lizenzbestimmungen oder Datenschutzinformationen
                  gelten.
                </li>
              </ul>
            </Section>

            <Section title="13. Arbeitsergebnisse und fachliche Verantwortung">
              <ul className={listClassName}>
                <li>
                  Arbeitsergebnisse, die im Rahmen eines Falls erstellt werden, dürfen vom berechtigten Versicherer
                  und den berechtigten Nutzern für die Bearbeitung, Prüfung, Dokumentation und Entscheidung des
                  jeweiligen Falls verwendet werden.
                </li>
                <li>
                  Soweit nichts anderes vereinbart ist, werden an Arbeitsergebnissen keine ausschliesslichen
                  Immaterialgüterrechte übertragen. Der Versicherer erhält jedoch die zur Fallbearbeitung
                  erforderlichen Nutzungsrechte.
                </li>
                <li>
                  Claimity darf anonymisierte oder aggregierte Informationen aus der Plattform verwenden, um die
                  Plattform zu verbessern, Qualitätssicherung zu betreiben, Statistiken zu erstellen oder
                  Benchmarking-Funktionen zu entwickeln, sofern dadurch keine Rückschlüsse auf identifizierte oder
                  identifizierbare Personen, Versicherer, Experten oder konkrete Fälle möglich sind, soweit nicht
                  ausdrücklich etwas anderes vereinbart wurde.
                </li>
                <li>
                  Eine Verwendung personenbezogener oder kundenspezifisch identifizierbarer Daten für Benchmarking,
                  Produktentwicklung oder Analysen erfolgt nur, wenn hierfür eine ausreichende vertragliche und
                  datenschutzrechtliche Grundlage besteht.
                </li>
              </ul>
            </Section>

            <Section title="14. Gewährleistung">
              <ul className={listClassName}>
                <li>
                  Claimity erbringt die Plattformleistungen mit angemessener Sorgfalt und nach dem jeweils aktuellen
                  Stand der eigenen technischen und organisatorischen Möglichkeiten.
                </li>
                <li>
                  Claimity gewährleistet nicht, dass die Plattform jederzeit unterbrechungsfrei, fehlerfrei oder für
                  jeden vom Kunden gewünschten Zweck geeignet ist, sofern dies nicht ausdrücklich zugesichert wurde.
                </li>
                <li>
                  Der Kunde hat erkennbare Störungen, Fehler oder Mängel unverzüglich und nachvollziehbar zu melden.
                  Claimity wird berechtigte Störungen innerhalb angemessener Frist prüfen und beheben oder eine
                  zumutbare Umgehungslösung bereitstellen.
                </li>
                <li>
                  Für fachliche Leistungen von Experten haftet Claimity nur, soweit Claimity diese Leistung
                  ausdrücklich selbst schuldet oder für den jeweiligen Experten nach zwingendem Recht einzustehen
                  hat.
                </li>
              </ul>
            </Section>

            <Section title="15. Haftung">
              <ul className={listClassName}>
                <li>
                  Claimity haftet unbeschränkt für Schäden, die durch vorsätzliches oder grob fahrlässiges Verhalten
                  von Claimity verursacht wurden, sowie in Fällen zwingender gesetzlicher Haftung.
                </li>
                <li>
                  Bei leichter Fahrlässigkeit haftet Claimity nur für die Verletzung wesentlicher Vertragspflichten
                  und nur für den typischerweise vorhersehbaren, unmittelbaren Schaden.
                </li>
                <li>
                  Soweit gesetzlich zulässig, ist die Haftung von Claimity insgesamt beschränkt auf die vom
                  betroffenen Kunden in den letzten zwölf Monaten vor dem schädigenden Ereignis an Claimity bezahlten
                  Vergütungen, höchstens jedoch auf CHF 5000. Für fallbezogene Ansprüche kann ergänzend eine
                  Beschränkung auf die für den betroffenen Fall bezahlte Vergütung vereinbart werden.
                </li>
                <li>
                  Claimity haftet nicht für indirekte Schäden, Folgeschäden, entgangenen Gewinn, Reputationsschäden,
                  Datenverluste, Produktionsausfälle, Betriebsunterbrechungen oder Ansprüche Dritter, soweit eine
                  solche Haftung gesetzlich ausgeschlossen werden kann.
                </li>
                <li>
                  Claimity haftet nicht für Schäden, die entstehen durch:
                  <ul className={nestedListClassName}>
                    <li>unrichtige oder unvollständige Angaben des Kunden, Versicherers, Experten oder Nutzers,</li>
                    <li>unsachgemässe Nutzung der Plattform,</li>
                    <li>fehlende oder fehlerhafte interne Prüfung von Arbeitsergebnissen,</li>
                    <li>Systeme, Dienste oder Schnittstellen Dritter,</li>
                    <li>unbefugte Weitergabe von Zugangsdaten,</li>
                    <li>Ereignisse höherer Gewalt.</li>
                  </ul>
                </li>
                <li>
                  Die Haftungsbeschränkungen gelten entsprechend zugunsten von Organen, Mitarbeitenden, Beauftragten,
                  Unterauftragnehmern und Erfüllungsgehilfen von Claimity.
                </li>
              </ul>
            </Section>

            <Section title="16. Vertragsdauer, Kündigung und Beendigung">
              <ul className={listClassName}>
                <li>
                  Vertragsdauer und Kündigungsfristen richten sich nach der jeweiligen individuellen Vereinbarung.
                  Fallbezogene Leistungen enden grundsätzlich mit Abschluss, Abrechnung oder Stornierung des
                  jeweiligen Falls. Falls keine individuelle Vereinbarung getroffen ist, besteht kein definiertes
                  Kündigungsdatum. Die Parteien können selbstständig den Vertrag kündigen.
                </li>
                <li>
                  Plattformzugänge können nach Beendigung des Vertrags oder nach Wegfall der Berechtigung
                  deaktiviert werden.
                </li>
                <li>
                  Das Recht zur fristlosen Kündigung aus wichtigem Grund bleibt vorbehalten. Ein wichtiger Grund
                  liegt insbesondere vor bei erheblichen Vertragsverletzungen, Missbrauch der Plattform,
                  schwerwiegenden Sicherheitsrisiken, anhaltendem Zahlungsverzug oder Verletzung wesentlicher
                  Datenschutz- oder Vertraulichkeitspflichten.
                </li>
                <li>
                  Nach Vertragsende stellt Claimity dem Kunden vorhandene Fallunterlagen im vertraglich vereinbarten
                  oder technisch üblichen Format zur Verfügung, sofern keine gesetzlichen, regulatorischen oder
                  vertraglichen Aufbewahrungspflichten entgegenstehen.
                </li>
                <li>
                  Nach Ablauf vereinbarter Aufbewahrungsfristen ist Claimity berechtigt, Daten zu löschen oder zu
                  anonymisieren, soweit keine gesetzlichen oder vertraglichen Pflichten zur weiteren Speicherung
                  bestehen.
                </li>
              </ul>
            </Section>

            <Section title="17. Änderungen der ANB">
              <ul className={listClassName}>
                <li>
                  Claimity kann diese ANB ändern, wenn dies aufgrund rechtlicher, technischer, wirtschaftlicher oder
                  organisatorischer Entwicklungen erforderlich oder sachgerecht ist und die Kunden dadurch nicht
                  unangemessen benachteiligt werden.
                </li>
                <li>
                  Claimity informiert Kunden in geeigneter Form über wesentliche Änderungen. Widerspricht ein Kunde
                  den Änderungen nicht innerhalb von 30 Tagen nach Mitteilung, gelten die Änderungen als angenommen,
                  sofern Claimity auf diese Folge ausdrücklich hingewiesen hat.
                </li>
                <li>
                  Widerspricht der Kunde fristgerecht, gelten die bisherigen ANB fort. Claimity ist in diesem Fall
                  berechtigt, den Vertrag unter Einhaltung einer angemessenen Frist zu kündigen, sofern eine
                  Fortführung zu den bisherigen Bedingungen für Claimity nicht zumutbar ist.
                </li>
              </ul>
            </Section>

            <Section title="18. Schlussbestimmungen">
              <ul className={listClassName}>
                <li>
                  Der Kunde darf Rechte und Pflichten aus dem Vertragsverhältnis nur mit vorheriger schriftlicher
                  Zustimmung von Claimity auf Dritte übertragen. Claimity darf Rechte und Pflichten auf verbundene
                  Unternehmen oder Rechtsnachfolger übertragen, sofern berechtigte Interessen des Kunden dadurch
                  nicht unangemessen beeinträchtigt werden.
                </li>
                <li>
                  Änderungen und Ergänzungen individueller Verträge bedürfen der Textform oder Schriftform, soweit
                  nicht zwingendes Recht eine strengere Form verlangt.
                </li>
                <li>
                  Sollten einzelne Bestimmungen dieser ANB unwirksam oder undurchführbar sein oder werden, bleibt
                  die Wirksamkeit der übrigen Bestimmungen unberührt. Die Parteien werden die unwirksame oder
                  undurchführbare Bestimmung durch eine wirksame Regelung ersetzen, die dem wirtschaftlichen Zweck
                  möglichst nahekommt.
                </li>
                <li>
                  Es gilt materielles Schweizer Recht unter Ausschluss kollisionsrechtlicher Bestimmungen und des
                  Wiener Kaufrechts.
                </li>
                <li>
                  Ausschliesslicher Gerichtsstand für alle Streitigkeiten aus oder im Zusammenhang mit diesen ANB
                  ist, soweit gesetzlich zulässig, der Sitz von Claimity. Claimity ist berechtigt, Ansprüche auch am
                  Sitz des Kunden geltend zu machen.
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
