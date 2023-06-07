import express, { Request, Response, Router } from 'express';
import query from '../config/SQLConnection';
import { sendJsonResponse, errorHandler } from '../responseUtils';
import { TeamRankingInterface } from '../../src/interfaces';
import { RankingsService } from '../services';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const rankings: TeamRankingInterface[] = await RankingsService.getAll();
    sendJsonResponse(res, rankings);
  } catch (error) {
    errorHandler(error, req, res);
  }
});

export default router;
