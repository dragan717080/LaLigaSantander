import { useState, useEffect } from 'react';
import './table.scss';
import WinIcon from '../../assets/images/icons/winicon.svg';
import DrawIcon from '../../assets/images/icons/drawicon.svg';
import LoseIcon from '../../assets/images/icons/loseicon.svg';
import AxiosService from '../../services/AxiosService';
import { TeamRankingInterface } from '../../interfaces';

const Table = () => {

  const [rankings, setRankings] = useState<TeamRankingInterface[]>([]);

  const getData = () => {
    AxiosService.get('')
      .then((result) => setRankings(result as TeamRankingInterface[]))
      .catch((error) => console.error('Api fetching failed!'));
  }

  const getLastFiveMatches = (lastFiveResults: string) => {
    const arr: string[] = lastFiveResults.split(',');
    return arr.map((item) => {
      const iconSource = (item === 'W') ? WinIcon : (item === 'D') ? DrawIcon : LoseIcon;
      return (
        <>
          <img src={iconSource} />
        </>
      )
    })
  }

  useEffect(() => {
    getData();
  }, []);

  const getHeader = () => {
    if (rankings.length == 0) return;
    return <>
      <th>#</th>
      <th>&nbsp;</th>
      <th id='table__header__name'>Club</th>
      <th>PM</th>
      <th>W</th>
      <th>D</th>
      <th>L</th>
      <th>Pts</th>
      <th>GS</th>
      <th>GC</th>
      <th>GD</th>
      <th>Last 5 matches</th>
    </>
  }

  const getAllFields = () => {
    if (rankings.length > 0) {
      return <>
        {rankings.map((item, index) => {
          return <>
            <tr>
              <td><div>{index + 1}</div></td>
              <td><div className='club__img'><img src={item['crest']} /></div></td>
              <td><div className='club__name'>{item['team_name']}</div></td>
              <td><div>{item['points']}</div></td>
              <td><div className='club__w'>{item['wins']}</div></td>
              <td><div className='club__d'>{item['draws']}</div></td>
              <td><div className='club__l'>{item['loses']}</div></td>
              <td><div className='club__pts'>{item['points']}</div></td>
              <td><div className='club__gs'>{item['goals_scored']}</div></td>
              <td><div className='club__gc'>{item['goals_conceeded']}</div></td>
              <td><div className='club__gd'>{item['goal_difference']}</div></td>
              <td><div className='club__last_5'>{getLastFiveMatches(item['last_5'])}</div></td>
            </tr>
          </>
        })}
      </>
    }
  }

  return (
    <div id='table-wrapper'>
      <table id='league-table'>
        <thead>
          <tr>
            {getHeader()}
          </tr>
        </thead>
        <tbody>
          {getAllFields()}
        </tbody>
      </table>
    </div>
  )
}

export default Table;
