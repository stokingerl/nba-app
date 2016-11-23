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
let PlayersListComponent = class PlayersListComponent {
    constructor() {
    }
    ngOnInit() {
        this.sortByValue = this.headers ? this.headers[0] : null;
    }
    sortByChanged($event) {
        this.sortByValue = $event;
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', Array)
], PlayersListComponent.prototype, "players", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Array)
], PlayersListComponent.prototype, "headers", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Array)
], PlayersListComponent.prototype, "stats", void 0);
PlayersListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'players-list',
        templateUrl: 'players-list.component.html',
        styleUrls: ['players-list.component.css']
    }), 
    __metadata('design:paramtypes', [])
], PlayersListComponent);
exports.PlayersListComponent = PlayersListComponent;
//# sourceMappingURL=players-list.component.js.map