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
const player_factory_1 = require('../../services/player/player.factory');
const sort_players_pipe_1 = require('../players/players-list/list/sort-players.pipe');
const global_constants_1 = require('../../services/constants/global.constants');
let DashboardComponent = class DashboardComponent {
    constructor(playerService, router, route, playerFactory) {
        this.playerService = playerService;
        this.router = router;
        this.route = route;
        this.playerFactory = playerFactory;
        this.players = new Array();
        this.finished = false;
        this.constants = global_constants_1.GlobalConstants.HEADERS;
        this.headers = [
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
        this.playerSorter = new sort_players_pipe_1.SortPlayersPipe();
    }
    ngOnInit() {
        this.getPlayers();
    }
    sortAndSlicePlayers(header) {
        return this.playerSorter.transform(this.players, header).slice(0, 5);
    }
    getPlayers() {
        this.playerService.getAllPlayers()
            .subscribe(value => this.players = this.playerFactory.sortPlayerInfo(value[0], value[1]), error => console.log(error), () => this.finished = true);
    }
};
DashboardComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'player-dashboard',
        templateUrl: 'dashboard.component.html',
        styleUrls: ['dashboard.component.css']
    }), 
    __metadata('design:paramtypes', [player_service_1.PlayerService, router_1.Router, router_1.ActivatedRoute, player_factory_1.PlayerFactory])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map