import React from 'react';
import Screen from '../calculator_screen/screen';
import DeleteBoards from '../calculator_board/delete_boards';
import NumbersBoards from '../calculator_board/numbers_boards';
import OperatorBoards from '../calculator_board/operator_boards';
import Record from '../calculator_board/record';
import './style.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOne: '',
      numberTwo: '',
      operator: '',
      operatorActive: false,
      value: '',
      result: '',
    }
  }

  

  handleScreenNumbers = (i) => {
    const value = this.state.value + i;
    if(this.state.operatorActive == false){
      this.setState({
        numberOne: value,
        value: value});
    } else {
      this.setState({
        numberTwo: value,
        value: value});
    }
  }

  handleScreenClean = (i) => {
    this.setState({
      numberOne: '',
      numberTwo: '',
      operator: '',
      operatorActive: false,
      value: '',
      result: '',
    });
  }

  handleScreenOperator = (i) => {
    this.setState({
      operator: i,
      value: '',
      operatorActive: true
    })
  }

 
  

  

  render() {
    return (
      <div className="Container">
        <div className="CalculatorScreen">
          <Screen displayValue = {this.state.value}/>
        </div>
        <div className="CalculatorBoard">
          <div className="Buttons">
            <DeleteBoards onClick={(i) =>this.handleScreenClean(i)}/>
            <NumbersBoards onClick={(i) => this.handleScreenNumbers(i)}/>
            <OperatorBoards onClick={(i) => this.handleScreenOperator(i)}/>
          </div>
          <Record />
        </div>
      </div>
    )
  }
}