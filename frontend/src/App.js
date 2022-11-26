import './css/App.css';
import HomePage from "./pages/HomePage.js"
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import NavbarExample from './components/Navbar'
import EventContainer from './components/eventContainer';
import EventData from './components/eventData';
import AddEventForm from './components/addEventForm';
import { useEffect, useState, createContext } from 'react'


const events = [
    {
      title:'cs61c study group',
      description:'we are studying for mt2 tmrw',
      location:'mainstacks',
      time:'5-7pm',
      capacity:'10',
      id:0,
      lat: 37.87202,
      lng: -122.260579
    }
  ]
  const stateInit = {
    events: events,
    //For eventCreation (event ID is simply array index)
    nextId:1,
    //The following are for marker logic
    recentClickPos: null,
    infoBoxId:null,
    markerEvent:null
  }

const StateContext = createContext()

function App() {
    /*api call will go here under a call using the useEffect hook 
     data will go under state variable, which will be accessible to all components
     in the react-app via context hook.

     state variable contains other useful information about the state of the frontend,
     and can be easily changed for future featuress

     The state variable itself AND the hook for setting it can be retrieved by all components.

     when updating state, make sure to call: setState(JSON.parse(JSON.stringify(state)))
     otherwise, nothing will re-render. <-took waayy to long to figure that out :)
    */
  const [state, setState] = useState(stateInit)
    return (
      <StateContext.Provider value={{state:state, setState: setState}}>
        <Router>
          <NavbarExample />

          <div className="App">
    
          <Routes>
            <Route exact path='/' element={<HomePage/>}>
              <Route exact path='/' element={<EventContainer height='75vh' width='48vw' />}></Route>
              <Route exact path='/eventData' element={<EventData height='75vh' width='48vw' />}></Route>
              <Route exact path='/addEvent' element={<AddEventForm height='75vh' width='48vw' />}></Route>
            </Route>
            <Route exact path='/signup' element={<div>sign up screen</div>}></Route>
          </Routes>

          </div>
        </Router>
      </StateContext.Provider>
    );
}

export default App;
export {StateContext};
