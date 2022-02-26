import './Expenses.css';
import Card from './Card.jsx';
import ExpenseList from './ExpenseList.jsx';
import ExpenseChart from './ExpenseChart.jsx';

const Expenses = (props) => {
    return(
        <Card className='expenses'>
            <ExpenseChart expenses={props.customerExpenses} />
            <ExpenseList customerExpenses={props.customerExpenses}/>
        </Card>
    );
}

export default Expenses;