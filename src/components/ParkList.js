import React from 'react';
import ParkListItem from './ParkListItem';


function ParkList({parks, onClickSave }){


    const parkItems = parks.map(park => <ParkListItem key={park['Location Number']} park={park} onClickSave={onClickSave} /> )

    return(
        <div>
            {parkItems}
        </div>
    )
}

export default ParkList;