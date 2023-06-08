import { useState, useEffect } from 'react';
import './team.scss';
import { TeamInterface, TeamResultsInterface, MatchInterface, PlayerInterface } from '../../interfaces';
import FootballAPIHelpers from '../../helpers/FootballAPIHelpers';

const General = ({ team }: { team: TeamInterface }) => {

  const [results, setResults] = useState<TeamResultsInterface>({} as TeamResultsInterface);

  const getResults = (): void =>
    setResults(FootballAPIHelpers.getResultsForTeam(team.name!, team.matches!));

  useEffect(() => {
    Object.keys(team).length > 0 && getResults();
  }, [Object.keys(team).length, team.matches]);

  if (Object.keys(team).length > 0 && Object.keys(results).length > 0) {
    return (
      <div id='general'>
        <div className='title'>{team.name}</div>
        <div id='team__general-stats'>
          <div className='team__general-stats__item'>
            <div className='subtitle text__center subtitle__m'>Top Scorers</div>
            <div id='top_scorer'><a href={'/players/' + team.top_scorers![0].id} ><img src={team.top_scorers![0]['face'] as string} /></a></div>
            {team.top_scorers!.map((item: PlayerInterface, index: number) => {
              const isActive = (index === 0) ? 'scorer active-scorer' : 'scorer';
              return <div className={isActive} >
                <div className='scorer__name'>{item['name']}</div>
                <div className='scorer__goals'>{item['goals']}</div>
              </div>
            })}
          </div>
          <div className='team__general-stats__item'>
            <div className='subtitle text__center subtitle__m'>
              General
            </div>
            <div className='general-stats'>
              <div className='general-stats__row'>
                <div className='general-stats__row__title'>Ranking</div>
                <div className='general-stats__row__stats'>{team.rank}</div>
              </div>
              <div className='general-stats__row'>
                <div className='general-stats__row__title'>Wins</div>
                <div className='general-stats__row__stats'>{team.wins}</div>
              </div>
              <div className='general-stats__row'>
                <div className='general-stats__row__title'>Draws</div>
                <div className='general-stats__row__stats'>{team.draws}</div>
              </div>
              <div className='general-stats__row'>
                <div className='general-stats__row__title'>Losses</div>
                <div className='general-stats__row__stats'>{team.loses}</div>
              </div>
              <div className='general-stats__row'>
                <div className='general-stats__row__title'>Total goals scored</div>
                <div className='general-stats__row__stats'>{team.goals_scored}</div>
              </div>
              <div className='general-stats__row'>
                <div className='general-stats__row__title'>Total goals conceeded</div>
                <div className='general-stats__row__stats'>{team.goals_conceeded}</div>
              </div>
              <div className='general-stats__row'>
                <div className='general-stats__row__title'>Clean sheets</div>
                <div className='general-stats__row__stats'>{results.clean_sheets}</div>
              </div>
            </div>
          </div>
          <div className='team__general-stats__item'>
            <div className='subtitle text__center subtitle__m'>BEST RESULT</div>
            <div className='additional__stats__item__row'>
              <div className='additional__stats__home-team__crest'>
                <img className='additional__stats__img' src={results.best!.home_team_crest} />
              </div>
              <div className='additional__stats__home-team__name additional__stats__item'>
                {results.best!.home_team}
              </div>
              <div className='additional__stats__home-team__goals'>
                {results.best!.home_team_goals}
              </div>
            </div>
            <div className='additional__stats__item__row'>
              <div className='additional__stats__away-team__crest'>
                <img className='additional__stats__img' src={results.best!.away_team_crest} />
              </div>
              <div className='additional__stats__home-team__name'>
                {results.best!.away_team}
              </div>
              <div className='additional__stats__home-team__goals'>
                {results.best!.away_team_goals}
              </div>
            </div>
            <div className='subtitle text__center subtitle__k'>WORST RESULT</div>
            <div className='additional__stats__item__row'>
              <div className='additional__stats__away-team__crest'>
                <img className='additional__stats__img' src={results.worst!.home_team_crest} />
              </div>
              <div className='additional__stats__home-team__name'>
                {results.worst!.home_team}
              </div>
              <div className='additional__stats__home-team__goals'>
                {results.worst!.home_team_goals}
              </div>
            </div>
            <div className='additional__stats__item__row'>
              <div className='additional__stats__away-team__crest'>
                <img className='additional__stats__img' src={results.worst!.away_team_crest} />
              </div>
              <div className='additional__stats__home-team__name'>
                {results.worst!.away_team}
              </div>
              <div className='additional__stats__home-team__goals'>
                {results.worst!.away_team_goals}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return <></>
  }
}

export default General