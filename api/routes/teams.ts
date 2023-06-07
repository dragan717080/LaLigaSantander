import express, { Request, Response, Router } from 'express';
import query from '../config/SQLConnection';
import { sendJsonResponse, errorHandler } from '../responseUtils';
import { TeamsService } from '../services';
import TrophyInterface, { TrophyResponseInterface }
  from '../../src/interfaces/TrophiesInterface';
import FootballAPIHelpers from '../../src/helpers/FootballAPIHelpers';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const teams = await TeamsService.getAll();
    sendJsonResponse(res, teams);
  } catch (error) {
    errorHandler(error, req, res);
  }
});

router.get('/d', async (req: Request, res: Response) => {
  const teamsQuery = `SHOW COLUMNS FROM teams`;
  const teamResults = await query(teamsQuery);
  res.send(teamResults.map((teamResult: any) => teamResult.Field));
})

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const teamId = req.params.id;
    const team = await TeamsService.getById(teamId);
    sendJsonResponse(res, team);
  } catch (error) {
    errorHandler(error, req, res);
  }
});

router.get('/:id/matches', async (req: Request, res: Response) => {
  try {
    const teamId = req.params.id;
    const matches = await TeamsService.getMatchesById(teamId);
    sendJsonResponse(res, matches);
  } catch (error) {
    errorHandler(error, req, res);
  }
});

router.get('/:id/stats', async (req: Request, res: Response) => {
  try {
    const teamId = req.params.id;
    const statistics = await TeamsService.getStatsById(teamId);
    sendJsonResponse(res, statistics);
  } catch (error) {
    errorHandler(error, req, res);
  }
});

export default router;
