import React from 'react';
import HeaderBox from './HeaderBox';
import Leaderboard from './Leaderboard';
import Slides from './Slides';

import './styles.css';

const App = () => {
  return (
    <div className="Appbox">
      <HeaderBox />
      <div className="Leaderboard-and-slide">
        <Leaderboard />
        <Slides />
      </div>

    </div>
  );
};

export default App;