// import './App.css';
import React,{useState, useEffect} from 'react';
import ParkList from './components/ParkList';
import { Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import ParkPage from './components/ParkPage'
import MyParks from './components/MyParks'
import ParkDetail from './components/ParkDetail'
import About from './components/About'

function App() {

  const parksUrl = 'http://localhost:3001/parks'

  const [parks,setParks] = useState([])
  const [userId, setUserId] = useState(1)

  useEffect(() => {
    fetch(parksUrl)
     .then(res => res.json())
     .then(setParks)
  }, [] )



  return (
    <div className="App">
      <NavBar userId={userId} />
      <Switch >
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/parks'>
          <ParkPage parks={parks} />
        </Route>
        <Route path='/user/:userid'>
          <MyParks />
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
