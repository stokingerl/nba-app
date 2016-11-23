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
let TeamService = class TeamService {
    constructor(http) {
        this.http = http;
        this.baseUrl = 'http://api.probasketballapi.com/';
        this.apiKey = 'NktJ2pLfdZ8SHBwWocVijC4YhPvxMelF';
    }
    getAllTeams() {
        let url = this.baseUrl + 'team';
        let body = {
            api_key: this.apiKey
        };
        return this.http.post(url, body)
            .map((r) => r.json());
    }
    getTeam(teamId) {
        let url = this.baseUrl + 'team';
        let body = {
            api_key: this.apiKey,
            team_id: teamId
        };
        return this.http.post(url, body)
            .map((r) => r.json()[0]);
    }
    getRoster(teamId) {
        let url = this.baseUrl + 'player';
        let body = {
            api_key: this.apiKey,
            team_id: teamId
        };
        return this.http.post(url, body)
            .map((r) => r.json());
    }
    getAllPlayerStatsByTeam(teamId) {
        let url = this.baseUrl + 'boxscore/player';
        let body = {
            api_key: this.apiKey,
            season: 2016,
            team_id: teamId
        };
        return this.http.post(url, body)
            .map((r) => r.json());
    }
    handleError(error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
};
TeamService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http])
], TeamService);
exports.TeamService = TeamService;
//# sourceMappingURL=team.service.js.map