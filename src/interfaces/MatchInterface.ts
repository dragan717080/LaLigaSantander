export default interface MatchInterface {
    id: number;
    match_id: number;
    matchday: number;
    home_team: string;
    home_team_crest: string;
    home_team_ranking: number;
    away_team: string;
    away_team_crest: string;
    away_team_ranking: number;
    home_team_goals: number;
    away_team_goals: number;
    venue_capacity?: number;
    rank_difference?: number;
}
