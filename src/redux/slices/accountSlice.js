import { createSlice } from '@reduxjs/toolkit';

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


export const { deposit, withdraw } = accountSlice.actions;
export default accountSlice.reducer;