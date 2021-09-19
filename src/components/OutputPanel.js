import React, { useState } from 'react';
import { connect } from 'react-redux';

const OutputPanel = ({ x, y, facing, reporting }) => {
  return (
    <div className="output-panel shadow-smooth">
      <p className="output-panel__title">Robot Location:</p>
      <p className="output-panel__output">
        {reporting === true ? `X: ${x}, Y: ${y}, Facing: ${facing}` : ''}
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
