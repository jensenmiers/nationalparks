import { useParams } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import ParkList from './ParkList'
import { ParkContext } from '../context/ParkProvider'
 
function MyParks({ userData, onClickSave }){

    const {userid} = useParams()
    const [parks, _] = useContext(ParkContext)
    const [userDataAlt, setUserDataAlt] = useState({})
    useEffect(()=> {
        fetch(`http://localhost:3001/users/${userid}`)
        .then(res => res.json())
        .then((json)=> {
            setUserDataAlt(json)
        })
    }, [])
    
    const savedParkIds = userDataAlt.savedParks? userDataAlt.savedParks.map(id => id.toLowerCase()) : []
    const userParks = parks.filter(parkObj => savedParkIds.includes(parkObj["id"].toLowerCase()))

    return (
        <div>
            <h1>{`My Saved Parks`}</h1>
            <ParkList parks={userParks} onClickSave={onClickSave} userData={userDataAlt}/>
        </div>
    )
}

export default MyParks;