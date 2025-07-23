import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router';
import { GlobalContext } from '../../contexts/ContextProviderApp';
import Button from 'react-bootstrap/esm/Button';

export const NavbarApp = () => {
  const {user, logout} = useContext(GlobalContext);
  const navigate = useNavigate();

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>RickAndMorty</Navbar.Brand>
          <Nav className="me-auto">
            {user ?
            <>
              <Nav.Link as={Link} to='/user'>User</Nav.Link>
              <Nav.Link as={Link} to='/characters'>Characters</Nav.Link>
            </>
              :
              <Nav.Link as={Link} to='/'>Home</Nav.Link>
            }
          </Nav>
          <Nav>
            {user ?
              <Button variant="outline-light" onClick={() => logout(navigate)}>Logout</Button>
              :
              <>
                <Button className='mx-3' variant="outline-light" onClick={() => navigate('/register')}>Register</Button>
                <Button variant="outline-light" onClick={() => navigate('/login')}>Login</Button>
              </>
            }
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}
