import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { Header, Players, Player, Teams, Team } from './components';
import { Footer, News } from './pages';
import './index.scss';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Router>
    <Routes>
      <Route path = '/' element = {<Layout />} >
        <Route path = '/' element = {<App />} />
        <Route path = '/news' element = {<News />} />
        <Route path = "/players" element = {<Players />} />
        <Route path = "/players/:id" element = {<Player />} />
        <Route path = "/teams" element = {<Teams />} />
        <Route path = "/teams/:id/*" element = {<Team />} />
      </Route>
    </Routes>
  </Router>
);

function Layout () {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
