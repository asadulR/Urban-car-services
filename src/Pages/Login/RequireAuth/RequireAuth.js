import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import toast, { Toaster } from 'react-hot-toast';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const RequireAuth = ({ children }) => {

    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    const [user, loading] = useAuthState(auth);
    let location = useLocation();
    if (loading) {
        return <Loading />
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    };

    if (user.providerData[0]?.providerId ==='password' && !user.emailVerified) {
        return <div className='text-center mt-5 pt-5'>
            <h3 className='text-danger'>Your email is not verified!</h3>
            <h5 className='text-success'>Please Verify your email address</h5>
            <button className='btn btn-primary'
                onClick={async () => {
                    await sendEmailVerification();
                    toast('Sent email');
                }}
            >
                Verify email
            </button>
            <Toaster/>
        </div>
    }
    return children;
};

export default RequireAuth;