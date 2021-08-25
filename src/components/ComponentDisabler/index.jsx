import React, { Component } from 'react';
import StopWatch from '../StopWatch';

class ComponentDisabler extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isHidden: true,
      // text: 'Hide',
    };
  }

  changeMode = ({ target }) => {
    const { isHidden } = this.state;
    this.setState({
      isHidden: !isHidden,
    });
  };

  render () {
    const { isHidden } = this.state;
    return (
      <>
        <button onClick={this.changeMode}>{isHidden ? 'Show' : 'Hide'}</button>
        {/* вариант решения "в лоб" */}
        {/* {isHidden ? null :<StopWatch/>} */}
        {/* лучшее решение */}
        {!isHidden && <StopWatch />}
      </>
    );
  }
}

export default ComponentDisabler;
