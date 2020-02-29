import { CommonModule } from '@angular/common';
import { GamesComponent } from './games.component';
import { GamesRoutingModule } from './games-routing.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [GamesComponent],
  imports: [CommonModule, GamesRoutingModule]
})
export class GamesModule {}
