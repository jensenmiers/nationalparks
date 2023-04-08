import { useParams } from 'react-router-dom';
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';
import FeeCard from './FeeCard'
import {useState, useEffect} from 'react'

function ParkDetail({ parks, setParks }) {

    const parkId = useParams().parkid
    const [park, setPark] = useState({})

    useEffect(()=>{
        fetch(`http://localhost:3001/parks/${parkId}`)
        .then(res => res.json())
        .then(setPark)
    },[])
    
    const slicedParks = park?.images?.slice(0,3)
    const parkImagesObj = slicedParks?.map((imgObj, i) => {
        return <img className='detailImg' src={imgObj.url} alt={imgObj.url} key={`${park.id}-${i}`} />
    })

    const parkActivityObj = park?.activities
    const activityList = parkActivityObj?.map(activity => ` ${activity.name}`).join(', ')

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
    const reviews = park?.review || []

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
                    {park?.entranceFees?.map((feeObj,index) => {
                        return <FeeCard key={`${park.id}-fee-${index}`} feeObj={feeObj}/>
                    })}   
                         
                </div>
                
            </div>
        </div>
    )
}
export default ParkDetail;