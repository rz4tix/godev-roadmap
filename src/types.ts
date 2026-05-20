export interface Day {
  day: number;
  title: string;
  goal: string;
  technologies: string[];
  concepts: string[];
  codingTasks: string;
  miniChallenges: string;
  realWorldScenarios: string;
  deliverables: string;
  githubExpectations: string;
  documentationTasks: string;
  testingRequirements: string;
}

export interface Week {
  week: number;
  theme: string;
  whyItMatters: string;
  juniorMistakes: string;
  midLevelMindset: string;
  days: Day[];
}

export interface Month {
  month: number;
  title: string;
  focus: string;
  capstoneProject: string;
  architectureReview: string;
  performanceReview: string;
  productionChecklist: string[];
  weeks: Week[];
}
