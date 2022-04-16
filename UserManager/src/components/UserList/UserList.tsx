import React from 'react';
import Card from '../Card/Card';

import './UserList.css';

const UserList = (props: any) => {

    return (
        <Card className='users'>
            <ul>
                {props.users.map((user: any) => {
                    return (<li key={user.id}>
                        {user.name}: {user.age} years old.
                    </li>);
                })}
            </ul>
        </Card>
        );
};

export default UserList;