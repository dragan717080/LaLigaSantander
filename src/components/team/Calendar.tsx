import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './team.scss';
import AxiosService from '../../services/AxiosService';
import { MatchInterface } from '../../interfaces';

const Calendar = () => {

  const [matches, setMatches] = useState<MatchInterface[]>([]);
  const params = useParams();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    AxiosService.get(`teams/${params.id}/matches`)
      .then((result) => setMatches(result as MatchInterface[]))
      .catch((error) => console.error('Api fetching failed!'));
  }

  return (matches.length > 0) ? (
    <>
      <div className='title'>MATCHES</div>
      <div id='team__matches-list'>
        {matches.map((item) => {
          return (
            <div className='matches-list__match'>
              <div className='matchday'>Matchday {item.matchday}</div>
              <div className='match__home_team_crest'><img src={item.home_team_crest} /></div>
              <div className='match__home_team_name'>{item.home_team}</div>
              <div className='match__home_team_goals'>{item.home_team_goals}</div>
              <div className='match__away_team_goals'>{item.away_team_goals}</div>
              <div className='match__away_team_crest'><img src={item.away_team_crest} /></div>
              <div className='match__away_team_name'>{item.away_team}</div>
            </div>
          )
        })}
      </div>
    </>
  ) : <></>
}

export default Calendar