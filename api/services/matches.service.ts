import { MatchInterface } from '../../src/interfaces';
import query from '../config/SQLConnection';

abstract class MatchesService {
    static async getAll(): Promise<MatchInterface[]> {
        const matchesQuery = 'SELECT * FROM matches';
        const matches: MatchInterface[] = await query(matchesQuery);
        return matches;
    }
}

export default MatchesService;
