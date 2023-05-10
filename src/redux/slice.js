import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

import {
  handlePending,
  handleRejected,
  handleFulfilled,
  handlePushFulfilled,
  handleDeleteFulfilled,
} from 'redux/initial';

const initialStateContacts = { items: [], isLoading: false, error: null };

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialStateContacts,

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, handleFulfilled)
      .addCase(fetchContacts.rejected, handleRejected)

      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, handlePushFulfilled)
      .addCase(addContact.rejected, handleRejected)

      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, handleDeleteFulfilled)
      .addCase(deleteContact.rejected, handleRejected);
  },
});
