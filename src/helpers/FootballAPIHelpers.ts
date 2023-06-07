import { TeamInterface, MatchInterface, PlayerInterface, TrophyInterface } from '../interfaces';
import StringHelpers from './StringHelpers';
import TrophiesInterface, { TrophyResponseInterface } from '../interfaces/TrophiesInterface';

abstract class FootballAPIHelpers {
    static findHighestAttendance(matches: MatchInterface[]) {
        return matches.sort((a, b) => a.away_team_ranking - b.away_team_ranking)[0]
    }
    static findBiggestSurprise(matches: MatchInterface[]): MatchInterface {
        const arr: any[] = [];
        for (const result of matches) {
            if (result.home_team_goals > result.away_team_goals && result.home_team_ranking > result.away_team_ranking) {
                result.rank_difference = result.home_team_ranking - result.away_team_ranking;
                arr.push(result);
            }
            if (result.home_team_goals < result.away_team_goals && result.home_team_ranking < result.away_team_ranking) {
                result.rank_difference = result.away_team_ranking - result.home_team_ranking;
                arr.push(result);
            }
        }
        arr.sort((a, b) => b.rank_difference - a.rank_difference);
        return arr[0];
    }

    static findSimilarPlayers(searchedPlayer: PlayerInterface, players: PlayerInterface[], playerPositions: string[]) {
        const similarPlayers = players
            .map((player: PlayerInterface) => ({
                ...player,
                player_positions: player.player_positions!.split(', ')
            }))
            .filter((player: any) =>
                player.player_positions.some((position: string) => playerPositions.includes(position))
            )
            .sort(
                (a: any, b: any) => Math.abs(a.overall! - searchedPlayer.overall!) - Math.abs(b.overall! - searchedPlayer.overall!)
            )
            .slice(0, 10);

        return similarPlayers;
    }

    static findSimilarGoalkeepers(goalkeeper: PlayerInterface, goalkeepers: PlayerInterface[]) {
        return goalkeepers
            .sort((a: PlayerInterface, b: PlayerInterface) =>
                Math.abs(a.overall! - goalkeeper.overall!) - Math.abs(b.overall! - goalkeeper.overall!)
            )
            .slice(0, 10);
    }

    static formatTeamTrophies(trophies: TrophyResponseInterface[]): TrophyInterface {
        return trophies.reduce((result: TrophyInterface, trophy: TrophyResponseInterface) => {
            result[trophy.trophy_name as keyof TrophyInterface] = trophy.trophy_count as any;
            return result;
        }, {} as TrophyInterface);
    }
}

export default FootballAPIHelpers;
