/* eslint-disable default-case */
import React from 'react';
import Robot from './Robot';

const Grid = ({ robotPosition }) => {
  return (
    <div className="grid">
      <Robot robotPosition={robotPosition} />
      <div className="grid__row">
        <div className="grid__row-item"></div>
        <div className="grid__row-item"></div>
        <div className="grid__row-item"></div>
        <div className="grid__row-item"></div>
        <div className="grid__row-item"></div>
      </div>
      <div className="grid__row">
        <div className="grid__row-item"></div>
        <div className="grid__row-item"></div>
        <div className="grid__row-item"></div>
        <div className="grid__row-item"></div>
        <div className="grid__row-item"></div>
      </div>
      <div className="grid__row">
        <div className="grid__row-item"></div>
        <div className="grid__row-item"></div>
        <div className="grid__row-item"></div>
        <div className="grid__row-item"></div>
        <div className="grid__row-item"></div>
      </div>
      <div className="grid__row">
        <div className="grid__row-item"></div>
        <div className="grid__row-item"></div>
        <div className="grid__row-item"></div>
        <div className="grid__row-item"></div>
        <div className="grid__row-item"></div>
      </div>
      <div className="grid__row">
        <div className="grid__row-item"></div>
        <div className="grid__row-item"></div>
        <div className="grid__row-item"></div>
        <div className="grid__row-item"></div>
        <div className="grid__row-item"></div>
      </div>
    </div>
  );
};

export default Grid;
