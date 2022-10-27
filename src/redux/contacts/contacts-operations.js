import * as contactsActions from './contacts-actions';
import * as contactsAPI from '../../services/contacts/api';

export const fetchContacts = () => async dispatch => {
  dispatch(contactsActions.fetchContactLoading());

  try {
    const contacts = await contactsAPI.fetchContacts();
    dispatch(contactsActions.fetchContactSuccess(contacts));
  } catch (error) {
    dispatch(contactsActions.fetchContactError(error.message));
  }
};

export const addContact = data => async dispatch => {
  dispatch(contactsActions.fetchContactLoading());

  try {
    const contacts = await contactsAPI.fetchContacts(data);
    dispatch(contactsActions.fetchContactSuccess(contacts));
  } catch (error) {
    dispatch(contactsActions.fetchContactError(error.message));
  }
};
