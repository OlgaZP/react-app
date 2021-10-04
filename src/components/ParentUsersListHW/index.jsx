import React, { Component } from 'react';
import ChildUserListHW from './../ChildUserListHW';
import ChildSelectedUsersListHW from './../ChildSelectedUsersListHW';

const dbUsers = [
  {
    id: 1,
    firstName: 'Pink',
    lastName: 'Panter',
    age: 58,
    imgSrc:
      'https://seeklogo.com/images/P/pink-panther-logo-9961AB69EB-seeklogo.com.png',
  },
  {
    id: 2,
    firstName: 'Mickey',
    lastName: 'Mouse',
    age: 93,
    imgSrc:
      'https://www.komar.de/ru/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/W/B/WB036_1573143316.jpg',
  },
  {
    id: 3,
    firstName: 'Lion',
    lastName: 'King',
    age: 27,
    imgSrc:
      'https://i.pinimg.com/736x/b0/19/10/b019106a4fdc4216946d7871f6a276ff.jpg',
  },
  {
    id: 4,
    firstName: 'Jerry',
    lastName: 'Mouse',
    age: 81,
    imgSrc:
      'https://i.dlpng.com/static/png/246144_preview.png',
  },
  {
    id: 5,
    firstName: 'Winney',
    lastName: 'the Pooh',
    age: 96,
    imgSrc:
      'https://www.pngfind.com/pngs/m/35-350404_free-png-winnie-the-pooh-png-images-transparent.png',
  },
];

export default class ParentUsersListHW extends Component {
  constructor (props) {
    super(props);

    this.state = {
      users: dbUsers.map(u => ({ ...u, isSelected: false, likesCount: 0 })),
    };
  }

  setUsers = newUsers => {
    this.setState({ users: newUsers });
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
