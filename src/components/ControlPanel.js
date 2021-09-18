/* eslint-disable default-case */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { FiRotateCcw, FiRotateCw } from 'react-icons/fi';
import { place, rotate } from '../redux/actions/robot';

const ControPanel = ({ dispatch }) => {
  const [x, setX] = useState(2);
  const [y, setY] = useState(2);
  const [facing, setFacing] = useState('SOUTH');

  console.log(facing);

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

  return (
    <div className="control-panel shadow-smooth">
      <div className="control-panel__row">
        <p className="control-panel__title">Place</p>
        <span>x: </span>
        <select name="x" value={x} onChange={e => setX(e.target.value)}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <span>y: </span>
        <select name="y" value={y} onChange={e => setY(e.target.value)}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <span>Facing: </span>
        <select name="facing" onChange={e => setFacing(e.target.value)}>
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
        <button className="btn control-panel__btn control-panel__btn--move">
          Move
        </button>
      </div>
      <div className="control-panel__row">
        <button className="btn control-panel__btn control-panel__btn--report">
          Report
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps)(ControPanel);
