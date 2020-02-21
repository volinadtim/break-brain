export interface Puzzle {
  title: string;
  condition: string;
  solution: string;
}

export interface Quiz {
  answer: string;
  correct: string;
  wrong: string[];
}
