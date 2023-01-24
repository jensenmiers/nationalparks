import React from 'react';

function Search({searchTerm,handleSearch}){
    return(
        <div>
            <label>Search Parks: </label>
            <input
                value={searchTerm}
                type='text'
                id='search'
                placeholder='Type a park name...'
                onChange={(e) => handleSearch(e.target.value)}
            />
        </div>
    )
}

export default Search;