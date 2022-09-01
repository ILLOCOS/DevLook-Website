import '../components/css/navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Navbarr() {
  return (
    <Navbar collapseOnSelect expand="lg"  variant="dark" id="nav-cont" className='h-navbar'>
      <Container>
        <Navbar.Brand href="#home">PROJECT NAME</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" id="nav-list">
            <Nav.Link href="#home" className='navlinkk'>Home</Nav.Link>
            <Nav.Link href="#careers" className='navlinkk'>Find Talents</Nav.Link>
            <Nav.Link href="#careers" className='navlinkk'>Careers</Nav.Link>
            <Nav.Link href="#aboutUs" className='navlinkk'>About Us</Nav.Link>
          
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}

          </Nav>
{/* 
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>*/}
       

        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2" 
              id="searchbar"
              aria-label="Search"
           /> 
            <Button variant="outline-secondary" className="searchbtn">Search</Button> 
          </Form>

      <Button variant="light" className='signInBtn'>Sign In</Button>
      {/* <Button variant="light" className='joinBtn'>Join</Button> */}


 </Navbar.Collapse> 
      </Container>
    </Navbar>
  );
}

export default Navbarr;