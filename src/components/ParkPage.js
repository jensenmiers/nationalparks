import React,{useEffect, useState} from 'react';
import ParkList from './ParkList';
import Search from './Search';
import haversine from 'haversine-distance'

const ZIPAPI="https://api.zippopotam.us/us/"

function ParkPage({parks, onClickSave }) {

  const [searchTerm, setSearchTerm] = useState('')
  const [zipSearchTerm, setZipSearchTerm] = useState(0)
  const [latLon, setLatLon] = useState({})

  function distToZip(parkObj){
    //console.log( {lat: Number(parkObj.Latitude), lon: Number(parkObj.Longitude)})
    console.log('haversine', haversine(latLon, {lat: Number(parkObj.Latitude), lon: Number(parkObj.Longitude)}))

    return haversine(latLon, {lat: Number(parkObj.Latitude), lon: Number(parkObj.Longitude)})
  }

  useEffect(()=>{
    if (zipSearchTerm.length>=5){
      fetch(`${ZIPAPI}/${zipSearchTerm}`)
      .then(res=> res.json())
      .then(json => {
        setLatLon({lat: Number(json.places[0].latitude), lon: Number(json.places[0].longitude)})
      })
    }
    
  }, [zipSearchTerm])

  const filteredParks = parks.filter(park => {
    return park['Location Name'].toLowerCase().includes(searchTerm.toLowerCase())
  })
  .sort((p1, p2) => {
    const result = distToZip(p1) - distToZip(p2)
    console.log(result)
    return latLon.lat ? distToZip(p1) - distToZip(p2) : 0    
  })
  console.log(filteredParks.slice(0,5))

  return (
    <div>
      <Search searchTerm={searchTerm} handleSearch={setSearchTerm} handleZipSearch={setZipSearchTerm}/>
      <ParkList parks={filteredParks} onClickSave={onClickSave} />
      
    </div>
  )   
}

export default ParkPage;