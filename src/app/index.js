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
      value: '0',
      result: '',
    }
  }
  
  handleScreenNumbers = (i) => { 
    const value = this.state.value + i;
    if (i == '=') {
      this.calculate();
    } else {
      if (this.state.value == '0'){
        if (i == ','){
          if(this.state.operatorActive == false){
            this.setState({
              numberOne: value,
              value: value
            });
          } else {
            this.setState({
              numberTwo: value,
              value: value
            });
          }   
        } else { 
          if(this.state.operatorActive == false){
            this.setState({
              numberOne: i,
              value: i
            });
          } else {
            this.setState({
              numberTwo: i,
              value: i
            });
          }   
        }
      } else { 
        if(this.state.operatorActive == false){
          this.setState({
            numberOne: value,
            value: value
          });
        } else {
          this.setState({
            numberTwo: value,
            value: value
          });
        }   
      }  
    }
  }
    
 
  calculate = () => {
    let result = this.state.result;
    switch(this.state.operator){
      case '/':
        result = parseFloat(this.state.numberOne) / parseFloat(this.state.numberTwo);
        break;
      case 'x':
        result = parseFloat(this.state.numberOne) * parseFloat(this.state.numberTwo);
        break;
      case '+':
        result = parseFloat(this.state.numberOne) + parseFloat(this.state.numberTwo);
        break;
      case '-':
        result = parseFloat(this.state.numberOne) - parseFloat(this.state.numberTwo);
        break;
    }
    this.setState({
      value: result,
      result: result

    })


  }

  handleScreenClean = (i) => {
    if (i == 'DEL') {
      let value = this.state.value.slice(0, length -1);
      if(this.state.operatorActive == false){
        this.setState({
          numberOne: value,
          value: value
        });
      } else {
        this.setState({
          numberTwo: value,
          value: value
        });
      } 
    } else {
      this.setState({
        numberOne: '',
        numberTwo: '',
        operator: '',
        operatorActive: false,
        value: '0',
      });
    }
    
  }

  handleScreenOperator = (i) => {
    this.setState({
      operator: i,
      value: '0',
      operatorActive: true
    });
    
  }

 
  

  

  render() {
    return (
      <div className="Container">
        <Screen displayValue = {this.state.value} displayOperator = {this.state.operator}/>
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