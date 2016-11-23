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
const player_1 = require('../../../../models/player');
let PlayerRowComponent = class PlayerRowComponent {
    constructor(router) {
        this.router = router;
    }
    goToPlayerDetail() {
        this.router.navigate(['/player', this.player.id]);
    }
};
__decorate([
    core_1.Input('player-row'), 
    __metadata('design:type', player_1.Player)
], PlayerRowComponent.prototype, "player", void 0);
PlayerRowComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: '[player-row]',
        templateUrl: 'player-row.component.html',
        styleUrls: ['player-row.component.css']
    }), 
    __metadata('design:paramtypes', [router_1.Router])
], PlayerRowComponent);
exports.PlayerRowComponent = PlayerRowComponent;
//# sourceMappingURL=player-row.component.js.map