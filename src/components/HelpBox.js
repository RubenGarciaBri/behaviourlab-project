import React from 'react';
import { connect } from 'react-redux';

const HelpBox = ({ isPlaced }) => {
  return (
    // Hide the component after the robot is placed on the grid
    <div className={`help-box ${isPlaced === true ? 'help-box--hidden' : ''}`}>
      <p>
        To start playing the game, plase select a starting grid position and
        click "Enter" to place the robot.
      </p>
      <div className="help-box__pointer"></div>
    </div>
  );
};

const mapStateToProps = ({ isPlaced }) => {
  return {
    isPlaced,
  };
};

export default connect(mapStateToProps)(HelpBox);
