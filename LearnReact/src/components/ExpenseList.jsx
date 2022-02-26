import React from 'react';
import './ExpenseList.css';
import ExpenseItem from './ExpenseItem.jsx';

const ExpenseList = props => {
    
    let expenseContent = props.customerExpenses.length === 0 ? <p className="expense-list__fallback">No Expnses Added.</p> :
        props.customerExpenses.map((item) => (
            <ExpenseItem key={item.id} expenseTitle={item.expenseTitle} expenseAmount={item.expenseAmount} expenseDate={item.expenseDate}></ExpenseItem>
        ));
    

    return (<ul className="expenses-list">
        {expenseContent}
    </ul>);
};

export default ExpenseList;