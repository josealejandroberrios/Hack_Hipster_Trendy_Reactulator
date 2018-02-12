import React from 'react';
import Screen from '../calculator_screen/screen';
import DeleteBoards from '../calculator_board/delete_boards';
import NumbersBoards from '../calculator_board/numbers_boards';
import OperatorBoards from '../calculator_board/operator_boards';
import Record from '../calculator_board/record';
import './style.scss';

export default class App extends React.Component {

  render() {
    return (
      <div className="Container">
        <div className="CalculatorScreen">
          <Screen />
        </div>
        <div className="CalculatorBoard">
          <div className="Buttons">
            <DeleteBoards />
            <NumbersBoards />
            <OperatorBoards />
          </div>
          <Record />
        </div>
      </div>
    )
  }
}