// catalogSlice.js

import { createSlice } from '@reduxjs/toolkit';

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState: {
    selectedData: [
    ],
  },
  reducers: {
    setSelectedDataReducer: (state, action) => {
      state.selectedData = action.payload;
      console.log(action.payload)
    },
  },
});

export const { setSelectedDataReducer } = catalogSlice.actions;

export default catalogSlice.reducer;
