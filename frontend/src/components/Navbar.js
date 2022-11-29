import Container from 'react-bootstrap/Container';
import logo from "../images/logo.png";
import ToggleButton from "./ToggleButton";
import '../css/Navbar.css';
import LoginPopup from './LoginPopup';



function Navbar() {
  return (
    <div id="background">
      <img    id="logo"
              src={logo}
              width="40"
              alt="logo"
            />
      <div id = "buttonContainer">
        <LoginPopup/>
        <button id ="signupButton"> signup </button>

      </div>
      
    </div>
      
  );
}

export default Navbar;

// <button id ="loginButton"> login </button>