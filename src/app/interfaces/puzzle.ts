export interface Puzzle {
  title: string;
  condition: string;
  solution: string;
  image?: string;
}

export interface Quiz {
  question: string;
  correct: string;
  wrong?: string[];
  image?: string;
  forms?: string[];
  description?: string;
}
