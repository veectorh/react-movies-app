import React from 'react';
import './App.css';
import Main from './Main/Main'
import TMDB from './assets/tmdb-logo.svg'

function App() {

  return (
    <div>
      <img width='200' style={{marginLeft: 'auto'}} src={TMDB} alt='tmdb' />
      <Main />
    </div>
  );
}

export default App;
