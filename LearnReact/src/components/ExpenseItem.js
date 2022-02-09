import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate.js';
import Card from './Card.js';

const ExpenseItem = (props) => {

    return (
        <Card className="expense-item">
            <ExpenseDate expenseDate={props.expenseDate}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{props.expenseTitle}</h2>
                <div className="expense-item__price">${props.expenseAmount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;
