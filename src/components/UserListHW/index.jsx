import React, { Component } from 'react';
// import users from '../../../public/users.json';
import UserListItem from './UserListItem';

const dbUsers = [{
    "id": 1,
    "firstName": "Test",
    "lastName": "Testovich",
    "age": 22,
    "imgSrc": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4vHwf_WqQW7lAjOAsNDwrzeJer1Bg863H1Q&usqp=CAU"
  },
  {
    "id": 2,
    "firstName": "Test2",
    "lastName": "Testovich2",
    "age": 23,
    "imgSrc": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&usqp=CAU"
  },
  {
    "id": 3,
    "firstName": "Test3",
    "lastName": "Testovich3",
    "age": 33,
    "imgSrc": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHb5E-6pACzAQpvomgdRjR88d9cwwPMnBa4Q&usqp=CAU"
  },
];

class UserListHW extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             users: dbUsers.map(u => ({...u, isSelected: false})),
        };
        this.isSortAsc = true;
    }    
    
    sortUsers = () => {
        const { users } = this.state;
        const newUsers = users.sort((a, b) => {
            if (a.id < b.id) {
                return this.isSortAsc ? -1 : 1;
            }
            if (a.id > b.id) {
                return this.isSortAsc ? 1 : -1;
            }
            return 0;
        });
        this.setState({ users: newUsers });
        this.isSortAsc = !this.isSortAsc;
    };

    mapUser = (user, index) => {
        const {users} = this.state;
        const onClickHandler = () => {
            //вариант неглубокого копирования массива
            const newUsers = [...users];
            newUsers[index].isSelected = !newUsers[index].isSelected;
            this.setState({ users : newUsers});
        };
        return (
        <UserListItem key={user.id} user={user} onClickHandler={onClickHandler}/>
        );
    };

    render() {
        const { users } = this.state;
        return  (
            <>
            <button onClick={this.sortUsers}>Sort by id</button>
            <ul>{users.map(this.mapUser)}</ul>);
            </>
        );
    }
}

export default UserListHW;
