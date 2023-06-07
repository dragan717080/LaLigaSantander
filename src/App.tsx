import React from 'react';
import { TopScorers, TopAssists, TopManagers, AdditionalStats, Table } from './components';
import { GeneralInfo } from './pages';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <div id='top-stats'>
        <TopScorers />
        <TopAssists />
        <TopManagers />
        <GeneralInfo />
      </div>
      <AdditionalStats />
      <Table />
    </div>
  );
}

export default App;
