import useAuth from '../hooks/useAuth';
import { Form } from 'react-bootstrap';



const LoginPage = () => {
  let { loginUser } = useAuth();

  return (
    <main>
      <div className="container">
        <div className="d-flex justify-content-center align-items-center flex-column mb-4">
          <h1>Login</h1>
        </div>
        <div className="d-flex justify-content-center">
          <Form onSubmit={loginUser} className="w-100" style={{ maxWidth: '400px' }}>
            <Form.Group controlId="formBasicEmail" className="mb-3">
              <Form.Control type="email" name="email" placeholder="Email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mb-3">
              <Form.Control type="password" name="password" placeholder="Password" />
            </Form.Group>

            <button type="submit" className="btn btn-dark btn-lg btn-block w-100">Submit</button>
          </Form>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
