import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import '../Login/Login.css';
const Signup = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const confirmPasswordRef = useRef('');


    
    return (
        <div className='container'>
            <div className='form-container'>
                <h2 className='text-center mb-5 fw-bold login-title'>Please Signup</h2>
                <Form >
                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Your name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} required type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordRef} required type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formConfirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control ref={confirmPasswordRef} required type="password" placeholder="Confirm Password" />
                    </Form.Group>
                    <div className='text-center mt-5'>
                        <Button className='login-btn py-2 fs-5' type="submit">
                            Login
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default Signup;