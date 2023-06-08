import { useContext } from 'react';
import '../player.scss';
import { PlayerContext } from '../PlayerPage';
import { PlayerInterface } from '../../../interfaces';

const PlayerPositions = () => {

  const player = useContext(PlayerContext);

  return (player !== null) ? (
    <>
      <div className='subtitle wrapper'>RATING</div>
      <img src={require('../../../assets/images/trophies/field.png')} alt=''/>
      <div className='forward-positions-1 a'>
        <div className='player__position__1'>
          <div className='position__header'>LS</div>
          <div className='position__value'>{player.ls}</div>
        </div>
        <div className='player__position__1'>
          <div className='position__header'>ST</div>
          <div className='position__value'>{player.st}</div>
        </div>
        <div className='player__position__1'>
          <div className='position__header'>RS</div>
          <div className='position__value'>{player.rs}</div>
        </div>
      </div>
      <div className='forward-positions-2 a'>
        <div className='player__position__1'>
          <div className='position__header'>LW</div>
          <div className='position__value'>{player.lw}</div>
        </div>
        <div className='player__position__1'>
          <div className='position__header'>LF</div>
          <div className='position__value'>{player.lf}</div>
        </div>
        <div className='player__position__1'>
          <div className='position__header'>CF</div>
          <div className='position__value'>{player.cf}</div>
        </div>
        <div className='player__position__1'>
          <div className='position__header'>RF</div>
          <div className='position__value'>{player.rf}</div>
        </div>
        <div className='player__position__1'>
          <div className='position__header'>RW</div>
          <div className='position__value'>{player.rw}</div>
        </div>
      </div>
      <div className='midfield-positions-1 a'>
        <div className='player__position__1'>
          <div className='position__header'>LAM</div>
          <div className='position__value'>{player.lam}</div>
        </div>
        <div className='player__position__1'>
          <div className='position__header'>CAM</div>
          <div className='position__value'>{player.cam}</div>
        </div>
        <div className='player__position__1'>
          <div className='position__header'>RAM</div>
          <div className='position__value'>{player.ram}</div>
        </div>
      </div>
      <div className='midfield-positions-2 a'>
        <div className='player__position__1'>
          <div className='position__header'>LM</div>
          <div className='position__value'>{player.lm}</div>
        </div>
        <div className='player__position__1'>
          <div className='position__header'>LCM</div>
          <div className='position__value'>{player.lcm}</div>
        </div>
        <div className='player__position__1'>
          <div className='position__header'>CM</div>
          <div className='position__value'>{player.cm}</div>
        </div>
        <div className='player__position__1'>
          <div className='position__header'>RCM</div>
          <div className='position__value'>{player.rcm}</div>
        </div>
        <div className='player__position__1'>
          <div className='position__header'>RM</div>
          <div className='position__value'>{player.rm}</div>
        </div>
      </div>
      <div className='defense-positions-1 a'>
        <div className='player__position__1'>
          <div className='position__header'>LWB</div>
          <div className='position__value'>{player.lwb}</div>
        </div>
        <div className='player__position__1'>
          <div className='position__header'>LDM</div>
          <div className='position__value'>{player.ldm}</div>
        </div>
        <div className='player__position__1'>
          <div className='position__header'>CDM</div>
          <div className='position__value'>{player.rdm}</div>
        </div>
        <div className='player__position__1'>
          <div className='position__header'>RDM</div>
          <div className='position__value'>{player.rdm}</div>
        </div>
        <div className='player__position__1'>
          <div className='position__header'>RWB</div>
          <div className='position__value'>{player.rwb}</div>
        </div>
      </div>
      <div className='defense-positions-2 a'>
        <div className='player__position__1'>
          <div className='position__header'>LB</div>
          <div className='position__value'>{player.lb}</div>
        </div>
        <div className='player__position__1'>
          <div className='position__header'>LCB</div>
          <div className='position__value'>{player.lcb}</div>
        </div>
        <div className='player__position__1'>
          <div className='position__header'>CB</div>
          <div className='position__value'>{player.cb}</div>
        </div>
        <div className='player__position__1'>
          <div className='position__header'>RCB</div>
          <div className='position__value'>{player.rcb}</div>
        </div>
        <div className='player__position__1'>
          <div className='position__header'>RB</div>
          <div className='position__value'>{player.rb}</div>
        </div>
      </div>
      <div className='gk-position a'>
        <div className='player__position__1'>
          <div className='position__header'>GK</div>
          <div className='position__value'>{player.gk}</div>
        </div>
      </div>
    </>
  ) : <></>
}

export default PlayerPositions;
