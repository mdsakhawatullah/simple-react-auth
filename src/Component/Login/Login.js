import React, { useState ,useEffect, useContext} from 'react';
import './Login.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import Destination from '../Destination/Destination';
import LoginDetail from './LoginDetail';
import {Redirect} from 'react-router-dom';
firebase.initializeApp(firebaseConfig);


const Login = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [hasAccount, setHasAccount] = useState(false);
  //  const history = useHistory();
  //  const location = useLocation();
   // const { from } = location.state || { from: { pathname: "/" } };
 
   //google sign
   const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
.signInWithPopup(provider)
.then((result) => {
/** @type {firebase.auth.OAuthCredential} */
var credential = result.credential;


var token = credential.accessToken;



}).catch((error) => {

var errorCode = error.code;
var errorMessage = error.message;

var email = error.email;

var credential = error.credential;

});
}

   /////////////


    const clearInputs = () => {
      setEmail("");
      setPassword("");
    };
  
    const clearErrors = () => {
      setEmailError("");
      setPasswordError("");
    };
  
    const handleLogin = () => {
      clearErrors();
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((result) => {
            const signedInUser = {Email:email}
        setLoggedInUser(signedInUser)
     //   history.replace(from);
          })
        .catch((err) => {
          switch (err.code) {
            case "auth/invalid-email":
            case "auth/user-disabled":
            case "auth/user-not-found":
              setEmailError(err.message);
              break;
            case "auth/wrong-password":
              setPasswordError(err.message);
              break;
          }
        });
    };
  
    const handleSignup = () => {
      clearErrors();
      firebase
        .auth()
        .createUserWithEmailAndPassword(email,password)
        .catch((err) => {
          switch (err.code) {
            case "auth/email-already-in-use":
            case "auth/invalid-email":
              setEmailError(err.message);
              break;
            case "auth/weak-password":
              setPasswordError(err.message);
              break;
          }
        });
    };
  
    const handleLogout = () => {
      firebase.auth().signOut();
    };
  
    const authListener = () => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          clearInputs();
          setUser(user);
        } else {
          setUser("");
        }
      });
    };
  
    useEffect(() => {
      authListener();
    }, []);
  
    
  return(
<>

             <LoginDetail
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleLogin={handleLogin}
        handleSignup={handleSignup}
        hasAccount={hasAccount}
        setHasAccount={setHasAccount}
        emailError={emailError}
        passwordError={passwordError}
      />
     
         
  </>     
  );      
             

 
};




export default Login;