import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserListItem, { usersPropStructure } from './UserListItem';

function ChildUsersList (props) {
  const { users, setUsers } = props;

  const mapUser = (user, index) => {
    const onClickHandler = () => {
      const newUsers = [...users];
      newUsers[index].isSelected = !newUsers[index].isSelected;
      setUsers(newUsers);
    };

    return (
      <UserListItem key={user.id} user={user} onClickHandler={onClickHandler} />
    );
  };
  //UserListItem({user:user})

  return (
    <>
      <ul>{users.map(mapUser)}</ul>
    </>
  );
}

ChildUsersList.propTypes = {
  users: PropTypes.arrayOf(usersPropStructure).isRequired,
  setUsers: PropTypes.func.isRequired,
};

export default ChildUsersList;
