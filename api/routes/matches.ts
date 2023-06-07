import express, { Request, Response, Router } from 'express';
import query from '../config/SQLConnection';
import { sendJsonResponse, errorHandler } from '../responseUtils';
import StringHelpers from '../../src/helpers/StringHelpers';
import { MatchInterface } from '../../src/interfaces';
import { MatchesService } from '../services';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const matches = await MatchesService.getAll();
    sendJsonResponse(res, matches);
  } catch (error) {
    errorHandler(error, req, res);
  }
});

export default router;
