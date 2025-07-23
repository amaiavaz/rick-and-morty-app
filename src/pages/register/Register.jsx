import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const initialValue = {
  name:"",
  email:"",
  password:""
}

export const Register = () => {
  const [register, setRegister] = useState(initialValue);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setRegister({...register, [name]: value});
  }

  return (
    <section className='py-5 d-flex justify-content-center section-home'>
      <Form className='w-25 bg-dark p-3 rounded-3 text-white'>
        <h4 className='text-center mb-3'>Register form</h4>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter name"
            name='name'
            value={register.name}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            type="text"
            placeholder="Enter email" 
            name='email'
            value={register.email}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Password"
            name='password'
            value={register.password}
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
            >Cancel</Button>
          </div>
      </Form>
    </section>
  )
}
