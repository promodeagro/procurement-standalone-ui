// catalogSlice.js

import { createSlice } from '@reduxjs/toolkit';

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState: {
    selectedData: [],
  },
  reducers: {
    setSelectedData: (state, action) => {
      state.selectedData = action.payload;
      console.log(action.payload)
    },
  },
});

export const { setSelectedData } = catalogSlice.actions;

export default catalogSlice.reducer;
