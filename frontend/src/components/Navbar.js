import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../images/books.png";
import ToggleButton from "./ToggleButton";
import LoginPopup from "./LoginPopup";
import '../css/NavBarExample.css'
import { Text } from '@chakra-ui/react'
console.log(logo); 

function NavbarExample() {
  return (
    <Navbar color='white' variant="light" className='navBar'>
      <Container>
        <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="books emoji"
            />
        <Navbar.Brand href="/"><Text align='center' color='white' fontSize='20'
          style={{position:'relative', top:'5px'}}
          >Study Bear</Text></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <LoginPopup />
          <Navbar.Brand  href="/signup">Signup
          </Navbar.Brand>
          <ToggleButton /> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarExample;