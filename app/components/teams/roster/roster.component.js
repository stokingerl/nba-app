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
require('rxjs/Rx');
const team_service_1 = require('../../../services/team/team.service');
const player_factory_1 = require('../../../services/player/player.factory');
const global_constants_1 = require('../../../services/constants/global.constants');
let RosterComponent = class RosterComponent {
    constructor(teamService, router, route, playerFactory) {
        this.teamService = teamService;
        this.router = router;
        this.route = route;
        this.playerFactory = playerFactory;
        this.players = new Array();
        this.finished = false;
        this.constants = global_constants_1.GlobalConstants.HEADERS;
        this.headers = [
            'Name',
            this.constants.PPG_HEADER,
            this.constants.RPG_HEADER,
            this.constants.APG_HEADER,
            this.constants.BPG_HEADER,
            this.constants.SPG_HEADER,
            this.constants.FGP_HEADER
        ];
        this.stats = [
            this.constants.PPG_PROPERTY,
            this.constants.RPG_PROPERTY,
            this.constants.APG_PROPERTY,
            this.constants.BPG_PROPERTY,
            this.constants.SPG_PROPERTY,
            this.constants.FGP_PROPERTY
        ];
    }
    ngOnInit() {
        this.getPlayers();
    }
    getPlayers() {
        this.teamService.getTeamRoster(this.teamId)
            .subscribe(value => this.players = this.playerFactory.sortPlayerInfo(value[0], value[1]), error => console.log(error), () => this.finished = true);
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', Number)
], RosterComponent.prototype, "teamId", void 0);
RosterComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'team-roster',
        templateUrl: 'roster.component.html',
        styleUrls: ['roster.component.css']
    }), 
    __metadata('design:paramtypes', [team_service_1.TeamService, router_1.Router, router_1.ActivatedRoute, player_factory_1.PlayerFactory])
], RosterComponent);
exports.RosterComponent = RosterComponent;
//# sourceMappingURL=roster.component.js.map