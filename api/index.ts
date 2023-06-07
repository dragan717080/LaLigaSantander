import express from 'express';
import { matchesRouter, playersRouter, rankingsRouter, statsRouter, teamsRouter } from './routes';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();

app.use(cors());

app.use('/', rankingsRouter);
app.use('/matches', matchesRouter);
app.use('/players', playersRouter);
app.use('/stats', statsRouter);
app.use('/teams', teamsRouter);

const port = process.env.PORT;

app.listen(port, () => console.log(`App listening on PORT ${port}`));
