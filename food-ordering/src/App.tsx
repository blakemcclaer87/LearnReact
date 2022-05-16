import React, { Fragment } from 'react';
import './App.css';

import DUMMY_MEALS from './data/AvailableMeals';
import Header from './components/ui/Header/Header';
import MenuOverview from './components/Menu/MenuOverview/MenuOverview';

function App() {
  return (
    <Fragment>
        <Header></Header>
        <MenuOverview></MenuOverview>
    </Fragment>
  );
}

export default App;
