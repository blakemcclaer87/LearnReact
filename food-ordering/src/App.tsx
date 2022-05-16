import React, { Fragment, useEffect, useState } from 'react';
import './App.css';

import DUMMY_MEALS from './data/AvailableMeals';
import Header from './components/ui/Header/Header';
import MenuOverview from './components/Menu/MenuOverview/MenuOverview';
import AvailableMeals from './components/Menu/AvailableMeals/AvailableMeals';
import { IMeal } from './interfaces/IMeal';

function App() {

  const baseMealArray: IMeal[] = [];
  const [availableMealItems, setAvailableMealItems] = useState(baseMealArray);

  useEffect(() => {
    setAvailableMealItems(DUMMY_MEALS);
    console.log(availableMealItems);
  },
  [
  ]);

  return (
    <Fragment>
        <Header></Header>
        <MenuOverview></MenuOverview>
        <AvailableMeals></AvailableMeals>
    </Fragment>
  );
}

export default App;
