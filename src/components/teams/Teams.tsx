import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './teams.scss';
import axios from 'axios';
import AxiosService from '../../services/AxiosService';
import { TeamInterface } from '../../interfaces';

const Teams = () => {

  const [teams, setTeams] = useState<TeamInterface[]>([]);

  const getData = () => {
    AxiosService.get('teams')
    .then((result) => setTeams(result as TeamInterface[]))
    .catch((error) => console.error('Api fetching failed!'));
  }

  const getTeams = () => {
    return (teams.length > 0)
      ? <>{teams.map((team: TeamInterface) => {
        return <div className='team'>
          <Link to={`/teams/${team.id}`} >
            <img className='teams__img' src={team['venue_img']} />
            <div className='team__name'>
              {team['name']}
            </div>
          </Link>
        </div>
      })} </>
      : null;
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div id='teams'>
      <div className='title'>
        La Liga Santander Teams
      </div>
      { getTeams() }
    </div>
  )
}

export default Teams;
