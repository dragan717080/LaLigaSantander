import { useState, useEffect } from 'react';
import './top_scorers.scss';
import AxiosService from '../../services/AxiosService';
import { AdditionalStatsResponseInterface } from '../../interfaces';

const AdditionalStats = () => {

  const [additionalStats, setAdditionalStats] = 
    useState<AdditionalStatsResponseInterface>({} as AdditionalStatsResponseInterface);

  const getData = () => {
    AxiosService.get('stats/additional')
    .then((result) => setAdditionalStats(result as AdditionalStatsResponseInterface))
    .catch((error) => console.error('Api fetching failed!'));
  }

  useEffect(() => {
    getData();
  }, []);

  return (Object.keys(additionalStats).length > 0) ? (
    <div id='additional__stats'>
        <div className='additional__stats__item'>
          <div className='subtitle'>Match with most goals</div>
          <div className='additional__stats__item__row'>
            <div className='additional__stats__home-team__crest'>
              <img className='additional__stats__img' src = { additionalStats.most_goals.home_team_crest } />
            </div>
            <div className='additional__stats__home-team__name additional__stats__item'>
              { additionalStats.most_goals.home_team }
            </div>
            <div className='additional__stats__home-team__goals'>
              { additionalStats.most_goals.home_team_goals }
            </div>
          </div>
          <div className='additional__stats__item__row'>
            <div className='additional__stats__away-team__crest'>
              <img className='additional__stats__img' src = { additionalStats.most_goals.away_team_crest } />
            </div>
            <div className='additional__stats__home-team__name'>
              { additionalStats.most_goals.away_team }
            </div>
            <div className='additional__stats__home-team__goals'>
              { additionalStats.most_goals.away_team_goals }
            </div>
          </div>
        </div>
        <div className='additional__stats__item'>
        <div className='subtitle'>Match with least goals</div>
          <div className='additional__stats__item__row'>
            <div className='additional__stats__home-team__crest'>
              <img className='additional__stats__img' src = { additionalStats.least_goals.home_team_crest } />
            </div>
            <div className='additional__stats__home-team__name'>
              { additionalStats.least_goals.home_team }
            </div>
            <div className='additional__stats__home-team__goals'>
              { additionalStats.least_goals.home_team_goals }
            </div>
          </div>
          <div className='additional__stats__item__row'>
            <div className='additional__stats__away-team__crest'>
              <img className='additional__stats__img' src = { additionalStats.least_goals.away_team_crest } />
            </div>
            <div className='additional__stats__home-team__name'>
              { additionalStats.least_goals.away_team }
            </div>
            <div className='additional__stats__home-team__goals'>
              { additionalStats.least_goals.away_team_goals }
            </div>
          </div>
        </div>
        <div className='additional__stats__item'>
          <div className='subtitle'>Biggest upset</div>
          <div className='additional__stats__item__row'>
            <div className='additional__stats__home-team__crest'>
              <img className='additional__stats__img' src = { additionalStats.biggest_surprise.home_team_crest } />
            </div>
            <div className='additional__stats__home-team__name'>
              { additionalStats.biggest_surprise.home_team }
            </div>
            <div className='additional__stats__home-team__goals'>
              { additionalStats.biggest_surprise.home_team_goals }
            </div>
          </div>
          <div className='additional__stats__item__row'>
            <div className='additional__stats__away-team__crest'>
              <img className='additional__stats__img' src = { additionalStats.biggest_surprise.away_team_crest } />
            </div>
            <div className='additional__stats__home-team__name'>
              { additionalStats.biggest_surprise.away_team }
            </div>
            <div className='additional__stats__home-team__goals'>
              { additionalStats.biggest_surprise.away_team_goals }
            </div>
          </div>
        </div>
        <div className='additional__stats__item'>
          <div className='subtitle'>Highest attendance</div>
          <div className='additional__stats__item__row'>
            <div className='additional__stats__home-team__crest'>
              <img className='additional__stats__img' src = { additionalStats.highest_attendance.home_team_crest } />
            </div>
            <div className='additional__stats__home-team__name'>
              { additionalStats.highest_attendance.home_team }
            </div>
            <div className='additional__stats__home-team__goals'>
              { additionalStats.highest_attendance.home_team_goals }
            </div>
          </div>
          <div className='additional__stats__item__row'>
            <div className='additional__stats__away-team__crest'>
              <img className='additional__stats__img' src = { additionalStats.highest_attendance.away_team_crest } />
            </div>
            <div className='additional__stats__home-team__name'>
              { additionalStats.highest_attendance.away_team }
            </div>
            <div className='additional__stats__home-team__goals'>
              { additionalStats.highest_attendance.away_team_goals }
            </div>
          </div>
        </div>
    </div>
  ) : <></>
}

export default AdditionalStats;
