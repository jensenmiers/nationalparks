import React,{useState} from 'react';
import ParkList from './ParkList';
import Search from './Search';

function ParkPage({parks, onClickSave }) {

  const [searchTerm, setSearchTerm] = useState('')

  const filteredParks = parks.filter(park => {
    return park['Location Name'].toLowerCase().includes(searchTerm.toLowerCase())
  })

  return (
    <div>
      <Search searchTerm={searchTerm} handleSearch={setSearchTerm} />
      <ParkList parks={filteredParks} onClickSave={onClickSave} />
      
    </div>
  )   
}

export default ParkPage;