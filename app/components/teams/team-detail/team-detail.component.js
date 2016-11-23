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
require('rxjs/Rx');
let TeamDetailComponent = class TeamDetailComponent {
    constructor(route, teamService) {
        this.route = route;
        this.teamService = teamService;
    }
    get teamLogo() {
        return 'http://i.cdn.turner.com/nba/nba/assets/logos/teams/primary/web/' + this.team.abbreviation + '.svg';
    }
    ngOnInit() {
        this.setTeamId();
        this.getTeamInfo();
    }
    getTeamInfo() {
        this.teamService.getTeam(this.teamId)
            .subscribe(value => this.team = value, error => console.log(error), () => console.log(this.team));
    }
    setTeamId() {
        this.route.params.forEach((params) => {
            this.teamId = +params['id'];
        });
    }
};
TeamDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'team-detail',
        templateUrl: 'team-detail.component.html',
        styleUrls: ['team-detail.component.css']
    }), 
    __metadata('design:paramtypes', [router_1.ActivatedRoute, team_service_1.TeamService])
], TeamDetailComponent);
exports.TeamDetailComponent = TeamDetailComponent;
//# sourceMappingURL=team-detail.component.js.map