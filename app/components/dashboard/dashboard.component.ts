import { Component, OnInit, Input }      from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';

import 'rxjs/Rx';

import { PlayerService } from '../../services/player/player.service';
import { PlayerFactory } from '../../services/player/player.factory';

import { Player }         from '../../models/player';
import { PlayerBoxScore } from '../../models/player-box-score';
import { PlayerDetail }   from '../../models/player-detail';

import { SortPlayersPipe } from '../players/players-list/list/sort-players.pipe';

import { GlobalConstants } from '../../services/constants/global.constants';

@Component({
    moduleId: module.id,
    selector: 'player-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    players = new Array<Player>();
    finished = false;
    constants = GlobalConstants.HEADERS;
    headers: string[] = [
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
    playerSorter = new SortPlayersPipe();

    constructor(private playerService: PlayerService,
                private router: Router,
                private route: ActivatedRoute,
                private playerFactory: PlayerFactory) {

    }

    ngOnInit(): void {
        this.getPlayers();
    }

    sortAndSlicePlayers(header: string): Player[] {
        return this.playerSorter.transform(this.players, header).slice(0,5);
    }

    private getPlayers(): void {
        this.playerService.getAllPlayers()
            .subscribe(
                value => this.players = this.playerFactory.sortPlayerInfo(value[0], value[1]),
                error => console.log(error),
                () => this.finished = true
            );
    }
}
