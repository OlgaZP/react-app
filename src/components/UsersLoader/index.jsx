import React, { Component } from 'react';
import { loadUsers } from '../../api';

class UsersLoader extends Component {
  constructor (props) {
    super(props);

    this.state = {
      users: [],
      isFetching: false,
      isError: false,
      currPage: 1,
    };
  }

  componentDidMount () {
    this.load();
  }

  componentDidUpdate (prevProps, prevState) {
    const { currPage } = this.state;

    if (currPage !== prevState.currPage) {
      this.load();
    }
  }

  load = () => {
    const { currPage } = this.state;

    this.setState({ isFetching: true });
    loadUsers({ page: currPage, seed: 'PE2021-1' })
      .then(data => {
        this.setState({ users: data.results });
      })
      .catch(err => {
        this.setState({ isError: true });
      })
      .finally(() => {
        this.setState({ isFetching: false });
      });
  };

  PrevPageHandler = e => {
    const { currPage } = this.state;
    if (currPage > 1) {
      this.setState({ currPage: currPage - 1 });
    }
  };

  NextPageHandler = e => {
    const { currPage } = this.state;
    this.setState({ currPage: currPage + 1 });
  };

  render () {
    const { users, isError, isFetching } = this.state;

    return (
      <div>
        {isError && <div>!! ERROR !!</div>}
        {isFetching && <div>Waiting.. Loading Process..</div>}
        <button onClick={this.PrevPageHandler}> {'<'} </button>
        <button onClick={this.NextPageHandler}> {'>'} </button>
        <ul>
          {users.map((user, index) => (
            <li key={index}>{JSON.stringify(user)}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersLoader;
