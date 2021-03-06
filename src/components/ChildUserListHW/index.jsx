import React, { Component } from 'react';
// import users from '../../../public/users.json';
import UserListItem from './UserListItem';
import classNames from 'classnames';
import styles from './ChildUserListHW.module.scss';

function ChildUserListHW (props) {
  const { users, setUsers } = props;
  const mapUser = (user, index) => {
    const onClickHandler = () => {
      //вариант неглубокого копирования массива
      const newUsers = [...users];
      newUsers[index].isSelected = !newUsers[index].isSelected;
      setUsers(newUsers);
    };

    const removeUserHandler = () => {     
      const removeUsers = [...users];
      removeUsers.splice(index, 1);
      setUsers(removeUsers);      
    };

    const addUserLikesHandler = () => {      
      const updateUsers = [...users];
      updateUsers[index].likesCount++;
      setUsers(updateUsers);
    };

    return (
      <UserListItem 
        key={user.id} 
        user={user} 
        onClickHandler={onClickHandler} 
        removeUserHandler={removeUserHandler}
        addUserLikesHandler={addUserLikesHandler}/>
    );
  };

  return <ul className={styles.listContainer}>{users.map(mapUser)}</ul>;
}

export default ChildUserListHW;
