import { useState, useEffect, useCallback, createContext } from 'react';
import './player.scss';
import { BasicInfo, Positions, Chart, SimilarPlayers, Skills } from './goalkeeper_components';
import HTMLHelpers from '../../helpers/HTMLHelpers';
import { PlayerInterface } from '../../interfaces';

const PlayerContext = createContext<PlayerInterface | null>(null);

const GoalkeeperPage = ({player}: { player: PlayerInterface }) => {

  const [values, setValues] = useState<HTMLElement[]>([]);
  const divElement = useCallback((node: HTMLElement|null) => {
    if (node !== null) {
      const arr = HTMLHelpers.concatCollections(['skill__stats', 'position__value', 'additional-item__stats']);
      setValues(arr);
    }
  }, [])

  const getAllValues = () => {
    if (values.length > 0) {
      for (var value of Array.from(values as HTMLElement[])) {
        const v = parseInt(value.innerText, 10);
        if (value instanceof HTMLElement && value.className === 'position__value') {
          value = value.parentNode as HTMLElement;
        }
        switch (true) {
          case v < 60:
            value.style.backgroundColor = 'red';
            break;
          case v < 70:
            value.style.backgroundColor = 'rgb(230, 182, 0)';
            break;
          case v < 80:
            value.style.backgroundColor = 'rgb(102, 168, 15)';
            break;
          default:
            value.style.backgroundColor = 'rgb(12, 133, 57)';
        }
      }
    }
    Array.from(document.getElementsByClassName('positions')).forEach((position: Element, index: number, array: Element[]) => {
      const element = position as HTMLElement;
      element.style.backgroundColor = 'yellow';
    });
    
  }

  useEffect(() => {
    getAllValues();
  })

  return (
    <div id='player' ref={divElement} >
      <PlayerContext.Provider value={player} >
        <div className='player__row player__diagram'>
          <Positions />
          <Chart />
          <SimilarPlayers />
        </div>
        <div className='player__row player__info'>
          <BasicInfo />
          <Skills />
        </div>
        <div className='player__row latest__news'>
          <div className='subtitle wrapper'>
            LATEST NEWS
          </div>
          <div>
            <img className='latest__news__img' src={require('../../assets/images/news/Ben_Yedder.jpg')} />
            <div className='news-title'>Ben Yedder</div>
          </div>
          <div>
            <img className='latest__news__img' src='https://www.getfootballnewsfrance.com/assets/fbl-fra-ligue1-reims-metz-806x537.jpg' />
            <div className='news-title'>David Guion</div>
          </div>
          <div>
            <img className='latest__news__img' src={require('../../assets/images/news/Contract_Extensions.jpg')} />
            <div className='news-title'>Contract Extensions</div>
          </div>
          <div>
            <img className='latest__news__img' src={require('../../assets/images/news/podcast_logo.png')} />
            <div className='news-title'>Official Podcast</div>
          </div>
        </div>
      </PlayerContext.Provider>
    </div>
  )
}

export { PlayerContext }

export default GoalkeeperPage