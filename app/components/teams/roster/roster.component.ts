import { Component, OnInit, Input }      from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';

import 'rxjs/Rx';

import { TeamService }   from '../../../services/team/team.service';

import { Player }         from '../../../models/player';
import { PlayerBoxScore } from '../../../models/player-box-score';
import { PlayerDetail }   from '../../../models/player-detail';

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
    numCalls = 2;
    callsFinished = 0;

    constructor(private teamService: TeamService,
                private router: Router,
                private route: ActivatedRoute) {

    }

    ngOnInit(): void {
        this.getPlayers();
    }

    private getPlayers(): void {
        this.getAllPlayersDetails();
        this.getAllPlayerStats();
    }

    private getAllPlayersDetails(): void {
        this.teamService.getRoster(this.teamId)
            .subscribe(
                value => this.setPlayerDetails(value),
                error => console.log(error)
            );
    }

    private getAllPlayerStats(): void {
        this.teamService.getAllPlayerStatsByTeam(this.teamId)
            .subscribe(
                value => this.filterPlayerStats(value),
                error => console.log(error)
            );
    }

    private setPlayerDetails(playerDetails: PlayerDetail[]): void {
        loop1:
        for(let playerDetail of playerDetails) {
            for(let player of this.players) {
                if(player.id === playerDetail.id) {
                    player.setPlayerDetails(playerDetail);
                    continue loop1;
                }
            }
            this.players.push(new Player(playerDetail, null, null));
        }
        this.finishedCall();
    }

    private filterPlayerStats(boxscores: PlayerBoxScore[]): void {
        loop1:
        for(let boxscore of boxscores) {
            for(let player of this.players) {
                if(player.id === boxscore.player_id) {
                    player.addBoxScore(boxscore);
                    continue loop1;
                }
            }
            this.players.push(new Player(null, boxscore, null));
        }
        this.finishedCall();
    }

    private finishedCall(): void {
        this.callsFinished++;
    }
}
