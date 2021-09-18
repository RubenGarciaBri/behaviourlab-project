import React, { useState } from 'react';
import { connect } from 'react-redux';
import { FiRotateCcw, FiRotateCw } from 'react-icons/fi';
import { place } from '../redux/actions/robot';

const ControPanel = ({ dispatch }) => {
  const [x, setX] = useState(2);
  const [y, setY] = useState(2);
  const [facing, setFacing] = useState('SOUTH');

  console.log(x, y, facing);

  const handlePlaceSubmit = () => {
    dispatch(place(x, y, facing));
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
        <button className="btn control-panel__btn control-panel__btn--rotate">
          <FiRotateCcw />
        </button>
        <button className="btn control-panel__btn control-panel__btn--rotate">
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
