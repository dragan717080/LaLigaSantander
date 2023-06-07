import { TrophyInterface } from "./TrophiesInterface";
import PlayerInterface from "./PlayerInterface";

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

export default interface TeamInterface extends BaseTeamInterface {
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
}
