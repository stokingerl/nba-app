import { Component, OnInit }     from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';

import { TeamService } from '../../../services/team/team.service';

import 'rxjs/Rx';

import { TeamDetail } from '../../../models/team-detail';

@Component({
    moduleId: module.id,
    selector: 'team-detail',
    templateUrl: 'team-detail.component.html',
    styleUrls: ['team-detail.component.css']
})

export class TeamDetailComponent implements OnInit {
    teamId: number;
    team: TeamDetail;

    get teamLogo(): string {
        return 'http://i.cdn.turner.com/nba/nba/assets/logos/teams/primary/web/' + this.team.abbreviation + '.svg';
    }

    constructor(private route: ActivatedRoute,
                private teamService: TeamService) {

    }

    ngOnInit(): void {
        this.setTeamId();
        this.getTeamInfo();
    }

    private getTeamInfo(): void {
        this.teamService.getTeam(this.teamId)
            .subscribe(
                value => this.team = value,
                error => console.log(error),
                () => console.log(this.team)
            );
    }

    private setTeamId(): void {
        this.route.params.forEach((params: Params) => {
            this.teamId = +params['id'];
        });
    }
}
