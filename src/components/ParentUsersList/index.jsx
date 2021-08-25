import React, { Component } from 'react';
import ChildUsersList from '../ChildUsersList';
import ChildSelectedUsersList from './../ChildSelectedUsersList';

const dbUsers = [
  { id: 1, firstName: 'Name 1', lastName: 'Surname 1' },
  { id: 20, firstName: 'Name 2', lastName: 'Surname 2' },
  { id: 3, firstName: 'Name 3', lastName: 'Surname 3' },
  { id: 4, firstName: 'Name 4', lastName: 'Surname 4' },
];

class ParentUsersList extends Component {
  constructor (props) {
    super(props);

    this.state = {
      //users: [1, 2, 3, 4, 5, 6],
      users: dbUsers.map(u => ({ ...u, isSelected: false })),
    };
  }

  setUsers = newUsers => {
    this.setState({ users: newUsers });
  };

  render () {
    const { users } = this.state;
    return (
      <>
        <ChildUsersList users={users} setUsers={this.setUsers} />
        <ChildSelectedUsersList users={users} />
      </>
    );
  }
}

export default ParentUsersList;
