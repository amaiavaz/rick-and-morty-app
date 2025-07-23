import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router';

export const NavbarApp = () => {
  return (
    <>
      <Navbar bg="warning" data-bs-theme="ligth">
        <Container>
          <Navbar.Brand as={Link} to='/'>RickAndMorty</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to='/register'>Register</Nav.Link>
            <Nav.Link as={Link} to='/login'>Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}
