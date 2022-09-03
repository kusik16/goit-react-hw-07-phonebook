import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'https://6311dada19eb631f9d7a495d.mockapi.io'}),
    tagTypes: ['Contacts'],
    endpoints: builder => ({
        getContacts: builder.query({
            query: () => '/contacts',
            providesTags: ['Contacts']
        }),
        createContact: builder.mutation({
            query: contact => ({
                url: '/contacts',
                method: 'POST',
                body: contact
            }),
            invalidatesTags: ['Contacts']
        }),
        deleteContact: builder.mutation({
            query: id => ({
                url: `/contacts/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Contacts']
        })
    })
});

export const {useGetContactsQuery, useCreateContactMutation, useDeleteContactMutation} = apiSlice;