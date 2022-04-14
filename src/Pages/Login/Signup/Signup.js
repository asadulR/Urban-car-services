import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import '../Login/Login.css';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';


const Signup = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const confirmPasswordRef = useRef('');

    const [error, setError] = useState('');
    const navigate = useNavigate();

    

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
    ] = useCreateUserWithEmailAndPassword(auth);


    const handleSignup = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;


        if(password === confirmPassword){
            createUserWithEmailAndPassword(email, password)
        }else{
            setError('Incorrect Password');
        }

    }


    if(user){
        navigate('/home');
    }


    const navigateLogin = () => {
        navigate('/login')
    }


    return (
        <div className='container'>
            <div className='form-container'>
                <h2 className='text-center mb-5 fw-bold login-title'>Please Sign up</h2>
                <Form onSubmit={handleSignup}>
                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Control type="text" name='name' placeholder="Your name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control ref={emailRef} name='email' required type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control ref={passwordRef} required name='password' type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formConfirmPassword">
                        <Form.Control ref={confirmPasswordRef} required name='confirmPassword' type="password" placeholder="Confirm Password" />
                    </Form.Group>
                    <p className='text-danger'>{error}</p>
                    <div className='text-center mt-5'>
                        <Button className='login-btn py-2 fs-5' type="submit">
                            Signup
                        </Button>
                    </div>
                </Form>
                <p className='mt-4'>Already have an account ? <span onClick={navigateLogin} className='signup-link'>Log in</span></p>

                <SocialLogin/>
            </div>
        </div>
    );
};

export default Signup;