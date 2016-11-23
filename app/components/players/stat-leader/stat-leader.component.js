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
let StatLeaderComponent = class StatLeaderComponent {
    constructor() {
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', Array)
], StatLeaderComponent.prototype, "players", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', String)
], StatLeaderComponent.prototype, "header", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', String)
], StatLeaderComponent.prototype, "stat", void 0);
StatLeaderComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'stat-leader',
        templateUrl: 'stat-leader.component.html',
        styleUrls: ['stat-leader.component.css']
    }), 
    __metadata('design:paramtypes', [])
], StatLeaderComponent);
exports.StatLeaderComponent = StatLeaderComponent;
//# sourceMappingURL=stat-leader.component.js.map