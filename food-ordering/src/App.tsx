import React, { Fragment } from 'react';
import './App.css';
import Meals from './components/Menu/Meals/Meals';
import Header from './components/ui/Header/Header';

function App() {
  return (
    <Fragment>
        <Header></Header>
        <main>
          <Meals></Meals>
        </main>
    </Fragment>
  );
}

export default App;
