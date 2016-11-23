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
let SortPlayersPipe = class SortPlayersPipe {
    transform(players, sortBy) {
        if (!players) {
            return null;
        }
        switch (sortBy) {
            case 'Name':
                players.sort(this.compareNames);
                break;
            case 'PPG':
                players.sort(this.comparePPG);
                break;
            case 'RPG':
                players.sort(this.compareRPG);
                break;
            case 'APG':
                players.sort(this.compareAPG);
                break;
            default:
                break;
        }
        return players;
    }
    compareNames(a, b) {
        if (a.lastName < b.lastName)
            return -1;
        if (a.lastName > b.lastName)
            return 1;
        return 0;
    }
    comparePPG(a, b) {
        return b.ppg - a.ppg;
    }
    compareRPG(a, b) {
        return b.rpg - a.rpg;
    }
    compareAPG(a, b) {
        return b.apg - a.apg;
    }
};
SortPlayersPipe = __decorate([
    core_1.Pipe({
        name: 'sortPlayers'
    }), 
    __metadata('design:paramtypes', [])
], SortPlayersPipe);
exports.SortPlayersPipe = SortPlayersPipe;
//# sourceMappingURL=sort-players.pipe.js.map