import React from 'react';
import LeaderboardBox from './LeaderboardBox';

const Leaderboard = () => {

  // array of dummy data that maybe we would retrieve & store in state (intentionally unsorted)
  const data = [
    {
      name: 'Ronnen H',
      points: 50,
    },
    {
      name: 'Eitan M',
      points: 15,
    },
    {
      name: 'testing m',
      points: 11,
    },
    {
      name: 'Test T',
      points: 8,
    },
    {
      name: 'Gerard H',
      points: 3,
    },
    {
      name: 'Eitan B',
      points: 9,
    },
    {
      name: 'ddasd s',
      points: 10,
    },
    {
      name: 'christian r',
      points: 5,
    },
    {
      name: 'Andrew M',
      points: 3,
    },
    {
      name: 'David C',
      points: 10,
    }
  ];

  // sort leaderboard data by points earned
  const sortData = data => {
    return data.sort((a, b) => b.points - a.points);
  };
  const leaderboardData = sortData(data);
  // iterate through sorted data and create new component for each
  const leaderboardBoxes = [];
  for (let i = 0; i < leaderboardData.length; i++) {
    leaderboardBoxes.push(<LeaderboardBox key={`leaderboard-box-${i}`} bg={`bg-${(i+1)%2}`} placement={i+1} name={leaderboardData[i].name} points={leaderboardData[i].points}/>)
  }

  return (
    <div className="Leaderboard-outer-box">
      <div className="Leaderboard-Label">
        <p> Leaderboard </p>
        <div className="Leaderboard-Label-underline"/>
      </div>

      <div className="Leaderboard-boxes">
        {leaderboardBoxes}
      </div>

    </div>
  );
};

export default Leaderboard;