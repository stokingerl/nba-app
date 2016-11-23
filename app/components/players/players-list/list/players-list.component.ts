import { Component, Input, OnInit } from '@angular/core';

import { PlayerRowComponent } from '../row/player-row.component';
import { PlayersListHeader } from '../header/players-list-header.component';

import { Player } from '../../../../models/player';

@Component({
    moduleId: module.id,
    selector: 'players-list',
    templateUrl: 'players-list.component.html',
    styleUrls: ['players-list.component.css']
})

export class PlayersListComponent implements OnInit {
    @Input()
    players: Player[];
    @Input()
    headers: string[];
    @Input()
    stats: string[];
    sortByValue: string;

    constructor() {

    }

    ngOnInit(): void {
        this.sortByValue = this.headers ? this.headers[0] : null;
    }

    sortByChanged($event: any): void {
        this.sortByValue = $event;
    }

}
