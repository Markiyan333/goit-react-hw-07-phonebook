import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './slice';
import { filterReducer } from './filter';

const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    filter: filterReducer,
  },
});

export { store };
