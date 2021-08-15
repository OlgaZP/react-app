import React from 'react';

function ChildSelectedUsersListHW(props) {
    const { users } = props;
    const selectedUsers = users.filter( user => user.isSelected);

    const mapUsers = ({id, firstName, lastName})=> (
    <li key={id}>
        {firstName} {lastName}
    </li>
    );
    
    return <ol>{selectedUsers.map(mapUsers)}</ol>;
}

export default ChildSelectedUsersListHW
