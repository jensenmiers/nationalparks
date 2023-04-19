import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';

function ParkListItem({ park, onClickSave, userData }){
    const parkImgObj = park.images?.length >0 ? park.images[0] : {url: 'none', title: 'image not found'}
    const [isDescriptionHidden, toggleDescriptionHidden] = useState(true)
    const [isSaved, setIsSaved] = useState(userData.savedParks?.map(item=>item.toLowerCase()).includes(park.id.toLowerCase()))

    function findCostUnits(parkObj){
        if (!parkObj?.entranceFees) return 0
        const cost = parkObj.entranceFees[0]?.cost
        return Math.ceil(cost/10)
    }

    const costUnits = findCostUnits(park)

    return(
        <div className='parkCard'>
                <div className='parkContent'>
                    <div className='bookmark' onClick={() => {
                        onClickSave(park, isSaved)
                        setIsSaved(prevValue => !prevValue)
                    }}>
                        {isSaved ? <FaBookmark /> : <FaRegBookmark />}
                    </div>
                    <div className="parkCardTitle">
                        <strong>{park['Location Name']}</strong>
                    </div>
                    
                    <div className={isDescriptionHidden ? "parkDescriptionCompact":"parkDescription"}>                    
                        <p>{park.description}</p>
                    </div>
                    <div className='parkCardLink'>
                        <Link to={`/parks/${park['id']}`} >See details</Link> 
                    </div>
                    <div className="parkCardStateBadge">
                        {park.State}
                                                {park.distance !==undefined ? <div style={{display: 'inline', padding: '1em'}}>{`(${Math.round(park.distance/1609)} mi.)`}</div>: null}

                    </div>
                    <div className='parkCardCost'>
                        {!costUnits ? "Free" : Array.from({ length: costUnits }, (v, i) => i).map(()=>"$")}
                    </div>
                </div>
                <div className='parkImg'>
                    <img src={parkImgObj.url} alt={parkImgObj.title} />
                </div>
        </div>
    )
}

export default ParkListItem;