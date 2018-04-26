import React from 'react';
import {connect} from 'react-redux';
import {handleUsername, handlePassword, handleEmail, createAccount} from '../js/actions/index';

let LoginForm = ({state, dispatch}) =>
  <div className="form">
    <form className="register-form">
      <input onChange={(event) => dispatch(handleUsername(event.target.value))} type="text" placeholder="name"/>
      <input onChange={(event) => dispatch(handlePassword(event.target.value))} type="password" placeholder="password"/>
      <input onChange={(event) => dispatch(handleEmail(event.target.value))} type="text" placeholder="email address"/>
      <button onClick={(event) => {event.preventDefault(); return dispatch(createAccount()) }}>create</button>
      <p className="message">Already registered? <a href="#">Sign In</a></p>
    </form>
  </div>
let mapStateToProps = (state) => ({});
let mapDispatchToProps = (dispatch) => ({dispatch});
let LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)(LoginForm);
export default LoginFormContainer;
