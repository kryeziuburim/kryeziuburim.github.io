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

export default function TermsPageEN() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 pt-6 pb-16 md:pt-16">
          <h1 className="mb-8 text-4xl font-bold text-gray-900 text-balance break-words hyphens-auto md:text-5xl">
            General Terms of Use
          </h1>

          <div className="space-y-8 rounded-2xl bg-white p-8 shadow-sm md:p-12">
            <section className={sectionClassName}>
              <p className={paragraphClassName}>
                <strong>Last updated:</strong> May 1, 2026
                <br />
                <strong>Provider:</strong> Claimity AG, Wisentalstrasse 7a, 8185 Winkel, Switzerland
                <br />
                (hereinafter &ldquo;Claimity&rdquo;)
              </p>
              <p className={paragraphClassName}>
                These General Terms of Use (&ldquo;GTU&rdquo;) govern the use of the digital platform provided by
                Claimity for the structured handling, coordination and documentation of insurance cases, in particular
                for case intake, assignment to external experts, communication, document management, status tracking
                and billing.
              </p>
              <p className={paragraphClassName}>
                The platform is intended exclusively for businesses and professional users, in particular insurance
                companies, claims organisations, assessors, expert appraisers and other professional service
                providers. Use by consumers is not envisaged.
              </p>
            </section>

            <Section title="1. Scope and Contractual Basis">
              <ul className={listClassName}>
                <li>
                  These GTU apply to all access to the Claimity platform as well as to all services provided by
                  Claimity in connection with the platform vis-à-vis insurers, experts or other business customers,
                  unless individual written agreements provide otherwise.
                </li>
                <li>
                  In addition, the following contractual components may apply in particular:
                  <ul className={nestedListClassName}>
                    <li>individual offers, framework agreements or service descriptions,</li>
                    <li>price lists or case-based remuneration models,</li>
                    <li>data processing agreements or data protection arrangements,</li>
                    <li>technical documentation, security concepts or service descriptions.</li>
                  </ul>
                </li>
                <li>
                  In the event of conflicts, individual written agreements take precedence over these GTU. Specific
                  data protection or security agreements take precedence next, followed by these GTU.
                </li>
                <li>
                  General terms and conditions of the customer or an expert apply only if Claimity has expressly
                  agreed to them in writing.
                </li>
              </ul>
            </Section>

            <Section title="2. Definitions">
              <ul className={listClassName}>
                <li>
                  <strong>Platform</strong> refers to the software solution provided by Claimity, including the web
                  interface, interfaces, communication functions, document storage, case management, role and
                  permission system, notifications, reporting and billing functions.
                </li>
                <li>
                  <strong>Insurer</strong> refers to an insurance company or other organisation that records,
                  processes, coordinates or assigns insurance cases to experts via the platform.
                </li>
                <li>
                  <strong>Experts</strong> refers to external assessors, expert appraisers, claims experts or other
                  professional service providers who take on, process or document cases via the platform.
                </li>
                <li>
                  <strong>Users</strong> refers to natural persons who are granted access to the platform on behalf
                  of an insurer, expert or other customer.
                </li>
                <li>
                  <strong>Case</strong> refers to an individual claims, insurance, review or assessment matter that
                  is created, processed, assigned or documented via the platform.
                </li>
                <li>
                  <strong>Case Records</strong> refers to all data, documents, photos, reports, communications,
                  metadata and other content uploaded or transmitted by users in connection with a case.
                </li>
                <li>
                  <strong>Work Results</strong> refers in particular to expert opinions, reports, assessments, bases
                  for decisions, protocols, documentation or other professional results created or provided by
                  experts or Claimity in the course of a case.
                </li>
              </ul>
            </Section>

            <Section title="3. Scope of Services and Role of Claimity">
              <ul className={listClassName}>
                <li>
                  Claimity provides a digital platform through which insurers can record cases, structure them,
                  assign experts, exchange documents, communicate, track processing status and coordinate billing.
                </li>
                <li>
                  Depending on the contractual arrangement, Claimity may in particular provide the following
                  services:
                  <ul className={nestedListClassName}>
                    <li>technical provision and operation of the platform,</li>
                    <li>case creation and case coordination,</li>
                    <li>placement, instruction or coordination of experts,</li>
                    <li>provision of communication and documentation features,</li>
                    <li>billing of cases to insurers,</li>
                    <li>processing or forwarding of remuneration to experts,</li>
                    <li>reporting, status overviews and quality assurance.</li>
                  </ul>
                </li>
                <li>
                  As a rule, Claimity does not owe any insurance decision, coverage decision, legal advice or final
                  professional assessment of a claim, unless this has been expressly agreed in writing. Professional
                  assessments by experts fall within their area of responsibility.
                </li>
                <li>
                  To the extent that Claimity places or coordinates experts, Claimity selects them according to
                  appropriate criteria. A specific person or a specific expert is owed only if expressly agreed.
                </li>
                <li>
                  Claimity is entitled to continuously develop the platform and to change, supplement or remove
                  features, provided that the essential contractual usage options are not unreasonably restricted as
                  a result.
                </li>
              </ul>
            </Section>

            <Section title="4. Registration, User Accounts and Access Rights">
              <ul className={listClassName}>
                <li>
                  Use of the platform requires an activated user account. There is no entitlement to registration or
                  activation.
                </li>
                <li>
                  The respective customer is responsible for ensuring that only authorised persons gain access to
                  the platform and that roles, permissions and access rights are assigned appropriately and kept up
                  to date.
                </li>
                <li>
                  Users are obliged to keep access credentials confidential, not to disclose them to third parties
                  and to inform Claimity without delay if misuse or unauthorised access is suspected.
                </li>
                <li>
                  Actions taken via a user account are attributed to the respective customer if the customer
                  initiated, enabled or did not adequately prevent the access.
                </li>
                <li>
                  Claimity may temporarily suspend access if there are concrete indications of misuse, security
                  risks, legal violations, payment default or other significant breaches of contract.
                </li>
              </ul>
            </Section>

            <Section title="5. Licence of Use, Platform Rights and Case Records">
              <ul className={listClassName}>
                <li>
                  Claimity grants the customer and the activated users a simple, non-exclusive, non-transferable and
                  revocable right, for the term of the contract, to use the platform within the agreed scope for
                  their own business purposes.
                </li>
                <li>
                  The platform, including software, user interfaces, workflows, database structure, documentation,
                  trademarks, logos, designs, texts, templates, system logic and other Claimity-owned content,
                  remains the property of Claimity or the respective rights holders.
                </li>
                <li>
                  Without the prior written consent of Claimity, it is in particular prohibited to:
                  <ul className={nestedListClassName}>
                    <li>
                      copy, reproduce, rent, sell, sublicense or make available the platform or parts of it to
                      third parties outside the agreed user group,
                    </li>
                    <li>
                      examine, decompile, reverse engineer or circumvent the source code, system architecture or
                      security mechanisms,
                    </li>
                    <li>
                      carry out automated mass access, scraping, crawling or load testing without consent,
                    </li>
                    <li>
                      commercially reuse Claimity-owned templates, interfaces, workflows or documentation outside
                      the platform.
                    </li>
                  </ul>
                </li>
                <li>
                  The above restrictions do not apply to case records that the customer, an insurer, an expert or
                  other authorised users themselves bring into the platform or create within the scope of a case.
                  Such case records may be displayed, downloaded, copied, supplemented, processed, commented on,
                  exported, shared and archived in the context of legitimate case handling, to the extent
                  contractually permitted, professionally required and legally permissible.
                </li>
                <li>
                  The respective rights to case records introduced by the customer or its users remain with the
                  customer, the relevant insurer, the expert or the other authorised rights holder. Claimity
                  receives only those rights necessary to provide the platform, process cases, store, transmit,
                  display, secure, export and technically analyse records, and provide the contractually agreed
                  services.
                </li>
                <li>
                  The customer ensures that it is entitled to transmit, store, process and pass on the case records
                  via the platform and that this does not infringe any rights of third parties or statutory
                  requirements.
                </li>
              </ul>
            </Section>

            <Section title="6. Case Creation, Instruction and Cooperation with Experts">
              <ul className={listClassName}>
                <li>
                  Insurers can create cases via the platform and, depending on the agreed process, instruct
                  Claimity or an expert to handle them further.
                </li>
                <li>
                  The specific instruction of an expert, the scope of services, processing deadlines, quality
                  requirements and remuneration are governed by the relevant framework agreement, the case order,
                  the platform specification or a separate agreement.
                </li>
                <li>
                  Claimity may engage experts in its own name, in the name of the insurer or as a placing or
                  coordinating entity. The respective allocation of roles results from the individual agreement and
                  the specific case process.
                </li>
                <li>
                  Experts are obliged to handle cases professionally, with due care, independently and in compliance
                  with the relevant professional, legal and contractual requirements.
                </li>
                <li>
                  Insurers and experts are obliged to provide all information required for case handling completely,
                  correctly and in good time. Delays or errors due to incomplete or incorrect information shall not
                  be at the expense of Claimity.
                </li>
                <li>
                  Claimity may log case-related communication, status changes, document uploads and other processing
                  steps to support traceability, quality assurance, billing and compliance.
                </li>
              </ul>
            </Section>

            <Section title="7. Remuneration, Payment Terms and Billing">
              <ul className={listClassName}>
                <li>
                  Remuneration for the use and services of Claimity is primarily case-based. The number and type of
                  cases handled via the platform, the case flat fees agreed in each instance, expert fees, service
                  charges, surcharges or other price components are decisive.
                </li>
                <li>
                  Subscriptions, minimum fees, platform fees, setup fees, integration costs, support packages or
                  monthly base fees may additionally be agreed. In the absence of such an agreement, mere use of
                  the platform does not establish a flat-rate subscription model.
                </li>
                <li>
                  Claimity is entitled to bill the insurer for individual cases immediately upon completion, after
                  defined milestones or in periodic collective invoices, in particular monthly.
                </li>
                <li>
                  To the extent that Claimity remunerates experts, Claimity may pass through the expert fees to the
                  insurer and additionally charge its own platform, coordination, service or margin fee. The
                  specific pricing logic results from the relevant offer, framework agreement or agreed price list.
                </li>
                <li>
                  Unless otherwise stated, all prices are exclusive of statutory value-added tax, levies, fees and
                  expenses.
                </li>
                <li>
                  Invoices are payable within 30 days of the invoice date without deduction, unless otherwise agreed
                  in writing.
                </li>
                <li>
                  In the event of payment default, Claimity is entitled to assert default interest, reminder fees
                  and collection costs to the extent permitted by law and, after prior reminder, to withhold further
                  services or restrict access to the platform.
                </li>
                <li>
                  Objections to invoices must be raised in writing and with reasons within 14 days of receipt of the
                  invoice. Undisputed invoice components remain payable on time.
                </li>
                <li>
                  Set-off against counterclaims is permitted only if such claims are undisputed or have been
                  established by final court decision.
                </li>
                <li>
                  Services already rendered, cases already processed or expert costs already incurred remain subject
                  to remuneration even if a case is later cancelled, no longer pursued internally or otherwise
                  decided by the insurer, unless Claimity or the expert is responsible for non-performance.
                </li>
              </ul>
            </Section>

            <Section title="8. Obligations of Customers and Users">
              <ul className={listClassName}>
                <li>
                  Customers and users may use the platform only in a lawful and contractual manner and in compliance
                  with all applicable laws, regulatory requirements, data protection rules and internal
                  authorisation concepts.
                </li>
                <li>
                  In particular, it is prohibited to:
                  <ul className={nestedListClassName}>
                    <li>upload incorrect, misleading, unlawful or unlawfully obtained information,</li>
                    <li>upload malware, manipulated files or content that endangers security,</li>
                    <li>attempt unauthorised access to data, accounts, systems or interfaces,</li>
                    <li>circumvent security, role or access restrictions,</li>
                    <li>
                      use the platform for unlawful, discriminatory, fraudulent or otherwise abusive purposes.
                    </li>
                  </ul>
                </li>
                <li>
                  Customers are responsible for the professional review, release and use of the information and
                  work results provided via the platform within their own business processes.
                </li>
                <li>
                  Insurers in particular remain responsible for their insurance contract decisions, coverage
                  reviews, benefit decisions, communication with policyholders and regulatory obligations, unless
                  expressly agreed otherwise.
                </li>
                <li>
                  Experts remain responsible for the professional accuracy, completeness and traceability of their
                  expert opinions, reports and assessments.
                </li>
              </ul>
            </Section>

            <Section title="9. Availability, Maintenance and Support">
              <ul className={listClassName}>
                <li>
                  Claimity strives to ensure high availability of the platform. A specific availability is owed only
                  if expressly agreed in a Service Level Agreement.
                </li>
                <li>
                  Temporary restrictions may arise in particular due to maintenance, updates, security measures,
                  disruptions at infrastructure or communication service providers, force majeure or other
                  circumstances outside Claimity&apos;s sphere of influence.
                </li>
                <li>
                  Claimity is entitled to carry out scheduled maintenance work and to temporarily restrict the
                  platform for necessary security or stability measures.
                </li>
                <li>
                  Support services, response times, availability hours and escalation paths are governed by the
                  applicable service description or the respective support package.
                </li>
              </ul>
            </Section>

            <Section title="10. Confidentiality">
              <ul className={listClassName}>
                <li>
                  The parties undertake to treat as confidential all non-public business, technical, financial,
                  personal, insurance-related or other confidential information of the other party.
                </li>
                <li>
                  Confidential information may only be used for the performance of the contract and only disclosed
                  to persons who require this information for performance of the contract and are bound by
                  confidentiality obligations.
                </li>
                <li>
                  The confidentiality obligation does not apply to information that is demonstrably publicly known,
                  becomes known without breach of contract, has been lawfully obtained from third parties or must be
                  disclosed due to statutory, regulatory or judicial obligations.
                </li>
                <li>The confidentiality obligation continues to apply after termination of the contract.</li>
              </ul>
            </Section>

            <Section title="11. Data Protection and Information Security">
              <ul className={listClassName}>
                <li>
                  The parties comply with the applicable data protection laws, in particular the Swiss Federal Act
                  on Data Protection and, where applicable, the General Data Protection Regulation of the European
                  Union.
                </li>
                <li>
                  Claimity&apos;s role under data protection law depends on the specific service and processing
                  activity. Where Claimity processes personal data on behalf of an insurer or customer, this is done
                  on the basis of a separate data processing agreement.
                </li>
                <li>
                  Where Claimity pursues its own purposes, in particular for contract administration, billing,
                  security, abuse prevention, system administration or statutory record-keeping, Claimity acts as an
                  independent controller in accordance with the privacy policy.
                </li>
                <li>
                  Customers and users are responsible for ensuring that the transmission of personal data and
                  particularly sensitive personal data to Claimity or via the platform takes place lawfully and that
                  the necessary information, legal bases, consents or other prerequisites are in place.
                </li>
                <li>
                  Claimity takes appropriate technical and organisational measures to protect the platform and the
                  data processed. Details may be set out in a separate security documentation, data processing
                  agreement or service description.
                </li>
                <li>
                  Claimity may engage subcontractors and technical service providers insofar as this is necessary
                  for the performance of the contract and the data protection requirements are complied with.
                </li>
                <li>
                  Customers are responsible for the lawful configuration of roles, access rights, retention
                  periods, exports and disclosures within their area of responsibility.
                </li>
              </ul>
            </Section>

            <Section title="12. Interfaces, Integrations and Third-Party Providers">
              <ul className={listClassName}>
                <li>
                  The platform may provide interfaces to systems of insurers, experts or third-party providers, in
                  particular to ERP, claims, document management, communication or authentication systems.
                </li>
                <li>
                  The customer is responsible for the lawfulness, security and functionality of the systems, access
                  credentials and data transmissions connected by it.
                </li>
                <li>
                  Claimity is not liable for disruptions, data errors, outages or security incidents caused by
                  systems, services or interfaces outside Claimity&apos;s area of responsibility.
                </li>
                <li>
                  Additional terms, licence conditions or data protection information may apply to third-party
                  services.
                </li>
              </ul>
            </Section>

            <Section title="13. Work Results and Professional Responsibility">
              <ul className={listClassName}>
                <li>
                  Work results created in the course of a case may be used by the authorised insurer and the
                  authorised users for the handling, review, documentation and decision of the respective case.
                </li>
                <li>
                  Unless otherwise agreed, no exclusive intellectual property rights are transferred in respect of
                  work results. The insurer, however, receives the rights of use required for case handling.
                </li>
                <li>
                  Claimity may use anonymised or aggregated information from the platform to improve the platform,
                  carry out quality assurance, generate statistics or develop benchmarking features, provided that
                  no conclusions can be drawn about identified or identifiable persons, insurers, experts or
                  specific cases, unless expressly agreed otherwise.
                </li>
                <li>
                  The use of personal or customer-specifically identifiable data for benchmarking, product
                  development or analyses takes place only if there is a sufficient contractual and data protection
                  basis for this.
                </li>
              </ul>
            </Section>

            <Section title="14. Warranty">
              <ul className={listClassName}>
                <li>
                  Claimity provides the platform services with reasonable care and in accordance with the current
                  state of its own technical and organisational possibilities.
                </li>
                <li>
                  Claimity does not warrant that the platform will be uninterrupted, error-free or suitable for
                  every purpose desired by the customer at all times, unless expressly assured.
                </li>
                <li>
                  The customer must report identifiable disruptions, errors or defects without delay and in a
                  comprehensible manner. Claimity will examine and remedy justified disruptions within a reasonable
                  period of time or provide a reasonable workaround.
                </li>
                <li>
                  Claimity is liable for professional services provided by experts only insofar as Claimity
                  expressly owes such service itself or has to answer for the relevant expert under mandatory law.
                </li>
              </ul>
            </Section>

            <Section title="15. Liability">
              <ul className={listClassName}>
                <li>
                  Claimity is liable without limitation for damages caused by intentional or grossly negligent
                  conduct on the part of Claimity, as well as in cases of mandatory statutory liability.
                </li>
                <li>
                  In the case of slight negligence, Claimity is liable only for the breach of essential contractual
                  obligations and only for damages typically foreseeable and directly arising therefrom.
                </li>
                <li>
                  To the extent permitted by law, Claimity&apos;s overall liability is limited to the fees paid by
                  the affected customer to Claimity in the twelve months preceding the damaging event, but no more
                  than CHF 5,000. For case-related claims, an additional limitation to the fee paid for the
                  affected case may be agreed.
                </li>
                <li>
                  Claimity is not liable for indirect damages, consequential damages, lost profits, reputational
                  damages, data losses, production losses, business interruptions or claims by third parties, to
                  the extent that such liability can be excluded by law.
                </li>
                <li>
                  Claimity is not liable for damages caused by:
                  <ul className={nestedListClassName}>
                    <li>incorrect or incomplete information from the customer, insurer, expert or user,</li>
                    <li>improper use of the platform,</li>
                    <li>missing or faulty internal review of work results,</li>
                    <li>third-party systems, services or interfaces,</li>
                    <li>unauthorised disclosure of access credentials,</li>
                    <li>events of force majeure.</li>
                  </ul>
                </li>
                <li>
                  The limitations of liability apply accordingly in favour of Claimity&apos;s officers, employees,
                  agents, subcontractors and vicarious agents.
                </li>
              </ul>
            </Section>

            <Section title="16. Term, Termination and Ending of the Contract">
              <ul className={listClassName}>
                <li>
                  The contract term and notice periods are governed by the respective individual agreement.
                  Case-based services generally end with the conclusion, billing or cancellation of the respective
                  case. If no individual agreement has been made, there is no defined termination date. The parties
                  may terminate the contract on their own initiative.
                </li>
                <li>
                  Platform access may be deactivated after termination of the contract or after the underlying
                  authorisation no longer applies.
                </li>
                <li>
                  The right to extraordinary termination for cause remains reserved. Cause exists in particular in
                  the event of significant breaches of contract, misuse of the platform, serious security risks,
                  ongoing payment default or breach of essential data protection or confidentiality obligations.
                </li>
                <li>
                  After the end of the contract, Claimity will make existing case records available to the customer
                  in the contractually agreed or technically customary format, provided that no statutory,
                  regulatory or contractual retention obligations conflict with this.
                </li>
                <li>
                  After the expiry of agreed retention periods, Claimity is entitled to delete or anonymise data,
                  provided that there are no statutory or contractual obligations for further storage.
                </li>
              </ul>
            </Section>

            <Section title="17. Changes to the GTU">
              <ul className={listClassName}>
                <li>
                  Claimity may amend these GTU if this is necessary or appropriate due to legal, technical, economic
                  or organisational developments and customers are not unreasonably disadvantaged thereby.
                </li>
                <li>
                  Claimity will inform customers in an appropriate form of material changes. If a customer does not
                  object to the changes within 30 days of notification, the changes are deemed accepted, provided
                  that Claimity has expressly drawn attention to this consequence.
                </li>
                <li>
                  If the customer objects in good time, the previous GTU continue to apply. In this case, Claimity
                  is entitled to terminate the contract by observing a reasonable period of notice if continuation
                  on the previous terms is not reasonable for Claimity.
                </li>
              </ul>
            </Section>

            <Section title="18. Final Provisions">
              <ul className={listClassName}>
                <li>
                  The customer may transfer rights and obligations from the contractual relationship to third
                  parties only with the prior written consent of Claimity. Claimity may transfer rights and
                  obligations to affiliated companies or legal successors, provided that the legitimate interests
                  of the customer are not unreasonably impaired thereby.
                </li>
                <li>
                  Amendments and supplements to individual contracts must be in text form or in writing, unless
                  mandatory law requires a stricter form.
                </li>
                <li>
                  Should individual provisions of these GTU be or become invalid or unenforceable, the validity of
                  the remaining provisions shall remain unaffected. The parties shall replace the invalid or
                  unenforceable provision with a valid arrangement that comes as close as possible to the economic
                  purpose.
                </li>
                <li>
                  Substantive Swiss law shall apply, excluding conflict-of-law provisions and the United Nations
                  Convention on Contracts for the International Sale of Goods (CISG).
                </li>
                <li>
                  The exclusive place of jurisdiction for all disputes arising out of or in connection with these
                  GTU is, to the extent permitted by law, the registered office of Claimity. Claimity is also
                  entitled to assert claims at the registered office of the customer.
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
