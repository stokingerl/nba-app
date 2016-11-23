"use strict";
class Team {
    constructor(teamDetail) {
        this.id = teamDetail.id;
        this.dkId = teamDetail.dk_id;
        this.city = teamDetail.city;
        this.teamName = teamDetail.team_name;
        this.abbreviation = teamDetail.abbreviation;
        this.createdAt = teamDetail.created_at;
        this.updatedAt = teamDetail.updated_at;
    }
    get teamLogo() {
        return 'http://i.cdn.turner.com/nba/nba/assets/logos/teams/primary/web/' + this.abbreviation + '.svg';
    }
}
exports.Team = Team;
//# sourceMappingURL=team.js.map