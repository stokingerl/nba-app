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
let PlayersListHeader = class PlayersListHeader {
    constructor() {
        this.sortByChange = new core_1.EventEmitter();
    }
    setSortBy(header) {
        this.sortBy = header;
        this.sortByChange.emit(this.sortBy);
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', Array)
], PlayersListHeader.prototype, "headers", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', String)
], PlayersListHeader.prototype, "sortBy", void 0);
__decorate([
    core_1.Output(), 
    __metadata('design:type', core_1.EventEmitter)
], PlayersListHeader.prototype, "sortByChange", void 0);
PlayersListHeader = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: '[players-list-header]',
        templateUrl: 'players-list-header.component.html',
        styleUrls: ['players-list-header.component.css']
    }), 
    __metadata('design:paramtypes', [])
], PlayersListHeader);
exports.PlayersListHeader = PlayersListHeader;
//# sourceMappingURL=players-list-header.component.js.map