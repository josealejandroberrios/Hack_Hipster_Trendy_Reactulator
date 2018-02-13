import React from 'react';
import Button from '../button'
import './style.scss';

export default class DeleteBoards extends React.Component {
  renderButton(i) {
    return <Button value={i} onClick={() => this.props.onClick(i)}/> ;
  } 

  render() {
    return(
      <div className="Delete">
        {this.renderButton('AC')}
        {this.renderButton('DEL')}
      </div>
    );
  }
}

// PARA AGREGAR LUEGO EN PROPS
// onClick={() => this.props.onClick(i)}