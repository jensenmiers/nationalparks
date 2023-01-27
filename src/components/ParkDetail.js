import { useParams } from 'react-router-dom';
import React,{useState} from 'react';
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';

function ParkDetail({ parks, setParks }) {

    const parkId = useParams().parkid
    const parkMatch = parks.filter(parkObj => parkObj["id"].toLowerCase() === parkId.toLowerCase())
    const park = parkMatch[0]

    // const parkImgObj1 = park.images[0]
    // const parkImgObj2 = park.images[1]
    // const parkImgObj3 = park.images[2]
    
    const slicedParks = park.images.slice(0,3)
    const parkImagesObj = slicedParks.map((imgObj) => {
        return <img className='detailImg' src={imgObj.url} alt={imgObj.url} />
    })

    const parkActivityObj = park.activities
    const activityList = parkActivityObj.map(activity => ` ${activity.name}`) .join(', ')

    function updateReviewArray(newReview) {
        console.log('newReview: ', newReview);
        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                review: park.review ? [...park.review, newReview] : [newReview],                 
            })
        }
        fetch(`http://localhost:3001/parks/${park["id"]}`,options)
            .then(res => res.json())
            .then(jsresponse => setParks(parks.map(park => park.id === parkId ? jsresponse : park 
            ))) 
    }
    const reviews = park.review || []

    return (
        <div className='detailPageContainer'>
            <div className='detailParkCard' >
                <div className='detailParkCardInfo'>
                    <h1>{`${park["Location Name"]}`}</h1>
                    <div className='detailImgContainer' >
                        {parkImagesObj}
                        {/* <img className='detailImg' src={parkImgObj1.url} alt={parkImgObj1.altText} />
                        <img className='detailImg' src={parkImgObj2.url} alt={parkImgObj2.altText} />
                        <img className='detailImg' src={parkImgObj3.url} alt={parkImgObj3.altText} /> */}
                    </div>
                    <p><b>Location: </b>{`${park['City']}, ${park['State']}`}</p>
                    <p> <b>Site Type:</b> {`${park['designation']}`} </p>
                    <p> <b>Description:</b> {`${park['description']}`} </p>
                    <p><b>Activities:</b> {activityList}</p>
                    <div className='reviewCard'>
                        <ReviewForm setReviewForm={updateReviewArray} />
                        <br></br>
                        <ReviewList reviews={reviews} /> 
                    </div>   
                         
                </div>
                
            </div>
        </div>
    )
}
export default ParkDetail;