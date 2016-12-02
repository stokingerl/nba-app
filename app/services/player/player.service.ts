import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';

import { Player } from '../../models/player';
import { PlayerDetail } from '../../models/player-detail';
import { PlayerBoxScore } from '../../models/player-box-score';

import { GlobalConstants } from '../constants/global.constants';

@Injectable()
export class PlayerService {

    private baseUrl = GlobalConstants.API.BASE_API_URL;
    private apiKey = GlobalConstants.API.BASE_API_KEY;

    constructor(private http: Http) {

    }

    getPlayer(playerId: number): Observable<[PlayerDetail, PlayerBoxScore[]]> {
        return Observable.forkJoin(
            this.getPlayerDetails(playerId),
            this.getPlayerStats(playerId)
        );
    }

    getAllPlayers(): Observable<[PlayerDetail[], PlayerBoxScore[]]> {
        return Observable.forkJoin(
            this.getPlayerDetails(),
            this.getPlayerStats()
        );
    }

    getPlayerDetails(playerId?: number): Observable<PlayerDetail[]> {
        let url = this.baseUrl + 'player';
        let body = {
            api_key: this.apiKey,
            season: 2016,
            player_id: playerId
        };

        return this.http.post(url, body)
                   .map((r:Response) => r.json() as PlayerDetail[]);
    }

    getPlayerStats(playerId?: number): Observable<PlayerBoxScore[]> {
        let url = this.baseUrl + 'boxscore/player';
        let body = {
            api_key: this.apiKey,
            season: 2016,
            player_id: playerId
        };

        return this.http.post(url, body)
                   .map((r:Response) => r.json() as PlayerBoxScore[]);
    }

}
