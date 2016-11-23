"use strict";
class Player {
    constructor(playerDetail, boxscore, boxscores) {
        this.min = 0;
        this.fgm = 0;
        this.fga = 0;
        this.fg3m = 0;
        this.fg3a = 0;
        this.ftm = 0;
        this.fta = 0;
        this.oreb = 0;
        this.dreb = 0;
        this.reb = 0;
        this.ast = 0;
        this.blk = 0;
        this.stl = 0;
        this.to = 0;
        this.pf = 0;
        this.pts = 0;
        this.plusMinus = 0;
        this.mpg = 0;
        this.ppg = 0;
        this.apg = 0;
        this.rpg = 0;
        this.bpg = 0;
        this.spg = 0;
        this.fgPercent = 0;
        this.tpPercent = 0;
        this.games = 0;
        if (playerDetail) {
            this.setPlayerDetails(playerDetail);
        }
        if (boxscore) {
            this.addBoxScore(boxscore);
        }
        if (boxscores) {
            for (let boxscore of boxscores) {
                this.addBoxScore(boxscore);
            }
        }
    }
    setPlayerDetails(playerDetail) {
        this.id = playerDetail.id;
        this.teamId = playerDetail.team_id;
        this.playerName = playerDetail.player_name;
        this.firstName = playerDetail.first_name;
        this.lastName = playerDetail.last_name;
        this.birthDate = playerDetail.birth_date;
        this.position = playerDetail.position;
        this.dkPosition = playerDetail.dk_position;
        this.dkId = playerDetail.dk_id;
        this.playerImage = 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/' + this.id + '.png';
    }
    addBoxScore(boxscore) {
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
        this.stl += Number(boxscore.stl);
        this.to += boxscore.to;
        this.pf += boxscore.pf;
        this.pts += boxscore.pts;
        this.plusMinus += boxscore.plus_minus;
        this.games++;
        this.calcAggregates();
    }
    calcAggregates() {
        //this.mpg = this.min / this.games;
        this.ppg = this.pts / this.games;
        this.apg = this.ast / this.games;
        this.rpg = this.reb / this.games;
        this.bpg = this.blk / this.games;
        this.spg = this.stl / this.games;
        this.fgPercent = (this.fgm / this.fga) * 100;
        this.tpPercent = (this.fg3m / this.fg3a) * 100;
    }
}
exports.Player = Player;
//# sourceMappingURL=player.js.map