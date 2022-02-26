import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm.jsx';

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpense) => {
        const suppliedExpense = {
            id: Math.random().toString(),
            ...enteredExpense
        };

        console.log(suppliedExpense);

        props.expenseAdded(suppliedExpense);
    };

    return (
            <div className="new-expense">
            <ExpenseForm onSaveExpoenseData={saveExpenseDataHandler}></ExpenseForm>
            </div>
        )
};

export default NewExpense;