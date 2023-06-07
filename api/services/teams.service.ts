import { TeamInterface, TeamStatsInterface, MatchInterface } from '../../src/interfaces';
import query from '../config/SQLConnection';
import FootballAPIHelpers from '../../src/helpers/FootballAPIHelpers';

abstract class TeamsService {
    static async getAll(): Promise<TeamInterface[]> {
        try {
            const teamsQuery = 'SELECT * FROM teams';
            const teams = await query(teamsQuery);
            return teams;
        } catch (error) {
            throw error;
        }
    }

    static async getById(id: string): Promise<TeamInterface> {
        const teamQuery = `SELECT a.*, b.* FROM teams AS a LEFT JOIN rankings as b ON a.name = b.team_name WHERE id = ${id}`;
        const teamResults = await query(teamQuery);
        const team = teamResults[0];

        const goalkeepersQuery = `SELECT * FROM goalkeepers WHERE club_name = '${team.name}'`;
        const goalkeepers = await query(goalkeepersQuery);
        team.players = goalkeepers;

        const playersQuery = `SELECT * FROM players WHERE club_name = '${team.name}'`;
        const players = await query(playersQuery);
        team.players = team.players.concat(players);

        const trophiesQuery = `SELECT trophy_name, trophy_count FROM trophies where team_id = '${id}'`;
        const trophies = await query(trophiesQuery);
        team.trophies = FootballAPIHelpers.formatTeamTrophies(trophies);

        const topScorersQuery = `SELECT * FROM top_scorers WHERE club_name = '${team.name}'`;
        const topScorers = await query(topScorersQuery);
        team.top_scorers = topScorers;

        const matchesQuery = `SELECT * FROM matches WHERE home_team = '${team.name}' OR away_team = '${team.name}'`;
        const matches = await query(matchesQuery);
        team.matches = matches;

        return team;
    }

    static async getMatchesById(id: string): Promise<MatchInterface[]> {
        const teamNameQuery = `SELECT name FROM teams WHERE id = ${id}`;
        const teamNameResults = await query(teamNameQuery);
        const name = teamNameResults[0].name;
      
        const matchesQuery = `SELECT * FROM matches WHERE home_team = '${name}' OR away_team = '${name}'`;
        const matchesResults = await query(matchesQuery);
      
        return matchesResults;
    }

    static async getStatsById(id: string): Promise<TeamStatsInterface> {
      const teamNameQuery = `SELECT name FROM teams WHERE id = ${id}`;
      const teamNameResults = await query(teamNameQuery);
      const name = teamNameResults[0].name;
    
      const topScorersQuery = `SELECT * FROM top_scorers WHERE club_name = '${name}'`;
      const topScorersResults = await query(topScorersQuery);
    
      const statistics: TeamStatsInterface = {
        name,
        top_scorers: topScorersResults,
      };
    
      return statistics;
    }
    
}

export default TeamsService;
