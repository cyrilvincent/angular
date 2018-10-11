import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GamesComponent } from './games/games.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GameCreateComponent } from './game-create/game-create.component';
import { GamesSearchComponent } from './games-search/games-search.component';

const routes: Routes = [
  { path: '', redirectTo: '/games', pathMatch: 'full' },
  { path: 'detail/:id', component: GameDetailComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'games', component: GamesComponent },
  { path: 'create', component: GameCreateComponent },
  { path: 'search', component: GamesSearchComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

