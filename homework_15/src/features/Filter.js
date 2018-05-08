import React from 'react';

const Filter = (props) => {
    return(
      <div className="search-form">
        <input type="text" onChange={props.onChange}
          placeholder="Color's name, tags"
          className="search-input"/>
      </div>
    )
  }


export default Filter;