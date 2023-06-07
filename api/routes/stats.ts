import express, { Request, Response, Router } from 'express';
import query from '../config/SQLConnection';
import { sendJsonResponse, errorHandler } from '../responseUtils';
import {
    MatchInterface, PlayerInterface,
    AdditionalStatsResponseInterface
} from '../../src/interfaces';
import FootballAPIHelpers from '../../src/helpers/FootballAPIHelpers';
import { StatsService } from '../services';

const router = express.Router();

router.get('/top_scorers', async (req: Request, res: Response) => {
    try {
        const topScorers: PlayerInterface[] = await StatsService.getTopScorers();
        sendJsonResponse(res, topScorers);
    } catch (error) {
        errorHandler(error, req, res);
    }
});

router.get('/top_assists', async (req: Request, res: Response) => {
    try {
        const topAssists: PlayerInterface[] = await StatsService.getTopAssists();
        sendJsonResponse(res, topAssists);
    } catch (error) {
        errorHandler(error, req, res);
    }
});

router.get('/additional', async (req: Request, res: Response) => {
    try {
        const additionalStats = await StatsService.getAdditionalStats();
        sendJsonResponse(res, additionalStats);
    } catch (error) {
        errorHandler(error, req, res);
    }
});

export default router;

