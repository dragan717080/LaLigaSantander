import { useCallback, MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import HTMLHelpers from '../../helpers/HTMLHelpers';
import { PlayerInterface } from '../../interfaces';

const Records = ({ data }: { data: PlayerInterface[] }) => {

  const navigate = useNavigate();

  const getPlayer = (e: MouseEvent<HTMLElement>) => {
    const targetElement = e.target as HTMLElement;
    const parentNode = targetElement.parentNode as HTMLElement;
  
    const playerName = parentNode.childNodes[0].textContent;
    const player = data.find((item: PlayerInterface) => item.long_name === playerName);
  
    if (player) {
      navigate(`/players/${player.player_id}`);
    }
  };

  const positionsElement = useCallback((node: HTMLElement|null) => {
    if (node !== null) {
      HTMLHelpers.getColorOfPositionsForPlayer(Array.from(document.getElementsByClassName('position')) as HTMLElement[]);
    }
  }, [])

  const getPlayersPositions = (player: PlayerInterface) => {
    if (Object.keys(player).includes('goalkeeper_url')) return <div className='position gk'>GK</div>;
    const playerPositions = player.player_positions!.split(', ');
    return playerPositions.map((position) => (
      <div className='position'>{position}</div>
    )
    )
  }

  return (
    <div className='wrapper'>
      <table className='table'>
        <tbody>
          {data.map((player: PlayerInterface) => (
            <tr onClick={getPlayer} >
              <td><div>{player.long_name}</div></td>
              <td><img className='players__face' src={player.face as string} alt='' /></td>
              <td className='players__overall'><div>{player.overall}</div></td>
              <td ref={positionsElement} ><div className='player__positions'>{getPlayersPositions(player)}</div></td>
              <td><img className='players__logo' src={player.club_logo} alt='' /></td>
              <td><div>{player.club_name}</div></td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Records  