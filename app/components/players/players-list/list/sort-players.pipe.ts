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
                players.sort(this.compareNames);
                break;
            case 'PPG':
                players.sort(this.comparePPG);
                break;
            case 'RPG':
                players.sort(this.compareRPG);
                break;
            case 'APG':
                players.sort(this.compareAPG);
                break;
            default:
                break;
        }

        return players;
    }

    compareNames(a: Player, b: Player): number {
        if(a.lastName < b.lastName)
            return -1;
        if(a.lastName > b.lastName)
            return 1;
        return 0;
    }

    comparePPG(a: Player, b: Player): number {
        return b.ppg - a.ppg;
    }

    compareRPG(a: Player, b: Player): number {
        return b.rpg - a.rpg;
    }

    compareAPG(a: Player, b: Player): number {
        return b.apg - a.apg;
    }
}
