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
const player_1 = require('../../../models/player');
let RosterComponent = class RosterComponent {
    constructor(teamService, router, route) {
        this.teamService = teamService;
        this.router = router;
        this.route = route;
        this.players = new Array();
        this.numCalls = 2;
        this.callsFinished = 0;
    }
    ngOnInit() {
        this.getPlayers();
    }
    getPlayers() {
        this.getAllPlayersDetails();
        this.getAllPlayerStats();
    }
    getAllPlayersDetails() {
        this.teamService.getRoster(this.teamId)
            .subscribe(value => this.setPlayerDetails(value), error => console.log(error));
    }
    getAllPlayerStats() {
        this.teamService.getAllPlayerStatsByTeam(this.teamId)
            .subscribe(value => this.filterPlayerStats(value), error => console.log(error));
    }
    setPlayerDetails(playerDetails) {
        loop1: for (let playerDetail of playerDetails) {
            for (let player of this.players) {
                if (player.id === playerDetail.id) {
                    player.setPlayerDetails(playerDetail);
                    continue loop1;
                }
            }
            this.players.push(new player_1.Player(playerDetail, null, null));
        }
        this.finishedCall();
    }
    filterPlayerStats(boxscores) {
        loop1: for (let boxscore of boxscores) {
            for (let player of this.players) {
                if (player.id === boxscore.player_id) {
                    player.addBoxScore(boxscore);
                    continue loop1;
                }
            }
            this.players.push(new player_1.Player(null, boxscore, null));
        }
        this.finishedCall();
    }
    finishedCall() {
        this.callsFinished++;
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
    __metadata('design:paramtypes', [team_service_1.TeamService, router_1.Router, router_1.ActivatedRoute])
], RosterComponent);
exports.RosterComponent = RosterComponent;
//# sourceMappingURL=roster.component.js.map