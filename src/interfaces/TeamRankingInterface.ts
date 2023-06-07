import { BaseTeamInterface } from './TeamInterface';

export default interface TeamRankingInterface extends BaseTeamInterface {
    rank: number;
    team_name: string;
    tla: string;
    crest: string;
    games: number;
    wins: number;
    draws: number;
    loses: number;
    points: number;
    goals_scored: number;
    goals_conceeded: number;
    goal_difference: number;
    last_5: string;
}
