import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router';
import { useState } from 'react';

const initialValues = {
  email: "",
  password: ""
}

export const Login = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState(initialValues);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setLogin({...login, [name]: value});
  }

  return (
    <section className='py-5 d-flex justify-content-center section-home'>
      <Form className='w-25 bg-dark p-3 rounded-3 text-white'>
        <h4 className='text-center mb-3'>Login form</h4>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter email"
            name='email'
            value={login.email}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Password"
            name='password'
            value={login.password}
            onChange={handleChange}
          />
        </Form.Group>
        <div className='text-center'>
            <Button
              className='mx-3'
              variant="warning"
            >Submit</Button>
            <Button
              className='mx-3'
              variant="warning"
              onClick={() => navigate('/')}
            >Cancel</Button>
          </div>
      </Form>
    </section>
  )
}
