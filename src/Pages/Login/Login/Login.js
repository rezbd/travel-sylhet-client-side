import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div className="my-5 py-5">
            <h2>Please Login</h2>
            <button onClick={signInUsingGoogle} className="btn btn-warning my-5 fs-4">Sign in with <i className="fab fa-google">oogle</i></button>
        </div>
    );
};

export default Login;