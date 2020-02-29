import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { QuizComponent } from './quiz.component';
import { QuizRoutingModule } from './quiz-routing.module';

@NgModule({
  declarations: [QuizComponent],
  imports: [CommonModule, QuizRoutingModule, FormsModule]
})
export class QuizModule {}
