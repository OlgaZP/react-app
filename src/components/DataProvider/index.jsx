import React, { Component } from 'react';

export default class DataProvider extends Component {
  constructor (props) {
    super(props);

    this.state = {
      data: [],
      isFetching: false,
      error: null,
    };
  }

  componentDidMount () {
    this.setState({ isFetching: true });
    fetch(this.props.fileName)
      .then(res => res.json())
      .then(data => this.setState({ phones: data }))
      .catch(err => this.setState({ error: err }))
      .finally(() => {
        this.setState({ isFetching: false });
      });
  }

  render () {
    const { data, isFetching, error } = this.state;
    const { children } = this.props;
    const layout = children({ ...this.state });
    return layout;
  }
}
