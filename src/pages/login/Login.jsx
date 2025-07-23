import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const Login = () => {
  return (
    <section className='py-5 d-flex justify-content-center section-home'>
      <Form className='w-25 bg-dark p-3 rounded-3 text-white'>
        <h4 className='text-center mb-3'>Login form</h4>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
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
