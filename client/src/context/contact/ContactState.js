import React, { useReducer } from 'react';
import uuid from 'uuid';     
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {                       
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CURRENT,
  FILTER_CURRENT,
  CLEAR_FILTER,
  SET_ALERT,
  REMOVE_ALERT
} from '../types';  

const ContactState = props => {
  const initialState = {
    contacts: 
    [
      {
        id: '1',
        name: 'Abby 001',
        email: 'abby_001@gmail.com',
        phone: '111-111-111',
        type: 'personal'
      },
      {
        id: '2',
        name: 'Abby 002',
        email: 'abby_002@gmail.com',
        phone: '222-222-222',
        type: 'personal'
      }
    ]	
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact
  const addContact = contact => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  // Delete Contact
  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  // Set Current Contact

  // Clear Current Contact

  // Update Contact

  // Filter Contact

  // Cleat Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact,
        deleteContact
      }}
    >
      {props.children}
    </ContactContext.Provider>
  ); 
};

export default ContactState;
