import React, { useRef } from 'react';
import { Button, Form, } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import '../Login/Login.css';
import SocialLogin from '../SocialLogin/SocialLogin';
const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const handleLogin = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        // console.log(email, password);

        signInWithEmailAndPassword(email, password);
        emailRef.current.value = ' ';
        passwordRef.current.value = ' ';
    }

    if (error) {

        errorElement = <p className='text-danger'>Error: {error?.message}</p>
 

    }

    if(user){
        navigate(from, { replace: true });
    }

    const navigateSignup = event => {
        navigate('/signup')
    }


    return (
        <div className='container'>
            <div className='form-container'>
                <h2 className='text-center mb-5 fw-bold login-title'>Please Log in</h2>
                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        {/* <Form.Label>Email address</Form.Label> */}
                        <Form.Control ref={emailRef} required type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        {/* <Form.Label>Password</Form.Label> */}
                        <Form.Control ref={passwordRef} required type="password" placeholder="Password" />
                    </Form.Group>
                    {errorElement}

                    {/* <p className='mt-4'>New to Urban Car Service ? <Link className='signup-link' to='/signup'>Signup</Link></p> */}
                    <p className='mt-4'>New to Urban Car Service ? <span onClick={navigateSignup} className='signup-link'>Sign up</span></p>
                    <div className='text-center mt-5'>
                        <Button className='login-btn py-2 fs-5' type="submit">
                            Log in
                        </Button>
                    </div>
                </Form>

                <SocialLogin/>
            </div>
        </div>
    );
};

export default Login;