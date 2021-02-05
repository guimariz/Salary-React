import React, { Component } from 'react';

export default class InputReadOnly extends Component {
  render() {
    const { color = 'black', value, percentage = 0, label } = this.props;

    const formattedPercentage = percentage > 0 ? `(${percentage})` : '';
    const formattedValue = `${value} ${formattedPercentage}`;
    return (
      <div>
        <input
          className="input-field col s12 m6 l3"
          autoFocus
          id="inputReadOnly"
          value={formattedValue}
          readOnly
        />
        <label className="active" htmlFor="inputFullSalary">
          {label}
        </label>
      </div>
    );
  }
}
