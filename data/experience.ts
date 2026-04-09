export interface ExperienceItem {
  role: string;
  organization: string;
  location: string;
  period: string;
  description: string;
  bullets: string[];
}

export const experiences: ExperienceItem[] = [
  {
    role: 'Account Executive Intern',
    organization: 'CoverGov',
    location: 'Remote',
    period: 'Summer 2025',
    description: 'B2G SaaS sales for government contracting intelligence platform.',
    bullets: [
      'Managed a pipeline of 60+ government contractor accounts using HubSpot CRM',
      'Conducted discovery calls and product demos, contributing to new ARR in a competitive procurement software market',
      'Developed cold outreach sequences that improved reply rates through targeted messaging to procurement officers',
    ],
  },
  {
    role: 'Face-to-Face Fundraiser',
    organization: 'Grassroots Campaign — Sydney, Australia',
    location: 'Sydney, NSW',
    period: 'Jan 2025 – May 2025',
    description: 'Direct donor acquisition for international nonprofit campaigns in Sydney.',
    bullets: [
      'Averaged 3+ donor sign-ups per shift through high-volume cold outreach on the street',
      'Adapted pitches in real time based on donor behavior and objection patterns',
      'Operated independently in an international environment, developing strong interpersonal communication skills',
    ],
  },
  {
    role: 'Academic Support Tutor',
    organization: 'Tulane University',
    location: 'New Orleans, LA',
    period: 'Fall 2024 – Present',
    description: 'Peer tutor for economics and quantitative coursework.',
    bullets: [
      'Tutored undergraduates in Microeconomics, Macroeconomics, and introductory statistics',
      'Developed structured review materials and problem sets to reinforce exam preparation',
      'Maintained strong student outcomes with consistent session attendance and positive feedback',
    ],
  },
];
