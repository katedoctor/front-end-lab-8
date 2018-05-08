import React, { Component } from 'react';


class ListofAvailableColorItems extends Component {
  render() {
    let color = this.props.color;
    let selectedColors = this.props.selectedColors;

    return(
      <div className="color-item" style={{ background: this.props.color}} id={this.props.id} >
      {selectedColors.length > 10 ?
          <button className="add-button" onClick={() => this.props.onClick(color)} disabled>
            <i className="material-icons">add</i>Add</button> :
          <button className="add-button" onClick={() => this.props.onClick(color)} >
            <i className="material-icons">add</i>Add</button>
      }

      </div>
    )

  }
}


export default ListofAvailableColorItems;
