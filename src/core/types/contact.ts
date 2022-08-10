import { IContact } from 'core/models/contact';

export const emptyContact: IContact = {
	id: 0,
	name: '',
	phone: '',
};

export interface IContactState {
	contacts: IContact[];
	filter: string;
	loading: boolean;
}

export enum ContactActionTypes {
	SET_CONTACTS = 'SET_CONTACTS',
	SET_CONTACTS_SUCCESS = 'SET_CONTACTS_SUCCESS',
	SET_CONTACTS_ERROR = 'SET_CONTACTS_ERROR',
	FILTRATE_CONTACTS = 'FILTRATE_CONTACTS',
	UPDATE_OR_ADD_CONTACT = 'UPDATE_OR_ADD_CONTACT',
	REMOVE_CONTACT = 'REMOVE_CONTACT',
}

interface ISetContactsAction {
	type: ContactActionTypes.SET_CONTACTS;
}

interface ISetContactsSuccessAction {
	type: ContactActionTypes.SET_CONTACTS_SUCCESS;
	payload: IContact[];
}

interface ISetContactsErrorAction {
	type: ContactActionTypes.SET_CONTACTS_ERROR;
	payload: string;
}

interface IFilteredContactsAction {
	type: ContactActionTypes.FILTRATE_CONTACTS;
	payload: string;
}

interface IUpdateOrAddContactAction {
	type: ContactActionTypes.UPDATE_OR_ADD_CONTACT;
	payload: IContact;
}

interface IRemoveContactAction {
	type: ContactActionTypes.REMOVE_CONTACT;
	payload: number;
}

export type ContactAction =
	| ISetContactsAction
	| ISetContactsSuccessAction
	| ISetContactsErrorAction
	| IFilteredContactsAction
	| IUpdateOrAddContactAction
	| IRemoveContactAction;
