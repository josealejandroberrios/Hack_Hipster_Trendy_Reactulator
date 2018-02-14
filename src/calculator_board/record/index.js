import React from 'react';
import './style.scss';

export default class Record extends React.Component {
  render() {
    const record = this.props.record.map((operation) => (
         <h1 key={operation.id} className="h1Record">
          <span>
            {Intl.NumberFormat("de-DE").format(operation.numberOne) + ' ' + operation.operator + ' ' + Intl.NumberFormat("de-DE").format(operation.numberTwo) + ' = ' + Intl.NumberFormat("de-DE").format(operation.result)}
          </span>
        </h1>
    )); 

    return (
      <div className="Record">
        <h1>RECORD</h1>
        <div className="ScreenRecord">
          {record}
        </div>
      </div>
    )
  }
}