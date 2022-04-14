import React from 'react';
import './SocialLogin.css';
import google from '../../../images/social/google.png';
import facebook from '../../../images/social/facebook.png';
import github from '../../../images/social/github.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, userGit, loadingGit, errorGit] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;

    if (error || errorGit) {

        errorElement = <p className='text-danger'>Error: {error?.message} {errorGit?.message}</p>
    }


    if (user || userGit) {
        navigate('/');
    }
    return (
        <div>
            <div className='d-flex w-90 mx-auto align-items-center'>
                <div className='left-hr'></div>
                <p className='my-0 mx-3'>Or</p>
                <div className='right-hr'></div>
            </div>
            {errorElement}
            <div className='w-75 mx-auto'>
                <button onClick={() => signInWithGoogle()} className='w-100 btn btn-outline-primary my-2 btn-white'> <img className='me-3' src={google} alt="" />Log in with Google</button>
                <button className='w-100 btn btn-outline-primary my-2 btn-white'> <img className='me-3' width={30} src={facebook} alt="" />Log in with facebook</button>
                <button onClick={() => signInWithGithub()} className='w-100 btn btn-outline-primary my-2 btn-white'> <img className='me-3' width={30} src={github} alt="" />Log in with GitHub</button>
            </div>
        </div>
    );
};

export default SocialLogin;