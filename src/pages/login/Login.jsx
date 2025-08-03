import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router';
import { useContext, useState } from 'react';
import axios from 'axios';
import { GlobalContext } from '../../contexts/ContextProviderApp';

const initialValues = {
  email: "",
  password: ""
}

export const Login = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState(initialValues);
  const {setUser} = useContext(GlobalContext);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setLogin({...login, [name]: value});
  }

  const submit = async() => {
    try {
      const res = await axios.post('http://localhost:4000/api/login', login);
      const token = res.data.token;
      localStorage.setItem("token", token);
      
      const response = await axios.get('http://localhost:4000/api/getUser', {headers: {Authorization: `Bearer ${token}`}});
      setUser(response.data.user);
      navigate('/user');
    } catch (error){
      console.log(error);
    }
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
            type="password" 
            placeholder="Password"
            name='password'
            value={login.password}
            onChange={handleChange}
          />
        </Form.Group>
        <div className='text-center'>
          <Button
            className='button-purple mx-3'
            onClick={() => navigate('/')}
          >Cancel</Button>
          <Button
            className='button-purple mx-3'
            onClick={submit}
          >Submit</Button>
        </div>
      </Form>
    </section>
  )
}
