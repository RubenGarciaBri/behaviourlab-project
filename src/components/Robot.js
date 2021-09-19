import React from 'react';
import { connect } from 'react-redux';
import robotImg from '../img/robot.png';

const Robot = ({ x, y, facing, isPlaced, block }) => {
  // Default position values at (0, 0) in px. These are the values of the top and left css properties that center the robot at the bottom-left of the grid using absolute positioning. These numbers are based on the grid's chosen dimensions and the size of the robot's image. The app will automatically figure out the values of all the other cells with a simple formula shown in the component's style property below.
  const baseX = 20;
  const baseY = 440;

  // This is the number of pixels the robot travels between cells. The value is the cell's width including margins.
  const distance = 105;

  return (
    <div
      className={
        // First check if the robot has been placed on the grid and if not, add the robot--animated-static class that gives the robot a hovering animation effect.
        // Secondly, if the robot is blocked against the edge of the table(block !== null), add the robot--animated-${block} class that triggers an animation that indicates the user the robot can't move in that direction. If not, just leave the `robot robot--${facing}` class that alters the robot's image perspective to indicate which direction it's facing.
        isPlaced === false
          ? `robot robot--animated-static`
          : block !== null
          ? `robot robot--${facing} robot--animated-${block}`
          : `robot robot--${facing}`
      }
      style={{
        position: 'absolute',
        // The formula below calculates the top and left positioning values in px of the cell the robot has been moved to based on it's coordinates and the base (0, 0) reference values shown above.
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
