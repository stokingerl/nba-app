import { NgModule }     from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { HttpModule }   from '@angular/http';

import { HomeComponent }       from './components/home/home.component';
import { TeamsListComponent }  from './components/teams/teams-list/teams-list.component';
import { TeamDetailComponent } from './components/teams/team-detail/team-detail.component';
import { RosterComponent }     from './components/teams/roster/roster.component';
import { PlayerDetailComponent } from './components/players/player-detail/player-detail.component';
import { PlayerRowComponent } from './components/players/players-list/row/player-row.component';
import { PlayersListComponent } from './components/players/players-list/list/players-list.component';
import { PlayersListHeader } from './components/players/players-list/header/players-list-header.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { FilterPlayersPipe } from './components/players/players-list/list/filter-players.pipe';
import { SortPlayersPipe } from './components/players/players-list/list/sort-players.pipe';

import { TeamService }  from './services/team/team.service';
import { PlayerService} from './services/player/player.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpModule
    ],
    declarations: [
        HomeComponent,
        TeamsListComponent,
        TeamDetailComponent,
        RosterComponent,
        PlayerDetailComponent,
        FilterPlayersPipe,
        SortPlayersPipe,
        PlayerRowComponent,
        PlayersListComponent,
        PlayersListHeader,
        NavbarComponent
    ],
    providers: [
        TeamService,
        PlayerService
    ],
    bootstrap: [
        HomeComponent
    ]
})

export class AppModule {

}
