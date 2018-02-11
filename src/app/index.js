import React from 'react';
import Screen from '../screen';
import ButtonsBoard from '../buttons_board';
import Record from '../record';
import './style.scss';

export default class App extends React.Component {

  render() {
    return (
      <div className="Container">
        <div className="CalculatorScreen">
          <Screen />
        </div>
        <div className="CalculatorBoard">
          <ButtonsBoard />
          <Record />
        </div>
      </div>
    )
  }
}