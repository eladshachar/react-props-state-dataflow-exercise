import React, { Component } from 'react';

class Landing extends Component {
    /* your code here */


    render() {
        return <div>{`Welcome, ${this.props.user}. The hottest item is ${this.props.hottest[0].item} for $${this.props.hottest[0].price}`}</div>

    }
}

export default Landing