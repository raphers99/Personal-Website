export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Technical',
    skills: ['Python', 'TypeScript', 'Next.js', 'Supabase', 'SQL', 'Git'],
  },
  {
    category: 'Finance',
    skills: ['Bloomberg Terminal', 'Excel', 'Financial Modeling', 'DCF Analysis'],
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
    ],
  },
];
