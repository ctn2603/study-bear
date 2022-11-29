  import Container from 'react-bootstrap/Container';
  import logo from "../images/logo.png";
  import ToggleButton from "./ToggleButton";
  import LoginPopup from "./LoginPopup";
  import '../css/Navbar.css'
  import { Text } from '@chakra-ui/react'
  import Button from 'react-bootstrap/Button';


  function Navbar() {
    return (
      <div id="background">
        <a href="http://localhost:3000/">
        <img    id="logo"
                src={logo}
                width="40"
                alt="logo"
                a href=""
              /></a>
        <div id = "buttonContainer">
          <button id ="loginButton"> login </button>
          <Button id ="signupButton" href="/signup"> signup </Button>


        </div>
        
      </div>
    );
  }

  export default Navbar;
