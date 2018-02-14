import React from 'react';
import Button from '../button'
import './style.scss';

export default class NumbersBoards extends React.Component {
  renderButton(i) {
    return <Button value={i} onClick={() => this.props.onClick(i)}/>;
  } 

  render() {
    return(
      <div className="Numbers">
        <div className="NumbersRow">
          {this.renderButton('9')}
          {this.renderButton('8')}
          {this.renderButton('7')}
        </div>
        <div className="NumbersRow">
          {this.renderButton('6')}
          {this.renderButton('5')}
          {this.renderButton('4')}
        </div>
        <div className="NumbersRow">
          {this.renderButton('3')}
          {this.renderButton('2')}
          {this.renderButton('1')}
        </div>
        <div className="NumbersRow">
          {this.renderButton('0')}
          {this.renderButton('.')}
          {this.renderButton('=')}
        </div>
      </div>
    );
  }
}