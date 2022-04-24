
import React, { useState }  from 'react';
import AddUser from '../AddUser/AddUser';
import UserList from '../UserList/UserList';

function App() {

    const baeArray: User[] = [];

    const [usersList, setUsersList] = useState(baeArray);

    const addUserHandler = (userName: string, userAge: number) => {
        setUsersList((previousUserList: User[]) => {
        let newPerson: User = { name: userName, age: userAge, id: Math.random().toString() };
            return [...previousUserList, newPerson];
        });
    }

    return (
        <>
            <AddUser onAddUser={addUserHandler}></AddUser>
            <UserList users={usersList}></UserList>
        </>
  );
}

export default App;

export interface User {
    name: string;
    age: number;
    id: string;
}
