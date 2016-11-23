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
                players.sort(this.compareStrings('lastName'));
                break;
            case 'PPG':
                players.sort(this.compareNums('ppg'));
                break;
            case 'RPG':
                players.sort(this.compareNums('rpg'));
                break;
            case 'APG':
                players.sort(this.compareNums('apg'));
                break;
            case 'BPG':
                players.sort(this.compareNums('bpg'));
                break;
            case 'SPG':
                players.sort(this.compareNums('spg'));
                break;
            case 'FG%':
                players.sort(this.compareNums('fgPercent'));
                break;
            case '3P%':
                players.sort(this.compareNums('tpPercent'));
                break;
            default:
                break;
        }
        return players;
    }
    compareStrings(property) {
        return function (a, b) {
            if (a[property] < b[property])
                return -1;
            if (a[property] > b[property])
                return 1;
            return 0;
        };
    }
    compareNums(property) {
        return function (a, b) {
            return b[property] - a[property];
        };
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