import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    return (
        <div className="my-5 py-5">
            <h2>Please Login</h2>
            <button onClick={handleGoogleLogin} className="btn btn-warning my-5 fs-4">Sign in with <i className="fab fa-google">oogle</i></button>
        </div>
    );
};

export default Login;