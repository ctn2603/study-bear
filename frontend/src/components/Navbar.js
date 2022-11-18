import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from "./books.png";
import ToggleButton from "./ToggleButton";

 
console.log(logo); 

function NavbarExample() {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="books emoji"
            />
        <Navbar.Brand href="/home">app name</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Brand  href="/login">Login
          </Navbar.Brand>
          <Navbar.Brand>/</Navbar.Brand>
          <Navbar.Brand  href="/signup">Signup
          </Navbar.Brand>
          <ToggleButton/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarExample;