import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import ForwardCounter from './components/ForwardCounter/ForwardCounter';
import BackwardCounter from './components/BackwardsCounter/BackwardCounter';

function App() {
  return (
    <Fragment>
      <ForwardCounter/>
      <BackwardCounter/>
    </Fragment>
  );
}

export default App;
