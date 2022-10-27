import { createAction } from '@reduxjs/toolkit';

export const fetchContactLoading = createAction('contacts/fetchContactLoading');
export const fetchContactSuccess = createAction('contacts/fetchContactSuccess');
export const fetchContactError = createAction('contacts/fetchContactError');

export const addContactLoading = createAction('contacts/addContactLoading');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contacts/addContactError');

export const removeContactLoading = createAction(
  'contacts/removeContactLoading'
);
export const removeContactSuccess = createAction(
  'contacts/removeContactSuccess'
);
export const removeContactError = createAction('contacts/removeContactError');

// const actions = {
//   fetchContactLoading,
//   fetchContactSuccess,
//   fetchContactError,
//   addContactLoading,
//   addContactSuccess,
//   addContactError,
//   removeContactLoading,
//   removeContactSuccess,
//   removeContactError,
// };

// export default actions;
