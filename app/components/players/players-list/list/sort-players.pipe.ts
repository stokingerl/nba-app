import { Pipe, PipeTransform } from '@angular/core';

import { Player } from '../../../../models/player';

@Pipe({
    name: 'sortPlayers'
})

export class SortPlayersPipe implements PipeTransform {

    transform(players: Player[], sortBy: string): Player[] {
        if(!players){
            return null;
        }

        switch(sortBy) {
            case 'Name':
                players.sort(this.compareStrings('lastName'));
                break;
            case 'PPG':
                players.sort(this.compareNums('ppg'));
                break;
            case 'RPG':
                players.sort(this.compareNums('rpg'));
                break;
            case 'APG':
                players.sort(this.compareNums('apg'));
                break;
            case 'BPG':
                players.sort(this.compareNums('bpg'));
                break;
            case 'SPG':
                players.sort(this.compareNums('spg'));
                break;
            case 'FG%':
                players.sort(this.compareNums('fgPercent'));
                break;
            case '3P%':
                players.sort(this.compareNums('tpPercent'));
                break;
            default:
                break;
        }

        return players;
    }

    compareStrings(property: string) {
        return function(a: Player, b: Player): number {
            if(a[property] < b[property])
                return -1;
            if(a[property] > b[property])
                return 1;
            return 0;
        }
    }

    compareNums(property: string) {
        return function(a: Player, b: Player): number {
            return b[property] - a[property];
        }
    }
}
