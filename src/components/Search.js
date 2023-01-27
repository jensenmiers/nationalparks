import React from 'react';
import { FaSearch } from 'react-icons/fa'

function Search({searchTerm,handleSearch}){
    return(
        <div className="searchContainer">
            <FaSearch className="searchIcon" />
            <input
                className="searchBox"
                value={searchTerm}
                type='text'
                id='search'
                placeholder='Search by park or activity, e.g. "Yellowstone", "climbing"'
                onChange={(e) => handleSearch(e.target.value)}
            />
        </div>
    )
}

export default Search;