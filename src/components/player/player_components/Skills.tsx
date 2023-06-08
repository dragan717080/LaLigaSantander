import React, { useContext } from 'react';
import { PlayerContext } from '../PlayerPage';
import { PlayerInterface } from '../../../interfaces';

const PlayerSkills = () => {

  const player = useContext(PlayerContext) as PlayerInterface;

  return (Object.keys(player).length > 0) ? (
        <div className="player__skills">
          <div className="subtitle wrapper">SKILLS</div>
          <div className="skills">
            <div className="skills__row">
              <div className="skills__row__item">
                <div className="skill__title">Crossing</div>
                <div className="skill__stats">{ player.crossing }</div>
              </div>
              <div className="skills__row__item">
                <div className="skill__title">Pace</div>
                <div className="skill__stats">{ player.pace }</div>
              </div>
              <div className="skills__row__item">
                <div className="skill__title">Passing</div>
                <div className="skill__stats">{ player.passing}</div>
              </div>
              <div className="skills__row__item">
                <div className="skill__title">Shooting</div>
                <div className="skill__stats">{ player.shooting }</div>
              </div>
              <div className="skills__row__item">
                <div className="skill__title">Dribbling</div>
                <div className="skill__stats">{ player.dribbling }</div>
              </div>
              <div className="skills__row__item">
                <div className="skill__title">Skill Dribbling</div>
                <div className="skill__stats">{ player.skill_dribbling }</div>
              </div>
            </div>
            <div className="skills__row">
              <div className="skills__row__item">
                  <div className="skill__title">Heading accuracy</div>
                  <div className="skill__stats">{ player.heading_accuracy }</div>
              </div>
              <div className="skills__row__item">
                <div className="skill__title">Free kick accuracy</div>
                <div className="skill__stats">{ player.skill_fk_accuracy }</div>
              </div>
              <div className="skills__row__item">
                <div className="skill__title">Acceleration</div>
                <div className="skill__stats">{ player.acceleration }</div>
              </div>
              <div className="skills__row__item">
                <div className="skill__title">Sprint speed</div>
                <div className="skill__stats">{ player.sprint_speed }</div>
              </div>
              <div className="skills__row__item">
                <div className="skill__title">Agility</div>
                <div className="skill__stats">{ player.agility }</div>
              </div>
              <div className="skills__row__item">
                <div className="skill__title">Sliding tackle</div>
                <div className="skill__stats">{ player.sliding_tackle }</div>
              </div>
            </div>
            <div className="skills__row">
              <div className="skills__row__item">
                <div className="skill__title">Jumping</div>
                <div className="skill__stats">{ player.jumping }</div>
              </div>
              <div className="skills__row__item">
                <div className="skill__title">Stamina</div>
                <div className="skill__stats">{ player.stamina }</div>
              </div>
              <div className="skills__row__item">
                <div className="skill__title">Strength</div>
                <div className="skill__stats">{ player.strength }</div>
              </div>
              <div className="skills__row__item">
                <div className="skill__title">Power of shot</div>
                <div className="skill__stats">{ player.agility }</div>
              </div>
              <div className="skills__row__item">
                <div className="skill__title">Power of long shot</div>
                <div className="skill__stats">{ player.long_shots }</div>
              </div>
            </div>
          </div>
        </div>
  ) : <></>
}

export default PlayerSkills