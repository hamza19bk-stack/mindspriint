/**
 * Pages légales en anglais britannique (utilisées quand site.seo.lang n'est pas « fr ».)
 * Même forme que le bloc `legal` de content.ts ; aucune dépendance à content.ts (pas de cycle).
 *
 * Modèles à faire relire par un professionnel du droit avant mise en production.
 */
import { site } from './site';
import { isSet } from '../lib/utils';

const L = site.legal;
const MISS = '(to be completed)';
const val = (v: string) => (isSet(v) ? v : MISS);

const hasMail = isSet(site.contact.email);
const hasTel = isSet(site.contact.phone);
const hasWa = isSet(site.social.whatsapp);
const hasCal = isSet(site.booking.calendlyUrl);
const hasSocial = ['instagram', 'facebook', 'tiktok', 'youtube', 'linkedin'].some((k) =>
  isSet(site.social[k as keyof typeof site.social]),
);
const editorName = isSet(L.businessName) ? L.businessName : 'the owner of this website';
const channelList = [hasMail ? 'by email' : '', hasTel ? 'by phone' : '', hasWa ? 'on WhatsApp' : ''].filter(Boolean);
const channelsText =
  channelList.length > 1
    ? `${channelList.slice(0, -1).join(', ')} or ${channelList[channelList.length - 1]}`
    : channelList.join('');

export const legalEn = {
  mentions: {
    seo: {
      title: 'Legal notice',
      description: 'Legal notice: who runs this website, business details, hosting and intellectual property.',
    },
    title: 'Legal notice',
    intro:
      'This page sets out who runs this website, how to get in touch, and who hosts it. If anything here looks out of date, please let us know.',
    sections: [
      {
        title: 'Business details',
        rows: [
          { label: 'Business name', value: L.businessName, required: true },
          { label: 'Legal form', value: L.legalForm, required: true },
          { label: 'Company number', value: L.siret, required: false },
          { label: 'Place of registration', value: L.registration, required: false },
          { label: 'VAT registration number', value: L.vatNumber, required: false },
          { label: 'Business address', value: L.address, required: true },
          { label: 'Email', value: site.contact.email, required: true },
          { label: 'Telephone', value: site.contact.phone, required: false },
        ],
        paragraphs: [
          'If this business is a limited company, its registered name, company number, registered office and place of registration are shown above, as required by the Companies Act 2006. If it is run by a sole trader, the owner name and a business address are shown instead.',
        ],
      },
      {
        title: 'Responsible for this website',
        rows: [{ label: 'Name', value: L.publicationDirector, required: true }],
      },
      {
        title: 'Hosting',
        rows: [
          { label: 'Company', value: L.host.name, required: true },
          { label: 'Address', value: L.host.address, required: true },
          { label: 'Telephone', value: L.host.phone, required: true },
          { label: 'Website', value: L.host.url, required: true },
        ],
        paragraphs: ['This website is published with GitHub Pages, a service provided by the company above.'],
      },
      {
        title: 'What we do',
        paragraphs: [
          'Personal training: one-to-one sessions in person or online, personalised training programmes, and general guidance on everyday eating habits alongside training.',
          'This is not medical treatment. No diet is prescribed, and nothing here replaces advice from a qualified healthcare professional. If you have any doubt about your health, speak to your GP before starting or returning to exercise.',
        ],
      },
      {
        title: 'Intellectual property',
        paragraphs: [
          `The text, layout, graphics and code of this website belong to ${editorName}, unless stated otherwise. You may not reproduce or reuse them without written permission.`,
          'Typefaces and open-source components keep their own licences.',
        ],
      },
    ],
  },

  privacy: {
    seo: {
      title: 'Privacy policy',
      description:
        'Privacy policy: what personal information is handled, why, how long it is kept, and how to exercise your rights under UK GDPR.',
    },
    title: 'Privacy policy',
    intro:
      'This page explains what personal information is handled when you visit this website or get in touch, why it is handled, how long it is kept, and how to exercise your rights. It follows UK GDPR and the Data Protection Act 2018.',
    updated: val(L.lastUpdated),
    sections: [
      {
        title: 'Who is responsible',
        rows: [
          { label: 'Data controller', value: L.businessName, required: true },
          { label: 'Address', value: L.address, required: true },
          { label: 'Email', value: site.contact.email, required: true },
        ],
      },
      {
        title: 'In short',
        list: [
          'This website sets no cookies and uses no analytics or advertising tools.',
          'It has no forms, so we only ever see what you choose to send us.',
          'Typefaces are served from this website, so no request is sent to an outside font service.',
          ...(hasCal ? ['The Calendly booking calendar loads only after you click to open it on the Booking page.'] : []),
          ...(hasSocial ? ['Social media links are ordinary links. No buttons or embedded content from those networks are used.'] : []),
        ],
      },
      {
        title: 'Visiting the site and hosting',
        id: 'hosting',
        paragraphs: [
          `The site is hosted by ${L.host.name} (GitHub Pages). On every visit, the host handles technical connection data: IP address, date and time, the page requested and the browser type. These logs exist to deliver the site and keep it secure.`,
          'Lawful basis: legitimate interests (running and protecting the website). These logs are held by the host under its own privacy statement, and the site owner has no access to them.',
        ],
        links: [
          {
            label: 'GitHub privacy statement',
            href: 'https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement',
          },
        ],
      },
      {
        title: 'Messages you send us',
        id: 'messages',
        paragraphs: [
          `When you get in touch${channelsText ? ` (${channelsText})` : ''}, we handle what you choose to tell us: your name, contact details, the content of the exchange and, where relevant, your goal, the format you prefer and your availability.`,
          'Purposes: replying to you, arranging an appointment and supporting you afterwards. Lawful basis: steps taken at your request before entering into a contract, then performance of that contract; legitimate interests for enquiries that go no further.',
          ...(hasWa ? ['Messages sent on WhatsApp are also covered by the WhatsApp privacy policy.'] : []),
        ],
      },
      ...(hasCal
        ? [
            {
              title: 'Online booking (Calendly)',
              id: 'online-booking',
              paragraphs: [
                'Online booking uses Calendly, a service provided by Calendly LLC in the United States. The calendar does not load when the Booking page opens: it appears only after you click to show it, or follow the link that opens Calendly in a new tab.',
                'From that click onwards, Calendly receives your IP address and may set its own cookies, governed by its privacy policy. What you enter when booking (name, email address, the slot you choose and any answers you give) is used to manage the appointment. Lawful basis: steps taken at your request before entering into a contract.',
                'If you would rather not use Calendly, you can ask for an appointment from the Contact page instead.',
              ],
              links: [{ label: 'Calendly privacy policy', href: 'https://calendly.com/privacy' }],
            },
          ]
        : []),
      {
        title: 'Information about your health',
        paragraphs: [
          'Anything you choose to tell us about your physical condition, such as a recent injury or a niggle, is used only to adapt your sessions safely. Health information is a special category of personal data under UK GDPR, so it is handled only with your explicit consent, which you can withdraw at any time, and it is never passed to anyone else. Please send only what matters for training.',
        ],
      },
      {
        title: 'Who receives your information',
        paragraphs: [
          `Your information is for ${editorName} only. It is never sold, rented or used for marketing without your agreement. A small number of technical providers make the website and our exchanges work:`,
        ],
        list: [
          `${L.host.name}: website hosting.`,
          ...(hasCal ? ['Calendly LLC: online appointment booking.'] : []),
          ...(hasWa ? ['WhatsApp: messaging, if you choose that channel.'] : []),
          ...(hasMail ? ['The email provider used by the business: receiving and storing emails.'] : []),
        ],
      },
      {
        title: 'Transfers outside the UK',
        paragraphs: [
          'Some of these providers are based in the United States. Transfers of that kind rely on the safeguards allowed under UK GDPR: UK adequacy regulations where they apply, or the International Data Transfer Agreement, or the UK Addendum to the European Commission standard contractual clauses.',
        ],
      },
      {
        title: 'How long information is kept',
        list: [
          'Enquiries that go no further: up to three years from the last contact.',
          'Records linked to coaching: for as long as the coaching lasts, then archived for six years in line with the Limitation Act 1980.',
          'Accounting records, where they exist: six years, as required by HMRC.',
          'Technical logs held by the host: under the host own privacy statement.',
        ],
      },
      {
        title: 'Cookies',
        paragraphs: [
          'This website sets no cookies of its own: none for analytics, none for advertising and none from social networks.',
          ...(hasCal
            ? ['Calendly may set its own cookies, but only once you have clicked to load the booking calendar.']
            : []),
        ],
      },
      {
        title: 'Your rights',
        paragraphs: [
          'Under UK GDPR you have the right to ask for a copy of your personal data, to have it corrected or erased, to restrict or object to how it is used, to receive it in a portable format, and to withdraw consent at any time where consent is the basis used.',
          `To exercise any of these, email ${val(site.contact.email)}. We reply within one month, which can be extended where the law allows. We may ask you to confirm your identity if there is genuine doubt about who is asking.`,
        ],
      },
      {
        title: 'Complaints to the ICO',
        paragraphs: [
          'If you believe your information has been handled incorrectly, you can complain to the Information Commissioner Office (ICO), Wycliffe House, Water Lane, Wilmslow, Cheshire SK9 5AF. We would appreciate the chance to put things right first.',
        ],
        links: [{ label: 'ICO website', href: 'https://ico.org.uk' }],
      },
      {
        title: 'Changes to this page',
        paragraphs: [
          'This policy may be updated when the website or the services change. The date shown above is the date of the latest version.',
        ],
      },
    ],
  },
};
