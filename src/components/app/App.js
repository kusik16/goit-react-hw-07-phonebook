import { useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

import ContactForm from '../contactForm/ContactForm';
import Filter from '../filter/Filter';
import ContactList from '../contactList/ContactList';

import { setFilter } from '../filter/contactsSlice';
import {
	useCreateContactMutation,
	useDeleteContactMutation,
	useGetContactsQuery,
} from '../../api/apiSlice';

import app from './App.module.css';

const App = () => {
	const { filter } = useSelector(state => state.contacts);
	const dispatch = useDispatch();

	const [createContact] = useCreateContactMutation();
	const [deleteContact] = useDeleteContactMutation();
	const { data: contacts = [] } = useGetContactsQuery();

	const onFilter = e => {
		dispatch(setFilter(e.target.value));
	};

	const onAddContact = (name, number) => {
		if (contacts.filter(contact => contact.name === name).length >= 1) {
			alert(`${name} is already in contacts`);
			return;
		}

		if (contacts.filter(contact => contact.number === number).length >= 1) {
			alert(`${number} is already in contacts`);
			return;
		}

		const newUser = {
			name,
			number,
			id: nanoid(),
		};

		createContact(newUser).unwrap();
	};

	const onDeleteContact = useCallback(id => {
		deleteContact(id);
		// eslint-disable-next-line
	}, []);

	const filteredContacts = useMemo(() => {
		const filteredContacts = contacts.slice();

		if (!filter) {
			return filteredContacts;
		} else {
			return filteredContacts.filter(
				contact =>
					contact.name.toLowerCase().includes(filter.toLowerCase()) ||
					(contact.number + '').includes(filter)
			);
		}
	}, [contacts, filter]);

	return (
		<div>
			<h1 className={app.title}>Phonebook</h1>
			<ContactForm onAddContact={onAddContact} />
			<h2 className={app.title}>Contacts</h2>
			<Filter onFilter={onFilter} />
			<ContactList
				filteredContacts={filteredContacts}
				onDeleteContact={onDeleteContact}
			/>
		</div>
	);
};

export default App;
