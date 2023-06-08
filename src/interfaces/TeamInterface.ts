import { TrophyInterface } from './TrophiesInterface';
import PlayerInterface from './PlayerInterface';
import MatchInterface from './MatchInterface';
import { BaseTeamRankingInterface } from './TeamRankingInterface';

export interface BaseTeamInterface {
    tla: string;
    crest: string;
}

export interface TeamStatsInterface {
    name: string;
    top_scorers: PlayerInterface[];
}

export type TeamMemberInterface = TeamInterface | PlayerInterface;
export type TeamMembersInterface = TeamInterface[] | PlayerInterface[];

export default interface TeamInterface extends 
    BaseTeamInterface, BaseTeamRankingInterface {
    id: number;
    name: string;
    venue: string;
    website: string;
    address: string;
    founded: number;
    colors: string;
    venue_capacity: number;
    venue_img: string;
    staff: string;
    staff_dob: string;
    staff_img: string;
    staff_impact: number;
    value: number;
    trophies?: TrophyInterface;
    players?: PlayerInterface[];
    matches?: MatchInterface[];
    top_scorers?: PlayerInterface[];
    rank?: number;
    wins?: number;
    draws?: number;
    loses?: number;
}

export interface TeamResultsInterface {
    best: MatchInterface;
    worst: MatchInterface;
    clean_sheets: number;
}
