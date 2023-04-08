import {useState, useContext} from 'react';
import ParkList from './ParkList';
import Search from './Search';
import ZipSearch from './ZipSearch';
import haversine from 'haversine-distance'
import Filter from './Filter'
import { ParkContext } from '../context/ParkProvider';

const ZIPAPI="https://api.zippopotam.us/us/"

function ParkPage({ onClickSave, userData }) {

  const [parks, setParks] = useContext(ParkContext)

  const [searchTerm, setSearchTerm] = useState('')
  const [zipSearchTerm, setZipSearchTerm] = useState('')
  const [latLon, setLatLon] = useState({})
  console.log('parks', parks)
  const parkTypes = parks?.reduce((acc, elem) => {
    if(acc[elem.designation]) return {...acc, [elem.designation]: acc[elem.designation]+1}
    return {...acc, [elem.designation]: 1}
  }, {})
  const parkTypeList = Object.entries(parkTypes).sort((a,b)=> a[1]<b[1] ? 1 : -1)

  const activityTypes = parks?.reduce((acc, elem) => {
    elem.activities?.forEach(act => {
      if(acc[act.name]) acc[act.name] = acc[act.name]+1
      else acc[act.name] = 1
    })
    return acc
  }, {})
  const activitiesList = Object.entries(activityTypes).sort((a,b)=> a[1]<b[1] ? 1 : -1)

  let DEFAULT = Object.keys(parkTypes)
  const [typesToDisplay, setTypesToDisplay] = useState(DEFAULT)
  let DEFAULT_ACTIVTY = Object.keys(activityTypes)
  const [activitiesToDisplay, setActivitiesToDisplay] = useState(DEFAULT_ACTIVTY)

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

  console.log("typesToDisplay", typesToDisplay)

  const filteredParks = parks.filter(park => {
    return park['Location Name'].toLowerCase().includes(searchTerm.toLowerCase()) ||
    park.activities.map(obj => obj.name? obj.name.toLowerCase() : "").join(', ').includes(searchTerm.toLowerCase())
  })
  .sort((p1, p2) => {
    return latLon.lat ? distToZip(p1) - distToZip(p2) : 0    
  })
  .map(park => {
    if(latLon.lat){
      return {...park, distance: distToZip(park)}
    }
    return park
  })
  // .filter(park => typesToDisplay.length == 0 || typesToDisplay.includes(park.designation))
  //.filter(park => activitiesToDisplay.length==0 || activitiesToDisplay.find(act => park.activities.map(actObj=>actObj.name).includes(act)))

  return (
    <div>
      <Search searchTerm={searchTerm} handleSearch={setSearchTerm} />
      <ZipSearch zipSearchTerm={zipSearchTerm} handleZipSearch={setZipSearchTerm} handleSubmitZip={handleSubmitZip}/>
      <Filter parkTypeList={parkTypeList} setTypesToDisplay={setTypesToDisplay} buttonLabel={'Park Type'}/>
      <Filter parkTypeList={activitiesList} setTypesToDisplay={setActivitiesToDisplay} buttonLabel={'Activity'}/>
      <ParkList parks={filteredParks} onClickSave={onClickSave} userData={userData} />
    </div>
  )   
}

export default ParkPage;