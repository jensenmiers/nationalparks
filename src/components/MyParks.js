import { useParams } from 'react-router-dom'
 
function MyParks(){

    const params = useParams()

    return (
        <div>
            <h1>{`Hello from user ${params.userid}'s MyParks Page`}</h1>
        </div>
    )
}

export default MyParks;