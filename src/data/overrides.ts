/**
 * TEXTES PROPRES À CE SITE — fusionnés par-dessus src/data/content.ts.
 *
 * Laisse l'objet vide pour garder les textes du template.
 * Clés possibles : ui, home, about, services, booking, contact, notFound, offers.
 * Seules les valeurs indiquées remplacent celles du template ; tout le reste est conservé.
 * Pour `offers` (tableau), l'élément N remplace les champs de la N-ième offre.
 *
 * Mêmes règles que content.ts : aucun fait inventé (chiffres, diplômes, avis),
 * aucune promesse commerciale, aucune allégation médicale, ni prix ni tarif.
 *
 * MindSpriint — angle : intensité maîtrisée. Des séances courtes et denses,
 * dosées avec précision, et la récupération planifiée au même titre que l'effort.
 * L'effort juste : ni trop, ni trop peu. Aucun chiffre (ni durée, ni fréquence).
 */
import { isSet, nb } from '../lib/utils';
import { site } from './site';

/* Ville ou zone gérée automatiquement par site.ts (jamais écrite en dur ici). */
const place = isSet(site.contact.area) ? site.contact.area : isSet(site.contact.city) ? site.contact.city : '';

export const overrides: Record<string, unknown> = {
  // ================================================================ ACCUEIL
  home: {
    seo: {
      title: place
        ? `Coach sportif à ${place}${nb}: des séances courtes et bien dosées`
        : `Coach sportif${nb}: des séances courtes et bien dosées`,
      description: `Coaching sportif fondé sur l’effort juste${nb}: séances denses en présentiel ou en visio, programme à distance et repères nutritionnels, avec une récupération planifiée comme le reste.`,
    },
    hero: {
      eyebrow: 'Coaching sportif, intensité maîtrisée',
      titleLead: 'Court et intense,',
      titleMark: 'donc dosé au millimètre',
      lead: `Une séance courte peut être redoutablement efficace, à condition d’être bien réglée. Ici, l’intensité est choisie et non subie${nb}: on pousse franchement quand c’est le moment, et on récupère vraiment le reste du temps.`,
      visualLabel: 'L’effort juste, rien de plus',
    },
    highlights: {
      eyebrow: 'Le dosage',
      title: 'Ni trop, ni trop peu',
      subtitle: `L’intensité n’est utile que si elle est maîtrisée${nb}: quatre principes qui rendent l’effort efficace sans te mettre à terre.`,
      items: [
        { title: 'Le dosage avant le contenu', text: 'Ton niveau, ton énergie et ton sommeil décident de l’intensité du jour. Le même exercice ne demande pas le même effort selon le moment où il arrive.' },
        { title: 'La technique tient l’intensité', text: `Un mouvement propre encaisse la vitesse et la charge${nb}; un mouvement approximatif casse. On verrouille l’exécution avant d’accélérer quoi que ce soit.` },
        { title: 'La récupération est dans le plan', text: 'Temps de repos, séances légères et jours calmes sont écrits noir sur blanc. C’est pendant ces temps-là que le travail intense produit son effet.' },
        { title: 'Court, donc tenable', text: 'Une séance dense se glisse plus facilement dans une journée chargée qu’un entraînement interminable. Peu de temps, beaucoup d’attention.' },
      ],
    },
    offers: {
      eyebrow: 'Les services',
      title: 'Choisis le cadre de ton effort',
    },
    method: {
      eyebrow: 'La méthode',
      title: 'Calibrer, pousser, récupérer, recommencer',
      subtitle: `L’intensité se pilote comme un curseur${nb}: on la monte, on la redescend, jamais au hasard.`,
      steps: [
        { title: 'Le calibrage', text: `On situe ton point de départ${nb}: niveau, habitudes, sommeil, capacité à récupérer. C’est lui qui fixe la position du curseur.` },
        { title: 'Le plan d’effort', text: `Tu repars avec des séances lisibles${nb}: quoi faire, à quelle intensité, avec quels temps de repos et quelles séances légères en alternance.` },
        { title: 'Les séances denses', text: 'En séance, l’échauffement prépare vraiment, l’effort est franc et bref, le retour au calme n’est jamais sacrifié. Dès que la technique se dégrade, on corrige ou on redescend.' },
        { title: 'La lecture des signaux', text: `Fatigue, sommeil, envie, qualité du dernier effort${nb}: ces repères disent s’il faut pousser le curseur ou le relâcher. On les relit à chaque point d’étape.` },
      ],
    },
    cta: {
      eyebrow: 'Premier pas',
      title: `On calibre ton effort${nb}?`,
      lead: 'Une première séance pour situer ton niveau, trouver l’intensité qui te convient et repartir avec un dosage réaliste.',
    },
  },

  // =============================================================== À PROPOS
  about: {
    seo: {
      title: `À propos${nb}: un coaching sportif où l’intensité se dose`,
      description: `L’approche d’un coaching sportif fondé sur l’effort juste${nb}: des séances denses, une technique verrouillée et une récupération prise au sérieux.`,
    },
    hero: {
      eyebrow: 'À propos',
      titleLead: 'L’intensité n’est pas un hasard,',
      titleMark: 'elle se règle',
      lead: `S’épuiser à chaque séance donne l’impression de bien faire, jusqu’à l’arrêt brutal. En garder trop sous le pied ne fait pas progresser non plus. Entre les deux, il existe un dosage${nb}: c’est là que se joue tout l’accompagnement.`,
    },
    approach: {
      eyebrow: 'L’approche',
      title: 'Quatre convictions sur l’effort',
      subtitle: 'Elles orientent chaque décision, du calibrage de départ au suivi dans la durée.',
      steps: [
        { title: 'Partir de ta capacité réelle', text: `L’intensité utile dépend de toi${nb}: niveau, énergie, récupération, quotidien. Une séance calibrée pour quelqu’un d’autre ne te servira pas.` },
        { title: 'Intense ne veut pas dire épuisant', text: 'Une bonne séance dense te laisse la possibilité de revenir. Si elle t’assomme pour plusieurs jours, elle était simplement mal dosée.' },
        { title: 'Récupérer fait partie du travail', text: 'Le corps se renforce entre les efforts, pas pendant. Les temps calmes sont donc planifiés avec autant de sérieux que les séances dures.' },
        { title: 'Savoir relâcher le curseur', text: 'Certaines journées appellent une séance légère. Baisser l’intensité au bon moment protège la progression au lieu de la freiner.' },
      ],
    },
    philosophy: {
      eyebrow: 'La philosophie',
      title: 'Exigeant sur l’effort, intransigeant sur la récupération',
      subtitle: 'Ce qui guide chaque réglage d’intensité, du premier bilan aux points d’étape.',
      items: [
        { title: 'Progressif, puis intense', text: `On installe la technique et le fond avant d’ouvrir le curseur${nb}; l’ordre inverse fait rarement long feu.` },
        { title: 'Une intensité expliquée', text: 'Tu sais pourquoi une séance est dure et pourquoi la suivante est calme. Rien n’est laissé à l’humeur du jour ni au hasard.' },
        { title: 'Durable plutôt que spectaculaire', text: 'Enchaîner des séances héroïques impressionne un temps. Tenir un dosage juste change réellement ta forme et ton aisance au quotidien.' },
      ],
      commitmentsTitle: 'Ce que tu trouveras ici',
      commitments: [
        'Un calibrage honnête, sans jugement sur ton niveau de départ.',
        'Des séances denses pensées pour ton agenda réel.',
        'Une récupération écrite dans le plan, jamais laissée au hasard.',
        'Des réglages d’intensité revus d’après tes retours.',
      ],
      notHereTitle: 'Ce que tu ne trouveras pas ici',
      notHere: [
        'Des séances conçues pour t’achever et impressionner.',
        'La sueur prise pour unique preuve d’une séance réussie.',
        'Des annonces de transformation express.',
        `Des conseils médicaux${nb}: pour toute question de santé, ton médecin reste l’interlocuteur de référence.`,
      ],
      quote: `«${nb}L’effort juste, c’est celui dont tu te relèves à temps pour le suivant.${nb}»`,
    },
    values: {
      eyebrow: 'Les valeurs',
      title: 'Ce qui tient, quelle que soit la position du curseur',
      subtitle: 'Des repères valables dès la première séance et tout au long de l’accompagnement.',
      items: [
        { title: 'Écoute', text: 'Ton ressenti d’effort compte autant que le contenu prévu. Ce que tu dis après une séance oriente directement la suivante.' },
        { title: 'Précision', text: `Intensité, temps de repos, qualité d’exécution${nb}: chaque réglage est décidé, jamais approximatif.` },
        { title: 'Transparence', text: 'Le contenu des séances, la place des temps calmes et les modalités pratiques sont expliqués dès le départ.' },
        { title: 'Régularité', text: 'Des séances denses tenues avec constance valent mieux qu’un pic d’effort suivi d’un long arrêt.' },
      ],
    },
    formats: {
      eyebrow: 'Travailler ensemble',
      title: 'Trois façons de doser l’effort',
      subtitle: `Le format change${nb}; l’exigence sur le dosage reste identique.`,
      texts: {
        inPerson: `Des séances individuelles en salle, à domicile ou en extérieur${nb}: l’intensité est réglée en direct et la technique corrigée dès qu’elle faiblit.`,
        online: `Le même dosage en visio${nb}: séance guidée en direct, temps de repos tenus et corrections série après série.`,
        remote: 'Un programme écrit pour toi, avec les intensités, les temps de repos et les séances légères, revu à chaque fin de cycle.',
      },
    },
    cta: {
      eyebrow: 'La suite',
      title: `On trouve ton dosage${nb}?`,
      lead: `Le plus simple est d’en parler${nb}: ton niveau actuel, ton énergie et le temps que tu peux réellement consacrer à l’entraînement.`,
    },
  },

  // =============================================================== SERVICES
  services: {
    seo: {
      title: `Services${nb}: un coaching sportif dense et bien dosé`,
      description: `Séances individuelles en présentiel ou en visio, programme d’entraînement à distance et repères nutritionnels${nb}: des formats de coaching sportif pour un effort court, intense et maîtrisé.`,
    },
    hero: {
      eyebrow: 'Les services',
      titleLead: 'Plusieurs formats,',
      titleMark: 'un seul dosage exigeant',
      lead: `Le format change, la règle reste${nb}: on calibre avant de pousser, on corrige dès que la technique faiblit et on planifie la récupération avec le même soin que l’effort.`,
    },
    offers: {
      eyebrow: 'Le détail',
      title: 'Choisis où placer ton effort',
    },
    common: {
      eyebrow: 'Quel que soit le format',
      title: 'Ce qui ne change jamais',
      subtitle: `Quatre constantes de l’accompagnement${nb}: ce sont elles qui rendent l’intensité utile plutôt que risquée.`,
      items: [
        { title: 'Un calibrage avant tout', text: 'Aucune séance dense ne démarre sans avoir situé ton niveau, ta capacité à récupérer et un objectif dont on peut suivre l’évolution.' },
        { title: 'Un curseur qui bouge', text: 'L’intensité est relue régulièrement, d’après tes retours et ta forme du moment. Rien n’est figé, surtout pas le niveau d’effort.' },
        { title: 'Un échange direct', text: `Une sensation inhabituelle, une question sur un temps de repos${nb}? Tu en parles directement à ton coach.` },
        { title: 'Des repères concrets', text: `Charges, répétitions, souffle, qualité du dernier effort${nb}: on suit des indicateurs lisibles, pas uniquement le chiffre de la balance.` },
      ],
    },
    process: {
      eyebrow: 'Comment ça se passe',
      title: 'Du premier message à la première séance dense',
      subtitle: `Aucune étape surprise${nb}: tu connais le déroulé avant même de commencer.`,
      steps: [
        { title: 'Le premier échange', text: 'Tu réserves une séance ou tu nous écris. On parle de ton objectif, de ton agenda et de ce que tu as déjà essayé.' },
        { title: 'Le calibrage', text: 'Habitudes, niveau de départ, sommeil, matériel, points de vigilance éventuels. Un objectif réaliste est fixé ensemble, avec la façon d’en suivre l’évolution.' },
        { title: 'Le plan d’intensité', text: `L’accompagnement se construit${nb}: format, cadence tenable, séances denses, séances légères, enchaînement des cycles. Chaque choix t’est expliqué.` },
        { title: 'Les séances et les points d’étape', text: `On enchaîne, on corrige, on ajuste le curseur. En fin de cycle, on compare avec le point de départ${nb}: on garde ce qui fonctionne, on change le reste.` },
      ],
    },
    cta: {
      eyebrow: 'Passer à l’action',
      title: `Envie d’un effort qui compte vraiment${nb}?`,
      lead: 'Le plus simple reste d’en parler. Une première séance permet de situer ton niveau, de trouver ton dosage et de choisir le format adapté.',
    },
  },

  // ============================================================ RÉSERVATION
  booking: {
    seo: {
      title: `Réservation${nb}: caler ton dosage avec un coach sportif`,
      description: `Réserve ta séance de coaching sportif${nb}: calibrage de départ, intensité adaptée et récupération planifiée, dans le format qui te convient.`,
    },
    hero: {
      eyebrow: 'Réservation',
      titleLead: 'Première séance,',
      titleMark: 'premier calibrage',
      lead: `Une séance pour situer ton niveau réel, trouver l’intensité qui te convient et repartir avec un dosage clair. Pas de test d’entrée, pas de discours commercial${nb}— un point honnête et un plan tenable.`,
    },
    cta: {
      eyebrow: 'Dernier détail',
      title: 'L’intensité juste se trouve en pratiquant',
      lead: 'Une séance suffit pour situer ton effort et savoir par où commencer. Tu repars avec des repères précis et un curseur bien placé.',
    },
  },

  // ================================================================ CONTACT
  contact: {
    seo: {
      title: `Contact${nb}: parler intensité avec ton coach sportif`,
      description: `Une question sur le coaching sportif, l’intensité des séances ou la place de la récupération${nb}? Écris, appelle ou réserve directement ta séance.`,
    },
    hero: {
      eyebrow: 'Contact',
      titleLead: `Une question sur l’effort${nb}?`,
      titleMark: 'On te répond directement',
      lead: `Pas de formulaire anonyme${nb}: tu écris ou tu appelles, et ton coach te répond. Dis où tu en es et ce que tu cherches à travailler${nb}— on verra ensemble quelle intensité te convient.`,
    },
    cta: {
      eyebrow: 'Passer à l’action',
      title: 'Une question se règle vite, un dosage se travaille',
      lead: `Si ta question tient en une ligne, écris-nous. S’il s’agit d’un vrai projet, réserve plutôt une première séance${nb}: c’est le meilleur moyen de trouver ton curseur.`,
    },
  },

  // ================================================================= OFFRES
  offers: [
    {
      summary: `Une séance en tête-à-tête, dense et réglée en direct${nb}: posture corrigée à chaque série, intensité ajustée à ta forme du jour.`,
      description:
        'Ton coach est à tes côtés du premier échauffement au retour au calme. Il observe la qualité d’exécution série après série, relance quand tu peux encaisser davantage et redescend l’intensité dès que la technique commence à se déformer.',
      includes: [
        `Calibrage de départ${nb}: objectifs, habitudes, niveau d’activité, récupération`,
        'Séances en salle, à domicile ou en extérieur, selon la zone couverte',
        'Correction technique, mouvement par mouvement',
        `Points d’étape réguliers${nb}: charges, répétitions, ressenti d’effort`,
      ],
      forWho:
        'Tu veux des séances qui ne traînent pas, et tu préfères qu’un regard extérieur règle l’intensité plutôt que de la deviner.',
    },
    {
      summary: `Le même dosage à distance${nb}: une séance guidée en direct, temps de repos tenus, où que tu sois.`,
      description:
        'Caméra allumée, la séance est menée en direct depuis ton salon, ta salle ou un lieu de déplacement. Les temps de repos sont annoncés à voix haute et réellement tenus, l’effort est cadré, et l’intensité se règle selon ce que ton coach observe à l’écran.',
      includes: [
        'Séance guidée en direct, échauffement et retour au calme compris',
        'Exercices adaptés au matériel disponible, ou sans matériel',
        'Consignes pour bien t’installer face à la caméra',
        'Points à travailler d’une séance à l’autre',
      ],
      forWho:
        'Tes horaires changent souvent ou tu te déplaces, et tu veux tout de même une séance dense encadrée en direct.',
    },
    {
      summary: `Un plan écrit pour toi${nb}: séances, séries, intensités, temps de repos et alternance avec les séances légères.`,
      description:
        'Un programme construit à partir de ton objectif, de ton niveau et du matériel dont tu disposes. Chaque séance précise l’effort attendu et le repos qui va avec, et les séances calmes y figurent au même titre que les séances dures. Le plan est révisé en fin de cycle.',
      includes: [
        `Entretien de cadrage${nb}: objectif, contraintes, matériel`,
        'Plan structuré en cycles, avec une progression d’intensité prévue',
        'Exercices de remplacement si un équipement manque',
        'Révision du plan en fin de cycle, d’après tes retours',
      ],
      forWho:
        'Tu t’entraînes déjà en autonomie, mais tu pousses souvent au feeling et tu aimerais un dosage construit plutôt qu’improvisé.',
    },
    {
      summary: `Des repères simples d’hygiène alimentaire pour encaisser l’intensité${nb}: aucun régime, aucun aliment interdit.`,
      description:
        'Aucun régime, aucun aliment interdit, aucune pesée à chaque repas. On part de ce que tu manges déjà et on pose des repères généraux d’hygiène alimentaire, en particulier autour des séances denses et des jours de repos, avec des habitudes tenables même les semaines chargées.',
      includes: [
        'Point sur tes habitudes actuelles, sans jugement',
        'Repères simples pour composer tes repas au quotidien',
        'Organisation des repas autour des séances denses et des jours calmes',
        'Idées de repas rapides et de courses réalistes',
      ],
      forWho:
        'Tu enchaînes des séances exigeantes et tu veux que ton alimentation soutienne l’effort et la récupération, sans te lancer dans un régime.',
    },
  ],
};
