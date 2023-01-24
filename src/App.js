// import './App.css';
import ParkPage from './components/ParkPage'
import React,{useState,useEffect} from 'react';


function App() {

  const parksUrl = 'http://localhost:3001/parks'

  const [parks,setParks] = useState([])
  

  useEffect(() => {
    fetch(parksUrl)
     .then(res => res.json())
     .then(setParks)
  }, [] )



  return (
    <div className="App">
      <ParkPage parks={parks}/>
    </div>
  );
}

export default App;
