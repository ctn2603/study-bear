import Container from 'react-bootstrap/Container';

import logo from "../images/books.png";
import ToggleButton from "./ToggleButton";
import LoginPopup from "./LoginPopup";
import '../css/Navbar.css'
import { Text } from '@chakra-ui/react'
import Button from 'react-bootstrap/Button';


function Navbar() {
  return (
    <div id="background">
      <img    id="logo"
              src={logo}
              width="40"
              alt="logo"

            />
      <div id = "buttonContainer">
        <button id ="loginButton"> login </button>
        <button id ="signupButton"> signup </button>

      </div>
      
    </div>
  );
}



export default Navbar;
