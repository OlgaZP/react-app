import React, { Component } from 'react';

export default class PhonesProvider extends Component {
  constructor (props) {
    super(props);

    this.state = {
      phones: [],
      isFetching: false,
      error: null,
    };
  }

  componentDidMount () {
    fetch('/phones.json')
      .then(res => res.json())
      .then(data => this.setState({ phones: data }))
      .catch(err => this.setState({ error: err }))
      .finally(() => {
        this.setState({ isFetching: false });
      });
  }

  render () {
    const { phones, isFetching, error } = this.state;
    return (
      <>
        {isFetching && <div>Loading...</div>}
        {error && <div>EROOR</div>}
        <ul>
          {phones.map(p => (
            <li key={p.id}>
              {p.brand} {p.model}: {p.price}
            </li>
          ))}
        </ul>
      </>
    );
  }
}
