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
    role: 'Venture Capital Intern',
    organization: 'Alumni Ventures',
    location: 'London, UK',
    period: 'May – Jul 2026',
    description: 'Incoming intern at one of the most active VC firms in the US, covering EMEA and US early- to growth-stage deals.',
    bullets: [
      'Selected for a competitive internship focused on deal sourcing, due diligence, and investment memo support',
      'Coverage across defence, technology, and innovation sectors in EMEA and US markets',
    ],
  },
  {
    role: 'Data Peer Mentor Manager / Teaching Assistant',
    organization: 'Tulane University',
    location: 'New Orleans, LA',
    period: 'Jan 2025 – Present',
    description: 'Lead the university\'s Data Peer Mentor program and serve as TA for Data Analytics.',
    bullets: [
      'Oversee PhD TA hiring, training, scheduling, and performance; run biweekly meetings coordinating with faculty and 300+ student mentees',
      'Guide 60+ students in data analytics through hands-on support, weekly office hours, grading, and research projects',
    ],
  },
  {
    role: 'Sales Officer',
    organization: 'CoverGov',
    location: 'New Orleans, LA',
    period: 'Aug – Dec 2025',
    description: 'B2G SaaS sales for a government contracting intelligence platform.',
    bullets: [
      'Drove sales by building relationships with political staffers, legislative aides, and government affairs professionals',
      'Earned promotion to Sales Officer through demonstrated pitch delivery, product knowledge, and sales performance',
    ],
  },
  {
    role: 'Fundraiser',
    organization: 'Black Classic Marketing Agency',
    location: 'Sydney, Australia',
    period: 'Feb – Jun 2024',
    description: 'Face-to-face donor acquisition for the Heart Research Institute on the streets of Sydney.',
    bullets: [
      'Achieved top fundraiser company-wide for two consecutive weeks, recording 26 sales in a single week against a target of 10',
      'Selected to travel to remote locations (Dubbo & Orange); earned performance-based bonuses and recognition',
    ],
  },
];
