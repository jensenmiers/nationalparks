import { useParams } from 'react-router-dom';
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';
import FeeCard from './FeeCard'
import {useState, useEffect, useContext} from 'react'
import { ParkContext } from '../context/ParkProvider';
import Map from './Map';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';
import baseURI from './BaseURI';

function ParkDetail({ userData, onClickSave }) {

    const parkId = useParams().parkid
    const [park, setPark] = useState({})
    const [isSaved, setIsSaved] = useState(userData.savedParks?.map(item=>item.toLowerCase()).includes(parkId.toLowerCase()))
    const [parks, setParks] = useContext(ParkContext)

    useEffect(()=>{
        setIsSaved(userData.savedParks?.map(item=>item.toLowerCase()).includes(parkId.toLowerCase()))
    }, [userData])

    useEffect(()=>{
        fetch(`${baseURI}/parks/${parkId}`)
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
        fetch(`${baseURI}/parks/${park["id"]}`,options)
            .then(res => res.json())
            .then(jsresponse => {
                setParks(parks.map(park => park.id === parkId ? jsresponse : park ))
                setPark(jsresponse)
            }) 
    }
    const reviews = park?.review || []

    return (
        <div className='detailPageContainer'>
            <div className='detailParkCard' >
                <div className='detailParkCardInfo'>
                    <div className='detailParkCardHeader'>
                        <h1>{`${park["Location Name"]}`}</h1>
                        <div className='saveButtonDetail' onClick={() => {
                            onClickSave(park, isSaved)
                            setIsSaved(prevValue => !prevValue)
                        }}>
                            {isSaved==undefined? null : isSaved ? <button className='savedButton'>Saved!</button> : <button className='addButton'>Add to MyParks</button>}
                        </div>
                    </div>
                    <div className='detailImgContainer' >
                        {parkImagesObj}
                        {/* <img className='detailImg' src={parkImgObj1.url} alt={parkImgObj1.altText} />
                        <img className='detailImg' src={parkImgObj2.url} alt={parkImgObj2.altText} />
                        <img className='detailImg' src={parkImgObj3.url} alt={parkImgObj3.altText} /> */}
                    </div>
                    {park.Latitude && park.Longitude ? <Map parkLat={park.Latitude} parkLng={park.Longitude}/> : null}

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