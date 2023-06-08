
import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import './player.scss';
import axios from 'axios';
import PlayerPage from './PlayerPage';
import GoalkeeperPage from './GoalkeeperPage';
import AxiosService from '../../services/AxiosService';
import { PlayerInterface } from '../../interfaces';

const Player = () => {

  const params = useParams();
  const [player, setPlayer] = useState<PlayerInterface>({} as PlayerInterface);

  const getData = () => {
    AxiosService.get(`players/${params.id}`)
    .then((result) => setPlayer(result as PlayerInterface))
    .catch((error) => console.error('Api fetching failed!'));
  }

  useEffect(() => {
    getData();
  }, []);

  if (Object.keys(player).length > 0) {
    return ("player_positions" in player) ? <PlayerPage player = { player } /> : <GoalkeeperPage player = { player } />
  }
  else {
    return <></>
  }

}

export default Player;
