/**
 * MindSpriint — UK English copy.
 * Angle: controlled intensity. Short, hard sessions that are properly dosed,
 * with recovery planned as deliberately as the work. No numbers anywhere.
 */
import { enCopy, mergeCopy } from './en-copy';

const siteCopy = {
  home: {
    seo: {
      title: 'Personal trainer: short sessions, properly dosed',
      description:
        'Training built on the right amount of effort: dense one-to-one sessions in person or online, a programme you can follow, and recovery planned as carefully as the hard work.',
    },
    hero: {
      eyebrow: 'Personal training, intensity under control',
      titleLead: 'Short and hard,',
      titleMark: 'and measured to the last rep',
      lead: 'A short session can be remarkably effective, as long as it is set correctly. Here the intensity is chosen rather than endured: we push properly when it is time to push, and recover properly the rest of the time.',
      visualLabel: 'The right amount, nothing more',
    },
    highlights: {
      eyebrow: 'How the dosing works',
      title: 'Hard enough, not harder',
      subtitle: 'Four things decide how heavy a session should be before it starts.',
      items: [
        { title: 'Effort set in advance', text: 'Each session has a target level of effort agreed beforehand, so intensity is a decision rather than a mood.' },
        { title: 'Recovery in the plan', text: 'Easier days are scheduled on purpose. They are what makes the hard days possible.' },
        { title: 'Technique sets the ceiling', text: 'The load stops rising the moment execution starts to slip, however good you feel.' },
        { title: 'Short, so it happens', text: 'A dense session that fits your week beats a long one you keep postponing.' },
      ],
    },
    method: {
      eyebrow: 'The method',
      title: 'Set it, run it, review it',
      subtitle: 'Nothing is improvised, and nothing is pushed for the sake of pushing.',
      steps: [
        { title: 'Working out your starting load', text: 'We look at your activity, your sleep and how you currently recover, and agree where the effort should sit.' },
        { title: 'Dense sessions, written down', text: 'You get the work, the rest between sets, and the markers that say whether it landed properly.' },
        { title: 'Pushing where it counts', text: 'Hard efforts are concentrated where they do the most good, instead of being spread thinly across everything.' },
        { title: 'Reading the recovery', text: 'How you feel afterwards decides the next session. The plan follows your recovery, not a calendar.' },
      ],
    },
    cta: {
      eyebrow: 'First step',
      title: 'Want the effort set properly?',
      lead: 'A first session to find where your intensity should sit, and what recovery it needs around it.',
    },
  },
  about: {
    seo: {
      title: 'About: intensity chosen, not endured',
      description: 'The thinking behind short, dense sessions: effort set deliberately, recovery planned, and technique deciding when the load goes up.',
    },
    hero: {
      eyebrow: 'About',
      titleLead: 'Hard work is easy.',
      titleMark: 'Hard work in the right dose is not',
      lead: 'Anyone can leave you exhausted. The useful part is knowing how much effort is worth it today, and what has to come after it.',
    },
    philosophy: {
      title: 'Intense, never reckless',
      subtitle: 'Intensity is a tool, not a personality.',
      quote: 'A session is good when it leaves you able to train again, not when it leaves you broken.',
    },
    values: {
      title: 'What the dosing rests on',
      items: [
        { title: 'Precision', text: 'Effort is chosen on purpose, session by session.' },
        { title: 'Recovery', text: 'Rest is planned work, not an afterthought.' },
        { title: 'Honesty', text: 'If you are not recovered, we say so and change the session.' },
        { title: 'Restraint', text: 'Stopping a set early is sometimes the most useful decision of the day.' },
      ],
    },
  },
  services: {
    seo: {
      title: 'Services: dense sessions, in person or online',
      description: 'One-to-one sessions in person or online, a written programme and nutrition guidance, all built around effort that is measured rather than guessed.',
    },
    hero: {
      eyebrow: 'The services',
      titleLead: 'Four formats,',
      titleMark: 'the same care with intensity',
      lead: 'Wherever we train, the effort is set deliberately and the recovery is part of the plan.',
    },
  },
  booking: {
    seo: {
      title: 'Booking: find your right level of effort',
      description: 'Book a first session to work out where your intensity should sit, and what recovery belongs around it.',
    },
    hero: {
      eyebrow: 'Booking',
      titleLead: 'Start with',
      titleMark: 'the right dose',
      lead: 'The first session is mostly about calibration: what you can take now, and what the week around it should look like.',
    },
  },
  contact: {
    seo: {
      title: 'Contact: ask about short, dense sessions',
      description: 'Get in touch to talk about intensity, recovery and how short sessions can fit into a full week.',
    },
    hero: {
      eyebrow: 'Contact',
      titleLead: 'Not sure how hard',
      titleMark: 'is hard enough?',
      lead: 'Tell us how you train now and how you recover, and we will tell you honestly what to change first.',
    },
  },
};

export const overrides: Record<string, unknown> = mergeCopy(enCopy, siteCopy) as unknown as Record<string, unknown>;
