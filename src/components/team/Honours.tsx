import React from 'react'
import './team.scss';
import { TeamInterface, TrophyInterface } from '../../interfaces';

const Honours = ({ team }: { team: TeamInterface }) => {

  const getTrophies = (trophy: string, numbers: number) => {
    var s = '';
    for (let i = 0; i < trophy.length; i++) {
      s += (trophy[i - 1] === ' ') ? trophy[i].toUpperCase() : trophy[i];
    }
    s = s.replaceAll(' ', '') + 'Trophy';
    s = trophy.replaceAll(' ', '_').toLowerCase() + '_trophy.png';
    return [...Array(numbers)].map((item) => (
      <div className='trophies__row__trophy'><img src={require(`../../assets/images/trophies/${s}`)} alt='' /></div>
    )
    )
  }

  return (Object.keys(team).length > 0) ? (
    <div>
      <div className='title'>{team.name} trophies</div>
      <div id='trophies'>
        {Object.entries(team.trophies ?? {}).map(([k, v]) => (
          <>
            <div className='trophies__row'>
              {getTrophies(k, v)}
            </div>
            <div className='trophies__name'>{k}</div>
          </>
        ))}
      </div>
    </div>
  ) : <></>
}

export default Honours