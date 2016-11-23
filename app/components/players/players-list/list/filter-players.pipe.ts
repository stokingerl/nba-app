import { Pipe, PipeTransform } from '@angular/core';

import { Player } from '../../../../models/player';

@Pipe({
    name: 'filterPlayers'
})

export class FilterPlayersPipe implements PipeTransform {
    transform(players: Player[]): Player[] {
        if(!players){
            return null;
        }

        return players.filter(player => player.games > 0 && player.playerName);
    }
}
