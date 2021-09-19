import React from 'react';
import { connect } from 'react-redux';

const OutputPanel = ({ x, y, facing, reporting }) => {
  return (
    <div className="output-panel shadow-smooth">
      <p className="output-panel__title">Robot Location:</p>
      <p
        // Show and hide the robot's location depending on the value of reporting
        className={`output-panel__output ${
          reporting === false ? 'output-panel__output--hidden' : ''
        }`}
      >
        X: <span>{x}</span>
        Y: <span>{y}</span>
        Facing: <span>{facing}</span>
      </p>
    </div>
  );
};

const mapStateToProps = ({ x, y, facing, reporting }) => {
  return {
    x,
    y,
    facing,
    reporting,
  };
};

export default connect(mapStateToProps)(OutputPanel);
