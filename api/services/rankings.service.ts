import query from '../config/SQLConnection';
import { sendJsonResponse, errorHandler } from '../responseUtils';
import { TeamRankingInterface } from '../../src/interfaces';

abstract class RankingsService {
    static async getAll(): Promise<TeamRankingInterface[]> {
        const rankingsQuery = 'SELECT * FROM rankings';
        const rankings: TeamRankingInterface[] = await query(rankingsQuery);
        return rankings;
    }
}

export default RankingsService;
