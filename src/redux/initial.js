export const handlePending = state => {
  state.isLoading = true;
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.items = payload;
};

export const handlePushFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.items.push(payload);
};

export const handleDeleteFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  const index = state.items.findIndex(contact => contact.id === payload.id);
  state.items.splice(index, 1);
};
