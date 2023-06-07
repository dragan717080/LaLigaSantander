import { useState, useEffect, MouseEvent } from 'react';
import HTMLHelpers from '../../helpers/HTMLHelpers';
import './top_scorers.scss'
import AxiosService from '../../services/AxiosService';
import { PlayerInterface } from '../../interfaces';

const TopScorers = () => {

    const [topScorers, setTopScorers] = useState<PlayerInterface[]>([]);

    const getData = () => {
        AxiosService.get('stats/top_scorers')
            .then((result) => setTopScorers((result as PlayerInterface[]).slice(0, 10)))
            .catch((error) => console.error('Api fetching failed!'));
    }

    const getScorer = (e: MouseEvent<HTMLElement>) => HTMLHelpers.getActiveScorer(e, topScorers);

    const getTopScorers = () => {
        return (topScorers.length > 0)
            ? <>
                <div id='top_scorer'><img src={topScorers[0].face as string} /></div>
                {topScorers.map((item, index) => {
                    const isActive = (index === 0) ? 'scorer active-scorer' : 'scorer';
                    return <div className={isActive} onClick={getScorer}>
                        <div className='scorer__name'>{item['name']}</div>
                        <div className='scorer__goals'>{item['goals']}</div>
                    </div>
                })}
            </>
            : null;
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div id='top-scorers'>
            <div className='subtitle'>Top Scorers</div>
            <div>{getTopScorers()}</div>
        </div>
    )
}

export default TopScorers;
