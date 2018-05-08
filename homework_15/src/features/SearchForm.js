import React from 'react';

const SearchForm = (props) => {
    return(
      <div className="seach-form">
      <input type="text" onChange={props.onChange}
      placeholder="Color's name, tags"
      className="search-input"/>
      </div>
    )
  }


export default SearchForm;