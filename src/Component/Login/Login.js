import React from 'react';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

firebase.initializeApp(firebaseConfig);

const Login = () => {

    const provider = new firebase.auth.GoogleAuthProvider();
    const handleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
            .then(res => {
                const { displayName, email, photoURL } = res.user;
            console.log(displayName, email, photoURL);
            })
            .catch(err => {
                console.log(err);
                console.log(err.message);
        })
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <div className="card p-5">
                        <form action="">
                            <h3 className="text-center">Login</h3>

                            <input type="email" name="" placeholder="Email" className="form-control mb-2" id="" />
                            <input type="password" name="" placeholder="Password" className="form-control mb-2" id="" />
                            <div className="d-grid">
                                <button type="submit" className="btn btn-success btn-block">Login</button>
                            </div>
                        </form>
                        <p className="text-center mt-4">
                            Don't have an account? 
                            <span className="text-primary" style={{cursor: 'pointer'}}> Create a new account</span>
                        </p>
                    </div>
                    <div className="col-md-6 mx-auto">
                        <div className="mt-5">
                            <button className="btn-light border-0 btn-google" onClick={handleSignIn}><img src="https://image.flaticon.com/icons/png/512/281/281764.png" className="google-icon" alt="icon"/> Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;