import './css/App.css';
import HomePage from "./pages/HomePage.js"
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import NavbarExample from './components/Navbar'
import EventContainer from './components/eventContainer';
import EventData from './components/eventData';
import AddEventForm from './components/addEventForm';
import { useEffect, useState, createContext } from 'react'
import SignUpForm from './components/SignUpForm';
import axios from 'axios'

//hi wahats up
const events = [
    {
      title:'cs61c study group',
      description:'we are studying for mt2 tmrw',
      location:'mainstacks',
      time:'5-7pm',
      currCap:0,
      capacity:10,
      id:0,
      lat: 37.87292,
      lng: -122.260579
    },
    {
      title: "CS 70 Study Group",
      time: "now - 8:00PM",
      currCap:0,
      capacity: 10,
      description: "studying for midterm tmrw",
      location: "Mainstacks Level C",
      id:1,
      lat: 37.87202,
      lng: -122.260209
    },
    {
      title: "CS 61C Study Group",
      time: "3:00PM - 4:00PM",
      capacity: 10,
      description: "reviewing parallelism",
      location: "Moffit Floor 1",
      id:2,
      lat: 37.87202,
      lng: -122.260429
    },
    {
      title: "CS 61A Study Group",
      time: "5:00PM - 6:00PM",
      currCap: 10,
      capacity: 10,
      description: "brainstorming for Ants",
      location: "Moffit Floor 5",
      id:3,
      lat: 37.87202,
      lng: -122.260679
    }
  ]



  const stateInit = {
    events: [],
    //For eventCreation (event ID is simply array index)
    nextId: 0,
    //The following are for marker logic
    recentClickPos: null,
    infoBoxId:null,
    markerEvent:null,
    //id of the event to be shown on <EventData />
    eventDataId:null,
    isLoggedIn: false,
    userName:null,
    password:null,
    token:null
  }

const testEvent = {
  title: "CS 61A Study Group",
  time: "5:00PM - 6:00PM",
  currCap: 10,
  capacity: 10,
  description: "brainstorming for Ants",
  location: "Moffit Floor 5",
  id:3,
  lat: 37.87202,
  lng: -122.260679
} 
/*
delete all events: https://fsdc18.azurewebsites.net/api/delete-all-events (use axios.delete())
delete all users: https://fsdc18.azurewebsites.net/api/delete-all-users
add event: https://fsdc18.azurewebsites.net/api/add-event
*/

const StateContext = createContext()

function App() {
  const [state, setState] = useState(stateInit)
    useEffect(()=>{
      axios.get('https://fsdc18.azurewebsites.net/api/get-events', {timeout: 10 * 1000}).then((body)=>{
        console.log("body of api call", body.data)
        state.events = body.data
        setState(JSON.parse(JSON.stringify(state)))
      })
      /*
      axios.delete('https://fsdc18.azurewebsites.net/api/delete-all-events', {timeout: 10 * 1000}).then((response)=>{
        console.log("delete response", response)
      })
      */

    }, []
    )


    /*api call will go here under a call using the useEffect hook 
     data will go under state variable, which will be accessible to all components
     in the react-app via context hook.

     state variable contains other useful information about the state of the frontend,
     and can be easily changed for future featuress

     The state variable itself AND the set function can be retrieved by all components.

     when updating state, make sure to call: setState(JSON.parse(JSON.stringify(state)))
     otherwise, nothing will re-render. <-took waayy to long to figure that out :)
    */

    return (
      <StateContext.Provider value={{state:state, setState: setState}}>
        <Router>
          <NavbarExample />

          <div className="App">
    
          <Routes>
            <Route exact path='/' element={<HomePage/>}>
              <Route exact path='/' element={<EventContainer height='62vh' width='33vw' />}></Route>
              <Route exact path='/eventData' element={<EventData height='74vh' width='33vw' />}></Route>
              <Route exact path='/addEvent' element={<AddEventForm height='74vh' width='48vw' />}></Route>
            </Route>
            <Route exact path='/signup' element={<div><SignUpForm/></div>}></Route>
          </Routes>

          </div>
        </Router>
      </StateContext.Provider>
    );
}

export default App;
export {StateContext};
