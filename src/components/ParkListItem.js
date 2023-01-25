import React from 'react';
import { Link } from 'react-router-dom'

function ParkListItem({park, onClickSave}){

    const parkImgObj = park.images[0]

    return(
        <div className='parkCard'>
                <div className='parkContent'>
                    <strong>{park['Location Name']}</strong>
                
                    <p>{`${park.description.split(' ').slice(0,25).join(' ')}...`}</p>
                    <Link to={`/parks/${park['id']}`}>See more</Link> 
                    <button onClick={() => onClickSave(park)}>Save Park</button>
                </div>
                <div className='browseImg'>
                    <img src={parkImgObj.url} alt={parkImgObj.altText} />
                </div>
        </div>
    )
}

export default ParkListItem;