import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { Header } from './components';
import { Footer } from './pages';
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
