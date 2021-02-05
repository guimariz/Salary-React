import React, { Component } from 'react';
import { formatPercentage, formatMoney } from '../helpers/formatters';

export default class InputReadOnly extends Component {
  render() {
    const { color = 'black', value, percentage = 0, label } = this.props;

    const formattedPercentage =
      percentage > 0 ? `(${formatPercentage(percentage)})` : '';
    const formattedValue = `${formatMoney(value)} ${formattedPercentage}`;
    return (
      <div>
        <input autoFocus id="inputReadOnly" value={formattedValue} readOnly />
        <label htmlFor="inputFullSalary">{label}</label>
      </div>
    );
  }
}
