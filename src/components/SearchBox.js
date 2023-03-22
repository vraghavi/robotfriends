import React from "react";

const SearchBox = ({searchField, searchChange}) =>{
    return (
        <input 
            className="pa3 ba b--green bg-lightest-blue"
            type='search' 
            placeholder='Search Robots'
            onChange={searchChange}/>
    );
}

export default SearchBox;