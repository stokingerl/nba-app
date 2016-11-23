import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { TeamDetail }     from '../../models/team-detail';
import { PlayerDetail }   from '../../models/player-detail';
import { PlayerBoxScore } from '../../models/player-box-score';

@Injectable()
export class TeamService {

    private baseUrl = 'http://api.probasketballapi.com/';
    private apiKey = 'NktJ2pLfdZ8SHBwWocVijC4YhPvxMelF';

    constructor(private http: Http) {

    }

    getAllTeams(): Observable<TeamDetail[]> {
        let url = this.baseUrl + 'team';
        let body = {
            api_key: this.apiKey
        };

        return this.http.post(url, body)
                   .map((r: Response) => r.json() as TeamDetail[])

    }

    getTeam(teamId: number): Observable<TeamDetail> {
        let url = this.baseUrl + 'team';
        let body = {
            api_key: this.apiKey,
            team_id: teamId
        };

        return this.http.post(url, body)
                   .map((r: Response) => r.json()[0] as TeamDetail);
    }

    getRoster(teamId: number): Observable<PlayerDetail[]> {
        let url = this.baseUrl + 'player';
        let body = {
            api_key: this.apiKey,
            team_id: teamId
        }

        return this.http.post(url, body)
                   .map((r: Response) => r.json() as PlayerDetail[])

    }


    getAllPlayerStatsByTeam(teamId: number): Observable<PlayerBoxScore[]> {
        let url = this.baseUrl + 'boxscore/player';
        let body = {
            api_key: this.apiKey,
            season: 2016,
            team_id: teamId
        };

        return this.http.post(url, body)
                   .map((r:Response) => r.json() as PlayerBoxScore[]);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
