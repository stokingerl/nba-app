"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const platform_browser_1 = require('@angular/platform-browser');
const http_1 = require('@angular/http');
const home_component_1 = require('./components/home/home.component');
const teams_list_component_1 = require('./components/teams/teams-list/teams-list.component');
const team_detail_component_1 = require('./components/teams/team-detail/team-detail.component');
const roster_component_1 = require('./components/teams/roster/roster.component');
const player_detail_component_1 = require('./components/players/player-detail/player-detail.component');
const player_row_component_1 = require('./components/players/players-list/row/player-row.component');
const players_list_component_1 = require('./components/players/players-list/list/players-list.component');
const players_list_header_component_1 = require('./components/players/players-list/header/players-list-header.component');
const navbar_component_1 = require('./components/navbar/navbar.component');
const dashboard_component_1 = require('./components/dashboard/dashboard.component');
const stat_leader_component_1 = require('./components/players/stat-leader/stat-leader.component');
const filter_players_pipe_1 = require('./components/players/players-list/list/filter-players.pipe');
const sort_players_pipe_1 = require('./components/players/players-list/list/sort-players.pipe');
const team_service_1 = require('./services/team/team.service');
const player_service_1 = require('./services/player/player.service');
const app_routing_module_1 = require('./app-routing.module');
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            app_routing_module_1.AppRoutingModule,
            http_1.HttpModule
        ],
        declarations: [
            home_component_1.HomeComponent,
            teams_list_component_1.TeamsListComponent,
            team_detail_component_1.TeamDetailComponent,
            roster_component_1.RosterComponent,
            player_detail_component_1.PlayerDetailComponent,
            filter_players_pipe_1.FilterPlayersPipe,
            sort_players_pipe_1.SortPlayersPipe,
            player_row_component_1.PlayerRowComponent,
            players_list_component_1.PlayersListComponent,
            players_list_header_component_1.PlayersListHeader,
            navbar_component_1.NavbarComponent,
            dashboard_component_1.DashboardComponent,
            stat_leader_component_1.StatLeaderComponent
        ],
        providers: [
            team_service_1.TeamService,
            player_service_1.PlayerService
        ],
        bootstrap: [
            home_component_1.HomeComponent
        ]
    }), 
    __metadata('design:paramtypes', [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map