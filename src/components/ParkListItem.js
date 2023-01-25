import React from 'react';
import { Link } from 'react-router-dom'

function ParkListItem({park, onClickSave}){


    return(
        <div>
        
                <h5>{park['Location Name']}</h5>
                <Link to={`/parks/${park['id']}`}>See more</Link> 
                <button onClick={() => onClickSave(park)}>Save Park</button>

        </div>
    )
}

export default ParkListItem;