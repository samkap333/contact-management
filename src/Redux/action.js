import { ADD_CONTACT, EDIT_CONTACT, REMOVE_CONTACT } from './actionTypes';

// Action creator function for adding a contact
export const addContact = (payload) => {
  console.log(payload); // Log the payload for debugging purposes
  return {
    type: ADD_CONTACT, // Action type constant
    payload, // Data payload
  };
};

// Action creator function for removing a contact
export const removeContact = (id) => {
  return {
    type: REMOVE_CONTACT, // Action type constant
    payload: {
      id, // ID of the contact to be removed
    },
  };
};

// Action creator function for editing a contact
export const editContact = (payload) => {
  console.log(payload); // Log the payload for debugging purposes
  return {
    type: EDIT_CONTACT, // Action type constant
    payload, // Updated data for the contact
  };
};
