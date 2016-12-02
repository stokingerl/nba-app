import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Player } from '../../../models/player';

import { PlayerService } from '../../../services/player/player.service';

@Component({
    moduleId: module.id,
    selector: 'player-detail',
    templateUrl: 'player-detail.component.html',
    styleUrls: ['player-detail.component.css']
})

export class PlayerDetailComponent implements OnInit {
    playerId: number;
    player: Player;

    constructor(private route: ActivatedRoute,
                private playerService: PlayerService) {

    }

    ngOnInit(): void {
        this.getPlayer();
    }

    private getPlayer(): void {
        this.setPlayerId();
        this.playerService.getPlayer(this.playerId)
            .subscribe(
                data => this.player = new Player(data[0][0], null, data[1]),
                error => console.log(error)
            );
    }

    private setPlayerId(): void {
        this.route.params.forEach((params: Params) => {
            this.playerId = +params['id'];
        });
    }

}
