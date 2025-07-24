import { useContext } from 'react'
import { GlobalContext } from '../../contexts/ContextProviderApp'
import Button from 'react-bootstrap/esm/Button';
import './user.css';
import { useNavigate } from 'react-router';

export const User = () => {
  const {user} = useContext(GlobalContext);
  const navigate = useNavigate();

  return (
    <div className='section-user d-flex'>
      <section className='w-50 text-center'>
        <h2>Welcome {user?.name}</h2>
        <p className='fs-5 fw-bold'>Do you want to explore the multiverse?</p>
        <Button variant='dark' onClick={() => navigate('/characters')}>GO!</Button>
      </section>
      <div className='div-bg-img w-50'></div>
    </div>
  )
}
