import React, { useContext } from 'react';
import { PlayerContext } from '../PlayerPage';
import { PlayerInterface } from '../../../interfaces';

const SimilarPlayers = () => {

  const player = useContext(PlayerContext);

  return (
    <>
      <div className="subtitle text__center diagram">SIMILAR PLAYERS</div>
      <div className="similars diagram">
        {player!.similar!.map((item: PlayerInterface) => {
          return (
            <div className="similar">
              <div className="similar__face"><img src={item.face as string} alt='' /></div>
              <div className="similar__basic-info">
                <div className="similar__basic-info__name">
                  <div className="basic-info__flag">
                    <img src={item.nation_flag} alt='' />
                  </div>
                  <div className="basic-info__player-name">
                    {item.long_name}
                  </div>
                </div>
                <div className="similar__basic-info__details">
                  <div className="skill__stats">{item.overall}</div>
                  <div className="skill__stats">{item.potential}</div>
                  {player!.player_positions!.split(", ")
                    .map((item: string) => (
                      <div className="player-positions positions">{item}</div>
                    ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default SimilarPlayers;
