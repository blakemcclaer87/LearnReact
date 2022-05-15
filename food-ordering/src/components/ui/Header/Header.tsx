import React, { Fragment } from "react";
import classes from  './Header.module.css';
import mealsImage from './meals.jpg';
import CartButton from '../../Cart/CartButton/CartButton';

const Header = (props: any) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>
                    Your Meals
                </h1>
                <CartButton></CartButton>
            </header>
            <div className={classes['main-image']}>
                <img  src={mealsImage}  alt="meal pic"/>
            </div>
        </Fragment>
    );
};

export default Header;