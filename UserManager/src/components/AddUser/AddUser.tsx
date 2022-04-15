import './AddUser.css';
import React from 'react';
import Card from '../Card/Card';
import Button from '../Button/Button';

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
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    );
};

export default AddUser;
