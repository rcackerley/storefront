import React from 'react';
import Navbar from './Navbar';
import LoginForm from './LoginForm';

let LoginScreen = () =>
  <div>
    <Navbar />
    <div className="content-center">
      <h2>Login</h2>
      <LoginForm />
    </div>
  </div>


export default LoginScreen;
