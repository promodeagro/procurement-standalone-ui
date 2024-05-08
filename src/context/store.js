"use client";
import { configureStore } from"@reduxjs/toolkit";
import catalogReducer from "./AddItemsSlice/addItemsSlice"
// import addResourceReduser from "./AddresourcesSlice/addresourcesSlice";


// import todoReducer from './todoSlice'
export const store = configureStore({
  reducer: {catalog: catalogReducer,
  },
});