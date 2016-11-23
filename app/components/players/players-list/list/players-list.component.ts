import { Component, Input } from '@angular/core';

import { PlayerRowComponent } from '../row/player-row.component';
import { PlayersListHeader } from '../header/players-list-header.component';

import { Player } from '../../../../models/player';

@Component({
    moduleId: module.id,
    selector: 'players-list',
    templateUrl: 'players-list.component.html',
    styleUrls: ['players-list.component.css']
})

export class PlayersListComponent {
    @Input()
    players: Player[];
    headers: string[] = ['Name', 'PPG', 'RPG', 'APG'];
    sortByValue: string = "Name";

    constructor() {

    }

    sortByChanged($event: any): void {
        this.sortByValue = $event;
    }

}
