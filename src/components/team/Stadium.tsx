import React from 'react'
import './team.scss';
import { TeamInterface } from '../../interfaces';

const Stadium = ({team}: { team: TeamInterface }) => {

  return (Object.keys(team).length > 0) ? (
    <div id = 'stadium'>
      <div className='title'>{ team.venue }</div>
      <div className='wrapper'>
        <div id='stadium__info'>
          <div id='stadium__info__item'>Capacity: { team.venue_capacity }</div>
          <div id='stadium__info__item'>Address: { team.address }</div>
          <div id='stadium__info__item'>Phone: </div>
          <div id='stadium__info__item'>Website: <a href = { team.website } >{ team.website }</a></div>
        </div>
      </div>
    </div>
  ) : <></>
}

export default Stadium;
