import React, { Component } from 'react';

class Register extends Component {
  render() {
    return (<div id="register">
      {this.props.reservations.map((reservation)=> `${reservation.day} at ${reservation.time} \n`)}
    </div>)
  }
}

export default Register