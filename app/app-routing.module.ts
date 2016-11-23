import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TeamsListComponent }  from './components/teams/teams-list/teams-list.component';
import { TeamDetailComponent } from './components/teams/team-detail/team-detail.component';
import { PlayerDetailComponent } from './components/players/player-detail/player-detail.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
    { path: '', redirectTo: '/teams', pathMatch: 'full'},
    { path: 'teams', component: TeamsListComponent },
    { path: 'team/:id', component: TeamDetailComponent },
    { path: 'player/:id', component: PlayerDetailComponent },
    { path: 'players', component: DashboardComponent }
]

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {

}
