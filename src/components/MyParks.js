import { useParams } from 'react-router-dom'
import ParkListItem from './ParkListItem'
import { useEffect, useState } from 'react'
import ParkList from './ParkList'
 
function MyParks({ userData, parks, onClickSave }){
    console.log('parks', parks)

    const {userid} = useParams()
    console.log('userid', userid)
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
    //console.log(savedParkIds)
    const userParks = parks.filter(parkObj => savedParkIds.includes(parkObj["id"].toLowerCase()))
    // const userParks = parks
    return (
        <div>
            <h1>{`Hello from user ${userid}'s MyParks Page`}</h1>
            <ParkList parks={userParks} onClickSave={onClickSave} userData={userDataAlt}/>
        </div>
    )
}

export default MyParks;