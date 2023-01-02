import React from "react";
import classes from './Card.module.css';
import ICardPropsModel from "./ICardPropModel";

const Card = (props: ICardPropsModel) => {
    return (
        <section
          className={`${classes.card} ${props.className ? props.className : ''}`}>
          {props.children}
        </section>
      );
};

export default Card;