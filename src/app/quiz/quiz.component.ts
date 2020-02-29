import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

import { PuzzlesService } from '../services/puzzles.service';
import { Quiz } from './../interfaces/puzzle';

@Component({
  selector: 'bb-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
  animations: [
    trigger('zoom', [
      transition(':enter', [
        style({ transform: 'scale(0)', opacity: 0 }),
        animate('150ms', style({ transform: 'scale(1)', opacity: 1 }))
      ])
    ])
  ]
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
  userAnswer: string = '';
  type: 'select' | 'input';

  constructor(private quizService: PuzzlesService) {}

  ngOnInit() {
    this.quiz = JSON.parse(localStorage.getItem('quiz'));
    if (!this.quiz) this.load();
    else this.nextQuestion();
  }

  load() {
    this.ended = false;
    this.isAnswered = false;
    this.quizService.getQuiz().subscribe(v => {
      this.quiz = v;
      localStorage.setItem('quiz', JSON.stringify(this.quiz));
      this.nextQuestion();
    });
  }

  nextQuestion(): void {
    this.ended = false;
    this.isAnswered = false;
    this.question = null;
    if (this.quiz.length <= 0) {
      this.ended = true;
      return;
    }
    this.question = this.quiz.splice(
      Math.floor(Math.random() * this.quiz.length),
      1
    )[0];
    if (this.question.wrong) {
      this.type = 'select';
      this.checked = -1;
      this.variants = this.question.wrong.concat(this.question.correct);
      this.shuffle(this.variants);
      this.correct = this.variants.indexOf(this.question.correct);
    } else {
      this.type = 'input';
      this.userAnswer = '';
    }
  }

  submit() {
    if (this.isAnswered) {
      this.nextQuestion();
    } else {
      this.enter();
    }
  }

  get isSelect() {
    return this.type === 'select';
  }

  get isInput() {
    return this.type === 'input';
  }

  shuffle(array: any[]) {
    array.sort(() => Math.random() - 0.5);
  }

  enter() {
    if (this.isAnswered) return;
    localStorage.setItem('quiz', JSON.stringify(this.quiz));
    this.isAnswered = true;
    let v = [this.question.correct];
    if (this.question.forms) v = v.concat(this.question.forms);
    v = v.map(v => v.toLowerCase());
    if (~v.indexOf(this.userAnswer.toLowerCase())) {
      this.isCorrect = true;
    } else {
      this.isCorrect = false;
    }
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
    localStorage.setItem('quiz', JSON.stringify(this.quiz));
  }
}
