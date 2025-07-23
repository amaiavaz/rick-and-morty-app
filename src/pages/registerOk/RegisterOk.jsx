import Button from 'react-bootstrap/esm/Button'
import { useNavigate } from 'react-router'

export const RegisterOk = () => {
  const navigate = useNavigate();

  return (
    <section className='section-home'>
      <div className='bg-dark p-4 rounded-3 text-center'>
        <p className='fs-4 fw-bold'>Register Correct!</p>
        <Button
          variant='warning'
          onClick={() => navigate('/login')}
        >Login</Button>
      </div>
    </section>
  )
}
