import React, { useState, useEffect } from 'react';
import { loadUsers } from '../../api';

function UsersLoader () {
  const [users, setUsers] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [isError, setIsError] = useState(false);
  const [currPage, setCurrPage] = useState(1);

  const load = () => {
    setIsFetching(true);
    loadUsers({ page: currPage, seed: 'PE2021-1' })
      .then(data => {
        setUsers(data.results);
      })
      .catch(err => {
        setIsError(true);
      })
      .finally(() => {
        setIsFetching(false);
      });
  };

  const PrevPageHandler = e => {
    if (currPage > 1) {
      setCurrPage(currPage - 1);
    }
  };

  const NextPageHandler = e => {
    setCurrPage(currPage + 1);
  };

  useEffect(() => {
    load();
  }, [currPage]);

  return (
    <div>
      {isError && <div>!! ERROR !!</div>}
      {isFetching && <div>Waiting.. Loading Process..</div>}
      <button onClick={PrevPageHandler}> {'<'} </button>
      <button onClick={NextPageHandler}> {'>'} </button>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{JSON.stringify(user)}</li>
        ))}
      </ul>
    </div>
  );
}

export default UsersLoader;
