import React, { useState } from "react";				// added useState for sign up confirmation
import { auth } from "./../firebase.js";				// added for sign up
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";		// added for sign up, added for sign in

function SignIn() {  

	const [signUpSuccess, setSignUpSuccess] = useState(null);			// this added for profile sign up
	const [signInSuccess, setSignInSuccess] = useState(null);			// new state variable for sign in
	
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
    </React.Fragment>
  );
}

export default SignIn