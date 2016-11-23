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
const player_service_1 = require('../../services/player/player.service');
const player_1 = require('../../models/player');
const sort_players_pipe_1 = require('../players/players-list/list/sort-players.pipe');
let DashboardComponent = class DashboardComponent {
    constructor(playerService, router, route) {
        this.playerService = playerService;
        this.router = router;
        this.route = route;
        this.players = new Array();
        this.numCalls = 2;
        this.callsFinished = 0;
        this.headers = ['PPG', 'RPG', 'APG', 'BPG', 'SPG', 'FG%'];
        this.stats = ['ppg', 'rpg', 'apg', 'bpg', 'spg', 'fgPercent'];
        this.playerSorter = new sort_players_pipe_1.SortPlayersPipe();
    }
    ngOnInit() {
        this.getPlayers();
    }
    sortAndSlicePlayers(header) {
        return this.playerSorter.transform(this.players, header).slice(0, 5);
    }
    getPlayers() {
        this.getAllPlayersDetails();
        this.getAllPlayerStats();
    }
    getAllPlayersDetails() {
        this.playerService.getAllPlayerDetails()
            .subscribe(value => this.setPlayerDetails(value), error => console.log(error));
    }
    getAllPlayerStats() {
        this.playerService.getAllPlayerStats()
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
DashboardComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'player-dashboard',
        templateUrl: 'dashboard.component.html',
        styleUrls: ['dashboard.component.css']
    }), 
    __metadata('design:paramtypes', [player_service_1.PlayerService, router_1.Router, router_1.ActivatedRoute])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map