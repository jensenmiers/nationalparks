import React from 'react';
import ParkListItem from './ParkListItem';


function ParkList({parks, onClickSave }){


    const parkItems = parks.slice(0,20).map(park => <ParkListItem key={park['id']} park={park} onClickSave={onClickSave} /> )

    return(
        <div className="parkContainer">
            {parkItems}
        </div>
    )
}

export default ParkList;