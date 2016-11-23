import { Component, OnInit, Input }      from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';

import 'rxjs/Rx';

import { PlayerService }   from '../../services/player/player.service';

import { Player }         from '../../models/player';
import { PlayerBoxScore } from '../../models/player-box-score';
import { PlayerDetail }   from '../../models/player-detail';

import { SortPlayersPipe } from '../players/players-list/list/sort-players.pipe';

@Component({
    moduleId: module.id,
    selector: 'player-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    players = new Array<Player>();
    numCalls = 2;
    callsFinished = 0;
    headers: string[] = ['PPG', 'RPG', 'APG', 'BPG', 'SPG', 'FG%'];
    stats: string[] = ['ppg','rpg','apg', 'bpg', 'spg', 'fgPercent'];
    playerSorter = new SortPlayersPipe();

    constructor(private playerService: PlayerService,
                private router: Router,
                private route: ActivatedRoute) {

    }

    ngOnInit(): void {
        this.getPlayers();
    }

    sortAndSlicePlayers(header: string): Player[] {
        return this.playerSorter.transform(this.players, header).slice(0,5);
    }

    private getPlayers(): void {
        this.getAllPlayersDetails();
        this.getAllPlayerStats();
    }

    private getAllPlayersDetails(): void {
        this.playerService.getAllPlayerDetails()
            .subscribe(
                value => this.setPlayerDetails(value),
                error => console.log(error)
            );
    }

    private getAllPlayerStats(): void {
        this.playerService.getAllPlayerStats()
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
