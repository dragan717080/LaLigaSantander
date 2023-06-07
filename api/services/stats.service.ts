import query from '../config/SQLConnection';
import { PlayerInterface, AdditionalStatsResponseInterface } from '../../src/interfaces';
import FootballAPIHelpers from '../../src/helpers/FootballAPIHelpers';

abstract class StatsService {
    static async getTopScorers(): Promise<PlayerInterface[]> {
        const topScorersQuery = 'SELECT * FROM top_scorers';
        const topScorers: PlayerInterface[] = await query(topScorersQuery);
        return topScorers;
    }

    static async getTopAssists(): Promise<PlayerInterface[]> {
        const topAssistsQuery = 'SELECT * FROM top_assists';
        const topAssists: PlayerInterface[] = await query(topAssistsQuery);
        return topAssists;
    }

    static async getAdditionalStats(): Promise<AdditionalStatsResponseInterface> {
        const d: AdditionalStatsResponseInterface = {} as AdditionalStatsResponseInterface;

        const query1 =
            'SELECT a.*, b.venue_capacity FROM matches AS a LEFT JOIN teams AS b ON a.home_team = b.name ORDER BY b.venue_capacity DESC LIMIT 19';
        const results1 = await query(query1);
        d.highest_attendance = FootballAPIHelpers.findHighestAttendance(results1);

        const query2 = 'SELECT * FROM matches ORDER BY (home_team_goals + away_team_goals) DESC';
        const results2 = await query(query2);
        d.most_goals = results2[0];
        d.least_goals = results2[results2.length - 1];

        d.biggest_surprise = FootballAPIHelpers.findBiggestSurprise(results2);

        return d;
    }
}

export default StatsService;
