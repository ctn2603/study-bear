import './css/App.css';
import ToggleButton from './components/ToggleButton.js';
import React, {Component} from 'react';
import LoginPopup from './components/LoginPopup.js';
import NavbarExample from './components/Navbar.js'
import SignUpForm from './components/SignUpForm';

function App() {
 
    return (
      <div className="App">

        <NavbarExample/>
        <SignUpForm/>
      </div>
    );
}

export default App;

