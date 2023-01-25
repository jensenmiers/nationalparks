import { useParams } from 'react-router-dom'
import ParkListItem from './ParkListItem'
import { useEffect, useState } from 'react'
 
function MyParks({ userData, parks }){
    console.log('parks', parks)

    const [userDataAlt, setUserDataAlt] = useState({})
    useEffect(()=> {
        fetch('http://localhost:3001/users/1')
        .then(res => res.json())
        .then(console.log)
    }, [])
    

    const params = useParams()
    console.log('userData', userData)

    //console.log(parks)
    const savedParkIds = userData.savedParks.map(id => id.toLowerCase())
    const userParks = parks.filter(parkObj => savedParkIds.includes(parkObj["id"].toLowerCase()))
    const userParkList = userParks.map(parkObj => <ParkListItem key={parkObj["id"]} park={parkObj}/>)
    //console.log('userParks', userParks)
    console.log('savedParkIds', savedParkIds)
    return (
        <div>
            <h1>{`Hello from user ${params.userid}'s MyParks Page`}</h1>
            {userParkList}
        </div>
    )
}

export default MyParks;