import { useParams } from 'react-router-dom';
import React,{useState} from 'react';
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';

function ParkDetail({ parks, setParks }) {

    const parkId = useParams().parkid
    const parkMatch = parks.filter(parkObj => parkObj["id"].toLowerCase() === parkId.toLowerCase())
    const park = parkMatch[0]

    

    function updateReviewArray(newReview) {
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
        <div>
            <h1>{`hello from park details for ${park["id"]}`}</h1>
            <ReviewForm setReviewForm={updateReviewArray} />
            <ReviewList reviews={reviews} /> 
            
        </div>
    )
}
export default ParkDetail;