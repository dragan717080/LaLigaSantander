import { useState, useEffect, MouseEvent } from 'react';
import HTMLHelpers from '../../helpers/HTMLHelpers';
import './top_scorers.scss'
import AxiosService from '../../services/AxiosService';
import { PlayerInterface } from '../../interfaces';

const TopAssists = () => {

  const [assists, setTopAssists] = useState<PlayerInterface[]>([]);

  const getData = () => {
    AxiosService.get('stats/top_assists')
      .then((result) => setTopAssists((result as PlayerInterface[]).slice(0, 10)))
      .catch((error) => console.error('Api fetching failed!'));
  }

  const getScorer = (e: MouseEvent<HTMLElement>) => HTMLHelpers.getActiveScorer(e, assists);

  const getManagers = () => {
    return (assists.length > 0)
      ? <>
        <div id='top_scorer'><img id='top-manager' src={assists[0]['face'] as string} /></div>
        {assists.map((item, index) => {
          const isActive = (index === 0) ? 'scorer active-scorer' : 'scorer';
          return <div className={isActive} onClick={getScorer} >
            <div className='scorer__name'>{item['name']}</div>
            <div className='scorer__goals'>{item['assists']}</div>
          </div>
        })}
      </>
      : null;
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div id='top__assists'>
      <div className='subtitle'>
        Top Assists
      </div>
      {getManagers()}
    </div>
  )
}

export default TopAssists;
