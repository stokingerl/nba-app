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
const http_1 = require('@angular/http');
const Rx_1 = require('rxjs/Rx');
const global_constants_1 = require('../constants/global.constants');
let PlayerService = class PlayerService {
    constructor(http) {
        this.http = http;
        this.baseUrl = global_constants_1.GlobalConstants.API.BASE_API_URL;
        this.apiKey = global_constants_1.GlobalConstants.API.BASE_API_KEY;
    }
    getPlayer(playerId) {
        return Rx_1.Observable.forkJoin(this.getPlayerDetails(playerId), this.getPlayerStats(playerId));
    }
    getAllPlayers() {
        return Rx_1.Observable.forkJoin(this.getPlayerDetails(), this.getPlayerStats());
    }
    getPlayerDetails(playerId) {
        let url = this.baseUrl + 'player';
        let body = {
            api_key: this.apiKey,
            season: 2016,
            player_id: playerId
        };
        return this.http.post(url, body)
            .map((r) => r.json());
    }
    getPlayerStats(playerId) {
        let url = this.baseUrl + 'boxscore/player';
        let body = {
            api_key: this.apiKey,
            season: 2016,
            player_id: playerId
        };
        return this.http.post(url, body)
            .map((r) => r.json());
    }
};
PlayerService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http])
], PlayerService);
exports.PlayerService = PlayerService;
//# sourceMappingURL=player.service.js.map