import React, {Component} from 'react';

class SelectedColors extends Component {
  render() {
    return (
      <div className="selected-color" style={{background:this.props.color}}>
      aaaaaaaaa
      {this.props.color}
      </div>
    )
  }
}

export default SelectedColors;