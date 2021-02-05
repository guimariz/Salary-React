import React, { Component } from 'react';

export default class InputFullSalary extends Component {
  handleInputChange = (event) => {
    const newValue = +event.target.value;
    this.props.onSalaryChange(newValue);
  };
  render() {
    const { currentValue } = this.props;
    return (
      <div>
        <input
          autoFocus
          id="inputFullSalary"
          type="number"
          value={currentValue}
          onChange={this.handleInputChange}
          min="1000"
          step="100"
        />
        <label htmlFor="inputFullSalary">Salário Bruto</label>
      </div>
    );
  }
}
