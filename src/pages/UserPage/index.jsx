import React, { Component } from 'react';
import UserPageHeader from '../../components/UserPageHeader';
import UserPageSidebar from '../../components/UserPageSidebar';

export default class UserPage extends Component {
  render () {
    return (
      <div
        style={{
          border: '2px solid darkblue',
          width: '600px',
          height: '400px',
        }}
      >
        <UserPageHeader />

        <UserPageSidebar />
      </div>
    );
  }
}
