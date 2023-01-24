// import './App.css';
import React,{useState, useEffect} from 'react';
import ParkList from './components/ParkList';

function App() {

  const parksUrl = 'http://localhost:3001/parks'

  const [parks,setParks] = useState([])
  

  useEffect(() => {
    fetch("http://localhost:3001/parks")
     .then(res => res.json())
     .then(setParks)
  }, [] )


  return (
    <div className="App">
      <ParkList parks={parks} />
    </div>
  );
}

export default App;
