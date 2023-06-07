import query from '../config/SQLConnection';
import { PlayerInterface } from '../../src/interfaces';
import FootballAPIHelpers from '../../src/helpers/FootballAPIHelpers';

abstract class PlayerService {
    static async getAll(): Promise<PlayerInterface[]> {
        try {
            const playersQuery = 'SELECT * FROM players';
            const goalkeepersQuery = 'SELECT * FROM goalkeepers';

            const players = await query(playersQuery);
            const goalkeepers = await query(goalkeepersQuery);

            const results = players.concat(goalkeepers);
            results.sort((a: PlayerInterface, b: PlayerInterface) => b.overall! - a.overall!);

            return results;
        } catch (error) {
            throw error;
        }
    }

    static async getById(playerId: string): Promise<PlayerInterface | null> {
        const playerQuery = `SELECT * FROM players WHERE player_id = ${playerId}`;
        const playerResults = await query(playerQuery);
      
        if (playerResults[0] !== undefined) {
          const playerPositions = playerResults[0].player_positions;
          const similarPlayersQuery = `SELECT id, long_name, overall, potential, player_positions, nation_flag, face FROM players WHERE dob <> '${playerResults[0].dob}'`;
          const players = await query(similarPlayersQuery);
      
          playerResults[0].similar = FootballAPIHelpers.findSimilarPlayers(playerResults[0], players, playerPositions);
          return playerResults[0];
        } else {
          const goalkeeperQuery = `SELECT * FROM goalkeepers WHERE player_id = ${playerId}`;
          const goalkeeperResults = await query(goalkeeperQuery);
      
          const similarGoalkeepersQuery = `SELECT id, long_name, overall, potential, nation_flag, face FROM goalkeepers WHERE dob <> '${goalkeeperResults[0].dob}'`;
          const goalkeepers = await query(similarGoalkeepersQuery);
      
          goalkeeperResults[0].similar = FootballAPIHelpers.findSimilarGoalkeepers(goalkeeperResults[0], goalkeepers);
          return goalkeeperResults[0];
        }
      };
      
}

export default PlayerService;
