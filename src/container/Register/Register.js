import React from 'react';

const Register = () => {
    return (
        <div className="container">
            <h1 className="text-center text-muted">Registration Panel</h1>
            <div className="row bg-info p-2">
                <div className="col-6">
                    <img className="img-fluid" src="https://i.ibb.co/wB5md78/undraw-Mobile-login-re-9ntv.png" alt="" />
                </div>
                <div className="col-6">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Your Name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="email" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" />
                        </div>
                        <div className="text-end">
                            <button type="submit" className="btn btn-outline-warning fw-bold text-light d-inline-block">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;