import { RouterModule, Routes } from '@angular/router';

import { GamesComponent } from './games.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: GamesComponent
  },
  {
    path: 'mathematico',
    loadChildren: () =>
      import('./mathematico/mathematico.module').then(m => m.MathematicoModule)
  },
  {
    path: 'tiles',
    loadChildren: () => import('./tiles/tiles.module').then(m => m.TilesModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule {}
