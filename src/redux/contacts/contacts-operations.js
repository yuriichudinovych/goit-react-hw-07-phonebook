import * as contactsAPI from '../../services/contacts/api';

import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkApi) => {
    try {
      const data = await contactsAPI.fetchContacts();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (data, thunkApi) => {
    try {
      const result = await contactsAPI.addContact(data);
      return result;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const removeContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkApi) => {
    try {
      await contactsAPI.deleteContact(id);
      return id;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
