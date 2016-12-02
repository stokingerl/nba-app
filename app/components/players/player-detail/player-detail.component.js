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
const player_1 = require('../../../models/player');
const player_service_1 = require('../../../services/player/player.service');
let PlayerDetailComponent = class PlayerDetailComponent {
    constructor(route, playerService) {
        this.route = route;
        this.playerService = playerService;
    }
    ngOnInit() {
        this.getPlayer();
    }
    getPlayer() {
        this.setPlayerId();
        this.playerService.getPlayer(this.playerId)
            .subscribe(data => this.player = new player_1.Player(data[0][0], null, data[1]), error => console.log(error));
    }
    setPlayerId() {
        this.route.params.forEach((params) => {
            this.playerId = +params['id'];
        });
    }
};
PlayerDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'player-detail',
        templateUrl: 'player-detail.component.html',
        styleUrls: ['player-detail.component.css']
    }), 
    __metadata('design:paramtypes', [router_1.ActivatedRoute, player_service_1.PlayerService])
], PlayerDetailComponent);
exports.PlayerDetailComponent = PlayerDetailComponent;
//# sourceMappingURL=player-detail.component.js.map