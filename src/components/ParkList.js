import React from 'react';
import ParkItem from './ParkItem';


function ParkList({parks}){
    
    const parkItems = parks.map(park => <ParkItem key={park['Location Number']} {...park} /> )
    
    return(
        <div>
            <ul>
                {parkItems}
            </ul>

        </div>
    )
}

export default ParkList;