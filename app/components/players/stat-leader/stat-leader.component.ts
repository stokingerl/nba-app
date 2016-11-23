import { Component, Input } from '@angular/core';

import { Player } from '../../../models/player';

@Component({
    moduleId: module.id,
    selector: 'stat-leader',
    templateUrl: 'stat-leader.component.html',
    styleUrls: ['stat-leader.component.css']
})

export class StatLeaderComponent {
    @Input()
    players: Player[];
    @Input()
    header: string;
    @Input()
    stat: string;

    constructor() {

    }
    
}
