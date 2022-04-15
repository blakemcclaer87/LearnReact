import React from 'react';
import  './Card.css';

const Card = (props: any) => { 

    const displayClasses = 'card ' + props.className;

    return (
        <div className={displayClasses}>
            {props.children}
        </div>
        );
};

export default Card;