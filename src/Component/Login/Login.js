import React from 'react';

const Login = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <div className="card p-5">
                        <form action="">
                            <h3 className="text-center">Creat new account</h3>
                            <input type="text" placeholder="First Name" className="form-control mb-2"/>
                            <input type="text" placeholder="Last Name" className="form-control mb-2" />
                            <input type="email" name="" placeholder="Email" className="form-control mb-2" id="" />
                            <input type="password" name="" placeholder="Password" className="form-control mb-2" id="" />
                            <input type="password" name="" placeholder="Confirm Password" className="form-control mb-2" id="" />
                            <div className="d-grid">
                                <button type="submit" className="btn btn-success btn-block">Sign Up</button>
                            </div>
                        </form>
                        <p className="text-center mt-4">
                            Already have an account? 
                            <span className="text-primary cursor-pointer"> Login</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;