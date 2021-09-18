import React from 'react';
import { FiRotateCcw, FiRotateCw } from 'react-icons/fi';

const ControPanel = () => {
  return (
    <div className="control-panel shadow-smooth">
      <div className="control-panel__row">
        <p className="control-panel__title">Place</p>
        <span>x: </span>
        <select name="x">
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <span>y: </span>
        <select name="y">
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <span>Facing: </span>
        <select name="facing">
          <option value="NORTH">North</option>
          <option value="EAST">East</option>
          <option value="SOUTH">South</option>
          <option value="WEST">West</option>
        </select>
        <button className="btn control-panel__btn control-panel__btn--place">
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

export default ControPanel;
