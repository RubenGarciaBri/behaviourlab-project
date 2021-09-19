/* eslint-disable default-case */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import HelpBox from './HelpBox';
import { FiRotateCcw, FiRotateCw } from 'react-icons/fi';
import { place, rotate, move, report, block } from '../redux/actions/robot';
import { toast } from 'react-toastify';

const ControPanel = ({ dispatch, reduxState }) => {
  const [x, setX] = useState(2);
  const [y, setY] = useState(2);
  const [facing, setFacing] = useState('SOUTH');

  // Toast Id to prevent duplicates
  const customToastId = 'custom-id-yes';

  // UI error message that shows up if the user performs a command before placing the robot on the grid
  const showToastError = () => {
    toast.error('Please place the robot on the grid first.', {
      toastId: customToastId,
    });
  };

  // Place command - Positions the robot in the desired grid location
  const handlePlaceSubmit = () => {
    dispatch(place(x, y, facing));
  };

  // Rotate left command - Anticlockwise
  const handleRotateLeft = () => {
    // Check if the robot has been placed on the grid
    if (reduxState.isPlaced === false) {
      showToastError();
    } else {
      // Update state and submit rotate action with the appropiate direction
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
    }
  };

  // Rotate right command - Clockwise
  const handleRotateRight = () => {
    // Check if the robot has been placed on the grid
    if (reduxState.isPlaced === false) {
      showToastError();
    } else {
      switch (facing) {
        // Update state and submit rotate action with the appropiate direction
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
    }
  };

  // Check if the robot is on one of the edges of the table and submit block action. The block global state property is used by the robot to know which side it's blocked against and perform an animation that shows the user the robot can't move in that direction.
  const handleMove = () => {
    // Check if the robot has been placed on the grid
    if (reduxState.isPlaced === false) {
      showToastError();
    } else {
      // Prevent the robot from exceeding any values above 4 and below 0 so it doesn't fall off the table
      if (reduxState.facing === 'NORTH' && reduxState.y === 4) {
        dispatch(block('top'));
      } else if (reduxState.facing === 'EAST' && reduxState.x === 4) {
        dispatch(block('right'));
      } else if (reduxState.facing === 'SOUTH' && reduxState.y === 0) {
        dispatch(block('down'));
      } else if (reduxState.facing === 'WEST' && reduxState.x === 0) {
        dispatch(block('left'));
      } else {
        // Move the robot if it's not blocked
        moveRobot();
      }
    }
  };

  // Move command - Moves the robot 1 position in the direction it's facing
  const moveRobot = () => {
    if (reduxState.facing === 'NORTH') {
      dispatch(move('NORTH'));
    } else if (reduxState.facing === 'EAST') {
      dispatch(move('EAST'));
    } else if (reduxState.facing === 'SOUTH') {
      dispatch(move('SOUTH'));
    } else {
      dispatch(move('WEST'));
    }
  };

  // Report command - It shows the robot's coordinates and facing direction on the screen
  const handleReport = () => {
    // Check if the robot has been placed on the grid
    if (reduxState.isPlaced === false) {
      showToastError();
    } else {
      dispatch(report());
    }
  };

  return (
    <div className="control-panel shadow-smooth">
      <HelpBox />
      <div className="control-panel__row">
        <p className="control-panel__title">Place</p>
        <span>X: </span>
        <select
          name="x"
          value={x}
          onChange={e => setX(parseInt(e.target.value))}
        >
          <option value={0}>0</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
        </select>
        <span>Y: </span>
        <select
          name="y"
          value={y}
          onChange={e => setY(parseInt(e.target.value))}
        >
          <option value={0}>0</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
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

const mapStateToProps = ({ x, y, facing, isPlaced }) => {
  // Global state values are retrieved in an object to avoid conflic with the current component's state
  const reduxState = {
    x,
    y,
    facing,
    isPlaced,
  };
  return {
    reduxState,
  };
};

export default connect(mapStateToProps)(ControPanel);
