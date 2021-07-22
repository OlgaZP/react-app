import React, { Component } from 'react';
import Counter from './Counter';

export default class CounterWrapper extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             step: 1,
        }
    }

    changeStepHadle = ({target : {value}}) => {
        this.setState({step: Number(value)});
    };
    
    render() {
        const {step} = this.state;
        return <>
        <div>Step: {step} </div>
        <input type="range" value={step} onChange={this.changeStepHadle}></input>
        <Counter step={step} />
        </>;
    }
}

