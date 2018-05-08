import React, { Component } from 'react';


class ListofAvailableColorItems extends Component {
  render() {
    let color = this.props.color;
    let showColor = this.props.showColor;

    return(
      <div className="color-item" style={{ background: this.props.color}} id={this.props.id} >
      {showColor.length < 11 ?
          <button className="add-button" onClick={() => this.props.onClick(color)} disabled>
            <i className="material-icons">add</i>Add</button> :
          <button className="add-button" onClick={() => this.props.onClick(color)} >
            <i className="material-icons">add</i>Add</button>
      }

      {this.props.text}
      </div>
    )

  }
}


export default ListofAvailableColorItems;