import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TabBarComponent } from './tab-bar.component';

@NgModule({
  declarations: [TabBarComponent],
  exports: [TabBarComponent],
  imports: [CommonModule, RouterModule]
})
export class TabBarModule {}
