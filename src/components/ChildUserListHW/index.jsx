import React, { Component } from 'react';
// import users from '../../../public/users.json';
import UserListItem from './UserListItem';


function ChildUserListHW (props) {  
    const {users, setUsers } = props;
    const mapUser = (user, index) => {
        
        const onClickHandler = () => {
            //вариант неглубокого копирования массива
            const newUsers = [...users];  
            newUsers[index].isSelected = !newUsers[index].isSelected;          
            setUsers( newUsers );
        };
        return <UserListItem key={user.id} user={user} onClickHandler={onClickHandler}/>;
    };    

    return <ul>{users.map(mapUser)}</ul>;
}

export default ChildUserListHW;
