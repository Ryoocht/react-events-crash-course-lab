import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    const x = event.clientX;
    const y = event.clientY;
    drawChromeBoiAtCoords(x, y);
  }
  
  handleToggleCycling = () => {
    toggleCycling();
  } 
   
  handleKeyPress = (event) => {
    const k = event.key;
    const increase = "+";
    const decrease = "-";

    if(k === "a"){
      resize(increase);
    } else if(k === "s"){
      resize(decrease);
    } else {
      console.log("neither");
    }
  }
  
  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        onClick={this.handleToggleCycling}
        onKeyPress={this.handleKeyPress}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
