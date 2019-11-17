import React, { useReducer } from 'react';
import uuid from 'uuid';     
import axios from 'axios';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import {                       
  REGISTER_SUCCESS,
  REGISTER_FAIL
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
  const loadUser = () => console.log('loaduser');

  // Register User
  // Add headers to a request
  const register = async formData => {
    const config ={
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.post('api/users', formData, config);

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.msg
      });
    }
  }

  // Login User
  const loginUser = () => console.log('loginUser');

  // Logout
  const logoutUser = () => console.log('logoutUser');

  // Clear Errors
  const clearErrors = () => console.log('clearErrors');

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isauthenticated: state.isauthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        register,
        loadUser,
        loginUser,
        logoutUser,
        clearErrors
      }}
    >
      {props.children}
    </AuthContext.Provider>
  ); 
}

export default AuthState;
