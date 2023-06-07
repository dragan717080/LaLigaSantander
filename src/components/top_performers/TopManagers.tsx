import React, { useState, useEffect, MouseEvent } from 'react';
import HTMLHelpers from '../../helpers/HTMLHelpers';
import './top_scorers.scss';
import AxiosService from '../../services/AxiosService';
import { TeamInterface } from '../../interfaces';

const TopManagers = () => {

  const [managers, setManagers] = useState<TeamInterface[]>([]);

  const getData = () => {
    AxiosService.get('teams')
    .then((result) => setManagers(topManagers((result as TeamInterface[]).sort((a, b) => b.staff_impact - a.staff_impact).slice(0, 10))))
    .catch((error) => console.error('Api fetching failed!'));
  }

  const getScorer = (e: MouseEvent<HTMLElement>) => HTMLHelpers.getActiveScorer(e, managers, true);

  const topManagers = (arr: TeamInterface[]): TeamInterface[] =>
    arr.map((item) => {
      if (item.staff.split(' ').length > 1) {
        item.staff = item.staff.split(' ')[0][0] + '. ' + item.staff.split(' ')[1];
      }
      return item;
    });

  const getManagers = () => {
    return (managers.length > 0) 
    ? <> 
    <div id = 'top_scorer'><img id='top-manager' src = { managers[0]['staff_img'] } /></div>
    { managers.map((item, index) => {
      const isActive = (index === 0) ? 'scorer active-scorer' : 'scorer';
      return <div className = { isActive } onClick = { (e) => getScorer(e) } >
        <div className='scorer__name'>{ item['staff'] }</div>
        <div className='scorer__goals'>{ item['staff_impact'] }</div>
        </div>
    }) }
    </>
    : null;
  }

  useEffect(() => {
    getData();
  }, [])
 
  return (
    <div id = 'top__managers'>
        <div className='subtitle'>
            Top Managers
        </div>
        { getManagers() }
    </div>
  )
}

export default TopManagers;
