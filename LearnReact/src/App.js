import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses.js';

const App = () => {

    const expenses = [
        { id:'e1',  expenseTitle: "Blakes Rent", expenseAmount: 200.75, expenseDate: new Date(2021, 12, 28) },
        { id:'e2',  expenseTitle: "Blakes Food", expenseAmount: 412.0, expenseDate: new Date(2021, 12, 11) },
        { id: 'e3', expenseTitle: "Blakes Car", expenseAmount: 500.00, expenseDate: new Date(2021, 12, 15) }
    ];

    return (
        <div className="App">
            <h2>Lets Get Started</h2>
            <p>This is also visible</p>
            <Expenses customerExpenses={expenses}/>
        </div>
    );
}

export default App;
