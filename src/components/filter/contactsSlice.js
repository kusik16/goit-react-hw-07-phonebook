import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filter: ''
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        setFilter: (state, action) => {
            state.filter = action.payload;
        }
    },
});

const {actions, reducer} = contactsSlice;

export default reducer;

export const {
    setFilter
} = actions;