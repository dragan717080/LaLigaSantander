import { useContext } from 'react';
import { PlayerContext } from '../GoalkeeperPage';

const PlayerSkills = () => {

  const player = useContext(PlayerContext);

  return (player !== null) ? (
        <div className='player__skills'>
          <div className='subtitle wrapper'>SKILLS</div>
          <div className='skills wrapper'>
          <div className='skills__row'>
              <div className='skills__row__item'>
                <div className='skill__title'>Diving</div>
                <div className='skill__stats'>{ player.goalkeeping_diving }</div>
              </div>
              <div className='skills__row__item'>
                <div className='skill__title'>Handling</div>
                <div className='skill__stats'>{ player.goalkeeping_handling }</div>
              </div>
              <div className='skills__row__item'>
                <div className='skill__title'>Kicking</div>
                <div className='skill__stats'>{ player.goalkeeping_kicking }</div>
              </div>
              <div className='skills__row__item'>
                <div className='skill__title'>Positioning</div>
                <div className='skill__stats'>{ player.goalkeeping_positioning }</div>
              </div>
              <div className='skills__row__item'>
                <div className='skill__title'>Reflexes</div>
                <div className='skill__stats'>{ player.goalkeeping_reflexes }</div>
              </div>
            </div>
          </div>
        </div>
  ) : <></>
}

export default PlayerSkills