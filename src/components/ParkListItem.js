import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';

function ParkListItem({ park, onClickSave, userData }){

    const parkImgObj = park.images?.length >0 ? park.images[0] : {url: 'none', title: 'image not found'}
    const [isDescriptionHidden, toggleDescriptionHidden] = useState(true)
    const [isSaved, setIsSaved] = useState(userData.savedParks.map(item=>item.toLowerCase()).includes(park.id.toLowerCase()))

    function findCostUnits(parkObj){
        if (!parkObj?.entranceFees) return 0
        const cost = parkObj.entranceFees[0]?.cost
        return Math.ceil(cost/10)
        //const nonCommercialFees = park.entranceFees.filter(feeObj => !feeObj.title.toLowerCase().includes('commerci')) 
        //if (!nonCommercialFees) return 0
        //return nonCommercialFees.length <=1 ? 0 : Math.ceil(findMaxCost(nonCommercialFees)/10)
    }

    function findMaxCost(costArr){
        if (!costArr || costArr.length === 0) return 0
        return Number(costArr[0]?.cost)||0
        //return costArr.reduce((acc, elem) => Number(elem.cost)||0 > acc ? Number(elem.cost)||0 : acc, 0)
    }

    function fallbackImage(e){
        //e.target.src = park.images[0]?.url || ""
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
                        {/* <p>{`${park.description.split(' ').slice(0,25).join(' ')}...`}</p> */}
                        <p>{park.description}</p>
                    </div>
                    <div className='parkCardLink'>
                        <Link to={`/parks/${park['id']}`} >Read Reviews</Link> 
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
                    <img onError={fallbackImage}src={parkImgObj.url} alt={parkImgObj.title} />
                </div>
        </div>
    )
}

export default ParkListItem;