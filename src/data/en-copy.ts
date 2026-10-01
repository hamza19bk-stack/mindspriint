/**
 * TEXTES GÉNÉRIQUES EN ANGLAIS BRITANNIQUE (sites dont site.seo.lang n'est pas « fr »).
 *
 * Même forme que src/data/overrides.ts : seuls les textes sont fournis, les icônes,
 * identifiants et modes restent ceux de content.ts. Chaque site ajoute ensuite ses
 * propres accroches via mergeCopy(enCopy, siteCopy) dans son overrides.ts.
 */
import { isSet } from '../lib/utils';
import { site } from './site';

const place = isSet(site.contact.area) ? site.contact.area : isSet(site.contact.city) ? site.contact.city : '';
const where = place ? `in ${place}` : '';

/** « One-to-one sessions in person in Leeds, online sessions and remote programmes. » */
function formatsSentenceEn(): string {
  const m = site.contact.modes;
  const parts: string[] = [];
  if (m.inPerson) parts.push(place ? `one-to-one sessions ${where}` : 'one-to-one sessions in person');
  if (m.online) parts.push('live sessions online');
  if (m.remote) parts.push('written programmes you follow in your own time');
  if (!parts.length) return '';
  const last = parts.pop() as string;
  const sentence = parts.length ? `${parts.join(', ')} and ${last}` : last;
  return sentence.charAt(0).toUpperCase() + sentence.slice(1) + '.';
}

/** Fusion profonde : les tableaux fusionnent par index, comme dans content.ts. */
export function mergeCopy<A extends Record<string, unknown>>(base: A, extra: Record<string, unknown>): A {
  const isPlain = (v: unknown): v is Record<string, unknown> =>
    typeof v === 'object' && v !== null && !Array.isArray(v);
  const out: Record<string, unknown> = Array.isArray(base) ? [...(base as unknown[])] as unknown as Record<string, unknown> : { ...base };
  for (const [k, v] of Object.entries(extra)) {
    const cur = (out as Record<string, unknown>)[k];
    if (Array.isArray(cur) && Array.isArray(v)) {
      out[k] = cur.map((item, i) => (isPlain(item) && isPlain(v[i]) ? mergeCopy(item, v[i] as Record<string, unknown>) : v[i] ?? item));
      if (v.length > cur.length) out[k] = [...(out[k] as unknown[]), ...v.slice(cur.length)];
    } else if (isPlain(cur) && isPlain(v)) {
      out[k] = mergeCopy(cur, v);
    } else {
      out[k] = v;
    }
  }
  return out as A;
}

export const enCopy = {
  // ==================================================================== HOME
  home: {
    seo: {
      title: place ? `Personal trainer ${where}: sessions and programmes built around you` : 'Personal trainer: sessions and programmes built around you',
      description:
        'Personal training built around your life: one-to-one sessions in person or online, a programme written for you, and regular support that keeps you going.',
    },
    hero: {
      eyebrow: 'Personal training, built around you',
      titleLead: 'Training that fits your life,',
      titleMark: 'not someone else’s',
      lead: 'Your level, your diary, your goal. No copied-and-pasted plan and no empty promises, just a clear structure, sessions that count and support that keeps you on track.',
      secondaryCta: 'See what is on offer',
      visualLabel: 'Week after week',
    },
    highlights: {
      eyebrow: 'The approach',
      title: 'A framework, not a formula',
      subtitle: 'Four principles shape every session and every programme, and they explain why the training keeps working over time.',
      items: [
        { title: 'A proper starting point', text: 'Habits, activity levels, goals and the real constraints of your week. We start from where you actually are, not from a template.' },
        { title: 'Technique before load', text: 'Every movement is explained, corrected and owned before the intensity goes up. Progress made properly is progress that lasts.' },
        { title: 'Regular support', text: 'The programme is reviewed and adjusted as the weeks go by, based on how it is going for you. You never train blind.' },
        { title: 'Sessions that fit your week', text: 'Length, format and timing bend around your day. Training you can keep up beats perfect training you abandon.' },
      ],
    },
    stats: { eyebrow: 'A few markers', title: 'In numbers' },
    offers: {
      eyebrow: 'The services',
      title: 'Find the format that suits you',
      subtitle: formatsSentenceEn(),
      moreLabel: 'See all services',
      cardCta: 'Find out more',
    },
    method: {
      eyebrow: 'The method',
      title: 'Four steps, nothing improvised',
      subtitle: 'The route is the same for everyone. What goes into it changes, because it is built around you.',
      steps: [
        { title: 'The first conversation', text: 'We take the time to lay everything out: your goal, your sporting history, your rhythm, your sleep, the slots you actually have. Nothing starts until that is clear.' },
        { title: 'Your programme', text: 'You leave with a plan you understand: sessions, the order of exercises, and markers for effort and recovery.' },
        { title: 'Training and support', text: 'We train, correct and adjust. Intensity rises when your technique can carry it, and the plan moves with your energy and your week.' },
        { title: 'Markers you can see', text: 'We compare regularly with where you started: strength, stamina, mobility, how everyday life feels. Progress gets measured, not guessed.' },
      ],
    },
    testimonials: {
      eyebrow: 'Feedback',
      title: 'What people say',
      subtitle: 'Published with the permission of the people who wrote them.',
    },
    cta: {
      eyebrow: 'First step',
      title: 'Shall we make a start?',
      lead: 'A first session to take stock, set a realistic goal and leave with a clear direction.',
      secondaryCta: 'Ask a question',
    },
  },

  // =================================================================== ABOUT
  about: {
    seo: {
      title: 'About: how the coaching works',
      description: 'The approach behind the coaching: a proper starting point, technique first, regular adjustments, and training that fits the week you actually have.',
    },
    hero: {
      eyebrow: 'About',
      titleLead: 'Coaching that starts',
      titleMark: 'with listening',
      lead: 'No two people arrive with the same history, the same diary or the same goal. Everything here is built from that, not from a one-size-fits-all plan.',
      secondaryCta: 'See the services',
    },
    approach: {
      eyebrow: 'How it works',
      title: 'Four steps, start to finish',
      subtitle: 'From the first conversation to the regular reviews, nothing is left to chance.',
      steps: [
        { title: 'Listening first', text: 'What you want, what you have tried before, what put you off, and what you can realistically fit in.' },
        { title: 'A plan you understand', text: 'Each session has a purpose, and you know what it is. Nothing is in the plan without a reason.' },
        { title: 'Correction in the moment', text: 'Position, breathing, tempo, range: details get fixed as they happen, not weeks later.' },
        { title: 'Adjustment over time', text: 'Tired week, busy period, a niggle: the plan bends rather than breaks, and you keep moving forward.' },
      ],
    },
    philosophy: {
      eyebrow: 'The philosophy',
      title: 'Demanding, never punishing',
      subtitle: 'Training should make the rest of your life easier, not harder.',
      items: [
        { title: 'Honesty about the starting point', text: 'No judgement about your level, and no pretending the road is shorter than it is.' },
        { title: 'Consistency over heroics', text: 'A session you can repeat next week is worth more than one that leaves you unable to move.' },
        { title: 'You in charge', text: 'You learn why things work, so you can keep training well when you are on your own.' },
      ],
      commitmentsTitle: 'What you can expect',
      commitments: [
        'A clear starting point, with no judgement about your current level.',
        'Sessions planned around the week you actually have.',
        'Recovery written into the plan rather than left to chance.',
        'Adjustments based on your feedback, not on a fixed script.',
      ],
      notHereTitle: 'What you will not find',
      notHere: [
        'Sessions designed to leave you broken for the sake of it.',
        'Sweat treated as the only proof a session worked.',
        'Promises of overnight transformation.',
        'Medical advice: for anything health related, your GP remains the right person to ask.',
      ],
      quote: 'The best programme is the one you can still follow in three months.',
    },
    credentials: {
      eyebrow: 'Training and qualifications',
      title: 'Qualifications',
      subtitle: 'Listed here once they are confirmed.',
    },
    values: {
      eyebrow: 'Values',
      title: 'What stays the same, whatever your goal',
      subtitle: 'Four things that do not change from one person to the next.',
      items: [
        { title: 'Clarity', text: 'You always know what you are doing and why, in plain language.' },
        { title: 'Safety', text: 'Technique and load are managed so that progress never comes at the cost of your body.' },
        { title: 'Honesty', text: 'If something is not working, we say so and change it.' },
        { title: 'Respect', text: 'Your pace, your history and your limits are taken seriously from the first conversation.' },
      ],
    },
    formats: {
      eyebrow: 'Ways to train',
      title: 'Several formats, the same care',
      subtitle: 'The format changes. The attention you get does not.',
      moreLabel: 'See all services',
      texts: {
        inPerson: place ? `One-to-one sessions ${where}, in a gym, at home where there is space, or outdoors.` : 'One-to-one sessions in a gym, at home where there is space, or outdoors.',
        online: 'Live one-to-one sessions by video, guided from start to finish, with whatever equipment you have.',
        remote: 'A written programme you follow in your own time, reviewed regularly against how it is going.',
      },
      note: 'Not sure which suits you? Say what your week looks like and we will work it out together.',
    },
    cta: {
      eyebrow: 'Next step',
      title: 'Shall we talk it through?',
      lead: 'A first conversation costs you nothing but a little time, and it makes the direction clear.',
      secondaryCta: 'Ask a question',
    },
  },

  // ================================================================ SERVICES
  services: {
    seo: {
      title: 'Services: one-to-one, online and written programmes',
      description: 'One-to-one personal training in person or online, a programme written for you, and general nutrition guidance alongside your training.',
    },
    hero: {
      eyebrow: 'The services',
      titleLead: 'Four ways to train,',
      titleMark: 'one way of working',
      lead: 'Whichever format you choose, the method is the same: a clear starting point, technique first, and regular adjustment.',
      secondaryCta: 'Book a session',
      jumpLabel: 'Jump to the services',
    },
    offers: {
      eyebrow: 'In detail',
      title: 'What each format involves',
      subtitle: 'Pick the one that fits your week. You can change later if your circumstances do.',
    },
    common: {
      eyebrow: 'In every format',
      title: 'What you get either way',
      subtitle: 'Some things do not depend on where or how we train.',
      items: [
        { title: 'A clear starting point', text: 'We agree the goal and the markers before anything begins.' },
        { title: 'Explained movements', text: 'You know what each exercise is for and how it should feel.' },
        { title: 'Planned recovery', text: 'Rest is part of the plan, not what is left over.' },
        { title: 'Regular reviews', text: 'We look at what is working and change what is not.' },
      ],
    },
    process: {
      eyebrow: 'How it goes',
      title: 'From first message to first session',
      subtitle: 'Four simple steps, no paperwork to wade through.',
      steps: [
        { title: 'You get in touch', text: 'A short message with your goal and roughly when you are free is plenty to start.' },
        { title: 'We talk it through', text: 'We go over your history, your constraints and what you want, and agree the format.' },
        { title: 'You get your plan', text: 'A structure written for you, with the markers to follow.' },
        { title: 'We adjust as we go', text: 'The plan changes with your progress, your week and how you feel.' },
      ],
    },
    faq: {
      eyebrow: 'Common questions',
      title: 'Questions people ask first',
      subtitle: 'The things most people want to know before starting.',
      items: [
        { q: 'Do I need to be fit already?', a: 'No. The first conversation exists precisely so we start from where you are rather than from a standard template.' },
        { q: 'What happens in the first session?', a: 'It starts with a conversation: your sporting history, your routine, your goals and any constraints. Then some simple movement work to see how you move, and we finish by agreeing the first steps.' },
        { q: 'Where do in-person sessions take place?', a: place ? `${place}: in a gym, at home where there is space, or outdoors. We agree the setting together at the first conversation.` : 'In a gym, at home where there is space, or outdoors. The setting and the area covered are agreed at the first conversation.' },
        { q: 'What equipment do I need?', a: 'Often less than you think. Bodyweight work goes a long way, and the programme is written around what you actually have.' },
        { q: 'What if I have an old injury?', a: 'Tell us about it from the start. Sessions are adapted around it, and if anything needs clinical attention, your GP or physiotherapist is the right person to see first.' },
        { q: 'Can I change format later?', a: 'Yes. People move between in person, online and written programmes as their work and family life change.' },
        { q: 'Is nutrition guidance a diet plan?', a: 'No. There are no banned foods and nothing is weighed at every meal. We work on general habits around training, and no diet is prescribed.' },
      ],
    },
    cta: {
      eyebrow: 'Ready when you are',
      title: 'Not sure which format suits you?',
      lead: 'Tell us what your week looks like and we will say honestly what makes sense.',
      secondaryCta: 'Ask a question',
    },
  },

  // ================================================================= BOOKING
  booking: {
    seo: {
      title: 'Booking: arrange your first session',
      description: 'Arrange a first session: what happens next, what to bring, and how to get in touch if none of the slots work.',
    },
    hero: {
      eyebrow: 'Booking',
      titleLead: 'Book a time',
      titleMark: 'that works for you',
      lead: 'Pick a slot, or send a message if nothing fits. The first session is a conversation as much as a workout.',
      ctaCalendly: 'Book a session',
      ctaFallback: 'Request a session',
      secondaryCta: 'Ask a question first',
    },
    recap: {
      eyebrow: 'Before you book',
      title: 'What to know',
      items: [
        'The first session starts with a conversation, so come as you are.',
        'Wear something you can move in, and bring water.',
        'Tell us about any injury or niggle beforehand so the session can be adapted.',
        'If you need to rearrange, let us know as early as you can.',
      ],
      noSlot: 'None of the slots work for you?',
      noSlotLink: 'Send a message',
    },
    after: {
      eyebrow: 'What happens next',
      title: 'After you book',
      subtitle: 'No surprises between booking and your first session.',
      steps: [
        { title: 'Written confirmation', text: 'You get the date, the format and the place or video link in writing.' },
        { title: 'A few questions', text: 'A short exchange beforehand so the first session is already built around you.' },
        { title: 'The session itself', text: 'Conversation, movement, and a clear idea of where to go next.' },
        { title: 'A plan to follow', text: 'You leave knowing what the next steps look like, with no obligation.' },
      ],
    },
    prepare: {
      eyebrow: 'Getting ready',
      title: 'How to prepare',
      subtitle: 'Nothing complicated, just a few practical things.',
      items: [
        { title: 'Clothing and shoes', text: 'Comfortable clothes you can move in, and trainers with decent grip.' },
        { title: 'Food and water', text: 'Avoid a heavy meal in the hour before, and bring water.' },
      ],
      onlineItem: { title: 'For an online session', text: 'A clear space of a couple of strides, a steady camera and decent light are enough.' },
      checklistTitle: 'Worth bringing',
      checklist: [
        'Water',
        'Clothes you can move in',
        'Trainers with grip',
        'Any notes from a physiotherapist, if you have them',
        'Your questions, however small',
      ],
      goodToKnowEyebrow: 'Good to know',
      goodToKnow: 'If you are recovering from an injury or on medication, speak to your GP before starting. Coaching supports clinical care, it does not replace it.',
    },
    module: {
      eyebrow: 'Choose a slot',
      calendlyTitle: 'Pick a time',
      calendlySubtitle: 'The calendar opens when you click, and not before.',
      consentTitle: 'Loading the booking calendar',
      consentText: 'The calendar is provided by Calendly. Opening it shares your IP address with Calendly and may set its cookies.',
      consentLinkBefore: 'More in the',
      consentLink: 'privacy policy',
      loadCta: 'Show the booking calendar',
      openCta: 'Open Calendly in a new tab',
      loading: 'Loading the calendar…',
      loadError: 'The calendar could not load. Please use the link to open Calendly, or get in touch directly.',
      widgetLabel: 'Booking calendar',
      fallbackTitle: 'Arrange a session',
      fallbackSubtitle: 'Online booking is not set up yet, so a message is the quickest way.',
      fallbackCardTitle: 'Get in touch',
      fallbackCardText: 'Tell us your goal and when you are usually free, and we will come back to you with a time.',
      emailCta: 'Send an email',
      phoneCta: 'Call',
      whatsappCta: 'Message on WhatsApp',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      closedTitle: 'Booking is not open yet',
      closedSubtitle: 'Contact details will appear here as soon as they are set up.',
      emailSubject: 'Booking a session',
      emailBody: 'Hello,\n\nI would like to arrange a session.\n\nMy goal:\nUsual availability:\nPreferred format (in person, online, written programme):\n\nThank you.',
    },
    faq: {
      eyebrow: 'Booking questions',
      title: 'Before you book',
      subtitle: 'Three things people ask most often.',
      items: [
        { q: 'What if I need to cancel?', a: 'Let us know as early as you can and we will find another time. Things come up, and that is fine.' },
        { q: 'How long is the first session?', a: 'Long enough to talk properly and move a little. The exact length is agreed when you book.' },
        { q: 'Do I have to commit to anything?', a: 'No. The first session is there to see whether the way of working suits you.' },
      ],
    },
    cta: {
      eyebrow: 'Still unsure?',
      title: 'Ask before you book',
      lead: 'A question answered quickly is better than a booking you are unsure about.',
      secondaryCta: 'Go to contact',
    },
  },

  // ================================================================= CONTACT
  contact: {
    seo: {
      title: 'Contact: get in touch about coaching',
      description: 'Get in touch by email, phone or WhatsApp to talk about your goal, the formats available and the area covered.',
    },
    hero: {
      eyebrow: 'Contact',
      titleLead: 'A question,',
      titleMark: 'a quick answer',
      lead: 'Tell us what you are after and roughly when you are free. That is enough to get started.',
      emailCta: 'Send an email',
      phoneCta: 'Call',
    },
    tips: {
      eyebrow: 'Helps us reply',
      title: 'Useful to mention',
      items: [
        'What you would like to achieve, even roughly.',
        'When you are usually free in the week.',
        'Whether you prefer in person, online or a written programme.',
        'Anything physical we should know about, such as a recent injury.',
      ],
    },
    channels: {
      eyebrow: 'Ways to reach us',
      title: 'Pick whichever suits you',
      subtitle: 'All of these reach the same person.',
      email: { title: 'Email', text: 'Best for a detailed question or if you would rather write things out.', action: 'Send an email' },
      phone: { title: 'Phone', text: 'Quickest if you would rather talk it through.', action: 'Call' },
      whatsapp: { title: 'WhatsApp', value: 'WhatsApp', text: 'Handy for a short question or to rearrange a session.', action: 'Open WhatsApp' },
      booking: { title: 'Book directly', text: 'If you already know what you want, go straight to a slot.', action: 'Go to booking' },
      emailSubject: 'Question about coaching',
      emailBody: 'Hello,\n\nI would like some information about the coaching.\n\nMy goal:\nUsual availability:\nPreferred format (in person, online, written programme):\n\nThank you.',
    },
    exchange: {
      eyebrow: 'What happens next',
      title: 'After your message',
      text: 'You get a straight answer: whether what you are after is something we can help with, which format makes sense, and what a first session would look like. No pressure either way.',
      privacy: 'Your details are used only to reply to you and are never passed on.',
      practicalEyebrow: 'Practical',
      practicalTitle: 'Good to know',
    },
    zone: {
      eyebrow: 'Where and how',
      title: 'Area covered and formats',
      subtitle: 'In person where distance allows, online anywhere.',
      text: place ? `In-person sessions take place ${where} and nearby. Online sessions and written programmes work wherever you are.` : 'In-person sessions take place within the area covered. Online sessions and written programmes work wherever you are.',
      items: {
        inPerson: 'One-to-one sessions in person',
        online: 'Live one-to-one sessions online',
        remote: 'Written programmes followed in your own time',
      },
    },
    social: {
      eyebrow: 'Elsewhere',
      title: 'Follow along',
      subtitle: 'Day-to-day training, in short form.',
      text: 'These are ordinary links. Nothing from those networks is embedded in this site.',
    },
    cta: {
      eyebrow: 'When you are ready',
      title: 'Rather just get started?',
      lead: 'Pick a slot and we will take it from there.',
      secondaryCta: 'See the services',
    },
  },

  // ================================================================== OFFERS
  offers: [
    {
      id: 'in-person',
      short: 'In person',
      title: 'One-to-one sessions in person',
      summary: 'Side by side, with your technique corrected as you go.',
      description: 'Your coach is with you from the warm-up to the cool-down, watching how each set is executed, pushing when you can take more and easing off the moment technique starts to slip.',
      includes: [
        'A proper starting point: goals, habits, activity levels and recovery',
        'Sessions in a gym, at home or outdoors, within the area covered',
        'Technique corrected movement by movement',
        'Regular check-ins on load, repetitions and how hard it felt',
      ],
      forWho: 'You want someone watching how you move, and you would rather have the intensity set for you than guess at it.',
      ctaLabel: 'Book a session',
    },
    {
      id: 'online',
      short: 'Online',
      title: 'One-to-one sessions online',
      summary: 'A live session wherever you are, camera on.',
      description: 'The session is led live, from your living room, your gym or wherever you are staying. Rest periods are called out and actually kept, the work is structured, and the intensity is adjusted from what your coach sees on screen.',
      includes: [
        'A live guided session, warm-up and cool-down included',
        'Exercises matched to the equipment you have, or none at all',
        'Help setting up your space and camera',
        'Points to work on between sessions',
      ],
      forWho: 'Your hours move around or you travel, and you still want a proper session with someone watching.',
      ctaLabel: 'Book a session',
    },
    {
      id: 'programme',
      short: 'Programme',
      title: 'A training programme written for you',
      summary: 'A structured plan you follow in your own time.',
      description: 'A programme built from your goal, your level and the equipment you can get to. Each session sets out the work expected and the rest that goes with it, and easier sessions are in the plan as deliberately as the hard ones. The plan is reviewed at the end of each block.',
      includes: [
        'A scoping conversation: goal, constraints, equipment',
        'A plan structured in blocks, with progression built in',
        'Alternative exercises when equipment is missing',
        'A review at the end of each block, based on your feedback',
      ],
      forWho: 'You already train on your own, but you would rather follow a structure than make it up as you go.',
      ctaLabel: 'Get in touch',
    },
    {
      id: 'nutrition',
      short: 'Nutrition',
      title: 'General nutrition guidance',
      summary: 'Simple habits around training, with nothing banned.',
      description: 'No diet, no banned foods and nothing weighed at every meal. We start from what you already eat and set out general habits, particularly around training days and rest days, that still work in a busy week.',
      includes: [
        'A look at your current habits, without judgement',
        'Simple guidance for putting meals together day to day',
        'Organising food around training and rest days',
        'Quick meal ideas and realistic shopping',
      ],
      forWho: 'You train regularly and want what you eat to support the work and the recovery, without going on a diet.',
      note: 'General guidance on everyday eating habits: this is not a diet plan, no diet is prescribed, and it does not replace advice from a registered dietitian or your GP.',
      ctaLabel: 'Get in touch',
    },
  ],
};
