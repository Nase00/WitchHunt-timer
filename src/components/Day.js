import React from 'react';

export default class Day extends React.Component {
  render() {
    const {
      incrementDay,
      decrementDay,
      resetDay,
      day
    } = this.props;
    return (
      <p>
        Day: {day}
        {' '}
        <button onClick={incrementDay}>Increment Day</button>
        {' '}
        <button onClick={decrementDay}>Decrement Day</button>
        {' '}
        <button onClick={resetDay}>Reset Day</button>
        {' '}
      </p>
    );
  }
}
