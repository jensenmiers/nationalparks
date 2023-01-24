import React from 'react';

function ParkItem(props){

    
    return(
        <div>
            <li>
                <h5>{props['Location Name']}</h5>
            </li>

        </div>
    )
}

export default ParkItem;