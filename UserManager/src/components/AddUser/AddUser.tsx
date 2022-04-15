import './AddUser.css';
import React from 'react';
import Card from '../Card/Card';

const AddUser = (props: any) => {

    const addNewUser = (event: any) => {
        event.preventDefault();

    }

    return (
        <div>
            <Card className="input">
                <form onSubmit={addNewUser}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" />
                    <label htmlFor="age">Age</label>
                    <input id="age" type="number" />
                    <button type="submit">Add User</button>
                </form>
            </Card>
        </div>
    );
};

export default AddUser;
