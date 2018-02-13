import React from 'react';
import './style.scss';

export default class Screen extends React.Component {
  render() {
    return (
      <div className="CalculatorScreen">
        <h1>{this.props.displayOperator}</h1>
        <h1>{this.props.displayValue}</h1>
      </div> 
    )
  }
}