import React from 'react';
import './style.scss';

export default class Button extends React.Component {
  render() {
    return (
      <button className="Button">
        {this.props.value}   
      </button>
    );
  }
}



// PARA AGREGAR LUEGO EN PROPS
// onClick={()=> {props.onClick()}} 