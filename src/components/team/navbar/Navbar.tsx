import React from 'react';
import './navbar.scss';
import { Link, useParams } from 'react-router-dom';

const Navbar = () => {

  const params = useParams();
  const teamId = params.id;

  return (
    <div id='team__navbar'>
      <Link to={`/teams/${teamId}`}>
        <div className='team__navbar__menu-item'>General</div>
      </Link>
      <Link to={`/teams/${teamId}/calendar`}>
        <div className='team__navbar__menu-item'>Calendar</div>
      </Link>
      <Link to={`/teams/${teamId}/stadium`}>
        <div className='team__navbar__menu-item'>Stadium</div>
      </Link>
      <Link to={`/teams/${teamId}/squad`}>
        <div className='team__navbar__menu-item'>Squad</div>
      </Link>
      <Link to={`/teams/${teamId}/staff`}>
        <div className='team__navbar__menu-item'>Staff</div>
      </Link>
      <Link to={`/teams/${teamId}/stats`}>
        <div className='team__navbar__menu-item'>Stats</div>
      </Link>
      <Link to={`/teams/${teamId}/honours`}>
        <div className='team__navbar__menu-item'>Honours</div>
      </Link>
    </div>
  );
}

export default Navbar