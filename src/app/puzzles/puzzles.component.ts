import { Component, HostBinding, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

import { Puzzle } from '../interfaces/puzzle';
import { PuzzlesService } from '../services/puzzles.service';

@Component({
  selector: 'bb-puzzles',
  templateUrl: './puzzles.component.html',
  styleUrls: ['./puzzles.component.scss'],
  animations: [
    trigger('route', [
      transition('* => *', [
        animate(
          '50ms',
          style({
            position: 'absolute',
            right: 0,
            left: '-100%',
            opacity: 0
          })
        )
      ])
    ])
  ]
})
export class PuzzlesComponent implements OnInit {
  puzzles: Puzzle[];

  @HostBinding('@route') get r() {
    return true;
  }

  constructor(private puzzlesService: PuzzlesService) {}

  ngOnInit() {
    this.puzzlesService.getPuzzles().subscribe(v => {
      this.puzzles = v;
    });
  }
}
