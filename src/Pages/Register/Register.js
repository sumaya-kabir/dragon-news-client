import { toast } from 'react-hot-toast';
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photo.value;
        const name = form.name.value;

        // console.log(email, password, name, photoURL);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                handleUpdateUserProfile(name, photoURL);
                handleEmailVerification();
                toast.success('Please verify your email address');
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
        .then(() => {})
        .catch(error => console.log(error))
    }

    const handleEmailVerification = () => {
        verifyEmail()
        .then(() => {})
        .catch(error => console.log(error))
    }

    const handleAccepted = event => {
        setAccepted(event.target.checked);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="Enter Your Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhoto">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control type="text" name="photo" placeholder="Enter Photo URL" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" 
                label={<>Accepts <Link to='/terms'>Terms & Conditions</Link></>}
                onClick = {handleAccepted} />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!accepted}>
                Register
            </Button>
            <p className='text-danger'>{error}</p>
        </Form>
    );
};

export default Register;