import React, { useEffect, useState } from 'react';
import ParkListItem from './ParkListItem';


function ParkList({parks, onClickSave }){


    const parkItems = parks.slice(0,24).map(park => <ParkListItem key={park['id']} park={park} onClickSave={onClickSave} /> )

    console.log("window height", window.innerHeight)
    // const atBottom = window.scrollY/window.innerHeight > .9
    
    // useEffect(()=>{
    //     setIsAtBottom(window.scrollY/window.innerHeight > .9)
    // }, [window.scrollY])

    return(
        <div className="parkContainer">
            {parkItems}
        </div>
    )
}

export default ParkList;