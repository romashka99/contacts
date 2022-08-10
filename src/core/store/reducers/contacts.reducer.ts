import { IContact } from 'core/models/contact';
import {
	ContactAction,
	ContactActionTypes,
	IContactState,
} from 'core/types/contact';

const allContacts: IContact[] = [
	{
		id: 1,
		name: 'Alex',
		phone: '+7 (917) 719-41-53',
	},
	{
		id: 2,
		name: '',
		phone: '+79009009999',
	},
	{
		id: 3,
		name: 'Phone 3',
		phone: '+79009009999',
	},
	{
		id: 4,
		name: 'Phone 4',
		phone: '+79009009999',
	},
];

const initialState: IContactState = {
	contacts: allContacts,
	filter: '',
	loading: false,
};

const updateContact = (dataContact: IContact) => {
	const index = allContacts.findIndex(contact => contact.id === dataContact.id);
	if (index > -1) {
		allContacts[index] = dataContact;
	}
};

const addContact = (newContact: IContact) => {
	newContact.id = allContacts.length + 1;
	allContacts.push(newContact);
};

const removeContact = (idRemovedContact: number) => {
	const index = allContacts.findIndex(
		contact => contact.id === idRemovedContact
	);
	if (index > -1) {
		allContacts.splice(index, 1);
	}
};

const filtrateContacts = (filter: string) => {
	if (filter) {
		return allContacts.filter(
			contact =>
				contact.name.toLowerCase().includes(filter.toLowerCase()) ||
				contact.phone.toLowerCase().includes(filter.toLowerCase())
		);
	}
	return allContacts;
};

export const contactReducer = (
	state = initialState,
	action: ContactAction
): IContactState => {
	switch (action.type) {
		case ContactActionTypes.SET_CONTACTS:
			return {
				loading: true,
				contacts: state.contacts,
				filter: state.filter,
			};
		case ContactActionTypes.FILTRATE_CONTACTS:
			const contacts: IContact[] = filtrateContacts(action.payload);
			return {
				loading: false,
				contacts: contacts,
				filter: action.payload,
			};
		case ContactActionTypes.UPDATE_OR_ADD_CONTACT:
			action.payload.id > 0
				? updateContact(action.payload)
				: addContact(action.payload);
			filtrateContacts(state.filter);
			return {
				loading: false,
				contacts: state.contacts,
				filter: state.filter,
			};
		case ContactActionTypes.REMOVE_CONTACT:
			removeContact(action.payload);
			filtrateContacts(state.filter);
			return {
				loading: false,
				contacts: state.contacts,
				filter: state.filter,
			};
		default:
			return state;
	}
};
