import { Component, OnInit, Input }      from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';

import 'rxjs/Rx';

import { TeamService }   from '../../../services/team/team.service';
import { PlayerFactory } from '../../../services/player/player.factory';

import { Player }         from '../../../models/player';
import { PlayerBoxScore } from '../../../models/player-box-score';
import { PlayerDetail }   from '../../../models/player-detail';

import { GlobalConstants } from '../../../services/constants/global.constants';

@Component({
    moduleId: module.id,
    selector: 'team-roster',
    templateUrl: 'roster.component.html',
    styleUrls: ['roster.component.css']
})

export class RosterComponent implements OnInit {
    @Input()
    teamId: number;
    players = new Array<Player>();
    finished = false;
    constants = GlobalConstants.HEADERS;
    headers: string[] = [
        'Name',
        this.constants.PPG_HEADER,
        this.constants.RPG_HEADER,
        this.constants.APG_HEADER,
        this.constants.BPG_HEADER,
        this.constants.SPG_HEADER,
        this.constants.FGP_HEADER
    ];
    stats: string[] = [
        this.constants.PPG_PROPERTY,
        this.constants.RPG_PROPERTY,
        this.constants.APG_PROPERTY,
        this.constants.BPG_PROPERTY,
        this.constants.SPG_PROPERTY,
        this.constants.FGP_PROPERTY
    ];

    constructor(private teamService: TeamService,
                private router: Router,
                private route: ActivatedRoute,
                private playerFactory: PlayerFactory) {

    }

    ngOnInit(): void {
        this.getPlayers();
    }

    private getPlayers(): void {
        this.teamService.getTeamRoster(this.teamId)
            .subscribe(
                value => this.players = this.playerFactory.sortPlayerInfo(value[0], value[1]),
                error => console.log(error),
                () => this.finished = true
            );
    }
}
