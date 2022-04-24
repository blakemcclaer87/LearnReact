import './AddUser.css';
import React, { useState, useRef } from 'react';
import Card from '../Card/Card';
import Button from '../Button/Button';
import ErrorModal from '../ErrorModal/ErrorModal'
import Wrapper from '../Helpers/Wrapper';

const AddUser = (props: any) => {

    //set u[p ref hooks
    //
    const nameInputRef = useRef<HTMLInputElement>(null);
    const ageInputRef = useRef<HTMLInputElement>(null);

    const initiqlError: Error = { title: '', message: '' };

    //array destructuring
    //
    const [enteredUsername, setUsername] = useState('');
    const [enteredAge, setAge] = useState(0);
    const [error, setError] = useState(initiqlError);

    const addNewUser = (event: any) => {

        event.preventDefault();

        if (enteredUsername.trim().length === 0 || +enteredAge === 0) {
            let errorItem: Error = {
                title: 'Invalid user input.',
                message: 'plkease provide a value for name and an age > 0.'
            }

            setError(errorItem);

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

    const errorHandler = () =>  {
        let errorItem: Error = {
            title: '',
            message: ''
        };

        setError(errorItem);
    }

    return (
        <Wrapper>
            {error && error.message.trim().length > 0 && <ErrorModal onDismiss={errorHandler} title={error.title} message={error.message}></ErrorModal>}
            <Card className="input">
                <form onSubmit={addNewUser}>
                    <label htmlFor="username">Username</label>
                    <input id="username" 
                    ref={nameInputRef}
                    type="text" 
                    value={enteredUsername} 
                    onChange={usernameChangedHandler} />
                    <label htmlFor="age">Age</label>
                    <input 
                    id="age" 
                    ref={ageInputRef}
                    type="number" 
                    value={enteredAge} 
                    onChange={ageChangedHandler} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    );
};

export default AddUser;

export interface Error{
    title: string;
    message: string;
}
