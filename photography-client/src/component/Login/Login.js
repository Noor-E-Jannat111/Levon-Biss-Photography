import firebase from "firebase/app";
import "firebase/auth";
import { useContext, useState } from 'react';
import { useHistory, useLocation } from "react-router";
import { UserContext } from "../../App";
import { Form, Button } from 'react-bootstrap';
import firebaseConfig from "../firebase.config";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const [newUser, setNewUser] = useState(false)
    const [user, setUser] = useState(
        {
            isSignedIn: false,
            displayName: '',
            email: '',
            photoURL: '',
            name: '',
            password: '',
            confirm_password: '',
            error: '',
            success: false,
        }
    )
    console.log(user)
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const fbProvider = new firebase.auth.FacebookAuthProvider();

    
    const googleSignIn = () => {
        firebase.auth().signInWithPopup(googleProvider)
            .then(res => {
                const { displayName, email, photoURL } = res.user
                const signedInUser = {
                    isSignedIn: true,
                    displayName: displayName,
                    email: email,
                    photoURL: photoURL,
                }
                setUser(signedInUser)
                setLoggedInUser(signedInUser)
                history.replace(from);

            })
    }

    
    console.log(user)

    const handleBlur = (event) => {
        let isFieldValid = true;
        if (event.target.name === "email") {
            isFieldValid = /\S+@\S+\.\S+/.test(event.target.value)
        }
        if (event.target.name === "password") {
            isFieldValid = /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{6,20}$/.test(event.target.value)
        }
        if (event.target.name === "confirm_password") {
            isFieldValid = /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{6,20}$/.test(event.target.value)
        }
        if (isFieldValid) {
            const newUserInfo = { ...user }
            newUserInfo[event.target.name] = event.target.value
            setUser(newUserInfo)
        }
    }
    const handleSubmit = (e) => {

        if (newUser && user.email && user.password) {

            if (user.password !== user.confirm_password) {
                const newUserInfo = { ...user }
                newUserInfo.error = "Password did not match : Please try again..."
                setUser(newUserInfo)

            } else {
                firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                    .then((res) => {
                        const errorMessage = '';
                        const newUserInfo = { ...user }
                        newUserInfo.error = errorMessage
                        newUserInfo.success = true
                        setUser(newUserInfo)
                        console.log(errorMessage)
                        console.log(user.name)
                        updateUserName(user.name)
                        setLoggedInUser(newUserInfo)
                        history.replace(from)
                    })
                    .catch((error) => {
                        const errorMessage = error.message;
                        const newUserInfo = { ...user }
                        newUserInfo.error = errorMessage
                        newUserInfo.success = false
                        setUser(newUserInfo)
                        console.log(errorMessage)
                    });
            }


        }
        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then((res) => {
                    // Signed in
                    const errorMessage = '';
                    const newUserInfo = { ...user }
                    newUserInfo.error = errorMessage
                    newUserInfo.success = true
                    console.log(newUserInfo);
                    setUser(newUserInfo)
                    console.log("sign in user info ", res.user)
                    setLoggedInUser(newUserInfo)
                    history.replace(from)
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    const newUserInfo = { ...user }
                    newUserInfo.error = "SignUp First !! Please try again..."
                    newUserInfo.success = false
                    setUser(newUserInfo)
                    console.log(errorMessage)
                });
        }
        e.preventDefault()
    }
    const updateUserName = (name) => {
        console.log(name)
        const user = firebase.auth().currentUser;
        user.updateProfile({
            displayName: name,
        }).then(function () {
            console.log("Update successful.")
        }).catch(function (error) {
            console.log(error)
        });
    }
    console.log(user.displayName)
    return (
        <div>
            <div class="d-flex justify-content-center m-5 ">
                <Form onSubmit={handleSubmit} >
                    <div class="my-3">
                        <h5>{newUser ? 'Create an account' : "Log In"}</h5>
                    </div>
                    <Form.Group controlId="formBasicEmail">

                        {
                            newUser && <Form.Group controlId="formBasicName">
                                <Form.Control type="text" name="name" onBlur={handleBlur} onFocus={handleBlur} placeholder="Name" required />
                            </Form.Group>
                        }
                    </Form.Group> <br />

                    <Form.Group controlId="formBasicEmail" >
                        <Form.Control type="email" name='email' onBlur={handleBlur} onFocus={handleBlur} placeholder="Email" required />
                    </Form.Group> <br />
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="password" name="password" onBlur={handleBlur} placeholder="Password" required />
                        {
                            newUser && <span id="passwordHelpBlock" class="form-text text-muted ">
                                Your password must be 6-20 characters long, contain letters and numbers.
                            </span>
                        }
                    </Form.Group>
                    <Form.Group>
                        {
                            user.success ? <p style={{ color: 'green' }}> user {newUser ? 'created' : 'logged In'} successfully</p> :
                                <p style={{ color: 'red' }}> {user.error}</p>
                        }
                    </Form.Group>
                    {
                        newUser && <Form.Group controlId="formBasicEmail">
                            <Form.Control type="password" name="confirm_password" onBlur={handleBlur} placeholder="Confirm Password" required />
                        </Form.Group>
                    }
                    {
                        newUser && <div> <br /></div>
                    }
                    <Button type="submit" >{newUser ? "Sign up" : "Log In"}</Button>
                    <Form.Group>
                        <label htmlFor="newUser">{newUser ? 'Already have an account ?' : "Don't Have an Account ?"} </label>
                        <button style={{ background: 'none', color: 'red', outline: 'none', border: 'none', textDecoration: 'underline', fontSize: '20px' }}
                            onClick={() => setNewUser(!newUser)} name="newUser">{newUser ? 'signIn' : 'create an account'}</button>
                    </Form.Group>
                    <hr />
                    <Form.Group>
                        <button onClick={googleSignIn} type="button" class="btn btn-outline-success"><FontAwesomeIcon icon={faGoogle} />
                            <span class="p-4">Continue with Google</span>
                        </button>
                    </Form.Group>
                   
                </Form>
            </div>

            <div class="text-center">
                Copyright ©️ 2021 All rights reserved | By Jannat
            </div>

        </div>
    );
};

export default Login;