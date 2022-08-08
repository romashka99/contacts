import { IContact } from 'core/models/contact';

export const getContacts = () => {
	return new Promise((resolve, reject) => {
		const contacts: IContact[] = [
			{
				id: 1,
				name: 'Phone 1',
				phone: '+79009009999',
			},
		];
		setTimeout(() => {
			resolve(contacts);
		}, 1000);
	});
};
