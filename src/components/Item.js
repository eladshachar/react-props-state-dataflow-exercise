import React, { Component } from 'react';

class Item extends Component {
    render() {
        return <div>{`${this.props.item.item}:${this.props.item.price}`}</div>

    }
}

export default Item