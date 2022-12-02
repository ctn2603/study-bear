  import Container from 'react-bootstrap/Container';
  import logo from "../images/logo.png";
  import ToggleButton from "./ToggleButton";
  import LoginPopup from "./LoginPopup";
  import '../css/Navbar.css'
  import { Text, Image } from '@chakra-ui/react'
  import Button from 'react-bootstrap/Button';
  import { StateContext } from '../App';
  import { useContext} from 'react'
  import userIcon from '../images/userIcon.png'

  function Navbar() {
    const state = useContext(StateContext).state
    const renderProfile = () => {
      console.log('signed in?:', state.isLoggedIn)
      if (state.isLoggedIn){
        return <Image src={userIcon} h='43' ml='-7' mr='15' alt='pic'/>
      }
      return <></>
    }
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
          <LoginPopup id="loginButton"/>
          <Button id ="signupButton" href="/signup"> signup </Button>


        </div>

        {renderProfile()}
        
      </div>
    );
  }

  export default Navbar;
