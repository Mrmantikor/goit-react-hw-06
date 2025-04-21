import { createSlice } from "@reduxjs/toolkit";
import initialContact from "../data/contacts.json";

const slice = createSlice({
  name: "contacts",

  initialState: {
    items: [...initialContact],
  },
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = slice.actions;
export const contactReducer = slice.reducer;
export const selectContacts = (state) => state.contacts.items;
