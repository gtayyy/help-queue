import React, { useState } from "react";				// added useState for sign up confirmation
import { auth } from "./../firebase.js";				// added for sign up
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";		// added for sign up, added for sign in, added signOut

function SignIn() {  

	const [signUpSuccess, setSignUpSuccess] = useState(null);			// new state var for profile sign up
	const [signInSuccess, setSignInSuccess] = useState(null);			// new state variable for sign in
	const [signOutSuccess, setSignOutSuccess] = useState(null); 	// new state var for sign out
	
	function doSignUp(event) {								// this added for profile sign up
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setSignUpSuccess(`You've successfully signed up, ${userCredential.user.email}!`)    // User successfully signed up 
      })
			.catch((error) => {
				setSignUpSuccess(`There was an error signing up: ${error.message}!`)					// There was an error with sign up
      });
	}

	function doSignIn(event) {						// new func for sign in
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setSignInSuccess(`You've successfully signed in as ${userCredential.user.email}!`)
      })
      .catch((error) => {
        setSignInSuccess(`There was an error signing in: ${error.message}!`)
      });
	}
	
	function doSignOut() {						// new function for sign out 
    signOut(auth)
      .then(function() {
        setSignOutSuccess("You have successfully signed out!");
      }).catch(function(error) {
        setSignOutSuccess(`There was an error signing out: ${error.message}!`);
      });
  }
	
  return (
    <React.Fragment>
			<h1>Sign up</h1>
			{signUpSuccess}						{/*add for confirmation + error handling*/}
      <form onSubmit={doSignUp}>
        <input
          type='text'
          name='email'
          placeholder='email' />
        <input
          type='password'
          name='password'
          placeholder='Password' />
        <button type='submit'>Sign up</button>
			</form>
			<h1>Sign In</h1>								{/*this form for sign-in after sign up successful*/}
      {signInSuccess}						{/*new sign in success message*/}
			<form onSubmit={doSignIn}>
        <input
          type='text'
          name='signinEmail'
          placeholder='email' />
        <input
          type='password'
          name='signinPassword'
          placeholder='Password' />
        <button type='submit'>Sign in</button>
			</form>
			<h1>Sign Out</h1>					{/*new sign out button*/}
      {signOutSuccess}
      <br />
      <button onClick={doSignOut}>Sign out</button>
    </React.Fragment>
  );
}

export default SignIn