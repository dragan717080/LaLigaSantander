import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './team.scss';
import AxiosService from '../../services/AxiosService';
import { TeamInterface } from '../../interfaces';

const TeamVenue = () => {

    const params = useParams();
  
    const [team, setTeam] = useState<TeamInterface>({} as TeamInterface);
  
    const getTeam = () => {
      AxiosService.get(`teams/${params.id}`)
      .then((result) => setTeam(result as TeamInterface))
      .catch((error) => console.error('Api fetching failed!'));
    }
  
    useEffect(() => {
      getTeam();
    }, [])
  
    return (Object.keys(team).length !== 0) ? (
      <>
        <img id = 'team__venue' src = { team.venue_img } />
        <div className='team__name'>
            { team['name'] }
        </div>
      </>
    ) : <></>
  }

export default TeamVenue