import React from 'react';
import robotImg from '../img/robot.png';

const Robot = ({ robotPosition: { x, y } }) => {
  // Default position values at (0, 0) in pixels
  const baseX = 20;
  const baseY = 440;

  // This is the number of pixels the robot travels between cells. The value is the cell's width including margins
  const distance = 105;

  return (
    <div
      className="robot"
      style={{
        position: 'absolute',
        top: `${baseY - y * distance}px`,
        left: `${baseX + x * distance}px`,
        transition: 'all .3s',
      }}
    >
      <img
        src={robotImg}
        className="robot__img"
        alt="An illustration of a robot"
      />
    </div>
  );
};

export default Robot;
