import React, { Fragment } from 'react';
import './App.css';

import DUMMY_MEALS from './data/AvailableMeals';
import Header from './components/ui/Header/Header';
import MenuOverview from './components/Menu/MenuOverview/MenuOverview';
import AvailableMeals from './components/Menu/AvailableMeals/AvailableMeals';

function App() {
  return (
    <Fragment>
        <Header></Header>
        <MenuOverview></MenuOverview>
        <AvailableMeals></AvailableMeals>
    </Fragment>
  );
}

export default App;
