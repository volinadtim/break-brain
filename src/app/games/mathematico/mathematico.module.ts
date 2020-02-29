import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MathematicoRoutingModule } from './mathematico-routing.module';
import { MathematicoComponent } from './mathematico.component';


@NgModule({
  declarations: [MathematicoComponent],
  imports: [
    CommonModule,
    MathematicoRoutingModule
  ]
})
export class MathematicoModule { }
