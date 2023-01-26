import React from 'react';
import { FaSearch } from 'react-icons/fa'

function Search({searchTerm,handleSearch, zipSearchTerm, handleZipSearch}){
    return(
        <div className="searchContainer">
            <FaSearch className="searchIcon" />
            <input
                className="searchBox"
                value={searchTerm}
                type='text'
                id='search'
                placeholder='Search by park name...'
                onChange={(e) => handleSearch(e.target.value)}
            />
            <input
                className="zipSearchBox"
                value={zipSearchTerm}
                type='text'
                id='zip'
                placeholder='Search by ZIP ...'
                onChange={(e) => handleZipSearch(e.target.value)}
            />
            <button onClick={console.log}>Find stuff near me!</button>
        </div>
    )
}

export default Search;