/* eslint-disable default-case */
import React, { useState, useEffect } from 'react';
import Grid from './components/Grid';
import ControlPanel from './components/ControlPanel';
import OutputPanel from './components/OutputPanel';
import HelpBox from './components/HelpBox';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div className="app">
      <HelpBox />
      <div className="app__container">
        <div className="app__container-left">
          <Grid />
        </div>
        <div className="app__container-right">
          <ControlPanel />
          <OutputPanel />
        </div>
      </div>
      <ToastContainer
        limit={1}
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={true}
        pauseOnHover
      />
    </div>
  );
};

export default App;
