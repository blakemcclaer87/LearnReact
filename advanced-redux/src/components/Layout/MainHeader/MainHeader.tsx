import React from 'react';
import CartButton from '../../Cart/CartButton/CartButton';
import classes from './MainHeader.module.css';

const MainHeder = () => {
    return (
        <header className={classes.header}>
          <h1>ReduxCart</h1>
          <nav>
            <ul>
              <li>
                <CartButton />
              </li>
            </ul>
          </nav>
        </header>
      );
};

export default MainHeder;
