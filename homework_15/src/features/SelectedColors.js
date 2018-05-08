import React from 'react';

const SelectedColors=(props)=> {
  const doesShow = props.doesShowColor;
  console.log(doesShow);
  return(
    <div className="selected-color">
      {doesShow ?
      <div className="selector-holder-box">
        <div className="selector-holder"></div>
        <div className="selector-holder"></div>
        <div className="selector-holder"></div>
      </div>:
      props.list.splice(-5).map((color, index)=> {
          return <div key={index}
                className="selected"><i className="material-icons"
                style={{ background: color.color }}
                onClick={() => { props.handleClick(color.id) }}>remove_circle</i>
                </div>
      })
      // <div>
      //   <div className="selector-holder selected"></div>
      //   <div className="selector-holder selected"></div>
      //   <div className="selector-holder selected"></div>
      //   <div className="selector-holder selected"></div>
      //   <div className="selector-holder selected"></div>
      // </div>
        }
    </div>
  )
}

export default SelectedColors;