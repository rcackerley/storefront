import React from 'react';
import {connect} from 'react-redux';

let Profile = ({token}) => {
  console.log(token)
  if (token) {
    console.log(token.user.username)
    return <span>{token.user.username}</span>
  } else {
    return null
  }
}

let mapStateToProps = state => ({token: state.token});
let ProfileContainer = connect(mapStateToProps)(Profile);
export default ProfileContainer;
