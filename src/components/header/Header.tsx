import React, { useState, useEffect } from 'react';
import './header.scss';
import logo from '../../assets/images/logo.jpg';
import Navbar from './Navbar';
import AxiosService from '../../services/AxiosService';
import { MatchInterface } from '../../interfaces';

const Header = () => {

  const [latestMatches, setLatestMatches] = useState<MatchInterface[]>([]);

  const getData = () => {
    AxiosService.get<MatchInterface[]>('matches')
      .then((result) => setLatestMatches(result.slice(0, 5)))
      .catch((error) => console.error('API fetching failed!', error));
  }

  const getLatestMatches = () => {
    return (latestMatches.length > 0)
     ? latestMatches.map((item) => {
      return <div className='latest-match'>
        <div className='latest-match__home-team'>
        <div className='latest-match__home-team__crest'>
          <img src = { item.home_team_crest } />
        </div>
          <div className='latest-match__home-team__name'>
            { item.home_team }
          </div>
          <div className='latest-match__home-team__score'>
            { item.home_team_goals }
          </div>
        </div>
        <div className='latest-match__away-team'>
          <div className='latest-match__away-team__crest'>
            <img src = { item.away_team_crest } />
          </div>
          <div className='latest-match__away-team__name'>
            { item.away_team }
          </div>
          <div className='latest-match__away-team__score'>
            { item.away_team_goals }
          </div>
        </div>
      </div>
     })
     : null;
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div id = 'header'>
      <div id = 'logo'>
        <img src = { logo } />
      </div>
      <div id = 'header__menu'>
        <div id = 'latest-matches'>
          <div className='latest-match latest-match__title'>
            LATEST MATCHES
          </div>
          { getLatestMatches() }
        </div>
        <Navbar />
      </div>
    </div>
  )
}

export default Header;
