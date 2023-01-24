import { useParams } from 'react-router-dom'

function ParkDetail({ parks }){

    const parkId = useParams().parkid
    const parkMatch = parks.filter(parkObj => parkObj["Location Number"].toLowerCase() === parkId.toLowerCase())
    const park = parkMatch[0]

    return (
        <div>
            <h1>{`hello from park details for ${park["Location Name"]}`}</h1>
        </div>
    )
}
export default ParkDetail;