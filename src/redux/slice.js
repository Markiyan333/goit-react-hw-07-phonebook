import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
import {
  handlePending,
  handleRejected,
  handleFulfilled,
  handlePushFulfilled,
  handleDeleteFulfilled,
} from 'redux/initial';

// Витягнемо ініціал стейт до окремої змінної
const initialStateContacts = {
  items: [],
  isLoading: false,
  error: null,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialStateContacts,

  reducers: {},

  extraReducers: builder => {
    builder
      .addMatcher(
        action =>
          [
            fetchContacts.pending,
            addContact.pending,
            deleteContact.pending,
          ].includes(action.type),
        handlePending
      )
      .addMatcher(
        action =>
          [
            fetchContacts.rejected,
            addContact.rejected,
            deleteContact.rejected,
          ].includes(action.type),
        handleRejected
      )
      .addMatcher(
        action => action.type === fetchContacts.fulfilled.type,
        handleFulfilled
      )
      .addMatcher(
        action => action.type === addContact.fulfilled.type,
        handlePushFulfilled
      )
      .addMatcher(
        action => action.type === deleteContact.fulfilled.type,
        handleDeleteFulfilled
      );
  },
});
