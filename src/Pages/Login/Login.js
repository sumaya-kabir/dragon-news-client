import { toast } from 'react-hot-toast';
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const {logIn, setLoading} = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
        .then( result => {
            const user = result.user;
            console.log(user);
            form.reset();
            setError('');
            if(user.emailVerified){
                navigate(from, {replace: true});
            } else {
                toast.error("Your email is not verified")
            }
        })
        .catch(error => {
            console.error(error);
            setError(error.message);
        })
        .finally(() => {
            setLoading(false);
        })
    }

    return (
        <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <p className='text-danger'>{error}</p>
        </Form>
    );
};

export default Login;