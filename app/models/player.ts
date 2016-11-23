import { PlayerDetail }   from './player-detail';
import { PlayerBoxScore } from './player-box-score';

export class Player {
    id: number;
    teamId: number;
    playerName: string;
    firstName: string;
    lastName: string;
    birthDate: string;
    position: string;
    dkPosition: string;
    dkId: string;
    min = 0;
    fgm= 0;
    fga= 0;
    fg3m= 0;
    fg3a= 0;
    ftm= 0;
    fta= 0;
    oreb= 0;
    dreb= 0;
    reb = 0;
    ast= 0;
    blk= 0;
    stl= 0;
    to= 0;
    pf= 0;
    pts= 0;
    plusMinus= 0;
    mpg: number;
    ppg: number;
    apg: number;
    rpg: number;
    bpg: number;
    spg: number;
    fgPercent: number;
    tpPercent: number;
    games = 0;
    playerImage: string;


    constructor(playerDetail?: PlayerDetail, boxscore?: PlayerBoxScore, boxscores?: PlayerBoxScore[]) {
        if(playerDetail) {
            this.setPlayerDetails(playerDetail);
        }
        if(boxscore) {
            this.addBoxScore(boxscore);
        }
        if(boxscores) {
            for(let boxscore of boxscores) {
                this.addBoxScore(boxscore);
            }
        }
    }

    setPlayerDetails(playerDetail: PlayerDetail): void {
        this.id = playerDetail.id;
        this.teamId = playerDetail.team_id;
        this.playerName = playerDetail.player_name;
        this.firstName = playerDetail.first_name;
        this.lastName = playerDetail.last_name;
        this.birthDate = playerDetail.birth_date;
        this.position = playerDetail.position;
        this.dkPosition = playerDetail.dk_position;
        this.dkId = playerDetail.dk_id;

        this.playerImage = 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/' + this.id + '.png'
    }

    addBoxScore(boxscore: PlayerBoxScore): void {
        //this.min += boxscore.min;
        this.id = boxscore.player_id;
        this.teamId = boxscore.team_id;
        this.fgm += boxscore.fgm;
        this.fga += boxscore.fga;
        this.fg3m += boxscore.fg3m;
        this.fg3a += boxscore.fg3a;
        this.ftm += boxscore.ftm;
        this.fta += boxscore.fta;
        this.oreb += boxscore.oreb;
        this.dreb += boxscore.dreb;
        this.reb += boxscore.oreb + boxscore.dreb;
        this.ast += boxscore.ast;
        this.blk += boxscore.blk;
        this.stl += boxscore.stl;
        this.to += boxscore.to;
        this.pf += boxscore.pf;
        this.pts += boxscore.pts;
        this.plusMinus += boxscore.plus_minus;
        this.games++;

        this.calcAggregates();
    }

    private calcAggregates(): void {
        //this.mpg = this.min / this.games;
        this.ppg = this.pts / this.games;
        this.apg = this.ast / this.games;
        this.rpg = this.reb / this.games;
        this.bpg = this.blk / this.games;
        this.spg = this.stl / this.games;
        this.fgPercent = this.fgm / this.fga;
        this.tpPercent = this.fg3m / this.fg3a;
    }
}
