import React, { Component } from 'react';

class Article extends Component {
  render() {
    return <h4>{this.props.color} {this.props.type}</h4>

  }
}

export default Article