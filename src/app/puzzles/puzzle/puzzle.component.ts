import { Component, Input, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

import { Puzzle } from 'src/app/interfaces/puzzle';

@Component({
  selector: 'bb-puzzle',
  templateUrl: './puzzle.component.html',
  animations: [
    trigger('enterAnimation', [
      transition(':enter', [
        style({ transform: 'translateY(50px)', opacity: 0 }),
        animate('100ms', style({ transform: 'translateY(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        style({ transform: 'translateY(0)', opacity: 1 }),
        animate('100ms', style({ transform: 'translateY(50px)', opacity: 0 }))
      ])
    ])
  ],
  styleUrls: ['./puzzle.component.scss']
})
export class PuzzleComponent implements OnInit {
  @Input('data') data: Puzzle;
  isShow: boolean = false;

  constructor() {}

  ngOnInit() {}

  toggle() {
    this.isShow = !this.isShow;
  }
}
