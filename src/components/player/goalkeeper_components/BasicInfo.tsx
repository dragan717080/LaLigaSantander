import React, { useContext } from 'react';
import { PlayerContext } from '../GoalkeeperPage';
import StringHelpers from '../../../helpers/StringHelpers';
import { PlayerInterface } from '../../../interfaces';

const PlayerBasicInfo = () => {

  const player = useContext(PlayerContext) as PlayerInterface;

  const getDate = (str: string) => StringHelpers.formatDateString(str);
  const getValue = (value: number) => StringHelpers.getValueEUR(value);

  return (
    <>
      <div className="basic-details">
        <div className="face"><img src={player.face as string} alt='' /></div>
        <div className="basic-info">
          <div className="basic-info__name">{player.long_name}</div>
          <div className="basic-info__details">
            <img className="player__flag" src={player.nation_flag} alt='' />
            <div className="player-positions positions">GK</div>
            <div>{getDate(player.dob!)}</div>
            <div>{player.height_cm} cm</div>
            <div>{player.weight_kg} kg</div>
          </div>
        </div>
      </div>
      <div className="additional-details">
        <div className="additional-item additional-item__rating">
          <div className="wrapper"><div className="additional-item__stats">{player.overall}</div></div>
          <div className="additional-details__subtitle">Overall Rating</div>
        </div>
        <div className="additional-item">
          <div className="wrapper"><div className="additional-item__stats">{player.potential}</div></div>
          <div className="additional-details__subtitle">Potential</div>
        </div>
        <div className="additional-item">
          <div className="wrapper"><div className="value-stats">{getValue(player.value_eur!)}</div></div>
          <div className="additional-details__subtitle">Value</div>
        </div>
        <div className="additional-item">
          <div className="wrapper"><div className="value-stats">{getValue(player.wage_eur!)}</div></div>
          <div className="additional-details__subtitle">Wage</div>
        </div>
      </div>
      <div className="player__profile-and-abilities">
        <div className="player__profile-and-abilities__row">
          <div className="subtitle">PROFILE</div>
          <div className="player__profile-info">
            <div className="player__profile-info__row">
              <div className="player__profile-info__row__title">Preferred foot</div>
              <div className="player__profile-info__row__stats">{player.preferred_foot}</div>
            </div>
            <div className="player__profile-info__row">
              <div className="player__profile-info__row__title">Work Rate</div>
              <div className="player__profile-info__row__stats">{player.work_rate}</div>
            </div>
          </div>
        </div>
        <div className="player__profile-and-abilities__row">
          <div className="subtitle">PLAYER SPECIAL ABILITIES</div>
        </div>
        <div className="player__profile-and-abilities__row">
          <div className="wrapper">
            <img className="profile__nation" src="https://cdn.sofifa.net/flags/es.png" alt='' />
            <div className="subtitle">{player.club_name}</div>
          </div>
          <div className="club-logo wrapper"><img src={player.club_logo} alt='' /></div>
          <div className="player__profile-club__row">
            <div className="player__profile-club__row__title">Position</div>
            <div className="player__profile-club__row__stats">{player.club_position}</div>
          </div>
          <div className="player__profile-club__row">
            <div className="player__profile-club__row__title">Joined</div>
            <div className="player__profile-club__row__stats">{getDate(player.club_joined!)}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PlayerBasicInfo