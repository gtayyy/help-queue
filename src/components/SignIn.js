import React, { useState } from "react";				// added useState for sign up confirmation
import { auth } from "./../firebase.js";				// added for sign up
import { createUserWithEmailAndPassword } from "firebase/auth";		// added for sign up

function SignIn() {  

	const [signUpSuccess, setSignUpSuccess] = useState(null);			// this added for profile sign up

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
    </React.Fragment>
  );
}

export default SignIn