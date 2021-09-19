/* eslint-disable default-case */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { FiRotateCcw, FiRotateCw } from 'react-icons/fi';
import { place, rotate, move, report, block } from '../redux/actions/robot';

const ControPanel = ({ dispatch, reduxState }) => {
  const [x, setX] = useState(2);
  const [y, setY] = useState(2);
  const [facing, setFacing] = useState('SOUTH');

  const handlePlaceSubmit = () => {
    dispatch(place(x, y, facing));
  };

  const handleRotateLeft = () => {
    switch (facing) {
      case 'NORTH': {
        setFacing('WEST');
        dispatch(rotate('WEST'));
        break;
      }
      case 'WEST': {
        setFacing('SOUTH');
        dispatch(rotate('SOUTH'));
        break;
      }
      case 'SOUTH': {
        setFacing('EAST');
        dispatch(rotate('EAST'));
        break;
      }
      case 'EAST': {
        setFacing('NORTH');
        dispatch(rotate('NORTH'));
        break;
      }
    }
  };

  const handleRotateRight = () => {
    switch (facing) {
      case 'NORTH': {
        setFacing('EAST');
        dispatch(rotate('EAST'));
        break;
      }
      case 'EAST': {
        setFacing('SOUTH');
        dispatch(rotate('SOUTH'));
        break;
      }
      case 'SOUTH': {
        setFacing('WEST');
        dispatch(rotate('WEST'));
        break;
      }
      case 'WEST': {
        setFacing('NORTH');
        dispatch(rotate('NORTH'));
        break;
      }
    }
  };

  const handleMove = () => {
    if (reduxState.facing === 'NORTH' && reduxState.y === 4) {
      dispatch(block('top'));
      console.log('Unable to move north');
      return;
    } else if (reduxState.facing === 'EAST' && reduxState.x === 4) {
      dispatch(block('right'));
      console.log('Unable to move east');
      return;
    } else if (reduxState.facing === 'SOUTH' && reduxState.y === 0) {
      dispatch(block('down'));
      console.log('Unable to move south');
      return;
    } else if (reduxState.facing === 'WEST' && reduxState.x === 0) {
      dispatch(block('left'));
      console.log('Unable to move west');
      return;
    } else {
      moveRobot();
    }
  };

  const moveRobot = () => {
    let newX, newY;

    if (reduxState.facing === 'NORTH') {
      newY = reduxState.y + 1;
      dispatch(move(reduxState.x, newY, 'NORTH'));
    } else if (reduxState.facing === 'EAST') {
      newX = reduxState.x + 1;
      dispatch(move(newX, reduxState.y, 'EAST'));
    } else if (reduxState.facing === 'SOUTH') {
      newY = reduxState.y - 1;
      dispatch(move(reduxState.x, newY, 'SOUTH'));
    } else {
      newX = reduxState.x - 1;
      dispatch(move(newX, reduxState.y, 'WEST'));
    }
  };

  const handleReport = () => {
    dispatch(report());
  };

  return (
    <div className="control-panel shadow-smooth">
      <div className="control-panel__row">
        <p className="control-panel__title">Place</p>
        <span>X: </span>
        <select name="x" value={x} onChange={e => setX(e.target.value)}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <span>Y: </span>
        <select name="y" value={y} onChange={e => setY(e.target.value)}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <span>Facing: </span>
        <select
          name="facing"
          value={facing}
          onChange={e => setFacing(e.target.value)}
        >
          <option value="NORTH">North</option>
          <option value="EAST">East</option>
          <option value="SOUTH">South</option>
          <option value="WEST">West</option>
        </select>
        <button
          onClick={handlePlaceSubmit}
          className="btn control-panel__btn control-panel__btn--place"
        >
          Enter
        </button>
      </div>
      <div className="control-panel__row">
        <p className="control-panel__title">Rotate</p>
        <button
          onClick={handleRotateLeft}
          className="btn control-panel__btn control-panel__btn--rotate"
        >
          <FiRotateCcw />
        </button>
        <button
          onClick={handleRotateRight}
          className="btn control-panel__btn control-panel__btn--rotate"
        >
          <FiRotateCw />
        </button>
      </div>
      <div className="control-panel__row">
        <button
          onClick={handleMove}
          className="btn control-panel__btn control-panel__btn--move"
        >
          Move
        </button>
      </div>
      <div className="control-panel__row">
        <button
          onClick={handleReport}
          className="btn control-panel__btn control-panel__btn--report"
        >
          Report
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = ({ x, y, facing }) => {
  const reduxState = {
    x,
    y,
    facing,
  };
  return {
    reduxState,
  };
};

export default connect(mapStateToProps)(ControPanel);
