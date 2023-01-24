import React from 'react';
import ParkListItem from './ParkListItem';


function ParkList({parks}){

    const parkItems = parks.map(park => <ParkListItem key={park['Location Number']} {...park} /> )

    return(
        <div>
            {parkItems}
        </div>
    )
}

export default ParkList;