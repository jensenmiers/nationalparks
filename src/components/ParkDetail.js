import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ParkDetail({ parks }){

    const parkId = useParams().parkid
    //const parkMatch = parks.filter(parkObj => parkObj["Location Number"].toLowerCase() === parkId.toLowerCase())
    //const park = parkMatch[0]

    const [parkDisplayed, setParkDisplayed] = useState({})
    useEffect(() => {

        fetch(`http://localhost:3001/parks/${parkId}`)
        .then(res=> res.json())
        .then(setParkDisplayed)

        // const parkMatch = parks.filter(parkObj => parkObj["Location Number"].toLowerCase() === parkId.toLowerCase())
        // setParkDisplayed(parkMatch[0])

    }, [parkId])

    return (
        <div>
            <h1>{`hello from park details for ${parkDisplayed["Location Name"]}`}</h1>
        </div>
    )
}
export default ParkDetail;