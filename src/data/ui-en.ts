/**
 * Micro-copy d'interface en anglais britannique (utilisée quand site.seo.lang n'est pas « fr »).
 * Même forme que `ui`, `modeLabels` et `notFound` de content.ts ; aucune dépendance à content.ts.
 */

export const uiEn = {
  brandFallback: 'Personal training',
  skipLink: 'Skip to main content',
  homeLink: 'back to the home page',
  navLabel: 'Main navigation',
  menuOpen: 'Open menu',
  menuClose: 'Close menu',
  footerNavLabel: 'Footer navigation',
  footerNavTitle: 'Navigation',
  footerContactTitle: 'Contact',
  footerLegalLabel: 'Legal information',
  socialLabel: 'Social media',
  newWindow: '(opens in a new window)',
  modesLabel: 'Ways to train together',
  rights: 'All rights reserved.',
  healthNotice:
    'Personal training and general guidance on everyday habits: this is not medical treatment and does not replace advice from a qualified healthcare professional. If in doubt, speak to your GP before starting or returning to exercise.',
  stepPrefix: (n: number) => `Step ${n}: `,
  legalMissing: '(to be completed)',
  faqMore: 'Question not answered here?',
  faqMoreLink: 'Send us a message',
  includesLabel: 'What it includes',
  forWhoLabel: 'Who it suits',
  responseTimeLabel: 'Usual reply time:',
  hoursLabel: 'Hours:',
  updatedLabel: 'Last updated:',
};

export const modeLabelsEn = {
  inPerson: 'In person',
  online: 'Online',
  remote: 'Remote programme',
};

export const notFoundEn = {
  seo: { title: 'Page not found', description: 'The page you asked for does not exist or has moved.' },
  eyebrow: 'Error 404',
  titleLead: 'Page',
  titleMark: 'not found',
  lead: 'The link may be out of date, or the address slightly off. Everything else is still where you left it.',
  cta: 'Back to the home page',
};
