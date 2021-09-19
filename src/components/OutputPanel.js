import React from 'react';
import { connect } from 'react-redux';

const OutputPanel = ({ x, y, facing, reporting }) => {
  return (
    <div className="output-panel shadow-smooth">
      <p className="output-panel__title">Robot Location:</p>
      <p className="output-panel__output">
        X: <span>{reporting === true ? `${x}` : ''}</span>
        Y: <span>{reporting === true ? `${y}` : ''}</span>
        Facing: <span>{reporting === true ? `${facing}` : ''}</span>
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
