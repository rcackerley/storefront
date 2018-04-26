import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {handlePassword, handleUsername, setToken} from '../js/actions/index';
import {login} from '../ajax/index';


let SignInForm = ({history, username, password, dispatch}) =>
  <div className="form">
    <form className="login-form">
      <input onChange={(event) => dispatch(handleUsername(event.target.value))} type="text" placeholder="username"/>
      <input onChange={(event) => dispatch(handlePassword(event.target.value))} type="password" placeholder="password"/>
      <button onClick={(event) => {
        event.preventDefault();
        login({identifier: username, password: password})
        .then(jwt => dispatch(setToken(jwt)))
        .then(res => history.push("/"))
      }}>login</button>
      <p className="message">Not registered? <Link to="login">Create an account</Link></p>
    </form>
  </div>

let mapStateToProps = state => ({username: state.typedUsername, password: state.typedPassword});
let mapDispatchToProps = dispatch => ({dispatch});

let SignInFormContainer = connect(mapStateToProps,mapDispatchToProps)(SignInForm);
let SignInFormContainerLoc = withRouter(SignInFormContainer)
export default SignInFormContainerLoc;
