import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router';
import './home.css';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <section className='section-home'>
        <div className='d-flex flex-column align-items-center'>
          <h1>Welcome to the multiverse!</h1>
          <div>
            <Button
              className='button-purple mx-3'
              onClick={() => navigate('/register')}
            >Register</Button>
            <Button
              className='button-purple mx-3'
              onClick={() => navigate('/login')}
            >Login</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
