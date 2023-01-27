import { useParams } from 'react-router-dom'
import ParkListItem from './ParkListItem'
import { useEffect, useState } from 'react'
import ParkList from './ParkList'
 
function MyParks({ userData, parks, onClickSave }){

    const {userid} = useParams()
    const [userDataAlt, setUserDataAlt] = useState({})
    useEffect(()=> {
        fetch(`http://localhost:3001/users/${userid}`)
        .then(res => res.json())
        .then((json)=> {
            console.log(json)
            setUserDataAlt(json)
        })
    }, [])
    
    const savedParkIds = userDataAlt.savedParks? userDataAlt.savedParks.map(id => id.toLowerCase()) : []
    const userParks = parks.filter(parkObj => savedParkIds.includes(parkObj["id"].toLowerCase()))

    return (
        <div>
            <h1>{`Hello from user ${userid}'s MyParks Page`}</h1>
            <ParkList parks={userParks} onClickSave={onClickSave} userData={userDataAlt}/>
        </div>
    )
}

export default MyParks;