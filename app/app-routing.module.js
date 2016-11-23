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
const router_1 = require('@angular/router');
const teams_list_component_1 = require('./components/teams/teams-list/teams-list.component');
const team_detail_component_1 = require('./components/teams/team-detail/team-detail.component');
const player_detail_component_1 = require('./components/players/player-detail/player-detail.component');
const dashboard_component_1 = require('./components/dashboard/dashboard.component');
const routes = [
    { path: '', redirectTo: '/teams', pathMatch: 'full' },
    { path: 'teams', component: teams_list_component_1.TeamsListComponent },
    { path: 'team/:id', component: team_detail_component_1.TeamDetailComponent },
    { path: 'player/:id', component: player_detail_component_1.PlayerDetailComponent },
    { path: 'players', component: dashboard_component_1.DashboardComponent }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    }), 
    __metadata('design:paramtypes', [])
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map