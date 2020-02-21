import { Puzzle, Quiz } from '../interfaces/puzzle';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PuzzlesService {
  constructor(private http: HttpClient) {}

  getPuzzles(): Observable<Puzzle[]> {
    return this.http.get<Puzzle[]>('/assets/data/puzzles.json');
  }

  getQuiz(): Observable<Quiz[]> {
    return this.http.get<Quiz[]>('/assets/data/quiz.json');
  }
}
