import './AddUser.css';
import React, { useState } from 'react';
import Card from '../Card/Card';
import Button from '../Button/Button';

const AddUser = (props: any) => {

    //array destructuring
    //
    const [enteredUsername, setUsername] = useState('');
    const [enteredAge, setAge] = useState(0);


    const addNewUser = (event: any) => {

        event.preventDefault();

        if (enteredUsername.trim().length === 0 || +enteredAge === 0) {
            return;
        }

        props.onAddUser(enteredUsername, enteredAge);

        setUsername('');
        setAge(0);

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
                    <input id="username" type="text" value={enteredUsername} onChange={usernameChangedHandler} />
                    <label htmlFor="age">Age</label>
                    <input id="age" type="number" value={enteredAge} onChange={ageChangedHandler} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    );
};

export default AddUser;
