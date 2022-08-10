import { Dispatch } from 'redux';

import { IContact } from 'core/models/contact';
import { ContactAction, ContactActionTypes } from 'core/types/contact';

export const setContactsFilter = (filter: string) => {
	return async (dispatch: Dispatch<ContactAction>) => {
		dispatch({ type: ContactActionTypes.SET_CONTACTS });
		setTimeout(() => {
			dispatch({
				type: ContactActionTypes.FILTRATE_CONTACTS,
				payload: filter,
			});
		}, 500);
	};
};

export const updateOrAddContact = (dataContact: IContact) => {
	return async (dispatch: Dispatch<ContactAction>) => {
		dispatch({ type: ContactActionTypes.SET_CONTACTS });
		dispatch({
			type: ContactActionTypes.UPDATE_OR_ADD_CONTACT,
			payload: dataContact,
		});
	};
};

export const removeContact = (idRemovedContact: number) => {
	return async (dispatch: Dispatch<ContactAction>) => {
		dispatch({ type: ContactActionTypes.SET_CONTACTS });
		dispatch({
			type: ContactActionTypes.REMOVE_CONTACT,
			payload: idRemovedContact,
		});
	};
};
