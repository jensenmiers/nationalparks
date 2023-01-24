import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom'

function ParkListItem(props){

    
    const match = useRouteMatch()

    return(
        <div>
        
                <h5>{props['Location Name']}</h5>
                <Link to={`${match.url}/${props['Location Number']}`}>See more</Link> 
        

        </div>
    )
}

export default ParkListItem;