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

export default function PrivacyPageEN() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 pt-6 pb-16 md:pt-16">
          <h1 className="mb-8 text-4xl font-bold text-gray-900 text-balance break-words hyphens-auto md:text-5xl">
            Privacy Policy
          </h1>

          <div className="space-y-8 rounded-2xl bg-white p-8 shadow-sm md:p-12">
            <Section title="Preamble">
              <p className={paragraphClassName}>
                With the following Privacy Policy, we would like to inform you about which types of your personal data
                (hereinafter also referred to briefly as &quot;data&quot;) we process, for which purposes, and to what extent
                within the scope of providing our application.
              </p>
              <p className={paragraphClassName}>The terms used are not gender-specific.</p>
              <p className={paragraphClassName}>
                <strong>Last updated: 8 April 2026</strong>
              </p>
            </Section>

            <Section title="Table of Contents">
              <ul className={listClassName}>
                <li>Preamble</li>
                <li>Controller</li>
                <li>Contact Data Protection Officer</li>
                <li>Overview of Processing Activities</li>
                <li>Relevant Legal Bases</li>
                <li>Security Measures</li>
                <li>Transfer of Personal Data</li>
                <li>International Data Transfers</li>
                <li>General Information on Data Retention and Deletion</li>
                <li>Business Services</li>
                <li>Business Processes and Procedures</li>
                <li>Providers and Services Used in the Course of Business Activities</li>
                <li>Provision of the Online Offering and Web Hosting</li>
                <li>Processing of Data Within the Application (App)</li>
                <li>Registration, Login, and User Account</li>
                <li>Contact and Inquiry Management</li>
                <li>Video Conferences, Online Meetings, Webinars, and Screen Sharing</li>
                <li>Cloud Services</li>
                <li>Promotional Communication by Email, Mail, Fax, or Telephone</li>
                <li>Presences on Social Networks (Social Media)</li>
                <li>Management, Organisation, and Support Tools</li>
                <li>Processing of Data in the Context of Employment Relationships</li>
                <li>Application Procedures</li>
              </ul>
            </Section>

            <Section title="Controller">
              <div className="space-y-1 text-gray-700">
                <p className="font-semibold">Claimity AG</p>
                <p>Wisentalstrasse 7a</p>
                <p>8185 Winkel</p>
                <p>Switzerland</p>
                <p>
                  Email: <MailLink email="info@claimity.ch" />
                </p>
                <p>Authorized representative: Burim Kryeziu</p>
                <p>
                  Email address: <MailLink email="info@claimity.ch" />
                </p>
              </div>
            </Section>

            <Section title="Contact Data Protection Officer">
              <p className={paragraphClassName}>For questions regarding data protection, please contact our data protection advisor:</p>
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

            <Section title="Overview of Processing Activities">
              <p className={paragraphClassName}>
                The following overview summarizes the types of data processed and the purposes of their processing and
                refers to the data subjects concerned.
              </p>

              <div className="space-y-3">
                <h3 className={subTitleClassName}>Types of Data Processed</h3>
                <ul className={listClassName}>
                  <li>Master data.</li>
                  <li>Employment data.</li>
                  <li>Payment data.</li>
                  <li>Location data.</li>
                  <li>Contact data.</li>
                  <li>Content data.</li>
                  <li>Contract data.</li>
                  <li>Usage data.</li>
                  <li>Meta, communication, and procedural data.</li>
                  <li>Applicant data.</li>
                  <li>Image and/or video recordings.</li>
                  <li>Audio recordings.</li>
                  <li>Log data.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className={subTitleClassName}>Categories of Data Subjects</h3>
                <ul className={listClassName}>
                  <li>Recipients of services and clients.</li>
                  <li>Employees.</li>
                  <li>Prospective customers.</li>
                  <li>Communication partners.</li>
                  <li>Users.</li>
                  <li>Applicants.</li>
                  <li>Business and contractual partners.</li>
                  <li>Clients.</li>
                  <li>Depicted persons.</li>
                  <li>Third parties.</li>
                  <li>Customers.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className={subTitleClassName}>Purposes of Processing</h3>
                <ul className={listClassName}>
                  <li>Provision of contractual services and fulfillment of contractual obligations.</li>
                  <li>Communication.</li>
                  <li>Security measures.</li>
                  <li>Direct marketing.</li>
                  <li>Office and organisational procedures.</li>
                  <li>Organisational and administrative procedures.</li>
                  <li>Application procedures.</li>
                  <li>Feedback.</li>
                  <li>Marketing.</li>
                  <li>Provision of our online offering and user-friendliness.</li>
                  <li>Establishment and performance of employment relationships.</li>
                  <li>Information technology infrastructure.</li>
                  <li>Financial and payment management.</li>
                  <li>Public relations.</li>
                  <li>Sales promotion.</li>
                  <li>Business processes and business management procedures.</li>
                </ul>
              </div>
            </Section>

            <Section title="Relevant Legal Bases">
              <p className={paragraphClassName}>
                <strong>Relevant legal bases under Swiss data protection law:</strong> If you are located in Switzerland,
                we process your data on the basis of the Swiss Federal Act on Data Protection ("Swiss FADP"). Unlike,
                for example, the GDPR, the Swiss FADP generally does not require that a legal basis for the processing
                of personal data be specified, and personal data is processed in good faith, lawfully, and in a
                proportionate manner (Art. 6 para. 1 and 2 Swiss FADP). In addition, we collect personal data only for
                a specific purpose that is recognizable to the data subject and process it only in a manner compatible
                with that purpose (Art. 6 para. 3 Swiss FADP).
              </p>
            </Section>

            <Section title="Security Measures">
              <p className={paragraphClassName}>
                In accordance with the legal requirements, taking into account the state of the art, implementation
                costs, and the nature, scope, circumstances, and purposes of processing, as well as the varying
                likelihood and severity of the threat to the rights and freedoms of natural persons, we implement
                appropriate technical and organisational measures to ensure a level of protection appropriate to the
                risk.
              </p>
              <p className={paragraphClassName}>
                These measures include, in particular, safeguarding the confidentiality, integrity, and availability of
                data by controlling physical and electronic access to the data, as well as access to, input of,
                disclosure of, safeguarding of availability of, and segregation of the data. Furthermore, we have
                established procedures to ensure the exercise of data subject rights, the deletion of data, and
                responses to data threats. Moreover, we take the protection of personal data into account as early as
                the development or selection of hardware, software, and procedures, in accordance with the principle of
                data protection by design and by default.
              </p>
              <p className={paragraphClassName}>
                Securing online connections through TLS/SSL encryption technology (HTTPS): In order to protect the data
                of users transmitted via our online services from unauthorized access, we rely on TLS/SSL encryption
                technology. Secure Sockets Layer (SSL) and Transport Layer Security (TLS) are the cornerstones of
                secure data transmission on the internet. These technologies encrypt the information transmitted between
                the website or app and the user&apos;s browser (or between two servers), thereby protecting the data from
                unauthorized access. TLS, as the more advanced and secure version of SSL, ensures that all data
                transmissions meet the highest security standards. If a website is secured by an SSL/TLS certificate,
                this is indicated by the display of HTTPS in the URL. This serves as an indicator to users that their
                data is transmitted securely and in encrypted form.
              </p>
            </Section>

            <Section title="Transfer of Personal Data">
              <p className={paragraphClassName}>
                In the course of our processing of personal data, it may occur that such data is transferred to other
                entities, companies, legally independent organisational units, or persons or disclosed to them. The
                recipients of this data may include, for example, service providers entrusted with IT tasks or providers
                of services and content integrated into a website. In such cases, we observe the legal requirements and,
                in particular, conclude corresponding contracts or agreements serving to protect your data with the
                recipients of your data.
              </p>
            </Section>

            <Section title="International Data Transfers">
              <p className={paragraphClassName}>
                Disclosure of personal data abroad: Under the Swiss FADP, we disclose personal data abroad only if an
                adequate level of protection for the data subjects is ensured (Art. 16 Swiss FADP). If the Swiss
                Federal Council has not determined that an adequate level of protection exists (list:{" "}
                <ExternalLink href="https://www.bj.admin.ch/bj/de/home/staat/datenschutz/internationales/anerkennung-staaten.html">
                  https://www.bj.admin.ch/bj/de/home/staat/datenschutz/internationales/anerkennung-staaten.html
                </ExternalLink>
                ), we implement alternative safeguards.
              </p>
              <p className={paragraphClassName}>
                For data transfers to the United States, we primarily rely on the Data Privacy Framework (DPF), which
                was recognized as a secure legal framework by an adequacy decision of Switzerland dated 15 September
                2024. In addition, we have entered into standard data protection clauses with the respective providers,
                which were approved by the Swiss Federal Data Protection and Information Commissioner (FDPIC) and
                establish contractual obligations to protect your data.
              </p>
              <p className={paragraphClassName}>
                This dual protection ensures comprehensive protection of your data: the DPF forms the primary layer of
                protection, while the standard data protection clauses serve as additional security. Should there be any
                changes within the scope of the DPF, the standard data protection clauses act as a reliable fallback
                option. In this way, we ensure that your data remains adequately protected at all times, even in the
                event of political or legal changes.
              </p>
              <p className={paragraphClassName}>
                For the individual service providers, we inform you whether they are certified under the DPF and whether
                standard data protection clauses are in place. The list of certified companies and further information on
                the DPF can be found on the website of the U.S. Department of Commerce at{" "}
                <ExternalLink href="https://www.dataprivacyframework.gov/">https://www.dataprivacyframework.gov/</ExternalLink>{" "}
                (in English).
              </p>
              <p className={paragraphClassName}>
                For data transfers to other third countries, corresponding safeguards apply, including international
                treaties, specific guarantees, standard data protection clauses approved by the FDPIC, or internal data
                protection rules recognized in advance by the FDPIC or a competent data protection authority of another
                country.
              </p>
            </Section>

            <Section title="General Information on Data Retention and Deletion">
              <p className={paragraphClassName}>
                We delete personal data that we process in accordance with the legal provisions as soon as the
                underlying consents are withdrawn or no further legal bases for processing exist. This applies to cases
                in which the original processing purpose ceases to apply or the data is no longer required. Exceptions
                to this rule exist where legal obligations or special interests require longer retention or archiving of
                the data.
              </p>
              <p className={paragraphClassName}>
                In particular, data that must be retained for commercial or tax law reasons or whose storage is
                necessary for legal prosecution or for the protection of the rights of other natural or legal persons
                must be archived accordingly.
              </p>
              <p className={paragraphClassName}>
                Our privacy notices contain additional information on the retention and deletion of data that applies
                specifically to certain processing operations.
              </p>
              <p className={paragraphClassName}>
                If several retention periods or deletion deadlines are specified for a given date, the longest period
                shall always apply. Data that is no longer retained for the originally intended purpose but due to legal
                requirements or other reasons is processed exclusively for the reasons justifying its retention.
              </p>
              <div className="space-y-3">
                <h3 className={subTitleClassName}>Retention and Deletion of Data</h3>
                <p className={paragraphClassName}>
                  The following general periods apply to retention and archiving under Swiss law:
                </p>
                <ul className={listClassName}>
                  <li>
                    10 years - retention period for books and records, annual financial statements, inventories,
                    management reports, opening balance sheets, accounting vouchers and invoices, as well as all
                    required work instructions and other organisational documents (Art. 958f of the Swiss Code of
                    Obligations (CO)).
                  </li>
                  <li>
                    10 years - data necessary to take into account potential claims for damages or similar contractual
                    claims and rights, as well as for processing related inquiries, based on previous business
                    experience and customary industry practices, is stored for the period of the statutory limitation
                    period of ten years, unless a shorter period of five years is applicable in certain cases (Art.
                    127, 130 CO). After five years, claims for rent, lease, capital interest, and other recurring
                    services, for the delivery of food, for board and innkeeper&apos;s debts, as well as for handicraft
                    work, retail sales of goods, medical care, professional work by lawyers, legal agents, procurators,
                    and notaries, and from employment relationships of employees become time-barred (Art. 128 CO).
                  </li>
                </ul>
              </div>
            </Section>

            <Section title="Business Services">
              <p className={paragraphClassName}>
                We process personal data of our contractual and business partners, such as customers, clients,
                prospective customers, suppliers, and other cooperation partners (collectively referred to as
                &quot;contractual partners&quot;), for the initiation, performance, and handling of contractual relationships as
                well as comparable legal relationships. This also includes pre-contractual measures taken upon request,
                as well as communication in connection with the respective contractual relationship.
              </p>
              <p className={paragraphClassName}>
                The processing serves in particular to fulfill our primary and ancillary contractual obligations. This
                includes providing the agreed services, any update and information obligations, processing warranty and
                other service disruptions, handling revocations, terminations of continuing obligations, reversals,
                reimbursements, as well as handling other contract-related declarations and inquiries. Both one-off
                contracts and ongoing contractual relationships are covered.
              </p>
              <p className={paragraphClassName}>
                In particular, we process master data such as name, address and, where applicable, company name,
                contact data such as email address and telephone number, contract and service data such as subject
                matter of the contract, contract duration, order or transaction number, usage and performance data,
                payment and billing data, as well as communication content and histories. Where necessary, we also
                process data disclosed or transmitted to us in the course of carrying out an assignment.
              </p>
              <p className={paragraphClassName}>
                In addition, we process the data to safeguard our rights and to fulfill legal obligations. This includes
                in particular retention obligations under commercial and tax law, documentation obligations, and, where
                applicable, duties of proof and accountability. Processing is also carried out on the basis of our
                legitimate interests in proper business management, internal administration, risk management, and IT
                security, as well as in protecting our business operations and our contractual partners against misuse,
                risks to data, secrets, and other legal interests. This may also include engaging external service
                providers such as IT and telecommunications providers, transport and logistics companies, payment
                service providers, banks, tax and legal advisors, or other agents, insofar as this is necessary for the
                performance of the contract or to fulfill legal obligations.
              </p>
              <p className={paragraphClassName}>
                Personal data is disclosed to third parties exclusively to the extent necessary for the performance of
                the contract, the implementation of pre-contractual measures, the safeguarding of legitimate interests,
                or the fulfillment of legal obligations. We provide separate information on any further processing,
                particularly for marketing purposes, within this Privacy Policy.
              </p>
              <p className={paragraphClassName}>
                We inform contractual partners of which data is required in the individual case at the time of data
                collection, for example in online forms by means of appropriate markings or in personal contact.
              </p>
              <p className={paragraphClassName}>
                The data is deleted as soon as it is no longer required for the aforementioned purposes and no statutory
                retention obligations prevent deletion. Statutory retention periods, in particular under commercial and
                tax law, may require longer storage. Data transmitted in connection with a specific assignment is deleted
                by us after completion of the assignment and expiry of any retention periods, unless further statutory or
                contractual obligations to retain the data exist.
              </p>
              <p className={paragraphClassName}>
                The legal basis for processing is Art. 6 para. 1 lit. b GDPR for the implementation of pre-contractual
                measures and the performance of the respective contractual relationship, as well as Art. 6 para. 1 lit.
                c GDPR for the fulfillment of legal obligations. Insofar as the processing is based on legitimate
                interests, it is carried out on the basis of Art. 6 para. 1 lit. f GDPR. Where processing is based on
                Art. 6 para. 1 lit. f GDPR, it is carried out to safeguard our legitimate interests in proper and
                efficient business organisation, internal administration and documentation of business transactions, the
                enforcement and defense of legal claims, ensuring IT and data security, preventing misuse and fraud, and
                the economic management and further development of our business operations. These interests exist in
                particular in ensuring secure and legally compliant business operations and preserving our entrepreneurial
                freedom to act.
              </p>
              <ul className={listClassName}>
                <li>
                  <strong>Types of data processed:</strong> Master data (e.g. full name, residential address, contact
                  details, customer number, etc.); payment data (e.g. bank account details, invoices, payment history);
                  contact data (e.g. postal and email addresses or telephone numbers). Contract data (e.g. subject
                  matter of the contract, duration, customer category).
                </li>
                <li>
                  <strong>Data subjects:</strong> Recipients of services and clients; prospective customers. Business and
                  contractual partners.
                </li>
                <li>
                  <strong>Purposes of processing and legitimate interests:</strong> Provision of contractual services and
                  fulfillment of contractual obligations; communication; office and organisational procedures;
                  organisational and administrative procedures. Business processes and business management procedures.
                </li>
                <li>
                  <strong>Retention and deletion:</strong> Deletion in accordance with the information in the section
                  &quot;General Information on Data Retention and Deletion&quot;.
                </li>
              </ul>

              <div className="space-y-3">
                <h3 className={subTitleClassName}>Further Information on Processing Operations, Procedures, and Services</h3>
                <ul className={listClassName}>
                  <li>
                    <strong>Brokerage and intermediary services:</strong> We process the data of our clients and data
                    subjects in accordance with the underlying mandate. We may also process information on the
                    characteristics and circumstances of persons or things belonging to them if this forms part of our
                    mandate. This may include, for example, information on personal living circumstances, movable or
                    immovable property, and financial circumstances.
                    <br />
                    Insofar as necessary for contract performance or required by law, authorized by the clients, or
                    based on our legitimate interests, we disclose or transmit customer data in the context of coverage
                    inquiries, contract conclusions, and the handling of contracts to providers of the brokered services,
                    such as appraisers and experts. <strong>Legal bases:</strong> Contract performance and pre-contractual
                    inquiries (Art. 6 para. 1 sentence 1 lit. b GDPR).
                  </li>
                </ul>
              </div>
            </Section>

            <Section title="Business Processes and Procedures">
              <p className={paragraphClassName}>
                Personal data of recipients of services and clients - including customers, clients, or in special cases,
                mandate clients, patients, or business partners, as well as other third parties - is processed in the
                context of contractual and comparable legal relationships and pre-contractual measures such as the
                initiation of business relationships. This data processing supports and facilitates business operations
                in areas such as customer management, sales, payment transactions, accounting, and project management.
              </p>
              <p className={paragraphClassName}>
                The collected data serves to fulfill contractual obligations and to organise operational processes
                efficiently. This includes handling business transactions, managing customer relationships, optimising
                sales strategies, and ensuring internal invoicing and financial processes. In addition, the data
                supports safeguarding the controller&apos;s rights and promotes administrative tasks and the organisation of
                the company.
              </p>
              <p className={paragraphClassName}>
                Personal data may be disclosed to third parties if this is necessary to fulfill the stated purposes or
                legal obligations. After expiry of statutory retention periods or if the purpose of processing ceases to
                apply, the data is deleted. This also includes data that must be stored for longer due to obligations to
                provide evidence under tax law and other statutory requirements.
              </p>
              <ul className={listClassName}>
                <li>
                  <strong>Types of data processed:</strong> Master data (e.g. full name, residential address, contact
                  details, customer number, etc.); payment data (e.g. bank account details, invoices, payment history);
                  contact data (e.g. postal and email addresses or telephone numbers); content data (e.g. textual or
                  visual messages and contributions and information relating to them, such as details of authorship or
                  time of creation); contract data (e.g. subject matter of the contract, duration, customer category);
                  usage data (e.g. page views and length of stay, click paths, intensity and frequency of use, device
                  types and operating systems used, interactions with content and functions); meta, communication, and
                  procedural data (e.g. IP addresses, time details, identification numbers, persons involved); log data
                  (e.g. log files regarding logins or the retrieval of data or access times). Employment data
                  (information on employees and other persons in an employment relationship).
                </li>
                <li>
                  <strong>Data subjects:</strong> Recipients of services and clients; prospective customers;
                  communication partners; business and contractual partners; customers; third parties; mandate clients.
                  Employees (e.g. staff, applicants, temporary workers, and other employees).
                </li>
                <li>
                  <strong>Purposes of processing and legitimate interests:</strong> Provision of contractual services and
                  fulfillment of contractual obligations; office and organisational procedures; business processes and
                  business management procedures; security measures; provision of our online offering and
                  user-friendliness; communication; financial and payment management; information technology
                  infrastructure (operation and provision of information systems and technical equipment such as
                  computers and servers); marketing. Sales promotion.
                </li>
                <li>
                  <strong>Retention and deletion:</strong> Deletion in accordance with the information in the section
                  &quot;General Information on Data Retention and Deletion&quot;.
                </li>
              </ul>

              <div className="space-y-3">
                <h3 className={subTitleClassName}>Further Information on Processing Operations, Procedures, and Services</h3>
                <ul className={listClassName}>
                  <li>
                    <strong>Mandate management:</strong> Procedures required in the context of mandate management include,
                    for example, acquiring and onboarding new mandate clients, developing strategies to promote client
                    retention, and ensuring effective communication with mandate clients and appointment scheduling.
                    Comprehensive client service is provided. These procedures also include the management and
                    administration of client files, the secure documentation of legal matters, and ensuring the
                    confidentiality and integrity of client data. In addition, processes are defined for disclosing
                    client information to third parties, such as courts or other legal service providers. Procedures are
                    implemented for the secure and data protection-compliant deletion of client data as soon as it is no
                    longer needed or statutory retention periods have expired; <strong>Legal bases:</strong> Contract
                    performance and pre-contractual inquiries (Art. 6 para. 1 sentence 1 lit. b GDPR), legal obligation
                    (Art. 6 para. 1 sentence 1 lit. c GDPR), legitimate interests (Art. 6 para. 1 sentence 1 lit. f
                    GDPR).
                  </li>
                  <li>
                    <strong>Contact management and contact maintenance:</strong> Procedures required in the context of
                    organising, maintaining, and securing contact information (e.g. setting up and maintaining a central
                    contact database, regular updates of contact information, monitoring data integrity, implementing
                    data protection measures, ensuring access controls, performing backups and recoveries of contact
                    data, training employees in the effective use of contact management software, regular review of
                    communication history, and adjustment of contact strategies); <strong>Legal bases:</strong> Contract
                    performance and pre-contractual inquiries (Art. 6 para. 1 sentence 1 lit. b GDPR), legitimate
                    interests (Art. 6 para. 1 sentence 1 lit. f GDPR).
                  </li>
                  <li>
                    <strong>Customer account:</strong> Customers can create an account within our online offering (e.g.
                    a customer or user account, referred to briefly as a &quot;customer account&quot;). If registration of a
                    customer account is required, customers are informed accordingly, as are the details required for
                    registration. Customer accounts are not public and cannot be indexed by search engines. In the
                    context of registration as well as subsequent logins to and use of the customer account, we store
                    customers&apos; IP addresses together with access times in order to prove registration and prevent
                    possible misuse of the customer account. If the customer account has been terminated, the data of the
                    customer account is deleted after the time of termination unless it must be retained for purposes
                    other than provision within the customer account or for legal reasons (e.g. internal storage of
                    customer data, order transactions, or invoices). It is the responsibility of customers to secure
                    their data when terminating the customer account; <strong>Legal bases:</strong> Contract performance
                    and pre-contractual inquiries (Art. 6 para. 1 sentence 1 lit. b GDPR), legitimate interests (Art. 6
                    para. 1 sentence 1 lit. f GDPR).
                  </li>
                  <li>
                    <strong>General payment transactions:</strong> Procedures required for carrying out payment
                    transactions, monitoring bank accounts, and controlling payment flows (e.g. preparation and review of
                    bank transfers, handling of direct debits, review of account statements, monitoring incoming and
                    outgoing payments, chargeback management, account reconciliation, cash management); <strong>Legal
                    bases:</strong> Contract performance and pre-contractual inquiries (Art. 6 para. 1 sentence 1 lit. b
                    GDPR), legitimate interests (Art. 6 para. 1 sentence 1 lit. f GDPR).
                  </li>
                  <li>
                    <strong>Accounting, accounts payable, accounts receivable:</strong> Procedures required for recording,
                    processing, and controlling business transactions in the field of accounts payable and receivable
                    accounting (e.g. preparation and review of incoming and outgoing invoices, monitoring and management
                    of outstanding items, execution of payment transactions, handling of dunning procedures, account
                    reconciliation in relation to receivables and liabilities, accounts payable accounting, and accounts
                    receivable accounting); <strong>Legal bases:</strong> Contract performance and pre-contractual
                    inquiries (Art. 6 para. 1 sentence 1 lit. b GDPR), legal obligation (Art. 6 para. 1 sentence 1 lit.
                    c GDPR), legitimate interests (Art. 6 para. 1 sentence 1 lit. f GDPR).
                  </li>
                  <li>
                    <strong>Financial accounting and taxes:</strong> Procedures required for recording, managing, and
                    controlling financially relevant business transactions and for calculating, reporting, and paying
                    taxes (e.g. coding and posting business transactions, preparing quarterly and annual financial
                    statements, carrying out payment transactions, handling dunning procedures, account reconciliation,
                    tax advice, preparing and filing tax returns, handling tax matters); <strong>Legal bases:</strong>
                    Contract performance and pre-contractual inquiries (Art. 6 para. 1 sentence 1 lit. b GDPR), legal
                    obligation (Art. 6 para. 1 sentence 1 lit. c GDPR), legitimate interests (Art. 6 para. 1 sentence 1
                    lit. f GDPR).
                  </li>
                  <li>
                    <strong>Sales:</strong> Procedures required for planning, implementing, and monitoring measures for the
                    marketing and sale of products or services (e.g. customer acquisition, preparation and follow-up of
                    offers, order processing, customer consulting and support, sales promotion, product training, sales
                    controlling and analysis, management of distribution channels); <strong>Legal bases:</strong> Contract
                    performance and pre-contractual inquiries (Art. 6 para. 1 sentence 1 lit. b GDPR), legitimate
                    interests (Art. 6 para. 1 sentence 1 lit. f GDPR).
                  </li>
                </ul>
              </div>
            </Section>

            <Section title="Providers and Services Used in the Course of Business Activities">
              <p className={paragraphClassName}>
                In the course of our business activities, we use additional services, platforms, interfaces, or plugins
                from third-party providers (collectively referred to as &quot;services&quot;) in compliance with the legal
                requirements. Their use is based on our interests in the proper, lawful, and economical management of
                our business operations and our internal organisation.
              </p>
              <ul className={listClassName}>
                <li>
                  <strong>Types of data processed:</strong> Master data (e.g. full name, residential address, contact
                  details, customer number, etc.); payment data (e.g. bank account details, invoices, payment history);
                  contact data (e.g. postal and email addresses or telephone numbers); content data (e.g. textual or
                  visual messages and contributions and information relating to them, such as details of authorship or
                  time of creation); contract data (e.g. subject matter of the contract, duration, customer category);
                  usage data (e.g. page views and length of stay, click paths, intensity and frequency of use, device
                  types and operating systems used, interactions with content and functions). Meta, communication, and
                  procedural data (e.g. IP addresses, time details, identification numbers, persons involved).
                </li>
                <li>
                  <strong>Data subjects:</strong> Recipients of services and clients; prospective customers. Business and
                  contractual partners.
                </li>
                <li>
                  <strong>Purposes of processing and legitimate interests:</strong> Provision of contractual services and
                  fulfillment of contractual obligations; office and organisational procedures. Business processes and
                  business management procedures.
                </li>
                <li>
                  <strong>Retention and deletion:</strong> Deletion in accordance with the information in the section
                  &quot;General Information on Data Retention and Deletion&quot;.
                </li>
              </ul>
              <div className="space-y-3">
                <h3 className={subTitleClassName}>Further Information on Processing Operations, Procedures, and Services</h3>
                <ul className={listClassName}>
                  <li>
                    <strong>Bexio:</strong> Management of customer and supplier data, preparation of offers, invoicing,
                    accounting (recording and managing business transactions), payroll accounting (salary settlements),
                    payment processing (monitoring incoming and outgoing payments), inventory management (stock
                    management of goods), task and project management; <strong>Service provider:</strong> bexio AG, Alte
                    Jonastrasse 24, 8640 rapperswil, Switzerland; <strong>Legal bases:</strong> Legitimate interests
                    (Art. 6 para. 1 sentence 1 lit. f GDPR); <strong>Website:</strong>{" "}
                    <ExternalLink href="https://www.bexio.com/">https://www.bexio.com/</ExternalLink>;
                    <strong> Privacy Policy:</strong>{" "}
                    <ExternalLink href="https://www.bexio.com/de-CH/richtlinien/datenschutz">
                      https://www.bexio.com/de-CH/richtlinien/datenschutz
                    </ExternalLink>
                    . <strong>Data Processing Agreement:</strong>{" "}
                    <ExternalLink href="https://cdn.www.bexio.com/assets/content/documents/legal/auftragsverarbeitung_DE.pdf">
                      https://cdn.www.bexio.com/assets/content/documents/legal/auftragsverarbeitung_DE.pdf
                    </ExternalLink>
                    .
                  </li>
                </ul>
              </div>
            </Section>

            <Section title="Provision of the Online Offering and Web Hosting">
              <p className={paragraphClassName}>
                We process users&apos; data in order to be able to provide them with our online services. For this purpose,
                we process the user&apos;s IP address, which is necessary in order to transmit the content and functions of
                our online services to the users&apos; browser or end device.
              </p>
              <ul className={listClassName}>
                <li>
                  <strong>Types of data processed:</strong> Usage data (e.g. page views and length of stay, click paths,
                  intensity and frequency of use, device types and operating systems used, interactions with content and
                  functions); meta, communication, and procedural data (e.g. IP addresses, time details,
                  identification numbers, persons involved). Log data (e.g. log files regarding logins or the retrieval
                  of data or access times).
                </li>
                <li>
                  <strong>Data subjects:</strong> Users (e.g. website visitors, users of online services).
                </li>
                <li>
                  <strong>Purposes of processing and legitimate interests:</strong> Provision of our online offering and
                  user-friendliness. Information technology infrastructure (operation and provision of information
                  systems and technical equipment such as computers and servers).
                </li>
                <li>
                  <strong>Retention and deletion:</strong> Deletion in accordance with the information in the section
                  &quot;General Information on Data Retention and Deletion&quot;.
                </li>
              </ul>
              <div className="space-y-3">
                <h3 className={subTitleClassName}>Further Information on Processing Operations, Procedures, and Services</h3>
                <ul className={listClassName}>
                  <li>
                    <strong>Provision of online offering on rented storage space:</strong> For the provision of our
                    online offering, we use storage space, computing capacity, and software that we rent or otherwise
                    obtain from a corresponding server provider (also referred to as a &quot;web host&quot;); <strong>Legal
                    bases:</strong> Legitimate interests (Art. 6 para. 1 sentence 1 lit. f GDPR).
                  </li>
                </ul>
              </div>
            </Section>

            <Section title="Processing of Data Within the Application (App)">
              <p className={paragraphClassName}>
                We process the data of users of our application insofar as this is necessary in order to provide users
                with the application and its functionalities, monitor its security, and further develop it. We may also
                contact users in compliance with the legal requirements if the communication is necessary for purposes
                of administration or use of the application. Otherwise, with regard to the processing of user data, we
                refer to the privacy notices in this Privacy Policy.
              </p>
              <p className={paragraphClassName}>
                <strong>Legal bases:</strong> The processing of data that is required for providing the functionalities
                of the application serves the fulfillment of contractual obligations. This also applies if the provision
                of the functions requires authorization from the users (e.g. permissions for device functions). If the
                processing of data is not necessary for providing the functionalities of the application but serves the
                security of the application or our business interests (e.g. collection of data for the purposes of
                optimizing the application or for security purposes), it is carried out on the basis of our legitimate
                interests. If users are expressly asked for their consent to the processing of their data, the data
                covered by the consent is processed on the basis of that consent.
              </p>
              <ul className={listClassName}>
                <li>
                  <strong>Types of data processed:</strong> Master data (e.g. full name, residential address, contact
                  details, customer number, etc.); usage data (e.g. page views and length of stay, click paths,
                  intensity and frequency of use, device types and operating systems used, interactions with content and
                  functions); meta, communication, and procedural data (e.g. IP addresses, time details,
                  identification numbers, persons involved); payment data (e.g. bank account details, invoices, payment
                  history); contract data (e.g. subject matter of the contract, duration, customer category). Location
                  data (information on the geographical position of a device or a person).
                </li>
                <li>
                  <strong>Data subjects:</strong> Users (e.g. website visitors, users of online services).
                </li>
                <li>
                  <strong>Purposes of processing and legitimate interests:</strong> Provision of contractual services and
                  fulfillment of contractual obligations; security measures. Provision of our online offering and
                  user-friendliness.
                </li>
                <li>
                  <strong>Retention and deletion:</strong> Deletion in accordance with the information in the section
                  &quot;General Information on Data Retention and Deletion&quot;.
                </li>
              </ul>
              <div className="space-y-3">
                <h3 className={subTitleClassName}>Further Information on Processing Operations, Procedures, and Services</h3>
                <ul className={listClassName}>
                  <li>
                    <strong>Commercial use:</strong> We process the data of users of our application, registered users and
                    any test users (hereinafter collectively referred to as &quot;users&quot;), in order to provide them with our
                    contractual services and, on the basis of legitimate interests, to ensure the security of our
                    application and further develop it. The required information is identified as such in the context of
                    the conclusion of usage, order, purchase, or comparable contracts and may include the information
                    necessary for providing the service and, where applicable, billing, as well as contact information
                    so that any consultations can be held; <strong>Legal bases:</strong> Contract performance and
                    pre-contractual inquiries (Art. 6 para. 1 sentence 1 lit. b GDPR).
                  </li>
                  <li>
                    <strong>Storage of a universal and unique identifier (UUID):</strong> The application stores a
                    so-called universally unique identifier (UUID) for purposes of analyzing the use and functionality
                    of the application and for storing user settings. This identifier is generated upon installation of
                    this application (but is not linked to the device, i.e. not a device identifier in that sense),
                    remains stored between application launches and updates, and is deleted when users remove the
                    application from their device.
                  </li>
                  <li>
                    <strong>Processing of stored contacts:</strong> In the course of using our application, the contact
                    information of persons stored in the device&apos;s contact directory (name, email address, telephone
                    number) is processed. The use of the contact information requires authorization from the users,
                    which can be revoked at any time. The use of contact information serves solely to provide the
                    respective functionality of our application in accordance with its description to users or its typical
                    and expected mode of operation. Users are advised that authorization for the processing of contact
                    information must be permissible and, in particular for natural persons, requires their consent or a
                    legal permission.
                  </li>
                  <li>
                    <strong>Use of contact data for contact matching:</strong> The data of contacts stored in the
                    device&apos;s contact directory may be used to verify whether these contacts also use our application.
                    For this purpose, the contact data of the respective contacts (including telephone number, email
                    address, and names) is uploaded to our server and used solely for the purpose of matching.
                  </li>
                  <li>
                    <strong>Processing of location data:</strong> In the course of using our application, location data
                    collected by the device used or otherwise entered by the users is processed. The use of location
                    data requires authorization from the users, which can be revoked at any time. The use of location
                    data serves solely to provide the respective functionality of our application in accordance with its
                    description to users or its typical and expected mode of operation.
                  </li>
                </ul>
              </div>
            </Section>

            <Section title="Registration, Login, and User Account">
              <p className={paragraphClassName}>
                Users may create a user account. In the context of registration, users are informed of the required
                mandatory information, and this information is processed for the purpose of providing the user account
                on the basis of contractual performance. The processed data includes, in particular, login information
                (username, password, and an email address).
              </p>
              <p className={paragraphClassName}>
                In the course of using our registration and login functions as well as the user account, we store the
                IP address and the time of the respective user action. Storage is based on our legitimate interests and
                those of the users in protection against misuse and other unauthorized use. This data is generally not
                disclosed to third parties unless it is necessary to pursue our claims or there is a legal obligation to
                do so.
              </p>
              <p className={paragraphClassName}>
                Users may be informed by email about processes relevant to their user account, such as technical
                changes.
              </p>
              <ul className={listClassName}>
                <li>
                  <strong>Types of data processed:</strong> Master data (e.g. full name, residential address, contact
                  details, customer number, etc.); contact data (e.g. postal and email addresses or telephone numbers);
                  content data (e.g. textual or visual messages and contributions and information relating to them, such
                  as details of authorship or time of creation); usage data (e.g. page views and length of stay, click
                  paths, intensity and frequency of use, device types and operating systems used, interactions with
                  content and functions). Log data (e.g. log files regarding logins or the retrieval of data or access
                  times).
                </li>
                <li>
                  <strong>Data subjects:</strong> Users (e.g. website visitors, users of online services).
                </li>
                <li>
                  <strong>Purposes of processing and legitimate interests:</strong> Provision of contractual services and
                  fulfillment of contractual obligations; security measures; organisational and administrative
                  procedures. Provision of our online offering and user-friendliness.
                </li>
                <li>
                  <strong>Retention and deletion:</strong> Deletion in accordance with the information in the section
                  &quot;General Information on Data Retention and Deletion&quot;. Deletion after termination.
                </li>
              </ul>
              <div className="space-y-3">
                <h3 className={subTitleClassName}>Further Information on Processing Operations, Procedures, and Services</h3>
                <ul className={listClassName}>
                  <li>
                    <strong>Registration using real names:</strong> Due to the nature of our community, we ask users to
                    use our offering only under their real names. This means that the use of pseudonyms is not
                    permitted; <strong>Legal bases:</strong> Contract performance and pre-contractual inquiries (Art. 6
                    para. 1 sentence 1 lit. b GDPR).
                  </li>
                  <li>
                    <strong>User profiles are not public:</strong> User profiles are not publicly visible or accessible.
                  </li>
                  <li>
                    <strong>Two-factor authentication:</strong> Two-factor authentication provides an additional layer of
                    security for your user account and ensures that only you can access your account, even if someone
                    else knows your password. For this purpose, in addition to your password, you must complete another
                    authentication measure (e.g. enter a code sent to a mobile device). We will inform you about the
                    procedure used by us; <strong>Legal bases:</strong> Contract performance and pre-contractual inquiries
                    (Art. 6 para. 1 sentence 1 lit. b GDPR).
                  </li>
                </ul>
              </div>
            </Section>

            <Section title="Contact and Inquiry Management">
              <p className={paragraphClassName}>
                When contacting us (e.g. by post, contact form, email, telephone, or via social media), as well as in
                the context of existing user and business relationships, the details of the requesting persons are
                processed insofar as this is necessary to answer the contact inquiries and any requested measures.
              </p>
              <ul className={listClassName}>
                <li>
                  <strong>Types of data processed:</strong> Contact data (e.g. postal and email addresses or telephone
                  numbers); content data (e.g. textual or visual messages and contributions and information relating to
                  them, such as details of authorship or time of creation). Meta, communication, and procedural data
                  (e.g. IP addresses, time details, identification numbers, persons involved).
                </li>
                <li>
                  <strong>Data subjects:</strong> Communication partners.
                </li>
                <li>
                  <strong>Purposes of processing and legitimate interests:</strong> Communication; organisational and
                  administrative procedures; feedback (e.g. collecting feedback via online form). Provision of our online
                  offering and user-friendliness.
                </li>
                <li>
                  <strong>Retention and deletion:</strong> Deletion in accordance with the information in the section
                  &quot;General Information on Data Retention and Deletion&quot;.
                </li>
              </ul>
              <div className="space-y-3">
                <h3 className={subTitleClassName}>Further Information on Processing Operations, Procedures, and Services</h3>
                <ul className={listClassName}>
                  <li>
                    <strong>Contact form:</strong> When contacting us via our contact form, by email, or by other means
                    of communication, we process the personal data transmitted to us in order to respond to and handle
                    the respective concern. This generally includes details such as name, contact information, and, where
                    applicable, further information communicated to us that is necessary for appropriate processing. We
                    use this data exclusively for the stated purpose of contacting and communicating; <strong>Legal
                    bases:</strong> Contract performance and pre-contractual inquiries (Art. 6 para. 1 sentence 1 lit. b
                    GDPR), legitimate interests (Art. 6 para. 1 sentence 1 lit. f GDPR).
                  </li>
                </ul>
              </div>
            </Section>

            <Section title="Video Conferences, Online Meetings, Webinars, and Screen Sharing">
              <p className={paragraphClassName}>
                We use platforms and applications from other providers (hereinafter referred to as &quot;conference
                platforms&quot;) for the purpose of conducting video and audio conferences, webinars, and other types of
                video and audio meetings (collectively referred to hereinafter as &quot;conference&quot;). When selecting the
                conference platforms and their services, we observe the legal requirements.
              </p>
              <p className={paragraphClassName}>
                <strong>Data processed by conference platforms:</strong> In the course of participating in a conference,
                the conference platforms process the personal data of participants listed below. The scope of processing
                depends, on the one hand, on which data is requested in the context of a specific conference (e.g.
                provision of access data or real names) and which optional details are provided by the participants. In
                addition to processing for the purpose of conducting the conference, participant data may also be
                processed by the conference platforms for security purposes or service optimisation. The processed data
                includes personal data (first name, last name), contact information (email address, telephone number),
                access data (access codes or passwords), profile pictures, information on professional role/function,
                the IP address of the internet access, information on participants&apos; end devices, their operating
                systems, the browser and its technical and language settings, information on the content-related
                communication processes, i.e. chat entries and audio and video data, as well as the use of other
                available functions (e.g. surveys). Content of communications is encrypted to the extent technically
                provided by the conference providers. If participants are registered as users with the conference
                platforms, further data may be processed in accordance with the agreement with the respective conference
                provider.
              </p>
              <p className={paragraphClassName}>
                <strong>Logging and recordings:</strong> If text inputs, participation results (e.g. from surveys), as
                well as video or audio recordings are logged, participants will be transparently informed in advance and,
                where required, asked for their consent.
              </p>
              <p className={paragraphClassName}>
                <strong>Data protection measures for participants:</strong> Please note the details of the processing of
                your data by the conference platforms in their privacy notices and select the security and data
                protection settings most suitable for you within the conference platform settings. Furthermore, for the
                duration of a video conference, please ensure data protection and the protection of personality rights in
                the background of your recording (e.g. by informing cohabitants, locking doors, and using, where
                technically possible, the function to blur the background). Links to conference rooms and access data
                must not be passed on to unauthorized third parties.
              </p>
              <p className={paragraphClassName}>
                <strong>Notes on legal bases:</strong> If, in addition to the conference platforms, we also process user
                data and ask users for their consent to the use of the conference platforms or certain functions (e.g.
                consent to recording conferences), the legal basis for processing is that consent. Furthermore, our
                processing may be necessary for the fulfillment of our contractual obligations (e.g. in participant
                lists, in the event of processing meeting results, etc.). Otherwise, user data is processed on the basis
                of our legitimate interests in efficient and secure communication with our communication partners.
              </p>
              <ul className={listClassName}>
                <li>
                  <strong>Types of data processed:</strong> Master data (e.g. full name, residential address, contact
                  details, customer number, etc.); contact data (e.g. postal and email addresses or telephone numbers);
                  content data (e.g. textual or visual messages and contributions and information relating to them, such
                  as details of authorship or time of creation); usage data (e.g. page views and length of stay, click
                  paths, intensity and frequency of use, device types and operating systems used, interactions with
                  content and functions); image and/or video recordings (e.g. photographs or video recordings of a
                  person); audio recordings. Log data (e.g. log files regarding logins or the retrieval of data or
                  access times).
                </li>
                <li>
                  <strong>Data subjects:</strong> Communication partners; users (e.g. website visitors, users of online
                  services). Depicted persons.
                </li>
                <li>
                  <strong>Purposes of processing and legitimate interests:</strong> Provision of contractual services and
                  fulfillment of contractual obligations; communication. Office and organisational procedures.
                </li>
                <li>
                  <strong>Retention and deletion:</strong> Deletion in accordance with the information in the section
                  &quot;General Information on Data Retention and Deletion&quot;.
                </li>
              </ul>
              <div className="space-y-3">
                <h3 className={subTitleClassName}>Further Information on Processing Operations, Procedures, and Services</h3>
                <ul className={listClassName}>
                  <li>
                    <strong>Microsoft Teams:</strong> Used for conducting online events and conferences and for
                    communication with internal and external participants. Voice transmission, direct messages, group
                    communication, and collaboration functions are used; processed are name, business contact details,
                    work profile, participation, and content (audio/video, speech, chat, files, speech transcription)
                    for purposes of and due to interests in increasing efficiency and productivity, cost efficiency,
                    flexibility, mobility, improved communication, IT security, use of a central platform, and
                    Microsoft business handling. Audio signals are generally not stored unless recording is activated.
                    Meeting and conference recordings are stored by default for 90 days unless another period is
                    specified. Chat and file contents are stored according to policies determined by the administrator or
                    user; by default, no automatic deletion is set. Channels must be renewed every 180 days, otherwise
                    content is deleted. In addition, system-generated log, diagnostic, and metadata are processed, and
                    diagnostic data is collected for product stability, security, and improvement; <strong>Service
                    provider:</strong> Microsoft Ireland Operations Limited, One Microsoft Place, South County Business
                    Park, Leopardstown, Dublin 18, D18 P521, Ireland; Microsoft Corporation, One Microsoft Way,
                    Redmond, WA 98052-6399, USA; <strong>Legal bases:</strong> Legitimate interests (Art. 6 para. 1
                    sentence 1 lit. f GDPR); <strong>Website:</strong>{" "}
                    <ExternalLink href="https://www.microsoft.com/de-de/microsoft-teams/">
                      https://www.microsoft.com/de-de/microsoft-teams/
                    </ExternalLink>
                    ; <strong>Privacy Policy:</strong>{" "}
                    <ExternalLink href="https://privacy.microsoft.com/de-de/privacystatement">
                      https://privacy.microsoft.com/de-de/privacystatement
                    </ExternalLink>
                    , <strong>Security information:</strong>{" "}
                    <ExternalLink href="https://www.microsoft.com/de-de/trustcenter">
                      https://www.microsoft.com/de-de/trustcenter
                    </ExternalLink>
                    . <strong>Basis for third-country transfers:</strong> Data Privacy Framework (DPF), standard
                    contractual clauses.
                  </li>
                </ul>
              </div>
            </Section>

            <Section title="Cloud Services">
              <p className={paragraphClassName}>
                We use software services accessible via the internet and operated on the servers of their providers
                (so-called &quot;cloud services,&quot; also referred to as &quot;Software as a Service&quot;) for the storage and
                management of content (e.g. document storage and management, exchange of documents, content, and
                information with specific recipients, or publication of content and information).
              </p>
              <p className={paragraphClassName}>
                In this context, personal data may be processed and stored on the providers&apos; servers insofar as this
                data forms part of communication processes with us or is otherwise processed by us as set out in this
                Privacy Policy. This data may include, in particular, users&apos; master data and contact data, data on
                transactions, contracts, other processes, and their content. The providers of cloud services also
                process usage data and metadata used by them for security purposes and service optimisation.
              </p>
              <p className={paragraphClassName}>
                If, with the help of the cloud services, we provide forms or other documents and content for other users
                or publicly accessible websites, the providers may store cookies on users&apos; devices for web analysis
                purposes or to remember user settings (e.g. in the case of media control).
              </p>
              <ul className={listClassName}>
                <li>
                  <strong>Types of data processed:</strong> Master data (e.g. full name, residential address, contact
                  details, customer number, etc.); contact data (e.g. postal and email addresses or telephone numbers);
                  content data (e.g. textual or visual messages and contributions and information relating to them, such
                  as details of authorship or time of creation); usage data (e.g. page views and length of stay, click
                  paths, intensity and frequency of use, device types and operating systems used, interactions with
                  content and functions). Meta, communication, and procedural data (e.g. IP addresses, time details,
                  identification numbers, persons involved).
                </li>
                <li>
                  <strong>Data subjects:</strong> Prospective customers; communication partners; business and contractual
                  partners. Users (e.g. website visitors, users of online services).
                </li>
                <li>
                  <strong>Purposes of processing and legitimate interests:</strong> Office and organisational procedures;
                  information technology infrastructure (operation and provision of information systems and technical
                  equipment such as computers and servers). Provision of our online offering and user-friendliness.
                </li>
                <li>
                  <strong>Retention and deletion:</strong> Deletion in accordance with the information in the section
                  &quot;General Information on Data Retention and Deletion&quot;.
                </li>
              </ul>
              <div className="space-y-3">
                <h3 className={subTitleClassName}>Further Information on Processing Operations, Procedures, and Services</h3>
                <ul className={listClassName}>
                  <li>
                    <strong>Microsoft 365 and Microsoft cloud services:</strong> Provision of applications, protection of
                    data and IT systems, and use of system-generated log, diagnostic, and metadata for contract
                    performance by Microsoft. Processed are contact data (name, email address), content data (files,
                    comments, profiles), software setup and inventory data, device connectivity and configuration data,
                    work interactions (badge swipe), as well as log and metadata. Processing is carried out for purposes
                    of increasing efficiency and productivity, cost efficiency, flexibility, mobility, improved
                    communication, integration of Microsoft services, IT security, and Microsoft business handling. Data
                    retention is governed by the respective documents and company policies, up to 12 months for Defender
                    (protection of data and IT systems) and 10 days for print management. In addition, diagnostic data
                    is collected for product stability and improvement; <strong>Service provider:</strong> Microsoft
                    Ireland Operations Limited, One Microsoft Place, South County Business Park, Leopardstown, Dublin
                    18, D18 P521, Ireland; Microsoft Corporation, One Microsoft Way, Redmond, WA 98052-6399, USA;
                    <strong> Legal bases:</strong> Legitimate interests (Art. 6 para. 1 sentence 1 lit. f GDPR);
                    <strong> Website:</strong>{" "}
                    <ExternalLink href="https://microsoft.com/de-de">https://microsoft.com/de-de</ExternalLink>;
                    <strong> Privacy Policy:</strong>{" "}
                    <ExternalLink href="https://privacy.microsoft.com/de-de/privacystatement">
                      https://privacy.microsoft.com/de-de/privacystatement
                    </ExternalLink>
                    , <strong>Security information:</strong>{" "}
                    <ExternalLink href="https://www.microsoft.com/de-de/trustcenter">
                      https://www.microsoft.com/de-de/trustcenter
                    </ExternalLink>
                    ; <strong>Data Processing Agreement:</strong>{" "}
                    <ExternalLink href="https://www.microsoft.com/licensing/docs/view/Microsoft-Products-and-Services-Data-Protection-Addendum-DPA">
                      https://www.microsoft.com/licensing/docs/view/Microsoft-Products-and-Services-Data-Protection-Addendum-DPA
                    </ExternalLink>
                    . <strong>Basis for third-country transfers:</strong> Data Privacy Framework (DPF), standard
                    contractual clauses.
                  </li>
                  <li>
                    <strong>Microsoft Azure:</strong> Services in the field of providing information technology
                    infrastructure and related services (e.g. storage space and/or computing capacities);
                    <strong> Service provider:</strong> Microsoft Ireland Operations Limited, One Microsoft Place, South
                    County Business Park, Leopardstown, Dublin 18, D18 P521, Ireland; <strong>Legal bases:</strong>
                    Legitimate interests (Art. 6 para. 1 sentence 1 lit. f GDPR); <strong>Website:</strong>{" "}
                    <ExternalLink href="https://azure.microsoft.com">https://azure.microsoft.com</ExternalLink>;
                    <strong> Privacy Policy:</strong>{" "}
                    <ExternalLink href="https://privacy.microsoft.com/de-de/privacystatement">
                      https://privacy.microsoft.com/de-de/privacystatement
                    </ExternalLink>
                    ; <strong>Data Processing Agreement:</strong>{" "}
                    <ExternalLink href="https://azure.microsoft.com/de-de/support/legal/">
                      https://azure.microsoft.com/de-de/support/legal/
                    </ExternalLink>
                    . <strong>Basis for third-country transfers:</strong> Data Privacy Framework (DPF), standard
                    contractual clauses ({" "}
                    <ExternalLink href="https://azure.microsoft.com/en-us/support/legal/">
                      https://azure.microsoft.com/en-us/support/legal/
                    </ExternalLink>
                    ).
                  </li>
                </ul>
              </div>
            </Section>

            <Section title="Promotional Communication by Email, Mail, Fax, or Telephone">
              <p className={paragraphClassName}>
                We process personal data for purposes of promotional communication, which may take place via various
                channels such as email, telephone, mail, or fax in accordance with the legal requirements.
              </p>
              <p className={paragraphClassName}>
                Recipients have the right to withdraw consent given at any time or to object to promotional
                communication at any time free of charge using the contact options mentioned above.
              </p>
              <p className={paragraphClassName}>
                After withdrawal or objection, we store the data required to prove the previous authorization for
                contact or dispatch for up to three years after the end of the year of withdrawal or objection on the
                basis of our legitimate interests. The processing of this data is limited to the purpose of defending
                against possible claims. On the basis of the legitimate interest in permanently observing the withdrawal
                or objection of users, we also store the data required to avoid renewed contact (e.g. depending on the
                communication channel, the email address, telephone number, or name).
              </p>
              <ul className={listClassName}>
                <li>
                  <strong>Types of data processed:</strong> Master data (e.g. full name, residential address, contact
                  details, customer number, etc.); contact data (e.g. postal and email addresses or telephone numbers).
                  Content data (e.g. textual or visual messages and contributions and information relating to them, such
                  as details of authorship or time of creation).
                </li>
                <li>
                  <strong>Data subjects:</strong> Communication partners.
                </li>
                <li>
                  <strong>Purposes of processing and legitimate interests:</strong> Direct marketing (e.g. by email or
                  post); marketing. Sales promotion.
                </li>
                <li>
                  <strong>Retention and deletion:</strong> Deletion in accordance with the information in the section
                  &quot;General Information on Data Retention and Deletion&quot;.
                </li>
              </ul>
            </Section>

            <Section title="Presences on Social Networks (Social Media)">
              <p className={paragraphClassName}>
                We maintain online presences within social networks and process user data in this context in order to
                communicate with users active there or to offer information about us.
              </p>
              <p className={paragraphClassName}>
                We point out that user data may be processed outside the European Union. This may result in risks for
                users because, for example, the enforcement of user rights may be made more difficult.
              </p>
              <p className={paragraphClassName}>
                Furthermore, user data within social networks is generally processed for market research and advertising
                purposes. For example, usage profiles may be created on the basis of usage behavior and resulting user
                interests. These usage profiles may in turn be used, for example, to place advertisements within and
                outside the networks that are presumed to correspond to the interests of the users. For these purposes,
                cookies are generally stored on users&apos; computers in which usage behavior and user interests are stored.
                In addition, data may also be stored in the usage profiles independently of the devices used by users
                (in particular, if they are members of the respective platforms and are logged into them).
              </p>
              <p className={paragraphClassName}>
                For a detailed presentation of the respective forms of processing and the objection options (opt-out),
                we refer to the privacy policies and information provided by the operators of the respective networks.
              </p>
              <p className={paragraphClassName}>
                Also in the case of requests for information and the assertion of data subject rights, we point out that
                these can be exercised most effectively with the providers. Only the providers have access to the user
                data and can directly take appropriate measures and provide information. Should you nevertheless require
                assistance, you can contact us.
              </p>
              <ul className={listClassName}>
                <li>
                  <strong>Types of data processed:</strong> Contact data (e.g. postal and email addresses or telephone
                  numbers); content data (e.g. textual or visual messages and contributions and information relating to
                  them, such as details of authorship or time of creation). Usage data (e.g. page views and length of
                  stay, click paths, intensity and frequency of use, device types and operating systems used,
                  interactions with content and functions).
                </li>
                <li>
                  <strong>Data subjects:</strong> Users (e.g. website visitors, users of online services).
                </li>
                <li>
                  <strong>Purposes of processing and legitimate interests:</strong> Communication; feedback (e.g.
                  collecting feedback via online form). Public relations.
                </li>
                <li>
                  <strong>Retention and deletion:</strong> Deletion in accordance with the information in the section
                  &quot;General Information on Data Retention and Deletion&quot;.
                </li>
              </ul>
              <div className="space-y-3">
                <h3 className={subTitleClassName}>Further Information on Processing Operations, Procedures, and Services</h3>
                <ul className={listClassName}>
                  <li>
                    <strong>LinkedIn:</strong> Social network - We are jointly responsible with LinkedIn Ireland
                    Unlimited Company for the collection (but not the further processing) of data of visitors used to
                    create the &quot;Page Insights&quot; (statistics) of our LinkedIn profiles. This data includes information
                    about the types of content users view or interact with and the actions they take. In addition,
                    details about the devices used are collected, such as IP addresses, operating system, browser type,
                    language settings, and cookie data, as well as details from user profiles, such as job function,
                    country, industry, hierarchy level, company size, and employment status. Data protection information
                    regarding the processing of user data by LinkedIn can be found in LinkedIn&apos;s privacy notice:{" "}
                    <ExternalLink href="https://www.linkedin.com/legal/privacy-policy">
                      https://www.linkedin.com/legal/privacy-policy
                    </ExternalLink>
                    .
                    <br />
                    We have concluded a special agreement with LinkedIn Ireland (&quot;Page Insights Joint Controller
                    Addendum,&quot;{" "}
                    <ExternalLink href="https://legal.linkedin.com/pages-joint-controller-addendum">
                      https://legal.linkedin.com/pages-joint-controller-addendum
                    </ExternalLink>
                    ), which in particular regulates which security measures LinkedIn must observe and in which LinkedIn
                    has agreed to fulfill the rights of data subjects (i.e. users can, for example, direct requests for
                    access or deletion directly to LinkedIn). The rights of users (in particular the right to access,
                    deletion, objection, and complaint to the competent supervisory authority) are not restricted by the
                    agreements with LinkedIn. Joint controllership is limited to the collection and transmission of the
                    data to LinkedIn Ireland Unlimited Company, a company established in the EU. Further processing of
                    the data lies exclusively with LinkedIn Ireland Unlimited Company, in particular as regards the
                    transfer of the data to the parent company LinkedIn Corporation in the USA; <strong>Service
                    provider:</strong> LinkedIn Ireland Unlimited Company, Wilton Plaza, Dublin 2, Ireland;
                    <strong> Legal bases:</strong> Legitimate interests (Art. 6 para. 1 sentence 1 lit. f GDPR);
                    <strong> Website:</strong>{" "}
                    <ExternalLink href="https://www.linkedin.com">https://www.linkedin.com</ExternalLink>;
                    <strong> Privacy Policy:</strong>{" "}
                    <ExternalLink href="https://www.linkedin.com/legal/privacy-policy">
                      https://www.linkedin.com/legal/privacy-policy
                    </ExternalLink>
                    ; <strong>Basis for third-country transfers:</strong> Data Privacy Framework (DPF), standard
                    contractual clauses ({" "}
                    <ExternalLink href="https://legal.linkedin.com/dpa">https://legal.linkedin.com/dpa</ExternalLink>
                    ). <strong>Objection option (Opt-Out):</strong>{" "}
                    <ExternalLink href="https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out">
                      https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out
                    </ExternalLink>
                    .
                  </li>
                </ul>
              </div>
            </Section>

            <Section title="Management, Organisation, and Support Tools">
              <p className={paragraphClassName}>
                We use services, platforms, and software from other providers (hereinafter referred to as
                &quot;third-party providers&quot;) for purposes of organisation, administration, planning, and provision of our
                services. When selecting the third-party providers and their services, we observe the legal
                requirements.
              </p>
              <p className={paragraphClassName}>
                In this context, personal data may be processed and stored on the servers of the third-party providers.
                Various types of data that we process in accordance with this Privacy Policy may be affected. This may
                include, in particular, users&apos; master data and contact data, data relating to transactions, contracts,
                other processes, and their content.
              </p>
              <p className={paragraphClassName}>
                If users are referred to the third-party providers or their software or platforms in the context of
                communication or business or other relationships with us, the third-party providers may process usage
                data and metadata for security purposes, service optimisation, or marketing purposes. We therefore ask
                that you observe the privacy notices of the respective third-party providers.
              </p>
              <ul className={listClassName}>
                <li>
                  <strong>Types of data processed:</strong> Content data (e.g. textual or visual messages and
                  contributions and information relating to them, such as details of authorship or time of creation);
                  usage data (e.g. page views and length of stay, click paths, intensity and frequency of use, device
                  types and operating systems used, interactions with content and functions). Meta, communication, and
                  procedural data (e.g. IP addresses, time details, identification numbers, persons involved).
                </li>
                <li>
                  <strong>Data subjects:</strong> Communication partners. Users (e.g. website visitors, users of online
                  services).
                </li>
                <li>
                  <strong>Purposes of processing and legitimate interests:</strong> Provision of contractual services and
                  fulfillment of contractual obligations. Office and organisational procedures.
                </li>
                <li>
                  <strong>Retention and deletion:</strong> Deletion in accordance with the information in the section
                  &quot;General Information on Data Retention and Deletion&quot;.
                </li>
              </ul>
            </Section>

            <Section title="Processing of Data in the Context of Employment Relationships">
              <p className={paragraphClassName}>
                In the context of employment relationships, personal data is processed with the aim of effectively
                organising the establishment, implementation, and termination of such relationships. This data
                processing supports various operational and administrative functions required for managing employee
                relationships.
              </p>
              <p className={paragraphClassName}>
                The data processing encompasses various aspects ranging from contract initiation to contract termination.
                This includes organising and managing daily working hours, managing access rights and permissions, and
                handling personnel development measures and employee discussions. The processing also serves payroll and
                salary administration, which are critical aspects of contract performance.
              </p>
              <p className={paragraphClassName}>
                In addition, the data processing takes into account legitimate interests of the responsible employer,
                such as ensuring workplace safety or recording performance data for the evaluation and optimisation of
                operational processes. Furthermore, the data processing includes the disclosure of employment data in
                the context of external communication and publication processes where this is necessary for operational
                or legal purposes.
              </p>
              <p className={paragraphClassName}>
                Such data processing always takes place in compliance with the applicable legal framework, with the goal
                of creating and maintaining a fair and efficient working environment. This also includes consideration of
                the data protection of the employees concerned, the anonymisation or deletion of data after the
                processing purpose has been fulfilled or in accordance with statutory retention periods.
              </p>
              <ul className={listClassName}>
                <li>
                  <strong>Types of data processed:</strong> Employment data (information on employees and other persons
                  in an employment relationship).
                </li>
                <li>
                  <strong>Data subjects:</strong> Employees (e.g. staff, applicants, temporary workers, and other
                  employees).
                </li>
                <li>
                  <strong>Purposes of processing and legitimate interests:</strong> Establishment and performance of
                  employment relationships (processing of employee data in the context of the establishment and
                  performance of employment relationships). Business processes and business management procedures.
                </li>
              </ul>
            </Section>

            <Section title="Application Procedures">
              <p className={paragraphClassName}>
                The application procedure requires that applicants provide us with the data necessary for their
                assessment and selection. Which information is required can be derived from the job description or, in
                the case of online forms, from the details provided there.
              </p>
              <p className={paragraphClassName}>
                As a rule, the required information includes personal details such as name, address, a means of contact,
                and proof of the qualifications necessary for a position. Upon request, we are also happy to inform you
                which details are required.
              </p>
              <p className={paragraphClassName}>
                Where available, applicants may submit their applications via our online form, which is encrypted in
                accordance with the latest state of the art. Alternatively, applications may also be sent to us by
                email. However, we would like to point out that emails on the internet are generally not sent in
                encrypted form. Although emails are generally encrypted during transmission, this is not the case on the
                servers from which they are sent and received. We can therefore assume no responsibility for the
                security of the application on its transmission path between the sender and our server.
              </p>
              <p className={paragraphClassName}>
                For purposes of searching for applicants, submitting applications, and selecting applicants, we may, in
                compliance with the legal requirements, make use of applicant management or recruitment software and
                platforms and services of third-party providers.
              </p>
              <p className={paragraphClassName}>
                Applicants are welcome to contact us regarding the type of submission of their application or to send us
                their application by post.
              </p>
              <p className={paragraphClassName}>
                <strong>Processing of special categories of data:</strong> Insofar as special categories of personal
                data (Art. 9 para. 1 GDPR, e.g. health data such as severe disability status or ethnic origin) are
                requested from applicants or communicated by them in the context of the application procedure, such data
                is processed so that the controller or the data subject can exercise the rights arising from labor law
                and the law of social security and social protection and comply with related obligations, in the case of
                protection of the vital interests of the applicants or other persons, or for purposes of preventive
                healthcare or occupational medicine, for the assessment of the working capacity of the employee, for
                medical diagnostics, care or treatment in the health or social sector, or for the administration of
                systems and services in the health or social sector.
              </p>
              <p className={paragraphClassName}>
                <strong>Deletion of data:</strong> The data provided by applicants may be further processed by us for the
                purposes of the employment relationship in the event of a successful application. Otherwise, if the
                application for a job offer is unsuccessful, the applicants&apos; data is deleted. Applicants&apos; data is also
                deleted if an application is withdrawn, which applicants are entitled to do at any time. Subject to a
                justified revocation by the applicants, deletion takes place no later than after the expiry of a period
                of six months so that we can answer any follow-up questions regarding the application and comply with our
                obligations to provide evidence under the regulations on equal treatment of applicants. Invoices for any
                reimbursement of travel expenses are archived in accordance with tax law requirements.
              </p>
              <p className={paragraphClassName}>
                <strong>Inclusion in an applicant pool:</strong> Inclusion in an applicant pool, if offered, is based on
                consent. Applicants are informed that their consent to inclusion in the talent pool is voluntary, has no
                influence on the current application procedure, and that they may revoke their consent for the future at
                any time.
              </p>
              <ul className={listClassName}>
                <li>
                  <strong>Types of data processed:</strong> Master data (e.g. full name, residential address, contact
                  details, customer number, etc.); contact data (e.g. postal and email addresses or telephone numbers);
                  content data (e.g. textual or visual messages and contributions and information relating to them, such
                  as details of authorship or time of creation). Applicant data (e.g. information on the person, postal
                  and contact addresses, the documents belonging to the application and the information contained in
                  them, such as cover letter, CV, certificates, as well as further information voluntarily communicated
                  by applicants regarding their person or qualification in relation to a specific position).
                </li>
                <li>
                  <strong>Data subjects:</strong> Applicants.
                </li>
                <li>
                  <strong>Purposes of processing and legitimate interests:</strong> Application procedures
                  (establishment and any later performance as well as possible later termination of the employment
                  relationship).
                </li>
                <li>
                  <strong>Retention and deletion:</strong> Deletion in accordance with the information in the section
                  &quot;General Information on Data Retention and Deletion&quot;.
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
