import Article from "./Article";
import React, { Component } from 'react';

class Wardrobe extends Component {
  render() {
    let wardrobe = [
      { type: "shirt", color: "red", size: "Medium" },
      { type: "shirt", color: "blue", size: "Medium" },
      { type: "pants", color: "blue", size: "Medium" },
      { type: "accessory", color: "sapphire", size: "" },
      { type: "accessory", color: "lilac", size: "" },
    ]

    return wardrobe.map((item) => <Article type={item.type} color={item.color} size={item.size}/>)

  }
}

export default Wardrobe