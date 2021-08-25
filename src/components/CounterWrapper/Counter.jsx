import React, { PureComponent } from 'react';

export default class Counter extends PureComponent {
  constructor (props) {
    super(props);

    this.state = {
      currNum: 0,
    };
  }

  shouldComponentUpdate (nextProps, nextState) {
    return this.props.step === nextProps.step;
  }

  addOne = () => {
    const { currNum } = this.state;
    const { step } = this.props;

    this.setState({ currNum: currNum + step });
  };
  minusOne = () => {
    const { currNum } = this.state;
    const { step } = this.props;

    this.setState({ currNum: currNum - step });
  };

  render () {
    const { currNum } = this.state;
    console.log('rerender :>> ');
    return (
      <div>
        <div>{currNum}</div>
        <button onClick={this.addOne}> + </button>
        <button onClick={this.minusOne}> - </button>
      </div>
    );
  }
}
