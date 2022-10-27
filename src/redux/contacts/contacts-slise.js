import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addContacts: {
      reducer(state, { payload }) {
        state.push(payload);
      },
      prepare(data) {
        return {
          payload: {
            ...data,
            id: nanoid(),
          },
        };
      },
    },
    removeContacts: (store, { payload }) =>
      store.filter(({ id }) => id !== payload),
  },
});

export const { addContacts, removeContacts } = contactsSlice.actions;

export default contactsSlice.reducer;
