import React, { Component } from 'react';

class Calendar extends Component {
  render() {
    return (
      <div id="calendar">
        {this.props.reservations.map((reservation)=> `${reservation.name} has a reservation on ${reservation.day} at ${reservation.time}, \n\n`)}
      </div>
    )
  }
}

export default Calendar