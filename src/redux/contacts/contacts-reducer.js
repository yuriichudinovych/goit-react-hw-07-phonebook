import { createReducer, combineReducers } from '@reduxjs/toolkit';
import * as contactsActions from './contacts-actions';

export const items = createReducer([], {
  [contactsActions.fetchContactSuccess]: (_, action) => action.payload,
});

export const isLoading = createReducer(false, {
  [contactsActions.fetchContactLoading]: () => true,
  [contactsActions.fetchContactSuccess]: () => false,
  [contactsActions.fetchContactError]: () => false,
});

const error = createReducer(null, {
  [contactsActions.fetchContactError]: (_, action) => action.payload,
});

export default combineReducers({
  items,
  isLoading,
  error,
});
