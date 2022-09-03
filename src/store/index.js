import { configureStore } from '@reduxjs/toolkit';
import contacts from '../components/filter/contactsSlice';
import { apiSlice } from '../api/apiSlice';

const store = configureStore({
	reducer: { contacts, [apiSlice.reducerPath]: apiSlice.reducer },
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat( apiSlice.middleware),
	devTools: process.env.NODE_ENV !== 'production',
});

export default store;
