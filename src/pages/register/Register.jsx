import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

const initialValue = {
  name:"",
  email:"",
  password:""
}

export const Register = () => {
  const navigate = useNavigate();
  const [register, setRegister] = useState(initialValue);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const {name, value} = e.target;
    setRegister({...register, [name]: value});
  }

  const submit = async() => {
    try {
      const res = await axios.post('http://localhost:4000/api/register', register);
      console.log(res);
      navigate('/registerOk');
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setErrorMessage(error.response.data.message); 
      } else {
        setErrorMessage("Unexpected error.");
      }
    }
  }

  return (
    <section className='py-5 d-flex justify-content-center section-home'>
      <Form className='w-25 bg-dark p-3 rounded-3 text-white'>
        <h4 className='text-center mb-3'>Register form</h4>
        <Form.Group className="mb-3" controlId="formGroupName">
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
            type="password" 
            placeholder="Password"
            name='password'
            value={register.password}
            onChange={handleChange}
          />
        </Form.Group>
        <div className='text-center'>
          <Button
            className='button-purple mx-3'
            onClick={submit}
          >Submit</Button>
          <Button
            className='button-purple mx-3'
            onClick={() => navigate('/')}
          >Cancel</Button>
        </div>
        {errorMessage && <p className='text-danger text-center'>{errorMessage}</p>}
      </Form>
    </section>
  )
}
