import { useContext } from 'react';
import '../player.scss';
import FusionCharts from 'fusioncharts';
import ReactFC from 'react-fusioncharts';
import Radar from 'fusioncharts/fusioncharts.powercharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import { PlayerContext } from '../PlayerPage';

const Chart = () => {

  const player = useContext(PlayerContext);

  ReactFC.fcRoot(FusionCharts, Radar, FusionTheme);

  const dataSource = {
    chart: {
      caption: '',
      subcaption: '',
      theme: 'fusion',
      showlegend: '0',
      showdivlinevalues: '0',
      showlimits: '0',
      showvalues: '0',
      plotfillalpha: '40',
      plottooltext: ''
    },
    categories: [
      {
        category: [ { label: 'PAC' }, { label: 'DRI' }, { label: 'DEF' }, { label: 'PAS' }, { label: 'PHY' }, { label: 'SHO' } ]
      }
    ],
    dataset: [
      {
        seriesname: 'User Ratings',
        data: [ { value: player!.pace }, { value: player!.dribbling }, { value: player!.cb }, { value: player!.passing }, { value: player!.physic }, { value: player!.shooting } ]
      }
    ]
  };

  return (
    <>
    <div className='subtitle text__center diagram'>PLAYER SKILLS</div>
    <div className='diagram' id = 'diagram'>
      <ReactFC type='radar' renderAt= 'chartContainer' width='100%' height='100%' dataFormat='JSON' dataSource={dataSource} />
    </div>
    </>
  )
}

export default Chart