import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TilesComponent } from './tiles.component';
import { TilesRoutes } from './tiles-routing.module';

@NgModule({
  exports: [TilesComponent],
  declarations: [TilesComponent],
  imports: [CommonModule, FormsModule, RouterModule.forChild(TilesRoutes)]
})
export class TilesModule {}
