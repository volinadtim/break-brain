import { Component, OnInit } from '@angular/core';

import { Puzzle } from '../interfaces/puzzle';
import { PuzzlesService } from '../services/puzzles.service';

@Component({
  selector: 'bb-puzzles',
  templateUrl: './puzzles.component.html',
  styleUrls: ['./puzzles.component.scss']
})
export class PuzzlesComponent implements OnInit {
  puzzles: Puzzle[];

  constructor(private puzzlesService: PuzzlesService) {
    console.log(this.puzzles);
  }

  ngOnInit() {
    this.puzzlesService.getPuzzles().subscribe(v => {
      this.puzzles = v;
      console.log(this.puzzles);
    });
    console.log(this.puzzles);
  }
}
