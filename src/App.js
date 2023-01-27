// import './App.css';
import React,{useState, useEffect} from 'react';
import { Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import ParkPage from './components/ParkPage'
import MyParks from './components/MyParks'
import ParkDetail from './components/ParkDetail'
import About from './components/About'

function App() {

  const parksUrl = 'http://localhost:3001/parks'
  const baseURL = 'http://localhost:3001'
  const [parks,setParks] = useState([])
  const [userId, setUserId] = useState(1)
  const [userData, setUserData]=useState({})

  useEffect(() => {
    fetch(parksUrl)
     .then(res => res.json())
     .then(setParks)
  }, [] )

  useEffect(()=> {
    fetch(`${baseURL}/users/${userId}`)
    .then(res => res.json())
    .then(setUserData)
  }, [])

  
  

  // handler functions
  function handleClickSavePark(savedPark, isSaved){

    const arrayBody = isSaved ? userData.savedParks.filter(id=> id !== savedPark.id) : [...userData.savedParks, savedPark.id]

    fetch(`${baseURL}/users/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({savedParks: arrayBody})
    })
    .then(res => res.json())
    .then(setUserData)
  }

  console.log('hello from app')
  return (
    <div className="App">
      <NavBar userId={userId} />
      <Switch >
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/parks'>
          <ParkPage parks={parks} onClickSave={handleClickSavePark} userData={userData} />
        </Route>
        <Route exact path='/user/:userid'>
          <MyParks parks={parks} onClickSave={handleClickSavePark} userData={userData} />
        </Route>
        <Route path='/parks/:parkid'>
          <ParkDetail parks={parks} setParks={setParks}/>
        </Route>
        <Route path='/about'>
          <About />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
