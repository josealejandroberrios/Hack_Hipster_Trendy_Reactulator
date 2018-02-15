import React from 'react';
import './style.scss';

export default class Button extends React.Component {
  render() {
    return (
      <button value={this.props.value} className="Button" onClick={() => this.props.onClick()}>
        {this.props.value}   
      </button>
    );
  }
}

// onChange={(e) => valueChange({value: event.target.value})}



// onClick={() => this.props.onClick}

// PARA AGREGAR LUEGO EN PROPS
// onClick={()=> {props.onClick()}} 