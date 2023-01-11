import { Navbar, Nav, Button } from "react-bootstrap";

export default function BootstrapMenu() {
  return (
    <Navbar>
      <Navbar.Brand href="#home">logo</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">About</Nav.Link>
          <Nav.Link href="#link">price</Nav.Link>

         
        </Nav>
        <Nav className="d-flex" style={{marginLeft:'70%'}} >
          <Nav.Link href="#home"><Button style={{background:'gray',borderRadius:'40%',border:'none'}}>LogIn</Button></Nav.Link>
          <Nav.Link href="#link"><Button style={{background:'gray',borderRadius:'40%',border:'none'}}>SignUp</Button></Nav.Link>
        
         
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
