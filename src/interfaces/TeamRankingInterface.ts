import { BaseTeamInterface } from './TeamInterface';

export interface BaseTeamRankingInterface {
    goals_scored?: number;
    goals_conceeded?: number;
    goal_difference?: number;
}

export default interface TeamRankingInterface extends 
    BaseTeamInterface, BaseTeamRankingInterface {
    rank: number;
    team_name: string;
    tla: string;
    crest: string;
    games: number;
    wins: number;
    draws: number;
    loses: number;
    points: number;
    last_5: string;
}
