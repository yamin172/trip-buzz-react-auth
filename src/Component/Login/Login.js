import React, { useContext } from 'react';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    const provider = new firebase.auth.GoogleAuthProvider();
    console.log(from)

    const handleGoogleSignIn = () => {

        
        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                var { displayName, email } = result.user;
                const signedInUser = { displayName, email };
                setLoggedInUser(signedInUser);
                console.log(signedInUser)
                history.replace(from);
            })
        .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            console.log(errorCode)
            const errorMessage = error.message;
            console.log(errorMessage)
            // The email of the user's account used.
            const email = error.email;
            console.log(email)
            // The firebase.auth.AuthCredential type that was used.
            const credential = error.credential;
            console.log(credential)
            // ...
        });
    }
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <div className="card p-5">
                        <form>
                            <h3 className="text-center">Login</h3>

                            <input type="email" name="email" placeholder="Email" className="form-control mb-2" id="" required/>
                            <input type="password" name="password" placeholder="Password" className="form-control mb-2" id="" required/>
                            <input type="submit" value="Login" className="btn btn-success btn-block" />
                            
                        </form>
                        <p className="text-center mt-4">
                            Don't have an account? 
                            <span className="text-primary" style={{cursor: 'pointer'}}> Create a new account</span>
                        </p>
                    </div>
                    <div className="col-md-6 mx-auto">
                        <div className="mt-5">
                            <button className="btn-light border-0 btn-google" onClick={handleGoogleSignIn}><img src="https://image.flaticon.com/icons/png/512/281/281764.png" className="google-icon" alt="icon"/> Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;