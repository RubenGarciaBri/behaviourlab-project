/* eslint-disable default-case */
import React, { useState, useEffect } from 'react';
import Grid from './components/Grid';
import ControlPanel from './components/ControlPanel';
import OutputPanel from './components/OutputPanel';

const App = () => {
  // Robot Position
  const [x, setX] = useState(2);
  const [y, setY] = useState(2);
  const [facing, setFacing] = useState('SOUTH');

  console.log(x, y);

  const robotPosition = {
    x,
    y,
  };

  useEffect(() => {
    window.addEventListener('keyup', handleKeyPress);
  }, []);

  const place = (x, y, facing) => {
    console.log(`Horizontal: ${x}, Vertical: ${y}, Facing: ${facing}`);
  };

  const move = () => {};

  const left = () => {};

  const right = () => {};

  const report = () => {};

  const checkPosition = direction => {
    if (x === 4 && direction === 'EAST') {
      console.log('Unable to move to the right');
    }

    console.log(x, y, direction);
  };

  const handleKeyPress = e => {
    switch (e.key) {
      case 'ArrowUp': {
        // Check Boundaries
        const direction = 'NORTH';
        checkPosition(direction);

        // setX(previousX => previousX + 1);
        // setFacing('NORTH');

        // place();
        setFacing('NORTH');
        setY(previousY => previousY + 1);

        break;
      }
      case 'ArrowRight': {
        // Check Boundaries
        const direction = 'EAST';
        checkPosition(direction);

        setX(previousX => previousX + 1);

        break;
      }
      case 'ArrowDown': {
        // Check Boundaries
        const direction = 'SOUTH';
        checkPosition(direction);

        setY(previousY => previousY - 1);

        break;
      }
      case 'ArrowLeft': {
        // Check Boundaries
        const direction = 'WEST';
        checkPosition(direction);

        setX(previousX => previousX - 1);

        break;
      }
    }
  };

  return (
    <div className="app">
      <div className="app__container">
        <div className="app__container-left">
          <Grid robotPosition={robotPosition} />
        </div>
        <div className="app__container-right">
          <ControlPanel />
          <OutputPanel />
        </div>
      </div>
    </div>
  );
};

export default App;
