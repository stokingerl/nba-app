import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';

import { Player } from '../../models/player';
import { PlayerDetail } from '../../models/player-detail';
import { PlayerBoxScore } from '../../models/player-box-score';

@Injectable()
export class PlayerService {

    private baseUrl = 'http://api.probasketballapi.com/';
    private apiKey = 'NktJ2pLfdZ8SHBwWocVijC4YhPvxMelF';

    constructor(private http: Http) {

    }

    getPlayer(playerId: number): Observable<[PlayerDetail, PlayerBoxScore[]]> {
        return Observable.forkJoin(
            this.getPlayerDetails(playerId),
            this.getPlayerStats(playerId)
        );
    }

    getPlayerStats(playerId: number): Observable<PlayerBoxScore[]> {
        let url = this.baseUrl + 'boxscore/player';
        let body = {
            api_key: this.apiKey,
            season: 2016,
            player_id: playerId
        };

        return this.http.post(url, body)
                   .map((r:Response) => r.json() as PlayerBoxScore[]);
    }

    getPlayerDetails(playerId: number): Observable<PlayerDetail> {
        let url = this.baseUrl + 'player';
        let body = {
            api_key: this.apiKey,
            season: 2016,
            player_id: playerId
        };

        return this.http.post(url, body)
                   .map((r:Response) => r.json()[0] as PlayerDetail);
    }

}
