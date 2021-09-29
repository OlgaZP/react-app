import React, { Component } from 'react';
import ChildUserListHW from './../ChildUserListHW';
import ChildSelectedUsersListHW from './../ChildSelectedUsersListHW';

const dbUsers = [
  {
    id: 1,
    firstName: 'Test',
    lastName: 'Testovich',
    age: 22,
    imgSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4vHwf_WqQW7lAjOAsNDwrzeJer1Bg863H1Q&usqp=CAU',
  },
  {
    id: 2,
    firstName: 'Test2',
    lastName: 'Testovich2',
    age: 23,
    imgSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&usqp=CAU',
  },
  {
    id: 3,
    firstName: 'Test3',
    lastName: 'Testovich3',
    age: 33,
    imgSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHb5E-6pACzAQpvomgdRjR88d9cwwPMnBa4Q&usqp=CAU',
  },
];

export default class ParentUsersListHW extends Component {
  constructor (props) {
    super(props);

    this.state = {
      users: dbUsers.map(u => ({ ...u, isSelected: false })),
    };
  }

  setUsers = newUsers => {
    this.setState({ users: newUsers });
    console.log(' Users from parent component :>> ', this.state.users);
  };

  render () {
    const { users } = this.state;
    return (
      <div>
        <ChildUserListHW users={users} setUsers={this.setUsers} />
        <ChildSelectedUsersListHW users={users} />
      </div>
    );
  }
}
