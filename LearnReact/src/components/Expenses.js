import ExpenseItem from './ExpenseItem.js';
import './Expenses.css';
import Card from './Card.js';


const Expenses = (props) => {
    return (
            <Card className='expenses'>
                <ExpenseItem expenseTitle={props.customerExpenses[0].expenseTitle} expenseAmount={props.customerExpenses[0].expenseAmount} expenseDate={props.customerExpenses[0].expenseDate}></ExpenseItem>
                <ExpenseItem expenseTitle={props.customerExpenses[1].expenseTitle} expenseAmount={props.customerExpenses[1].expenseAmount} expenseDate={props.customerExpenses[1].expenseDate}></ExpenseItem>
                <ExpenseItem expenseTitle={props.customerExpenses[2].expenseTitle} expenseAmount={props.customerExpenses[2].expenseAmount} expenseDate={props.customerExpenses[2].expenseDate}></ExpenseItem>
            </Card>
        );
}

export default Expenses;