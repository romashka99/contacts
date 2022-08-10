import { IUser } from 'core/models/user';

export const login = (username: string, password: string) => {
	return new Promise((resolve, reject) => {
		const user: IUser = {
			id: 1,
			username: 'admin',
		};
		username && password
			? setTimeout(() => {
					resolve(user);
			  }, 1000)
			: reject(new Error('Incorrect data'));
	});
};

export const logout = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(null);
		}, 500);
	});
};
