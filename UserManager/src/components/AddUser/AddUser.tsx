import './AddUser.css';
import Reacxt, { useState } from 'react';
import Card from '../Card/Card';
import Button from '../Button/Button';

const AddUser = (props: any) => {

    //array destructuring
    //
    const [enteredUsername, setUsername] = useState('');
    const [enteredAge, setAge] = useState(0);


    const addNewUser = (event: any) => {
        event.preventDefault();
    }

    const usernameChangedHandler = (event: any) => {
        setUsername(event.target.value);
    }

    const ageChangedHandler = (event: any) => {
        setAge(event.target.value);
    }

    return (
        <div>
            <Card className="input">
                <form onSubmit={addNewUser}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" onChange={usernameChangedHandler} />
                    <label htmlFor="age">Age</label>
                    <input id="age" type="number" onChange={ageChangedHandler} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    );
};

export default AddUser;
