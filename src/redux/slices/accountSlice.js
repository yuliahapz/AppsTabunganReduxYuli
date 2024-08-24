import { createSlice } from '@reduxjs/toolkit';

// Create the account slice
const accountSlice = createSlice({
  name: 'account',
  initialState: {
    tabungan: 0,
  },
  reducers: {
    deposit(state, action) {
      state.tabungan += action.payload;
    },
    withdraw(state, action) {
      state.tabungan -= action.payload;
    },
  },
});

// Export actions and reducer
export const { deposit, withdraw } = accountSlice.actions;
export default accountSlice.reducer;