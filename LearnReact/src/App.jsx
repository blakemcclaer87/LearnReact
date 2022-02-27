import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses.jsx';
import NewExpense from './components/NewExpense.jsx';
import React, { useState } from 'react';

const INITIAL_EXPENSES = [
    { id: 'e1', expenseTitle: "Blakes Rent", expenseAmount: 200.75, expenseDate: new Date(2021, 12, 28) },
    { id: 'e2', expenseTitle: "Blakes Food", expenseAmount: 412.0, expenseDate: new Date(2021, 12, 11) },
    { id: 'e3', expenseTitle: "Blakes Car", expenseAmount: 500.00, expenseDate: new Date(2021, 6, 15) }
];

const App = () => {

    const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

    const addExpenseHandler = (expense) => {
        console.log("In app.js ");
        console.log(expense);
        setExpenses((prevState) => {
            return [expense, ...prevState];
        });
    };

    return (
        <div className="App">
            <NewExpense expenseAdded={addExpenseHandler}/>
            <Expenses customerExpenses={expenses}/>
        </div>
    );
}

export default App;
