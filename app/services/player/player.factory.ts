import { Injectable } from '@angular/core';

import { Player } from '../../models/player';
import { PlayerDetail } from '../../models/player-detail';
import { PlayerBoxScore } from '../../models/player-box-score';

@Injectable()
export class PlayerFactory {
    private players: Player[] = new Array<Player>();

    sortPlayerInfo(playerDetails: PlayerDetail[], boxscores: PlayerBoxScore[]): Player[] {
        this.setPlayerDetails(playerDetails);
        this.filterPlayerStats(boxscores);
        return this.players;
    }

    private setPlayerDetails(playerDetails: PlayerDetail[]): void {
        loop1:
        for(let playerDetail of playerDetails) {
            for(let player of this.players) {
                if(player.id === playerDetail.id) {
                    player.setPlayerDetails(playerDetail);
                    continue loop1;
                }
            }
            this.players.push(new Player(playerDetail, null, null));
        }
    }

    private filterPlayerStats(boxscores: PlayerBoxScore[]): void {
        loop1:
        for(let boxscore of boxscores) {
            for(let player of this.players) {
                if(player.id === boxscore.player_id) {
                    player.addBoxScore(boxscore);
                    continue loop1;
                }
            }
            this.players.push(new Player(null, boxscore, null));
        }
    }
}
