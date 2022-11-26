import './css/App.css';
import HomePage from "./pages/HomePage.js"
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import NavbarExample from './components/Navbar'
import EventContainer from './components/eventContainer';
import EventData from './components/eventData';
import AddEventForm from './components/addEventForm';


const testData = {
  
}
function App() {
 
    return (
      <Router>
        <NavbarExample />

        <div className="App">
  
        <Routes>
          <Route exact path='/' element={<HomePage/>}>
            <Route exact path='/' element={<EventContainer height='75vh' width='48vw'/>}></Route>
            <Route exact path='/eventData' element={<EventData height='75vh' width='48vw'/>}></Route>
            <Route exact path='/addEvent' element={<AddEventForm height='75vh' width='48vw'/>}></Route>
          </Route>
          <Route exact path='/signup' element={<div>sign up screen</div>}></Route>
        </Routes>

        </div>
      </Router>
    );
}

export default App;

