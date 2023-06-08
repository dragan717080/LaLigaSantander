import { useState, useEffect } from 'react';
import Pagination from './Pagination';
import Records from './Records';
import './players.scss';
import AxiosService from '../../services/AxiosService';
import { PlayerInterface } from '../../interfaces';

const Players = () => {

  const [players, setPlayers] = useState<PlayerInterface[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 40;

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = players.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(players.length / recordsPerPage);

  const getData = () => {
    AxiosService.get('players')
      .then((result) => setPlayers(result as PlayerInterface[]))
      .catch((error) => console.error('Api fetching failed!'));
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div id='players'>
        <div className='title'>
          La Liga Santander players
        </div>
      </div>
      <div className='container mt-5'>
        <Records data={currentRecords} />
        <Pagination
          nPages={nPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  )
}

export default Players