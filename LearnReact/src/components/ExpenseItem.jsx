import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate.jsx';
import Card from './Card.jsx';
import React, { useState } from 'react';

const ExpenseItem = (props) => {

    //hooks to be sedin react component functions.
    //value first value, update method number 2
    //regstrs for component instance!
    //only doe initial use state when the component loads for the first time
    //setState will skip this when the component re-initialises. 
    //
    const [title, setTitle] = useState(props.expenseTitle);

    const expenseItemClickHandler = () => {
        setTitle('Updated value.');
        console.log('clicked');
    };

    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate expenseDate={props.expenseDate}></ExpenseDate>
                <div className="expense-item__description">
                    <h2>{title}</h2>
                    <div className="expense-item__price">${props.expenseAmount}</div>
                </div>
                {/*
                <button onClick={expenseItemClickHandler}>
                    Change Title
                </button>
                */}
            </Card>
        </li>
    );
}

export default ExpenseItem;
