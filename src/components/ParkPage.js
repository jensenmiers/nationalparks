import React,{useEffect, useState} from 'react';
import ParkList from './ParkList';
import Search from './Search';
import ZipSearch from './ZipSearch';
import haversine from 'haversine-distance'
import Filter from './Filter'

const ZIPAPI="https://api.zippopotam.us/us/"

function ParkPage({ parks, onClickSave, userData }) {

  const [searchTerm, setSearchTerm] = useState('')
  const [zipSearchTerm, setZipSearchTerm] = useState(0)
  const [latLon, setLatLon] = useState({})

  function distToZip(parkObj){
    return haversine(latLon, 
      {
        lat: Number(parkObj.Latitude), 
        lon: Number(parkObj.Longitude)
      })
  }

  function handleSubmitZip(zip){
    fetch(`${ZIPAPI}/${zipSearchTerm}`)
      .then(res=> res.json())
      .then(json => {
        setLatLon({lat: Number(json.places[0].latitude), lon: Number(json.places[0].longitude)})
      })
  }

  const filteredParks = parks.filter(park => {
    return park['Location Name'].toLowerCase().includes(searchTerm.toLowerCase()) ||
    park.activities.map(obj => obj.name? obj.name.toLowerCase() : "").join(', ').includes(searchTerm.toLowerCase())
  })
  .sort((p1, p2) => {
    return latLon.lat ? distToZip(p1) - distToZip(p2) : 0    
  })

  return (
    <div>
      <Filter />
      <Search searchTerm={searchTerm} handleSearch={setSearchTerm} />
      <ZipSearch zipSearchTerm={zipSearchTerm} handleZipSearch={setZipSearchTerm} handleSubmitZip={handleSubmitZip}/>
      <ParkList parks={filteredParks} onClickSave={onClickSave} userData={userData} />
      
    </div>
  )   
}

export default ParkPage;