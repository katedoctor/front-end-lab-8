import React, { Component } from 'react';

class ColorItems extends Component {
  HandlerClick(props) {
    return (
      <div style={{background:this.props.color}}>bbbbbb</div>
    )
  }
  render() {
    return(
      <div className="color-item" style={{ background: this.props.color, width: '200px' }} ><a href='#' onClick={() => this.HandlerClick(this.props.color)}>add</a>
        {this.props.color}
      </div>
    )
  }
}


export default ColorItems;