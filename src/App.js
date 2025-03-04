// import './App.css';
import React,{useState, useEffect, useContext} from 'react';
import { Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import ParkPage from './components/ParkPage'
import MyParks from './components/MyParks'
import ParkDetail from './components/ParkDetail'
import About from './components/About'
import { ParkContext } from './context/ParkProvider'
import baseURL from './components/BaseURL';
import { PuffLoader } from 'react-spinners';
import Loading from './components/Loading';

function App() {
  const [parks,setParks] = useContext(ParkContext)
  const [userId, setUserId] = useState(1)
  const [userData, setUserData]=useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    fetch(`${baseURL}/api/parks`)
     .then(res => res.json())
     .then((data)=>{
        setParks(data)
        setIsLoading(false)
    })
    .then(
      fetch(`${baseURL}/api/users/${userId}`)
      .then(res => res.json())
      .then(setUserData)
    )
  }, [] )

  // handler functions
  function handleClickSavePark(savedPark, isSaved){

    const arrayBody = isSaved ? userData.savedParks.filter(id=> id !== savedPark.id) : [...userData.savedParks, savedPark.id]

    fetch(`${baseURL}/api/users/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({savedParks: arrayBody})
    })
    .then(res => res.json())
    .then(setUserData)
  }

  return (
    <div className="App">
      <NavBar userId={userId} />
      <Switch >
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/parks'>
          {isLoading ? <Loading/> :
            <ParkPage onClickSave={handleClickSavePark} userData={userData} />
          }
        </Route>
        <Route exact path='/user/:userid'>
            <MyParks onClickSave={handleClickSavePark} userData={userData} />
        </Route>
        <Route path='/parks/:parkid'>
            <ParkDetail onClickSave={handleClickSavePark} userData={userData}/>
        </Route>
        <Route path='/about'>
          <About />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
