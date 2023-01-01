import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Auth from './components/Auth/Auth';
import Counter from './components/Counter/Counter';
import Header from './components/Header/Header';
import UserProfile from './components/UserProfile/UserProfile';
import { RootStoreState } from './store/AppStore';

function App() {

    const isLoggedIn = useSelector((state: RootStoreState) => {
      return state.auth.isLoggedIn;
    });

  return (
    <Fragment>
      <Header/>
      {!isLoggedIn && <Auth/>}
      {isLoggedIn && <UserProfile/>}
      <Counter />
    </Fragment>
  );
}

export default App;
