import '../css/App.css';
import React, {Component} from 'react';
import NavbarExample from '../components/Navbar.js'
import axios from 'axios'



function SignIn() {
 
    return (
      <div className="signin-page">

        <NavbarExample/>
      </div>
    );
}

export default SignIn;