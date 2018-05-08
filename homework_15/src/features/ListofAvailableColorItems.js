import React, { Component } from 'react';


class ListofAvailableColorItems extends Component {
  render() {
    let color = this.props.color;
    return(
      <div className="color-item" style={{ background: this.props.color}} id={this.props.id} >
      <button className="add-button" onClick={()=>this.props.onClick(this.props.color)}>
      <i className="material-icons">add</i> Add</button>
      {this.props.text}
      </div>
    )

  }
}


export default ListofAvailableColorItems;