import React from 'react';
import Button from '../button'
import './style.scss';

export default class OperatorBoards extends React.Component {
  renderButton(i) {
    return <Button value={i} onClick={() => this.props.onClick(i)}/>;
  } 

  render() {
    return(
      <div className="Operator">
        {this.renderButton('/')}
        {this.renderButton('x')}
        {this.renderButton('+')}
        {this.renderButton('-')}
      </div>
    );
  }
}