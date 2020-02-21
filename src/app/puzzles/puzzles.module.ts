import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PuzzleComponent } from './puzzle/puzzle.component';
import { PuzzlesComponent } from './puzzles.component';
import { PuzzlesRoutingModule } from './puzzles-routing.module';

@NgModule({
  declarations: [PuzzleComponent, PuzzlesComponent],
  imports: [CommonModule, PuzzlesRoutingModule]
})
export class PuzzlesModule {}
