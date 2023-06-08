import { useContext } from 'react';
import '../player.scss';
import { PlayerContext } from '../GoalkeeperPage';

const Positions = () => {

  const player = useContext(PlayerContext);

  return (
    <>
    <div className='subtitle wrapper'>RATING</div>
    <img src = { require('../../../assets/images/trophies/field.png') } alt='' />
    <div className='gk-position a'>
    <div className='player__position__1 goalkeeper'>
        <div className='position__header'>GK</div>
        <div className='position__value'>{ player!.gk }</div>
      </div>
    </div>
    </>
    )
}

export default Positions;
