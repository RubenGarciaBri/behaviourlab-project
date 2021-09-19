import React from 'react';
import { connect } from 'react-redux';
import robotImg from '../img/robot.png';

const Robot = ({ x, y, facing, isPlaced, block }) => {
  // Default position values at (0, 0) in pixels
  const baseX = 20;
  const baseY = 440;

  // This is the number of pixels the robot travels between cells. The value is the cell's width including margins
  const distance = 105;

  return (
    <div
      className={
        isPlaced === false
          ? `robot robot--animated-static`
          : block === null
          ? `robot robot--${facing}`
          : `robot robot--${facing} robot--animated-${block}`
      }
      style={{
        position: 'absolute',
        top: `${baseY - y * distance}px`,
        left: `${baseX + x * distance}px`,
        transition: 'all .3s',
      }}
    >
      <img src={robotImg} className="robot__img" alt="A little robot" />
    </div>
  );
};

const mapStateToProps = ({ x, y, facing, isPlaced, block }) => {
  return {
    x,
    y,
    facing,
    block,
    isPlaced,
  };
};

export default connect(mapStateToProps)(Robot);
