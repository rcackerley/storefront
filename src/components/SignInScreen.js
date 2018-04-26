import React from 'react';
import Navbar from './Navbar';
import SignInForm from './SignInForm';

let SignInScreen = () =>
  <div>
    <Navbar />
    <div className="content-center">
      <h2>Sign In</h2>
      <SignInForm />
    </div>
  </div>



export default SignInScreen;
