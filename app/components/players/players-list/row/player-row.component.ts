import { Component, Input } from '@angular/core';
import { Router }           from '@angular/router';

import { Player } from '../../../../models/player';

@Component({
    moduleId: module.id,
    selector: '[player-row]',
    templateUrl: 'player-row.component.html',
    styleUrls: ['player-row.component.css']
})

export class PlayerRowComponent {
    @Input('player-row')
    player: Player;

    constructor(private router: Router) {

    }

    goToPlayerDetail(): void {
        this.router.navigate(['/player', this.player.id]);
    }
}
