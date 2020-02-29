import { Component, HostBinding, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'bb-tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrls: ['./tab-bar.component.scss']
})
export class TabBarComponent implements OnInit {
  constructor() {}

  last = 10000;
  current = 0;

  ngOnInit(): void {}

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    this.last = this.current;
    this.current =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
  }

  @HostBinding('class.hide') get isHide() {
    return this.current - this.last > 0;
  }
}
