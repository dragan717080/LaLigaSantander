import express, { Request, Response, Router } from 'express';
import query from '../config/SQLConnection';
import { sendJsonResponse, errorHandler } from '../responseUtils';
import { PlayerInterface } from '../../src/interfaces';
import FootballAPIHelpers from '../../src/helpers/FootballAPIHelpers';
import PlayersService from '../services/players.service';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    try {
      const players = await PlayersService.getAll();
      sendJsonResponse(res, players);
    } catch (error) {
      errorHandler(error, req, res);
    }
});

router.get('/:id', async (req: Request, res: Response) => {
    try {
      const playerId = req.params.id;
      const player = await PlayersService.getById(playerId);
  
      if (player !== null) {
        sendJsonResponse(res, player);
      } else {
        res.status(404).json({ error: 'Player not found' });
      }
    } catch (error) {
      errorHandler(error, req, res);
    }
});

export default router;
