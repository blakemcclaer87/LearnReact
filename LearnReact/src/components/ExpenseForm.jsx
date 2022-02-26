import React, { useState } from 'react';
import './ExpnseForm.css';

const ExpenseForm = (props) => {

    //const [enteredTitle, setEnteredTitle] = useState('');
    //const [enteredAmount, setEnteredAmount] = useState(0);
    //const [enteredDate, setENteredDate] = useState(new Date('2020-01-01'));

    const [userInput, setUserInput] = useState(
        {
            enteredTitle: '',
            enteredAmount: 0.00,
            enteredDate:   ''
        });

    const titleChangeHandler = (event) => {

        //setEnteredTitle(event.target.value);
        //use this function structure to deal with the fact that react scchedules and queues state updates
        //
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredTitle: event.target.value
            }
        });
    };

    const amountChangedHandler = (event) => {
        //setEnteredAmount(event.target.value);
        //use this function structure to deal with the fact that react scchedules and queues state updates
        //
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredAmount: event.target.value
            }
        });
    };

    const dateChangedHandler = (event) => {
        //setENteredDate(event.target.value);
        //use this function structure to deal with the fact that react scchedules and queues state updates
        //
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredDate: event.target.value
            }
        });
    };

    const subitNewExpenseHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            expenseDate:   new Date(userInput.enteredDate.replace(/(\d{2})-(\d{2})-(\d{4})/, "$3/$2/$1")),
            expenseTitle:  userInput.enteredTitle,
            expenseAmount: userInput.enteredAmount
        }

        console.log(expenseData);


        //allows us t co,mmunicate up. 
        //
        props.onSaveExpoenseData(expenseData);

        setUserInput({
            enteredDate: '',
            enteredAmount: 0,
            enteredTitle: ''
        });
    };

    return (
        <form onSubmit={subitNewExpenseHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>
                        Title
                    </label>
                    <input type="text" value={userInput.enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>
                        Amount
                    </label>
                    <input type="number" value={userInput.enteredAmount} min="0.01" step="0.01" onChange={amountChangedHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>
                        Date
                    </label>
                    <input type="date" value={userInput.enteredDate} min="2019-01-01" onChange={dateChangedHandler} />
                </div>
                <div className="new-expnse__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    );
};

export default ExpenseForm;