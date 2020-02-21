import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule {}
