import React, { Component } from 'react';
import Item from './Item';

class Home extends Component {

    render() {
        return this.props.store.map(i=> <Item item={i}/>)

    }
}

export default Home