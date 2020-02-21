import { Component, OnInit } from '@angular/core';

import { PuzzlesService } from '../services/puzzles.service';
import { Quiz } from './../interfaces/puzzle';

@Component({
  selector: 'bb-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  quiz: Quiz[];
  question: Quiz;
  variants: string[];
  checked: number = -1;
  correct: number = -1;
  isAnswered: boolean = false;
  isCorrect: boolean = false;
  ended: boolean = false;

  constructor(private quizService: PuzzlesService) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.quizService.getQuiz().subscribe(v => {
      this.quiz = v;
      this.nextQuestion();
    });
    this.ended = false;
  }

  nextQuestion(): void {
    if (this.quiz.length <= 0) this.ended = true;
    this.checked = -1;
    this.question = null;
    this.question = this.quiz.splice(
      Math.floor(Math.random() * this.quiz.length),
      1
    )[0];
    this.variants = this.question.wrong.concat(this.question.correct);
    this.shuffle(this.variants);
    this.correct = this.variants.indexOf(this.question.correct);
    this.isAnswered = false;
  }

  shuffle(array: any[]) {
    array.sort(() => Math.random() - 0.5);
  }

  check(index: number) {
    if (this.isAnswered) return;
    this.checked = index;
    this.isAnswered = true;
    if (this.checked === this.correct) {
      this.isCorrect = true;
    } else {
      this.isCorrect = false;
    }
  }
}
