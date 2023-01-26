import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { FaBookmark, FaDollarSign, FaRegBookmark } from 'react-icons/fa';

function ParkListItem({park, onClickSave}){

    const parkImgObj = park.images[0]

    const [isDescriptionHidden, toggleDescriptionHidden] = useState(true)

    const nonCommercialFees = park.entranceFees.filter(feeObj => !feeObj.title.toLowerCase().includes('commerci'))

    const costUnits = nonCommercialFees.length <=1 && Number(nonCommercialFees[0].cost) === 0 ? 0 : Math.floor(findMaxCost(nonCommercialFees)/10)

    function findMaxCost(costArr){
        return costArr.reduce((acc, elem) => Number(elem.cost) > acc ? Number(elem.cost) : acc, 0)
    }

    return(
        <div className='parkCard'>
                <div className='parkContent'>
                    <div className='bookmark' onClick={() => onClickSave(park)}>
                        <FaRegBookmark />
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
                    <div className='parkCardCost'>
                        {!costUnits ? "Free" : Array.from({ length: costUnits }, (v, i) => i).map(()=>"$")}
                    </div>
                </div>
                <div className='parkImg'>
                    <img src={parkImgObj.url} alt={parkImgObj.altText} />
                </div>
        </div>
    )
}

export default ParkListItem;