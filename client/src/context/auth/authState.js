import React, { useReducer } from 'react';
import uuid from 'uuid';     
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import {                       
  // Add later...
} from '../types';  

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem('token'),
    isauthenticated: null,
    loading: true,
    user: null,
    error: null
  }

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  // Load User

  // Register User

  // Login User

  // Logout

  // Clear Errors

  return (
    <AuthContext.Provider
      value={{
       token: state.token,
       isauthenticated: state.isauthenticated,
       loading: state.loading,
       user: state.user,
       error: state.error
      }}
    >
      {props.children}
    </AuthContext.Provider>
  ); 
}

export default AuthState;
