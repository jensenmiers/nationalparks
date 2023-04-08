import React, { useEffect, useState, useContext } from 'react';
import ParkListItem from './ParkListItem';
import { ParkContext } from '../context/ParkProvider';


function ParkList({ parks, onClickSave, userData }){

    // const [parks, setParks] = useContext(ParkContext)
    const [counter, setCounter] = useState(1)
    const [scrollPosition, setScrollPosition] = useState(0);
    
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const atBottom = scrollPosition >= (document.body.clientHeight-window.innerHeight) * .95
    useEffect(() => {
        if(atBottom) setCounter(prev => prev+1)
    }, [atBottom])

    console.log('atBottom', atBottom)
    console.log('parklist', parks)

    const parkItems = parks.slice(0, (counter)*24).map(park => <ParkListItem key={park['id']} park={park} onClickSave={onClickSave} userData={userData}/> )
    console.log('counter', counter)
    console.log(parks.slice(0, (counter)*24))
    console.log(parkItems)
    return(
        <div className="parkContainer">
            {parkItems}
        </div>
    )
}

export default ParkList;