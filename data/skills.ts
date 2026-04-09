export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Technical',
    skills: ['Python', 'TypeScript', 'Next.js', 'Supabase', 'SQL', 'GitHub', 'Claude Code', 'Google Suite'],
  },
  {
    category: 'Finance & Productivity',
    skills: ['Excel', 'PowerPoint', 'Financial Modeling', 'Bloomberg Terminal'],
  },
  {
    category: 'Certifications',
    skills: ['Microsoft Excel Associate 2019', 'Anthropic AI Fluency (2026)'],
  },
  {
    category: 'Coursework',
    skills: [
      'Econometrics',
      'Money & Banking',
      'Microeconomic Theory',
      'Macroeconomics',
      'Statistics',
      'Artificial Intelligence',
      'Data Analytics',
    ],
  },
];
