/* eslint-disable default-case */
import React, { useState, useEffect } from 'react';
import Grid from './components/Grid';

const App = () => {
  // Robot Position
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [facing, setFacing] = useState('SOUTH');
  const [topPosition, setTopPosition] = useState('218px');
  const [leftPosition, setLeftPosition] = useState('218px');

  const robotPosition = {
    topPosition,
    leftPosition,
  };

  useEffect(() => {
    window.addEventListener('keyup', handleKeyPress);
  }, []);

  const place = (x, y, facing) => {};

  const move = () => {};

  const left = () => {};

  const right = () => {};

  const report = () => {};

  const handleKeyPress = e => {
    // Distance the robot moves in pixels
    const distance = 100;

    switch (e.key) {
      case 'ArrowUp':
        setTopPosition(
          prevTopPosition => parseInt(prevTopPosition) - distance + 'px'
        );
        break;
      case 'ArrowRight':
        setLeftPosition(
          prevLeftPosition => parseInt(prevLeftPosition) + distance + 'px'
        );
        break;
      case 'ArrowDown':
        setTopPosition(
          prevTopPosition => parseInt(prevTopPosition) + distance + 'px'
        );
        break;
      case 'ArrowLeft':
        setLeftPosition(
          prevLeftPosition => parseInt(prevLeftPosition) - distance + 'px'
        );
        break;
    }
  };

  return (
    <div className="App">
      <Grid robotPosition={robotPosition} />
    </div>
  );
};

export default App;
