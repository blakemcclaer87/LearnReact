import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStoreState, authActions } from "../../store/AppStore";
import classes from  './Header.module.css';

const Header = () => {

  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state: RootStoreState) => {
    return state.auth.isLoggedIn;
  });

  const performLogout = () => {
    dispatch(authActions.logout());
  };

  return (
      <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          {isLoggedIn && <li>
            <a href='/'>My Products</a>
          </li>}
          {isLoggedIn && <li>
            <a href='/'>My Sales</a>
          </li>}
          <li>
            {isLoggedIn && <button onClick={performLogout}>Logout</button>}
          </li>
        </ul>
      </nav>
    </header>
  )
};

export default Header;
