import React from 'react';
import './style.scss';

export default class Screen extends React.Component {
  render() {
    return (
      <h1>{this.props.displayValue}</h1>
    )
  }
}