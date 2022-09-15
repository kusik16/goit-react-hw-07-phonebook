import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    filter: ''
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
        addContact: (state, action) => {
            state.items = [...state.items, action.payload];
        },
        deleteContact: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        }
    },
});

const {actions, reducer} = contactsSlice;

export default reducer;

export const {
    setFilter,
    addContact,
    deleteContact
} = actions;