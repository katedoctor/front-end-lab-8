import React from 'react';

const SelectedColors = (props) => {
  const doesShow = props.doesShowColor;
  return(
    <div className="selected-color">
      {doesShow ?
      <div className="selector-holder-box">
        <div className="selector-holder"></div>
        <div className="selector-holder"></div>
        <div className="selector-holder"></div>
      </div>:
         props.list.slice(-5).map((color, index)=> {
          return <div key={index} className="selected" style={{ background: color }}>
                    <i className="material-icons delete"
                    onClick={() => {props.onClick(color.color)}}>
              clear</i>
          </div>})
        }
    </div>
  )
}

export default SelectedColors;