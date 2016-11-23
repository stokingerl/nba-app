import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { TeamDetail } from '../../../models/team-detail';

import { TeamService } from '../../../services/team/team.service';

@Component({
    moduleId: module.id,
    selector: 'teams-list',
    templateUrl: 'teams-list.component.html',
    styleUrls: ['teams-list.component.css']
})

export class TeamsListComponent implements OnInit {
    teams: TeamDetail[];
    logoImage: string = 'http://vignette3.wikia.nocookie.net/logopedia/images/4/4c/NBA_Horizontal_Logo_.svg/revision/latest?cb=20160207144301';
    title: string = 'Teams';

    constructor(private teamService: TeamService,
                private router: Router) {

    }

    ngOnInit(): void {
        this.getAllTeams();
    }

    private getAllTeams(): void {
        this.teamService.getAllTeams()
            .subscribe(
                value => this.teams = value,
                error => console.log(error)
            );
    }

    goToDetail(teamId: number): void {
        this.router.navigate(['/team', teamId]);
    }

}
