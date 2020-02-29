import { RouterModule, Routes } from '@angular/router';

import { MathematicoComponent } from './mathematico.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: MathematicoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MathematicoRoutingModule { }
