import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, useParams } from 'react-router-dom';
import './team.scss';
import AxiosService from '../../services/AxiosService';
import Navbar from './navbar/Navbar';
import General from './General';
import Calendar from './Calendar';
import Stadium from './Stadium';
import Squad from './Squad';
import Stats from './Stats';
import Staff from './Staff';
import Honours from './Honours';
import { TeamInterface } from '../../interfaces';

const Team = () => {

  const params = useParams();

  const [team, setTeam] = useState<TeamInterface>({} as TeamInterface);

  const getParam = () => {
    AxiosService.get(`teams/${params.id}`)
    .then((result) => setTeam(result as TeamInterface))
    .catch((error) => console.error('Api fetching failed!'));
  }

  useEffect(() => {
    getParam();
    const currentLink = (window.location.pathname.split('/')[3]);
    const navbarItem = (currentLink === undefined) ? 'general' : (currentLink === 'calendar') ? 'calendar' : (currentLink === 'stadium') ? 'stadium' : (currentLink === 'squad') ? 'squad' : (currentLink === 'staff') ? 'staff' : (currentLink === 'stats') ? 'stats' : 'honours';
    for (const item of document.getElementsByClassName('team__navbar__menu-item') as HTMLCollectionOf<HTMLElement>) {
      item.classList.remove('active-navbar');
      if (item.innerText === navbarItem.toUpperCase()) {
        item.classList.add('active-navbar');
      }
    }
  }, [window.location.pathname])

  return (Object.keys(team).length !== 0) ? (
    <>
      <img id = 'team__venue' src = { team.venue_img } />
      <div className='team__name'>
        { team['name'] }
      </div>
      <Navbar />
      <Routes>
        <Route path = '/' element = {<General team = { team } />} />
        <Route path = '/calendar' element = {<Calendar />} />
        <Route path = '/stadium' element = {<Stadium team = { team } />} />
        <Route path = '/staff' element = {<Staff team = { team } />} />
        <Route path = '/squad' element = {<Squad team = { team } />} />
        <Route path = '/stats' element = {<Stats team = { team } />} />
        <Route path = '/honours' element = {<Honours team = { team } />} />
      </Routes>
    </>
  ) : <></>
}

export default Team