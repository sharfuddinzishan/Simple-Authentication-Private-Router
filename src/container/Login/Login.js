import React from 'react';
import useAuth from './../../Hooks/useAuth';

const Login = () => {
    const { signInGoogle } = useAuth()
    return (
        <div className="container">
            <h1 className="text-center text-muted">Login Panel</h1>
            <div className="row bg-info p-2">
                <div className="col-6">
                    <img className="img-fluid" src="https://i.ibb.co/wB5md78/undraw-Mobile-login-re-9ntv.png" alt="" />
                </div>
                <div className="col-6">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="email" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" />
                        </div>
                        <div className="text-end">
                            <button type="submit" className="btn btn-primary d-inline-block">Login</button>
                        </div>
                    </form>
                    <div className="text-center">
                        <button onClick={signInGoogle} className="btn btn-link text-light text-decoration-none">Sign In Gmail</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;