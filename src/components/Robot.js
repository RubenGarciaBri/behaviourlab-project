import React from 'react';
import robotImg from '../img/robot.png';

const Robot = ({ robotPosition: { topPosition, leftPosition } }) => {
  return (
    <div
      className="robot-wrapper"
      style={{
        position: 'absolute',
        top: topPosition,
        left: leftPosition,
      }}
    >
      <img src={robotImg} className="robot" alt="An illustration of a robot" />
    </div>
  );
};

export default Robot;
