import React, { useContext } from 'react';
import '../player.scss';
import FusionCharts from 'fusioncharts';
import ReactFC from 'react-fusioncharts';
import Radar from 'fusioncharts/fusioncharts.powercharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import { PlayerContext } from '../GoalkeeperPage';

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
        category: [ { label: 'SKI' }, { label: 'DIV' }, { label: 'HAN' }, { label: 'KIC' }, { label: 'POS' }, { label: 'RLX' } ]
      }
    ],
    dataset: [
      {
        seriesname: 'User Ratings',
        data: [ { value: player!.overall }, { value: player!.goalkeeping_diving }, { value: player!.goalkeeping_handling }, { value: player!.goalkeeping_kicking }, { value: player!.goalkeeping_positioning }, { value: player!.goalkeeping_reflexes } ]
      }
    ]
  };

  return (
    <>
    <div className='subtitle text__center'>PLAYER SKILLS</div>
    <div className='goalkeeper-diagram' id = 'diagram'>
      <ReactFC type='radar' renderAt= 'chartContainer' width='100%' height='100%' dataFormat='JSON' dataSource={dataSource} />
    </div>
    </>
  )
}

export default Chart