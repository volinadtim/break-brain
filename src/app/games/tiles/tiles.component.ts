import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.scss'],
  animations: [
    trigger('enterAnimation', [
      transition(':enter', [
        style({ transform: 'scale(0)', opacity: 0 }),
        animate('150ms', style({ transform: 'scale(1)', opacity: 1 }))
      ]),
      transition(':leave', [
        style({ transform: 'scale(1)', opacity: 1 }),
        animate('150ms', style({ transform: 'scale(0)', opacity: 0 }))
      ])
    ])
  ]
})
export class TilesComponent implements OnInit {
  size: number = 3;
  level: number = 1;

  waitTime: number = 2000;
  wait: boolean = false;
  done: boolean = true;
  ended: boolean;
  started: boolean = false;

  tiles: boolean[][] = [];
  userSelect: boolean[][] = [];
  left: number = 0;
  lost: boolean;
  isShow: boolean;

  constructor() {}

  ngOnInit() {}

  fillTiles(corrects = this.level) {
    this.left = corrects;
    const tiles = new Array(this.size ** 2 - corrects)
      .fill(false)
      .concat(new Array(corrects).fill(true));
    this.shuffleArray(tiles);
    this.tiles = [];
    for (let i = 0; i < this.size; ++i) {
      this.tiles.push(tiles.slice(i * this.size, (i + 1) * this.size));
    }
  }

  fillUserSelect() {
    this.userSelect = [];
    for (let i = 0; i < this.size; ++i) {
      this.userSelect.push(new Array(this.size).fill(false));
    }
  }

  check(x: number, y: number) {
    if (this.wait || this.ended || this.userSelect[x][y]) return;
    this.userSelect[x][y] = true;
    if (!this.tiles[x][y]) {
      this.lose();
      return;
    }
    this.left--;
    if (this.left <= 0) {
      this.end();
    }
  }

  start() {
    this.started = true;
    this.level = 0;
    this.next();
  }

  isActive() {}

  next() {
    this.level++;
    this.size = Math.ceil((this.level / 0.4) ** 0.5);
    this.fillTiles();
    this.fillUserSelect();
    this.wait = true;
    this.done = false;
    this.ended = false;
    this.lost = false;
    this.isShow = true;
    setTimeout(_ => {
      this.isShow = false;
      this.wait = false;
    }, this.waitTime);
  }

  isSelected(x: number, y: number) {
    return this.userSelect[x][y];
  }

  isCorrect(x: number, y: number) {
    return this.tiles[x][y];
  }

  isWrong(x: number, y: number) {
    return !this.tiles[x][y] && this.userSelect[x][y];
  }

  lose() {
    this.isShow = true;
    this.ended = true;
    this.lost = true;
  }

  end() {
    this.isShow = true;
    this.ended = true;
    setTimeout(() => {
      this.next();
    }, 1000);
  }

  private shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
}
