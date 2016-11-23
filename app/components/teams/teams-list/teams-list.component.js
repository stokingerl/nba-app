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
const team_service_1 = require('../../../services/team/team.service');
let TeamsListComponent = class TeamsListComponent {
    constructor(teamService, router) {
        this.teamService = teamService;
        this.router = router;
        this.logoImage = 'http://vignette3.wikia.nocookie.net/logopedia/images/4/4c/NBA_Horizontal_Logo_.svg/revision/latest?cb=20160207144301';
        this.title = 'Teams';
    }
    ngOnInit() {
        this.getAllTeams();
    }
    getAllTeams() {
        this.teamService.getAllTeams()
            .subscribe(value => this.teams = value, error => console.log(error));
    }
    goToDetail(teamId) {
        this.router.navigate(['/team', teamId]);
    }
};
TeamsListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'teams-list',
        templateUrl: 'teams-list.component.html',
        styleUrls: ['teams-list.component.css']
    }), 
    __metadata('design:paramtypes', [team_service_1.TeamService, router_1.Router])
], TeamsListComponent);
exports.TeamsListComponent = TeamsListComponent;
//# sourceMappingURL=teams-list.component.js.map