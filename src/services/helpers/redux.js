export const pendingCallback = state => {
  state.isLoading = true;
};

export const rejectedCallback = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
