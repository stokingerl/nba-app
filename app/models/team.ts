import { TeamDetail } from './team-detail';

export class Team {
    id: number;
    dkId: string;
    city: string;
    teamName: string;
    abbreviation: string;
    createdAt: string;
    updatedAt: string;
    get teamLogo(): string {
        return 'http://i.cdn.turner.com/nba/nba/assets/logos/teams/primary/web/' + this.abbreviation + '.svg';
    }

    constructor(teamDetail: TeamDetail) {
        this.id = teamDetail.id;
        this.dkId = teamDetail.dk_id;
        this.city = teamDetail.city;
        this.teamName = teamDetail.team_name;
        this.abbreviation = teamDetail.abbreviation;
        this.createdAt = teamDetail.created_at;
        this.updatedAt = teamDetail.updated_at;
    }
}
