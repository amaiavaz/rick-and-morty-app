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
      <Navbar bg="warning" data-bs-theme="ligth">
        <Container>
          <Navbar.Brand as={Link} to='/'>RickAndMorty</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
          </Nav>
          <Nav>
            {user ?
              <Button onClick={logout}>Logout</Button>
              :
              <>
                <Button onClick={() => navigate('/register')}>Register</Button>
                <Button onClick={() => navigate('/login')}>Login</Button>
              </>
            }
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}
