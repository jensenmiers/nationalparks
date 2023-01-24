import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom'

function ParkItem(props){
    
    const match = useRouteMatch()

    return(
        <div>
            <li>
                <h5>{props['Location Name']}</h5>
                <Link to={`${match.url}/${props['Location Number']}`}>See more</Link> 
            </li>

        </div>
    )
}

export default ParkItem;