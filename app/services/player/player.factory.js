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
const player_1 = require('../../models/player');
let PlayerFactory = class PlayerFactory {
    constructor() {
        this.players = new Array();
    }
    sortPlayerInfo(playerDetails, boxscores) {
        this.setPlayerDetails(playerDetails);
        this.filterPlayerStats(boxscores);
        return this.players;
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
    }
};
PlayerFactory = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [])
], PlayerFactory);
exports.PlayerFactory = PlayerFactory;
//# sourceMappingURL=player.factory.js.map