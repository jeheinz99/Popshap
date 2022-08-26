import React from 'react';

const LeaderboardBox = props => {

  const { name, points, placement, bg } = props;

  return (
    <div className="Leaderboard-box" id={bg}>
      {placement < 10 ? <p className="placement-div">0{placement}.</p> : <p className="placement-div">{placement}.</p>}
      <p className="name-div">{name}</p>
      <p className="points-div">{points}pts</p>
    </div>
  )
};

export default LeaderboardBox;