import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: '[players-list-header]',
    templateUrl: 'players-list-header.component.html',
    styleUrls: ['players-list-header.component.css']
})

export class PlayersListHeader {
    @Input()
    headers: string[];
    @Input()
    sortBy: string;
    @Output()
    sortByChange: EventEmitter<string> = new EventEmitter<string>();

    constructor() {

    }

    setSortBy(header: string): void {
        this.sortBy = header;
        this.sortByChange.emit(this.sortBy);
    }

}
